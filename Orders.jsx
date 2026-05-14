import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Orders.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/Orders.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"]; const useRef = __vite__cjsImport3_react["useRef"];
import { motion, AnimatePresence } from "/node_modules/.vite/deps/framer-motion.js?v=79425e35";
import { base44 } from "/src/api/base44Client.js";
import DashboardLayout from "/src/components/dashboard/DashboardLayout.jsx";
import {
  Search,
  Filter,
  Clock,
  CheckCircle2,
  XCircle,
  ChefHat,
  Bell,
  Utensils,
  CreditCard,
  Phone,
  RefreshCw,
  Eye,
  Printer,
  Download,
  FileText
} from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
import html2canvas from "/node_modules/.vite/deps/html2canvas.js?v=79425e35";
import jsPDF from "/node_modules/.vite/deps/jspdf.js?v=79425e35";
import { Card, CardContent, CardHeader, CardTitle } from "/src/components/ui/card.jsx";
import { Button } from "/src/components/ui/button.jsx";
import { Input } from "/src/components/ui/input.jsx";
import { Badge } from "/src/components/ui/badge.jsx";
import { Tabs, TabsList, TabsTrigger } from "/src/components/ui/tabs.jsx";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "/src/components/ui/dialog.jsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "/src/components/ui/select.jsx";
const orderStatuses = [
  { value: "all", label: "All Orders" },
  { value: "pending", label: "Pending" },
  { value: "confirmed", label: "Confirmed" },
  { value: "preparing", label: "Preparing" },
  { value: "ready", label: "Ready" },
  { value: "served", label: "Served" },
  { value: "completed", label: "Completed" },
  { value: "cancelled", label: "Cancelled" }
];
const statusConfig = {
  pending: { color: "bg-yellow-100 text-yellow-700", icon: Clock, next: "confirmed" },
  confirmed: { color: "bg-blue-100 text-blue-700", icon: CheckCircle2, next: "preparing" },
  preparing: { color: "bg-purple-100 text-purple-700", icon: ChefHat, next: "ready" },
  ready: { color: "bg-green-100 text-green-700", icon: Bell, next: "served" },
  served: { color: "bg-emerald-100 text-emerald-700", icon: Utensils, next: "completed" },
  completed: { color: "bg-gray-100 text-gray-700", icon: CheckCircle2, next: null },
  cancelled: { color: "bg-red-100 text-red-700", icon: XCircle, next: null }
};
function OrdersContent({ user, restaurant }) {
  _s();
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [acknowledgedOrders, setAcknowledgedOrders] = useState(/* @__PURE__ */ new Set());
  const audioRef = useRef(null);
  const billRef = useRef(null);
  useEffect(() => {
    if (restaurant?.restaurant_id) {
      loadOrders();
      const interval = setInterval(() => {
        loadOrders();
      }, 1e4);
      return () => clearInterval(interval);
    }
  }, [restaurant]);
  useEffect(() => {
    const soundEnabled = restaurant?.settings?.order_sound_enabled !== false;
    if (!soundEnabled) return;
    const pendingOrders = orders.filter(
      (o) => o.status === "pending" && !acknowledgedOrders.has(o.id)
    );
    if (pendingOrders.length > 0) {
      playOrderSound();
    } else {
      stopOrderSound();
    }
  }, [orders, acknowledgedOrders, restaurant]);
  const loadOrders = async () => {
    try {
      const ordersData = await base44.entities.Order.filter(
        { restaurant_id: restaurant.restaurant_id },
        "-created_date",
        100
      );
      setOrders(ordersData);
    } catch (e) {
      console.error("Error loading orders:", e);
    } finally {
      setIsLoading(false);
    }
  };
  const playOrderSound = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBCt+zPDQiDwKHWu38eGXFhIGSK3j7rV");
    }
    audioRef.current.loop = true;
    audioRef.current.play().catch((e) => console.log("Audio play failed:", e));
  };
  const stopOrderSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };
  const acknowledgeOrder = (orderId) => {
    setAcknowledgedOrders((prev) => /* @__PURE__ */ new Set([...prev, orderId]));
    stopOrderSound();
  };
  const handleRefresh = async () => {
    setIsRefreshing(true);
    await loadOrders();
    setIsRefreshing(false);
  };
  const filteredOrders = orders.filter((order) => {
    const matchesSearch = order.order_number?.toLowerCase().includes(searchQuery.toLowerCase()) || order.customer_name?.toLowerCase().includes(searchQuery.toLowerCase()) || order.table_number?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
  const updateOrderStatus = async (orderId, newStatus) => {
    acknowledgeOrder(orderId);
    await base44.entities.Order.update(orderId, { status: newStatus });
    await loadOrders();
    if (selectedOrder?.id === orderId) {
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }
  };
  const generateBillPDF = async (order) => {
    const billElement = billRef.current;
    if (!billElement) return;
    const canvas = await html2canvas(billElement, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a5"
    });
    const imgWidth = 148;
    const imgHeight = canvas.height * imgWidth / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    return pdf;
  };
  const downloadBill = async (order) => {
    setSelectedOrder(order);
    setTimeout(async () => {
      const pdf = await generateBillPDF(order);
      pdf.save(`Bill_${order.order_number}.pdf`);
    }, 100);
  };
  const printBill = async (order) => {
    setSelectedOrder(order);
    setTimeout(() => {
      const printContent = billRef.current;
      const printWindow = window.open("", "", "width=800,height=600");
      printWindow.document.write("<html><head><title>Bill - " + order.order_number + "</title>");
      printWindow.document.write("<style>body{font-family:Arial,sans-serif;padding:20px;}table{width:100%;border-collapse:collapse;}th,td{padding:8px;text-align:left;border-bottom:1px solid #ddd;}.text-right{text-align:right;}.font-bold{font-weight:bold;}.border-t{border-top:2px solid #000;padding-top:10px;}</style>");
      printWindow.document.write("</head><body>");
      printWindow.document.write(printContent.innerHTML);
      printWindow.document.write("</body></html>");
      printWindow.document.close();
      printWindow.print();
    }, 100);
  };
  const updatePaymentStatus = async (orderId, paymentStatus) => {
    await base44.entities.Order.update(orderId, { payment_status: paymentStatus });
    await loadOrders();
    if (selectedOrder?.id === orderId) {
      setSelectedOrder({ ...selectedOrder, payment_status: paymentStatus });
    }
  };
  const activeOrders = orders.filter((o) => ["pending", "confirmed", "preparing", "ready"].includes(o.status));
  const ordersByStatus = activeOrders.reduce((acc, order) => {
    if (!acc[order.status]) acc[order.status] = [];
    acc[order.status].push(order);
    return acc;
  }, {});
  if (isLoading) {
    return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:212:6", "data-dynamic-content": "false", className: "flex items-center justify-center h-64", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:213:8", "data-dynamic-content": "false", className: "animate-spin rounded-full h-8 w-8 border-b-2 border-violet-600" }, void 0, false, {
      fileName: "/app/src/pages/Orders.jsx",
      lineNumber: 232,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/Orders.jsx",
      lineNumber: 231,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:219:4", "data-dynamic-content": "true", className: "space-y-6", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:221:6", "data-dynamic-content": "true", className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:222:8", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/Orders:223:10", "data-dynamic-content": "false", className: "text-2xl font-bold text-gray-900", children: "Orders" }, void 0, false, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 242,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Orders:224:10", "data-dynamic-content": "true", className: "text-gray-500", children: [
          activeOrders.length,
          " active orders"
        ] }, void 0, true, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 243,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Orders.jsx",
        lineNumber: 241,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        Button,
        {
          "data-source-location": "pages/Orders:226:8",
          "data-dynamic-content": "true",
          variant: "outline",
          onClick: handleRefresh,
          disabled: isRefreshing,
          children: [
            /* @__PURE__ */ jsxDEV(RefreshCw, { "data-source-location": "pages/Orders:231:10", "data-dynamic-content": "true", className: `w-4 h-4 mr-2 ${isRefreshing ? "animate-spin" : ""}` }, void 0, false, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 250,
              columnNumber: 11
            }, this),
            "Refresh"
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 245,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/src/pages/Orders.jsx",
      lineNumber: 240,
      columnNumber: 7
    }, this),
    activeOrders.length > 0 && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:238:8", "data-dynamic-content": "true", className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: ["pending", "confirmed", "preparing", "ready"].map(
      (status, __arrIdx__) => /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/Orders:240:12", "data-dynamic-content": "true", className: "bg-gray-50", "data-arr-index": __arrIdx__, children: [
        /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "pages/Orders:241:14", "data-dynamic-content": "true", className: "pb-2", "data-arr-index": __arrIdx__, children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "pages/Orders:242:16", "data-dynamic-content": "true", className: "text-sm font-medium flex items-center justify-between", "data-arr-index": __arrIdx__, children: [
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Orders:243:18", "data-dynamic-content": "true", className: "capitalize", children: status }, void 0, false, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 262,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/Orders:244:18", "data-dynamic-content": "true", variant: "secondary", children: ordersByStatus[status]?.length || 0 }, void 0, false, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 263,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 261,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 260,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/Orders:247:14", "data-dynamic-content": "true", className: "space-y-3", "data-arr-index": __arrIdx__, children: [
          /* @__PURE__ */ jsxDEV(AnimatePresence, { "data-source-location": "pages/Orders:248:16", "data-dynamic-content": "true", "data-arr-index": __arrIdx__, children: ordersByStatus[status]?.map(
            (order) => /* @__PURE__ */ jsxDEV(
              motion.div,
              {
                "data-source-location": "pages/Orders:250:20",
                "data-dynamic-content": "true",
                layout: true,
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.9 },
                className: "bg-white rounded-lg p-3 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow",
                onClick: () => {
                  acknowledgeOrder(order.id);
                  setSelectedOrder(order);
                },
                "data-collection-item-id": order?.id,
                children: [
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:262:22", "data-dynamic-content": "true", className: "flex items-center justify-between mb-2", children: [
                    /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Orders:263:24", "data-dynamic-content": "true", className: "font-semibold text-sm", "data-collection-item-field": "order_number", "data-collection-item-id": order?.id, children: [
                      "#",
                      order.order_number
                    ] }, void 0, true, {
                      fileName: "/app/src/pages/Orders.jsx",
                      lineNumber: 282,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Orders:264:24", "data-dynamic-content": "true", className: "text-xs text-gray-500", children: order.table_number || "Takeaway" }, void 0, false, {
                      fileName: "/app/src/pages/Orders.jsx",
                      lineNumber: 283,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/Orders.jsx",
                    lineNumber: 281,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Orders:268:22", "data-dynamic-content": "true", className: "text-xs text-gray-500 mb-2", "data-collection-item-field": "total_amount", "data-collection-item-id": order?.id, children: [
                    order.items?.length || 0,
                    " items · ₹",
                    order.total_amount
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/Orders.jsx",
                    lineNumber: 287,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:271:22", "data-dynamic-content": "true", className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Orders:272:24", "data-dynamic-content": "true", className: "text-xs text-gray-400", children: new Date(order.created_date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }, void 0, false, {
                      fileName: "/app/src/pages/Orders.jsx",
                      lineNumber: 291,
                      columnNumber: 25
                    }, this),
                    statusConfig[status].next && /* @__PURE__ */ jsxDEV(
                      Button,
                      {
                        "data-source-location": "pages/Orders:276:26",
                        "data-dynamic-content": "true",
                        size: "sm",
                        variant: "ghost",
                        className: "h-7 text-xs",
                        onClick: (e) => {
                          e.stopPropagation();
                          updateOrderStatus(order.id, statusConfig[status].next);
                        },
                        children: "Next →"
                      },
                      void 0,
                      false,
                      {
                        fileName: "/app/src/pages/Orders.jsx",
                        lineNumber: 295,
                        columnNumber: 19
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/Orders.jsx",
                    lineNumber: 290,
                    columnNumber: 23
                  }, this)
                ]
              },
              order.id,
              true,
              {
                fileName: "/app/src/pages/Orders.jsx",
                lineNumber: 269,
                columnNumber: 15
              },
              this
            )
          ) }, void 0, false, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 267,
            columnNumber: 17
          }, this),
          !ordersByStatus[status]?.length && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:293:18", "data-dynamic-content": "false", className: "text-center py-4 text-gray-400 text-sm", children: "No orders" }, void 0, false, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 312,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 266,
          columnNumber: 15
        }, this)
      ] }, status, true, {
        fileName: "/app/src/pages/Orders.jsx",
        lineNumber: 259,
        columnNumber: 9
      }, this)
    ) }, void 0, false, {
      fileName: "/app/src/pages/Orders.jsx",
      lineNumber: 257,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/Orders:304:6", "data-dynamic-content": "true", children: [
      /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "pages/Orders:305:8", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:306:10", "data-dynamic-content": "true", className: "flex flex-col md:flex-row md:items-center gap-4", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:307:12", "data-dynamic-content": "true", className: "flex-1 relative", children: [
          /* @__PURE__ */ jsxDEV(Search, { "data-source-location": "pages/Orders:308:14", "data-dynamic-content": "false", className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }, void 0, false, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 327,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(
            Input,
            {
              "data-source-location": "pages/Orders:309:14",
              "data-dynamic-content": "true",
              placeholder: "Search by order #, customer, table...",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              className: "pl-9"
            },
            void 0,
            false,
            {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 328,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 326,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Select, { "data-source-location": "pages/Orders:316:12", "data-dynamic-content": "true", value: statusFilter, onValueChange: setStatusFilter, children: [
          /* @__PURE__ */ jsxDEV(SelectTrigger, { "data-source-location": "pages/Orders:317:14", "data-dynamic-content": "false", className: "w-40", children: /* @__PURE__ */ jsxDEV(SelectValue, { "data-source-location": "pages/Orders:318:16", "data-dynamic-content": "false" }, void 0, false, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 337,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 336,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(SelectContent, { "data-source-location": "pages/Orders:320:14", "data-dynamic-content": "true", children: orderStatuses.map(
            (status, __arrIdx__) => /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/Orders:322:18", "data-dynamic-content": "true", value: status.value, "data-arr-index": __arrIdx__, "data-arr-variable-name": "orderStatuses", "data-arr-field": "label", children: status.label }, status.value, false, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 341,
              columnNumber: 17
            }, this)
          ) }, void 0, false, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 339,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 335,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Orders.jsx",
        lineNumber: 325,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Orders.jsx",
        lineNumber: 324,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/Orders:330:8", "data-dynamic-content": "true", children: filteredOrders.length === 0 ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:332:12", "data-dynamic-content": "false", className: "text-center py-12 text-gray-500", children: [
        /* @__PURE__ */ jsxDEV(Clock, { "data-source-location": "pages/Orders:333:14", "data-dynamic-content": "false", className: "w-12 h-12 mx-auto mb-3 text-gray-300" }, void 0, false, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 352,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Orders:334:14", "data-dynamic-content": "false", children: "No orders found" }, void 0, false, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 353,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Orders.jsx",
        lineNumber: 351,
        columnNumber: 11
      }, this) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:337:12", "data-dynamic-content": "true", className: "overflow-x-auto", children: /* @__PURE__ */ jsxDEV("table", { "data-source-location": "pages/Orders:338:14", "data-dynamic-content": "true", className: "w-full", children: [
        /* @__PURE__ */ jsxDEV("thead", { "data-source-location": "pages/Orders:339:16", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV("tr", { "data-source-location": "pages/Orders:340:18", "data-dynamic-content": "false", className: "text-left text-sm text-gray-500 border-b", children: [
          /* @__PURE__ */ jsxDEV("th", { "data-source-location": "pages/Orders:341:20", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Order #" }, void 0, false, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 360,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("th", { "data-source-location": "pages/Orders:342:20", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Customer" }, void 0, false, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 361,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("th", { "data-source-location": "pages/Orders:343:20", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Table" }, void 0, false, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 362,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("th", { "data-source-location": "pages/Orders:344:20", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Items" }, void 0, false, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 363,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("th", { "data-source-location": "pages/Orders:345:20", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Amount" }, void 0, false, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 364,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("th", { "data-source-location": "pages/Orders:346:20", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Status" }, void 0, false, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 365,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("th", { "data-source-location": "pages/Orders:347:20", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Payment" }, void 0, false, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 366,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("th", { "data-source-location": "pages/Orders:348:20", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Time" }, void 0, false, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 367,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("th", { "data-source-location": "pages/Orders:349:20", "data-dynamic-content": "false", className: "pb-3 font-medium" }, void 0, false, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 368,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 359,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 358,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("tbody", { "data-source-location": "pages/Orders:352:16", "data-dynamic-content": "true", className: "divide-y", "data-collection-id": "Order", children: filteredOrders.map((order) => {
          const StatusIcon = statusConfig[order.status]?.icon || Clock;
          return /* @__PURE__ */ jsxDEV("tr", { "data-source-location": "pages/Orders:356:22", "data-dynamic-content": "true", className: "text-sm hover:bg-gray-50", "data-collection-item-id": order?.id, children: [
            /* @__PURE__ */ jsxDEV("td", { "data-source-location": "pages/Orders:357:24", "data-dynamic-content": "true", className: "py-3 font-medium", "data-collection-item-field": "order_number", "data-collection-item-id": order?.id, children: order.order_number }, void 0, false, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 376,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("td", { "data-source-location": "pages/Orders:358:24", "data-dynamic-content": "true", className: "py-3", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:359:26", "data-dynamic-content": "true", "data-collection-item-field": "customer_phone", "data-collection-item-id": order?.id, children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Orders:360:28", "data-dynamic-content": "true", children: order.customer_name || "Guest" }, void 0, false, {
                fileName: "/app/src/pages/Orders.jsx",
                lineNumber: 379,
                columnNumber: 29
              }, this),
              order.customer_phone && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Orders:362:30", "data-dynamic-content": "true", className: "text-xs text-gray-500", "data-collection-item-field": "customer_phone", "data-collection-item-id": order?.id, children: order.customer_phone }, void 0, false, {
                fileName: "/app/src/pages/Orders.jsx",
                lineNumber: 381,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 378,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 377,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("td", { "data-source-location": "pages/Orders:366:24", "data-dynamic-content": "true", className: "py-3", children: order.table_number || "-" }, void 0, false, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 385,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("td", { "data-source-location": "pages/Orders:367:24", "data-dynamic-content": "true", className: "py-3", children: [
              order.items?.length || 0,
              " items"
            ] }, void 0, true, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 386,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("td", { "data-source-location": "pages/Orders:368:24", "data-dynamic-content": "true", className: "py-3 font-medium", children: [
              "₹",
              order.total_amount?.toLocaleString()
            ] }, void 0, true, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 387,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("td", { "data-source-location": "pages/Orders:369:24", "data-dynamic-content": "true", className: "py-3", children: /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/Orders:370:26", "data-dynamic-content": "true", className: statusConfig[order.status]?.color, "data-collection-item-field": "status", "data-collection-item-id": order?.id, children: [
              /* @__PURE__ */ jsxDEV(StatusIcon, { "data-source-location": "pages/Orders:371:28", "data-dynamic-content": "false", className: "w-3 h-3 mr-1" }, void 0, false, {
                fileName: "/app/src/pages/Orders.jsx",
                lineNumber: 390,
                columnNumber: 29
              }, this),
              order.status
            ] }, void 0, true, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 389,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 388,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("td", { "data-source-location": "pages/Orders:375:24", "data-dynamic-content": "true", className: "py-3", children: /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/Orders:376:26", "data-dynamic-content": "true", variant: order.payment_status === "paid" ? "default" : "secondary", "data-collection-item-field": "payment_status", "data-collection-item-id": order?.id, children: order.payment_status }, void 0, false, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 395,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 394,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("td", { "data-source-location": "pages/Orders:380:24", "data-dynamic-content": "true", className: "py-3 text-gray-500", children: new Date(order.created_date).toLocaleString([], {
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit"
            }) }, void 0, false, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 399,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("td", { "data-source-location": "pages/Orders:388:24", "data-dynamic-content": "true", className: "py-3", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:389:26", "data-dynamic-content": "true", className: "flex gap-1", children: [
              /* @__PURE__ */ jsxDEV(
                Button,
                {
                  "data-source-location": "pages/Orders:390:28",
                  "data-dynamic-content": "true",
                  variant: "ghost",
                  size: "sm",
                  onClick: () => {
                    acknowledgeOrder(order.id);
                    setSelectedOrder(order);
                  },
                  children: /* @__PURE__ */ jsxDEV(Eye, { "data-source-location": "pages/Orders:398:30", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                    fileName: "/app/src/pages/Orders.jsx",
                    lineNumber: 417,
                    columnNumber: 31
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/app/src/pages/Orders.jsx",
                  lineNumber: 409,
                  columnNumber: 29
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                Button,
                {
                  "data-source-location": "pages/Orders:400:28",
                  "data-dynamic-content": "true",
                  variant: "ghost",
                  size: "sm",
                  onClick: () => downloadBill(order),
                  title: "Download Bill",
                  children: /* @__PURE__ */ jsxDEV(Download, { "data-source-location": "pages/Orders:406:30", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                    fileName: "/app/src/pages/Orders.jsx",
                    lineNumber: 425,
                    columnNumber: 31
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/app/src/pages/Orders.jsx",
                  lineNumber: 419,
                  columnNumber: 29
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                Button,
                {
                  "data-source-location": "pages/Orders:408:28",
                  "data-dynamic-content": "true",
                  variant: "ghost",
                  size: "sm",
                  onClick: () => printBill(order),
                  title: "Print Bill",
                  children: /* @__PURE__ */ jsxDEV(Printer, { "data-source-location": "pages/Orders:414:30", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                    fileName: "/app/src/pages/Orders.jsx",
                    lineNumber: 433,
                    columnNumber: 31
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/app/src/pages/Orders.jsx",
                  lineNumber: 427,
                  columnNumber: 29
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 408,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 407,
              columnNumber: 25
            }, this)
          ] }, order.id, true, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 375,
            columnNumber: 21
          }, this);
        }) }, void 0, false, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 371,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Orders.jsx",
        lineNumber: 357,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Orders.jsx",
        lineNumber: 356,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Orders.jsx",
        lineNumber: 349,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Orders.jsx",
      lineNumber: 323,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Dialog, { "data-source-location": "pages/Orders:429:6", "data-dynamic-content": "true", open: !!selectedOrder, onOpenChange: () => setSelectedOrder(null), children: /* @__PURE__ */ jsxDEV(DialogContent, { "data-source-location": "pages/Orders:430:8", "data-dynamic-content": "true", className: "max-w-lg", children: [
      /* @__PURE__ */ jsxDEV(DialogHeader, { "data-source-location": "pages/Orders:431:10", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(DialogTitle, { "data-source-location": "pages/Orders:432:12", "data-dynamic-content": "true", "data-collection-item-field": "order_number", "data-collection-item-id": selectedOrder?.id || selectedOrder?._id, children: [
        "Order #",
        selectedOrder?.order_number
      ] }, void 0, true, {
        fileName: "/app/src/pages/Orders.jsx",
        lineNumber: 451,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Orders.jsx",
        lineNumber: 450,
        columnNumber: 11
      }, this),
      selectedOrder && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:436:12", "data-dynamic-content": "true", className: "space-y-4", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:438:14", "data-dynamic-content": "true", className: "grid grid-cols-2 gap-4 text-sm", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:439:16", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Orders:440:18", "data-dynamic-content": "false", className: "text-gray-500", children: "Table" }, void 0, false, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 459,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Orders:441:18", "data-dynamic-content": "true", className: "font-medium", children: selectedOrder.table_number || "Takeaway" }, void 0, false, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 460,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 458,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:443:16", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Orders:444:18", "data-dynamic-content": "false", className: "text-gray-500", children: "Type" }, void 0, false, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 463,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Orders:445:18", "data-dynamic-content": "true", className: "font-medium capitalize", "data-collection-item-field": "order_type", "data-collection-item-id": selectedOrder?.id || selectedOrder?._id, children: selectedOrder.order_type }, void 0, false, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 464,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 462,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:447:16", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Orders:448:18", "data-dynamic-content": "false", className: "text-gray-500", children: "Customer" }, void 0, false, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 467,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Orders:449:18", "data-dynamic-content": "true", className: "font-medium", children: selectedOrder.customer_name || "Guest" }, void 0, false, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 468,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 466,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:451:16", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Orders:452:18", "data-dynamic-content": "false", className: "text-gray-500", children: "Phone" }, void 0, false, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 471,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Orders:453:18", "data-dynamic-content": "true", className: "font-medium", children: selectedOrder.customer_phone || "-" }, void 0, false, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 472,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 470,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 457,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:458:14", "data-dynamic-content": "true", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Orders:459:16", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Status:" }, void 0, false, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 478,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(
            Select,
            {
              "data-source-location": "pages/Orders:460:16",
              "data-dynamic-content": "true",
              value: selectedOrder.status,
              onValueChange: (value) => updateOrderStatus(selectedOrder.id, value),
              children: [
                /* @__PURE__ */ jsxDEV(SelectTrigger, { "data-source-location": "pages/Orders:464:18", "data-dynamic-content": "false", className: "w-40", children: /* @__PURE__ */ jsxDEV(SelectValue, { "data-source-location": "pages/Orders:465:20", "data-dynamic-content": "false" }, void 0, false, {
                  fileName: "/app/src/pages/Orders.jsx",
                  lineNumber: 484,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "/app/src/pages/Orders.jsx",
                  lineNumber: 483,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV(SelectContent, { "data-source-location": "pages/Orders:467:18", "data-dynamic-content": "true", children: orderStatuses.slice(1).map(
                  (status) => /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/Orders:469:22", "data-dynamic-content": "true", value: status.value, "data-collection-item-field": "label", "data-collection-item-id": status?.id || status?._id, children: status.label }, status.value, false, {
                    fileName: "/app/src/pages/Orders.jsx",
                    lineNumber: 488,
                    columnNumber: 19
                  }, this)
                ) }, void 0, false, {
                  fileName: "/app/src/pages/Orders.jsx",
                  lineNumber: 486,
                  columnNumber: 19
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 479,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 477,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:478:14", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("h4", { "data-source-location": "pages/Orders:479:16", "data-dynamic-content": "false", className: "font-medium mb-2", children: "Order Items" }, void 0, false, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 498,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:480:16", "data-dynamic-content": "true", className: "space-y-2 bg-gray-50 rounded-lg p-3", children: selectedOrder.items?.map(
            (item, i) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:482:20", "data-dynamic-content": "true", className: "flex justify-between text-sm", "data-collection-item-id": item?.["data-collection-item-id"], children: [
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Orders:483:22", "data-dynamic-content": "true", "data-collection-item-field": "quantity", "data-collection-item-id": item?.id || item?._id, children: [
                item.quantity,
                "x ",
                item.name
              ] }, void 0, true, {
                fileName: "/app/src/pages/Orders.jsx",
                lineNumber: 502,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Orders:484:22", "data-dynamic-content": "true", className: "font-medium", "data-collection-item-field": "total_price", "data-collection-item-id": item?.id || item?._id, children: [
                "₹",
                item.total_price
              ] }, void 0, true, {
                fileName: "/app/src/pages/Orders.jsx",
                lineNumber: 503,
                columnNumber: 23
              }, this)
            ] }, i, true, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 501,
              columnNumber: 17
            }, this)
          ) }, void 0, false, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 499,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 497,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:491:14", "data-dynamic-content": "true", className: "border-t pt-3 space-y-1 text-sm", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:492:16", "data-dynamic-content": "true", className: "flex justify-between", children: [
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Orders:493:18", "data-dynamic-content": "false", children: "Subtotal" }, void 0, false, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 512,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Orders:494:18", "data-dynamic-content": "true", "data-collection-item-field": "subtotal", "data-collection-item-id": selectedOrder?.id || selectedOrder?._id, children: [
              "₹",
              selectedOrder.subtotal
            ] }, void 0, true, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 513,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 511,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:496:16", "data-dynamic-content": "true", className: "flex justify-between", children: [
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Orders:497:18", "data-dynamic-content": "false", children: "Tax" }, void 0, false, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 516,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Orders:498:18", "data-dynamic-content": "true", "data-collection-item-field": "tax_amount", "data-collection-item-id": selectedOrder?.id || selectedOrder?._id, children: [
              "₹",
              selectedOrder.tax_amount
            ] }, void 0, true, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 517,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 515,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:500:16", "data-dynamic-content": "true", className: "flex justify-between font-bold text-base", children: [
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Orders:501:18", "data-dynamic-content": "false", children: "Total" }, void 0, false, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 520,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Orders:502:18", "data-dynamic-content": "true", "data-collection-item-field": "total_amount", "data-collection-item-id": selectedOrder?.id || selectedOrder?._id, children: [
              "₹",
              selectedOrder.total_amount
            ] }, void 0, true, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 521,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 519,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 510,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:507:14", "data-dynamic-content": "true", className: "flex items-center justify-between border-t pt-3", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:508:16", "data-dynamic-content": "true", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV(CreditCard, { "data-source-location": "pages/Orders:509:18", "data-dynamic-content": "false", className: "w-4 h-4 text-gray-400" }, void 0, false, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 528,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Orders:510:18", "data-dynamic-content": "true", className: "text-sm", "data-collection-item-field": "payment_method", "data-collection-item-id": selectedOrder?.id || selectedOrder?._id, children: [
              "Payment: ",
              selectedOrder.payment_method
            ] }, void 0, true, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 529,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 527,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(
            Select,
            {
              "data-source-location": "pages/Orders:512:16",
              "data-dynamic-content": "true",
              value: selectedOrder.payment_status,
              onValueChange: (value) => updatePaymentStatus(selectedOrder.id, value),
              children: [
                /* @__PURE__ */ jsxDEV(SelectTrigger, { "data-source-location": "pages/Orders:516:18", "data-dynamic-content": "false", className: "w-32", children: /* @__PURE__ */ jsxDEV(SelectValue, { "data-source-location": "pages/Orders:517:20", "data-dynamic-content": "false" }, void 0, false, {
                  fileName: "/app/src/pages/Orders.jsx",
                  lineNumber: 536,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "/app/src/pages/Orders.jsx",
                  lineNumber: 535,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV(SelectContent, { "data-source-location": "pages/Orders:519:18", "data-dynamic-content": "false", children: [
                  /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/Orders:520:20", "data-dynamic-content": "false", value: "pending", children: "Pending" }, void 0, false, {
                    fileName: "/app/src/pages/Orders.jsx",
                    lineNumber: 539,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/Orders:521:20", "data-dynamic-content": "false", value: "paid", children: "Paid" }, void 0, false, {
                    fileName: "/app/src/pages/Orders.jsx",
                    lineNumber: 540,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/Orders:522:20", "data-dynamic-content": "false", value: "refunded", children: "Refunded" }, void 0, false, {
                    fileName: "/app/src/pages/Orders.jsx",
                    lineNumber: 541,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/Orders.jsx",
                  lineNumber: 538,
                  columnNumber: 19
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 531,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 526,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:528:14", "data-dynamic-content": "true", className: "flex gap-2 border-t pt-3", children: [
          /* @__PURE__ */ jsxDEV(
            Button,
            {
              "data-source-location": "pages/Orders:529:16",
              "data-dynamic-content": "true",
              variant: "outline",
              className: "flex-1",
              onClick: () => downloadBill(selectedOrder),
              children: [
                /* @__PURE__ */ jsxDEV(Download, { "data-source-location": "pages/Orders:534:18", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
                  fileName: "/app/src/pages/Orders.jsx",
                  lineNumber: 553,
                  columnNumber: 19
                }, this),
                "Download Bill"
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 548,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Button,
            {
              "data-source-location": "pages/Orders:537:16",
              "data-dynamic-content": "true",
              variant: "outline",
              className: "flex-1",
              onClick: () => printBill(selectedOrder),
              children: [
                /* @__PURE__ */ jsxDEV(Printer, { "data-source-location": "pages/Orders:542:18", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
                  fileName: "/app/src/pages/Orders.jsx",
                  lineNumber: 561,
                  columnNumber: 19
                }, this),
                "Print Bill"
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 556,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 547,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Orders.jsx",
        lineNumber: 455,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Orders.jsx",
      lineNumber: 449,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/Orders.jsx",
      lineNumber: 448,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:552:6", "data-dynamic-content": "true", style: { position: "absolute", left: "-9999px" }, children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:553:8", "data-dynamic-content": "true", ref: billRef, style: { width: "300px", padding: "20px", backgroundColor: "white", fontFamily: "Arial, sans-serif" }, children: selectedOrder && /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:556:14", "data-dynamic-content": "true", style: { textAlign: "center", marginBottom: "20px" }, children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "pages/Orders:557:16", "data-dynamic-content": "true", style: { margin: "0 0 5px 0", fontSize: "20px" }, "data-collection-item-field": "name", "data-collection-item-id": restaurant?.id || restaurant?._id, children: restaurant?.name }, void 0, false, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 576,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Orders:558:16", "data-dynamic-content": "true", style: { margin: "0", fontSize: "12px", color: "#666" }, "data-collection-item-field": "address", "data-collection-item-id": restaurant?.id || restaurant?._id, children: restaurant?.address }, void 0, false, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 577,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Orders:559:16", "data-dynamic-content": "true", style: { margin: "0", fontSize: "12px", color: "#666" }, "data-collection-item-field": "phone", "data-collection-item-id": restaurant?.id || restaurant?._id, children: [
          "Phone: ",
          restaurant?.phone
        ] }, void 0, true, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 578,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Orders.jsx",
        lineNumber: 575,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:562:14", "data-dynamic-content": "true", style: { borderTop: "2px dashed #000", borderBottom: "2px dashed #000", padding: "10px 0", marginBottom: "10px" }, children: [
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Orders:563:16", "data-dynamic-content": "true", style: { margin: "5px 0", fontSize: "14px" }, "data-collection-item-field": "order_number", "data-collection-item-id": selectedOrder?.id || selectedOrder?._id, children: [
          /* @__PURE__ */ jsxDEV("strong", { "data-source-location": "pages/Orders:563:65", "data-dynamic-content": "false", children: "Order #:" }, void 0, false, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 582,
            columnNumber: 245
          }, this),
          " ",
          selectedOrder.order_number
        ] }, void 0, true, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 582,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Orders:564:16", "data-dynamic-content": "true", style: { margin: "5px 0", fontSize: "14px" }, children: [
          /* @__PURE__ */ jsxDEV("strong", { "data-source-location": "pages/Orders:564:65", "data-dynamic-content": "false", children: "Date:" }, void 0, false, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 583,
            columnNumber: 137
          }, this),
          " ",
          new Date(selectedOrder.created_date).toLocaleString()
        ] }, void 0, true, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 583,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Orders:565:16", "data-dynamic-content": "true", style: { margin: "5px 0", fontSize: "14px" }, children: [
          /* @__PURE__ */ jsxDEV("strong", { "data-source-location": "pages/Orders:565:65", "data-dynamic-content": "false", children: "Table:" }, void 0, false, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 584,
            columnNumber: 137
          }, this),
          " ",
          selectedOrder.table_number || "Takeaway"
        ] }, void 0, true, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 584,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Orders:566:16", "data-dynamic-content": "true", style: { margin: "5px 0", fontSize: "14px" }, "data-collection-item-field": "customer_name", "data-collection-item-id": selectedOrder?.id || selectedOrder?._id, children: [
          /* @__PURE__ */ jsxDEV("strong", { "data-source-location": "pages/Orders:566:65", "data-dynamic-content": "false", children: "Customer:" }, void 0, false, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 585,
            columnNumber: 246
          }, this),
          " ",
          selectedOrder.customer_name
        ] }, void 0, true, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 585,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Orders.jsx",
        lineNumber: 581,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV("table", { "data-source-location": "pages/Orders:569:14", "data-dynamic-content": "true", style: { width: "100%", marginBottom: "10px" }, children: [
        /* @__PURE__ */ jsxDEV("thead", { "data-source-location": "pages/Orders:570:16", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("tr", { "data-source-location": "pages/Orders:571:18", "data-dynamic-content": "true", style: { borderBottom: "1px solid #000" }, children: [
          /* @__PURE__ */ jsxDEV("th", { "data-source-location": "pages/Orders:572:20", "data-dynamic-content": "true", style: { textAlign: "left", padding: "5px 0", fontSize: "12px" }, children: "Item" }, void 0, false, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 591,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("th", { "data-source-location": "pages/Orders:573:20", "data-dynamic-content": "true", style: { textAlign: "center", padding: "5px 0", fontSize: "12px" }, children: "Qty" }, void 0, false, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 592,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("th", { "data-source-location": "pages/Orders:574:20", "data-dynamic-content": "true", style: { textAlign: "right", padding: "5px 0", fontSize: "12px" }, children: "Amount" }, void 0, false, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 593,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 590,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 589,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("tbody", { "data-source-location": "pages/Orders:577:16", "data-dynamic-content": "true", children: selectedOrder.items?.map(
          (item, i) => /* @__PURE__ */ jsxDEV("tr", { "data-source-location": "pages/Orders:579:20", "data-dynamic-content": "true", "data-collection-item-id": item?.["data-collection-item-id"], children: [
            /* @__PURE__ */ jsxDEV("td", { "data-source-location": "pages/Orders:580:22", "data-dynamic-content": "true", style: { padding: "5px 0", fontSize: "12px" }, "data-collection-item-field": "name", "data-collection-item-id": item?.id || item?._id, children: item.name }, void 0, false, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 599,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("td", { "data-source-location": "pages/Orders:581:22", "data-dynamic-content": "true", style: { textAlign: "center", padding: "5px 0", fontSize: "12px" }, "data-collection-item-field": "quantity", "data-collection-item-id": item?.id || item?._id, children: item.quantity }, void 0, false, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 600,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("td", { "data-source-location": "pages/Orders:582:22", "data-dynamic-content": "true", style: { textAlign: "right", padding: "5px 0", fontSize: "12px" }, "data-collection-item-field": "total_price", "data-collection-item-id": item?.id || item?._id, children: [
              "₹",
              item.total_price
            ] }, void 0, true, {
              fileName: "/app/src/pages/Orders.jsx",
              lineNumber: 601,
              columnNumber: 23
            }, this)
          ] }, i, true, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 598,
            columnNumber: 17
          }, this)
        ) }, void 0, false, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 596,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Orders.jsx",
        lineNumber: 588,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:588:14", "data-dynamic-content": "true", style: { borderTop: "1px solid #000", paddingTop: "10px" }, children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:589:16", "data-dynamic-content": "true", style: { display: "flex", justifyContent: "space-between", marginBottom: "5px" }, children: [
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Orders:590:18", "data-dynamic-content": "true", style: { fontSize: "12px" }, children: "Subtotal:" }, void 0, false, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 609,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Orders:591:18", "data-dynamic-content": "true", style: { fontSize: "12px" }, "data-collection-item-field": "subtotal", "data-collection-item-id": selectedOrder?.id || selectedOrder?._id, children: [
            "₹",
            selectedOrder.subtotal
          ] }, void 0, true, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 610,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 608,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:593:16", "data-dynamic-content": "true", style: { display: "flex", justifyContent: "space-between", marginBottom: "5px" }, children: [
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Orders:594:18", "data-dynamic-content": "true", style: { fontSize: "12px" }, children: [
            "Tax (",
            restaurant?.settings?.tax_rate || 5,
            "%):"
          ] }, void 0, true, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 613,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Orders:595:18", "data-dynamic-content": "true", style: { fontSize: "12px" }, "data-collection-item-field": "tax_amount", "data-collection-item-id": selectedOrder?.id || selectedOrder?._id, children: [
            "₹",
            selectedOrder.tax_amount
          ] }, void 0, true, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 614,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 612,
          columnNumber: 17
        }, this),
        selectedOrder.service_charge > 0 && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:598:18", "data-dynamic-content": "true", style: { display: "flex", justifyContent: "space-between", marginBottom: "5px" }, children: [
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Orders:599:20", "data-dynamic-content": "true", style: { fontSize: "12px" }, children: "Service Charge:" }, void 0, false, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 618,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Orders:600:20", "data-dynamic-content": "true", style: { fontSize: "12px" }, "data-collection-item-field": "service_charge", "data-collection-item-id": selectedOrder?.id || selectedOrder?._id, children: [
            "₹",
            selectedOrder.service_charge
          ] }, void 0, true, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 619,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 617,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:603:16", "data-dynamic-content": "true", style: { display: "flex", justifyContent: "space-between", borderTop: "2px solid #000", paddingTop: "5px", marginTop: "5px" }, children: [
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Orders:604:18", "data-dynamic-content": "true", style: { fontSize: "16px", fontWeight: "bold" }, children: "Total:" }, void 0, false, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 623,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Orders:605:18", "data-dynamic-content": "true", style: { fontSize: "16px", fontWeight: "bold" }, "data-collection-item-field": "total_amount", "data-collection-item-id": selectedOrder?.id || selectedOrder?._id, children: [
            "₹",
            selectedOrder.total_amount
          ] }, void 0, true, {
            fileName: "/app/src/pages/Orders.jsx",
            lineNumber: 624,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 622,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Orders.jsx",
        lineNumber: 607,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Orders:609:14", "data-dynamic-content": "true", style: { textAlign: "center", marginTop: "20px", fontSize: "12px", color: "#666" }, children: [
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Orders:610:16", "data-dynamic-content": "true", style: { margin: "5px 0" }, children: "Thank you for dining with us!" }, void 0, false, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 629,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Orders:611:16", "data-dynamic-content": "true", style: { margin: "5px 0" }, children: "Visit again soon" }, void 0, false, {
          fileName: "/app/src/pages/Orders.jsx",
          lineNumber: 630,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Orders.jsx",
        lineNumber: 628,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Orders.jsx",
      lineNumber: 574,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/Orders.jsx",
      lineNumber: 572,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/Orders.jsx",
      lineNumber: 571,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/Orders.jsx",
    lineNumber: 238,
    columnNumber: 5
  }, this);
}
_s(OrdersContent, "TRZtFEXV4aVVIz9okJ82GqA6HxM=");
_c = OrdersContent;
export default function Orders() {
  return /* @__PURE__ */ jsxDEV(DashboardLayout, { "data-source-location": "pages/Orders:623:4", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(OrdersContent, { "data-source-location": "pages/Orders:624:6", "data-dynamic-content": "false" }, void 0, false, {
    fileName: "/app/src/pages/Orders.jsx",
    lineNumber: 643,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/src/pages/Orders.jsx",
    lineNumber: 642,
    columnNumber: 5
  }, this);
}
_c2 = Orders;
var _c, _c2;
$RefreshReg$(_c, "OrdersContent");
$RefreshReg$(_c2, "Orders");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/Orders.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/Orders.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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O0FBQUF3SixLQUFieEo7QUF5akJULHdCQUF3QnlKLFNBQVM7QUFDL0IsU0FDRSx1QkFBQyxtQkFBZ0Isd0JBQXFCLHNCQUFxQix3QkFBcUIsU0FDOUUsaUNBQUMsaUJBQWMsd0JBQXFCLHNCQUFxQix3QkFBcUIsV0FBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFxRixLQUR2RjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUE7QUFFSjtBQUFDQyxNQU51QkQ7QUFBTSxJQUFBRCxJQUFBRTtBQUFBQyxhQUFBSCxJQUFBO0FBQUFHLGFBQUFELEtBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiYmFzZTQ0IiwiRGFzaGJvYXJkTGF5b3V0IiwiU2VhcmNoIiwiRmlsdGVyIiwiQ2xvY2siLCJDaGVja0NpcmNsZTIiLCJYQ2lyY2xlIiwiQ2hlZkhhdCIsIkJlbGwiLCJVdGVuc2lscyIsIkNyZWRpdENhcmQiLCJQaG9uZSIsIlJlZnJlc2hDdyIsIkV5ZSIsIlByaW50ZXIiLCJEb3dubG9hZCIsIkZpbGVUZXh0IiwiaHRtbDJjYW52YXMiLCJqc1BERiIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJCdXR0b24iLCJJbnB1dCIsIkJhZGdlIiwiVGFicyIsIlRhYnNMaXN0IiwiVGFic1RyaWdnZXIiLCJEaWFsb2ciLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nSGVhZGVyIiwiRGlhbG9nVGl0bGUiLCJTZWxlY3QiLCJTZWxlY3RDb250ZW50IiwiU2VsZWN0SXRlbSIsIlNlbGVjdFRyaWdnZXIiLCJTZWxlY3RWYWx1ZSIsIm9yZGVyU3RhdHVzZXMiLCJ2YWx1ZSIsImxhYmVsIiwic3RhdHVzQ29uZmlnIiwicGVuZGluZyIsImNvbG9yIiwiaWNvbiIsIm5leHQiLCJjb25maXJtZWQiLCJwcmVwYXJpbmciLCJyZWFkeSIsInNlcnZlZCIsImNvbXBsZXRlZCIsImNhbmNlbGxlZCIsIk9yZGVyc0NvbnRlbnQiLCJ1c2VyIiwicmVzdGF1cmFudCIsIl9zIiwib3JkZXJzIiwic2V0T3JkZXJzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsInN0YXR1c0ZpbHRlciIsInNldFN0YXR1c0ZpbHRlciIsInNlbGVjdGVkT3JkZXIiLCJzZXRTZWxlY3RlZE9yZGVyIiwiaXNSZWZyZXNoaW5nIiwic2V0SXNSZWZyZXNoaW5nIiwiYWNrbm93bGVkZ2VkT3JkZXJzIiwic2V0QWNrbm93bGVkZ2VkT3JkZXJzIiwiU2V0IiwiYXVkaW9SZWYiLCJiaWxsUmVmIiwicmVzdGF1cmFudF9pZCIsImxvYWRPcmRlcnMiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNvdW5kRW5hYmxlZCIsInNldHRpbmdzIiwib3JkZXJfc291bmRfZW5hYmxlZCIsInBlbmRpbmdPcmRlcnMiLCJmaWx0ZXIiLCJvIiwic3RhdHVzIiwiaGFzIiwiaWQiLCJsZW5ndGgiLCJwbGF5T3JkZXJTb3VuZCIsInN0b3BPcmRlclNvdW5kIiwib3JkZXJzRGF0YSIsImVudGl0aWVzIiwiT3JkZXIiLCJlIiwiY29uc29sZSIsImVycm9yIiwiY3VycmVudCIsIkF1ZGlvIiwibG9vcCIsInBsYXkiLCJjYXRjaCIsImxvZyIsInBhdXNlIiwiY3VycmVudFRpbWUiLCJhY2tub3dsZWRnZU9yZGVyIiwib3JkZXJJZCIsInByZXYiLCJoYW5kbGVSZWZyZXNoIiwiZmlsdGVyZWRPcmRlcnMiLCJvcmRlciIsIm1hdGNoZXNTZWFyY2giLCJvcmRlcl9udW1iZXIiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiY3VzdG9tZXJfbmFtZSIsInRhYmxlX251bWJlciIsIm1hdGNoZXNTdGF0dXMiLCJ1cGRhdGVPcmRlclN0YXR1cyIsIm5ld1N0YXR1cyIsInVwZGF0ZSIsImdlbmVyYXRlQmlsbFBERiIsImJpbGxFbGVtZW50IiwiY2FudmFzIiwic2NhbGUiLCJpbWdEYXRhIiwidG9EYXRhVVJMIiwicGRmIiwib3JpZW50YXRpb24iLCJ1bml0IiwiZm9ybWF0IiwiaW1nV2lkdGgiLCJpbWdIZWlnaHQiLCJoZWlnaHQiLCJ3aWR0aCIsImFkZEltYWdlIiwiZG93bmxvYWRCaWxsIiwic2V0VGltZW91dCIsInNhdmUiLCJwcmludEJpbGwiLCJwcmludENvbnRlbnQiLCJwcmludFdpbmRvdyIsIndpbmRvdyIsIm9wZW4iLCJkb2N1bWVudCIsIndyaXRlIiwiaW5uZXJIVE1MIiwiY2xvc2UiLCJwcmludCIsInVwZGF0ZVBheW1lbnRTdGF0dXMiLCJwYXltZW50U3RhdHVzIiwicGF5bWVudF9zdGF0dXMiLCJhY3RpdmVPcmRlcnMiLCJvcmRlcnNCeVN0YXR1cyIsInJlZHVjZSIsImFjYyIsInB1c2giLCJtYXAiLCJfX2FycklkeF9fIiwib3BhY2l0eSIsIml0ZW1zIiwidG90YWxfYW1vdW50IiwiRGF0ZSIsImNyZWF0ZWRfZGF0ZSIsInRvTG9jYWxlVGltZVN0cmluZyIsImhvdXIiLCJtaW51dGUiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJTdGF0dXNJY29uIiwiY3VzdG9tZXJfcGhvbmUiLCJ0b0xvY2FsZVN0cmluZyIsIm1vbnRoIiwiZGF5IiwiX2lkIiwib3JkZXJfdHlwZSIsInNsaWNlIiwiaXRlbSIsImkiLCJxdWFudGl0eSIsIm5hbWUiLCJ0b3RhbF9wcmljZSIsInN1YnRvdGFsIiwidGF4X2Ftb3VudCIsInBheW1lbnRfbWV0aG9kIiwicG9zaXRpb24iLCJsZWZ0IiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsImZvbnRGYW1pbHkiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW4iLCJmb250U2l6ZSIsImFkZHJlc3MiLCJwaG9uZSIsImJvcmRlclRvcCIsImJvcmRlckJvdHRvbSIsInBhZGRpbmdUb3AiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJ0YXhfcmF0ZSIsInNlcnZpY2VfY2hhcmdlIiwibWFyZ2luVG9wIiwiZm9udFdlaWdodCIsIl9jIiwiT3JkZXJzIiwiX2MyIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIk9yZGVycy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgYmFzZTQ0IH0gZnJvbSBcIkAvYXBpL2Jhc2U0NENsaWVudFwiO1xuaW1wb3J0IERhc2hib2FyZExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkTGF5b3V0XCI7XG5pbXBvcnQge1xuICBTZWFyY2gsIEZpbHRlciwgQ2xvY2ssIENoZWNrQ2lyY2xlMiwgWENpcmNsZSxcbiAgQ2hlZkhhdCwgQmVsbCwgVXRlbnNpbHMsIENyZWRpdENhcmQsIFBob25lLFxuICBSZWZyZXNoQ3csIEV5ZSwgUHJpbnRlciwgRG93bmxvYWQsIEZpbGVUZXh0IH0gZnJvbVxuXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCBodG1sMmNhbnZhcyBmcm9tIFwiaHRtbDJjYW52YXNcIjtcbmltcG9ydCBqc1BERiBmcm9tIFwianNwZGZcIjtcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9iYWRnZVwiO1xuaW1wb3J0IHsgVGFicywgVGFic0xpc3QsIFRhYnNUcmlnZ2VyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90YWJzXCI7XG5pbXBvcnQge1xuICBEaWFsb2csXG4gIERpYWxvZ0NvbnRlbnQsXG4gIERpYWxvZ0hlYWRlcixcbiAgRGlhbG9nVGl0bGUgfSBmcm9tXG5cIkAvY29tcG9uZW50cy91aS9kaWFsb2dcIjtcbmltcG9ydCB7XG4gIFNlbGVjdCxcbiAgU2VsZWN0Q29udGVudCxcbiAgU2VsZWN0SXRlbSxcbiAgU2VsZWN0VHJpZ2dlcixcbiAgU2VsZWN0VmFsdWUgfSBmcm9tXG5cIkAvY29tcG9uZW50cy91aS9zZWxlY3RcIjtcblxuY29uc3Qgb3JkZXJTdGF0dXNlcyA9IFtcbnsgdmFsdWU6IFwiYWxsXCIsIGxhYmVsOiBcIkFsbCBPcmRlcnNcIiB9LFxueyB2YWx1ZTogXCJwZW5kaW5nXCIsIGxhYmVsOiBcIlBlbmRpbmdcIiB9LFxueyB2YWx1ZTogXCJjb25maXJtZWRcIiwgbGFiZWw6IFwiQ29uZmlybWVkXCIgfSxcbnsgdmFsdWU6IFwicHJlcGFyaW5nXCIsIGxhYmVsOiBcIlByZXBhcmluZ1wiIH0sXG57IHZhbHVlOiBcInJlYWR5XCIsIGxhYmVsOiBcIlJlYWR5XCIgfSxcbnsgdmFsdWU6IFwic2VydmVkXCIsIGxhYmVsOiBcIlNlcnZlZFwiIH0sXG57IHZhbHVlOiBcImNvbXBsZXRlZFwiLCBsYWJlbDogXCJDb21wbGV0ZWRcIiB9LFxueyB2YWx1ZTogXCJjYW5jZWxsZWRcIiwgbGFiZWw6IFwiQ2FuY2VsbGVkXCIgfV07XG5cblxuY29uc3Qgc3RhdHVzQ29uZmlnID0ge1xuICBwZW5kaW5nOiB7IGNvbG9yOiBcImJnLXllbGxvdy0xMDAgdGV4dC15ZWxsb3ctNzAwXCIsIGljb246IENsb2NrLCBuZXh0OiBcImNvbmZpcm1lZFwiIH0sXG4gIGNvbmZpcm1lZDogeyBjb2xvcjogXCJiZy1ibHVlLTEwMCB0ZXh0LWJsdWUtNzAwXCIsIGljb246IENoZWNrQ2lyY2xlMiwgbmV4dDogXCJwcmVwYXJpbmdcIiB9LFxuICBwcmVwYXJpbmc6IHsgY29sb3I6IFwiYmctcHVycGxlLTEwMCB0ZXh0LXB1cnBsZS03MDBcIiwgaWNvbjogQ2hlZkhhdCwgbmV4dDogXCJyZWFkeVwiIH0sXG4gIHJlYWR5OiB7IGNvbG9yOiBcImJnLWdyZWVuLTEwMCB0ZXh0LWdyZWVuLTcwMFwiLCBpY29uOiBCZWxsLCBuZXh0OiBcInNlcnZlZFwiIH0sXG4gIHNlcnZlZDogeyBjb2xvcjogXCJiZy1lbWVyYWxkLTEwMCB0ZXh0LWVtZXJhbGQtNzAwXCIsIGljb246IFV0ZW5zaWxzLCBuZXh0OiBcImNvbXBsZXRlZFwiIH0sXG4gIGNvbXBsZXRlZDogeyBjb2xvcjogXCJiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNzAwXCIsIGljb246IENoZWNrQ2lyY2xlMiwgbmV4dDogbnVsbCB9LFxuICBjYW5jZWxsZWQ6IHsgY29sb3I6IFwiYmctcmVkLTEwMCB0ZXh0LXJlZC03MDBcIiwgaWNvbjogWENpcmNsZSwgbmV4dDogbnVsbCB9XG59O1xuXG5mdW5jdGlvbiBPcmRlcnNDb250ZW50KHsgdXNlciwgcmVzdGF1cmFudCB9KSB7XG4gIGNvbnN0IFtvcmRlcnMsIHNldE9yZGVyc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3N0YXR1c0ZpbHRlciwgc2V0U3RhdHVzRmlsdGVyXSA9IHVzZVN0YXRlKFwiYWxsXCIpO1xuICBjb25zdCBbc2VsZWN0ZWRPcmRlciwgc2V0U2VsZWN0ZWRPcmRlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzUmVmcmVzaGluZywgc2V0SXNSZWZyZXNoaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Fja25vd2xlZGdlZE9yZGVycywgc2V0QWNrbm93bGVkZ2VkT3JkZXJzXSA9IHVzZVN0YXRlKG5ldyBTZXQoKSk7XG4gIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBiaWxsUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlc3RhdXJhbnQ/LnJlc3RhdXJhbnRfaWQpIHtcbiAgICAgIGxvYWRPcmRlcnMoKTtcblxuICAgICAgLy8gQXV0by1yZWZyZXNoIG9yZGVycyBldmVyeSAxMCBzZWNvbmRzXG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgbG9hZE9yZGVycygpO1xuICAgICAgfSwgMTAwMDApO1xuXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfVxuICB9LCBbcmVzdGF1cmFudF0pO1xuXG4gIC8vIFNvdW5kIGFsZXJ0IGZvciBuZXcgb3JkZXJzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc291bmRFbmFibGVkID0gcmVzdGF1cmFudD8uc2V0dGluZ3M/Lm9yZGVyX3NvdW5kX2VuYWJsZWQgIT09IGZhbHNlO1xuICAgIGlmICghc291bmRFbmFibGVkKSByZXR1cm47XG5cbiAgICBjb25zdCBwZW5kaW5nT3JkZXJzID0gb3JkZXJzLmZpbHRlcigobykgPT5cbiAgICBvLnN0YXR1cyA9PT0gJ3BlbmRpbmcnICYmICFhY2tub3dsZWRnZWRPcmRlcnMuaGFzKG8uaWQpXG4gICAgKTtcblxuICAgIGlmIChwZW5kaW5nT3JkZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHBsYXlPcmRlclNvdW5kKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0b3BPcmRlclNvdW5kKCk7XG4gICAgfVxuICB9LCBbb3JkZXJzLCBhY2tub3dsZWRnZWRPcmRlcnMsIHJlc3RhdXJhbnRdKTtcblxuICBjb25zdCBsb2FkT3JkZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBvcmRlcnNEYXRhID0gYXdhaXQgYmFzZTQ0LmVudGl0aWVzLk9yZGVyLmZpbHRlcihcbiAgICAgICAgeyByZXN0YXVyYW50X2lkOiByZXN0YXVyYW50LnJlc3RhdXJhbnRfaWQgfSxcbiAgICAgICAgJy1jcmVhdGVkX2RhdGUnLFxuICAgICAgICAxMDBcbiAgICAgICk7XG4gICAgICBzZXRPcmRlcnMob3JkZXJzRGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgb3JkZXJzOlwiLCBlKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcGxheU9yZGVyU291bmQgPSAoKSA9PiB7XG4gICAgaWYgKCFhdWRpb1JlZi5jdXJyZW50KSB7XG4gICAgICBhdWRpb1JlZi5jdXJyZW50ID0gbmV3IEF1ZGlvKCdkYXRhOmF1ZGlvL3dhdjtiYXNlNjQsVWtsR1Jub0dBQUJYUVZaRlptMTBJQkFBQUFBQkFBRUFRQjhBQUVBZkFBQUJBQWdBWkdGMFlRb0dBQUNCaFlxRmJGMWZkSml2ckpCaE5qVmdvZERicTJFY0JqK2EyL0xEY2lVRkxJSE84dGlKTndnWmFMdnQ1NTlORUF4UXArUHd0bU1jQmppUjEvTE1lU3dGSkhmSDhOMlFRQW9VWHJUcDY2aFZGQXBHbitEeXZtd2hCQ3QrelBEUWlEd0tIV3UzOGVHWEZoSUdTSzNqN3JWJyk7XG4gICAgfVxuICAgIGF1ZGlvUmVmLmN1cnJlbnQubG9vcCA9IHRydWU7XG4gICAgYXVkaW9SZWYuY3VycmVudC5wbGF5KCkuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKCdBdWRpbyBwbGF5IGZhaWxlZDonLCBlKSk7XG4gIH07XG5cbiAgY29uc3Qgc3RvcE9yZGVyU291bmQgPSAoKSA9PiB7XG4gICAgaWYgKGF1ZGlvUmVmLmN1cnJlbnQpIHtcbiAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGF1c2UoKTtcbiAgICAgIGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWUgPSAwO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhY2tub3dsZWRnZU9yZGVyID0gKG9yZGVySWQpID0+IHtcbiAgICBzZXRBY2tub3dsZWRnZWRPcmRlcnMoKHByZXYpID0+IG5ldyBTZXQoWy4uLnByZXYsIG9yZGVySWRdKSk7XG4gICAgc3RvcE9yZGVyU291bmQoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZWZyZXNoID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldElzUmVmcmVzaGluZyh0cnVlKTtcbiAgICBhd2FpdCBsb2FkT3JkZXJzKCk7XG4gICAgc2V0SXNSZWZyZXNoaW5nKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJlZE9yZGVycyA9IG9yZGVycy5maWx0ZXIoKG9yZGVyKSA9PiB7XG4gICAgY29uc3QgbWF0Y2hlc1NlYXJjaCA9XG4gICAgb3JkZXIub3JkZXJfbnVtYmVyPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgb3JkZXIuY3VzdG9tZXJfbmFtZT8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgIG9yZGVyLnRhYmxlX251bWJlcj8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKTtcbiAgICBjb25zdCBtYXRjaGVzU3RhdHVzID0gc3RhdHVzRmlsdGVyID09PSBcImFsbFwiIHx8IG9yZGVyLnN0YXR1cyA9PT0gc3RhdHVzRmlsdGVyO1xuICAgIHJldHVybiBtYXRjaGVzU2VhcmNoICYmIG1hdGNoZXNTdGF0dXM7XG4gIH0pO1xuXG4gIGNvbnN0IHVwZGF0ZU9yZGVyU3RhdHVzID0gYXN5bmMgKG9yZGVySWQsIG5ld1N0YXR1cykgPT4ge1xuICAgIGFja25vd2xlZGdlT3JkZXIob3JkZXJJZCk7XG4gICAgYXdhaXQgYmFzZTQ0LmVudGl0aWVzLk9yZGVyLnVwZGF0ZShvcmRlcklkLCB7IHN0YXR1czogbmV3U3RhdHVzIH0pO1xuICAgIGF3YWl0IGxvYWRPcmRlcnMoKTtcbiAgICBpZiAoc2VsZWN0ZWRPcmRlcj8uaWQgPT09IG9yZGVySWQpIHtcbiAgICAgIHNldFNlbGVjdGVkT3JkZXIoeyAuLi5zZWxlY3RlZE9yZGVyLCBzdGF0dXM6IG5ld1N0YXR1cyB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2VuZXJhdGVCaWxsUERGID0gYXN5bmMgKG9yZGVyKSA9PiB7XG4gICAgY29uc3QgYmlsbEVsZW1lbnQgPSBiaWxsUmVmLmN1cnJlbnQ7XG4gICAgaWYgKCFiaWxsRWxlbWVudCkgcmV0dXJuO1xuXG4gICAgY29uc3QgY2FudmFzID0gYXdhaXQgaHRtbDJjYW52YXMoYmlsbEVsZW1lbnQsIHsgc2NhbGU6IDIgfSk7XG4gICAgY29uc3QgaW1nRGF0YSA9IGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xuXG4gICAgY29uc3QgcGRmID0gbmV3IGpzUERGKHtcbiAgICAgIG9yaWVudGF0aW9uOiAncG9ydHJhaXQnLFxuICAgICAgdW5pdDogJ21tJyxcbiAgICAgIGZvcm1hdDogJ2E1J1xuICAgIH0pO1xuXG4gICAgY29uc3QgaW1nV2lkdGggPSAxNDg7XG4gICAgY29uc3QgaW1nSGVpZ2h0ID0gY2FudmFzLmhlaWdodCAqIGltZ1dpZHRoIC8gY2FudmFzLndpZHRoO1xuXG4gICAgcGRmLmFkZEltYWdlKGltZ0RhdGEsICdQTkcnLCAwLCAwLCBpbWdXaWR0aCwgaW1nSGVpZ2h0KTtcbiAgICByZXR1cm4gcGRmO1xuICB9O1xuXG4gIGNvbnN0IGRvd25sb2FkQmlsbCA9IGFzeW5jIChvcmRlcikgPT4ge1xuICAgIHNldFNlbGVjdGVkT3JkZXIob3JkZXIpO1xuICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcGRmID0gYXdhaXQgZ2VuZXJhdGVCaWxsUERGKG9yZGVyKTtcbiAgICAgIHBkZi5zYXZlKGBCaWxsXyR7b3JkZXIub3JkZXJfbnVtYmVyfS5wZGZgKTtcbiAgICB9LCAxMDApO1xuICB9O1xuXG4gIGNvbnN0IHByaW50QmlsbCA9IGFzeW5jIChvcmRlcikgPT4ge1xuICAgIHNldFNlbGVjdGVkT3JkZXIob3JkZXIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgcHJpbnRDb250ZW50ID0gYmlsbFJlZi5jdXJyZW50O1xuICAgICAgY29uc3QgcHJpbnRXaW5kb3cgPSB3aW5kb3cub3BlbignJywgJycsICd3aWR0aD04MDAsaGVpZ2h0PTYwMCcpO1xuICAgICAgcHJpbnRXaW5kb3cuZG9jdW1lbnQud3JpdGUoJzxodG1sPjxoZWFkPjx0aXRsZT5CaWxsIC0gJyArIG9yZGVyLm9yZGVyX251bWJlciArICc8L3RpdGxlPicpO1xuICAgICAgcHJpbnRXaW5kb3cuZG9jdW1lbnQud3JpdGUoJzxzdHlsZT5ib2R5e2ZvbnQtZmFtaWx5OkFyaWFsLHNhbnMtc2VyaWY7cGFkZGluZzoyMHB4O310YWJsZXt3aWR0aDoxMDAlO2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTt9dGgsdGR7cGFkZGluZzo4cHg7dGV4dC1hbGlnbjpsZWZ0O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZGQ7fS50ZXh0LXJpZ2h0e3RleHQtYWxpZ246cmlnaHQ7fS5mb250LWJvbGR7Zm9udC13ZWlnaHQ6Ym9sZDt9LmJvcmRlci10e2JvcmRlci10b3A6MnB4IHNvbGlkICMwMDA7cGFkZGluZy10b3A6MTBweDt9PC9zdHlsZT4nKTtcbiAgICAgIHByaW50V2luZG93LmRvY3VtZW50LndyaXRlKCc8L2hlYWQ+PGJvZHk+Jyk7XG4gICAgICBwcmludFdpbmRvdy5kb2N1bWVudC53cml0ZShwcmludENvbnRlbnQuaW5uZXJIVE1MKTtcbiAgICAgIHByaW50V2luZG93LmRvY3VtZW50LndyaXRlKCc8L2JvZHk+PC9odG1sPicpO1xuICAgICAgcHJpbnRXaW5kb3cuZG9jdW1lbnQuY2xvc2UoKTtcbiAgICAgIHByaW50V2luZG93LnByaW50KCk7XG4gICAgfSwgMTAwKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVQYXltZW50U3RhdHVzID0gYXN5bmMgKG9yZGVySWQsIHBheW1lbnRTdGF0dXMpID0+IHtcbiAgICBhd2FpdCBiYXNlNDQuZW50aXRpZXMuT3JkZXIudXBkYXRlKG9yZGVySWQsIHsgcGF5bWVudF9zdGF0dXM6IHBheW1lbnRTdGF0dXMgfSk7XG4gICAgYXdhaXQgbG9hZE9yZGVycygpO1xuICAgIGlmIChzZWxlY3RlZE9yZGVyPy5pZCA9PT0gb3JkZXJJZCkge1xuICAgICAgc2V0U2VsZWN0ZWRPcmRlcih7IC4uLnNlbGVjdGVkT3JkZXIsIHBheW1lbnRfc3RhdHVzOiBwYXltZW50U3RhdHVzIH0pO1xuICAgIH1cbiAgfTtcblxuICAvLyBHcm91cCBvcmRlcnMgYnkgc3RhdHVzIGZvciBrYW5iYW4gdmlld1xuICBjb25zdCBhY3RpdmVPcmRlcnMgPSBvcmRlcnMuZmlsdGVyKChvKSA9PiBbJ3BlbmRpbmcnLCAnY29uZmlybWVkJywgJ3ByZXBhcmluZycsICdyZWFkeSddLmluY2x1ZGVzKG8uc3RhdHVzKSk7XG4gIGNvbnN0IG9yZGVyc0J5U3RhdHVzID0gYWN0aXZlT3JkZXJzLnJlZHVjZSgoYWNjLCBvcmRlcikgPT4ge1xuICAgIGlmICghYWNjW29yZGVyLnN0YXR1c10pIGFjY1tvcmRlci5zdGF0dXNdID0gW107XG4gICAgYWNjW29yZGVyLnN0YXR1c10ucHVzaChvcmRlcik7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczoyMTI6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTY0XCI+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6MjEzOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYW5pbWF0ZS1zcGluIHJvdW5kZWQtZnVsbCBoLTggdy04IGJvcmRlci1iLTIgYm9yZGVyLXZpb2xldC02MDBcIj48L2Rpdj5cbiAgICAgIDwvZGl2Pik7XG5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczoyMTk6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6MjIxOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IG1kOml0ZW1zLWNlbnRlciBtZDpqdXN0aWZ5LWJldHdlZW4gZ2FwLTRcIj5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczoyMjI6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgIDxoMSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczoyMjM6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDBcIj5PcmRlcnM8L2gxPlxuICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjIyNDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj57YWN0aXZlT3JkZXJzLmxlbmd0aH0gYWN0aXZlIG9yZGVyczwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6MjI2OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJlZnJlc2h9XG4gICAgICAgIGRpc2FibGVkPXtpc1JlZnJlc2hpbmd9PlxuXG4gICAgICAgICAgPFJlZnJlc2hDdyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczoyMzE6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B3LTQgaC00IG1yLTIgJHtpc1JlZnJlc2hpbmcgPyAnYW5pbWF0ZS1zcGluJyA6ICcnfWB9IC8+XG4gICAgICAgICAgUmVmcmVzaFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogQWN0aXZlIE9yZGVycyAtIEthbmJhbiBTdHlsZSAqL31cbiAgICAgIHthY3RpdmVPcmRlcnMubGVuZ3RoID4gMCAmJlxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczoyMzg6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgZ2FwLTRcIj5cbiAgICAgICAgICB7WydwZW5kaW5nJywgJ2NvbmZpcm1lZCcsICdwcmVwYXJpbmcnLCAncmVhZHknXS5tYXAoKHN0YXR1cywgX19hcnJJZHhfXykgPT5cbiAgICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6MjQwOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtzdGF0dXN9IGNsYXNzTmFtZT1cImJnLWdyYXktNTBcIiBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30+XG4gICAgICAgICAgICAgIDxDYXJkSGVhZGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjI0MToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInBiLTJcIiBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30+XG4gICAgICAgICAgICAgICAgPENhcmRUaXRsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczoyNDI6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiIGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjI0MzoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImNhcGl0YWxpemVcIj57c3RhdHVzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxCYWRnZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczoyNDQ6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB2YXJpYW50PVwic2Vjb25kYXJ5XCI+e29yZGVyc0J5U3RhdHVzW3N0YXR1c10/Lmxlbmd0aCB8fCAwfTwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgPC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjI0NzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktM1wiIGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffT5cbiAgICAgICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjI0ODoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffT5cbiAgICAgICAgICAgICAgICAgIHtvcmRlcnNCeVN0YXR1c1tzdGF0dXNdPy5tYXAoKG9yZGVyKSA9PlxuICAgICAgICAgICAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczoyNTA6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICBrZXk9e29yZGVyLmlkfVxuICAgICAgICAgICAgICBsYXlvdXRcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC45IH19XG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgc2NhbGU6IDEgfX1cbiAgICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC45IH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbGcgcC0zIHNoYWRvdy1zbSBib3JkZXIgYm9yZGVyLWdyYXktMTAwIGN1cnNvci1wb2ludGVyIGhvdmVyOnNoYWRvdy1tZCB0cmFuc2l0aW9uLXNoYWRvd1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBhY2tub3dsZWRnZU9yZGVyKG9yZGVyLmlkKTtcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZE9yZGVyKG9yZGVyKTtcbiAgICAgICAgICAgICAgfX0gZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e29yZGVyPy5pZH0+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjI2MjoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczoyNjM6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtc21cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIm9yZGVyX251bWJlclwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtvcmRlcj8uaWR9PiN7b3JkZXIub3JkZXJfbnVtYmVyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjI2NDoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7b3JkZXIudGFibGVfbnVtYmVyIHx8ICdUYWtlYXdheSd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6MjY4OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwIG1iLTJcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInRvdGFsX2Ftb3VudFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtvcmRlcj8uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAge29yZGVyLml0ZW1zPy5sZW5ndGggfHwgMH0gaXRlbXMgwrcg4oK5e29yZGVyLnRvdGFsX2Ftb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczoyNzE6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjI3MjoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUob3JkZXIuY3JlYXRlZF9kYXRlKS50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0dXNDb25maWdbc3RhdHVzXS5uZXh0ICYmXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjI3NjoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNyB0ZXh0LXhzXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZU9yZGVyU3RhdHVzKG9yZGVyLmlkLCBzdGF0dXNDb25maWdbc3RhdHVzXS5uZXh0KTtcbiAgICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV4dCDihpJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgICAgICB7IW9yZGVyc0J5U3RhdHVzW3N0YXR1c10/Lmxlbmd0aCAmJlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczoyOTM6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktNCB0ZXh0LWdyYXktNDAwIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgTm8gb3JkZXJzXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG5cbiAgICAgIHsvKiBBbGwgT3JkZXJzIExpc3QgKi99XG4gICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczozMDQ6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICA8Q2FyZEhlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczozMDU6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6MzA2OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBtZDppdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6MzA3OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleC0xIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDxTZWFyY2ggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6MzA4OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMyB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzIgdy00IGgtNCB0ZXh0LWdyYXktNDAwXCIgLz5cbiAgICAgICAgICAgICAgPElucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjMwOToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IG9yZGVyICMsIGN1c3RvbWVyLCB0YWJsZS4uLlwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsLTlcIiAvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxTZWxlY3QgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6MzE2OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdmFsdWU9e3N0YXR1c0ZpbHRlcn0gb25WYWx1ZUNoYW5nZT17c2V0U3RhdHVzRmlsdGVyfT5cbiAgICAgICAgICAgICAgPFNlbGVjdFRyaWdnZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6MzE3OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNDBcIj5cbiAgICAgICAgICAgICAgICA8U2VsZWN0VmFsdWUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6MzE4OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+XG4gICAgICAgICAgICAgIDwvU2VsZWN0VHJpZ2dlcj5cbiAgICAgICAgICAgICAgPFNlbGVjdENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6MzIwOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAge29yZGVyU3RhdHVzZXMubWFwKChzdGF0dXMsIF9fYXJySWR4X18pID0+XG4gICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6MzIyOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtzdGF0dXMudmFsdWV9IHZhbHVlPXtzdGF0dXMudmFsdWV9IGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwib3JkZXJTdGF0dXNlc1wiIGRhdGEtYXJyLWZpZWxkPVwibGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAge3N0YXR1cy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1NlbGVjdENvbnRlbnQ+XG4gICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6MzMwOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICB7ZmlsdGVyZWRPcmRlcnMubGVuZ3RoID09PSAwID9cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjMzMjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS0xMiB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgIDxDbG9jayBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczozMzM6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0xMiBoLTEyIG14LWF1dG8gbWItMyB0ZXh0LWdyYXktMzAwXCIgLz5cbiAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6MzM0OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPk5vIG9yZGVycyBmb3VuZDwvcD5cbiAgICAgICAgICAgIDwvZGl2PiA6XG5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjMzNzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0b1wiPlxuICAgICAgICAgICAgICA8dGFibGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6MzM4OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjMzOToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgIDx0ciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczozNDA6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHRleHQtc20gdGV4dC1ncmF5LTUwMCBib3JkZXItYlwiPlxuICAgICAgICAgICAgICAgICAgICA8dGggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6MzQxOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInBiLTMgZm9udC1tZWRpdW1cIj5PcmRlciAjPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjM0MjoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJwYi0zIGZvbnQtbWVkaXVtXCI+Q3VzdG9tZXI8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6MzQzOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInBiLTMgZm9udC1tZWRpdW1cIj5UYWJsZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczozNDQ6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwicGItMyBmb250LW1lZGl1bVwiPkl0ZW1zPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjM0NToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJwYi0zIGZvbnQtbWVkaXVtXCI+QW1vdW50PC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjM0NjoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJwYi0zIGZvbnQtbWVkaXVtXCI+U3RhdHVzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjM0NzoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJwYi0zIGZvbnQtbWVkaXVtXCI+UGF5bWVudDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczozNDg6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwicGItMyBmb250LW1lZGl1bVwiPlRpbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6MzQ5OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInBiLTMgZm9udC1tZWRpdW1cIj48L3RoPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczozNTI6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJkaXZpZGUteVwiIGRhdGEtY29sbGVjdGlvbi1pZD1cIk9yZGVyXCI+XG4gICAgICAgICAgICAgICAgICB7ZmlsdGVyZWRPcmRlcnMubWFwKChvcmRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgU3RhdHVzSWNvbiA9IHN0YXR1c0NvbmZpZ1tvcmRlci5zdGF0dXNdPy5pY29uIHx8IENsb2NrO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPHRyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjM1NjoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17b3JkZXIuaWR9IGNsYXNzTmFtZT1cInRleHQtc20gaG92ZXI6YmctZ3JheS01MFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtvcmRlcj8uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjM1NzoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB5LTMgZm9udC1tZWRpdW1cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIm9yZGVyX251bWJlclwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtvcmRlcj8uaWR9PntvcmRlci5vcmRlcl9udW1iZXJ9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczozNTg6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6MzU5OjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJjdXN0b21lcl9waG9uZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtvcmRlcj8uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjM2MDoyOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPntvcmRlci5jdXN0b21lcl9uYW1lIHx8ICdHdWVzdCd9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcmRlci5jdXN0b21lcl9waG9uZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczozNjI6MzBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDBcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImN1c3RvbWVyX3Bob25lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e29yZGVyPy5pZH0+e29yZGVyLmN1c3RvbWVyX3Bob25lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6MzY2OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicHktM1wiPntvcmRlci50YWJsZV9udW1iZXIgfHwgJy0nfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6MzY3OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicHktM1wiPntvcmRlci5pdGVtcz8ubGVuZ3RoIHx8IDB9IGl0ZW1zPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczozNjg6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJweS0zIGZvbnQtbWVkaXVtXCI+4oK5e29yZGVyLnRvdGFsX2Ftb3VudD8udG9Mb2NhbGVTdHJpbmcoKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjM2OToyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjM3MDoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17c3RhdHVzQ29uZmlnW29yZGVyLnN0YXR1c10/LmNvbG9yfSBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInN0YXR1c1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtvcmRlcj8uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGF0dXNJY29uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjM3MToyOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTMgaC0zIG1yLTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcmRlci5zdGF0dXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjM3NToyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjM3NjoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHZhcmlhbnQ9e29yZGVyLnBheW1lbnRfc3RhdHVzID09PSAncGFpZCcgPyAnZGVmYXVsdCcgOiAnc2Vjb25kYXJ5J30gZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJwYXltZW50X3N0YXR1c1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtvcmRlcj8uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcmRlci5wYXltZW50X3N0YXR1c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6MzgwOjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicHktMyB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShvcmRlci5jcmVhdGVkX2RhdGUpLnRvTG9jYWxlU3RyaW5nKFtdLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0J1xuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjM4ODoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczozODk6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGdhcC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczozOTA6MjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNrbm93bGVkZ2VPcmRlcihvcmRlci5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRPcmRlcihvcmRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXllIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjM5ODozMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjQwMDoyOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRvd25sb2FkQmlsbChvcmRlcil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRG93bmxvYWQgQmlsbFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RG93bmxvYWQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NDA2OjMwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NDA4OjI4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJpbnRCaWxsKG9yZGVyKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQcmludCBCaWxsXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmludGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjQxNDozMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+KTtcblxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICA8L0NhcmQ+XG5cbiAgICAgIHsvKiBPcmRlciBEZXRhaWwgRGlhbG9nICovfVxuICAgICAgPERpYWxvZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo0Mjk6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG9wZW49eyEhc2VsZWN0ZWRPcmRlcn0gb25PcGVuQ2hhbmdlPXsoKSA9PiBzZXRTZWxlY3RlZE9yZGVyKG51bGwpfT5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NDMwOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtYXgtdy1sZ1wiPlxuICAgICAgICAgIDxEaWFsb2dIZWFkZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NDMxOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICA8RGlhbG9nVGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NDMyOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJvcmRlcl9udW1iZXJcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2VsZWN0ZWRPcmRlcj8uaWQgfHwgc2VsZWN0ZWRPcmRlcj8uX2lkfT5PcmRlciAje3NlbGVjdGVkT3JkZXI/Lm9yZGVyX251bWJlcn08L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgIDwvRGlhbG9nSGVhZGVyPlxuICAgICAgICAgIFxuICAgICAgICAgIHtzZWxlY3RlZE9yZGVyICYmXG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo0MzY6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgey8qIE9yZGVyIEluZm8gKi99XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NDM4OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo0Mzk6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjQ0MDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+VGFibGU8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo0NDE6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPntzZWxlY3RlZE9yZGVyLnRhYmxlX251bWJlciB8fCAnVGFrZWF3YXknfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjQ0MzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NDQ0OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5UeXBlPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NDQ1OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gY2FwaXRhbGl6ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwib3JkZXJfdHlwZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtzZWxlY3RlZE9yZGVyPy5pZCB8fCBzZWxlY3RlZE9yZGVyPy5faWR9PntzZWxlY3RlZE9yZGVyLm9yZGVyX3R5cGV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NDQ3OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo0NDg6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPkN1c3RvbWVyPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NDQ5OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj57c2VsZWN0ZWRPcmRlci5jdXN0b21lcl9uYW1lIHx8ICdHdWVzdCd9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NDUxOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo0NTI6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPlBob25lPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NDUzOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj57c2VsZWN0ZWRPcmRlci5jdXN0b21lcl9waG9uZSB8fCAnLSd9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogU3RhdHVzIFVwZGF0ZSAqL31cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo0NTg6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjQ1OToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5TdGF0dXM6PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxTZWxlY3QgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NDYwOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkT3JkZXIuc3RhdHVzfVxuICAgICAgICAgICAgICBvblZhbHVlQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZU9yZGVyU3RhdHVzKHNlbGVjdGVkT3JkZXIuaWQsIHZhbHVlKX0+XG5cbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RUcmlnZ2VyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjQ2NDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RWYWx1ZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo0NjU6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0VHJpZ2dlcj5cbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjQ2NzoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7b3JkZXJTdGF0dXNlcy5zbGljZSgxKS5tYXAoKHN0YXR1cykgPT5cbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjQ2OToyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17c3RhdHVzLnZhbHVlfSB2YWx1ZT17c3RhdHVzLnZhbHVlfSBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImxhYmVsXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3N0YXR1cz8uaWQgfHwgc3RhdHVzPy5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXR1cy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3RDb250ZW50PlxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogSXRlbXMgKi99XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NDc4OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPGg0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjQ3OToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSBtYi0yXCI+T3JkZXIgSXRlbXM8L2g0PlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NDgwOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS0yIGJnLWdyYXktNTAgcm91bmRlZC1sZyBwLTNcIj5cbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZE9yZGVyLml0ZW1zPy5tYXAoKGl0ZW0sIGkpID0+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo0ODI6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2l9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQtc21cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aXRlbT8uW1wiZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWRcIl19PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjQ4MzoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicXVhbnRpdHlcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aXRlbT8uaWQgfHwgaXRlbT8uX2lkfT57aXRlbS5xdWFudGl0eX14IHtpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjQ4NDoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJ0b3RhbF9wcmljZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtpdGVtPy5pZCB8fCBpdGVtPy5faWR9PuKCuXtpdGVtLnRvdGFsX3ByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIFRvdGFscyAqL31cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo0OTE6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJib3JkZXItdCBwdC0zIHNwYWNlLXktMSB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo0OTI6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NDkzOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlN1YnRvdGFsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NDk0OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJzdWJ0b3RhbFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtzZWxlY3RlZE9yZGVyPy5pZCB8fCBzZWxlY3RlZE9yZGVyPy5faWR9PuKCuXtzZWxlY3RlZE9yZGVyLnN1YnRvdGFsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjQ5NjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo0OTc6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+VGF4PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NDk4OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJ0YXhfYW1vdW50XCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3NlbGVjdGVkT3JkZXI/LmlkIHx8IHNlbGVjdGVkT3JkZXI/Ll9pZH0+4oK5e3NlbGVjdGVkT3JkZXIudGF4X2Ftb3VudH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo1MDA6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBmb250LWJvbGQgdGV4dC1iYXNlXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo1MDE6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+VG90YWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo1MDI6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInRvdGFsX2Ftb3VudFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtzZWxlY3RlZE9yZGVyPy5pZCB8fCBzZWxlY3RlZE9yZGVyPy5faWR9PuKCuXtzZWxlY3RlZE9yZGVyLnRvdGFsX2Ftb3VudH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiBQYXltZW50ICovfVxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjUwNzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItdCBwdC0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo1MDg6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgPENyZWRpdENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NTA5OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1ncmF5LTQwMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo1MTA6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJwYXltZW50X21ldGhvZFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtzZWxlY3RlZE9yZGVyPy5pZCB8fCBzZWxlY3RlZE9yZGVyPy5faWR9PlBheW1lbnQ6IHtzZWxlY3RlZE9yZGVyLnBheW1lbnRfbWV0aG9kfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8U2VsZWN0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjUxMjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZE9yZGVyLnBheW1lbnRfc3RhdHVzfVxuICAgICAgICAgICAgICBvblZhbHVlQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZVBheW1lbnRTdGF0dXMoc2VsZWN0ZWRPcmRlci5pZCwgdmFsdWUpfT5cblxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFRyaWdnZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NTE2OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMzJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFZhbHVlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjUxNzoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3RUcmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgPFNlbGVjdENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NTE5OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo1MjA6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdmFsdWU9XCJwZW5kaW5nXCI+UGVuZGluZzwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NTIxOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHZhbHVlPVwicGFpZFwiPlBhaWQ8L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjUyMjoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB2YWx1ZT1cInJlZnVuZGVkXCI+UmVmdW5kZWQ8L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiBCaWxsIEFjdGlvbnMgKi99XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NTI4OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBib3JkZXItdCBwdC0zXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo1Mjk6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRvd25sb2FkQmlsbChzZWxlY3RlZE9yZGVyKX0+XG5cbiAgICAgICAgICAgICAgICAgIDxEb3dubG9hZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo1MzQ6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCBtci0yXCIgLz5cbiAgICAgICAgICAgICAgICAgIERvd25sb2FkIEJpbGxcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjUzNzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJpbnRCaWxsKHNlbGVjdGVkT3JkZXIpfT5cblxuICAgICAgICAgICAgICAgICAgPFByaW50ZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NTQyOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgbXItMlwiIC8+XG4gICAgICAgICAgICAgICAgICBQcmludCBCaWxsXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICA8L0RpYWxvZz5cblxuICAgICAgey8qIEhpZGRlbiBCaWxsIFRlbXBsYXRlIGZvciBQREYvUHJpbnQgKi99XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjU1Mjo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6ICctOTk5OXB4JyB9fT5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo1NTM6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHJlZj17YmlsbFJlZn0gc3R5bGU9e3sgd2lkdGg6ICczMDBweCcsIHBhZGRpbmc6ICcyMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBmb250RmFtaWx5OiAnQXJpYWwsIHNhbnMtc2VyaWYnIH19PlxuICAgICAgICAgIHtzZWxlY3RlZE9yZGVyICYmXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo1NTY6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICcyMHB4JyB9fT5cbiAgICAgICAgICAgICAgICA8aDIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NTU3OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgc3R5bGU9e3sgbWFyZ2luOiAnMCAwIDVweCAwJywgZm9udFNpemU6ICcyMHB4JyB9fSBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIm5hbWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmVzdGF1cmFudD8uaWQgfHwgcmVzdGF1cmFudD8uX2lkfT57cmVzdGF1cmFudD8ubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjU1ODoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHN0eWxlPXt7IG1hcmdpbjogJzAnLCBmb250U2l6ZTogJzEycHgnLCBjb2xvcjogJyM2NjYnIH19IGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiYWRkcmVzc1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyZXN0YXVyYW50Py5pZCB8fCByZXN0YXVyYW50Py5faWR9PntyZXN0YXVyYW50Py5hZGRyZXNzfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo1NTk6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBzdHlsZT17eyBtYXJnaW46ICcwJywgZm9udFNpemU6ICcxMnB4JywgY29sb3I6ICcjNjY2JyB9fSBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInBob25lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3Jlc3RhdXJhbnQ/LmlkIHx8IHJlc3RhdXJhbnQ/Ll9pZH0+UGhvbmU6IHtyZXN0YXVyYW50Py5waG9uZX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo1NjI6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBzdHlsZT17eyBib3JkZXJUb3A6ICcycHggZGFzaGVkICMwMDAnLCBib3JkZXJCb3R0b206ICcycHggZGFzaGVkICMwMDAnLCBwYWRkaW5nOiAnMTBweCAwJywgbWFyZ2luQm90dG9tOiAnMTBweCcgfX0+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NTYzOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgc3R5bGU9e3sgbWFyZ2luOiAnNXB4IDAnLCBmb250U2l6ZTogJzE0cHgnIH19IGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwib3JkZXJfbnVtYmVyXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3NlbGVjdGVkT3JkZXI/LmlkIHx8IHNlbGVjdGVkT3JkZXI/Ll9pZH0+PHN0cm9uZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo1NjM6NjVcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+T3JkZXIgIzo8L3N0cm9uZz4ge3NlbGVjdGVkT3JkZXIub3JkZXJfbnVtYmVyfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo1NjQ6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBzdHlsZT17eyBtYXJnaW46ICc1cHggMCcsIGZvbnRTaXplOiAnMTRweCcgfX0+PHN0cm9uZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo1NjQ6NjVcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+RGF0ZTo8L3N0cm9uZz4ge25ldyBEYXRlKHNlbGVjdGVkT3JkZXIuY3JlYXRlZF9kYXRlKS50b0xvY2FsZVN0cmluZygpfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo1NjU6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBzdHlsZT17eyBtYXJnaW46ICc1cHggMCcsIGZvbnRTaXplOiAnMTRweCcgfX0+PHN0cm9uZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo1NjU6NjVcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+VGFibGU6PC9zdHJvbmc+IHtzZWxlY3RlZE9yZGVyLnRhYmxlX251bWJlciB8fCAnVGFrZWF3YXknfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo1NjY6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBzdHlsZT17eyBtYXJnaW46ICc1cHggMCcsIGZvbnRTaXplOiAnMTRweCcgfX0gZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJjdXN0b21lcl9uYW1lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3NlbGVjdGVkT3JkZXI/LmlkIHx8IHNlbGVjdGVkT3JkZXI/Ll9pZH0+PHN0cm9uZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo1NjY6NjVcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+Q3VzdG9tZXI6PC9zdHJvbmc+IHtzZWxlY3RlZE9yZGVyLmN1c3RvbWVyX25hbWV9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8dGFibGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NTY5OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgbWFyZ2luQm90dG9tOiAnMTBweCcgfX0+XG4gICAgICAgICAgICAgICAgPHRoZWFkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjU3MDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgPHRyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjU3MToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjMDAwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjU3MjoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBwYWRkaW5nOiAnNXB4IDAnLCBmb250U2l6ZTogJzEycHgnIH19Pkl0ZW08L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NTczOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgcGFkZGluZzogJzVweCAwJywgZm9udFNpemU6ICcxMnB4JyB9fT5RdHk8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NTc0OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCBwYWRkaW5nOiAnNXB4IDAnLCBmb250U2l6ZTogJzEycHgnIH19PkFtb3VudDwvdGg+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjU3NzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkT3JkZXIuaXRlbXM/Lm1hcCgoaXRlbSwgaSkgPT5cbiAgICAgICAgICAgICAgICA8dHIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NTc5OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtpfSBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aXRlbT8uW1wiZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWRcIl19PlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo1ODA6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBzdHlsZT17eyBwYWRkaW5nOiAnNXB4IDAnLCBmb250U2l6ZTogJzEycHgnIH19IGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwibmFtZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtpdGVtPy5pZCB8fCBpdGVtPy5faWR9PntpdGVtLm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NTgxOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgcGFkZGluZzogJzVweCAwJywgZm9udFNpemU6ICcxMnB4JyB9fSBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInF1YW50aXR5XCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2l0ZW0/LmlkIHx8IGl0ZW0/Ll9pZH0+e2l0ZW0ucXVhbnRpdHl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NTgyOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCBwYWRkaW5nOiAnNXB4IDAnLCBmb250U2l6ZTogJzEycHgnIH19IGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidG90YWxfcHJpY2VcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aXRlbT8uaWQgfHwgaXRlbT8uX2lkfT7igrl7aXRlbS50b3RhbF9wcmljZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjU4ODoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHN0eWxlPXt7IGJvcmRlclRvcDogJzFweCBzb2xpZCAjMDAwJywgcGFkZGluZ1RvcDogJzEwcHgnIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NTg5OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBtYXJnaW5Cb3R0b206ICc1cHgnIH19PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NTkwOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JyB9fT5TdWJ0b3RhbDo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo1OTE6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnIH19IGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwic3VidG90YWxcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2VsZWN0ZWRPcmRlcj8uaWQgfHwgc2VsZWN0ZWRPcmRlcj8uX2lkfT7igrl7c2VsZWN0ZWRPcmRlci5zdWJ0b3RhbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo1OTM6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIG1hcmdpbkJvdHRvbTogJzVweCcgfX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo1OTQ6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnIH19PlRheCAoe3Jlc3RhdXJhbnQ/LnNldHRpbmdzPy50YXhfcmF0ZSB8fCA1fSUpOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjU5NToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcgfX0gZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJ0YXhfYW1vdW50XCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3NlbGVjdGVkT3JkZXI/LmlkIHx8IHNlbGVjdGVkT3JkZXI/Ll9pZH0+4oK5e3NlbGVjdGVkT3JkZXIudGF4X2Ftb3VudH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3NlbGVjdGVkT3JkZXIuc2VydmljZV9jaGFyZ2UgPiAwICYmXG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NTk4OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBtYXJnaW5Cb3R0b206ICc1cHgnIH19PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo1OTk6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnIH19PlNlcnZpY2UgQ2hhcmdlOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PcmRlcnM6NjAwOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JyB9fSBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInNlcnZpY2VfY2hhcmdlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3NlbGVjdGVkT3JkZXI/LmlkIHx8IHNlbGVjdGVkT3JkZXI/Ll9pZH0+4oK5e3NlbGVjdGVkT3JkZXIuc2VydmljZV9jaGFyZ2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjYwMzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYm9yZGVyVG9wOiAnMnB4IHNvbGlkICMwMDAnLCBwYWRkaW5nVG9wOiAnNXB4JywgbWFyZ2luVG9wOiAnNXB4JyB9fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjYwNDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHN0eWxlPXt7IGZvbnRTaXplOiAnMTZweCcsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5Ub3RhbDo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo2MDU6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBzdHlsZT17eyBmb250U2l6ZTogJzE2cHgnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0gZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJ0b3RhbF9hbW91bnRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2VsZWN0ZWRPcmRlcj8uaWQgfHwgc2VsZWN0ZWRPcmRlcj8uX2lkfT7igrl7c2VsZWN0ZWRPcmRlci50b3RhbF9hbW91bnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjYwOToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpblRvcDogJzIwcHgnLCBmb250U2l6ZTogJzEycHgnLCBjb2xvcjogJyM2NjYnIH19PlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjYxMDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHN0eWxlPXt7IG1hcmdpbjogJzVweCAwJyB9fT5UaGFuayB5b3UgZm9yIGRpbmluZyB3aXRoIHVzITwvcD5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo2MTE6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBzdHlsZT17eyBtYXJnaW46ICc1cHggMCcgfX0+VmlzaXQgYWdhaW4gc29vbjwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+KTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcmRlcnMoKSB7XG4gIHJldHVybiAoXG4gICAgPERhc2hib2FyZExheW91dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09yZGVyczo2MjM6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgIDxPcmRlcnNDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT3JkZXJzOjYyNDo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+XG4gICAgPC9EYXNoYm9hcmRMYXlvdXQ+KTtcblxufSJdLCJmaWxlIjoiL2FwcC9zcmMvcGFnZXMvT3JkZXJzLmpzeCJ9