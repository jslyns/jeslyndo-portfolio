
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Globe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    
    if (width === 0 || height === 0) return;

    // 1. Setup Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100); // Aspect 1:1 forced
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // Transparent
    
    // Append safely
    const container = containerRef.current;
    container.innerHTML = ''; // Clear any existing ghost canvas
    container.appendChild(renderer.domElement);

    // 2. Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const hemi = new THREE.HemisphereLight(0xEBF4FF, 0xffffff, 1.2);
    scene.add(hemi);
    const key = new THREE.DirectionalLight(0xffffff, 1.1);
    key.position.set(3, 5, 4);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xE6EEFF, 0.8);
    fill.position.set(-3, -1, -3);
    scene.add(fill);

    // 3. Geometry
    const R = 1.70;
    const geo = new THREE.SphereGeometry(R, 64, 64);
    
    // Gradient Vertex Colors
    const cTop = new THREE.Color("#F8FBFF");
    const cBot = new THREE.Color("#D6E4FF");
    const pos = geo.attributes.position;
    const colors = new Float32Array(pos.count * 3);
    
    for (let i = 0; i < pos.count; i++) {
      const t = (pos.getY(i) + R) / (2 * R);
      const c = cBot.clone().lerp(cTop, t);
      colors[i * 3 + 0] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    // 4. Material & Shader
    const uniforms = {
      uCols: { value: 8 },
      uRows: { value: 5 },
      uHoverTile: { value: new THREE.Vector2(-10, -10) },
      uHoverAmt: { value: 0 },
      uEdgeWidth: { value: 0.030 },
      uEdgeSoftness: { value: 0.006 },
      uGlowColor: { value: new THREE.Color("#A3C7F7") },
      uGlowStrength: { value: 1.20 },
      uDesatBase: { value: 0.45 },
      uTint: { value: new THREE.Color("#C2D9FC") },
      uBaseBlue: { value: new THREE.Color("#EBF4FF") },
      uHoverRow: { value: 2.0 },
      uSatBoost: { value: 1.15 }
    };

    const mat = new THREE.MeshStandardMaterial({
      map: null, 
      vertexColors: true, 
      roughness: 0.5, 
      metalness: 0.1,
      emissive: new THREE.Color("#E6EEFF"), 
      emissiveIntensity: 0.2, 
      transparent: true
    });

    // 5. Dummy Texture (TRANSPARENT now, to avoid white globe artifact)
    const data = new Uint8Array([0, 0, 0, 0]); 
    const dummy = new THREE.DataTexture(data, 1, 1, THREE.RGBAFormat);
    dummy.needsUpdate = true;
    mat.map = dummy;

    mat.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, uniforms);
      shader.fragmentShader = shader.fragmentShader
        .replace("#include <common>", `
          #include <common>
          vec3 _srgb2lin(vec3 c){ return pow(c, vec3(2.2)); }
          vec3 _boostSat(vec3 c, float s){
            float g = dot(c, vec3(0.2126,0.7152,0.0722)); vec3 gray = vec3(g);
            return clamp((c - gray) * s + gray, 0.0, 1.0);
          }
          uniform float uCols,uRows; uniform vec2 uHoverTile; uniform float uHoverAmt;
          uniform float uEdgeWidth,uEdgeSoftness; uniform vec3 uGlowColor; uniform float uGlowStrength;
          uniform float uDesatBase; uniform vec3 uTint,uBaseBlue; uniform float uHoverRow,uSatBoost;
        `)
        .replace("#include <map_fragment>", `
          #ifdef USE_MAP
            vec2 uv = vMapUv;
            vec4 texelColor = texture2D(map, uv);
            texelColor.rgb = _srgb2lin(texelColor.rgb);

            vec2 tiled  = vec2(uv.x*uCols, uv.y*uRows);
            vec2 tid    = floor(tiled);
            vec2 within = fract(tiled);

            float isHover = 1.0 - step(0.5, length(tid - uHoverTile));
            float isRow   = 1.0 - step(0.5, abs(tid.y - uHoverRow));
            float revealGate = isHover * isRow * uHoverAmt;

            float g = dot(texelColor.rgb, vec3(0.2126,0.7152,0.0722));
            vec3 desatBase = mix(texelColor.rgb, vec3(g), uDesatBase);
            vec3 tinted    = desatBase * uTint;

            vec3 boosted   = _boostSat(texelColor.rgb, uSatBoost);
            vec3 reveal    = mix(tinted, boosted, revealGate);

            float edgeDist = min(min(within.x,1.0-within.x), min(within.y,1.0-within.y));
            float glowBand = smoothstep(uEdgeWidth + uEdgeSoftness, uEdgeWidth, edgeDist);
            glowBand = pow(glowBand, 1.6);
            vec3 glow = uGlowColor * glowBand * revealGate * uGlowStrength;

            vec3 mapped = reveal + glow;

            float cover = step(0.03, texelColor.a);
            vec3 filled = mix(uBaseBlue, mapped, cover);

            diffuseColor.rgb = filled;
            diffuseColor.a   = 1.0;
          #endif
        `);
    };

    const globe = new THREE.Mesh(geo, mat);
    scene.add(globe);

    // Load Texture
    const globeTexture = new URL('../images/globe40.png', import.meta.url).href;
    new THREE.TextureLoader().load(
      globeTexture,
      (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        mat.map = tex;
        mat.needsUpdate = true;
      }
    );

    // Initial fit
    const fit = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w && h) {
        renderer.setSize(w, h, false);
        camera.aspect = 1;
        camera.updateProjectionMatrix();
        // k=0.85 maintains the size requested
        const k = 0.85;
        const fov = THREE.MathUtils.degToRad(camera.fov);
        const dist = R / (k * Math.tan(fov / 2));
        camera.position.set(0, 0, dist);
      }
    };
    fit();
    const resizeObserver = new ResizeObserver(fit);
    resizeObserver.observe(container);

    // Mouse
    const ray = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let targetHoverAmt = 0;

    const onMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const mx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const my = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      pointer.set(mx, my);
      ray.setFromCamera(pointer, camera);
      const hits = ray.intersectObject(globe);
      if (hits.length > 0 && hits[0].uv) {
        const tx = Math.floor(hits[0].uv.x * 8);
        const ty = Math.floor(hits[0].uv.y * 5);
        uniforms.uHoverTile.value.set(tx, ty);
        targetHoverAmt = (ty === 2) ? 1 : 0; // uHoverRow = 2
      } else {
        targetHoverAmt = 0;
      }
    };
    renderer.domElement.addEventListener('mousemove', onMove);
    renderer.domElement.addEventListener('mouseleave', () => { targetHoverAmt = 0; });

    // Loop
    let rafId: number;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      globe.rotation.y += 0.0015; // Auto-Spin
      uniforms.uHoverAmt.value += (targetHoverAmt - uniforms.uHoverAmt.value) * 0.18;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geo.dispose();
      mat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative flex items-center justify-center">
       {/* Shadow removed from here, now in Home.tsx */}
    </div>
  );
}
