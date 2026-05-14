import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/landing/HowItWorksSection.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/landing/HowItWorksSection.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=79425e35";
import { UserPlus, Menu, QrCode, ShoppingBag, TrendingUp } from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Sign Up & Setup",
    description: "Create your account in 2 minutes. Enter your restaurant details and you're ready to go."
  },
  {
    icon: Menu,
    step: "02",
    title: "Build Your Menu",
    description: "Add your dishes with photos, prices, and variants. Our AI can help import from existing menus."
  },
  {
    icon: QrCode,
    step: "03",
    title: "Generate QR Codes",
    description: "Create unique QR codes for each table. Print them or display on table stands."
  },
  {
    icon: ShoppingBag,
    step: "04",
    title: "Start Receiving Orders",
    description: "Customers scan, order, and pay. You receive orders instantly on your dashboard."
  },
  {
    icon: TrendingUp,
    step: "05",
    title: "Grow Your Business",
    description: "Build customer relationships, run promotions, and scale without paying commissions."
  }
];
export default function HowItWorksSection() {
  return /* @__PURE__ */ jsxDEV("section", { "data-source-location": "components/landing/HowItWorksSection:40:4", "data-dynamic-content": "true", className: "py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HowItWorksSection:42:6", "data-dynamic-content": "false", className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HowItWorksSection:43:8", "data-dynamic-content": "false", className: "absolute top-20 left-20 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30" }, void 0, false, {
        fileName: "/app/src/components/landing/HowItWorksSection.jsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HowItWorksSection:44:8", "data-dynamic-content": "false", className: "absolute bottom-20 right-20 w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-30" }, void 0, false, {
        fileName: "/app/src/components/landing/HowItWorksSection.jsx",
        lineNumber: 63,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/landing/HowItWorksSection.jsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HowItWorksSection:47:6", "data-dynamic-content": "true", className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HowItWorksSection:49:8", "data-dynamic-content": "true", className: "text-center max-w-3xl mx-auto mb-16 md:mb-24", children: /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-source-location": "components/landing/HowItWorksSection:50:10",
          "data-dynamic-content": "true",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HowItWorksSection:55:12", "data-dynamic-content": "false", className: "inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-6", children: "Simple 5-Step Process" }, void 0, false, {
              fileName: "/app/src/components/landing/HowItWorksSection.jsx",
              lineNumber: 74,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "components/landing/HowItWorksSection:58:12", "data-dynamic-content": "false", className: "text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight", children: [
              "Launch in ",
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/HowItWorksSection:59:24", "data-dynamic-content": "false", className: "text-orange-600", children: "Under 10 Minutes" }, void 0, false, {
                fileName: "/app/src/components/landing/HowItWorksSection.jsx",
                lineNumber: 78,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/landing/HowItWorksSection.jsx",
              lineNumber: 77,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/HowItWorksSection:61:12", "data-dynamic-content": "false", className: "text-xl md:text-2xl text-gray-600", children: "From signup to your first order - it's that fast" }, void 0, false, {
              fileName: "/app/src/components/landing/HowItWorksSection.jsx",
              lineNumber: 80,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/src/components/landing/HowItWorksSection.jsx",
          lineNumber: 69,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "/app/src/components/landing/HowItWorksSection.jsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HowItWorksSection:68:8", "data-dynamic-content": "true", className: "relative", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HowItWorksSection:70:10", "data-dynamic-content": "false", className: "hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200 rounded-full" }, void 0, false, {
          fileName: "/app/src/components/landing/HowItWorksSection.jsx",
          lineNumber: 89,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HowItWorksSection:72:10", "data-dynamic-content": "true", className: "grid md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6", children: steps.map(
          (step, index) => /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              "data-source-location": "components/landing/HowItWorksSection:74:14",
              "data-dynamic-content": "true",
              initial: { opacity: 0, scale: 0.8, y: 20 },
              whileInView: { opacity: 1, scale: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: index * 0.15, duration: 0.5 },
              className: "relative text-center group",
              "data-arr-index": index,
              "data-arr-variable-name": "steps",
              children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HowItWorksSection:82:16", "data-dynamic-content": "true", className: "relative inline-block mb-8", "data-arr-index": index, "data-arr-variable-name": "steps", children: [
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HowItWorksSection:84:18", "data-dynamic-content": "false", className: "absolute inset-0 bg-orange-100 rounded-3xl blur-2xl group-hover:bg-orange-200 transition-all duration-500", "data-arr-index": index, "data-arr-variable-name": "steps" }, void 0, false, {
                    fileName: "/app/src/components/landing/HowItWorksSection.jsx",
                    lineNumber: 103,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HowItWorksSection:86:18", "data-dynamic-content": "false", className: "relative w-24 h-24 md:w-28 md:h-28 bg-white rounded-3xl shadow-xl flex items-center justify-center border-2 border-orange-200 mx-auto group-hover:border-orange-300 group-hover:scale-110 transition-all duration-500", "data-arr-index": index, "data-arr-variable-name": "steps", children: /* @__PURE__ */ jsxDEV(step.icon, { "data-source-location": "components/landing/HowItWorksSection:87:20", "data-dynamic-content": "false", className: "w-10 h-10 md:w-12 md:h-12 text-orange-600 group-hover:text-orange-500 transition-colors" }, void 0, false, {
                    fileName: "/app/src/components/landing/HowItWorksSection.jsx",
                    lineNumber: 106,
                    columnNumber: 21
                  }, this) }, void 0, false, {
                    fileName: "/app/src/components/landing/HowItWorksSection.jsx",
                    lineNumber: 105,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HowItWorksSection:90:18", "data-dynamic-content": "true", className: "absolute -top-3 -right-3 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-full flex items-center justify-center text-white text-base md:text-lg font-bold shadow-xl group-hover:scale-110 transition-transform duration-300", "data-arr-index": index, "data-arr-variable-name": "steps", "data-arr-field": "step", children: step.step }, void 0, false, {
                    fileName: "/app/src/components/landing/HowItWorksSection.jsx",
                    lineNumber: 109,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/landing/HowItWorksSection.jsx",
                  lineNumber: 101,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "components/landing/HowItWorksSection:95:16", "data-dynamic-content": "true", className: "text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors", "data-arr-index": index, "data-arr-variable-name": "steps", "data-arr-field": "title", children: step.title }, void 0, false, {
                  fileName: "/app/src/components/landing/HowItWorksSection.jsx",
                  lineNumber: 114,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/HowItWorksSection:98:16", "data-dynamic-content": "true", className: "text-gray-600 text-sm md:text-base leading-relaxed", "data-arr-index": index, "data-arr-variable-name": "steps", "data-arr-field": "description", children: step.description }, void 0, false, {
                  fileName: "/app/src/components/landing/HowItWorksSection.jsx",
                  lineNumber: 117,
                  columnNumber: 17
                }, this)
              ]
            },
            step.step,
            true,
            {
              fileName: "/app/src/components/landing/HowItWorksSection.jsx",
              lineNumber: 93,
              columnNumber: 13
            },
            this
          )
        ) }, void 0, false, {
          fileName: "/app/src/components/landing/HowItWorksSection.jsx",
          lineNumber: 91,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/landing/HowItWorksSection.jsx",
        lineNumber: 87,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/landing/HowItWorksSection.jsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/landing/HowItWorksSection.jsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}
