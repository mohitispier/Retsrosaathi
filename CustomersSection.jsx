import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/dashboard/CustomersSection.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/dashboard/CustomersSection.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"];
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=79425e35";
import { base44 } from "/src/api/base44Client.js";
import {
  Users,
  Search,
  Phone,
  Mail,
  Calendar,
  ShoppingBag,
  IndianRupee,
  MoreVertical,
  Eye,
  Trash2,
  TrendingUp
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "/src/components/ui/dropdown-menu.jsx";
export default function CustomersSection({ restaurant, customers, orders }) {
  _s();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch = customer.name?.toLowerCase().includes(searchQuery.toLowerCase()) || customer.phone?.toLowerCase().includes(searchQuery.toLowerCase()) || customer.email?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });
  const getCustomerOrders = (customerId) => {
    return orders.filter((o) => o.customer_phone === customers.find((c) => c.id === customerId)?.phone);
  };
  return /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      "data-source-location": "components/dashboard/CustomersSection:42:4",
      "data-dynamic-content": "true",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "space-y-6",
      children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:49:6", "data-dynamic-content": "true", className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:50:8", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "components/dashboard/CustomersSection:51:10", "data-dynamic-content": "false", className: "text-xl font-bold text-gray-900", children: "Customers" }, void 0, false, {
            fileName: "/app/src/components/dashboard/CustomersSection.jsx",
            lineNumber: 70,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:52:10", "data-dynamic-content": "true", className: "text-gray-500", children: [
            customers.length,
            " total customers"
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/CustomersSection.jsx",
            lineNumber: 71,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/CustomersSection.jsx",
          lineNumber: 69,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "/app/src/components/dashboard/CustomersSection.jsx",
          lineNumber: 68,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:57:6", "data-dynamic-content": "true", className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
          /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/CustomersSection:58:8", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/CustomersSection:59:10", "data-dynamic-content": "true", className: "p-6", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:60:12", "data-dynamic-content": "true", className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:61:14", "data-dynamic-content": "false", className: "p-3 bg-blue-100 rounded-xl", children: /* @__PURE__ */ jsxDEV(Users, { "data-source-location": "components/dashboard/CustomersSection:62:16", "data-dynamic-content": "false", className: "w-6 h-6 text-blue-600" }, void 0, false, {
              fileName: "/app/src/components/dashboard/CustomersSection.jsx",
              lineNumber: 81,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/CustomersSection.jsx",
              lineNumber: 80,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:64:14", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:65:16", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Total Customers" }, void 0, false, {
                fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                lineNumber: 84,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:66:16", "data-dynamic-content": "true", className: "text-2xl font-bold text-gray-900", children: customers.length }, void 0, false, {
                fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                lineNumber: 85,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/CustomersSection.jsx",
              lineNumber: 83,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/CustomersSection.jsx",
            lineNumber: 79,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/CustomersSection.jsx",
            lineNumber: 78,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/CustomersSection.jsx",
            lineNumber: 77,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/CustomersSection:72:8", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/CustomersSection:73:10", "data-dynamic-content": "true", className: "p-6", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:74:12", "data-dynamic-content": "true", className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:75:14", "data-dynamic-content": "false", className: "p-3 bg-green-100 rounded-xl", children: /* @__PURE__ */ jsxDEV(ShoppingBag, { "data-source-location": "components/dashboard/CustomersSection:76:16", "data-dynamic-content": "false", className: "w-6 h-6 text-green-600" }, void 0, false, {
              fileName: "/app/src/components/dashboard/CustomersSection.jsx",
              lineNumber: 95,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/CustomersSection.jsx",
              lineNumber: 94,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:78:14", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:79:16", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Total Orders" }, void 0, false, {
                fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                lineNumber: 98,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:80:16", "data-dynamic-content": "true", className: "text-2xl font-bold text-gray-900", children: orders.length }, void 0, false, {
                fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                lineNumber: 99,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/CustomersSection.jsx",
              lineNumber: 97,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/CustomersSection.jsx",
            lineNumber: 93,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/CustomersSection.jsx",
            lineNumber: 92,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/CustomersSection.jsx",
            lineNumber: 91,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/CustomersSection:86:8", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/CustomersSection:87:10", "data-dynamic-content": "true", className: "p-6", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:88:12", "data-dynamic-content": "true", className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:89:14", "data-dynamic-content": "false", className: "p-3 bg-orange-100 rounded-xl", children: /* @__PURE__ */ jsxDEV(IndianRupee, { "data-source-location": "components/dashboard/CustomersSection:90:16", "data-dynamic-content": "false", className: "w-6 h-6 text-orange-600" }, void 0, false, {
              fileName: "/app/src/components/dashboard/CustomersSection.jsx",
              lineNumber: 109,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/CustomersSection.jsx",
              lineNumber: 108,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:92:14", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:93:16", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Total Revenue" }, void 0, false, {
                fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                lineNumber: 112,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:94:16", "data-dynamic-content": "true", className: "text-2xl font-bold text-gray-900", children: [
                "₹",
                orders.reduce((sum, o) => sum + (o.total_amount || 0), 0).toLocaleString()
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                lineNumber: 113,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/CustomersSection.jsx",
              lineNumber: 111,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/CustomersSection.jsx",
            lineNumber: 107,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/CustomersSection.jsx",
            lineNumber: 106,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/CustomersSection.jsx",
            lineNumber: 105,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/CustomersSection:102:8", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/CustomersSection:103:10", "data-dynamic-content": "true", className: "p-6", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:104:12", "data-dynamic-content": "true", className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:105:14", "data-dynamic-content": "false", className: "p-3 bg-purple-100 rounded-xl", children: /* @__PURE__ */ jsxDEV(TrendingUp, { "data-source-location": "components/dashboard/CustomersSection:106:16", "data-dynamic-content": "false", className: "w-6 h-6 text-purple-600" }, void 0, false, {
              fileName: "/app/src/components/dashboard/CustomersSection.jsx",
              lineNumber: 125,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/CustomersSection.jsx",
              lineNumber: 124,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:108:14", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:109:16", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Active Tokens" }, void 0, false, {
                fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                lineNumber: 128,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:110:16", "data-dynamic-content": "true", className: "text-2xl font-bold text-gray-900", children: customers.reduce((sum, c) => sum + (c.loyalty_points || 0), 0).toLocaleString() }, void 0, false, {
                fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                lineNumber: 129,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/CustomersSection.jsx",
              lineNumber: 127,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/CustomersSection.jsx",
            lineNumber: 123,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/CustomersSection.jsx",
            lineNumber: 122,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/CustomersSection.jsx",
            lineNumber: 121,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/CustomersSection.jsx",
          lineNumber: 76,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/CustomersSection:120:6", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "components/dashboard/CustomersSection:121:8", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:122:10", "data-dynamic-content": "true", className: "flex flex-col md:flex-row md:items-center gap-4", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:123:12", "data-dynamic-content": "true", className: "flex-1 relative", children: [
            /* @__PURE__ */ jsxDEV(Search, { "data-source-location": "components/dashboard/CustomersSection:124:14", "data-dynamic-content": "false", className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }, void 0, false, {
              fileName: "/app/src/components/dashboard/CustomersSection.jsx",
              lineNumber: 143,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(
              Input,
              {
                "data-source-location": "components/dashboard/CustomersSection:125:14",
                "data-dynamic-content": "true",
                placeholder: "Search customers...",
                value: searchQuery,
                onChange: (e) => setSearchQuery(e.target.value),
                className: "pl-9"
              },
              void 0,
              false,
              {
                fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                lineNumber: 144,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/CustomersSection.jsx",
            lineNumber: 142,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/CustomersSection.jsx",
            lineNumber: 141,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/CustomersSection.jsx",
            lineNumber: 140,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/CustomersSection:134:8", "data-dynamic-content": "true", children: filteredCustomers.length === 0 ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:136:12", "data-dynamic-content": "false", className: "text-center py-12 text-gray-500", children: [
            /* @__PURE__ */ jsxDEV(Users, { "data-source-location": "components/dashboard/CustomersSection:137:14", "data-dynamic-content": "false", className: "w-12 h-12 mx-auto mb-3 text-gray-300" }, void 0, false, {
              fileName: "/app/src/components/dashboard/CustomersSection.jsx",
              lineNumber: 156,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:138:14", "data-dynamic-content": "false", className: "font-medium", children: "No customers yet" }, void 0, false, {
              fileName: "/app/src/components/dashboard/CustomersSection.jsx",
              lineNumber: 157,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:139:14", "data-dynamic-content": "false", className: "text-sm", children: "Customers will appear here when they place orders" }, void 0, false, {
              fileName: "/app/src/components/dashboard/CustomersSection.jsx",
              lineNumber: 158,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/CustomersSection.jsx",
            lineNumber: 155,
            columnNumber: 11
          }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:144:14", "data-dynamic-content": "true", className: "sm:hidden space-y-3", "data-collection-id": "customers", children: filteredCustomers.map(
              (customer) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:146:18", "data-dynamic-content": "true", className: "border rounded-xl p-4 hover:bg-gray-50", "data-collection-item-id": customer?.id, children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:147:20", "data-dynamic-content": "true", className: "flex items-center justify-between mb-3", children: [
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:148:22", "data-dynamic-content": "true", children: [
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:149:24", "data-dynamic-content": "true", className: "font-semibold text-gray-900", children: customer.name || "Guest" }, void 0, false, {
                      fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                      lineNumber: 168,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:150:24", "data-dynamic-content": "true", className: "text-xs text-gray-500", "data-collection-item-field": "phone", "data-collection-item-id": customer?.id, children: customer.phone }, void 0, false, {
                      fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                      lineNumber: 169,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                    lineNumber: 167,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "components/dashboard/CustomersSection:152:22", "data-dynamic-content": "true", variant: "ghost", size: "sm", onClick: () => setSelectedCustomer(customer), children: /* @__PURE__ */ jsxDEV(Eye, { "data-source-location": "components/dashboard/CustomersSection:153:24", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                    lineNumber: 172,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                    lineNumber: 171,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                  lineNumber: 166,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:156:20", "data-dynamic-content": "true", className: "grid grid-cols-3 gap-2 text-center text-xs", children: [
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:157:22", "data-dynamic-content": "true", className: "bg-gray-50 rounded-lg p-2", children: [
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:157:65", "data-dynamic-content": "false", className: "text-gray-500", children: "Orders" }, void 0, false, {
                      fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                      lineNumber: 176,
                      columnNumber: 162
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:157:104", "data-dynamic-content": "true", className: "font-bold", children: customer.total_orders || 0 }, void 0, false, {
                      fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                      lineNumber: 176,
                      columnNumber: 298
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                    lineNumber: 176,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:158:22", "data-dynamic-content": "true", className: "bg-gray-50 rounded-lg p-2", children: [
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:158:65", "data-dynamic-content": "false", className: "text-gray-500", children: "Spent" }, void 0, false, {
                      fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                      lineNumber: 177,
                      columnNumber: 162
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:158:103", "data-dynamic-content": "true", className: "font-bold", children: [
                      "₹",
                      (customer.total_spent || 0).toLocaleString()
                    ] }, void 0, true, {
                      fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                      lineNumber: 177,
                      columnNumber: 297
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                    lineNumber: 177,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:159:22", "data-dynamic-content": "true", className: "bg-purple-50 rounded-lg p-2", children: [
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:159:67", "data-dynamic-content": "false", className: "text-gray-500", children: "Tokens" }, void 0, false, {
                      fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                      lineNumber: 178,
                      columnNumber: 164
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:159:106", "data-dynamic-content": "true", className: "font-bold text-purple-700", children: customer.loyalty_points || 0 }, void 0, false, {
                      fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                      lineNumber: 178,
                      columnNumber: 300
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                    lineNumber: 178,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                  lineNumber: 175,
                  columnNumber: 21
                }, this)
              ] }, customer.id, true, {
                fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                lineNumber: 165,
                columnNumber: 15
              }, this)
            ) }, void 0, false, {
              fileName: "/app/src/components/dashboard/CustomersSection.jsx",
              lineNumber: 163,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:165:14", "data-dynamic-content": "true", className: "hidden sm:block overflow-x-auto", children: /* @__PURE__ */ jsxDEV("table", { "data-source-location": "components/dashboard/CustomersSection:166:16", "data-dynamic-content": "true", className: "w-full", children: [
              /* @__PURE__ */ jsxDEV("thead", { "data-source-location": "components/dashboard/CustomersSection:167:18", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV("tr", { "data-source-location": "components/dashboard/CustomersSection:168:20", "data-dynamic-content": "false", className: "text-left text-sm text-gray-500 border-b", children: [
                /* @__PURE__ */ jsxDEV("th", { "data-source-location": "components/dashboard/CustomersSection:169:22", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Name" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                  lineNumber: 188,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("th", { "data-source-location": "components/dashboard/CustomersSection:170:22", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Phone" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                  lineNumber: 189,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("th", { "data-source-location": "components/dashboard/CustomersSection:171:22", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Orders" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                  lineNumber: 190,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("th", { "data-source-location": "components/dashboard/CustomersSection:172:22", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Spent" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                  lineNumber: 191,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("th", { "data-source-location": "components/dashboard/CustomersSection:173:22", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Earned" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                  lineNumber: 192,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("th", { "data-source-location": "components/dashboard/CustomersSection:174:22", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Redeemed" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                  lineNumber: 193,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("th", { "data-source-location": "components/dashboard/CustomersSection:175:22", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Available" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                  lineNumber: 194,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("th", { "data-source-location": "components/dashboard/CustomersSection:176:22", "data-dynamic-content": "false", className: "pb-3 font-medium" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                  lineNumber: 195,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                lineNumber: 187,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                lineNumber: 186,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("tbody", { "data-source-location": "components/dashboard/CustomersSection:179:18", "data-dynamic-content": "true", className: "divide-y", "data-collection-id": "customers", children: filteredCustomers.map(
                (customer) => /* @__PURE__ */ jsxDEV("tr", { "data-source-location": "components/dashboard/CustomersSection:181:22", "data-dynamic-content": "true", className: "text-sm hover:bg-gray-50", "data-collection-item-id": customer?.id, children: [
                  /* @__PURE__ */ jsxDEV("td", { "data-source-location": "components/dashboard/CustomersSection:182:24", "data-dynamic-content": "true", className: "py-3", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:182:45", "data-dynamic-content": "true", children: [
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:182:50", "data-dynamic-content": "true", className: "font-medium", children: customer.name || "Guest" }, void 0, false, {
                      fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                      lineNumber: 201,
                      columnNumber: 243
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:182:107", "data-dynamic-content": "true", className: "text-xs text-gray-500 capitalize", children: customer.loyalty_tier || "bronze" }, void 0, false, {
                      fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                      lineNumber: 201,
                      columnNumber: 396
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                    lineNumber: 201,
                    columnNumber: 142
                  }, this) }, void 0, false, {
                    fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                    lineNumber: 201,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("td", { "data-source-location": "components/dashboard/CustomersSection:183:24", "data-dynamic-content": "true", className: "py-3", "data-collection-item-field": "phone", "data-collection-item-id": customer?.id, children: customer.phone }, void 0, false, {
                    fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                    lineNumber: 202,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("td", { "data-source-location": "components/dashboard/CustomersSection:184:24", "data-dynamic-content": "true", className: "py-3", children: customer.total_orders || 0 }, void 0, false, {
                    fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                    lineNumber: 203,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("td", { "data-source-location": "components/dashboard/CustomersSection:185:24", "data-dynamic-content": "true", className: "py-3 font-medium", children: [
                    "₹",
                    (customer.total_spent || 0).toLocaleString()
                  ] }, void 0, true, {
                    fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                    lineNumber: 204,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("td", { "data-source-location": "components/dashboard/CustomersSection:186:24", "data-dynamic-content": "true", className: "py-3", children: /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/CustomersSection:186:45", "data-dynamic-content": "true", className: "text-green-700 font-medium", children: customer.earned_tokens || 0 }, void 0, false, {
                    fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                    lineNumber: 205,
                    columnNumber: 142
                  }, this) }, void 0, false, {
                    fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                    lineNumber: 205,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("td", { "data-source-location": "components/dashboard/CustomersSection:187:24", "data-dynamic-content": "true", className: "py-3", children: /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/CustomersSection:187:45", "data-dynamic-content": "true", className: "text-red-700 font-medium", children: customer.redeemed_tokens || 0 }, void 0, false, {
                    fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                    lineNumber: 206,
                    columnNumber: 142
                  }, this) }, void 0, false, {
                    fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                    lineNumber: 206,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("td", { "data-source-location": "components/dashboard/CustomersSection:188:24", "data-dynamic-content": "true", className: "py-3", children: /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/CustomersSection:188:45", "data-dynamic-content": "true", className: "text-purple-700 font-bold", children: customer.loyalty_points || 0 }, void 0, false, {
                    fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                    lineNumber: 207,
                    columnNumber: 142
                  }, this) }, void 0, false, {
                    fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                    lineNumber: 207,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("td", { "data-source-location": "components/dashboard/CustomersSection:189:24", "data-dynamic-content": "true", className: "py-3", children: /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "components/dashboard/CustomersSection:189:45", "data-dynamic-content": "true", variant: "ghost", size: "sm", onClick: () => setSelectedCustomer(customer), children: /* @__PURE__ */ jsxDEV(Eye, { "data-source-location": "components/dashboard/CustomersSection:189:125", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                    lineNumber: 208,
                    columnNumber: 318
                  }, this) }, void 0, false, {
                    fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                    lineNumber: 208,
                    columnNumber: 142
                  }, this) }, void 0, false, {
                    fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                    lineNumber: 208,
                    columnNumber: 25
                  }, this)
                ] }, customer.id, true, {
                  fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                  lineNumber: 200,
                  columnNumber: 19
                }, this)
              ) }, void 0, false, {
                fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                lineNumber: 198,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/CustomersSection.jsx",
              lineNumber: 185,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/CustomersSection.jsx",
              lineNumber: 184,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/CustomersSection.jsx",
            lineNumber: 161,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/CustomersSection.jsx",
            lineNumber: 153,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/CustomersSection.jsx",
          lineNumber: 139,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(Dialog, { "data-source-location": "components/dashboard/CustomersSection:201:6", "data-dynamic-content": "true", open: !!selectedCustomer, onOpenChange: () => setSelectedCustomer(null), children: /* @__PURE__ */ jsxDEV(DialogContent, { "data-source-location": "components/dashboard/CustomersSection:202:8", "data-dynamic-content": "true", className: "max-w-lg", children: [
          /* @__PURE__ */ jsxDEV(DialogHeader, { "data-source-location": "components/dashboard/CustomersSection:203:10", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(DialogTitle, { "data-source-location": "components/dashboard/CustomersSection:204:12", "data-dynamic-content": "false", children: "Customer Details" }, void 0, false, {
            fileName: "/app/src/components/dashboard/CustomersSection.jsx",
            lineNumber: 223,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/CustomersSection.jsx",
            lineNumber: 222,
            columnNumber: 11
          }, this),
          selectedCustomer && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:208:12", "data-dynamic-content": "true", className: "space-y-4", "data-collection-item-field": "notes", "data-collection-item-id": selectedCustomer?.id || selectedCustomer?._id, children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:209:14", "data-dynamic-content": "true", className: "grid grid-cols-2 gap-4 text-sm", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:210:16", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:211:18", "data-dynamic-content": "false", className: "text-gray-500", children: "Name" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                  lineNumber: 230,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:212:18", "data-dynamic-content": "true", className: "font-medium", children: selectedCustomer.name || "Guest" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                  lineNumber: 231,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                lineNumber: 229,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:214:16", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:215:18", "data-dynamic-content": "false", className: "text-gray-500", children: "Phone" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                  lineNumber: 234,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:216:18", "data-dynamic-content": "true", className: "font-medium", "data-collection-item-field": "phone", "data-collection-item-id": selectedCustomer?.id || selectedCustomer?._id, children: selectedCustomer.phone }, void 0, false, {
                  fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                  lineNumber: 235,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                lineNumber: 233,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:218:16", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:219:18", "data-dynamic-content": "false", className: "text-gray-500", children: "Email" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                  lineNumber: 238,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:220:18", "data-dynamic-content": "true", className: "font-medium", children: selectedCustomer.email || "-" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                  lineNumber: 239,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                lineNumber: 237,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:222:16", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:223:18", "data-dynamic-content": "false", className: "text-gray-500", children: "Loyalty Tier" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                  lineNumber: 242,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "components/dashboard/CustomersSection:224:18", "data-dynamic-content": "true", className: "bg-purple-100 text-purple-700 capitalize", children: selectedCustomer.loyalty_tier || "bronze" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                  lineNumber: 243,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                lineNumber: 241,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:228:16", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:229:18", "data-dynamic-content": "false", className: "text-gray-500", children: "Total Orders" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                  lineNumber: 248,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:230:18", "data-dynamic-content": "true", className: "font-medium", children: selectedCustomer.total_orders || 0 }, void 0, false, {
                  fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                  lineNumber: 249,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                lineNumber: 247,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:232:16", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:233:18", "data-dynamic-content": "false", className: "text-gray-500", children: "Total Spent" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                  lineNumber: 252,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:234:18", "data-dynamic-content": "true", className: "font-medium", children: [
                  "₹",
                  (selectedCustomer.total_spent || 0).toLocaleString()
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                  lineNumber: 253,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                lineNumber: 251,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:236:16", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:237:18", "data-dynamic-content": "false", className: "text-gray-500", children: "Last Order" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                  lineNumber: 256,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:238:18", "data-dynamic-content": "true", className: "font-medium", children: selectedCustomer.last_order_date ? new Date(selectedCustomer.last_order_date).toLocaleDateString() : "-" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                  lineNumber: 257,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                lineNumber: 255,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/CustomersSection.jsx",
              lineNumber: 228,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:247:14", "data-dynamic-content": "true", className: "border-t pt-4", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:248:16", "data-dynamic-content": "false", className: "text-sm font-semibold text-gray-700 mb-3", children: "Loyalty Token History" }, void 0, false, {
                fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                lineNumber: 267,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:249:16", "data-dynamic-content": "true", className: "space-y-2", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:250:18", "data-dynamic-content": "true", className: "flex items-center justify-between bg-green-50 p-3 rounded-lg", children: [
                  /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/CustomersSection:251:20", "data-dynamic-content": "false", className: "text-sm text-gray-700", children: "Total Earned" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                    lineNumber: 270,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/CustomersSection:252:20", "data-dynamic-content": "true", className: "font-bold text-green-700", children: [
                    selectedCustomer.earned_tokens || 0,
                    " tokens"
                  ] }, void 0, true, {
                    fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                    lineNumber: 271,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                  lineNumber: 269,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:254:18", "data-dynamic-content": "true", className: "flex items-center justify-between bg-red-50 p-3 rounded-lg", children: [
                  /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/CustomersSection:255:20", "data-dynamic-content": "false", className: "text-sm text-gray-700", children: "Total Redeemed" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                    lineNumber: 274,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/CustomersSection:256:20", "data-dynamic-content": "true", className: "font-bold text-red-700", children: [
                    selectedCustomer.redeemed_tokens || 0,
                    " tokens"
                  ] }, void 0, true, {
                    fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                    lineNumber: 275,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                  lineNumber: 273,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:258:18", "data-dynamic-content": "true", className: "flex items-center justify-between bg-purple-50 p-3 rounded-lg", children: [
                  /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/CustomersSection:259:20", "data-dynamic-content": "false", className: "text-sm text-gray-700", children: "Available Balance" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                    lineNumber: 278,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/CustomersSection:260:20", "data-dynamic-content": "true", className: "font-bold text-purple-700 text-lg", children: [
                    selectedCustomer.loyalty_points || 0,
                    " tokens"
                  ] }, void 0, true, {
                    fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                    lineNumber: 279,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                  lineNumber: 277,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                lineNumber: 268,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/CustomersSection.jsx",
              lineNumber: 266,
              columnNumber: 15
            }, this),
            selectedCustomer.notes && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/CustomersSection:266:16", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:267:18", "data-dynamic-content": "false", className: "text-sm text-gray-500 mb-1", children: "Notes" }, void 0, false, {
                fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                lineNumber: 286,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/CustomersSection:268:18", "data-dynamic-content": "true", className: "text-sm", "data-collection-item-field": "notes", "data-collection-item-id": selectedCustomer?.id || selectedCustomer?._id, children: selectedCustomer.notes }, void 0, false, {
                fileName: "/app/src/components/dashboard/CustomersSection.jsx",
                lineNumber: 287,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/CustomersSection.jsx",
              lineNumber: 285,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/CustomersSection.jsx",
            lineNumber: 227,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/CustomersSection.jsx",
          lineNumber: 221,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "/app/src/components/dashboard/CustomersSection.jsx",
          lineNumber: 220,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/app/src/components/dashboard/CustomersSection.jsx",
      lineNumber: 61,
      columnNumber: 5
    },
    this
  );
}
_s(CustomersSection, "xGfs5xlBguGexyqrGeF++UdAtEM=");
_c = CustomersSection;
var _c;
$RefreshReg$(_c, "CustomersSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/dashboard/CustomersSection.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/dashboard/CustomersSection.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFDLFNBQUksd0JBQXFCLGdEQUErQyx3QkFBcUIsUUFDeEY7QUFBQSxxQ0FBQyxPQUFFLHdCQUFxQixnREFBK0Msd0JBQXFCLFNBQVEsV0FBVSw4QkFBNkIscUJBQTNJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWdKO0FBQUEsY0FDaEosdUJBQUMsT0FBRSx3QkFBcUIsZ0RBQStDLHdCQUFxQixRQUFPLFdBQVUsV0FBVSw4QkFBMkIsU0FBUSwyQkFBeUJ0QyxrQkFBa0JpQixNQUFNakIsa0JBQWtCa0MsS0FBTWxDLDJCQUFpQnNDLFNBQXBQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTBQO0FBQUEsaUJBRmhRO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBR0k7QUFBQSxlQTdETjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQStERTtBQUFBLGFBckVKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF1RUEsS0F4RUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXlFQTtBQUFBO0FBQUE7QUFBQSxJQXhPRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUF5T0E7QUFFSjtBQUFDekMsR0E1UHVCSixrQkFBZ0I7QUFBQThDLEtBQWhCOUM7QUFBZ0IsSUFBQThDO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwibW90aW9uIiwiYmFzZTQ0IiwiVXNlcnMiLCJTZWFyY2giLCJQaG9uZSIsIk1haWwiLCJDYWxlbmRhciIsIlNob3BwaW5nQmFnIiwiSW5kaWFuUnVwZWUiLCJNb3JlVmVydGljYWwiLCJFeWUiLCJUcmFzaDIiLCJUcmVuZGluZ1VwIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEhlYWRlciIsIkNhcmRUaXRsZSIsIkJ1dHRvbiIsIklucHV0IiwiQmFkZ2UiLCJEaWFsb2ciLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nSGVhZGVyIiwiRGlhbG9nVGl0bGUiLCJEcm9wZG93bk1lbnUiLCJEcm9wZG93bk1lbnVDb250ZW50IiwiRHJvcGRvd25NZW51SXRlbSIsIkRyb3Bkb3duTWVudVRyaWdnZXIiLCJDdXN0b21lcnNTZWN0aW9uIiwicmVzdGF1cmFudCIsImN1c3RvbWVycyIsIm9yZGVycyIsIl9zIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsInNlbGVjdGVkQ3VzdG9tZXIiLCJzZXRTZWxlY3RlZEN1c3RvbWVyIiwiZmlsdGVyZWRDdXN0b21lcnMiLCJmaWx0ZXIiLCJjdXN0b21lciIsIm1hdGNoZXNTZWFyY2giLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInBob25lIiwiZW1haWwiLCJnZXRDdXN0b21lck9yZGVycyIsImN1c3RvbWVySWQiLCJvIiwiY3VzdG9tZXJfcGhvbmUiLCJmaW5kIiwiYyIsImlkIiwib3BhY2l0eSIsImxlbmd0aCIsInJlZHVjZSIsInN1bSIsInRvdGFsX2Ftb3VudCIsInRvTG9jYWxlU3RyaW5nIiwibG95YWx0eV9wb2ludHMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJ0b3RhbF9vcmRlcnMiLCJ0b3RhbF9zcGVudCIsImxveWFsdHlfdGllciIsImVhcm5lZF90b2tlbnMiLCJyZWRlZW1lZF90b2tlbnMiLCJfaWQiLCJsYXN0X29yZGVyX2RhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwibm90ZXMiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJDdXN0b21lcnNTZWN0aW9uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBiYXNlNDQgfSBmcm9tIFwiQC9hcGkvYmFzZTQ0Q2xpZW50XCI7XG5pbXBvcnQge1xuICBVc2VycywgU2VhcmNoLCBQaG9uZSwgTWFpbCwgQ2FsZW5kYXIsIFNob3BwaW5nQmFnLCBJbmRpYW5SdXBlZSxcbiAgTW9yZVZlcnRpY2FsLCBFeWUsIFRyYXNoMiwgVHJlbmRpbmdVcCB9IGZyb21cblwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCI7XG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYmFkZ2VcIjtcbmltcG9ydCB7XG4gIERpYWxvZyxcbiAgRGlhbG9nQ29udGVudCxcbiAgRGlhbG9nSGVhZGVyLFxuICBEaWFsb2dUaXRsZSB9IGZyb21cblwiQC9jb21wb25lbnRzL3VpL2RpYWxvZ1wiO1xuaW1wb3J0IHtcbiAgRHJvcGRvd25NZW51LFxuICBEcm9wZG93bk1lbnVDb250ZW50LFxuICBEcm9wZG93bk1lbnVJdGVtLFxuICBEcm9wZG93bk1lbnVUcmlnZ2VyIH0gZnJvbVxuXCJAL2NvbXBvbmVudHMvdWkvZHJvcGRvd24tbWVudVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21lcnNTZWN0aW9uKHsgcmVzdGF1cmFudCwgY3VzdG9tZXJzLCBvcmRlcnMgfSkge1xuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2VsZWN0ZWRDdXN0b21lciwgc2V0U2VsZWN0ZWRDdXN0b21lcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBmaWx0ZXJlZEN1c3RvbWVycyA9IGN1c3RvbWVycy5maWx0ZXIoKGN1c3RvbWVyKSA9PiB7XG4gICAgY29uc3QgbWF0Y2hlc1NlYXJjaCA9XG4gICAgY3VzdG9tZXIubmFtZT8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgIGN1c3RvbWVyLnBob25lPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgY3VzdG9tZXIuZW1haWw/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSk7XG4gICAgcmV0dXJuIG1hdGNoZXNTZWFyY2g7XG4gIH0pO1xuXG4gIGNvbnN0IGdldEN1c3RvbWVyT3JkZXJzID0gKGN1c3RvbWVySWQpID0+IHtcbiAgICByZXR1cm4gb3JkZXJzLmZpbHRlcigobykgPT4gby5jdXN0b21lcl9waG9uZSA9PT0gY3VzdG9tZXJzLmZpbmQoKGMpID0+IGMuaWQgPT09IGN1c3RvbWVySWQpPy5waG9uZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246NDI6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgZXhpdD17eyBvcGFjaXR5OiAwIH19XG4gICAgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG5cbiAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjo0OTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBtZDppdGVtcy1jZW50ZXIgbWQ6anVzdGlmeS1iZXR3ZWVuIGdhcC00XCI+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjUwOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICA8aDIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjUxOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDBcIj5DdXN0b21lcnM8L2gyPlxuICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjo1MjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj57Y3VzdG9tZXJzLmxlbmd0aH0gdG90YWwgY3VzdG9tZXJzPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogU3RhdHMgKi99XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjo1Nzo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtNCBnYXAtNFwiPlxuICAgICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246NTg6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246NTk6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJwLTZcIj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjYwOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246NjE6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwicC0zIGJnLWJsdWUtMTAwIHJvdW5kZWQteGxcIj5cbiAgICAgICAgICAgICAgICA8VXNlcnMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjYyOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNiBoLTYgdGV4dC1ibHVlLTYwMFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjo2NDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjo2NToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5Ub3RhbCBDdXN0b21lcnM8L3A+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjY2OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDBcIj57Y3VzdG9tZXJzLmxlbmd0aH08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPC9DYXJkPlxuXG4gICAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjo3Mjo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjo3MzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtNlwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246NzQ6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjo3NToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJwLTMgYmctZ3JlZW4tMTAwIHJvdW5kZWQteGxcIj5cbiAgICAgICAgICAgICAgICA8U2hvcHBpbmdCYWcgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjc2OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNiBoLTYgdGV4dC1ncmVlbi02MDBcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246Nzg6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246Nzk6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+VG90YWwgT3JkZXJzPC9wPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjo4MDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwXCI+e29yZGVycy5sZW5ndGh9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZD5cblxuICAgICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246ODY6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246ODc6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJwLTZcIj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjg4OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246ODk6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwicC0zIGJnLW9yYW5nZS0xMDAgcm91bmRlZC14bFwiPlxuICAgICAgICAgICAgICAgIDxJbmRpYW5SdXBlZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246OTA6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LW9yYW5nZS02MDBcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246OTI6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246OTM6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+VG90YWwgUmV2ZW51ZTwvcD5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246OTQ6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgICAg4oK5e29yZGVycy5yZWR1Y2UoKHN1bSwgbykgPT4gc3VtICsgKG8udG90YWxfYW1vdW50IHx8IDApLCAwKS50b0xvY2FsZVN0cmluZygpfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmQ+XG5cbiAgICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjEwMjo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjoxMDM6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJwLTZcIj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjEwNDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjEwNToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJwLTMgYmctcHVycGxlLTEwMCByb3VuZGVkLXhsXCI+XG4gICAgICAgICAgICAgICAgPFRyZW5kaW5nVXAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjEwNjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTYgaC02IHRleHQtcHVycGxlLTYwMFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjoxMDg6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MTA5OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPkFjdGl2ZSBUb2tlbnM8L3A+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjExMDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgICB7Y3VzdG9tZXJzLnJlZHVjZSgoc3VtLCBjKSA9PiBzdW0gKyAoYy5sb3lhbHR5X3BvaW50cyB8fCAwKSwgMCkudG9Mb2NhbGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBDdXN0b21lcnMgTGlzdCAqL31cbiAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjoxMjA6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICA8Q2FyZEhlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MTIxOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjoxMjI6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IG1kOml0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MTIzOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleC0xIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDxTZWFyY2ggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjEyNDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTMgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIHctNCBoLTQgdGV4dC1ncmF5LTQwMFwiIC8+XG4gICAgICAgICAgICAgIDxJbnB1dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MTI1OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggY3VzdG9tZXJzLi4uXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGwtOVwiIC8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MTM0OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICB7ZmlsdGVyZWRDdXN0b21lcnMubGVuZ3RoID09PSAwID9cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjoxMzY6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktMTIgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICA8VXNlcnMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjEzNzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgbXgtYXV0byBtYi0zIHRleHQtZ3JheS0zMDBcIiAvPlxuICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MTM4OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+Tm8gY3VzdG9tZXJzIHlldDwvcD5cbiAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjEzOToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+Q3VzdG9tZXJzIHdpbGwgYXBwZWFyIGhlcmUgd2hlbiB0aGV5IHBsYWNlIG9yZGVyczwvcD5cbiAgICAgICAgICAgIDwvZGl2PiA6XG5cbiAgICAgICAgICA8PlxuICAgICAgICAgICAgICB7LyogTW9iaWxlIENhcmRzICovfVxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjoxNDQ6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzbTpoaWRkZW4gc3BhY2UteS0zXCIgZGF0YS1jb2xsZWN0aW9uLWlkPVwiY3VzdG9tZXJzXCI+XG4gICAgICAgICAgICAgICAge2ZpbHRlcmVkQ3VzdG9tZXJzLm1hcCgoY3VzdG9tZXIpID0+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjE0NjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17Y3VzdG9tZXIuaWR9IGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkLXhsIHAtNCBob3ZlcjpiZy1ncmF5LTUwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2N1c3RvbWVyPy5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjE0NzoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MTQ4OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MTQ5OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+e2N1c3RvbWVyLm5hbWUgfHwgJ0d1ZXN0J308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MTUwOjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJwaG9uZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtjdXN0b21lcj8uaWR9PntjdXN0b21lci5waG9uZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MTUyOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdmFyaWFudD1cImdob3N0XCIgc2l6ZT1cInNtXCIgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRDdXN0b21lcihjdXN0b21lcil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEV5ZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MTUzOjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MTU2OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtMiB0ZXh0LWNlbnRlciB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MTU3OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYmctZ3JheS01MCByb3VuZGVkLWxnIHAtMlwiPjxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjoxNTc6NjVcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPk9yZGVyczwvcD48cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MTU3OjEwNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPntjdXN0b21lci50b3RhbF9vcmRlcnMgfHwgMH08L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MTU4OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYmctZ3JheS01MCByb3VuZGVkLWxnIHAtMlwiPjxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjoxNTg6NjVcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPlNwZW50PC9wPjxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjoxNTg6MTAzXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+4oK5eyhjdXN0b21lci50b3RhbF9zcGVudCB8fCAwKS50b0xvY2FsZVN0cmluZygpfTwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjoxNTk6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJiZy1wdXJwbGUtNTAgcm91bmRlZC1sZyBwLTJcIj48cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MTU5OjY3XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5Ub2tlbnM8L3A+PHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjE1OToxMDZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1wdXJwbGUtNzAwXCI+e2N1c3RvbWVyLmxveWFsdHlfcG9pbnRzIHx8IDB9PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIERlc2t0b3AgVGFibGUgKi99XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjE2NToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImhpZGRlbiBzbTpibG9jayBvdmVyZmxvdy14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8dGFibGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjE2NjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgPHRoZWFkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjoxNjc6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MTY4OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtbGVmdCB0ZXh0LXNtIHRleHQtZ3JheS01MDAgYm9yZGVyLWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjE2OToyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJwYi0zIGZvbnQtbWVkaXVtXCI+TmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjoxNzA6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwicGItMyBmb250LW1lZGl1bVwiPlBob25lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjE3MToyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJwYi0zIGZvbnQtbWVkaXVtXCI+T3JkZXJzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjE3MjoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJwYi0zIGZvbnQtbWVkaXVtXCI+U3BlbnQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MTczOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInBiLTMgZm9udC1tZWRpdW1cIj5FYXJuZWQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MTc0OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInBiLTMgZm9udC1tZWRpdW1cIj5SZWRlZW1lZDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjoxNzU6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwicGItMyBmb250LW1lZGl1bVwiPkF2YWlsYWJsZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjoxNzY6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwicGItMyBmb250LW1lZGl1bVwiPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgPHRib2R5IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjoxNzk6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJkaXZpZGUteVwiIGRhdGEtY29sbGVjdGlvbi1pZD1cImN1c3RvbWVyc1wiPlxuICAgICAgICAgICAgICAgICAgICB7ZmlsdGVyZWRDdXN0b21lcnMubWFwKChjdXN0b21lcikgPT5cbiAgICAgICAgICAgICAgICAgIDx0ciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MTgxOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtjdXN0b21lci5pZH0gY2xhc3NOYW1lPVwidGV4dC1zbSBob3ZlcjpiZy1ncmF5LTUwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2N1c3RvbWVyPy5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjE4MjoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB5LTNcIj48ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjoxODI6NDVcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj48cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MTgyOjUwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj57Y3VzdG9tZXIubmFtZSB8fCAnR3Vlc3QnfTwvcD48cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MTgyOjEwN1wiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBjYXBpdGFsaXplXCI+e2N1c3RvbWVyLmxveWFsdHlfdGllciB8fCAnYnJvbnplJ308L3A+PC9kaXY+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MTgzOjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicHktM1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicGhvbmVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17Y3VzdG9tZXI/LmlkfT57Y3VzdG9tZXIucGhvbmV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MTg0OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicHktM1wiPntjdXN0b21lci50b3RhbF9vcmRlcnMgfHwgMH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjoxODU6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJweS0zIGZvbnQtbWVkaXVtXCI+4oK5eyhjdXN0b21lci50b3RhbF9zcGVudCB8fCAwKS50b0xvY2FsZVN0cmluZygpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjE4NjoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB5LTNcIj48c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MTg2OjQ1XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmVlbi03MDAgZm9udC1tZWRpdW1cIj57Y3VzdG9tZXIuZWFybmVkX3Rva2VucyB8fCAwfTwvc3Bhbj48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjoxODc6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJweS0zXCI+PHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjE4Nzo0NVwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtcmVkLTcwMCBmb250LW1lZGl1bVwiPntjdXN0b21lci5yZWRlZW1lZF90b2tlbnMgfHwgMH08L3NwYW4+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MTg4OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicHktM1wiPjxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjoxODg6NDVcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXB1cnBsZS03MDAgZm9udC1ib2xkXCI+e2N1c3RvbWVyLmxveWFsdHlfcG9pbnRzIHx8IDB9PC9zcGFuPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjE4OToyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB5LTNcIj48QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjoxODk6NDVcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB2YXJpYW50PVwiZ2hvc3RcIiBzaXplPVwic21cIiBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZEN1c3RvbWVyKGN1c3RvbWVyKX0+PEV5ZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MTg5OjEyNVwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz48L0J1dHRvbj48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDwvQ2FyZD5cblxuICAgICAgey8qIEN1c3RvbWVyIERldGFpbCBEaWFsb2cgKi99XG4gICAgICA8RGlhbG9nIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjoyMDE6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG9wZW49eyEhc2VsZWN0ZWRDdXN0b21lcn0gb25PcGVuQ2hhbmdlPXsoKSA9PiBzZXRTZWxlY3RlZEN1c3RvbWVyKG51bGwpfT5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjIwMjo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWF4LXctbGdcIj5cbiAgICAgICAgICA8RGlhbG9nSGVhZGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjoyMDM6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICA8RGlhbG9nVGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjIwNDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5DdXN0b21lciBEZXRhaWxzPC9EaWFsb2dUaXRsZT5cbiAgICAgICAgICA8L0RpYWxvZ0hlYWRlcj5cbiAgICAgICAgICBcbiAgICAgICAgICB7c2VsZWN0ZWRDdXN0b21lciAmJlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjIwODoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktNFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwibm90ZXNcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2VsZWN0ZWRDdXN0b21lcj8uaWQgfHwgc2VsZWN0ZWRDdXN0b21lcj8uX2lkfT5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MjA5OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MjEwOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MjExOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5OYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjIxMjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+e3NlbGVjdGVkQ3VzdG9tZXIubmFtZSB8fCAnR3Vlc3QnfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjoyMTQ6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjoyMTU6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPlBob25lPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjIxNjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJwaG9uZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtzZWxlY3RlZEN1c3RvbWVyPy5pZCB8fCBzZWxlY3RlZEN1c3RvbWVyPy5faWR9PntzZWxlY3RlZEN1c3RvbWVyLnBob25lfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjoyMTg6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjoyMTk6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPkVtYWlsPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjIyMDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+e3NlbGVjdGVkQ3VzdG9tZXIuZW1haWwgfHwgJy0nfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjoyMjI6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjoyMjM6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPkxveWFsdHkgVGllcjwvcD5cbiAgICAgICAgICAgICAgICAgIDxCYWRnZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MjI0OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYmctcHVycGxlLTEwMCB0ZXh0LXB1cnBsZS03MDAgY2FwaXRhbGl6ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRDdXN0b21lci5sb3lhbHR5X3RpZXIgfHwgJ2Jyb256ZSd9XG4gICAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjIyODoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjIyOToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+VG90YWwgT3JkZXJzPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjIzMDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+e3NlbGVjdGVkQ3VzdG9tZXIudG90YWxfb3JkZXJzIHx8IDB9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjIzMjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjIzMzoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+VG90YWwgU3BlbnQ8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MjM0OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj7igrl7KHNlbGVjdGVkQ3VzdG9tZXIudG90YWxfc3BlbnQgfHwgMCkudG9Mb2NhbGVTdHJpbmcoKX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MjM2OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MjM3OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5MYXN0IE9yZGVyPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjIzODoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEN1c3RvbWVyLmxhc3Rfb3JkZXJfZGF0ZSA/XG4gICAgICAgICAgICAgICAgICBuZXcgRGF0ZShzZWxlY3RlZEN1c3RvbWVyLmxhc3Rfb3JkZXJfZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCkgOlxuICAgICAgICAgICAgICAgICAgJy0nfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogVG9rZW4gSW5mb3JtYXRpb24gKi99XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjI0NzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImJvcmRlci10IHB0LTRcIj5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MjQ4OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwIG1iLTNcIj5Mb3lhbHR5IFRva2VuIEhpc3Rvcnk8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MjQ5OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjoyNTA6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYmctZ3JlZW4tNTAgcC0zIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjI1MToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS03MDBcIj5Ub3RhbCBFYXJuZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ3VzdG9tZXJzU2VjdGlvbjoyNTI6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1ncmVlbi03MDBcIj57c2VsZWN0ZWRDdXN0b21lci5lYXJuZWRfdG9rZW5zIHx8IDB9IHRva2Vuczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MjU0OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJnLXJlZC01MCBwLTMgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MjU1OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMFwiPlRvdGFsIFJlZGVlbWVkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MjU2OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtcmVkLTcwMFwiPntzZWxlY3RlZEN1c3RvbWVyLnJlZGVlbWVkX3Rva2VucyB8fCAwfSB0b2tlbnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjI1ODoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBiZy1wdXJwbGUtNTAgcC0zIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjI1OToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS03MDBcIj5BdmFpbGFibGUgQmFsYW5jZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uOjI2MDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXB1cnBsZS03MDAgdGV4dC1sZ1wiPntzZWxlY3RlZEN1c3RvbWVyLmxveWFsdHlfcG9pbnRzIHx8IDB9IHRva2Vuczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7c2VsZWN0ZWRDdXN0b21lci5ub3RlcyAmJlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MjY2OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MjY3OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBtYi0xXCI+Tm90ZXM8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb246MjY4OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1zbVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwibm90ZXNcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2VsZWN0ZWRDdXN0b21lcj8uaWQgfHwgc2VsZWN0ZWRDdXN0b21lcj8uX2lkfT57c2VsZWN0ZWRDdXN0b21lci5ub3Rlc308L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgIDwvRGlhbG9nPlxuICAgIDwvbW90aW9uLmRpdj4pO1xuXG59Il0sImZpbGUiOiIvYXBwL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9DdXN0b21lcnNTZWN0aW9uLmpzeCJ9