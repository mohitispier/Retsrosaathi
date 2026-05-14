import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/dashboard/OrdersSection.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/dashboard/OrdersSection.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { motion, AnimatePresence } from "/node_modules/.vite/deps/framer-motion.js?v=79425e35";
import { base44 } from "/src/api/base44Client.js";
import {
  Search,
  Clock,
  CheckCircle2,
  ChefHat,
  Bell,
  Utensils,
  Eye,
  XCircle,
  CreditCard,
  Printer,
  Banknote
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "/src/components/ui/select.jsx";
const statusConfig = {
  pending: { color: "bg-yellow-100 text-yellow-700", icon: Clock, next: "confirmed" },
  confirmed: { color: "bg-blue-100 text-blue-700", icon: CheckCircle2, next: "preparing" },
  preparing: { color: "bg-purple-100 text-purple-700", icon: ChefHat, next: "ready" },
  ready: { color: "bg-green-100 text-green-700", icon: Bell, next: "out_for_delivery" },
  out_for_delivery: { color: "bg-indigo-100 text-indigo-700", icon: Bell, next: "delivered" },
  delivered: { color: "bg-emerald-100 text-emerald-700", icon: CheckCircle2, next: "completed" },
  served: { color: "bg-emerald-100 text-emerald-700", icon: Utensils, next: "completed" },
  completed: { color: "bg-gray-100 text-gray-700", icon: CheckCircle2, next: null },
  cancelled: { color: "bg-red-100 text-red-700", icon: XCircle, next: null }
};
export default function OrdersSection({ restaurant, orders, reloadOrders }) {
  _s();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [liveOrders, setLiveOrders] = useState(orders);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cash");
  const [showAssignRiderDialog, setShowAssignRiderDialog] = useState(false);
  const [riders, setRiders] = useState([]);
  const [selectedRider, setSelectedRider] = useState(null);
  useEffect(() => {
    setLiveOrders(orders);
    loadRiders();
    const unsubscribe = base44.entities.Order.subscribe((event) => {
      if (event.data.restaurant_id === restaurant.restaurant_id) {
        if (event.type === "create") {
          setLiveOrders((prev) => [event.data, ...prev]);
        } else if (event.type === "update") {
          setLiveOrders((prev) => prev.map((o) => o.id === event.data.id ? event.data : o));
        } else if (event.type === "delete") {
          setLiveOrders((prev) => prev.filter((o) => o.id !== event.data.id));
        }
      }
    });
    return unsubscribe;
  }, [orders, restaurant.restaurant_id]);
  const loadRiders = async () => {
    try {
      const ridersList = await base44.entities.DeliveryRider.filter({
        restaurant_id: restaurant.restaurant_id,
        is_active: true
      });
      setRiders(ridersList);
    } catch (e) {
      console.log("Failed to load riders", e);
    }
  };
  const filteredOrders = liveOrders.filter((order) => {
    const matchesSearch = order.order_number?.toLowerCase().includes(searchQuery.toLowerCase()) || order.customer_name?.toLowerCase().includes(searchQuery.toLowerCase()) || order.table_number?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
  const updateOrderStatus = async (orderId, newStatus) => {
    const order = liveOrders.find((o) => o.id === orderId);
    if (order?.order_type === "delivery" && newStatus === "out_for_delivery") {
      setSelectedOrder(order);
      setShowAssignRiderDialog(true);
      return;
    }
    await base44.entities.Order.update(orderId, { status: newStatus });
    if (selectedOrder?.id === orderId) {
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }
  };
  const handleAssignRider = async () => {
    if (!selectedRider || !selectedOrder) return;
    await base44.entities.Order.update(selectedOrder.id, {
      status: "out_for_delivery",
      assigned_rider_id: selectedRider.id,
      assigned_rider_name: selectedRider.name,
      assigned_rider_phone: selectedRider.phone
    });
    await base44.entities.DeliveryRider.update(selectedRider.id, {
      current_order_id: selectedOrder.id,
      is_available: false
    });
    setShowAssignRiderDialog(false);
    setSelectedRider(null);
    if (selectedOrder?.id) {
      setSelectedOrder({
        ...selectedOrder,
        status: "out_for_delivery",
        assigned_rider_id: selectedRider.id,
        assigned_rider_name: selectedRider.name,
        assigned_rider_phone: selectedRider.phone
      });
    }
  };
  const handleCollectPayment = async () => {
    if (!selectedOrder) return;
    await base44.entities.Order.update(selectedOrder.id, {
      payment_status: "paid",
      payment_method: selectedPaymentMethod
    });
    const updatedOrder = {
      ...selectedOrder,
      payment_status: "paid",
      payment_method: selectedPaymentMethod
    };
    setSelectedOrder(updatedOrder);
    setShowPaymentDialog(false);
    printBill(updatedOrder);
  };
  const printBill = (order) => {
    const paymentMethodLabel = {
      "cash": "Cash",
      "online": "Online Payment",
      "upi": "UPI",
      "card": "Card"
    };
    const billContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          @media print {
            body { margin: 0; padding: 0; }
          }
          body { font-family: 'Courier New', monospace; padding: 20px; max-width: 300px; margin: 0 auto; }
          .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 20px; }
          .header h1 { margin: 0; font-size: 20px; }
          .header p { margin: 5px 0; font-size: 11px; }
          .order-info { margin-bottom: 15px; font-size: 12px; }
          .order-info p { margin: 3px 0; }
          .items { border-top: 1px dashed #000; border-bottom: 1px dashed #000; padding: 10px 0; }
          .items h3 { margin: 0 0 8px 0; font-size: 13px; }
          .item { display: flex; justify-content: space-between; margin: 5px 0; font-size: 12px; }
          .totals { margin-top: 10px; font-size: 12px; }
          .total-row { display: flex; justify-content: space-between; margin: 4px 0; }
          .total-row.final { font-weight: bold; font-size: 16px; border-top: 2px solid #000; padding-top: 8px; margin-top: 8px; }
          .payment-info { background: #f5f5f5; padding: 8px; border-radius: 4px; margin: 15px 0; font-size: 12px; }
          .payment-info p { margin: 3px 0; }
          .footer { text-align: center; margin-top: 15px; font-size: 11px; border-top: 1px dashed #000; padding-top: 10px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>${restaurant.name}</h1>
          <p>${restaurant.address || restaurant.city}</p>
          <p>Phone: ${restaurant.phone}</p>
        </div>
        
        <div class="order-info">
          <p><strong>Order #:</strong> ${order.order_number}</p>
          <p><strong>Date:</strong> ${(/* @__PURE__ */ new Date()).toLocaleString()}</p>
          <p><strong>Type:</strong> ${order.order_type?.replace("_", " ").toUpperCase() || "DINE IN"}</p>
          ${order.table_number ? `<p><strong>Table:</strong> ${order.table_number}</p>` : ""}
          ${order.customer_name ? `<p><strong>Customer:</strong> ${order.customer_name}</p>` : ""}
          ${order.customer_phone ? `<p><strong>Phone:</strong> ${order.customer_phone}</p>` : ""}
        </div>
        
        <div class="items">
          <h3>Items:</h3>
          ${order.items?.map((item) => `
            <div class="item">
              <span>${item.quantity}x ${item.name}</span>
              <span>₹${item.total_price}</span>
            </div>
          `).join("") || ""}
        </div>
        
        <div class="totals">
          <div class="total-row">
            <span>Subtotal:</span>
            <span>₹${order.subtotal || 0}</span>
          </div>
          <div class="total-row">
            <span>Tax:</span>
            <span>₹${order.tax_amount || 0}</span>
          </div>
          ${order.service_charge > 0 ? `
          <div class="total-row">
            <span>Delivery Fee:</span>
            <span>₹${order.service_charge}</span>
          </div>
          ` : ""}
          <div class="total-row final">
            <span>Total:</span>
            <span>₹${order.total_amount}</span>
          </div>
        </div>

        <div class="payment-info">
          <p><strong>Payment Method:</strong> ${paymentMethodLabel[order.payment_method] || order.payment_method}</p>
          <p><strong>Payment Status:</strong> ${order.payment_status === "paid" ? "PAID ✓" : "PENDING"}</p>
          ${order.payment_transaction_id ? `<p><strong>Txn ID:</strong> ${order.payment_transaction_id}</p>` : ""}
        </div>
        
        <div class="footer">
          <p>Thank you for your order!</p>
          <p>Powered by AxoraDigi</p>
        </div>
      </body>
      </html>
    `;
    const printWindow = window.open("", "", "height=800,width=400");
    printWindow.document.write(billContent);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.print();
    }, 250);
  };
  const activeOrders = liveOrders.filter((o) => ["pending", "confirmed", "preparing", "ready"].includes(o.status));
  const ordersByStatus = activeOrders.reduce((acc, order) => {
    if (!acc[order.status]) acc[order.status] = [];
    acc[order.status].push(order);
    return acc;
  }, {});
  return /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      "data-source-location": "components/dashboard/OrdersSection:268:4",
      "data-dynamic-content": "true",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "space-y-6",
      children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:275:6", "data-dynamic-content": "true", className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:276:8", "data-dynamic-content": "false", className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "components/dashboard/OrdersSection:277:10", "data-dynamic-content": "false", className: "text-xl font-bold text-gray-900", children: "Active Orders" }, void 0, false, {
              fileName: "/app/src/components/dashboard/OrdersSection.jsx",
              lineNumber: 296,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:278:10", "data-dynamic-content": "false", className: "flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium", children: [
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/OrdersSection:279:12", "data-dynamic-content": "false", className: "w-2 h-2 bg-green-500 rounded-full animate-pulse" }, void 0, false, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 298,
                columnNumber: 13
              }, this),
              "Live Updates"
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/OrdersSection.jsx",
              lineNumber: 297,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/OrdersSection.jsx",
            lineNumber: 295,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/OrdersSection:283:8", "data-dynamic-content": "true", className: "text-gray-500", children: [
            activeOrders.length,
            " active orders"
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/OrdersSection.jsx",
            lineNumber: 302,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/OrdersSection.jsx",
          lineNumber: 294,
          columnNumber: 7
        }, this),
        activeOrders.length > 0 && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:288:8", "data-dynamic-content": "true", className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: ["pending", "confirmed", "preparing", "ready"].map(
          (status, __arrIdx__) => /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/OrdersSection:290:12", "data-dynamic-content": "true", className: "bg-gray-50", "data-arr-index": __arrIdx__, children: [
            /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "components/dashboard/OrdersSection:291:14", "data-dynamic-content": "true", className: "pb-2", "data-arr-index": __arrIdx__, children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "components/dashboard/OrdersSection:292:16", "data-dynamic-content": "true", className: "text-sm font-medium flex items-center justify-between", "data-arr-index": __arrIdx__, children: [
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/OrdersSection:293:18", "data-dynamic-content": "true", className: "capitalize", children: status }, void 0, false, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 312,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "components/dashboard/OrdersSection:294:18", "data-dynamic-content": "true", variant: "secondary", children: ordersByStatus[status]?.length || 0 }, void 0, false, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 313,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/OrdersSection.jsx",
              lineNumber: 311,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/OrdersSection.jsx",
              lineNumber: 310,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/OrdersSection:297:14", "data-dynamic-content": "true", className: "space-y-3", "data-arr-index": __arrIdx__, children: [
              /* @__PURE__ */ jsxDEV(AnimatePresence, { "data-source-location": "components/dashboard/OrdersSection:298:16", "data-dynamic-content": "true", "data-arr-index": __arrIdx__, children: ordersByStatus[status]?.map(
                (order) => /* @__PURE__ */ jsxDEV(
                  motion.div,
                  {
                    "data-source-location": "components/dashboard/OrdersSection:300:20",
                    "data-dynamic-content": "true",
                    layout: true,
                    initial: { opacity: 0, scale: 0.9 },
                    animate: { opacity: 1, scale: 1 },
                    exit: { opacity: 0, scale: 0.9 },
                    className: "bg-white rounded-lg p-3 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow",
                    onClick: () => setSelectedOrder(order),
                    "data-collection-item-id": order?.id,
                    children: [
                      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:309:22", "data-dynamic-content": "true", className: "flex items-center justify-between mb-2", children: [
                        /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/OrdersSection:310:24", "data-dynamic-content": "true", className: "font-semibold text-sm", "data-collection-item-field": "order_number", "data-collection-item-id": order?.id, children: [
                          "#",
                          order.order_number
                        ] }, void 0, true, {
                          fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                          lineNumber: 329,
                          columnNumber: 25
                        }, this),
                        /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/OrdersSection:311:24", "data-dynamic-content": "true", className: "text-xs text-gray-500", children: order.order_type === "delivery" ? "🚚 Delivery" : order.table_number ? `Table ${order.table_number}` : "Takeaway" }, void 0, false, {
                          fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                          lineNumber: 330,
                          columnNumber: 25
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                        lineNumber: 328,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/OrdersSection:315:22", "data-dynamic-content": "true", className: "text-xs text-gray-500 mb-2", "data-collection-item-field": "total_amount", "data-collection-item-id": order?.id, children: [
                        order.items?.length || 0,
                        " items · ₹",
                        order.total_amount
                      ] }, void 0, true, {
                        fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                        lineNumber: 334,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:318:22", "data-dynamic-content": "true", className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/OrdersSection:319:24", "data-dynamic-content": "true", className: "text-xs text-gray-400", children: new Date(order.created_date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }, void 0, false, {
                          fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                          lineNumber: 338,
                          columnNumber: 25
                        }, this),
                        statusConfig[status].next && /* @__PURE__ */ jsxDEV(
                          Button,
                          {
                            "data-source-location": "components/dashboard/OrdersSection:323:26",
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
                            fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                            lineNumber: 342,
                            columnNumber: 19
                          },
                          this
                        )
                      ] }, void 0, true, {
                        fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                        lineNumber: 337,
                        columnNumber: 23
                      }, this)
                    ]
                  },
                  order.id,
                  true,
                  {
                    fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                    lineNumber: 319,
                    columnNumber: 15
                  },
                  this
                )
              ) }, void 0, false, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 317,
                columnNumber: 17
              }, this),
              !ordersByStatus[status]?.length && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:340:18", "data-dynamic-content": "false", className: "text-center py-4 text-gray-400 text-sm", children: "No orders" }, void 0, false, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 359,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/OrdersSection.jsx",
              lineNumber: 316,
              columnNumber: 15
            }, this)
          ] }, status, true, {
            fileName: "/app/src/components/dashboard/OrdersSection.jsx",
            lineNumber: 309,
            columnNumber: 9
          }, this)
        ) }, void 0, false, {
          fileName: "/app/src/components/dashboard/OrdersSection.jsx",
          lineNumber: 307,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/OrdersSection:351:6", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "components/dashboard/OrdersSection:352:8", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:353:10", "data-dynamic-content": "true", className: "flex flex-col md:flex-row md:items-center gap-4", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:354:12", "data-dynamic-content": "true", className: "flex-1 relative", children: [
              /* @__PURE__ */ jsxDEV(Search, { "data-source-location": "components/dashboard/OrdersSection:355:14", "data-dynamic-content": "false", className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }, void 0, false, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 374,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV(
                Input,
                {
                  "data-source-location": "components/dashboard/OrdersSection:356:14",
                  "data-dynamic-content": "true",
                  placeholder: "Search orders...",
                  value: searchQuery,
                  onChange: (e) => setSearchQuery(e.target.value),
                  className: "pl-9"
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 375,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/OrdersSection.jsx",
              lineNumber: 373,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(Select, { "data-source-location": "components/dashboard/OrdersSection:363:12", "data-dynamic-content": "true", value: statusFilter, onValueChange: setStatusFilter, children: [
              /* @__PURE__ */ jsxDEV(SelectTrigger, { "data-source-location": "components/dashboard/OrdersSection:364:14", "data-dynamic-content": "false", className: "w-40", children: /* @__PURE__ */ jsxDEV(SelectValue, { "data-source-location": "components/dashboard/OrdersSection:365:16", "data-dynamic-content": "false" }, void 0, false, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 384,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 383,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV(SelectContent, { "data-source-location": "components/dashboard/OrdersSection:367:14", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "components/dashboard/OrdersSection:368:16", "data-dynamic-content": "false", value: "all", children: "All Status" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 387,
                  columnNumber: 17
                }, this),
                Object.keys(statusConfig).map(
                  (status) => /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "components/dashboard/OrdersSection:370:18", "data-dynamic-content": "true", value: status, className: "capitalize", "data-collection-item-field": "status", children: status }, status, false, {
                    fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                    lineNumber: 389,
                    columnNumber: 17
                  }, this)
                )
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 386,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/OrdersSection.jsx",
              lineNumber: 382,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/OrdersSection.jsx",
            lineNumber: 372,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/OrdersSection.jsx",
            lineNumber: 371,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/OrdersSection:378:8", "data-dynamic-content": "true", children: filteredOrders.length === 0 ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:380:12", "data-dynamic-content": "false", className: "text-center py-12 text-gray-500", children: [
            /* @__PURE__ */ jsxDEV(Clock, { "data-source-location": "components/dashboard/OrdersSection:381:14", "data-dynamic-content": "false", className: "w-12 h-12 mx-auto mb-3 text-gray-300" }, void 0, false, {
              fileName: "/app/src/components/dashboard/OrdersSection.jsx",
              lineNumber: 400,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/OrdersSection:382:14", "data-dynamic-content": "false", children: "No orders found" }, void 0, false, {
              fileName: "/app/src/components/dashboard/OrdersSection.jsx",
              lineNumber: 401,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/OrdersSection.jsx",
            lineNumber: 399,
            columnNumber: 11
          }, this) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:385:12", "data-dynamic-content": "true", className: "overflow-x-auto", children: /* @__PURE__ */ jsxDEV("table", { "data-source-location": "components/dashboard/OrdersSection:386:14", "data-dynamic-content": "true", className: "w-full", children: [
            /* @__PURE__ */ jsxDEV("thead", { "data-source-location": "components/dashboard/OrdersSection:387:16", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV("tr", { "data-source-location": "components/dashboard/OrdersSection:388:18", "data-dynamic-content": "false", className: "text-left text-sm text-gray-500 border-b", children: [
              /* @__PURE__ */ jsxDEV("th", { "data-source-location": "components/dashboard/OrdersSection:389:20", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Order #" }, void 0, false, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 408,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("th", { "data-source-location": "components/dashboard/OrdersSection:390:20", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Customer" }, void 0, false, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 409,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("th", { "data-source-location": "components/dashboard/OrdersSection:391:20", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Table" }, void 0, false, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 410,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("th", { "data-source-location": "components/dashboard/OrdersSection:392:20", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Items" }, void 0, false, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 411,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("th", { "data-source-location": "components/dashboard/OrdersSection:393:20", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Amount" }, void 0, false, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 412,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("th", { "data-source-location": "components/dashboard/OrdersSection:394:20", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Payment" }, void 0, false, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 413,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("th", { "data-source-location": "components/dashboard/OrdersSection:395:20", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Status" }, void 0, false, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 414,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("th", { "data-source-location": "components/dashboard/OrdersSection:396:20", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Time" }, void 0, false, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 415,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("th", { "data-source-location": "components/dashboard/OrdersSection:397:20", "data-dynamic-content": "false", className: "pb-3 font-medium" }, void 0, false, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 416,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/OrdersSection.jsx",
              lineNumber: 407,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/OrdersSection.jsx",
              lineNumber: 406,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("tbody", { "data-source-location": "components/dashboard/OrdersSection:400:16", "data-dynamic-content": "true", className: "divide-y", children: filteredOrders.map((order) => {
              const StatusIcon = statusConfig[order.status]?.icon || Clock;
              return /* @__PURE__ */ jsxDEV("tr", { "data-source-location": "components/dashboard/OrdersSection:404:22", "data-dynamic-content": "true", className: "text-sm hover:bg-gray-50", "data-collection-item-id": order?.id, children: [
                /* @__PURE__ */ jsxDEV("td", { "data-source-location": "components/dashboard/OrdersSection:405:24", "data-dynamic-content": "true", className: "py-3 font-medium", "data-collection-item-field": "order_number", "data-collection-item-id": order?.id, children: order.order_number }, void 0, false, {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 424,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("td", { "data-source-location": "components/dashboard/OrdersSection:406:24", "data-dynamic-content": "true", className: "py-3", children: order.customer_name || "Guest" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 425,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("td", { "data-source-location": "components/dashboard/OrdersSection:407:24", "data-dynamic-content": "true", className: "py-3", children: order.order_type === "delivery" ? "🚚 Delivery" : order.table_number ? `Table ${order.table_number}` : "Takeaway" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 426,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("td", { "data-source-location": "components/dashboard/OrdersSection:410:24", "data-dynamic-content": "true", className: "py-3", children: [
                  order.items?.length || 0,
                  " items"
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 429,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("td", { "data-source-location": "components/dashboard/OrdersSection:411:24", "data-dynamic-content": "true", className: "py-3 font-medium", children: [
                  "₹",
                  order.total_amount?.toLocaleString()
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 430,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("td", { "data-source-location": "components/dashboard/OrdersSection:412:24", "data-dynamic-content": "true", className: "py-3", children: /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "components/dashboard/OrdersSection:413:26", "data-dynamic-content": "true", className: order.payment_status === "paid" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700", children: order.payment_status === "paid" ? "Paid" : "Unpaid" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 432,
                  columnNumber: 27
                }, this) }, void 0, false, {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 431,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("td", { "data-source-location": "components/dashboard/OrdersSection:417:24", "data-dynamic-content": "true", className: "py-3", children: /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "components/dashboard/OrdersSection:418:26", "data-dynamic-content": "true", className: statusConfig[order.status]?.color, "data-collection-item-field": "status", "data-collection-item-id": order?.id, children: [
                  /* @__PURE__ */ jsxDEV(StatusIcon, { "data-source-location": "components/dashboard/OrdersSection:419:28", "data-dynamic-content": "false", className: "w-3 h-3 mr-1" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                    lineNumber: 438,
                    columnNumber: 29
                  }, this),
                  order.status
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 437,
                  columnNumber: 27
                }, this) }, void 0, false, {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 436,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("td", { "data-source-location": "components/dashboard/OrdersSection:423:24", "data-dynamic-content": "true", className: "py-3 text-gray-500", children: new Date(order.created_date).toLocaleString([], {
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit"
                }) }, void 0, false, {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 442,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("td", { "data-source-location": "components/dashboard/OrdersSection:431:24", "data-dynamic-content": "true", className: "py-3", children: /* @__PURE__ */ jsxDEV(
                  Button,
                  {
                    "data-source-location": "components/dashboard/OrdersSection:432:26",
                    "data-dynamic-content": "true",
                    variant: "ghost",
                    size: "sm",
                    onClick: () => setSelectedOrder(order),
                    children: /* @__PURE__ */ jsxDEV(Eye, { "data-source-location": "components/dashboard/OrdersSection:437:28", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                      fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                      lineNumber: 456,
                      columnNumber: 29
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                    lineNumber: 451,
                    columnNumber: 27
                  },
                  this
                ) }, void 0, false, {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 450,
                  columnNumber: 25
                }, this)
              ] }, order.id, true, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 423,
                columnNumber: 21
              }, this);
            }) }, void 0, false, {
              fileName: "/app/src/components/dashboard/OrdersSection.jsx",
              lineNumber: 419,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/OrdersSection.jsx",
            lineNumber: 405,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/OrdersSection.jsx",
            lineNumber: 404,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/OrdersSection.jsx",
            lineNumber: 397,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/OrdersSection.jsx",
          lineNumber: 370,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(Dialog, { "data-source-location": "components/dashboard/OrdersSection:451:6", "data-dynamic-content": "true", open: !!selectedOrder, onOpenChange: () => setSelectedOrder(null), children: /* @__PURE__ */ jsxDEV(DialogContent, { "data-source-location": "components/dashboard/OrdersSection:452:8", "data-dynamic-content": "true", className: "max-w-lg", children: [
          /* @__PURE__ */ jsxDEV(DialogHeader, { "data-source-location": "components/dashboard/OrdersSection:453:10", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(DialogTitle, { "data-source-location": "components/dashboard/OrdersSection:454:12", "data-dynamic-content": "true", "data-collection-item-field": "order_number", "data-collection-item-id": selectedOrder?.id || selectedOrder?._id, children: [
            "Order #",
            selectedOrder?.order_number
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/OrdersSection.jsx",
            lineNumber: 473,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/OrdersSection.jsx",
            lineNumber: 472,
            columnNumber: 11
          }, this),
          selectedOrder && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:458:12", "data-dynamic-content": "true", className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:459:14", "data-dynamic-content": "true", className: "grid grid-cols-2 gap-4 text-sm", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:460:16", "data-dynamic-content": "true", "data-collection-item-field": "customer_phone", "data-collection-item-id": selectedOrder?.id || selectedOrder?._id, children: [
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/OrdersSection:461:18", "data-dynamic-content": "false", className: "text-gray-500", children: "Customer" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 480,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/OrdersSection:462:18", "data-dynamic-content": "true", className: "font-medium", children: selectedOrder.customer_name || "Guest" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 481,
                  columnNumber: 19
                }, this),
                selectedOrder.customer_phone && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/OrdersSection:464:20", "data-dynamic-content": "true", className: "text-xs text-gray-500", "data-collection-item-field": "customer_phone", "data-collection-item-id": selectedOrder?.id || selectedOrder?._id, children: selectedOrder.customer_phone }, void 0, false, {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 483,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 479,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:467:16", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/OrdersSection:468:18", "data-dynamic-content": "false", className: "text-gray-500", children: "Order Type" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 487,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/OrdersSection:469:18", "data-dynamic-content": "true", className: "font-medium", children: selectedOrder.order_type === "delivery" ? "🚚 Delivery" : selectedOrder.table_number ? `Table ${selectedOrder.table_number}` : "Takeaway" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 488,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 486,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:473:16", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/OrdersSection:474:18", "data-dynamic-content": "false", className: "text-gray-500", children: "Payment Status" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 493,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "components/dashboard/OrdersSection:475:18", "data-dynamic-content": "true", className: selectedOrder.payment_status === "paid" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700", children: selectedOrder.payment_status === "paid" ? "Paid" : "Unpaid" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 494,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 492,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:479:16", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/OrdersSection:480:18", "data-dynamic-content": "false", className: "text-gray-500", children: "Payment Method" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 499,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/OrdersSection:481:18", "data-dynamic-content": "true", className: "font-medium capitalize", children: selectedOrder.payment_method || "Cash" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 500,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 498,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/OrdersSection.jsx",
              lineNumber: 478,
              columnNumber: 15
            }, this),
            selectedOrder.order_type === "delivery" && selectedOrder.delivery_address && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:487:16", "data-dynamic-content": "true", className: "bg-blue-50 border border-blue-200 rounded-lg p-3", "data-collection-item-field": "delivery_location", "data-collection-item-id": selectedOrder?.id || selectedOrder?._id, children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/OrdersSection:488:18", "data-dynamic-content": "false", className: "text-xs font-medium text-blue-700 mb-1", children: "📍 Delivery Address:" }, void 0, false, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 507,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/OrdersSection:489:18", "data-dynamic-content": "true", className: "text-sm text-gray-700", "data-collection-item-field": "delivery_address", "data-collection-item-id": selectedOrder?.id || selectedOrder?._id, children: selectedOrder.delivery_address }, void 0, false, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 508,
                columnNumber: 19
              }, this),
              selectedOrder.delivery_location && /* @__PURE__ */ jsxDEV(
                "a",
                {
                  "data-source-location": "components/dashboard/OrdersSection:491:20",
                  "data-dynamic-content": "true",
                  href: `https://www.google.com/maps?q=${selectedOrder.delivery_location.latitude},${selectedOrder.delivery_location.longitude}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-xs text-blue-600 hover:underline mt-2 inline-block",
                  children: "View on Map →"
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 510,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/OrdersSection.jsx",
              lineNumber: 506,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:503:14", "data-dynamic-content": "true", className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/OrdersSection:504:16", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Status:" }, void 0, false, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 523,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(
                Select,
                {
                  "data-source-location": "components/dashboard/OrdersSection:505:16",
                  "data-dynamic-content": "true",
                  value: selectedOrder.status,
                  onValueChange: (value) => updateOrderStatus(selectedOrder.id, value),
                  children: [
                    /* @__PURE__ */ jsxDEV(SelectTrigger, { "data-source-location": "components/dashboard/OrdersSection:509:18", "data-dynamic-content": "false", className: "w-40", children: /* @__PURE__ */ jsxDEV(SelectValue, { "data-source-location": "components/dashboard/OrdersSection:510:20", "data-dynamic-content": "false" }, void 0, false, {
                      fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                      lineNumber: 529,
                      columnNumber: 21
                    }, this) }, void 0, false, {
                      fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                      lineNumber: 528,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV(SelectContent, { "data-source-location": "components/dashboard/OrdersSection:512:18", "data-dynamic-content": "true", children: Object.keys(statusConfig).map(
                      (status) => /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "components/dashboard/OrdersSection:514:22", "data-dynamic-content": "true", value: status, className: "capitalize", "data-collection-item-field": "status", children: status }, status, false, {
                        fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                        lineNumber: 533,
                        columnNumber: 19
                      }, this)
                    ) }, void 0, false, {
                      fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                      lineNumber: 531,
                      columnNumber: 19
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 524,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/OrdersSection.jsx",
              lineNumber: 522,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:522:14", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("h4", { "data-source-location": "components/dashboard/OrdersSection:523:16", "data-dynamic-content": "false", className: "font-medium mb-2", children: "Order Items" }, void 0, false, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 542,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:524:16", "data-dynamic-content": "true", className: "space-y-2 bg-gray-50 rounded-lg p-3", children: selectedOrder.items?.map(
                (item, i) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:526:20", "data-dynamic-content": "true", className: "flex justify-between text-sm", "data-collection-item-id": item?.["data-collection-item-id"], children: [
                  /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/OrdersSection:527:22", "data-dynamic-content": "true", "data-collection-item-field": "quantity", "data-collection-item-id": item?.id || item?._id, children: [
                    item.quantity,
                    "x ",
                    item.name
                  ] }, void 0, true, {
                    fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                    lineNumber: 546,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/OrdersSection:528:22", "data-dynamic-content": "true", className: "font-medium", "data-collection-item-field": "total_price", "data-collection-item-id": item?.id || item?._id, children: [
                    "₹",
                    item.total_price
                  ] }, void 0, true, {
                    fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                    lineNumber: 547,
                    columnNumber: 23
                  }, this)
                ] }, i, true, {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 545,
                  columnNumber: 17
                }, this)
              ) }, void 0, false, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 543,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/OrdersSection.jsx",
              lineNumber: 541,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:534:14", "data-dynamic-content": "true", className: "border-t pt-3 space-y-1 text-sm", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:535:16", "data-dynamic-content": "true", className: "flex justify-between", children: [
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/OrdersSection:536:18", "data-dynamic-content": "false", children: "Subtotal" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 555,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/OrdersSection:537:18", "data-dynamic-content": "true", children: [
                  "₹",
                  selectedOrder.subtotal || 0
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 556,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 554,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:539:16", "data-dynamic-content": "true", className: "flex justify-between", children: [
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/OrdersSection:540:18", "data-dynamic-content": "false", children: "Tax" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 559,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/OrdersSection:541:18", "data-dynamic-content": "true", children: [
                  "₹",
                  selectedOrder.tax_amount || 0
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 560,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 558,
                columnNumber: 17
              }, this),
              selectedOrder.service_charge > 0 && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:544:18", "data-dynamic-content": "true", className: "flex justify-between", children: [
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/OrdersSection:545:20", "data-dynamic-content": "false", children: "Delivery Fee" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 564,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/OrdersSection:546:20", "data-dynamic-content": "true", "data-collection-item-field": "service_charge", "data-collection-item-id": selectedOrder?.id || selectedOrder?._id, children: [
                  "₹",
                  selectedOrder.service_charge
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 565,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 563,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:549:16", "data-dynamic-content": "true", className: "flex justify-between font-bold text-base border-t pt-2", children: [
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/OrdersSection:550:18", "data-dynamic-content": "false", children: "Total" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 569,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/OrdersSection:551:18", "data-dynamic-content": "true", "data-collection-item-field": "total_amount", "data-collection-item-id": selectedOrder?.id || selectedOrder?._id, children: [
                  "₹",
                  selectedOrder.total_amount
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 570,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 568,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/OrdersSection.jsx",
              lineNumber: 553,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:555:14", "data-dynamic-content": "true", className: "flex gap-2", children: [
              selectedOrder.payment_status !== "paid" && /* @__PURE__ */ jsxDEV(
                Button,
                {
                  "data-source-location": "components/dashboard/OrdersSection:557:18",
                  "data-dynamic-content": "true",
                  className: "flex-1 bg-green-600 hover:bg-green-700",
                  onClick: () => setShowPaymentDialog(true),
                  children: [
                    /* @__PURE__ */ jsxDEV(CreditCard, { "data-source-location": "components/dashboard/OrdersSection:561:20", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
                      fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                      lineNumber: 580,
                      columnNumber: 21
                    }, this),
                    "Collect Payment"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 576,
                  columnNumber: 15
                },
                this
              ),
              selectedOrder.order_type === "delivery" && selectedOrder.status === "ready" && !selectedOrder.assigned_rider_id && /* @__PURE__ */ jsxDEV(
                Button,
                {
                  "data-source-location": "components/dashboard/OrdersSection:566:18",
                  "data-dynamic-content": "true",
                  className: "flex-1 bg-indigo-600 hover:bg-indigo-700",
                  onClick: () => setShowAssignRiderDialog(true),
                  children: "🚚 Assign Rider"
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 585,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                Button,
                {
                  "data-source-location": "components/dashboard/OrdersSection:573:16",
                  "data-dynamic-content": "true",
                  variant: "outline",
                  className: "flex-1",
                  onClick: () => printBill(selectedOrder),
                  children: [
                    /* @__PURE__ */ jsxDEV(Printer, { "data-source-location": "components/dashboard/OrdersSection:578:18", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
                      fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                      lineNumber: 597,
                      columnNumber: 19
                    }, this),
                    "Print Bill"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 592,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/OrdersSection.jsx",
              lineNumber: 574,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/OrdersSection.jsx",
            lineNumber: 477,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/OrdersSection.jsx",
          lineNumber: 471,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "/app/src/components/dashboard/OrdersSection.jsx",
          lineNumber: 470,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(Dialog, { "data-source-location": "components/dashboard/OrdersSection:588:6", "data-dynamic-content": "true", open: showAssignRiderDialog, onOpenChange: setShowAssignRiderDialog, children: /* @__PURE__ */ jsxDEV(DialogContent, { "data-source-location": "components/dashboard/OrdersSection:589:8", "data-dynamic-content": "true", className: "max-w-md", children: [
          /* @__PURE__ */ jsxDEV(DialogHeader, { "data-source-location": "components/dashboard/OrdersSection:590:10", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(DialogTitle, { "data-source-location": "components/dashboard/OrdersSection:591:12", "data-dynamic-content": "false", children: "Assign Delivery Rider" }, void 0, false, {
            fileName: "/app/src/components/dashboard/OrdersSection.jsx",
            lineNumber: 610,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/OrdersSection.jsx",
            lineNumber: 609,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:594:10", "data-dynamic-content": "true", className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:595:12", "data-dynamic-content": "true", className: "bg-orange-50 border border-orange-200 rounded-lg p-3", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/OrdersSection:596:14", "data-dynamic-content": "true", className: "text-sm text-orange-700", children: /* @__PURE__ */ jsxDEV("strong", { "data-source-location": "components/dashboard/OrdersSection:597:16", "data-dynamic-content": "true", "data-collection-item-field": "order_number", "data-collection-item-id": selectedOrder?.id || selectedOrder?._id, children: [
                "Order #",
                selectedOrder?.order_number
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 616,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 615,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/OrdersSection:599:14", "data-dynamic-content": "true", className: "text-xs text-gray-600 mt-1", "data-collection-item-field": "delivery_address", "data-collection-item-id": selectedOrder?.id || selectedOrder?._id, children: [
                "📍 ",
                selectedOrder?.delivery_address
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 618,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/OrdersSection.jsx",
              lineNumber: 614,
              columnNumber: 13
            }, this),
            riders.filter((r) => r.is_available).length === 0 ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:605:14", "data-dynamic-content": "true", className: "text-center py-6", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/OrdersSection:606:16", "data-dynamic-content": "false", className: "text-gray-500 mb-4", children: "No riders available" }, void 0, false, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 625,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(
                Button,
                {
                  "data-source-location": "components/dashboard/OrdersSection:607:16",
                  "data-dynamic-content": "true",
                  variant: "outline",
                  onClick: () => {
                    setShowAssignRiderDialog(false);
                    window.location.href = "/RestaurantSettings?tab=riders";
                  },
                  children: "Add Riders"
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 626,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/OrdersSection.jsx",
              lineNumber: 624,
              columnNumber: 13
            }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:619:16", "data-dynamic-content": "true", className: "space-y-2 max-h-64 overflow-y-auto", "data-collection-id": "DeliveryRider", children: riders.filter((r) => r.is_available).map(
                (rider) => /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    "data-source-location": "components/dashboard/OrdersSection:621:20",
                    "data-dynamic-content": "true",
                    type: "button",
                    onClick: () => setSelectedRider(rider),
                    className: `w-full p-3 rounded-lg border-2 flex items-center justify-between transition-all ${selectedRider?.id === rider.id ? "border-indigo-600 bg-indigo-50" : "border-gray-200 hover:border-gray-300"}`,
                    "data-collection-item-id": rider?.id,
                    children: [
                      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:631:22", "data-dynamic-content": "true", className: "text-left", children: [
                        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/OrdersSection:632:24", "data-dynamic-content": "true", className: "font-medium", "data-collection-item-field": "name", "data-collection-item-id": rider?.id, children: rider.name }, void 0, false, {
                          fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                          lineNumber: 651,
                          columnNumber: 25
                        }, this),
                        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/OrdersSection:633:24", "data-dynamic-content": "true", className: "text-xs text-gray-500", "data-collection-item-field": "phone", "data-collection-item-id": rider?.id, children: rider.phone }, void 0, false, {
                          fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                          lineNumber: 652,
                          columnNumber: 25
                        }, this),
                        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/OrdersSection:634:24", "data-dynamic-content": "true", className: "text-xs text-gray-400", "data-collection-item-field": "vehicle_type", "data-collection-item-id": rider?.id, children: [
                          rider.vehicle_type,
                          " • ",
                          rider.total_deliveries || 0,
                          " deliveries"
                        ] }, void 0, true, {
                          fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                          lineNumber: 653,
                          columnNumber: 25
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                        lineNumber: 650,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:636:22", "data-dynamic-content": "true", className: "text-right", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:637:24", "data-dynamic-content": "true", className: "flex items-center gap-1 text-xs", children: [
                        /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/OrdersSection:638:26", "data-dynamic-content": "false", children: "⭐" }, void 0, false, {
                          fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                          lineNumber: 657,
                          columnNumber: 27
                        }, this),
                        /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/OrdersSection:639:26", "data-dynamic-content": "true", children: rider.rating || 5 }, void 0, false, {
                          fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                          lineNumber: 658,
                          columnNumber: 27
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                        lineNumber: 656,
                        columnNumber: 25
                      }, this) }, void 0, false, {
                        fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                        lineNumber: 655,
                        columnNumber: 23
                      }, this)
                    ]
                  },
                  rider.id,
                  true,
                  {
                    fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                    lineNumber: 640,
                    columnNumber: 17
                  },
                  this
                )
              ) }, void 0, false, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 638,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(
                Button,
                {
                  "data-source-location": "components/dashboard/OrdersSection:646:16",
                  "data-dynamic-content": "true",
                  className: "w-full bg-indigo-600 hover:bg-indigo-700",
                  disabled: !selectedRider,
                  onClick: handleAssignRider,
                  children: "Assign & Mark Out for Delivery"
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                  lineNumber: 665,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/OrdersSection.jsx",
              lineNumber: 637,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/OrdersSection.jsx",
            lineNumber: 613,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/OrdersSection.jsx",
          lineNumber: 608,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "/app/src/components/dashboard/OrdersSection.jsx",
          lineNumber: 607,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(Dialog, { "data-source-location": "components/dashboard/OrdersSection:660:6", "data-dynamic-content": "true", open: showPaymentDialog, onOpenChange: setShowPaymentDialog, children: /* @__PURE__ */ jsxDEV(DialogContent, { "data-source-location": "components/dashboard/OrdersSection:661:8", "data-dynamic-content": "true", className: "max-w-md", children: [
          /* @__PURE__ */ jsxDEV(DialogHeader, { "data-source-location": "components/dashboard/OrdersSection:662:10", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(DialogTitle, { "data-source-location": "components/dashboard/OrdersSection:663:12", "data-dynamic-content": "false", children: "Collect Payment" }, void 0, false, {
            fileName: "/app/src/components/dashboard/OrdersSection.jsx",
            lineNumber: 682,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/OrdersSection.jsx",
            lineNumber: 681,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:666:10", "data-dynamic-content": "true", className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:667:12", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/OrdersSection:668:14", "data-dynamic-content": "false", className: "text-sm text-gray-500 mb-2", children: "Order Total" }, void 0, false, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 687,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/OrdersSection:669:14", "data-dynamic-content": "true", className: "text-2xl font-bold", "data-collection-item-field": "total_amount", "data-collection-item-id": selectedOrder?.id || selectedOrder?._id, children: [
                "₹",
                selectedOrder?.total_amount
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 688,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/OrdersSection.jsx",
              lineNumber: 686,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:672:12", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("label", { "data-source-location": "components/dashboard/OrdersSection:673:14", "data-dynamic-content": "false", className: "text-sm font-medium block mb-3", children: "Select Payment Method" }, void 0, false, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 692,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/OrdersSection:674:14", "data-dynamic-content": "true", className: "grid grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    "data-source-location": "components/dashboard/OrdersSection:675:16",
                    "data-dynamic-content": "true",
                    type: "button",
                    onClick: () => setSelectedPaymentMethod("cash"),
                    className: `p-4 rounded-lg border-2 flex flex-col items-center gap-2 transition-all ${selectedPaymentMethod === "cash" ? "border-green-600 bg-green-50" : "border-gray-200 hover:border-gray-300"}`,
                    children: [
                      /* @__PURE__ */ jsxDEV(Banknote, { "data-source-location": "components/dashboard/OrdersSection:684:18", "data-dynamic-content": "false", className: "w-6 h-6" }, void 0, false, {
                        fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                        lineNumber: 703,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/OrdersSection:685:18", "data-dynamic-content": "false", className: "text-sm font-medium", children: "Cash" }, void 0, false, {
                        fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                        lineNumber: 704,
                        columnNumber: 19
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                    lineNumber: 694,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    "data-source-location": "components/dashboard/OrdersSection:687:16",
                    "data-dynamic-content": "true",
                    type: "button",
                    onClick: () => setSelectedPaymentMethod("upi"),
                    className: `p-4 rounded-lg border-2 flex flex-col items-center gap-2 transition-all ${selectedPaymentMethod === "upi" ? "border-green-600 bg-green-50" : "border-gray-200 hover:border-gray-300"}`,
                    children: [
                      /* @__PURE__ */ jsxDEV(CreditCard, { "data-source-location": "components/dashboard/OrdersSection:696:18", "data-dynamic-content": "false", className: "w-6 h-6" }, void 0, false, {
                        fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                        lineNumber: 715,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/OrdersSection:697:18", "data-dynamic-content": "false", className: "text-sm font-medium", children: "UPI" }, void 0, false, {
                        fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                        lineNumber: 716,
                        columnNumber: 19
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                    lineNumber: 706,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    "data-source-location": "components/dashboard/OrdersSection:699:16",
                    "data-dynamic-content": "true",
                    type: "button",
                    onClick: () => setSelectedPaymentMethod("card"),
                    className: `p-4 rounded-lg border-2 flex flex-col items-center gap-2 transition-all ${selectedPaymentMethod === "card" ? "border-green-600 bg-green-50" : "border-gray-200 hover:border-gray-300"}`,
                    children: [
                      /* @__PURE__ */ jsxDEV(CreditCard, { "data-source-location": "components/dashboard/OrdersSection:708:18", "data-dynamic-content": "false", className: "w-6 h-6" }, void 0, false, {
                        fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                        lineNumber: 727,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/OrdersSection:709:18", "data-dynamic-content": "false", className: "text-sm font-medium", children: "Card" }, void 0, false, {
                        fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                        lineNumber: 728,
                        columnNumber: 19
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                    lineNumber: 718,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    "data-source-location": "components/dashboard/OrdersSection:711:16",
                    "data-dynamic-content": "true",
                    type: "button",
                    onClick: () => setSelectedPaymentMethod("online"),
                    className: `p-4 rounded-lg border-2 flex flex-col items-center gap-2 transition-all ${selectedPaymentMethod === "online" ? "border-green-600 bg-green-50" : "border-gray-200 hover:border-gray-300"}`,
                    children: [
                      /* @__PURE__ */ jsxDEV(CreditCard, { "data-source-location": "components/dashboard/OrdersSection:720:18", "data-dynamic-content": "false", className: "w-6 h-6" }, void 0, false, {
                        fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                        lineNumber: 739,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/OrdersSection:721:18", "data-dynamic-content": "false", className: "text-sm font-medium", children: "Online" }, void 0, false, {
                        fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                        lineNumber: 740,
                        columnNumber: 19
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                    lineNumber: 730,
                    columnNumber: 17
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 693,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/OrdersSection.jsx",
              lineNumber: 691,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(
              Button,
              {
                "data-source-location": "components/dashboard/OrdersSection:726:12",
                "data-dynamic-content": "true",
                className: "w-full bg-green-600 hover:bg-green-700",
                onClick: handleCollectPayment,
                children: "Confirm Payment & Print Bill"
              },
              void 0,
              false,
              {
                fileName: "/app/src/components/dashboard/OrdersSection.jsx",
                lineNumber: 745,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/OrdersSection.jsx",
            lineNumber: 685,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/OrdersSection.jsx",
          lineNumber: 680,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "/app/src/components/dashboard/OrdersSection.jsx",
          lineNumber: 679,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/app/src/components/dashboard/OrdersSection.jsx",
      lineNumber: 287,
      columnNumber: 5
    },
    this
  );
}
_s(OrdersSection, "tM1wwdqTJ8spPkHK53aKui7oAkg=");
_c = OrdersSection;
var _c;
$RefreshReg$(_c, "OrdersSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/dashboard/OrdersSection.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/dashboard/OrdersSection.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QzdILHVCQUFDLFVBQUssd0JBQXFCLDZDQUE0Qyx3QkFBcUIsU0FBUSxXQUFVLHVCQUFzQixzQkFBcEk7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBMEk7QUFBQTtBQUFBO0FBQUEsa0JBVjVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFXQTtBQUFBLG1CQWhERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWlEQTtBQUFBLGlCQW5ERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQW9EQTtBQUFBLFlBRUE7QUFBQSxjQUFDO0FBQUE7QUFBQSxnQkFBTyx3QkFBcUI7QUFBQSxnQkFBNEMsd0JBQXFCO0FBQUEsZ0JBQzlGLFdBQVU7QUFBQSxnQkFDVixTQUFTb0Q7QUFBQUEsZ0JBQXFCO0FBQUE7QUFBQSxjQUY5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFLQTtBQUFBLGVBakVGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBa0VBO0FBQUEsYUF2RUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXdFQSxLQXpFRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBMEVBO0FBQUE7QUFBQTtBQUFBLElBbGRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQW1kQTtBQUVKO0FBQUMvRCxHQTNyQnVCSixlQUFhO0FBQUFxSSxLQUFickk7QUFBYSxJQUFBcUk7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJiYXNlNDQiLCJTZWFyY2giLCJDbG9jayIsIkNoZWNrQ2lyY2xlMiIsIkNoZWZIYXQiLCJCZWxsIiwiVXRlbnNpbHMiLCJFeWUiLCJYQ2lyY2xlIiwiQ3JlZGl0Q2FyZCIsIlByaW50ZXIiLCJCYW5rbm90ZSIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJCdXR0b24iLCJJbnB1dCIsIkJhZGdlIiwiRGlhbG9nIiwiRGlhbG9nQ29udGVudCIsIkRpYWxvZ0hlYWRlciIsIkRpYWxvZ1RpdGxlIiwiU2VsZWN0IiwiU2VsZWN0Q29udGVudCIsIlNlbGVjdEl0ZW0iLCJTZWxlY3RUcmlnZ2VyIiwiU2VsZWN0VmFsdWUiLCJzdGF0dXNDb25maWciLCJwZW5kaW5nIiwiY29sb3IiLCJpY29uIiwibmV4dCIsImNvbmZpcm1lZCIsInByZXBhcmluZyIsInJlYWR5Iiwib3V0X2Zvcl9kZWxpdmVyeSIsImRlbGl2ZXJlZCIsInNlcnZlZCIsImNvbXBsZXRlZCIsImNhbmNlbGxlZCIsIk9yZGVyc1NlY3Rpb24iLCJyZXN0YXVyYW50Iiwib3JkZXJzIiwicmVsb2FkT3JkZXJzIiwiX3MiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5Iiwic3RhdHVzRmlsdGVyIiwic2V0U3RhdHVzRmlsdGVyIiwic2VsZWN0ZWRPcmRlciIsInNldFNlbGVjdGVkT3JkZXIiLCJsaXZlT3JkZXJzIiwic2V0TGl2ZU9yZGVycyIsInNob3dQYXltZW50RGlhbG9nIiwic2V0U2hvd1BheW1lbnREaWFsb2ciLCJzZWxlY3RlZFBheW1lbnRNZXRob2QiLCJzZXRTZWxlY3RlZFBheW1lbnRNZXRob2QiLCJzaG93QXNzaWduUmlkZXJEaWFsb2ciLCJzZXRTaG93QXNzaWduUmlkZXJEaWFsb2ciLCJyaWRlcnMiLCJzZXRSaWRlcnMiLCJzZWxlY3RlZFJpZGVyIiwic2V0U2VsZWN0ZWRSaWRlciIsImxvYWRSaWRlcnMiLCJ1bnN1YnNjcmliZSIsImVudGl0aWVzIiwiT3JkZXIiLCJzdWJzY3JpYmUiLCJldmVudCIsImRhdGEiLCJyZXN0YXVyYW50X2lkIiwidHlwZSIsInByZXYiLCJtYXAiLCJvIiwiaWQiLCJmaWx0ZXIiLCJyaWRlcnNMaXN0IiwiRGVsaXZlcnlSaWRlciIsImlzX2FjdGl2ZSIsImUiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyZWRPcmRlcnMiLCJvcmRlciIsIm1hdGNoZXNTZWFyY2giLCJvcmRlcl9udW1iZXIiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiY3VzdG9tZXJfbmFtZSIsInRhYmxlX251bWJlciIsIm1hdGNoZXNTdGF0dXMiLCJzdGF0dXMiLCJ1cGRhdGVPcmRlclN0YXR1cyIsIm9yZGVySWQiLCJuZXdTdGF0dXMiLCJmaW5kIiwib3JkZXJfdHlwZSIsInVwZGF0ZSIsImhhbmRsZUFzc2lnblJpZGVyIiwiYXNzaWduZWRfcmlkZXJfaWQiLCJhc3NpZ25lZF9yaWRlcl9uYW1lIiwibmFtZSIsImFzc2lnbmVkX3JpZGVyX3Bob25lIiwicGhvbmUiLCJjdXJyZW50X29yZGVyX2lkIiwiaXNfYXZhaWxhYmxlIiwiaGFuZGxlQ29sbGVjdFBheW1lbnQiLCJwYXltZW50X3N0YXR1cyIsInBheW1lbnRfbWV0aG9kIiwidXBkYXRlZE9yZGVyIiwicHJpbnRCaWxsIiwicGF5bWVudE1ldGhvZExhYmVsIiwiYmlsbENvbnRlbnQiLCJhZGRyZXNzIiwiY2l0eSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInJlcGxhY2UiLCJ0b1VwcGVyQ2FzZSIsImN1c3RvbWVyX3Bob25lIiwiaXRlbXMiLCJpdGVtIiwicXVhbnRpdHkiLCJ0b3RhbF9wcmljZSIsImpvaW4iLCJzdWJ0b3RhbCIsInRheF9hbW91bnQiLCJzZXJ2aWNlX2NoYXJnZSIsInRvdGFsX2Ftb3VudCIsInBheW1lbnRfdHJhbnNhY3Rpb25faWQiLCJwcmludFdpbmRvdyIsIndpbmRvdyIsIm9wZW4iLCJkb2N1bWVudCIsIndyaXRlIiwiY2xvc2UiLCJzZXRUaW1lb3V0IiwicHJpbnQiLCJhY3RpdmVPcmRlcnMiLCJvcmRlcnNCeVN0YXR1cyIsInJlZHVjZSIsImFjYyIsInB1c2giLCJvcGFjaXR5IiwibGVuZ3RoIiwiX19hcnJJZHhfXyIsInNjYWxlIiwiY3JlYXRlZF9kYXRlIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiaG91ciIsIm1pbnV0ZSIsInN0b3BQcm9wYWdhdGlvbiIsInRhcmdldCIsInZhbHVlIiwiT2JqZWN0Iiwia2V5cyIsIlN0YXR1c0ljb24iLCJtb250aCIsImRheSIsIl9pZCIsImRlbGl2ZXJ5X2FkZHJlc3MiLCJkZWxpdmVyeV9sb2NhdGlvbiIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiaSIsInIiLCJsb2NhdGlvbiIsImhyZWYiLCJyaWRlciIsInZlaGljbGVfdHlwZSIsInRvdGFsX2RlbGl2ZXJpZXMiLCJyYXRpbmciLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJPcmRlcnNTZWN0aW9uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgYmFzZTQ0IH0gZnJvbSBcIkAvYXBpL2Jhc2U0NENsaWVudFwiO1xuaW1wb3J0IHtcbiAgU2VhcmNoLCBDbG9jaywgQ2hlY2tDaXJjbGUyLCBDaGVmSGF0LCBCZWxsLCBVdGVuc2lscyxcbiAgRXllLCBYQ2lyY2xlLCBDcmVkaXRDYXJkLCBQcmludGVyLCBCYW5rbm90ZSB9IGZyb21cblwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCI7XG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYmFkZ2VcIjtcbmltcG9ydCB7XG4gIERpYWxvZyxcbiAgRGlhbG9nQ29udGVudCxcbiAgRGlhbG9nSGVhZGVyLFxuICBEaWFsb2dUaXRsZSB9IGZyb21cblwiQC9jb21wb25lbnRzL3VpL2RpYWxvZ1wiO1xuaW1wb3J0IHtcbiAgU2VsZWN0LFxuICBTZWxlY3RDb250ZW50LFxuICBTZWxlY3RJdGVtLFxuICBTZWxlY3RUcmlnZ2VyLFxuICBTZWxlY3RWYWx1ZSB9IGZyb21cblwiQC9jb21wb25lbnRzL3VpL3NlbGVjdFwiO1xuXG5jb25zdCBzdGF0dXNDb25maWcgPSB7XG4gIHBlbmRpbmc6IHsgY29sb3I6IFwiYmcteWVsbG93LTEwMCB0ZXh0LXllbGxvdy03MDBcIiwgaWNvbjogQ2xvY2ssIG5leHQ6IFwiY29uZmlybWVkXCIgfSxcbiAgY29uZmlybWVkOiB7IGNvbG9yOiBcImJnLWJsdWUtMTAwIHRleHQtYmx1ZS03MDBcIiwgaWNvbjogQ2hlY2tDaXJjbGUyLCBuZXh0OiBcInByZXBhcmluZ1wiIH0sXG4gIHByZXBhcmluZzogeyBjb2xvcjogXCJiZy1wdXJwbGUtMTAwIHRleHQtcHVycGxlLTcwMFwiLCBpY29uOiBDaGVmSGF0LCBuZXh0OiBcInJlYWR5XCIgfSxcbiAgcmVhZHk6IHsgY29sb3I6IFwiYmctZ3JlZW4tMTAwIHRleHQtZ3JlZW4tNzAwXCIsIGljb246IEJlbGwsIG5leHQ6IFwib3V0X2Zvcl9kZWxpdmVyeVwiIH0sXG4gIG91dF9mb3JfZGVsaXZlcnk6IHsgY29sb3I6IFwiYmctaW5kaWdvLTEwMCB0ZXh0LWluZGlnby03MDBcIiwgaWNvbjogQmVsbCwgbmV4dDogXCJkZWxpdmVyZWRcIiB9LFxuICBkZWxpdmVyZWQ6IHsgY29sb3I6IFwiYmctZW1lcmFsZC0xMDAgdGV4dC1lbWVyYWxkLTcwMFwiLCBpY29uOiBDaGVja0NpcmNsZTIsIG5leHQ6IFwiY29tcGxldGVkXCIgfSxcbiAgc2VydmVkOiB7IGNvbG9yOiBcImJnLWVtZXJhbGQtMTAwIHRleHQtZW1lcmFsZC03MDBcIiwgaWNvbjogVXRlbnNpbHMsIG5leHQ6IFwiY29tcGxldGVkXCIgfSxcbiAgY29tcGxldGVkOiB7IGNvbG9yOiBcImJnLWdyYXktMTAwIHRleHQtZ3JheS03MDBcIiwgaWNvbjogQ2hlY2tDaXJjbGUyLCBuZXh0OiBudWxsIH0sXG4gIGNhbmNlbGxlZDogeyBjb2xvcjogXCJiZy1yZWQtMTAwIHRleHQtcmVkLTcwMFwiLCBpY29uOiBYQ2lyY2xlLCBuZXh0OiBudWxsIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9yZGVyc1NlY3Rpb24oeyByZXN0YXVyYW50LCBvcmRlcnMsIHJlbG9hZE9yZGVycyB9KSB7XG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzdGF0dXNGaWx0ZXIsIHNldFN0YXR1c0ZpbHRlcl0gPSB1c2VTdGF0ZShcImFsbFwiKTtcbiAgY29uc3QgW3NlbGVjdGVkT3JkZXIsIHNldFNlbGVjdGVkT3JkZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsaXZlT3JkZXJzLCBzZXRMaXZlT3JkZXJzXSA9IHVzZVN0YXRlKG9yZGVycyk7XG4gIGNvbnN0IFtzaG93UGF5bWVudERpYWxvZywgc2V0U2hvd1BheW1lbnREaWFsb2ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VsZWN0ZWRQYXltZW50TWV0aG9kLCBzZXRTZWxlY3RlZFBheW1lbnRNZXRob2RdID0gdXNlU3RhdGUoXCJjYXNoXCIpO1xuICBjb25zdCBbc2hvd0Fzc2lnblJpZGVyRGlhbG9nLCBzZXRTaG93QXNzaWduUmlkZXJEaWFsb2ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcmlkZXJzLCBzZXRSaWRlcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VsZWN0ZWRSaWRlciwgc2V0U2VsZWN0ZWRSaWRlcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAvLyBSZWFsLXRpbWUgb3JkZXIgdXBkYXRlc1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExpdmVPcmRlcnMob3JkZXJzKTtcbiAgICBsb2FkUmlkZXJzKCk7XG5cbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IGJhc2U0NC5lbnRpdGllcy5PcmRlci5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuZGF0YS5yZXN0YXVyYW50X2lkID09PSByZXN0YXVyYW50LnJlc3RhdXJhbnRfaWQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjcmVhdGUnKSB7XG4gICAgICAgICAgc2V0TGl2ZU9yZGVycygocHJldikgPT4gW2V2ZW50LmRhdGEsIC4uLnByZXZdKTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSAndXBkYXRlJykge1xuICAgICAgICAgIHNldExpdmVPcmRlcnMoKHByZXYpID0+IHByZXYubWFwKChvKSA9PiBvLmlkID09PSBldmVudC5kYXRhLmlkID8gZXZlbnQuZGF0YSA6IG8pKTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSAnZGVsZXRlJykge1xuICAgICAgICAgIHNldExpdmVPcmRlcnMoKHByZXYpID0+IHByZXYuZmlsdGVyKChvKSA9PiBvLmlkICE9PSBldmVudC5kYXRhLmlkKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB1bnN1YnNjcmliZTtcbiAgfSwgW29yZGVycywgcmVzdGF1cmFudC5yZXN0YXVyYW50X2lkXSk7XG5cbiAgY29uc3QgbG9hZFJpZGVycyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmlkZXJzTGlzdCA9IGF3YWl0IGJhc2U0NC5lbnRpdGllcy5EZWxpdmVyeVJpZGVyLmZpbHRlcih7XG4gICAgICAgIHJlc3RhdXJhbnRfaWQ6IHJlc3RhdXJhbnQucmVzdGF1cmFudF9pZCxcbiAgICAgICAgaXNfYWN0aXZlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHNldFJpZGVycyhyaWRlcnNMaXN0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBsb2FkIHJpZGVyc1wiLCBlKTtcbiAgICB9XG4gIH07XG5cblxuXG4gIGNvbnN0IGZpbHRlcmVkT3JkZXJzID0gbGl2ZU9yZGVycy5maWx0ZXIoKG9yZGVyKSA9PiB7XG4gICAgY29uc3QgbWF0Y2hlc1NlYXJjaCA9XG4gICAgb3JkZXIub3JkZXJfbnVtYmVyPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgb3JkZXIuY3VzdG9tZXJfbmFtZT8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgIG9yZGVyLnRhYmxlX251bWJlcj8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKTtcbiAgICBjb25zdCBtYXRjaGVzU3RhdHVzID0gc3RhdHVzRmlsdGVyID09PSBcImFsbFwiIHx8IG9yZGVyLnN0YXR1cyA9PT0gc3RhdHVzRmlsdGVyO1xuICAgIHJldHVybiBtYXRjaGVzU2VhcmNoICYmIG1hdGNoZXNTdGF0dXM7XG4gIH0pO1xuXG4gIGNvbnN0IHVwZGF0ZU9yZGVyU3RhdHVzID0gYXN5bmMgKG9yZGVySWQsIG5ld1N0YXR1cykgPT4ge1xuICAgIGNvbnN0IG9yZGVyID0gbGl2ZU9yZGVycy5maW5kKChvKSA9PiBvLmlkID09PSBvcmRlcklkKTtcblxuICAgIC8vIElmIG9yZGVyIGlzIGRlbGl2ZXJ5IGFuZCBtb3ZpbmcgdG8gXCJyZWFkeVwiLCBzaG93IHJpZGVyIGFzc2lnbm1lbnQgZGlhbG9nXG4gICAgaWYgKG9yZGVyPy5vcmRlcl90eXBlID09PSAnZGVsaXZlcnknICYmIG5ld1N0YXR1cyA9PT0gJ291dF9mb3JfZGVsaXZlcnknKSB7XG4gICAgICBzZXRTZWxlY3RlZE9yZGVyKG9yZGVyKTtcbiAgICAgIHNldFNob3dBc3NpZ25SaWRlckRpYWxvZyh0cnVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhd2FpdCBiYXNlNDQuZW50aXRpZXMuT3JkZXIudXBkYXRlKG9yZGVySWQsIHsgc3RhdHVzOiBuZXdTdGF0dXMgfSk7XG4gICAgaWYgKHNlbGVjdGVkT3JkZXI/LmlkID09PSBvcmRlcklkKSB7XG4gICAgICBzZXRTZWxlY3RlZE9yZGVyKHsgLi4uc2VsZWN0ZWRPcmRlciwgc3RhdHVzOiBuZXdTdGF0dXMgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFzc2lnblJpZGVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghc2VsZWN0ZWRSaWRlciB8fCAhc2VsZWN0ZWRPcmRlcikgcmV0dXJuO1xuXG4gICAgYXdhaXQgYmFzZTQ0LmVudGl0aWVzLk9yZGVyLnVwZGF0ZShzZWxlY3RlZE9yZGVyLmlkLCB7XG4gICAgICBzdGF0dXM6ICdvdXRfZm9yX2RlbGl2ZXJ5JyxcbiAgICAgIGFzc2lnbmVkX3JpZGVyX2lkOiBzZWxlY3RlZFJpZGVyLmlkLFxuICAgICAgYXNzaWduZWRfcmlkZXJfbmFtZTogc2VsZWN0ZWRSaWRlci5uYW1lLFxuICAgICAgYXNzaWduZWRfcmlkZXJfcGhvbmU6IHNlbGVjdGVkUmlkZXIucGhvbmVcbiAgICB9KTtcblxuICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5EZWxpdmVyeVJpZGVyLnVwZGF0ZShzZWxlY3RlZFJpZGVyLmlkLCB7XG4gICAgICBjdXJyZW50X29yZGVyX2lkOiBzZWxlY3RlZE9yZGVyLmlkLFxuICAgICAgaXNfYXZhaWxhYmxlOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgc2V0U2hvd0Fzc2lnblJpZGVyRGlhbG9nKGZhbHNlKTtcbiAgICBzZXRTZWxlY3RlZFJpZGVyKG51bGwpO1xuXG4gICAgaWYgKHNlbGVjdGVkT3JkZXI/LmlkKSB7XG4gICAgICBzZXRTZWxlY3RlZE9yZGVyKHtcbiAgICAgICAgLi4uc2VsZWN0ZWRPcmRlcixcbiAgICAgICAgc3RhdHVzOiAnb3V0X2Zvcl9kZWxpdmVyeScsXG4gICAgICAgIGFzc2lnbmVkX3JpZGVyX2lkOiBzZWxlY3RlZFJpZGVyLmlkLFxuICAgICAgICBhc3NpZ25lZF9yaWRlcl9uYW1lOiBzZWxlY3RlZFJpZGVyLm5hbWUsXG4gICAgICAgIGFzc2lnbmVkX3JpZGVyX3Bob25lOiBzZWxlY3RlZFJpZGVyLnBob25lXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ29sbGVjdFBheW1lbnQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFzZWxlY3RlZE9yZGVyKSByZXR1cm47XG5cbiAgICBhd2FpdCBiYXNlNDQuZW50aXRpZXMuT3JkZXIudXBkYXRlKHNlbGVjdGVkT3JkZXIuaWQsIHtcbiAgICAgIHBheW1lbnRfc3RhdHVzOiAncGFpZCcsXG4gICAgICBwYXltZW50X21ldGhvZDogc2VsZWN0ZWRQYXltZW50TWV0aG9kXG4gICAgfSk7XG5cbiAgICBjb25zdCB1cGRhdGVkT3JkZXIgPSB7XG4gICAgICAuLi5zZWxlY3RlZE9yZGVyLFxuICAgICAgcGF5bWVudF9zdGF0dXM6ICdwYWlkJyxcbiAgICAgIHBheW1lbnRfbWV0aG9kOiBzZWxlY3RlZFBheW1lbnRNZXRob2RcbiAgICB9O1xuXG4gICAgc2V0U2VsZWN0ZWRPcmRlcih1cGRhdGVkT3JkZXIpO1xuICAgIHNldFNob3dQYXltZW50RGlhbG9nKGZhbHNlKTtcblxuICAgIC8vIFByaW50IGJpbGxcbiAgICBwcmludEJpbGwodXBkYXRlZE9yZGVyKTtcbiAgfTtcblxuICBjb25zdCBwcmludEJpbGwgPSAob3JkZXIpID0+IHtcbiAgICBjb25zdCBwYXltZW50TWV0aG9kTGFiZWwgPSB7XG4gICAgICAnY2FzaCc6ICdDYXNoJyxcbiAgICAgICdvbmxpbmUnOiAnT25saW5lIFBheW1lbnQnLFxuICAgICAgJ3VwaSc6ICdVUEknLFxuICAgICAgJ2NhcmQnOiAnQ2FyZCdcbiAgICB9O1xuXG4gICAgY29uc3QgYmlsbENvbnRlbnQgPSBgXG4gICAgICA8IURPQ1RZUEUgaHRtbD5cbiAgICAgIDxodG1sPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxzdHlsZT5cbiAgICAgICAgICBAbWVkaWEgcHJpbnQge1xuICAgICAgICAgICAgYm9keSB7IG1hcmdpbjogMDsgcGFkZGluZzogMDsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5IHsgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTsgcGFkZGluZzogMjBweDsgbWF4LXdpZHRoOiAzMDBweDsgbWFyZ2luOiAwIGF1dG87IH1cbiAgICAgICAgICAuaGVhZGVyIHsgdGV4dC1hbGlnbjogY2VudGVyOyBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDsgcGFkZGluZy1ib3R0b206IDEwcHg7IG1hcmdpbi1ib3R0b206IDIwcHg7IH1cbiAgICAgICAgICAuaGVhZGVyIGgxIHsgbWFyZ2luOiAwOyBmb250LXNpemU6IDIwcHg7IH1cbiAgICAgICAgICAuaGVhZGVyIHAgeyBtYXJnaW46IDVweCAwOyBmb250LXNpemU6IDExcHg7IH1cbiAgICAgICAgICAub3JkZXItaW5mbyB7IG1hcmdpbi1ib3R0b206IDE1cHg7IGZvbnQtc2l6ZTogMTJweDsgfVxuICAgICAgICAgIC5vcmRlci1pbmZvIHAgeyBtYXJnaW46IDNweCAwOyB9XG4gICAgICAgICAgLml0ZW1zIHsgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjMDAwOyBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICMwMDA7IHBhZGRpbmc6IDEwcHggMDsgfVxuICAgICAgICAgIC5pdGVtcyBoMyB7IG1hcmdpbjogMCAwIDhweCAwOyBmb250LXNpemU6IDEzcHg7IH1cbiAgICAgICAgICAuaXRlbSB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgbWFyZ2luOiA1cHggMDsgZm9udC1zaXplOiAxMnB4OyB9XG4gICAgICAgICAgLnRvdGFscyB7IG1hcmdpbi10b3A6IDEwcHg7IGZvbnQtc2l6ZTogMTJweDsgfVxuICAgICAgICAgIC50b3RhbC1yb3cgeyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IG1hcmdpbjogNHB4IDA7IH1cbiAgICAgICAgICAudG90YWwtcm93LmZpbmFsIHsgZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTZweDsgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwMDA7IHBhZGRpbmctdG9wOiA4cHg7IG1hcmdpbi10b3A6IDhweDsgfVxuICAgICAgICAgIC5wYXltZW50LWluZm8geyBiYWNrZ3JvdW5kOiAjZjVmNWY1OyBwYWRkaW5nOiA4cHg7IGJvcmRlci1yYWRpdXM6IDRweDsgbWFyZ2luOiAxNXB4IDA7IGZvbnQtc2l6ZTogMTJweDsgfVxuICAgICAgICAgIC5wYXltZW50LWluZm8gcCB7IG1hcmdpbjogM3B4IDA7IH1cbiAgICAgICAgICAuZm9vdGVyIHsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tdG9wOiAxNXB4OyBmb250LXNpemU6IDExcHg7IGJvcmRlci10b3A6IDFweCBkYXNoZWQgIzAwMDsgcGFkZGluZy10b3A6IDEwcHg7IH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGgxPiR7cmVzdGF1cmFudC5uYW1lfTwvaDE+XG4gICAgICAgICAgPHA+JHtyZXN0YXVyYW50LmFkZHJlc3MgfHwgcmVzdGF1cmFudC5jaXR5fTwvcD5cbiAgICAgICAgICA8cD5QaG9uZTogJHtyZXN0YXVyYW50LnBob25lfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXItaW5mb1wiPlxuICAgICAgICAgIDxwPjxzdHJvbmc+T3JkZXIgIzo8L3N0cm9uZz4gJHtvcmRlci5vcmRlcl9udW1iZXJ9PC9wPlxuICAgICAgICAgIDxwPjxzdHJvbmc+RGF0ZTo8L3N0cm9uZz4gJHtuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCl9PC9wPlxuICAgICAgICAgIDxwPjxzdHJvbmc+VHlwZTo8L3N0cm9uZz4gJHtvcmRlci5vcmRlcl90eXBlPy5yZXBsYWNlKCdfJywgJyAnKS50b1VwcGVyQ2FzZSgpIHx8ICdESU5FIElOJ308L3A+XG4gICAgICAgICAgJHtvcmRlci50YWJsZV9udW1iZXIgPyBgPHA+PHN0cm9uZz5UYWJsZTo8L3N0cm9uZz4gJHtvcmRlci50YWJsZV9udW1iZXJ9PC9wPmAgOiAnJ31cbiAgICAgICAgICAke29yZGVyLmN1c3RvbWVyX25hbWUgPyBgPHA+PHN0cm9uZz5DdXN0b21lcjo8L3N0cm9uZz4gJHtvcmRlci5jdXN0b21lcl9uYW1lfTwvcD5gIDogJyd9XG4gICAgICAgICAgJHtvcmRlci5jdXN0b21lcl9waG9uZSA/IGA8cD48c3Ryb25nPlBob25lOjwvc3Ryb25nPiAke29yZGVyLmN1c3RvbWVyX3Bob25lfTwvcD5gIDogJyd9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1zXCI+XG4gICAgICAgICAgPGgzPkl0ZW1zOjwvaDM+XG4gICAgICAgICAgJHtvcmRlci5pdGVtcz8ubWFwKChpdGVtKSA9PiBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxuICAgICAgICAgICAgICA8c3Bhbj4ke2l0ZW0ucXVhbnRpdHl9eCAke2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPuKCuSR7aXRlbS50b3RhbF9wcmljZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBgKS5qb2luKCcnKSB8fCAnJ31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwidG90YWxzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRvdGFsLXJvd1wiPlxuICAgICAgICAgICAgPHNwYW4+U3VidG90YWw6PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+4oK5JHtvcmRlci5zdWJ0b3RhbCB8fCAwfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidG90YWwtcm93XCI+XG4gICAgICAgICAgICA8c3Bhbj5UYXg6PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+4oK5JHtvcmRlci50YXhfYW1vdW50IHx8IDB9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICR7b3JkZXIuc2VydmljZV9jaGFyZ2UgPiAwID8gYFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3RhbC1yb3dcIj5cbiAgICAgICAgICAgIDxzcGFuPkRlbGl2ZXJ5IEZlZTo8L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj7igrkke29yZGVyLnNlcnZpY2VfY2hhcmdlfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBgIDogJyd9XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRvdGFsLXJvdyBmaW5hbFwiPlxuICAgICAgICAgICAgPHNwYW4+VG90YWw6PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+4oK5JHtvcmRlci50b3RhbF9hbW91bnR9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicGF5bWVudC1pbmZvXCI+XG4gICAgICAgICAgPHA+PHN0cm9uZz5QYXltZW50IE1ldGhvZDo8L3N0cm9uZz4gJHtwYXltZW50TWV0aG9kTGFiZWxbb3JkZXIucGF5bWVudF9tZXRob2RdIHx8IG9yZGVyLnBheW1lbnRfbWV0aG9kfTwvcD5cbiAgICAgICAgICA8cD48c3Ryb25nPlBheW1lbnQgU3RhdHVzOjwvc3Ryb25nPiAke29yZGVyLnBheW1lbnRfc3RhdHVzID09PSAncGFpZCcgPyAnUEFJRCDinJMnIDogJ1BFTkRJTkcnfTwvcD5cbiAgICAgICAgICAke29yZGVyLnBheW1lbnRfdHJhbnNhY3Rpb25faWQgPyBgPHA+PHN0cm9uZz5UeG4gSUQ6PC9zdHJvbmc+ICR7b3JkZXIucGF5bWVudF90cmFuc2FjdGlvbl9pZH08L3A+YCA6ICcnfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgICA8cD5UaGFuayB5b3UgZm9yIHlvdXIgb3JkZXIhPC9wPlxuICAgICAgICAgIDxwPlBvd2VyZWQgYnkgQXhvcmFEaWdpPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYm9keT5cbiAgICAgIDwvaHRtbD5cbiAgICBgO1xuXG4gICAgY29uc3QgcHJpbnRXaW5kb3cgPSB3aW5kb3cub3BlbignJywgJycsICdoZWlnaHQ9ODAwLHdpZHRoPTQwMCcpO1xuICAgIHByaW50V2luZG93LmRvY3VtZW50LndyaXRlKGJpbGxDb250ZW50KTtcbiAgICBwcmludFdpbmRvdy5kb2N1bWVudC5jbG9zZSgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcHJpbnRXaW5kb3cucHJpbnQoKTtcbiAgICB9LCAyNTApO1xuICB9O1xuXG4gIGNvbnN0IGFjdGl2ZU9yZGVycyA9IGxpdmVPcmRlcnMuZmlsdGVyKChvKSA9PiBbJ3BlbmRpbmcnLCAnY29uZmlybWVkJywgJ3ByZXBhcmluZycsICdyZWFkeSddLmluY2x1ZGVzKG8uc3RhdHVzKSk7XG4gIGNvbnN0IG9yZGVyc0J5U3RhdHVzID0gYWN0aXZlT3JkZXJzLnJlZHVjZSgoYWNjLCBvcmRlcikgPT4ge1xuICAgIGlmICghYWNjW29yZGVyLnN0YXR1c10pIGFjY1tvcmRlci5zdGF0dXNdID0gW107XG4gICAgYWNjW29yZGVyLnN0YXR1c10ucHVzaChvcmRlcik7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjI2ODo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cbiAgICBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cblxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjI3NTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBtZDppdGVtcy1jZW50ZXIgbWQ6anVzdGlmeS1iZXR3ZWVuIGdhcC00XCI+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjI3Njo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgPGgyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjoyNzc6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMFwiPkFjdGl2ZSBPcmRlcnM8L2gyPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjI3ODoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC0zIHB5LTEgYmctZ3JlZW4tMTAwIHRleHQtZ3JlZW4tNzAwIHJvdW5kZWQtZnVsbCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246Mjc5OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMiBoLTIgYmctZ3JlZW4tNTAwIHJvdW5kZWQtZnVsbCBhbmltYXRlLXB1bHNlXCI+PC9zcGFuPlxuICAgICAgICAgICAgTGl2ZSBVcGRhdGVzXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246MjgzOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+e2FjdGl2ZU9yZGVycy5sZW5ndGh9IGFjdGl2ZSBvcmRlcnM8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIEFjdGl2ZSBPcmRlcnMgS2FuYmFuICovfVxuICAgICAge2FjdGl2ZU9yZGVycy5sZW5ndGggPiAwICYmXG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjoyODg6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgZ2FwLTRcIj5cbiAgICAgICAgICB7WydwZW5kaW5nJywgJ2NvbmZpcm1lZCcsICdwcmVwYXJpbmcnLCAncmVhZHknXS5tYXAoKHN0YXR1cywgX19hcnJJZHhfXykgPT5cbiAgICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjI5MDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17c3RhdHVzfSBjbGFzc05hbWU9XCJiZy1ncmF5LTUwXCIgZGF0YS1hcnItaW5kZXg9e19fYXJySWR4X199PlxuICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246MjkxOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicGItMlwiIGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffT5cbiAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjoyOTI6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiIGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjoyOTM6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJjYXBpdGFsaXplXCI+e3N0YXR1c308L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8QmFkZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjI5NDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj57b3JkZXJzQnlTdGF0dXNbc3RhdHVzXT8ubGVuZ3RoIHx8IDB9PC9CYWRnZT5cbiAgICAgICAgICAgICAgICA8L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjI5NzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktM1wiIGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffT5cbiAgICAgICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjoyOTg6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30+XG4gICAgICAgICAgICAgICAgICB7b3JkZXJzQnlTdGF0dXNbc3RhdHVzXT8ubWFwKChvcmRlcikgPT5cbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjMwMDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGtleT17b3JkZXIuaWR9XG4gICAgICAgICAgICAgIGxheW91dFxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjkgfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCBzY2FsZTogMSB9fVxuICAgICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjkgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC1sZyBwLTMgc2hhZG93LXNtIGJvcmRlciBib3JkZXItZ3JheS0xMDAgY3Vyc29yLXBvaW50ZXIgaG92ZXI6c2hhZG93LW1kIHRyYW5zaXRpb24tc2hhZG93XCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRPcmRlcihvcmRlcil9IGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtvcmRlcj8uaWR9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246MzA5OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjozMTA6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtc21cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIm9yZGVyX251bWJlclwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtvcmRlcj8uaWR9PiN7b3JkZXIub3JkZXJfbnVtYmVyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjozMTE6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge29yZGVyLm9yZGVyX3R5cGUgPT09ICdkZWxpdmVyeScgPyAn8J+amiBEZWxpdmVyeScgOiBvcmRlci50YWJsZV9udW1iZXIgPyBgVGFibGUgJHtvcmRlci50YWJsZV9udW1iZXJ9YCA6ICdUYWtlYXdheSd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjMxNToyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBtYi0yXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJ0b3RhbF9hbW91bnRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17b3JkZXI/LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtvcmRlci5pdGVtcz8ubGVuZ3RoIHx8IDB9IGl0ZW1zIMK3IOKCuXtvcmRlci50b3RhbF9hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjMxODoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjMxOToyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUob3JkZXIuY3JlYXRlZF9kYXRlKS50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0dXNDb25maWdbc3RhdHVzXS5uZXh0ICYmXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjozMjM6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTcgdGV4dC14c1wiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVPcmRlclN0YXR1cyhvcmRlci5pZCwgc3RhdHVzQ29uZmlnW3N0YXR1c10ubmV4dCk7XG4gICAgICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5leHQg4oaSXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICAgICAgeyFvcmRlcnNCeVN0YXR1c1tzdGF0dXNdPy5sZW5ndGggJiZcbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjM0MDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS00IHRleHQtZ3JheS00MDAgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICBObyBvcmRlcnNcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cblxuICAgICAgey8qIEFsbCBPcmRlcnMgTGlzdCAqL31cbiAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjozNTE6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICA8Q2FyZEhlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246MzUyOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjozNTM6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IG1kOml0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246MzU0OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleC0xIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDxTZWFyY2ggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjM1NToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTMgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIHctNCBoLTQgdGV4dC1ncmF5LTQwMFwiIC8+XG4gICAgICAgICAgICAgIDxJbnB1dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246MzU2OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggb3JkZXJzLi4uXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGwtOVwiIC8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFNlbGVjdCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246MzYzOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdmFsdWU9e3N0YXR1c0ZpbHRlcn0gb25WYWx1ZUNoYW5nZT17c2V0U3RhdHVzRmlsdGVyfT5cbiAgICAgICAgICAgICAgPFNlbGVjdFRyaWdnZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjM2NDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQwXCI+XG4gICAgICAgICAgICAgICAgPFNlbGVjdFZhbHVlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjozNjU6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz5cbiAgICAgICAgICAgICAgPC9TZWxlY3RUcmlnZ2VyPlxuICAgICAgICAgICAgICA8U2VsZWN0Q29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246MzY3OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjM2ODoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB2YWx1ZT1cImFsbFwiPkFsbCBTdGF0dXM8L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHN0YXR1c0NvbmZpZykubWFwKChzdGF0dXMpID0+XG4gICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjM3MDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17c3RhdHVzfSB2YWx1ZT17c3RhdHVzfSBjbGFzc05hbWU9XCJjYXBpdGFsaXplXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJzdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAge3N0YXR1c31cbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1NlbGVjdENvbnRlbnQ+XG4gICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjM3ODo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAge2ZpbHRlcmVkT3JkZXJzLmxlbmd0aCA9PT0gMCA/XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246MzgwOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTEyIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgPENsb2NrIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjozODE6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0xMiBoLTEyIG14LWF1dG8gbWItMyB0ZXh0LWdyYXktMzAwXCIgLz5cbiAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjM4MjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5ObyBvcmRlcnMgZm91bmQ8L3A+XG4gICAgICAgICAgICA8L2Rpdj4gOlxuXG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246Mzg1OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwib3ZlcmZsb3cteC1hdXRvXCI+XG4gICAgICAgICAgICAgIDx0YWJsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246Mzg2OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjozODc6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICA8dHIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjM4ODoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIGJvcmRlci1iXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246Mzg5OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInBiLTMgZm9udC1tZWRpdW1cIj5PcmRlciAjPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjozOTA6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwicGItMyBmb250LW1lZGl1bVwiPkN1c3RvbWVyPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjozOTE6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwicGItMyBmb250LW1lZGl1bVwiPlRhYmxlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjozOTI6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwicGItMyBmb250LW1lZGl1bVwiPkl0ZW1zPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjozOTM6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwicGItMyBmb250LW1lZGl1bVwiPkFtb3VudDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246Mzk0OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInBiLTMgZm9udC1tZWRpdW1cIj5QYXltZW50PC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjozOTU6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwicGItMyBmb250LW1lZGl1bVwiPlN0YXR1czwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246Mzk2OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInBiLTMgZm9udC1tZWRpdW1cIj5UaW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjozOTc6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwicGItMyBmb250LW1lZGl1bVwiPjwvdGg+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo0MDA6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJkaXZpZGUteVwiPlxuICAgICAgICAgICAgICAgICAge2ZpbHRlcmVkT3JkZXJzLm1hcCgob3JkZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IFN0YXR1c0ljb24gPSBzdGF0dXNDb25maWdbb3JkZXIuc3RhdHVzXT8uaWNvbiB8fCBDbG9jaztcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDx0ciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NDA0OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtvcmRlci5pZH0gY2xhc3NOYW1lPVwidGV4dC1zbSBob3ZlcjpiZy1ncmF5LTUwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e29yZGVyPy5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjQwNToyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB5LTMgZm9udC1tZWRpdW1cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIm9yZGVyX251bWJlclwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtvcmRlcj8uaWR9PntvcmRlci5vcmRlcl9udW1iZXJ9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NDA2OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicHktM1wiPntvcmRlci5jdXN0b21lcl9uYW1lIHx8ICdHdWVzdCd9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NDA3OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicHktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7b3JkZXIub3JkZXJfdHlwZSA9PT0gJ2RlbGl2ZXJ5JyA/ICfwn5qaIERlbGl2ZXJ5JyA6IG9yZGVyLnRhYmxlX251bWJlciA/IGBUYWJsZSAke29yZGVyLnRhYmxlX251bWJlcn1gIDogJ1Rha2Vhd2F5J31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjQxMDoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB5LTNcIj57b3JkZXIuaXRlbXM/Lmxlbmd0aCB8fCAwfSBpdGVtczwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjQxMToyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB5LTMgZm9udC1tZWRpdW1cIj7igrl7b3JkZXIudG90YWxfYW1vdW50Py50b0xvY2FsZVN0cmluZygpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjQxMjoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo0MTM6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e29yZGVyLnBheW1lbnRfc3RhdHVzID09PSAncGFpZCcgPyAnYmctZ3JlZW4tMTAwIHRleHQtZ3JlZW4tNzAwJyA6ICdiZy1vcmFuZ2UtMTAwIHRleHQtb3JhbmdlLTcwMCd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcmRlci5wYXltZW50X3N0YXR1cyA9PT0gJ3BhaWQnID8gJ1BhaWQnIDogJ1VucGFpZCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo0MTc6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NDE4OjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtzdGF0dXNDb25maWdbb3JkZXIuc3RhdHVzXT8uY29sb3J9IGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwic3RhdHVzXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e29yZGVyPy5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXR1c0ljb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjQxOToyOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTMgaC0zIG1yLTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcmRlci5zdGF0dXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo0MjM6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJweS0zIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKG9yZGVyLmNyZWF0ZWRfZGF0ZSkudG9Mb2NhbGVTdHJpbmcoW10sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjQzMToyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NDMyOjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRPcmRlcihvcmRlcil9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV5ZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NDM3OjI4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC90cj4pO1xuXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDwvQ2FyZD5cblxuICAgICAgey8qIE9yZGVyIERldGFpbCBEaWFsb2cgKi99XG4gICAgICA8RGlhbG9nIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo0NTE6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG9wZW49eyEhc2VsZWN0ZWRPcmRlcn0gb25PcGVuQ2hhbmdlPXsoKSA9PiBzZXRTZWxlY3RlZE9yZGVyKG51bGwpfT5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjQ1Mjo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWF4LXctbGdcIj5cbiAgICAgICAgICA8RGlhbG9nSGVhZGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo0NTM6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgIDxEaWFsb2dUaXRsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NDU0OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJvcmRlcl9udW1iZXJcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2VsZWN0ZWRPcmRlcj8uaWQgfHwgc2VsZWN0ZWRPcmRlcj8uX2lkfT5PcmRlciAje3NlbGVjdGVkT3JkZXI/Lm9yZGVyX251bWJlcn08L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgIDwvRGlhbG9nSGVhZGVyPlxuICAgICAgICAgIFxuICAgICAgICAgIHtzZWxlY3RlZE9yZGVyICYmXG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NDU4OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjQ1OToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTQgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjQ2MDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiY3VzdG9tZXJfcGhvbmVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2VsZWN0ZWRPcmRlcj8uaWQgfHwgc2VsZWN0ZWRPcmRlcj8uX2lkfT5cbiAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo0NjE6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPkN1c3RvbWVyPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjQ2MjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+e3NlbGVjdGVkT3JkZXIuY3VzdG9tZXJfbmFtZSB8fCAnR3Vlc3QnfTwvcD5cbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZE9yZGVyLmN1c3RvbWVyX3Bob25lICYmXG4gICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjQ2NDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiY3VzdG9tZXJfcGhvbmVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2VsZWN0ZWRPcmRlcj8uaWQgfHwgc2VsZWN0ZWRPcmRlcj8uX2lkfT57c2VsZWN0ZWRPcmRlci5jdXN0b21lcl9waG9uZX08L3A+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjQ2NzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjQ2ODoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+T3JkZXIgVHlwZTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo0Njk6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRPcmRlci5vcmRlcl90eXBlID09PSAnZGVsaXZlcnknID8gJ/CfmpogRGVsaXZlcnknIDogc2VsZWN0ZWRPcmRlci50YWJsZV9udW1iZXIgPyBgVGFibGUgJHtzZWxlY3RlZE9yZGVyLnRhYmxlX251bWJlcn1gIDogJ1Rha2Vhd2F5J31cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo0NzM6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo0NzQ6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPlBheW1lbnQgU3RhdHVzPC9wPlxuICAgICAgICAgICAgICAgICAgPEJhZGdlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo0NzU6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e3NlbGVjdGVkT3JkZXIucGF5bWVudF9zdGF0dXMgPT09ICdwYWlkJyA/ICdiZy1ncmVlbi0xMDAgdGV4dC1ncmVlbi03MDAnIDogJ2JnLW9yYW5nZS0xMDAgdGV4dC1vcmFuZ2UtNzAwJ30+XG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZE9yZGVyLnBheW1lbnRfc3RhdHVzID09PSAncGFpZCcgPyAnUGFpZCcgOiAnVW5wYWlkJ31cbiAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NDc5OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NDgwOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5QYXltZW50IE1ldGhvZDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo0ODE6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSBjYXBpdGFsaXplXCI+e3NlbGVjdGVkT3JkZXIucGF5bWVudF9tZXRob2QgfHwgJ0Nhc2gnfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIERlbGl2ZXJ5IEFkZHJlc3MgKi99XG4gICAgICAgICAgICAgIHtzZWxlY3RlZE9yZGVyLm9yZGVyX3R5cGUgPT09ICdkZWxpdmVyeScgJiYgc2VsZWN0ZWRPcmRlci5kZWxpdmVyeV9hZGRyZXNzICYmXG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo0ODc6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwIGJvcmRlciBib3JkZXItYmx1ZS0yMDAgcm91bmRlZC1sZyBwLTNcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImRlbGl2ZXJ5X2xvY2F0aW9uXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3NlbGVjdGVkT3JkZXI/LmlkIHx8IHNlbGVjdGVkT3JkZXI/Ll9pZH0+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NDg4OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ibHVlLTcwMCBtYi0xXCI+8J+TjSBEZWxpdmVyeSBBZGRyZXNzOjwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo0ODk6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS03MDBcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImRlbGl2ZXJ5X2FkZHJlc3NcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2VsZWN0ZWRPcmRlcj8uaWQgfHwgc2VsZWN0ZWRPcmRlcj8uX2lkfT57c2VsZWN0ZWRPcmRlci5kZWxpdmVyeV9hZGRyZXNzfTwvcD5cbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZE9yZGVyLmRlbGl2ZXJ5X2xvY2F0aW9uICYmXG4gICAgICAgICAgICAgIDxhIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo0OTE6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzP3E9JHtzZWxlY3RlZE9yZGVyLmRlbGl2ZXJ5X2xvY2F0aW9uLmxhdGl0dWRlfSwke3NlbGVjdGVkT3JkZXIuZGVsaXZlcnlfbG9jYXRpb24ubG9uZ2l0dWRlfWB9XG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtYmx1ZS02MDAgaG92ZXI6dW5kZXJsaW5lIG10LTIgaW5saW5lLWJsb2NrXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICBWaWV3IG9uIE1hcCDihpJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NTAzOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NTA0OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlN0YXR1czo8L3NwYW4+XG4gICAgICAgICAgICAgICAgPFNlbGVjdCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NTA1OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkT3JkZXIuc3RhdHVzfVxuICAgICAgICAgICAgICBvblZhbHVlQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZU9yZGVyU3RhdHVzKHNlbGVjdGVkT3JkZXIuaWQsIHZhbHVlKX0+XG5cbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RUcmlnZ2VyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo1MDk6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00MFwiPlxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0VmFsdWUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjUxMDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3RUcmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgPFNlbGVjdENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjUxMjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoc3RhdHVzQ29uZmlnKS5tYXAoKHN0YXR1cykgPT5cbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo1MTQ6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e3N0YXR1c30gdmFsdWU9e3N0YXR1c30gY2xhc3NOYW1lPVwiY2FwaXRhbGl6ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwic3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdHVzfVxuICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjUyMjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxoNCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NTIzOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIG1iLTJcIj5PcmRlciBJdGVtczwvaDQ+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NTI0OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS0yIGJnLWdyYXktNTAgcm91bmRlZC1sZyBwLTNcIj5cbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZE9yZGVyLml0ZW1zPy5tYXAoKGl0ZW0sIGkpID0+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NTI2OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtpfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXNtXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2l0ZW0/LltcImRhdGEtY29sbGVjdGlvbi1pdGVtLWlkXCJdfT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NTI3OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJxdWFudGl0eVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtpdGVtPy5pZCB8fCBpdGVtPy5faWR9PntpdGVtLnF1YW50aXR5fXgge2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjUyODoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJ0b3RhbF9wcmljZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtpdGVtPy5pZCB8fCBpdGVtPy5faWR9PuKCuXtpdGVtLnRvdGFsX3ByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NTM0OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYm9yZGVyLXQgcHQtMyBzcGFjZS15LTEgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjUzNToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NTM2OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlN1YnRvdGFsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjUzNzoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPuKCuXtzZWxlY3RlZE9yZGVyLnN1YnRvdGFsIHx8IDB9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjUzOToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NTQwOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlRheDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo1NDE6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj7igrl7c2VsZWN0ZWRPcmRlci50YXhfYW1vdW50IHx8IDB9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZE9yZGVyLnNlcnZpY2VfY2hhcmdlID4gMCAmJlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo1NDQ6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NTQ1OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPkRlbGl2ZXJ5IEZlZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjU0NjoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwic2VydmljZV9jaGFyZ2VcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2VsZWN0ZWRPcmRlcj8uaWQgfHwgc2VsZWN0ZWRPcmRlcj8uX2lkfT7igrl7c2VsZWN0ZWRPcmRlci5zZXJ2aWNlX2NoYXJnZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjU0OToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGZvbnQtYm9sZCB0ZXh0LWJhc2UgYm9yZGVyLXQgcHQtMlwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjU1MDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5Ub3RhbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo1NTE6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInRvdGFsX2Ftb3VudFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtzZWxlY3RlZE9yZGVyPy5pZCB8fCBzZWxlY3RlZE9yZGVyPy5faWR9PuKCuXtzZWxlY3RlZE9yZGVyLnRvdGFsX2Ftb3VudH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjU1NToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRPcmRlci5wYXltZW50X3N0YXR1cyAhPT0gJ3BhaWQnICYmXG4gICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjU1NzoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBiZy1ncmVlbi02MDAgaG92ZXI6YmctZ3JlZW4tNzAwXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1BheW1lbnREaWFsb2codHJ1ZSl9PlxuXG4gICAgICAgICAgICAgICAgICAgIDxDcmVkaXRDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo1NjE6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCBtci0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgQ29sbGVjdCBQYXltZW50XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZE9yZGVyLm9yZGVyX3R5cGUgPT09ICdkZWxpdmVyeScgJiYgc2VsZWN0ZWRPcmRlci5zdGF0dXMgPT09ICdyZWFkeScgJiYgIXNlbGVjdGVkT3JkZXIuYXNzaWduZWRfcmlkZXJfaWQgJiZcbiAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NTY2OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIGJnLWluZGlnby02MDAgaG92ZXI6YmctaW5kaWdvLTcwMFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dBc3NpZ25SaWRlckRpYWxvZyh0cnVlKX0+XG5cbiAgICAgICAgICAgICAgICAgICAg8J+amiBBc3NpZ24gUmlkZXJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NTczOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTFcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcmludEJpbGwoc2VsZWN0ZWRPcmRlcil9PlxuXG4gICAgICAgICAgICAgICAgICA8UHJpbnRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NTc4OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgbXItMlwiIC8+XG4gICAgICAgICAgICAgICAgICBQcmludCBCaWxsXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICA8L0RpYWxvZz5cblxuICAgICAgey8qIEFzc2lnbiBSaWRlciBEaWFsb2cgKi99XG4gICAgICA8RGlhbG9nIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo1ODg6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG9wZW49e3Nob3dBc3NpZ25SaWRlckRpYWxvZ30gb25PcGVuQ2hhbmdlPXtzZXRTaG93QXNzaWduUmlkZXJEaWFsb2d9PlxuICAgICAgICA8RGlhbG9nQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NTg5OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtYXgtdy1tZFwiPlxuICAgICAgICAgIDxEaWFsb2dIZWFkZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjU5MDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgIDxEaWFsb2dUaXRsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NTkxOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPkFzc2lnbiBEZWxpdmVyeSBSaWRlcjwvRGlhbG9nVGl0bGU+XG4gICAgICAgICAgPC9EaWFsb2dIZWFkZXI+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NTk0OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo1OTU6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJiZy1vcmFuZ2UtNTAgYm9yZGVyIGJvcmRlci1vcmFuZ2UtMjAwIHJvdW5kZWQtbGcgcC0zXCI+XG4gICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo1OTY6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtb3JhbmdlLTcwMFwiPlxuICAgICAgICAgICAgICAgIDxzdHJvbmcgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjU5NzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwib3JkZXJfbnVtYmVyXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3NlbGVjdGVkT3JkZXI/LmlkIHx8IHNlbGVjdGVkT3JkZXI/Ll9pZH0+T3JkZXIgI3tzZWxlY3RlZE9yZGVyPy5vcmRlcl9udW1iZXJ9PC9zdHJvbmc+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjU5OToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTYwMCBtdC0xXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJkZWxpdmVyeV9hZGRyZXNzXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3NlbGVjdGVkT3JkZXI/LmlkIHx8IHNlbGVjdGVkT3JkZXI/Ll9pZH0+XG4gICAgICAgICAgICAgICAg8J+TjSB7c2VsZWN0ZWRPcmRlcj8uZGVsaXZlcnlfYWRkcmVzc31cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtyaWRlcnMuZmlsdGVyKChyKSA9PiByLmlzX2F2YWlsYWJsZSkubGVuZ3RoID09PSAwID9cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjYwNToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTZcIj5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NjA2OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgbWItNFwiPk5vIHJpZGVycyBhdmFpbGFibGU8L3A+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NjA3OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U2hvd0Fzc2lnblJpZGVyRGlhbG9nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvUmVzdGF1cmFudFNldHRpbmdzP3RhYj1yaWRlcnMnO1xuICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgICAgQWRkIFJpZGVyc1xuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj4gOlxuXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjYxOToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktMiBtYXgtaC02NCBvdmVyZmxvdy15LWF1dG9cIiBkYXRhLWNvbGxlY3Rpb24taWQ9XCJEZWxpdmVyeVJpZGVyXCI+XG4gICAgICAgICAgICAgICAgICB7cmlkZXJzLmZpbHRlcigocikgPT4gci5pc19hdmFpbGFibGUpLm1hcCgocmlkZXIpID0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NjIxOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBrZXk9e3JpZGVyLmlkfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkUmlkZXIocmlkZXIpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBwLTMgcm91bmRlZC1sZyBib3JkZXItMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdHJhbnNpdGlvbi1hbGwgJHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFJpZGVyPy5pZCA9PT0gcmlkZXIuaWQgP1xuICAgICAgICAgICAgICAgIFwiYm9yZGVyLWluZGlnby02MDAgYmctaW5kaWdvLTUwXCIgOlxuICAgICAgICAgICAgICAgIFwiYm9yZGVyLWdyYXktMjAwIGhvdmVyOmJvcmRlci1ncmF5LTMwMFwifWBcbiAgICAgICAgICAgICAgICB9IGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyaWRlcj8uaWR9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NjMxOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NjMyOjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIm5hbWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmlkZXI/LmlkfT57cmlkZXIubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NjMzOjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJwaG9uZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyaWRlcj8uaWR9PntyaWRlci5waG9uZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NjM0OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNDAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJ2ZWhpY2xlX3R5cGVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmlkZXI/LmlkfT57cmlkZXIudmVoaWNsZV90eXBlfSDigKIge3JpZGVyLnRvdGFsX2RlbGl2ZXJpZXMgfHwgMH0gZGVsaXZlcmllczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo2MzY6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo2Mzc6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo2Mzg6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+4q2QPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NjM5OjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+e3JpZGVyLnJhdGluZyB8fCA1fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NjQ2OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWluZGlnby02MDAgaG92ZXI6YmctaW5kaWdvLTcwMFwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshc2VsZWN0ZWRSaWRlcn1cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQXNzaWduUmlkZXJ9PlxuXG4gICAgICAgICAgICAgICAgICBBc3NpZ24gJiBNYXJrIE91dCBmb3IgRGVsaXZlcnlcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgIDwvRGlhbG9nPlxuXG4gICAgICB7LyogUGF5bWVudCBDb2xsZWN0aW9uIERpYWxvZyAqL31cbiAgICAgIDxEaWFsb2cgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjY2MDo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgb3Blbj17c2hvd1BheW1lbnREaWFsb2d9IG9uT3BlbkNoYW5nZT17c2V0U2hvd1BheW1lbnREaWFsb2d9PlxuICAgICAgICA8RGlhbG9nQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NjYxOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtYXgtdy1tZFwiPlxuICAgICAgICAgIDxEaWFsb2dIZWFkZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjY2MjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgIDxEaWFsb2dUaXRsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NjYzOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPkNvbGxlY3QgUGF5bWVudDwvRGlhbG9nVGl0bGU+XG4gICAgICAgICAgPC9EaWFsb2dIZWFkZXI+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NjY2OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo2Njc6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjY2ODoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgbWItMlwiPk9yZGVyIFRvdGFsPC9wPlxuICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NjY5OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJ0b3RhbF9hbW91bnRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2VsZWN0ZWRPcmRlcj8uaWQgfHwgc2VsZWN0ZWRPcmRlcj8uX2lkfT7igrl7c2VsZWN0ZWRPcmRlcj8udG90YWxfYW1vdW50fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo2NzI6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo2NzM6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSBibG9jayBtYi0zXCI+U2VsZWN0IFBheW1lbnQgTWV0aG9kPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246Njc0OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtM1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjY3NToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRQYXltZW50TWV0aG9kKFwiY2FzaFwiKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwLTQgcm91bmRlZC1sZyBib3JkZXItMiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtMiB0cmFuc2l0aW9uLWFsbCAke1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkUGF5bWVudE1ldGhvZCA9PT0gXCJjYXNoXCIgP1xuICAgICAgICAgICAgICAgIFwiYm9yZGVyLWdyZWVuLTYwMCBiZy1ncmVlbi01MFwiIDpcbiAgICAgICAgICAgICAgICBcImJvcmRlci1ncmF5LTIwMCBob3Zlcjpib3JkZXItZ3JheS0zMDBcIn1gXG4gICAgICAgICAgICAgICAgfT5cblxuICAgICAgICAgICAgICAgICAgPEJhbmtub3RlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo2ODQ6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246Njg1OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW1cIj5DYXNoPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjY4NzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRQYXltZW50TWV0aG9kKFwidXBpXCIpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtNCByb3VuZGVkLWxnIGJvcmRlci0yIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC0yIHRyYW5zaXRpb24tYWxsICR7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRQYXltZW50TWV0aG9kID09PSBcInVwaVwiID9cbiAgICAgICAgICAgICAgICBcImJvcmRlci1ncmVlbi02MDAgYmctZ3JlZW4tNTBcIiA6XG4gICAgICAgICAgICAgICAgXCJib3JkZXItZ3JheS0yMDAgaG92ZXI6Ym9yZGVyLWdyYXktMzAwXCJ9YFxuICAgICAgICAgICAgICAgIH0+XG5cbiAgICAgICAgICAgICAgICAgIDxDcmVkaXRDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo2OTY6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246Njk3OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW1cIj5VUEk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246Njk5OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZFBheW1lbnRNZXRob2QoXCJjYXJkXCIpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtNCByb3VuZGVkLWxnIGJvcmRlci0yIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC0yIHRyYW5zaXRpb24tYWxsICR7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRQYXltZW50TWV0aG9kID09PSBcImNhcmRcIiA/XG4gICAgICAgICAgICAgICAgXCJib3JkZXItZ3JlZW4tNjAwIGJnLWdyZWVuLTUwXCIgOlxuICAgICAgICAgICAgICAgIFwiYm9yZGVyLWdyYXktMjAwIGhvdmVyOmJvcmRlci1ncmF5LTMwMFwifWBcbiAgICAgICAgICAgICAgICB9PlxuXG4gICAgICAgICAgICAgICAgICA8Q3JlZGl0Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NzA4OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNiBoLTZcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjcwOToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+Q2FyZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo3MTE6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkUGF5bWVudE1ldGhvZChcIm9ubGluZVwiKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwLTQgcm91bmRlZC1sZyBib3JkZXItMiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtMiB0cmFuc2l0aW9uLWFsbCAke1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkUGF5bWVudE1ldGhvZCA9PT0gXCJvbmxpbmVcIiA/XG4gICAgICAgICAgICAgICAgXCJib3JkZXItZ3JlZW4tNjAwIGJnLWdyZWVuLTUwXCIgOlxuICAgICAgICAgICAgICAgIFwiYm9yZGVyLWdyYXktMjAwIGhvdmVyOmJvcmRlci1ncmF5LTMwMFwifWBcbiAgICAgICAgICAgICAgICB9PlxuXG4gICAgICAgICAgICAgICAgICA8Q3JlZGl0Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL09yZGVyc1NlY3Rpb246NzIwOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNiBoLTZcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uOjcyMToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+T25saW5lPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbjo3MjY6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyZWVuLTYwMCBob3ZlcjpiZy1ncmVlbi03MDBcIlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ29sbGVjdFBheW1lbnR9PlxuXG4gICAgICAgICAgICAgIENvbmZpcm0gUGF5bWVudCAmIFByaW50IEJpbGxcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICA8L0RpYWxvZz5cbiAgICA8L21vdGlvbi5kaXY+KTtcblxufSJdLCJmaWxlIjoiL2FwcC9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvT3JkZXJzU2VjdGlvbi5qc3gifQ==