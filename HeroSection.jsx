import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/landing/HeroSection.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/landing/HeroSection.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useEffect = __vite__cjsImport3_react["useEffect"]; const useState = __vite__cjsImport3_react["useState"];
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=79425e35";
import { Button } from "/src/components/ui/button.jsx";
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=79425e35";
import { ArrowRight, Sparkles } from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
import { base44 } from "/src/api/base44Client.js";
import LiveDashboardGraphic from "/src/components/landing/LiveDashboardGraphic.jsx";
const createPageUrl = (pageName) => `/${pageName}`;
export default function HeroSection() {
  _s();
  const [stats, setStats] = useState({
    activeRestaurants: 0,
    totalGMV: 0,
    totalOrders: 0
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    loadRealStats();
  }, []);
  const loadRealStats = async () => {
    setLoading(true);
    try {
      const restaurants = await base44.entities.Restaurant.filter({
        account_status: "active"
      });
      const orders = await base44.entities.Order.list();
      const totalGMV = orders.reduce((sum, order) => sum + (order.total_amount || 0), 0);
      setStats({
        activeRestaurants: restaurants.length,
        totalGMV,
        totalOrders: orders.length
      });
    } catch (error) {
      console.error("Failed to load stats:", error);
      setStats({
        activeRestaurants: 50,
        totalGMV: 1e7,
        totalOrders: 5e3
      });
    } finally {
      setLoading(false);
    }
  };
  const formatGMV = (amount) => {
    if (amount >= 1e7) {
      return `₹${(amount / 1e7).toFixed(1)}Cr+`;
    } else if (amount >= 1e5) {
      return `₹${(amount / 1e5).toFixed(1)}L+`;
    } else {
      return `₹${amount.toLocaleString()}+`;
    }
  };
  return /* @__PURE__ */ jsxDEV("section", { "data-source-location": "components/landing/HeroSection:65:4", "data-dynamic-content": "true", className: "bg-slate-900 py-16 relative overflow-hidden from-orange-600 via-orange-500 to-rose-600 md:py-24 lg:py-32", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HeroSection:67:6", "data-dynamic-content": "false", className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HeroSection:68:8", "data-dynamic-content": "false", className: "absolute -top-40 -right-40 w-96 h-96 bg-white/20 rounded-full blur-3xl" }, void 0, false, {
        fileName: "/app/src/components/landing/HeroSection.jsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HeroSection:69:8", "data-dynamic-content": "false", className: "absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-500/30 rounded-full blur-3xl" }, void 0, false, {
        fileName: "/app/src/components/landing/HeroSection.jsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HeroSection:70:8", "data-dynamic-content": "false", className: "absolute top-1/2 left-1/2 w-80 h-80 bg-rose-500/20 rounded-full blur-3xl" }, void 0, false, {
        fileName: "/app/src/components/landing/HeroSection.jsx",
        lineNumber: 89,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/landing/HeroSection.jsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HeroSection:74:6", "data-dynamic-content": "false", className: "absolute inset-0 pointer-events-none z-0", children: [
      /* @__PURE__ */ jsxDEV("svg", { "data-source-location": "components/landing/HeroSection:75:8", "data-dynamic-content": "false", className: "absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 text-orange-500/10", width: "600", height: "600", viewBox: "0 0 600 600", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsxDEV("path", { "data-source-location": "components/landing/HeroSection:76:10", "data-dynamic-content": "false", d: "M515.266 181.33C377.943 51.564 128.537 136.256 50.8123 293.565C-26.9127 450.874 125.728 600 125.728 600", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }, void 0, false, {
        fileName: "/app/src/components/landing/HeroSection.jsx",
        lineNumber: 95,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/components/landing/HeroSection.jsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("svg", { "data-source-location": "components/landing/HeroSection:78:8", "data-dynamic-content": "false", className: "absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 text-orange-400/10", width: "700", height: "700", viewBox: "0 0 700 700", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsxDEV("path", { "data-source-location": "components/landing/HeroSection:79:10", "data-dynamic-content": "false", d: "M26.8838 528.274C193.934 689.816 480.051 637.218 594.397 451.983C708.742 266.748 543.953 2.22235 543.953 2.22235", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }, void 0, false, {
        fileName: "/app/src/components/landing/HeroSection.jsx",
        lineNumber: 98,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/components/landing/HeroSection.jsx",
        lineNumber: 97,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/landing/HeroSection.jsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HeroSection:85:6", "data-dynamic-content": "true", className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HeroSection:86:8", "data-dynamic-content": "true", className: "grid lg:grid-cols-2 gap-8 lg:gap-12 items-center", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-source-location": "components/landing/HeroSection:88:10",
          "data-dynamic-content": "true",
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "text-center lg:text-left",
          children: [
            /* @__PURE__ */ jsxDEV(
              motion.div,
              {
                "data-source-location": "components/landing/HeroSection:94:12",
                "data-dynamic-content": "true",
                initial: { scale: 0.9, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                transition: { delay: 0.2 },
                className: "inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/30 shadow-xl",
                children: [
                  /* @__PURE__ */ jsxDEV(Sparkles, { "data-source-location": "components/landing/HeroSection:100:14", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                    fileName: "/app/src/components/landing/HeroSection.jsx",
                    lineNumber: 119,
                    columnNumber: 15
                  }, this),
                  "Zero Commission • Direct to Customer"
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/src/components/landing/HeroSection.jsx",
                lineNumber: 113,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "components/landing/HeroSection:104:12", "data-dynamic-content": "false", className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 md:mb-6", children: [
              "Own Your",
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/HeroSection:106:14", "data-dynamic-content": "false", className: "block bg-gradient-to-r from-yellow-300 via-white to-yellow-200 bg-clip-text text-transparent", children: " Restaurant Business" }, void 0, false, {
                fileName: "/app/src/components/landing/HeroSection.jsx",
                lineNumber: 125,
                columnNumber: 15
              }, this),
              "Not Your Commissions"
            ] }, void 0, true, {
              fileName: "/app/src/components/landing/HeroSection.jsx",
              lineNumber: 123,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/HeroSection:110:12", "data-dynamic-content": "false", className: "text-base sm:text-lg md:text-xl text-orange-50 mb-6 md:mb-8 leading-relaxed max-w-2xl", children: [
              "Break free from expensive aggregators. Get your own QR ordering system, direct payments, and customer database with ",
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/HeroSection:112:58", "data-dynamic-content": "false", className: "font-semibold text-white", children: "0% commission" }, void 0, false, {
                fileName: "/app/src/components/landing/HeroSection.jsx",
                lineNumber: 131,
                columnNumber: 59
              }, this),
              "."
            ] }, void 0, true, {
              fileName: "/app/src/components/landing/HeroSection.jsx",
              lineNumber: 129,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HeroSection:115:12", "data-dynamic-content": "true", className: "flex flex-col sm:flex-row gap-3 mb-8 md:mb-10 justify-center lg:justify-start", children: [
              /* @__PURE__ */ jsxDEV(Link, { "data-source-location": "components/landing/HeroSection:116:14", "data-dynamic-content": "true", to: createPageUrl("GetStarted"), className: "w-full sm:w-auto", children: /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "components/landing/HeroSection:117:16", "data-dynamic-content": "false", className: "w-full bg-white text-orange-600 hover:bg-orange-50 px-6 py-5 text-base font-semibold rounded-2xl shadow-2xl hover:shadow-orange-300/50 transition-all hover:scale-105", children: [
                "Start 14-Day Free Trial",
                /* @__PURE__ */ jsxDEV(ArrowRight, { "data-source-location": "components/landing/HeroSection:119:18", "data-dynamic-content": "false", className: "w-5 h-5 ml-2" }, void 0, false, {
                  fileName: "/app/src/components/landing/HeroSection.jsx",
                  lineNumber: 138,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/landing/HeroSection.jsx",
                lineNumber: 136,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "/app/src/components/landing/HeroSection.jsx",
                lineNumber: 135,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV(Link, { "data-source-location": "components/landing/HeroSection:122:14", "data-dynamic-content": "true", to: createPageUrl("Contact"), className: "w-full sm:w-auto", children: /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "components/landing/HeroSection:123:16", "data-dynamic-content": "false", variant: "outline", className: "bg-white/10 text-white px-6 py-5 text-base font-medium rounded-2xl border-2 border-white hover:bg-white/20 backdrop-blur-sm", children: "Watch Demo" }, void 0, false, {
                fileName: "/app/src/components/landing/HeroSection.jsx",
                lineNumber: 142,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "/app/src/components/landing/HeroSection.jsx",
                lineNumber: 141,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/landing/HeroSection.jsx",
              lineNumber: 134,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HeroSection:130:12", "data-dynamic-content": "true", className: "grid grid-cols-3 gap-4 md:gap-6 pt-5 border-t border-white/20", children: [
              /* @__PURE__ */ jsxDEV(
                motion.div,
                {
                  "data-source-location": "components/landing/HeroSection:131:14",
                  "data-dynamic-content": "true",
                  initial: { scale: 0.8, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  transition: { delay: 0.4 },
                  children: [
                    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HeroSection:136:16", "data-dynamic-content": "true", className: "text-2xl md:text-3xl lg:text-4xl font-bold text-white", children: loading ? "..." : `${stats.activeRestaurants || 0}+` }, void 0, false, {
                      fileName: "/app/src/components/landing/HeroSection.jsx",
                      lineNumber: 155,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HeroSection:139:16", "data-dynamic-content": "false", className: "text-orange-100 text-xs md:text-sm font-normal mt-1", children: "Active Restaurants" }, void 0, false, {
                      fileName: "/app/src/components/landing/HeroSection.jsx",
                      lineNumber: 158,
                      columnNumber: 17
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/src/components/landing/HeroSection.jsx",
                  lineNumber: 150,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                motion.div,
                {
                  "data-source-location": "components/landing/HeroSection:141:14",
                  "data-dynamic-content": "true",
                  initial: { scale: 0.8, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  transition: { delay: 0.5 },
                  children: [
                    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HeroSection:146:16", "data-dynamic-content": "true", className: "text-2xl md:text-3xl lg:text-4xl font-bold text-white", children: loading ? "..." : formatGMV(stats.totalGMV) }, void 0, false, {
                      fileName: "/app/src/components/landing/HeroSection.jsx",
                      lineNumber: 165,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HeroSection:149:16", "data-dynamic-content": "false", className: "text-orange-100 text-xs md:text-sm font-normal mt-1", children: "GMV Processed" }, void 0, false, {
                      fileName: "/app/src/components/landing/HeroSection.jsx",
                      lineNumber: 168,
                      columnNumber: 17
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/src/components/landing/HeroSection.jsx",
                  lineNumber: 160,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                motion.div,
                {
                  "data-source-location": "components/landing/HeroSection:151:14",
                  "data-dynamic-content": "true",
                  initial: { scale: 0.8, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  transition: { delay: 0.6 },
                  children: [
                    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HeroSection:156:16", "data-dynamic-content": "false", className: "text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-300", children: "0%" }, void 0, false, {
                      fileName: "/app/src/components/landing/HeroSection.jsx",
                      lineNumber: 175,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HeroSection:157:16", "data-dynamic-content": "false", className: "text-orange-100 text-xs md:text-sm font-normal mt-1", children: "Commission Fee" }, void 0, false, {
                      fileName: "/app/src/components/landing/HeroSection.jsx",
                      lineNumber: 176,
                      columnNumber: 17
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/src/components/landing/HeroSection.jsx",
                  lineNumber: 170,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/components/landing/HeroSection.jsx",
              lineNumber: 149,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/src/components/landing/HeroSection.jsx",
          lineNumber: 107,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/HeroSection:163:10", "data-dynamic-content": "false", className: "relative hidden lg:block", children: /* @__PURE__ */ jsxDEV(LiveDashboardGraphic, { "data-source-location": "components/landing/HeroSection:164:12", "data-dynamic-content": "false" }, void 0, false, {
        fileName: "/app/src/components/landing/HeroSection.jsx",
        lineNumber: 183,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/src/components/landing/HeroSection.jsx",
        lineNumber: 182,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/landing/HeroSection.jsx",
      lineNumber: 105,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/components/landing/HeroSection.jsx",
      lineNumber: 104,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/landing/HeroSection.jsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}
_s(HeroSection, "dgjRgl/3vX6ZXTMgFWmAYBJadRs=");
_c = HeroSection;
var _c;
$RefreshReg$(_c, "HeroSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/landing/HeroSection.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/landing/HeroSection.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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O0FBQUE7QUFBQTtBQUFBLG1CQTZCQTtBQUFBO0FBQUE7QUFBQSxRQXZFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUF3RUE7QUFBQSxNQUdBLHVCQUFDLFNBQUksd0JBQXFCLHlDQUF3Qyx3QkFBcUIsU0FBUSxXQUFVLDRCQUN2RyxpQ0FBQyx3QkFBcUIsd0JBQXFCLHlDQUF3Qyx3QkFBcUIsV0FBeEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUErRyxLQURqSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRUE7QUFBQSxTQS9FRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBZ0ZBLEtBakZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FrRkE7QUFBQSxPQXRHRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBdUdBO0FBRUo7QUFBQ2hDLEdBL0p1QkQsYUFBVztBQUFBa0MsS0FBWGxDO0FBQVcsSUFBQWtDO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsIkJ1dHRvbiIsIm1vdGlvbiIsIkFycm93UmlnaHQiLCJTcGFya2xlcyIsImJhc2U0NCIsIkxpdmVEYXNoYm9hcmRHcmFwaGljIiwiY3JlYXRlUGFnZVVybCIsInBhZ2VOYW1lIiwiSGVyb1NlY3Rpb24iLCJfcyIsInN0YXRzIiwic2V0U3RhdHMiLCJhY3RpdmVSZXN0YXVyYW50cyIsInRvdGFsR01WIiwidG90YWxPcmRlcnMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImxvYWRSZWFsU3RhdHMiLCJyZXN0YXVyYW50cyIsImVudGl0aWVzIiwiUmVzdGF1cmFudCIsImZpbHRlciIsImFjY291bnRfc3RhdHVzIiwib3JkZXJzIiwiT3JkZXIiLCJsaXN0IiwicmVkdWNlIiwic3VtIiwib3JkZXIiLCJ0b3RhbF9hbW91bnQiLCJsZW5ndGgiLCJlcnJvciIsImNvbnNvbGUiLCJmb3JtYXRHTVYiLCJhbW91bnQiLCJ0b0ZpeGVkIiwidG9Mb2NhbGVTdHJpbmciLCJvcGFjaXR5IiwieSIsImR1cmF0aW9uIiwic2NhbGUiLCJkZWxheSIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkhlcm9TZWN0aW9uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IEFycm93UmlnaHQsIFNwYXJrbGVzIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgYmFzZTQ0IH0gZnJvbSBcIkAvYXBpL2Jhc2U0NENsaWVudFwiO1xuaW1wb3J0IExpdmVEYXNoYm9hcmRHcmFwaGljIGZyb20gXCIuL0xpdmVEYXNoYm9hcmRHcmFwaGljXCI7XG5cbmNvbnN0IGNyZWF0ZVBhZ2VVcmwgPSAocGFnZU5hbWUpID0+IGAvJHtwYWdlTmFtZX1gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXJvU2VjdGlvbigpIHtcbiAgY29uc3QgW3N0YXRzLCBzZXRTdGF0c10gPSB1c2VTdGF0ZSh7XG4gICAgYWN0aXZlUmVzdGF1cmFudHM6IDAsXG4gICAgdG90YWxHTVY6IDAsXG4gICAgdG90YWxPcmRlcnM6IDBcbiAgfSk7XG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkUmVhbFN0YXRzKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBsb2FkUmVhbFN0YXRzID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIC8vIEdldCBhbGwgYWN0aXZlIHJlc3RhdXJhbnRzXG4gICAgICBjb25zdCByZXN0YXVyYW50cyA9IGF3YWl0IGJhc2U0NC5lbnRpdGllcy5SZXN0YXVyYW50LmZpbHRlcih7XG4gICAgICAgIGFjY291bnRfc3RhdHVzOiBcImFjdGl2ZVwiXG4gICAgICB9KTtcblxuICAgICAgLy8gR2V0IGFsbCBvcmRlcnNcbiAgICAgIGNvbnN0IG9yZGVycyA9IGF3YWl0IGJhc2U0NC5lbnRpdGllcy5PcmRlci5saXN0KCk7XG5cbiAgICAgIC8vIENhbGN1bGF0ZSB0b3RhbCBHTVZcbiAgICAgIGNvbnN0IHRvdGFsR01WID0gb3JkZXJzLnJlZHVjZSgoc3VtLCBvcmRlcikgPT4gc3VtICsgKG9yZGVyLnRvdGFsX2Ftb3VudCB8fCAwKSwgMCk7XG5cbiAgICAgIHNldFN0YXRzKHtcbiAgICAgICAgYWN0aXZlUmVzdGF1cmFudHM6IHJlc3RhdXJhbnRzLmxlbmd0aCxcbiAgICAgICAgdG90YWxHTVY6IHRvdGFsR01WLFxuICAgICAgICB0b3RhbE9yZGVyczogb3JkZXJzLmxlbmd0aFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBzdGF0czpcIiwgZXJyb3IpO1xuICAgICAgc2V0U3RhdHMoe1xuICAgICAgICBhY3RpdmVSZXN0YXVyYW50czogNTAsXG4gICAgICAgIHRvdGFsR01WOiAxMDAwMDAwMCxcbiAgICAgICAgdG90YWxPcmRlcnM6IDUwMDBcbiAgICAgIH0pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZm9ybWF0R01WID0gKGFtb3VudCkgPT4ge1xuICAgIGlmIChhbW91bnQgPj0gMTAwMDAwMDApIHtcbiAgICAgIHJldHVybiBg4oK5JHsoYW1vdW50IC8gMTAwMDAwMDApLnRvRml4ZWQoMSl9Q3IrYDtcbiAgICB9IGVsc2UgaWYgKGFtb3VudCA+PSAxMDAwMDApIHtcbiAgICAgIHJldHVybiBg4oK5JHsoYW1vdW50IC8gMTAwMDAwKS50b0ZpeGVkKDEpfUwrYDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGDigrkke2Ftb3VudC50b0xvY2FsZVN0cmluZygpfStgO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9IZXJvU2VjdGlvbjo2NTo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYmctc2xhdGUtOTAwIHB5LTE2IHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBmcm9tLW9yYW5nZS02MDAgdmlhLW9yYW5nZS01MDAgdG8tcm9zZS02MDAgbWQ6cHktMjQgbGc6cHktMzJcIj5cbiAgICAgIHsvKiBCYWNrZ3JvdW5kIGRlY29yYXRpb25zICovfVxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9IZXJvU2VjdGlvbjo2Nzo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgb3ZlcmZsb3ctaGlkZGVuIHBvaW50ZXItZXZlbnRzLW5vbmVcIj5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9IZXJvU2VjdGlvbjo2ODo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImFic29sdXRlIC10b3AtNDAgLXJpZ2h0LTQwIHctOTYgaC05NiBiZy13aGl0ZS8yMCByb3VuZGVkLWZ1bGwgYmx1ci0zeGxcIiAvPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uOjY5OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLWJvdHRvbS00MCAtbGVmdC00MCB3LTk2IGgtOTYgYmcteWVsbG93LTUwMC8zMCByb3VuZGVkLWZ1bGwgYmx1ci0zeGxcIiAvPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uOjcwOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEvMiBsZWZ0LTEvMiB3LTgwIGgtODAgYmctcm9zZS01MDAvMjAgcm91bmRlZC1mdWxsIGJsdXItM3hsXCIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogU3dpcmwgU1ZHIGxpbmVzICovfVxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9IZXJvU2VjdGlvbjo3NDo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgcG9pbnRlci1ldmVudHMtbm9uZSB6LTBcIj5cbiAgICAgICAgPHN2ZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9IZXJvU2VjdGlvbjo3NTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCAtdHJhbnNsYXRlLXgtMS8zIC10cmFuc2xhdGUteS0xLzMgdGV4dC1vcmFuZ2UtNTAwLzEwXCIgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI2MDBcIiB2aWV3Qm94PVwiMCAwIDYwMCA2MDBcIiBmaWxsPVwibm9uZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgIDxwYXRoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uOjc2OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGQ9XCJNNTE1LjI2NiAxODEuMzNDMzc3Ljk0MyA1MS41NjQgMTI4LjUzNyAxMzYuMjU2IDUwLjgxMjMgMjkzLjU2NUMtMjYuOTEyNyA0NTAuODc0IDEyNS43MjggNjAwIDEyNS43MjggNjAwXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIDxzdmcgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb246Nzg6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCByaWdodC0wIHRyYW5zbGF0ZS14LTEvNCB0cmFuc2xhdGUteS0xLzQgdGV4dC1vcmFuZ2UtNDAwLzEwXCIgd2lkdGg9XCI3MDBcIiBoZWlnaHQ9XCI3MDBcIiB2aWV3Qm94PVwiMCAwIDcwMCA3MDBcIiBmaWxsPVwibm9uZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgIDxwYXRoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uOjc5OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGQ9XCJNMjYuODgzOCA1MjguMjc0QzE5My45MzQgNjg5LjgxNiA0ODAuMDUxIDYzNy4yMTggNTk0LjM5NyA0NTEuOTgzQzcwOC43NDIgMjY2Ljc0OCA1NDMuOTUzIDIuMjIyMzUgNTQzLjk1MyAyLjIyMjM1XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2Rpdj5cblxuXG5cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb246ODU6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInJlbGF0aXZlIG1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb246ODY6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLTIgZ2FwLTggbGc6Z2FwLTEyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIHsvKiBMZWZ0IENvbnRlbnQgKi99XG4gICAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb246ODg6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjYgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBsZzp0ZXh0LWxlZnRcIj5cblxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb246OTQ6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgaW5pdGlhbD17eyBzY2FsZTogMC45LCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IHNjYWxlOiAxLCBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjIgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBiZy13aGl0ZS8yMCBiYWNrZHJvcC1ibHVyLW1kIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQtZnVsbCB0ZXh0LXNtIGZvbnQtbWVkaXVtIG1iLTYgYm9yZGVyIGJvcmRlci13aGl0ZS8zMCBzaGFkb3cteGxcIj5cblxuICAgICAgICAgICAgICA8U3BhcmtsZXMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb246MTAwOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICBaZXJvIENvbW1pc3Npb24g4oCiIERpcmVjdCB0byBDdXN0b21lclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8aDEgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb246MTA0OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtM3hsIHNtOnRleHQtNHhsIG1kOnRleHQtNXhsIGxnOnRleHQtNnhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGxlYWRpbmctdGlnaHQgbWItNSBtZDptYi02XCI+XG4gICAgICAgICAgICAgIE93biBZb3VyXG4gICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uOjEwNjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJibG9jayBiZy1ncmFkaWVudC10by1yIGZyb20teWVsbG93LTMwMCB2aWEtd2hpdGUgdG8teWVsbG93LTIwMCBiZy1jbGlwLXRleHQgdGV4dC10cmFuc3BhcmVudFwiPiBSZXN0YXVyYW50IEJ1c2luZXNzPC9zcGFuPlxuICAgICAgICAgICAgICBOb3QgWW91ciBDb21taXNzaW9uc1xuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb246MTEwOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtYmFzZSBzbTp0ZXh0LWxnIG1kOnRleHQteGwgdGV4dC1vcmFuZ2UtNTAgbWItNiBtZDptYi04IGxlYWRpbmctcmVsYXhlZCBtYXgtdy0yeGxcIj5cbiAgICAgICAgICAgICAgQnJlYWsgZnJlZSBmcm9tIGV4cGVuc2l2ZSBhZ2dyZWdhdG9ycy4gR2V0IHlvdXIgb3duIFFSIG9yZGVyaW5nIHN5c3RlbSwgXG4gICAgICAgICAgICAgIGRpcmVjdCBwYXltZW50cywgYW5kIGN1c3RvbWVyIGRhdGFiYXNlIHdpdGggPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb246MTEyOjU4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPjAlIGNvbW1pc3Npb248L3NwYW4+LlxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uOjExNToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgZ2FwLTMgbWItOCBtZDptYi0xMCBqdXN0aWZ5LWNlbnRlciBsZzpqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgICAgIDxMaW5rIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uOjExNjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHRvPXtjcmVhdGVQYWdlVXJsKFwiR2V0U3RhcnRlZFwiKX0gY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb246MTE3OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSB0ZXh0LW9yYW5nZS02MDAgaG92ZXI6Ymctb3JhbmdlLTUwIHB4LTYgcHktNSB0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCByb3VuZGVkLTJ4bCBzaGFkb3ctMnhsIGhvdmVyOnNoYWRvdy1vcmFuZ2UtMzAwLzUwIHRyYW5zaXRpb24tYWxsIGhvdmVyOnNjYWxlLTEwNVwiPlxuICAgICAgICAgICAgICAgICAgU3RhcnQgMTQtRGF5IEZyZWUgVHJpYWxcbiAgICAgICAgICAgICAgICAgIDxBcnJvd1JpZ2h0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uOjExOToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTUgaC01IG1sLTJcIiAvPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uOjEyMjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHRvPXtjcmVhdGVQYWdlVXJsKFwiQ29udGFjdFwiKX0gY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb246MTIzOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHZhcmlhbnQ9XCJvdXRsaW5lXCIgY2xhc3NOYW1lPVwiYmctd2hpdGUvMTAgdGV4dC13aGl0ZSBweC02IHB5LTUgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHJvdW5kZWQtMnhsIGJvcmRlci0yIGJvcmRlci13aGl0ZSBob3ZlcjpiZy13aGl0ZS8yMCBiYWNrZHJvcC1ibHVyLXNtXCI+XG4gICAgICAgICAgICAgICAgICBXYXRjaCBEZW1vXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogU3RhdHMgLSBSZWFsIERhdGEgKi99XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uOjEzMDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTQgbWQ6Z2FwLTYgcHQtNSBib3JkZXItdCBib3JkZXItd2hpdGUvMjBcIj5cbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb246MTMxOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBzY2FsZTogMC44LCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgc2NhbGU6IDEsIG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC40IH19PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9IZXJvU2VjdGlvbjoxMzY6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LTN4bCBsZzp0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyBcIi4uLlwiIDogYCR7c3RhdHMuYWN0aXZlUmVzdGF1cmFudHMgfHwgMH0rYH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uOjEzOToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZS0xMDAgdGV4dC14cyBtZDp0ZXh0LXNtIGZvbnQtbm9ybWFsIG10LTFcIj5BY3RpdmUgUmVzdGF1cmFudHM8L2Rpdj5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9IZXJvU2VjdGlvbjoxNDE6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICBpbml0aWFsPXt7IHNjYWxlOiAwLjgsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyBzY2FsZTogMSwgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjUgfX0+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uOjE0NjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtMnhsIG1kOnRleHQtM3hsIGxnOnRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICB7bG9hZGluZyA/IFwiLi4uXCIgOiBmb3JtYXRHTVYoc3RhdHMudG90YWxHTVYpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb246MTQ5OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTEwMCB0ZXh0LXhzIG1kOnRleHQtc20gZm9udC1ub3JtYWwgbXQtMVwiPkdNViBQcm9jZXNzZWQ8L2Rpdj5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9IZXJvU2VjdGlvbjoxNTE6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICBpbml0aWFsPXt7IHNjYWxlOiAwLjgsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyBzY2FsZTogMSwgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjYgfX0+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uOjE1NjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LTN4bCBsZzp0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC15ZWxsb3ctMzAwXCI+MCU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uOjE1NzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZS0xMDAgdGV4dC14cyBtZDp0ZXh0LXNtIGZvbnQtbm9ybWFsIG10LTFcIj5Db21taXNzaW9uIEZlZTwvZGl2PlxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICB7LyogUmlnaHQgQ29udGVudCAtIEFuaW1hdGVkIERhc2hib2FyZCBHcmFwaGljICovfVxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb246MTYzOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInJlbGF0aXZlIGhpZGRlbiBsZzpibG9ja1wiPlxuICAgICAgICAgICAgPExpdmVEYXNoYm9hcmRHcmFwaGljIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0hlcm9TZWN0aW9uOjE2NDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj4pO1xuXG59Il0sImZpbGUiOiIvYXBwL3NyYy9jb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb24uanN4In0=