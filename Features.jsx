import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Features.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/Features.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=79425e35";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=79425e35";
import { Button } from "/src/components/ui/button.jsx";
const createPageUrl = (pageName) => `/${pageName}`;
import {
  QrCode,
  Smartphone,
  CreditCard,
  Users,
  BarChart3,
  ShieldCheck,
  Clock,
  Globe,
  Utensils,
  Bell,
  Palette,
  Zap,
  ArrowRight,
  Check
} from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
const allFeatures = [
  {
    category: "Ordering",
    features: [
      {
        icon: QrCode,
        title: "QR Code Ordering",
        description: "Generate unique QR codes for each table. Customers scan and order without downloading any app.",
        details: ["Table-specific QR codes", "No app required", "Instant menu access", "Works on any smartphone"]
      },
      {
        icon: Smartphone,
        title: "Digital Menu",
        description: "Create beautiful, mobile-optimized menus with categories, photos, and real-time updates.",
        details: ["High-quality images", "Menu categories", "Dietary tags", "Real-time availability"]
      },
      {
        icon: Utensils,
        title: "Menu Customization",
        description: "Add variants, add-ons, and special instructions to give customers flexibility.",
        details: ["Size variants", "Extra toppings", "Special instructions", "Combo deals"]
      }
    ]
  },
  {
    category: "Payments",
    features: [
      {
        icon: CreditCard,
        title: "Direct Payments",
        description: "Accept payments via UPI, cards, or cash. Money goes directly to your bank account.",
        details: ["UPI integration", "Card payments", "Cash on delivery", "Split bills"]
      },
      {
        icon: Zap,
        title: "Instant Settlement",
        description: "Get your money faster with quick settlement options available on Pro plans.",
        details: ["Same-day settlement", "No hold period", "Transparent fees", "Multiple accounts"]
      }
    ]
  },
  {
    category: "Management",
    features: [
      {
        icon: Bell,
        title: "Order Management",
        description: "Real-time order notifications. Track, manage, and update order status instantly.",
        details: ["Real-time alerts", "Kitchen display", "Status updates", "Order history"]
      },
      {
        icon: Users,
        title: "Customer Database",
        description: "Build your own customer list with order history and preferences.",
        details: ["Customer profiles", "Order history", "Contact details", "Loyalty tracking"]
      },
      {
        icon: BarChart3,
        title: "Analytics Dashboard",
        description: "Track sales, popular items, peak hours, and customer behavior.",
        details: ["Revenue reports", "Item popularity", "Peak hour analysis", "Customer insights"]
      }
    ]
  },
  {
    category: "Scalability",
    features: [
      {
        icon: Globe,
        title: "Multi-Outlet Support",
        description: "Manage multiple restaurant locations from a single dashboard.",
        details: ["Centralized control", "Location-specific menus", "Consolidated reports", "Staff management"]
      },
      {
        icon: Palette,
        title: "Custom Branding",
        description: "Make the menu look like your own with custom colors, logos, and themes.",
        details: ["Your logo", "Brand colors", "Custom domains", "White-label option"]
      },
      {
        icon: ShieldCheck,
        title: "Enterprise Security",
        description: "Bank-grade security with encrypted data and secure payment processing.",
        details: ["SSL encryption", "PCI compliant", "Data backup", "99.9% uptime"]
      }
    ]
  }
];
export default function Features() {
  _s();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Features:108:4", "data-dynamic-content": "true", className: "py-20", children: [
    /* @__PURE__ */ jsxDEV("section", { "data-source-location": "pages/Features:110:6", "data-dynamic-content": "true", className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20", children: /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-source-location": "pages/Features:111:8",
        "data-dynamic-content": "true",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        children: [
          /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/Features:115:10", "data-dynamic-content": "false", className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6", children: "Powerful Features for Modern Restaurants" }, void 0, false, {
            fileName: "/app/src/pages/Features.jsx",
            lineNumber: 134,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Features:118:10", "data-dynamic-content": "false", className: "text-xl text-gray-600 max-w-3xl mx-auto mb-8", children: "Everything you need to digitize your restaurant operations and own your customer relationships." }, void 0, false, {
            fileName: "/app/src/pages/Features.jsx",
            lineNumber: 137,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV(Link, { "data-source-location": "pages/Features:121:10", "data-dynamic-content": "true", to: createPageUrl("GetStarted"), children: /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/Features:122:12", "data-dynamic-content": "false", size: "lg", className: "bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600", children: [
            "Start Free Trial",
            /* @__PURE__ */ jsxDEV(ArrowRight, { "data-source-location": "pages/Features:124:14", "data-dynamic-content": "false", className: "w-5 h-5 ml-2" }, void 0, false, {
              fileName: "/app/src/pages/Features.jsx",
              lineNumber: 143,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Features.jsx",
            lineNumber: 141,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/Features.jsx",
            lineNumber: 140,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/src/pages/Features.jsx",
        lineNumber: 130,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "/app/src/pages/Features.jsx",
      lineNumber: 129,
      columnNumber: 7
    }, this),
    allFeatures.map(
      (category, catIndex) => /* @__PURE__ */ jsxDEV("section", { "data-source-location": "pages/Features:132:6", "data-dynamic-content": "true", className: `py-16 ${catIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}`, "data-arr-index": catIndex, "data-arr-variable-name": "allFeatures", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Features:133:10", "data-dynamic-content": "true", className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", "data-arr-index": catIndex, "data-arr-variable-name": "allFeatures", children: [
        /* @__PURE__ */ jsxDEV(
          motion.h2,
          {
            "data-source-location": "pages/Features:134:12",
            "data-dynamic-content": "true",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "text-2xl font-bold text-gray-900 mb-10",
            "data-arr-index": catIndex,
            "data-arr-variable-name": "allFeatures",
            "data-arr-field": "category",
            children: category.category
          },
          void 0,
          false,
          {
            fileName: "/app/src/pages/Features.jsx",
            lineNumber: 153,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Features:143:12", "data-dynamic-content": "true", className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", "data-arr-index": catIndex, "data-arr-variable-name": "allFeatures", children: category.features.map(
          (feature, index) => /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              "data-source-location": "pages/Features:145:12",
              "data-dynamic-content": "true",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: index * 0.1 },
              className: "bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow",
              children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Features:153:18", "data-dynamic-content": "false", className: "w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxDEV(feature.icon, { "data-source-location": "pages/Features:154:20", "data-dynamic-content": "false", className: "w-6 h-6 text-orange-600" }, void 0, false, {
                  fileName: "/app/src/pages/Features.jsx",
                  lineNumber: 173,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "/app/src/pages/Features.jsx",
                  lineNumber: 172,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/Features:156:18", "data-dynamic-content": "true", className: "text-xl font-semibold text-gray-900 mb-2", "data-collection-item-field": "title", "data-collection-item-id": feature?.id || feature?._id, children: feature.title }, void 0, false, {
                  fileName: "/app/src/pages/Features.jsx",
                  lineNumber: 175,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Features:159:18", "data-dynamic-content": "true", className: "text-gray-600 mb-4", "data-collection-item-field": "description", "data-collection-item-id": feature?.id || feature?._id, children: feature.description }, void 0, false, {
                  fileName: "/app/src/pages/Features.jsx",
                  lineNumber: 178,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("ul", { "data-source-location": "pages/Features:162:18", "data-dynamic-content": "true", className: "space-y-2", "data-collection-item-field": "details", "data-collection-item-id": feature?.id || feature?._id, children: feature.details.map(
                  (detail) => /* @__PURE__ */ jsxDEV("li", { "data-source-location": "pages/Features:164:16", "data-dynamic-content": "true", className: "flex items-center gap-2 text-sm text-gray-500", "data-collection-item-field": "detail", children: [
                    /* @__PURE__ */ jsxDEV(Check, { "data-source-location": "pages/Features:165:24", "data-dynamic-content": "false", className: "w-4 h-4 text-green-500" }, void 0, false, {
                      fileName: "/app/src/pages/Features.jsx",
                      lineNumber: 184,
                      columnNumber: 25
                    }, this),
                    detail
                  ] }, detail, true, {
                    fileName: "/app/src/pages/Features.jsx",
                    lineNumber: 183,
                    columnNumber: 17
                  }, this)
                ) }, void 0, false, {
                  fileName: "/app/src/pages/Features.jsx",
                  lineNumber: 181,
                  columnNumber: 19
                }, this)
              ]
            },
            feature.title,
            true,
            {
              fileName: "/app/src/pages/Features.jsx",
              lineNumber: 164,
              columnNumber: 13
            },
            this
          )
        ) }, void 0, false, {
          fileName: "/app/src/pages/Features.jsx",
          lineNumber: 162,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Features.jsx",
        lineNumber: 152,
        columnNumber: 11
      }, this) }, category.category, false, {
        fileName: "/app/src/pages/Features.jsx",
        lineNumber: 151,
        columnNumber: 7
      }, this)
    ),
    /* @__PURE__ */ jsxDEV("section", { "data-source-location": "pages/Features:178:6", "data-dynamic-content": "true", className: "bg-slate-900 py-20 from-orange-600 to-orange-500", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Features:179:8", "data-dynamic-content": "true", className: "max-w-4xl mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "pages/Features:180:10", "data-dynamic-content": "false", className: "text-3xl md:text-4xl font-bold text-white mb-6", children: "Ready to Transform Your Restaurant?" }, void 0, false, {
        fileName: "/app/src/pages/Features.jsx",
        lineNumber: 199,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Features:183:10", "data-dynamic-content": "false", className: "text-orange-100 text-lg mb-8", children: "Start your 14-day free trial. No credit card required." }, void 0, false, {
        fileName: "/app/src/pages/Features.jsx",
        lineNumber: 202,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Link, { "data-source-location": "pages/Features:186:10", "data-dynamic-content": "true", to: createPageUrl("GetStarted"), children: /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/Features:187:12", "data-dynamic-content": "false", size: "lg", className: "bg-white text-orange-600 hover:bg-gray-100", children: [
        "Get Started Free",
        /* @__PURE__ */ jsxDEV(ArrowRight, { "data-source-location": "pages/Features:189:14", "data-dynamic-content": "false", className: "w-5 h-5 ml-2" }, void 0, false, {
          fileName: "/app/src/pages/Features.jsx",
          lineNumber: 208,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Features.jsx",
        lineNumber: 206,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Features.jsx",
        lineNumber: 205,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Features.jsx",
      lineNumber: 198,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/Features.jsx",
      lineNumber: 197,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/Features.jsx",
    lineNumber: 127,
    columnNumber: 5
  }, this);
}
_s(Features, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Features;
var _c;
$RefreshReg$(_c, "Features");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/Features.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/Features.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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O0FBQUE7QUFBQTtBQUFBLGFBR0EsS0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBS0E7QUFBQSxTQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FhQSxLQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FlQTtBQUFBLE9BckZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FzRkE7QUFFSjtBQUFDd0IsR0E5RnVCRCxVQUFRO0FBQUFrQixLQUFSbEI7QUFBUSxJQUFBa0I7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwiTGluayIsIkJ1dHRvbiIsImNyZWF0ZVBhZ2VVcmwiLCJwYWdlTmFtZSIsIlFyQ29kZSIsIlNtYXJ0cGhvbmUiLCJDcmVkaXRDYXJkIiwiVXNlcnMiLCJCYXJDaGFydDMiLCJTaGllbGRDaGVjayIsIkNsb2NrIiwiR2xvYmUiLCJVdGVuc2lscyIsIkJlbGwiLCJQYWxldHRlIiwiWmFwIiwiQXJyb3dSaWdodCIsIkNoZWNrIiwiYWxsRmVhdHVyZXMiLCJjYXRlZ29yeSIsImZlYXR1cmVzIiwiaWNvbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkZXRhaWxzIiwiRmVhdHVyZXMiLCJfcyIsInVzZUVmZmVjdCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJvcGFjaXR5IiwieSIsIm1hcCIsImNhdEluZGV4Iiwib25jZSIsImZlYXR1cmUiLCJpbmRleCIsImRlbGF5IiwiaWQiLCJfaWQiLCJkZXRhaWwiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJGZWF0dXJlcy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcblxuY29uc3QgY3JlYXRlUGFnZVVybCA9IChwYWdlTmFtZSkgPT4gYC8ke3BhZ2VOYW1lfWA7XG5pbXBvcnQge1xuICBRckNvZGUsIFNtYXJ0cGhvbmUsIENyZWRpdENhcmQsIFVzZXJzLCBCYXJDaGFydDMsXG4gIFNoaWVsZENoZWNrLCBDbG9jaywgR2xvYmUsIFV0ZW5zaWxzLCBCZWxsLFxuICBQYWxldHRlLCBaYXAsIEFycm93UmlnaHQsIENoZWNrIH0gZnJvbVxuXCJsdWNpZGUtcmVhY3RcIjtcblxuY29uc3QgYWxsRmVhdHVyZXMgPSBbXG57XG4gIGNhdGVnb3J5OiBcIk9yZGVyaW5nXCIsXG4gIGZlYXR1cmVzOiBbXG4gIHtcbiAgICBpY29uOiBRckNvZGUsXG4gICAgdGl0bGU6IFwiUVIgQ29kZSBPcmRlcmluZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkdlbmVyYXRlIHVuaXF1ZSBRUiBjb2RlcyBmb3IgZWFjaCB0YWJsZS4gQ3VzdG9tZXJzIHNjYW4gYW5kIG9yZGVyIHdpdGhvdXQgZG93bmxvYWRpbmcgYW55IGFwcC5cIixcbiAgICBkZXRhaWxzOiBbXCJUYWJsZS1zcGVjaWZpYyBRUiBjb2Rlc1wiLCBcIk5vIGFwcCByZXF1aXJlZFwiLCBcIkluc3RhbnQgbWVudSBhY2Nlc3NcIiwgXCJXb3JrcyBvbiBhbnkgc21hcnRwaG9uZVwiXVxuICB9LFxuICB7XG4gICAgaWNvbjogU21hcnRwaG9uZSxcbiAgICB0aXRsZTogXCJEaWdpdGFsIE1lbnVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDcmVhdGUgYmVhdXRpZnVsLCBtb2JpbGUtb3B0aW1pemVkIG1lbnVzIHdpdGggY2F0ZWdvcmllcywgcGhvdG9zLCBhbmQgcmVhbC10aW1lIHVwZGF0ZXMuXCIsXG4gICAgZGV0YWlsczogW1wiSGlnaC1xdWFsaXR5IGltYWdlc1wiLCBcIk1lbnUgY2F0ZWdvcmllc1wiLCBcIkRpZXRhcnkgdGFnc1wiLCBcIlJlYWwtdGltZSBhdmFpbGFiaWxpdHlcIl1cbiAgfSxcbiAge1xuICAgIGljb246IFV0ZW5zaWxzLFxuICAgIHRpdGxlOiBcIk1lbnUgQ3VzdG9taXphdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFkZCB2YXJpYW50cywgYWRkLW9ucywgYW5kIHNwZWNpYWwgaW5zdHJ1Y3Rpb25zIHRvIGdpdmUgY3VzdG9tZXJzIGZsZXhpYmlsaXR5LlwiLFxuICAgIGRldGFpbHM6IFtcIlNpemUgdmFyaWFudHNcIiwgXCJFeHRyYSB0b3BwaW5nc1wiLCBcIlNwZWNpYWwgaW5zdHJ1Y3Rpb25zXCIsIFwiQ29tYm8gZGVhbHNcIl1cbiAgfV1cblxufSxcbntcbiAgY2F0ZWdvcnk6IFwiUGF5bWVudHNcIixcbiAgZmVhdHVyZXM6IFtcbiAge1xuICAgIGljb246IENyZWRpdENhcmQsXG4gICAgdGl0bGU6IFwiRGlyZWN0IFBheW1lbnRzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQWNjZXB0IHBheW1lbnRzIHZpYSBVUEksIGNhcmRzLCBvciBjYXNoLiBNb25leSBnb2VzIGRpcmVjdGx5IHRvIHlvdXIgYmFuayBhY2NvdW50LlwiLFxuICAgIGRldGFpbHM6IFtcIlVQSSBpbnRlZ3JhdGlvblwiLCBcIkNhcmQgcGF5bWVudHNcIiwgXCJDYXNoIG9uIGRlbGl2ZXJ5XCIsIFwiU3BsaXQgYmlsbHNcIl1cbiAgfSxcbiAge1xuICAgIGljb246IFphcCxcbiAgICB0aXRsZTogXCJJbnN0YW50IFNldHRsZW1lbnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJHZXQgeW91ciBtb25leSBmYXN0ZXIgd2l0aCBxdWljayBzZXR0bGVtZW50IG9wdGlvbnMgYXZhaWxhYmxlIG9uIFBybyBwbGFucy5cIixcbiAgICBkZXRhaWxzOiBbXCJTYW1lLWRheSBzZXR0bGVtZW50XCIsIFwiTm8gaG9sZCBwZXJpb2RcIiwgXCJUcmFuc3BhcmVudCBmZWVzXCIsIFwiTXVsdGlwbGUgYWNjb3VudHNcIl1cbiAgfV1cblxufSxcbntcbiAgY2F0ZWdvcnk6IFwiTWFuYWdlbWVudFwiLFxuICBmZWF0dXJlczogW1xuICB7XG4gICAgaWNvbjogQmVsbCxcbiAgICB0aXRsZTogXCJPcmRlciBNYW5hZ2VtZW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVhbC10aW1lIG9yZGVyIG5vdGlmaWNhdGlvbnMuIFRyYWNrLCBtYW5hZ2UsIGFuZCB1cGRhdGUgb3JkZXIgc3RhdHVzIGluc3RhbnRseS5cIixcbiAgICBkZXRhaWxzOiBbXCJSZWFsLXRpbWUgYWxlcnRzXCIsIFwiS2l0Y2hlbiBkaXNwbGF5XCIsIFwiU3RhdHVzIHVwZGF0ZXNcIiwgXCJPcmRlciBoaXN0b3J5XCJdXG4gIH0sXG4gIHtcbiAgICBpY29uOiBVc2VycyxcbiAgICB0aXRsZTogXCJDdXN0b21lciBEYXRhYmFzZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJ1aWxkIHlvdXIgb3duIGN1c3RvbWVyIGxpc3Qgd2l0aCBvcmRlciBoaXN0b3J5IGFuZCBwcmVmZXJlbmNlcy5cIixcbiAgICBkZXRhaWxzOiBbXCJDdXN0b21lciBwcm9maWxlc1wiLCBcIk9yZGVyIGhpc3RvcnlcIiwgXCJDb250YWN0IGRldGFpbHNcIiwgXCJMb3lhbHR5IHRyYWNraW5nXCJdXG4gIH0sXG4gIHtcbiAgICBpY29uOiBCYXJDaGFydDMsXG4gICAgdGl0bGU6IFwiQW5hbHl0aWNzIERhc2hib2FyZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRyYWNrIHNhbGVzLCBwb3B1bGFyIGl0ZW1zLCBwZWFrIGhvdXJzLCBhbmQgY3VzdG9tZXIgYmVoYXZpb3IuXCIsXG4gICAgZGV0YWlsczogW1wiUmV2ZW51ZSByZXBvcnRzXCIsIFwiSXRlbSBwb3B1bGFyaXR5XCIsIFwiUGVhayBob3VyIGFuYWx5c2lzXCIsIFwiQ3VzdG9tZXIgaW5zaWdodHNcIl1cbiAgfV1cblxufSxcbntcbiAgY2F0ZWdvcnk6IFwiU2NhbGFiaWxpdHlcIixcbiAgZmVhdHVyZXM6IFtcbiAge1xuICAgIGljb246IEdsb2JlLFxuICAgIHRpdGxlOiBcIk11bHRpLU91dGxldCBTdXBwb3J0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWFuYWdlIG11bHRpcGxlIHJlc3RhdXJhbnQgbG9jYXRpb25zIGZyb20gYSBzaW5nbGUgZGFzaGJvYXJkLlwiLFxuICAgIGRldGFpbHM6IFtcIkNlbnRyYWxpemVkIGNvbnRyb2xcIiwgXCJMb2NhdGlvbi1zcGVjaWZpYyBtZW51c1wiLCBcIkNvbnNvbGlkYXRlZCByZXBvcnRzXCIsIFwiU3RhZmYgbWFuYWdlbWVudFwiXVxuICB9LFxuICB7XG4gICAgaWNvbjogUGFsZXR0ZSxcbiAgICB0aXRsZTogXCJDdXN0b20gQnJhbmRpbmdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNYWtlIHRoZSBtZW51IGxvb2sgbGlrZSB5b3VyIG93biB3aXRoIGN1c3RvbSBjb2xvcnMsIGxvZ29zLCBhbmQgdGhlbWVzLlwiLFxuICAgIGRldGFpbHM6IFtcIllvdXIgbG9nb1wiLCBcIkJyYW5kIGNvbG9yc1wiLCBcIkN1c3RvbSBkb21haW5zXCIsIFwiV2hpdGUtbGFiZWwgb3B0aW9uXCJdXG4gIH0sXG4gIHtcbiAgICBpY29uOiBTaGllbGRDaGVjayxcbiAgICB0aXRsZTogXCJFbnRlcnByaXNlIFNlY3VyaXR5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQmFuay1ncmFkZSBzZWN1cml0eSB3aXRoIGVuY3J5cHRlZCBkYXRhIGFuZCBzZWN1cmUgcGF5bWVudCBwcm9jZXNzaW5nLlwiLFxuICAgIGRldGFpbHM6IFtcIlNTTCBlbmNyeXB0aW9uXCIsIFwiUENJIGNvbXBsaWFudFwiLCBcIkRhdGEgYmFja3VwXCIsIFwiOTkuOSUgdXB0aW1lXCJdXG4gIH1dXG5cbn1dO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlYXR1cmVzKCkge1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6ICdpbnN0YW50JyB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0ZlYXR1cmVzOjEwODo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicHktMjBcIj5cbiAgICAgIHsvKiBIZXJvICovfVxuICAgICAgPHNlY3Rpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9GZWF0dXJlczoxMTA6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04IHRleHQtY2VudGVyIG1iLTIwXCI+XG4gICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRmVhdHVyZXM6MTExOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fT5cblxuICAgICAgICAgIDxoMSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0ZlYXR1cmVzOjExNToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMCBtYi02XCI+XG4gICAgICAgICAgICBQb3dlcmZ1bCBGZWF0dXJlcyBmb3IgTW9kZXJuIFJlc3RhdXJhbnRzXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0ZlYXR1cmVzOjExODoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtZ3JheS02MDAgbWF4LXctM3hsIG14LWF1dG8gbWItOFwiPlxuICAgICAgICAgICAgRXZlcnl0aGluZyB5b3UgbmVlZCB0byBkaWdpdGl6ZSB5b3VyIHJlc3RhdXJhbnQgb3BlcmF0aW9ucyBhbmQgb3duIHlvdXIgY3VzdG9tZXIgcmVsYXRpb25zaGlwcy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPExpbmsgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9GZWF0dXJlczoxMjE6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB0bz17Y3JlYXRlUGFnZVVybChcIkdldFN0YXJ0ZWRcIil9PlxuICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0ZlYXR1cmVzOjEyMjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBzaXplPVwibGdcIiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tb3JhbmdlLTYwMCB0by1vcmFuZ2UtNTAwIGhvdmVyOmZyb20tb3JhbmdlLTcwMCBob3Zlcjp0by1vcmFuZ2UtNjAwXCI+XG4gICAgICAgICAgICAgIFN0YXJ0IEZyZWUgVHJpYWxcbiAgICAgICAgICAgICAgPEFycm93UmlnaHQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9GZWF0dXJlczoxMjQ6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy01IGgtNSBtbC0yXCIgLz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogRmVhdHVyZSBDYXRlZ29yaWVzICovfVxuICAgICAge2FsbEZlYXR1cmVzLm1hcCgoY2F0ZWdvcnksIGNhdEluZGV4KSA9PlxuICAgICAgPHNlY3Rpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9GZWF0dXJlczoxMzI6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17Y2F0ZWdvcnkuY2F0ZWdvcnl9IGNsYXNzTmFtZT17YHB5LTE2ICR7Y2F0SW5kZXggJSAyID09PSAwID8gJ2JnLWdyYXktNTAnIDogJ2JnLXdoaXRlJ31gfSBkYXRhLWFyci1pbmRleD17Y2F0SW5kZXh9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJhbGxGZWF0dXJlc1wiPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9GZWF0dXJlczoxMzM6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOFwiIGRhdGEtYXJyLWluZGV4PXtjYXRJbmRleH0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cImFsbEZlYXR1cmVzXCI+XG4gICAgICAgICAgICA8bW90aW9uLmgyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRmVhdHVyZXM6MTM0OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XG4gICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMCBtYi0xMFwiIGRhdGEtYXJyLWluZGV4PXtjYXRJbmRleH0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cImFsbEZlYXR1cmVzXCIgZGF0YS1hcnItZmllbGQ9XCJjYXRlZ29yeVwiPlxuXG4gICAgICAgICAgICAgIHtjYXRlZ29yeS5jYXRlZ29yeX1cbiAgICAgICAgICAgIDwvbW90aW9uLmgyPlxuXG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRmVhdHVyZXM6MTQzOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtOFwiIGRhdGEtYXJyLWluZGV4PXtjYXRJbmRleH0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cImFsbEZlYXR1cmVzXCI+XG4gICAgICAgICAgICAgIHtjYXRlZ29yeS5mZWF0dXJlcy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PlxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9GZWF0dXJlczoxNDU6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAga2V5PXtmZWF0dXJlLnRpdGxlfVxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxuICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogaW5kZXggKiAwLjEgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIHAtNiBzaGFkb3ctc20gYm9yZGVyIGJvcmRlci1ncmF5LTEwMCBob3ZlcjpzaGFkb3ctbGcgdHJhbnNpdGlvbi1zaGFkb3dcIj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0ZlYXR1cmVzOjE1MzoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgYmctb3JhbmdlLTEwMCByb3VuZGVkLXhsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZlYXR1cmUuaWNvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0ZlYXR1cmVzOjE1NDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTYgaC02IHRleHQtb3JhbmdlLTYwMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxoMyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0ZlYXR1cmVzOjE1NjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIG1iLTJcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInRpdGxlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2ZlYXR1cmU/LmlkIHx8IGZlYXR1cmU/Ll9pZH0+XG4gICAgICAgICAgICAgICAgICAgIHtmZWF0dXJlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRmVhdHVyZXM6MTU5OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBtYi00XCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJkZXNjcmlwdGlvblwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtmZWF0dXJlPy5pZCB8fCBmZWF0dXJlPy5faWR9PlxuICAgICAgICAgICAgICAgICAgICB7ZmVhdHVyZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDx1bCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0ZlYXR1cmVzOjE2MjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktMlwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiZGV0YWlsc1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtmZWF0dXJlPy5pZCB8fCBmZWF0dXJlPy5faWR9PlxuICAgICAgICAgICAgICAgICAgICB7ZmVhdHVyZS5kZXRhaWxzLm1hcCgoZGV0YWlsKSA9PlxuICAgICAgICAgICAgICAgIDxsaSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0ZlYXR1cmVzOjE2NDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17ZGV0YWlsfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImRldGFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRmVhdHVyZXM6MTY1OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1ncmVlbi01MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2RldGFpbH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgKX1cblxuICAgICAgey8qIENUQSAqL31cbiAgICAgIDxzZWN0aW9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRmVhdHVyZXM6MTc4OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJiZy1zbGF0ZS05MDAgcHktMjAgZnJvbS1vcmFuZ2UtNjAwIHRvLW9yYW5nZS01MDBcIj5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0ZlYXR1cmVzOjE3OTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gcHgtNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxoMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0ZlYXR1cmVzOjE4MDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC13aGl0ZSBtYi02XCI+XG4gICAgICAgICAgICBSZWFkeSB0byBUcmFuc2Zvcm0gWW91ciBSZXN0YXVyYW50P1xuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9GZWF0dXJlczoxODM6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtMTAwIHRleHQtbGcgbWItOFwiPlxuICAgICAgICAgICAgU3RhcnQgeW91ciAxNC1kYXkgZnJlZSB0cmlhbC4gTm8gY3JlZGl0IGNhcmQgcmVxdWlyZWQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxMaW5rIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRmVhdHVyZXM6MTg2OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdG89e2NyZWF0ZVBhZ2VVcmwoXCJHZXRTdGFydGVkXCIpfT5cbiAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9GZWF0dXJlczoxODc6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgc2l6ZT1cImxnXCIgY2xhc3NOYW1lPVwiYmctd2hpdGUgdGV4dC1vcmFuZ2UtNjAwIGhvdmVyOmJnLWdyYXktMTAwXCI+XG4gICAgICAgICAgICAgIEdldCBTdGFydGVkIEZyZWVcbiAgICAgICAgICAgICAgPEFycm93UmlnaHQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9GZWF0dXJlczoxODk6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy01IGgtNSBtbC0yXCIgLz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+KTtcblxufSJdLCJmaWxlIjoiL2FwcC9zcmMvcGFnZXMvRmVhdHVyZXMuanN4In0=