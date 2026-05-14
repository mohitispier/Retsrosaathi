import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/landing/CTASection.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/landing/CTASection.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=79425e35";
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=79425e35";
import { Button } from "/src/components/ui/button.jsx";
import { ArrowRight, CheckCircle } from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
const createPageUrl = (pageName) => `/${pageName}`;
export default function CTASection() {
  return /* @__PURE__ */ jsxDEV("section", { "data-source-location": "components/landing/CTASection:11:4", "data-dynamic-content": "true", className: "bg-slate-900 py-20 md:py-32 from-orange-600 to-orange-500 relative overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/CTASection:14:6", "data-dynamic-content": "true", className: "relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      "data-source-location": "components/landing/CTASection:15:8",
      "data-dynamic-content": "true",
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.8 },
      children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/CTASection:21:10", "data-dynamic-content": "false", className: "inline-block px-6 py-3 bg-white/20 text-white rounded-full text-sm font-bold mb-8 backdrop-blur-sm", children: "🎉 Limited Time Offer - Extended Free Trial" }, void 0, false, {
          fileName: "/app/src/components/landing/CTASection.jsx",
          lineNumber: 40,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "components/landing/CTASection:25:10", "data-dynamic-content": "false", className: "text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight", children: [
          "Stop Paying ",
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/CTASection:26:24", "data-dynamic-content": "false", className: "text-white decoration-wavy", children: "25% Commission" }, void 0, false, {
            fileName: "/app/src/components/landing/CTASection.jsx",
            lineNumber: 45,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV("br", { "data-source-location": "components/landing/CTASection:26:90", "data-dynamic-content": "false" }, void 0, false, {
            fileName: "/app/src/components/landing/CTASection.jsx",
            lineNumber: 45,
            columnNumber: 179
          }, this),
          "Start Keeping ",
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/CTASection:27:26", "data-dynamic-content": "false", className: "text-green-300", children: "100% Revenue" }, void 0, false, {
            fileName: "/app/src/components/landing/CTASection.jsx",
            lineNumber: 46,
            columnNumber: 27
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/landing/CTASection.jsx",
          lineNumber: 44,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/CTASection:30:10", "data-dynamic-content": "false", className: "text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed", children: "Join 10+ smart restaurants who switched to direct ordering. Save ₹5,000+ monthly in platform fees." }, void 0, false, {
          fileName: "/app/src/components/landing/CTASection.jsx",
          lineNumber: 49,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/CTASection:36:10", "data-dynamic-content": "true", className: "flex flex-wrap justify-center gap-8 mb-12", children: [
          { icon: "✓", text: "14-Day Free Trial", highlight: true },
          { icon: "✓", text: "No Credit Card" },
          { icon: "✓", text: "Setup in 10 Mins" },
          { icon: "✓", text: "Cancel Anytime" }
        ].map(
          (benefit, __arrIdx__) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/CTASection:43:12", "data-dynamic-content": "true", className: "flex items-center gap-3 text-white", "data-arr-index": __arrIdx__, children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/CTASection:44:16", "data-dynamic-content": "true", className: "w-8 h-8 rounded-full bg-white/30 flex items-center justify-center text-white font-bold backdrop-blur-sm", "data-arr-index": __arrIdx__, "data-arr-field": "icon", children: benefit.icon }, void 0, false, {
              fileName: "/app/src/components/landing/CTASection.jsx",
              lineNumber: 63,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/CTASection:47:16", "data-dynamic-content": "true", className: "font-semibold text-lg", "data-arr-index": __arrIdx__, "data-arr-field": "text", children: benefit.text }, void 0, false, {
              fileName: "/app/src/components/landing/CTASection.jsx",
              lineNumber: 66,
              columnNumber: 17
            }, this)
          ] }, benefit.text, true, {
            fileName: "/app/src/components/landing/CTASection.jsx",
            lineNumber: 62,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "/app/src/components/landing/CTASection.jsx",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/CTASection:52:10", "data-dynamic-content": "true", className: "flex flex-col sm:flex-row gap-4 justify-center mb-6", children: [
          /* @__PURE__ */ jsxDEV(Link, { "data-source-location": "components/landing/CTASection:53:12", "data-dynamic-content": "true", to: createPageUrl("GetStarted"), children: /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "components/landing/CTASection:54:14", "data-dynamic-content": "false", size: "lg", className: "bg-white text-orange-600 hover:bg-gray-100 px-8 py-5 text-lg font-semibold rounded-2xl shadow-2xl hover:scale-105 transition-all", children: [
            "Start Free Trial Now",
            /* @__PURE__ */ jsxDEV(ArrowRight, { "data-source-location": "components/landing/CTASection:56:16", "data-dynamic-content": "false", className: "w-5 h-5 ml-2" }, void 0, false, {
              fileName: "/app/src/components/landing/CTASection.jsx",
              lineNumber: 75,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/landing/CTASection.jsx",
            lineNumber: 73,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/app/src/components/landing/CTASection.jsx",
            lineNumber: 72,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(Link, { "data-source-location": "components/landing/CTASection:59:12", "data-dynamic-content": "true", to: createPageUrl("Contact"), children: /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "components/landing/CTASection:60:14", "data-dynamic-content": "false", size: "lg", variant: "outline", className: "bg-white/10 text-white px-8 py-5 text-lg font-medium rounded-2xl border-2 border-white hover:bg-white/20 backdrop-blur-sm", children: "Schedule Demo" }, void 0, false, {
            fileName: "/app/src/components/landing/CTASection.jsx",
            lineNumber: 79,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/app/src/components/landing/CTASection.jsx",
            lineNumber: 78,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/landing/CTASection.jsx",
          lineNumber: 71,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/CTASection:66:10", "data-dynamic-content": "false", className: "text-white/70 text-sm", children: "🔒 Trusted by 10+ restaurants • 99.9% Uptime • Enterprise Security" }, void 0, false, {
          fileName: "/app/src/components/landing/CTASection.jsx",
          lineNumber: 85,
          columnNumber: 11
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/app/src/components/landing/CTASection.jsx",
      lineNumber: 34,
      columnNumber: 9
    },
    this
  ) }, void 0, false, {
    fileName: "/app/src/components/landing/CTASection.jsx",
    lineNumber: 33,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/src/components/landing/CTASection.jsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
_c = CTASection;
var _c;
$RefreshReg$(_c, "CTASection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/landing/CTASection.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/landing/CTASection.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBb0JVOzs7Ozs7Ozs7Ozs7Ozs7O0FBcEJWLE9BQU9BLFdBQVc7QUFDbEIsU0FBU0MsWUFBWTtBQUNyQixTQUFTQyxjQUFjO0FBQ3ZCLFNBQVNDLGNBQWM7QUFDdkIsU0FBU0MsWUFBWUMsbUJBQW1CO0FBRXhDLE1BQU1DLGdCQUFnQkEsQ0FBQ0MsYUFBYSxJQUFJQSxRQUFRO0FBRWhELHdCQUF3QkMsYUFBYTtBQUNuQyxTQUNFLHVCQUFDLGFBQVEsd0JBQXFCLHNDQUFxQyx3QkFBcUIsUUFBTyxXQUFVLHNGQUd2RyxpQ0FBQyxTQUFJLHdCQUFxQixzQ0FBcUMsd0JBQXFCLFFBQU8sV0FBVSwrREFDbkc7QUFBQSxJQUFDLE9BQU87QUFBQSxJQUFQO0FBQUEsTUFBVyx3QkFBcUI7QUFBQSxNQUFxQyx3QkFBcUI7QUFBQSxNQUMzRixTQUFTLEVBQUVDLFNBQVMsR0FBR0MsR0FBRyxHQUFHO0FBQUEsTUFDN0IsYUFBYSxFQUFFRCxTQUFTLEdBQUdDLEdBQUcsRUFBRTtBQUFBLE1BQ2hDLFVBQVUsRUFBRUMsTUFBTSxLQUFLO0FBQUEsTUFDdkIsWUFBWSxFQUFFQyxVQUFVLElBQUk7QUFBQSxNQUUxQjtBQUFBLCtCQUFDLFNBQUksd0JBQXFCLHVDQUFzQyx3QkFBcUIsU0FBUSxXQUFVLHNHQUFvRywyREFBM007QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUVBO0FBQUEsUUFFQSx1QkFBQyxRQUFHLHdCQUFxQix1Q0FBc0Msd0JBQXFCLFNBQVEsV0FBVSw0RUFBMEU7QUFBQTtBQUFBLFVBQ2xLLHVCQUFDLFVBQUssd0JBQXFCLHVDQUFzQyx3QkFBcUIsU0FBUSxXQUFVLDhCQUE2Qiw4QkFBckk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBbUo7QUFBQSxVQUFPLHVCQUFDLFFBQUcsd0JBQXFCLHVDQUFzQyx3QkFBcUIsV0FBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBMkY7QUFBQTtBQUFBLFVBQ25QLHVCQUFDLFVBQUssd0JBQXFCLHVDQUFzQyx3QkFBcUIsU0FBUSxXQUFVLGtCQUFpQiw0QkFBekg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBcUk7QUFBQSxhQUZySjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBR0E7QUFBQSxRQUVBLHVCQUFDLE9BQUUsd0JBQXFCLHVDQUFzQyx3QkFBcUIsU0FBUSxXQUFVLDJFQUEwRSxrSEFBL0s7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUdBO0FBQUEsUUFHQSx1QkFBQyxTQUFJLHdCQUFxQix1Q0FBc0Msd0JBQXFCLFFBQU8sV0FBVSw2Q0FDbkc7QUFBQSxVQUNELEVBQUVDLE1BQU0sS0FBS0MsTUFBTSxxQkFBcUJDLFdBQVcsS0FBSztBQUFBLFVBQ3hELEVBQUVGLE1BQU0sS0FBS0MsTUFBTSxpQkFBaUI7QUFBQSxVQUNwQyxFQUFFRCxNQUFNLEtBQUtDLE1BQU0sbUJBQW1CO0FBQUEsVUFDdEMsRUFBRUQsTUFBTSxLQUFLQyxNQUFNLGlCQUFpQjtBQUFBLFFBQUMsRUFDckNFO0FBQUFBLFVBQUksQ0FBQ0MsU0FBU0MsZUFDZCx1QkFBQyxTQUFJLHdCQUFxQix1Q0FBc0Msd0JBQXFCLFFBQTBCLFdBQVUsc0NBQXFDLGtCQUFnQkEsWUFDMUs7QUFBQSxtQ0FBQyxTQUFJLHdCQUFxQix1Q0FBc0Msd0JBQXFCLFFBQU8sV0FBVSwyR0FBMEcsa0JBQWdCQSxZQUFZLGtCQUFlLFFBQ3hQRCxrQkFBUUosUUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVBO0FBQUEsWUFDQSx1QkFBQyxVQUFLLHdCQUFxQix1Q0FBc0Msd0JBQXFCLFFBQU8sV0FBVSx5QkFBd0Isa0JBQWdCSyxZQUFZLGtCQUFlLFFBQVFELGtCQUFRSCxRQUExTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUErTDtBQUFBLGVBSmxHRyxRQUFRSCxNQUF6RztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUtFO0FBQUEsUUFDRixLQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFjQTtBQUFBLFFBRUEsdUJBQUMsU0FBSSx3QkFBcUIsdUNBQXNDLHdCQUFxQixRQUFPLFdBQVUsdURBQ3BHO0FBQUEsaUNBQUMsUUFBSyx3QkFBcUIsdUNBQXNDLHdCQUFxQixRQUFPLElBQUlSLGNBQWMsWUFBWSxHQUN6SCxpQ0FBQyxVQUFPLHdCQUFxQix1Q0FBc0Msd0JBQXFCLFNBQVEsTUFBSyxNQUFLLFdBQVUsb0lBQWtJO0FBQUE7QUFBQSxZQUVwUCx1QkFBQyxjQUFXLHdCQUFxQix1Q0FBc0Msd0JBQXFCLFNBQVEsV0FBVSxrQkFBOUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBNEg7QUFBQSxlQUY5SDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUdBLEtBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFLQTtBQUFBLFVBQ0EsdUJBQUMsUUFBSyx3QkFBcUIsdUNBQXNDLHdCQUFxQixRQUFPLElBQUlBLGNBQWMsU0FBUyxHQUN0SCxpQ0FBQyxVQUFPLHdCQUFxQix1Q0FBc0Msd0JBQXFCLFNBQVEsTUFBSyxNQUFLLFNBQVEsV0FBVSxXQUFVLDZIQUEySCw2QkFBalE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFQSxLQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSUE7QUFBQSxhQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFZQTtBQUFBLFFBRUEsdUJBQUMsT0FBRSx3QkFBcUIsdUNBQXNDLHdCQUFxQixTQUFRLFdBQVUseUJBQXdCLGtGQUE3SDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUE7QUFBQTtBQUFBO0FBQUEsSUFyREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBc0RBLEtBdkRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0F3REEsS0EzREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQTREQTtBQUVKO0FBQUNhLEtBaEV1Qlg7QUFBVSxJQUFBVztBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwibW90aW9uIiwiQnV0dG9uIiwiQXJyb3dSaWdodCIsIkNoZWNrQ2lyY2xlIiwiY3JlYXRlUGFnZVVybCIsInBhZ2VOYW1lIiwiQ1RBU2VjdGlvbiIsIm9wYWNpdHkiLCJ5Iiwib25jZSIsImR1cmF0aW9uIiwiaWNvbiIsInRleHQiLCJoaWdobGlnaHQiLCJtYXAiLCJiZW5lZml0IiwiX19hcnJJZHhfXyIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkNUQVNlY3Rpb24uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBBcnJvd1JpZ2h0LCBDaGVja0NpcmNsZSB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuY29uc3QgY3JlYXRlUGFnZVVybCA9IChwYWdlTmFtZSkgPT4gYC8ke3BhZ2VOYW1lfWA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENUQVNlY3Rpb24oKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQ1RBU2VjdGlvbjoxMTo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYmctc2xhdGUtOTAwIHB5LTIwIG1kOnB5LTMyIGZyb20tb3JhbmdlLTYwMCB0by1vcmFuZ2UtNTAwIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxuXG5cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQ1RBU2VjdGlvbjoxNDo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWF4LXctNXhsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LTggdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQ1RBU2VjdGlvbjoxNTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAzMCB9fVxuICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC44IH19PlxuXG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9DVEFTZWN0aW9uOjIxOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweC02IHB5LTMgYmctd2hpdGUvMjAgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgdGV4dC1zbSBmb250LWJvbGQgbWItOCBiYWNrZHJvcC1ibHVyLXNtXCI+XG4gICAgICAgICAgICDwn46JIExpbWl0ZWQgVGltZSBPZmZlciAtIEV4dGVuZGVkIEZyZWUgVHJpYWxcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8aDIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQ1RBU2VjdGlvbjoyNToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTV4bCBsZzp0ZXh0LTZ4bCBmb250LWJvbGQgdGV4dC13aGl0ZSBtYi02IGxlYWRpbmctdGlnaHRcIj5cbiAgICAgICAgICAgIFN0b3AgUGF5aW5nIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0NUQVNlY3Rpb246MjY6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBkZWNvcmF0aW9uLXdhdnlcIj4yNSUgQ29tbWlzc2lvbjwvc3Bhbj48YnIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQ1RBU2VjdGlvbjoyNjo5MFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPlxuICAgICAgICAgICAgU3RhcnQgS2VlcGluZyA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9DVEFTZWN0aW9uOjI3OjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tMzAwXCI+MTAwJSBSZXZlbnVlPC9zcGFuPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgXG4gICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQ1RBU2VjdGlvbjozMDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1kOnRleHQteGwgdGV4dC13aGl0ZS85MCBtYi04IG1heC13LTN4bCBteC1hdXRvIGxlYWRpbmctcmVsYXhlZFwiPkpvaW4gMTArIHNtYXJ0IHJlc3RhdXJhbnRzIHdobyBzd2l0Y2hlZCB0byBkaXJlY3Qgb3JkZXJpbmcuIFNhdmUg4oK5NSwwMDArIG1vbnRobHkgaW4gcGxhdGZvcm0gZmVlcy5cblxuXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgey8qIEJlbmVmaXRzICovfVxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQ1RBU2VjdGlvbjozNjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGdhcC04IG1iLTEyXCI+XG4gICAgICAgICAgICB7W1xuICAgICAgICAgICAgeyBpY29uOiBcIuKck1wiLCB0ZXh0OiBcIjE0LURheSBGcmVlIFRyaWFsXCIsIGhpZ2hsaWdodDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBpY29uOiBcIuKck1wiLCB0ZXh0OiBcIk5vIENyZWRpdCBDYXJkXCIgfSxcbiAgICAgICAgICAgIHsgaWNvbjogXCLinJNcIiwgdGV4dDogXCJTZXR1cCBpbiAxMCBNaW5zXCIgfSxcbiAgICAgICAgICAgIHsgaWNvbjogXCLinJNcIiwgdGV4dDogXCJDYW5jZWwgQW55dGltZVwiIH1dLlxuICAgICAgICAgICAgbWFwKChiZW5lZml0LCBfX2FycklkeF9fKSA9PlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9DVEFTZWN0aW9uOjQzOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtiZW5lZml0LnRleHR9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHRleHQtd2hpdGVcIiBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9DVEFTZWN0aW9uOjQ0OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidy04IGgtOCByb3VuZGVkLWZ1bGwgYmctd2hpdGUvMzAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSBmb250LWJvbGQgYmFja2Ryb3AtYmx1ci1zbVwiIGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffSBkYXRhLWFyci1maWVsZD1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgIHtiZW5lZml0Lmljb259XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQ1RBU2VjdGlvbjo0NzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1sZ1wiIGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffSBkYXRhLWFyci1maWVsZD1cInRleHRcIj57YmVuZWZpdC50ZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9DVEFTZWN0aW9uOjUyOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBnYXAtNCBqdXN0aWZ5LWNlbnRlciBtYi02XCI+XG4gICAgICAgICAgICA8TGluayBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9DVEFTZWN0aW9uOjUzOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdG89e2NyZWF0ZVBhZ2VVcmwoXCJHZXRTdGFydGVkXCIpfT5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9DVEFTZWN0aW9uOjU0OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHNpemU9XCJsZ1wiIGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtb3JhbmdlLTYwMCBob3ZlcjpiZy1ncmF5LTEwMCBweC04IHB5LTUgdGV4dC1sZyBmb250LXNlbWlib2xkIHJvdW5kZWQtMnhsIHNoYWRvdy0yeGwgaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tYWxsXCI+XG4gICAgICAgICAgICAgICAgU3RhcnQgRnJlZSBUcmlhbCBOb3dcbiAgICAgICAgICAgICAgICA8QXJyb3dSaWdodCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9DVEFTZWN0aW9uOjU2OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTUgbWwtMlwiIC8+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQ1RBU2VjdGlvbjo1OToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHRvPXtjcmVhdGVQYWdlVXJsKFwiQ29udGFjdFwiKX0+XG4gICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQ1RBU2VjdGlvbjo2MDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBzaXplPVwibGdcIiB2YXJpYW50PVwib3V0bGluZVwiIGNsYXNzTmFtZT1cImJnLXdoaXRlLzEwIHRleHQtd2hpdGUgcHgtOCBweS01IHRleHQtbGcgZm9udC1tZWRpdW0gcm91bmRlZC0yeGwgYm9yZGVyLTIgYm9yZGVyLXdoaXRlIGhvdmVyOmJnLXdoaXRlLzIwIGJhY2tkcm9wLWJsdXItc21cIj5cbiAgICAgICAgICAgICAgICBTY2hlZHVsZSBEZW1vXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0NUQVNlY3Rpb246NjY6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS83MCB0ZXh0LXNtXCI+8J+UkiBUcnVzdGVkIGJ5IDEwKyByZXN0YXVyYW50cyDigKIgOTkuOSUgVXB0aW1lIOKAoiBFbnRlcnByaXNlIFNlY3VyaXR5XG5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj4pO1xuXG59Il0sImZpbGUiOiIvYXBwL3NyYy9jb21wb25lbnRzL2xhbmRpbmcvQ1RBU2VjdGlvbi5qc3gifQ==