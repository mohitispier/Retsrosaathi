import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/landing/AnimatedStatsSection.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/landing/AnimatedStatsSection.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useEffect = __vite__cjsImport3_react["useEffect"]; const useRef = __vite__cjsImport3_react["useRef"]; const useState = __vite__cjsImport3_react["useState"];
import { motion, useInView } from "/node_modules/.vite/deps/framer-motion.js?v=79425e35";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "/node_modules/.vite/deps/recharts.js?v=79425e35";
const revenueData = [
  { month: "Jan", direct: 42e3, aggregator: 28e3 },
  { month: "Feb", direct: 58e3, aggregator: 35e3 },
  { month: "Mar", direct: 75e3, aggregator: 4e4 },
  { month: "Apr", direct: 9e4, aggregator: 42e3 },
  { month: "May", direct: 11e4, aggregator: 44e3 },
  { month: "Jun", direct: 14e4, aggregator: 45e3 }
];
const pieData = [
  { name: "You Keep", value: 100, color: "#f97316" },
  { name: "Aggregator Cuts", value: 25, color: "#e5e7eb" }
];
function useCountUp(target, duration = 1500, start = false) {
  _s();
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}
_s(useCountUp, "/xL7qdScToREtqzbt5GZ1kHtYjQ=");
const kpis = [
  { label: "Avg Monthly Savings", value: 15e3, prefix: "₹", suffix: "+", color: "from-green-500 to-emerald-400" },
  { label: "Commission Saved", value: 0, prefix: "", suffix: "%", color: "from-orange-500 to-rose-400" },
  { label: "Setup Time", value: 10, prefix: "", suffix: " mins", color: "from-blue-500 to-indigo-400" },
  { label: "Restaurants Trust Us", value: 50, prefix: "", suffix: "+", color: "from-purple-500 to-pink-400" }
];
function KpiCard({ kpi, index, start, "data-collection-item-id": __dataCollectionItemId }) {
  _s2();
  const count = useCountUp(kpi.value, 1600, start);
  return /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      "data-source-location": "components/landing/AnimatedStatsSection:45:4",
      "data-dynamic-content": "true",
      initial: { opacity: 0, y: 30 },
      animate: start ? { opacity: 1, y: 0 } : {},
      transition: { delay: index * 0.1, duration: 0.5 },
      className: "relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-shadow",
      "data-collection-item-id": __dataCollectionItemId,
      children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/AnimatedStatsSection:51:6", "data-dynamic-content": "true", className: `absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${kpi.color}` }, void 0, false, {
          fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
          lineNumber: 70,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/AnimatedStatsSection:52:6", "data-dynamic-content": "true", className: `text-3xl font-extrabold bg-gradient-to-r ${kpi.color} bg-clip-text text-transparent mb-1`, "data-collection-item-field": "prefix", "data-collection-item-id": kpi?.id || kpi?._id, children: [
          kpi.prefix,
          count,
          kpi.suffix
        ] }, void 0, true, {
          fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
          lineNumber: 71,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/AnimatedStatsSection:55:6", "data-dynamic-content": "true", className: "text-gray-500 text-sm font-medium", "data-collection-item-field": "label", "data-collection-item-id": kpi?.id || kpi?._id, children: kpi.label }, void 0, false, {
          fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
          lineNumber: 74,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
      lineNumber: 64,
      columnNumber: 5
    },
    this
  );
}
_s2(KpiCard, "Aew1CSxoe3aC1Zreul8rQJ1thuU=", false, function() {
  return [useCountUp];
});
_c = KpiCard;
const CustomTooltip = ({ active, payload, label, "data-collection-item-id": __dataCollectionItemId }) => {
  if (active && payload && payload.length) {
    return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/AnimatedStatsSection:63:6", "data-dynamic-content": "true", className: "bg-white rounded-xl shadow-xl border border-gray-100 p-3 text-xs", "data-collection-item-id": __dataCollectionItemId, children: [
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/AnimatedStatsSection:64:8", "data-dynamic-content": "true", className: "font-bold text-gray-700 mb-1", "data-collection-item-field": "label", "data-collection-item-id": __dataCollectionItemId, children: label }, void 0, false, {
        fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/AnimatedStatsSection:65:8", "data-dynamic-content": "true", className: "text-orange-600 font-semibold", children: [
        "Direct: ₹",
        payload[0]?.value?.toLocaleString()
      ] }, void 0, true, {
        fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/AnimatedStatsSection:66:8", "data-dynamic-content": "true", className: "text-gray-400", children: [
        "Aggregator: ₹",
        payload[1]?.value?.toLocaleString()
      ] }, void 0, true, {
        fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
        lineNumber: 85,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
      lineNumber: 82,
      columnNumber: 7
    }, this);
  }
  return null;
};
_c2 = CustomTooltip;
export default function AnimatedStatsSection() {
  _s3();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxDEV("section", { "data-source-location": "components/landing/AnimatedStatsSection:78:4", "data-dynamic-content": "true", ref, className: "py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/AnimatedStatsSection:79:6", "data-dynamic-content": "true", className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-source-location": "components/landing/AnimatedStatsSection:82:8",
        "data-dynamic-content": "true",
        initial: { opacity: 0, y: 20 },
        animate: inView ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.6 },
        className: "text-center mb-12 md:mb-16",
        children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/AnimatedStatsSection:88:10", "data-dynamic-content": "false", className: "inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4", children: "Real Numbers. Real Savings." }, void 0, false, {
            fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
            lineNumber: 107,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "components/landing/AnimatedStatsSection:91:10", "data-dynamic-content": "false", className: "text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight", children: [
            "See What You're",
            " ",
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/AnimatedStatsSection:93:12", "data-dynamic-content": "false", className: "bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent", children: "Losing to Aggregators" }, void 0, false, {
              fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
              lineNumber: 112,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
            lineNumber: 110,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/AnimatedStatsSection:97:10", "data-dynamic-content": "false", className: "text-lg text-gray-500 max-w-2xl mx-auto", children: "Switch to RestroSaathi and keep every rupee you earn." }, void 0, false, {
            fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
            lineNumber: 116,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
        lineNumber: 101,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/AnimatedStatsSection:103:8", "data-dynamic-content": "true", className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12", children: kpis.map(
      (kpi, i) => /* @__PURE__ */ jsxDEV(KpiCard, { "data-source-location": "components/landing/AnimatedStatsSection:105:12", "data-dynamic-content": "true", kpi, index: i, start: inView, "data-arr-index": i, "data-arr-variable-name": "kpis" }, kpi.label, false, {
        fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
        lineNumber: 124,
        columnNumber: 11
      }, this)
    ) }, void 0, false, {
      fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
      lineNumber: 122,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/AnimatedStatsSection:110:8", "data-dynamic-content": "true", className: "grid md:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-source-location": "components/landing/AnimatedStatsSection:112:10",
          "data-dynamic-content": "true",
          initial: { opacity: 0, x: -30 },
          animate: inView ? { opacity: 1, x: 0 } : {},
          transition: { duration: 0.7, delay: 0.3 },
          className: "md:col-span-2 bg-white rounded-2xl p-6 shadow-lg border border-gray-100",
          children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/AnimatedStatsSection:118:12", "data-dynamic-content": "false", className: "flex items-center justify-between mb-5", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/AnimatedStatsSection:119:14", "data-dynamic-content": "false", children: [
                /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "components/landing/AnimatedStatsSection:120:16", "data-dynamic-content": "false", className: "font-bold text-gray-900 text-lg", children: "Revenue Comparison" }, void 0, false, {
                  fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                  lineNumber: 139,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/AnimatedStatsSection:121:16", "data-dynamic-content": "false", className: "text-sm text-gray-400", children: "Direct vs Aggregator Model" }, void 0, false, {
                  fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                  lineNumber: 140,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                lineNumber: 138,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/AnimatedStatsSection:123:14", "data-dynamic-content": "false", className: "flex items-center gap-4 text-xs", children: [
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/AnimatedStatsSection:124:16", "data-dynamic-content": "false", className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/AnimatedStatsSection:124:60", "data-dynamic-content": "false", className: "w-3 h-3 rounded-full bg-orange-500 inline-block" }, void 0, false, {
                    fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                    lineNumber: 143,
                    columnNumber: 160
                  }, this),
                  "Direct"
                ] }, void 0, true, {
                  fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                  lineNumber: 143,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/AnimatedStatsSection:125:16", "data-dynamic-content": "false", className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/AnimatedStatsSection:125:60", "data-dynamic-content": "false", className: "w-3 h-3 rounded-full bg-gray-300 inline-block" }, void 0, false, {
                    fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                    lineNumber: 144,
                    columnNumber: 160
                  }, this),
                  "Aggregator"
                ] }, void 0, true, {
                  fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                  lineNumber: 144,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                lineNumber: 142,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
              lineNumber: 137,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(ResponsiveContainer, { "data-source-location": "components/landing/AnimatedStatsSection:128:12", "data-dynamic-content": "true", width: "100%", height: 200, children: /* @__PURE__ */ jsxDEV(AreaChart, { "data-source-location": "components/landing/AnimatedStatsSection:129:14", "data-dynamic-content": "true", data: revenueData, margin: { top: 5, right: 5, left: -20, bottom: 0 }, children: [
              /* @__PURE__ */ jsxDEV("defs", { "data-source-location": "components/landing/AnimatedStatsSection:130:16", "data-dynamic-content": "false", children: [
                /* @__PURE__ */ jsxDEV("linearGradient", { "data-source-location": "components/landing/AnimatedStatsSection:131:18", "data-dynamic-content": "false", id: "directGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                  /* @__PURE__ */ jsxDEV("stop", { "data-source-location": "components/landing/AnimatedStatsSection:132:20", "data-dynamic-content": "false", offset: "5%", stopColor: "#f97316", stopOpacity: 0.3 }, void 0, false, {
                    fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                    lineNumber: 151,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("stop", { "data-source-location": "components/landing/AnimatedStatsSection:133:20", "data-dynamic-content": "false", offset: "95%", stopColor: "#f97316", stopOpacity: 0 }, void 0, false, {
                    fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                    lineNumber: 152,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                  lineNumber: 150,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("linearGradient", { "data-source-location": "components/landing/AnimatedStatsSection:135:18", "data-dynamic-content": "false", id: "aggGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                  /* @__PURE__ */ jsxDEV("stop", { "data-source-location": "components/landing/AnimatedStatsSection:136:20", "data-dynamic-content": "false", offset: "5%", stopColor: "#9ca3af", stopOpacity: 0.2 }, void 0, false, {
                    fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                    lineNumber: 155,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("stop", { "data-source-location": "components/landing/AnimatedStatsSection:137:20", "data-dynamic-content": "false", offset: "95%", stopColor: "#9ca3af", stopOpacity: 0 }, void 0, false, {
                    fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                    lineNumber: 156,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                  lineNumber: 154,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                lineNumber: 149,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(XAxis, { "data-source-location": "components/landing/AnimatedStatsSection:140:16", "data-dynamic-content": "true", dataKey: "month", tick: { fontSize: 11, fill: "#9ca3af" }, axisLine: false, tickLine: false }, void 0, false, {
                fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                lineNumber: 159,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(YAxis, { "data-source-location": "components/landing/AnimatedStatsSection:141:16", "data-dynamic-content": "true", tick: { fontSize: 10, fill: "#9ca3af" }, axisLine: false, tickLine: false, tickFormatter: (v) => `₹${v / 1e3}k` }, void 0, false, {
                fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                lineNumber: 160,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(Tooltip, { "data-source-location": "components/landing/AnimatedStatsSection:142:16", "data-dynamic-content": "true", content: /* @__PURE__ */ jsxDEV(CustomTooltip, { "data-source-location": "components/landing/AnimatedStatsSection:142:34", "data-dynamic-content": "false" }, void 0, false, {
                fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                lineNumber: 161,
                columnNumber: 133
              }, this) }, void 0, false, {
                fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                lineNumber: 161,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(Area, { "data-source-location": "components/landing/AnimatedStatsSection:143:16", "data-dynamic-content": "false", type: "monotone", dataKey: "direct", stroke: "#f97316", strokeWidth: 2.5, fill: "url(#directGrad)", dot: false }, void 0, false, {
                fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                lineNumber: 162,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(Area, { "data-source-location": "components/landing/AnimatedStatsSection:144:16", "data-dynamic-content": "false", type: "monotone", dataKey: "aggregator", stroke: "#9ca3af", strokeWidth: 2, fill: "url(#aggGrad)", dot: false, strokeDasharray: "5 3" }, void 0, false, {
                fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                lineNumber: 163,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
              lineNumber: 148,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
              lineNumber: 147,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
          lineNumber: 131,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-source-location": "components/landing/AnimatedStatsSection:150:10",
          "data-dynamic-content": "true",
          initial: { opacity: 0, x: 30 },
          animate: inView ? { opacity: 1, x: 0 } : {},
          transition: { duration: 0.7, delay: 0.4 },
          className: "bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex flex-col items-center justify-center",
          children: [
            /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "components/landing/AnimatedStatsSection:156:12", "data-dynamic-content": "false", className: "font-bold text-gray-900 text-lg mb-1 text-center", children: "With RestroSaathi" }, void 0, false, {
              fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
              lineNumber: 175,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/AnimatedStatsSection:157:12", "data-dynamic-content": "false", className: "text-sm text-gray-400 mb-4 text-center", children: "You keep 100% of revenue" }, void 0, false, {
              fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
              lineNumber: 176,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/AnimatedStatsSection:159:12", "data-dynamic-content": "true", className: "relative", children: [
              /* @__PURE__ */ jsxDEV(PieChart, { "data-source-location": "components/landing/AnimatedStatsSection:160:14", "data-dynamic-content": "true", width: 160, height: 160, children: /* @__PURE__ */ jsxDEV(
                Pie,
                {
                  "data-source-location": "components/landing/AnimatedStatsSection:161:16",
                  "data-dynamic-content": "true",
                  data: pieData,
                  cx: 80,
                  cy: 80,
                  innerRadius: 50,
                  outerRadius: 75,
                  startAngle: 90,
                  endAngle: -270,
                  dataKey: "value",
                  animationBegin: inView ? 300 : 9999,
                  animationDuration: 1200,
                  children: pieData.map(
                    (entry, index) => /* @__PURE__ */ jsxDEV(Cell, { "data-source-location": "components/landing/AnimatedStatsSection:174:20", "data-dynamic-content": "true", fill: entry.color, "data-arr-index": index, "data-arr-variable-name": "pieData" }, index, false, {
                      fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                      lineNumber: 193,
                      columnNumber: 19
                    }, this)
                  )
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                  lineNumber: 180,
                  columnNumber: 17
                },
                this
              ) }, void 0, false, {
                fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                lineNumber: 179,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/AnimatedStatsSection:178:14", "data-dynamic-content": "false", className: "absolute inset-0 flex flex-col items-center justify-center", children: [
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/AnimatedStatsSection:179:16", "data-dynamic-content": "false", className: "text-2xl font-extrabold text-orange-600", children: "100%" }, void 0, false, {
                  fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                  lineNumber: 198,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/AnimatedStatsSection:180:16", "data-dynamic-content": "false", className: "text-[10px] text-gray-400 font-medium", children: "Yours" }, void 0, false, {
                  fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                  lineNumber: 199,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                lineNumber: 197,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
              lineNumber: 178,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/AnimatedStatsSection:184:12", "data-dynamic-content": "false", className: "mt-4 w-full space-y-2", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/AnimatedStatsSection:185:14", "data-dynamic-content": "false", className: "flex items-center justify-between text-sm", children: [
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/AnimatedStatsSection:186:16", "data-dynamic-content": "false", className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/AnimatedStatsSection:186:58", "data-dynamic-content": "false", className: "w-3 h-3 rounded-full bg-orange-500 inline-block" }, void 0, false, {
                    fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                    lineNumber: 205,
                    columnNumber: 158
                  }, this),
                  "You Keep"
                ] }, void 0, true, {
                  fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                  lineNumber: 205,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/AnimatedStatsSection:187:16", "data-dynamic-content": "false", className: "font-bold text-orange-600", children: "100%" }, void 0, false, {
                  fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                  lineNumber: 206,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                lineNumber: 204,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/AnimatedStatsSection:189:14", "data-dynamic-content": "false", className: "flex items-center justify-between text-sm", children: [
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/AnimatedStatsSection:190:16", "data-dynamic-content": "false", className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/AnimatedStatsSection:190:58", "data-dynamic-content": "false", className: "w-3 h-3 rounded-full bg-gray-200 inline-block" }, void 0, false, {
                    fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                    lineNumber: 209,
                    columnNumber: 158
                  }, this),
                  "Aggregator Cuts"
                ] }, void 0, true, {
                  fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                  lineNumber: 209,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/AnimatedStatsSection:191:16", "data-dynamic-content": "false", className: "font-bold text-gray-400 line-through", children: "25%" }, void 0, false, {
                  fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                  lineNumber: 210,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
                lineNumber: 208,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
              lineNumber: 203,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
          lineNumber: 169,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
      lineNumber: 129,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
    lineNumber: 98,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/src/components/landing/AnimatedStatsSection.jsx",
    lineNumber: 97,
    columnNumber: 5
  }, this);
}
_s3(AnimatedStatsSection, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
  return [useInView];
});
_c3 = AnimatedStatsSection;
var _c, _c2, _c3;
$RefreshReg$(_c, "KpiCard");
$RefreshReg$(_c2, "CustomTooltip");
$RefreshReg$(_c3, "AnimatedStatsSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/landing/AnimatedStatsSection.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/landing/AnimatedStatsSection.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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LGtEQUFpRCx3QkFBcUIsU0FBUSxXQUFVLDZDQUNoSDtBQUFBLHVDQUFDLFVBQUssd0JBQXFCLGtEQUFpRCx3QkFBcUIsU0FBUSxXQUFVLDJCQUEwQjtBQUFBLHlDQUFDLFVBQUssd0JBQXFCLGtEQUFpRCx3QkFBcUIsU0FBUSxXQUFVLG1EQUFuSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFrSztBQUFBLGtCQUFHO0FBQUEscUJBQWxUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQWlVO0FBQUEsZ0JBQ2pVLHVCQUFDLFVBQUssd0JBQXFCLGtEQUFpRCx3QkFBcUIsU0FBUSxXQUFVLHdDQUF1QyxtQkFBMUo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBNko7QUFBQSxtQkFGL0o7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFHQTtBQUFBLGlCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBU0E7QUFBQTtBQUFBO0FBQUEsUUEzQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BNENBO0FBQUEsU0FwRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQXFGQTtBQUFBLE9BcEhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FzSEEsS0F2SEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQXdIQTtBQUVKO0FBQUNnQixJQS9IdUJELHNCQUFvQjtBQUFBLFVBRTNCdEQsU0FBUztBQUFBO0FBQUF1RSxNQUZGakI7QUFBb0IsSUFBQVAsSUFBQU0sS0FBQWtCO0FBQUFDLGFBQUF6QixJQUFBO0FBQUF5QixhQUFBbkIsS0FBQTtBQUFBbUIsYUFBQUQsS0FBQSIsIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJtb3Rpb24iLCJ1c2VJblZpZXciLCJBcmVhQ2hhcnQiLCJBcmVhIiwiWEF4aXMiLCJZQXhpcyIsIlRvb2x0aXAiLCJSZXNwb25zaXZlQ29udGFpbmVyIiwiUGllQ2hhcnQiLCJQaWUiLCJDZWxsIiwicmV2ZW51ZURhdGEiLCJtb250aCIsImRpcmVjdCIsImFnZ3JlZ2F0b3IiLCJwaWVEYXRhIiwibmFtZSIsInZhbHVlIiwiY29sb3IiLCJ1c2VDb3VudFVwIiwidGFyZ2V0IiwiZHVyYXRpb24iLCJzdGFydCIsIl9zIiwiY291bnQiLCJzZXRDb3VudCIsInN0YXJ0VGltZSIsInN0ZXAiLCJ0aW1lc3RhbXAiLCJwcm9ncmVzcyIsIk1hdGgiLCJtaW4iLCJmbG9vciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImtwaXMiLCJsYWJlbCIsInByZWZpeCIsInN1ZmZpeCIsIktwaUNhcmQiLCJrcGkiLCJpbmRleCIsIl9fZGF0YUNvbGxlY3Rpb25JdGVtSWQiLCJfczIiLCJvcGFjaXR5IiwieSIsImRlbGF5IiwiaWQiLCJfaWQiLCJfYyIsIkN1c3RvbVRvb2x0aXAiLCJhY3RpdmUiLCJwYXlsb2FkIiwibGVuZ3RoIiwidG9Mb2NhbGVTdHJpbmciLCJfYzIiLCJBbmltYXRlZFN0YXRzU2VjdGlvbiIsIl9zMyIsInJlZiIsImluVmlldyIsIm9uY2UiLCJtYXJnaW4iLCJtYXAiLCJpIiwieCIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsImZvbnRTaXplIiwiZmlsbCIsInYiLCJlbnRyeSIsIl9jMyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJBbmltYXRlZFN0YXRzU2VjdGlvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uLCB1c2VJblZpZXcgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgQXJlYUNoYXJ0LCBBcmVhLCBYQXhpcywgWUF4aXMsIFRvb2x0aXAsIFJlc3BvbnNpdmVDb250YWluZXIsIFBpZUNoYXJ0LCBQaWUsIENlbGwgfSBmcm9tIFwicmVjaGFydHNcIjtcblxuY29uc3QgcmV2ZW51ZURhdGEgPSBbXG57IG1vbnRoOiBcIkphblwiLCBkaXJlY3Q6IDQyMDAwLCBhZ2dyZWdhdG9yOiAyODAwMCB9LFxueyBtb250aDogXCJGZWJcIiwgZGlyZWN0OiA1ODAwMCwgYWdncmVnYXRvcjogMzUwMDAgfSxcbnsgbW9udGg6IFwiTWFyXCIsIGRpcmVjdDogNzUwMDAsIGFnZ3JlZ2F0b3I6IDQwMDAwIH0sXG57IG1vbnRoOiBcIkFwclwiLCBkaXJlY3Q6IDkwMDAwLCBhZ2dyZWdhdG9yOiA0MjAwMCB9LFxueyBtb250aDogXCJNYXlcIiwgZGlyZWN0OiAxMTAwMDAsIGFnZ3JlZ2F0b3I6IDQ0MDAwIH0sXG57IG1vbnRoOiBcIkp1blwiLCBkaXJlY3Q6IDE0MDAwMCwgYWdncmVnYXRvcjogNDUwMDAgfV07XG5cblxuY29uc3QgcGllRGF0YSA9IFtcbnsgbmFtZTogXCJZb3UgS2VlcFwiLCB2YWx1ZTogMTAwLCBjb2xvcjogXCIjZjk3MzE2XCIgfSxcbnsgbmFtZTogXCJBZ2dyZWdhdG9yIEN1dHNcIiwgdmFsdWU6IDI1LCBjb2xvcjogXCIjZTVlN2ViXCIgfV07XG5cblxuZnVuY3Rpb24gdXNlQ291bnRVcCh0YXJnZXQsIGR1cmF0aW9uID0gMTUwMCwgc3RhcnQgPSBmYWxzZSkge1xuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc3RhcnQpIHJldHVybjtcbiAgICBsZXQgc3RhcnRUaW1lO1xuICAgIGNvbnN0IHN0ZXAgPSAodGltZXN0YW1wKSA9PiB7XG4gICAgICBpZiAoIXN0YXJ0VGltZSkgc3RhcnRUaW1lID0gdGltZXN0YW1wO1xuICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBNYXRoLm1pbigodGltZXN0YW1wIC0gc3RhcnRUaW1lKSAvIGR1cmF0aW9uLCAxKTtcbiAgICAgIHNldENvdW50KE1hdGguZmxvb3IocHJvZ3Jlc3MgKiB0YXJnZXQpKTtcbiAgICAgIGlmIChwcm9ncmVzcyA8IDEpIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICB9O1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgfSwgW3RhcmdldCwgZHVyYXRpb24sIHN0YXJ0XSk7XG4gIHJldHVybiBjb3VudDtcbn1cblxuY29uc3Qga3BpcyA9IFtcbnsgbGFiZWw6IFwiQXZnIE1vbnRobHkgU2F2aW5nc1wiLCB2YWx1ZTogMTUwMDAsIHByZWZpeDogXCLigrlcIiwgc3VmZml4OiBcIitcIiwgY29sb3I6IFwiZnJvbS1ncmVlbi01MDAgdG8tZW1lcmFsZC00MDBcIiB9LFxueyBsYWJlbDogXCJDb21taXNzaW9uIFNhdmVkXCIsIHZhbHVlOiAwLCBwcmVmaXg6IFwiXCIsIHN1ZmZpeDogXCIlXCIsIGNvbG9yOiBcImZyb20tb3JhbmdlLTUwMCB0by1yb3NlLTQwMFwiIH0sXG57IGxhYmVsOiBcIlNldHVwIFRpbWVcIiwgdmFsdWU6IDEwLCBwcmVmaXg6IFwiXCIsIHN1ZmZpeDogXCIgbWluc1wiLCBjb2xvcjogXCJmcm9tLWJsdWUtNTAwIHRvLWluZGlnby00MDBcIiB9LFxueyBsYWJlbDogXCJSZXN0YXVyYW50cyBUcnVzdCBVc1wiLCB2YWx1ZTogNTAsIHByZWZpeDogXCJcIiwgc3VmZml4OiBcIitcIiwgY29sb3I6IFwiZnJvbS1wdXJwbGUtNTAwIHRvLXBpbmstNDAwXCIgfV07XG5cblxuZnVuY3Rpb24gS3BpQ2FyZCh7IGtwaSwgaW5kZXgsIHN0YXJ0LCBcImRhdGEtY29sbGVjdGlvbi1pdGVtLWlkXCI6IF9fZGF0YUNvbGxlY3Rpb25JdGVtSWQgfSkge1xuICBjb25zdCBjb3VudCA9IHVzZUNvdW50VXAoa3BpLnZhbHVlLCAxNjAwLCBzdGFydCk7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQW5pbWF0ZWRTdGF0c1NlY3Rpb246NDU6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAzMCB9fVxuICAgIGFuaW1hdGU9e3N0YXJ0ID8geyBvcGFjaXR5OiAxLCB5OiAwIH0gOiB7fX1cbiAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiBpbmRleCAqIDAuMSwgZHVyYXRpb246IDAuNSB9fVxuICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHAtNiBzaGFkb3ctbGcgYm9yZGVyIGJvcmRlci1ncmF5LTEwMCBvdmVyZmxvdy1oaWRkZW4gZ3JvdXAgaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24tc2hhZG93XCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e19fZGF0YUNvbGxlY3Rpb25JdGVtSWR9PlxuXG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0FuaW1hdGVkU3RhdHNTZWN0aW9uOjUxOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2BhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtMSBiZy1ncmFkaWVudC10by1yICR7a3BpLmNvbG9yfWB9IC8+XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0FuaW1hdGVkU3RhdHNTZWN0aW9uOjUyOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCBiZy1ncmFkaWVudC10by1yICR7a3BpLmNvbG9yfSBiZy1jbGlwLXRleHQgdGV4dC10cmFuc3BhcmVudCBtYi0xYH0gZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJwcmVmaXhcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17a3BpPy5pZCB8fCBrcGk/Ll9pZH0+XG4gICAgICAgIHtrcGkucHJlZml4fXtjb3VudH17a3BpLnN1ZmZpeH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9BbmltYXRlZFN0YXRzU2VjdGlvbjo1NTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJsYWJlbFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtrcGk/LmlkIHx8IGtwaT8uX2lkfT57a3BpLmxhYmVsfTwvZGl2PlxuICAgIDwvbW90aW9uLmRpdj4pO1xuXG59XG5cbmNvbnN0IEN1c3RvbVRvb2x0aXAgPSAoeyBhY3RpdmUsIHBheWxvYWQsIGxhYmVsLCBcImRhdGEtY29sbGVjdGlvbi1pdGVtLWlkXCI6IF9fZGF0YUNvbGxlY3Rpb25JdGVtSWQgfSkgPT4ge1xuICBpZiAoYWN0aXZlICYmIHBheWxvYWQgJiYgcGF5bG9hZC5sZW5ndGgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9BbmltYXRlZFN0YXRzU2VjdGlvbjo2Mzo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bCBzaGFkb3cteGwgYm9yZGVyIGJvcmRlci1ncmF5LTEwMCBwLTMgdGV4dC14c1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtfX2RhdGFDb2xsZWN0aW9uSXRlbUlkfT5cbiAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQW5pbWF0ZWRTdGF0c1NlY3Rpb246NjQ6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIG1iLTFcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImxhYmVsXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e19fZGF0YUNvbGxlY3Rpb25JdGVtSWR9PntsYWJlbH08L3A+XG4gICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0FuaW1hdGVkU3RhdHNTZWN0aW9uOjY1OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZS02MDAgZm9udC1zZW1pYm9sZFwiPkRpcmVjdDog4oK5e3BheWxvYWRbMF0/LnZhbHVlPy50b0xvY2FsZVN0cmluZygpfTwvcD5cbiAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQW5pbWF0ZWRTdGF0c1NlY3Rpb246NjY6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDBcIj5BZ2dyZWdhdG9yOiDigrl7cGF5bG9hZFsxXT8udmFsdWU/LnRvTG9jYWxlU3RyaW5nKCl9PC9wPlxuICAgICAgPC9kaXY+KTtcblxuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5pbWF0ZWRTdGF0c1NlY3Rpb24oKSB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgaW5WaWV3ID0gdXNlSW5WaWV3KHJlZiwgeyBvbmNlOiB0cnVlLCBtYXJnaW46IFwiLTEwMHB4XCIgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9BbmltYXRlZFN0YXRzU2VjdGlvbjo3ODo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgcmVmPXtyZWZ9IGNsYXNzTmFtZT1cInB5LTE2IG1kOnB5LTI0IGJnLWdyYWRpZW50LXRvLWIgZnJvbS1ncmF5LTUwIHRvLXdoaXRlIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9BbmltYXRlZFN0YXRzU2VjdGlvbjo3OTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgXG4gICAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0FuaW1hdGVkU3RhdHNTZWN0aW9uOjgyOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XG4gICAgICAgIGFuaW1hdGU9e2luVmlldyA/IHsgb3BhY2l0eTogMSwgeTogMCB9IDoge319XG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNiB9fVxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0xMiBtZDptYi0xNlwiPlxuXG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9BbmltYXRlZFN0YXRzU2VjdGlvbjo4ODoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHgtNCBweS0yIGJnLW9yYW5nZS0xMDAgdGV4dC1vcmFuZ2UtNjAwIHJvdW5kZWQtZnVsbCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgbWItNFwiPlxuICAgICAgICAgICAgUmVhbCBOdW1iZXJzLiBSZWFsIFNhdmluZ3MuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0FuaW1hdGVkU3RhdHNTZWN0aW9uOjkxOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtM3hsIHNtOnRleHQtNHhsIG1kOnRleHQtNXhsIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDAgbWItNCBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICBTZWUgV2hhdCBZb3UncmV7XCIgXCJ9XG4gICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9BbmltYXRlZFN0YXRzU2VjdGlvbjo5MzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tb3JhbmdlLTYwMCB0by1yb3NlLTYwMCBiZy1jbGlwLXRleHQgdGV4dC10cmFuc3BhcmVudFwiPlxuICAgICAgICAgICAgICBMb3NpbmcgdG8gQWdncmVnYXRvcnNcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0FuaW1hdGVkU3RhdHNTZWN0aW9uOjk3OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1ncmF5LTUwMCBtYXgtdy0yeGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgU3dpdGNoIHRvIFJlc3Ryb1NhYXRoaSBhbmQga2VlcCBldmVyeSBydXBlZSB5b3UgZWFybi5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICB7LyogS1BJIEdyaWQgKi99XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQW5pbWF0ZWRTdGF0c1NlY3Rpb246MTAzOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC00IG1iLTEyXCI+XG4gICAgICAgICAge2twaXMubWFwKChrcGksIGkpID0+XG4gICAgICAgICAgPEtwaUNhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQW5pbWF0ZWRTdGF0c1NlY3Rpb246MTA1OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtrcGkubGFiZWx9IGtwaT17a3BpfSBpbmRleD17aX0gc3RhcnQ9e2luVmlld30gZGF0YS1hcnItaW5kZXg9e2l9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJrcGlzXCIgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogQ2hhcnRzIFJvdyAqL31cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9BbmltYXRlZFN0YXRzU2VjdGlvbjoxMTA6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTZcIj5cbiAgICAgICAgICB7LyogUmV2ZW51ZSBDb21wYXJpc29uIENoYXJ0ICovfVxuICAgICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0FuaW1hdGVkU3RhdHNTZWN0aW9uOjExMjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB4OiAtMzAgfX1cbiAgICAgICAgICBhbmltYXRlPXtpblZpZXcgPyB7IG9wYWNpdHk6IDEsIHg6IDAgfSA6IHt9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNywgZGVsYXk6IDAuMyB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1kOmNvbC1zcGFuLTIgYmctd2hpdGUgcm91bmRlZC0yeGwgcC02IHNoYWRvdy1sZyBib3JkZXIgYm9yZGVyLWdyYXktMTAwXCI+XG5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQW5pbWF0ZWRTdGF0c1NlY3Rpb246MTE4OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi01XCI+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQW5pbWF0ZWRTdGF0c1NlY3Rpb246MTE5OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgIDxoMyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9BbmltYXRlZFN0YXRzU2VjdGlvbjoxMjA6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtZ3JheS05MDAgdGV4dC1sZ1wiPlJldmVudWUgQ29tcGFyaXNvbjwvaDM+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQW5pbWF0ZWRTdGF0c1NlY3Rpb246MTIxOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTQwMFwiPkRpcmVjdCB2cyBBZ2dyZWdhdG9yIE1vZGVsPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9BbmltYXRlZFN0YXRzU2VjdGlvbjoxMjM6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgdGV4dC14c1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0FuaW1hdGVkU3RhdHNTZWN0aW9uOjEyNDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41XCI+PHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQW5pbWF0ZWRTdGF0c1NlY3Rpb246MTI0OjYwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMyBoLTMgcm91bmRlZC1mdWxsIGJnLW9yYW5nZS01MDAgaW5saW5lLWJsb2NrXCIgLz5EaXJlY3Q8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQW5pbWF0ZWRTdGF0c1NlY3Rpb246MTI1OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjVcIj48c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9BbmltYXRlZFN0YXRzU2VjdGlvbjoxMjU6NjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0zIGgtMyByb3VuZGVkLWZ1bGwgYmctZ3JheS0zMDAgaW5saW5lLWJsb2NrXCIgLz5BZ2dyZWdhdG9yPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFJlc3BvbnNpdmVDb250YWluZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQW5pbWF0ZWRTdGF0c1NlY3Rpb246MTI4OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PXsyMDB9PlxuICAgICAgICAgICAgICA8QXJlYUNoYXJ0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0FuaW1hdGVkU3RhdHNTZWN0aW9uOjEyOToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGRhdGE9e3JldmVudWVEYXRhfSBtYXJnaW49e3sgdG9wOiA1LCByaWdodDogNSwgbGVmdDogLTIwLCBib3R0b206IDAgfX0+XG4gICAgICAgICAgICAgICAgPGRlZnMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQW5pbWF0ZWRTdGF0c1NlY3Rpb246MTMwOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0FuaW1hdGVkU3RhdHNTZWN0aW9uOjEzMToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBpZD1cImRpcmVjdEdyYWRcIiB4MT1cIjBcIiB5MT1cIjBcIiB4Mj1cIjBcIiB5Mj1cIjFcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3AgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQW5pbWF0ZWRTdGF0c1NlY3Rpb246MTMyOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIG9mZnNldD1cIjUlXCIgc3RvcENvbG9yPVwiI2Y5NzMxNlwiIHN0b3BPcGFjaXR5PXswLjN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0FuaW1hdGVkU3RhdHNTZWN0aW9uOjEzMzoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBvZmZzZXQ9XCI5NSVcIiBzdG9wQ29sb3I9XCIjZjk3MzE2XCIgc3RvcE9wYWNpdHk9ezB9IC8+XG4gICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0FuaW1hdGVkU3RhdHNTZWN0aW9uOjEzNToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBpZD1cImFnZ0dyYWRcIiB4MT1cIjBcIiB5MT1cIjBcIiB4Mj1cIjBcIiB5Mj1cIjFcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3AgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQW5pbWF0ZWRTdGF0c1NlY3Rpb246MTM2OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIG9mZnNldD1cIjUlXCIgc3RvcENvbG9yPVwiIzljYTNhZlwiIHN0b3BPcGFjaXR5PXswLjJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0FuaW1hdGVkU3RhdHNTZWN0aW9uOjEzNzoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBvZmZzZXQ9XCI5NSVcIiBzdG9wQ29sb3I9XCIjOWNhM2FmXCIgc3RvcE9wYWNpdHk9ezB9IC8+XG4gICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICAgICAgICA8WEF4aXMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQW5pbWF0ZWRTdGF0c1NlY3Rpb246MTQwOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgZGF0YUtleT1cIm1vbnRoXCIgdGljaz17eyBmb250U2l6ZTogMTEsIGZpbGw6IFwiIzljYTNhZlwiIH19IGF4aXNMaW5lPXtmYWxzZX0gdGlja0xpbmU9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgICAgIDxZQXhpcyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9BbmltYXRlZFN0YXRzU2VjdGlvbjoxNDE6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB0aWNrPXt7IGZvbnRTaXplOiAxMCwgZmlsbDogXCIjOWNhM2FmXCIgfX0gYXhpc0xpbmU9e2ZhbHNlfSB0aWNrTGluZT17ZmFsc2V9IHRpY2tGb3JtYXR0ZXI9eyh2KSA9PiBg4oK5JHt2IC8gMTAwMH1rYH0gLz5cbiAgICAgICAgICAgICAgICA8VG9vbHRpcCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9BbmltYXRlZFN0YXRzU2VjdGlvbjoxNDI6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjb250ZW50PXs8Q3VzdG9tVG9vbHRpcCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9BbmltYXRlZFN0YXRzU2VjdGlvbjoxNDI6MzRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz59IC8+XG4gICAgICAgICAgICAgICAgPEFyZWEgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQW5pbWF0ZWRTdGF0c1NlY3Rpb246MTQzOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHR5cGU9XCJtb25vdG9uZVwiIGRhdGFLZXk9XCJkaXJlY3RcIiBzdHJva2U9XCIjZjk3MzE2XCIgc3Ryb2tlV2lkdGg9ezIuNX0gZmlsbD1cInVybCgjZGlyZWN0R3JhZClcIiBkb3Q9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgICAgIDxBcmVhIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0FuaW1hdGVkU3RhdHNTZWN0aW9uOjE0NDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwiYWdncmVnYXRvclwiIHN0cm9rZT1cIiM5Y2EzYWZcIiBzdHJva2VXaWR0aD17Mn0gZmlsbD1cInVybCgjYWdnR3JhZClcIiBkb3Q9e2ZhbHNlfSBzdHJva2VEYXNoYXJyYXk9XCI1IDNcIiAvPlxuICAgICAgICAgICAgICA8L0FyZWFDaGFydD5cbiAgICAgICAgICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICB7LyogQ29tbWlzc2lvbiBQaWUgKi99XG4gICAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQW5pbWF0ZWRTdGF0c1NlY3Rpb246MTUwOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHg6IDMwIH19XG4gICAgICAgICAgYW5pbWF0ZT17aW5WaWV3ID8geyBvcGFjaXR5OiAxLCB4OiAwIH0gOiB7fX1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjcsIGRlbGF5OiAwLjQgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBwLTYgc2hhZG93LWxnIGJvcmRlciBib3JkZXItZ3JheS0xMDAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cblxuICAgICAgICAgICAgPGgzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0FuaW1hdGVkU3RhdHNTZWN0aW9uOjE1NjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1ncmF5LTkwMCB0ZXh0LWxnIG1iLTEgdGV4dC1jZW50ZXJcIj5XaXRoIFJlc3Ryb1NhYXRoaTwvaDM+XG4gICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9BbmltYXRlZFN0YXRzU2VjdGlvbjoxNTc6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNDAwIG1iLTQgdGV4dC1jZW50ZXJcIj5Zb3Uga2VlcCAxMDAlIG9mIHJldmVudWU8L3A+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQW5pbWF0ZWRTdGF0c1NlY3Rpb246MTU5OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgPFBpZUNoYXJ0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0FuaW1hdGVkU3RhdHNTZWN0aW9uOjE2MDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHdpZHRoPXsxNjB9IGhlaWdodD17MTYwfT5cbiAgICAgICAgICAgICAgICA8UGllIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0FuaW1hdGVkU3RhdHNTZWN0aW9uOjE2MToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgZGF0YT17cGllRGF0YX1cbiAgICAgICAgICAgICAgICBjeD17ODB9XG4gICAgICAgICAgICAgICAgY3k9ezgwfVxuICAgICAgICAgICAgICAgIGlubmVyUmFkaXVzPXs1MH1cbiAgICAgICAgICAgICAgICBvdXRlclJhZGl1cz17NzV9XG4gICAgICAgICAgICAgICAgc3RhcnRBbmdsZT17OTB9XG4gICAgICAgICAgICAgICAgZW5kQW5nbGU9ey0yNzB9XG4gICAgICAgICAgICAgICAgZGF0YUtleT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25CZWdpbj17aW5WaWV3ID8gMzAwIDogOTk5OX1cbiAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbj17MTIwMH0+XG5cbiAgICAgICAgICAgICAgICAgIHtwaWVEYXRhLm1hcCgoZW50cnksIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgICAgPENlbGwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQW5pbWF0ZWRTdGF0c1NlY3Rpb246MTc0OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtpbmRleH0gZmlsbD17ZW50cnkuY29sb3J9IGRhdGEtYXJyLWluZGV4PXtpbmRleH0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cInBpZURhdGFcIiAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1BpZT5cbiAgICAgICAgICAgICAgPC9QaWVDaGFydD5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9BbmltYXRlZFN0YXRzU2VjdGlvbjoxNzg6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0FuaW1hdGVkU3RhdHNTZWN0aW9uOjE3OToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWV4dHJhYm9sZCB0ZXh0LW9yYW5nZS02MDBcIj4xMDAlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0FuaW1hdGVkU3RhdHNTZWN0aW9uOjE4MDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LWdyYXktNDAwIGZvbnQtbWVkaXVtXCI+WW91cnM8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQW5pbWF0ZWRTdGF0c1NlY3Rpb246MTg0OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsIHNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0FuaW1hdGVkU3RhdHNTZWN0aW9uOjE4NToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0FuaW1hdGVkU3RhdHNTZWN0aW9uOjE4NjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPjxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL0FuaW1hdGVkU3RhdHNTZWN0aW9uOjE4Njo1OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTMgaC0zIHJvdW5kZWQtZnVsbCBiZy1vcmFuZ2UtNTAwIGlubGluZS1ibG9ja1wiIC8+WW91IEtlZXA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQW5pbWF0ZWRTdGF0c1NlY3Rpb246MTg3OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LW9yYW5nZS02MDBcIj4xMDAlPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9BbmltYXRlZFN0YXRzU2VjdGlvbjoxODk6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9BbmltYXRlZFN0YXRzU2VjdGlvbjoxOTA6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj48c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9BbmltYXRlZFN0YXRzU2VjdGlvbjoxOTA6NThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0zIGgtMyByb3VuZGVkLWZ1bGwgYmctZ3JheS0yMDAgaW5saW5lLWJsb2NrXCIgLz5BZ2dyZWdhdG9yIEN1dHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvQW5pbWF0ZWRTdGF0c1NlY3Rpb246MTkxOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWdyYXktNDAwIGxpbmUtdGhyb3VnaFwiPjI1JTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+KTtcblxufSJdLCJmaWxlIjoiL2FwcC9zcmMvY29tcG9uZW50cy9sYW5kaW5nL0FuaW1hdGVkU3RhdHNTZWN0aW9uLmpzeCJ9