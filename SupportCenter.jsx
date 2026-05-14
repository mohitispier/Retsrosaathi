import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/SupportCenter.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/SupportCenter.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { base44 } from "/src/api/base44Client.js";
import { Button } from "/src/components/ui/button.jsx";
import { Input } from "/src/components/ui/input.jsx";
import { Badge } from "/src/components/ui/badge.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "/src/components/ui/card.jsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "/src/components/ui/tabs.jsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "/src/components/ui/select.jsx";
import { MessageCircle, User, Store, Clock, Filter, Search, AlertCircle } from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
export default function SupportCenter() {
  _s();
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterPriority, setFilterPriority] = useState("all");
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  useEffect(() => {
    checkAuth();
    loadTickets();
    const interval = setInterval(loadTickets, 5e3);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    applyFilters();
  }, [tickets, searchQuery, filterType, filterStatus, filterPriority]);
  const checkAuth = async () => {
    const userData = await base44.auth.me();
    setUser(userData);
    if (userData.role !== "admin" || userData.restaurant_id) {
      window.location.href = "/Home";
    }
  };
  const loadTickets = async () => {
    const ticketsData = await base44.entities.SupportTicket.list("-created_date", 500);
    setTickets(ticketsData);
    setIsLoading(false);
  };
  const applyFilters = () => {
    let filtered = tickets;
    if (searchQuery) {
      filtered = filtered.filter(
        (t) => t.customer_name?.toLowerCase().includes(searchQuery.toLowerCase()) || t.customer_phone?.includes(searchQuery) || t.ticket_id?.includes(searchQuery) || t.restaurant_name?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (filterType !== "all") {
      filtered = filtered.filter((t) => t.user_type === filterType);
    }
    if (filterStatus !== "all") {
      filtered = filtered.filter((t) => t.status === filterStatus);
    }
    if (filterPriority !== "all") {
      filtered = filtered.filter((t) => t.priority === filterPriority);
    }
    setFilteredTickets(filtered);
  };
  const updateTicketStatus = async (ticketId, status) => {
    await base44.entities.SupportTicket.update(ticketId, { status });
    loadTickets();
  };
  const updateTicketPriority = async (ticketId, priority) => {
    await base44.entities.SupportTicket.update(ticketId, { priority });
    loadTickets();
  };
  const assignTicket = async (ticketId) => {
    await base44.entities.SupportTicket.update(ticketId, {
      assigned_to: user.email,
      status: "in_progress"
    });
    loadTickets();
  };
  const openChat = (ticket) => {
    window.open(`/TeamChat?session=${ticket.session_id}`, "_blank");
  };
  const categoryLabels = {
    order_status: "Order Status",
    refund_issue: "Refund Issue",
    payment_problem: "Payment Problem",
    delivery_delay: "Delivery Delay",
    cancel_order: "Cancel Order",
    billing_issue: "Billing Issue",
    plan_upgrade: "Plan Upgrade",
    order_sync: "Order Sync",
    qr_not_working: "QR Not Working",
    technical_support: "Technical Support",
    other: "Other"
  };
  const statusColors = {
    open: "bg-orange-100 text-orange-700",
    in_progress: "bg-blue-100 text-blue-700",
    closed: "bg-green-100 text-green-700"
  };
  const priorityColors = {
    low: "bg-gray-100 text-gray-700",
    medium: "bg-yellow-100 text-yellow-700",
    high: "bg-red-100 text-red-700",
    urgent: "bg-purple-100 text-purple-700"
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SupportCenter:125:6", "data-dynamic-content": "false", className: "min-h-screen bg-gray-50 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SupportCenter:126:8", "data-dynamic-content": "false", className: "text-center", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SupportCenter:127:10", "data-dynamic-content": "false", className: "animate-spin rounded-full h-10 w-10 border-b-2 border-orange-600 mx-auto mb-4" }, void 0, false, {
        fileName: "/app/src/pages/SupportCenter.jsx",
        lineNumber: 146,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SupportCenter:128:10", "data-dynamic-content": "false", className: "text-gray-500", children: "Loading Support Center..." }, void 0, false, {
        fileName: "/app/src/pages/SupportCenter.jsx",
        lineNumber: 147,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/SupportCenter.jsx",
      lineNumber: 145,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/SupportCenter.jsx",
      lineNumber: 144,
      columnNumber: 7
    }, this);
  }
  const openTickets = tickets.filter((t) => t.status === "open").length;
  const inProgressTickets = tickets.filter((t) => t.status === "in_progress").length;
  const urgentTickets = tickets.filter((t) => t.priority === "urgent").length;
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SupportCenter:139:4", "data-dynamic-content": "true", className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SupportCenter:141:6", "data-dynamic-content": "true", className: "bg-white border-b shadow-sm", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SupportCenter:142:8", "data-dynamic-content": "true", className: "max-w-7xl mx-auto px-4 py-6", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SupportCenter:143:10", "data-dynamic-content": "true", className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SupportCenter:144:12", "data-dynamic-content": "false", children: [
          /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/SupportCenter:145:14", "data-dynamic-content": "false", className: "text-3xl font-bold text-gray-900", children: "Support Center" }, void 0, false, {
            fileName: "/app/src/pages/SupportCenter.jsx",
            lineNumber: 164,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SupportCenter:146:14", "data-dynamic-content": "false", className: "text-gray-600 mt-1", children: "Manage customer and restaurant support tickets" }, void 0, false, {
            fileName: "/app/src/pages/SupportCenter.jsx",
            lineNumber: 165,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SupportCenter.jsx",
          lineNumber: 163,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/SupportCenter:148:12", "data-dynamic-content": "true", variant: "outline", onClick: () => window.location.href = "/SuperAdminDashboard", children: "Back to Dashboard" }, void 0, false, {
          fileName: "/app/src/pages/SupportCenter.jsx",
          lineNumber: 167,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/SupportCenter.jsx",
        lineNumber: 162,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SupportCenter:154:10", "data-dynamic-content": "true", className: "grid grid-cols-4 gap-4 mt-6", children: [
        /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/SupportCenter:155:12", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/SupportCenter:156:14", "data-dynamic-content": "true", className: "p-4", children: [
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SupportCenter:157:16", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Total Tickets" }, void 0, false, {
            fileName: "/app/src/pages/SupportCenter.jsx",
            lineNumber: 176,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SupportCenter:158:16", "data-dynamic-content": "true", className: "text-2xl font-bold text-gray-900", children: tickets.length }, void 0, false, {
            fileName: "/app/src/pages/SupportCenter.jsx",
            lineNumber: 177,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SupportCenter.jsx",
          lineNumber: 175,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/SupportCenter.jsx",
          lineNumber: 174,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/SupportCenter:161:12", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/SupportCenter:162:14", "data-dynamic-content": "true", className: "p-4", children: [
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SupportCenter:163:16", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Open" }, void 0, false, {
            fileName: "/app/src/pages/SupportCenter.jsx",
            lineNumber: 182,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SupportCenter:164:16", "data-dynamic-content": "true", className: "text-2xl font-bold text-orange-600", "data-collection-item-field": "openTickets", children: openTickets }, void 0, false, {
            fileName: "/app/src/pages/SupportCenter.jsx",
            lineNumber: 183,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SupportCenter.jsx",
          lineNumber: 181,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/SupportCenter.jsx",
          lineNumber: 180,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/SupportCenter:167:12", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/SupportCenter:168:14", "data-dynamic-content": "true", className: "p-4", children: [
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SupportCenter:169:16", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "In Progress" }, void 0, false, {
            fileName: "/app/src/pages/SupportCenter.jsx",
            lineNumber: 188,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SupportCenter:170:16", "data-dynamic-content": "true", className: "text-2xl font-bold text-blue-600", "data-collection-item-field": "inProgressTickets", children: inProgressTickets }, void 0, false, {
            fileName: "/app/src/pages/SupportCenter.jsx",
            lineNumber: 189,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SupportCenter.jsx",
          lineNumber: 187,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/SupportCenter.jsx",
          lineNumber: 186,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/SupportCenter:173:12", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/SupportCenter:174:14", "data-dynamic-content": "true", className: "p-4", children: [
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SupportCenter:175:16", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Urgent" }, void 0, false, {
            fileName: "/app/src/pages/SupportCenter.jsx",
            lineNumber: 194,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SupportCenter:176:16", "data-dynamic-content": "true", className: "text-2xl font-bold text-red-600", "data-collection-item-field": "urgentTickets", children: urgentTickets }, void 0, false, {
            fileName: "/app/src/pages/SupportCenter.jsx",
            lineNumber: 195,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SupportCenter.jsx",
          lineNumber: 193,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/SupportCenter.jsx",
          lineNumber: 192,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/SupportCenter.jsx",
        lineNumber: 173,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/SupportCenter.jsx",
      lineNumber: 161,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/SupportCenter.jsx",
      lineNumber: 160,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SupportCenter:184:6", "data-dynamic-content": "true", className: "max-w-7xl mx-auto px-4 py-6", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SupportCenter:185:8", "data-dynamic-content": "true", className: "bg-white rounded-xl shadow-sm border p-4 mb-6", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SupportCenter:186:10", "data-dynamic-content": "true", className: "grid md:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SupportCenter:187:12", "data-dynamic-content": "true", className: "relative", children: [
          /* @__PURE__ */ jsxDEV(Search, { "data-source-location": "pages/SupportCenter:188:14", "data-dynamic-content": "false", className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }, void 0, false, {
            fileName: "/app/src/pages/SupportCenter.jsx",
            lineNumber: 207,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(
            Input,
            {
              "data-source-location": "pages/SupportCenter:189:14",
              "data-dynamic-content": "true",
              placeholder: "Search tickets...",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              className: "pl-9"
            },
            void 0,
            false,
            {
              fileName: "/app/src/pages/SupportCenter.jsx",
              lineNumber: 208,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/src/pages/SupportCenter.jsx",
          lineNumber: 206,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Select, { "data-source-location": "pages/SupportCenter:196:12", "data-dynamic-content": "true", value: filterType, onValueChange: setFilterType, children: [
          /* @__PURE__ */ jsxDEV(SelectTrigger, { "data-source-location": "pages/SupportCenter:197:14", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(SelectValue, { "data-source-location": "pages/SupportCenter:198:16", "data-dynamic-content": "false", placeholder: "User Type" }, void 0, false, {
            fileName: "/app/src/pages/SupportCenter.jsx",
            lineNumber: 217,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/SupportCenter.jsx",
            lineNumber: 216,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(SelectContent, { "data-source-location": "pages/SupportCenter:200:14", "data-dynamic-content": "false", children: [
            /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/SupportCenter:201:16", "data-dynamic-content": "false", value: "all", children: "All Types" }, void 0, false, {
              fileName: "/app/src/pages/SupportCenter.jsx",
              lineNumber: 220,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/SupportCenter:202:16", "data-dynamic-content": "false", value: "customer", children: "Customer" }, void 0, false, {
              fileName: "/app/src/pages/SupportCenter.jsx",
              lineNumber: 221,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/SupportCenter:203:16", "data-dynamic-content": "false", value: "restaurant", children: "Restaurant" }, void 0, false, {
              fileName: "/app/src/pages/SupportCenter.jsx",
              lineNumber: 222,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/SupportCenter.jsx",
            lineNumber: 219,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SupportCenter.jsx",
          lineNumber: 215,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Select, { "data-source-location": "pages/SupportCenter:206:12", "data-dynamic-content": "true", value: filterStatus, onValueChange: setFilterStatus, children: [
          /* @__PURE__ */ jsxDEV(SelectTrigger, { "data-source-location": "pages/SupportCenter:207:14", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(SelectValue, { "data-source-location": "pages/SupportCenter:208:16", "data-dynamic-content": "false", placeholder: "Status" }, void 0, false, {
            fileName: "/app/src/pages/SupportCenter.jsx",
            lineNumber: 227,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/SupportCenter.jsx",
            lineNumber: 226,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(SelectContent, { "data-source-location": "pages/SupportCenter:210:14", "data-dynamic-content": "false", children: [
            /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/SupportCenter:211:16", "data-dynamic-content": "false", value: "all", children: "All Status" }, void 0, false, {
              fileName: "/app/src/pages/SupportCenter.jsx",
              lineNumber: 230,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/SupportCenter:212:16", "data-dynamic-content": "false", value: "open", children: "Open" }, void 0, false, {
              fileName: "/app/src/pages/SupportCenter.jsx",
              lineNumber: 231,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/SupportCenter:213:16", "data-dynamic-content": "false", value: "in_progress", children: "In Progress" }, void 0, false, {
              fileName: "/app/src/pages/SupportCenter.jsx",
              lineNumber: 232,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/SupportCenter:214:16", "data-dynamic-content": "false", value: "closed", children: "Closed" }, void 0, false, {
              fileName: "/app/src/pages/SupportCenter.jsx",
              lineNumber: 233,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/SupportCenter.jsx",
            lineNumber: 229,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SupportCenter.jsx",
          lineNumber: 225,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Select, { "data-source-location": "pages/SupportCenter:217:12", "data-dynamic-content": "true", value: filterPriority, onValueChange: setFilterPriority, children: [
          /* @__PURE__ */ jsxDEV(SelectTrigger, { "data-source-location": "pages/SupportCenter:218:14", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(SelectValue, { "data-source-location": "pages/SupportCenter:219:16", "data-dynamic-content": "false", placeholder: "Priority" }, void 0, false, {
            fileName: "/app/src/pages/SupportCenter.jsx",
            lineNumber: 238,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/SupportCenter.jsx",
            lineNumber: 237,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(SelectContent, { "data-source-location": "pages/SupportCenter:221:14", "data-dynamic-content": "false", children: [
            /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/SupportCenter:222:16", "data-dynamic-content": "false", value: "all", children: "All Priority" }, void 0, false, {
              fileName: "/app/src/pages/SupportCenter.jsx",
              lineNumber: 241,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/SupportCenter:223:16", "data-dynamic-content": "false", value: "low", children: "Low" }, void 0, false, {
              fileName: "/app/src/pages/SupportCenter.jsx",
              lineNumber: 242,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/SupportCenter:224:16", "data-dynamic-content": "false", value: "medium", children: "Medium" }, void 0, false, {
              fileName: "/app/src/pages/SupportCenter.jsx",
              lineNumber: 243,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/SupportCenter:225:16", "data-dynamic-content": "false", value: "high", children: "High" }, void 0, false, {
              fileName: "/app/src/pages/SupportCenter.jsx",
              lineNumber: 244,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/SupportCenter:226:16", "data-dynamic-content": "false", value: "urgent", children: "Urgent" }, void 0, false, {
              fileName: "/app/src/pages/SupportCenter.jsx",
              lineNumber: 245,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/SupportCenter.jsx",
            lineNumber: 240,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SupportCenter.jsx",
          lineNumber: 236,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/SupportCenter.jsx",
        lineNumber: 205,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/SupportCenter.jsx",
        lineNumber: 204,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SupportCenter:233:8", "data-dynamic-content": "true", className: "space-y-3", "data-collection-id": "SupportTicket", children: filteredTickets.length === 0 ? /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/SupportCenter:235:12", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/SupportCenter:236:14", "data-dynamic-content": "false", className: "p-12 text-center", children: [
        /* @__PURE__ */ jsxDEV(AlertCircle, { "data-source-location": "pages/SupportCenter:237:16", "data-dynamic-content": "false", className: "w-12 h-12 text-gray-300 mx-auto mb-3" }, void 0, false, {
          fileName: "/app/src/pages/SupportCenter.jsx",
          lineNumber: 256,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SupportCenter:238:16", "data-dynamic-content": "false", className: "text-gray-500", children: "No tickets found" }, void 0, false, {
          fileName: "/app/src/pages/SupportCenter.jsx",
          lineNumber: 257,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/SupportCenter.jsx",
        lineNumber: 255,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/SupportCenter.jsx",
        lineNumber: 254,
        columnNumber: 11
      }, this) : filteredTickets.map(
        (ticket) => /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/SupportCenter:243:14", "data-dynamic-content": "true", className: "hover:shadow-md transition-shadow", "data-collection-item-id": ticket?.id, children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/SupportCenter:244:16", "data-dynamic-content": "true", className: "p-4", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SupportCenter:245:18", "data-dynamic-content": "true", className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SupportCenter:246:20", "data-dynamic-content": "true", className: "flex-1", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SupportCenter:247:22", "data-dynamic-content": "true", className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SupportCenter:248:24", "data-dynamic-content": "true", className: `w-10 h-10 rounded-lg flex items-center justify-center ${ticket.user_type === "customer" ? "bg-blue-100" : "bg-orange-100"}`, children: ticket.user_type === "customer" ? /* @__PURE__ */ jsxDEV(User, { "data-source-location": "pages/SupportCenter:252:28", "data-dynamic-content": "false", className: "w-5 h-5 text-blue-600" }, void 0, false, {
                fileName: "/app/src/pages/SupportCenter.jsx",
                lineNumber: 271,
                columnNumber: 23
              }, this) : /* @__PURE__ */ jsxDEV(Store, { "data-source-location": "pages/SupportCenter:254:28", "data-dynamic-content": "false", className: "w-5 h-5 text-orange-600" }, void 0, false, {
                fileName: "/app/src/pages/SupportCenter.jsx",
                lineNumber: 273,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "/app/src/pages/SupportCenter.jsx",
                lineNumber: 267,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SupportCenter:257:24", "data-dynamic-content": "true", className: "flex-1", "data-collection-item-field": "restaurant_name", "data-collection-item-id": ticket?.id, children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SupportCenter:258:26", "data-dynamic-content": "true", className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SupportCenter:259:28", "data-dynamic-content": "true", className: "font-semibold text-gray-900", "data-collection-item-field": "customer_name", "data-collection-item-id": ticket?.id, children: ticket.customer_name }, void 0, false, {
                    fileName: "/app/src/pages/SupportCenter.jsx",
                    lineNumber: 278,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/SupportCenter:260:28", "data-dynamic-content": "true", variant: "outline", className: "text-xs", "data-collection-item-field": "ticket_id", "data-collection-item-id": ticket?.id, children: ticket.ticket_id }, void 0, false, {
                    fileName: "/app/src/pages/SupportCenter.jsx",
                    lineNumber: 279,
                    columnNumber: 29
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/SupportCenter.jsx",
                  lineNumber: 277,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SupportCenter:264:26", "data-dynamic-content": "true", className: "text-sm text-gray-600", "data-collection-item-field": "customer_phone", "data-collection-item-id": ticket?.id, children: ticket.customer_phone }, void 0, false, {
                  fileName: "/app/src/pages/SupportCenter.jsx",
                  lineNumber: 283,
                  columnNumber: 27
                }, this),
                ticket.restaurant_name && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SupportCenter:266:28", "data-dynamic-content": "true", className: "text-xs text-gray-500", "data-collection-item-field": "restaurant_name", "data-collection-item-id": ticket?.id, children: [
                  "Restaurant: ",
                  ticket.restaurant_name
                ] }, void 0, true, {
                  fileName: "/app/src/pages/SupportCenter.jsx",
                  lineNumber: 285,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/SupportCenter.jsx",
                lineNumber: 276,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/SupportCenter.jsx",
              lineNumber: 266,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SupportCenter:271:22", "data-dynamic-content": "true", className: "flex items-center gap-2 mb-2", children: [
              /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/SupportCenter:272:24", "data-dynamic-content": "true", className: statusColors[ticket.status], "data-collection-item-field": "status", "data-collection-item-id": ticket?.id, children: ticket.status.replace("_", " ") }, void 0, false, {
                fileName: "/app/src/pages/SupportCenter.jsx",
                lineNumber: 291,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/SupportCenter:275:24", "data-dynamic-content": "true", className: priorityColors[ticket.priority], "data-collection-item-field": "priority", "data-collection-item-id": ticket?.id, children: ticket.priority }, void 0, false, {
                fileName: "/app/src/pages/SupportCenter.jsx",
                lineNumber: 294,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/SupportCenter:278:24", "data-dynamic-content": "true", variant: "outline", children: categoryLabels[ticket.issue_category] }, void 0, false, {
                fileName: "/app/src/pages/SupportCenter.jsx",
                lineNumber: 297,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/SupportCenter.jsx",
              lineNumber: 290,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SupportCenter:283:22", "data-dynamic-content": "true", className: "text-sm text-gray-700", "data-collection-item-field": "description", "data-collection-item-id": ticket?.id, children: ticket.description }, void 0, false, {
              fileName: "/app/src/pages/SupportCenter.jsx",
              lineNumber: 302,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SupportCenter:285:22", "data-dynamic-content": "true", className: "flex items-center gap-2 mt-2 text-xs text-gray-500", "data-collection-item-field": "assigned_to", "data-collection-item-id": ticket?.id, children: [
              /* @__PURE__ */ jsxDEV(Clock, { "data-source-location": "pages/SupportCenter:286:24", "data-dynamic-content": "false", className: "w-3 h-3" }, void 0, false, {
                fileName: "/app/src/pages/SupportCenter.jsx",
                lineNumber: 305,
                columnNumber: 25
              }, this),
              new Date(ticket.created_date).toLocaleString(),
              ticket.assigned_to && /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/SupportCenter:289:26", "data-dynamic-content": "true", className: "ml-3", "data-collection-item-field": "assigned_to", "data-collection-item-id": ticket?.id, children: [
                "• Assigned to: ",
                ticket.assigned_to
              ] }, void 0, true, {
                fileName: "/app/src/pages/SupportCenter.jsx",
                lineNumber: 308,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/SupportCenter.jsx",
              lineNumber: 304,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/SupportCenter.jsx",
            lineNumber: 265,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SupportCenter:294:20", "data-dynamic-content": "true", className: "flex flex-col gap-2 ml-4", children: [
            /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/SupportCenter:295:22", "data-dynamic-content": "true", size: "sm", onClick: () => openChat(ticket), children: "Open Chat" }, void 0, false, {
              fileName: "/app/src/pages/SupportCenter.jsx",
              lineNumber: 314,
              columnNumber: 23
            }, this),
            !ticket.assigned_to && /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/SupportCenter:299:24", "data-dynamic-content": "true", size: "sm", variant: "outline", onClick: () => assignTicket(ticket.id), children: "Assign to Me" }, void 0, false, {
              fileName: "/app/src/pages/SupportCenter.jsx",
              lineNumber: 318,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(
              Select,
              {
                "data-source-location": "pages/SupportCenter:303:22",
                "data-dynamic-content": "true",
                value: ticket.status,
                onValueChange: (value) => updateTicketStatus(ticket.id, value),
                children: [
                  /* @__PURE__ */ jsxDEV(SelectTrigger, { "data-source-location": "pages/SupportCenter:307:24", "data-dynamic-content": "false", className: "w-32", children: /* @__PURE__ */ jsxDEV(SelectValue, { "data-source-location": "pages/SupportCenter:308:26", "data-dynamic-content": "false" }, void 0, false, {
                    fileName: "/app/src/pages/SupportCenter.jsx",
                    lineNumber: 327,
                    columnNumber: 27
                  }, this) }, void 0, false, {
                    fileName: "/app/src/pages/SupportCenter.jsx",
                    lineNumber: 326,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV(SelectContent, { "data-source-location": "pages/SupportCenter:310:24", "data-dynamic-content": "false", children: [
                    /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/SupportCenter:311:26", "data-dynamic-content": "false", value: "open", children: "Open" }, void 0, false, {
                      fileName: "/app/src/pages/SupportCenter.jsx",
                      lineNumber: 330,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/SupportCenter:312:26", "data-dynamic-content": "false", value: "in_progress", children: "In Progress" }, void 0, false, {
                      fileName: "/app/src/pages/SupportCenter.jsx",
                      lineNumber: 331,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/SupportCenter:313:26", "data-dynamic-content": "false", value: "closed", children: "Closed" }, void 0, false, {
                      fileName: "/app/src/pages/SupportCenter.jsx",
                      lineNumber: 332,
                      columnNumber: 27
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/SupportCenter.jsx",
                    lineNumber: 329,
                    columnNumber: 25
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/src/pages/SupportCenter.jsx",
                lineNumber: 322,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              Select,
              {
                "data-source-location": "pages/SupportCenter:316:22",
                "data-dynamic-content": "true",
                value: ticket.priority,
                onValueChange: (value) => updateTicketPriority(ticket.id, value),
                children: [
                  /* @__PURE__ */ jsxDEV(SelectTrigger, { "data-source-location": "pages/SupportCenter:320:24", "data-dynamic-content": "false", className: "w-32", children: /* @__PURE__ */ jsxDEV(SelectValue, { "data-source-location": "pages/SupportCenter:321:26", "data-dynamic-content": "false" }, void 0, false, {
                    fileName: "/app/src/pages/SupportCenter.jsx",
                    lineNumber: 340,
                    columnNumber: 27
                  }, this) }, void 0, false, {
                    fileName: "/app/src/pages/SupportCenter.jsx",
                    lineNumber: 339,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV(SelectContent, { "data-source-location": "pages/SupportCenter:323:24", "data-dynamic-content": "false", children: [
                    /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/SupportCenter:324:26", "data-dynamic-content": "false", value: "low", children: "Low" }, void 0, false, {
                      fileName: "/app/src/pages/SupportCenter.jsx",
                      lineNumber: 343,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/SupportCenter:325:26", "data-dynamic-content": "false", value: "medium", children: "Medium" }, void 0, false, {
                      fileName: "/app/src/pages/SupportCenter.jsx",
                      lineNumber: 344,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/SupportCenter:326:26", "data-dynamic-content": "false", value: "high", children: "High" }, void 0, false, {
                      fileName: "/app/src/pages/SupportCenter.jsx",
                      lineNumber: 345,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/SupportCenter:327:26", "data-dynamic-content": "false", value: "urgent", children: "Urgent" }, void 0, false, {
                      fileName: "/app/src/pages/SupportCenter.jsx",
                      lineNumber: 346,
                      columnNumber: 27
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/SupportCenter.jsx",
                    lineNumber: 342,
                    columnNumber: 25
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/src/pages/SupportCenter.jsx",
                lineNumber: 335,
                columnNumber: 23
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/src/pages/SupportCenter.jsx",
            lineNumber: 313,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SupportCenter.jsx",
          lineNumber: 264,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/SupportCenter.jsx",
          lineNumber: 263,
          columnNumber: 17
        }, this) }, ticket.id, false, {
          fileName: "/app/src/pages/SupportCenter.jsx",
          lineNumber: 262,
          columnNumber: 11
        }, this)
      ) }, void 0, false, {
        fileName: "/app/src/pages/SupportCenter.jsx",
        lineNumber: 252,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/SupportCenter.jsx",
      lineNumber: 203,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/SupportCenter.jsx",
    lineNumber: 158,
    columnNumber: 5
  }, this);
}
_s(SupportCenter, "JnePbLdUh7WUPLmwDvccbx8Ur88=");
_c = SupportCenter;
var _c;
$RefreshReg$(_c, "SupportCenter");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/SupportCenter.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/SupportCenter.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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IiwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImJhc2U0NCIsIkJ1dHRvbiIsIklucHV0IiwiQmFkZ2UiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiVGFicyIsIlRhYnNDb250ZW50IiwiVGFic0xpc3QiLCJUYWJzVHJpZ2dlciIsIlNlbGVjdCIsIlNlbGVjdENvbnRlbnQiLCJTZWxlY3RJdGVtIiwiU2VsZWN0VHJpZ2dlciIsIlNlbGVjdFZhbHVlIiwiTWVzc2FnZUNpcmNsZSIsIlVzZXIiLCJTdG9yZSIsIkNsb2NrIiwiRmlsdGVyIiwiU2VhcmNoIiwiQWxlcnRDaXJjbGUiLCJTdXBwb3J0Q2VudGVyIiwiX3MiLCJ0aWNrZXRzIiwic2V0VGlja2V0cyIsImZpbHRlcmVkVGlja2V0cyIsInNldEZpbHRlcmVkVGlja2V0cyIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJmaWx0ZXJUeXBlIiwic2V0RmlsdGVyVHlwZSIsImZpbHRlclN0YXR1cyIsInNldEZpbHRlclN0YXR1cyIsImZpbHRlclByaW9yaXR5Iiwic2V0RmlsdGVyUHJpb3JpdHkiLCJzZWxlY3RlZFRpY2tldCIsInNldFNlbGVjdGVkVGlja2V0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXNlciIsInNldFVzZXIiLCJjaGVja0F1dGgiLCJsb2FkVGlja2V0cyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiYXBwbHlGaWx0ZXJzIiwidXNlckRhdGEiLCJhdXRoIiwibWUiLCJyb2xlIiwicmVzdGF1cmFudF9pZCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInRpY2tldHNEYXRhIiwiZW50aXRpZXMiLCJTdXBwb3J0VGlja2V0IiwibGlzdCIsImZpbHRlcmVkIiwiZmlsdGVyIiwidCIsImN1c3RvbWVyX25hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiY3VzdG9tZXJfcGhvbmUiLCJ0aWNrZXRfaWQiLCJyZXN0YXVyYW50X25hbWUiLCJ1c2VyX3R5cGUiLCJzdGF0dXMiLCJwcmlvcml0eSIsInVwZGF0ZVRpY2tldFN0YXR1cyIsInRpY2tldElkIiwidXBkYXRlIiwidXBkYXRlVGlja2V0UHJpb3JpdHkiLCJhc3NpZ25UaWNrZXQiLCJhc3NpZ25lZF90byIsImVtYWlsIiwib3BlbkNoYXQiLCJ0aWNrZXQiLCJvcGVuIiwic2Vzc2lvbl9pZCIsImNhdGVnb3J5TGFiZWxzIiwib3JkZXJfc3RhdHVzIiwicmVmdW5kX2lzc3VlIiwicGF5bWVudF9wcm9ibGVtIiwiZGVsaXZlcnlfZGVsYXkiLCJjYW5jZWxfb3JkZXIiLCJiaWxsaW5nX2lzc3VlIiwicGxhbl91cGdyYWRlIiwib3JkZXJfc3luYyIsInFyX25vdF93b3JraW5nIiwidGVjaG5pY2FsX3N1cHBvcnQiLCJvdGhlciIsInN0YXR1c0NvbG9ycyIsImluX3Byb2dyZXNzIiwiY2xvc2VkIiwicHJpb3JpdHlDb2xvcnMiLCJsb3ciLCJtZWRpdW0iLCJoaWdoIiwidXJnZW50Iiwib3BlblRpY2tldHMiLCJsZW5ndGgiLCJpblByb2dyZXNzVGlja2V0cyIsInVyZ2VudFRpY2tldHMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJpZCIsInJlcGxhY2UiLCJpc3N1ZV9jYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwiRGF0ZSIsImNyZWF0ZWRfZGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiU3VwcG9ydENlbnRlci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGJhc2U0NCB9IGZyb20gXCJAL2FwaS9iYXNlNDRDbGllbnRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9iYWRnZVwiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIENhcmRIZWFkZXIsIENhcmRUaXRsZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgVGFicywgVGFic0NvbnRlbnQsIFRhYnNMaXN0LCBUYWJzVHJpZ2dlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdGFic1wiO1xuaW1wb3J0IHsgU2VsZWN0LCBTZWxlY3RDb250ZW50LCBTZWxlY3RJdGVtLCBTZWxlY3RUcmlnZ2VyLCBTZWxlY3RWYWx1ZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvc2VsZWN0XCI7XG5pbXBvcnQgeyBNZXNzYWdlQ2lyY2xlLCBVc2VyLCBTdG9yZSwgQ2xvY2ssIEZpbHRlciwgU2VhcmNoLCBBbGVydENpcmNsZSB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3VwcG9ydENlbnRlcigpIHtcbiAgY29uc3QgW3RpY2tldHMsIHNldFRpY2tldHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZmlsdGVyZWRUaWNrZXRzLCBzZXRGaWx0ZXJlZFRpY2tldHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZmlsdGVyVHlwZSwgc2V0RmlsdGVyVHlwZV0gPSB1c2VTdGF0ZShcImFsbFwiKTtcbiAgY29uc3QgW2ZpbHRlclN0YXR1cywgc2V0RmlsdGVyU3RhdHVzXSA9IHVzZVN0YXRlKFwiYWxsXCIpO1xuICBjb25zdCBbZmlsdGVyUHJpb3JpdHksIHNldEZpbHRlclByaW9yaXR5XSA9IHVzZVN0YXRlKFwiYWxsXCIpO1xuICBjb25zdCBbc2VsZWN0ZWRUaWNrZXQsIHNldFNlbGVjdGVkVGlja2V0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hlY2tBdXRoKCk7XG4gICAgbG9hZFRpY2tldHMoKTtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGxvYWRUaWNrZXRzLCA1MDAwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFwcGx5RmlsdGVycygpO1xuICB9LCBbdGlja2V0cywgc2VhcmNoUXVlcnksIGZpbHRlclR5cGUsIGZpbHRlclN0YXR1cywgZmlsdGVyUHJpb3JpdHldKTtcblxuICBjb25zdCBjaGVja0F1dGggPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCBiYXNlNDQuYXV0aC5tZSgpO1xuICAgIHNldFVzZXIodXNlckRhdGEpO1xuICAgIGlmICh1c2VyRGF0YS5yb2xlICE9PSAnYWRtaW4nIHx8IHVzZXJEYXRhLnJlc3RhdXJhbnRfaWQpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvSG9tZVwiO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBsb2FkVGlja2V0cyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB0aWNrZXRzRGF0YSA9IGF3YWl0IGJhc2U0NC5lbnRpdGllcy5TdXBwb3J0VGlja2V0Lmxpc3QoJy1jcmVhdGVkX2RhdGUnLCA1MDApO1xuICAgIHNldFRpY2tldHModGlja2V0c0RhdGEpO1xuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgYXBwbHlGaWx0ZXJzID0gKCkgPT4ge1xuICAgIGxldCBmaWx0ZXJlZCA9IHRpY2tldHM7XG5cbiAgICBpZiAoc2VhcmNoUXVlcnkpIHtcbiAgICAgIGZpbHRlcmVkID0gZmlsdGVyZWQuZmlsdGVyKCh0KSA9PlxuICAgICAgdC5jdXN0b21lcl9uYW1lPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICB0LmN1c3RvbWVyX3Bob25lPy5pbmNsdWRlcyhzZWFyY2hRdWVyeSkgfHxcbiAgICAgIHQudGlja2V0X2lkPy5pbmNsdWRlcyhzZWFyY2hRdWVyeSkgfHxcbiAgICAgIHQucmVzdGF1cmFudF9uYW1lPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChmaWx0ZXJUeXBlICE9PSBcImFsbFwiKSB7XG4gICAgICBmaWx0ZXJlZCA9IGZpbHRlcmVkLmZpbHRlcigodCkgPT4gdC51c2VyX3R5cGUgPT09IGZpbHRlclR5cGUpO1xuICAgIH1cblxuICAgIGlmIChmaWx0ZXJTdGF0dXMgIT09IFwiYWxsXCIpIHtcbiAgICAgIGZpbHRlcmVkID0gZmlsdGVyZWQuZmlsdGVyKCh0KSA9PiB0LnN0YXR1cyA9PT0gZmlsdGVyU3RhdHVzKTtcbiAgICB9XG5cbiAgICBpZiAoZmlsdGVyUHJpb3JpdHkgIT09IFwiYWxsXCIpIHtcbiAgICAgIGZpbHRlcmVkID0gZmlsdGVyZWQuZmlsdGVyKCh0KSA9PiB0LnByaW9yaXR5ID09PSBmaWx0ZXJQcmlvcml0eSk7XG4gICAgfVxuXG4gICAgc2V0RmlsdGVyZWRUaWNrZXRzKGZpbHRlcmVkKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVUaWNrZXRTdGF0dXMgPSBhc3luYyAodGlja2V0SWQsIHN0YXR1cykgPT4ge1xuICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5TdXBwb3J0VGlja2V0LnVwZGF0ZSh0aWNrZXRJZCwgeyBzdGF0dXMgfSk7XG4gICAgbG9hZFRpY2tldHMoKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVUaWNrZXRQcmlvcml0eSA9IGFzeW5jICh0aWNrZXRJZCwgcHJpb3JpdHkpID0+IHtcbiAgICBhd2FpdCBiYXNlNDQuZW50aXRpZXMuU3VwcG9ydFRpY2tldC51cGRhdGUodGlja2V0SWQsIHsgcHJpb3JpdHkgfSk7XG4gICAgbG9hZFRpY2tldHMoKTtcbiAgfTtcblxuICBjb25zdCBhc3NpZ25UaWNrZXQgPSBhc3luYyAodGlja2V0SWQpID0+IHtcbiAgICBhd2FpdCBiYXNlNDQuZW50aXRpZXMuU3VwcG9ydFRpY2tldC51cGRhdGUodGlja2V0SWQsIHtcbiAgICAgIGFzc2lnbmVkX3RvOiB1c2VyLmVtYWlsLFxuICAgICAgc3RhdHVzOiBcImluX3Byb2dyZXNzXCJcbiAgICB9KTtcbiAgICBsb2FkVGlja2V0cygpO1xuICB9O1xuXG4gIGNvbnN0IG9wZW5DaGF0ID0gKHRpY2tldCkgPT4ge1xuICAgIHdpbmRvdy5vcGVuKGAvVGVhbUNoYXQ/c2Vzc2lvbj0ke3RpY2tldC5zZXNzaW9uX2lkfWAsICdfYmxhbmsnKTtcbiAgfTtcblxuICBjb25zdCBjYXRlZ29yeUxhYmVscyA9IHtcbiAgICBvcmRlcl9zdGF0dXM6IFwiT3JkZXIgU3RhdHVzXCIsXG4gICAgcmVmdW5kX2lzc3VlOiBcIlJlZnVuZCBJc3N1ZVwiLFxuICAgIHBheW1lbnRfcHJvYmxlbTogXCJQYXltZW50IFByb2JsZW1cIixcbiAgICBkZWxpdmVyeV9kZWxheTogXCJEZWxpdmVyeSBEZWxheVwiLFxuICAgIGNhbmNlbF9vcmRlcjogXCJDYW5jZWwgT3JkZXJcIixcbiAgICBiaWxsaW5nX2lzc3VlOiBcIkJpbGxpbmcgSXNzdWVcIixcbiAgICBwbGFuX3VwZ3JhZGU6IFwiUGxhbiBVcGdyYWRlXCIsXG4gICAgb3JkZXJfc3luYzogXCJPcmRlciBTeW5jXCIsXG4gICAgcXJfbm90X3dvcmtpbmc6IFwiUVIgTm90IFdvcmtpbmdcIixcbiAgICB0ZWNobmljYWxfc3VwcG9ydDogXCJUZWNobmljYWwgU3VwcG9ydFwiLFxuICAgIG90aGVyOiBcIk90aGVyXCJcbiAgfTtcblxuICBjb25zdCBzdGF0dXNDb2xvcnMgPSB7XG4gICAgb3BlbjogXCJiZy1vcmFuZ2UtMTAwIHRleHQtb3JhbmdlLTcwMFwiLFxuICAgIGluX3Byb2dyZXNzOiBcImJnLWJsdWUtMTAwIHRleHQtYmx1ZS03MDBcIixcbiAgICBjbG9zZWQ6IFwiYmctZ3JlZW4tMTAwIHRleHQtZ3JlZW4tNzAwXCJcbiAgfTtcblxuICBjb25zdCBwcmlvcml0eUNvbG9ycyA9IHtcbiAgICBsb3c6IFwiYmctZ3JheS0xMDAgdGV4dC1ncmF5LTcwMFwiLFxuICAgIG1lZGl1bTogXCJiZy15ZWxsb3ctMTAwIHRleHQteWVsbG93LTcwMFwiLFxuICAgIGhpZ2g6IFwiYmctcmVkLTEwMCB0ZXh0LXJlZC03MDBcIixcbiAgICB1cmdlbnQ6IFwiYmctcHVycGxlLTEwMCB0ZXh0LXB1cnBsZS03MDBcIlxuICB9O1xuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MTI1OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWdyYXktNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MTI2OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoxMjc6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYW5pbWF0ZS1zcGluIHJvdW5kZWQtZnVsbCBoLTEwIHctMTAgYm9yZGVyLWItMiBib3JkZXItb3JhbmdlLTYwMCBteC1hdXRvIG1iLTRcIj48L2Rpdj5cbiAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MTI4OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5Mb2FkaW5nIFN1cHBvcnQgQ2VudGVyLi4uPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2Pik7XG5cbiAgfVxuXG4gIGNvbnN0IG9wZW5UaWNrZXRzID0gdGlja2V0cy5maWx0ZXIoKHQpID0+IHQuc3RhdHVzID09PSAnb3BlbicpLmxlbmd0aDtcbiAgY29uc3QgaW5Qcm9ncmVzc1RpY2tldHMgPSB0aWNrZXRzLmZpbHRlcigodCkgPT4gdC5zdGF0dXMgPT09ICdpbl9wcm9ncmVzcycpLmxlbmd0aDtcbiAgY29uc3QgdXJnZW50VGlja2V0cyA9IHRpY2tldHMuZmlsdGVyKCh0KSA9PiB0LnByaW9yaXR5ID09PSAndXJnZW50JykubGVuZ3RoO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MTM5OjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JheS01MFwiPlxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjE0MTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyLWIgc2hhZG93LXNtXCI+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjE0Mjo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBweS02XCI+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MTQzOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoxNDQ6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgIDxoMSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MTQ1OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwXCI+U3VwcG9ydCBDZW50ZXI8L2gxPlxuICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MTQ2OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgbXQtMVwiPk1hbmFnZSBjdXN0b21lciBhbmQgcmVzdGF1cmFudCBzdXBwb3J0IHRpY2tldHM8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjE0ODoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHZhcmlhbnQ9XCJvdXRsaW5lXCIgb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9TdXBlckFkbWluRGFzaGJvYXJkXCJ9PlxuICAgICAgICAgICAgICBCYWNrIHRvIERhc2hib2FyZFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogU3RhdHMgKi99XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MTU0OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAtNCBtdC02XCI+XG4gICAgICAgICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MTU1OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MTU2OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjE1NzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5Ub3RhbCBUaWNrZXRzPC9wPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoxNTg6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMFwiPnt0aWNrZXRzLmxlbmd0aH08L3A+XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MTYxOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MTYyOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjE2MzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5PcGVuPC9wPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoxNjQ6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1vcmFuZ2UtNjAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJvcGVuVGlja2V0c1wiPntvcGVuVGlja2V0c308L3A+XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MTY3OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MTY4OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjE2OToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5JbiBQcm9ncmVzczwvcD5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MTcwOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtYmx1ZS02MDBcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImluUHJvZ3Jlc3NUaWNrZXRzXCI+e2luUHJvZ3Jlc3NUaWNrZXRzfTwvcD5cbiAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoxNzM6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoxNzQ6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MTc1OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlVyZ2VudDwvcD5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MTc2OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtcmVkLTYwMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidXJnZW50VGlja2V0c1wiPnt1cmdlbnRUaWNrZXRzfTwvcD5cbiAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIEZpbHRlcnMgKi99XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoxODQ6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgcHktNlwiPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoxODU6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgc2hhZG93LXNtIGJvcmRlciBwLTQgbWItNlwiPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjE4NjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTQgZ2FwLTRcIj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjE4NzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDxTZWFyY2ggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjE4ODoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTMgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIHctNCBoLTQgdGV4dC1ncmF5LTQwMFwiIC8+XG4gICAgICAgICAgICAgIDxJbnB1dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MTg5OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggdGlja2V0cy4uLlwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsLTlcIiAvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxTZWxlY3QgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjE5NjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHZhbHVlPXtmaWx0ZXJUeXBlfSBvblZhbHVlQ2hhbmdlPXtzZXRGaWx0ZXJUeXBlfT5cbiAgICAgICAgICAgICAgPFNlbGVjdFRyaWdnZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjE5NzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICA8U2VsZWN0VmFsdWUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjE5ODoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBwbGFjZWhvbGRlcj1cIlVzZXIgVHlwZVwiIC8+XG4gICAgICAgICAgICAgIDwvU2VsZWN0VHJpZ2dlcj5cbiAgICAgICAgICAgICAgPFNlbGVjdENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjIwMDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MjAxOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHZhbHVlPVwiYWxsXCI+QWxsIFR5cGVzPC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoyMDI6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdmFsdWU9XCJjdXN0b21lclwiPkN1c3RvbWVyPC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoyMDM6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdmFsdWU9XCJyZXN0YXVyYW50XCI+UmVzdGF1cmFudDwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgPC9TZWxlY3RDb250ZW50PlxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8U2VsZWN0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoyMDY6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB2YWx1ZT17ZmlsdGVyU3RhdHVzfSBvblZhbHVlQ2hhbmdlPXtzZXRGaWx0ZXJTdGF0dXN9PlxuICAgICAgICAgICAgICA8U2VsZWN0VHJpZ2dlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MjA3OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgIDxTZWxlY3RWYWx1ZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MjA4OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHBsYWNlaG9sZGVyPVwiU3RhdHVzXCIgLz5cbiAgICAgICAgICAgICAgPC9TZWxlY3RUcmlnZ2VyPlxuICAgICAgICAgICAgICA8U2VsZWN0Q29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MjEwOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoyMTE6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdmFsdWU9XCJhbGxcIj5BbGwgU3RhdHVzPC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoyMTI6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdmFsdWU9XCJvcGVuXCI+T3BlbjwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MjEzOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHZhbHVlPVwiaW5fcHJvZ3Jlc3NcIj5JbiBQcm9ncmVzczwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MjE0OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHZhbHVlPVwiY2xvc2VkXCI+Q2xvc2VkPC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICA8L1NlbGVjdENvbnRlbnQ+XG4gICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgIDxTZWxlY3QgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjIxNzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHZhbHVlPXtmaWx0ZXJQcmlvcml0eX0gb25WYWx1ZUNoYW5nZT17c2V0RmlsdGVyUHJpb3JpdHl9PlxuICAgICAgICAgICAgICA8U2VsZWN0VHJpZ2dlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MjE4OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgIDxTZWxlY3RWYWx1ZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MjE5OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHBsYWNlaG9sZGVyPVwiUHJpb3JpdHlcIiAvPlxuICAgICAgICAgICAgICA8L1NlbGVjdFRyaWdnZXI+XG4gICAgICAgICAgICAgIDxTZWxlY3RDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoyMjE6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjIyMjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB2YWx1ZT1cImFsbFwiPkFsbCBQcmlvcml0eTwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MjIzOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHZhbHVlPVwibG93XCI+TG93PC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoyMjQ6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdmFsdWU9XCJtZWRpdW1cIj5NZWRpdW08L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjIyNToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoyMjY6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdmFsdWU9XCJ1cmdlbnRcIj5VcmdlbnQ8L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICAgIDwvU2VsZWN0Q29udGVudD5cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogVGlja2V0cyBMaXN0ICovfVxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoyMzM6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktM1wiIGRhdGEtY29sbGVjdGlvbi1pZD1cIlN1cHBvcnRUaWNrZXRcIj5cbiAgICAgICAgICB7ZmlsdGVyZWRUaWNrZXRzLmxlbmd0aCA9PT0gMCA/XG4gICAgICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjIzNToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoyMzY6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwicC0xMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxBbGVydENpcmNsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MjM3OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMTIgaC0xMiB0ZXh0LWdyYXktMzAwIG14LWF1dG8gbWItM1wiIC8+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjIzODoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+Tm8gdGlja2V0cyBmb3VuZDwvcD5cbiAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgIDwvQ2FyZD4gOlxuXG4gICAgICAgICAgZmlsdGVyZWRUaWNrZXRzLm1hcCgodGlja2V0KSA9PlxuICAgICAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoyNDM6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e3RpY2tldC5pZH0gY2xhc3NOYW1lPVwiaG92ZXI6c2hhZG93LW1kIHRyYW5zaXRpb24tc2hhZG93XCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3RpY2tldD8uaWR9PlxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MjQ0OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoyNDU6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoyNDY6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoyNDc6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoyNDg6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B3LTEwIGgtMTAgcm91bmRlZC1sZyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciAke1xuICAgICAgICAgICAgICAgICAgICB0aWNrZXQudXNlcl90eXBlID09PSAnY3VzdG9tZXInID8gJ2JnLWJsdWUtMTAwJyA6ICdiZy1vcmFuZ2UtMTAwJ31gXG4gICAgICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0aWNrZXQudXNlcl90eXBlID09PSAnY3VzdG9tZXInID9cbiAgICAgICAgICAgICAgICAgICAgICA8VXNlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MjUyOjI4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1ibHVlLTYwMFwiIC8+IDpcblxuICAgICAgICAgICAgICAgICAgICAgIDxTdG9yZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MjU0OjI4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1vcmFuZ2UtNjAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjI1NzoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXgtMVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicmVzdGF1cmFudF9uYW1lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3RpY2tldD8uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoyNTg6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoyNTk6MjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImN1c3RvbWVyX25hbWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17dGlja2V0Py5pZH0+e3RpY2tldC5jdXN0b21lcl9uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjI2MDoyOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHZhcmlhbnQ9XCJvdXRsaW5lXCIgY2xhc3NOYW1lPVwidGV4dC14c1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidGlja2V0X2lkXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3RpY2tldD8uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpY2tldC50aWNrZXRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoyNjQ6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImN1c3RvbWVyX3Bob25lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3RpY2tldD8uaWR9Pnt0aWNrZXQuY3VzdG9tZXJfcGhvbmV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dGlja2V0LnJlc3RhdXJhbnRfbmFtZSAmJlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoyNjY6MjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDBcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInJlc3RhdXJhbnRfbmFtZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXt0aWNrZXQ/LmlkfT5SZXN0YXVyYW50OiB7dGlja2V0LnJlc3RhdXJhbnRfbmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoyNzE6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjI3MjoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17c3RhdHVzQ29sb3JzW3RpY2tldC5zdGF0dXNdfSBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInN0YXR1c1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXt0aWNrZXQ/LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RpY2tldC5zdGF0dXMucmVwbGFjZSgnXycsICcgJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoyNzU6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e3ByaW9yaXR5Q29sb3JzW3RpY2tldC5wcmlvcml0eV19IGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicHJpb3JpdHlcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17dGlja2V0Py5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0aWNrZXQucHJpb3JpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoyNzg6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB2YXJpYW50PVwib3V0bGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnlMYWJlbHNbdGlja2V0Lmlzc3VlX2NhdGVnb3J5XX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MjgzOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNzAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJkZXNjcmlwdGlvblwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXt0aWNrZXQ/LmlkfT57dGlja2V0LmRlc2NyaXB0aW9ufTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjI4NToyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIG10LTIgdGV4dC14cyB0ZXh0LWdyYXktNTAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJhc3NpZ25lZF90b1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXt0aWNrZXQ/LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9jayBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6Mjg2OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMyBoLTNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKHRpY2tldC5jcmVhdGVkX2RhdGUpLnRvTG9jYWxlU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGlja2V0LmFzc2lnbmVkX3RvICYmXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjoyODk6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtbC0zXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJhc3NpZ25lZF90b1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXt0aWNrZXQ/LmlkfT7igKIgQXNzaWduZWQgdG86IHt0aWNrZXQuYXNzaWduZWRfdG99PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjI5NDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTIgbWwtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjI5NToyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHNpemU9XCJzbVwiIG9uQ2xpY2s9eygpID0+IG9wZW5DaGF0KHRpY2tldCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgT3BlbiBDaGF0XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgeyF0aWNrZXQuYXNzaWduZWRfdG8gJiZcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjI5OToyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHNpemU9XCJzbVwiIHZhcmlhbnQ9XCJvdXRsaW5lXCIgb25DbGljaz17KCkgPT4gYXNzaWduVGlja2V0KHRpY2tldC5pZCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBBc3NpZ24gdG8gTWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjMwMzoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGlja2V0LnN0YXR1c31cbiAgICAgICAgICAgICAgICAgIG9uVmFsdWVDaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlVGlja2V0U3RhdHVzKHRpY2tldC5pZCwgdmFsdWUpfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFRyaWdnZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjMwNzoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTMyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RWYWx1ZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MzA4OjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdFRyaWdnZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Q29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MzEwOjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MzExOjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHZhbHVlPVwib3BlblwiPk9wZW48L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjozMTI6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdmFsdWU9XCJpbl9wcm9ncmVzc1wiPkluIFByb2dyZXNzPC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MzEzOjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHZhbHVlPVwiY2xvc2VkXCI+Q2xvc2VkPC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3RDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjMxNjoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGlja2V0LnByaW9yaXR5fVxuICAgICAgICAgICAgICAgICAgb25WYWx1ZUNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVUaWNrZXRQcmlvcml0eSh0aWNrZXQuaWQsIHZhbHVlKX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RUcmlnZ2VyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwcG9ydENlbnRlcjozMjA6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0zMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0VmFsdWUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjMyMToyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3RUcmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjMyMzoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjMyNDoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB2YWx1ZT1cImxvd1wiPkxvdzwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjMyNToyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB2YWx1ZT1cIm1lZGl1bVwiPk1lZGl1bTwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBwb3J0Q2VudGVyOjMyNjoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cHBvcnRDZW50ZXI6MzI3OjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHZhbHVlPVwidXJnZW50XCI+VXJnZW50PC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3RDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2Pik7XG5cbn0iXSwiZmlsZSI6Ii9hcHAvc3JjL3BhZ2VzL1N1cHBvcnRDZW50ZXIuanN4In0=