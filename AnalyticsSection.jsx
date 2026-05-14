import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/dashboard/AnalyticsSection.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/dashboard/AnalyticsSection.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"];
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=79425e35";
import {
  TrendingUp,
  TrendingDown,
  IndianRupee,
  ShoppingBag,
  Clock,
  ArrowUpRight
} from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
import { Card, CardContent, CardHeader, CardTitle } from "/src/components/ui/card.jsx";
import { Tabs, TabsList, TabsTrigger } from "/src/components/ui/tabs.jsx";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "/node_modules/.vite/deps/recharts.js?v=79425e35";
const COLORS = ["#ea580c", "#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#ec4899"];
export default function AnalyticsSection({ restaurant, orders, menuItems, id }) {
  _s();
  const [timeRange, setTimeRange] = useState("7days");
  const now = /* @__PURE__ */ new Date();
  const getDateRange = () => {
    const days2 = timeRange === "7days" ? 7 : timeRange === "30days" ? 30 : 90;
    const startDate = new Date(now);
    startDate.setDate(startDate.getDate() - days2);
    return startDate;
  };
  const filteredOrders = orders.filter((o) => new Date(o.created_date) >= getDateRange());
  const completedOrders = filteredOrders.filter((o) => o.status === "completed" || o.payment_status === "paid");
  const totalRevenue = completedOrders.reduce((sum, o) => sum + (o.total_amount || 0), 0);
  const totalOrders = completedOrders.length;
  const avgOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;
  const dailyData = [];
  const days = timeRange === "7days" ? 7 : timeRange === "30days" ? 30 : 90;
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    const dayOrders = completedOrders.filter((o) => {
      const orderDate = new Date(o.created_date);
      return orderDate.toDateString() === date.toDateString();
    });
    dailyData.push({
      date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      revenue: dayOrders.reduce((sum, o) => sum + (o.total_amount || 0), 0),
      orders: dayOrders.length
    });
  }
  const itemSales = {};
  completedOrders.forEach((order) => {
    order.items?.forEach((item) => {
      if (!itemSales[item.name]) {
        itemSales[item.name] = { name: item.name, quantity: 0, revenue: 0 };
      }
      itemSales[item.name].quantity += item.quantity || 1;
      itemSales[item.name].revenue += item.total_price || 0;
    });
  });
  const topItems = Object.values(itemSales).sort((a, b) => b.revenue - a.revenue).slice(0, 5);
  const ordersByHour = Array(24).fill(0);
  completedOrders.forEach((order) => {
    const hour = new Date(order.created_date).getHours();
    ordersByHour[hour]++;
  });
  const peakHoursData = ordersByHour.map((count, hour) => ({
    hour: `${hour}:00`,
    orders: count
  })).filter((_, i) => i >= 10 && i <= 22);
  const orderTypes = completedOrders.reduce((acc, order) => {
    const type = order.order_type || "dine_in";
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});
  const orderTypeData = Object.entries(orderTypes).map(([name, value]) => ({
    name: name.replace("_", " "),
    value
  }));
  return /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      "data-source-location": "components/dashboard/AnalyticsSection:87:4",
      "data-dynamic-content": "true",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "space-y-6",
      children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:94:6", "data-dynamic-content": "true", className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:95:8", "data-dynamic-content": "false", children: [
            /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "components/dashboard/AnalyticsSection:96:10", "data-dynamic-content": "false", className: "text-xl font-bold text-gray-900", children: "Analytics" }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 115,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/AnalyticsSection:97:10", "data-dynamic-content": "false", className: "text-gray-500", children: "Track your restaurant performance" }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 116,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
            lineNumber: 114,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(Tabs, { "data-source-location": "components/dashboard/AnalyticsSection:99:8", "data-dynamic-content": "true", value: timeRange, onValueChange: setTimeRange, children: /* @__PURE__ */ jsxDEV(TabsList, { "data-source-location": "components/dashboard/AnalyticsSection:100:10", "data-dynamic-content": "false", children: [
            /* @__PURE__ */ jsxDEV(TabsTrigger, { "data-source-location": "components/dashboard/AnalyticsSection:101:12", "data-dynamic-content": "false", value: "7days", children: "7 Days" }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 120,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(TabsTrigger, { "data-source-location": "components/dashboard/AnalyticsSection:102:12", "data-dynamic-content": "false", value: "30days", children: "30 Days" }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 121,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(TabsTrigger, { "data-source-location": "components/dashboard/AnalyticsSection:103:12", "data-dynamic-content": "false", value: "90days", children: "90 Days" }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 122,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
            lineNumber: 119,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
            lineNumber: 118,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
          lineNumber: 113,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:109:6", "data-dynamic-content": "true", className: "grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4", children: [
          /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/AnalyticsSection:110:8", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/AnalyticsSection:111:10", "data-dynamic-content": "true", className: "p-6", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:112:12", "data-dynamic-content": "true", className: "flex items-start justify-between", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:113:14", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/AnalyticsSection:114:16", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Total Revenue" }, void 0, false, {
                fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                lineNumber: 133,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/AnalyticsSection:115:16", "data-dynamic-content": "true", className: "text-3xl font-bold text-gray-900", children: [
                "₹",
                totalRevenue.toLocaleString()
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                lineNumber: 134,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 132,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:117:14", "data-dynamic-content": "false", className: "p-3 bg-orange-100 rounded-xl", children: /* @__PURE__ */ jsxDEV(IndianRupee, { "data-source-location": "components/dashboard/AnalyticsSection:118:16", "data-dynamic-content": "false", className: "w-6 h-6 text-orange-600" }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 137,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 136,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
            lineNumber: 131,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
            lineNumber: 130,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
            lineNumber: 129,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/AnalyticsSection:124:8", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/AnalyticsSection:125:10", "data-dynamic-content": "true", className: "p-6", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:126:12", "data-dynamic-content": "true", className: "flex items-start justify-between", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:127:14", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/AnalyticsSection:128:16", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Total Orders" }, void 0, false, {
                fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                lineNumber: 147,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/AnalyticsSection:129:16", "data-dynamic-content": "true", className: "text-3xl font-bold text-gray-900", "data-collection-item-field": "totalOrders", "data-collection-item-id": id, children: totalOrders }, void 0, false, {
                fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                lineNumber: 148,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 146,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:131:14", "data-dynamic-content": "false", className: "p-3 bg-blue-100 rounded-xl", children: /* @__PURE__ */ jsxDEV(ShoppingBag, { "data-source-location": "components/dashboard/AnalyticsSection:132:16", "data-dynamic-content": "false", className: "w-6 h-6 text-blue-600" }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 151,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 150,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
            lineNumber: 145,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
            lineNumber: 144,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
            lineNumber: 143,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/AnalyticsSection:138:8", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/AnalyticsSection:139:10", "data-dynamic-content": "true", className: "p-6", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:140:12", "data-dynamic-content": "true", className: "flex items-start justify-between", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:141:14", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/AnalyticsSection:142:16", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Avg Order Value" }, void 0, false, {
                fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                lineNumber: 161,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/AnalyticsSection:143:16", "data-dynamic-content": "true", className: "text-3xl font-bold text-gray-900", children: [
                "₹",
                Math.round(avgOrderValue)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                lineNumber: 162,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 160,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:145:14", "data-dynamic-content": "false", className: "p-3 bg-green-100 rounded-xl", children: /* @__PURE__ */ jsxDEV(ArrowUpRight, { "data-source-location": "components/dashboard/AnalyticsSection:146:16", "data-dynamic-content": "false", className: "w-6 h-6 text-green-600" }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 165,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 164,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
            lineNumber: 159,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
            lineNumber: 158,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
            lineNumber: 157,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/AnalyticsSection:152:8", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/AnalyticsSection:153:10", "data-dynamic-content": "true", className: "p-6", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:154:12", "data-dynamic-content": "true", className: "flex items-start justify-between", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:155:14", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/AnalyticsSection:156:16", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Menu Items" }, void 0, false, {
                fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                lineNumber: 175,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/AnalyticsSection:157:16", "data-dynamic-content": "true", className: "text-3xl font-bold text-gray-900", children: menuItems.length }, void 0, false, {
                fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                lineNumber: 176,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/AnalyticsSection:158:16", "data-dynamic-content": "true", className: "text-sm text-gray-500 mt-1", children: [
                menuItems.filter((m) => m.is_available).length,
                " available"
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                lineNumber: 177,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 174,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:162:14", "data-dynamic-content": "false", className: "p-3 bg-orange-100 rounded-xl", children: /* @__PURE__ */ jsxDEV(Clock, { "data-source-location": "components/dashboard/AnalyticsSection:163:16", "data-dynamic-content": "false", className: "w-6 h-6 text-orange-600" }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 182,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 181,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
            lineNumber: 173,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
            lineNumber: 172,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
            lineNumber: 171,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
          lineNumber: 128,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:171:6", "data-dynamic-content": "true", className: "grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6", children: [
          /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/AnalyticsSection:172:8", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "components/dashboard/AnalyticsSection:173:10", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "components/dashboard/AnalyticsSection:174:12", "data-dynamic-content": "false", className: "text-lg", children: "Revenue Trend" }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 193,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 192,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/AnalyticsSection:176:10", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:177:12", "data-dynamic-content": "true", className: "h-72", children: completedOrders.length === 0 ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:179:16", "data-dynamic-content": "false", className: "h-full flex items-center justify-center text-gray-500", children: "No data available" }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 198,
              columnNumber: 15
            }, this) : /* @__PURE__ */ jsxDEV(ResponsiveContainer, { "data-source-location": "components/dashboard/AnalyticsSection:183:16", "data-dynamic-content": "true", width: "100%", height: "100%", children: /* @__PURE__ */ jsxDEV(LineChart, { "data-source-location": "components/dashboard/AnalyticsSection:184:18", "data-dynamic-content": "true", data: dailyData, children: [
              /* @__PURE__ */ jsxDEV(CartesianGrid, { "data-source-location": "components/dashboard/AnalyticsSection:185:20", "data-dynamic-content": "false", strokeDasharray: "3 3", stroke: "#f0f0f0" }, void 0, false, {
                fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                lineNumber: 204,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV(XAxis, { "data-source-location": "components/dashboard/AnalyticsSection:186:20", "data-dynamic-content": "false", dataKey: "date", stroke: "#9ca3af", fontSize: 12 }, void 0, false, {
                fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                lineNumber: 205,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV(YAxis, { "data-source-location": "components/dashboard/AnalyticsSection:187:20", "data-dynamic-content": "false", stroke: "#9ca3af", fontSize: 12 }, void 0, false, {
                fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                lineNumber: 206,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV(
                Tooltip,
                {
                  "data-source-location": "components/dashboard/AnalyticsSection:188:20",
                  "data-dynamic-content": "true",
                  formatter: (value) => [`₹${value.toLocaleString()}`, "Revenue"],
                  contentStyle: { borderRadius: 8, border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                  lineNumber: 207,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                Line,
                {
                  "data-source-location": "components/dashboard/AnalyticsSection:192:20",
                  "data-dynamic-content": "true",
                  type: "monotone",
                  dataKey: "revenue",
                  stroke: "#ea580c",
                  strokeWidth: 3,
                  dot: { fill: "#ea580c", strokeWidth: 2, r: 4 }
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                  lineNumber: 211,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 203,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 202,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 196,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 195,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
            lineNumber: 191,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/AnalyticsSection:206:8", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "components/dashboard/AnalyticsSection:207:10", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "components/dashboard/AnalyticsSection:208:12", "data-dynamic-content": "false", className: "text-lg", children: "Orders Trend" }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 227,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 226,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/AnalyticsSection:210:10", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:211:12", "data-dynamic-content": "true", className: "h-72", children: completedOrders.length === 0 ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:213:16", "data-dynamic-content": "false", className: "h-full flex items-center justify-center text-gray-500", children: "No data available" }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 232,
              columnNumber: 15
            }, this) : /* @__PURE__ */ jsxDEV(ResponsiveContainer, { "data-source-location": "components/dashboard/AnalyticsSection:217:16", "data-dynamic-content": "true", width: "100%", height: "100%", children: /* @__PURE__ */ jsxDEV(BarChart, { "data-source-location": "components/dashboard/AnalyticsSection:218:18", "data-dynamic-content": "true", data: dailyData, children: [
              /* @__PURE__ */ jsxDEV(CartesianGrid, { "data-source-location": "components/dashboard/AnalyticsSection:219:20", "data-dynamic-content": "false", strokeDasharray: "3 3", stroke: "#f0f0f0" }, void 0, false, {
                fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                lineNumber: 238,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV(XAxis, { "data-source-location": "components/dashboard/AnalyticsSection:220:20", "data-dynamic-content": "false", dataKey: "date", stroke: "#9ca3af", fontSize: 12 }, void 0, false, {
                fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                lineNumber: 239,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV(YAxis, { "data-source-location": "components/dashboard/AnalyticsSection:221:20", "data-dynamic-content": "false", stroke: "#9ca3af", fontSize: 12 }, void 0, false, {
                fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                lineNumber: 240,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV(
                Tooltip,
                {
                  "data-source-location": "components/dashboard/AnalyticsSection:222:20",
                  "data-dynamic-content": "true",
                  formatter: (value) => [value, "Orders"],
                  contentStyle: { borderRadius: 8, border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                  lineNumber: 241,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(Bar, { "data-source-location": "components/dashboard/AnalyticsSection:226:20", "data-dynamic-content": "true", dataKey: "orders", fill: "#3b82f6", radius: [4, 4, 0, 0] }, void 0, false, {
                fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                lineNumber: 245,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 237,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 236,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 230,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 229,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
            lineNumber: 225,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
          lineNumber: 190,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:236:6", "data-dynamic-content": "true", className: "grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6", children: [
          /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/AnalyticsSection:237:8", "data-dynamic-content": "true", className: "lg:col-span-2", children: [
            /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "components/dashboard/AnalyticsSection:238:10", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "components/dashboard/AnalyticsSection:239:12", "data-dynamic-content": "false", className: "text-lg", children: "Top Selling Items" }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 258,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 257,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/AnalyticsSection:241:10", "data-dynamic-content": "true", children: topItems.length === 0 ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:243:14", "data-dynamic-content": "false", className: "text-center py-8 text-gray-500", children: "No sales data available" }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 262,
              columnNumber: 13
            }, this) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:245:14", "data-dynamic-content": "true", className: "space-y-4", children: topItems.map(
              (item, index) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:247:18", "data-dynamic-content": "true", className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/AnalyticsSection:248:20", "data-dynamic-content": "true", className: "text-lg font-bold text-gray-400 w-6", children: [
                  "#",
                  index + 1
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                  lineNumber: 267,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:249:20", "data-dynamic-content": "true", className: "flex-1", children: [
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/AnalyticsSection:250:22", "data-dynamic-content": "true", className: "font-medium", "data-collection-item-field": "name", "data-collection-item-id": item?.id || item?._id, children: item.name }, void 0, false, {
                    fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                    lineNumber: 269,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/AnalyticsSection:251:22", "data-dynamic-content": "true", className: "text-sm text-gray-500", "data-collection-item-field": "quantity", "data-collection-item-id": item?.id || item?._id, children: [
                    item.quantity,
                    " sold"
                  ] }, void 0, true, {
                    fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                    lineNumber: 270,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                  lineNumber: 268,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:253:20", "data-dynamic-content": "true", className: "text-right", children: /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/AnalyticsSection:254:22", "data-dynamic-content": "true", className: "font-bold", "data-collection-item-field": "revenue", "data-collection-item-id": item?.id || item?._id, children: [
                  "₹",
                  item.revenue.toLocaleString()
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                  lineNumber: 273,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                  lineNumber: 272,
                  columnNumber: 21
                }, this)
              ] }, item.name, true, {
                fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                lineNumber: 266,
                columnNumber: 15
              }, this)
            ) }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 264,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 260,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
            lineNumber: 256,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/AnalyticsSection:263:8", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "components/dashboard/AnalyticsSection:264:10", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "components/dashboard/AnalyticsSection:265:12", "data-dynamic-content": "false", className: "text-lg", children: "Order Types" }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 284,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 283,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/AnalyticsSection:267:10", "data-dynamic-content": "true", children: orderTypeData.length === 0 ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:269:14", "data-dynamic-content": "false", className: "text-center py-8 text-gray-500", children: "No data available" }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 288,
              columnNumber: 13
            }, this) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:271:14", "data-dynamic-content": "true", className: "h-48", children: [
              /* @__PURE__ */ jsxDEV(ResponsiveContainer, { "data-source-location": "components/dashboard/AnalyticsSection:272:16", "data-dynamic-content": "true", width: "100%", height: "100%", children: /* @__PURE__ */ jsxDEV(PieChart, { "data-source-location": "components/dashboard/AnalyticsSection:273:18", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV(
                  Pie,
                  {
                    "data-source-location": "components/dashboard/AnalyticsSection:274:20",
                    "data-dynamic-content": "true",
                    data: orderTypeData,
                    cx: "50%",
                    cy: "50%",
                    innerRadius: 50,
                    outerRadius: 80,
                    paddingAngle: 2,
                    dataKey: "value",
                    children: orderTypeData.map(
                      (entry, index) => /* @__PURE__ */ jsxDEV(Cell, { "data-source-location": "components/dashboard/AnalyticsSection:284:24", "data-dynamic-content": "true", fill: COLORS[index % COLORS.length] }, entry.name, false, {
                        fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                        lineNumber: 303,
                        columnNumber: 21
                      }, this)
                    )
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                    lineNumber: 293,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(Tooltip, { "data-source-location": "components/dashboard/AnalyticsSection:287:20", "data-dynamic-content": "false" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                  lineNumber: 306,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                lineNumber: 292,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                lineNumber: 291,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:290:16", "data-dynamic-content": "true", className: "flex justify-center gap-4 mt-2 flex-wrap", children: orderTypeData.map(
                (entry, index) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:292:20", "data-dynamic-content": "true", className: "flex items-center gap-2 text-sm", children: [
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:293:22", "data-dynamic-content": "true", className: "w-3 h-3 rounded-full", style: { backgroundColor: COLORS[index % COLORS.length] } }, void 0, false, {
                    fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                    lineNumber: 312,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/AnalyticsSection:294:22", "data-dynamic-content": "true", className: "capitalize", "data-collection-item-field": "name", "data-collection-item-id": entry?.id || entry?._id, children: entry.name }, void 0, false, {
                    fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                    lineNumber: 313,
                    columnNumber: 23
                  }, this)
                ] }, entry.name, true, {
                  fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                  lineNumber: 311,
                  columnNumber: 17
                }, this)
              ) }, void 0, false, {
                fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                lineNumber: 309,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 290,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 286,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
            lineNumber: 282,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
          lineNumber: 255,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/AnalyticsSection:305:6", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "components/dashboard/AnalyticsSection:306:8", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "components/dashboard/AnalyticsSection:307:10", "data-dynamic-content": "false", className: "text-lg", children: "Peak Hours" }, void 0, false, {
            fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
            lineNumber: 326,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
            lineNumber: 325,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/AnalyticsSection:309:8", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:310:10", "data-dynamic-content": "true", className: "h-64", children: completedOrders.length === 0 ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/AnalyticsSection:312:14", "data-dynamic-content": "false", className: "h-full flex items-center justify-center text-gray-500", children: "No data available" }, void 0, false, {
            fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
            lineNumber: 331,
            columnNumber: 13
          }, this) : /* @__PURE__ */ jsxDEV(ResponsiveContainer, { "data-source-location": "components/dashboard/AnalyticsSection:316:14", "data-dynamic-content": "true", width: "100%", height: "100%", children: /* @__PURE__ */ jsxDEV(BarChart, { "data-source-location": "components/dashboard/AnalyticsSection:317:16", "data-dynamic-content": "true", data: peakHoursData, children: [
            /* @__PURE__ */ jsxDEV(CartesianGrid, { "data-source-location": "components/dashboard/AnalyticsSection:318:18", "data-dynamic-content": "false", strokeDasharray: "3 3", stroke: "#f0f0f0" }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 337,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(XAxis, { "data-source-location": "components/dashboard/AnalyticsSection:319:18", "data-dynamic-content": "false", dataKey: "hour", stroke: "#9ca3af", fontSize: 10 }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 338,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(YAxis, { "data-source-location": "components/dashboard/AnalyticsSection:320:18", "data-dynamic-content": "false", stroke: "#9ca3af", fontSize: 12 }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 339,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(
              Tooltip,
              {
                "data-source-location": "components/dashboard/AnalyticsSection:321:18",
                "data-dynamic-content": "true",
                formatter: (value) => [value, "Orders"],
                contentStyle: { borderRadius: 8, border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }
              },
              void 0,
              false,
              {
                fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
                lineNumber: 340,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(Bar, { "data-source-location": "components/dashboard/AnalyticsSection:325:18", "data-dynamic-content": "true", dataKey: "orders", fill: "#10b981", radius: [4, 4, 0, 0] }, void 0, false, {
              fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
              lineNumber: 344,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
            lineNumber: 336,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
            lineNumber: 335,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
            lineNumber: 329,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
            lineNumber: 328,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
          lineNumber: 324,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/app/src/components/dashboard/AnalyticsSection.jsx",
      lineNumber: 106,
      columnNumber: 5
    },
    this
  );
}
_s(AnalyticsSection, "6Ti3c4MJJJM+baTguqOjSd9N2RY=");
_c = AnalyticsSection;
var _c;
$RefreshReg$(_c, "AnalyticsSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/dashboard/AnalyticsSection.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/dashboard/AnalyticsSection.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QWdCLElBQUF1RjtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsIlRyZW5kaW5nVXAiLCJUcmVuZGluZ0Rvd24iLCJJbmRpYW5SdXBlZSIsIlNob3BwaW5nQmFnIiwiQ2xvY2siLCJBcnJvd1VwUmlnaHQiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiVGFicyIsIlRhYnNMaXN0IiwiVGFic1RyaWdnZXIiLCJMaW5lQ2hhcnQiLCJMaW5lIiwiWEF4aXMiLCJZQXhpcyIsIkNhcnRlc2lhbkdyaWQiLCJUb29sdGlwIiwiUmVzcG9uc2l2ZUNvbnRhaW5lciIsIkJhckNoYXJ0IiwiQmFyIiwiUGllQ2hhcnQiLCJQaWUiLCJDZWxsIiwiQ09MT1JTIiwiQW5hbHl0aWNzU2VjdGlvbiIsInJlc3RhdXJhbnQiLCJvcmRlcnMiLCJtZW51SXRlbXMiLCJpZCIsIl9zIiwidGltZVJhbmdlIiwic2V0VGltZVJhbmdlIiwibm93IiwiRGF0ZSIsImdldERhdGVSYW5nZSIsImRheXMiLCJzdGFydERhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImZpbHRlcmVkT3JkZXJzIiwiZmlsdGVyIiwibyIsImNyZWF0ZWRfZGF0ZSIsImNvbXBsZXRlZE9yZGVycyIsInN0YXR1cyIsInBheW1lbnRfc3RhdHVzIiwidG90YWxSZXZlbnVlIiwicmVkdWNlIiwic3VtIiwidG90YWxfYW1vdW50IiwidG90YWxPcmRlcnMiLCJsZW5ndGgiLCJhdmdPcmRlclZhbHVlIiwiZGFpbHlEYXRhIiwiaSIsImRhdGUiLCJkYXlPcmRlcnMiLCJvcmRlckRhdGUiLCJ0b0RhdGVTdHJpbmciLCJwdXNoIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwibW9udGgiLCJkYXkiLCJyZXZlbnVlIiwiaXRlbVNhbGVzIiwiZm9yRWFjaCIsIm9yZGVyIiwiaXRlbXMiLCJpdGVtIiwibmFtZSIsInF1YW50aXR5IiwidG90YWxfcHJpY2UiLCJ0b3BJdGVtcyIsIk9iamVjdCIsInZhbHVlcyIsInNvcnQiLCJhIiwiYiIsInNsaWNlIiwib3JkZXJzQnlIb3VyIiwiQXJyYXkiLCJmaWxsIiwiaG91ciIsImdldEhvdXJzIiwicGVha0hvdXJzRGF0YSIsIm1hcCIsImNvdW50IiwiXyIsIm9yZGVyVHlwZXMiLCJhY2MiLCJ0eXBlIiwib3JkZXJfdHlwZSIsIm9yZGVyVHlwZURhdGEiLCJlbnRyaWVzIiwidmFsdWUiLCJyZXBsYWNlIiwib3BhY2l0eSIsInRvTG9jYWxlU3RyaW5nIiwiTWF0aCIsInJvdW5kIiwibSIsImlzX2F2YWlsYWJsZSIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImJveFNoYWRvdyIsInN0cm9rZVdpZHRoIiwiciIsImluZGV4IiwiX2lkIiwiZW50cnkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJBbmFseXRpY3NTZWN0aW9uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQge1xuICBUcmVuZGluZ1VwLCBUcmVuZGluZ0Rvd24sIEluZGlhblJ1cGVlLCBTaG9wcGluZ0JhZywgQ2xvY2ssIEFycm93VXBSaWdodCB9IGZyb21cblwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5pbXBvcnQgeyBUYWJzLCBUYWJzTGlzdCwgVGFic1RyaWdnZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RhYnNcIjtcbmltcG9ydCB7XG4gIExpbmVDaGFydCwgTGluZSwgWEF4aXMsIFlBeGlzLCBDYXJ0ZXNpYW5HcmlkLFxuICBUb29sdGlwLCBSZXNwb25zaXZlQ29udGFpbmVyLCBCYXJDaGFydCwgQmFyLFxuICBQaWVDaGFydCwgUGllLCBDZWxsIH0gZnJvbVxuXCJyZWNoYXJ0c1wiO1xuXG5jb25zdCBDT0xPUlMgPSBbJyNlYTU4MGMnLCAnIzNiODJmNicsICcjMTBiOTgxJywgJyNmNTllMGInLCAnI2VmNDQ0NCcsICcjZWM0ODk5J107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuYWx5dGljc1NlY3Rpb24oeyByZXN0YXVyYW50LCBvcmRlcnMsIG1lbnVJdGVtcywgaWQgfSkge1xuICBjb25zdCBbdGltZVJhbmdlLCBzZXRUaW1lUmFuZ2VdID0gdXNlU3RhdGUoXCI3ZGF5c1wiKTtcblxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBnZXREYXRlUmFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgZGF5cyA9IHRpbWVSYW5nZSA9PT0gXCI3ZGF5c1wiID8gNyA6IHRpbWVSYW5nZSA9PT0gXCIzMGRheXNcIiA/IDMwIDogOTA7XG4gICAgY29uc3Qgc3RhcnREYXRlID0gbmV3IERhdGUobm93KTtcbiAgICBzdGFydERhdGUuc2V0RGF0ZShzdGFydERhdGUuZ2V0RGF0ZSgpIC0gZGF5cyk7XG4gICAgcmV0dXJuIHN0YXJ0RGF0ZTtcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJlZE9yZGVycyA9IG9yZGVycy5maWx0ZXIoKG8pID0+IG5ldyBEYXRlKG8uY3JlYXRlZF9kYXRlKSA+PSBnZXREYXRlUmFuZ2UoKSk7XG4gIGNvbnN0IGNvbXBsZXRlZE9yZGVycyA9IGZpbHRlcmVkT3JkZXJzLmZpbHRlcigobykgPT4gby5zdGF0dXMgPT09ICdjb21wbGV0ZWQnIHx8IG8ucGF5bWVudF9zdGF0dXMgPT09ICdwYWlkJyk7XG5cbiAgY29uc3QgdG90YWxSZXZlbnVlID0gY29tcGxldGVkT3JkZXJzLnJlZHVjZSgoc3VtLCBvKSA9PiBzdW0gKyAoby50b3RhbF9hbW91bnQgfHwgMCksIDApO1xuICBjb25zdCB0b3RhbE9yZGVycyA9IGNvbXBsZXRlZE9yZGVycy5sZW5ndGg7XG4gIGNvbnN0IGF2Z09yZGVyVmFsdWUgPSB0b3RhbE9yZGVycyA+IDAgPyB0b3RhbFJldmVudWUgLyB0b3RhbE9yZGVycyA6IDA7XG5cbiAgLy8gRGFpbHkgcmV2ZW51ZSBkYXRhXG4gIGNvbnN0IGRhaWx5RGF0YSA9IFtdO1xuICBjb25zdCBkYXlzID0gdGltZVJhbmdlID09PSBcIjdkYXlzXCIgPyA3IDogdGltZVJhbmdlID09PSBcIjMwZGF5c1wiID8gMzAgOiA5MDtcbiAgZm9yIChsZXQgaSA9IGRheXMgLSAxOyBpID49IDA7IGktLSkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShub3cpO1xuICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGkpO1xuICAgIGNvbnN0IGRheU9yZGVycyA9IGNvbXBsZXRlZE9yZGVycy5maWx0ZXIoKG8pID0+IHtcbiAgICAgIGNvbnN0IG9yZGVyRGF0ZSA9IG5ldyBEYXRlKG8uY3JlYXRlZF9kYXRlKTtcbiAgICAgIHJldHVybiBvcmRlckRhdGUudG9EYXRlU3RyaW5nKCkgPT09IGRhdGUudG9EYXRlU3RyaW5nKCk7XG4gICAgfSk7XG4gICAgZGFpbHlEYXRhLnB1c2goe1xuICAgICAgZGF0ZTogZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywgeyBtb250aDogJ3Nob3J0JywgZGF5OiAnbnVtZXJpYycgfSksXG4gICAgICByZXZlbnVlOiBkYXlPcmRlcnMucmVkdWNlKChzdW0sIG8pID0+IHN1bSArIChvLnRvdGFsX2Ftb3VudCB8fCAwKSwgMCksXG4gICAgICBvcmRlcnM6IGRheU9yZGVycy5sZW5ndGhcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFRvcCBzZWxsaW5nIGl0ZW1zXG4gIGNvbnN0IGl0ZW1TYWxlcyA9IHt9O1xuICBjb21wbGV0ZWRPcmRlcnMuZm9yRWFjaCgob3JkZXIpID0+IHtcbiAgICBvcmRlci5pdGVtcz8uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKCFpdGVtU2FsZXNbaXRlbS5uYW1lXSkge1xuICAgICAgICBpdGVtU2FsZXNbaXRlbS5uYW1lXSA9IHsgbmFtZTogaXRlbS5uYW1lLCBxdWFudGl0eTogMCwgcmV2ZW51ZTogMCB9O1xuICAgICAgfVxuICAgICAgaXRlbVNhbGVzW2l0ZW0ubmFtZV0ucXVhbnRpdHkgKz0gaXRlbS5xdWFudGl0eSB8fCAxO1xuICAgICAgaXRlbVNhbGVzW2l0ZW0ubmFtZV0ucmV2ZW51ZSArPSBpdGVtLnRvdGFsX3ByaWNlIHx8IDA7XG4gICAgfSk7XG4gIH0pO1xuICBjb25zdCB0b3BJdGVtcyA9IE9iamVjdC52YWx1ZXMoaXRlbVNhbGVzKS5zb3J0KChhLCBiKSA9PiBiLnJldmVudWUgLSBhLnJldmVudWUpLnNsaWNlKDAsIDUpO1xuXG4gIC8vIFBlYWsgaG91cnNcbiAgY29uc3Qgb3JkZXJzQnlIb3VyID0gQXJyYXkoMjQpLmZpbGwoMCk7XG4gIGNvbXBsZXRlZE9yZGVycy5mb3JFYWNoKChvcmRlcikgPT4ge1xuICAgIGNvbnN0IGhvdXIgPSBuZXcgRGF0ZShvcmRlci5jcmVhdGVkX2RhdGUpLmdldEhvdXJzKCk7XG4gICAgb3JkZXJzQnlIb3VyW2hvdXJdKys7XG4gIH0pO1xuICBjb25zdCBwZWFrSG91cnNEYXRhID0gb3JkZXJzQnlIb3VyLm1hcCgoY291bnQsIGhvdXIpID0+ICh7XG4gICAgaG91cjogYCR7aG91cn06MDBgLFxuICAgIG9yZGVyczogY291bnRcbiAgfSkpLmZpbHRlcigoXywgaSkgPT4gaSA+PSAxMCAmJiBpIDw9IDIyKTtcblxuICAvLyBPcmRlciB0eXBlIGRpc3RyaWJ1dGlvblxuICBjb25zdCBvcmRlclR5cGVzID0gY29tcGxldGVkT3JkZXJzLnJlZHVjZSgoYWNjLCBvcmRlcikgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSBvcmRlci5vcmRlcl90eXBlIHx8ICdkaW5lX2luJztcbiAgICBhY2NbdHlwZV0gPSAoYWNjW3R5cGVdIHx8IDApICsgMTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIGNvbnN0IG9yZGVyVHlwZURhdGEgPSBPYmplY3QuZW50cmllcyhvcmRlclR5cGVzKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+ICh7XG4gICAgbmFtZTogbmFtZS5yZXBsYWNlKCdfJywgJyAnKSxcbiAgICB2YWx1ZVxuICB9KSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246ODc6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgZXhpdD17eyBvcGFjaXR5OiAwIH19XG4gICAgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG5cbiAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjo5NDo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBtZDppdGVtcy1jZW50ZXIgbWQ6anVzdGlmeS1iZXR3ZWVuIGdhcC00XCI+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjk1OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgPGgyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjo5NjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwXCI+QW5hbHl0aWNzPC9oMj5cbiAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246OTc6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPlRyYWNrIHlvdXIgcmVzdGF1cmFudCBwZXJmb3JtYW5jZTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxUYWJzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjo5OTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdmFsdWU9e3RpbWVSYW5nZX0gb25WYWx1ZUNoYW5nZT17c2V0VGltZVJhbmdlfT5cbiAgICAgICAgICA8VGFic0xpc3QgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjEwMDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgIDxUYWJzVHJpZ2dlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MTAxOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHZhbHVlPVwiN2RheXNcIj43IERheXM8L1RhYnNUcmlnZ2VyPlxuICAgICAgICAgICAgPFRhYnNUcmlnZ2VyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjoxMDI6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdmFsdWU9XCIzMGRheXNcIj4zMCBEYXlzPC9UYWJzVHJpZ2dlcj5cbiAgICAgICAgICAgIDxUYWJzVHJpZ2dlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MTAzOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHZhbHVlPVwiOTBkYXlzXCI+OTAgRGF5czwvVGFic1RyaWdnZXI+XG4gICAgICAgICAgPC9UYWJzTGlzdD5cbiAgICAgICAgPC9UYWJzPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBTdGF0cyBDYXJkcyAqL31cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjEwOTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtMyBzbTpnYXAtNFwiPlxuICAgICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MTEwOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjExMToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtNlwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MTEyOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MTEzOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjExNDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5Ub3RhbCBSZXZlbnVlPC9wPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjoxMTU6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMFwiPuKCuXt0b3RhbFJldmVudWUudG9Mb2NhbGVTdHJpbmcoKX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjoxMTc6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwicC0zIGJnLW9yYW5nZS0xMDAgcm91bmRlZC14bFwiPlxuICAgICAgICAgICAgICAgIDxJbmRpYW5SdXBlZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MTE4OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNiBoLTYgdGV4dC1vcmFuZ2UtNjAwXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmQ+XG5cbiAgICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjEyNDo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjoxMjU6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJwLTZcIj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjEyNjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjEyNzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjoxMjg6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+VG90YWwgT3JkZXJzPC9wPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjoxMjk6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidG90YWxPcmRlcnNcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aWR9Pnt0b3RhbE9yZGVyc308L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjoxMzE6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwicC0zIGJnLWJsdWUtMTAwIHJvdW5kZWQteGxcIj5cbiAgICAgICAgICAgICAgICA8U2hvcHBpbmdCYWcgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjEzMjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTYgaC02IHRleHQtYmx1ZS02MDBcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZD5cblxuICAgICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MTM4OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjEzOToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtNlwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MTQwOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MTQxOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjE0MjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5BdmcgT3JkZXIgVmFsdWU8L3A+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjE0MzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwXCI+4oK5e01hdGgucm91bmQoYXZnT3JkZXJWYWx1ZSl9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MTQ1OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInAtMyBiZy1ncmVlbi0xMDAgcm91bmRlZC14bFwiPlxuICAgICAgICAgICAgICAgIDxBcnJvd1VwUmlnaHQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjE0NjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTYgaC02IHRleHQtZ3JlZW4tNjAwXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmQ+XG5cbiAgICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjE1Mjo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjoxNTM6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJwLTZcIj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjE1NDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjE1NToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjoxNTY6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+TWVudSBJdGVtczwvcD5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MTU3OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDBcIj57bWVudUl0ZW1zLmxlbmd0aH08L3A+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjE1ODoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBtdC0xXCI+XG4gICAgICAgICAgICAgICAgICB7bWVudUl0ZW1zLmZpbHRlcigobSkgPT4gbS5pc19hdmFpbGFibGUpLmxlbmd0aH0gYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MTYyOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInAtMyBiZy1vcmFuZ2UtMTAwIHJvdW5kZWQteGxcIj5cbiAgICAgICAgICAgICAgICA8Q2xvY2sgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjE2MzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTYgaC02IHRleHQtb3JhbmdlLTYwMFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBDaGFydHMgKi99XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjoxNzE6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbGc6Z3JpZC1jb2xzLTIgZ2FwLTQgc206Z2FwLTZcIj5cbiAgICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjE3Mjo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgPENhcmRIZWFkZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjE3MzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgIDxDYXJkVGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjE3NDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+UmV2ZW51ZSBUcmVuZDwvQ2FyZFRpdGxlPlxuICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjE3NjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MTc3OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiaC03MlwiPlxuICAgICAgICAgICAgICB7Y29tcGxldGVkT3JkZXJzLmxlbmd0aCA9PT0gMCA/XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjE3OToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJoLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgTm8gZGF0YSBhdmFpbGFibGVcbiAgICAgICAgICAgICAgICA8L2Rpdj4gOlxuXG4gICAgICAgICAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjoxODM6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgICA8TGluZUNoYXJ0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjoxODQ6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBkYXRhPXtkYWlseURhdGF9PlxuICAgICAgICAgICAgICAgICAgICA8Q2FydGVzaWFuR3JpZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MTg1OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHN0cm9rZURhc2hhcnJheT1cIjMgM1wiIHN0cm9rZT1cIiNmMGYwZjBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8WEF4aXMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjE4NjoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBkYXRhS2V5PVwiZGF0ZVwiIHN0cm9rZT1cIiM5Y2EzYWZcIiBmb250U2l6ZT17MTJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxZQXhpcyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MTg3OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHN0cm9rZT1cIiM5Y2EzYWZcIiBmb250U2l6ZT17MTJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjoxODg6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyPXsodmFsdWUpID0+IFtg4oK5JHt2YWx1ZS50b0xvY2FsZVN0cmluZygpfWAsICdSZXZlbnVlJ119XG4gICAgICAgICAgICAgICAgICBjb250ZW50U3R5bGU9e3sgYm9yZGVyUmFkaXVzOiA4LCBib3JkZXI6ICdub25lJywgYm94U2hhZG93OiAnMCA0cHggNnB4IC0xcHggcmdiKDAgMCAwIC8gMC4xKScgfX0gLz5cblxuICAgICAgICAgICAgICAgICAgICA8TGluZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MTkyOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJtb25vdG9uZVwiXG4gICAgICAgICAgICAgICAgICBkYXRhS2V5PVwicmV2ZW51ZVwiXG4gICAgICAgICAgICAgICAgICBzdHJva2U9XCIjZWE1ODBjXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXszfVxuICAgICAgICAgICAgICAgICAgZG90PXt7IGZpbGw6ICcjZWE1ODBjJywgc3Ryb2tlV2lkdGg6IDIsIHI6IDQgfX0gLz5cblxuICAgICAgICAgICAgICAgICAgPC9MaW5lQ2hhcnQ+XG4gICAgICAgICAgICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmQ+XG5cbiAgICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjIwNjo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgPENhcmRIZWFkZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjIwNzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgIDxDYXJkVGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjIwODoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+T3JkZXJzIFRyZW5kPC9DYXJkVGl0bGU+XG4gICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MjEwOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjoyMTE6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJoLTcyXCI+XG4gICAgICAgICAgICAgIHtjb21wbGV0ZWRPcmRlcnMubGVuZ3RoID09PSAwID9cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MjEzOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImgtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgICBObyBkYXRhIGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgIDwvZGl2PiA6XG5cbiAgICAgICAgICAgICAgPFJlc3BvbnNpdmVDb250YWluZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjIxNzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgICAgIDxCYXJDaGFydCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MjE4OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgZGF0YT17ZGFpbHlEYXRhfT5cbiAgICAgICAgICAgICAgICAgICAgPENhcnRlc2lhbkdyaWQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjIxOToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBzdHJva2VEYXNoYXJyYXk9XCIzIDNcIiBzdHJva2U9XCIjZjBmMGYwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPFhBeGlzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjoyMjA6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgZGF0YUtleT1cImRhdGVcIiBzdHJva2U9XCIjOWNhM2FmXCIgZm9udFNpemU9ezEyfSAvPlxuICAgICAgICAgICAgICAgICAgICA8WUF4aXMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjIyMToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBzdHJva2U9XCIjOWNhM2FmXCIgZm9udFNpemU9ezEyfSAvPlxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MjIyOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcj17KHZhbHVlKSA9PiBbdmFsdWUsICdPcmRlcnMnXX1cbiAgICAgICAgICAgICAgICAgIGNvbnRlbnRTdHlsZT17eyBib3JkZXJSYWRpdXM6IDgsIGJvcmRlcjogJ25vbmUnLCBib3hTaGFkb3c6ICcwIDRweCA2cHggLTFweCByZ2IoMCAwIDAgLyAwLjEpJyB9fSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxCYXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjIyNjoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGRhdGFLZXk9XCJvcmRlcnNcIiBmaWxsPVwiIzNiODJmNlwiIHJhZGl1cz17WzQsIDQsIDAsIDBdfSAvPlxuICAgICAgICAgICAgICAgICAgPC9CYXJDaGFydD5cbiAgICAgICAgICAgICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogVG9wIEl0ZW1zICYgT3JkZXIgVHlwZXMgKi99XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjoyMzY6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbGc6Z3JpZC1jb2xzLTMgZ2FwLTQgc206Z2FwLTZcIj5cbiAgICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjIzNzo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tMlwiPlxuICAgICAgICAgIDxDYXJkSGVhZGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjoyMzg6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICA8Q2FyZFRpdGxlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjoyMzk6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPlRvcCBTZWxsaW5nIEl0ZW1zPC9DYXJkVGl0bGU+XG4gICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MjQxOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICB7dG9wSXRlbXMubGVuZ3RoID09PSAwID9cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjI0MzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS04IHRleHQtZ3JheS01MDBcIj5ObyBzYWxlcyBkYXRhIGF2YWlsYWJsZTwvZGl2PiA6XG5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjI0NToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgIHt0b3BJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjoyNDc6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2l0ZW0ubmFtZX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjI0ODoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIHRleHQtZ3JheS00MDAgdy02XCI+I3tpbmRleCArIDF9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjoyNDk6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MjUwOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIm5hbWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aXRlbT8uaWQgfHwgaXRlbT8uX2lkfT57aXRlbS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MjUxOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJxdWFudGl0eVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtpdGVtPy5pZCB8fCBpdGVtPy5faWR9PntpdGVtLnF1YW50aXR5fSBzb2xkPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MjUzOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjoyNTQ6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LWJvbGRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInJldmVudWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aXRlbT8uaWQgfHwgaXRlbT8uX2lkfT7igrl7aXRlbS5yZXZlbnVlLnRvTG9jYWxlU3RyaW5nKCl9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmQ+XG5cbiAgICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjI2Mzo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgPENhcmRIZWFkZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjI2NDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgIDxDYXJkVGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjI2NToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+T3JkZXIgVHlwZXM8L0NhcmRUaXRsZT5cbiAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjoyNjc6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgIHtvcmRlclR5cGVEYXRhLmxlbmd0aCA9PT0gMCA/XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjoyNjk6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktOCB0ZXh0LWdyYXktNTAwXCI+Tm8gZGF0YSBhdmFpbGFibGU8L2Rpdj4gOlxuXG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjoyNzE6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJoLTQ4XCI+XG4gICAgICAgICAgICAgICAgPFJlc3BvbnNpdmVDb250YWluZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjI3MjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgICAgIDxQaWVDaGFydCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MjczOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQaWUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjI3NDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICBkYXRhPXtvcmRlclR5cGVEYXRhfVxuICAgICAgICAgICAgICAgICAgY3g9XCI1MCVcIlxuICAgICAgICAgICAgICAgICAgY3k9XCI1MCVcIlxuICAgICAgICAgICAgICAgICAgaW5uZXJSYWRpdXM9ezUwfVxuICAgICAgICAgICAgICAgICAgb3V0ZXJSYWRpdXM9ezgwfVxuICAgICAgICAgICAgICAgICAgcGFkZGluZ0FuZ2xlPXsyfVxuICAgICAgICAgICAgICAgICAgZGF0YUtleT1cInZhbHVlXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICB7b3JkZXJUeXBlRGF0YS5tYXAoKGVudHJ5LCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICAgICAgPENlbGwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjI4NDoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17ZW50cnkubmFtZX0gZmlsbD17Q09MT1JTW2luZGV4ICUgQ09MT1JTLmxlbmd0aF19IC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvUGllPlxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246Mjg3OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L1BpZUNoYXJ0PlxuICAgICAgICAgICAgICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjoyOTA6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGdhcC00IG10LTIgZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICB7b3JkZXJUeXBlRGF0YS5tYXAoKGVudHJ5LCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjoyOTI6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2VudHJ5Lm5hbWV9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjoyOTM6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ3LTMgaC0zIHJvdW5kZWQtZnVsbFwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogQ09MT1JTW2luZGV4ICUgQ09MT1JTLmxlbmd0aF0gfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246Mjk0OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiY2FwaXRhbGl6ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwibmFtZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtlbnRyeT8uaWQgfHwgZW50cnk/Ll9pZH0+e2VudHJ5Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIFBlYWsgSG91cnMgKi99XG4gICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MzA1OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgPENhcmRIZWFkZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjMwNjo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgIDxDYXJkVGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uOjMwNzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+UGVhayBIb3VyczwvQ2FyZFRpdGxlPlxuICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MzA5OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjozMTA6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJoLTY0XCI+XG4gICAgICAgICAgICB7Y29tcGxldGVkT3JkZXJzLmxlbmd0aCA9PT0gMCA/XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjozMTI6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICBObyBkYXRhIGF2YWlsYWJsZVxuICAgICAgICAgICAgICA8L2Rpdj4gOlxuXG4gICAgICAgICAgICA8UmVzcG9uc2l2ZUNvbnRhaW5lciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MzE2OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPlxuICAgICAgICAgICAgICAgIDxCYXJDaGFydCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MzE3OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgZGF0YT17cGVha0hvdXJzRGF0YX0+XG4gICAgICAgICAgICAgICAgICA8Q2FydGVzaWFuR3JpZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MzE4OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHN0cm9rZURhc2hhcnJheT1cIjMgM1wiIHN0cm9rZT1cIiNmMGYwZjBcIiAvPlxuICAgICAgICAgICAgICAgICAgPFhBeGlzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjozMTk6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgZGF0YUtleT1cImhvdXJcIiBzdHJva2U9XCIjOWNhM2FmXCIgZm9udFNpemU9ezEwfSAvPlxuICAgICAgICAgICAgICAgICAgPFlBeGlzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjozMjA6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgc3Ryb2tlPVwiIzljYTNhZlwiIGZvbnRTaXplPXsxMn0gLz5cbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvbjozMjE6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgIGZvcm1hdHRlcj17KHZhbHVlKSA9PiBbdmFsdWUsICdPcmRlcnMnXX1cbiAgICAgICAgICAgICAgICBjb250ZW50U3R5bGU9e3sgYm9yZGVyUmFkaXVzOiA4LCBib3JkZXI6ICdub25lJywgYm94U2hhZG93OiAnMCA0cHggNnB4IC0xcHggcmdiKDAgMCAwIC8gMC4xKScgfX0gLz5cblxuICAgICAgICAgICAgICAgICAgPEJhciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0FuYWx5dGljc1NlY3Rpb246MzI1OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgZGF0YUtleT1cIm9yZGVyc1wiIGZpbGw9XCIjMTBiOTgxXCIgcmFkaXVzPXtbNCwgNCwgMCwgMF19IC8+XG4gICAgICAgICAgICAgICAgPC9CYXJDaGFydD5cbiAgICAgICAgICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPC9DYXJkPlxuICAgIDwvbW90aW9uLmRpdj4pO1xuXG59Il0sImZpbGUiOiIvYXBwL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9BbmFseXRpY3NTZWN0aW9uLmpzeCJ9