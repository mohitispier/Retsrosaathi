import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Customers.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/Customers.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { base44 } from "/src/api/base44Client.js";
import DashboardLayout from "/src/components/dashboard/DashboardLayout.jsx";
import {
  Search,
  Users,
  Phone,
  Mail,
  ShoppingBag,
  IndianRupee,
  Calendar,
  Tag,
  MoreVertical,
  Eye
} from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
import { Card, CardContent, CardHeader, CardTitle } from "/src/components/ui/card.jsx";
import { Button } from "/src/components/ui/button.jsx";
import { Input } from "/src/components/ui/input.jsx";
import { Badge } from "/src/components/ui/badge.jsx";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "/src/components/ui/dialog.jsx";
import { format } from "/node_modules/.vite/deps/date-fns.js?v=79425e35";
function CustomersContent({ user, restaurant, id }) {
  _s();
  const [customers, setCustomers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  useEffect(() => {
    if (restaurant?.restaurant_id) {
      loadData();
    }
  }, [restaurant]);
  const loadData = async () => {
    try {
      const [customersData, ordersData] = await Promise.all(
        [
          base44.entities.Customer.filter({ restaurant_id: restaurant.restaurant_id }),
          base44.entities.Order.filter({ restaurant_id: restaurant.restaurant_id })
        ]
      );
      setCustomers(customersData);
      setOrders(ordersData);
    } catch (e) {
      console.error("Error loading data:", e);
    } finally {
      setIsLoading(false);
    }
  };
  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch = customer.name?.toLowerCase().includes(searchQuery.toLowerCase()) || customer.phone?.includes(searchQuery) || customer.email?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });
  const getCustomerOrders = (customerPhone) => {
    return orders.filter((o) => o.customer_phone === customerPhone);
  };
  const totalCustomers = customers.length;
  const repeatCustomers = customers.filter((c) => c.total_orders > 1).length;
  const totalRevenue = customers.reduce((sum, c) => sum + (c.total_spent || 0), 0);
  const avgOrderValue = totalRevenue / (orders.length || 1);
  if (isLoading) {
    return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:68:6", "data-dynamic-content": "false", className: "flex items-center justify-center h-64", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:69:8", "data-dynamic-content": "false", className: "animate-spin rounded-full h-8 w-8 border-b-2 border-violet-600" }, void 0, false, {
      fileName: "/app/src/pages/Customers.jsx",
      lineNumber: 88,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/Customers.jsx",
      lineNumber: 87,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:75:4", "data-dynamic-content": "true", className: "space-y-6", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:77:6", "data-dynamic-content": "false", className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:78:8", "data-dynamic-content": "false", children: [
      /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/Customers:79:10", "data-dynamic-content": "false", className: "text-2xl font-bold text-gray-900", children: "Customers" }, void 0, false, {
        fileName: "/app/src/pages/Customers.jsx",
        lineNumber: 98,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Customers:80:10", "data-dynamic-content": "false", className: "text-gray-500", children: "Manage your customer database" }, void 0, false, {
        fileName: "/app/src/pages/Customers.jsx",
        lineNumber: 99,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Customers.jsx",
      lineNumber: 97,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/Customers.jsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:85:6", "data-dynamic-content": "true", className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/Customers:86:8", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/Customers:87:10", "data-dynamic-content": "true", className: "p-4", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:88:12", "data-dynamic-content": "true", className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:89:14", "data-dynamic-content": "false", className: "p-2 bg-violet-100 rounded-lg", children: /* @__PURE__ */ jsxDEV(Users, { "data-source-location": "pages/Customers:90:16", "data-dynamic-content": "false", className: "w-5 h-5 text-violet-600" }, void 0, false, {
          fileName: "/app/src/pages/Customers.jsx",
          lineNumber: 109,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Customers.jsx",
          lineNumber: 108,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:92:14", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Customers:93:16", "data-dynamic-content": "true", className: "text-2xl font-bold", "data-collection-item-field": "totalCustomers", "data-collection-item-id": id, children: totalCustomers }, void 0, false, {
            fileName: "/app/src/pages/Customers.jsx",
            lineNumber: 112,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Customers:94:16", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Total Customers" }, void 0, false, {
            fileName: "/app/src/pages/Customers.jsx",
            lineNumber: 113,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Customers.jsx",
          lineNumber: 111,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Customers.jsx",
        lineNumber: 107,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Customers.jsx",
        lineNumber: 106,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Customers.jsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/Customers:99:8", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/Customers:100:10", "data-dynamic-content": "true", className: "p-4", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:101:12", "data-dynamic-content": "true", className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:102:14", "data-dynamic-content": "false", className: "p-2 bg-green-100 rounded-lg", children: /* @__PURE__ */ jsxDEV(Users, { "data-source-location": "pages/Customers:103:16", "data-dynamic-content": "false", className: "w-5 h-5 text-green-600" }, void 0, false, {
          fileName: "/app/src/pages/Customers.jsx",
          lineNumber: 122,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Customers.jsx",
          lineNumber: 121,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:105:14", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Customers:106:16", "data-dynamic-content": "true", className: "text-2xl font-bold", "data-collection-item-field": "repeatCustomers", "data-collection-item-id": id, children: repeatCustomers }, void 0, false, {
            fileName: "/app/src/pages/Customers.jsx",
            lineNumber: 125,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Customers:107:16", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Repeat Customers" }, void 0, false, {
            fileName: "/app/src/pages/Customers.jsx",
            lineNumber: 126,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Customers.jsx",
          lineNumber: 124,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Customers.jsx",
        lineNumber: 120,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Customers.jsx",
        lineNumber: 119,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Customers.jsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/Customers:112:8", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/Customers:113:10", "data-dynamic-content": "true", className: "p-4", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:114:12", "data-dynamic-content": "true", className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:115:14", "data-dynamic-content": "false", className: "p-2 bg-blue-100 rounded-lg", children: /* @__PURE__ */ jsxDEV(IndianRupee, { "data-source-location": "pages/Customers:116:16", "data-dynamic-content": "false", className: "w-5 h-5 text-blue-600" }, void 0, false, {
          fileName: "/app/src/pages/Customers.jsx",
          lineNumber: 135,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Customers.jsx",
          lineNumber: 134,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:118:14", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Customers:119:16", "data-dynamic-content": "true", className: "text-2xl font-bold", children: [
            "₹",
            totalRevenue.toLocaleString()
          ] }, void 0, true, {
            fileName: "/app/src/pages/Customers.jsx",
            lineNumber: 138,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Customers:120:16", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Total Revenue" }, void 0, false, {
            fileName: "/app/src/pages/Customers.jsx",
            lineNumber: 139,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Customers.jsx",
          lineNumber: 137,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Customers.jsx",
        lineNumber: 133,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Customers.jsx",
        lineNumber: 132,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Customers.jsx",
        lineNumber: 131,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/Customers:125:8", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/Customers:126:10", "data-dynamic-content": "true", className: "p-4", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:127:12", "data-dynamic-content": "true", className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:128:14", "data-dynamic-content": "false", className: "p-2 bg-orange-100 rounded-lg", children: /* @__PURE__ */ jsxDEV(ShoppingBag, { "data-source-location": "pages/Customers:129:16", "data-dynamic-content": "false", className: "w-5 h-5 text-orange-600" }, void 0, false, {
          fileName: "/app/src/pages/Customers.jsx",
          lineNumber: 148,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Customers.jsx",
          lineNumber: 147,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:131:14", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Customers:132:16", "data-dynamic-content": "true", className: "text-2xl font-bold", children: [
            "₹",
            Math.round(avgOrderValue)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Customers.jsx",
            lineNumber: 151,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Customers:133:16", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Avg. Order Value" }, void 0, false, {
            fileName: "/app/src/pages/Customers.jsx",
            lineNumber: 152,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Customers.jsx",
          lineNumber: 150,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Customers.jsx",
        lineNumber: 146,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Customers.jsx",
        lineNumber: 145,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Customers.jsx",
        lineNumber: 144,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Customers.jsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/Customers:141:6", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/Customers:142:8", "data-dynamic-content": "true", className: "p-4", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:143:10", "data-dynamic-content": "true", className: "relative", children: [
      /* @__PURE__ */ jsxDEV(Search, { "data-source-location": "pages/Customers:144:12", "data-dynamic-content": "false", className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }, void 0, false, {
        fileName: "/app/src/pages/Customers.jsx",
        lineNumber: 163,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(
        Input,
        {
          "data-source-location": "pages/Customers:145:12",
          "data-dynamic-content": "true",
          placeholder: "Search by name, phone, or email...",
          value: searchQuery,
          onChange: (e) => setSearchQuery(e.target.value),
          className: "pl-9"
        },
        void 0,
        false,
        {
          fileName: "/app/src/pages/Customers.jsx",
          lineNumber: 164,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/src/pages/Customers.jsx",
      lineNumber: 162,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/Customers.jsx",
      lineNumber: 161,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/Customers.jsx",
      lineNumber: 160,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/Customers:156:6", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/Customers:157:8", "data-dynamic-content": "true", className: "p-0", children: filteredCustomers.length === 0 ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:159:12", "data-dynamic-content": "false", className: "text-center py-12 text-gray-500", children: [
      /* @__PURE__ */ jsxDEV(Users, { "data-source-location": "pages/Customers:160:14", "data-dynamic-content": "false", className: "w-12 h-12 mx-auto mb-3 text-gray-300" }, void 0, false, {
        fileName: "/app/src/pages/Customers.jsx",
        lineNumber: 179,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Customers:161:14", "data-dynamic-content": "false", children: "No customers found" }, void 0, false, {
        fileName: "/app/src/pages/Customers.jsx",
        lineNumber: 180,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Customers:162:14", "data-dynamic-content": "false", className: "text-sm", children: "Customers will appear here when they place orders" }, void 0, false, {
        fileName: "/app/src/pages/Customers.jsx",
        lineNumber: 181,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Customers.jsx",
      lineNumber: 178,
      columnNumber: 11
    }, this) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:165:12", "data-dynamic-content": "true", className: "overflow-x-auto", children: /* @__PURE__ */ jsxDEV("table", { "data-source-location": "pages/Customers:166:14", "data-dynamic-content": "true", className: "w-full", children: [
      /* @__PURE__ */ jsxDEV("thead", { "data-source-location": "pages/Customers:167:16", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV("tr", { "data-source-location": "pages/Customers:168:18", "data-dynamic-content": "false", className: "text-left text-sm text-gray-500 border-b", children: [
        /* @__PURE__ */ jsxDEV("th", { "data-source-location": "pages/Customers:169:20", "data-dynamic-content": "false", className: "p-4 font-medium", children: "Customer" }, void 0, false, {
          fileName: "/app/src/pages/Customers.jsx",
          lineNumber: 188,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("th", { "data-source-location": "pages/Customers:170:20", "data-dynamic-content": "false", className: "p-4 font-medium", children: "Contact" }, void 0, false, {
          fileName: "/app/src/pages/Customers.jsx",
          lineNumber: 189,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("th", { "data-source-location": "pages/Customers:171:20", "data-dynamic-content": "false", className: "p-4 font-medium", children: "Orders" }, void 0, false, {
          fileName: "/app/src/pages/Customers.jsx",
          lineNumber: 190,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("th", { "data-source-location": "pages/Customers:172:20", "data-dynamic-content": "false", className: "p-4 font-medium", children: "Total Spent" }, void 0, false, {
          fileName: "/app/src/pages/Customers.jsx",
          lineNumber: 191,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("th", { "data-source-location": "pages/Customers:173:20", "data-dynamic-content": "false", className: "p-4 font-medium", children: "Last Order" }, void 0, false, {
          fileName: "/app/src/pages/Customers.jsx",
          lineNumber: 192,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("th", { "data-source-location": "pages/Customers:174:20", "data-dynamic-content": "false", className: "p-4 font-medium" }, void 0, false, {
          fileName: "/app/src/pages/Customers.jsx",
          lineNumber: 193,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Customers.jsx",
        lineNumber: 187,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Customers.jsx",
        lineNumber: 186,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("tbody", { "data-source-location": "pages/Customers:177:16", "data-dynamic-content": "true", className: "divide-y", children: filteredCustomers.map(
        (customer) => /* @__PURE__ */ jsxDEV("tr", { "data-source-location": "pages/Customers:179:20", "data-dynamic-content": "true", className: "text-sm hover:bg-gray-50", "data-collection-item-id": customer?.id, children: [
          /* @__PURE__ */ jsxDEV("td", { "data-source-location": "pages/Customers:180:22", "data-dynamic-content": "true", className: "p-4", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:181:24", "data-dynamic-content": "true", className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:182:26", "data-dynamic-content": "true", className: "w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white font-medium", children: customer.name?.[0]?.toUpperCase() || "?" }, void 0, false, {
              fileName: "/app/src/pages/Customers.jsx",
              lineNumber: 201,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:185:26", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Customers:186:28", "data-dynamic-content": "true", className: "font-medium", children: customer.name || "Guest" }, void 0, false, {
                fileName: "/app/src/pages/Customers.jsx",
                lineNumber: 205,
                columnNumber: 29
              }, this),
              customer.tags?.length > 0 && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:188:30", "data-dynamic-content": "true", className: "flex gap-1 mt-1", children: customer.tags.slice(0, 2).map(
                (tag) => /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/Customers:190:34", "data-dynamic-content": "true", variant: "secondary", className: "text-xs", "data-collection-item-field": "tag", children: tag }, tag, false, {
                  fileName: "/app/src/pages/Customers.jsx",
                  lineNumber: 209,
                  columnNumber: 27
                }, this)
              ) }, void 0, false, {
                fileName: "/app/src/pages/Customers.jsx",
                lineNumber: 207,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Customers.jsx",
              lineNumber: 204,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Customers.jsx",
            lineNumber: 200,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/Customers.jsx",
            lineNumber: 199,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDEV("td", { "data-source-location": "pages/Customers:199:22", "data-dynamic-content": "true", className: "p-4", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:200:24", "data-dynamic-content": "true", className: "space-y-1", "data-collection-item-field": "phone", "data-collection-item-id": customer?.id, children: [
            customer.phone && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:202:28", "data-dynamic-content": "true", className: "flex items-center gap-1 text-gray-600", "data-collection-item-field": "phone", "data-collection-item-id": customer?.id, children: [
              /* @__PURE__ */ jsxDEV(Phone, { "data-source-location": "pages/Customers:203:30", "data-dynamic-content": "false", className: "w-3 h-3" }, void 0, false, {
                fileName: "/app/src/pages/Customers.jsx",
                lineNumber: 222,
                columnNumber: 31
              }, this),
              customer.phone
            ] }, void 0, true, {
              fileName: "/app/src/pages/Customers.jsx",
              lineNumber: 221,
              columnNumber: 23
            }, this),
            customer.email && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:208:28", "data-dynamic-content": "true", className: "flex items-center gap-1 text-gray-600", "data-collection-item-field": "email", "data-collection-item-id": customer?.id, children: [
              /* @__PURE__ */ jsxDEV(Mail, { "data-source-location": "pages/Customers:209:30", "data-dynamic-content": "false", className: "w-3 h-3" }, void 0, false, {
                fileName: "/app/src/pages/Customers.jsx",
                lineNumber: 228,
                columnNumber: 31
              }, this),
              customer.email
            ] }, void 0, true, {
              fileName: "/app/src/pages/Customers.jsx",
              lineNumber: 227,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Customers.jsx",
            lineNumber: 219,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/Customers.jsx",
            lineNumber: 218,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDEV("td", { "data-source-location": "pages/Customers:215:22", "data-dynamic-content": "true", className: "p-4", children: [
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Customers:216:24", "data-dynamic-content": "true", className: "font-medium", children: customer.total_orders || 0 }, void 0, false, {
              fileName: "/app/src/pages/Customers.jsx",
              lineNumber: 235,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Customers:217:24", "data-dynamic-content": "false", className: "text-gray-500", children: " orders" }, void 0, false, {
              fileName: "/app/src/pages/Customers.jsx",
              lineNumber: 236,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Customers.jsx",
            lineNumber: 234,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDEV("td", { "data-source-location": "pages/Customers:219:22", "data-dynamic-content": "true", className: "p-4 font-medium", children: [
            "₹",
            (customer.total_spent || 0).toLocaleString()
          ] }, void 0, true, {
            fileName: "/app/src/pages/Customers.jsx",
            lineNumber: 238,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDEV("td", { "data-source-location": "pages/Customers:222:22", "data-dynamic-content": "true", className: "p-4 text-gray-500", children: customer.last_order_date ? format(new Date(customer.last_order_date), "MMM d, yyyy") : "-" }, void 0, false, {
            fileName: "/app/src/pages/Customers.jsx",
            lineNumber: 241,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDEV("td", { "data-source-location": "pages/Customers:228:22", "data-dynamic-content": "true", className: "p-4", children: /* @__PURE__ */ jsxDEV(
            Button,
            {
              "data-source-location": "pages/Customers:229:24",
              "data-dynamic-content": "true",
              variant: "ghost",
              size: "sm",
              onClick: () => setSelectedCustomer(customer),
              children: /* @__PURE__ */ jsxDEV(Eye, { "data-source-location": "pages/Customers:234:26", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                fileName: "/app/src/pages/Customers.jsx",
                lineNumber: 253,
                columnNumber: 27
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/app/src/pages/Customers.jsx",
              lineNumber: 248,
              columnNumber: 25
            },
            this
          ) }, void 0, false, {
            fileName: "/app/src/pages/Customers.jsx",
            lineNumber: 247,
            columnNumber: 23
          }, this)
        ] }, customer.id, true, {
          fileName: "/app/src/pages/Customers.jsx",
          lineNumber: 198,
          columnNumber: 17
        }, this)
      ) }, void 0, false, {
        fileName: "/app/src/pages/Customers.jsx",
        lineNumber: 196,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Customers.jsx",
      lineNumber: 185,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/Customers.jsx",
      lineNumber: 184,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/Customers.jsx",
      lineNumber: 176,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/Customers.jsx",
      lineNumber: 175,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Dialog, { "data-source-location": "pages/Customers:247:6", "data-dynamic-content": "true", open: !!selectedCustomer, onOpenChange: () => setSelectedCustomer(null), children: /* @__PURE__ */ jsxDEV(DialogContent, { "data-source-location": "pages/Customers:248:8", "data-dynamic-content": "true", className: "max-w-lg", children: [
      /* @__PURE__ */ jsxDEV(DialogHeader, { "data-source-location": "pages/Customers:249:10", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(DialogTitle, { "data-source-location": "pages/Customers:250:12", "data-dynamic-content": "false", children: "Customer Details" }, void 0, false, {
        fileName: "/app/src/pages/Customers.jsx",
        lineNumber: 269,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Customers.jsx",
        lineNumber: 268,
        columnNumber: 11
      }, this),
      selectedCustomer && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:254:12", "data-dynamic-content": "true", className: "space-y-6", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:256:14", "data-dynamic-content": "true", className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:257:16", "data-dynamic-content": "true", className: "w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white text-2xl font-medium", children: selectedCustomer.name?.[0]?.toUpperCase() || "?" }, void 0, false, {
            fileName: "/app/src/pages/Customers.jsx",
            lineNumber: 276,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:260:16", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/Customers:261:18", "data-dynamic-content": "true", className: "text-xl font-semibold", children: selectedCustomer.name || "Guest" }, void 0, false, {
              fileName: "/app/src/pages/Customers.jsx",
              lineNumber: 280,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Customers:262:18", "data-dynamic-content": "true", className: "text-gray-500", children: [
              "Customer since ",
              format(new Date(selectedCustomer.created_date), "MMM yyyy")
            ] }, void 0, true, {
              fileName: "/app/src/pages/Customers.jsx",
              lineNumber: 281,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Customers.jsx",
            lineNumber: 279,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Customers.jsx",
          lineNumber: 275,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:267:14", "data-dynamic-content": "true", className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:268:16", "data-dynamic-content": "true", className: "p-3 bg-gray-50 rounded-lg", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:269:18", "data-dynamic-content": "false", className: "flex items-center gap-2 text-gray-500 mb-1", children: [
              /* @__PURE__ */ jsxDEV(Phone, { "data-source-location": "pages/Customers:270:20", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                fileName: "/app/src/pages/Customers.jsx",
                lineNumber: 289,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Customers:271:20", "data-dynamic-content": "false", className: "text-sm", children: "Phone" }, void 0, false, {
                fileName: "/app/src/pages/Customers.jsx",
                lineNumber: 290,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Customers.jsx",
              lineNumber: 288,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Customers:273:18", "data-dynamic-content": "true", className: "font-medium", children: selectedCustomer.phone || "-" }, void 0, false, {
              fileName: "/app/src/pages/Customers.jsx",
              lineNumber: 292,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Customers.jsx",
            lineNumber: 287,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:275:16", "data-dynamic-content": "true", className: "p-3 bg-gray-50 rounded-lg", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:276:18", "data-dynamic-content": "false", className: "flex items-center gap-2 text-gray-500 mb-1", children: [
              /* @__PURE__ */ jsxDEV(Mail, { "data-source-location": "pages/Customers:277:20", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                fileName: "/app/src/pages/Customers.jsx",
                lineNumber: 296,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Customers:278:20", "data-dynamic-content": "false", className: "text-sm", children: "Email" }, void 0, false, {
                fileName: "/app/src/pages/Customers.jsx",
                lineNumber: 297,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Customers.jsx",
              lineNumber: 295,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Customers:280:18", "data-dynamic-content": "true", className: "font-medium truncate", children: selectedCustomer.email || "-" }, void 0, false, {
              fileName: "/app/src/pages/Customers.jsx",
              lineNumber: 299,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Customers.jsx",
            lineNumber: 294,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Customers.jsx",
          lineNumber: 286,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:285:14", "data-dynamic-content": "true", className: "grid grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:286:16", "data-dynamic-content": "true", className: "text-center p-3 bg-violet-50 rounded-lg", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Customers:287:18", "data-dynamic-content": "true", className: "text-2xl font-bold text-violet-600", children: selectedCustomer.total_orders || 0 }, void 0, false, {
              fileName: "/app/src/pages/Customers.jsx",
              lineNumber: 306,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Customers:288:18", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Orders" }, void 0, false, {
              fileName: "/app/src/pages/Customers.jsx",
              lineNumber: 307,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Customers.jsx",
            lineNumber: 305,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:290:16", "data-dynamic-content": "true", className: "text-center p-3 bg-green-50 rounded-lg", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Customers:291:18", "data-dynamic-content": "true", className: "text-2xl font-bold text-green-600", children: [
              "₹",
              (selectedCustomer.total_spent || 0).toLocaleString()
            ] }, void 0, true, {
              fileName: "/app/src/pages/Customers.jsx",
              lineNumber: 310,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Customers:292:18", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Spent" }, void 0, false, {
              fileName: "/app/src/pages/Customers.jsx",
              lineNumber: 311,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Customers.jsx",
            lineNumber: 309,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:294:16", "data-dynamic-content": "true", className: "text-center p-3 bg-blue-50 rounded-lg", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Customers:295:18", "data-dynamic-content": "true", className: "text-2xl font-bold text-blue-600", children: [
              "₹",
              Math.round((selectedCustomer.total_spent || 0) / (selectedCustomer.total_orders || 1))
            ] }, void 0, true, {
              fileName: "/app/src/pages/Customers.jsx",
              lineNumber: 314,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Customers:298:18", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Avg Order" }, void 0, false, {
              fileName: "/app/src/pages/Customers.jsx",
              lineNumber: 317,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Customers.jsx",
            lineNumber: 313,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Customers.jsx",
          lineNumber: 304,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:303:14", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("h4", { "data-source-location": "pages/Customers:304:16", "data-dynamic-content": "false", className: "font-medium mb-3", children: "Recent Orders" }, void 0, false, {
            fileName: "/app/src/pages/Customers.jsx",
            lineNumber: 323,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:305:16", "data-dynamic-content": "true", className: "space-y-2 max-h-48 overflow-y-auto", children: [
            getCustomerOrders(selectedCustomer.phone).slice(0, 5).map(
              (order) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:307:20", "data-dynamic-content": "true", className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg text-sm", "data-collection-item-id": order?.id, children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:308:22", "data-dynamic-content": "true", children: [
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Customers:309:24", "data-dynamic-content": "true", className: "font-medium", "data-collection-item-field": "order_number", "data-collection-item-id": order?.id, children: [
                    "#",
                    order.order_number
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/Customers.jsx",
                    lineNumber: 328,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Customers:310:24", "data-dynamic-content": "true", className: "text-gray-500", children: [
                    order.items?.length || 0,
                    " items"
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/Customers.jsx",
                    lineNumber: 329,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/Customers.jsx",
                  lineNumber: 327,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Customers:312:22", "data-dynamic-content": "true", className: "text-right", children: [
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Customers:313:24", "data-dynamic-content": "true", className: "font-medium", "data-collection-item-field": "total_amount", "data-collection-item-id": order?.id, children: [
                    "₹",
                    order.total_amount
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/Customers.jsx",
                    lineNumber: 332,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Customers:314:24", "data-dynamic-content": "true", className: "text-gray-500", children: format(new Date(order.created_date), "MMM d") }, void 0, false, {
                    fileName: "/app/src/pages/Customers.jsx",
                    lineNumber: 333,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/Customers.jsx",
                  lineNumber: 331,
                  columnNumber: 23
                }, this)
              ] }, order.id, true, {
                fileName: "/app/src/pages/Customers.jsx",
                lineNumber: 326,
                columnNumber: 17
              }, this)
            ),
            getCustomerOrders(selectedCustomer.phone).length === 0 && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Customers:319:20", "data-dynamic-content": "false", className: "text-center text-gray-500 py-4", children: "No orders found" }, void 0, false, {
              fileName: "/app/src/pages/Customers.jsx",
              lineNumber: 338,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Customers.jsx",
            lineNumber: 324,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Customers.jsx",
          lineNumber: 322,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Customers.jsx",
        lineNumber: 273,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Customers.jsx",
      lineNumber: 267,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/Customers.jsx",
      lineNumber: 266,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/Customers.jsx",
    lineNumber: 94,
    columnNumber: 5
  }, this);
}
_s(CustomersContent, "prBmA0jh19U5pETTsmETU23PT5k=");
_c = CustomersContent;
export default function Customers() {
  return /* @__PURE__ */ jsxDEV(DashboardLayout, { "data-source-location": "pages/Customers:333:4", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CustomersContent, { "data-source-location": "pages/Customers:334:6", "data-dynamic-content": "false" }, void 0, false, {
    fileName: "/app/src/pages/Customers.jsx",
    lineNumber: 353,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/src/pages/Customers.jsx",
    lineNumber: 352,
    columnNumber: 5
  }, this);
}
_c2 = Customers;
var _c, _c2;
$RefreshReg$(_c, "CustomersContent");
$RefreshReg$(_c2, "Customers");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/Customers.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/Customers.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QixTQUNqRixpQ0FBQyxvQkFBaUIsd0JBQXFCLHlCQUF3Qix3QkFBcUIsV0FBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUEyRixLQUQ3RjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUE7QUFFSjtBQUFDQyxNQU51QkQ7QUFBUyxJQUFBRCxJQUFBRTtBQUFBQyxhQUFBSCxJQUFBO0FBQUFHLGFBQUFELEtBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYmFzZTQ0IiwiRGFzaGJvYXJkTGF5b3V0IiwiU2VhcmNoIiwiVXNlcnMiLCJQaG9uZSIsIk1haWwiLCJTaG9wcGluZ0JhZyIsIkluZGlhblJ1cGVlIiwiQ2FsZW5kYXIiLCJUYWciLCJNb3JlVmVydGljYWwiLCJFeWUiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiQnV0dG9uIiwiSW5wdXQiLCJCYWRnZSIsIkRpYWxvZyIsIkRpYWxvZ0NvbnRlbnQiLCJEaWFsb2dIZWFkZXIiLCJEaWFsb2dUaXRsZSIsImZvcm1hdCIsIkN1c3RvbWVyc0NvbnRlbnQiLCJ1c2VyIiwicmVzdGF1cmFudCIsImlkIiwiX3MiLCJjdXN0b21lcnMiLCJzZXRDdXN0b21lcnMiLCJvcmRlcnMiLCJzZXRPcmRlcnMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5Iiwic2VsZWN0ZWRDdXN0b21lciIsInNldFNlbGVjdGVkQ3VzdG9tZXIiLCJyZXN0YXVyYW50X2lkIiwibG9hZERhdGEiLCJjdXN0b21lcnNEYXRhIiwib3JkZXJzRGF0YSIsIlByb21pc2UiLCJhbGwiLCJlbnRpdGllcyIsIkN1c3RvbWVyIiwiZmlsdGVyIiwiT3JkZXIiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZmlsdGVyZWRDdXN0b21lcnMiLCJjdXN0b21lciIsIm1hdGNoZXNTZWFyY2giLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInBob25lIiwiZW1haWwiLCJnZXRDdXN0b21lck9yZGVycyIsImN1c3RvbWVyUGhvbmUiLCJvIiwiY3VzdG9tZXJfcGhvbmUiLCJ0b3RhbEN1c3RvbWVycyIsImxlbmd0aCIsInJlcGVhdEN1c3RvbWVycyIsImMiLCJ0b3RhbF9vcmRlcnMiLCJ0b3RhbFJldmVudWUiLCJyZWR1Y2UiLCJzdW0iLCJ0b3RhbF9zcGVudCIsImF2Z09yZGVyVmFsdWUiLCJ0b0xvY2FsZVN0cmluZyIsIk1hdGgiLCJyb3VuZCIsInRhcmdldCIsInZhbHVlIiwibWFwIiwidG9VcHBlckNhc2UiLCJ0YWdzIiwic2xpY2UiLCJ0YWciLCJsYXN0X29yZGVyX2RhdGUiLCJEYXRlIiwiY3JlYXRlZF9kYXRlIiwib3JkZXIiLCJvcmRlcl9udW1iZXIiLCJpdGVtcyIsInRvdGFsX2Ftb3VudCIsIl9jIiwiQ3VzdG9tZXJzIiwiX2MyIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkN1c3RvbWVycy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGJhc2U0NCB9IGZyb20gXCJAL2FwaS9iYXNlNDRDbGllbnRcIjtcbmltcG9ydCBEYXNoYm9hcmRMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZExheW91dFwiO1xuaW1wb3J0IHtcbiAgU2VhcmNoLCBVc2VycywgUGhvbmUsIE1haWwsIFNob3BwaW5nQmFnLFxuICBJbmRpYW5SdXBlZSwgQ2FsZW5kYXIsIFRhZywgTW9yZVZlcnRpY2FsLCBFeWUgfSBmcm9tXG5cImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIENhcmRIZWFkZXIsIENhcmRUaXRsZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IHsgQmFkZ2UgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2JhZGdlXCI7XG5pbXBvcnQge1xuICBEaWFsb2csXG4gIERpYWxvZ0NvbnRlbnQsXG4gIERpYWxvZ0hlYWRlcixcbiAgRGlhbG9nVGl0bGUgfSBmcm9tXG5cIkAvY29tcG9uZW50cy91aS9kaWFsb2dcIjtcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5mdW5jdGlvbiBDdXN0b21lcnNDb250ZW50KHsgdXNlciwgcmVzdGF1cmFudCwgaWQgfSkge1xuICBjb25zdCBbY3VzdG9tZXJzLCBzZXRDdXN0b21lcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbb3JkZXJzLCBzZXRPcmRlcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzZWxlY3RlZEN1c3RvbWVyLCBzZXRTZWxlY3RlZEN1c3RvbWVyXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlc3RhdXJhbnQ/LnJlc3RhdXJhbnRfaWQpIHtcbiAgICAgIGxvYWREYXRhKCk7XG4gICAgfVxuICB9LCBbcmVzdGF1cmFudF0pO1xuXG4gIGNvbnN0IGxvYWREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBbY3VzdG9tZXJzRGF0YSwgb3JkZXJzRGF0YV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBiYXNlNDQuZW50aXRpZXMuQ3VzdG9tZXIuZmlsdGVyKHsgcmVzdGF1cmFudF9pZDogcmVzdGF1cmFudC5yZXN0YXVyYW50X2lkIH0pLFxuICAgICAgYmFzZTQ0LmVudGl0aWVzLk9yZGVyLmZpbHRlcih7IHJlc3RhdXJhbnRfaWQ6IHJlc3RhdXJhbnQucmVzdGF1cmFudF9pZCB9KV1cbiAgICAgICk7XG4gICAgICBzZXRDdXN0b21lcnMoY3VzdG9tZXJzRGF0YSk7XG4gICAgICBzZXRPcmRlcnMob3JkZXJzRGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgZGF0YTpcIiwgZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZpbHRlcmVkQ3VzdG9tZXJzID0gY3VzdG9tZXJzLmZpbHRlcigoY3VzdG9tZXIpID0+IHtcbiAgICBjb25zdCBtYXRjaGVzU2VhcmNoID1cbiAgICBjdXN0b21lci5uYW1lPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgY3VzdG9tZXIucGhvbmU/LmluY2x1ZGVzKHNlYXJjaFF1ZXJ5KSB8fFxuICAgIGN1c3RvbWVyLmVtYWlsPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xuICAgIHJldHVybiBtYXRjaGVzU2VhcmNoO1xuICB9KTtcblxuICBjb25zdCBnZXRDdXN0b21lck9yZGVycyA9IChjdXN0b21lclBob25lKSA9PiB7XG4gICAgcmV0dXJuIG9yZGVycy5maWx0ZXIoKG8pID0+IG8uY3VzdG9tZXJfcGhvbmUgPT09IGN1c3RvbWVyUGhvbmUpO1xuICB9O1xuXG4gIC8vIFN0YXRzXG4gIGNvbnN0IHRvdGFsQ3VzdG9tZXJzID0gY3VzdG9tZXJzLmxlbmd0aDtcbiAgY29uc3QgcmVwZWF0Q3VzdG9tZXJzID0gY3VzdG9tZXJzLmZpbHRlcigoYykgPT4gYy50b3RhbF9vcmRlcnMgPiAxKS5sZW5ndGg7XG4gIGNvbnN0IHRvdGFsUmV2ZW51ZSA9IGN1c3RvbWVycy5yZWR1Y2UoKHN1bSwgYykgPT4gc3VtICsgKGMudG90YWxfc3BlbnQgfHwgMCksIDApO1xuICBjb25zdCBhdmdPcmRlclZhbHVlID0gdG90YWxSZXZlbnVlIC8gKG9yZGVycy5sZW5ndGggfHwgMSk7XG5cbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjY4OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC02NFwiPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjY5OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYW5pbWF0ZS1zcGluIHJvdW5kZWQtZnVsbCBoLTggdy04IGJvcmRlci1iLTIgYm9yZGVyLXZpb2xldC02MDBcIj48L2Rpdj5cbiAgICAgIDwvZGl2Pik7XG5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczo3NTo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICB7LyogSGVhZGVyICovfVxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczo3Nzo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgbWQ6aXRlbXMtY2VudGVyIG1kOmp1c3RpZnktYmV0d2VlbiBnYXAtNFwiPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjc4OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgPGgxIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjc5OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwXCI+Q3VzdG9tZXJzPC9oMT5cbiAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczo4MDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+TWFuYWdlIHlvdXIgY3VzdG9tZXIgZGF0YWJhc2U8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBTdGF0cyAqL31cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6ODU6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgZ2FwLTRcIj5cbiAgICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6ODY6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczo4NzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczo4ODoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6ODk6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwicC0yIGJnLXZpb2xldC0xMDAgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgIDxVc2VycyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczo5MDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtdmlvbGV0LTYwMFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjkyOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6OTM6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInRvdGFsQ3VzdG9tZXJzXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2lkfT57dG90YWxDdXN0b21lcnN9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjk0OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlRvdGFsIEN1c3RvbWVyczwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjk5OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6MTAwOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjEwMToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6MTAyOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInAtMiBiZy1ncmVlbi0xMDAgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgIDxVc2VycyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczoxMDM6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWdyZWVuLTYwMFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjEwNToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjEwNjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicmVwZWF0Q3VzdG9tZXJzXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2lkfT57cmVwZWF0Q3VzdG9tZXJzfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczoxMDc6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+UmVwZWF0IEN1c3RvbWVyczwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjExMjo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjExMzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczoxMTQ6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjExNToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJwLTIgYmctYmx1ZS0xMDAgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgIDxJbmRpYW5SdXBlZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczoxMTY6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWJsdWUtNjAwXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6MTE4OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6MTE5OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+4oK5e3RvdGFsUmV2ZW51ZS50b0xvY2FsZVN0cmluZygpfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczoxMjA6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+VG90YWwgUmV2ZW51ZTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjEyNTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjEyNjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczoxMjc6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjEyODoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJwLTIgYmctb3JhbmdlLTEwMCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgPFNob3BwaW5nQmFnIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjEyOToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtb3JhbmdlLTYwMFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjEzMToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjEzMjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPuKCuXtNYXRoLnJvdW5kKGF2Z09yZGVyVmFsdWUpfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczoxMzM6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+QXZnLiBPcmRlciBWYWx1ZTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIFNlYXJjaCAqL31cbiAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjE0MTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczoxNDI6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6MTQzOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxTZWFyY2ggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6MTQ0OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMyB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzIgdy00IGgtNCB0ZXh0LWdyYXktNDAwXCIgLz5cbiAgICAgICAgICAgIDxJbnB1dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczoxNDU6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgbmFtZSwgcGhvbmUsIG9yIGVtYWlsLi4uXCJcbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoUXVlcnkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicGwtOVwiIC8+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDwvQ2FyZD5cblxuICAgICAgey8qIEN1c3RvbWVycyBMaXN0ICovfVxuICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6MTU2OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjE1Nzo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicC0wXCI+XG4gICAgICAgICAge2ZpbHRlcmVkQ3VzdG9tZXJzLmxlbmd0aCA9PT0gMCA/XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczoxNTk6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktMTIgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICA8VXNlcnMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6MTYwOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMTIgaC0xMiBteC1hdXRvIG1iLTMgdGV4dC1ncmF5LTMwMFwiIC8+XG4gICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjE2MToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5ObyBjdXN0b21lcnMgZm91bmQ8L3A+XG4gICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjE2MjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+Q3VzdG9tZXJzIHdpbGwgYXBwZWFyIGhlcmUgd2hlbiB0aGV5IHBsYWNlIG9yZGVyczwvcD5cbiAgICAgICAgICAgIDwvZGl2PiA6XG5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjE2NToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0b1wiPlxuICAgICAgICAgICAgICA8dGFibGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6MTY2OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjE2NzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgIDx0ciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczoxNjg6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHRleHQtc20gdGV4dC1ncmF5LTUwMCBib3JkZXItYlwiPlxuICAgICAgICAgICAgICAgICAgICA8dGggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6MTY5OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInAtNCBmb250LW1lZGl1bVwiPkN1c3RvbWVyPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjE3MDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJwLTQgZm9udC1tZWRpdW1cIj5Db250YWN0PC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjE3MToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJwLTQgZm9udC1tZWRpdW1cIj5PcmRlcnM8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6MTcyOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInAtNCBmb250LW1lZGl1bVwiPlRvdGFsIFNwZW50PC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjE3MzoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJwLTQgZm9udC1tZWRpdW1cIj5MYXN0IE9yZGVyPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjE3NDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJwLTQgZm9udC1tZWRpdW1cIj48L3RoPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczoxNzc6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJkaXZpZGUteVwiPlxuICAgICAgICAgICAgICAgICAge2ZpbHRlcmVkQ3VzdG9tZXJzLm1hcCgoY3VzdG9tZXIpID0+XG4gICAgICAgICAgICAgICAgPHRyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjE3OToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17Y3VzdG9tZXIuaWR9IGNsYXNzTmFtZT1cInRleHQtc20gaG92ZXI6YmctZ3JheS01MFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtjdXN0b21lcj8uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczoxODA6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6MTgxOjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczoxODI6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tdmlvbGV0LTUwMCB0by1pbmRpZ28tNTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VzdG9tZXIubmFtZT8uWzBdPy50b1VwcGVyQ2FzZSgpIHx8ICc/J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6MTg1OjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6MTg2OjI4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj57Y3VzdG9tZXIubmFtZSB8fCAnR3Vlc3QnfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VzdG9tZXIudGFncz8ubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczoxODg6MzBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGdhcC0xIG10LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1c3RvbWVyLnRhZ3Muc2xpY2UoMCwgMikubWFwKCh0YWcpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczoxOTA6MzRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e3RhZ30gdmFyaWFudD1cInNlY29uZGFyeVwiIGNsYXNzTmFtZT1cInRleHQteHNcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInRhZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6MTk5OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjIwMDoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktMVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicGhvbmVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17Y3VzdG9tZXI/LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2N1c3RvbWVyLnBob25lICYmXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczoyMDI6MjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LWdyYXktNjAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJwaG9uZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtjdXN0b21lcj8uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBob25lIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjIwMzozMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTMgaC0zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXN0b21lci5waG9uZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXN0b21lci5lbWFpbCAmJlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6MjA4OjI4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC1ncmF5LTYwMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiZW1haWxcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17Y3VzdG9tZXI/LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYWlsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjIwOTozMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTMgaC0zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXN0b21lci5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczoyMTU6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjIxNjoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+e2N1c3RvbWVyLnRvdGFsX29yZGVycyB8fCAwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjIxNzoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+IG9yZGVyczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczoyMTk6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJwLTQgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOKCuXsoY3VzdG9tZXIudG90YWxfc3BlbnQgfHwgMCkudG9Mb2NhbGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczoyMjI6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJwLTQgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2N1c3RvbWVyLmxhc3Rfb3JkZXJfZGF0ZSA/XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdChuZXcgRGF0ZShjdXN0b21lci5sYXN0X29yZGVyX2RhdGUpLCAnTU1NIGQsIHl5eXknKSA6XG4gICAgICAgICAgICAgICAgICAgICctJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6MjI4OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjIyOToyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkQ3VzdG9tZXIoY3VzdG9tZXIpfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RXllIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjIzNDoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPC9DYXJkPlxuXG4gICAgICB7LyogQ3VzdG9tZXIgRGV0YWlsIERpYWxvZyAqL31cbiAgICAgIDxEaWFsb2cgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6MjQ3OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBvcGVuPXshIXNlbGVjdGVkQ3VzdG9tZXJ9IG9uT3BlbkNoYW5nZT17KCkgPT4gc2V0U2VsZWN0ZWRDdXN0b21lcihudWxsKX0+XG4gICAgICAgIDxEaWFsb2dDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjI0ODo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWF4LXctbGdcIj5cbiAgICAgICAgICA8RGlhbG9nSGVhZGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjI0OToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgIDxEaWFsb2dUaXRsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczoyNTA6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+Q3VzdG9tZXIgRGV0YWlsczwvRGlhbG9nVGl0bGU+XG4gICAgICAgICAgPC9EaWFsb2dIZWFkZXI+XG4gICAgICAgICAgXG4gICAgICAgICAge3NlbGVjdGVkQ3VzdG9tZXIgJiZcbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjI1NDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgICAgICAgICB7LyogUHJvZmlsZSAqL31cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczoyNTY6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6MjU3OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidy0xNiBoLTE2IHJvdW5kZWQtZnVsbCBiZy1ncmFkaWVudC10by1iciBmcm9tLXZpb2xldC01MDAgdG8taW5kaWdvLTUwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXdoaXRlIHRleHQtMnhsIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRDdXN0b21lci5uYW1lPy5bMF0/LnRvVXBwZXJDYXNlKCkgfHwgJz8nfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6MjYwOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICA8aDMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6MjYxOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkXCI+e3NlbGVjdGVkQ3VzdG9tZXIubmFtZSB8fCAnR3Vlc3QnfTwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczoyNjI6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+Q3VzdG9tZXIgc2luY2Uge2Zvcm1hdChuZXcgRGF0ZShzZWxlY3RlZEN1c3RvbWVyLmNyZWF0ZWRfZGF0ZSksICdNTU0geXl5eScpfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIENvbnRhY3QgKi99XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6MjY3OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6MjY4OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicC0zIGJnLWdyYXktNTAgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczoyNjk6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1ncmF5LTUwMCBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQaG9uZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczoyNzA6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjI3MToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+UGhvbmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjI3MzoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+e3NlbGVjdGVkQ3VzdG9tZXIucGhvbmUgfHwgJy0nfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjI3NToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtMyBiZy1ncmF5LTUwIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6Mjc2OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtZ3JheS01MDAgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICA8TWFpbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczoyNzc6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjI3ODoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+RW1haWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjI4MDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRydW5jYXRlXCI+e3NlbGVjdGVkQ3VzdG9tZXIuZW1haWwgfHwgJy0nfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIFN0YXRzICovfVxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjI4NToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjI4NjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHAtMyBiZy12aW9sZXQtNTAgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6Mjg3OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtdmlvbGV0LTYwMFwiPntzZWxlY3RlZEN1c3RvbWVyLnRvdGFsX29yZGVycyB8fCAwfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjI4ODoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5PcmRlcnM8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczoyOTA6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwLTMgYmctZ3JlZW4tNTAgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6MjkxOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZ3JlZW4tNjAwXCI+4oK5eyhzZWxlY3RlZEN1c3RvbWVyLnRvdGFsX3NwZW50IHx8IDApLnRvTG9jYWxlU3RyaW5nKCl9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6MjkyOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlNwZW50PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6Mjk0OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcC0zIGJnLWJsdWUtNTAgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6Mjk1OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtYmx1ZS02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAg4oK5e01hdGgucm91bmQoKHNlbGVjdGVkQ3VzdG9tZXIudG90YWxfc3BlbnQgfHwgMCkgLyAoc2VsZWN0ZWRDdXN0b21lci50b3RhbF9vcmRlcnMgfHwgMSkpfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6Mjk4OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPkF2ZyBPcmRlcjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIFJlY2VudCBPcmRlcnMgKi99XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6MzAzOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPGg0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjMwNDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSBtYi0zXCI+UmVjZW50IE9yZGVyczwvaDQ+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczozMDU6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTIgbWF4LWgtNDggb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICB7Z2V0Q3VzdG9tZXJPcmRlcnMoc2VsZWN0ZWRDdXN0b21lci5waG9uZSkuc2xpY2UoMCwgNSkubWFwKChvcmRlcikgPT5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjMwNzoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17b3JkZXIuaWR9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTMgYmctZ3JheS01MCByb3VuZGVkLWxnIHRleHQtc21cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17b3JkZXI/LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjMwODoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6MzA5OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIm9yZGVyX251bWJlclwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtvcmRlcj8uaWR9PiN7b3JkZXIub3JkZXJfbnVtYmVyfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjMxMDoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj57b3JkZXIuaXRlbXM/Lmxlbmd0aCB8fCAwfSBpdGVtczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjMxMjoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjMxMzoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJ0b3RhbF9hbW91bnRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17b3JkZXI/LmlkfT7igrl7b3JkZXIudG90YWxfYW1vdW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJzOjMxNDoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj57Zm9ybWF0KG5ldyBEYXRlKG9yZGVyLmNyZWF0ZWRfZGF0ZSksICdNTU0gZCcpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIHtnZXRDdXN0b21lck9yZGVycyhzZWxlY3RlZEN1c3RvbWVyLnBob25lKS5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczozMTk6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1ncmF5LTUwMCBweS00XCI+Tm8gb3JkZXJzIGZvdW5kPC9wPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgIDwvRGlhbG9nPlxuICAgIDwvZGl2Pik7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tZXJzKCkge1xuICByZXR1cm4gKFxuICAgIDxEYXNoYm9hcmRMYXlvdXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lcnM6MzMzOjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICA8Q3VzdG9tZXJzQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyczozMzQ6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPlxuICAgIDwvRGFzaGJvYXJkTGF5b3V0Pik7XG5cbn0iXSwiZmlsZSI6Ii9hcHAvc3JjL3BhZ2VzL0N1c3RvbWVycy5qc3gifQ==