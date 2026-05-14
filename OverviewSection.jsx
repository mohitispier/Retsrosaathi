import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/dashboard/OverviewSection.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/dashboard/OverviewSection.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=79425e35";
import {
  ShoppingBag,
  Users,
  IndianRupee,
  Clock,
  ArrowUpRight
} from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
import { Card, CardContent, CardHeader, CardTitle } from "/src/components/ui/card.jsx";
import { Badge } from "/src/components/ui/badge.jsx";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from "/node_modules/.vite/deps/recharts.js?v=79425e35";
export default function OverviewSection({ restaurant, orders, customers, menuItems }) {
  const todayOrders = orders.filter((o) => {
    const orderDate = new Date(o.created_date).toDateString();
    return orderDate === (/* @__PURE__ */ new Date()).toDateString();
  });
  const todayRevenue = todayOrders.reduce((sum, o) => sum + (o.total_amount || 0), 0);
  const pendingOrders = orders.filter((o) => ["pending", "confirmed", "preparing"].includes(o.status));
  const revenueData = [];
  for (let i = 6; i >= 0; i--) {
    const date = /* @__PURE__ */ new Date();
    date.setDate(date.getDate() - i);
    const dayOrders = orders.filter((o) => {
      const orderDate = new Date(o.created_date);
      return orderDate.toDateString() === date.toDateString();
    });
    revenueData.push({
      name: date.toLocaleDateString("en-US", { weekday: "short" }),
      revenue: dayOrders.reduce((sum, o) => sum + (o.total_amount || 0), 0)
    });
  }
  const ordersByHourData = Array(24).fill(0);
  todayOrders.forEach((order) => {
    const hour = new Date(order.created_date).getHours();
    ordersByHourData[hour]++;
  });
  const ordersByHour = ordersByHourData.map((count, hour) => ({
    hour: `${hour}:00`,
    orders: count
  })).filter((_, i) => i >= 8 && i <= 22);
  const stats = [
    {
      title: "Today's Revenue",
      value: `₹${todayRevenue.toLocaleString()}`,
      icon: IndianRupee,
      color: "bg-orange-100 text-orange-600"
    },
    {
      title: "Today's Orders",
      value: todayOrders.length,
      icon: ShoppingBag,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Total Customers",
      value: customers.length,
      icon: Users,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Pending Orders",
      value: pendingOrders.length,
      icon: Clock,
      color: "bg-orange-100 text-orange-600"
    }
  ];
  const getStatusColor = (status) => {
    const colors = {
      pending: "bg-yellow-100 text-yellow-700",
      confirmed: "bg-blue-100 text-blue-700",
      preparing: "bg-purple-100 text-purple-700",
      ready: "bg-green-100 text-green-700",
      served: "bg-gray-100 text-gray-700",
      completed: "bg-emerald-100 text-emerald-700",
      cancelled: "bg-red-100 text-red-700"
    };
    return colors[status] || "bg-gray-100 text-gray-700";
  };
  return /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      "data-source-location": "components/dashboard/OverviewSection:90:4",
      "data-dynamic-content": "true",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "space-y-6",
      children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OverviewSection:97:6", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "components/dashboard/OverviewSection:98:8", "data-dynamic-content": "false", className: "text-2xl font-bold text-gray-900 mb-2", children: "Welcome back! 👋" }, void 0, false, {
            fileName: "/app/src/components/dashboard/OverviewSection.jsx",
            lineNumber: 117,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/OverviewSection:101:8", "data-dynamic-content": "true", className: "text-gray-500", "data-collection-item-field": "name", "data-collection-item-id": restaurant?.id || restaurant?._id, children: [
            "Here's what's happening at ",
            restaurant?.name,
            " today."
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/OverviewSection.jsx",
            lineNumber: 120,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/OverviewSection.jsx",
          lineNumber: 116,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OverviewSection:105:6", "data-dynamic-content": "true", className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: stats.map(
          (stat, index) => /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/OverviewSection:107:10", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/OverviewSection:108:12", "data-dynamic-content": "true", className: "p-6", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OverviewSection:109:14", "data-dynamic-content": "true", className: "flex items-start justify-between", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OverviewSection:110:16", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/OverviewSection:111:18", "data-dynamic-content": "true", className: "text-sm text-gray-500", "data-collection-item-field": "title", "data-collection-item-id": stat?.id || stat?._id, children: stat.title }, void 0, false, {
                fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                lineNumber: 130,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/OverviewSection:112:18", "data-dynamic-content": "true", className: "text-2xl font-bold text-gray-900 mt-1", "data-collection-item-field": "value", "data-collection-item-id": stat?.id || stat?._id, children: stat.value }, void 0, false, {
                fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                lineNumber: 131,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/OverviewSection.jsx",
              lineNumber: 129,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OverviewSection:114:16", "data-dynamic-content": "true", className: `p-3 rounded-xl ${stat.color}`, children: /* @__PURE__ */ jsxDEV(stat.icon, { "data-source-location": "components/dashboard/OverviewSection:115:18", "data-dynamic-content": "false", className: "w-6 h-6" }, void 0, false, {
              fileName: "/app/src/components/dashboard/OverviewSection.jsx",
              lineNumber: 134,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/OverviewSection.jsx",
              lineNumber: 133,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/OverviewSection.jsx",
            lineNumber: 128,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/OverviewSection.jsx",
            lineNumber: 127,
            columnNumber: 13
          }, this) }, stat.title, false, {
            fileName: "/app/src/components/dashboard/OverviewSection.jsx",
            lineNumber: 126,
            columnNumber: 9
          }, this)
        ) }, void 0, false, {
          fileName: "/app/src/components/dashboard/OverviewSection.jsx",
          lineNumber: 124,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OverviewSection:124:6", "data-dynamic-content": "true", className: "grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6", children: [
          /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/OverviewSection:125:8", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "components/dashboard/OverviewSection:126:10", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "components/dashboard/OverviewSection:127:12", "data-dynamic-content": "false", className: "text-lg", children: "Revenue (Last 7 Days)" }, void 0, false, {
              fileName: "/app/src/components/dashboard/OverviewSection.jsx",
              lineNumber: 146,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/OverviewSection.jsx",
              lineNumber: 145,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/OverviewSection:129:10", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OverviewSection:130:12", "data-dynamic-content": "true", className: "h-64", children: revenueData.every((d) => d.revenue === 0) ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OverviewSection:132:16", "data-dynamic-content": "false", className: "h-full flex items-center justify-center text-gray-500", children: "No revenue data yet" }, void 0, false, {
              fileName: "/app/src/components/dashboard/OverviewSection.jsx",
              lineNumber: 151,
              columnNumber: 15
            }, this) : /* @__PURE__ */ jsxDEV(ResponsiveContainer, { "data-source-location": "components/dashboard/OverviewSection:136:16", "data-dynamic-content": "true", width: "100%", height: "100%", children: /* @__PURE__ */ jsxDEV(LineChart, { "data-source-location": "components/dashboard/OverviewSection:137:18", "data-dynamic-content": "true", data: revenueData, children: [
              /* @__PURE__ */ jsxDEV(CartesianGrid, { "data-source-location": "components/dashboard/OverviewSection:138:20", "data-dynamic-content": "false", strokeDasharray: "3 3", stroke: "#f0f0f0" }, void 0, false, {
                fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                lineNumber: 157,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV(XAxis, { "data-source-location": "components/dashboard/OverviewSection:139:20", "data-dynamic-content": "false", dataKey: "name", stroke: "#9ca3af", fontSize: 12 }, void 0, false, {
                fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                lineNumber: 158,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV(YAxis, { "data-source-location": "components/dashboard/OverviewSection:140:20", "data-dynamic-content": "false", stroke: "#9ca3af", fontSize: 12 }, void 0, false, {
                fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                lineNumber: 159,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV(
                Tooltip,
                {
                  "data-source-location": "components/dashboard/OverviewSection:141:20",
                  "data-dynamic-content": "true",
                  formatter: (value) => [`₹${value.toLocaleString()}`, "Revenue"],
                  contentStyle: { borderRadius: 8, border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                  lineNumber: 160,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                Line,
                {
                  "data-source-location": "components/dashboard/OverviewSection:145:20",
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
                  fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                  lineNumber: 164,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/OverviewSection.jsx",
              lineNumber: 156,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/OverviewSection.jsx",
              lineNumber: 155,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/OverviewSection.jsx",
              lineNumber: 149,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/OverviewSection.jsx",
              lineNumber: 148,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/OverviewSection.jsx",
            lineNumber: 144,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/OverviewSection:159:8", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "components/dashboard/OverviewSection:160:10", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "components/dashboard/OverviewSection:161:12", "data-dynamic-content": "false", className: "text-lg", children: "Orders by Hour (Today)" }, void 0, false, {
              fileName: "/app/src/components/dashboard/OverviewSection.jsx",
              lineNumber: 180,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/OverviewSection.jsx",
              lineNumber: 179,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/OverviewSection:163:10", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OverviewSection:164:12", "data-dynamic-content": "true", className: "h-64", children: ordersByHour.every((d) => d.orders === 0) ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OverviewSection:166:16", "data-dynamic-content": "false", className: "h-full flex items-center justify-center text-gray-500", children: "No orders today yet" }, void 0, false, {
              fileName: "/app/src/components/dashboard/OverviewSection.jsx",
              lineNumber: 185,
              columnNumber: 15
            }, this) : /* @__PURE__ */ jsxDEV(ResponsiveContainer, { "data-source-location": "components/dashboard/OverviewSection:170:16", "data-dynamic-content": "true", width: "100%", height: "100%", children: /* @__PURE__ */ jsxDEV(BarChart, { "data-source-location": "components/dashboard/OverviewSection:171:18", "data-dynamic-content": "true", data: ordersByHour, children: [
              /* @__PURE__ */ jsxDEV(CartesianGrid, { "data-source-location": "components/dashboard/OverviewSection:172:20", "data-dynamic-content": "false", strokeDasharray: "3 3", stroke: "#f0f0f0" }, void 0, false, {
                fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                lineNumber: 191,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV(XAxis, { "data-source-location": "components/dashboard/OverviewSection:173:20", "data-dynamic-content": "false", dataKey: "hour", stroke: "#9ca3af", fontSize: 10 }, void 0, false, {
                fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                lineNumber: 192,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV(YAxis, { "data-source-location": "components/dashboard/OverviewSection:174:20", "data-dynamic-content": "false", stroke: "#9ca3af", fontSize: 12 }, void 0, false, {
                fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                lineNumber: 193,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV(
                Tooltip,
                {
                  "data-source-location": "components/dashboard/OverviewSection:175:20",
                  "data-dynamic-content": "true",
                  formatter: (value) => [value, "Orders"],
                  contentStyle: { borderRadius: 8, border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                  lineNumber: 194,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(Bar, { "data-source-location": "components/dashboard/OverviewSection:179:20", "data-dynamic-content": "true", dataKey: "orders", fill: "#ea580c", radius: [4, 4, 0, 0] }, void 0, false, {
                fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                lineNumber: 198,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/OverviewSection.jsx",
              lineNumber: 190,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/OverviewSection.jsx",
              lineNumber: 189,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/OverviewSection.jsx",
              lineNumber: 183,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/OverviewSection.jsx",
              lineNumber: 182,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/OverviewSection.jsx",
            lineNumber: 178,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/OverviewSection.jsx",
          lineNumber: 143,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/OverviewSection:189:6", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "components/dashboard/OverviewSection:190:8", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "components/dashboard/OverviewSection:191:10", "data-dynamic-content": "false", className: "text-lg", children: "Recent Orders" }, void 0, false, {
            fileName: "/app/src/components/dashboard/OverviewSection.jsx",
            lineNumber: 210,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/OverviewSection.jsx",
            lineNumber: 209,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/OverviewSection:193:8", "data-dynamic-content": "true", children: orders.length === 0 ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OverviewSection:195:12", "data-dynamic-content": "false", className: "text-center py-12 text-gray-500", children: [
            /* @__PURE__ */ jsxDEV(ShoppingBag, { "data-source-location": "components/dashboard/OverviewSection:196:14", "data-dynamic-content": "false", className: "w-12 h-12 mx-auto mb-3 text-gray-300" }, void 0, false, {
              fileName: "/app/src/components/dashboard/OverviewSection.jsx",
              lineNumber: 215,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/OverviewSection:197:14", "data-dynamic-content": "false", className: "font-medium", children: "No orders yet" }, void 0, false, {
              fileName: "/app/src/components/dashboard/OverviewSection.jsx",
              lineNumber: 216,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/OverviewSection:198:14", "data-dynamic-content": "false", className: "text-sm", children: "Orders will appear here when customers place them" }, void 0, false, {
              fileName: "/app/src/components/dashboard/OverviewSection.jsx",
              lineNumber: 217,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/OverviewSection.jsx",
            lineNumber: 214,
            columnNumber: 11
          }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OverviewSection:203:14", "data-dynamic-content": "true", className: "sm:hidden space-y-3", "data-collection-id": "orders", children: orders.slice(0, 10).map(
              (order) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OverviewSection:205:18", "data-dynamic-content": "true", className: "flex items-center justify-between py-2 border-b last:border-0", "data-collection-item-id": order?.id, children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OverviewSection:206:20", "data-dynamic-content": "true", children: [
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/OverviewSection:207:22", "data-dynamic-content": "true", className: "font-medium text-sm", "data-collection-item-field": "order_number", "data-collection-item-id": order?.id, children: order.order_number }, void 0, false, {
                    fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                    lineNumber: 226,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/OverviewSection:208:22", "data-dynamic-content": "true", className: "text-xs text-gray-500", children: [
                    order.items?.length || 0,
                    " items · ",
                    order.table_number ? `Table ${order.table_number}` : order.order_type
                  ] }, void 0, true, {
                    fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                    lineNumber: 227,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                  lineNumber: 225,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OverviewSection:210:20", "data-dynamic-content": "true", className: "text-right", children: [
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/OverviewSection:211:22", "data-dynamic-content": "true", className: "font-semibold text-sm", children: [
                    "₹",
                    order.total_amount?.toLocaleString()
                  ] }, void 0, true, {
                    fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                    lineNumber: 230,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "components/dashboard/OverviewSection:212:22", "data-dynamic-content": "true", className: `${getStatusColor(order.status)} text-xs`, "data-collection-item-field": "status", "data-collection-item-id": order?.id, children: order.status }, void 0, false, {
                    fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                    lineNumber: 231,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                  lineNumber: 229,
                  columnNumber: 21
                }, this)
              ] }, order.id, true, {
                fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                lineNumber: 224,
                columnNumber: 15
              }, this)
            ) }, void 0, false, {
              fileName: "/app/src/components/dashboard/OverviewSection.jsx",
              lineNumber: 222,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OverviewSection:218:14", "data-dynamic-content": "true", className: "hidden sm:block overflow-x-auto", children: /* @__PURE__ */ jsxDEV("table", { "data-source-location": "components/dashboard/OverviewSection:219:16", "data-dynamic-content": "true", className: "w-full", children: [
              /* @__PURE__ */ jsxDEV("thead", { "data-source-location": "components/dashboard/OverviewSection:220:18", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV("tr", { "data-source-location": "components/dashboard/OverviewSection:221:20", "data-dynamic-content": "false", className: "text-left text-sm text-gray-500 border-b", children: [
                /* @__PURE__ */ jsxDEV("th", { "data-source-location": "components/dashboard/OverviewSection:222:22", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Order #" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                  lineNumber: 241,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("th", { "data-source-location": "components/dashboard/OverviewSection:223:22", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Table" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                  lineNumber: 242,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("th", { "data-source-location": "components/dashboard/OverviewSection:224:22", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Items" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                  lineNumber: 243,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("th", { "data-source-location": "components/dashboard/OverviewSection:225:22", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Amount" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                  lineNumber: 244,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("th", { "data-source-location": "components/dashboard/OverviewSection:226:22", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Status" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                  lineNumber: 245,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("th", { "data-source-location": "components/dashboard/OverviewSection:227:22", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Time" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                  lineNumber: 246,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                lineNumber: 240,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                lineNumber: 239,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("tbody", { "data-source-location": "components/dashboard/OverviewSection:230:18", "data-dynamic-content": "true", className: "divide-y", "data-collection-id": "orders", children: orders.slice(0, 10).map(
                (order) => /* @__PURE__ */ jsxDEV("tr", { "data-source-location": "components/dashboard/OverviewSection:232:22", "data-dynamic-content": "true", className: "text-sm", "data-collection-item-id": order?.id, children: [
                  /* @__PURE__ */ jsxDEV("td", { "data-source-location": "components/dashboard/OverviewSection:233:24", "data-dynamic-content": "true", className: "py-3 font-medium", "data-collection-item-field": "order_number", "data-collection-item-id": order?.id, children: order.order_number }, void 0, false, {
                    fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                    lineNumber: 252,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("td", { "data-source-location": "components/dashboard/OverviewSection:234:24", "data-dynamic-content": "true", className: "py-3", children: order.table_number || "-" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                    lineNumber: 253,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("td", { "data-source-location": "components/dashboard/OverviewSection:235:24", "data-dynamic-content": "true", className: "py-3", children: [
                    order.items?.length || 0,
                    " items"
                  ] }, void 0, true, {
                    fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                    lineNumber: 254,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("td", { "data-source-location": "components/dashboard/OverviewSection:236:24", "data-dynamic-content": "true", className: "py-3 font-medium", children: [
                    "₹",
                    order.total_amount?.toLocaleString()
                  ] }, void 0, true, {
                    fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                    lineNumber: 255,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("td", { "data-source-location": "components/dashboard/OverviewSection:237:24", "data-dynamic-content": "true", className: "py-3", children: /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "components/dashboard/OverviewSection:237:45", "data-dynamic-content": "true", className: getStatusColor(order.status), "data-collection-item-field": "status", "data-collection-item-id": order?.id, children: order.status }, void 0, false, {
                    fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                    lineNumber: 256,
                    columnNumber: 141
                  }, this) }, void 0, false, {
                    fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                    lineNumber: 256,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("td", { "data-source-location": "components/dashboard/OverviewSection:238:24", "data-dynamic-content": "true", className: "py-3 text-gray-500", children: new Date(order.created_date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }, void 0, false, {
                    fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                    lineNumber: 257,
                    columnNumber: 25
                  }, this)
                ] }, order.id, true, {
                  fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                  lineNumber: 251,
                  columnNumber: 19
                }, this)
              ) }, void 0, false, {
                fileName: "/app/src/components/dashboard/OverviewSection.jsx",
                lineNumber: 249,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/OverviewSection.jsx",
              lineNumber: 238,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/OverviewSection.jsx",
              lineNumber: 237,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/OverviewSection.jsx",
            lineNumber: 220,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/OverviewSection.jsx",
            lineNumber: 212,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/OverviewSection.jsx",
          lineNumber: 208,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/app/src/components/dashboard/OverviewSection.jsx",
      lineNumber: 109,
      columnNumber: 5
    },
    this
  );
}
_c = OverviewSection;
var _c;
$RefreshReg$(_c, "OverviewSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/dashboard/OverviewSection.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/dashboard/OverviewSection.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBaUdRLFNBdUdFLFVBdkdGOzs7Ozs7Ozs7Ozs7Ozs7O0FBakdSLE9BQU9BLFdBQVc7QUFDbEIsU0FBU0MsY0FBYztBQUN2QjtBQUFBLEVBQ0VDO0FBQUFBLEVBQWFDO0FBQUFBLEVBQU9DO0FBQUFBLEVBQWFDO0FBQUFBLEVBQU9DO0FBQUFBLE9BQzFDO0FBQ0EsU0FBU0MsTUFBTUMsYUFBYUMsWUFBWUMsaUJBQWlCO0FBQ3pELFNBQVNDLGFBQWE7QUFDdEI7QUFBQSxFQUNFQztBQUFBQSxFQUFXQztBQUFBQSxFQUFNQztBQUFBQSxFQUFPQztBQUFBQSxFQUFPQztBQUFBQSxFQUMvQkM7QUFBQUEsRUFBU0M7QUFBQUEsRUFBcUJDO0FBQUFBLEVBQVVDO0FBQUFBLE9BQzFDO0FBRUEsd0JBQXdCQyxnQkFBZ0IsRUFBRUMsWUFBWUMsUUFBUUMsV0FBV0MsVUFBVSxHQUFHO0FBRXBGLFFBQU1DLGNBQWNILE9BQU9JLE9BQU8sQ0FBQ0MsTUFBTTtBQUN2QyxVQUFNQyxZQUFZLElBQUlDLEtBQUtGLEVBQUVHLFlBQVksRUFBRUMsYUFBYTtBQUN4RCxXQUFPSCxlQUFjLG9CQUFJQyxLQUFLLEdBQUVFLGFBQWE7QUFBQSxFQUMvQyxDQUFDO0FBRUQsUUFBTUMsZUFBZVAsWUFBWVEsT0FBTyxDQUFDQyxLQUFLUCxNQUFNTyxPQUFPUCxFQUFFUSxnQkFBZ0IsSUFBSSxDQUFDO0FBQ2xGLFFBQU1DLGdCQUFnQmQsT0FBT0ksT0FBTyxDQUFDQyxNQUFNLENBQUMsV0FBVyxhQUFhLFdBQVcsRUFBRVUsU0FBU1YsRUFBRVcsTUFBTSxDQUFDO0FBR25HLFFBQU1DLGNBQWM7QUFDcEIsV0FBU0MsSUFBSSxHQUFHQSxLQUFLLEdBQUdBLEtBQUs7QUFDM0IsVUFBTUMsT0FBTyxvQkFBSVosS0FBSztBQUN0QlksU0FBS0MsUUFBUUQsS0FBS0UsUUFBUSxJQUFJSCxDQUFDO0FBQy9CLFVBQU1JLFlBQVl0QixPQUFPSSxPQUFPLENBQUNDLE1BQU07QUFDckMsWUFBTUMsWUFBWSxJQUFJQyxLQUFLRixFQUFFRyxZQUFZO0FBQ3pDLGFBQU9GLFVBQVVHLGFBQWEsTUFBTVUsS0FBS1YsYUFBYTtBQUFBLElBQ3hELENBQUM7QUFDRFEsZ0JBQVlNLEtBQUs7QUFBQSxNQUNmQyxNQUFNTCxLQUFLTSxtQkFBbUIsU0FBUyxFQUFFQyxTQUFTLFFBQVEsQ0FBQztBQUFBLE1BQzNEQyxTQUFTTCxVQUFVWCxPQUFPLENBQUNDLEtBQUtQLE1BQU1PLE9BQU9QLEVBQUVRLGdCQUFnQixJQUFJLENBQUM7QUFBQSxJQUN0RSxDQUFDO0FBQUEsRUFDSDtBQUdBLFFBQU1lLG1CQUFtQkMsTUFBTSxFQUFFLEVBQUVDLEtBQUssQ0FBQztBQUN6QzNCLGNBQVk0QixRQUFRLENBQUNDLFVBQVU7QUFDN0IsVUFBTUMsT0FBTyxJQUFJMUIsS0FBS3lCLE1BQU14QixZQUFZLEVBQUUwQixTQUFTO0FBQ25ETixxQkFBaUJLLElBQUk7QUFBQSxFQUN2QixDQUFDO0FBQ0QsUUFBTUUsZUFBZVAsaUJBQWlCUSxJQUFJLENBQUNDLE9BQU9KLFVBQVU7QUFBQSxJQUMxREEsTUFBTSxHQUFHQSxJQUFJO0FBQUEsSUFDYmpDLFFBQVFxQztBQUFBQSxFQUNWLEVBQUUsRUFBRWpDLE9BQU8sQ0FBQ2tDLEdBQUdwQixNQUFNQSxLQUFLLEtBQUtBLEtBQUssRUFBRTtBQUV0QyxRQUFNcUIsUUFBUTtBQUFBLElBQ2Q7QUFBQSxNQUNFQyxPQUFPO0FBQUEsTUFDUEMsT0FBTyxJQUFJL0IsYUFBYWdDLGVBQWUsQ0FBQztBQUFBLE1BQ3hDQyxNQUFNOUQ7QUFBQUEsTUFDTitELE9BQU87QUFBQSxJQUNUO0FBQUEsSUFDQTtBQUFBLE1BQ0VKLE9BQU87QUFBQSxNQUNQQyxPQUFPdEMsWUFBWTBDO0FBQUFBLE1BQ25CRixNQUFNaEU7QUFBQUEsTUFDTmlFLE9BQU87QUFBQSxJQUNUO0FBQUEsSUFDQTtBQUFBLE1BQ0VKLE9BQU87QUFBQSxNQUNQQyxPQUFPeEMsVUFBVTRDO0FBQUFBLE1BQ2pCRixNQUFNL0Q7QUFBQUEsTUFDTmdFLE9BQU87QUFBQSxJQUNUO0FBQUEsSUFDQTtBQUFBLE1BQ0VKLE9BQU87QUFBQSxNQUNQQyxPQUFPM0IsY0FBYytCO0FBQUFBLE1BQ3JCRixNQUFNN0Q7QUFBQUEsTUFDTjhELE9BQU87QUFBQSxJQUNUO0FBQUEsRUFBQztBQUdELFFBQU1FLGlCQUFpQkEsQ0FBQzlCLFdBQVc7QUFDakMsVUFBTStCLFNBQVM7QUFBQSxNQUNiQyxTQUFTO0FBQUEsTUFDVEMsV0FBVztBQUFBLE1BQ1hDLFdBQVc7QUFBQSxNQUNYQyxPQUFPO0FBQUEsTUFDUEMsUUFBUTtBQUFBLE1BQ1JDLFdBQVc7QUFBQSxNQUNYQyxXQUFXO0FBQUEsSUFDYjtBQUNBLFdBQU9QLE9BQU8vQixNQUFNLEtBQUs7QUFBQSxFQUMzQjtBQUVBLFNBQ0U7QUFBQSxJQUFDLE9BQU87QUFBQSxJQUFQO0FBQUEsTUFBVyx3QkFBcUI7QUFBQSxNQUE0Qyx3QkFBcUI7QUFBQSxNQUNsRyxTQUFTLEVBQUV1QyxTQUFTLEVBQUU7QUFBQSxNQUN0QixTQUFTLEVBQUVBLFNBQVMsRUFBRTtBQUFBLE1BQ3RCLE1BQU0sRUFBRUEsU0FBUyxFQUFFO0FBQUEsTUFDbkIsV0FBVTtBQUFBLE1BR1I7QUFBQSwrQkFBQyxTQUFJLHdCQUFxQiw2Q0FBNEMsd0JBQXFCLFFBQ3pGO0FBQUEsaUNBQUMsUUFBRyx3QkFBcUIsNkNBQTRDLHdCQUFxQixTQUFRLFdBQVUseUNBQXVDLGdDQUFuSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUVBO0FBQUEsVUFDQSx1QkFBQyxPQUFFLHdCQUFxQiw4Q0FBNkMsd0JBQXFCLFFBQU8sV0FBVSxpQkFBZ0IsOEJBQTJCLFFBQU8sMkJBQXlCeEQsWUFBWXlELE1BQU16RCxZQUFZMEQsS0FBSztBQUFBO0FBQUEsWUFBNEIxRCxZQUFZeUI7QUFBQUEsWUFBSztBQUFBLGVBQXRRO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQTZRO0FBQUEsYUFKL1E7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUtBO0FBQUEsUUFHQSx1QkFBQyxTQUFJLHdCQUFxQiw4Q0FBNkMsd0JBQXFCLFFBQU8sV0FBVSx3REFDMUdlLGdCQUFNSDtBQUFBQSxVQUFJLENBQUNzQixNQUFNQyxVQUNsQix1QkFBQyxRQUFLLHdCQUFxQiwrQ0FBOEMsd0JBQXFCLFFBQzFGLGlDQUFDLGVBQVksd0JBQXFCLCtDQUE4Qyx3QkFBcUIsUUFBTyxXQUFVLE9BQ3BILGlDQUFDLFNBQUksd0JBQXFCLCtDQUE4Qyx3QkFBcUIsUUFBTyxXQUFVLG9DQUM1RztBQUFBLG1DQUFDLFNBQUksd0JBQXFCLCtDQUE4Qyx3QkFBcUIsUUFDM0Y7QUFBQSxxQ0FBQyxPQUFFLHdCQUFxQiwrQ0FBOEMsd0JBQXFCLFFBQU8sV0FBVSx5QkFBd0IsOEJBQTJCLFNBQVEsMkJBQXlCRCxNQUFNRixNQUFNRSxNQUFNRCxLQUFNQyxlQUFLbEIsU0FBN047QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBbU87QUFBQSxjQUNuTyx1QkFBQyxPQUFFLHdCQUFxQiwrQ0FBOEMsd0JBQXFCLFFBQU8sV0FBVSx5Q0FBd0MsOEJBQTJCLFNBQVEsMkJBQXlCa0IsTUFBTUYsTUFBTUUsTUFBTUQsS0FBTUMsZUFBS2pCLFNBQTdPO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQW1QO0FBQUEsaUJBRnJQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBR0E7QUFBQSxZQUNBLHVCQUFDLFNBQUksd0JBQXFCLCtDQUE4Qyx3QkFBcUIsUUFBTyxXQUFXLGtCQUFrQmlCLEtBQUtkLEtBQUssSUFDekksaUNBQUMsS0FBSyxNQUFMLEVBQVUsd0JBQXFCLCtDQUE4Qyx3QkFBcUIsU0FBUSxXQUFVLGFBQXJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQThILEtBRGhJO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRUE7QUFBQSxlQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUUEsS0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVVBLEtBWHNHYyxLQUFLbEIsT0FBL0c7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFZRTtBQUFBLFFBQ0YsS0FmRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZ0JBO0FBQUEsUUFHQSx1QkFBQyxTQUFJLHdCQUFxQiw4Q0FBNkMsd0JBQXFCLFFBQU8sV0FBVSxrREFDM0c7QUFBQSxpQ0FBQyxRQUFLLHdCQUFxQiw4Q0FBNkMsd0JBQXFCLFFBQzNGO0FBQUEsbUNBQUMsY0FBVyx3QkFBcUIsK0NBQThDLHdCQUFxQixTQUNsRyxpQ0FBQyxhQUFVLHdCQUFxQiwrQ0FBOEMsd0JBQXFCLFNBQVEsV0FBVSxXQUFVLHFDQUEvSDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFvSixLQUR0SjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVBO0FBQUEsWUFDQSx1QkFBQyxlQUFZLHdCQUFxQiwrQ0FBOEMsd0JBQXFCLFFBQ25HLGlDQUFDLFNBQUksd0JBQXFCLCtDQUE4Qyx3QkFBcUIsUUFBTyxXQUFVLFFBQzNHdkIsc0JBQVkyQyxNQUFNLENBQUNDLE1BQU1BLEVBQUVsQyxZQUFZLENBQUMsSUFDekMsdUJBQUMsU0FBSSx3QkFBcUIsK0NBQThDLHdCQUFxQixTQUFRLFdBQVUseURBQXVELG1DQUF0SztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVFLElBRUYsdUJBQUMsdUJBQW9CLHdCQUFxQiwrQ0FBOEMsd0JBQXFCLFFBQU8sT0FBTSxRQUFPLFFBQU8sUUFDcEksaUNBQUMsYUFBVSx3QkFBcUIsK0NBQThDLHdCQUFxQixRQUFPLE1BQU1WLGFBQzlHO0FBQUEscUNBQUMsaUJBQWMsd0JBQXFCLCtDQUE4Qyx3QkFBcUIsU0FBUSxpQkFBZ0IsT0FBTSxRQUFPLGFBQTVJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXFKO0FBQUEsY0FDckosdUJBQUMsU0FBTSx3QkFBcUIsK0NBQThDLHdCQUFxQixTQUFRLFNBQVEsUUFBTyxRQUFPLFdBQVUsVUFBVSxNQUFqSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFvSjtBQUFBLGNBQ3BKLHVCQUFDLFNBQU0sd0JBQXFCLCtDQUE4Qyx3QkFBcUIsU0FBUSxRQUFPLFdBQVUsVUFBVSxNQUFsSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFxSTtBQUFBLGNBQ3JJO0FBQUEsZ0JBQUM7QUFBQTtBQUFBLGtCQUFRLHdCQUFxQjtBQUFBLGtCQUE4Qyx3QkFBcUI7QUFBQSxrQkFDbkcsV0FBVyxDQUFDd0IsVUFBVSxDQUFDLElBQUlBLE1BQU1DLGVBQWUsQ0FBQyxJQUFJLFNBQVM7QUFBQSxrQkFDOUQsY0FBYyxFQUFFb0IsY0FBYyxHQUFHQyxRQUFRLFFBQVFDLFdBQVcsa0NBQWtDO0FBQUE7QUFBQSxnQkFGNUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRThGO0FBQUEsY0FFOUY7QUFBQSxnQkFBQztBQUFBO0FBQUEsa0JBQUssd0JBQXFCO0FBQUEsa0JBQThDLHdCQUFxQjtBQUFBLGtCQUNoRyxNQUFLO0FBQUEsa0JBQ0wsU0FBUTtBQUFBLGtCQUNSLFFBQU87QUFBQSxrQkFDUCxhQUFhO0FBQUEsa0JBQ2IsS0FBSyxFQUFFbEMsTUFBTSxXQUFXbUMsYUFBYSxHQUFHQyxHQUFHLEVBQUU7QUFBQTtBQUFBLGdCQUwzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FLNkM7QUFBQSxpQkFiL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFlQSxLQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWlCRSxLQXZCSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXlCQSxLQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTJCQTtBQUFBLGVBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZ0NBO0FBQUEsVUFFQSx1QkFBQyxRQUFLLHdCQUFxQiw4Q0FBNkMsd0JBQXFCLFFBQzNGO0FBQUEsbUNBQUMsY0FBVyx3QkFBcUIsK0NBQThDLHdCQUFxQixTQUNsRyxpQ0FBQyxhQUFVLHdCQUFxQiwrQ0FBOEMsd0JBQXFCLFNBQVEsV0FBVSxXQUFVLHNDQUEvSDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFxSixLQUR2SjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVBO0FBQUEsWUFDQSx1QkFBQyxlQUFZLHdCQUFxQiwrQ0FBOEMsd0JBQXFCLFFBQ25HLGlDQUFDLFNBQUksd0JBQXFCLCtDQUE4Qyx3QkFBcUIsUUFBTyxXQUFVLFFBQzNHL0IsdUJBQWF5QixNQUFNLENBQUNDLE1BQU1BLEVBQUU3RCxXQUFXLENBQUMsSUFDekMsdUJBQUMsU0FBSSx3QkFBcUIsK0NBQThDLHdCQUFxQixTQUFRLFdBQVUseURBQXVELG1DQUF0SztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVFLElBRUYsdUJBQUMsdUJBQW9CLHdCQUFxQiwrQ0FBOEMsd0JBQXFCLFFBQU8sT0FBTSxRQUFPLFFBQU8sUUFDcEksaUNBQUMsWUFBUyx3QkFBcUIsK0NBQThDLHdCQUFxQixRQUFPLE1BQU1tQyxjQUM3RztBQUFBLHFDQUFDLGlCQUFjLHdCQUFxQiwrQ0FBOEMsd0JBQXFCLFNBQVEsaUJBQWdCLE9BQU0sUUFBTyxhQUE1STtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFxSjtBQUFBLGNBQ3JKLHVCQUFDLFNBQU0sd0JBQXFCLCtDQUE4Qyx3QkFBcUIsU0FBUSxTQUFRLFFBQU8sUUFBTyxXQUFVLFVBQVUsTUFBako7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBb0o7QUFBQSxjQUNwSix1QkFBQyxTQUFNLHdCQUFxQiwrQ0FBOEMsd0JBQXFCLFNBQVEsUUFBTyxXQUFVLFVBQVUsTUFBbEk7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBcUk7QUFBQSxjQUNySTtBQUFBLGdCQUFDO0FBQUE7QUFBQSxrQkFBUSx3QkFBcUI7QUFBQSxrQkFBOEMsd0JBQXFCO0FBQUEsa0JBQ25HLFdBQVcsQ0FBQ00sVUFBVSxDQUFDQSxPQUFPLFFBQVE7QUFBQSxrQkFDdEMsY0FBYyxFQUFFcUIsY0FBYyxHQUFHQyxRQUFRLFFBQVFDLFdBQVcsa0NBQWtDO0FBQUE7QUFBQSxnQkFGNUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRThGO0FBQUEsY0FFOUYsdUJBQUMsT0FBSSx3QkFBcUIsK0NBQThDLHdCQUFxQixRQUFPLFNBQVEsVUFBUyxNQUFLLFdBQVUsUUFBUSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBdko7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBeUo7QUFBQSxpQkFSM0o7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFTQSxLQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBV0UsS0FqQko7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFtQkEsS0FwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFxQkE7QUFBQSxlQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTBCQTtBQUFBLGFBN0RGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE4REE7QUFBQSxRQUdBLHVCQUFDLFFBQUssd0JBQXFCLDhDQUE2Qyx3QkFBcUIsUUFDM0Y7QUFBQSxpQ0FBQyxjQUFXLHdCQUFxQiw4Q0FBNkMsd0JBQXFCLFNBQ2pHLGlDQUFDLGFBQVUsd0JBQXFCLCtDQUE4Qyx3QkFBcUIsU0FBUSxXQUFVLFdBQVUsNkJBQS9IO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQTRJLEtBRDlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRUE7QUFBQSxVQUNBLHVCQUFDLGVBQVksd0JBQXFCLDhDQUE2Qyx3QkFBcUIsUUFDakdoRSxpQkFBTzZDLFdBQVcsSUFDbkIsdUJBQUMsU0FBSSx3QkFBcUIsK0NBQThDLHdCQUFxQixTQUFRLFdBQVUsbUNBQzNHO0FBQUEsbUNBQUMsZUFBWSx3QkFBcUIsK0NBQThDLHdCQUFxQixTQUFRLFdBQVUsMENBQXZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQTZKO0FBQUEsWUFDN0osdUJBQUMsT0FBRSx3QkFBcUIsK0NBQThDLHdCQUFxQixTQUFRLFdBQVUsZUFBYyw2QkFBM0g7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBd0k7QUFBQSxZQUN4SSx1QkFBQyxPQUFFLHdCQUFxQiwrQ0FBOEMsd0JBQXFCLFNBQVEsV0FBVSxXQUFVLGlFQUF2SDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUF3SztBQUFBLGVBSDVLO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSUUsSUFFRixtQ0FFSTtBQUFBLG1DQUFDLFNBQUksd0JBQXFCLCtDQUE4Qyx3QkFBcUIsUUFBTyxXQUFVLHVCQUFzQixzQkFBbUIsVUFDcEo3QyxpQkFBT21FLE1BQU0sR0FBRyxFQUFFLEVBQUUvQjtBQUFBQSxjQUFJLENBQUNKLFVBQzVCLHVCQUFDLFNBQUksd0JBQXFCLCtDQUE4Qyx3QkFBcUIsUUFBc0IsV0FBVSxpRUFBZ0UsMkJBQXlCQSxPQUFPd0IsSUFDdk47QUFBQSx1Q0FBQyxTQUFJLHdCQUFxQiwrQ0FBOEMsd0JBQXFCLFFBQzNGO0FBQUEseUNBQUMsT0FBRSx3QkFBcUIsK0NBQThDLHdCQUFxQixRQUFPLFdBQVUsdUJBQXNCLDhCQUEyQixnQkFBZSwyQkFBeUJ4QixPQUFPd0IsSUFBS3hCLGdCQUFNb0MsZ0JBQXZOO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQW9PO0FBQUEsa0JBQ3BPLHVCQUFDLE9BQUUsd0JBQXFCLCtDQUE4Qyx3QkFBcUIsUUFBTyxXQUFVLHlCQUF5QnBDO0FBQUFBLDBCQUFNcUMsT0FBT3hCLFVBQVU7QUFBQSxvQkFBRTtBQUFBLG9CQUFVYixNQUFNc0MsZUFBZSxTQUFTdEMsTUFBTXNDLFlBQVksS0FBS3RDLE1BQU11QztBQUFBQSx1QkFBbk87QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBOE87QUFBQSxxQkFGaFA7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFHQTtBQUFBLGdCQUNBLHVCQUFDLFNBQUksd0JBQXFCLCtDQUE4Qyx3QkFBcUIsUUFBTyxXQUFVLGNBQzVHO0FBQUEseUNBQUMsT0FBRSx3QkFBcUIsK0NBQThDLHdCQUFxQixRQUFPLFdBQVUseUJBQXdCO0FBQUE7QUFBQSxvQkFBRXZDLE1BQU1uQixjQUFjNkIsZUFBZTtBQUFBLHVCQUF6SztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUEySztBQUFBLGtCQUMzSyx1QkFBQyxTQUFNLHdCQUFxQiwrQ0FBOEMsd0JBQXFCLFFBQU8sV0FBVyxHQUFHSSxlQUFlZCxNQUFNaEIsTUFBTSxDQUFDLFlBQVksOEJBQTJCLFVBQVMsMkJBQXlCZ0IsT0FBT3dCLElBQUt4QixnQkFBTWhCLFVBQTNPO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQWtQO0FBQUEscUJBRnBQO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBR0E7QUFBQSxtQkFSbUdnQixNQUFNd0IsSUFBL0c7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFTSTtBQUFBLFlBQ0osS0FaQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWFBO0FBQUEsWUFFQSx1QkFBQyxTQUFJLHdCQUFxQiwrQ0FBOEMsd0JBQXFCLFFBQU8sV0FBVSxtQ0FDNUcsaUNBQUMsV0FBTSx3QkFBcUIsK0NBQThDLHdCQUFxQixRQUFPLFdBQVUsVUFDOUc7QUFBQSxxQ0FBQyxXQUFNLHdCQUFxQiwrQ0FBOEMsd0JBQXFCLFNBQzdGLGlDQUFDLFFBQUcsd0JBQXFCLCtDQUE4Qyx3QkFBcUIsU0FBUSxXQUFVLDRDQUM1RztBQUFBLHVDQUFDLFFBQUcsd0JBQXFCLCtDQUE4Qyx3QkFBcUIsU0FBUSxXQUFVLG9CQUFtQix1QkFBakk7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBd0k7QUFBQSxnQkFDeEksdUJBQUMsUUFBRyx3QkFBcUIsK0NBQThDLHdCQUFxQixTQUFRLFdBQVUsb0JBQW1CLHFCQUFqSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFzSTtBQUFBLGdCQUN0SSx1QkFBQyxRQUFHLHdCQUFxQiwrQ0FBOEMsd0JBQXFCLFNBQVEsV0FBVSxvQkFBbUIscUJBQWpJO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQXNJO0FBQUEsZ0JBQ3RJLHVCQUFDLFFBQUcsd0JBQXFCLCtDQUE4Qyx3QkFBcUIsU0FBUSxXQUFVLG9CQUFtQixzQkFBakk7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBdUk7QUFBQSxnQkFDdkksdUJBQUMsUUFBRyx3QkFBcUIsK0NBQThDLHdCQUFxQixTQUFRLFdBQVUsb0JBQW1CLHNCQUFqSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUF1STtBQUFBLGdCQUN2SSx1QkFBQyxRQUFHLHdCQUFxQiwrQ0FBOEMsd0JBQXFCLFNBQVEsV0FBVSxvQkFBbUIsb0JBQWpJO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQXFJO0FBQUEsbUJBTnZJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBT0EsS0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVNBO0FBQUEsY0FDQSx1QkFBQyxXQUFNLHdCQUFxQiwrQ0FBOEMsd0JBQXFCLFFBQU8sV0FBVSxZQUFXLHNCQUFtQixVQUMzSXhELGlCQUFPbUUsTUFBTSxHQUFHLEVBQUUsRUFBRS9CO0FBQUFBLGdCQUFJLENBQUNKLFVBQzVCLHVCQUFDLFFBQUcsd0JBQXFCLCtDQUE4Qyx3QkFBcUIsUUFBc0IsV0FBVSxXQUFVLDJCQUF5QkEsT0FBT3dCLElBQ2hLO0FBQUEseUNBQUMsUUFBRyx3QkFBcUIsK0NBQThDLHdCQUFxQixRQUFPLFdBQVUsb0JBQW1CLDhCQUEyQixnQkFBZSwyQkFBeUJ4QixPQUFPd0IsSUFBS3hCLGdCQUFNb0MsZ0JBQXJOO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQWtPO0FBQUEsa0JBQ2xPLHVCQUFDLFFBQUcsd0JBQXFCLCtDQUE4Qyx3QkFBcUIsUUFBTyxXQUFVLFFBQVFwQyxnQkFBTXNDLGdCQUFnQixPQUEzSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUErSTtBQUFBLGtCQUMvSSx1QkFBQyxRQUFHLHdCQUFxQiwrQ0FBOEMsd0JBQXFCLFFBQU8sV0FBVSxRQUFRdEM7QUFBQUEsMEJBQU1xQyxPQUFPeEIsVUFBVTtBQUFBLG9CQUFFO0FBQUEsdUJBQTlJO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQW9KO0FBQUEsa0JBQ3BKLHVCQUFDLFFBQUcsd0JBQXFCLCtDQUE4Qyx3QkFBcUIsUUFBTyxXQUFVLG9CQUFtQjtBQUFBO0FBQUEsb0JBQUViLE1BQU1uQixjQUFjNkIsZUFBZTtBQUFBLHVCQUFySztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUF1SztBQUFBLGtCQUN2Syx1QkFBQyxRQUFHLHdCQUFxQiwrQ0FBOEMsd0JBQXFCLFFBQU8sV0FBVSxRQUFPLGlDQUFDLFNBQU0sd0JBQXFCLCtDQUE4Qyx3QkFBcUIsUUFBTyxXQUFXSSxlQUFlZCxNQUFNaEIsTUFBTSxHQUFHLDhCQUEyQixVQUFTLDJCQUF5QmdCLE9BQU93QixJQUFLeEIsZ0JBQU1oQixVQUE5TjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFxTyxLQUF6VjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFpVztBQUFBLGtCQUNqVyx1QkFBQyxRQUFHLHdCQUFxQiwrQ0FBOEMsd0JBQXFCLFFBQU8sV0FBVSxzQkFBc0IsY0FBSVQsS0FBS3lCLE1BQU14QixZQUFZLEVBQUVnRSxtQkFBbUIsSUFBSSxFQUFFdkMsTUFBTSxXQUFXd0MsUUFBUSxVQUFVLENBQUMsS0FBN047QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBK047QUFBQSxxQkFON0h6QyxNQUFNd0IsSUFBOUc7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFPSTtBQUFBLGNBQ0osS0FWQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVdBO0FBQUEsaUJBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdUJBLEtBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBeUJBO0FBQUEsZUExQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEyQ0UsS0FuREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFxREE7QUFBQSxhQXpERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBMERBO0FBQUE7QUFBQTtBQUFBLElBN0pGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQThKQTtBQUVKO0FBQUNrQixLQTdPdUI1RTtBQUFlLElBQUE0RTtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJTaG9wcGluZ0JhZyIsIlVzZXJzIiwiSW5kaWFuUnVwZWUiLCJDbG9jayIsIkFycm93VXBSaWdodCIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJCYWRnZSIsIkxpbmVDaGFydCIsIkxpbmUiLCJYQXhpcyIsIllBeGlzIiwiQ2FydGVzaWFuR3JpZCIsIlRvb2x0aXAiLCJSZXNwb25zaXZlQ29udGFpbmVyIiwiQmFyQ2hhcnQiLCJCYXIiLCJPdmVydmlld1NlY3Rpb24iLCJyZXN0YXVyYW50Iiwib3JkZXJzIiwiY3VzdG9tZXJzIiwibWVudUl0ZW1zIiwidG9kYXlPcmRlcnMiLCJmaWx0ZXIiLCJvIiwib3JkZXJEYXRlIiwiRGF0ZSIsImNyZWF0ZWRfZGF0ZSIsInRvRGF0ZVN0cmluZyIsInRvZGF5UmV2ZW51ZSIsInJlZHVjZSIsInN1bSIsInRvdGFsX2Ftb3VudCIsInBlbmRpbmdPcmRlcnMiLCJpbmNsdWRlcyIsInN0YXR1cyIsInJldmVudWVEYXRhIiwiaSIsImRhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImRheU9yZGVycyIsInB1c2giLCJuYW1lIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwid2Vla2RheSIsInJldmVudWUiLCJvcmRlcnNCeUhvdXJEYXRhIiwiQXJyYXkiLCJmaWxsIiwiZm9yRWFjaCIsIm9yZGVyIiwiaG91ciIsImdldEhvdXJzIiwib3JkZXJzQnlIb3VyIiwibWFwIiwiY291bnQiLCJfIiwic3RhdHMiLCJ0aXRsZSIsInZhbHVlIiwidG9Mb2NhbGVTdHJpbmciLCJpY29uIiwiY29sb3IiLCJsZW5ndGgiLCJnZXRTdGF0dXNDb2xvciIsImNvbG9ycyIsInBlbmRpbmciLCJjb25maXJtZWQiLCJwcmVwYXJpbmciLCJyZWFkeSIsInNlcnZlZCIsImNvbXBsZXRlZCIsImNhbmNlbGxlZCIsIm9wYWNpdHkiLCJpZCIsIl9pZCIsInN0YXQiLCJpbmRleCIsImV2ZXJ5IiwiZCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImJveFNoYWRvdyIsInN0cm9rZVdpZHRoIiwiciIsInNsaWNlIiwib3JkZXJfbnVtYmVyIiwiaXRlbXMiLCJ0YWJsZV9udW1iZXIiLCJvcmRlcl90eXBlIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwibWludXRlIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiT3ZlcnZpZXdTZWN0aW9uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHtcbiAgU2hvcHBpbmdCYWcsIFVzZXJzLCBJbmRpYW5SdXBlZSwgQ2xvY2ssIEFycm93VXBSaWdodCB9IGZyb21cblwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYmFkZ2VcIjtcbmltcG9ydCB7XG4gIExpbmVDaGFydCwgTGluZSwgWEF4aXMsIFlBeGlzLCBDYXJ0ZXNpYW5HcmlkLFxuICBUb29sdGlwLCBSZXNwb25zaXZlQ29udGFpbmVyLCBCYXJDaGFydCwgQmFyIH0gZnJvbVxuXCJyZWNoYXJ0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPdmVydmlld1NlY3Rpb24oeyByZXN0YXVyYW50LCBvcmRlcnMsIGN1c3RvbWVycywgbWVudUl0ZW1zIH0pIHtcbiAgLy8gQ2FsY3VsYXRlIHN0YXRzIGZyb20gcmVhbCBkYXRhXG4gIGNvbnN0IHRvZGF5T3JkZXJzID0gb3JkZXJzLmZpbHRlcigobykgPT4ge1xuICAgIGNvbnN0IG9yZGVyRGF0ZSA9IG5ldyBEYXRlKG8uY3JlYXRlZF9kYXRlKS50b0RhdGVTdHJpbmcoKTtcbiAgICByZXR1cm4gb3JkZXJEYXRlID09PSBuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpO1xuICB9KTtcblxuICBjb25zdCB0b2RheVJldmVudWUgPSB0b2RheU9yZGVycy5yZWR1Y2UoKHN1bSwgbykgPT4gc3VtICsgKG8udG90YWxfYW1vdW50IHx8IDApLCAwKTtcbiAgY29uc3QgcGVuZGluZ09yZGVycyA9IG9yZGVycy5maWx0ZXIoKG8pID0+IFsncGVuZGluZycsICdjb25maXJtZWQnLCAncHJlcGFyaW5nJ10uaW5jbHVkZXMoby5zdGF0dXMpKTtcblxuICAvLyBSZWFsIHJldmVudWUgZGF0YSBmb3IgbGFzdCA3IGRheXNcbiAgY29uc3QgcmV2ZW51ZURhdGEgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDY7IGkgPj0gMDsgaS0tKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gaSk7XG4gICAgY29uc3QgZGF5T3JkZXJzID0gb3JkZXJzLmZpbHRlcigobykgPT4ge1xuICAgICAgY29uc3Qgb3JkZXJEYXRlID0gbmV3IERhdGUoby5jcmVhdGVkX2RhdGUpO1xuICAgICAgcmV0dXJuIG9yZGVyRGF0ZS50b0RhdGVTdHJpbmcoKSA9PT0gZGF0ZS50b0RhdGVTdHJpbmcoKTtcbiAgICB9KTtcbiAgICByZXZlbnVlRGF0YS5wdXNoKHtcbiAgICAgIG5hbWU6IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHsgd2Vla2RheTogJ3Nob3J0JyB9KSxcbiAgICAgIHJldmVudWU6IGRheU9yZGVycy5yZWR1Y2UoKHN1bSwgbykgPT4gc3VtICsgKG8udG90YWxfYW1vdW50IHx8IDApLCAwKVxuICAgIH0pO1xuICB9XG5cbiAgLy8gUmVhbCBvcmRlcnMgYnkgaG91clxuICBjb25zdCBvcmRlcnNCeUhvdXJEYXRhID0gQXJyYXkoMjQpLmZpbGwoMCk7XG4gIHRvZGF5T3JkZXJzLmZvckVhY2goKG9yZGVyKSA9PiB7XG4gICAgY29uc3QgaG91ciA9IG5ldyBEYXRlKG9yZGVyLmNyZWF0ZWRfZGF0ZSkuZ2V0SG91cnMoKTtcbiAgICBvcmRlcnNCeUhvdXJEYXRhW2hvdXJdKys7XG4gIH0pO1xuICBjb25zdCBvcmRlcnNCeUhvdXIgPSBvcmRlcnNCeUhvdXJEYXRhLm1hcCgoY291bnQsIGhvdXIpID0+ICh7XG4gICAgaG91cjogYCR7aG91cn06MDBgLFxuICAgIG9yZGVyczogY291bnRcbiAgfSkpLmZpbHRlcigoXywgaSkgPT4gaSA+PSA4ICYmIGkgPD0gMjIpO1xuXG4gIGNvbnN0IHN0YXRzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiVG9kYXkncyBSZXZlbnVlXCIsXG4gICAgdmFsdWU6IGDigrkke3RvZGF5UmV2ZW51ZS50b0xvY2FsZVN0cmluZygpfWAsXG4gICAgaWNvbjogSW5kaWFuUnVwZWUsXG4gICAgY29sb3I6IFwiYmctb3JhbmdlLTEwMCB0ZXh0LW9yYW5nZS02MDBcIlxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiVG9kYXkncyBPcmRlcnNcIixcbiAgICB2YWx1ZTogdG9kYXlPcmRlcnMubGVuZ3RoLFxuICAgIGljb246IFNob3BwaW5nQmFnLFxuICAgIGNvbG9yOiBcImJnLWJsdWUtMTAwIHRleHQtYmx1ZS02MDBcIlxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiVG90YWwgQ3VzdG9tZXJzXCIsXG4gICAgdmFsdWU6IGN1c3RvbWVycy5sZW5ndGgsXG4gICAgaWNvbjogVXNlcnMsXG4gICAgY29sb3I6IFwiYmctZ3JlZW4tMTAwIHRleHQtZ3JlZW4tNjAwXCJcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlBlbmRpbmcgT3JkZXJzXCIsXG4gICAgdmFsdWU6IHBlbmRpbmdPcmRlcnMubGVuZ3RoLFxuICAgIGljb246IENsb2NrLFxuICAgIGNvbG9yOiBcImJnLW9yYW5nZS0xMDAgdGV4dC1vcmFuZ2UtNjAwXCJcbiAgfV07XG5cblxuICBjb25zdCBnZXRTdGF0dXNDb2xvciA9IChzdGF0dXMpID0+IHtcbiAgICBjb25zdCBjb2xvcnMgPSB7XG4gICAgICBwZW5kaW5nOiBcImJnLXllbGxvdy0xMDAgdGV4dC15ZWxsb3ctNzAwXCIsXG4gICAgICBjb25maXJtZWQ6IFwiYmctYmx1ZS0xMDAgdGV4dC1ibHVlLTcwMFwiLFxuICAgICAgcHJlcGFyaW5nOiBcImJnLXB1cnBsZS0xMDAgdGV4dC1wdXJwbGUtNzAwXCIsXG4gICAgICByZWFkeTogXCJiZy1ncmVlbi0xMDAgdGV4dC1ncmVlbi03MDBcIixcbiAgICAgIHNlcnZlZDogXCJiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNzAwXCIsXG4gICAgICBjb21wbGV0ZWQ6IFwiYmctZW1lcmFsZC0xMDAgdGV4dC1lbWVyYWxkLTcwMFwiLFxuICAgICAgY2FuY2VsbGVkOiBcImJnLXJlZC0xMDAgdGV4dC1yZWQtNzAwXCJcbiAgICB9O1xuICAgIHJldHVybiBjb2xvcnNbc3RhdHVzXSB8fCBcImJnLWdyYXktMTAwIHRleHQtZ3JheS03MDBcIjtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3ZlcnZpZXdTZWN0aW9uOjkwOjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxuICAgIGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuXG4gICAgICB7LyogV2VsY29tZSAqL31cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PdmVydmlld1NlY3Rpb246OTc6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICA8aDEgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PdmVydmlld1NlY3Rpb246OTg6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMCBtYi0yXCI+XG4gICAgICAgICAgV2VsY29tZSBiYWNrISDwn5GLXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3ZlcnZpZXdTZWN0aW9uOjEwMTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwibmFtZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyZXN0YXVyYW50Py5pZCB8fCByZXN0YXVyYW50Py5faWR9PkhlcmUncyB3aGF0J3MgaGFwcGVuaW5nIGF0IHtyZXN0YXVyYW50Py5uYW1lfSB0b2RheS48L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIFN0YXRzIEdyaWQgKi99XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3ZlcnZpZXdTZWN0aW9uOjEwNTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtNFwiPlxuICAgICAgICB7c3RhdHMubWFwKChzdGF0LCBpbmRleCkgPT5cbiAgICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PdmVydmlld1NlY3Rpb246MTA3OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtzdGF0LnRpdGxlfT5cbiAgICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL092ZXJ2aWV3U2VjdGlvbjoxMDg6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJwLTZcIj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL092ZXJ2aWV3U2VjdGlvbjoxMDk6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PdmVydmlld1NlY3Rpb246MTEwOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL092ZXJ2aWV3U2VjdGlvbjoxMTE6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInRpdGxlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3N0YXQ/LmlkIHx8IHN0YXQ/Ll9pZH0+e3N0YXQudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PdmVydmlld1NlY3Rpb246MTEyOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDAgbXQtMVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidmFsdWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c3RhdD8uaWQgfHwgc3RhdD8uX2lkfT57c3RhdC52YWx1ZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL092ZXJ2aWV3U2VjdGlvbjoxMTQ6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2BwLTMgcm91bmRlZC14bCAke3N0YXQuY29sb3J9YH0+XG4gICAgICAgICAgICAgICAgICA8c3RhdC5pY29uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3ZlcnZpZXdTZWN0aW9uOjExNToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTYgaC02XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogQ2hhcnRzICovfVxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL092ZXJ2aWV3U2VjdGlvbjoxMjQ6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbGc6Z3JpZC1jb2xzLTIgZ2FwLTQgc206Z2FwLTZcIj5cbiAgICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PdmVydmlld1NlY3Rpb246MTI1OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICA8Q2FyZEhlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL092ZXJ2aWV3U2VjdGlvbjoxMjY6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICA8Q2FyZFRpdGxlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3ZlcnZpZXdTZWN0aW9uOjEyNzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+UmV2ZW51ZSAoTGFzdCA3IERheXMpPC9DYXJkVGl0bGU+XG4gICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL092ZXJ2aWV3U2VjdGlvbjoxMjk6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PdmVydmlld1NlY3Rpb246MTMwOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiaC02NFwiPlxuICAgICAgICAgICAgICB7cmV2ZW51ZURhdGEuZXZlcnkoKGQpID0+IGQucmV2ZW51ZSA9PT0gMCkgP1xuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3ZlcnZpZXdTZWN0aW9uOjEzMjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJoLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgTm8gcmV2ZW51ZSBkYXRhIHlldFxuICAgICAgICAgICAgICAgIDwvZGl2PiA6XG5cbiAgICAgICAgICAgICAgPFJlc3BvbnNpdmVDb250YWluZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PdmVydmlld1NlY3Rpb246MTM2OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPlxuICAgICAgICAgICAgICAgICAgPExpbmVDaGFydCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL092ZXJ2aWV3U2VjdGlvbjoxMzc6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBkYXRhPXtyZXZlbnVlRGF0YX0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJ0ZXNpYW5HcmlkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3ZlcnZpZXdTZWN0aW9uOjEzODoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBzdHJva2VEYXNoYXJyYXk9XCIzIDNcIiBzdHJva2U9XCIjZjBmMGYwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPFhBeGlzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3ZlcnZpZXdTZWN0aW9uOjEzOToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBkYXRhS2V5PVwibmFtZVwiIHN0cm9rZT1cIiM5Y2EzYWZcIiBmb250U2l6ZT17MTJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxZQXhpcyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL092ZXJ2aWV3U2VjdGlvbjoxNDA6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgc3Ryb2tlPVwiIzljYTNhZlwiIGZvbnRTaXplPXsxMn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PdmVydmlld1NlY3Rpb246MTQxOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcj17KHZhbHVlKSA9PiBbYOKCuSR7dmFsdWUudG9Mb2NhbGVTdHJpbmcoKX1gLCAnUmV2ZW51ZSddfVxuICAgICAgICAgICAgICAgICAgY29udGVudFN0eWxlPXt7IGJvcmRlclJhZGl1czogOCwgYm9yZGVyOiAnbm9uZScsIGJveFNoYWRvdzogJzAgNHB4IDZweCAtMXB4IHJnYigwIDAgMCAvIDAuMSknIH19IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpbmUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PdmVydmlld1NlY3Rpb246MTQ1OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJtb25vdG9uZVwiXG4gICAgICAgICAgICAgICAgICBkYXRhS2V5PVwicmV2ZW51ZVwiXG4gICAgICAgICAgICAgICAgICBzdHJva2U9XCIjZWE1ODBjXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXszfVxuICAgICAgICAgICAgICAgICAgZG90PXt7IGZpbGw6ICcjZWE1ODBjJywgc3Ryb2tlV2lkdGg6IDIsIHI6IDQgfX0gLz5cblxuICAgICAgICAgICAgICAgICAgPC9MaW5lQ2hhcnQ+XG4gICAgICAgICAgICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmQ+XG5cbiAgICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PdmVydmlld1NlY3Rpb246MTU5OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICA8Q2FyZEhlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL092ZXJ2aWV3U2VjdGlvbjoxNjA6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICA8Q2FyZFRpdGxlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3ZlcnZpZXdTZWN0aW9uOjE2MToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+T3JkZXJzIGJ5IEhvdXIgKFRvZGF5KTwvQ2FyZFRpdGxlPlxuICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PdmVydmlld1NlY3Rpb246MTYzOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3ZlcnZpZXdTZWN0aW9uOjE2NDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImgtNjRcIj5cbiAgICAgICAgICAgICAge29yZGVyc0J5SG91ci5ldmVyeSgoZCkgPT4gZC5vcmRlcnMgPT09IDApID9cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL092ZXJ2aWV3U2VjdGlvbjoxNjY6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgIE5vIG9yZGVycyB0b2RheSB5ZXRcbiAgICAgICAgICAgICAgICA8L2Rpdj4gOlxuXG4gICAgICAgICAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3ZlcnZpZXdTZWN0aW9uOjE3MDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgICAgIDxCYXJDaGFydCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL092ZXJ2aWV3U2VjdGlvbjoxNzE6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBkYXRhPXtvcmRlcnNCeUhvdXJ9PlxuICAgICAgICAgICAgICAgICAgICA8Q2FydGVzaWFuR3JpZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL092ZXJ2aWV3U2VjdGlvbjoxNzI6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgc3Ryb2tlRGFzaGFycmF5PVwiMyAzXCIgc3Ryb2tlPVwiI2YwZjBmMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxYQXhpcyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL092ZXJ2aWV3U2VjdGlvbjoxNzM6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgZGF0YUtleT1cImhvdXJcIiBzdHJva2U9XCIjOWNhM2FmXCIgZm9udFNpemU9ezEwfSAvPlxuICAgICAgICAgICAgICAgICAgICA8WUF4aXMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PdmVydmlld1NlY3Rpb246MTc0OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHN0cm9rZT1cIiM5Y2EzYWZcIiBmb250U2l6ZT17MTJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3ZlcnZpZXdTZWN0aW9uOjE3NToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI9eyh2YWx1ZSkgPT4gW3ZhbHVlLCAnT3JkZXJzJ119XG4gICAgICAgICAgICAgICAgICBjb250ZW50U3R5bGU9e3sgYm9yZGVyUmFkaXVzOiA4LCBib3JkZXI6ICdub25lJywgYm94U2hhZG93OiAnMCA0cHggNnB4IC0xcHggcmdiKDAgMCAwIC8gMC4xKScgfX0gLz5cblxuICAgICAgICAgICAgICAgICAgICA8QmFyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3ZlcnZpZXdTZWN0aW9uOjE3OToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGRhdGFLZXk9XCJvcmRlcnNcIiBmaWxsPVwiI2VhNTgwY1wiIHJhZGl1cz17WzQsIDQsIDAsIDBdfSAvPlxuICAgICAgICAgICAgICAgICAgPC9CYXJDaGFydD5cbiAgICAgICAgICAgICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogUmVjZW50IE9yZGVycyAqL31cbiAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3ZlcnZpZXdTZWN0aW9uOjE4OTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgIDxDYXJkSGVhZGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3ZlcnZpZXdTZWN0aW9uOjE5MDo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgIDxDYXJkVGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PdmVydmlld1NlY3Rpb246MTkxOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtbGdcIj5SZWNlbnQgT3JkZXJzPC9DYXJkVGl0bGU+XG4gICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3ZlcnZpZXdTZWN0aW9uOjE5Mzo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAge29yZGVycy5sZW5ndGggPT09IDAgP1xuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PdmVydmlld1NlY3Rpb246MTk1OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTEyIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgPFNob3BwaW5nQmFnIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3ZlcnZpZXdTZWN0aW9uOjE5NjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgbXgtYXV0byBtYi0zIHRleHQtZ3JheS0zMDBcIiAvPlxuICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL092ZXJ2aWV3U2VjdGlvbjoxOTc6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj5ObyBvcmRlcnMgeWV0PC9wPlxuICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL092ZXJ2aWV3U2VjdGlvbjoxOTg6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbVwiPk9yZGVycyB3aWxsIGFwcGVhciBoZXJlIHdoZW4gY3VzdG9tZXJzIHBsYWNlIHRoZW08L3A+XG4gICAgICAgICAgICA8L2Rpdj4gOlxuXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgICAgey8qIE1vYmlsZSBsaXN0ICovfVxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3ZlcnZpZXdTZWN0aW9uOjIwMzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNtOmhpZGRlbiBzcGFjZS15LTNcIiBkYXRhLWNvbGxlY3Rpb24taWQ9XCJvcmRlcnNcIj5cbiAgICAgICAgICAgICAgICB7b3JkZXJzLnNsaWNlKDAsIDEwKS5tYXAoKG9yZGVyKSA9PlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3ZlcnZpZXdTZWN0aW9uOjIwNToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17b3JkZXIuaWR9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweS0yIGJvcmRlci1iIGxhc3Q6Ym9yZGVyLTBcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17b3JkZXI/LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL092ZXJ2aWV3U2VjdGlvbjoyMDY6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL092ZXJ2aWV3U2VjdGlvbjoyMDc6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LXNtXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJvcmRlcl9udW1iZXJcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17b3JkZXI/LmlkfT57b3JkZXIub3JkZXJfbnVtYmVyfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL092ZXJ2aWV3U2VjdGlvbjoyMDg6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDBcIj57b3JkZXIuaXRlbXM/Lmxlbmd0aCB8fCAwfSBpdGVtcyDCtyB7b3JkZXIudGFibGVfbnVtYmVyID8gYFRhYmxlICR7b3JkZXIudGFibGVfbnVtYmVyfWAgOiBvcmRlci5vcmRlcl90eXBlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PdmVydmlld1NlY3Rpb246MjEwOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3ZlcnZpZXdTZWN0aW9uOjIxMToyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPuKCuXtvcmRlci50b3RhbF9hbW91bnQ/LnRvTG9jYWxlU3RyaW5nKCl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL092ZXJ2aWV3U2VjdGlvbjoyMTI6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2Ake2dldFN0YXR1c0NvbG9yKG9yZGVyLnN0YXR1cyl9IHRleHQteHNgfSBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInN0YXR1c1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtvcmRlcj8uaWR9PntvcmRlci5zdGF0dXN9PC9CYWRnZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvKiBEZXNrdG9wIHRhYmxlICovfVxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3ZlcnZpZXdTZWN0aW9uOjIxODoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImhpZGRlbiBzbTpibG9jayBvdmVyZmxvdy14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8dGFibGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PdmVydmlld1NlY3Rpb246MjE5OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICA8dGhlYWQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PdmVydmlld1NlY3Rpb246MjIwOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dHIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PdmVydmlld1NlY3Rpb246MjIxOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtbGVmdCB0ZXh0LXNtIHRleHQtZ3JheS01MDAgYm9yZGVyLWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PdmVydmlld1NlY3Rpb246MjIyOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInBiLTMgZm9udC1tZWRpdW1cIj5PcmRlciAjPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PdmVydmlld1NlY3Rpb246MjIzOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInBiLTMgZm9udC1tZWRpdW1cIj5UYWJsZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3ZlcnZpZXdTZWN0aW9uOjIyNDoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJwYi0zIGZvbnQtbWVkaXVtXCI+SXRlbXM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL092ZXJ2aWV3U2VjdGlvbjoyMjU6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwicGItMyBmb250LW1lZGl1bVwiPkFtb3VudDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3ZlcnZpZXdTZWN0aW9uOjIyNjoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJwYi0zIGZvbnQtbWVkaXVtXCI+U3RhdHVzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PdmVydmlld1NlY3Rpb246MjI3OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInBiLTMgZm9udC1tZWRpdW1cIj5UaW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICA8dGJvZHkgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PdmVydmlld1NlY3Rpb246MjMwOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZGl2aWRlLXlcIiBkYXRhLWNvbGxlY3Rpb24taWQ9XCJvcmRlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAge29yZGVycy5zbGljZSgwLCAxMCkubWFwKChvcmRlcikgPT5cbiAgICAgICAgICAgICAgICAgIDx0ciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL092ZXJ2aWV3U2VjdGlvbjoyMzI6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e29yZGVyLmlkfSBjbGFzc05hbWU9XCJ0ZXh0LXNtXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e29yZGVyPy5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PdmVydmlld1NlY3Rpb246MjMzOjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicHktMyBmb250LW1lZGl1bVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwib3JkZXJfbnVtYmVyXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e29yZGVyPy5pZH0+e29yZGVyLm9yZGVyX251bWJlcn08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3ZlcnZpZXdTZWN0aW9uOjIzNDoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB5LTNcIj57b3JkZXIudGFibGVfbnVtYmVyIHx8ICctJ308L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3ZlcnZpZXdTZWN0aW9uOjIzNToyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB5LTNcIj57b3JkZXIuaXRlbXM/Lmxlbmd0aCB8fCAwfSBpdGVtczwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PdmVydmlld1NlY3Rpb246MjM2OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicHktMyBmb250LW1lZGl1bVwiPuKCuXtvcmRlci50b3RhbF9hbW91bnQ/LnRvTG9jYWxlU3RyaW5nKCl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL092ZXJ2aWV3U2VjdGlvbjoyMzc6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJweS0zXCI+PEJhZGdlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3ZlcnZpZXdTZWN0aW9uOjIzNzo0NVwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17Z2V0U3RhdHVzQ29sb3Iob3JkZXIuc3RhdHVzKX0gZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJzdGF0dXNcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17b3JkZXI/LmlkfT57b3JkZXIuc3RhdHVzfTwvQmFkZ2U+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL092ZXJ2aWV3U2VjdGlvbjoyMzg6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJweS0zIHRleHQtZ3JheS01MDBcIj57bmV3IERhdGUob3JkZXIuY3JlYXRlZF9kYXRlKS50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L21vdGlvbi5kaXY+KTtcblxufSJdLCJmaWxlIjoiL2FwcC9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvT3ZlcnZpZXdTZWN0aW9uLmpzeCJ9