_c = HowItWorksSection;
var _c;
$RefreshReg$(_c, "HowItWorksSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/landing/HowItWorksSection.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/landing/HowItWorksSection.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QXVCLFNBQVEsa0JBQWUsUUFDOWFSLGVBQUtBLFFBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFFQTtBQUFBLHFCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBV0E7QUFBQSxnQkFFQSx1QkFBQyxRQUFHLHdCQUFxQiw4Q0FBNkMsd0JBQXFCLFFBQU8sV0FBVSxpR0FBZ0csa0JBQWdCUSxPQUFPLDBCQUF1QixTQUFRLGtCQUFlLFNBQzlRUixlQUFLQyxTQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRUE7QUFBQSxnQkFDQSx1QkFBQyxPQUFFLHdCQUFxQiw4Q0FBNkMsd0JBQXFCLFFBQU8sV0FBVSxzREFBcUQsa0JBQWdCTyxPQUFPLDBCQUF1QixTQUFRLGtCQUFlLGVBQ2xPUixlQUFLRSxlQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRUE7QUFBQTtBQUFBO0FBQUEsWUF6QkNGLEtBQUtBO0FBQUFBLFlBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQTJCRTtBQUFBLFFBQ0YsS0E5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQStCQTtBQUFBLFdBbkNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFvQ0E7QUFBQSxTQXpERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBMERBO0FBQUEsT0FqRUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWtFQTtBQUVKO0FBQUNZLEtBdEV1QlQ7QUFBaUIsSUFBQVM7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwiVXNlclBsdXMiLCJNZW51IiwiUXJDb2RlIiwiU2hvcHBpbmdCYWciLCJUcmVuZGluZ1VwIiwic3RlcHMiLCJpY29uIiwic3RlcCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJIb3dJdFdvcmtzU2VjdGlvbiIsIm9wYWNpdHkiLCJ5Iiwib25jZSIsIm1hcCIsImluZGV4Iiwic2NhbGUiLCJkZWxheSIsImR1cmF0aW9uIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiSG93SXRXb3Jrc1NlY3Rpb24uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBVc2VyUGx1cywgTWVudSwgUXJDb2RlLCBTaG9wcGluZ0JhZywgVHJlbmRpbmdVcCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuY29uc3Qgc3RlcHMgPSBbXG57XG4gIGljb246IFVzZXJQbHVzLFxuICBzdGVwOiBcIjAxXCIsXG4gIHRpdGxlOiBcIlNpZ24gVXAgJiBTZXR1cFwiLFxuICBkZXNjcmlwdGlvbjogXCJDcmVhdGUgeW91ciBhY2NvdW50IGluIDIgbWludXRlcy4gRW50ZXIgeW91ciByZXN0YXVyYW50IGRldGFpbHMgYW5kIHlvdSdyZSByZWFkeSB0byBnby5cIlxufSxcbntcbiAgaWNvbjogTWVudSxcbiAgc3RlcDogXCIwMlwiLFxuICB0aXRsZTogXCJCdWlsZCBZb3VyIE1lbnVcIixcbiAgZGVzY3JpcHRpb246IFwiQWRkIHlvdXIgZGlzaGVzIHdpdGggcGhvdG9zLCBwcmljZXMsIGFuZCB2YXJpYW50cy4gT3VyIEFJIGNhbiBoZWxwIGltcG9ydCBmcm9tIGV4aXN0aW5nIG1lbnVzLlwiXG59LFxue1xuICBpY29uOiBRckNvZGUsXG4gIHN0ZXA6IFwiMDNcIixcbiAgdGl0bGU6IFwiR2VuZXJhdGUgUVIgQ29kZXNcIixcbiAgZGVzY3JpcHRpb246IFwiQ3JlYXRlIHVuaXF1ZSBRUiBjb2RlcyBmb3IgZWFjaCB0YWJsZS4gUHJpbnQgdGhlbSBvciBkaXNwbGF5IG9uIHRhYmxlIHN0YW5kcy5cIlxufSxcbntcbiAgaWNvbjogU2hvcHBpbmdCYWcsXG4gIHN0ZXA6IFwiMDRcIixcbiAgdGl0bGU6IFwiU3RhcnQgUmVjZWl2aW5nIE9yZGVyc1wiLFxuICBkZXNjcmlwdGlvbjogXCJDdXN0b21lcnMgc2Nhbiwgb3JkZXIsIGFuZCBwYXkuIFlvdSByZWNlaXZlIG9yZGVycyBpbnN0YW50bHkgb24geW91ciBkYXNoYm9hcmQuXCJcbn0sXG57XG4gIGljb246IFRyZW5kaW5nVXAsXG4gIHN0ZXA6IFwiMDVcIixcbiAgdGl0bGU6IFwiR3JvdyBZb3VyIEJ1c2luZXNzXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkJ1aWxkIGN1c3RvbWVyIHJlbGF0aW9uc2hpcHMsIHJ1biBwcm9tb3Rpb25zLCBhbmQgc2NhbGUgd2l0aG91dCBwYXlpbmcgY29tbWlzc2lvbnMuXCJcbn1dO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvd0l0V29ya3NTZWN0aW9uKCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hvd0l0V29ya3NTZWN0aW9uOjQwOjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJweS0xNiBtZDpweS0yNCBsZzpweS0zMiBiZy13aGl0ZSByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgIHsvKiBCYWNrZ3JvdW5kIGRlY29yYXRpb24gKi99XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hvd0l0V29ya3NTZWN0aW9uOjQyOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMFwiPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hvd0l0V29ya3NTZWN0aW9uOjQzOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIwIGxlZnQtMjAgdy05NiBoLTk2IGJnLW9yYW5nZS0xMDAgcm91bmRlZC1mdWxsIGJsdXItM3hsIG9wYWNpdHktMzBcIiAvPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hvd0l0V29ya3NTZWN0aW9uOjQ0OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTIwIHJpZ2h0LTIwIHctOTYgaC05NiBiZy1yb3NlLTEwMCByb3VuZGVkLWZ1bGwgYmx1ci0zeGwgb3BhY2l0eS0zMFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9Ib3dJdFdvcmtzU2VjdGlvbjo0Nzo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9Ib3dJdFdvcmtzU2VjdGlvbjo0OTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWF4LXctM3hsIG14LWF1dG8gbWItMTYgbWQ6bWItMjRcIj5cbiAgICAgICAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9Ib3dJdFdvcmtzU2VjdGlvbjo1MDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxuICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19PlxuXG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hvd0l0V29ya3NTZWN0aW9uOjU1OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweC00IHB5LTIgYmctb3JhbmdlLTEwMCB0ZXh0LW9yYW5nZS02MDAgcm91bmRlZC1mdWxsIHRleHQtc20gZm9udC1zZW1pYm9sZCBtYi02XCI+XG4gICAgICAgICAgICAgIFNpbXBsZSA1LVN0ZXAgUHJvY2Vzc1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSG93SXRXb3Jrc1NlY3Rpb246NTg6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC00eGwgbWQ6dGV4dC01eGwgbGc6dGV4dC02eGwgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMCBtYi02IGxlYWRpbmctdGlnaHRcIj5cbiAgICAgICAgICAgICAgTGF1bmNoIGluIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hvd0l0V29ya3NTZWN0aW9uOjU5OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTYwMFwiPlVuZGVyIDEwIE1pbnV0ZXM8L3NwYW4+XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSG93SXRXb3Jrc1NlY3Rpb246NjE6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTJ4bCB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgIEZyb20gc2lnbnVwIHRvIHlvdXIgZmlyc3Qgb3JkZXIgLSBpdCdzIHRoYXQgZmFzdFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIFN0ZXBzICovfVxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hvd0l0V29ya3NTZWN0aW9uOjY4OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIHsvKiBDb25uZWN0aW5nIExpbmUgKi99XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9Ib3dJdFdvcmtzU2VjdGlvbjo3MDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2sgYWJzb2x1dGUgdG9wLTMyIGxlZnQtMCByaWdodC0wIGgtMSBiZy1ncmFkaWVudC10by1yIGZyb20tb3JhbmdlLTIwMCB2aWEtb3JhbmdlLTMwMCB0by1vcmFuZ2UtMjAwIHJvdW5kZWQtZnVsbFwiIC8+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9Ib3dJdFdvcmtzU2VjdGlvbjo3MjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTUgZ2FwLTggbGc6Z2FwLTZcIj5cbiAgICAgICAgICAgIHtzdGVwcy5tYXAoKHN0ZXAsIGluZGV4KSA9PlxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSG93SXRXb3Jrc1NlY3Rpb246NzQ6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAga2V5PXtzdGVwLnN0ZXB9XG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjgsIHk6IDIwIH19XG4gICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCBzY2FsZTogMSwgeTogMCB9fVxuICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogaW5kZXggKiAwLjE1LCBkdXJhdGlvbjogMC41IH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0ZXh0LWNlbnRlciBncm91cFwiIGRhdGEtYXJyLWluZGV4PXtpbmRleH0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cInN0ZXBzXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hvd0l0V29ya3NTZWN0aW9uOjgyOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWJsb2NrIG1iLThcIiBkYXRhLWFyci1pbmRleD17aW5kZXh9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJzdGVwc1wiPlxuICAgICAgICAgICAgICAgICAgey8qIEdsb3cgZWZmZWN0ICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9Ib3dJdFdvcmtzU2VjdGlvbjo4NDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLW9yYW5nZS0xMDAgcm91bmRlZC0zeGwgYmx1ci0yeGwgZ3JvdXAtaG92ZXI6Ymctb3JhbmdlLTIwMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDBcIiBkYXRhLWFyci1pbmRleD17aW5kZXh9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJzdGVwc1wiIC8+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSG93SXRXb3Jrc1NlY3Rpb246ODY6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy0yNCBoLTI0IG1kOnctMjggbWQ6aC0yOCBiZy13aGl0ZSByb3VuZGVkLTN4bCBzaGFkb3cteGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYm9yZGVyLTIgYm9yZGVyLW9yYW5nZS0yMDAgbXgtYXV0byBncm91cC1ob3Zlcjpib3JkZXItb3JhbmdlLTMwMCBncm91cC1ob3ZlcjpzY2FsZS0xMTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwXCIgZGF0YS1hcnItaW5kZXg9e2luZGV4fSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwic3RlcHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN0ZXAuaWNvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9Ib3dJdFdvcmtzU2VjdGlvbjo4NzoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgbWQ6dy0xMiBtZDpoLTEyIHRleHQtb3JhbmdlLTYwMCBncm91cC1ob3Zlcjp0ZXh0LW9yYW5nZS01MDAgdHJhbnNpdGlvbi1jb2xvcnNcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSG93SXRXb3Jrc1NlY3Rpb246OTA6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTMgLXJpZ2h0LTMgdy0xMCBoLTEwIG1kOnctMTIgbWQ6aC0xMiBiZy1ncmFkaWVudC10by1iciBmcm9tLW9yYW5nZS02MDAgdG8tb3JhbmdlLTUwMCByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSB0ZXh0LWJhc2UgbWQ6dGV4dC1sZyBmb250LWJvbGQgc2hhZG93LXhsIGdyb3VwLWhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDBcIiBkYXRhLWFyci1pbmRleD17aW5kZXh9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJzdGVwc1wiIGRhdGEtYXJyLWZpZWxkPVwic3RlcFwiPlxuICAgICAgICAgICAgICAgICAgICB7c3RlcC5zdGVwfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGgzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hvd0l0V29ya3NTZWN0aW9uOjk1OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1sZyBtZDp0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwIG1iLTMgZ3JvdXAtaG92ZXI6dGV4dC1vcmFuZ2UtNjAwIHRyYW5zaXRpb24tY29sb3JzXCIgZGF0YS1hcnItaW5kZXg9e2luZGV4fSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwic3RlcHNcIiBkYXRhLWFyci1maWVsZD1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICB7c3RlcC50aXRsZX1cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hvd0l0V29ya3NTZWN0aW9uOjk4OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtIG1kOnRleHQtYmFzZSBsZWFkaW5nLXJlbGF4ZWRcIiBkYXRhLWFyci1pbmRleD17aW5kZXh9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJzdGVwc1wiIGRhdGEtYXJyLWZpZWxkPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgIHtzdGVwLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+KTtcblxufSJdLCJmaWxlIjoiL2FwcC9zcmMvY29tcG9uZW50cy9sYW5kaW5nL0hvd0l0V29ya3NTZWN0aW9uLmpzeCJ9