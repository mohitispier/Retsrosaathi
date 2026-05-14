import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/landing/LiveDashboardGraphic.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/landing/LiveDashboardGraphic.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { motion, AnimatePresence } from "/node_modules/.vite/deps/framer-motion.js?v=79425e35";
import { TrendingUp, ShoppingBag, Users, IndianRupee } from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
const revenueData = [40, 65, 50, 80, 72, 95, 88, 110, 98, 125, 115, 140];
const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const liveOrders = [
  { table: "T-5", item: "Butter Chicken", amount: "₹850", status: "Preparing", color: "bg-yellow-100 text-yellow-700" },
  { table: "T-8", item: "Paneer Tikka + Naan", amount: "₹520", status: "Ready", color: "bg-green-100 text-green-700" },
  { table: "T-2", item: "Biryani + Raita", amount: "₹1,200", status: "Served", color: "bg-blue-100 text-blue-700" },
  { table: "T-11", item: "Dal Makhani + Roti", amount: "₹340", status: "New", color: "bg-orange-100 text-orange-700" }
];
const miniStats = [
  { label: "Today's Revenue", value: "₹18,450", icon: IndianRupee, change: "+12%", color: "text-green-500" },
  { label: "Orders Today", value: "84", icon: ShoppingBag, change: "+5", color: "text-blue-500" },
  { label: "Customers", value: "62", icon: Users, change: "+8", color: "text-purple-500" }
];
function MiniBarChart() {
  const max = Math.max(...revenueData);
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LiveDashboardGraphic:24:4", "data-dynamic-content": "true", className: "flex items-end gap-1 h-16 w-full", children: revenueData.map(
    (val, i) => /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-source-location": "components/landing/LiveDashboardGraphic:26:8",
        "data-dynamic-content": "true",
        className: "flex-1 bg-gradient-to-t from-orange-500 to-orange-300 rounded-t-sm",
        initial: { height: 0 },
        animate: { height: `${val / max * 100}%` },
        transition: { delay: 0.3 + i * 0.07, duration: 0.6, ease: "easeOut" },
        "data-arr-index": i,
        "data-arr-variable-name": "revenueData"
      },
      i,
      false,
      {
        fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
        lineNumber: 45,
        columnNumber: 7
      },
      this
    )
  ) }, void 0, false, {
    fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
_c = MiniBarChart;
function PulsingDot() {
  return /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/LiveDashboardGraphic:40:4", "data-dynamic-content": "false", className: "relative flex h-2.5 w-2.5", children: [
    /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/LiveDashboardGraphic:41:6", "data-dynamic-content": "false", className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" }, void 0, false, {
      fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/LiveDashboardGraphic:42:6", "data-dynamic-content": "false", className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" }, void 0, false, {
      fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
      lineNumber: 61,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}
_c2 = PulsingDot;
export default function LiveDashboardGraphic() {
  _s();
  const [activeOrder, setActiveOrder] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveOrder((prev) => (prev + 1) % liveOrders.length);
    }, 2e3);
    return () => clearInterval(timer);
  }, []);
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LiveDashboardGraphic:58:4", "data-dynamic-content": "true", className: "relative w-full max-w-xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-source-location": "components/landing/LiveDashboardGraphic:60:6",
        "data-dynamic-content": "true",
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, delay: 0.3 },
        className: "bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/20 p-5 border border-white/60",
        children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LiveDashboardGraphic:67:8", "data-dynamic-content": "false", className: "flex items-center gap-2 mb-5", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LiveDashboardGraphic:68:10", "data-dynamic-content": "false", className: "w-3 h-3 rounded-full bg-red-400" }, void 0, false, {
              fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
              lineNumber: 87,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LiveDashboardGraphic:69:10", "data-dynamic-content": "false", className: "w-3 h-3 rounded-full bg-yellow-400" }, void 0, false, {
              fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
              lineNumber: 88,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LiveDashboardGraphic:70:10", "data-dynamic-content": "false", className: "w-3 h-3 rounded-full bg-green-400" }, void 0, false, {
              fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
              lineNumber: 89,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LiveDashboardGraphic:71:10", "data-dynamic-content": "false", className: "ml-2 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxDEV(PulsingDot, { "data-source-location": "components/landing/LiveDashboardGraphic:72:12", "data-dynamic-content": "false" }, void 0, false, {
                fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
                lineNumber: 91,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/LiveDashboardGraphic:73:12", "data-dynamic-content": "false", className: "text-xs text-gray-400 font-medium", children: "Live Dashboard" }, void 0, false, {
                fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
                lineNumber: 92,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
              lineNumber: 90,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
            lineNumber: 86,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LiveDashboardGraphic:78:8", "data-dynamic-content": "true", className: "grid grid-cols-3 gap-2 mb-4", children: miniStats.map(
            (stat, i) => /* @__PURE__ */ jsxDEV(
              motion.div,
              {
                "data-source-location": "components/landing/LiveDashboardGraphic:80:12",
                "data-dynamic-content": "true",
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                transition: { delay: 0.4 + i * 0.1 },
                className: "bg-gray-50 rounded-xl p-2.5 text-center",
                "data-arr-index": i,
                "data-arr-variable-name": "miniStats",
                children: [
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LiveDashboardGraphic:87:14", "data-dynamic-content": "true", className: "text-sm font-bold text-gray-900", "data-arr-index": i, "data-arr-variable-name": "miniStats", "data-arr-field": "value", children: stat.value }, void 0, false, {
                    fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
                    lineNumber: 106,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LiveDashboardGraphic:88:14", "data-dynamic-content": "true", className: `text-xs font-semibold ${stat.color}`, "data-arr-index": i, "data-arr-variable-name": "miniStats", "data-arr-field": "change", children: stat.change }, void 0, false, {
                    fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
                    lineNumber: 107,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LiveDashboardGraphic:89:14", "data-dynamic-content": "true", className: "text-[10px] text-gray-400 mt-0.5 leading-tight", "data-arr-index": i, "data-arr-variable-name": "miniStats", "data-arr-field": "label", children: stat.label }, void 0, false, {
                    fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
                    lineNumber: 108,
                    columnNumber: 15
                  }, this)
                ]
              },
              stat.label,
              true,
              {
                fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
                lineNumber: 99,
                columnNumber: 11
              },
              this
            )
          ) }, void 0, false, {
            fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
            lineNumber: 97,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LiveDashboardGraphic:95:8", "data-dynamic-content": "true", className: "bg-gray-50 rounded-2xl p-3 mb-4", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LiveDashboardGraphic:96:10", "data-dynamic-content": "false", className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/LiveDashboardGraphic:97:12", "data-dynamic-content": "false", className: "text-xs font-semibold text-gray-600", children: "Monthly Revenue" }, void 0, false, {
                fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
                lineNumber: 116,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/LiveDashboardGraphic:98:12", "data-dynamic-content": "false", className: "flex items-center gap-1 text-xs text-green-600 font-bold", children: [
                /* @__PURE__ */ jsxDEV(TrendingUp, { "data-source-location": "components/landing/LiveDashboardGraphic:99:14", "data-dynamic-content": "false", className: "w-3 h-3" }, void 0, false, {
                  fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
                  lineNumber: 118,
                  columnNumber: 15
                }, this),
                " +34% YoY"
              ] }, void 0, true, {
                fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
                lineNumber: 117,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
              lineNumber: 115,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV(MiniBarChart, { "data-source-location": "components/landing/LiveDashboardGraphic:102:10", "data-dynamic-content": "false" }, void 0, false, {
              fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
              lineNumber: 121,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LiveDashboardGraphic:103:10", "data-dynamic-content": "true", className: "flex justify-between mt-1", children: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"].map(
              (m, i) => /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/LiveDashboardGraphic:105:14", "data-dynamic-content": "true", className: "text-[9px] text-gray-400", "data-arr-index": i, children: m }, i, false, {
                fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
                lineNumber: 124,
                columnNumber: 13
              }, this)
            ) }, void 0, false, {
              fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
              lineNumber: 122,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
            lineNumber: 114,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LiveDashboardGraphic:111:8", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LiveDashboardGraphic:112:10", "data-dynamic-content": "false", className: "flex items-center gap-1.5 mb-2", children: [
              /* @__PURE__ */ jsxDEV(PulsingDot, { "data-source-location": "components/landing/LiveDashboardGraphic:113:12", "data-dynamic-content": "false" }, void 0, false, {
                fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
                lineNumber: 132,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/LiveDashboardGraphic:114:12", "data-dynamic-content": "false", className: "text-xs font-semibold text-gray-600", children: "Live Orders" }, void 0, false, {
                fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
                lineNumber: 133,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
              lineNumber: 131,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LiveDashboardGraphic:116:10", "data-dynamic-content": "true", className: "space-y-2", children: /* @__PURE__ */ jsxDEV(AnimatePresence, { "data-source-location": "components/landing/LiveDashboardGraphic:117:12", "data-dynamic-content": "true", mode: "popLayout", children: liveOrders.map(
              (order, i) => /* @__PURE__ */ jsxDEV(
                motion.div,
                {
                  "data-source-location": "components/landing/LiveDashboardGraphic:119:16",
                  "data-dynamic-content": "true",
                  initial: { opacity: 0, x: -10 },
                  animate: { opacity: i === activeOrder ? 1 : 0.6, x: 0 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.4 },
                  className: `flex items-center justify-between rounded-xl px-3 py-2 transition-all ${i === activeOrder ? "bg-orange-50 border border-orange-200" : "bg-gray-50"}`,
                  "data-arr-index": i,
                  "data-arr-variable-name": "liveOrders",
                  children: [
                    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LiveDashboardGraphic:129:18", "data-dynamic-content": "true", className: "flex items-center gap-2", "data-arr-index": i, "data-arr-variable-name": "liveOrders", children: [
                      /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/LiveDashboardGraphic:130:20", "data-dynamic-content": "true", className: "text-xs font-bold text-orange-600 w-8", "data-arr-index": i, "data-arr-variable-name": "liveOrders", "data-arr-field": "table", children: order.table }, void 0, false, {
                        fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
                        lineNumber: 149,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/LiveDashboardGraphic:131:20", "data-dynamic-content": "true", className: "text-xs text-gray-600 truncate max-w-[110px]", "data-arr-index": i, "data-arr-variable-name": "liveOrders", "data-arr-field": "item", children: order.item }, void 0, false, {
                        fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
                        lineNumber: 150,
                        columnNumber: 21
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
                      lineNumber: 148,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LiveDashboardGraphic:133:18", "data-dynamic-content": "true", className: "flex items-center gap-2", "data-arr-index": i, "data-arr-variable-name": "liveOrders", children: [
                      /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/LiveDashboardGraphic:134:20", "data-dynamic-content": "true", className: "text-xs font-bold text-gray-900", "data-arr-index": i, "data-arr-variable-name": "liveOrders", "data-arr-field": "amount", children: order.amount }, void 0, false, {
                        fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
                        lineNumber: 153,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/LiveDashboardGraphic:135:20", "data-dynamic-content": "true", className: `text-[10px] px-1.5 py-0.5 rounded-full font-medium ${order.color}`, "data-arr-index": i, "data-arr-variable-name": "liveOrders", "data-arr-field": "status", children: order.status }, void 0, false, {
                        fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
                        lineNumber: 154,
                        columnNumber: 21
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
                      lineNumber: 152,
                      columnNumber: 19
                    }, this)
                  ]
                },
                order.table + order.item,
                true,
                {
                  fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
                  lineNumber: 138,
                  columnNumber: 15
                },
                this
              )
            ) }, void 0, false, {
              fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
              lineNumber: 136,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
              lineNumber: 135,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
            lineNumber: 130,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
        lineNumber: 79,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-source-location": "components/landing/LiveDashboardGraphic:147:6",
        "data-dynamic-content": "true",
        initial: { opacity: 0, scale: 0.7, x: -20 },
        animate: { opacity: 1, scale: 1, x: 0 },
        transition: { delay: 0.9, type: "spring", stiffness: 200 },
        className: "absolute -left-10 top-1/4 bg-white rounded-2xl shadow-xl px-3 py-2.5 flex items-center gap-2 border border-gray-100",
        children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LiveDashboardGraphic:153:8", "data-dynamic-content": "false", className: "w-8 h-8 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 text-lg", children: "📲" }, void 0, false, {
            fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
            lineNumber: 172,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LiveDashboardGraphic:154:8", "data-dynamic-content": "false", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LiveDashboardGraphic:155:10", "data-dynamic-content": "false", className: "text-xs font-bold text-gray-900", children: "QR Scan" }, void 0, false, {
              fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
              lineNumber: 174,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LiveDashboardGraphic:156:10", "data-dynamic-content": "false", className: "text-[10px] text-green-600 font-medium", children: "+3 orders/min" }, void 0, false, {
              fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
              lineNumber: 175,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
            lineNumber: 173,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
        lineNumber: 166,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-source-location": "components/landing/LiveDashboardGraphic:161:6",
        "data-dynamic-content": "true",
        initial: { opacity: 0, scale: 0.7, x: 20 },
        animate: { opacity: 1, scale: 1, x: 0 },
        transition: { delay: 1.1, type: "spring", stiffness: 200 },
        className: "absolute -right-8 bottom-1/4 bg-white rounded-2xl shadow-xl px-3 py-2.5 flex items-center gap-2 border border-gray-100",
        children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LiveDashboardGraphic:167:8", "data-dynamic-content": "false", className: "w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center text-lg", children: "💰" }, void 0, false, {
            fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
            lineNumber: 186,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LiveDashboardGraphic:168:8", "data-dynamic-content": "false", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LiveDashboardGraphic:169:10", "data-dynamic-content": "false", className: "text-xs font-bold text-gray-900", children: "Saved Today" }, void 0, false, {
              fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
              lineNumber: 188,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/LiveDashboardGraphic:170:10", "data-dynamic-content": "false", className: "text-[10px] text-green-600 font-bold", children: "₹2,340" }, void 0, false, {
              fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
              lineNumber: 189,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
            lineNumber: 187,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
        lineNumber: 180,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-source-location": "components/landing/LiveDashboardGraphic:175:6",
        "data-dynamic-content": "true",
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 1.3, type: "spring", stiffness: 200 },
        className: "absolute -top-4 right-8 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2",
        children: [
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/LiveDashboardGraphic:181:8", "data-dynamic-content": "false", className: "text-sm font-extrabold", children: "0%" }, void 0, false, {
            fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
            lineNumber: 200,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/LiveDashboardGraphic:182:8", "data-dynamic-content": "false", className: "text-[10px] font-medium opacity-90", children: "Commission" }, void 0, false, {
            fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
            lineNumber: 201,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
        lineNumber: 194,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/src/components/landing/LiveDashboardGraphic.jsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
}
_s(LiveDashboardGraphic, "U8cClF8jptMgQz6Lat+vMPXQASE=");
_c3 = LiveDashboardGraphic;
var _c, _c2, _c3;
$RefreshReg$(_c, "MiniBarChart");
$RefreshReg$(_c2, "PulsingDot");
$RefreshReg$(_c3, "LiveDashboardGraphic");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/landing/LiveDashboardGraphic.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/landing/LiveDashboardGraphic.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBeUJNOzs7Ozs7Ozs7Ozs7Ozs7OztBQXpCTixPQUFPQSxTQUFTQyxVQUFVQyxpQkFBaUI7QUFDM0MsU0FBU0MsUUFBUUMsdUJBQXVCO0FBQ3hDLFNBQVNDLFlBQVlDLGFBQWFDLE9BQU9DLG1CQUFtQjtBQUU1RCxNQUFNQyxjQUFjLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxLQUFLLEdBQUc7QUFDdkUsTUFBTUMsU0FBUyxDQUFDLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxLQUFLO0FBRWxHLE1BQU1DLGFBQWE7QUFBQSxFQUNuQixFQUFFQyxPQUFPLE9BQU9DLE1BQU0sa0JBQWtCQyxRQUFRLFFBQVFDLFFBQVEsYUFBYUMsT0FBTyxnQ0FBZ0M7QUFBQSxFQUNwSCxFQUFFSixPQUFPLE9BQU9DLE1BQU0sdUJBQXVCQyxRQUFRLFFBQVFDLFFBQVEsU0FBU0MsT0FBTyw4QkFBOEI7QUFBQSxFQUNuSCxFQUFFSixPQUFPLE9BQU9DLE1BQU0sbUJBQW1CQyxRQUFRLFVBQVVDLFFBQVEsVUFBVUMsT0FBTyw0QkFBNEI7QUFBQSxFQUNoSCxFQUFFSixPQUFPLFFBQVFDLE1BQU0sc0JBQXNCQyxRQUFRLFFBQVFDLFFBQVEsT0FBT0MsT0FBTyxnQ0FBZ0M7QUFBQztBQUdwSCxNQUFNQyxZQUFZO0FBQUEsRUFDbEIsRUFBRUMsT0FBTyxtQkFBbUJDLE9BQU8sV0FBV0MsTUFBTVosYUFBYWEsUUFBUSxRQUFRTCxPQUFPLGlCQUFpQjtBQUFBLEVBQ3pHLEVBQUVFLE9BQU8sZ0JBQWdCQyxPQUFPLE1BQU1DLE1BQU1kLGFBQWFlLFFBQVEsTUFBTUwsT0FBTyxnQkFBZ0I7QUFBQSxFQUM5RixFQUFFRSxPQUFPLGFBQWFDLE9BQU8sTUFBTUMsTUFBTWIsT0FBT2MsUUFBUSxNQUFNTCxPQUFPLGtCQUFrQjtBQUFDO0FBR3hGLFNBQVNNLGVBQWU7QUFDdEIsUUFBTUMsTUFBTUMsS0FBS0QsSUFBSSxHQUFHZCxXQUFXO0FBQ25DLFNBQ0UsdUJBQUMsU0FBSSx3QkFBcUIsZ0RBQStDLHdCQUFxQixRQUFPLFdBQVUsb0NBQzVHQSxzQkFBWWdCO0FBQUFBLElBQUksQ0FBQ0MsS0FBS0MsTUFDdkI7QUFBQSxNQUFDLE9BQU87QUFBQSxNQUFQO0FBQUEsUUFBVyx3QkFBcUI7QUFBQSxRQUErQyx3QkFBcUI7QUFBQSxRQUVyRyxXQUFVO0FBQUEsUUFDVixTQUFTLEVBQUVDLFFBQVEsRUFBRTtBQUFBLFFBQ3JCLFNBQVMsRUFBRUEsUUFBUSxHQUFHRixNQUFNSCxNQUFNLEdBQUcsSUFBSTtBQUFBLFFBQ3pDLFlBQVksRUFBRU0sT0FBTyxNQUFNRixJQUFJLE1BQU1HLFVBQVUsS0FBS0MsTUFBTSxVQUFVO0FBQUEsUUFBRyxrQkFBZ0JKO0FBQUFBLFFBQUcsMEJBQXVCO0FBQUE7QUFBQSxNQUo1R0E7QUFBQUEsTUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSzhIO0FBQUEsRUFFOUgsS0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBVUE7QUFFSjtBQUFDSyxLQWZRVjtBQWlCVCxTQUFTVyxhQUFhO0FBQ3BCLFNBQ0UsdUJBQUMsVUFBSyx3QkFBcUIsZ0RBQStDLHdCQUFxQixTQUFRLFdBQVUsNkJBQy9HO0FBQUEsMkJBQUMsVUFBSyx3QkFBcUIsZ0RBQStDLHdCQUFxQixTQUFRLFdBQVUsMEZBQWpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBdU07QUFBQSxJQUN2TSx1QkFBQyxVQUFLLHdCQUFxQixnREFBK0Msd0JBQXFCLFNBQVEsV0FBVSxnRUFBakg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUE2SztBQUFBLE9BRi9LO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FHQTtBQUVKO0FBQUNDLE1BUFFEO0FBU1Qsd0JBQXdCRSx1QkFBdUI7QUFBQUMsS0FBQTtBQUM3QyxRQUFNLENBQUNDLGFBQWFDLGNBQWMsSUFBSXJDLFNBQVMsQ0FBQztBQUVoREMsWUFBVSxNQUFNO0FBQ2QsVUFBTXFDLFFBQVFDLFlBQVksTUFBTTtBQUM5QkYscUJBQWUsQ0FBQ0csVUFBVUEsT0FBTyxLQUFLOUIsV0FBVytCLE1BQU07QUFBQSxJQUN6RCxHQUFHLEdBQUk7QUFDUCxXQUFPLE1BQU1DLGNBQWNKLEtBQUs7QUFBQSxFQUNsQyxHQUFHLEVBQUU7QUFFTCxTQUNFLHVCQUFDLFNBQUksd0JBQXFCLGdEQUErQyx3QkFBcUIsUUFBTyxXQUFVLG9DQUU3RztBQUFBO0FBQUEsTUFBQyxPQUFPO0FBQUEsTUFBUDtBQUFBLFFBQVcsd0JBQXFCO0FBQUEsUUFBK0Msd0JBQXFCO0FBQUEsUUFDckcsU0FBUyxFQUFFSyxTQUFTLEdBQUdDLEdBQUcsR0FBRztBQUFBLFFBQzdCLFNBQVMsRUFBRUQsU0FBUyxHQUFHQyxHQUFHLEVBQUU7QUFBQSxRQUM1QixZQUFZLEVBQUVmLFVBQVUsS0FBS0QsT0FBTyxJQUFJO0FBQUEsUUFDeEMsV0FBVTtBQUFBLFFBR1I7QUFBQSxpQ0FBQyxTQUFJLHdCQUFxQixnREFBK0Msd0JBQXFCLFNBQVEsV0FBVSxnQ0FDOUc7QUFBQSxtQ0FBQyxTQUFJLHdCQUFxQixpREFBZ0Qsd0JBQXFCLFNBQVEsV0FBVSxxQ0FBakg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBa0o7QUFBQSxZQUNsSix1QkFBQyxTQUFJLHdCQUFxQixpREFBZ0Qsd0JBQXFCLFNBQVEsV0FBVSx3Q0FBakg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBcUo7QUFBQSxZQUNySix1QkFBQyxTQUFJLHdCQUFxQixpREFBZ0Qsd0JBQXFCLFNBQVEsV0FBVSx1Q0FBakg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBb0o7QUFBQSxZQUNwSix1QkFBQyxTQUFJLHdCQUFxQixpREFBZ0Qsd0JBQXFCLFNBQVEsV0FBVSxrQ0FDL0c7QUFBQSxxQ0FBQyxjQUFXLHdCQUFxQixpREFBZ0Qsd0JBQXFCLFdBQXRHO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTZHO0FBQUEsY0FDN0csdUJBQUMsVUFBSyx3QkFBcUIsaURBQWdELHdCQUFxQixTQUFRLFdBQVUscUNBQW9DLDhCQUF0SjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFvSztBQUFBLGlCQUZ0SztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUdBO0FBQUEsZUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVFBO0FBQUEsVUFHQSx1QkFBQyxTQUFJLHdCQUFxQixnREFBK0Msd0JBQXFCLFFBQU8sV0FBVSwrQkFDNUdaLG9CQUFVUTtBQUFBQSxZQUFJLENBQUNxQixNQUFNbkIsTUFDdEI7QUFBQSxjQUFDLE9BQU87QUFBQSxjQUFQO0FBQUEsZ0JBQVcsd0JBQXFCO0FBQUEsZ0JBQWdELHdCQUFxQjtBQUFBLGdCQUV0RyxTQUFTLEVBQUVpQixTQUFTLEdBQUdHLE9BQU8sSUFBSTtBQUFBLGdCQUNsQyxTQUFTLEVBQUVILFNBQVMsR0FBR0csT0FBTyxFQUFFO0FBQUEsZ0JBQ2hDLFlBQVksRUFBRWxCLE9BQU8sTUFBTUYsSUFBSSxJQUFJO0FBQUEsZ0JBQ25DLFdBQVU7QUFBQSxnQkFBMEMsa0JBQWdCQTtBQUFBQSxnQkFBRywwQkFBdUI7QUFBQSxnQkFFMUY7QUFBQSx5Q0FBQyxTQUFJLHdCQUFxQixpREFBZ0Qsd0JBQXFCLFFBQU8sV0FBVSxtQ0FBa0Msa0JBQWdCQSxHQUFHLDBCQUF1QixhQUFZLGtCQUFlLFNBQVNtQixlQUFLM0IsU0FBck87QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBMk87QUFBQSxrQkFDM08sdUJBQUMsU0FBSSx3QkFBcUIsaURBQWdELHdCQUFxQixRQUFPLFdBQVcseUJBQXlCMkIsS0FBSzlCLEtBQUssSUFBSSxrQkFBZ0JXLEdBQUcsMEJBQXVCLGFBQVksa0JBQWUsVUFBVW1CLGVBQUt6QixVQUE1TztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFtUDtBQUFBLGtCQUNuUCx1QkFBQyxTQUFJLHdCQUFxQixpREFBZ0Qsd0JBQXFCLFFBQU8sV0FBVSxrREFBaUQsa0JBQWdCTSxHQUFHLDBCQUF1QixhQUFZLGtCQUFlLFNBQVNtQixlQUFLNUIsU0FBcFA7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBMFA7QUFBQTtBQUFBO0FBQUEsY0FSelA0QixLQUFLNUI7QUFBQUEsY0FEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVUU7QUFBQSxVQUNGLEtBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFjQTtBQUFBLFVBR0EsdUJBQUMsU0FBSSx3QkFBcUIsZ0RBQStDLHdCQUFxQixRQUFPLFdBQVUsbUNBQzdHO0FBQUEsbUNBQUMsU0FBSSx3QkFBcUIsaURBQWdELHdCQUFxQixTQUFRLFdBQVUsMENBQy9HO0FBQUEscUNBQUMsVUFBSyx3QkFBcUIsaURBQWdELHdCQUFxQixTQUFRLFdBQVUsdUNBQXNDLCtCQUF4SjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUF1SztBQUFBLGNBQ3ZLLHVCQUFDLFVBQUssd0JBQXFCLGlEQUFnRCx3QkFBcUIsU0FBUSxXQUFVLDREQUNoSDtBQUFBLHVDQUFDLGNBQVcsd0JBQXFCLGlEQUFnRCx3QkFBcUIsU0FBUSxXQUFVLGFBQXhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQWlJO0FBQUEsZ0JBQUc7QUFBQSxtQkFEdEk7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBS0E7QUFBQSxZQUNBLHVCQUFDLGdCQUFhLHdCQUFxQixrREFBaUQsd0JBQXFCLFdBQXpHO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWdIO0FBQUEsWUFDaEgsdUJBQUMsU0FBSSx3QkFBcUIsa0RBQWlELHdCQUFxQixRQUFPLFdBQVUsNkJBQzlHLFdBQUMsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEdBQUcsRUFBRU87QUFBQUEsY0FBSSxDQUFDdUIsR0FBR3JCLE1BQ3RFLHVCQUFDLFVBQUssd0JBQXFCLGtEQUFpRCx3QkFBcUIsUUFBZSxXQUFVLDRCQUEyQixrQkFBZ0JBLEdBQUlxQixlQUE1RHJCLEdBQTdHO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTJLO0FBQUEsWUFDM0ssS0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUlBO0FBQUEsZUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWFBO0FBQUEsVUFHQSx1QkFBQyxTQUFJLHdCQUFxQixpREFBZ0Qsd0JBQXFCLFFBQzdGO0FBQUEsbUNBQUMsU0FBSSx3QkFBcUIsa0RBQWlELHdCQUFxQixTQUFRLFdBQVUsa0NBQ2hIO0FBQUEscUNBQUMsY0FBVyx3QkFBcUIsa0RBQWlELHdCQUFxQixXQUF2RztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUE4RztBQUFBLGNBQzlHLHVCQUFDLFVBQUssd0JBQXFCLGtEQUFpRCx3QkFBcUIsU0FBUSxXQUFVLHVDQUFzQywyQkFBeko7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBb0s7QUFBQSxpQkFGdEs7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFHQTtBQUFBLFlBQ0EsdUJBQUMsU0FBSSx3QkFBcUIsa0RBQWlELHdCQUFxQixRQUFPLFdBQVUsYUFDL0csaUNBQUMsbUJBQWdCLHdCQUFxQixrREFBaUQsd0JBQXFCLFFBQU8sTUFBSyxhQUNySGhCLHFCQUFXYztBQUFBQSxjQUFJLENBQUN3QixPQUFPdEIsTUFDeEI7QUFBQSxnQkFBQyxPQUFPO0FBQUEsZ0JBQVA7QUFBQSxrQkFBVyx3QkFBcUI7QUFBQSxrQkFBaUQsd0JBQXFCO0FBQUEsa0JBRXZHLFNBQVMsRUFBRWlCLFNBQVMsR0FBR00sR0FBRyxJQUFJO0FBQUEsa0JBQzlCLFNBQVMsRUFBRU4sU0FBU2pCLE1BQU1VLGNBQWMsSUFBSSxLQUFLYSxHQUFHLEVBQUU7QUFBQSxrQkFDdEQsTUFBTSxFQUFFTixTQUFTLEVBQUU7QUFBQSxrQkFDbkIsWUFBWSxFQUFFZCxVQUFVLElBQUk7QUFBQSxrQkFDNUIsV0FBVyx5RUFDWEgsTUFBTVUsY0FBYywwQ0FBMEMsWUFBWTtBQUFBLGtCQUN4RSxrQkFBZ0JWO0FBQUFBLGtCQUFHLDBCQUF1QjtBQUFBLGtCQUV4QztBQUFBLDJDQUFDLFNBQUksd0JBQXFCLGtEQUFpRCx3QkFBcUIsUUFBTyxXQUFVLDJCQUEwQixrQkFBZ0JBLEdBQUcsMEJBQXVCLGNBQ25MO0FBQUEsNkNBQUMsVUFBSyx3QkFBcUIsa0RBQWlELHdCQUFxQixRQUFPLFdBQVUseUNBQXdDLGtCQUFnQkEsR0FBRywwQkFBdUIsY0FBYSxrQkFBZSxTQUFTc0IsZ0JBQU1yQyxTQUEvTztBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUFxUDtBQUFBLHNCQUNyUCx1QkFBQyxVQUFLLHdCQUFxQixrREFBaUQsd0JBQXFCLFFBQU8sV0FBVSxnREFBK0Msa0JBQWdCZSxHQUFHLDBCQUF1QixjQUFhLGtCQUFlLFFBQVFzQixnQkFBTXBDLFFBQXJQO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQTBQO0FBQUEseUJBRjVQO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBR0E7QUFBQSxvQkFDQSx1QkFBQyxTQUFJLHdCQUFxQixrREFBaUQsd0JBQXFCLFFBQU8sV0FBVSwyQkFBMEIsa0JBQWdCYyxHQUFHLDBCQUF1QixjQUNuTDtBQUFBLDZDQUFDLFVBQUssd0JBQXFCLGtEQUFpRCx3QkFBcUIsUUFBTyxXQUFVLG1DQUFrQyxrQkFBZ0JBLEdBQUcsMEJBQXVCLGNBQWEsa0JBQWUsVUFBVXNCLGdCQUFNbkMsVUFBMU87QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBaVA7QUFBQSxzQkFDalAsdUJBQUMsVUFBSyx3QkFBcUIsa0RBQWlELHdCQUFxQixRQUFPLFdBQVcsc0RBQXNEbUMsTUFBTWpDLEtBQUssSUFBSSxrQkFBZ0JXLEdBQUcsMEJBQXVCLGNBQWEsa0JBQWUsVUFDM1BzQixnQkFBTWxDLFVBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFFQTtBQUFBLHlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBS0E7QUFBQTtBQUFBO0FBQUEsZ0JBbEJDa0MsTUFBTXJDLFFBQVFxQyxNQUFNcEM7QUFBQUEsZ0JBRHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FvQkU7QUFBQSxZQUNGLEtBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBd0JBLEtBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBMEJBO0FBQUEsZUEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFnQ0E7QUFBQTtBQUFBO0FBQUEsTUFuRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBb0ZBO0FBQUEsSUFHQTtBQUFBLE1BQUMsT0FBTztBQUFBLE1BQVA7QUFBQSxRQUFXLHdCQUFxQjtBQUFBLFFBQWdELHdCQUFxQjtBQUFBLFFBQ3RHLFNBQVMsRUFBRStCLFNBQVMsR0FBR0csT0FBTyxLQUFLRyxHQUFHLElBQUk7QUFBQSxRQUMxQyxTQUFTLEVBQUVOLFNBQVMsR0FBR0csT0FBTyxHQUFHRyxHQUFHLEVBQUU7QUFBQSxRQUN0QyxZQUFZLEVBQUVyQixPQUFPLEtBQUtzQixNQUFNLFVBQVVDLFdBQVcsSUFBSTtBQUFBLFFBQ3pELFdBQVU7QUFBQSxRQUVSO0FBQUEsaUNBQUMsU0FBSSx3QkFBcUIsaURBQWdELHdCQUFxQixTQUFRLFdBQVUsNkZBQTRGLGtCQUE3TTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUErTTtBQUFBLFVBQy9NLHVCQUFDLFNBQUksd0JBQXFCLGlEQUFnRCx3QkFBcUIsU0FDN0Y7QUFBQSxtQ0FBQyxTQUFJLHdCQUFxQixrREFBaUQsd0JBQXFCLFNBQVEsV0FBVSxtQ0FBa0MsdUJBQXBKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQTJKO0FBQUEsWUFDM0osdUJBQUMsU0FBSSx3QkFBcUIsa0RBQWlELHdCQUFxQixTQUFRLFdBQVUsMENBQXlDLDZCQUEzSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUF3SztBQUFBLGVBRjFLO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBR0E7QUFBQTtBQUFBO0FBQUEsTUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFXQTtBQUFBLElBR0E7QUFBQSxNQUFDLE9BQU87QUFBQSxNQUFQO0FBQUEsUUFBVyx3QkFBcUI7QUFBQSxRQUFnRCx3QkFBcUI7QUFBQSxRQUN0RyxTQUFTLEVBQUVSLFNBQVMsR0FBR0csT0FBTyxLQUFLRyxHQUFHLEdBQUc7QUFBQSxRQUN6QyxTQUFTLEVBQUVOLFNBQVMsR0FBR0csT0FBTyxHQUFHRyxHQUFHLEVBQUU7QUFBQSxRQUN0QyxZQUFZLEVBQUVyQixPQUFPLEtBQUtzQixNQUFNLFVBQVVDLFdBQVcsSUFBSTtBQUFBLFFBQ3pELFdBQVU7QUFBQSxRQUVSO0FBQUEsaUNBQUMsU0FBSSx3QkFBcUIsaURBQWdELHdCQUFxQixTQUFRLFdBQVUsNEVBQTJFLGtCQUE1TDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUE4TDtBQUFBLFVBQzlMLHVCQUFDLFNBQUksd0JBQXFCLGlEQUFnRCx3QkFBcUIsU0FDN0Y7QUFBQSxtQ0FBQyxTQUFJLHdCQUFxQixrREFBaUQsd0JBQXFCLFNBQVEsV0FBVSxtQ0FBa0MsMkJBQXBKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQStKO0FBQUEsWUFDL0osdUJBQUMsU0FBSSx3QkFBcUIsa0RBQWlELHdCQUFxQixTQUFRLFdBQVUsd0NBQXVDLHNCQUF6SjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUErSjtBQUFBLGVBRmpLO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBR0E7QUFBQTtBQUFBO0FBQUEsTUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFXQTtBQUFBLElBR0E7QUFBQSxNQUFDLE9BQU87QUFBQSxNQUFQO0FBQUEsUUFBVyx3QkFBcUI7QUFBQSxRQUFnRCx3QkFBcUI7QUFBQSxRQUN0RyxTQUFTLEVBQUVSLFNBQVMsR0FBR0MsR0FBRyxJQUFJO0FBQUEsUUFDOUIsU0FBUyxFQUFFRCxTQUFTLEdBQUdDLEdBQUcsRUFBRTtBQUFBLFFBQzVCLFlBQVksRUFBRWhCLE9BQU8sS0FBS3NCLE1BQU0sVUFBVUMsV0FBVyxJQUFJO0FBQUEsUUFDekQsV0FBVTtBQUFBLFFBRVI7QUFBQSxpQ0FBQyxVQUFLLHdCQUFxQixpREFBZ0Qsd0JBQXFCLFNBQVEsV0FBVSwwQkFBeUIsa0JBQTNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQTZJO0FBQUEsVUFDN0ksdUJBQUMsVUFBSyx3QkFBcUIsaURBQWdELHdCQUFxQixTQUFRLFdBQVUsc0NBQXFDLDBCQUF2SjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFpSztBQUFBO0FBQUE7QUFBQSxNQVBuSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFRQTtBQUFBLE9BN0hGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0E4SEE7QUFFSjtBQUFDaEIsR0EzSXVCRCxzQkFBb0I7QUFBQWtCLE1BQXBCbEI7QUFBb0IsSUFBQUgsSUFBQUUsS0FBQW1CO0FBQUFDLGFBQUF0QixJQUFBO0FBQUFzQixhQUFBcEIsS0FBQTtBQUFBb0IsYUFBQUQsS0FBQSIsIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJUcmVuZGluZ1VwIiwiU2hvcHBpbmdCYWciLCJVc2VycyIsIkluZGlhblJ1cGVlIiwicmV2ZW51ZURhdGEiLCJsYWJlbHMiLCJsaXZlT3JkZXJzIiwidGFibGUiLCJpdGVtIiwiYW1vdW50Iiwic3RhdHVzIiwiY29sb3IiLCJtaW5pU3RhdHMiLCJsYWJlbCIsInZhbHVlIiwiaWNvbiIsImNoYW5nZSIsIk1pbmlCYXJDaGFydCIsIm1heCIsIk1hdGgiLCJtYXAiLCJ2YWwiLCJpIiwiaGVpZ2h0IiwiZGVsYXkiLCJkdXJhdGlvbiIsImVhc2UiLCJfYyIsIlB1bHNpbmdEb3QiLCJfYzIiLCJMaXZlRGFzaGJvYXJkR3JhcGhpYyIsIl9zIiwiYWN0aXZlT3JkZXIiLCJzZXRBY3RpdmVPcmRlciIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJwcmV2IiwibGVuZ3RoIiwiY2xlYXJJbnRlcnZhbCIsIm9wYWNpdHkiLCJ5Iiwic3RhdCIsInNjYWxlIiwibSIsIm9yZGVyIiwieCIsInR5cGUiLCJzdGlmZm5lc3MiLCJfYzMiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiTGl2ZURhc2hib2FyZEdyYXBoaWMuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBUcmVuZGluZ1VwLCBTaG9wcGluZ0JhZywgVXNlcnMsIEluZGlhblJ1cGVlIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5jb25zdCByZXZlbnVlRGF0YSA9IFs0MCwgNjUsIDUwLCA4MCwgNzIsIDk1LCA4OCwgMTEwLCA5OCwgMTI1LCAxMTUsIDE0MF07XG5jb25zdCBsYWJlbHMgPSBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIl07XG5cbmNvbnN0IGxpdmVPcmRlcnMgPSBbXG57IHRhYmxlOiBcIlQtNVwiLCBpdGVtOiBcIkJ1dHRlciBDaGlja2VuXCIsIGFtb3VudDogXCLigrk4NTBcIiwgc3RhdHVzOiBcIlByZXBhcmluZ1wiLCBjb2xvcjogXCJiZy15ZWxsb3ctMTAwIHRleHQteWVsbG93LTcwMFwiIH0sXG57IHRhYmxlOiBcIlQtOFwiLCBpdGVtOiBcIlBhbmVlciBUaWtrYSArIE5hYW5cIiwgYW1vdW50OiBcIuKCuTUyMFwiLCBzdGF0dXM6IFwiUmVhZHlcIiwgY29sb3I6IFwiYmctZ3JlZW4tMTAwIHRleHQtZ3JlZW4tNzAwXCIgfSxcbnsgdGFibGU6IFwiVC0yXCIsIGl0ZW06IFwiQmlyeWFuaSArIFJhaXRhXCIsIGFtb3VudDogXCLigrkxLDIwMFwiLCBzdGF0dXM6IFwiU2VydmVkXCIsIGNvbG9yOiBcImJnLWJsdWUtMTAwIHRleHQtYmx1ZS03MDBcIiB9LFxueyB0YWJsZTogXCJULTExXCIsIGl0ZW06IFwiRGFsIE1ha2hhbmkgKyBSb3RpXCIsIGFtb3VudDogXCLigrkzNDBcIiwgc3RhdHVzOiBcIk5ld1wiLCBjb2xvcjogXCJiZy1vcmFuZ2UtMTAwIHRleHQtb3JhbmdlLTcwMFwiIH1dO1xuXG5cbmNvbnN0IG1pbmlTdGF0cyA9IFtcbnsgbGFiZWw6IFwiVG9kYXkncyBSZXZlbnVlXCIsIHZhbHVlOiBcIuKCuTE4LDQ1MFwiLCBpY29uOiBJbmRpYW5SdXBlZSwgY2hhbmdlOiBcIisxMiVcIiwgY29sb3I6IFwidGV4dC1ncmVlbi01MDBcIiB9LFxueyBsYWJlbDogXCJPcmRlcnMgVG9kYXlcIiwgdmFsdWU6IFwiODRcIiwgaWNvbjogU2hvcHBpbmdCYWcsIGNoYW5nZTogXCIrNVwiLCBjb2xvcjogXCJ0ZXh0LWJsdWUtNTAwXCIgfSxcbnsgbGFiZWw6IFwiQ3VzdG9tZXJzXCIsIHZhbHVlOiBcIjYyXCIsIGljb246IFVzZXJzLCBjaGFuZ2U6IFwiKzhcIiwgY29sb3I6IFwidGV4dC1wdXJwbGUtNTAwXCIgfV07XG5cblxuZnVuY3Rpb24gTWluaUJhckNoYXJ0KCkge1xuICBjb25zdCBtYXggPSBNYXRoLm1heCguLi5yZXZlbnVlRGF0YSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9MaXZlRGFzaGJvYXJkR3JhcGhpYzoyNDo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1lbmQgZ2FwLTEgaC0xNiB3LWZ1bGxcIj5cbiAgICAgIHtyZXZlbnVlRGF0YS5tYXAoKHZhbCwgaSkgPT5cbiAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0xpdmVEYXNoYm9hcmRHcmFwaGljOjI2OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAga2V5PXtpfVxuICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1vcmFuZ2UtNTAwIHRvLW9yYW5nZS0zMDAgcm91bmRlZC10LXNtXCJcbiAgICAgIGluaXRpYWw9e3sgaGVpZ2h0OiAwIH19XG4gICAgICBhbmltYXRlPXt7IGhlaWdodDogYCR7dmFsIC8gbWF4ICogMTAwfSVgIH19XG4gICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjMgKyBpICogMC4wNywgZHVyYXRpb246IDAuNiwgZWFzZTogXCJlYXNlT3V0XCIgfX0gZGF0YS1hcnItaW5kZXg9e2l9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJyZXZlbnVlRGF0YVwiIC8+XG5cbiAgICAgICl9XG4gICAgPC9kaXY+KTtcblxufVxuXG5mdW5jdGlvbiBQdWxzaW5nRG90KCkge1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0xpdmVEYXNoYm9hcmRHcmFwaGljOjQwOjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBoLTIuNSB3LTIuNVwiPlxuICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvTGl2ZURhc2hib2FyZEdyYXBoaWM6NDE6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJhbmltYXRlLXBpbmcgYWJzb2x1dGUgaW5saW5lLWZsZXggaC1mdWxsIHctZnVsbCByb3VuZGVkLWZ1bGwgYmctZ3JlZW4tNDAwIG9wYWNpdHktNzVcIiAvPlxuICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvTGl2ZURhc2hib2FyZEdyYXBoaWM6NDI6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtZmxleCByb3VuZGVkLWZ1bGwgaC0yLjUgdy0yLjUgYmctZ3JlZW4tNTAwXCIgLz5cbiAgICA8L3NwYW4+KTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXZlRGFzaGJvYXJkR3JhcGhpYygpIHtcbiAgY29uc3QgW2FjdGl2ZU9yZGVyLCBzZXRBY3RpdmVPcmRlcl0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0QWN0aXZlT3JkZXIoKHByZXYpID0+IChwcmV2ICsgMSkgJSBsaXZlT3JkZXJzLmxlbmd0aCk7XG4gICAgfSwgMjAwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0xpdmVEYXNoYm9hcmRHcmFwaGljOjU4OjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgbWF4LXcteGwgbXgtYXV0b1wiPlxuICAgICAgey8qIE1haW4gRGFzaGJvYXJkIENhcmQgKi99XG4gICAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9MaXZlRGFzaGJvYXJkR3JhcGhpYzo2MDo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMzAgfX1cbiAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC43LCBkZWxheTogMC4zIH19XG4gICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZS85NSBiYWNrZHJvcC1ibHVyLXhsIHJvdW5kZWQtM3hsIHNoYWRvdy0yeGwgc2hhZG93LWJsYWNrLzIwIHAtNSBib3JkZXIgYm9yZGVyLXdoaXRlLzYwXCI+XG5cbiAgICAgICAgey8qIFdpbmRvdyBjaHJvbWUgKi99XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvTGl2ZURhc2hib2FyZEdyYXBoaWM6Njc6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBtYi01XCI+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9MaXZlRGFzaGJvYXJkR3JhcGhpYzo2ODoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTMgaC0zIHJvdW5kZWQtZnVsbCBiZy1yZWQtNDAwXCIgLz5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0xpdmVEYXNoYm9hcmRHcmFwaGljOjY5OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMyBoLTMgcm91bmRlZC1mdWxsIGJnLXllbGxvdy00MDBcIiAvPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvTGl2ZURhc2hib2FyZEdyYXBoaWM6NzA6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0zIGgtMyByb3VuZGVkLWZ1bGwgYmctZ3JlZW4tNDAwXCIgLz5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0xpdmVEYXNoYm9hcmRHcmFwaGljOjcxOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cIm1sLTIgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNVwiPlxuICAgICAgICAgICAgPFB1bHNpbmdEb3QgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvTGl2ZURhc2hib2FyZEdyYXBoaWM6NzI6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0xpdmVEYXNoYm9hcmRHcmFwaGljOjczOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTQwMCBmb250LW1lZGl1bVwiPkxpdmUgRGFzaGJvYXJkPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogTWluaSBTdGF0cyBSb3cgKi99XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvTGl2ZURhc2hib2FyZEdyYXBoaWM6Nzg6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTIgbWItNFwiPlxuICAgICAgICAgIHttaW5pU3RhdHMubWFwKChzdGF0LCBpKSA9PlxuICAgICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0xpdmVEYXNoYm9hcmRHcmFwaGljOjgwOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICBrZXk9e3N0YXQubGFiZWx9XG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC44IH19XG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCBzY2FsZTogMSB9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAuNCArIGkgKiAwLjEgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIHJvdW5kZWQteGwgcC0yLjUgdGV4dC1jZW50ZXJcIiBkYXRhLWFyci1pbmRleD17aX0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cIm1pbmlTdGF0c1wiPlxuXG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvTGl2ZURhc2hib2FyZEdyYXBoaWM6ODc6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwXCIgZGF0YS1hcnItaW5kZXg9e2l9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJtaW5pU3RhdHNcIiBkYXRhLWFyci1maWVsZD1cInZhbHVlXCI+e3N0YXQudmFsdWV9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvTGl2ZURhc2hib2FyZEdyYXBoaWM6ODg6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgJHtzdGF0LmNvbG9yfWB9IGRhdGEtYXJyLWluZGV4PXtpfSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwibWluaVN0YXRzXCIgZGF0YS1hcnItZmllbGQ9XCJjaGFuZ2VcIj57c3RhdC5jaGFuZ2V9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvTGl2ZURhc2hib2FyZEdyYXBoaWM6ODk6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LWdyYXktNDAwIG10LTAuNSBsZWFkaW5nLXRpZ2h0XCIgZGF0YS1hcnItaW5kZXg9e2l9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJtaW5pU3RhdHNcIiBkYXRhLWFyci1maWVsZD1cImxhYmVsXCI+e3N0YXQubGFiZWx9PC9kaXY+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIFJldmVudWUgQ2hhcnQgKi99XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvTGl2ZURhc2hib2FyZEdyYXBoaWM6OTU6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgcm91bmRlZC0yeGwgcC0zIG1iLTRcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0xpdmVEYXNoYm9hcmRHcmFwaGljOjk2OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi0yXCI+XG4gICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9MaXZlRGFzaGJvYXJkR3JhcGhpYzo5NzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTYwMFwiPk1vbnRobHkgUmV2ZW51ZTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0xpdmVEYXNoYm9hcmRHcmFwaGljOjk4OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQteHMgdGV4dC1ncmVlbi02MDAgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgIDxUcmVuZGluZ1VwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0xpdmVEYXNoYm9hcmRHcmFwaGljOjk5OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMyBoLTNcIiAvPiArMzQlIFlvWVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxNaW5pQmFyQ2hhcnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvTGl2ZURhc2hib2FyZEdyYXBoaWM6MTAyOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9MaXZlRGFzaGJvYXJkR3JhcGhpYzoxMDM6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtdC0xXCI+XG4gICAgICAgICAgICB7W1wiSlwiLCBcIkZcIiwgXCJNXCIsIFwiQVwiLCBcIk1cIiwgXCJKXCIsIFwiSlwiLCBcIkFcIiwgXCJTXCIsIFwiT1wiLCBcIk5cIiwgXCJEXCJdLm1hcCgobSwgaSkgPT5cbiAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0xpdmVEYXNoYm9hcmRHcmFwaGljOjEwNToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17aX0gY2xhc3NOYW1lPVwidGV4dC1bOXB4XSB0ZXh0LWdyYXktNDAwXCIgZGF0YS1hcnItaW5kZXg9e2l9PnttfTwvc3Bhbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBMaXZlIE9yZGVycyAqL31cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9MaXZlRGFzaGJvYXJkR3JhcGhpYzoxMTE6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvTGl2ZURhc2hib2FyZEdyYXBoaWM6MTEyOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgbWItMlwiPlxuICAgICAgICAgICAgPFB1bHNpbmdEb3QgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvTGl2ZURhc2hib2FyZEdyYXBoaWM6MTEzOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+XG4gICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9MaXZlRGFzaGJvYXJkR3JhcGhpYzoxMTQ6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtZ3JheS02MDBcIj5MaXZlIE9yZGVyczwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0xpdmVEYXNoYm9hcmRHcmFwaGljOjExNjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9MaXZlRGFzaGJvYXJkR3JhcGhpYzoxMTc6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBtb2RlPVwicG9wTGF5b3V0XCI+XG4gICAgICAgICAgICAgIHtsaXZlT3JkZXJzLm1hcCgob3JkZXIsIGkpID0+XG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0xpdmVEYXNoYm9hcmRHcmFwaGljOjExOToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGtleT17b3JkZXIudGFibGUgKyBvcmRlci5pdGVtfVxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHg6IC0xMCB9fVxuICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IGkgPT09IGFjdGl2ZU9yZGVyID8gMSA6IDAuNiwgeDogMCB9fVxuICAgICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC40IH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiByb3VuZGVkLXhsIHB4LTMgcHktMiB0cmFuc2l0aW9uLWFsbCAke1xuICAgICAgICAgICAgICBpID09PSBhY3RpdmVPcmRlciA/IFwiYmctb3JhbmdlLTUwIGJvcmRlciBib3JkZXItb3JhbmdlLTIwMFwiIDogXCJiZy1ncmF5LTUwXCJ9YFxuICAgICAgICAgICAgICB9IGRhdGEtYXJyLWluZGV4PXtpfSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwibGl2ZU9yZGVyc1wiPlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0xpdmVEYXNoYm9hcmRHcmFwaGljOjEyOToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCIgZGF0YS1hcnItaW5kZXg9e2l9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJsaXZlT3JkZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0xpdmVEYXNoYm9hcmRHcmFwaGljOjEzMDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtb3JhbmdlLTYwMCB3LThcIiBkYXRhLWFyci1pbmRleD17aX0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cImxpdmVPcmRlcnNcIiBkYXRhLWFyci1maWVsZD1cInRhYmxlXCI+e29yZGVyLnRhYmxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvTGl2ZURhc2hib2FyZEdyYXBoaWM6MTMxOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNjAwIHRydW5jYXRlIG1heC13LVsxMTBweF1cIiBkYXRhLWFyci1pbmRleD17aX0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cImxpdmVPcmRlcnNcIiBkYXRhLWFyci1maWVsZD1cIml0ZW1cIj57b3JkZXIuaXRlbX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvTGl2ZURhc2hib2FyZEdyYXBoaWM6MTMzOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIiBkYXRhLWFyci1pbmRleD17aX0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cImxpdmVPcmRlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvTGl2ZURhc2hib2FyZEdyYXBoaWM6MTM0OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC1ncmF5LTkwMFwiIGRhdGEtYXJyLWluZGV4PXtpfSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwibGl2ZU9yZGVyc1wiIGRhdGEtYXJyLWZpZWxkPVwiYW1vdW50XCI+e29yZGVyLmFtb3VudH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0xpdmVEYXNoYm9hcmRHcmFwaGljOjEzNToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YHRleHQtWzEwcHhdIHB4LTEuNSBweS0wLjUgcm91bmRlZC1mdWxsIGZvbnQtbWVkaXVtICR7b3JkZXIuY29sb3J9YH0gZGF0YS1hcnItaW5kZXg9e2l9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJsaXZlT3JkZXJzXCIgZGF0YS1hcnItZmllbGQ9XCJzdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7b3JkZXIuc3RhdHVzfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgIHsvKiBGbG9hdGluZyBiYWRnZSAtIFFSICovfVxuICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvTGl2ZURhc2hib2FyZEdyYXBoaWM6MTQ3OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC43LCB4OiAtMjAgfX1cbiAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgc2NhbGU6IDEsIHg6IDAgfX1cbiAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAuOSwgdHlwZTogXCJzcHJpbmdcIiwgc3RpZmZuZXNzOiAyMDAgfX1cbiAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIC1sZWZ0LTEwIHRvcC0xLzQgYmctd2hpdGUgcm91bmRlZC0yeGwgc2hhZG93LXhsIHB4LTMgcHktMi41IGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGJvcmRlciBib3JkZXItZ3JheS0xMDBcIj5cblxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0xpdmVEYXNoYm9hcmRHcmFwaGljOjE1Mzo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctOCBoLTggYmctb3JhbmdlLTEwMCByb3VuZGVkLXhsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtb3JhbmdlLTYwMCB0ZXh0LWxnXCI+8J+TsjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0xpdmVEYXNoYm9hcmRHcmFwaGljOjE1NDo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvTGl2ZURhc2hib2FyZEdyYXBoaWM6MTU1OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtZ3JheS05MDBcIj5RUiBTY2FuPC9kaXY+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9MaXZlRGFzaGJvYXJkR3JhcGhpYzoxNTY6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1ncmVlbi02MDAgZm9udC1tZWRpdW1cIj4rMyBvcmRlcnMvbWluPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICB7LyogRmxvYXRpbmcgYmFkZ2UgLSBTYXZpbmdzICovfVxuICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvTGl2ZURhc2hib2FyZEdyYXBoaWM6MTYxOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC43LCB4OiAyMCB9fVxuICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCBzY2FsZTogMSwgeDogMCB9fVxuICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMS4xLCB0eXBlOiBcInNwcmluZ1wiLCBzdGlmZm5lc3M6IDIwMCB9fVxuICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXJpZ2h0LTggYm90dG9tLTEvNCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBzaGFkb3cteGwgcHgtMyBweS0yLjUgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgYm9yZGVyIGJvcmRlci1ncmF5LTEwMFwiPlxuXG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvTGl2ZURhc2hib2FyZEdyYXBoaWM6MTY3OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy04IGgtOCBiZy1ncmVlbi0xMDAgcm91bmRlZC14bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWxnXCI+8J+SsDwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0xpdmVEYXNoYm9hcmRHcmFwaGljOjE2ODo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvTGl2ZURhc2hib2FyZEdyYXBoaWM6MTY5OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtZ3JheS05MDBcIj5TYXZlZCBUb2RheTwvZGl2PlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvTGl2ZURhc2hib2FyZEdyYXBoaWM6MTcwOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtZ3JlZW4tNjAwIGZvbnQtYm9sZFwiPuKCuTIsMzQwPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICB7LyogRmxvYXRpbmcgYmFkZ2UgLSAwJSBDb21taXNzaW9uICovfVxuICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvTGl2ZURhc2hib2FyZEdyYXBoaWM6MTc1OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAtMjAgfX1cbiAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMS4zLCB0eXBlOiBcInNwcmluZ1wiLCBzdGlmZm5lc3M6IDIwMCB9fVxuICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC00IHJpZ2h0LTggYmctZ3JhZGllbnQtdG8tciBmcm9tLW9yYW5nZS01MDAgdG8tcm9zZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLTJ4bCBzaGFkb3cteGwgcHgtMyBweS0yIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG5cbiAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvTGl2ZURhc2hib2FyZEdyYXBoaWM6MTgxOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWV4dHJhYm9sZFwiPjAlPC9zcGFuPlxuICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9MaXZlRGFzaGJvYXJkR3JhcGhpYzoxODI6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBmb250LW1lZGl1bSBvcGFjaXR5LTkwXCI+Q29tbWlzc2lvbjwvc3Bhbj5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8L2Rpdj4pO1xuXG59Il0sImZpbGUiOiIvYXBwL3NyYy9jb21wb25lbnRzL2xhbmRpbmcvTGl2ZURhc2hib2FyZEdyYXBoaWMuanN4In0=