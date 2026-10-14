module.exports = [
(()=>{"use strict";return[
"[project]/components/Sections/About.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Sections/Sections.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Counter$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Sections/Counter.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$useInteractions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Sections/useInteractions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/resume.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function About() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Shows the illustration, and switches to your own photo if public/images/profile.jpg exists.
    const [photo, setPhoto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('/images/profile.svg');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$useInteractions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReveal"])(ref);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const probe = new window.Image();
        probe.onload = ()=>setPhoto('/images/profile.jpg');
        probe.src = '/images/profile.jpg';
        return ()=>{
            probe.onload = null;
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
        "aria-labelledby": "about-title",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].aboutGrid}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].portraitWrap} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reveal}`,
                    "data-reveal": true,
                    onPointerMove: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$useInteractions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tilt"],
                    onPointerLeave: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$useInteractions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["untilt"],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].portrait,
                        src: photo,
                        alt: "Portrait of Vaishnavi Sabbella",
                        width: 640,
                        height: 800
                    }, void 0, false, {
                        fileName: "[project]/components/Sections/About.jsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Sections/About.jsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].aboutText,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "about-title",
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reveal}`,
                            "data-reveal": true,
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["about"].title
                        }, void 0, false, {
                            fileName: "[project]/components/Sections/About.jsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["about"].paragraphs.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reveal,
                                "data-reveal": true,
                                children: p
                            }, p.slice(0, 24), false, {
                                fileName: "[project]/components/Sections/About.jsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stats,
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["about"].stats.map((st)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reveal}`,
                                    "data-reveal": true,
                                    onPointerMove: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$useInteractions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spotlight"],
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardBody,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statValue,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Counter$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    value: st.value,
                                                    decimals: st.decimals,
                                                    suffix: st.suffix
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sections/About.jsx",
                                                    lineNumber: 53,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Sections/About.jsx",
                                                lineNumber: 52,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                                children: st.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/Sections/About.jsx",
                                                lineNumber: 55,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Sections/About.jsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this)
                                }, st.label, false, {
                                    fileName: "[project]/components/Sections/About.jsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Sections/About.jsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Sections/About.jsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Sections/About.jsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Sections/About.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Sections/Contact.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Sections/Sections.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$useInteractions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Sections/useInteractions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/resume.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function Contact() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$useInteractions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReveal"])(ref);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        ref: ref,
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contact}`,
        "aria-labelledby": "contact-title",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    id: "contact-title",
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bigTitle} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reveal}`,
                    "data-reveal": true,
                    children: "Let's build something together."
                }, void 0, false, {
                    fileName: "[project]/components/Sections/Contact.jsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lead} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reveal}`,
                    "data-reveal": true,
                    children: "I am open to internships and engineering roles. The fastest way to reach me is email."
                }, void 0, false, {
                    fileName: "[project]/components/Sections/Contact.jsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mail} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reveal}`,
                    "data-reveal": true,
                    href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].email}`,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].email
                }, void 0, false, {
                    fileName: "[project]/components/Sections/Contact.jsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socials,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].links.map((l)=>{
                        const inner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socialName,
                                    children: l.label
                                }, void 0, false, {
                                    fileName: "[project]/components/Sections/Contact.jsx",
                                    lineNumber: 30,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socialHandle,
                                    children: l.handle
                                }, void 0, false, {
                                    fileName: "[project]/components/Sections/Contact.jsx",
                                    lineNumber: 31,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Sections/Contact.jsx",
                            lineNumber: 29,
                            columnNumber: 15
                        }, this);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reveal}`,
                            "data-reveal": true,
                            onPointerMove: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$useInteractions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spotlight"],
                            children: l.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].social,
                                href: l.href,
                                target: "_blank",
                                rel: "noreferrer",
                                children: inner
                            }, void 0, false, {
                                fileName: "[project]/components/Sections/Contact.jsx",
                                lineNumber: 37,
                                columnNumber: 19
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].social,
                                children: inner
                            }, void 0, false, {
                                fileName: "[project]/components/Sections/Contact.jsx",
                                lineNumber: 41,
                                columnNumber: 19
                            }, this)
                        }, l.label, false, {
                            fileName: "[project]/components/Sections/Contact.jsx",
                            lineNumber: 35,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/Sections/Contact.jsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer,
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " ",
                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].firstName,
                        " ",
                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].lastName,
                        ". Built with Next.js, Three.js and GSAP."
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Sections/Contact.jsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Sections/Contact.jsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Sections/Contact.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Sections/Counter.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Counter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Counter({ value, decimals = 0, suffix = '' }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = ref.current;
        if (!el) return undefined;
        const format = (n)=>n.toFixed(decimals);
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            el.textContent = format(value);
            return undefined;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
        const state = {
            n: 0
        };
        el.textContent = format(0);
        const tween = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(state, {
            n: value,
            duration: 2.4,
            ease: 'power3.out',
            paused: true,
            onUpdate: ()=>{
                el.textContent = format(state.n);
            }
        });
        const st = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
            trigger: el,
            start: 'top 92%',
            once: true,
            onEnter: ()=>tween.play()
        });
        return ()=>{
            st.kill();
            tween.kill();
        };
    }, [
        value,
        decimals
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                ref: ref,
                children: value.toFixed(decimals)
            }, void 0, false, {
                fileName: "[project]/components/Sections/Counter.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/components/Sections/Counter.jsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Sections/Credentials.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Credentials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Sections/Sections.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$useInteractions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Sections/useInteractions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/resume.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function Credentials() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$useInteractions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReveal"])(ref);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "credentials",
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
        "aria-labelledby": "cred-title",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    id: "cred-title",
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reveal}`,
                    "data-reveal": true,
                    children: "Education, research and leadership."
                }, void 0, false, {
                    fileName: "[project]/components/Sections/Credentials.jsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].credGrid,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wide} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reveal}`,
                            "data-reveal": true,
                            onPointerMove: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$useInteractions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spotlight"],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardBody,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].credTitle,
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["education"].degree
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sections/Credentials.jsx",
                                        lineNumber: 22,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].credMeta,
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["education"].school,
                                            ". GPA ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["education"].gpa,
                                            ". Graduating ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["education"].graduating,
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Sections/Credentials.jsx",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chips,
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["education"].coursework.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chip,
                                                children: [
                                                    c.name,
                                                    c.grade && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].grade,
                                                        children: c.grade
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Sections/Credentials.jsx",
                                                        lineNumber: 30,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, c.name, true, {
                                                fileName: "[project]/components/Sections/Credentials.jsx",
                                                lineNumber: 28,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sections/Credentials.jsx",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sections/Credentials.jsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Sections/Credentials.jsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reveal}`,
                            "data-reveal": true,
                            onPointerMove: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$useInteractions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spotlight"],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardBody,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].credTitle,
                                        children: "Upskilling"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sections/Credentials.jsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].credMeta,
                                        children: "Job simulations, assessments and courses."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sections/Credentials.jsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].list,
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["upskilling"].map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            u.name,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].listSub,
                                                                children: u.org
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Sections/Credentials.jsx",
                                                                lineNumber: 46,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Sections/Credentials.jsx",
                                                        lineNumber: 44,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].listDate,
                                                        children: u.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Sections/Credentials.jsx",
                                                        lineNumber: 48,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, u.name + u.org, true, {
                                                fileName: "[project]/components/Sections/Credentials.jsx",
                                                lineNumber: 43,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sections/Credentials.jsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sections/Credentials.jsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Sections/Credentials.jsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reveal}`,
                            "data-reveal": true,
                            onPointerMove: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$useInteractions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spotlight"],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardBody,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].credTitle,
                                        children: "Leadership"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sections/Credentials.jsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].credMeta,
                                        children: "Teamwork, communication and accountability."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sections/Credentials.jsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].list,
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["leadership"].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        l.role,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].listSub,
                                                            children: l.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Sections/Credentials.jsx",
                                                            lineNumber: 64,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Sections/Credentials.jsx",
                                                    lineNumber: 62,
                                                    columnNumber: 21
                                                }, this)
                                            }, l.role, false, {
                                                fileName: "[project]/components/Sections/Credentials.jsx",
                                                lineNumber: 61,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sections/Credentials.jsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sections/Credentials.jsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Sections/Credentials.jsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["publications"].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reveal}`,
                                "data-reveal": true,
                                onPointerMove: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$useInteractions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spotlight"],
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardBody,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badge,
                                            children: p.status
                                        }, void 0, false, {
                                            fileName: "[project]/components/Sections/Credentials.jsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].credTitle,
                                            children: p.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/Sections/Credentials.jsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].credMeta,
                                            children: p.venue
                                        }, void 0, false, {
                                            fileName: "[project]/components/Sections/Credentials.jsx",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].credMeta,
                                            children: p.authors
                                        }, void 0, false, {
                                            fileName: "[project]/components/Sections/Credentials.jsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Sections/Credentials.jsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this)
                            }, p.title, false, {
                                fileName: "[project]/components/Sections/Credentials.jsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Sections/Credentials.jsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Sections/Credentials.jsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Sections/Credentials.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Sections/Experience.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Experience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Sections/Sections.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$useInteractions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Sections/useInteractions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/resume.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function Experience() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$useInteractions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReveal"])(ref);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "experience",
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
        "aria-labelledby": "exp-title",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    id: "exp-title",
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reveal}`,
                    "data-reveal": true,
                    children: "Experience that shipped."
                }, void 0, false, {
                    fileName: "[project]/components/Sections/Experience.jsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].expGrid,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].expAside} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reveal}`,
                            "data-reveal": true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].expRole,
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["internship"].role
                                }, void 0, false, {
                                    fileName: "[project]/components/Sections/Experience.jsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].expMeta,
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["internship"].company,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/Sections/Experience.jsx",
                                            lineNumber: 24,
                                            columnNumber: 15
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["internship"].period,
                                        ", ",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["internship"].place,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/Sections/Experience.jsx",
                                            lineNumber: 26,
                                            columnNumber: 15
                                        }, this),
                                        "GitHub: ",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["internship"].repo
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Sections/Experience.jsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cover,
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["internship"].image,
                                    alt: "Illustration of a forecast chart drawn from API data",
                                    width: 800,
                                    height: 500,
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sections/Experience.jsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Sections/Experience.jsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].points,
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["internship"].points.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reveal}`,
                                    "data-reveal": true,
                                    onPointerMove: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$useInteractions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spotlight"],
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardBody,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pointTitle,
                                                children: p.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/Sections/Experience.jsx",
                                                lineNumber: 44,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pointText,
                                                children: p.text
                                            }, void 0, false, {
                                                fileName: "[project]/components/Sections/Experience.jsx",
                                                lineNumber: 45,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Sections/Experience.jsx",
                                        lineNumber: 43,
                                        columnNumber: 17
                                    }, this)
                                }, p.title, false, {
                                    fileName: "[project]/components/Sections/Experience.jsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Sections/Experience.jsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Sections/Experience.jsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Sections/Experience.jsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Sections/Experience.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Sections/Nav.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollToPlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollToPlugin.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Sections/Sections.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
;
const ITEMS = [
    [
        'about',
        'About'
    ],
    [
        'skills',
        'Skills'
    ],
    [
        'experience',
        'Experience'
    ],
    [
        'projects',
        'Projects'
    ],
    [
        'credentials',
        'Credentials'
    ],
    [
        'contact',
        'Contact'
    ]
];
function Nav() {
    const barRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [shown, setShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollToPlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollToPlugin"]);
        // setState with an unchanged value does not re-render, so this stays cheap
        const onScroll = ()=>setShown(window.scrollY > window.innerHeight * 0.9);
        onScroll();
        window.addEventListener('scroll', onScroll, {
            passive: true
        });
        const io = new IntersectionObserver((entries)=>{
            entries.forEach((e)=>{
                if (e.isIntersecting) setActive(e.target.id);
            });
        }, {
            rootMargin: '-45% 0px -50% 0px'
        });
        ITEMS.forEach(([id])=>{
            const el = document.getElementById(id);
            if (el) io.observe(el);
        });
        const bar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(barRef.current, {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
                start: 0,
                end: 'max',
                scrub: true
            }
        });
        return ()=>{
            window.removeEventListener('scroll', onScroll);
            io.disconnect();
            bar.scrollTrigger?.kill();
            bar.kill();
        };
    }, []);
    const go = (e, id)=>{
        e.preventDefault();
        const el = document.getElementById(id);
        if (!el) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            el.scrollIntoView();
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(window, {
            duration: 1.6,
            ease: 'power3.inOut',
            scrollTo: {
                y: el,
                autoKill: true
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: barRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progress,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/Sections/Nav.jsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nav} ${shown ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navShown : ''}`,
                "aria-label": "Sections",
                children: ITEMS.map(([id, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `#${id}`,
                        onClick: (e)=>go(e, id),
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navLink} ${active === id ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navActive : ''}`,
                        tabIndex: shown ? 0 : -1,
                        children: label
                    }, id, false, {
                        fileName: "[project]/components/Sections/Nav.jsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Sections/Nav.jsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Sections/Nav.jsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Sections/Projects.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Sections/Sections.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$useInteractions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Sections/useInteractions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/resume.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const github = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].links.find((l)=>l.label === 'GitHub');
const Arrow = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: "16",
        height: "16",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 17 17 7"
            }, void 0, false, {
                fileName: "[project]/components/Sections/Projects.jsx",
                lineNumber: 12,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 7h9v9"
            }, void 0, false, {
                fileName: "[project]/components/Sections/Projects.jsx",
                lineNumber: 13,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Sections/Projects.jsx",
        lineNumber: 11,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
function Projects() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$useInteractions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReveal"])(ref);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
        "aria-labelledby": "projects-title",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    id: "projects-title",
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reveal}`,
                    "data-reveal": true,
                    children: "Projects built from the ground up."
                }, void 0, false, {
                    fileName: "[project]/components/Sections/Projects.jsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lead} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reveal}`,
                    "data-reveal": true,
                    children: "Concurrency, graph algorithms, retrieval-augmented generation and a full-stack booking platform."
                }, void 0, false, {
                    fileName: "[project]/components/Sections/Projects.jsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].project} ${i % 2 ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].flip : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].coverWrap} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reveal}`,
                                "data-reveal": true,
                                onPointerMove: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$useInteractions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tilt"],
                                onPointerLeave: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$useInteractions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["untilt"],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].coverImg,
                                        src: p.image,
                                        alt: p.alt,
                                        width: 800,
                                        height: 500,
                                        loading: "lazy"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sections/Projects.jsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].status} ${p.status === 'In progress' ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusLive : ''}`,
                                        children: p.status
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sections/Projects.jsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sections/Projects.jsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].projectTitle} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reveal}`,
                                        "data-reveal": true,
                                        children: p.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sections/Projects.jsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].period} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reveal}`,
                                        "data-reveal": true,
                                        children: p.period
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sections/Projects.jsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bullets} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reveal}`,
                                        "data-reveal": true,
                                        children: p.points.map((pt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: pt
                                            }, pt.slice(0, 30), false, {
                                                fileName: "[project]/components/Sections/Projects.jsx",
                                                lineNumber: 48,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sections/Projects.jsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chips} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reveal}`,
                                        "data-reveal": true,
                                        children: p.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chip,
                                                children: t
                                            }, t, false, {
                                                fileName: "[project]/components/Sections/Projects.jsx",
                                                lineNumber: 53,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sections/Projects.jsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    github && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].link} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reveal}`,
                                        "data-reveal": true,
                                        href: github.href,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: [
                                            "View on GitHub ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Arrow, {}, void 0, false, {
                                                fileName: "[project]/components/Sections/Projects.jsx",
                                                lineNumber: 60,
                                                columnNumber: 34
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Sections/Projects.jsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sections/Projects.jsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this)
                        ]
                    }, p.title, true, {
                        fileName: "[project]/components/Sections/Projects.jsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Sections/Projects.jsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Sections/Projects.jsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Sections/Skills.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Skills
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Sections/Sections.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$useInteractions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Sections/useInteractions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/resume.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const all = [
    ...new Set(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["skillGroups"].flatMap((g)=>g.skills))
];
const half = Math.ceil(all.length / 2);
const rows = [
    all.slice(0, half),
    all.slice(half)
];
function Marquee({ items, reverse, accentEvery }) {
    // the list is rendered twice so the loop never shows a gap
    const doubled = [
        ...items,
        ...items
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].track} ${reverse ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].trackReverse : ''}`,
        children: doubled.map((name, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pill} ${i % accentEvery === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pillAccent : ''}`,
                "aria-hidden": i >= items.length ? 'true' : undefined,
                children: name
            }, `${name}-${i}`, false, {
                fileName: "[project]/components/Sections/Skills.jsx",
                lineNumber: 18,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/Sections/Skills.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
function Skills() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$useInteractions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReveal"])(ref);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "skills",
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
        "aria-labelledby": "skills-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "skills-title",
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reveal}`,
                        "data-reveal": true,
                        children: "Technical skills across the stack."
                    }, void 0, false, {
                        fileName: "[project]/components/Sections/Skills.jsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lead} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reveal}`,
                        "data-reveal": true,
                        children: "From low-level sockets and algorithms to REST backends, databases, cloud and local AI pipelines."
                    }, void 0, false, {
                        fileName: "[project]/components/Sections/Skills.jsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Sections/Skills.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].marquees} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reveal}`,
                "data-reveal": true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Marquee, {
                        items: rows[0],
                        accentEvery: 4
                    }, void 0, false, {
                        fileName: "[project]/components/Sections/Skills.jsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Marquee, {
                        items: rows[1],
                        reverse: true,
                        accentEvery: 5
                    }, void 0, false, {
                        fileName: "[project]/components/Sections/Skills.jsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Sections/Skills.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].skillGrid,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$resume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["skillGroups"].map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reveal}`,
                            "data-reveal": true,
                            onPointerMove: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$useInteractions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spotlight"],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardBody,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTitle,
                                        children: g.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sections/Skills.jsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chips,
                                        children: g.skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sections$2f$Sections$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chip,
                                                children: skill
                                            }, skill, false, {
                                                fileName: "[project]/components/Sections/Skills.jsx",
                                                lineNumber: 58,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sections/Skills.jsx",
                                        lineNumber: 56,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sections/Skills.jsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this)
                        }, g.title, false, {
                            fileName: "[project]/components/Sections/Skills.jsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Sections/Skills.jsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Sections/Skills.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Sections/Skills.jsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Sections/useInteractions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "spotlight",
    ()=>spotlight,
    "tilt",
    ()=>tilt,
    "untilt",
    ()=>untilt,
    "useReveal",
    ()=>useReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const reduced = ()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function useReveal(ref) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const root = ref.current;
        if (!root) return undefined;
        const targets = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray('[data-reveal]', root);
        if (reduced()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(targets, {
                opacity: 1,
                y: 0
            });
            return undefined;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].batch(targets, {
                start: 'top 88%',
                once: true,
                onEnter: (els)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(els, {
                        opacity: 0,
                        y: 40
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 1.3,
                        ease: 'power3.out',
                        stagger: 0.12,
                        overwrite: true
                    })
            });
        }, root);
        return ()=>ctx.revert();
    }, [
        ref
    ]);
}
function spotlight(e) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
}
function tilt(e) {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transition = 'transform 0.15s ease-out';
    el.style.transform = `perspective(1000px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) scale(1.015)`;
}
function untilt(e) {
    const el = e.currentTarget;
    el.style.transition = 'transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1)';
    el.style.transform = '';
}
}),
"[project]/components/VideoIntro/VideoIntro.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoIntro
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollToPlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollToPlugin.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoIntro$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/VideoIntro/VideoIntro.module.css [app-ssr] (css module)");
;
'use client';
;
;
;
;
;
;
;
// Three.js is code-split and never rendered on the server.
const CinematicLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/CinematicLayer/CinematicLayer.jsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const prefersReducedMotion = ()=>("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
/* ---------- icons ---------- */ const PlayIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: "20",
        height: "20",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8 5.6v12.8a1 1 0 0 0 1.52.85l10.4-6.4a1 1 0 0 0 0-1.7L9.52 4.75A1 1 0 0 0 8 5.6Z"
        }, void 0, false, {
            fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
            lineNumber: 19,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
        lineNumber: 18,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const PauseIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: "20",
        height: "20",
        fill: "currentColor",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "6",
                y: "5",
                width: "4.2",
                height: "14",
                rx: "1.2"
            }, void 0, false, {
                fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                lineNumber: 24,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "13.8",
                y: "5",
                width: "4.2",
                height: "14",
                rx: "1.2"
            }, void 0, false, {
                fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                lineNumber: 25,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const VolumeOnIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: "20",
        height: "20",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 9.5v5h3.6L12 18.5v-13L7.6 9.5H4Z",
                fill: "currentColor",
                stroke: "none"
            }, void 0, false, {
                fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                lineNumber: 30,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15.5 9a4.2 4.2 0 0 1 0 6"
            }, void 0, false, {
                fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                lineNumber: 31,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18 6.5a7.6 7.6 0 0 1 0 11"
            }, void 0, false, {
                fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                lineNumber: 32,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
        lineNumber: 29,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const VolumeOffIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: "20",
        height: "20",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 9.5v5h3.6L12 18.5v-13L7.6 9.5H4Z",
                fill: "currentColor",
                stroke: "none"
            }, void 0, false, {
                fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                lineNumber: 37,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 9.5l5 5"
            }, void 0, false, {
                fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                lineNumber: 38,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 9.5l-5 5"
            }, void 0, false, {
                fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                lineNumber: 39,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
function VideoIntro({ src = '/video/intro.mp4', poster, firstName = 'Alex', lastName = 'Rivera', tagline = 'Creative developer, open for select work', role = 'Front-end engineer and interaction designer', description = 'I build immersive, performance-minded websites where motion, sound and story work together.', nextSectionId = 'work' }) {
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hintRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const userPaused = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Only these three change at human speed, so re-renders stay negligible.
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [muted, setMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [hintVisible, setHintVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    /* ---------- sound hint ---------- */ const hideHint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const el = hintRef.current;
        if (!el) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(el, {
            opacity: 0,
            y: 8,
            duration: 0.9,
            ease: 'power2.inOut',
            overwrite: true,
            onComplete: ()=>setHintVisible(false)
        });
    }, []);
    /* ---------- video wiring ---------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fg = fgRef.current;
        const bg = bgRef.current;
        const hero = heroRef.current;
        if (!fg || !hero) return undefined;
        fg.muted = true;
        if (bg) bg.muted = true;
        const playBoth = ()=>{
            fg.play().catch(()=>setPlaying(false)); // e.g. iOS low-power mode
            bg?.play().catch(()=>{});
        };
        const onPlay = ()=>{
            setPlaying(true);
            bg?.play().catch(()=>{});
        };
        const onPause = ()=>{
            setPlaying(false);
            bg?.pause();
        };
        // keep the blurred duplicate roughly in step with the foreground
        const onTime = ()=>{
            if (bg && Math.abs(bg.currentTime - fg.currentTime) > 0.3) {
                bg.currentTime = fg.currentTime;
            }
        };
        fg.addEventListener('play', onPlay);
        fg.addEventListener('pause', onPause);
        fg.addEventListener('timeupdate', onTime);
        // do not decode two videos while the hero is off screen
        const io = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                if (!userPaused.current) playBoth();
            } else {
                fg.pause();
                bg?.pause();
            }
        }, {
            threshold: 0.05
        });
        io.observe(hero);
        playBoth();
        return ()=>{
            io.disconnect();
            fg.removeEventListener('play', onPlay);
            fg.removeEventListener('pause', onPause);
            fg.removeEventListener('timeupdate', onTime);
        };
    }, []);
    /* ---------- GSAP: entrance + scroll scrub ---------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollToPlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollToPlugin"]);
        const fg = fgRef.current;
        const reduce = prefersReducedMotion();
        let hintCall;
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context(()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                paused: true,
                defaults: {
                    ease: 'power3.out'
                }
            });
            tl.fromTo('[data-anim="veil"]', {
                opacity: 1
            }, {
                opacity: 0,
                duration: 2.4,
                ease: 'power2.inOut',
                onComplete: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set('[data-anim="veil"]', {
                        display: 'none'
                    })
            }, 0).fromTo('[data-anim="intro"]', {
                scale: 1.12
            }, {
                scale: 1,
                duration: 3.8,
                ease: 'power2.out'
            }, 0).fromTo('[data-anim="tagline"]', {
                opacity: 0,
                y: 14
            }, {
                opacity: 1,
                y: 0,
                duration: 1.4
            }, 1.0).fromTo('[data-anim="line"]', {
                yPercent: 118,
                opacity: 1
            }, {
                yPercent: 0,
                duration: 1.7,
                stagger: 0.16,
                ease: 'power4.out'
            }, 1.15).fromTo('[data-anim="role"]', {
                opacity: 0,
                y: 18
            }, {
                opacity: 1,
                y: 0,
                duration: 1.4
            }, 2.1).fromTo('[data-anim="desc"]', {
                opacity: 0,
                y: 18
            }, {
                opacity: 1,
                y: 0,
                duration: 1.4
            }, 2.3).fromTo('[data-anim="controls"]', {
                opacity: 0,
                y: 14
            }, {
                opacity: 1,
                y: 0,
                duration: 1.2,
                stagger: 0.1
            }, 2.6).fromTo('[data-anim="scroll"]', {
                opacity: 0
            }, {
                opacity: 1,
                duration: 1.6,
                ease: 'power2.out'
            }, 2.9).fromTo('[data-anim="hint"]', {
                opacity: 0,
                y: 10
            }, {
                opacity: 1,
                y: 0,
                duration: 1.2
            }, 3.3).call(()=>{
                hintCall = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].delayedCall(6.5, hideHint);
            });
            // start once the first frame can be shown (with a safety timeout)
            let started = false;
            const start = ()=>{
                if (started) return;
                started = true;
                tl.play();
            };
            if (fg && fg.readyState >= 2) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].delayedCall(0.15, start);
            } else {
                fg?.addEventListener('loadeddata', start, {
                    once: true
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].delayedCall(3, start);
            }
            // scroll: the hero stays pinned (CSS sticky) while it dims and the copy drifts away
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 0.8
                }
            }).to('[data-anim="content"]', {
                yPercent: -14,
                opacity: 0,
                ease: 'none',
                duration: 0.6
            }, 0).to('[data-anim="scrollWrap"]', {
                opacity: 0,
                ease: 'none',
                duration: 0.2
            }, 0).to('[data-anim="media"]', {
                scale: 1.1,
                ease: 'none',
                duration: 1
            }, 0).to('[data-anim="dim"]', {
                opacity: 0.85,
                ease: 'none',
                duration: 1
            }, 0);
        }, wrapperRef);
        return ()=>{
            hintCall?.kill();
            ctx.revert();
        };
    }, [
        hideHint
    ]);
    /* ---------- controls ---------- */ const togglePlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const fg = fgRef.current;
        if (!fg) return;
        if (fg.paused) {
            userPaused.current = false;
            fg.play().catch(()=>{});
        } else {
            userPaused.current = true;
            fg.pause();
        }
    }, []);
    const toggleMute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const fg = fgRef.current;
        if (!fg) return;
        fg.muted = !fg.muted;
        setMuted(fg.muted);
        if (!fg.muted) {
            hideHint();
            if (fg.paused && !userPaused.current) fg.play().catch(()=>{});
        }
    }, [
        hideHint
    ]);
    const scrollToNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const el = document.getElementById(nextSectionId);
        if (!el) return;
        if (prefersReducedMotion()) //TURBOPACK unreachable
        ;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(window, {
            duration: 1.8,
            ease: 'power3.inOut',
            scrollTo: {
                y: el,
                autoKill: true
            }
        });
    }, [
        nextSectionId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapperRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoIntro$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wrapper,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: heroRef,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoIntro$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero,
            "aria-label": `${firstName} ${lastName} introduction`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoIntro$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].media,
                    "data-anim": "media",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoIntro$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].intro,
                        "data-anim": "intro",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                ref: bgRef,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoIntro$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bgVideo,
                                src: src,
                                poster: poster,
                                autoPlay: true,
                                loop: true,
                                muted: true,
                                playsInline: true,
                                preload: "auto",
                                "aria-hidden": "true",
                                tabIndex: -1,
                                disablePictureInPicture: true,
                                disableRemotePlayback: true
                            }, void 0, false, {
                                fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                                lineNumber: 267,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                ref: fgRef,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoIntro$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fgVideo,
                                src: src,
                                poster: poster,
                                autoPlay: true,
                                loop: true,
                                muted: true,
                                playsInline: true,
                                preload: "auto",
                                disablePictureInPicture: true,
                                disableRemotePlayback: true
                            }, void 0, false, {
                                fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                                lineNumber: 282,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                        lineNumber: 266,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                    lineNumber: 265,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CinematicLayer, {}, void 0, false, {
                    fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                    lineNumber: 298,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoIntro$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].grade,
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                    lineNumber: 300,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoIntro$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dim,
                    "data-anim": "dim",
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                    lineNumber: 301,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoIntro$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
                    "data-anim": "content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoIntro$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tagline,
                            "data-anim": "tagline",
                            children: tagline
                        }, void 0, false, {
                            fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                            lineNumber: 305,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoIntro$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].name,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoIntro$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].line,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoIntro$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lineInner,
                                        "data-anim": "line",
                                        children: firstName
                                    }, void 0, false, {
                                        fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                                        lineNumber: 308,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                                    lineNumber: 307,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoIntro$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].line,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoIntro$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lineInner,
                                        "data-anim": "line",
                                        children: lastName
                                    }, void 0, false, {
                                        fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                                        lineNumber: 311,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                            lineNumber: 306,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoIntro$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].role,
                            "data-anim": "role",
                            children: role
                        }, void 0, false, {
                            fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                            lineNumber: 314,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoIntro$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].desc,
                            "data-anim": "desc",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                            lineNumber: 315,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                    lineNumber: 304,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoIntro$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controls,
                    children: [
                        hintVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            ref: hintRef,
                            type: "button",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoIntro$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hint,
                            "data-anim": "hint",
                            onClick: toggleMute,
                            "aria-label": "Turn sound on",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoIntro$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bars,
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                            fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                                            lineNumber: 330,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                            fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                                            lineNumber: 330,
                                            columnNumber: 22
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                            fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                                            lineNumber: 330,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                                    lineNumber: 329,
                                    columnNumber: 15
                                }, this),
                                "Tap for sound"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                            lineNumber: 321,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoIntro$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].buttons,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoIntro$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].glass,
                                    "data-anim": "controls",
                                    onClick: togglePlay,
                                    "aria-label": playing ? 'Pause video' : 'Play video',
                                    "aria-pressed": !playing,
                                    children: playing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PauseIcon, {}, void 0, false, {
                                        fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                                        lineNumber: 344,
                                        columnNumber: 26
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayIcon, {}, void 0, false, {
                                        fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                                        lineNumber: 344,
                                        columnNumber: 42
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                                    lineNumber: 336,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoIntro$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].glass,
                                    "data-anim": "controls",
                                    onClick: toggleMute,
                                    "aria-label": muted ? 'Unmute video' : 'Mute video',
                                    "aria-pressed": !muted,
                                    children: muted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(VolumeOffIcon, {}, void 0, false, {
                                        fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                                        lineNumber: 354,
                                        columnNumber: 24
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(VolumeOnIcon, {}, void 0, false, {
                                        fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                                        lineNumber: 354,
                                        columnNumber: 44
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                                    lineNumber: 346,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                            lineNumber: 335,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                    lineNumber: 319,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoIntro$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scrollWrap,
                    "data-anim": "scrollWrap",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoIntro$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scroll,
                        "data-anim": "scroll",
                        onClick: scrollToNext,
                        "aria-label": "Scroll to next section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoIntro$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scrollLabel,
                                children: "Scroll"
                            }, void 0, false, {
                                fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                                lineNumber: 368,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoIntro$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scrollTrack,
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoIntro$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scrollPulse
                                }, void 0, false, {
                                    fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                                    lineNumber: 370,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                                lineNumber: 369,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                        lineNumber: 361,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                    lineNumber: 360,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VideoIntro$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].veil,
                    "data-anim": "veil",
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
                    lineNumber: 375,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
            lineNumber: 263,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/VideoIntro/VideoIntro.jsx",
        lineNumber: 262,
        columnNumber: 5
    }, this);
}
}),
"[project]/data/resume.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "about",
    ()=>about,
    "education",
    ()=>education,
    "internship",
    ()=>internship,
    "leadership",
    ()=>leadership,
    "profile",
    ()=>profile,
    "projects",
    ()=>projects,
    "publications",
    ()=>publications,
    "skillGroups",
    ()=>skillGroups,
    "upskilling",
    ()=>upskilling
]);
const profile = {
    firstName: 'Vaishnavi',
    lastName: 'Sabbella',
    email: 'sabbellavaishnavi99@gmail.com',
    links: [
        {
            label: 'GitHub',
            handle: 'Vaishnavi090807',
            href: 'https://github.com/Vaishnavi090807'
        },
        {
            label: 'LinkedIn',
            handle: 'vaishnavi-sabbella',
            href: 'https://www.linkedin.com/in/vaishnavi-sabbella'
        },
        {
            label: 'GeeksforGeeks',
            handle: 'vaishnavi0908',
            href: 'https://www.geeksforgeeks.org/user/vaishnavi0908/'
        },
        {
            label: 'CodeChef',
            handle: 'svaishnavi0908',
            href: 'https://www.codechef.com/users/svaishnavi0908'
        },
        {
            label: 'LeetCode',
            handle: 'vaishnavi sabbella',
            href: null
        }
    ]
};
const about = {
    title: 'Backend-minded, algorithm-driven, and a fast learner.',
    paragraphs: [
        'I am a Computer Science undergraduate at Amrita Vishwa Vidyapeetham with a strong foundation in Object-Oriented Programming, Data Structures and Algorithms, the Software Development Life Cycle and relational databases. I build backend software in Python, Java and C++.',
        'I have built a multithreaded TCP chat server, a graph and dynamic-programming strategy engine and a local RAG assistant, and delivered REST API, NLP and ML tooling during a Python internship using Git, GitHub and peer code review. I am comfortable with AWS (S3, RDS) and Linux.',
        'Beyond academics, I served as House Captain, leading my team to victory in the inter-house competition, and the following year as School Vice Captain. That experience shaped how I work in a team: clear communication and real accountability.'
    ],
    stats: [
        {
            value: 8.51,
            decimals: 2,
            suffix: '/10',
            label: 'GPA at Amrita Vishwa Vidyapeetham'
        },
        {
            value: 200,
            decimals: 0,
            suffix: '',
            label: 'concurrent clients load-tested on the chat server'
        },
        {
            value: 96.2,
            decimals: 1,
            suffix: '%',
            label: 'test accuracy on the SMS spam classifier'
        },
        {
            value: 4,
            decimals: 0,
            suffix: '',
            label: 'working modules shipped in a 4-week internship'
        }
    ]
};
const skillGroups = [
    {
        title: 'Programming languages',
        skills: [
            'Python',
            'Java',
            'C++',
            'JavaScript',
            'TypeScript'
        ]
    },
    {
        title: 'Web technologies',
        skills: [
            'HTML5',
            'CSS',
            'React',
            'FastAPI',
            'REST API design and integration'
        ]
    },
    {
        title: 'Databases',
        skills: [
            'SQL',
            'PostgreSQL',
            'SQLite',
            'SQLAlchemy',
            'Schema design and queries'
        ]
    },
    {
        title: 'Cloud',
        skills: [
            'AWS S3',
            'AWS RDS',
            'Cloud fundamentals',
            'Docker'
        ]
    },
    {
        title: 'AI and machine learning',
        skills: [
            'GenAI',
            'Prompt engineering',
            'RAG',
            'Chroma',
            'Ollama',
            'Mistral-7B',
            'NumPy',
            'Pandas',
            'Scikit-learn',
            'NLTK'
        ]
    },
    {
        title: 'Tools and systems',
        skills: [
            'Git',
            'GitHub',
            'Linux',
            'TCP sockets',
            'Multithreading',
            'Debugging and troubleshooting'
        ]
    },
    {
        title: 'Computer science core',
        skills: [
            'Object-Oriented Programming',
            'Data structures and algorithms',
            'Graph algorithms',
            'Dynamic programming',
            'SDLC',
            'Operating systems',
            'Computer networks',
            'DBMS'
        ]
    }
];
const internship = {
    role: 'Python Developer Intern',
    company: 'Codtech IT Solution',
    period: 'May 2025 to June 2025',
    place: 'Remote, Hyderabad',
    repo: 'API-Integration-and-Data-Visualization',
    image: '/images/projects/api.svg',
    points: [
        {
            title: 'REST API design and NLP intent matching',
            text: 'Built Python REST APIs powering an AI chatbot that lemmatizes input with NLTK and maps it to 5 intents using TF-IDF cosine similarity with a 0.3 confidence threshold, following the SDLC from design to testing.'
        },
        {
            title: 'Supervised ML with TF-IDF and Multinomial Naive Bayes',
            text: 'Trained an SMS spam classifier on an 80/20 train-test split, reaching 96.2% test accuracy on 5,572 messages with 100% spam precision, so no legitimate message was flagged as spam.'
        },
        {
            title: 'External API consumption and data visualization',
            text: 'Consumed a live weather REST API to build a real-time dashboard, turning raw JSON responses into forecast charts that end users can read at a glance.'
        },
        {
            title: 'Delivery and code quality',
            text: 'Shipped 4 working modules (weather dashboard, automated report generator, AI chatbot, spam detector) in 4 weeks, with modular, unit-tested Python and Git and GitHub peer code reviews.'
        }
    ]
};
const projects = [
    {
        title: 'Real-Time Multi-Client Chat Application',
        period: 'June 2026',
        status: 'Completed',
        image: '/images/projects/chat.svg',
        alt: 'Illustration of a central chat server connected to ten client nodes exchanging messages',
        tags: [
            'Java',
            'Multithreading',
            'TCP sockets',
            'Concurrent collections',
            'OOP',
            'File handling'
        ],
        points: [
            'Engineered a multi-client chat server in Core Java with one thread per client and thread-safe concurrent collections. Load-tested with 200 concurrent clients, delivering 99.99% of about 199,000 broadcast messages.',
            'Designed an abstract Participant class, a ChatService interface and custom checked exceptions, separating networking, business logic and error handling into three layers.',
            'Added username validation, broadcasting, graceful disconnect handling and file-I/O chat logs so no history is lost when a client leaves or the server restarts.'
        ]
    },
    {
        title: 'Flood Frenzy Strategy Engine',
        period: 'January 2026',
        status: 'Completed',
        image: '/images/projects/flood.svg',
        alt: 'Illustration of a 13 by 13 colour grid with a captured region in the top-left corner',
        tags: [
            'Java',
            'Swing',
            'Graph algorithms',
            'Dynamic programming',
            'BFS',
            'Backtracking'
        ],
        points: [
            'Modeled a 13x13, 5-colour board as a grid graph and used BFS flood-fill to compute captured territory in O(N^2) per turn, driving a best-of-3 player-versus-CPU game.',
            'Formulated the minimum colour changes as a 0-1 BFS shortest-path DP, then backtracked parent pointers to power move hints, a heatmap view and a DP-driven CPU opponent.',
            'Benchmarked greedy against DP and backtracking on the same board: 9 moves versus 8 (11.1% fewer), each solving the board in 1 ms or less. Built 3 CPU difficulty tiers, undo and redo, turn timers and replay.'
        ]
    },
    {
        title: 'SEBI Investment Risk Assistant',
        period: 'January 2026',
        status: 'In progress',
        image: '/images/projects/rag.svg',
        alt: 'Illustration of documents flowing into a vector space and producing a grounded answer',
        tags: [
            'Python',
            'FastAPI',
            'SQLite',
            'Chroma',
            'GenAI',
            'RAG',
            'Prompt engineering',
            'Ollama',
            'Mistral-7B'
        ],
        points: [
            'Building a fully local RAG pipeline with FastAPI, SQLite, a Chroma vector store and Ollama running Mistral-7B that grounds answers in SEBI fraud orders, with no external API cost and data kept on-device.',
            'Hand-tuning prompts and retrieval to assess investment risk from SEBI orders. Currently at 60 to 75% retrieval accuracy on an initial test set, and iterating to raise it.'
        ]
    },
    {
        title: 'SportSphere: Multi-Branch Turf Booking System',
        period: '2026 to present',
        status: 'In progress',
        image: '/images/projects/turf.svg',
        alt: 'Illustration of a turf pitch next to a grid of bookable time slots',
        tags: [
            'React',
            'TypeScript',
            'FastAPI',
            'SQLAlchemy',
            'PostgreSQL',
            'Docker',
            'Git'
        ],
        points: [
            'Designing a normalized PostgreSQL schema across 6 core entities (branches, sports, time slots, bookings, users, pricing) with SQLAlchemy models, keeping booking and billing data consistent.',
            'Building FastAPI services with request validation and structured business logic for multi-branch, multi-sport slot booking and Energy Shop purchases.',
            'Implementing booking logic that targets zero double-bookings across branch- and sport-specific pricing rules, with a React and TypeScript frontend and Docker containers.'
        ]
    }
];
const education = {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    school: 'Amrita Vishwa Vidyapeetham, Tamil Nadu, India',
    gpa: '8.51 / 10.00',
    graduating: 'June 2028',
    coursework: [
        {
            name: 'Probability and Statistics',
            grade: 'A+'
        },
        {
            name: 'Data Structures and Algorithms',
            grade: 'B+'
        },
        {
            name: 'Operating Systems',
            grade: 'A'
        },
        {
            name: 'Object-Oriented Programming'
        },
        {
            name: 'Database Management Systems'
        },
        {
            name: 'Computer Networks'
        },
        {
            name: 'Linear Algebra'
        },
        {
            name: 'Calculus'
        }
    ]
};
const upskilling = [
    {
        name: 'Risk Job Simulation',
        org: 'Goldman Sachs',
        date: 'May 2026'
    },
    {
        name: 'Data Analytics Job Simulation',
        org: 'Deloitte',
        date: 'May 2026'
    },
    {
        name: 'Python (Basics) Assessment',
        org: 'HackerRank',
        date: 'May 2026'
    },
    {
        name: 'Data Structures and Algorithms',
        org: 'Udemy',
        date: 'May 2026'
    },
    {
        name: 'Python',
        org: 'Udemy',
        date: 'Feb 2026'
    }
];
const publications = [
    {
        title: 'AI-driven intelligent automation for encrypted traffic pattern recognition in IoT-enabled networked systems',
        venue: '6th International Conference on Computer Vision and Robotics (CVR 2026)',
        status: 'Accepted for publication',
        authors: 'Ramya, G.R., Pabolu Amrutha Sai Spandana, Paladi, I., Sabbella, V. and Mallidi Sai Krishna Reddy'
    },
    {
        title: 'Water salinity and its impact in Kalpar Village: A participatory rural appraisal approach',
        venue: 'Industrial Ecology and Environmental Management Book Series, Springer Nature',
        status: '2026',
        authors: 'Nivethitha, B., Swetha, M., Manideep, A., Sabbella, V., Krithikk, T., Satish, A. and Nair, A.R.'
    }
];
const leadership = [
    {
        role: 'School Vice Captain',
        text: 'Represented and led the student body, building communication and accountability.'
    },
    {
        role: 'House Captain',
        text: 'Led my house to victory in the inter-house competition.'
    }
];
}),
]})(),
"[project]/components/Sections/Sections.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "aboutGrid": "Sections-module__4hJQrW__aboutGrid",
  "aboutText": "Sections-module__4hJQrW__aboutText",
  "badge": "Sections-module__4hJQrW__badge",
  "bigTitle": "Sections-module__4hJQrW__bigTitle",
  "bullets": "Sections-module__4hJQrW__bullets",
  "card": "Sections-module__4hJQrW__card",
  "cardBody": "Sections-module__4hJQrW__cardBody",
  "cardTitle": "Sections-module__4hJQrW__cardTitle",
  "chip": "Sections-module__4hJQrW__chip",
  "chips": "Sections-module__4hJQrW__chips",
  "contact": "Sections-module__4hJQrW__contact",
  "container": "Sections-module__4hJQrW__container",
  "cover": "Sections-module__4hJQrW__cover",
  "coverImg": "Sections-module__4hJQrW__coverImg",
  "coverWrap": "Sections-module__4hJQrW__coverWrap",
  "credGrid": "Sections-module__4hJQrW__credGrid",
  "credMeta": "Sections-module__4hJQrW__credMeta",
  "credTitle": "Sections-module__4hJQrW__credTitle",
  "expAside": "Sections-module__4hJQrW__expAside",
  "expGrid": "Sections-module__4hJQrW__expGrid",
  "expMeta": "Sections-module__4hJQrW__expMeta",
  "expRole": "Sections-module__4hJQrW__expRole",
  "flip": "Sections-module__4hJQrW__flip",
  "footer": "Sections-module__4hJQrW__footer",
  "grade": "Sections-module__4hJQrW__grade",
  "lead": "Sections-module__4hJQrW__lead",
  "link": "Sections-module__4hJQrW__link",
  "list": "Sections-module__4hJQrW__list",
  "listDate": "Sections-module__4hJQrW__listDate",
  "listSub": "Sections-module__4hJQrW__listSub",
  "mail": "Sections-module__4hJQrW__mail",
  "marquee": "Sections-module__4hJQrW__marquee",
  "marquees": "Sections-module__4hJQrW__marquees",
  "nav": "Sections-module__4hJQrW__nav",
  "navActive": "Sections-module__4hJQrW__navActive",
  "navLink": "Sections-module__4hJQrW__navLink",
  "navShown": "Sections-module__4hJQrW__navShown",
  "period": "Sections-module__4hJQrW__period",
  "pill": "Sections-module__4hJQrW__pill",
  "pillAccent": "Sections-module__4hJQrW__pillAccent",
  "pointText": "Sections-module__4hJQrW__pointText",
  "pointTitle": "Sections-module__4hJQrW__pointTitle",
  "points": "Sections-module__4hJQrW__points",
  "portrait": "Sections-module__4hJQrW__portrait",
  "portraitWrap": "Sections-module__4hJQrW__portraitWrap",
  "progress": "Sections-module__4hJQrW__progress",
  "project": "Sections-module__4hJQrW__project",
  "projectTitle": "Sections-module__4hJQrW__projectTitle",
  "pub": "Sections-module__4hJQrW__pub",
  "reveal": "Sections-module__4hJQrW__reveal",
  "section": "Sections-module__4hJQrW__section",
  "skillGrid": "Sections-module__4hJQrW__skillGrid",
  "social": "Sections-module__4hJQrW__social",
  "socialHandle": "Sections-module__4hJQrW__socialHandle",
  "socialName": "Sections-module__4hJQrW__socialName",
  "socials": "Sections-module__4hJQrW__socials",
  "stack": "Sections-module__4hJQrW__stack",
  "statLabel": "Sections-module__4hJQrW__statLabel",
  "statValue": "Sections-module__4hJQrW__statValue",
  "stats": "Sections-module__4hJQrW__stats",
  "status": "Sections-module__4hJQrW__status",
  "statusLive": "Sections-module__4hJQrW__statusLive",
  "title": "Sections-module__4hJQrW__title",
  "track": "Sections-module__4hJQrW__track",
  "trackReverse": "Sections-module__4hJQrW__trackReverse",
  "wide": "Sections-module__4hJQrW__wide",
});
}),
"[project]/components/VideoIntro/VideoIntro.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bar": "VideoIntro-module__EWLV3a__bar",
  "bars": "VideoIntro-module__EWLV3a__bars",
  "bgVideo": "VideoIntro-module__EWLV3a__bgVideo",
  "buttons": "VideoIntro-module__EWLV3a__buttons",
  "content": "VideoIntro-module__EWLV3a__content",
  "controls": "VideoIntro-module__EWLV3a__controls",
  "desc": "VideoIntro-module__EWLV3a__desc",
  "dim": "VideoIntro-module__EWLV3a__dim",
  "fgVideo": "VideoIntro-module__EWLV3a__fgVideo",
  "glass": "VideoIntro-module__EWLV3a__glass",
  "grade": "VideoIntro-module__EWLV3a__grade",
  "hero": "VideoIntro-module__EWLV3a__hero",
  "hint": "VideoIntro-module__EWLV3a__hint",
  "hintPulse": "VideoIntro-module__EWLV3a__hintPulse",
  "intro": "VideoIntro-module__EWLV3a__intro",
  "line": "VideoIntro-module__EWLV3a__line",
  "lineInner": "VideoIntro-module__EWLV3a__lineInner",
  "media": "VideoIntro-module__EWLV3a__media",
  "name": "VideoIntro-module__EWLV3a__name",
  "role": "VideoIntro-module__EWLV3a__role",
  "scroll": "VideoIntro-module__EWLV3a__scroll",
  "scrollLabel": "VideoIntro-module__EWLV3a__scrollLabel",
  "scrollPulse": "VideoIntro-module__EWLV3a__scrollPulse",
  "scrollTrack": "VideoIntro-module__EWLV3a__scrollTrack",
  "scrollWrap": "VideoIntro-module__EWLV3a__scrollWrap",
  "tagline": "VideoIntro-module__EWLV3a__tagline",
  "veil": "VideoIntro-module__EWLV3a__veil",
  "wrapper": "VideoIntro-module__EWLV3a__wrapper",
});
}),
];

//# sourceMappingURL=_1qhv8i_nb8u0x._.js.map