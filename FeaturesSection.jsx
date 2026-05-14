import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/landing/FeaturesSection.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/landing/FeaturesSection.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=79425e35";
import {
  QrCode,
  Smartphone,
  CreditCard,
  Users,
  BarChart3,
  ShieldCheck,
  Clock,
  Globe
} from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
const features = [
  {
    icon: QrCode,
    title: "QR Code Ordering",
    description: "Customers scan, browse your menu, and order directly from their table. No app download needed.",
    color: "violet"
  },
  {
    icon: Smartphone,
    title: "Digital Menu",
    description: "Beautiful, mobile-optimized menus with photos, variants, and real-time availability updates.",
    color: "blue"
  },
  {
    icon: CreditCard,
    title: "Direct Payments",
    description: "Accept payments via UPI, cards, or cash. Money goes directly to your account.",
    color: "green"
  },
  {
    icon: Users,
    title: "Customer Database",
    description: "Build your own customer list. Send offers and build loyalty without paying per message.",
    color: "orange"
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track orders, revenue, popular items, and customer behavior in real-time.",
    color: "pink"
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime. Your data is always safe.",
    color: "indigo"
  },
  {
    icon: Clock,
    title: "Quick Setup",
    description: "Get started in under 10 minutes. Upload menu, generate QR codes, start taking orders.",
    color: "cyan"
  },
  {
    icon: Globe,
    title: "Multi-Outlet Support",
    description: "Manage multiple restaurant locations from a single dashboard.",
    color: "purple"
  }
];
const colorClasses = {
  violet: "bg-violet-100 text-violet-600",
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
  orange: "bg-orange-100 text-orange-600",
  pink: "bg-pink-100 text-pink-600",
  indigo: "bg-indigo-100 text-indigo-600",
  cyan: "bg-cyan-100 text-cyan-600",
  purple: "bg-purple-100 text-purple-600"
};
export default function FeaturesSection() {
  return /* @__PURE__ */ jsxDEV("section", { "data-source-location": "components/landing/FeaturesSection:72:4", "data-dynamic-content": "true", className: "py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-orange-50/30 to-white", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/FeaturesSection:73:6", "data-dynamic-content": "true", className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/FeaturesSection:75:8", "data-dynamic-content": "true", className: "text-center max-w-3xl mx-auto mb-12 md:mb-20", children: /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-source-location": "components/landing/FeaturesSection:76:10",
        "data-dynamic-content": "true",
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/FeaturesSection:81:12", "data-dynamic-content": "false", className: "inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4", children: "Complete Restaurant Solution" }, void 0, false, {
            fileName: "/app/src/components/landing/FeaturesSection.jsx",
            lineNumber: 100,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "components/landing/FeaturesSection:84:12", "data-dynamic-content": "false", className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-5 md:mb-6 leading-tight", children: [
            "Everything You Need to",
            /* @__PURE__ */ jsxDEV("br", { "data-source-location": "components/landing/FeaturesSection:85:36", "data-dynamic-content": "false" }, void 0, false, {
              fileName: "/app/src/components/landing/FeaturesSection.jsx",
              lineNumber: 104,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/FeaturesSection:86:14", "data-dynamic-content": "false", className: "bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent", children: "Run Your Restaurant" }, void 0, false, {
              fileName: "/app/src/components/landing/FeaturesSection.jsx",
              lineNumber: 105,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/landing/FeaturesSection.jsx",
            lineNumber: 103,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/FeaturesSection:88:12", "data-dynamic-content": "false", className: "text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed", children: "Full-featured digital platform built specifically for restaurants" }, void 0, false, {
            fileName: "/app/src/components/landing/FeaturesSection.jsx",
            lineNumber: 107,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/src/components/landing/FeaturesSection.jsx",
        lineNumber: 95,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "/app/src/components/landing/FeaturesSection.jsx",
      lineNumber: 94,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/FeaturesSection:95:8", "data-dynamic-content": "true", className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8", children: features.map(
      (feature, index) => /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-source-location": "components/landing/FeaturesSection:97:12",
          "data-dynamic-content": "true",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.1 },
          className: "group relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white border border-gray-200 hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 overflow-hidden",
          "data-arr-index": index,
          "data-arr-variable-name": "features",
          children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/FeaturesSection:106:14", "data-dynamic-content": "false", className: "absolute inset-0 bg-gradient-to-br from-orange-50/0 to-rose-50/0 group-hover:from-orange-50/50 group-hover:to-rose-50/50 transition-all duration-500 rounded-2xl md:rounded-3xl", "data-arr-index": index, "data-arr-variable-name": "features" }, void 0, false, {
              fileName: "/app/src/components/landing/FeaturesSection.jsx",
              lineNumber: 125,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/FeaturesSection:108:14", "data-dynamic-content": "true", className: "relative", "data-arr-index": index, "data-arr-variable-name": "features", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/FeaturesSection:109:16", "data-dynamic-content": "true", className: `w-14 h-14 md:w-16 md:h-16 rounded-2xl ${colorClasses[feature.color]} flex items-center justify-center mb-4 md:mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`, "data-arr-index": index, "data-arr-variable-name": "features", children: /* @__PURE__ */ jsxDEV(feature.icon, { "data-source-location": "components/landing/FeaturesSection:110:18", "data-dynamic-content": "false", className: "w-7 h-7 md:w-8 md:h-8" }, void 0, false, {
                fileName: "/app/src/components/landing/FeaturesSection.jsx",
                lineNumber: 129,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "/app/src/components/landing/FeaturesSection.jsx",
                lineNumber: 128,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "components/landing/FeaturesSection:112:16", "data-dynamic-content": "true", className: "text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors", "data-arr-index": index, "data-arr-variable-name": "features", "data-arr-field": "title", children: feature.title }, void 0, false, {
                fileName: "/app/src/components/landing/FeaturesSection.jsx",
                lineNumber: 131,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/FeaturesSection:115:16", "data-dynamic-content": "true", className: "text-gray-600 text-sm md:text-base leading-relaxed", "data-arr-index": index, "data-arr-variable-name": "features", "data-arr-field": "description", children: feature.description }, void 0, false, {
                fileName: "/app/src/components/landing/FeaturesSection.jsx",
                lineNumber: 134,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/landing/FeaturesSection.jsx",
              lineNumber: 127,
              columnNumber: 15
            }, this)
          ]
        },
        feature.title,
        true,
        {
          fileName: "/app/src/components/landing/FeaturesSection.jsx",
          lineNumber: 116,
          columnNumber: 11
        },
        this
      )
    ) }, void 0, false, {
      fileName: "/app/src/components/landing/FeaturesSection.jsx",
      lineNumber: 114,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/landing/FeaturesSection.jsx",
    lineNumber: 92,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/src/components/landing/FeaturesSection.jsx",
    lineNumber: 91,
    columnNumber: 5
  }, this);
}
_c = FeaturesSection;
var _c;
$RefreshReg$(_c, "FeaturesSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/landing/FeaturesSection.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/landing/FeaturesSection.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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V0FBVSwyQkFBdEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBNkksS0FEL0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFQTtBQUFBLGNBQ0EsdUJBQUMsUUFBRyx3QkFBcUIsNkNBQTRDLHdCQUFxQixRQUFPLFdBQVUsaUdBQWdHLGtCQUFnQkEsT0FBTywwQkFBdUIsWUFBVyxrQkFBZSxTQUNoUkQsa0JBQVFqQixTQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRUE7QUFBQSxjQUNBLHVCQUFDLE9BQUUsd0JBQXFCLDZDQUE0Qyx3QkFBcUIsUUFBTyxXQUFVLHNEQUFxRCxrQkFBZ0JrQixPQUFPLDBCQUF1QixZQUFXLGtCQUFlLGVBQ3BPRCxrQkFBUWhCLGVBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFQTtBQUFBLGlCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVUE7QUFBQTtBQUFBO0FBQUEsUUFwQkNnQixRQUFRakI7QUFBQUEsUUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1Bc0JFO0FBQUEsSUFDRixLQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBMEJBO0FBQUEsT0FoREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWlEQSxLQWxERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBbURBO0FBRUo7QUFBQ29CLEtBdkR1QlI7QUFBZSxJQUFBUTtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJRckNvZGUiLCJTbWFydHBob25lIiwiQ3JlZGl0Q2FyZCIsIlVzZXJzIiwiQmFyQ2hhcnQzIiwiU2hpZWxkQ2hlY2siLCJDbG9jayIsIkdsb2JlIiwiZmVhdHVyZXMiLCJpY29uIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNvbG9yIiwiY29sb3JDbGFzc2VzIiwidmlvbGV0IiwiYmx1ZSIsImdyZWVuIiwib3JhbmdlIiwicGluayIsImluZGlnbyIsImN5YW4iLCJwdXJwbGUiLCJGZWF0dXJlc1NlY3Rpb24iLCJvcGFjaXR5IiwieSIsIm9uY2UiLCJtYXAiLCJmZWF0dXJlIiwiaW5kZXgiLCJkZWxheSIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkZlYXR1cmVzU2VjdGlvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7XG4gIFFyQ29kZSwgU21hcnRwaG9uZSwgQ3JlZGl0Q2FyZCwgVXNlcnMsXG4gIEJhckNoYXJ0MywgU2hpZWxkQ2hlY2ssIENsb2NrLCBHbG9iZSB9IGZyb21cblwibHVjaWRlLXJlYWN0XCI7XG5cbmNvbnN0IGZlYXR1cmVzID0gW1xue1xuICBpY29uOiBRckNvZGUsXG4gIHRpdGxlOiBcIlFSIENvZGUgT3JkZXJpbmdcIixcbiAgZGVzY3JpcHRpb246IFwiQ3VzdG9tZXJzIHNjYW4sIGJyb3dzZSB5b3VyIG1lbnUsIGFuZCBvcmRlciBkaXJlY3RseSBmcm9tIHRoZWlyIHRhYmxlLiBObyBhcHAgZG93bmxvYWQgbmVlZGVkLlwiLFxuICBjb2xvcjogXCJ2aW9sZXRcIlxufSxcbntcbiAgaWNvbjogU21hcnRwaG9uZSxcbiAgdGl0bGU6IFwiRGlnaXRhbCBNZW51XCIsXG4gIGRlc2NyaXB0aW9uOiBcIkJlYXV0aWZ1bCwgbW9iaWxlLW9wdGltaXplZCBtZW51cyB3aXRoIHBob3RvcywgdmFyaWFudHMsIGFuZCByZWFsLXRpbWUgYXZhaWxhYmlsaXR5IHVwZGF0ZXMuXCIsXG4gIGNvbG9yOiBcImJsdWVcIlxufSxcbntcbiAgaWNvbjogQ3JlZGl0Q2FyZCxcbiAgdGl0bGU6IFwiRGlyZWN0IFBheW1lbnRzXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkFjY2VwdCBwYXltZW50cyB2aWEgVVBJLCBjYXJkcywgb3IgY2FzaC4gTW9uZXkgZ29lcyBkaXJlY3RseSB0byB5b3VyIGFjY291bnQuXCIsXG4gIGNvbG9yOiBcImdyZWVuXCJcbn0sXG57XG4gIGljb246IFVzZXJzLFxuICB0aXRsZTogXCJDdXN0b21lciBEYXRhYmFzZVwiLFxuICBkZXNjcmlwdGlvbjogXCJCdWlsZCB5b3VyIG93biBjdXN0b21lciBsaXN0LiBTZW5kIG9mZmVycyBhbmQgYnVpbGQgbG95YWx0eSB3aXRob3V0IHBheWluZyBwZXIgbWVzc2FnZS5cIixcbiAgY29sb3I6IFwib3JhbmdlXCJcbn0sXG57XG4gIGljb246IEJhckNoYXJ0MyxcbiAgdGl0bGU6IFwiQW5hbHl0aWNzIERhc2hib2FyZFwiLFxuICBkZXNjcmlwdGlvbjogXCJUcmFjayBvcmRlcnMsIHJldmVudWUsIHBvcHVsYXIgaXRlbXMsIGFuZCBjdXN0b21lciBiZWhhdmlvciBpbiByZWFsLXRpbWUuXCIsXG4gIGNvbG9yOiBcInBpbmtcIlxufSxcbntcbiAgaWNvbjogU2hpZWxkQ2hlY2ssXG4gIHRpdGxlOiBcIlNlY3VyZSAmIFJlbGlhYmxlXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkVudGVycHJpc2UtZ3JhZGUgc2VjdXJpdHkgd2l0aCA5OS45JSB1cHRpbWUuIFlvdXIgZGF0YSBpcyBhbHdheXMgc2FmZS5cIixcbiAgY29sb3I6IFwiaW5kaWdvXCJcbn0sXG57XG4gIGljb246IENsb2NrLFxuICB0aXRsZTogXCJRdWljayBTZXR1cFwiLFxuICBkZXNjcmlwdGlvbjogXCJHZXQgc3RhcnRlZCBpbiB1bmRlciAxMCBtaW51dGVzLiBVcGxvYWQgbWVudSwgZ2VuZXJhdGUgUVIgY29kZXMsIHN0YXJ0IHRha2luZyBvcmRlcnMuXCIsXG4gIGNvbG9yOiBcImN5YW5cIlxufSxcbntcbiAgaWNvbjogR2xvYmUsXG4gIHRpdGxlOiBcIk11bHRpLU91dGxldCBTdXBwb3J0XCIsXG4gIGRlc2NyaXB0aW9uOiBcIk1hbmFnZSBtdWx0aXBsZSByZXN0YXVyYW50IGxvY2F0aW9ucyBmcm9tIGEgc2luZ2xlIGRhc2hib2FyZC5cIixcbiAgY29sb3I6IFwicHVycGxlXCJcbn1dO1xuXG5cbmNvbnN0IGNvbG9yQ2xhc3NlcyA9IHtcbiAgdmlvbGV0OiBcImJnLXZpb2xldC0xMDAgdGV4dC12aW9sZXQtNjAwXCIsXG4gIGJsdWU6IFwiYmctYmx1ZS0xMDAgdGV4dC1ibHVlLTYwMFwiLFxuICBncmVlbjogXCJiZy1ncmVlbi0xMDAgdGV4dC1ncmVlbi02MDBcIixcbiAgb3JhbmdlOiBcImJnLW9yYW5nZS0xMDAgdGV4dC1vcmFuZ2UtNjAwXCIsXG4gIHBpbms6IFwiYmctcGluay0xMDAgdGV4dC1waW5rLTYwMFwiLFxuICBpbmRpZ286IFwiYmctaW5kaWdvLTEwMCB0ZXh0LWluZGlnby02MDBcIixcbiAgY3lhbjogXCJiZy1jeWFuLTEwMCB0ZXh0LWN5YW4tNjAwXCIsXG4gIHB1cnBsZTogXCJiZy1wdXJwbGUtMTAwIHRleHQtcHVycGxlLTYwMFwiXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWF0dXJlc1NlY3Rpb24oKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvRmVhdHVyZXNTZWN0aW9uOjcyOjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJweS0xNiBtZDpweS0yNCBsZzpweS0zMiBiZy1ncmFkaWVudC10by1iIGZyb20td2hpdGUgdmlhLW9yYW5nZS01MC8zMCB0by13aGl0ZVwiPlxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9GZWF0dXJlc1NlY3Rpb246NzM6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvRmVhdHVyZXNTZWN0aW9uOjc1OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYXgtdy0zeGwgbXgtYXV0byBtYi0xMiBtZDptYi0yMFwiPlxuICAgICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0ZlYXR1cmVzU2VjdGlvbjo3NjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxuICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19PlxuXG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0ZlYXR1cmVzU2VjdGlvbjo4MToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHgtNCBweS0yIGJnLW9yYW5nZS0xMDAgdGV4dC1vcmFuZ2UtNjAwIHJvdW5kZWQtZnVsbCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgbWItNFwiPlxuICAgICAgICAgICAgICBDb21wbGV0ZSBSZXN0YXVyYW50IFNvbHV0aW9uXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9GZWF0dXJlc1NlY3Rpb246ODQ6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC0zeGwgc206dGV4dC00eGwgbWQ6dGV4dC01eGwgbGc6dGV4dC02eGwgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMCBtYi01IG1kOm1iLTYgbGVhZGluZy10aWdodFwiPlxuICAgICAgICAgICAgICBFdmVyeXRoaW5nIFlvdSBOZWVkIHRvPGJyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0ZlYXR1cmVzU2VjdGlvbjo4NTozNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPlxuICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9GZWF0dXJlc1NlY3Rpb246ODY6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLW9yYW5nZS02MDAgdG8tcm9zZS02MDAgYmctY2xpcC10ZXh0IHRleHQtdHJhbnNwYXJlbnRcIj5SdW4gWW91ciBSZXN0YXVyYW50PC9zcGFuPlxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0ZlYXR1cmVzU2VjdGlvbjo4ODoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1kOnRleHQteGwgbGc6dGV4dC0yeGwgdGV4dC1ncmF5LTYwMCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgRnVsbC1mZWF0dXJlZCBkaWdpdGFsIHBsYXRmb3JtIGJ1aWx0IHNwZWNpZmljYWxseSBmb3IgcmVzdGF1cmFudHNcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBGZWF0dXJlcyBHcmlkICovfVxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0ZlYXR1cmVzU2VjdGlvbjo5NTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JpZCBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtNCBtZDpnYXAtNiBsZzpnYXAtOFwiPlxuICAgICAgICAgIHtmZWF0dXJlcy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PlxuICAgICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0ZlYXR1cmVzU2VjdGlvbjo5NzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAga2V5PXtmZWF0dXJlLnRpdGxlfVxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cbiAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IGluZGV4ICogMC4xIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgcmVsYXRpdmUgcC02IG1kOnAtOCByb3VuZGVkLTJ4bCBtZDpyb3VuZGVkLTN4bCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIGhvdmVyOmJvcmRlci1vcmFuZ2UtMzAwIGhvdmVyOnNoYWRvdy0yeGwgaG92ZXI6c2hhZG93LW9yYW5nZS01MDAvMTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIG92ZXJmbG93LWhpZGRlblwiIGRhdGEtYXJyLWluZGV4PXtpbmRleH0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cImZlYXR1cmVzXCI+XG5cbiAgICAgICAgICAgICAgey8qIEdyYWRpZW50IG92ZXJsYXkgb24gaG92ZXIgKi99XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvRmVhdHVyZXNTZWN0aW9uOjEwNjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tb3JhbmdlLTUwLzAgdG8tcm9zZS01MC8wIGdyb3VwLWhvdmVyOmZyb20tb3JhbmdlLTUwLzUwIGdyb3VwLWhvdmVyOnRvLXJvc2UtNTAvNTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIHJvdW5kZWQtMnhsIG1kOnJvdW5kZWQtM3hsXCIgZGF0YS1hcnItaW5kZXg9e2luZGV4fSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwiZmVhdHVyZXNcIiAvPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9GZWF0dXJlc1NlY3Rpb246MTA4OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicmVsYXRpdmVcIiBkYXRhLWFyci1pbmRleD17aW5kZXh9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJmZWF0dXJlc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvRmVhdHVyZXNTZWN0aW9uOjEwOToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YHctMTQgaC0xNCBtZDp3LTE2IG1kOmgtMTYgcm91bmRlZC0yeGwgJHtjb2xvckNsYXNzZXNbZmVhdHVyZS5jb2xvcl19IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTQgbWQ6bWItNSBncm91cC1ob3ZlcjpzY2FsZS0xMTAgZ3JvdXAtaG92ZXI6cm90YXRlLTMgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIHNoYWRvdy1sZ2B9IGRhdGEtYXJyLWluZGV4PXtpbmRleH0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cImZlYXR1cmVzXCI+XG4gICAgICAgICAgICAgICAgICA8ZmVhdHVyZS5pY29uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0ZlYXR1cmVzU2VjdGlvbjoxMTA6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy03IGgtNyBtZDp3LTggbWQ6aC04XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvRmVhdHVyZXNTZWN0aW9uOjExMjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtbGcgbWQ6dGV4dC14bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMCBtYi0zIGdyb3VwLWhvdmVyOnRleHQtb3JhbmdlLTYwMCB0cmFuc2l0aW9uLWNvbG9yc1wiIGRhdGEtYXJyLWluZGV4PXtpbmRleH0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cImZlYXR1cmVzXCIgZGF0YS1hcnItZmllbGQ9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAge2ZlYXR1cmUudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9GZWF0dXJlc1NlY3Rpb246MTE1OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtIG1kOnRleHQtYmFzZSBsZWFkaW5nLXJlbGF4ZWRcIiBkYXRhLWFyci1pbmRleD17aW5kZXh9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJmZWF0dXJlc1wiIGRhdGEtYXJyLWZpZWxkPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgIHtmZWF0dXJlLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+KTtcblxufSJdLCJmaWxlIjoiL2FwcC9zcmMvY29tcG9uZW50cy9sYW5kaW5nL0ZlYXR1cmVzU2VjdGlvbi5qc3gifQ==