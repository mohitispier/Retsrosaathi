import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Analytics.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/Analytics.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$(), _s2 = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { base44 } from "/src/api/base44Client.js";
import DashboardLayout from "/src/components/dashboard/DashboardLayout.jsx";
import {
  TrendingUp,
  TrendingDown,
  IndianRupee,
  ShoppingBag,
  Users,
  Clock,
  Calendar,
  ArrowUpRight
} from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
import { Card, CardContent, CardHeader, CardTitle } from "/src/components/ui/card.jsx";
import { Button } from "/src/components/ui/button.jsx";
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
const COLORS = ["#7c3aed", "#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#ec4899"];
function AnalyticsContent({ user, restaurant, id }) {
  _s();
  const [orders, setOrders] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [timeRange, setTimeRange] = useState("7days");
  useEffect(() => {
    if (restaurant?.restaurant_id) {
      loadData();
    }
  }, [restaurant]);
  const loadData = async () => {
    try {
      const [ordersData, menuData] = await Promise.all(
        [
          base44.entities.Order.filter({ restaurant_id: restaurant.restaurant_id }, "-created_date", 500),
          base44.entities.MenuItem.filter({ restaurant_id: restaurant.restaurant_id })
        ]
      );
      setOrders(ordersData);
      setMenuItems(menuData);
    } catch (e) {
      console.error("Error loading data:", e);
    } finally {
      setIsLoading(false);
    }
  };
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
  const previousStartDate = new Date(getDateRange());
  const days = timeRange === "7days" ? 7 : timeRange === "30days" ? 30 : 90;
  previousStartDate.setDate(previousStartDate.getDate() - days);
  const previousOrders = orders.filter((o) => {
    const date = new Date(o.created_date);
    return date >= previousStartDate && date < getDateRange();
  });
  const previousRevenue = previousOrders.reduce((sum, o) => sum + (o.total_amount || 0), 0);
  const revenueGrowth = previousRevenue > 0 ? ((totalRevenue - previousRevenue) / previousRevenue * 100).toFixed(1) : 0;
  const dailyData = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    const dayOrders = completedOrders.filter((o) => {
      const orderDate = new Date(o.created_date);
      return orderDate.toDateString() === date.toDateString();
    });
    dailyData.push({
      date: date.toLocaleDateString("en-US", { weekday: "short" }),
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
  if (isLoading) {
    return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:127:6", "data-dynamic-content": "false", className: "flex items-center justify-center h-64", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:128:8", "data-dynamic-content": "false", className: "animate-spin rounded-full h-8 w-8 border-b-2 border-violet-600" }, void 0, false, {
      fileName: "/app/src/pages/Analytics.jsx",
      lineNumber: 147,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/Analytics.jsx",
      lineNumber: 146,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:134:4", "data-dynamic-content": "true", className: "space-y-6", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:136:6", "data-dynamic-content": "true", className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:137:8", "data-dynamic-content": "false", children: [
        /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/Analytics:138:10", "data-dynamic-content": "false", className: "text-2xl font-bold text-gray-900", children: "Analytics" }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 157,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Analytics:139:10", "data-dynamic-content": "false", className: "text-gray-500", children: "Track your restaurant performance" }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 158,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Analytics.jsx",
        lineNumber: 156,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Tabs, { "data-source-location": "pages/Analytics:141:8", "data-dynamic-content": "true", value: timeRange, onValueChange: setTimeRange, children: /* @__PURE__ */ jsxDEV(TabsList, { "data-source-location": "pages/Analytics:142:10", "data-dynamic-content": "false", children: [
        /* @__PURE__ */ jsxDEV(TabsTrigger, { "data-source-location": "pages/Analytics:143:12", "data-dynamic-content": "false", value: "7days", children: "7 Days" }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 162,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(TabsTrigger, { "data-source-location": "pages/Analytics:144:12", "data-dynamic-content": "false", value: "30days", children: "30 Days" }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 163,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(TabsTrigger, { "data-source-location": "pages/Analytics:145:12", "data-dynamic-content": "false", value: "90days", children: "90 Days" }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 164,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Analytics.jsx",
        lineNumber: 161,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Analytics.jsx",
        lineNumber: 160,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Analytics.jsx",
      lineNumber: 155,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:151:6", "data-dynamic-content": "true", className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/Analytics:152:8", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/Analytics:153:10", "data-dynamic-content": "true", className: "p-6", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:154:12", "data-dynamic-content": "true", className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:155:14", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Analytics:156:16", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Total Revenue" }, void 0, false, {
            fileName: "/app/src/pages/Analytics.jsx",
            lineNumber: 175,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Analytics:157:16", "data-dynamic-content": "true", className: "text-3xl font-bold text-gray-900", children: [
            "₹",
            totalRevenue.toLocaleString()
          ] }, void 0, true, {
            fileName: "/app/src/pages/Analytics.jsx",
            lineNumber: 176,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:158:16", "data-dynamic-content": "true", className: `flex items-center gap-1 mt-2 text-sm ${revenueGrowth >= 0 ? "text-green-600" : "text-red-600"}`, children: [
            revenueGrowth >= 0 ? /* @__PURE__ */ jsxDEV(TrendingUp, { "data-source-location": "pages/Analytics:161:40", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
              fileName: "/app/src/pages/Analytics.jsx",
              lineNumber: 180,
              columnNumber: 41
            }, this) : /* @__PURE__ */ jsxDEV(TrendingDown, { "data-source-location": "pages/Analytics:161:77", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
              fileName: "/app/src/pages/Analytics.jsx",
              lineNumber: 180,
              columnNumber: 153
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Analytics:162:18", "data-dynamic-content": "true", "data-collection-item-field": "revenueGrowth", "data-collection-item-id": id, children: [
              revenueGrowth,
              "% vs previous"
            ] }, void 0, true, {
              fileName: "/app/src/pages/Analytics.jsx",
              lineNumber: 181,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Analytics.jsx",
            lineNumber: 177,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 174,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:165:14", "data-dynamic-content": "false", className: "p-3 bg-violet-100 rounded-xl", children: /* @__PURE__ */ jsxDEV(IndianRupee, { "data-source-location": "pages/Analytics:166:16", "data-dynamic-content": "false", className: "w-6 h-6 text-violet-600" }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 185,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 184,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Analytics.jsx",
        lineNumber: 173,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Analytics.jsx",
        lineNumber: 172,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Analytics.jsx",
        lineNumber: 171,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/Analytics:172:8", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/Analytics:173:10", "data-dynamic-content": "true", className: "p-6", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:174:12", "data-dynamic-content": "true", className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:175:14", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Analytics:176:16", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Total Orders" }, void 0, false, {
            fileName: "/app/src/pages/Analytics.jsx",
            lineNumber: 195,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Analytics:177:16", "data-dynamic-content": "true", className: "text-3xl font-bold text-gray-900", "data-collection-item-field": "totalOrders", "data-collection-item-id": id, children: totalOrders }, void 0, false, {
            fileName: "/app/src/pages/Analytics.jsx",
            lineNumber: 196,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Analytics:178:16", "data-dynamic-content": "true", className: "text-sm text-gray-500 mt-2", children: [
            "~",
            Math.round(totalOrders / (timeRange === "7days" ? 7 : timeRange === "30days" ? 30 : 90)),
            " per day"
          ] }, void 0, true, {
            fileName: "/app/src/pages/Analytics.jsx",
            lineNumber: 197,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 194,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:182:14", "data-dynamic-content": "false", className: "p-3 bg-blue-100 rounded-xl", children: /* @__PURE__ */ jsxDEV(ShoppingBag, { "data-source-location": "pages/Analytics:183:16", "data-dynamic-content": "false", className: "w-6 h-6 text-blue-600" }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 202,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 201,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Analytics.jsx",
        lineNumber: 193,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Analytics.jsx",
        lineNumber: 192,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Analytics.jsx",
        lineNumber: 191,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/Analytics:189:8", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/Analytics:190:10", "data-dynamic-content": "true", className: "p-6", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:191:12", "data-dynamic-content": "true", className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:192:14", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Analytics:193:16", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Avg Order Value" }, void 0, false, {
            fileName: "/app/src/pages/Analytics.jsx",
            lineNumber: 212,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Analytics:194:16", "data-dynamic-content": "true", className: "text-3xl font-bold text-gray-900", children: [
            "₹",
            Math.round(avgOrderValue)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Analytics.jsx",
            lineNumber: 213,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Analytics:195:16", "data-dynamic-content": "false", className: "text-sm text-gray-500 mt-2", children: "Per transaction" }, void 0, false, {
            fileName: "/app/src/pages/Analytics.jsx",
            lineNumber: 214,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 211,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:199:14", "data-dynamic-content": "false", className: "p-3 bg-green-100 rounded-xl", children: /* @__PURE__ */ jsxDEV(ArrowUpRight, { "data-source-location": "pages/Analytics:200:16", "data-dynamic-content": "false", className: "w-6 h-6 text-green-600" }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 219,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 218,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Analytics.jsx",
        lineNumber: 210,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Analytics.jsx",
        lineNumber: 209,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Analytics.jsx",
        lineNumber: 208,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/Analytics:206:8", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/Analytics:207:10", "data-dynamic-content": "true", className: "p-6", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:208:12", "data-dynamic-content": "true", className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:209:14", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Analytics:210:16", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Menu Items" }, void 0, false, {
            fileName: "/app/src/pages/Analytics.jsx",
            lineNumber: 229,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Analytics:211:16", "data-dynamic-content": "true", className: "text-3xl font-bold text-gray-900", children: menuItems.length }, void 0, false, {
            fileName: "/app/src/pages/Analytics.jsx",
            lineNumber: 230,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Analytics:212:16", "data-dynamic-content": "true", className: "text-sm text-gray-500 mt-2", children: [
            menuItems.filter((m) => m.is_available).length,
            " available"
          ] }, void 0, true, {
            fileName: "/app/src/pages/Analytics.jsx",
            lineNumber: 231,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 228,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:216:14", "data-dynamic-content": "false", className: "p-3 bg-orange-100 rounded-xl", children: /* @__PURE__ */ jsxDEV(Clock, { "data-source-location": "pages/Analytics:217:16", "data-dynamic-content": "false", className: "w-6 h-6 text-orange-600" }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 236,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 235,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Analytics.jsx",
        lineNumber: 227,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Analytics.jsx",
        lineNumber: 226,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Analytics.jsx",
        lineNumber: 225,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Analytics.jsx",
      lineNumber: 170,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:225:6", "data-dynamic-content": "true", className: "grid lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/Analytics:227:8", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "pages/Analytics:228:10", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "pages/Analytics:229:12", "data-dynamic-content": "false", className: "text-lg", children: "Revenue Trend" }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 248,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 247,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/Analytics:231:10", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:232:12", "data-dynamic-content": "true", className: "h-72", children: /* @__PURE__ */ jsxDEV(ResponsiveContainer, { "data-source-location": "pages/Analytics:233:14", "data-dynamic-content": "true", width: "100%", height: "100%", children: /* @__PURE__ */ jsxDEV(LineChart, { "data-source-location": "pages/Analytics:234:16", "data-dynamic-content": "true", data: dailyData, children: [
          /* @__PURE__ */ jsxDEV(CartesianGrid, { "data-source-location": "pages/Analytics:235:18", "data-dynamic-content": "false", strokeDasharray: "3 3", stroke: "#f0f0f0" }, void 0, false, {
            fileName: "/app/src/pages/Analytics.jsx",
            lineNumber: 254,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV(XAxis, { "data-source-location": "pages/Analytics:236:18", "data-dynamic-content": "false", dataKey: "date", stroke: "#9ca3af", fontSize: 12 }, void 0, false, {
            fileName: "/app/src/pages/Analytics.jsx",
            lineNumber: 255,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV(YAxis, { "data-source-location": "pages/Analytics:237:18", "data-dynamic-content": "false", stroke: "#9ca3af", fontSize: 12 }, void 0, false, {
            fileName: "/app/src/pages/Analytics.jsx",
            lineNumber: 256,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV(
            Tooltip,
            {
              "data-source-location": "pages/Analytics:238:18",
              "data-dynamic-content": "true",
              formatter: (value) => [`₹${value.toLocaleString()}`, "Revenue"],
              contentStyle: { borderRadius: 8, border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }
            },
            void 0,
            false,
            {
              fileName: "/app/src/pages/Analytics.jsx",
              lineNumber: 257,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Line,
            {
              "data-source-location": "pages/Analytics:242:18",
              "data-dynamic-content": "true",
              type: "monotone",
              dataKey: "revenue",
              stroke: "#7c3aed",
              strokeWidth: 3,
              dot: { fill: "#7c3aed", strokeWidth: 2, r: 4 }
            },
            void 0,
            false,
            {
              fileName: "/app/src/pages/Analytics.jsx",
              lineNumber: 261,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 253,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 252,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 251,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 250,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Analytics.jsx",
        lineNumber: 246,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/Analytics:256:8", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "pages/Analytics:257:10", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "pages/Analytics:258:12", "data-dynamic-content": "false", className: "text-lg", children: "Orders Trend" }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 277,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 276,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/Analytics:260:10", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:261:12", "data-dynamic-content": "true", className: "h-72", children: /* @__PURE__ */ jsxDEV(ResponsiveContainer, { "data-source-location": "pages/Analytics:262:14", "data-dynamic-content": "true", width: "100%", height: "100%", children: /* @__PURE__ */ jsxDEV(BarChart, { "data-source-location": "pages/Analytics:263:16", "data-dynamic-content": "true", data: dailyData, children: [
          /* @__PURE__ */ jsxDEV(CartesianGrid, { "data-source-location": "pages/Analytics:264:18", "data-dynamic-content": "false", strokeDasharray: "3 3", stroke: "#f0f0f0" }, void 0, false, {
            fileName: "/app/src/pages/Analytics.jsx",
            lineNumber: 283,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV(XAxis, { "data-source-location": "pages/Analytics:265:18", "data-dynamic-content": "false", dataKey: "date", stroke: "#9ca3af", fontSize: 12 }, void 0, false, {
            fileName: "/app/src/pages/Analytics.jsx",
            lineNumber: 284,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV(YAxis, { "data-source-location": "pages/Analytics:266:18", "data-dynamic-content": "false", stroke: "#9ca3af", fontSize: 12 }, void 0, false, {
            fileName: "/app/src/pages/Analytics.jsx",
            lineNumber: 285,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV(
            Tooltip,
            {
              "data-source-location": "pages/Analytics:267:18",
              "data-dynamic-content": "true",
              formatter: (value) => [value, "Orders"],
              contentStyle: { borderRadius: 8, border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }
            },
            void 0,
            false,
            {
              fileName: "/app/src/pages/Analytics.jsx",
              lineNumber: 286,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(Bar, { "data-source-location": "pages/Analytics:271:18", "data-dynamic-content": "true", dataKey: "orders", fill: "#3b82f6", radius: [4, 4, 0, 0] }, void 0, false, {
            fileName: "/app/src/pages/Analytics.jsx",
            lineNumber: 290,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 282,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 281,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 280,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 279,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Analytics.jsx",
        lineNumber: 275,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Analytics.jsx",
      lineNumber: 244,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:280:6", "data-dynamic-content": "true", className: "grid lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/Analytics:282:8", "data-dynamic-content": "true", className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "pages/Analytics:283:10", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "pages/Analytics:284:12", "data-dynamic-content": "false", className: "text-lg", children: "Top Selling Items" }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 303,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 302,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/Analytics:286:10", "data-dynamic-content": "true", children: topItems.length === 0 ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:288:14", "data-dynamic-content": "false", className: "text-center py-8 text-gray-500", children: "No sales data available" }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 307,
          columnNumber: 13
        }, this) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:292:14", "data-dynamic-content": "true", className: "space-y-4", children: topItems.map(
          (item, index) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:294:18", "data-dynamic-content": "true", className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Analytics:295:20", "data-dynamic-content": "true", className: "text-lg font-bold text-gray-400 w-6", children: [
              "#",
              index + 1
            ] }, void 0, true, {
              fileName: "/app/src/pages/Analytics.jsx",
              lineNumber: 314,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:296:20", "data-dynamic-content": "true", className: "flex-1", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Analytics:297:22", "data-dynamic-content": "true", className: "font-medium", "data-collection-item-field": "name", "data-collection-item-id": item?.id || item?._id, children: item.name }, void 0, false, {
                fileName: "/app/src/pages/Analytics.jsx",
                lineNumber: 316,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Analytics:298:22", "data-dynamic-content": "true", className: "text-sm text-gray-500", "data-collection-item-field": "quantity", "data-collection-item-id": item?.id || item?._id, children: [
                item.quantity,
                " sold"
              ] }, void 0, true, {
                fileName: "/app/src/pages/Analytics.jsx",
                lineNumber: 317,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Analytics.jsx",
              lineNumber: 315,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:300:20", "data-dynamic-content": "true", className: "text-right", children: /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Analytics:301:22", "data-dynamic-content": "true", className: "font-bold", "data-collection-item-field": "revenue", "data-collection-item-id": item?.id || item?._id, children: [
              "₹",
              item.revenue.toLocaleString()
            ] }, void 0, true, {
              fileName: "/app/src/pages/Analytics.jsx",
              lineNumber: 320,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "/app/src/pages/Analytics.jsx",
              lineNumber: 319,
              columnNumber: 21
            }, this)
          ] }, item.name, true, {
            fileName: "/app/src/pages/Analytics.jsx",
            lineNumber: 313,
            columnNumber: 15
          }, this)
        ) }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 311,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 305,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Analytics.jsx",
        lineNumber: 301,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/Analytics:311:8", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "pages/Analytics:312:10", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "pages/Analytics:313:12", "data-dynamic-content": "false", className: "text-lg", children: "Order Types" }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 332,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 331,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/Analytics:315:10", "data-dynamic-content": "true", children: orderTypeData.length === 0 ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:317:14", "data-dynamic-content": "false", className: "text-center py-8 text-gray-500", children: "No data available" }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 336,
          columnNumber: 13
        }, this) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:321:14", "data-dynamic-content": "true", className: "h-48", children: [
          /* @__PURE__ */ jsxDEV(ResponsiveContainer, { "data-source-location": "pages/Analytics:322:16", "data-dynamic-content": "true", width: "100%", height: "100%", children: /* @__PURE__ */ jsxDEV(PieChart, { "data-source-location": "pages/Analytics:323:18", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV(
              Pie,
              {
                "data-source-location": "pages/Analytics:324:20",
                "data-dynamic-content": "true",
                data: orderTypeData,
                cx: "50%",
                cy: "50%",
                innerRadius: 50,
                outerRadius: 80,
                paddingAngle: 2,
                dataKey: "value",
                children: orderTypeData.map(
                  (entry, index) => /* @__PURE__ */ jsxDEV(Cell, { "data-source-location": "pages/Analytics:334:24", "data-dynamic-content": "true", fill: COLORS[index % COLORS.length] }, entry.name, false, {
                    fileName: "/app/src/pages/Analytics.jsx",
                    lineNumber: 353,
                    columnNumber: 21
                  }, this)
                )
              },
              void 0,
              false,
              {
                fileName: "/app/src/pages/Analytics.jsx",
                lineNumber: 343,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(Tooltip, { "data-source-location": "pages/Analytics:337:20", "data-dynamic-content": "false" }, void 0, false, {
              fileName: "/app/src/pages/Analytics.jsx",
              lineNumber: 356,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Analytics.jsx",
            lineNumber: 342,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/Analytics.jsx",
            lineNumber: 341,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:340:16", "data-dynamic-content": "true", className: "flex justify-center gap-4 mt-2", children: orderTypeData.map(
            (entry, index) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:342:20", "data-dynamic-content": "true", className: "flex items-center gap-2 text-sm", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:343:22", "data-dynamic-content": "true", className: "w-3 h-3 rounded-full", style: { backgroundColor: COLORS[index % COLORS.length] } }, void 0, false, {
                fileName: "/app/src/pages/Analytics.jsx",
                lineNumber: 362,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Analytics:344:22", "data-dynamic-content": "true", className: "capitalize", "data-collection-item-field": "name", "data-collection-item-id": entry?.id || entry?._id, children: entry.name }, void 0, false, {
                fileName: "/app/src/pages/Analytics.jsx",
                lineNumber: 363,
                columnNumber: 23
              }, this)
            ] }, entry.name, true, {
              fileName: "/app/src/pages/Analytics.jsx",
              lineNumber: 361,
              columnNumber: 17
            }, this)
          ) }, void 0, false, {
            fileName: "/app/src/pages/Analytics.jsx",
            lineNumber: 359,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 340,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 334,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Analytics.jsx",
        lineNumber: 330,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Analytics.jsx",
      lineNumber: 299,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/Analytics:355:6", "data-dynamic-content": "true", children: [
      /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "pages/Analytics:356:8", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "pages/Analytics:357:10", "data-dynamic-content": "false", className: "text-lg", children: "Peak Hours" }, void 0, false, {
        fileName: "/app/src/pages/Analytics.jsx",
        lineNumber: 376,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Analytics.jsx",
        lineNumber: 375,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/Analytics:359:8", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:360:10", "data-dynamic-content": "true", className: "h-64", children: /* @__PURE__ */ jsxDEV(ResponsiveContainer, { "data-source-location": "pages/Analytics:361:12", "data-dynamic-content": "true", width: "100%", height: "100%", children: /* @__PURE__ */ jsxDEV(BarChart, { "data-source-location": "pages/Analytics:362:14", "data-dynamic-content": "true", data: peakHoursData, children: [
        /* @__PURE__ */ jsxDEV(CartesianGrid, { "data-source-location": "pages/Analytics:363:16", "data-dynamic-content": "false", strokeDasharray: "3 3", stroke: "#f0f0f0" }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 382,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV(XAxis, { "data-source-location": "pages/Analytics:364:16", "data-dynamic-content": "false", dataKey: "hour", stroke: "#9ca3af", fontSize: 10 }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 383,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV(YAxis, { "data-source-location": "pages/Analytics:365:16", "data-dynamic-content": "false", stroke: "#9ca3af", fontSize: 12 }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 384,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV(
          Tooltip,
          {
            "data-source-location": "pages/Analytics:366:16",
            "data-dynamic-content": "true",
            formatter: (value) => [value, "Orders"],
            contentStyle: { borderRadius: 8, border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }
          },
          void 0,
          false,
          {
            fileName: "/app/src/pages/Analytics.jsx",
            lineNumber: 385,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(Bar, { "data-source-location": "pages/Analytics:370:16", "data-dynamic-content": "true", dataKey: "orders", fill: "#10b981", radius: [4, 4, 0, 0] }, void 0, false, {
          fileName: "/app/src/pages/Analytics.jsx",
          lineNumber: 389,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Analytics.jsx",
        lineNumber: 381,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Analytics.jsx",
        lineNumber: 380,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Analytics.jsx",
        lineNumber: 379,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Analytics.jsx",
        lineNumber: 378,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Analytics.jsx",
      lineNumber: 374,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/Analytics.jsx",
    lineNumber: 153,
    columnNumber: 5
  }, this);
}
_s(AnalyticsContent, "xcCzTxJHw4c2WE544UMaHvRxqBU=");
_c = AnalyticsContent;
export default function Analytics() {
  _s2();
  const [user, setUser] = useState(null);
  const [restaurant, setRestaurant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    loadUserAndRestaurant();
  }, []);
  const loadUserAndRestaurant = async () => {
    try {
      const isAuth = await base44.auth.isAuthenticated();
      if (!isAuth) {
        window.location.href = "/Home";
        return;
      }
      const userData = await base44.auth.me();
      setUser(userData);
      if (!userData?.restaurant_id) {
        window.location.href = "/GetStarted";
        return;
      }
      const restaurants = await base44.entities.Restaurant.filter({
        restaurant_id: userData.restaurant_id
      });
      if (restaurants.length === 0) {
        window.location.href = "/GetStarted";
        return;
      }
      setRestaurant(restaurants[0]);
    } catch (e) {
      console.error("Error loading data:", e);
      window.location.href = "/Home";
    } finally {
      setIsLoading(false);
    }
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:425:6", "data-dynamic-content": "false", className: "min-h-screen flex items-center justify-center bg-gray-50", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:426:8", "data-dynamic-content": "false", className: "text-center", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Analytics:427:10", "data-dynamic-content": "false", className: "animate-spin rounded-full h-10 w-10 border-b-2 border-orange-600 mx-auto mb-4" }, void 0, false, {
        fileName: "/app/src/pages/Analytics.jsx",
        lineNumber: 446,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Analytics:428:10", "data-dynamic-content": "false", className: "text-gray-500", children: "Loading..." }, void 0, false, {
        fileName: "/app/src/pages/Analytics.jsx",
        lineNumber: 447,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Analytics.jsx",
      lineNumber: 445,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/Analytics.jsx",
      lineNumber: 444,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV(DashboardLayout, { "data-source-location": "pages/Analytics:435:4", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(AnalyticsContent, { "data-source-location": "pages/Analytics:436:6", "data-dynamic-content": "true", user, restaurant }, void 0, false, {
    fileName: "/app/src/pages/Analytics.jsx",
    lineNumber: 455,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/src/pages/Analytics.jsx",
    lineNumber: 454,
    columnNumber: 5
  }, this);
}
_s2(Analytics, "tTneP5MDuuLRGM0Xo7tLhZ5057o=");
_c2 = Analytics;
var _c, _c2;
$RefreshReg$(_c, "AnalyticsContent");
$RefreshReg$(_c2, "Analytics");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/Analytics.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/Analytics.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBK0hROzs7Ozs7Ozs7Ozs7Ozs7OztBQS9IUixPQUFPQSxTQUFTQyxVQUFVQyxpQkFBaUI7QUFDM0MsU0FBU0MsY0FBYztBQUN2QixPQUFPQyxxQkFBcUI7QUFDNUI7QUFBQSxFQUNFQztBQUFBQSxFQUFZQztBQUFBQSxFQUFjQztBQUFBQSxFQUFhQztBQUFBQSxFQUN2Q0M7QUFBQUEsRUFBT0M7QUFBQUEsRUFBT0M7QUFBQUEsRUFBVUM7QUFBQUEsT0FDMUI7QUFDQSxTQUFTQyxNQUFNQyxhQUFhQyxZQUFZQyxpQkFBaUI7QUFDekQsU0FBU0MsY0FBYztBQUN2QixTQUFTQyxNQUFNQyxVQUFVQyxtQkFBbUI7QUFDNUM7QUFBQSxFQUNFQztBQUFBQSxFQUFXQztBQUFBQSxFQUFNQztBQUFBQSxFQUFPQztBQUFBQSxFQUFPQztBQUFBQSxFQUMvQkM7QUFBQUEsRUFBU0M7QUFBQUEsRUFBcUJDO0FBQUFBLEVBQVVDO0FBQUFBLEVBQ3hDQztBQUFBQSxFQUFVQztBQUFBQSxFQUFLQztBQUFBQSxPQUNqQjtBQUVBLE1BQU1DLFNBQVMsQ0FBQyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsU0FBUztBQUVoRixTQUFTQyxpQkFBaUIsRUFBRUMsTUFBTUMsWUFBWUMsR0FBRyxHQUFHO0FBQUFDLEtBQUE7QUFDbEQsUUFBTSxDQUFDQyxRQUFRQyxTQUFTLElBQUl2QyxTQUFTLEVBQUU7QUFDdkMsUUFBTSxDQUFDd0MsV0FBV0MsWUFBWSxJQUFJekMsU0FBUyxFQUFFO0FBQzdDLFFBQU0sQ0FBQzBDLFdBQVdDLFlBQVksSUFBSTNDLFNBQVMsSUFBSTtBQUMvQyxRQUFNLENBQUM0QyxXQUFXQyxZQUFZLElBQUk3QyxTQUFTLE9BQU87QUFFbERDLFlBQVUsTUFBTTtBQUNkLFFBQUlrQyxZQUFZVyxlQUFlO0FBQzdCQyxlQUFTO0FBQUEsSUFDWDtBQUFBLEVBQ0YsR0FBRyxDQUFDWixVQUFVLENBQUM7QUFFZixRQUFNWSxXQUFXLFlBQVk7QUFDM0IsUUFBSTtBQUNGLFlBQU0sQ0FBQ0MsWUFBWUMsUUFBUSxJQUFJLE1BQU1DLFFBQVFDO0FBQUFBLFFBQUk7QUFBQSxVQUNqRGpELE9BQU9rRCxTQUFTQyxNQUFNQyxPQUFPLEVBQUVSLGVBQWVYLFdBQVdXLGNBQWMsR0FBRyxpQkFBaUIsR0FBRztBQUFBLFVBQzlGNUMsT0FBT2tELFNBQVNHLFNBQVNELE9BQU8sRUFBRVIsZUFBZVgsV0FBV1csY0FBYyxDQUFDO0FBQUEsUUFBQztBQUFBLE1BQzVFO0FBQ0FQLGdCQUFVUyxVQUFVO0FBQ3BCUCxtQkFBYVEsUUFBUTtBQUFBLElBQ3ZCLFNBQVNPLEdBQUc7QUFDVkMsY0FBUUMsTUFBTSx1QkFBdUJGLENBQUM7QUFBQSxJQUN4QyxVQUFDO0FBQ0NiLG1CQUFhLEtBQUs7QUFBQSxJQUNwQjtBQUFBLEVBQ0Y7QUFHQSxRQUFNZ0IsTUFBTSxvQkFBSUMsS0FBSztBQUNyQixRQUFNQyxlQUFlQSxNQUFNO0FBQ3pCLFVBQU1DLFFBQU9sQixjQUFjLFVBQVUsSUFBSUEsY0FBYyxXQUFXLEtBQUs7QUFDdkUsVUFBTW1CLFlBQVksSUFBSUgsS0FBS0QsR0FBRztBQUM5QkksY0FBVUMsUUFBUUQsVUFBVUUsUUFBUSxJQUFJSCxLQUFJO0FBQzVDLFdBQU9DO0FBQUFBLEVBQ1Q7QUFFQSxRQUFNRyxpQkFBaUI1QixPQUFPZ0IsT0FBTyxDQUFDYSxNQUFNLElBQUlQLEtBQUtPLEVBQUVDLFlBQVksS0FBS1AsYUFBYSxDQUFDO0FBQ3RGLFFBQU1RLGtCQUFrQkgsZUFBZVosT0FBTyxDQUFDYSxNQUFNQSxFQUFFRyxXQUFXLGVBQWVILEVBQUVJLG1CQUFtQixNQUFNO0FBRzVHLFFBQU1DLGVBQWVILGdCQUFnQkksT0FBTyxDQUFDQyxLQUFLUCxNQUFNTyxPQUFPUCxFQUFFUSxnQkFBZ0IsSUFBSSxDQUFDO0FBQ3RGLFFBQU1DLGNBQWNQLGdCQUFnQlE7QUFDcEMsUUFBTUMsZ0JBQWdCRixjQUFjLElBQUlKLGVBQWVJLGNBQWM7QUFHckUsUUFBTUcsb0JBQW9CLElBQUluQixLQUFLQyxhQUFhLENBQUM7QUFDakQsUUFBTUMsT0FBT2xCLGNBQWMsVUFBVSxJQUFJQSxjQUFjLFdBQVcsS0FBSztBQUN2RW1DLG9CQUFrQmYsUUFBUWUsa0JBQWtCZCxRQUFRLElBQUlILElBQUk7QUFDNUQsUUFBTWtCLGlCQUFpQjFDLE9BQU9nQixPQUFPLENBQUNhLE1BQU07QUFDMUMsVUFBTWMsT0FBTyxJQUFJckIsS0FBS08sRUFBRUMsWUFBWTtBQUNwQyxXQUFPYSxRQUFRRixxQkFBcUJFLE9BQU9wQixhQUFhO0FBQUEsRUFDMUQsQ0FBQztBQUNELFFBQU1xQixrQkFBa0JGLGVBQWVQLE9BQU8sQ0FBQ0MsS0FBS1AsTUFBTU8sT0FBT1AsRUFBRVEsZ0JBQWdCLElBQUksQ0FBQztBQUN4RixRQUFNUSxnQkFBZ0JELGtCQUFrQixNQUFNVixlQUFlVSxtQkFBbUJBLGtCQUFrQixLQUFLRSxRQUFRLENBQUMsSUFBSTtBQUdwSCxRQUFNQyxZQUFZO0FBQ2xCLFdBQVNDLElBQUksR0FBR0EsS0FBSyxHQUFHQSxLQUFLO0FBQzNCLFVBQU1MLE9BQU8sSUFBSXJCLEtBQUtELEdBQUc7QUFDekJzQixTQUFLakIsUUFBUWlCLEtBQUtoQixRQUFRLElBQUlxQixDQUFDO0FBQy9CLFVBQU1DLFlBQVlsQixnQkFBZ0JmLE9BQU8sQ0FBQ2EsTUFBTTtBQUM5QyxZQUFNcUIsWUFBWSxJQUFJNUIsS0FBS08sRUFBRUMsWUFBWTtBQUN6QyxhQUFPb0IsVUFBVUMsYUFBYSxNQUFNUixLQUFLUSxhQUFhO0FBQUEsSUFDeEQsQ0FBQztBQUNESixjQUFVSyxLQUFLO0FBQUEsTUFDYlQsTUFBTUEsS0FBS1UsbUJBQW1CLFNBQVMsRUFBRUMsU0FBUyxRQUFRLENBQUM7QUFBQSxNQUMzREMsU0FBU04sVUFBVWQsT0FBTyxDQUFDQyxLQUFLUCxNQUFNTyxPQUFPUCxFQUFFUSxnQkFBZ0IsSUFBSSxDQUFDO0FBQUEsTUFDcEVyQyxRQUFRaUQsVUFBVVY7QUFBQUEsSUFDcEIsQ0FBQztBQUFBLEVBQ0g7QUFHQSxRQUFNaUIsWUFBWSxDQUFDO0FBQ25CekIsa0JBQWdCMEIsUUFBUSxDQUFDQyxVQUFVO0FBQ2pDQSxVQUFNQyxPQUFPRixRQUFRLENBQUNHLFNBQVM7QUFDN0IsVUFBSSxDQUFDSixVQUFVSSxLQUFLQyxJQUFJLEdBQUc7QUFDekJMLGtCQUFVSSxLQUFLQyxJQUFJLElBQUksRUFBRUEsTUFBTUQsS0FBS0MsTUFBTUMsVUFBVSxHQUFHUCxTQUFTLEVBQUU7QUFBQSxNQUNwRTtBQUNBQyxnQkFBVUksS0FBS0MsSUFBSSxFQUFFQyxZQUFZRixLQUFLRSxZQUFZO0FBQ2xETixnQkFBVUksS0FBS0MsSUFBSSxFQUFFTixXQUFXSyxLQUFLRyxlQUFlO0FBQUEsSUFDdEQsQ0FBQztBQUFBLEVBQ0gsQ0FBQztBQUNELFFBQU1DLFdBQVdDLE9BQU9DLE9BQU9WLFNBQVMsRUFBRVcsS0FBSyxDQUFDQyxHQUFHQyxNQUFNQSxFQUFFZCxVQUFVYSxFQUFFYixPQUFPLEVBQUVlLE1BQU0sR0FBRyxDQUFDO0FBRzFGLFFBQU1DLGVBQWVDLE1BQU0sRUFBRSxFQUFFQyxLQUFLLENBQUM7QUFDckMxQyxrQkFBZ0IwQixRQUFRLENBQUNDLFVBQVU7QUFDakMsVUFBTWdCLE9BQU8sSUFBSXBELEtBQUtvQyxNQUFNNUIsWUFBWSxFQUFFNkMsU0FBUztBQUNuREosaUJBQWFHLElBQUk7QUFBQSxFQUNuQixDQUFDO0FBQ0QsUUFBTUUsZ0JBQWdCTCxhQUFhTSxJQUFJLENBQUNDLE9BQU9KLFVBQVU7QUFBQSxJQUN2REEsTUFBTSxHQUFHQSxJQUFJO0FBQUEsSUFDYjFFLFFBQVE4RTtBQUFBQSxFQUNWLEVBQUUsRUFBRTlELE9BQU8sQ0FBQytELEdBQUcvQixNQUFNQSxLQUFLLE1BQU1BLEtBQUssRUFBRTtBQUd2QyxRQUFNZ0MsYUFBYWpELGdCQUFnQkksT0FBTyxDQUFDOEMsS0FBS3ZCLFVBQVU7QUFDeEQsVUFBTXdCLE9BQU94QixNQUFNeUIsY0FBYztBQUNqQ0YsUUFBSUMsSUFBSSxLQUFLRCxJQUFJQyxJQUFJLEtBQUssS0FBSztBQUMvQixXQUFPRDtBQUFBQSxFQUNULEdBQUcsQ0FBQyxDQUFDO0FBQ0wsUUFBTUcsZ0JBQWdCbkIsT0FBT29CLFFBQVFMLFVBQVUsRUFBRUgsSUFBSSxDQUFDLENBQUNoQixNQUFNeUIsS0FBSyxPQUFPO0FBQUEsSUFDdkV6QixNQUFNQSxLQUFLMEIsUUFBUSxLQUFLLEdBQUc7QUFBQSxJQUMzQkQ7QUFBQUEsRUFDRixFQUFFO0FBRUYsTUFBSWxGLFdBQVc7QUFDYixXQUNFLHVCQUFDLFNBQUksd0JBQXFCLHlCQUF3Qix3QkFBcUIsU0FBUSxXQUFVLHlDQUN2RixpQ0FBQyxTQUFJLHdCQUFxQix5QkFBd0Isd0JBQXFCLFNBQVEsV0FBVSxvRUFBekY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUEwSixLQUQ1SjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRUE7QUFBQSxFQUVKO0FBRUEsU0FDRSx1QkFBQyxTQUFJLHdCQUFxQix5QkFBd0Isd0JBQXFCLFFBQU8sV0FBVSxhQUV0RjtBQUFBLDJCQUFDLFNBQUksd0JBQXFCLHlCQUF3Qix3QkFBcUIsUUFBTyxXQUFVLHNFQUN0RjtBQUFBLDZCQUFDLFNBQUksd0JBQXFCLHlCQUF3Qix3QkFBcUIsU0FDckU7QUFBQSwrQkFBQyxRQUFHLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFNBQVEsV0FBVSxvQ0FBbUMseUJBQTVIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBcUk7QUFBQSxRQUNySSx1QkFBQyxPQUFFLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFNBQVEsV0FBVSxpQkFBZ0IsaURBQXhHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBeUk7QUFBQSxXQUYzSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBR0E7QUFBQSxNQUNBLHVCQUFDLFFBQUssd0JBQXFCLHlCQUF3Qix3QkFBcUIsUUFBTyxPQUFPRSxXQUFXLGVBQWVDLGNBQzlHLGlDQUFDLFlBQVMsd0JBQXFCLDBCQUF5Qix3QkFBcUIsU0FDM0U7QUFBQSwrQkFBQyxlQUFZLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFNBQVEsT0FBTSxTQUFRLHNCQUF0RztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTRHO0FBQUEsUUFDNUcsdUJBQUMsZUFBWSx3QkFBcUIsMEJBQXlCLHdCQUFxQixTQUFRLE9BQU0sVUFBUyx1QkFBdkc7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUE4RztBQUFBLFFBQzlHLHVCQUFDLGVBQVksd0JBQXFCLDBCQUF5Qix3QkFBcUIsU0FBUSxPQUFNLFVBQVMsdUJBQXZHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBOEc7QUFBQSxXQUhoSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSUEsS0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTUE7QUFBQSxTQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FZQTtBQUFBLElBR0EsdUJBQUMsU0FBSSx3QkFBcUIseUJBQXdCLHdCQUFxQixRQUFPLFdBQVUsd0RBQ3RGO0FBQUEsNkJBQUMsUUFBSyx3QkFBcUIseUJBQXdCLHdCQUFxQixRQUN0RSxpQ0FBQyxlQUFZLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFFBQU8sV0FBVSxPQUMvRixpQ0FBQyxTQUFJLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFFBQU8sV0FBVSxvQ0FDdkY7QUFBQSwrQkFBQyxTQUFJLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFFBQ3RFO0FBQUEsaUNBQUMsT0FBRSx3QkFBcUIsMEJBQXlCLHdCQUFxQixTQUFRLFdBQVUseUJBQXdCLDZCQUFoSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUE2SDtBQUFBLFVBQzdILHVCQUFDLE9BQUUsd0JBQXFCLDBCQUF5Qix3QkFBcUIsUUFBTyxXQUFVLG9DQUFtQztBQUFBO0FBQUEsWUFBRTJCLGFBQWFzRCxlQUFlO0FBQUEsZUFBeEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBMEo7QUFBQSxVQUMxSix1QkFBQyxTQUFJLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFFBQU8sV0FBVyx3Q0FDMUYzQyxpQkFBaUIsSUFBSSxtQkFBbUIsY0FBYyxJQUVuREE7QUFBQUEsNkJBQWlCLElBQUksdUJBQUMsY0FBVyx3QkFBcUIsMEJBQXlCLHdCQUFxQixTQUFRLFdBQVUsYUFBakc7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBMEcsSUFBTSx1QkFBQyxnQkFBYSx3QkFBcUIsMEJBQXlCLHdCQUFxQixTQUFRLFdBQVUsYUFBbkc7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBNEc7QUFBQSxZQUNsUCx1QkFBQyxVQUFLLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFFBQU8sOEJBQTJCLGlCQUFnQiwyQkFBeUIvQyxJQUFLK0M7QUFBQUE7QUFBQUEsY0FBYztBQUFBLGlCQUF2SztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFvTDtBQUFBLGVBSnRMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBS0E7QUFBQSxhQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFTQTtBQUFBLFFBQ0EsdUJBQUMsU0FBSSx3QkFBcUIsMEJBQXlCLHdCQUFxQixTQUFRLFdBQVUsZ0NBQ3hGLGlDQUFDLGVBQVksd0JBQXFCLDBCQUF5Qix3QkFBcUIsU0FBUSxXQUFVLDZCQUFsRztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTJILEtBRDdIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFFQTtBQUFBLFdBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWNBLEtBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWdCQSxLQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBa0JBO0FBQUEsTUFFQSx1QkFBQyxRQUFLLHdCQUFxQix5QkFBd0Isd0JBQXFCLFFBQ3RFLGlDQUFDLGVBQVksd0JBQXFCLDBCQUF5Qix3QkFBcUIsUUFBTyxXQUFVLE9BQy9GLGlDQUFDLFNBQUksd0JBQXFCLDBCQUF5Qix3QkFBcUIsUUFBTyxXQUFVLG9DQUN2RjtBQUFBLCtCQUFDLFNBQUksd0JBQXFCLDBCQUF5Qix3QkFBcUIsUUFDdEU7QUFBQSxpQ0FBQyxPQUFFLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFNBQVEsV0FBVSx5QkFBd0IsNEJBQWhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQTRIO0FBQUEsVUFDNUgsdUJBQUMsT0FBRSx3QkFBcUIsMEJBQXlCLHdCQUFxQixRQUFPLFdBQVUsb0NBQW1DLDhCQUEyQixlQUFjLDJCQUF5Qi9DLElBQUt3Qyx5QkFBak07QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBNk07QUFBQSxVQUM3TSx1QkFBQyxPQUFFLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFFBQU8sV0FBVSw4QkFBNEI7QUFBQTtBQUFBLFlBQy9HbUQsS0FBS0MsTUFBTXBELGVBQWVoQyxjQUFjLFVBQVUsSUFBSUEsY0FBYyxXQUFXLEtBQUssR0FBRztBQUFBLFlBQUU7QUFBQSxlQUQ3RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUVBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTUE7QUFBQSxRQUNBLHVCQUFDLFNBQUksd0JBQXFCLDBCQUF5Qix3QkFBcUIsU0FBUSxXQUFVLDhCQUN4RixpQ0FBQyxlQUFZLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFNBQVEsV0FBVSwyQkFBbEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF5SCxLQUQzSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUE7QUFBQSxXQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFXQSxLQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFhQSxLQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFlQTtBQUFBLE1BRUEsdUJBQUMsUUFBSyx3QkFBcUIseUJBQXdCLHdCQUFxQixRQUN0RSxpQ0FBQyxlQUFZLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFFBQU8sV0FBVSxPQUMvRixpQ0FBQyxTQUFJLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFFBQU8sV0FBVSxvQ0FDdkY7QUFBQSwrQkFBQyxTQUFJLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFFBQ3RFO0FBQUEsaUNBQUMsT0FBRSx3QkFBcUIsMEJBQXlCLHdCQUFxQixTQUFRLFdBQVUseUJBQXdCLCtCQUFoSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUErSDtBQUFBLFVBQy9ILHVCQUFDLE9BQUUsd0JBQXFCLDBCQUF5Qix3QkFBcUIsUUFBTyxXQUFVLG9DQUFtQztBQUFBO0FBQUEsWUFBRW1GLEtBQUtDLE1BQU1sRCxhQUFhO0FBQUEsZUFBcEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBc0o7QUFBQSxVQUN0Six1QkFBQyxPQUFFLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFNBQVEsV0FBVSw4QkFBNEIsK0JBQXBIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFNQTtBQUFBLFFBQ0EsdUJBQUMsU0FBSSx3QkFBcUIsMEJBQXlCLHdCQUFxQixTQUFRLFdBQVUsK0JBQ3hGLGlDQUFDLGdCQUFhLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFNBQVEsV0FBVSw0QkFBbkc7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUEySCxLQUQ3SDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUE7QUFBQSxXQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFXQSxLQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFhQSxLQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFlQTtBQUFBLE1BRUEsdUJBQUMsUUFBSyx3QkFBcUIseUJBQXdCLHdCQUFxQixRQUN0RSxpQ0FBQyxlQUFZLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFFBQU8sV0FBVSxPQUMvRixpQ0FBQyxTQUFJLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFFBQU8sV0FBVSxvQ0FDdkY7QUFBQSwrQkFBQyxTQUFJLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFFBQ3RFO0FBQUEsaUNBQUMsT0FBRSx3QkFBcUIsMEJBQXlCLHdCQUFxQixTQUFRLFdBQVUseUJBQXdCLDBCQUFoSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUEwSDtBQUFBLFVBQzFILHVCQUFDLE9BQUUsd0JBQXFCLDBCQUF5Qix3QkFBcUIsUUFBTyxXQUFVLG9DQUFvQ3RDLG9CQUFVcUMsVUFBckk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBNEk7QUFBQSxVQUM1SSx1QkFBQyxPQUFFLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFFBQU8sV0FBVSw4QkFDcEZyQztBQUFBQSxzQkFBVWMsT0FBTyxDQUFDMkUsTUFBTUEsRUFBRUMsWUFBWSxFQUFFckQ7QUFBQUEsWUFBTztBQUFBLGVBRGxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFNQTtBQUFBLFFBQ0EsdUJBQUMsU0FBSSx3QkFBcUIsMEJBQXlCLHdCQUFxQixTQUFRLFdBQVUsZ0NBQ3hGLGlDQUFDLFNBQU0sd0JBQXFCLDBCQUF5Qix3QkFBcUIsU0FBUSxXQUFVLDZCQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXFILEtBRHZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFFQTtBQUFBLFdBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVdBLEtBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWFBLEtBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWVBO0FBQUEsU0F0RUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQXVFQTtBQUFBLElBR0EsdUJBQUMsU0FBSSx3QkFBcUIseUJBQXdCLHdCQUFxQixRQUFPLFdBQVUsNkJBRXRGO0FBQUEsNkJBQUMsUUFBSyx3QkFBcUIseUJBQXdCLHdCQUFxQixRQUN0RTtBQUFBLCtCQUFDLGNBQVcsd0JBQXFCLDBCQUF5Qix3QkFBcUIsU0FDN0UsaUNBQUMsYUFBVSx3QkFBcUIsMEJBQXlCLHdCQUFxQixTQUFRLFdBQVUsV0FBVSw2QkFBMUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF1SCxLQUR6SDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUE7QUFBQSxRQUNBLHVCQUFDLGVBQVksd0JBQXFCLDBCQUF5Qix3QkFBcUIsUUFDOUUsaUNBQUMsU0FBSSx3QkFBcUIsMEJBQXlCLHdCQUFxQixRQUFPLFdBQVUsUUFDdkYsaUNBQUMsdUJBQW9CLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFFBQU8sT0FBTSxRQUFPLFFBQU8sUUFDakgsaUNBQUMsYUFBVSx3QkFBcUIsMEJBQXlCLHdCQUFxQixRQUFPLE1BQU1RLFdBQ3pGO0FBQUEsaUNBQUMsaUJBQWMsd0JBQXFCLDBCQUF5Qix3QkFBcUIsU0FBUSxpQkFBZ0IsT0FBTSxRQUFPLGFBQXZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWdJO0FBQUEsVUFDaEksdUJBQUMsU0FBTSx3QkFBcUIsMEJBQXlCLHdCQUFxQixTQUFRLFNBQVEsUUFBTyxRQUFPLFdBQVUsVUFBVSxNQUE1SDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUErSDtBQUFBLFVBQy9ILHVCQUFDLFNBQU0sd0JBQXFCLDBCQUF5Qix3QkFBcUIsU0FBUSxRQUFPLFdBQVUsVUFBVSxNQUE3RztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFnSDtBQUFBLFVBQ2hIO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FBUSx3QkFBcUI7QUFBQSxjQUF5Qix3QkFBcUI7QUFBQSxjQUM1RSxXQUFXLENBQUN1QyxVQUFVLENBQUMsSUFBSUEsTUFBTUUsZUFBZSxDQUFDLElBQUksU0FBUztBQUFBLGNBQzlELGNBQWMsRUFBRUssY0FBYyxHQUFHQyxRQUFRLFFBQVFDLFdBQVcsa0NBQWtDO0FBQUE7QUFBQSxZQUY5RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFFZ0c7QUFBQSxVQUVoRztBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQUssd0JBQXFCO0FBQUEsY0FBeUIsd0JBQXFCO0FBQUEsY0FDekUsTUFBSztBQUFBLGNBQ0wsU0FBUTtBQUFBLGNBQ1IsUUFBTztBQUFBLGNBQ1AsYUFBYTtBQUFBLGNBQ2IsS0FBSyxFQUFFdEIsTUFBTSxXQUFXdUIsYUFBYSxHQUFHQyxHQUFHLEVBQUU7QUFBQTtBQUFBLFlBTDdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUsrQztBQUFBLGFBYmpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFlQSxLQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaUJBLEtBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFtQkEsS0FwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXFCQTtBQUFBLFdBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEwQkE7QUFBQSxNQUdBLHVCQUFDLFFBQUssd0JBQXFCLHlCQUF3Qix3QkFBcUIsUUFDdEU7QUFBQSwrQkFBQyxjQUFXLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFNBQzdFLGlDQUFDLGFBQVUsd0JBQXFCLDBCQUF5Qix3QkFBcUIsU0FBUSxXQUFVLFdBQVUsNEJBQTFHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBc0gsS0FEeEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUVBO0FBQUEsUUFDQSx1QkFBQyxlQUFZLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFFBQzlFLGlDQUFDLFNBQUksd0JBQXFCLDBCQUF5Qix3QkFBcUIsUUFBTyxXQUFVLFFBQ3ZGLGlDQUFDLHVCQUFvQix3QkFBcUIsMEJBQXlCLHdCQUFxQixRQUFPLE9BQU0sUUFBTyxRQUFPLFFBQ2pILGlDQUFDLFlBQVMsd0JBQXFCLDBCQUF5Qix3QkFBcUIsUUFBTyxNQUFNbEQsV0FDeEY7QUFBQSxpQ0FBQyxpQkFBYyx3QkFBcUIsMEJBQXlCLHdCQUFxQixTQUFRLGlCQUFnQixPQUFNLFFBQU8sYUFBdkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBZ0k7QUFBQSxVQUNoSSx1QkFBQyxTQUFNLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFNBQVEsU0FBUSxRQUFPLFFBQU8sV0FBVSxVQUFVLE1BQTVIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQStIO0FBQUEsVUFDL0gsdUJBQUMsU0FBTSx3QkFBcUIsMEJBQXlCLHdCQUFxQixTQUFRLFFBQU8sV0FBVSxVQUFVLE1BQTdHO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWdIO0FBQUEsVUFDaEg7QUFBQSxZQUFDO0FBQUE7QUFBQSxjQUFRLHdCQUFxQjtBQUFBLGNBQXlCLHdCQUFxQjtBQUFBLGNBQzVFLFdBQVcsQ0FBQ3VDLFVBQVUsQ0FBQ0EsT0FBTyxRQUFRO0FBQUEsY0FDdEMsY0FBYyxFQUFFTyxjQUFjLEdBQUdDLFFBQVEsUUFBUUMsV0FBVyxrQ0FBa0M7QUFBQTtBQUFBLFlBRjlGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUVnRztBQUFBLFVBRWhHLHVCQUFDLE9BQUksd0JBQXFCLDBCQUF5Qix3QkFBcUIsUUFBTyxTQUFRLFVBQVMsTUFBSyxXQUFVLFFBQVEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQWxJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQW9JO0FBQUEsYUFSdEk7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVNBLEtBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVdBLEtBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWFBLEtBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWVBO0FBQUEsV0FuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW9CQTtBQUFBLFNBbkRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FvREE7QUFBQSxJQUdBLHVCQUFDLFNBQUksd0JBQXFCLHlCQUF3Qix3QkFBcUIsUUFBTyxXQUFVLDZCQUV0RjtBQUFBLDZCQUFDLFFBQUssd0JBQXFCLHlCQUF3Qix3QkFBcUIsUUFBTyxXQUFVLGlCQUN2RjtBQUFBLCtCQUFDLGNBQVcsd0JBQXFCLDBCQUF5Qix3QkFBcUIsU0FDN0UsaUNBQUMsYUFBVSx3QkFBcUIsMEJBQXlCLHdCQUFxQixTQUFRLFdBQVUsV0FBVSxpQ0FBMUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUEySCxLQUQ3SDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUE7QUFBQSxRQUNBLHVCQUFDLGVBQVksd0JBQXFCLDBCQUF5Qix3QkFBcUIsUUFDN0UvQixtQkFBU3pCLFdBQVcsSUFDckIsdUJBQUMsU0FBSSx3QkFBcUIsMEJBQXlCLHdCQUFxQixTQUFRLFdBQVUsa0NBQWdDLHVDQUExSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUUsSUFFRix1QkFBQyxTQUFJLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFFBQU8sV0FBVSxhQUNwRnlCLG1CQUFTYTtBQUFBQSxVQUFJLENBQUNqQixNQUFNc0MsVUFDdkIsdUJBQUMsU0FBSSx3QkFBcUIsMEJBQXlCLHdCQUFxQixRQUF1QixXQUFVLDJCQUNuRztBQUFBLG1DQUFDLFVBQUssd0JBQXFCLDBCQUF5Qix3QkFBcUIsUUFBTyxXQUFVLHVDQUFzQztBQUFBO0FBQUEsY0FBRUEsUUFBUTtBQUFBLGlCQUExSTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUE0STtBQUFBLFlBQzVJLHVCQUFDLFNBQUksd0JBQXFCLDBCQUF5Qix3QkFBcUIsUUFBTyxXQUFVLFVBQ3ZGO0FBQUEscUNBQUMsT0FBRSx3QkFBcUIsMEJBQXlCLHdCQUFxQixRQUFPLFdBQVUsZUFBYyw4QkFBMkIsUUFBTywyQkFBeUJ0QyxNQUFNOUQsTUFBTThELE1BQU11QyxLQUFNdkMsZUFBS0MsUUFBN0w7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBa007QUFBQSxjQUNsTSx1QkFBQyxPQUFFLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFFBQU8sV0FBVSx5QkFBd0IsOEJBQTJCLFlBQVcsMkJBQXlCRCxNQUFNOUQsTUFBTThELE1BQU11QyxLQUFNdkM7QUFBQUEscUJBQUtFO0FBQUFBLGdCQUFTO0FBQUEsbUJBQXBOO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXlOO0FBQUEsaUJBRjNOO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBR0E7QUFBQSxZQUNBLHVCQUFDLFNBQUksd0JBQXFCLDBCQUF5Qix3QkFBcUIsUUFBTyxXQUFVLGNBQ3ZGLGlDQUFDLE9BQUUsd0JBQXFCLDBCQUF5Qix3QkFBcUIsUUFBTyxXQUFVLGFBQVksOEJBQTJCLFdBQVUsMkJBQXlCRixNQUFNOUQsTUFBTThELE1BQU11QyxLQUFLO0FBQUE7QUFBQSxjQUFFdkMsS0FBS0wsUUFBUWlDLGVBQWU7QUFBQSxpQkFBdE47QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBd04sS0FEMU47QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFQTtBQUFBLGVBUjhFNUIsS0FBS0MsTUFBekY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFTSTtBQUFBLFFBQ0osS0FaRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYUUsS0FuQko7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXFCQTtBQUFBLFdBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEwQkE7QUFBQSxNQUdBLHVCQUFDLFFBQUssd0JBQXFCLHlCQUF3Qix3QkFBcUIsUUFDdEU7QUFBQSwrQkFBQyxjQUFXLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFNBQzdFLGlDQUFDLGFBQVUsd0JBQXFCLDBCQUF5Qix3QkFBcUIsU0FBUSxXQUFVLFdBQVUsMkJBQTFHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBcUgsS0FEdkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUVBO0FBQUEsUUFDQSx1QkFBQyxlQUFZLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFFBQzdFdUIsd0JBQWM3QyxXQUFXLElBQzFCLHVCQUFDLFNBQUksd0JBQXFCLDBCQUF5Qix3QkFBcUIsU0FBUSxXQUFVLGtDQUFnQyxpQ0FBMUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUVFLElBRUYsdUJBQUMsU0FBSSx3QkFBcUIsMEJBQXlCLHdCQUFxQixRQUFPLFdBQVUsUUFDckY7QUFBQSxpQ0FBQyx1QkFBb0Isd0JBQXFCLDBCQUF5Qix3QkFBcUIsUUFBTyxPQUFNLFFBQU8sUUFBTyxRQUNqSCxpQ0FBQyxZQUFTLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFFBQzNFO0FBQUE7QUFBQSxjQUFDO0FBQUE7QUFBQSxnQkFBSSx3QkFBcUI7QUFBQSxnQkFBeUIsd0JBQXFCO0FBQUEsZ0JBQzFFLE1BQU02QztBQUFBQSxnQkFDTixJQUFHO0FBQUEsZ0JBQ0gsSUFBRztBQUFBLGdCQUNILGFBQWE7QUFBQSxnQkFDYixhQUFhO0FBQUEsZ0JBQ2IsY0FBYztBQUFBLGdCQUNkLFNBQVE7QUFBQSxnQkFFSEEsd0JBQWNQO0FBQUFBLGtCQUFJLENBQUN1QixPQUFPRixVQUM3Qix1QkFBQyxRQUFLLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFFBQXdCLE1BQU14RyxPQUFPd0csUUFBUXhHLE9BQU82QyxNQUFNLEtBQTlDNkQsTUFBTXZDLE1BQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQXFJO0FBQUEsZ0JBQ3JJO0FBQUE7QUFBQSxjQVhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVlBO0FBQUEsWUFDQSx1QkFBQyxXQUFRLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFdBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQW1GO0FBQUEsZUFkckY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFlQSxLQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWlCQTtBQUFBLFVBQ0EsdUJBQUMsU0FBSSx3QkFBcUIsMEJBQXlCLHdCQUFxQixRQUFPLFdBQVUsa0NBQ3RGdUIsd0JBQWNQO0FBQUFBLFlBQUksQ0FBQ3VCLE9BQU9GLFVBQzdCLHVCQUFDLFNBQUksd0JBQXFCLDBCQUF5Qix3QkFBcUIsUUFBd0IsV0FBVSxtQ0FDcEc7QUFBQSxxQ0FBQyxTQUFJLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFFBQU8sV0FBVSx3QkFBdUIsT0FBTyxFQUFFRyxpQkFBaUIzRyxPQUFPd0csUUFBUXhHLE9BQU82QyxNQUFNLEVBQUUsS0FBeEs7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBMEs7QUFBQSxjQUMxSyx1QkFBQyxVQUFLLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFFBQU8sV0FBVSxjQUFhLDhCQUEyQixRQUFPLDJCQUF5QjZELE9BQU90RyxNQUFNc0csT0FBT0QsS0FBTUMsZ0JBQU12QyxRQUFsTTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUF1TTtBQUFBLGlCQUZ6SHVDLE1BQU12QyxNQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUdJO0FBQUEsVUFDSixLQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBT0E7QUFBQSxhQTFCSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBMkJFLEtBakNKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFtQ0E7QUFBQSxXQXZDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBd0NBO0FBQUEsU0F2RUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQXdFQTtBQUFBLElBR0EsdUJBQUMsUUFBSyx3QkFBcUIseUJBQXdCLHdCQUFxQixRQUN0RTtBQUFBLDZCQUFDLGNBQVcsd0JBQXFCLHlCQUF3Qix3QkFBcUIsU0FDNUUsaUNBQUMsYUFBVSx3QkFBcUIsMEJBQXlCLHdCQUFxQixTQUFRLFdBQVUsV0FBVSwwQkFBMUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFvSCxLQUR0SDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRUE7QUFBQSxNQUNBLHVCQUFDLGVBQVksd0JBQXFCLHlCQUF3Qix3QkFBcUIsUUFDN0UsaUNBQUMsU0FBSSx3QkFBcUIsMEJBQXlCLHdCQUFxQixRQUFPLFdBQVUsUUFDdkYsaUNBQUMsdUJBQW9CLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFFBQU8sT0FBTSxRQUFPLFFBQU8sUUFDakgsaUNBQUMsWUFBUyx3QkFBcUIsMEJBQXlCLHdCQUFxQixRQUFPLE1BQU1lLGVBQ3hGO0FBQUEsK0JBQUMsaUJBQWMsd0JBQXFCLDBCQUF5Qix3QkFBcUIsU0FBUSxpQkFBZ0IsT0FBTSxRQUFPLGFBQXZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBZ0k7QUFBQSxRQUNoSSx1QkFBQyxTQUFNLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFNBQVEsU0FBUSxRQUFPLFFBQU8sV0FBVSxVQUFVLE1BQTVIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBK0g7QUFBQSxRQUMvSCx1QkFBQyxTQUFNLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFNBQVEsUUFBTyxXQUFVLFVBQVUsTUFBN0c7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFnSDtBQUFBLFFBQ2hIO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFBUSx3QkFBcUI7QUFBQSxZQUF5Qix3QkFBcUI7QUFBQSxZQUM1RSxXQUFXLENBQUNVLFVBQVUsQ0FBQ0EsT0FBTyxRQUFRO0FBQUEsWUFDdEMsY0FBYyxFQUFFTyxjQUFjLEdBQUdDLFFBQVEsUUFBUUMsV0FBVyxrQ0FBa0M7QUFBQTtBQUFBLFVBRjlGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUVnRztBQUFBLFFBRWhHLHVCQUFDLE9BQUksd0JBQXFCLDBCQUF5Qix3QkFBcUIsUUFBTyxTQUFRLFVBQVMsTUFBSyxXQUFVLFFBQVEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQWxJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBb0k7QUFBQSxXQVJ0STtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBU0EsS0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBV0EsS0FaRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYUEsS0FkRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZUE7QUFBQSxTQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBb0JBO0FBQUEsT0FqUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWtQQTtBQUVKO0FBQUNoRyxHQXZXUUosa0JBQWdCO0FBQUEyRyxLQUFoQjNHO0FBeVdULHdCQUF3QjRHLFlBQVk7QUFBQUMsTUFBQTtBQUNsQyxRQUFNLENBQUM1RyxNQUFNNkcsT0FBTyxJQUFJL0ksU0FBUyxJQUFJO0FBQ3JDLFFBQU0sQ0FBQ21DLFlBQVk2RyxhQUFhLElBQUloSixTQUFTLElBQUk7QUFDakQsUUFBTSxDQUFDMEMsV0FBV0MsWUFBWSxJQUFJM0MsU0FBUyxJQUFJO0FBRS9DQyxZQUFVLE1BQU07QUFDZGdKLDBCQUFzQjtBQUFBLEVBQ3hCLEdBQUcsRUFBRTtBQUVMLFFBQU1BLHdCQUF3QixZQUFZO0FBQ3hDLFFBQUk7QUFDRixZQUFNQyxTQUFTLE1BQU1oSixPQUFPaUosS0FBS0MsZ0JBQWdCO0FBQ2pELFVBQUksQ0FBQ0YsUUFBUTtBQUNYRyxlQUFPQyxTQUFTQyxPQUFPO0FBQ3ZCO0FBQUEsTUFDRjtBQUVBLFlBQU1DLFdBQVcsTUFBTXRKLE9BQU9pSixLQUFLTSxHQUFHO0FBQ3RDVixjQUFRUyxRQUFRO0FBRWhCLFVBQUksQ0FBQ0EsVUFBVTFHLGVBQWU7QUFDNUJ1RyxlQUFPQyxTQUFTQyxPQUFPO0FBQ3ZCO0FBQUEsTUFDRjtBQUVBLFlBQU1HLGNBQWMsTUFBTXhKLE9BQU9rRCxTQUFTdUcsV0FBV3JHLE9BQU87QUFBQSxRQUMxRFIsZUFBZTBHLFNBQVMxRztBQUFBQSxNQUMxQixDQUFDO0FBRUQsVUFBSTRHLFlBQVk3RSxXQUFXLEdBQUc7QUFDNUJ3RSxlQUFPQyxTQUFTQyxPQUFPO0FBQ3ZCO0FBQUEsTUFDRjtBQUVBUCxvQkFBY1UsWUFBWSxDQUFDLENBQUM7QUFBQSxJQUM5QixTQUFTbEcsR0FBRztBQUNWQyxjQUFRQyxNQUFNLHVCQUF1QkYsQ0FBQztBQUN0QzZGLGFBQU9DLFNBQVNDLE9BQU87QUFBQSxJQUN6QixVQUFDO0FBQ0M1RyxtQkFBYSxLQUFLO0FBQUEsSUFDcEI7QUFBQSxFQUNGO0FBRUEsTUFBSUQsV0FBVztBQUNiLFdBQ0UsdUJBQUMsU0FBSSx3QkFBcUIseUJBQXdCLHdCQUFxQixTQUFRLFdBQVUsNERBQ3ZGLGlDQUFDLFNBQUksd0JBQXFCLHlCQUF3Qix3QkFBcUIsU0FBUSxXQUFVLGVBQ3ZGO0FBQUEsNkJBQUMsU0FBSSx3QkFBcUIsMEJBQXlCLHdCQUFxQixTQUFRLFdBQVUsbUZBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBMEs7QUFBQSxNQUMxSyx1QkFBQyxPQUFFLHdCQUFxQiwwQkFBeUIsd0JBQXFCLFNBQVEsV0FBVSxpQkFBZ0IsMEJBQXhHO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBa0g7QUFBQSxTQUZwSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBR0EsS0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBS0E7QUFBQSxFQUVKO0FBRUEsU0FDRSx1QkFBQyxtQkFBZ0Isd0JBQXFCLHlCQUF3Qix3QkFBcUIsUUFDakYsaUNBQUMsb0JBQWlCLHdCQUFxQix5QkFBd0Isd0JBQXFCLFFBQU8sTUFBWSxjQUF2RztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQThILEtBRGhJO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFQTtBQUVKO0FBQUNvRyxJQTNEdUJELFdBQVM7QUFBQWUsTUFBVGY7QUFBUyxJQUFBRCxJQUFBZ0I7QUFBQUMsYUFBQWpCLElBQUE7QUFBQWlCLGFBQUFELEtBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYmFzZTQ0IiwiRGFzaGJvYXJkTGF5b3V0IiwiVHJlbmRpbmdVcCIsIlRyZW5kaW5nRG93biIsIkluZGlhblJ1cGVlIiwiU2hvcHBpbmdCYWciLCJVc2VycyIsIkNsb2NrIiwiQ2FsZW5kYXIiLCJBcnJvd1VwUmlnaHQiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiQnV0dG9uIiwiVGFicyIsIlRhYnNMaXN0IiwiVGFic1RyaWdnZXIiLCJMaW5lQ2hhcnQiLCJMaW5lIiwiWEF4aXMiLCJZQXhpcyIsIkNhcnRlc2lhbkdyaWQiLCJUb29sdGlwIiwiUmVzcG9uc2l2ZUNvbnRhaW5lciIsIkJhckNoYXJ0IiwiQmFyIiwiUGllQ2hhcnQiLCJQaWUiLCJDZWxsIiwiQ09MT1JTIiwiQW5hbHl0aWNzQ29udGVudCIsInVzZXIiLCJyZXN0YXVyYW50IiwiaWQiLCJfcyIsIm9yZGVycyIsInNldE9yZGVycyIsIm1lbnVJdGVtcyIsInNldE1lbnVJdGVtcyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInRpbWVSYW5nZSIsInNldFRpbWVSYW5nZSIsInJlc3RhdXJhbnRfaWQiLCJsb2FkRGF0YSIsIm9yZGVyc0RhdGEiLCJtZW51RGF0YSIsIlByb21pc2UiLCJhbGwiLCJlbnRpdGllcyIsIk9yZGVyIiwiZmlsdGVyIiwiTWVudUl0ZW0iLCJlIiwiY29uc29sZSIsImVycm9yIiwibm93IiwiRGF0ZSIsImdldERhdGVSYW5nZSIsImRheXMiLCJzdGFydERhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImZpbHRlcmVkT3JkZXJzIiwibyIsImNyZWF0ZWRfZGF0ZSIsImNvbXBsZXRlZE9yZGVycyIsInN0YXR1cyIsInBheW1lbnRfc3RhdHVzIiwidG90YWxSZXZlbnVlIiwicmVkdWNlIiwic3VtIiwidG90YWxfYW1vdW50IiwidG90YWxPcmRlcnMiLCJsZW5ndGgiLCJhdmdPcmRlclZhbHVlIiwicHJldmlvdXNTdGFydERhdGUiLCJwcmV2aW91c09yZGVycyIsImRhdGUiLCJwcmV2aW91c1JldmVudWUiLCJyZXZlbnVlR3Jvd3RoIiwidG9GaXhlZCIsImRhaWx5RGF0YSIsImkiLCJkYXlPcmRlcnMiLCJvcmRlckRhdGUiLCJ0b0RhdGVTdHJpbmciLCJwdXNoIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwid2Vla2RheSIsInJldmVudWUiLCJpdGVtU2FsZXMiLCJmb3JFYWNoIiwib3JkZXIiLCJpdGVtcyIsIml0ZW0iLCJuYW1lIiwicXVhbnRpdHkiLCJ0b3RhbF9wcmljZSIsInRvcEl0ZW1zIiwiT2JqZWN0IiwidmFsdWVzIiwic29ydCIsImEiLCJiIiwic2xpY2UiLCJvcmRlcnNCeUhvdXIiLCJBcnJheSIsImZpbGwiLCJob3VyIiwiZ2V0SG91cnMiLCJwZWFrSG91cnNEYXRhIiwibWFwIiwiY291bnQiLCJfIiwib3JkZXJUeXBlcyIsImFjYyIsInR5cGUiLCJvcmRlcl90eXBlIiwib3JkZXJUeXBlRGF0YSIsImVudHJpZXMiLCJ2YWx1ZSIsInJlcGxhY2UiLCJ0b0xvY2FsZVN0cmluZyIsIk1hdGgiLCJyb3VuZCIsIm0iLCJpc19hdmFpbGFibGUiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJib3hTaGFkb3ciLCJzdHJva2VXaWR0aCIsInIiLCJpbmRleCIsIl9pZCIsImVudHJ5IiwiYmFja2dyb3VuZENvbG9yIiwiX2MiLCJBbmFseXRpY3MiLCJfczIiLCJzZXRVc2VyIiwic2V0UmVzdGF1cmFudCIsImxvYWRVc2VyQW5kUmVzdGF1cmFudCIsImlzQXV0aCIsImF1dGgiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ1c2VyRGF0YSIsIm1lIiwicmVzdGF1cmFudHMiLCJSZXN0YXVyYW50IiwiX2MyIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkFuYWx5dGljcy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGJhc2U0NCB9IGZyb20gXCJAL2FwaS9iYXNlNDRDbGllbnRcIjtcbmltcG9ydCBEYXNoYm9hcmRMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZExheW91dFwiO1xuaW1wb3J0IHtcbiAgVHJlbmRpbmdVcCwgVHJlbmRpbmdEb3duLCBJbmRpYW5SdXBlZSwgU2hvcHBpbmdCYWcsXG4gIFVzZXJzLCBDbG9jaywgQ2FsZW5kYXIsIEFycm93VXBSaWdodCB9IGZyb21cblwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgVGFicywgVGFic0xpc3QsIFRhYnNUcmlnZ2VyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90YWJzXCI7XG5pbXBvcnQge1xuICBMaW5lQ2hhcnQsIExpbmUsIFhBeGlzLCBZQXhpcywgQ2FydGVzaWFuR3JpZCxcbiAgVG9vbHRpcCwgUmVzcG9uc2l2ZUNvbnRhaW5lciwgQmFyQ2hhcnQsIEJhcixcbiAgUGllQ2hhcnQsIFBpZSwgQ2VsbCB9IGZyb21cblwicmVjaGFydHNcIjtcblxuY29uc3QgQ09MT1JTID0gWycjN2MzYWVkJywgJyMzYjgyZjYnLCAnIzEwYjk4MScsICcjZjU5ZTBiJywgJyNlZjQ0NDQnLCAnI2VjNDg5OSddO1xuXG5mdW5jdGlvbiBBbmFseXRpY3NDb250ZW50KHsgdXNlciwgcmVzdGF1cmFudCwgaWQgfSkge1xuICBjb25zdCBbb3JkZXJzLCBzZXRPcmRlcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbWVudUl0ZW1zLCBzZXRNZW51SXRlbXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt0aW1lUmFuZ2UsIHNldFRpbWVSYW5nZV0gPSB1c2VTdGF0ZShcIjdkYXlzXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlc3RhdXJhbnQ/LnJlc3RhdXJhbnRfaWQpIHtcbiAgICAgIGxvYWREYXRhKCk7XG4gICAgfVxuICB9LCBbcmVzdGF1cmFudF0pO1xuXG4gIGNvbnN0IGxvYWREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBbb3JkZXJzRGF0YSwgbWVudURhdGFdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgYmFzZTQ0LmVudGl0aWVzLk9yZGVyLmZpbHRlcih7IHJlc3RhdXJhbnRfaWQ6IHJlc3RhdXJhbnQucmVzdGF1cmFudF9pZCB9LCAnLWNyZWF0ZWRfZGF0ZScsIDUwMCksXG4gICAgICBiYXNlNDQuZW50aXRpZXMuTWVudUl0ZW0uZmlsdGVyKHsgcmVzdGF1cmFudF9pZDogcmVzdGF1cmFudC5yZXN0YXVyYW50X2lkIH0pXVxuICAgICAgKTtcbiAgICAgIHNldE9yZGVycyhvcmRlcnNEYXRhKTtcbiAgICAgIHNldE1lbnVJdGVtcyhtZW51RGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgZGF0YTpcIiwgZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIENhbGN1bGF0ZSBkYXRlIHJhbmdlXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGdldERhdGVSYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCBkYXlzID0gdGltZVJhbmdlID09PSBcIjdkYXlzXCIgPyA3IDogdGltZVJhbmdlID09PSBcIjMwZGF5c1wiID8gMzAgOiA5MDtcbiAgICBjb25zdCBzdGFydERhdGUgPSBuZXcgRGF0ZShub3cpO1xuICAgIHN0YXJ0RGF0ZS5zZXREYXRlKHN0YXJ0RGF0ZS5nZXREYXRlKCkgLSBkYXlzKTtcbiAgICByZXR1cm4gc3RhcnREYXRlO1xuICB9O1xuXG4gIGNvbnN0IGZpbHRlcmVkT3JkZXJzID0gb3JkZXJzLmZpbHRlcigobykgPT4gbmV3IERhdGUoby5jcmVhdGVkX2RhdGUpID49IGdldERhdGVSYW5nZSgpKTtcbiAgY29uc3QgY29tcGxldGVkT3JkZXJzID0gZmlsdGVyZWRPcmRlcnMuZmlsdGVyKChvKSA9PiBvLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcgfHwgby5wYXltZW50X3N0YXR1cyA9PT0gJ3BhaWQnKTtcblxuICAvLyBTdGF0c1xuICBjb25zdCB0b3RhbFJldmVudWUgPSBjb21wbGV0ZWRPcmRlcnMucmVkdWNlKChzdW0sIG8pID0+IHN1bSArIChvLnRvdGFsX2Ftb3VudCB8fCAwKSwgMCk7XG4gIGNvbnN0IHRvdGFsT3JkZXJzID0gY29tcGxldGVkT3JkZXJzLmxlbmd0aDtcbiAgY29uc3QgYXZnT3JkZXJWYWx1ZSA9IHRvdGFsT3JkZXJzID4gMCA/IHRvdGFsUmV2ZW51ZSAvIHRvdGFsT3JkZXJzIDogMDtcblxuICAvLyBQcmV2aW91cyBwZXJpb2QgY29tcGFyaXNvblxuICBjb25zdCBwcmV2aW91c1N0YXJ0RGF0ZSA9IG5ldyBEYXRlKGdldERhdGVSYW5nZSgpKTtcbiAgY29uc3QgZGF5cyA9IHRpbWVSYW5nZSA9PT0gXCI3ZGF5c1wiID8gNyA6IHRpbWVSYW5nZSA9PT0gXCIzMGRheXNcIiA/IDMwIDogOTA7XG4gIHByZXZpb3VzU3RhcnREYXRlLnNldERhdGUocHJldmlvdXNTdGFydERhdGUuZ2V0RGF0ZSgpIC0gZGF5cyk7XG4gIGNvbnN0IHByZXZpb3VzT3JkZXJzID0gb3JkZXJzLmZpbHRlcigobykgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShvLmNyZWF0ZWRfZGF0ZSk7XG4gICAgcmV0dXJuIGRhdGUgPj0gcHJldmlvdXNTdGFydERhdGUgJiYgZGF0ZSA8IGdldERhdGVSYW5nZSgpO1xuICB9KTtcbiAgY29uc3QgcHJldmlvdXNSZXZlbnVlID0gcHJldmlvdXNPcmRlcnMucmVkdWNlKChzdW0sIG8pID0+IHN1bSArIChvLnRvdGFsX2Ftb3VudCB8fCAwKSwgMCk7XG4gIGNvbnN0IHJldmVudWVHcm93dGggPSBwcmV2aW91c1JldmVudWUgPiAwID8gKCh0b3RhbFJldmVudWUgLSBwcmV2aW91c1JldmVudWUpIC8gcHJldmlvdXNSZXZlbnVlICogMTAwKS50b0ZpeGVkKDEpIDogMDtcblxuICAvLyBEYWlseSByZXZlbnVlIGRhdGFcbiAgY29uc3QgZGFpbHlEYXRhID0gW107XG4gIGZvciAobGV0IGkgPSA2OyBpID49IDA7IGktLSkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShub3cpO1xuICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGkpO1xuICAgIGNvbnN0IGRheU9yZGVycyA9IGNvbXBsZXRlZE9yZGVycy5maWx0ZXIoKG8pID0+IHtcbiAgICAgIGNvbnN0IG9yZGVyRGF0ZSA9IG5ldyBEYXRlKG8uY3JlYXRlZF9kYXRlKTtcbiAgICAgIHJldHVybiBvcmRlckRhdGUudG9EYXRlU3RyaW5nKCkgPT09IGRhdGUudG9EYXRlU3RyaW5nKCk7XG4gICAgfSk7XG4gICAgZGFpbHlEYXRhLnB1c2goe1xuICAgICAgZGF0ZTogZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywgeyB3ZWVrZGF5OiAnc2hvcnQnIH0pLFxuICAgICAgcmV2ZW51ZTogZGF5T3JkZXJzLnJlZHVjZSgoc3VtLCBvKSA9PiBzdW0gKyAoby50b3RhbF9hbW91bnQgfHwgMCksIDApLFxuICAgICAgb3JkZXJzOiBkYXlPcmRlcnMubGVuZ3RoXG4gICAgfSk7XG4gIH1cblxuICAvLyBUb3Agc2VsbGluZyBpdGVtc1xuICBjb25zdCBpdGVtU2FsZXMgPSB7fTtcbiAgY29tcGxldGVkT3JkZXJzLmZvckVhY2goKG9yZGVyKSA9PiB7XG4gICAgb3JkZXIuaXRlbXM/LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmICghaXRlbVNhbGVzW2l0ZW0ubmFtZV0pIHtcbiAgICAgICAgaXRlbVNhbGVzW2l0ZW0ubmFtZV0gPSB7IG5hbWU6IGl0ZW0ubmFtZSwgcXVhbnRpdHk6IDAsIHJldmVudWU6IDAgfTtcbiAgICAgIH1cbiAgICAgIGl0ZW1TYWxlc1tpdGVtLm5hbWVdLnF1YW50aXR5ICs9IGl0ZW0ucXVhbnRpdHkgfHwgMTtcbiAgICAgIGl0ZW1TYWxlc1tpdGVtLm5hbWVdLnJldmVudWUgKz0gaXRlbS50b3RhbF9wcmljZSB8fCAwO1xuICAgIH0pO1xuICB9KTtcbiAgY29uc3QgdG9wSXRlbXMgPSBPYmplY3QudmFsdWVzKGl0ZW1TYWxlcykuc29ydCgoYSwgYikgPT4gYi5yZXZlbnVlIC0gYS5yZXZlbnVlKS5zbGljZSgwLCA1KTtcblxuICAvLyBPcmRlcnMgYnkgaG91clxuICBjb25zdCBvcmRlcnNCeUhvdXIgPSBBcnJheSgyNCkuZmlsbCgwKTtcbiAgY29tcGxldGVkT3JkZXJzLmZvckVhY2goKG9yZGVyKSA9PiB7XG4gICAgY29uc3QgaG91ciA9IG5ldyBEYXRlKG9yZGVyLmNyZWF0ZWRfZGF0ZSkuZ2V0SG91cnMoKTtcbiAgICBvcmRlcnNCeUhvdXJbaG91cl0rKztcbiAgfSk7XG4gIGNvbnN0IHBlYWtIb3Vyc0RhdGEgPSBvcmRlcnNCeUhvdXIubWFwKChjb3VudCwgaG91cikgPT4gKHtcbiAgICBob3VyOiBgJHtob3VyfTowMGAsXG4gICAgb3JkZXJzOiBjb3VudFxuICB9KSkuZmlsdGVyKChfLCBpKSA9PiBpID49IDEwICYmIGkgPD0gMjIpO1xuXG4gIC8vIE9yZGVyIHR5cGUgZGlzdHJpYnV0aW9uXG4gIGNvbnN0IG9yZGVyVHlwZXMgPSBjb21wbGV0ZWRPcmRlcnMucmVkdWNlKChhY2MsIG9yZGVyKSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IG9yZGVyLm9yZGVyX3R5cGUgfHwgJ2RpbmVfaW4nO1xuICAgIGFjY1t0eXBlXSA9IChhY2NbdHlwZV0gfHwgMCkgKyAxO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgY29uc3Qgb3JkZXJUeXBlRGF0YSA9IE9iamVjdC5lbnRyaWVzKG9yZGVyVHlwZXMpLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4gKHtcbiAgICBuYW1lOiBuYW1lLnJlcGxhY2UoJ18nLCAnICcpLFxuICAgIHZhbHVlXG4gIH0pKTtcblxuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BbmFseXRpY3M6MTI3OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC02NFwiPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjEyODo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImFuaW1hdGUtc3BpbiByb3VuZGVkLWZ1bGwgaC04IHctOCBib3JkZXItYi0yIGJvcmRlci12aW9sZXQtNjAwXCI+PC9kaXY+XG4gICAgICA8L2Rpdj4pO1xuXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BbmFseXRpY3M6MTM0OjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjEzNjo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBtZDppdGVtcy1jZW50ZXIgbWQ6anVzdGlmeS1iZXR3ZWVuIGdhcC00XCI+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BbmFseXRpY3M6MTM3OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgPGgxIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjEzODoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMFwiPkFuYWx5dGljczwvaDE+XG4gICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BbmFseXRpY3M6MTM5OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5UcmFjayB5b3VyIHJlc3RhdXJhbnQgcGVyZm9ybWFuY2U8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8VGFicyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoxNDE6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHZhbHVlPXt0aW1lUmFuZ2V9IG9uVmFsdWVDaGFuZ2U9e3NldFRpbWVSYW5nZX0+XG4gICAgICAgICAgPFRhYnNMaXN0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjE0MjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgIDxUYWJzVHJpZ2dlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoxNDM6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdmFsdWU9XCI3ZGF5c1wiPjcgRGF5czwvVGFic1RyaWdnZXI+XG4gICAgICAgICAgICA8VGFic1RyaWdnZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BbmFseXRpY3M6MTQ0OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHZhbHVlPVwiMzBkYXlzXCI+MzAgRGF5czwvVGFic1RyaWdnZXI+XG4gICAgICAgICAgICA8VGFic1RyaWdnZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BbmFseXRpY3M6MTQ1OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHZhbHVlPVwiOTBkYXlzXCI+OTAgRGF5czwvVGFic1RyaWdnZXI+XG4gICAgICAgICAgPC9UYWJzTGlzdD5cbiAgICAgICAgPC9UYWJzPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBTdGF0cyBDYXJkcyAqL31cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BbmFseXRpY3M6MTUxOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC00XCI+XG4gICAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjE1Mjo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjE1MzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtNlwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoxNTQ6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjE1NToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjE1NjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5Ub3RhbCBSZXZlbnVlPC9wPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjE1NzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwXCI+4oK5e3RvdGFsUmV2ZW51ZS50b0xvY2FsZVN0cmluZygpfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjE1ODoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGdhcC0xIG10LTIgdGV4dC1zbSAke1xuICAgICAgICAgICAgICAgIHJldmVudWVHcm93dGggPj0gMCA/ICd0ZXh0LWdyZWVuLTYwMCcgOiAndGV4dC1yZWQtNjAwJ31gXG4gICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICAgIHtyZXZlbnVlR3Jvd3RoID49IDAgPyA8VHJlbmRpbmdVcCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoxNjE6NDBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+IDogPFRyZW5kaW5nRG93biBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoxNjE6NzdcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+fVxuICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BbmFseXRpY3M6MTYyOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJyZXZlbnVlR3Jvd3RoXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2lkfT57cmV2ZW51ZUdyb3d0aH0lIHZzIHByZXZpb3VzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoxNjU6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwicC0zIGJnLXZpb2xldC0xMDAgcm91bmRlZC14bFwiPlxuICAgICAgICAgICAgICAgIDxJbmRpYW5SdXBlZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoxNjY6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LXZpb2xldC02MDBcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZD5cblxuICAgICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoxNzI6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoxNzM6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJwLTZcIj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BbmFseXRpY3M6MTc0OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoxNzU6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoxNzY6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+VG90YWwgT3JkZXJzPC9wPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjE3NzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJ0b3RhbE9yZGVyc1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtpZH0+e3RvdGFsT3JkZXJzfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoxNzg6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgbXQtMlwiPlxuICAgICAgICAgICAgICAgICAgfntNYXRoLnJvdW5kKHRvdGFsT3JkZXJzIC8gKHRpbWVSYW5nZSA9PT0gXCI3ZGF5c1wiID8gNyA6IHRpbWVSYW5nZSA9PT0gXCIzMGRheXNcIiA/IDMwIDogOTApKX0gcGVyIGRheVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BbmFseXRpY3M6MTgyOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInAtMyBiZy1ibHVlLTEwMCByb3VuZGVkLXhsXCI+XG4gICAgICAgICAgICAgICAgPFNob3BwaW5nQmFnIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjE4MzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTYgaC02IHRleHQtYmx1ZS02MDBcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZD5cblxuICAgICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoxODk6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoxOTA6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJwLTZcIj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BbmFseXRpY3M6MTkxOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoxOTI6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoxOTM6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+QXZnIE9yZGVyIFZhbHVlPC9wPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjE5NDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwXCI+4oK5e01hdGgucm91bmQoYXZnT3JkZXJWYWx1ZSl9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjE5NToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgbXQtMlwiPlxuICAgICAgICAgICAgICAgICAgUGVyIHRyYW5zYWN0aW9uXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoxOTk6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwicC0zIGJnLWdyZWVuLTEwMCByb3VuZGVkLXhsXCI+XG4gICAgICAgICAgICAgICAgPEFycm93VXBSaWdodCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoyMDA6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LWdyZWVuLTYwMFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPC9DYXJkPlxuXG4gICAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjIwNjo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjIwNzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtNlwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoyMDg6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjIwOToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjIxMDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5NZW51IEl0ZW1zPC9wPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjIxMToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwXCI+e21lbnVJdGVtcy5sZW5ndGh9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjIxMjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICB7bWVudUl0ZW1zLmZpbHRlcigobSkgPT4gbS5pc19hdmFpbGFibGUpLmxlbmd0aH0gYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoyMTY6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwicC0zIGJnLW9yYW5nZS0xMDAgcm91bmRlZC14bFwiPlxuICAgICAgICAgICAgICAgIDxDbG9jayBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoyMTc6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LW9yYW5nZS02MDBcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogQ2hhcnRzIFJvdyAxICovfVxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoyMjU6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLTIgZ2FwLTZcIj5cbiAgICAgICAgey8qIFJldmVudWUgVHJlbmQgKi99XG4gICAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjIyNzo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgPENhcmRIZWFkZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BbmFseXRpY3M6MjI4OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgPENhcmRUaXRsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoyMjk6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPlJldmVudWUgVHJlbmQ8L0NhcmRUaXRsZT5cbiAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjIzMToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoyMzI6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJoLTcyXCI+XG4gICAgICAgICAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjIzMzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgICA8TGluZUNoYXJ0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjIzNDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGRhdGE9e2RhaWx5RGF0YX0+XG4gICAgICAgICAgICAgICAgICA8Q2FydGVzaWFuR3JpZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoyMzU6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgc3Ryb2tlRGFzaGFycmF5PVwiMyAzXCIgc3Ryb2tlPVwiI2YwZjBmMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8WEF4aXMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BbmFseXRpY3M6MjM2OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGRhdGFLZXk9XCJkYXRlXCIgc3Ryb2tlPVwiIzljYTNhZlwiIGZvbnRTaXplPXsxMn0gLz5cbiAgICAgICAgICAgICAgICAgIDxZQXhpcyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoyMzc6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgc3Ryb2tlPVwiIzljYTNhZlwiIGZvbnRTaXplPXsxMn0gLz5cbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjIzODoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI9eyh2YWx1ZSkgPT4gW2Digrkke3ZhbHVlLnRvTG9jYWxlU3RyaW5nKCl9YCwgJ1JldmVudWUnXX1cbiAgICAgICAgICAgICAgICAgIGNvbnRlbnRTdHlsZT17eyBib3JkZXJSYWRpdXM6IDgsIGJvcmRlcjogJ25vbmUnLCBib3hTaGFkb3c6ICcwIDRweCA2cHggLTFweCByZ2IoMCAwIDAgLyAwLjEpJyB9fSAvPlxuXG4gICAgICAgICAgICAgICAgICA8TGluZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoyNDI6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm1vbm90b25lXCJcbiAgICAgICAgICAgICAgICAgIGRhdGFLZXk9XCJyZXZlbnVlXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiM3YzNhZWRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezN9XG4gICAgICAgICAgICAgICAgICBkb3Q9e3sgZmlsbDogJyM3YzNhZWQnLCBzdHJva2VXaWR0aDogMiwgcjogNCB9fSAvPlxuXG4gICAgICAgICAgICAgICAgPC9MaW5lQ2hhcnQ+XG4gICAgICAgICAgICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZD5cblxuICAgICAgICB7LyogT3JkZXJzIFRyZW5kICovfVxuICAgICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoyNTY6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgIDxDYXJkSGVhZGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjI1NzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgIDxDYXJkVGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BbmFseXRpY3M6MjU4OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtbGdcIj5PcmRlcnMgVHJlbmQ8L0NhcmRUaXRsZT5cbiAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjI2MDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoyNjE6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJoLTcyXCI+XG4gICAgICAgICAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjI2MjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgICA8QmFyQ2hhcnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BbmFseXRpY3M6MjYzOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgZGF0YT17ZGFpbHlEYXRhfT5cbiAgICAgICAgICAgICAgICAgIDxDYXJ0ZXNpYW5HcmlkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjI2NDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBzdHJva2VEYXNoYXJyYXk9XCIzIDNcIiBzdHJva2U9XCIjZjBmMGYwXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxYQXhpcyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoyNjU6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgZGF0YUtleT1cImRhdGVcIiBzdHJva2U9XCIjOWNhM2FmXCIgZm9udFNpemU9ezEyfSAvPlxuICAgICAgICAgICAgICAgICAgPFlBeGlzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjI2NjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBzdHJva2U9XCIjOWNhM2FmXCIgZm9udFNpemU9ezEyfSAvPlxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BbmFseXRpY3M6MjY3OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcj17KHZhbHVlKSA9PiBbdmFsdWUsICdPcmRlcnMnXX1cbiAgICAgICAgICAgICAgICAgIGNvbnRlbnRTdHlsZT17eyBib3JkZXJSYWRpdXM6IDgsIGJvcmRlcjogJ25vbmUnLCBib3hTaGFkb3c6ICcwIDRweCA2cHggLTFweCByZ2IoMCAwIDAgLyAwLjEpJyB9fSAvPlxuXG4gICAgICAgICAgICAgICAgICA8QmFyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjI3MToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGRhdGFLZXk9XCJvcmRlcnNcIiBmaWxsPVwiIzNiODJmNlwiIHJhZGl1cz17WzQsIDQsIDAsIDBdfSAvPlxuICAgICAgICAgICAgICAgIDwvQmFyQ2hhcnQ+XG4gICAgICAgICAgICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogQ2hhcnRzIFJvdyAyICovfVxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoyODA6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLTMgZ2FwLTZcIj5cbiAgICAgICAgey8qIFRvcCBTZWxsaW5nIEl0ZW1zICovfVxuICAgICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoyODI6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTJcIj5cbiAgICAgICAgICA8Q2FyZEhlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoyODM6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICA8Q2FyZFRpdGxlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjI4NDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+VG9wIFNlbGxpbmcgSXRlbXM8L0NhcmRUaXRsZT5cbiAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjI4NjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAge3RvcEl0ZW1zLmxlbmd0aCA9PT0gMCA/XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjI4ODoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS04IHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICBObyBzYWxlcyBkYXRhIGF2YWlsYWJsZVxuICAgICAgICAgICAgICA8L2Rpdj4gOlxuXG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjI5MjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgIHt0b3BJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjI5NDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17aXRlbS5uYW1lfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoyOTU6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LWdyYXktNDAwIHctNlwiPiN7aW5kZXggKyAxfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoyOTY6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczoyOTc6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwibmFtZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtpdGVtPy5pZCB8fCBpdGVtPy5faWR9PntpdGVtLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjI5ODoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicXVhbnRpdHlcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aXRlbT8uaWQgfHwgaXRlbT8uX2lkfT57aXRlbS5xdWFudGl0eX0gc29sZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BbmFseXRpY3M6MzAwOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjMwMToyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicmV2ZW51ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtpdGVtPy5pZCB8fCBpdGVtPy5faWR9PuKCuXtpdGVtLnJldmVudWUudG9Mb2NhbGVTdHJpbmcoKX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZD5cblxuICAgICAgICB7LyogT3JkZXIgVHlwZSBEaXN0cmlidXRpb24gKi99XG4gICAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjMxMTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgPENhcmRIZWFkZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BbmFseXRpY3M6MzEyOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgPENhcmRUaXRsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczozMTM6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPk9yZGVyIFR5cGVzPC9DYXJkVGl0bGU+XG4gICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczozMTU6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgIHtvcmRlclR5cGVEYXRhLmxlbmd0aCA9PT0gMCA/XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjMxNzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS04IHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICBObyBkYXRhIGF2YWlsYWJsZVxuICAgICAgICAgICAgICA8L2Rpdj4gOlxuXG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjMyMToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImgtNDhcIj5cbiAgICAgICAgICAgICAgICA8UmVzcG9uc2l2ZUNvbnRhaW5lciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczozMjI6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgICA8UGllQ2hhcnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BbmFseXRpY3M6MzIzOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQaWUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BbmFseXRpY3M6MzI0OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIGRhdGE9e29yZGVyVHlwZURhdGF9XG4gICAgICAgICAgICAgICAgICBjeD1cIjUwJVwiXG4gICAgICAgICAgICAgICAgICBjeT1cIjUwJVwiXG4gICAgICAgICAgICAgICAgICBpbm5lclJhZGl1cz17NTB9XG4gICAgICAgICAgICAgICAgICBvdXRlclJhZGl1cz17ODB9XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nQW5nbGU9ezJ9XG4gICAgICAgICAgICAgICAgICBkYXRhS2V5PVwidmFsdWVcIj5cblxuICAgICAgICAgICAgICAgICAgICAgIHtvcmRlclR5cGVEYXRhLm1hcCgoZW50cnksIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgICAgICA8Q2VsbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczozMzQ6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2VudHJ5Lm5hbWV9IGZpbGw9e0NPTE9SU1tpbmRleCAlIENPTE9SUy5sZW5ndGhdfSAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L1BpZT5cbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BbmFseXRpY3M6MzM3OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L1BpZUNoYXJ0PlxuICAgICAgICAgICAgICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjM0MDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTQgbXQtMlwiPlxuICAgICAgICAgICAgICAgICAge29yZGVyVHlwZURhdGEubWFwKChlbnRyeSwgaW5kZXgpID0+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczozNDI6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2VudHJ5Lm5hbWV9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjM0MzoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInctMyBoLTMgcm91bmRlZC1mdWxsXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBDT0xPUlNbaW5kZXggJSBDT0xPUlMubGVuZ3RoXSB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjM0NDoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImNhcGl0YWxpemVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIm5hbWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17ZW50cnk/LmlkIHx8IGVudHJ5Py5faWR9PntlbnRyeS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBQZWFrIEhvdXJzICovfVxuICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BbmFseXRpY3M6MzU1OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgPENhcmRIZWFkZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BbmFseXRpY3M6MzU2OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgPENhcmRUaXRsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0FuYWx5dGljczozNTc6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPlBlYWsgSG91cnM8L0NhcmRUaXRsZT5cbiAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BbmFseXRpY3M6MzU5OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjM2MDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImgtNjRcIj5cbiAgICAgICAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjM2MToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgPEJhckNoYXJ0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjM2MjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGRhdGE9e3BlYWtIb3Vyc0RhdGF9PlxuICAgICAgICAgICAgICAgIDxDYXJ0ZXNpYW5HcmlkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjM2MzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBzdHJva2VEYXNoYXJyYXk9XCIzIDNcIiBzdHJva2U9XCIjZjBmMGYwXCIgLz5cbiAgICAgICAgICAgICAgICA8WEF4aXMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BbmFseXRpY3M6MzY0OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGRhdGFLZXk9XCJob3VyXCIgc3Ryb2tlPVwiIzljYTNhZlwiIGZvbnRTaXplPXsxMH0gLz5cbiAgICAgICAgICAgICAgICA8WUF4aXMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BbmFseXRpY3M6MzY1OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHN0cm9rZT1cIiM5Y2EzYWZcIiBmb250U2l6ZT17MTJ9IC8+XG4gICAgICAgICAgICAgICAgPFRvb2x0aXAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BbmFseXRpY3M6MzY2OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZXI9eyh2YWx1ZSkgPT4gW3ZhbHVlLCAnT3JkZXJzJ119XG4gICAgICAgICAgICAgICAgY29udGVudFN0eWxlPXt7IGJvcmRlclJhZGl1czogOCwgYm9yZGVyOiAnbm9uZScsIGJveFNoYWRvdzogJzAgNHB4IDZweCAtMXB4IHJnYigwIDAgMCAvIDAuMSknIH19IC8+XG5cbiAgICAgICAgICAgICAgICA8QmFyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjM3MDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGRhdGFLZXk9XCJvcmRlcnNcIiBmaWxsPVwiIzEwYjk4MVwiIHJhZGl1cz17WzQsIDQsIDAsIDBdfSAvPlxuICAgICAgICAgICAgICA8L0JhckNoYXJ0PlxuICAgICAgICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPC9DYXJkPlxuICAgIDwvZGl2Pik7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5hbHl0aWNzKCkge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Jlc3RhdXJhbnQsIHNldFJlc3RhdXJhbnRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvYWRVc2VyQW5kUmVzdGF1cmFudCgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgbG9hZFVzZXJBbmRSZXN0YXVyYW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBpc0F1dGggPSBhd2FpdCBiYXNlNDQuYXV0aC5pc0F1dGhlbnRpY2F0ZWQoKTtcbiAgICAgIGlmICghaXNBdXRoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvSG9tZVwiO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgYmFzZTQ0LmF1dGgubWUoKTtcbiAgICAgIHNldFVzZXIodXNlckRhdGEpO1xuXG4gICAgICBpZiAoIXVzZXJEYXRhPy5yZXN0YXVyYW50X2lkKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvR2V0U3RhcnRlZFwiO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3RhdXJhbnRzID0gYXdhaXQgYmFzZTQ0LmVudGl0aWVzLlJlc3RhdXJhbnQuZmlsdGVyKHtcbiAgICAgICAgcmVzdGF1cmFudF9pZDogdXNlckRhdGEucmVzdGF1cmFudF9pZFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXN0YXVyYW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9HZXRTdGFydGVkXCI7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2V0UmVzdGF1cmFudChyZXN0YXVyYW50c1swXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgZGF0YTpcIiwgZSk7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL0hvbWVcIjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjQyNTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ncmF5LTUwXCI+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BbmFseXRpY3M6NDI2OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjQyNzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJhbmltYXRlLXNwaW4gcm91bmRlZC1mdWxsIGgtMTAgdy0xMCBib3JkZXItYi0yIGJvcmRlci1vcmFuZ2UtNjAwIG14LWF1dG8gbWItNFwiPjwvZGl2PlxuICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjQyODoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+TG9hZGluZy4uLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4pO1xuXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEYXNoYm9hcmRMYXlvdXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BbmFseXRpY3M6NDM1OjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgIDxBbmFseXRpY3NDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQW5hbHl0aWNzOjQzNjo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdXNlcj17dXNlcn0gcmVzdGF1cmFudD17cmVzdGF1cmFudH0gLz5cbiAgICA8L0Rhc2hib2FyZExheW91dD4pO1xuXG59Il0sImZpbGUiOiIvYXBwL3NyYy9wYWdlcy9BbmFseXRpY3MuanN4In0=