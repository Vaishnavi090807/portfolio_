(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/CinematicLayer/CinematicLayer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CinematicLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CinematicLayer$2f$CinematicLayer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/CinematicLayer/CinematicLayer.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const RANGE_X = 18;
const RANGE_Y = 12;
const Z_NEAR = 2;
const Z_FAR = -7;
/* All floating motion runs on the GPU: the CPU only advances one uniform per frame. */ const VERTEX = /* glsl */ `
  uniform float uTime;
  uniform float uScale;
  uniform float uMaxSize;
  uniform float uRangeY;

  attribute float aSize;
  attribute float aPhase;
  attribute float aSpeed;
  attribute float aMix;

  varying float vMix;
  varying float vAlpha;

  void main() {
    vec3 p = position;
    float t = uTime * aSpeed;

    // slow sine-wave drift on every axis
    p.x += sin(t + aPhase) * 0.35 + sin(t * 0.37 + aPhase * 2.1) * 0.2;
    p.y += sin(t * 0.8 + aPhase * 1.7) * 0.3;
    p.z += sin(t * 0.5 + aPhase) * 0.25;

    // gentle upward rise that wraps around
    p.y = mod(p.y + uTime * 0.03 * aSpeed + uRangeY * 0.5, uRangeY) - uRangeY * 0.5;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;

    float d = max(-mv.z, 0.001);
    gl_PointSize = min(aSize * uScale / d, uMaxSize);

    float edgeFade = smoothstep(uRangeY * 0.5, uRangeY * 0.5 - 1.6, abs(p.y));
    float breathe = 0.6 + 0.4 * sin(uTime * 0.5 * aSpeed + aPhase * 3.0);
    float depthFade = mix(0.35, 1.0, clamp(1.0 - d / 15.0, 0.0, 1.0));

    vMix = aMix;
    vAlpha = edgeFade * breathe * depthFade;
  }
`;
const FRAGMENT = /* glsl */ `
  uniform vec3 uOrange;
  uniform vec3 uWhite;
  uniform float uIntensity;

  varying float vMix;
  varying float vAlpha;

  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    if (d > 1.0) discard;

    // soft glowing core plus a faint rim, like an out-of-focus lens highlight
    float core = pow(1.0 - d, 2.2);
    float rim = smoothstep(0.55, 0.9, d) * smoothstep(1.0, 0.88, d);
    float a = (core * 0.5 + rim * 0.28) * vAlpha * uIntensity;

    gl_FragColor = vec4(mix(uOrange, uWhite, vMix), a);
  }
`;
function CinematicLayer({ count, intensity = 1, parallax = 1, className = '' }) {
    _s();
    const hostRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CinematicLayer.useEffect": ()=>{
            const host = hostRef.current;
            if (!host) return undefined;
            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const total = count ?? (window.innerWidth < 768 ? 42 : 84);
            let renderer;
            try {
                renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLRenderer"]({
                    alpha: true,
                    antialias: false,
                    depth: false,
                    stencil: false,
                    powerPreference: 'high-performance'
                });
            } catch  {
                return undefined; // WebGL unavailable: the hero still works without the layer
            }
            renderer.setClearColor(0x000000, 0);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
            renderer.domElement.className = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CinematicLayer$2f$CinematicLayer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].canvas;
            host.appendChild(renderer.domElement);
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](55, 1, 0.1, 40);
            camera.position.set(0, 0, 6);
            // ---- geometry: one draw call for every particle ----
            const positions = new Float32Array(total * 3);
            const sizes = new Float32Array(total);
            const phases = new Float32Array(total);
            const speeds = new Float32Array(total);
            const mixes = new Float32Array(total);
            for(let i = 0; i < total; i++){
                positions[i * 3] = (Math.random() - 0.5) * RANGE_X;
                positions[i * 3 + 1] = (Math.random() - 0.5) * RANGE_Y;
                positions[i * 3 + 2] = Z_FAR + Math.random() * (Z_NEAR - Z_FAR);
                sizes[i] = 0.12 + Math.pow(Math.random(), 2) * 0.45;
                phases[i] = Math.random() * Math.PI * 2;
                speeds[i] = 0.25 + Math.random() * 0.45;
                // mostly warm orange, with a few near-white highlights
                mixes[i] = Math.random() < 0.28 ? 0.7 + Math.random() * 0.3 : Math.random() * 0.25;
            }
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            geometry.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](positions, 3));
            geometry.setAttribute('aSize', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](sizes, 1));
            geometry.setAttribute('aPhase', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](phases, 1));
            geometry.setAttribute('aSpeed', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](speeds, 1));
            geometry.setAttribute('aMix', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](mixes, 1));
            const uniforms = {
                uTime: {
                    value: 0
                },
                uScale: {
                    value: 500
                },
                uMaxSize: {
                    value: 200
                },
                uRangeY: {
                    value: RANGE_Y
                },
                uIntensity: {
                    value: intensity
                },
                uOrange: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('#ff8a3d')
                },
                uWhite: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('#fff1e0')
                }
            };
            const material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
                uniforms,
                vertexShader: VERTEX,
                fragmentShader: FRAGMENT,
                transparent: true,
                depthTest: false,
                depthWrite: false,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"]
            });
            const points = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"](geometry, material);
            points.frustumCulled = false; // positions are displaced in the shader
            scene.add(points);
            // ---- sizing ----
            const resize = {
                "CinematicLayer.useEffect.resize": ()=>{
                    const w = host.clientWidth;
                    const h = host.clientHeight;
                    if (!w || !h) return;
                    const pr = renderer.getPixelRatio();
                    renderer.setSize(w, h, false);
                    camera.aspect = w / h;
                    camera.updateProjectionMatrix();
                    uniforms.uScale.value = h * pr / (2 * Math.tan(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].degToRad(camera.fov / 2)));
                    uniforms.uMaxSize.value = Math.min(h * pr * 0.22, 220 * pr); // caps fill-rate cost
                    if (reduceMotion) renderer.render(scene, camera);
                }
            }["CinematicLayer.useEffect.resize"];
            const resizeObserver = new ResizeObserver(resize);
            resizeObserver.observe(host);
            resize();
            // ---- mouse parallax (target is eased in the loop) ----
            const target = {
                x: 0,
                y: 0
            };
            const current = {
                x: 0,
                y: 0
            };
            const onPointerMove = {
                "CinematicLayer.useEffect.onPointerMove": (e)=>{
                    target.x = (e.clientX / window.innerWidth - 0.5) * 2;
                    target.y = (e.clientY / window.innerHeight - 0.5) * 2;
                }
            }["CinematicLayer.useEffect.onPointerMove"];
            window.addEventListener('pointermove', onPointerMove, {
                passive: true
            });
            // ---- render loop ----
            let raf = 0;
            let last = 0;
            let time = 0;
            const tick = {
                "CinematicLayer.useEffect.tick": (now)=>{
                    raf = requestAnimationFrame(tick);
                    const dt = Math.min((now - last) / 1000, 0.05);
                    last = now;
                    time += dt;
                    uniforms.uTime.value = time;
                    const k = 1 - Math.exp(-dt * 2.2);
                    current.x += (target.x - current.x) * k;
                    current.y += (target.y - current.y) * k;
                    camera.position.x = (current.x * 0.7 + Math.sin(time * 0.1) * 0.15) * parallax;
                    camera.position.y = (-current.y * 0.4 + Math.cos(time * 0.08) * 0.1) * parallax;
                    camera.lookAt(0, 0, 0);
                    renderer.render(scene, camera);
                }
            }["CinematicLayer.useEffect.tick"];
            let inView = true;
            const sync = {
                "CinematicLayer.useEffect.sync": ()=>{
                    const shouldRun = inView && !document.hidden && !reduceMotion;
                    if (shouldRun && !raf) {
                        last = performance.now();
                        raf = requestAnimationFrame(tick);
                    } else if (!shouldRun && raf) {
                        cancelAnimationFrame(raf);
                        raf = 0;
                    }
                }
            }["CinematicLayer.useEffect.sync"];
            if (reduceMotion) {
                uniforms.uTime.value = 20;
                renderer.render(scene, camera);
            }
            const io = new IntersectionObserver({
                "CinematicLayer.useEffect": ([entry])=>{
                    inView = entry.isIntersecting;
                    sync();
                }
            }["CinematicLayer.useEffect"], {
                threshold: 0
            });
            io.observe(host);
            document.addEventListener('visibilitychange', sync);
            sync();
            // ---- cleanup: free every GPU resource ----
            return ({
                "CinematicLayer.useEffect": ()=>{
                    if (raf) cancelAnimationFrame(raf);
                    io.disconnect();
                    resizeObserver.disconnect();
                    window.removeEventListener('pointermove', onPointerMove);
                    document.removeEventListener('visibilitychange', sync);
                    scene.remove(points);
                    geometry.dispose();
                    material.dispose();
                    renderer.dispose();
                    renderer.forceContextLoss();
                    renderer.domElement.remove();
                }
            })["CinematicLayer.useEffect"];
        }
    }["CinematicLayer.useEffect"], [
        count,
        intensity,
        parallax
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: hostRef,
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CinematicLayer$2f$CinematicLayer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].root} ${className}`,
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/components/CinematicLayer/CinematicLayer.jsx",
        lineNumber: 255,
        columnNumber: 10
    }, this);
}
_s(CinematicLayer, "dNFxtM1c0E9MyhgCkG6AqZWcZlM=");
_c = CinematicLayer;
var _c;
__turbopack_context__.k.register(_c, "CinematicLayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CinematicLayer/CinematicLayer.jsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/components/CinematicLayer/CinematicLayer.jsx [app-client] (ecmascript)"));
}),
"[project]/components/CinematicLayer/CinematicLayer.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "canvas": "CinematicLayer-module__Y_Ev5G__canvas",
  "fadeIn": "CinematicLayer-module__Y_Ev5G__fadeIn",
  "root": "CinematicLayer-module__Y_Ev5G__root",
});
}),
]);

//# sourceMappingURL=components_CinematicLayer_0r1th51n2h4_k._.js.map