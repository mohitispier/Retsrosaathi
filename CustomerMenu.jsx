import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/CustomerMenu.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/CustomerMenu.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$(), _s2 = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { motion, AnimatePresence } from "/node_modules/.vite/deps/framer-motion.js?v=79425e35";
import { base44 } from "/src/api/base44Client.js";
import {
  Leaf,
  Flame,
  Search,
  ShoppingCart,
  Plus,
  Minus,
  X,
  ChevronDown,
  Clock,
  Phone,
  MapPin,
  Store,
  CreditCard,
  Smartphone,
  Banknote
} from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
import { Button } from "/src/components/ui/button.jsx";
import { Input } from "/src/components/ui/input.jsx";
import { Badge } from "/src/components/ui/badge.jsx";
import { Textarea } from "/src/components/ui/textarea.jsx";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "/src/components/ui/sheet.jsx";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "/src/components/ui/dialog.jsx";
import CustomerChatWidget from "/src/components/chat/CustomerChatWidget.jsx";
import LocationPicker from "/src/components/customer/LocationPicker.jsx";
function OrderTrackingScreen({ order: initialOrder, restaurant, tableNumber, onOrderMore, "data-collection-item-id": __dataCollectionItemId }) {
  _s();
  const [order, setOrder] = useState(initialOrder);
  useEffect(() => {
    const unsubscribe = base44.entities.Order.subscribe((event) => {
      if (event.type === "update" && event.data.id === order.id) {
        setOrder(event.data);
      }
    });
    return unsubscribe;
  }, [order.id]);
  const statusSteps = {
    "pending": { label: "Order Placed", icon: "📝", color: "orange" },
    "confirmed": { label: "Confirmed", icon: "✅", color: "green" },
    "preparing": { label: "Preparing", icon: "👨‍🍳", color: "blue" },
    "ready": { label: "Ready", icon: "🎉", color: "purple" },
    "out_for_delivery": { label: "Out for Delivery", icon: "🚚", color: "indigo" },
    "delivered": { label: "Delivered", icon: "✨", color: "green" },
    "completed": { label: "Completed", icon: "✨", color: "green" }
  };
  const currentStatusInfo = statusSteps[order.status] || statusSteps.pending;
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:56:4", "data-dynamic-content": "true", className: "min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-4", "data-collection-item-id": __dataCollectionItemId, children: /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      "data-source-location": "pages/CustomerMenu:57:6",
      "data-dynamic-content": "true",
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      className: "bg-white rounded-2xl shadow-xl p-8 max-w-md w-full",
      children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:63:8", "data-dynamic-content": "true", className: "text-center mb-6", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:64:10", "data-dynamic-content": "true", className: "text-6xl mb-4", "data-collection-item-field": "icon", "data-collection-item-id": currentStatusInfo?.id || currentStatusInfo?._id, children: currentStatusInfo.icon }, void 0, false, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 83,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/CustomerMenu:65:10", "data-dynamic-content": "true", className: "text-2xl font-bold text-gray-900 mb-2", "data-collection-item-field": "label", "data-collection-item-id": currentStatusInfo?.id || currentStatusInfo?._id, children: currentStatusInfo.label }, void 0, false, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 84,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/CustomerMenu:66:10", "data-dynamic-content": "true", className: "text-gray-500", children: [
            order.status === "pending" && "Your order has been received",
            order.status === "confirmed" && "Restaurant has confirmed your order",
            order.status === "preparing" && "Your food is being prepared",
            order.status === "ready" && "Your order is ready!",
            order.status === "out_for_delivery" && "Your order is on the way",
            order.status === "delivered" && "Your order has been delivered",
            order.status === "completed" && "Thank you for your order!"
          ] }, void 0, true, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 85,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/CustomerMenu.jsx",
          lineNumber: 82,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:78:8", "data-dynamic-content": "true", className: "bg-gray-50 rounded-xl p-4 mb-6", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:79:10", "data-dynamic-content": "true", className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/CustomerMenu:80:12", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Order Number" }, void 0, false, {
              fileName: "/app/src/pages/CustomerMenu.jsx",
              lineNumber: 99,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/CustomerMenu:81:12", "data-dynamic-content": "true", className: `bg-${currentStatusInfo.color}-600 text-white`, children: order.payment_status === "paid" ? "Paid" : "COD" }, void 0, false, {
              fileName: "/app/src/pages/CustomerMenu.jsx",
              lineNumber: 100,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 98,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/CustomerMenu:85:10", "data-dynamic-content": "true", className: "text-2xl font-bold text-orange-600 mb-2", "data-collection-item-field": "order_number", "data-collection-item-id": order?.id || order?._id, children: order.order_number }, void 0, false, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 104,
            columnNumber: 11
          }, this),
          tableNumber && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/CustomerMenu:87:12", "data-dynamic-content": "true", className: "text-sm text-gray-500", "data-collection-item-field": "tableNumber", "data-collection-item-id": __dataCollectionItemId, children: [
            "Table ",
            tableNumber
          ] }, void 0, true, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 106,
            columnNumber: 11
          }, this),
          order.order_type === "delivery" && order.delivery_address && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/CustomerMenu:90:12", "data-dynamic-content": "true", className: "text-sm text-gray-500 mt-2", "data-collection-item-field": "delivery_address", "data-collection-item-id": order?.id || order?._id, children: [
            "📍 ",
            order.delivery_address
          ] }, void 0, true, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 109,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/CustomerMenu.jsx",
          lineNumber: 97,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:95:8", "data-dynamic-content": "true", className: "space-y-2 mb-6 border-t pt-4", children: [
          order.items?.map(
            (item, i) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:97:12", "data-dynamic-content": "true", className: "flex justify-between text-sm", "data-collection-item-id": item?.["data-collection-item-id"], children: [
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/CustomerMenu:98:14", "data-dynamic-content": "true", "data-collection-item-field": "quantity", "data-collection-item-id": item?.id || item?._id, children: [
                item.quantity,
                "x ",
                item.name
              ] }, void 0, true, {
                fileName: "/app/src/pages/CustomerMenu.jsx",
                lineNumber: 117,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/CustomerMenu:99:14", "data-dynamic-content": "true", "data-collection-item-field": "total_price", "data-collection-item-id": item?.id || item?._id, children: [
                "₹",
                item.total_price
              ] }, void 0, true, {
                fileName: "/app/src/pages/CustomerMenu.jsx",
                lineNumber: 118,
                columnNumber: 15
              }, this)
            ] }, i, true, {
              fileName: "/app/src/pages/CustomerMenu.jsx",
              lineNumber: 116,
              columnNumber: 11
            }, this)
          ),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:102:10", "data-dynamic-content": "true", className: "flex justify-between font-bold pt-2 border-t", children: [
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/CustomerMenu:103:12", "data-dynamic-content": "false", children: "Total" }, void 0, false, {
              fileName: "/app/src/pages/CustomerMenu.jsx",
              lineNumber: 122,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/CustomerMenu:104:12", "data-dynamic-content": "true", "data-collection-item-field": "total_amount", "data-collection-item-id": order?.id || order?._id, children: [
              "₹",
              order.total_amount
            ] }, void 0, true, {
              fileName: "/app/src/pages/CustomerMenu.jsx",
              lineNumber: 123,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 121,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/CustomerMenu.jsx",
          lineNumber: 114,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/CustomerMenu:108:8", "data-dynamic-content": "true", onClick: onOrderMore, variant: "outline", className: "w-full", children: "Order More" }, void 0, false, {
          fileName: "/app/src/pages/CustomerMenu.jsx",
          lineNumber: 127,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/app/src/pages/CustomerMenu.jsx",
      lineNumber: 76,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "/app/src/pages/CustomerMenu.jsx",
    lineNumber: 75,
    columnNumber: 5
  }, this);
}
_s(OrderTrackingScreen, "T/poyOJ1Dg4EYHtWtz7Vm0IaKbE=");
_c = OrderTrackingScreen;
export default function CustomerMenu() {
  _s2();
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
    location: null,
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(null);
  const [orderType, setOrderType] = useState("dine_in");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [customerData, setCustomerData] = useState(null);
  const [loyaltyRewards, setLoyaltyRewards] = useState([]);
  const [selectedZone, setSelectedZone] = useState(null);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const urlParams = new URLSearchParams(window.location.search);
  const restaurantId = urlParams.get("r");
  const tableNumber = urlParams.get("table");
  useEffect(() => {
    if (restaurantId) {
      loadData();
      loadLoyaltyRewards();
    } else {
      setError("No restaurant specified");
      setIsLoading(false);
    }
  }, [restaurantId]);
  const loadLoyaltyRewards = async () => {
    try {
      const rewards = await base44.entities.LoyaltyReward.filter({
        restaurant_id: restaurantId,
        is_active: true
      }, "points_required");
      setLoyaltyRewards(rewards);
    } catch (e) {
      console.log("Failed to load rewards", e);
    }
  };
  const loadCustomerData = async (phone) => {
    if (!phone) return;
    try {
      const customers = await base44.entities.Customer.filter({
        restaurant_id: restaurantId,
        phone
      });
      if (customers.length > 0) {
        setCustomerData(customers[0]);
      }
    } catch (e) {
      console.log("Failed to load customer data", e);
    }
  };
  const checkDeliveryZone = (address) => {
    if (!restaurant?.delivery_zones || !address) return;
    const addressLower = address.toLowerCase();
    const matchedZone = restaurant.delivery_zones.find(
      (zone) => zone.areas?.some((area) => addressLower.includes(area.toLowerCase()))
    );
    if (matchedZone) {
      setSelectedZone(matchedZone);
      setDeliveryFee(matchedZone.delivery_fee || 0);
    }
  };
  const loadData = async () => {
    try {
      const [restaurants, items] = await Promise.all(
        [
          base44.entities.Restaurant.filter({ restaurant_id: restaurantId }),
          base44.entities.MenuItem.filter({ restaurant_id: restaurantId, is_available: true }, "sort_order")
        ]
      );
      if (restaurants.length === 0) {
        setError("Restaurant not found");
      } else {
        setRestaurant(restaurants[0]);
        setMenuItems(items);
      }
    } catch (e) {
      setError("Failed to load menu");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };
  const categories = [...new Set(menuItems.map((item) => item.category))].filter(Boolean);
  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });
  const groupedItems = filteredItems.reduce((acc, item) => {
    const category = item.category || "Other";
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});
  const addToCart = (item, quantity = 1) => {
    const existing = cart.find((c) => c.item.id === item.id);
    if (existing) {
      setCart(cart.map(
        (c) => c.item.id === item.id ? { ...c, quantity: c.quantity + quantity } : c
      ));
    } else {
      setCart([...cart, { item, quantity }]);
    }
  };
  const updateCartQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      setCart(cart.filter((c) => c.item.id !== itemId));
    } else {
      setCart(cart.map(
        (c) => c.item.id === itemId ? { ...c, quantity } : c
      ));
    }
  };
  const getCartTotal = () => {
    return cart.reduce((sum, c) => sum + c.item.price * c.quantity, 0);
  };
  const getCartItemCount = () => {
    return cart.reduce((sum, c) => sum + c.quantity, 0);
  };
  const getItemInCart = (itemId) => {
    return cart.find((c) => c.item.id === itemId);
  };
  const generateOrderNumber = () => {
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 5).toUpperCase();
    return `ORD-${timestamp}${random}`;
  };
  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation not supported"));
        return;
      }
      navigator.geolocation.getCurrentPosition(
        (position) => resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }),
        (error2) => reject(error2)
      );
    });
  };
  const downloadBill = (orderData) => {
    const paymentMethodLabel = {
      "cash": "Cash on Delivery",
      "online": "Online Payment",
      "upi": "UPI",
      "card": "Card",
      "razorpay": "Online Payment"
    };
    const billContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; max-width: 400px; margin: 0 auto; }
          .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 20px; }
          .header h1 { margin: 0; font-size: 24px; }
          .header p { margin: 5px 0; font-size: 12px; color: #666; }
          .order-info { margin-bottom: 20px; }
          .order-info p { margin: 5px 0; }
          .items { border-top: 1px dashed #000; border-bottom: 1px dashed #000; padding: 10px 0; }
          .item { display: flex; justify-content: space-between; margin: 8px 0; }
          .totals { margin-top: 10px; }
          .total-row { display: flex; justify-content: space-between; margin: 5px 0; }
          .total-row.final { font-weight: bold; font-size: 18px; border-top: 2px solid #000; padding-top: 10px; margin-top: 10px; }
          .payment-info { background: #f5f5f5; padding: 10px; border-radius: 5px; margin-top: 15px; }
          .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>${restaurant.name}</h1>
          <p>${restaurant.address || restaurant.city}</p>
          <p>Phone: ${restaurant.phone}</p>
        </div>
        
        <div class="order-info">
          <p><strong>Order #:</strong> ${orderData.order_number}</p>
          <p><strong>Date:</strong> ${(/* @__PURE__ */ new Date()).toLocaleString()}</p>
          <p><strong>Type:</strong> ${orderData.order_type.replace("_", " ").toUpperCase()}</p>
          ${orderData.table_number ? `<p><strong>Table:</strong> ${orderData.table_number}</p>` : ""}
          ${orderData.customer_name ? `<p><strong>Customer:</strong> ${orderData.customer_name}</p>` : ""}
          ${orderData.customer_phone ? `<p><strong>Phone:</strong> ${orderData.customer_phone}</p>` : ""}
        </div>
        
        <div class="items">
          <h3>Items:</h3>
          ${orderData.items.map((item) => `
            <div class="item">
              <span>${item.quantity}x ${item.name}</span>
              <span>₹${item.total_price}</span>
            </div>
          `).join("")}
        </div>
        
        <div class="totals">
          <div class="total-row">
            <span>Subtotal:</span>
            <span>₹${orderData.subtotal}</span>
          </div>
          <div class="total-row">
            <span>Tax:</span>
            <span>₹${orderData.tax_amount}</span>
          </div>
          ${orderData.service_charge > 0 ? `
          <div class="total-row">
            <span>Delivery Fee:</span>
            <span>₹${orderData.service_charge}</span>
          </div>
          ` : ""}
          <div class="total-row final">
            <span>Total:</span>
            <span>₹${orderData.total_amount}</span>
          </div>
        </div>

        <div class="payment-info">
          <p><strong>Payment Method:</strong> ${paymentMethodLabel[orderData.payment_method] || orderData.payment_method}</p>
          <p><strong>Payment Status:</strong> ${orderData.payment_status === "paid" ? "PAID ✓" : "Pending"}</p>
          ${orderData.payment_transaction_id ? `<p style="font-size: 10px;"><strong>Transaction ID:</strong> ${orderData.payment_transaction_id}</p>` : ""}
        </div>
        
        <div class="footer">
          <p>Thank you for your order!</p>
          <p>Powered by AxoraDigi</p>
        </div>
      </body>
      </html>
    `;
    const printWindow = window.open("", "", "height=600,width=400");
    printWindow.document.write(billContent);
    printWindow.document.close();
    printWindow.print();
  };
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };
  const processRazorpayPayment = async (orderAmount, orderData) => {
    if (!restaurant.razorpay_key_id) {
      alert("Online payment not configured. Please pay with cash.");
      return { success: false };
    }
    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      alert("Failed to load payment gateway. Please try again.");
      return { success: false };
    }
    return new Promise((resolve) => {
      const options = {
        key: restaurant.razorpay_key_id,
        amount: orderAmount * 100,
        // Convert to paise
        currency: "INR",
        name: restaurant.name,
        description: `Order at ${restaurant.name}`,
        image: restaurant.logo_url || "",
        handler: async function(response) {
          try {
            const finalOrderData = {
              ...orderData,
              payment_status: "paid",
              payment_transaction_id: response.razorpay_payment_id
            };
            const order = await base44.entities.Order.create(finalOrderData);
            await updateCustomerLoyalty(orderData.total_amount);
            downloadBill(finalOrderData);
            resolve({
              success: true,
              transaction_id: response.razorpay_payment_id,
              order
            });
          } catch (e) {
            console.error("Failed to create order after payment", e);
            alert("Payment successful but order creation failed. Please contact restaurant.");
            resolve({ success: false });
          }
        },
        modal: {
          ondismiss: function() {
            resolve({ success: false });
          }
        },
        prefill: {
          name: customerInfo.name,
          contact: customerInfo.phone
        },
        theme: {
          color: "#ea580c"
        }
      };
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    });
  };
  const updateCustomerLoyalty = async (total) => {
    if (!customerInfo.phone || customerInfo.phone === "guest") return;
    try {
      const existingCustomers = await base44.entities.Customer.filter({
        restaurant_id: restaurantId,
        phone: customerInfo.phone
      });
      const tokensEarned = Math.floor(total / 10);
      if (existingCustomers.length > 0) {
        const customer = existingCustomers[0];
        const newEarnedTokens = (customer.earned_tokens || 0) + tokensEarned;
        const newAvailableTokens = (customer.loyalty_points || 0) + tokensEarned;
        const newTotalSpent = (customer.total_spent || 0) + total;
        let tier = "bronze";
        if (newTotalSpent >= 5e4) tier = "platinum";
        else if (newTotalSpent >= 25e3) tier = "gold";
        else if (newTotalSpent >= 1e4) tier = "silver";
        await base44.entities.Customer.update(customer.id, {
          name: customerInfo.name || customer.name,
          total_orders: (customer.total_orders || 0) + 1,
          total_spent: newTotalSpent,
          loyalty_points: newAvailableTokens,
          earned_tokens: newEarnedTokens,
          loyalty_tier: tier,
          last_order_date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
        });
      } else {
        await base44.entities.Customer.create({
          restaurant_id: restaurantId,
          name: customerInfo.name || "Customer",
          phone: customerInfo.phone,
          total_orders: 1,
          total_spent: total,
          loyalty_points: tokensEarned,
          earned_tokens: tokensEarned,
          redeemed_tokens: 0,
          loyalty_tier: "bronze",
          last_order_date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
        });
      }
    } catch (e) {
      console.log("Customer update failed", e);
    }
  };
  const handleSubmitOrder = async () => {
    if (cart.length === 0) return;
    if (orderType === "dine_in" && tableNumber) {
    } else if (orderType === "takeaway") {
      if (!customerInfo.name || !customerInfo.phone) return;
    } else if (orderType === "delivery") {
      if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) return;
    } else {
      if (!customerInfo.name || !customerInfo.phone) return;
    }
    setIsSubmitting(true);
    let locationData = null;
    if (orderType === "delivery") {
      locationData = customerInfo.location;
      if (!locationData) {
        try {
          locationData = await getCurrentLocation();
          setCustomerInfo({ ...customerInfo, location: locationData });
        } catch (e) {
          console.log("Could not get location", e);
        }
      }
    }
    const taxRate = restaurant?.settings?.tax_rate || 5;
    const subtotal = getCartTotal();
    const taxAmount = Math.round(subtotal * taxRate / 100);
    const total = subtotal + taxAmount + deliveryFee;
    const orderData = {
      restaurant_id: restaurantId,
      order_number: generateOrderNumber(),
      order_type: orderType,
      table_number: orderType === "dine_in" ? tableNumber || "" : "",
      customer_name: customerInfo.name || "Guest",
      customer_phone: customerInfo.phone || "",
      delivery_address: orderType === "delivery" ? customerInfo.address : "",
      delivery_location: locationData,
      items: cart.map((c) => ({
        menu_item_id: c.item.id,
        name: c.item.name,
        quantity: c.quantity,
        unit_price: c.item.price,
        total_price: c.item.price * c.quantity
      })),
      subtotal,
      tax_amount: taxAmount,
      service_charge: deliveryFee,
      total_amount: total,
      status: "pending",
      payment_status: "pending",
      payment_method: paymentMethod,
      notes: customerInfo.notes
    };
    if (paymentMethod !== "cash") {
      setIsProcessingPayment(true);
      const paymentResult = await processRazorpayPayment(total, orderData);
      setIsProcessingPayment(false);
      if (!paymentResult.success) {
        setIsSubmitting(false);
        return;
      }
      setOrderSuccess(paymentResult.order);
    } else {
      const order = await base44.entities.Order.create(orderData);
      downloadBill(orderData);
      await updateCustomerLoyalty(total);
      setOrderSuccess(order);
    }
    setIsSubmitting(false);
    setIsCheckoutOpen(false);
    setCart([]);
    setCustomerInfo({ name: "", phone: "", address: "", location: null, notes: "" });
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:628:6", "data-dynamic-content": "false", className: "min-h-screen bg-gray-50 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:629:8", "data-dynamic-content": "false", className: "text-center", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:630:10", "data-dynamic-content": "false", className: "animate-spin rounded-full h-10 w-10 border-b-2 border-orange-600 mx-auto mb-4" }, void 0, false, {
        fileName: "/app/src/pages/CustomerMenu.jsx",
        lineNumber: 649,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/CustomerMenu:631:10", "data-dynamic-content": "false", className: "text-gray-500", children: "Loading menu..." }, void 0, false, {
        fileName: "/app/src/pages/CustomerMenu.jsx",
        lineNumber: 650,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/CustomerMenu.jsx",
      lineNumber: 648,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/CustomerMenu.jsx",
      lineNumber: 647,
      columnNumber: 7
    }, this);
  }
  if (error) {
    return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:639:6", "data-dynamic-content": "true", className: "min-h-screen bg-gray-50 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:640:8", "data-dynamic-content": "true", className: "text-center", children: [
      /* @__PURE__ */ jsxDEV(Store, { "data-source-location": "pages/CustomerMenu:641:10", "data-dynamic-content": "false", className: "w-16 h-16 text-gray-300 mx-auto mb-4" }, void 0, false, {
        fileName: "/app/src/pages/CustomerMenu.jsx",
        lineNumber: 660,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/CustomerMenu:642:10", "data-dynamic-content": "true", className: "text-xl font-semibold text-gray-900 mb-2", "data-collection-item-field": "error", children: error }, void 0, false, {
        fileName: "/app/src/pages/CustomerMenu.jsx",
        lineNumber: 661,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/CustomerMenu:643:10", "data-dynamic-content": "false", className: "text-gray-500", children: "Please check the URL and try again" }, void 0, false, {
        fileName: "/app/src/pages/CustomerMenu.jsx",
        lineNumber: 662,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/CustomerMenu.jsx",
      lineNumber: 659,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/CustomerMenu.jsx",
      lineNumber: 658,
      columnNumber: 7
    }, this);
  }
  if (orderSuccess) {
    return /* @__PURE__ */ jsxDEV(OrderTrackingScreen, { "data-source-location": "pages/CustomerMenu:650:11", "data-dynamic-content": "true", order: orderSuccess, restaurant, tableNumber, onOrderMore: () => setOrderSuccess(null) }, void 0, false, {
      fileName: "/app/src/pages/CustomerMenu.jsx",
      lineNumber: 669,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:654:4", "data-dynamic-content": "true", className: "min-h-screen bg-gray-50 pb-24", children: [
    /* @__PURE__ */ jsxDEV(CustomerChatWidget, { "data-source-location": "pages/CustomerMenu:656:6", "data-dynamic-content": "true", restaurant }, void 0, false, {
      fileName: "/app/src/pages/CustomerMenu.jsx",
      lineNumber: 675,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:658:6", "data-dynamic-content": "true", className: "bg-white shadow-sm sticky top-0 z-40", "data-collection-item-field": "cover_image_url", "data-collection-item-id": restaurant?.id || restaurant?._id, children: [
      restaurant?.cover_image_url && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:661:10", "data-dynamic-content": "true", className: "w-full h-32 overflow-hidden", "data-collection-item-field": "cover_image_url", "data-collection-item-id": restaurant?.id || restaurant?._id, children: /* @__PURE__ */ jsxDEV(
        "img",
        {
          "data-source-location": "pages/CustomerMenu:662:12",
          "data-dynamic-content": "true",
          src: restaurant.cover_image_url,
          alt: restaurant.name,
          className: "w-full h-full object-cover"
        },
        void 0,
        false,
        {
          fileName: "/app/src/pages/CustomerMenu.jsx",
          lineNumber: 681,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "/app/src/pages/CustomerMenu.jsx",
        lineNumber: 680,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:671:8", "data-dynamic-content": "true", className: `${restaurant?.cover_image_url ? "bg-white" : "bg-gradient-to-r from-orange-600 to-orange-500"} ${restaurant?.cover_image_url ? "text-gray-900" : "text-white"} p-4`, children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:672:10", "data-dynamic-content": "true", className: "flex items-center gap-4", children: [
        restaurant?.logo_url ? /* @__PURE__ */ jsxDEV(
          "img",
          {
            "data-source-location": "pages/CustomerMenu:674:14",
            "data-dynamic-content": "true",
            src: restaurant.logo_url,
            alt: restaurant.name,
            className: "w-14 h-14 rounded-xl object-cover bg-white shadow-md"
          },
          void 0,
          false,
          {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 693,
            columnNumber: 13
          },
          this
        ) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:680:14", "data-dynamic-content": "true", className: `w-14 h-14 rounded-xl ${restaurant?.cover_image_url ? "bg-orange-100" : "bg-white/20"} flex items-center justify-center`, children: /* @__PURE__ */ jsxDEV(Store, { "data-source-location": "pages/CustomerMenu:681:16", "data-dynamic-content": "true", className: `w-7 h-7 ${restaurant?.cover_image_url ? "text-orange-600" : ""}` }, void 0, false, {
          fileName: "/app/src/pages/CustomerMenu.jsx",
          lineNumber: 700,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/CustomerMenu.jsx",
          lineNumber: 699,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:684:12", "data-dynamic-content": "true", className: "flex-1", children: [
          /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/CustomerMenu:685:14", "data-dynamic-content": "true", className: "text-xl font-bold", "data-collection-item-field": "name", "data-collection-item-id": restaurant?.id || restaurant?._id, children: restaurant?.name }, void 0, false, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 704,
            columnNumber: 15
          }, this),
          restaurant?.cuisine_type?.length > 0 && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/CustomerMenu:687:16", "data-dynamic-content": "true", className: `text-sm ${restaurant?.cover_image_url ? "text-gray-600" : "text-orange-100"}`, children: restaurant.cuisine_type.slice(0, 3).join(" • ") }, void 0, false, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 706,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/CustomerMenu.jsx",
          lineNumber: 703,
          columnNumber: 13
        }, this),
        tableNumber && /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/CustomerMenu:693:14", "data-dynamic-content": "true", className: restaurant?.cover_image_url ? "bg-orange-600 text-white" : "bg-white/20 text-white", "data-collection-item-field": "tableNumber", children: [
          "Table ",
          tableNumber
        ] }, void 0, true, {
          fileName: "/app/src/pages/CustomerMenu.jsx",
          lineNumber: 712,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/CustomerMenu.jsx",
        lineNumber: 691,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/CustomerMenu.jsx",
        lineNumber: 690,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:701:8", "data-dynamic-content": "true", className: "p-3 border-b", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:702:10", "data-dynamic-content": "true", className: "relative", children: [
        /* @__PURE__ */ jsxDEV(Search, { "data-source-location": "pages/CustomerMenu:703:12", "data-dynamic-content": "false", className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }, void 0, false, {
          fileName: "/app/src/pages/CustomerMenu.jsx",
          lineNumber: 722,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          Input,
          {
            "data-source-location": "pages/CustomerMenu:704:12",
            "data-dynamic-content": "true",
            placeholder: "Search menu...",
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            className: "pl-9"
          },
          void 0,
          false,
          {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 723,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/src/pages/CustomerMenu.jsx",
        lineNumber: 721,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/CustomerMenu.jsx",
        lineNumber: 720,
        columnNumber: 9
      }, this),
      !tableNumber && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:715:10", "data-dynamic-content": "true", className: "flex gap-2 p-3 border-b bg-gray-50", children: [
        /* @__PURE__ */ jsxDEV(
          Button,
          {
            "data-source-location": "pages/CustomerMenu:716:12",
            "data-dynamic-content": "true",
            variant: orderType === "dine_in" ? "default" : "outline",
            size: "sm",
            onClick: () => setOrderType("dine_in"),
            className: `flex-1 ${orderType === "dine_in" ? "bg-orange-600 hover:bg-orange-700" : ""}`,
            children: "Dine In"
          },
          void 0,
          false,
          {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 735,
            columnNumber: 13
          },
          this
        ),
        restaurant?.features_enabled?.takeaway === true && /* @__PURE__ */ jsxDEV(
          Button,
          {
            "data-source-location": "pages/CustomerMenu:725:14",
            "data-dynamic-content": "true",
            variant: orderType === "takeaway" ? "default" : "outline",
            size: "sm",
            onClick: () => {
              setOrderType("takeaway");
              setDeliveryFee(0);
            },
            className: `flex-1 ${orderType === "takeaway" ? "bg-orange-600 hover:bg-orange-700" : ""}`,
            children: "Takeaway"
          },
          void 0,
          false,
          {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 744,
            columnNumber: 11
          },
          this
        ),
        restaurant?.features_enabled?.delivery === true && /* @__PURE__ */ jsxDEV(
          Button,
          {
            "data-source-location": "pages/CustomerMenu:738:14",
            "data-dynamic-content": "true",
            variant: orderType === "delivery" ? "default" : "outline",
            size: "sm",
            onClick: () => setOrderType("delivery"),
            className: `flex-1 ${orderType === "delivery" ? "bg-orange-600 hover:bg-orange-700" : ""}`,
            children: "Delivery"
          },
          void 0,
          false,
          {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 757,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/src/pages/CustomerMenu.jsx",
        lineNumber: 734,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:751:8", "data-dynamic-content": "true", className: "flex gap-2 p-3 overflow-x-auto scrollbar-hide", children: [
        /* @__PURE__ */ jsxDEV(
          Button,
          {
            "data-source-location": "pages/CustomerMenu:752:10",
            "data-dynamic-content": "true",
            variant: activeCategory === "all" ? "default" : "outline",
            size: "sm",
            onClick: () => setActiveCategory("all"),
            className: activeCategory === "all" ? "bg-orange-600 hover:bg-orange-700" : "",
            children: "All"
          },
          void 0,
          false,
          {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 771,
            columnNumber: 11
          },
          this
        ),
        categories.map(
          (category) => /* @__PURE__ */ jsxDEV(
            Button,
            {
              "data-source-location": "pages/CustomerMenu:761:12",
              "data-dynamic-content": "true",
              variant: activeCategory === category ? "default" : "outline",
              size: "sm",
              onClick: () => setActiveCategory(category),
              className: `whitespace-nowrap ${activeCategory === category ? "bg-orange-600 hover:bg-orange-700" : ""}`,
              "data-collection-item-field": "category",
              children: category
            },
            category,
            false,
            {
              fileName: "/app/src/pages/CustomerMenu.jsx",
              lineNumber: 780,
              columnNumber: 11
            },
            this
          )
        )
      ] }, void 0, true, {
        fileName: "/app/src/pages/CustomerMenu.jsx",
        lineNumber: 770,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/CustomerMenu.jsx",
      lineNumber: 677,
      columnNumber: 7
    }, this),
    customerData && /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-source-location": "pages/CustomerMenu:776:8",
        "data-dynamic-content": "true",
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        className: "mx-4 mt-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl p-4 text-white shadow-lg",
        children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:781:10", "data-dynamic-content": "true", className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:782:12", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/CustomerMenu:783:14", "data-dynamic-content": "false", className: "text-sm opacity-90", children: "Your Loyalty Points" }, void 0, false, {
                fileName: "/app/src/pages/CustomerMenu.jsx",
                lineNumber: 802,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/CustomerMenu:784:14", "data-dynamic-content": "true", className: "text-2xl font-bold", children: [
                customerData.loyalty_points || 0,
                " Points"
              ] }, void 0, true, {
                fileName: "/app/src/pages/CustomerMenu.jsx",
                lineNumber: 803,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/CustomerMenu:785:14", "data-dynamic-content": "true", className: "text-xs opacity-75 mt-1", children: [
                "Tier: ",
                customerData.loyalty_tier?.toUpperCase()
              ] }, void 0, true, {
                fileName: "/app/src/pages/CustomerMenu.jsx",
                lineNumber: 804,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/CustomerMenu.jsx",
              lineNumber: 801,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:787:12", "data-dynamic-content": "true", className: "text-right", children: /* @__PURE__ */ jsxDEV(
              Button,
              {
                "data-source-location": "pages/CustomerMenu:788:14",
                "data-dynamic-content": "true",
                size: "sm",
                variant: "secondary",
                onClick: () => {
                  const rewardsInfo = loyaltyRewards.filter((r) => r.points_required <= (customerData.loyalty_points || 0)).map((r) => `${r.name} (${r.points_required} pts)`).join("\n");
                  alert(rewardsInfo || "No rewards available yet. Keep ordering to earn more points!");
                },
                children: "View Rewards"
              },
              void 0,
              false,
              {
                fileName: "/app/src/pages/CustomerMenu.jsx",
                lineNumber: 807,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "/app/src/pages/CustomerMenu.jsx",
              lineNumber: 806,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 800,
            columnNumber: 11
          }, this),
          loyaltyRewards.filter((r) => r.points_required <= (customerData.loyalty_points || 0)).length > 0 && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/CustomerMenu:804:12", "data-dynamic-content": "true", className: "text-xs mt-2 opacity-90", children: [
            "🎉 You have ",
            loyaltyRewards.filter((r) => r.points_required <= (customerData.loyalty_points || 0)).length,
            " reward(s) available!"
          ] }, void 0, true, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 823,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/src/pages/CustomerMenu.jsx",
        lineNumber: 795,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:812:6", "data-dynamic-content": "true", className: "p-4 space-y-6", children: [
      Object.entries(groupedItems).map(
        ([category, items]) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:814:10", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "pages/CustomerMenu:815:12", "data-dynamic-content": "true", className: "text-lg font-bold text-gray-900 mb-3", "data-collection-item-field": "category", children: category }, void 0, false, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 834,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:816:12", "data-dynamic-content": "true", className: "space-y-3", children: items.map((item) => {
            const inCart = getItemInCart(item.id);
            return /* @__PURE__ */ jsxDEV(
              motion.div,
              {
                "data-source-location": "pages/CustomerMenu:820:18",
                "data-dynamic-content": "true",
                layout: true,
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                className: "bg-white rounded-xl p-4 shadow-sm flex gap-4",
                onClick: () => setSelectedItem(item),
                "data-collection-item-id": item?.id,
                children: [
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:829:20", "data-dynamic-content": "true", className: "w-24 h-24 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0", children: item.image_url ? /* @__PURE__ */ jsxDEV(
                    "img",
                    {
                      "data-source-location": "pages/CustomerMenu:831:24",
                      "data-dynamic-content": "true",
                      src: item.image_url,
                      alt: item.name,
                      className: "w-full h-full object-cover"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/src/pages/CustomerMenu.jsx",
                      lineNumber: 850,
                      columnNumber: 21
                    },
                    this
                  ) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:837:24", "data-dynamic-content": "false", className: "w-full h-full flex items-center justify-center text-3xl", children: "🍽️" }, void 0, false, {
                    fileName: "/app/src/pages/CustomerMenu.jsx",
                    lineNumber: 856,
                    columnNumber: 21
                  }, this) }, void 0, false, {
                    fileName: "/app/src/pages/CustomerMenu.jsx",
                    lineNumber: 848,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:844:20", "data-dynamic-content": "true", className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:845:22", "data-dynamic-content": "true", className: "flex items-start justify-between gap-2", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:846:24", "data-dynamic-content": "true", "data-collection-item-field": "description", "data-collection-item-id": item?.id, children: [
                      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:847:26", "data-dynamic-content": "true", className: "flex items-center gap-2 flex-wrap", "data-collection-item-field": "is_vegetarian", "data-collection-item-id": item?.id, children: [
                        /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/CustomerMenu:848:28", "data-dynamic-content": "true", className: "font-medium text-gray-900", "data-collection-item-field": "name", "data-collection-item-id": item?.id, children: item.name }, void 0, false, {
                          fileName: "/app/src/pages/CustomerMenu.jsx",
                          lineNumber: 867,
                          columnNumber: 29
                        }, this),
                        item.is_vegetarian && /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/CustomerMenu:850:30", "data-dynamic-content": "false", className: "w-4 h-4 border-2 border-green-600 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/CustomerMenu:851:32", "data-dynamic-content": "false", className: "w-2 h-2 bg-green-600 rounded-full" }, void 0, false, {
                          fileName: "/app/src/pages/CustomerMenu.jsx",
                          lineNumber: 870,
                          columnNumber: 33
                        }, this) }, void 0, false, {
                          fileName: "/app/src/pages/CustomerMenu.jsx",
                          lineNumber: 869,
                          columnNumber: 27
                        }, this),
                        item.is_spicy && /* @__PURE__ */ jsxDEV(Flame, { "data-source-location": "pages/CustomerMenu:855:30", "data-dynamic-content": "false", className: "w-4 h-4 text-red-500" }, void 0, false, {
                          fileName: "/app/src/pages/CustomerMenu.jsx",
                          lineNumber: 874,
                          columnNumber: 27
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/src/pages/CustomerMenu.jsx",
                        lineNumber: 866,
                        columnNumber: 27
                      }, this),
                      item.description && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/CustomerMenu:859:28", "data-dynamic-content": "true", className: "text-sm text-gray-500 line-clamp-2 mt-1", "data-collection-item-field": "description", "data-collection-item-id": item?.id, children: item.description }, void 0, false, {
                        fileName: "/app/src/pages/CustomerMenu.jsx",
                        lineNumber: 878,
                        columnNumber: 25
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/src/pages/CustomerMenu.jsx",
                      lineNumber: 865,
                      columnNumber: 25
                    }, this) }, void 0, false, {
                      fileName: "/app/src/pages/CustomerMenu.jsx",
                      lineNumber: 864,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:866:22", "data-dynamic-content": "true", className: "flex items-center justify-between mt-3", children: [
                      /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/CustomerMenu:867:24", "data-dynamic-content": "true", className: "font-bold text-gray-900", "data-collection-item-field": "price", "data-collection-item-id": item?.id, children: [
                        "₹",
                        item.price
                      ] }, void 0, true, {
                        fileName: "/app/src/pages/CustomerMenu.jsx",
                        lineNumber: 886,
                        columnNumber: 25
                      }, this),
                      inCart ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:870:26", "data-dynamic-content": "true", className: "flex items-center gap-2", onClick: (e) => e.stopPropagation(), children: [
                        /* @__PURE__ */ jsxDEV(
                          Button,
                          {
                            "data-source-location": "pages/CustomerMenu:871:28",
                            "data-dynamic-content": "true",
                            size: "icon",
                            variant: "outline",
                            className: "h-8 w-8",
                            onClick: () => updateCartQuantity(item.id, inCart.quantity - 1),
                            children: /* @__PURE__ */ jsxDEV(Minus, { "data-source-location": "pages/CustomerMenu:877:30", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                              fileName: "/app/src/pages/CustomerMenu.jsx",
                              lineNumber: 896,
                              columnNumber: 31
                            }, this)
                          },
                          void 0,
                          false,
                          {
                            fileName: "/app/src/pages/CustomerMenu.jsx",
                            lineNumber: 890,
                            columnNumber: 29
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/CustomerMenu:879:28", "data-dynamic-content": "true", className: "w-6 text-center font-medium", "data-collection-item-field": "quantity", "data-collection-item-id": inCart?.id, children: inCart.quantity }, void 0, false, {
                          fileName: "/app/src/pages/CustomerMenu.jsx",
                          lineNumber: 898,
                          columnNumber: 29
                        }, this),
                        /* @__PURE__ */ jsxDEV(
                          Button,
                          {
                            "data-source-location": "pages/CustomerMenu:880:28",
                            "data-dynamic-content": "true",
                            size: "icon",
                            className: "h-8 w-8 bg-orange-600 hover:bg-orange-700",
                            onClick: () => updateCartQuantity(item.id, inCart.quantity + 1),
                            children: /* @__PURE__ */ jsxDEV(Plus, { "data-source-location": "pages/CustomerMenu:885:30", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                              fileName: "/app/src/pages/CustomerMenu.jsx",
                              lineNumber: 904,
                              columnNumber: 31
                            }, this)
                          },
                          void 0,
                          false,
                          {
                            fileName: "/app/src/pages/CustomerMenu.jsx",
                            lineNumber: 899,
                            columnNumber: 29
                          },
                          this
                        )
                      ] }, void 0, true, {
                        fileName: "/app/src/pages/CustomerMenu.jsx",
                        lineNumber: 889,
                        columnNumber: 23
                      }, this) : /* @__PURE__ */ jsxDEV(
                        Button,
                        {
                          "data-source-location": "pages/CustomerMenu:889:26",
                          "data-dynamic-content": "true",
                          size: "sm",
                          variant: "outline",
                          className: "border-orange-200 text-orange-600",
                          onClick: (e) => {
                            e.stopPropagation();
                            addToCart(item);
                          },
                          children: [
                            /* @__PURE__ */ jsxDEV(Plus, { "data-source-location": "pages/CustomerMenu:898:28", "data-dynamic-content": "false", className: "w-4 h-4 mr-1" }, void 0, false, {
                              fileName: "/app/src/pages/CustomerMenu.jsx",
                              lineNumber: 917,
                              columnNumber: 29
                            }, this),
                            "Add"
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "/app/src/pages/CustomerMenu.jsx",
                          lineNumber: 908,
                          columnNumber: 23
                        },
                        this
                      )
                    ] }, void 0, true, {
                      fileName: "/app/src/pages/CustomerMenu.jsx",
                      lineNumber: 885,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/CustomerMenu.jsx",
                    lineNumber: 863,
                    columnNumber: 21
                  }, this)
                ]
              },
              item.id,
              true,
              {
                fileName: "/app/src/pages/CustomerMenu.jsx",
                lineNumber: 839,
                columnNumber: 17
              },
              this
            );
          }) }, void 0, false, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 835,
            columnNumber: 13
          }, this)
        ] }, category, true, {
          fileName: "/app/src/pages/CustomerMenu.jsx",
          lineNumber: 833,
          columnNumber: 9
        }, this)
      ),
      Object.keys(groupedItems).length === 0 && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:912:10", "data-dynamic-content": "false", className: "text-center py-12 text-gray-500", children: [
        /* @__PURE__ */ jsxDEV(Search, { "data-source-location": "pages/CustomerMenu:913:12", "data-dynamic-content": "false", className: "w-12 h-12 mx-auto mb-3 text-gray-300" }, void 0, false, {
          fileName: "/app/src/pages/CustomerMenu.jsx",
          lineNumber: 932,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/CustomerMenu:914:12", "data-dynamic-content": "false", children: "No items found" }, void 0, false, {
          fileName: "/app/src/pages/CustomerMenu.jsx",
          lineNumber: 933,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/CustomerMenu.jsx",
        lineNumber: 931,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/CustomerMenu.jsx",
      lineNumber: 831,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(AnimatePresence, { "data-source-location": "pages/CustomerMenu:920:6", "data-dynamic-content": "true", children: cart.length > 0 && /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-source-location": "pages/CustomerMenu:922:10",
        "data-dynamic-content": "true",
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 100, opacity: 0 },
        className: "fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg",
        children: /* @__PURE__ */ jsxDEV(
          Button,
          {
            "data-source-location": "pages/CustomerMenu:928:12",
            "data-dynamic-content": "true",
            className: "w-full bg-orange-600 hover:bg-orange-700 py-6 text-lg",
            onClick: () => setIsCartOpen(true),
            children: [
              /* @__PURE__ */ jsxDEV(ShoppingCart, { "data-source-location": "pages/CustomerMenu:932:14", "data-dynamic-content": "false", className: "w-5 h-5 mr-2" }, void 0, false, {
                fileName: "/app/src/pages/CustomerMenu.jsx",
                lineNumber: 951,
                columnNumber: 15
              }, this),
              "View Cart (",
              getCartItemCount(),
              ")",
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/CustomerMenu:934:14", "data-dynamic-content": "true", className: "ml-auto", children: [
                "₹",
                getCartTotal()
              ] }, void 0, true, {
                fileName: "/app/src/pages/CustomerMenu.jsx",
                lineNumber: 953,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 947,
            columnNumber: 13
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "/app/src/pages/CustomerMenu.jsx",
        lineNumber: 941,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "/app/src/pages/CustomerMenu.jsx",
      lineNumber: 939,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Sheet, { "data-source-location": "pages/CustomerMenu:941:6", "data-dynamic-content": "true", open: isCartOpen, onOpenChange: setIsCartOpen, children: /* @__PURE__ */ jsxDEV(SheetContent, { "data-source-location": "pages/CustomerMenu:942:8", "data-dynamic-content": "true", side: "bottom", className: "h-[85vh] rounded-t-2xl", children: [
      /* @__PURE__ */ jsxDEV(SheetHeader, { "data-source-location": "pages/CustomerMenu:943:10", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(SheetTitle, { "data-source-location": "pages/CustomerMenu:944:12", "data-dynamic-content": "false", children: "Your Order" }, void 0, false, {
        fileName: "/app/src/pages/CustomerMenu.jsx",
        lineNumber: 963,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/CustomerMenu.jsx",
        lineNumber: 962,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:947:10", "data-dynamic-content": "true", className: "mt-4 flex-1 overflow-y-auto", children: cart.map(
        (cartItem) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:949:14", "data-dynamic-content": "true", className: "flex items-center justify-between py-3 border-b", "data-collection-item-id": cartItem?.item?.id, children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:950:16", "data-dynamic-content": "true", className: "flex-1", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/CustomerMenu:951:18", "data-dynamic-content": "true", className: "font-medium", "data-collection-item-field": "item.name", "data-collection-item-id": cartItem?.id, children: cartItem.item.name }, void 0, false, {
              fileName: "/app/src/pages/CustomerMenu.jsx",
              lineNumber: 970,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/CustomerMenu:952:18", "data-dynamic-content": "true", className: "text-sm text-gray-500", "data-collection-item-field": "item.price", "data-collection-item-id": cartItem?.id, children: [
              "₹",
              cartItem.item.price,
              " each"
            ] }, void 0, true, {
              fileName: "/app/src/pages/CustomerMenu.jsx",
              lineNumber: 971,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 969,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:954:16", "data-dynamic-content": "true", className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV(
              Button,
              {
                "data-source-location": "pages/CustomerMenu:955:18",
                "data-dynamic-content": "true",
                size: "icon",
                variant: "outline",
                className: "h-8 w-8",
                onClick: () => updateCartQuantity(cartItem.item.id, cartItem.quantity - 1),
                children: /* @__PURE__ */ jsxDEV(Minus, { "data-source-location": "pages/CustomerMenu:961:20", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                  fileName: "/app/src/pages/CustomerMenu.jsx",
                  lineNumber: 980,
                  columnNumber: 21
                }, this)
              },
              void 0,
              false,
              {
                fileName: "/app/src/pages/CustomerMenu.jsx",
                lineNumber: 974,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/CustomerMenu:963:18", "data-dynamic-content": "true", className: "w-6 text-center", "data-collection-item-field": "quantity", "data-collection-item-id": cartItem?.id, children: cartItem.quantity }, void 0, false, {
              fileName: "/app/src/pages/CustomerMenu.jsx",
              lineNumber: 982,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(
              Button,
              {
                "data-source-location": "pages/CustomerMenu:964:18",
                "data-dynamic-content": "true",
                size: "icon",
                className: "h-8 w-8 bg-orange-600 hover:bg-orange-700",
                onClick: () => updateCartQuantity(cartItem.item.id, cartItem.quantity + 1),
                children: /* @__PURE__ */ jsxDEV(Plus, { "data-source-location": "pages/CustomerMenu:969:20", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                  fileName: "/app/src/pages/CustomerMenu.jsx",
                  lineNumber: 988,
                  columnNumber: 21
                }, this)
              },
              void 0,
              false,
              {
                fileName: "/app/src/pages/CustomerMenu.jsx",
                lineNumber: 983,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 973,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:972:16", "data-dynamic-content": "true", className: "w-20 text-right font-medium", children: [
            "₹",
            cartItem.item.price * cartItem.quantity
          ] }, void 0, true, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 991,
            columnNumber: 17
          }, this)
        ] }, cartItem.item.id, true, {
          fileName: "/app/src/pages/CustomerMenu.jsx",
          lineNumber: 968,
          columnNumber: 13
        }, this)
      ) }, void 0, false, {
        fileName: "/app/src/pages/CustomerMenu.jsx",
        lineNumber: 966,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:980:10", "data-dynamic-content": "true", className: "border-t pt-4 space-y-2", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:981:12", "data-dynamic-content": "true", className: "flex justify-between", children: [
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/CustomerMenu:982:14", "data-dynamic-content": "false", children: "Subtotal" }, void 0, false, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 1001,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/CustomerMenu:983:14", "data-dynamic-content": "true", children: [
            "₹",
            getCartTotal()
          ] }, void 0, true, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 1002,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/CustomerMenu.jsx",
          lineNumber: 1e3,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:985:12", "data-dynamic-content": "true", className: "flex justify-between text-sm text-gray-500", children: [
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/CustomerMenu:986:14", "data-dynamic-content": "true", children: [
            "Tax (",
            restaurant?.settings?.tax_rate || 5,
            "%)"
          ] }, void 0, true, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 1005,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/CustomerMenu:987:14", "data-dynamic-content": "true", children: [
            "₹",
            Math.round(getCartTotal() * (restaurant?.settings?.tax_rate || 5) / 100)
          ] }, void 0, true, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 1006,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/CustomerMenu.jsx",
          lineNumber: 1004,
          columnNumber: 13
        }, this),
        deliveryFee > 0 && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:990:14", "data-dynamic-content": "true", className: "flex justify-between text-sm text-gray-500", children: [
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/CustomerMenu:991:16", "data-dynamic-content": "false", children: "Delivery Fee" }, void 0, false, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 1010,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/CustomerMenu:992:16", "data-dynamic-content": "true", "data-collection-item-field": "deliveryFee", children: [
            "₹",
            deliveryFee
          ] }, void 0, true, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 1011,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/CustomerMenu.jsx",
          lineNumber: 1009,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:995:12", "data-dynamic-content": "true", className: "flex justify-between font-bold text-lg", children: [
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/CustomerMenu:996:14", "data-dynamic-content": "false", children: "Total" }, void 0, false, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 1015,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/CustomerMenu:997:14", "data-dynamic-content": "true", children: [
            "₹",
            getCartTotal() + Math.round(getCartTotal() * (restaurant?.settings?.tax_rate || 5) / 100) + deliveryFee
          ] }, void 0, true, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 1016,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/CustomerMenu.jsx",
          lineNumber: 1014,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/CustomerMenu.jsx",
        lineNumber: 999,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(
        Button,
        {
          "data-source-location": "pages/CustomerMenu:1001:10",
          "data-dynamic-content": "true",
          className: "w-full mt-4 bg-violet-600 hover:bg-violet-700 py-6 text-lg",
          onClick: () => {
            setIsCartOpen(false);
            setIsCheckoutOpen(true);
          },
          children: "Proceed to Order"
        },
        void 0,
        false,
        {
          fileName: "/app/src/pages/CustomerMenu.jsx",
          lineNumber: 1020,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/src/pages/CustomerMenu.jsx",
      lineNumber: 961,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/CustomerMenu.jsx",
      lineNumber: 960,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Dialog, { "data-source-location": "pages/CustomerMenu:1014:6", "data-dynamic-content": "true", open: isCheckoutOpen, onOpenChange: setIsCheckoutOpen, children: /* @__PURE__ */ jsxDEV(DialogContent, { "data-source-location": "pages/CustomerMenu:1015:8", "data-dynamic-content": "true", className: "max-w-md max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxDEV(DialogHeader, { "data-source-location": "pages/CustomerMenu:1016:10", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(DialogTitle, { "data-source-location": "pages/CustomerMenu:1017:12", "data-dynamic-content": "false", children: "Complete Your Order" }, void 0, false, {
        fileName: "/app/src/pages/CustomerMenu.jsx",
        lineNumber: 1036,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/CustomerMenu.jsx",
        lineNumber: 1035,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:1020:10", "data-dynamic-content": "true", className: "space-y-4 pb-4", "data-collection-item-field": "settings.accept_online_payment", "data-collection-item-id": restaurant?.id || restaurant?._id, children: [
        orderType === "dine_in" && tableNumber ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:1024:16", "data-dynamic-content": "true", className: "p-3 bg-orange-50 rounded-lg", children: /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/CustomerMenu:1025:18", "data-dynamic-content": "true", className: "text-sm text-orange-700", children: [
            /* @__PURE__ */ jsxDEV("strong", { "data-source-location": "pages/CustomerMenu:1026:20", "data-dynamic-content": "true", "data-collection-item-field": "tableNumber", children: [
              "Table ",
              tableNumber
            ] }, void 0, true, {
              fileName: "/app/src/pages/CustomerMenu.jsx",
              lineNumber: 1045,
              columnNumber: 21
            }, this),
            " - Your order will be delivered to your table"
          ] }, void 0, true, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 1044,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 1043,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:1029:16", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV("label", { "data-source-location": "pages/CustomerMenu:1030:18", "data-dynamic-content": "false", className: "text-sm font-medium", children: "Special Instructions" }, void 0, false, {
              fileName: "/app/src/pages/CustomerMenu.jsx",
              lineNumber: 1049,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(
              Textarea,
              {
                "data-source-location": "pages/CustomerMenu:1031:18",
                "data-dynamic-content": "true",
                value: customerInfo.notes,
                onChange: (e) => setCustomerInfo({ ...customerInfo, notes: e.target.value }),
                placeholder: "Any allergies or special requests?",
                rows: 2
              },
              void 0,
              false,
              {
                fileName: "/app/src/pages/CustomerMenu.jsx",
                lineNumber: 1050,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 1048,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/CustomerMenu.jsx",
          lineNumber: 1042,
          columnNumber: 13
        }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:1042:16", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV("label", { "data-source-location": "pages/CustomerMenu:1043:18", "data-dynamic-content": "false", className: "text-sm font-medium", children: "Your Name *" }, void 0, false, {
              fileName: "/app/src/pages/CustomerMenu.jsx",
              lineNumber: 1062,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(
              Input,
              {
                "data-source-location": "pages/CustomerMenu:1044:18",
                "data-dynamic-content": "true",
                value: customerInfo.name,
                onChange: (e) => setCustomerInfo({ ...customerInfo, name: e.target.value }),
                placeholder: "Enter your name"
              },
              void 0,
              false,
              {
                fileName: "/app/src/pages/CustomerMenu.jsx",
                lineNumber: 1063,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 1061,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:1050:16", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV("label", { "data-source-location": "pages/CustomerMenu:1051:18", "data-dynamic-content": "false", className: "text-sm font-medium", children: "Phone Number *" }, void 0, false, {
              fileName: "/app/src/pages/CustomerMenu.jsx",
              lineNumber: 1070,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(
              Input,
              {
                "data-source-location": "pages/CustomerMenu:1052:18",
                "data-dynamic-content": "true",
                value: customerInfo.phone,
                onChange: (e) => {
                  setCustomerInfo({ ...customerInfo, phone: e.target.value });
                  if (e.target.value.length === 10) {
                    loadCustomerData(e.target.value);
                  }
                },
                placeholder: "Enter your phone number"
              },
              void 0,
              false,
              {
                fileName: "/app/src/pages/CustomerMenu.jsx",
                lineNumber: 1071,
                columnNumber: 19
              },
              this
            ),
            customerData && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/CustomerMenu:1063:20", "data-dynamic-content": "true", className: "text-xs text-green-600 mt-1", children: [
              "✓ ",
              customerData.loyalty_points || 0,
              " loyalty points · ",
              customerData.loyalty_tier?.toUpperCase(),
              " tier"
            ] }, void 0, true, {
              fileName: "/app/src/pages/CustomerMenu.jsx",
              lineNumber: 1082,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 1069,
            columnNumber: 17
          }, this),
          orderType === "delivery" && /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:1072:20", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("label", { "data-source-location": "pages/CustomerMenu:1073:22", "data-dynamic-content": "false", className: "text-sm font-medium", children: "Delivery Address *" }, void 0, false, {
                fileName: "/app/src/pages/CustomerMenu.jsx",
                lineNumber: 1092,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV(
                Textarea,
                {
                  "data-source-location": "pages/CustomerMenu:1074:22",
                  "data-dynamic-content": "true",
                  value: customerInfo.address,
                  onChange: (e) => {
                    setCustomerInfo({ ...customerInfo, address: e.target.value });
                    checkDeliveryZone(e.target.value);
                  },
                  placeholder: "Enter complete delivery address with area/locality",
                  rows: 3
                },
                void 0,
                false,
                {
                  fileName: "/app/src/pages/CustomerMenu.jsx",
                  lineNumber: 1093,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/pages/CustomerMenu.jsx",
              lineNumber: 1091,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV(
              LocationPicker,
              {
                "data-source-location": "pages/CustomerMenu:1086:20",
                "data-dynamic-content": "true",
                location: customerInfo.location,
                onLocationChange: (location) => setCustomerInfo({ ...customerInfo, location })
              },
              void 0,
              false,
              {
                fileName: "/app/src/pages/CustomerMenu.jsx",
                lineNumber: 1105,
                columnNumber: 21
              },
              this
            ),
            restaurant?.delivery_zones && restaurant.delivery_zones.length > 0 && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:1093:22", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("label", { "data-source-location": "pages/CustomerMenu:1094:24", "data-dynamic-content": "false", className: "text-sm font-medium block mb-2", children: "Select Delivery Zone" }, void 0, false, {
                fileName: "/app/src/pages/CustomerMenu.jsx",
                lineNumber: 1113,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV(
                "select",
                {
                  "data-source-location": "pages/CustomerMenu:1095:24",
                  "data-dynamic-content": "true",
                  className: "w-full border rounded-md p-2 text-sm",
                  value: selectedZone ? JSON.stringify(selectedZone) : "",
                  onChange: (e) => {
                    if (e.target.value) {
                      const zone = JSON.parse(e.target.value);
                      setSelectedZone(zone);
                      setDeliveryFee(zone.delivery_fee || 0);
                    } else {
                      setSelectedZone(null);
                      setDeliveryFee(0);
                    }
                  },
                  "data-collection-item-field": "delivery_zones",
                  "data-collection-item-id": restaurant?.id || restaurant?._id,
                  children: [
                    /* @__PURE__ */ jsxDEV("option", { "data-source-location": "pages/CustomerMenu:1109:26", "data-dynamic-content": "false", value: "", children: "Select your area" }, void 0, false, {
                      fileName: "/app/src/pages/CustomerMenu.jsx",
                      lineNumber: 1128,
                      columnNumber: 27
                    }, this),
                    restaurant.delivery_zones.map(
                      (zone, idx) => /* @__PURE__ */ jsxDEV("option", { "data-source-location": "pages/CustomerMenu:1111:28", "data-dynamic-content": "true", value: JSON.stringify(zone), "data-collection-item-field": "zone_name", "data-collection-item-id": zone?.id || zone?._id, children: [
                        zone.zone_name,
                        " - ₹",
                        zone.delivery_fee,
                        " (Min. Order: ₹",
                        zone.minimum_order,
                        ")"
                      ] }, idx, true, {
                        fileName: "/app/src/pages/CustomerMenu.jsx",
                        lineNumber: 1130,
                        columnNumber: 21
                      }, this)
                    )
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/src/pages/CustomerMenu.jsx",
                  lineNumber: 1114,
                  columnNumber: 25
                },
                this
              ),
              selectedZone && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:1117:26", "data-dynamic-content": "true", className: "mt-2 p-2 bg-blue-50 rounded text-xs", children: [
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/CustomerMenu:1118:28", "data-dynamic-content": "true", className: "text-blue-700", "data-collection-item-field": "zone_name", "data-collection-item-id": selectedZone?.id || selectedZone?._id, children: [
                  "📍 ",
                  selectedZone.zone_name,
                  ": Delivery Fee ₹",
                  selectedZone.delivery_fee
                ] }, void 0, true, {
                  fileName: "/app/src/pages/CustomerMenu.jsx",
                  lineNumber: 1137,
                  columnNumber: 29
                }, this),
                getCartTotal() < selectedZone.minimum_order && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/CustomerMenu:1122:30", "data-dynamic-content": "true", className: "text-red-600 mt-1", "data-collection-item-field": "minimum_order", "data-collection-item-id": selectedZone?.id || selectedZone?._id, children: [
                  "⚠️ Minimum order value: ₹",
                  selectedZone.minimum_order
                ] }, void 0, true, {
                  fileName: "/app/src/pages/CustomerMenu.jsx",
                  lineNumber: 1141,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/CustomerMenu.jsx",
                lineNumber: 1136,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/CustomerMenu.jsx",
              lineNumber: 1112,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 1090,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:1133:16", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV("label", { "data-source-location": "pages/CustomerMenu:1134:18", "data-dynamic-content": "false", className: "text-sm font-medium", children: "Special Instructions" }, void 0, false, {
              fileName: "/app/src/pages/CustomerMenu.jsx",
              lineNumber: 1153,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(
              Textarea,
              {
                "data-source-location": "pages/CustomerMenu:1135:18",
                "data-dynamic-content": "true",
                value: customerInfo.notes,
                onChange: (e) => setCustomerInfo({ ...customerInfo, notes: e.target.value }),
                placeholder: "Any allergies or special requests?",
                rows: 2
              },
              void 0,
              false,
              {
                fileName: "/app/src/pages/CustomerMenu.jsx",
                lineNumber: 1154,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 1152,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/CustomerMenu.jsx",
          lineNumber: 1059,
          columnNumber: 13
        }, this),
        restaurant?.settings?.accept_online_payment && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:1147:14", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("label", { "data-source-location": "pages/CustomerMenu:1148:16", "data-dynamic-content": "false", className: "text-sm font-medium block mb-2", children: "Payment Method" }, void 0, false, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 1167,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:1149:16", "data-dynamic-content": "true", className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                "data-source-location": "pages/CustomerMenu:1150:18",
                "data-dynamic-content": "true",
                type: "button",
                onClick: () => setPaymentMethod("cash"),
                className: `p-3 rounded-lg border-2 flex items-center gap-2 justify-center transition-all ${paymentMethod === "cash" ? "border-violet-600 bg-violet-50" : "border-gray-200 hover:border-gray-300"}`,
                children: [
                  /* @__PURE__ */ jsxDEV(Banknote, { "data-source-location": "pages/CustomerMenu:1159:20", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                    fileName: "/app/src/pages/CustomerMenu.jsx",
                    lineNumber: 1178,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/CustomerMenu:1160:20", "data-dynamic-content": "false", className: "text-sm font-medium", children: "Cash" }, void 0, false, {
                    fileName: "/app/src/pages/CustomerMenu.jsx",
                    lineNumber: 1179,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/src/pages/CustomerMenu.jsx",
                lineNumber: 1169,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                "data-source-location": "pages/CustomerMenu:1162:18",
                "data-dynamic-content": "true",
                type: "button",
                onClick: () => setPaymentMethod("upi"),
                className: `p-3 rounded-lg border-2 flex items-center gap-2 justify-center transition-all ${paymentMethod === "upi" ? "border-violet-600 bg-violet-50" : "border-gray-200 hover:border-gray-300"}`,
                children: [
                  /* @__PURE__ */ jsxDEV(Smartphone, { "data-source-location": "pages/CustomerMenu:1171:20", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                    fileName: "/app/src/pages/CustomerMenu.jsx",
                    lineNumber: 1190,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/CustomerMenu:1172:20", "data-dynamic-content": "false", className: "text-sm font-medium", children: "UPI" }, void 0, false, {
                    fileName: "/app/src/pages/CustomerMenu.jsx",
                    lineNumber: 1191,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/src/pages/CustomerMenu.jsx",
                lineNumber: 1181,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                "data-source-location": "pages/CustomerMenu:1174:18",
                "data-dynamic-content": "true",
                type: "button",
                onClick: () => setPaymentMethod("card"),
                className: `p-3 rounded-lg border-2 flex items-center gap-2 justify-center transition-all ${paymentMethod === "card" ? "border-violet-600 bg-violet-50" : "border-gray-200 hover:border-gray-300"}`,
                children: [
                  /* @__PURE__ */ jsxDEV(CreditCard, { "data-source-location": "pages/CustomerMenu:1183:20", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                    fileName: "/app/src/pages/CustomerMenu.jsx",
                    lineNumber: 1202,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/CustomerMenu:1184:20", "data-dynamic-content": "false", className: "text-sm font-medium", children: "Card" }, void 0, false, {
                    fileName: "/app/src/pages/CustomerMenu.jsx",
                    lineNumber: 1203,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/src/pages/CustomerMenu.jsx",
                lineNumber: 1193,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                "data-source-location": "pages/CustomerMenu:1186:18",
                "data-dynamic-content": "true",
                type: "button",
                onClick: () => setPaymentMethod("online"),
                className: `p-3 rounded-lg border-2 flex items-center gap-2 justify-center transition-all ${paymentMethod === "online" ? "border-violet-600 bg-violet-50" : "border-gray-200 hover:border-gray-300"}`,
                children: [
                  /* @__PURE__ */ jsxDEV(CreditCard, { "data-source-location": "pages/CustomerMenu:1195:20", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                    fileName: "/app/src/pages/CustomerMenu.jsx",
                    lineNumber: 1214,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/CustomerMenu:1196:20", "data-dynamic-content": "false", className: "text-sm font-medium", children: "Online" }, void 0, false, {
                    fileName: "/app/src/pages/CustomerMenu.jsx",
                    lineNumber: 1215,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/src/pages/CustomerMenu.jsx",
                lineNumber: 1205,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 1168,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/CustomerMenu.jsx",
          lineNumber: 1166,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          Button,
          {
            "data-source-location": "pages/CustomerMenu:1202:12",
            "data-dynamic-content": "true",
            className: "w-full bg-violet-600 hover:bg-violet-700",
            disabled: (orderType === "dine_in" && tableNumber ? false : !customerInfo.name || !customerInfo.phone) || orderType === "delivery" && (!customerInfo.address || !customerInfo.location || selectedZone && getCartTotal() < selectedZone.minimum_order) || isSubmitting,
            onClick: handleSubmitOrder,
            children: isProcessingPayment ? "Processing Payment..." : isSubmitting ? "Placing Order..." : "Place Order"
          },
          void 0,
          false,
          {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 1221,
            columnNumber: 13
          },
          this
        ),
        orderType === "delivery" && selectedZone && getCartTotal() < selectedZone.minimum_order && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/CustomerMenu:1214:14", "data-dynamic-content": "true", className: "text-xs text-red-600 text-center", children: [
          "Add ₹",
          selectedZone.minimum_order - getCartTotal(),
          " more to meet minimum order value"
        ] }, void 0, true, {
          fileName: "/app/src/pages/CustomerMenu.jsx",
          lineNumber: 1233,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/CustomerMenu.jsx",
        lineNumber: 1039,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/CustomerMenu.jsx",
      lineNumber: 1034,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/CustomerMenu.jsx",
      lineNumber: 1033,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Dialog, { "data-source-location": "pages/CustomerMenu:1223:6", "data-dynamic-content": "true", open: !!selectedItem, onOpenChange: () => setSelectedItem(null), children: /* @__PURE__ */ jsxDEV(DialogContent, { "data-source-location": "pages/CustomerMenu:1224:8", "data-dynamic-content": "true", className: "max-w-md max-h-[90vh] overflow-y-auto", children: selectedItem && /* @__PURE__ */ jsxDEV(Fragment, { children: [
      selectedItem.image_url && /* @__PURE__ */ jsxDEV(
        "img",
        {
          "data-source-location": "pages/CustomerMenu:1228:16",
          "data-dynamic-content": "true",
          src: selectedItem.image_url,
          alt: selectedItem.name,
          className: "w-full h-48 object-cover rounded-lg -mt-2"
        },
        void 0,
        false,
        {
          fileName: "/app/src/pages/CustomerMenu.jsx",
          lineNumber: 1247,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:1234:14", "data-dynamic-content": "true", className: "space-y-3", "data-collection-item-field": "description", "data-collection-item-id": selectedItem?.id || selectedItem?._id, children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:1235:16", "data-dynamic-content": "true", className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:1236:18", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "pages/CustomerMenu:1237:20", "data-dynamic-content": "true", className: "text-xl font-bold", "data-collection-item-field": "name", "data-collection-item-id": selectedItem?.id || selectedItem?._id, children: selectedItem.name }, void 0, false, {
              fileName: "/app/src/pages/CustomerMenu.jsx",
              lineNumber: 1256,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:1238:20", "data-dynamic-content": "true", className: "flex items-center gap-2 mt-1", "data-collection-item-field": "is_vegetarian", "data-collection-item-id": selectedItem?.id || selectedItem?._id, children: [
              selectedItem.is_vegetarian && /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/CustomerMenu:1240:24", "data-dynamic-content": "false", className: "bg-green-100 text-green-700", children: "Vegetarian" }, void 0, false, {
                fileName: "/app/src/pages/CustomerMenu.jsx",
                lineNumber: 1259,
                columnNumber: 21
              }, this),
              selectedItem.is_spicy && /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/CustomerMenu:1243:24", "data-dynamic-content": "false", className: "bg-red-100 text-red-700", children: "Spicy" }, void 0, false, {
                fileName: "/app/src/pages/CustomerMenu.jsx",
                lineNumber: 1262,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/CustomerMenu.jsx",
              lineNumber: 1257,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 1255,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/CustomerMenu:1247:18", "data-dynamic-content": "true", className: "text-xl font-bold", "data-collection-item-field": "price", "data-collection-item-id": selectedItem?.id || selectedItem?._id, children: [
            "₹",
            selectedItem.price
          ] }, void 0, true, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 1266,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/CustomerMenu.jsx",
          lineNumber: 1254,
          columnNumber: 17
        }, this),
        selectedItem.description && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/CustomerMenu:1251:18", "data-dynamic-content": "true", className: "text-gray-600", "data-collection-item-field": "description", "data-collection-item-id": selectedItem?.id || selectedItem?._id, children: selectedItem.description }, void 0, false, {
          fileName: "/app/src/pages/CustomerMenu.jsx",
          lineNumber: 1270,
          columnNumber: 15
        }, this),
        selectedItem.preparation_time && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/CustomerMenu:1255:18", "data-dynamic-content": "true", className: "flex items-center gap-2 text-sm text-gray-500", children: [
          /* @__PURE__ */ jsxDEV(Clock, { "data-source-location": "pages/CustomerMenu:1256:20", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 1275,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/CustomerMenu:1257:20", "data-dynamic-content": "true", "data-collection-item-field": "preparation_time", "data-collection-item-id": selectedItem?.id || selectedItem?._id, children: [
            selectedItem.preparation_time,
            " mins"
          ] }, void 0, true, {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 1276,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/CustomerMenu.jsx",
          lineNumber: 1274,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(
          Button,
          {
            "data-source-location": "pages/CustomerMenu:1261:16",
            "data-dynamic-content": "true",
            className: "w-full bg-violet-600 hover:bg-violet-700",
            onClick: () => {
              addToCart(selectedItem);
              setSelectedItem(null);
            },
            "data-collection-item-field": "price",
            "data-collection-item-id": selectedItem?.id || selectedItem?._id,
            children: [
              /* @__PURE__ */ jsxDEV(Plus, { "data-source-location": "pages/CustomerMenu:1268:18", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
                fileName: "/app/src/pages/CustomerMenu.jsx",
                lineNumber: 1287,
                columnNumber: 19
              }, this),
              "Add to Cart - ₹",
              selectedItem.price
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/src/pages/CustomerMenu.jsx",
            lineNumber: 1280,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/src/pages/CustomerMenu.jsx",
        lineNumber: 1253,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/CustomerMenu.jsx",
      lineNumber: 1245,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/CustomerMenu.jsx",
      lineNumber: 1243,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/CustomerMenu.jsx",
      lineNumber: 1242,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/CustomerMenu.jsx",
    lineNumber: 673,
    columnNumber: 5
  }, this);
}
_s2(CustomerMenu, "OQ9KzvFc0daRRIV58QIIYE1cksY=");
_c2 = CustomerMenu;
var _c, _c2;
$RefreshReg$(_c, "OrderTrackingScreen");
$RefreshReg$(_c2, "CustomerMenu");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/CustomerMenu.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/CustomerMenu.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QWtQLGFBQUFELEtBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiYmFzZTQ0IiwiTGVhZiIsIkZsYW1lIiwiU2VhcmNoIiwiU2hvcHBpbmdDYXJ0IiwiUGx1cyIsIk1pbnVzIiwiWCIsIkNoZXZyb25Eb3duIiwiQ2xvY2siLCJQaG9uZSIsIk1hcFBpbiIsIlN0b3JlIiwiQ3JlZGl0Q2FyZCIsIlNtYXJ0cGhvbmUiLCJCYW5rbm90ZSIsIkJ1dHRvbiIsIklucHV0IiwiQmFkZ2UiLCJUZXh0YXJlYSIsIlNoZWV0IiwiU2hlZXRDb250ZW50IiwiU2hlZXRIZWFkZXIiLCJTaGVldFRpdGxlIiwiU2hlZXRUcmlnZ2VyIiwiRGlhbG9nIiwiRGlhbG9nQ29udGVudCIsIkRpYWxvZ0hlYWRlciIsIkRpYWxvZ1RpdGxlIiwiQ3VzdG9tZXJDaGF0V2lkZ2V0IiwiTG9jYXRpb25QaWNrZXIiLCJPcmRlclRyYWNraW5nU2NyZWVuIiwib3JkZXIiLCJpbml0aWFsT3JkZXIiLCJyZXN0YXVyYW50IiwidGFibGVOdW1iZXIiLCJvbk9yZGVyTW9yZSIsIl9fZGF0YUNvbGxlY3Rpb25JdGVtSWQiLCJfcyIsInNldE9yZGVyIiwidW5zdWJzY3JpYmUiLCJlbnRpdGllcyIsIk9yZGVyIiwic3Vic2NyaWJlIiwiZXZlbnQiLCJ0eXBlIiwiZGF0YSIsImlkIiwic3RhdHVzU3RlcHMiLCJsYWJlbCIsImljb24iLCJjb2xvciIsImN1cnJlbnRTdGF0dXNJbmZvIiwic3RhdHVzIiwicGVuZGluZyIsIm9wYWNpdHkiLCJzY2FsZSIsIl9pZCIsInBheW1lbnRfc3RhdHVzIiwib3JkZXJfbnVtYmVyIiwib3JkZXJfdHlwZSIsImRlbGl2ZXJ5X2FkZHJlc3MiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJpIiwicXVhbnRpdHkiLCJuYW1lIiwidG90YWxfcHJpY2UiLCJ0b3RhbF9hbW91bnQiLCJfYyIsIkN1c3RvbWVyTWVudSIsIl9zMiIsInNldFJlc3RhdXJhbnQiLCJtZW51SXRlbXMiLCJzZXRNZW51SXRlbXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsImFjdGl2ZUNhdGVnb3J5Iiwic2V0QWN0aXZlQ2F0ZWdvcnkiLCJjYXJ0Iiwic2V0Q2FydCIsInNlbGVjdGVkSXRlbSIsInNldFNlbGVjdGVkSXRlbSIsImlzQ2FydE9wZW4iLCJzZXRJc0NhcnRPcGVuIiwiaXNDaGVja291dE9wZW4iLCJzZXRJc0NoZWNrb3V0T3BlbiIsImN1c3RvbWVySW5mbyIsInNldEN1c3RvbWVySW5mbyIsInBob25lIiwiYWRkcmVzcyIsImxvY2F0aW9uIiwibm90ZXMiLCJpc1N1Ym1pdHRpbmciLCJzZXRJc1N1Ym1pdHRpbmciLCJvcmRlclN1Y2Nlc3MiLCJzZXRPcmRlclN1Y2Nlc3MiLCJvcmRlclR5cGUiLCJzZXRPcmRlclR5cGUiLCJwYXltZW50TWV0aG9kIiwic2V0UGF5bWVudE1ldGhvZCIsImlzUHJvY2Vzc2luZ1BheW1lbnQiLCJzZXRJc1Byb2Nlc3NpbmdQYXltZW50IiwiY3VzdG9tZXJEYXRhIiwic2V0Q3VzdG9tZXJEYXRhIiwibG95YWx0eVJld2FyZHMiLCJzZXRMb3lhbHR5UmV3YXJkcyIsInNlbGVjdGVkWm9uZSIsInNldFNlbGVjdGVkWm9uZSIsImRlbGl2ZXJ5RmVlIiwic2V0RGVsaXZlcnlGZWUiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ3aW5kb3ciLCJzZWFyY2giLCJyZXN0YXVyYW50SWQiLCJnZXQiLCJsb2FkRGF0YSIsImxvYWRMb3lhbHR5UmV3YXJkcyIsInJld2FyZHMiLCJMb3lhbHR5UmV3YXJkIiwiZmlsdGVyIiwicmVzdGF1cmFudF9pZCIsImlzX2FjdGl2ZSIsImUiLCJjb25zb2xlIiwibG9nIiwibG9hZEN1c3RvbWVyRGF0YSIsImN1c3RvbWVycyIsIkN1c3RvbWVyIiwibGVuZ3RoIiwiY2hlY2tEZWxpdmVyeVpvbmUiLCJkZWxpdmVyeV96b25lcyIsImFkZHJlc3NMb3dlciIsInRvTG93ZXJDYXNlIiwibWF0Y2hlZFpvbmUiLCJmaW5kIiwiem9uZSIsImFyZWFzIiwic29tZSIsImFyZWEiLCJpbmNsdWRlcyIsImRlbGl2ZXJ5X2ZlZSIsInJlc3RhdXJhbnRzIiwiUHJvbWlzZSIsImFsbCIsIlJlc3RhdXJhbnQiLCJNZW51SXRlbSIsImlzX2F2YWlsYWJsZSIsImNhdGVnb3JpZXMiLCJTZXQiLCJjYXRlZ29yeSIsIkJvb2xlYW4iLCJmaWx0ZXJlZEl0ZW1zIiwibWF0Y2hlc1NlYXJjaCIsImRlc2NyaXB0aW9uIiwibWF0Y2hlc0NhdGVnb3J5IiwiZ3JvdXBlZEl0ZW1zIiwicmVkdWNlIiwiYWNjIiwicHVzaCIsImFkZFRvQ2FydCIsImV4aXN0aW5nIiwiYyIsInVwZGF0ZUNhcnRRdWFudGl0eSIsIml0ZW1JZCIsImdldENhcnRUb3RhbCIsInN1bSIsInByaWNlIiwiZ2V0Q2FydEl0ZW1Db3VudCIsImdldEl0ZW1JbkNhcnQiLCJnZW5lcmF0ZU9yZGVyTnVtYmVyIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwidG9VcHBlckNhc2UiLCJyYW5kb20iLCJNYXRoIiwic3Vic3RyaW5nIiwiZ2V0Q3VycmVudExvY2F0aW9uIiwicmVzb2x2ZSIsInJlamVjdCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiRXJyb3IiLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsImxhdGl0dWRlIiwiY29vcmRzIiwibG9uZ2l0dWRlIiwiZG93bmxvYWRCaWxsIiwib3JkZXJEYXRhIiwicGF5bWVudE1ldGhvZExhYmVsIiwiYmlsbENvbnRlbnQiLCJjaXR5IiwidG9Mb2NhbGVTdHJpbmciLCJyZXBsYWNlIiwidGFibGVfbnVtYmVyIiwiY3VzdG9tZXJfbmFtZSIsImN1c3RvbWVyX3Bob25lIiwiam9pbiIsInN1YnRvdGFsIiwidGF4X2Ftb3VudCIsInNlcnZpY2VfY2hhcmdlIiwicGF5bWVudF9tZXRob2QiLCJwYXltZW50X3RyYW5zYWN0aW9uX2lkIiwicHJpbnRXaW5kb3ciLCJvcGVuIiwiZG9jdW1lbnQiLCJ3cml0ZSIsImNsb3NlIiwicHJpbnQiLCJsb2FkUmF6b3JwYXlTY3JpcHQiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwib25sb2FkIiwib25lcnJvciIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInByb2Nlc3NSYXpvcnBheVBheW1lbnQiLCJvcmRlckFtb3VudCIsInJhem9ycGF5X2tleV9pZCIsImFsZXJ0Iiwic3VjY2VzcyIsInNjcmlwdExvYWRlZCIsIm9wdGlvbnMiLCJrZXkiLCJhbW91bnQiLCJjdXJyZW5jeSIsImltYWdlIiwibG9nb191cmwiLCJoYW5kbGVyIiwicmVzcG9uc2UiLCJmaW5hbE9yZGVyRGF0YSIsInJhem9ycGF5X3BheW1lbnRfaWQiLCJjcmVhdGUiLCJ1cGRhdGVDdXN0b21lckxveWFsdHkiLCJ0cmFuc2FjdGlvbl9pZCIsIm1vZGFsIiwib25kaXNtaXNzIiwicHJlZmlsbCIsImNvbnRhY3QiLCJ0aGVtZSIsInJhem9ycGF5IiwiUmF6b3JwYXkiLCJ0b3RhbCIsImV4aXN0aW5nQ3VzdG9tZXJzIiwidG9rZW5zRWFybmVkIiwiZmxvb3IiLCJjdXN0b21lciIsIm5ld0Vhcm5lZFRva2VucyIsImVhcm5lZF90b2tlbnMiLCJuZXdBdmFpbGFibGVUb2tlbnMiLCJsb3lhbHR5X3BvaW50cyIsIm5ld1RvdGFsU3BlbnQiLCJ0b3RhbF9zcGVudCIsInRpZXIiLCJ1cGRhdGUiLCJ0b3RhbF9vcmRlcnMiLCJsb3lhbHR5X3RpZXIiLCJsYXN0X29yZGVyX2RhdGUiLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwicmVkZWVtZWRfdG9rZW5zIiwiaGFuZGxlU3VibWl0T3JkZXIiLCJsb2NhdGlvbkRhdGEiLCJ0YXhSYXRlIiwic2V0dGluZ3MiLCJ0YXhfcmF0ZSIsInRheEFtb3VudCIsInJvdW5kIiwiZGVsaXZlcnlfbG9jYXRpb24iLCJtZW51X2l0ZW1faWQiLCJ1bml0X3ByaWNlIiwicGF5bWVudFJlc3VsdCIsImNvdmVyX2ltYWdlX3VybCIsImN1aXNpbmVfdHlwZSIsInNsaWNlIiwidGFyZ2V0IiwidmFsdWUiLCJmZWF0dXJlc19lbmFibGVkIiwidGFrZWF3YXkiLCJkZWxpdmVyeSIsInkiLCJyZXdhcmRzSW5mbyIsInIiLCJwb2ludHNfcmVxdWlyZWQiLCJPYmplY3QiLCJlbnRyaWVzIiwiaW5DYXJ0IiwiaW1hZ2VfdXJsIiwiaXNfdmVnZXRhcmlhbiIsImlzX3NwaWN5Iiwic3RvcFByb3BhZ2F0aW9uIiwia2V5cyIsImNhcnRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwiaWR4Iiwiem9uZV9uYW1lIiwibWluaW11bV9vcmRlciIsImFjY2VwdF9vbmxpbmVfcGF5bWVudCIsInByZXBhcmF0aW9uX3RpbWUiLCJfYzIiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQ3VzdG9tZXJNZW51LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgYmFzZTQ0IH0gZnJvbSBcIkAvYXBpL2Jhc2U0NENsaWVudFwiO1xuaW1wb3J0IHtcbiAgTGVhZiwgRmxhbWUsIFNlYXJjaCwgU2hvcHBpbmdDYXJ0LCBQbHVzLCBNaW51cyxcbiAgWCwgQ2hldnJvbkRvd24sIENsb2NrLCBQaG9uZSwgTWFwUGluLCBTdG9yZSwgQ3JlZGl0Q2FyZCwgU21hcnRwaG9uZSwgQmFua25vdGUgfSBmcm9tXG5cImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IHsgQmFkZ2UgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2JhZGdlXCI7XG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdGV4dGFyZWFcIjtcbmltcG9ydCB7XG4gIFNoZWV0LFxuICBTaGVldENvbnRlbnQsXG4gIFNoZWV0SGVhZGVyLFxuICBTaGVldFRpdGxlLFxuICBTaGVldFRyaWdnZXIgfSBmcm9tXG5cIkAvY29tcG9uZW50cy91aS9zaGVldFwiO1xuaW1wb3J0IHtcbiAgRGlhbG9nLFxuICBEaWFsb2dDb250ZW50LFxuICBEaWFsb2dIZWFkZXIsXG4gIERpYWxvZ1RpdGxlIH0gZnJvbVxuXCJAL2NvbXBvbmVudHMvdWkvZGlhbG9nXCI7XG5pbXBvcnQgQ3VzdG9tZXJDaGF0V2lkZ2V0IGZyb20gXCIuLi9jb21wb25lbnRzL2NoYXQvQ3VzdG9tZXJDaGF0V2lkZ2V0XCI7XG5pbXBvcnQgTG9jYXRpb25QaWNrZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY3VzdG9tZXIvTG9jYXRpb25QaWNrZXJcIjtcblxuLy8gT3JkZXIgVHJhY2tpbmcgQ29tcG9uZW50XG5mdW5jdGlvbiBPcmRlclRyYWNraW5nU2NyZWVuKHsgb3JkZXI6IGluaXRpYWxPcmRlciwgcmVzdGF1cmFudCwgdGFibGVOdW1iZXIsIG9uT3JkZXJNb3JlLCBcImRhdGEtY29sbGVjdGlvbi1pdGVtLWlkXCI6IF9fZGF0YUNvbGxlY3Rpb25JdGVtSWQgfSkge1xuICBjb25zdCBbb3JkZXIsIHNldE9yZGVyXSA9IHVzZVN0YXRlKGluaXRpYWxPcmRlcik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBTdWJzY3JpYmUgdG8gb3JkZXIgdXBkYXRlc1xuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gYmFzZTQ0LmVudGl0aWVzLk9yZGVyLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50eXBlID09PSAndXBkYXRlJyAmJiBldmVudC5kYXRhLmlkID09PSBvcmRlci5pZCkge1xuICAgICAgICBzZXRPcmRlcihldmVudC5kYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB1bnN1YnNjcmliZTtcbiAgfSwgW29yZGVyLmlkXSk7XG5cbiAgY29uc3Qgc3RhdHVzU3RlcHMgPSB7XG4gICAgXCJwZW5kaW5nXCI6IHsgbGFiZWw6IFwiT3JkZXIgUGxhY2VkXCIsIGljb246IFwi8J+TnVwiLCBjb2xvcjogXCJvcmFuZ2VcIiB9LFxuICAgIFwiY29uZmlybWVkXCI6IHsgbGFiZWw6IFwiQ29uZmlybWVkXCIsIGljb246IFwi4pyFXCIsIGNvbG9yOiBcImdyZWVuXCIgfSxcbiAgICBcInByZXBhcmluZ1wiOiB7IGxhYmVsOiBcIlByZXBhcmluZ1wiLCBpY29uOiBcIvCfkajigI3wn42zXCIsIGNvbG9yOiBcImJsdWVcIiB9LFxuICAgIFwicmVhZHlcIjogeyBsYWJlbDogXCJSZWFkeVwiLCBpY29uOiBcIvCfjolcIiwgY29sb3I6IFwicHVycGxlXCIgfSxcbiAgICBcIm91dF9mb3JfZGVsaXZlcnlcIjogeyBsYWJlbDogXCJPdXQgZm9yIERlbGl2ZXJ5XCIsIGljb246IFwi8J+amlwiLCBjb2xvcjogXCJpbmRpZ29cIiB9LFxuICAgIFwiZGVsaXZlcmVkXCI6IHsgbGFiZWw6IFwiRGVsaXZlcmVkXCIsIGljb246IFwi4pyoXCIsIGNvbG9yOiBcImdyZWVuXCIgfSxcbiAgICBcImNvbXBsZXRlZFwiOiB7IGxhYmVsOiBcIkNvbXBsZXRlZFwiLCBpY29uOiBcIuKcqFwiLCBjb2xvcjogXCJncmVlblwiIH1cbiAgfTtcblxuICBjb25zdCBjdXJyZW50U3RhdHVzSW5mbyA9IHN0YXR1c1N0ZXBzW29yZGVyLnN0YXR1c10gfHwgc3RhdHVzU3RlcHMucGVuZGluZztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6NTY6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmFkaWVudC10by1iciBmcm9tLWdyZWVuLTUwIHRvLWVtZXJhbGQtNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00XCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e19fZGF0YUNvbGxlY3Rpb25JdGVtSWR9PlxuICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6NTc6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjkgfX1cbiAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgc2NhbGU6IDEgfX1cbiAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIHNoYWRvdy14bCBwLTggbWF4LXctbWQgdy1mdWxsXCI+XG5cbiAgICAgICAgey8qIFN0YXR1cyBJY29uICovfVxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjYzOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi02XCI+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo2NDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtNnhsIG1iLTRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImljb25cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17Y3VycmVudFN0YXR1c0luZm8/LmlkIHx8IGN1cnJlbnRTdGF0dXNJbmZvPy5faWR9PntjdXJyZW50U3RhdHVzSW5mby5pY29ufTwvZGl2PlxuICAgICAgICAgIDxoMSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo2NToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwIG1iLTJcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImxhYmVsXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2N1cnJlbnRTdGF0dXNJbmZvPy5pZCB8fCBjdXJyZW50U3RhdHVzSW5mbz8uX2lkfT57Y3VycmVudFN0YXR1c0luZm8ubGFiZWx9PC9oMT5cbiAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo2NjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgIHtvcmRlci5zdGF0dXMgPT09IFwicGVuZGluZ1wiICYmIFwiWW91ciBvcmRlciBoYXMgYmVlbiByZWNlaXZlZFwifVxuICAgICAgICAgICAge29yZGVyLnN0YXR1cyA9PT0gXCJjb25maXJtZWRcIiAmJiBcIlJlc3RhdXJhbnQgaGFzIGNvbmZpcm1lZCB5b3VyIG9yZGVyXCJ9XG4gICAgICAgICAgICB7b3JkZXIuc3RhdHVzID09PSBcInByZXBhcmluZ1wiICYmIFwiWW91ciBmb29kIGlzIGJlaW5nIHByZXBhcmVkXCJ9XG4gICAgICAgICAgICB7b3JkZXIuc3RhdHVzID09PSBcInJlYWR5XCIgJiYgXCJZb3VyIG9yZGVyIGlzIHJlYWR5IVwifVxuICAgICAgICAgICAge29yZGVyLnN0YXR1cyA9PT0gXCJvdXRfZm9yX2RlbGl2ZXJ5XCIgJiYgXCJZb3VyIG9yZGVyIGlzIG9uIHRoZSB3YXlcIn1cbiAgICAgICAgICAgIHtvcmRlci5zdGF0dXMgPT09IFwiZGVsaXZlcmVkXCIgJiYgXCJZb3VyIG9yZGVyIGhhcyBiZWVuIGRlbGl2ZXJlZFwifVxuICAgICAgICAgICAge29yZGVyLnN0YXR1cyA9PT0gXCJjb21wbGV0ZWRcIiAmJiBcIlRoYW5rIHlvdSBmb3IgeW91ciBvcmRlciFcIn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBPcmRlciBEZXRhaWxzICovfVxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51Ojc4OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIHJvdW5kZWQteGwgcC00IG1iLTZcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51Ojc5OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTJcIj5cbiAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjgwOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPk9yZGVyIE51bWJlcjwvcD5cbiAgICAgICAgICAgIDxCYWRnZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo4MToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YGJnLSR7Y3VycmVudFN0YXR1c0luZm8uY29sb3J9LTYwMCB0ZXh0LXdoaXRlYH0+XG4gICAgICAgICAgICAgIHtvcmRlci5wYXltZW50X3N0YXR1cyA9PT0gXCJwYWlkXCIgPyBcIlBhaWRcIiA6IFwiQ09EXCJ9XG4gICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51Ojg1OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtb3JhbmdlLTYwMCBtYi0yXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJvcmRlcl9udW1iZXJcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17b3JkZXI/LmlkIHx8IG9yZGVyPy5faWR9PntvcmRlci5vcmRlcl9udW1iZXJ9PC9wPlxuICAgICAgICAgIHt0YWJsZU51bWJlciAmJlxuICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51Ojg3OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJ0YWJsZU51bWJlclwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtfX2RhdGFDb2xsZWN0aW9uSXRlbUlkfT5UYWJsZSB7dGFibGVOdW1iZXJ9PC9wPlxuICAgICAgICAgIH1cbiAgICAgICAgICB7b3JkZXIub3JkZXJfdHlwZSA9PT0gXCJkZWxpdmVyeVwiICYmIG9yZGVyLmRlbGl2ZXJ5X2FkZHJlc3MgJiZcbiAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo5MDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBtdC0yXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJkZWxpdmVyeV9hZGRyZXNzXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e29yZGVyPy5pZCB8fCBvcmRlcj8uX2lkfT7wn5ONIHtvcmRlci5kZWxpdmVyeV9hZGRyZXNzfTwvcD5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBJdGVtcyAqL31cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo5NTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS0yIG1iLTYgYm9yZGVyLXQgcHQtNFwiPlxuICAgICAgICAgIHtvcmRlci5pdGVtcz8ubWFwKChpdGVtLCBpKSA9PlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6OTc6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2l9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQtc21cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aXRlbT8uW1wiZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWRcIl19PlxuICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo5ODoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicXVhbnRpdHlcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aXRlbT8uaWQgfHwgaXRlbT8uX2lkfT57aXRlbS5xdWFudGl0eX14IHtpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo5OToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidG90YWxfcHJpY2VcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aXRlbT8uaWQgfHwgaXRlbT8uX2lkfT7igrl7aXRlbS50b3RhbF9wcmljZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTAyOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gZm9udC1ib2xkIHB0LTIgYm9yZGVyLXRcIj5cbiAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjEwMzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5Ub3RhbDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjEwNDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidG90YWxfYW1vdW50XCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e29yZGVyPy5pZCB8fCBvcmRlcj8uX2lkfT7igrl7b3JkZXIudG90YWxfYW1vdW50fTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudToxMDg6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG9uQ2xpY2s9e29uT3JkZXJNb3JlfSB2YXJpYW50PVwib3V0bGluZVwiIGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgIE9yZGVyIE1vcmVcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC9kaXY+KTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21lck1lbnUoKSB7XG4gIGNvbnN0IFtyZXN0YXVyYW50LCBzZXRSZXN0YXVyYW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbWVudUl0ZW1zLCBzZXRNZW51SXRlbXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFthY3RpdmVDYXRlZ29yeSwgc2V0QWN0aXZlQ2F0ZWdvcnldID0gdXNlU3RhdGUoXCJhbGxcIik7XG4gIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkSXRlbSwgc2V0U2VsZWN0ZWRJdGVtXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXNDYXJ0T3Blbiwgc2V0SXNDYXJ0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0NoZWNrb3V0T3Blbiwgc2V0SXNDaGVja291dE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY3VzdG9tZXJJbmZvLCBzZXRDdXN0b21lckluZm9dID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6IFwiXCIsXG4gICAgcGhvbmU6IFwiXCIsXG4gICAgYWRkcmVzczogXCJcIixcbiAgICBsb2NhdGlvbjogbnVsbCxcbiAgICBub3RlczogXCJcIlxuICB9KTtcbiAgY29uc3QgW2lzU3VibWl0dGluZywgc2V0SXNTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW29yZGVyU3VjY2Vzcywgc2V0T3JkZXJTdWNjZXNzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbb3JkZXJUeXBlLCBzZXRPcmRlclR5cGVdID0gdXNlU3RhdGUoXCJkaW5lX2luXCIpO1xuICBjb25zdCBbcGF5bWVudE1ldGhvZCwgc2V0UGF5bWVudE1ldGhvZF0gPSB1c2VTdGF0ZShcImNhc2hcIik7XG4gIGNvbnN0IFtpc1Byb2Nlc3NpbmdQYXltZW50LCBzZXRJc1Byb2Nlc3NpbmdQYXltZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2N1c3RvbWVyRGF0YSwgc2V0Q3VzdG9tZXJEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbG95YWx0eVJld2FyZHMsIHNldExveWFsdHlSZXdhcmRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkWm9uZSwgc2V0U2VsZWN0ZWRab25lXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZGVsaXZlcnlGZWUsIHNldERlbGl2ZXJ5RmVlXSA9IHVzZVN0YXRlKDApO1xuXG4gIC8vIEdldCByZXN0YXVyYW50IElEIGZyb20gVVJMXG4gIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gIGNvbnN0IHJlc3RhdXJhbnRJZCA9IHVybFBhcmFtcy5nZXQoJ3InKTtcbiAgY29uc3QgdGFibGVOdW1iZXIgPSB1cmxQYXJhbXMuZ2V0KCd0YWJsZScpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlc3RhdXJhbnRJZCkge1xuICAgICAgbG9hZERhdGEoKTtcbiAgICAgIGxvYWRMb3lhbHR5UmV3YXJkcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFcnJvcihcIk5vIHJlc3RhdXJhbnQgc3BlY2lmaWVkXCIpO1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH0sIFtyZXN0YXVyYW50SWRdKTtcblxuICBjb25zdCBsb2FkTG95YWx0eVJld2FyZHMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJld2FyZHMgPSBhd2FpdCBiYXNlNDQuZW50aXRpZXMuTG95YWx0eVJld2FyZC5maWx0ZXIoe1xuICAgICAgICByZXN0YXVyYW50X2lkOiByZXN0YXVyYW50SWQsXG4gICAgICAgIGlzX2FjdGl2ZTogdHJ1ZVxuICAgICAgfSwgJ3BvaW50c19yZXF1aXJlZCcpO1xuICAgICAgc2V0TG95YWx0eVJld2FyZHMocmV3YXJkcyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coXCJGYWlsZWQgdG8gbG9hZCByZXdhcmRzXCIsIGUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBsb2FkQ3VzdG9tZXJEYXRhID0gYXN5bmMgKHBob25lKSA9PiB7XG4gICAgaWYgKCFwaG9uZSkgcmV0dXJuO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjdXN0b21lcnMgPSBhd2FpdCBiYXNlNDQuZW50aXRpZXMuQ3VzdG9tZXIuZmlsdGVyKHtcbiAgICAgICAgcmVzdGF1cmFudF9pZDogcmVzdGF1cmFudElkLFxuICAgICAgICBwaG9uZTogcGhvbmVcbiAgICAgIH0pO1xuICAgICAgaWYgKGN1c3RvbWVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHNldEN1c3RvbWVyRGF0YShjdXN0b21lcnNbMF0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIGxvYWQgY3VzdG9tZXIgZGF0YVwiLCBlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tEZWxpdmVyeVpvbmUgPSAoYWRkcmVzcykgPT4ge1xuICAgIGlmICghcmVzdGF1cmFudD8uZGVsaXZlcnlfem9uZXMgfHwgIWFkZHJlc3MpIHJldHVybjtcblxuICAgIGNvbnN0IGFkZHJlc3NMb3dlciA9IGFkZHJlc3MudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBtYXRjaGVkWm9uZSA9IHJlc3RhdXJhbnQuZGVsaXZlcnlfem9uZXMuZmluZCgoem9uZSkgPT5cbiAgICB6b25lLmFyZWFzPy5zb21lKChhcmVhKSA9PiBhZGRyZXNzTG93ZXIuaW5jbHVkZXMoYXJlYS50b0xvd2VyQ2FzZSgpKSlcbiAgICApO1xuXG4gICAgaWYgKG1hdGNoZWRab25lKSB7XG4gICAgICBzZXRTZWxlY3RlZFpvbmUobWF0Y2hlZFpvbmUpO1xuICAgICAgc2V0RGVsaXZlcnlGZWUobWF0Y2hlZFpvbmUuZGVsaXZlcnlfZmVlIHx8IDApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBsb2FkRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgW3Jlc3RhdXJhbnRzLCBpdGVtc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBiYXNlNDQuZW50aXRpZXMuUmVzdGF1cmFudC5maWx0ZXIoeyByZXN0YXVyYW50X2lkOiByZXN0YXVyYW50SWQgfSksXG4gICAgICBiYXNlNDQuZW50aXRpZXMuTWVudUl0ZW0uZmlsdGVyKHsgcmVzdGF1cmFudF9pZDogcmVzdGF1cmFudElkLCBpc19hdmFpbGFibGU6IHRydWUgfSwgJ3NvcnRfb3JkZXInKV1cbiAgICAgICk7XG5cbiAgICAgIGlmIChyZXN0YXVyYW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgc2V0RXJyb3IoXCJSZXN0YXVyYW50IG5vdCBmb3VuZFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFJlc3RhdXJhbnQocmVzdGF1cmFudHNbMF0pO1xuICAgICAgICBzZXRNZW51SXRlbXMoaXRlbXMpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHNldEVycm9yKFwiRmFpbGVkIHRvIGxvYWQgbWVudVwiKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIEdyb3VwIGl0ZW1zIGJ5IGNhdGVnb3J5XG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBbLi4ubmV3IFNldChtZW51SXRlbXMubWFwKChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5KSldLmZpbHRlcihCb29sZWFuKTtcblxuICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gbWVudUl0ZW1zLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgIGNvbnN0IG1hdGNoZXNTZWFyY2ggPSBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgIGl0ZW0uZGVzY3JpcHRpb24/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSk7XG4gICAgY29uc3QgbWF0Y2hlc0NhdGVnb3J5ID0gYWN0aXZlQ2F0ZWdvcnkgPT09IFwiYWxsXCIgfHwgaXRlbS5jYXRlZ29yeSA9PT0gYWN0aXZlQ2F0ZWdvcnk7XG4gICAgcmV0dXJuIG1hdGNoZXNTZWFyY2ggJiYgbWF0Y2hlc0NhdGVnb3J5O1xuICB9KTtcblxuICBjb25zdCBncm91cGVkSXRlbXMgPSBmaWx0ZXJlZEl0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBpdGVtLmNhdGVnb3J5IHx8IFwiT3RoZXJcIjtcbiAgICBpZiAoIWFjY1tjYXRlZ29yeV0pIGFjY1tjYXRlZ29yeV0gPSBbXTtcbiAgICBhY2NbY2F0ZWdvcnldLnB1c2goaXRlbSk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG4gIC8vIENhcnQgZnVuY3Rpb25zXG4gIGNvbnN0IGFkZFRvQ2FydCA9IChpdGVtLCBxdWFudGl0eSA9IDEpID0+IHtcbiAgICBjb25zdCBleGlzdGluZyA9IGNhcnQuZmluZCgoYykgPT4gYy5pdGVtLmlkID09PSBpdGVtLmlkKTtcbiAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgIHNldENhcnQoY2FydC5tYXAoKGMpID0+XG4gICAgICBjLml0ZW0uaWQgPT09IGl0ZW0uaWQgP1xuICAgICAgeyAuLi5jLCBxdWFudGl0eTogYy5xdWFudGl0eSArIHF1YW50aXR5IH0gOlxuICAgICAgY1xuICAgICAgKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldENhcnQoWy4uLmNhcnQsIHsgaXRlbSwgcXVhbnRpdHkgfV0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGVDYXJ0UXVhbnRpdHkgPSAoaXRlbUlkLCBxdWFudGl0eSkgPT4ge1xuICAgIGlmIChxdWFudGl0eSA8PSAwKSB7XG4gICAgICBzZXRDYXJ0KGNhcnQuZmlsdGVyKChjKSA9PiBjLml0ZW0uaWQgIT09IGl0ZW1JZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRDYXJ0KGNhcnQubWFwKChjKSA9PlxuICAgICAgYy5pdGVtLmlkID09PSBpdGVtSWQgPyB7IC4uLmMsIHF1YW50aXR5IH0gOiBjXG4gICAgICApKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0Q2FydFRvdGFsID0gKCkgPT4ge1xuICAgIHJldHVybiBjYXJ0LnJlZHVjZSgoc3VtLCBjKSA9PiBzdW0gKyBjLml0ZW0ucHJpY2UgKiBjLnF1YW50aXR5LCAwKTtcbiAgfTtcblxuICBjb25zdCBnZXRDYXJ0SXRlbUNvdW50ID0gKCkgPT4ge1xuICAgIHJldHVybiBjYXJ0LnJlZHVjZSgoc3VtLCBjKSA9PiBzdW0gKyBjLnF1YW50aXR5LCAwKTtcbiAgfTtcblxuICBjb25zdCBnZXRJdGVtSW5DYXJ0ID0gKGl0ZW1JZCkgPT4ge1xuICAgIHJldHVybiBjYXJ0LmZpbmQoKGMpID0+IGMuaXRlbS5pZCA9PT0gaXRlbUlkKTtcbiAgfTtcblxuICAvLyBHZW5lcmF0ZSBvcmRlciBudW1iZXJcbiAgY29uc3QgZ2VuZXJhdGVPcmRlck51bWJlciA9ICgpID0+IHtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpLnRvU3RyaW5nKDM2KS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IHJhbmRvbSA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCA1KS50b1VwcGVyQ2FzZSgpO1xuICAgIHJldHVybiBgT1JELSR7dGltZXN0YW1wfSR7cmFuZG9tfWA7XG4gIH07XG5cbiAgLy8gR2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgY29uc3QgZ2V0Q3VycmVudExvY2F0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIW5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKFwiR2VvbG9jYXRpb24gbm90IHN1cHBvcnRlZFwiKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXG4gICAgICAgIChwb3NpdGlvbikgPT4gcmVzb2x2ZSh7XG4gICAgICAgICAgbGF0aXR1ZGU6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICBsb25naXR1ZGU6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGVcbiAgICAgICAgfSksXG4gICAgICAgIChlcnJvcikgPT4gcmVqZWN0KGVycm9yKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBHZW5lcmF0ZSBQREYgYmlsbFxuICBjb25zdCBkb3dubG9hZEJpbGwgPSAob3JkZXJEYXRhKSA9PiB7XG4gICAgY29uc3QgcGF5bWVudE1ldGhvZExhYmVsID0ge1xuICAgICAgJ2Nhc2gnOiAnQ2FzaCBvbiBEZWxpdmVyeScsXG4gICAgICAnb25saW5lJzogJ09ubGluZSBQYXltZW50JyxcbiAgICAgICd1cGknOiAnVVBJJyxcbiAgICAgICdjYXJkJzogJ0NhcmQnLFxuICAgICAgJ3Jhem9ycGF5JzogJ09ubGluZSBQYXltZW50J1xuICAgIH07XG5cbiAgICBjb25zdCBiaWxsQ29udGVudCA9IGBcbiAgICAgIDwhRE9DVFlQRSBodG1sPlxuICAgICAgPGh0bWw+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPHN0eWxlPlxuICAgICAgICAgIGJvZHkgeyBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7IHBhZGRpbmc6IDIwcHg7IG1heC13aWR0aDogNDAwcHg7IG1hcmdpbjogMCBhdXRvOyB9XG4gICAgICAgICAgLmhlYWRlciB7IHRleHQtYWxpZ246IGNlbnRlcjsgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7IHBhZGRpbmctYm90dG9tOiAxMHB4OyBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG4gICAgICAgICAgLmhlYWRlciBoMSB7IG1hcmdpbjogMDsgZm9udC1zaXplOiAyNHB4OyB9XG4gICAgICAgICAgLmhlYWRlciBwIHsgbWFyZ2luOiA1cHggMDsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzY2NjsgfVxuICAgICAgICAgIC5vcmRlci1pbmZvIHsgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuICAgICAgICAgIC5vcmRlci1pbmZvIHAgeyBtYXJnaW46IDVweCAwOyB9XG4gICAgICAgICAgLml0ZW1zIHsgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjMDAwOyBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICMwMDA7IHBhZGRpbmc6IDEwcHggMDsgfVxuICAgICAgICAgIC5pdGVtIHsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBtYXJnaW46IDhweCAwOyB9XG4gICAgICAgICAgLnRvdGFscyB7IG1hcmdpbi10b3A6IDEwcHg7IH1cbiAgICAgICAgICAudG90YWwtcm93IHsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBtYXJnaW46IDVweCAwOyB9XG4gICAgICAgICAgLnRvdGFsLXJvdy5maW5hbCB7IGZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE4cHg7IGJvcmRlci10b3A6IDJweCBzb2xpZCAjMDAwOyBwYWRkaW5nLXRvcDogMTBweDsgbWFyZ2luLXRvcDogMTBweDsgfVxuICAgICAgICAgIC5wYXltZW50LWluZm8geyBiYWNrZ3JvdW5kOiAjZjVmNWY1OyBwYWRkaW5nOiAxMHB4OyBib3JkZXItcmFkaXVzOiA1cHg7IG1hcmdpbi10b3A6IDE1cHg7IH1cbiAgICAgICAgICAuZm9vdGVyIHsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tdG9wOiAyMHB4OyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjNjY2OyB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgIDxoMT4ke3Jlc3RhdXJhbnQubmFtZX08L2gxPlxuICAgICAgICAgIDxwPiR7cmVzdGF1cmFudC5hZGRyZXNzIHx8IHJlc3RhdXJhbnQuY2l0eX08L3A+XG4gICAgICAgICAgPHA+UGhvbmU6ICR7cmVzdGF1cmFudC5waG9uZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLWluZm9cIj5cbiAgICAgICAgICA8cD48c3Ryb25nPk9yZGVyICM6PC9zdHJvbmc+ICR7b3JkZXJEYXRhLm9yZGVyX251bWJlcn08L3A+XG4gICAgICAgICAgPHA+PHN0cm9uZz5EYXRlOjwvc3Ryb25nPiAke25ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKX08L3A+XG4gICAgICAgICAgPHA+PHN0cm9uZz5UeXBlOjwvc3Ryb25nPiAke29yZGVyRGF0YS5vcmRlcl90eXBlLnJlcGxhY2UoJ18nLCAnICcpLnRvVXBwZXJDYXNlKCl9PC9wPlxuICAgICAgICAgICR7b3JkZXJEYXRhLnRhYmxlX251bWJlciA/IGA8cD48c3Ryb25nPlRhYmxlOjwvc3Ryb25nPiAke29yZGVyRGF0YS50YWJsZV9udW1iZXJ9PC9wPmAgOiAnJ31cbiAgICAgICAgICAke29yZGVyRGF0YS5jdXN0b21lcl9uYW1lID8gYDxwPjxzdHJvbmc+Q3VzdG9tZXI6PC9zdHJvbmc+ICR7b3JkZXJEYXRhLmN1c3RvbWVyX25hbWV9PC9wPmAgOiAnJ31cbiAgICAgICAgICAke29yZGVyRGF0YS5jdXN0b21lcl9waG9uZSA/IGA8cD48c3Ryb25nPlBob25lOjwvc3Ryb25nPiAke29yZGVyRGF0YS5jdXN0b21lcl9waG9uZX08L3A+YCA6ICcnfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtc1wiPlxuICAgICAgICAgIDxoMz5JdGVtczo8L2gzPlxuICAgICAgICAgICR7b3JkZXJEYXRhLml0ZW1zLm1hcCgoaXRlbSkgPT4gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgPHNwYW4+JHtpdGVtLnF1YW50aXR5fXggJHtpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3Bhbj7igrkke2l0ZW0udG90YWxfcHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgYCkuam9pbignJyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvdGFsc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3RhbC1yb3dcIj5cbiAgICAgICAgICAgIDxzcGFuPlN1YnRvdGFsOjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPuKCuSR7b3JkZXJEYXRhLnN1YnRvdGFsfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidG90YWwtcm93XCI+XG4gICAgICAgICAgICA8c3Bhbj5UYXg6PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+4oK5JHtvcmRlckRhdGEudGF4X2Ftb3VudH08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgJHtvcmRlckRhdGEuc2VydmljZV9jaGFyZ2UgPiAwID8gYFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3RhbC1yb3dcIj5cbiAgICAgICAgICAgIDxzcGFuPkRlbGl2ZXJ5IEZlZTo8L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj7igrkke29yZGVyRGF0YS5zZXJ2aWNlX2NoYXJnZX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgYCA6ICcnfVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3RhbC1yb3cgZmluYWxcIj5cbiAgICAgICAgICAgIDxzcGFuPlRvdGFsOjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPuKCuSR7b3JkZXJEYXRhLnRvdGFsX2Ftb3VudH08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYXltZW50LWluZm9cIj5cbiAgICAgICAgICA8cD48c3Ryb25nPlBheW1lbnQgTWV0aG9kOjwvc3Ryb25nPiAke3BheW1lbnRNZXRob2RMYWJlbFtvcmRlckRhdGEucGF5bWVudF9tZXRob2RdIHx8IG9yZGVyRGF0YS5wYXltZW50X21ldGhvZH08L3A+XG4gICAgICAgICAgPHA+PHN0cm9uZz5QYXltZW50IFN0YXR1czo8L3N0cm9uZz4gJHtvcmRlckRhdGEucGF5bWVudF9zdGF0dXMgPT09ICdwYWlkJyA/ICdQQUlEIOKckycgOiAnUGVuZGluZyd9PC9wPlxuICAgICAgICAgICR7b3JkZXJEYXRhLnBheW1lbnRfdHJhbnNhY3Rpb25faWQgPyBgPHAgc3R5bGU9XCJmb250LXNpemU6IDEwcHg7XCI+PHN0cm9uZz5UcmFuc2FjdGlvbiBJRDo8L3N0cm9uZz4gJHtvcmRlckRhdGEucGF5bWVudF90cmFuc2FjdGlvbl9pZH08L3A+YCA6ICcnfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgICA8cD5UaGFuayB5b3UgZm9yIHlvdXIgb3JkZXIhPC9wPlxuICAgICAgICAgIDxwPlBvd2VyZWQgYnkgQXhvcmFEaWdpPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYm9keT5cbiAgICAgIDwvaHRtbD5cbiAgICBgO1xuXG4gICAgY29uc3QgcHJpbnRXaW5kb3cgPSB3aW5kb3cub3BlbignJywgJycsICdoZWlnaHQ9NjAwLHdpZHRoPTQwMCcpO1xuICAgIHByaW50V2luZG93LmRvY3VtZW50LndyaXRlKGJpbGxDb250ZW50KTtcbiAgICBwcmludFdpbmRvdy5kb2N1bWVudC5jbG9zZSgpO1xuICAgIHByaW50V2luZG93LnByaW50KCk7XG4gIH07XG5cbiAgLy8gTG9hZCBSYXpvcnBheSBzY3JpcHRcbiAgY29uc3QgbG9hZFJhem9ycGF5U2NyaXB0ID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vY2hlY2tvdXQucmF6b3JwYXkuY29tL3YxL2NoZWNrb3V0LmpzJztcbiAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHRydWUpO1xuICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiByZXNvbHZlKGZhbHNlKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBQcm9jZXNzIFJhem9ycGF5IHBheW1lbnRcbiAgY29uc3QgcHJvY2Vzc1Jhem9ycGF5UGF5bWVudCA9IGFzeW5jIChvcmRlckFtb3VudCwgb3JkZXJEYXRhKSA9PiB7XG4gICAgaWYgKCFyZXN0YXVyYW50LnJhem9ycGF5X2tleV9pZCkge1xuICAgICAgYWxlcnQoJ09ubGluZSBwYXltZW50IG5vdCBjb25maWd1cmVkLiBQbGVhc2UgcGF5IHdpdGggY2FzaC4nKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XG4gICAgfVxuXG4gICAgY29uc3Qgc2NyaXB0TG9hZGVkID0gYXdhaXQgbG9hZFJhem9ycGF5U2NyaXB0KCk7XG4gICAgaWYgKCFzY3JpcHRMb2FkZWQpIHtcbiAgICAgIGFsZXJ0KCdGYWlsZWQgdG8gbG9hZCBwYXltZW50IGdhdGV3YXkuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAga2V5OiByZXN0YXVyYW50LnJhem9ycGF5X2tleV9pZCxcbiAgICAgICAgYW1vdW50OiBvcmRlckFtb3VudCAqIDEwMCwgLy8gQ29udmVydCB0byBwYWlzZVxuICAgICAgICBjdXJyZW5jeTogJ0lOUicsXG4gICAgICAgIG5hbWU6IHJlc3RhdXJhbnQubmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGBPcmRlciBhdCAke3Jlc3RhdXJhbnQubmFtZX1gLFxuICAgICAgICBpbWFnZTogcmVzdGF1cmFudC5sb2dvX3VybCB8fCAnJyxcbiAgICAgICAgaGFuZGxlcjogYXN5bmMgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgLy8gUGF5bWVudCBzdWNjZXNzZnVsIC0gbm93IHBsYWNlIHRoZSBvcmRlclxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBmaW5hbE9yZGVyRGF0YSA9IHtcbiAgICAgICAgICAgICAgLi4ub3JkZXJEYXRhLFxuICAgICAgICAgICAgICBwYXltZW50X3N0YXR1czogJ3BhaWQnLFxuICAgICAgICAgICAgICBwYXltZW50X3RyYW5zYWN0aW9uX2lkOiByZXNwb25zZS5yYXpvcnBheV9wYXltZW50X2lkXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3Qgb3JkZXIgPSBhd2FpdCBiYXNlNDQuZW50aXRpZXMuT3JkZXIuY3JlYXRlKGZpbmFsT3JkZXJEYXRhKTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIGN1c3RvbWVyIGxveWFsdHlcbiAgICAgICAgICAgIGF3YWl0IHVwZGF0ZUN1c3RvbWVyTG95YWx0eShvcmRlckRhdGEudG90YWxfYW1vdW50KTtcblxuICAgICAgICAgICAgLy8gRG93bmxvYWQgYmlsbFxuICAgICAgICAgICAgZG93bmxvYWRCaWxsKGZpbmFsT3JkZXJEYXRhKTtcblxuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgIHRyYW5zYWN0aW9uX2lkOiByZXNwb25zZS5yYXpvcnBheV9wYXltZW50X2lkLFxuICAgICAgICAgICAgICBvcmRlcjogb3JkZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIG9yZGVyIGFmdGVyIHBheW1lbnRcIiwgZSk7XG4gICAgICAgICAgICBhbGVydCgnUGF5bWVudCBzdWNjZXNzZnVsIGJ1dCBvcmRlciBjcmVhdGlvbiBmYWlsZWQuIFBsZWFzZSBjb250YWN0IHJlc3RhdXJhbnQuJyk7XG4gICAgICAgICAgICByZXNvbHZlKHsgc3VjY2VzczogZmFsc2UgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb2RhbDoge1xuICAgICAgICAgIG9uZGlzbWlzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVzb2x2ZSh7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmlsbDoge1xuICAgICAgICAgIG5hbWU6IGN1c3RvbWVySW5mby5uYW1lLFxuICAgICAgICAgIGNvbnRhY3Q6IGN1c3RvbWVySW5mby5waG9uZVxuICAgICAgICB9LFxuICAgICAgICB0aGVtZToge1xuICAgICAgICAgIGNvbG9yOiAnI2VhNTgwYydcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgY29uc3QgcmF6b3JwYXkgPSBuZXcgd2luZG93LlJhem9ycGF5KG9wdGlvbnMpO1xuICAgICAgcmF6b3JwYXkub3BlbigpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIFVwZGF0ZSBjdXN0b21lciBsb3lhbHR5IHBvaW50c1xuICBjb25zdCB1cGRhdGVDdXN0b21lckxveWFsdHkgPSBhc3luYyAodG90YWwpID0+IHtcbiAgICAvLyBTa2lwIGlmIG5vIHBob25lIG51bWJlciBwcm92aWRlZFxuICAgIGlmICghY3VzdG9tZXJJbmZvLnBob25lIHx8IGN1c3RvbWVySW5mby5waG9uZSA9PT0gXCJndWVzdFwiKSByZXR1cm47XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdDdXN0b21lcnMgPSBhd2FpdCBiYXNlNDQuZW50aXRpZXMuQ3VzdG9tZXIuZmlsdGVyKHtcbiAgICAgICAgcmVzdGF1cmFudF9pZDogcmVzdGF1cmFudElkLFxuICAgICAgICBwaG9uZTogY3VzdG9tZXJJbmZvLnBob25lXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgdG9rZW5zRWFybmVkID0gTWF0aC5mbG9vcih0b3RhbCAvIDEwKTsgLy8gMSB0b2tlbiBwZXIg4oK5MTAgc3BlbnRcblxuICAgICAgaWYgKGV4aXN0aW5nQ3VzdG9tZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIGN1c3RvbWVyXG4gICAgICAgIGNvbnN0IGN1c3RvbWVyID0gZXhpc3RpbmdDdXN0b21lcnNbMF07XG4gICAgICAgIGNvbnN0IG5ld0Vhcm5lZFRva2VucyA9IChjdXN0b21lci5lYXJuZWRfdG9rZW5zIHx8IDApICsgdG9rZW5zRWFybmVkO1xuICAgICAgICBjb25zdCBuZXdBdmFpbGFibGVUb2tlbnMgPSAoY3VzdG9tZXIubG95YWx0eV9wb2ludHMgfHwgMCkgKyB0b2tlbnNFYXJuZWQ7XG4gICAgICAgIGNvbnN0IG5ld1RvdGFsU3BlbnQgPSAoY3VzdG9tZXIudG90YWxfc3BlbnQgfHwgMCkgKyB0b3RhbDtcblxuICAgICAgICBsZXQgdGllciA9IFwiYnJvbnplXCI7XG4gICAgICAgIGlmIChuZXdUb3RhbFNwZW50ID49IDUwMDAwKSB0aWVyID0gXCJwbGF0aW51bVwiO2Vsc2VcbiAgICAgICAgaWYgKG5ld1RvdGFsU3BlbnQgPj0gMjUwMDApIHRpZXIgPSBcImdvbGRcIjtlbHNlXG4gICAgICAgIGlmIChuZXdUb3RhbFNwZW50ID49IDEwMDAwKSB0aWVyID0gXCJzaWx2ZXJcIjtcblxuICAgICAgICBhd2FpdCBiYXNlNDQuZW50aXRpZXMuQ3VzdG9tZXIudXBkYXRlKGN1c3RvbWVyLmlkLCB7XG4gICAgICAgICAgbmFtZTogY3VzdG9tZXJJbmZvLm5hbWUgfHwgY3VzdG9tZXIubmFtZSxcbiAgICAgICAgICB0b3RhbF9vcmRlcnM6IChjdXN0b21lci50b3RhbF9vcmRlcnMgfHwgMCkgKyAxLFxuICAgICAgICAgIHRvdGFsX3NwZW50OiBuZXdUb3RhbFNwZW50LFxuICAgICAgICAgIGxveWFsdHlfcG9pbnRzOiBuZXdBdmFpbGFibGVUb2tlbnMsXG4gICAgICAgICAgZWFybmVkX3Rva2VuczogbmV3RWFybmVkVG9rZW5zLFxuICAgICAgICAgIGxveWFsdHlfdGllcjogdGllcixcbiAgICAgICAgICBsYXN0X29yZGVyX2RhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ3JlYXRlIG5ldyBjdXN0b21lciBwcm9maWxlXG4gICAgICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5DdXN0b21lci5jcmVhdGUoe1xuICAgICAgICAgIHJlc3RhdXJhbnRfaWQ6IHJlc3RhdXJhbnRJZCxcbiAgICAgICAgICBuYW1lOiBjdXN0b21lckluZm8ubmFtZSB8fCBcIkN1c3RvbWVyXCIsXG4gICAgICAgICAgcGhvbmU6IGN1c3RvbWVySW5mby5waG9uZSxcbiAgICAgICAgICB0b3RhbF9vcmRlcnM6IDEsXG4gICAgICAgICAgdG90YWxfc3BlbnQ6IHRvdGFsLFxuICAgICAgICAgIGxveWFsdHlfcG9pbnRzOiB0b2tlbnNFYXJuZWQsXG4gICAgICAgICAgZWFybmVkX3Rva2VuczogdG9rZW5zRWFybmVkLFxuICAgICAgICAgIHJlZGVlbWVkX3Rva2VuczogMCxcbiAgICAgICAgICBsb3lhbHR5X3RpZXI6IFwiYnJvbnplXCIsXG4gICAgICAgICAgbGFzdF9vcmRlcl9kYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkN1c3RvbWVyIHVwZGF0ZSBmYWlsZWRcIiwgZSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFN1Ym1pdCBvcmRlclxuICBjb25zdCBoYW5kbGVTdWJtaXRPcmRlciA9IGFzeW5jICgpID0+IHtcbiAgICAvLyBWYWxpZGF0aW9uIGJhc2VkIG9uIG9yZGVyIHR5cGVcbiAgICBpZiAoY2FydC5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgIC8vIEZvciBkaW5lLWluIHdpdGggdGFibGUgbnVtYmVyLCBubyBjdXN0b21lciBkZXRhaWxzIG5lZWRlZFxuICAgIGlmIChvcmRlclR5cGUgPT09IFwiZGluZV9pblwiICYmIHRhYmxlTnVtYmVyKSB7XG5cbiAgICAgIC8vIE5vIHZhbGlkYXRpb24gbmVlZGVkXG4gICAgfSAvLyBGb3IgdGFrZWF3YXksIG5lZWQgbmFtZSBhbmQgcGhvbmVcbiAgICBlbHNlIGlmIChvcmRlclR5cGUgPT09IFwidGFrZWF3YXlcIikge1xuICAgICAgaWYgKCFjdXN0b21lckluZm8ubmFtZSB8fCAhY3VzdG9tZXJJbmZvLnBob25lKSByZXR1cm47XG4gICAgfVxuICAgIC8vIEZvciBkZWxpdmVyeSwgbmVlZCBuYW1lLCBwaG9uZSwgYW5kIGFkZHJlc3NcbiAgICBlbHNlIGlmIChvcmRlclR5cGUgPT09IFwiZGVsaXZlcnlcIikge1xuICAgICAgaWYgKCFjdXN0b21lckluZm8ubmFtZSB8fCAhY3VzdG9tZXJJbmZvLnBob25lIHx8ICFjdXN0b21lckluZm8uYWRkcmVzcykgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBGb3IgZGluZS1pbiB3aXRob3V0IHRhYmxlLCBuZWVkIG5hbWUgYW5kIHBob25lXG4gICAgZWxzZSB7XG4gICAgICBpZiAoIWN1c3RvbWVySW5mby5uYW1lIHx8ICFjdXN0b21lckluZm8ucGhvbmUpIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRJc1N1Ym1pdHRpbmcodHJ1ZSk7XG5cbiAgICAvLyBVc2UgbG9jYXRpb24gZnJvbSBtYXAgcGlja2VyIGZvciBkZWxpdmVyeSBvcmRlcnNcbiAgICBsZXQgbG9jYXRpb25EYXRhID0gbnVsbDtcbiAgICBpZiAob3JkZXJUeXBlID09PSBcImRlbGl2ZXJ5XCIpIHtcbiAgICAgIC8vIFVzZSB0aGUgbG9jYXRpb24gZnJvbSB0aGUgbWFwIHBpY2tlciBpZiBhdmFpbGFibGVcbiAgICAgIGxvY2F0aW9uRGF0YSA9IGN1c3RvbWVySW5mby5sb2NhdGlvbjtcblxuICAgICAgLy8gSWYgbm90IHBpY2tlZCBvbiBtYXAsIHRyeSB0byBhdXRvLWNhcHR1cmVcbiAgICAgIGlmICghbG9jYXRpb25EYXRhKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbG9jYXRpb25EYXRhID0gYXdhaXQgZ2V0Q3VycmVudExvY2F0aW9uKCk7XG4gICAgICAgICAgc2V0Q3VzdG9tZXJJbmZvKHsgLi4uY3VzdG9tZXJJbmZvLCBsb2NhdGlvbjogbG9jYXRpb25EYXRhIH0pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJDb3VsZCBub3QgZ2V0IGxvY2F0aW9uXCIsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdGF4UmF0ZSA9IHJlc3RhdXJhbnQ/LnNldHRpbmdzPy50YXhfcmF0ZSB8fCA1O1xuICAgIGNvbnN0IHN1YnRvdGFsID0gZ2V0Q2FydFRvdGFsKCk7XG4gICAgY29uc3QgdGF4QW1vdW50ID0gTWF0aC5yb3VuZChzdWJ0b3RhbCAqIHRheFJhdGUgLyAxMDApO1xuICAgIGNvbnN0IHRvdGFsID0gc3VidG90YWwgKyB0YXhBbW91bnQgKyBkZWxpdmVyeUZlZTtcblxuICAgIGNvbnN0IG9yZGVyRGF0YSA9IHtcbiAgICAgIHJlc3RhdXJhbnRfaWQ6IHJlc3RhdXJhbnRJZCxcbiAgICAgIG9yZGVyX251bWJlcjogZ2VuZXJhdGVPcmRlck51bWJlcigpLFxuICAgICAgb3JkZXJfdHlwZTogb3JkZXJUeXBlLFxuICAgICAgdGFibGVfbnVtYmVyOiBvcmRlclR5cGUgPT09IFwiZGluZV9pblwiID8gdGFibGVOdW1iZXIgfHwgXCJcIiA6IFwiXCIsXG4gICAgICBjdXN0b21lcl9uYW1lOiBjdXN0b21lckluZm8ubmFtZSB8fCBcIkd1ZXN0XCIsXG4gICAgICBjdXN0b21lcl9waG9uZTogY3VzdG9tZXJJbmZvLnBob25lIHx8IFwiXCIsXG4gICAgICBkZWxpdmVyeV9hZGRyZXNzOiBvcmRlclR5cGUgPT09IFwiZGVsaXZlcnlcIiA/IGN1c3RvbWVySW5mby5hZGRyZXNzIDogXCJcIixcbiAgICAgIGRlbGl2ZXJ5X2xvY2F0aW9uOiBsb2NhdGlvbkRhdGEsXG4gICAgICBpdGVtczogY2FydC5tYXAoKGMpID0+ICh7XG4gICAgICAgIG1lbnVfaXRlbV9pZDogYy5pdGVtLmlkLFxuICAgICAgICBuYW1lOiBjLml0ZW0ubmFtZSxcbiAgICAgICAgcXVhbnRpdHk6IGMucXVhbnRpdHksXG4gICAgICAgIHVuaXRfcHJpY2U6IGMuaXRlbS5wcmljZSxcbiAgICAgICAgdG90YWxfcHJpY2U6IGMuaXRlbS5wcmljZSAqIGMucXVhbnRpdHlcbiAgICAgIH0pKSxcbiAgICAgIHN1YnRvdGFsLFxuICAgICAgdGF4X2Ftb3VudDogdGF4QW1vdW50LFxuICAgICAgc2VydmljZV9jaGFyZ2U6IGRlbGl2ZXJ5RmVlLFxuICAgICAgdG90YWxfYW1vdW50OiB0b3RhbCxcbiAgICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXG4gICAgICBwYXltZW50X3N0YXR1czogXCJwZW5kaW5nXCIsXG4gICAgICBwYXltZW50X21ldGhvZDogcGF5bWVudE1ldGhvZCxcbiAgICAgIG5vdGVzOiBjdXN0b21lckluZm8ubm90ZXNcbiAgICB9O1xuXG4gICAgLy8gUHJvY2VzcyBwYXltZW50IGlmIG9ubGluZVxuICAgIGlmIChwYXltZW50TWV0aG9kICE9PSBcImNhc2hcIikge1xuICAgICAgc2V0SXNQcm9jZXNzaW5nUGF5bWVudCh0cnVlKTtcbiAgICAgIGNvbnN0IHBheW1lbnRSZXN1bHQgPSBhd2FpdCBwcm9jZXNzUmF6b3JwYXlQYXltZW50KHRvdGFsLCBvcmRlckRhdGEpO1xuICAgICAgc2V0SXNQcm9jZXNzaW5nUGF5bWVudChmYWxzZSk7XG5cbiAgICAgIGlmICghcGF5bWVudFJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgIHNldElzU3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gT3JkZXIgYWxyZWFkeSBjcmVhdGVkIGluIHBheW1lbnQgaGFuZGxlclxuICAgICAgc2V0T3JkZXJTdWNjZXNzKHBheW1lbnRSZXN1bHQub3JkZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDYXNoIHBheW1lbnQgLSBjcmVhdGUgb3JkZXIgaW1tZWRpYXRlbHlcbiAgICAgIGNvbnN0IG9yZGVyID0gYXdhaXQgYmFzZTQ0LmVudGl0aWVzLk9yZGVyLmNyZWF0ZShvcmRlckRhdGEpO1xuICAgICAgZG93bmxvYWRCaWxsKG9yZGVyRGF0YSk7XG4gICAgICBhd2FpdCB1cGRhdGVDdXN0b21lckxveWFsdHkodG90YWwpO1xuICAgICAgc2V0T3JkZXJTdWNjZXNzKG9yZGVyKTtcbiAgICB9XG5cbiAgICBzZXRJc1N1Ym1pdHRpbmcoZmFsc2UpO1xuICAgIHNldElzQ2hlY2tvdXRPcGVuKGZhbHNlKTtcbiAgICBzZXRDYXJ0KFtdKTtcbiAgICBzZXRDdXN0b21lckluZm8oeyBuYW1lOiBcIlwiLCBwaG9uZTogXCJcIiwgYWRkcmVzczogXCJcIiwgbG9jYXRpb246IG51bGwsIG5vdGVzOiBcIlwiIH0pO1xuICB9O1xuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo2Mjg6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JheS01MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjYyOTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo2MzA6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYW5pbWF0ZS1zcGluIHJvdW5kZWQtZnVsbCBoLTEwIHctMTAgYm9yZGVyLWItMiBib3JkZXItb3JhbmdlLTYwMCBteC1hdXRvIG1iLTRcIj48L2Rpdj5cbiAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo2MzE6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPkxvYWRpbmcgbWVudS4uLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4pO1xuXG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo2Mzk6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTUwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNFwiPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjY0MDo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8U3RvcmUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6NjQxOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMTYgaC0xNiB0ZXh0LWdyYXktMzAwIG14LWF1dG8gbWItNFwiIC8+XG4gICAgICAgICAgPGgxIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjY0MjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIG1iLTJcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImVycm9yXCI+e2Vycm9yfTwvaDE+XG4gICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6NjQzOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5QbGVhc2UgY2hlY2sgdGhlIFVSTCBhbmQgdHJ5IGFnYWluPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2Pik7XG5cbiAgfVxuXG4gIGlmIChvcmRlclN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gPE9yZGVyVHJhY2tpbmdTY3JlZW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6NjUwOjExXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgb3JkZXI9e29yZGVyU3VjY2Vzc30gcmVzdGF1cmFudD17cmVzdGF1cmFudH0gdGFibGVOdW1iZXI9e3RhYmxlTnVtYmVyfSBvbk9yZGVyTW9yZT17KCkgPT4gc2V0T3JkZXJTdWNjZXNzKG51bGwpfSAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo2NTQ6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTUwIHBiLTI0XCI+XG4gICAgICB7LyogQ3VzdG9tZXIgQ2hhdCBXaWRnZXQgKi99XG4gICAgICA8Q3VzdG9tZXJDaGF0V2lkZ2V0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjY1Njo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgcmVzdGF1cmFudD17cmVzdGF1cmFudH0gLz5cbiAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjY1ODo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93LXNtIHN0aWNreSB0b3AtMCB6LTQwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJjb3Zlcl9pbWFnZV91cmxcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmVzdGF1cmFudD8uaWQgfHwgcmVzdGF1cmFudD8uX2lkfT5cbiAgICAgICAgey8qIENvdmVyIEltYWdlICovfVxuICAgICAgICB7cmVzdGF1cmFudD8uY292ZXJfaW1hZ2VfdXJsICYmXG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6NjYxOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtMzIgb3ZlcmZsb3ctaGlkZGVuXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJjb3Zlcl9pbWFnZV91cmxcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmVzdGF1cmFudD8uaWQgfHwgcmVzdGF1cmFudD8uX2lkfT5cbiAgICAgICAgICAgIDxpbWcgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6NjYyOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICBzcmM9e3Jlc3RhdXJhbnQuY292ZXJfaW1hZ2VfdXJsfVxuICAgICAgICAgIGFsdD17cmVzdGF1cmFudC5uYW1lfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCIgLz5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB7LyogUmVzdGF1cmFudCBJbmZvICovfVxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjY3MTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgJHtyZXN0YXVyYW50Py5jb3Zlcl9pbWFnZV91cmwgPyAnYmctd2hpdGUnIDogJ2JnLWdyYWRpZW50LXRvLXIgZnJvbS1vcmFuZ2UtNjAwIHRvLW9yYW5nZS01MDAnfSAke3Jlc3RhdXJhbnQ/LmNvdmVyX2ltYWdlX3VybCA/ICd0ZXh0LWdyYXktOTAwJyA6ICd0ZXh0LXdoaXRlJ30gcC00YH0+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo2NzI6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAge3Jlc3RhdXJhbnQ/LmxvZ29fdXJsID9cbiAgICAgICAgICAgIDxpbWcgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6Njc0OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgIHNyYz17cmVzdGF1cmFudC5sb2dvX3VybH1cbiAgICAgICAgICAgIGFsdD17cmVzdGF1cmFudC5uYW1lfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xNCBoLTE0IHJvdW5kZWQteGwgb2JqZWN0LWNvdmVyIGJnLXdoaXRlIHNoYWRvdy1tZFwiIC8+IDpcblxuXG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjY4MDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YHctMTQgaC0xNCByb3VuZGVkLXhsICR7cmVzdGF1cmFudD8uY292ZXJfaW1hZ2VfdXJsID8gJ2JnLW9yYW5nZS0xMDAnIDogJ2JnLXdoaXRlLzIwJ30gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJgfT5cbiAgICAgICAgICAgICAgICA8U3RvcmUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6NjgxOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgdy03IGgtNyAke3Jlc3RhdXJhbnQ/LmNvdmVyX2ltYWdlX3VybCA/ICd0ZXh0LW9yYW5nZS02MDAnIDogJyd9YH0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjY4NDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICAgICAgICA8aDEgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6Njg1OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIm5hbWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmVzdGF1cmFudD8uaWQgfHwgcmVzdGF1cmFudD8uX2lkfT57cmVzdGF1cmFudD8ubmFtZX08L2gxPlxuICAgICAgICAgICAgICB7cmVzdGF1cmFudD8uY3Vpc2luZV90eXBlPy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjY4NzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YHRleHQtc20gJHtyZXN0YXVyYW50Py5jb3Zlcl9pbWFnZV91cmwgPyAndGV4dC1ncmF5LTYwMCcgOiAndGV4dC1vcmFuZ2UtMTAwJ31gfT5cbiAgICAgICAgICAgICAgICAgIHtyZXN0YXVyYW50LmN1aXNpbmVfdHlwZS5zbGljZSgwLCAzKS5qb2luKCcg4oCiICcpfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7dGFibGVOdW1iZXIgJiZcbiAgICAgICAgICAgIDxCYWRnZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo2OTM6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e3Jlc3RhdXJhbnQ/LmNvdmVyX2ltYWdlX3VybCA/ICdiZy1vcmFuZ2UtNjAwIHRleHQtd2hpdGUnIDogJ2JnLXdoaXRlLzIwIHRleHQtd2hpdGUnfSBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInRhYmxlTnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgVGFibGUge3RhYmxlTnVtYmVyfVxuICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogU2VhcmNoICovfVxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjcwMTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicC0zIGJvcmRlci1iXCI+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo3MDI6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPFNlYXJjaCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo3MDM6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0zIHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB3LTQgaC00IHRleHQtZ3JheS00MDBcIiAvPlxuICAgICAgICAgICAgPElucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjcwNDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBtZW51Li4uXCJcbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoUXVlcnkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicGwtOVwiIC8+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIE9yZGVyIFR5cGUgU2VsZWN0aW9uIC0gT25seSBzaG93IGlmIGF0IGxlYXN0IG9uZSBkZWxpdmVyeS90YWtlYXdheSBpcyBlbmFibGVkICovfVxuICAgICAgICB7IXRhYmxlTnVtYmVyICYmXG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6NzE1OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBwLTMgYm9yZGVyLWIgYmctZ3JheS01MFwiPlxuICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo3MTY6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgIHZhcmlhbnQ9e29yZGVyVHlwZSA9PT0gXCJkaW5lX2luXCIgPyBcImRlZmF1bHRcIiA6IFwib3V0bGluZVwifVxuICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3JkZXJUeXBlKFwiZGluZV9pblwiKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4LTEgJHtvcmRlclR5cGUgPT09IFwiZGluZV9pblwiID8gXCJiZy1vcmFuZ2UtNjAwIGhvdmVyOmJnLW9yYW5nZS03MDBcIiA6IFwiXCJ9YH0+XG5cbiAgICAgICAgICAgICAgRGluZSBJblxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICB7cmVzdGF1cmFudD8uZmVhdHVyZXNfZW5hYmxlZD8udGFrZWF3YXkgPT09IHRydWUgJiZcbiAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjcyNToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgdmFyaWFudD17b3JkZXJUeXBlID09PSBcInRha2Vhd2F5XCIgPyBcImRlZmF1bHRcIiA6IFwib3V0bGluZVwifVxuICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0T3JkZXJUeXBlKFwidGFrZWF3YXlcIik7XG4gICAgICAgICAgICBzZXREZWxpdmVyeUZlZSgwKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXgtMSAke29yZGVyVHlwZSA9PT0gXCJ0YWtlYXdheVwiID8gXCJiZy1vcmFuZ2UtNjAwIGhvdmVyOmJnLW9yYW5nZS03MDBcIiA6IFwiXCJ9YH0+XG5cbiAgICAgICAgICAgICAgICBUYWtlYXdheVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICB9XG4gICAgICAgICAgICB7cmVzdGF1cmFudD8uZmVhdHVyZXNfZW5hYmxlZD8uZGVsaXZlcnkgPT09IHRydWUgJiZcbiAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjczODoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgdmFyaWFudD17b3JkZXJUeXBlID09PSBcImRlbGl2ZXJ5XCIgPyBcImRlZmF1bHRcIiA6IFwib3V0bGluZVwifVxuICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3JkZXJUeXBlKFwiZGVsaXZlcnlcIil9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgZmxleC0xICR7b3JkZXJUeXBlID09PSBcImRlbGl2ZXJ5XCIgPyBcImJnLW9yYW5nZS02MDAgaG92ZXI6Ymctb3JhbmdlLTcwMFwiIDogXCJcIn1gfT5cblxuICAgICAgICAgICAgICAgIERlbGl2ZXJ5XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuXG4gICAgICAgIHsvKiBDYXRlZ29yaWVzICovfVxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51Ojc1MTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBwLTMgb3ZlcmZsb3cteC1hdXRvIHNjcm9sbGJhci1oaWRlXCI+XG4gICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo3NTI6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgIHZhcmlhbnQ9e2FjdGl2ZUNhdGVnb3J5ID09PSBcImFsbFwiID8gXCJkZWZhdWx0XCIgOiBcIm91dGxpbmVcIn1cbiAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZUNhdGVnb3J5KFwiYWxsXCIpfVxuICAgICAgICAgIGNsYXNzTmFtZT17YWN0aXZlQ2F0ZWdvcnkgPT09IFwiYWxsXCIgPyBcImJnLW9yYW5nZS02MDAgaG92ZXI6Ymctb3JhbmdlLTcwMFwiIDogXCJcIn0+XG5cbiAgICAgICAgICAgIEFsbFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+XG4gICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo3NjE6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgIGtleT17Y2F0ZWdvcnl9XG4gICAgICAgICAgdmFyaWFudD17YWN0aXZlQ2F0ZWdvcnkgPT09IGNhdGVnb3J5ID8gXCJkZWZhdWx0XCIgOiBcIm91dGxpbmVcIn1cbiAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZUNhdGVnb3J5KGNhdGVnb3J5KX1cbiAgICAgICAgICBjbGFzc05hbWU9e2B3aGl0ZXNwYWNlLW5vd3JhcCAke2FjdGl2ZUNhdGVnb3J5ID09PSBjYXRlZ29yeSA/IFwiYmctb3JhbmdlLTYwMCBob3ZlcjpiZy1vcmFuZ2UtNzAwXCIgOiBcIlwifWB9IGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiY2F0ZWdvcnlcIj5cblxuICAgICAgICAgICAgICB7Y2F0ZWdvcnl9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTG95YWx0eSBQb2ludHMgQmFubmVyICovfVxuICAgICAge2N1c3RvbWVyRGF0YSAmJlxuICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6Nzc2OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAtMjAgfX1cbiAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgY2xhc3NOYW1lPVwibXgtNCBtdC00IGJnLWdyYWRpZW50LXRvLXIgZnJvbS12aW9sZXQtNjAwIHRvLXB1cnBsZS02MDAgcm91bmRlZC14bCBwLTQgdGV4dC13aGl0ZSBzaGFkb3ctbGdcIj5cblxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6NzgxOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51Ojc4MjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo3ODM6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBvcGFjaXR5LTkwXCI+WW91ciBMb3lhbHR5IFBvaW50czwvcD5cbiAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6Nzg0OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e2N1c3RvbWVyRGF0YS5sb3lhbHR5X3BvaW50cyB8fCAwfSBQb2ludHM8L3A+XG4gICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51Ojc4NToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgb3BhY2l0eS03NSBtdC0xXCI+VGllcjoge2N1c3RvbWVyRGF0YS5sb3lhbHR5X3RpZXI/LnRvVXBwZXJDYXNlKCl9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51Ojc4NzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo3ODg6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCByZXdhcmRzSW5mbyA9IGxveWFsdHlSZXdhcmRzLlxuICAgICAgICAgICAgICBmaWx0ZXIoKHIpID0+IHIucG9pbnRzX3JlcXVpcmVkIDw9IChjdXN0b21lckRhdGEubG95YWx0eV9wb2ludHMgfHwgMCkpLlxuICAgICAgICAgICAgICBtYXAoKHIpID0+IGAke3IubmFtZX0gKCR7ci5wb2ludHNfcmVxdWlyZWR9IHB0cylgKS5cbiAgICAgICAgICAgICAgam9pbignXFxuJyk7XG4gICAgICAgICAgICAgIGFsZXJ0KHJld2FyZHNJbmZvIHx8ICdObyByZXdhcmRzIGF2YWlsYWJsZSB5ZXQuIEtlZXAgb3JkZXJpbmcgdG8gZWFybiBtb3JlIHBvaW50cyEnKTtcbiAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAgVmlldyBSZXdhcmRzXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2xveWFsdHlSZXdhcmRzLmZpbHRlcigocikgPT4gci5wb2ludHNfcmVxdWlyZWQgPD0gKGN1c3RvbWVyRGF0YS5sb3lhbHR5X3BvaW50cyB8fCAwKSkubGVuZ3RoID4gMCAmJlxuICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo4MDQ6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIG10LTIgb3BhY2l0eS05MFwiPlxuICAgICAgICAgICAgICDwn46JIFlvdSBoYXZlIHtsb3lhbHR5UmV3YXJkcy5maWx0ZXIoKHIpID0+IHIucG9pbnRzX3JlcXVpcmVkIDw9IChjdXN0b21lckRhdGEubG95YWx0eV9wb2ludHMgfHwgMCkpLmxlbmd0aH0gcmV3YXJkKHMpIGF2YWlsYWJsZSFcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgfVxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICB9XG5cbiAgICAgIHsvKiBNZW51IEl0ZW1zICovfVxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo4MTI6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtNCBzcGFjZS15LTZcIj5cbiAgICAgICAge09iamVjdC5lbnRyaWVzKGdyb3VwZWRJdGVtcykubWFwKChbY2F0ZWdvcnksIGl0ZW1zXSkgPT5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo4MTQ6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2NhdGVnb3J5fT5cbiAgICAgICAgICAgIDxoMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo4MTU6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwIG1iLTNcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImNhdGVnb3J5XCI+e2NhdGVnb3J5fTwvaDI+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjgxNjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxuICAgICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGluQ2FydCA9IGdldEl0ZW1JbkNhcnQoaXRlbS5pZCk7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6ODIwOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgbGF5b3V0XG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAxMCB9fVxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgcC00IHNoYWRvdy1zbSBmbGV4IGdhcC00XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZEl0ZW0oaXRlbSl9IGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtpdGVtPy5pZH0+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIEltYWdlICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjgyOToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInctMjQgaC0yNCByb3VuZGVkLWxnIGJnLWdyYXktMTAwIG92ZXJmbG93LWhpZGRlbiBmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0uaW1hZ2VfdXJsID9cbiAgICAgICAgICAgICAgICAgICAgPGltZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo4MzE6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2VfdXJsfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIiAvPiA6XG5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjgzNzoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtM3hsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIPCfjb3vuI9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBEZXRhaWxzICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51Ojg0NDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXgtMSBtaW4tdy0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo4NDU6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo4NDY6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImRlc2NyaXB0aW9uXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2l0ZW0/LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo4NDc6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBmbGV4LXdyYXBcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImlzX3ZlZ2V0YXJpYW5cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aXRlbT8uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo4NDg6MjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJuYW1lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2l0ZW0/LmlkfT57aXRlbS5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uaXNfdmVnZXRhcmlhbiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo4NTA6MzBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCBib3JkZXItMiBib3JkZXItZ3JlZW4tNjAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51Ojg1MTozMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTIgaC0yIGJnLWdyZWVuLTYwMCByb3VuZGVkLWZ1bGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uaXNfc3BpY3kgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsYW1lIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51Ojg1NTozMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtcmVkLTUwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9uICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo4NTk6MjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgbGluZS1jbGFtcC0yIG10LTFcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImRlc2NyaXB0aW9uXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2l0ZW0/LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6ODY2OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG10LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51Ojg2NzoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJwcmljZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtpdGVtPy5pZH0+4oK5e2l0ZW0ucHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW5DYXJ0ID9cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51Ojg3MDoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCIgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6ODcxOjI4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJpY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOCB3LThcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlQ2FydFF1YW50aXR5KGl0ZW0uaWQsIGluQ2FydC5xdWFudGl0eSAtIDEpfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1pbnVzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51Ojg3NzozMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo4Nzk6MjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ3LTYgdGV4dC1jZW50ZXIgZm9udC1tZWRpdW1cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInF1YW50aXR5XCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2luQ2FydD8uaWR9PntpbkNhcnQucXVhbnRpdHl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6ODgwOjI4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJpY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOCB3LTggYmctb3JhbmdlLTYwMCBob3ZlcjpiZy1vcmFuZ2UtNzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZUNhcnRRdWFudGl0eShpdGVtLmlkLCBpbkNhcnQucXVhbnRpdHkgKyAxKX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbHVzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51Ojg4NTozMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDpcblxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6ODg5OjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItb3JhbmdlLTIwMCB0ZXh0LW9yYW5nZS02MDBcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9DYXJ0KGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsdXMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6ODk4OjI4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgbXItMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+KTtcblxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7T2JqZWN0LmtleXMoZ3JvdXBlZEl0ZW1zKS5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo5MTI6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktMTIgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgPFNlYXJjaCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo5MTM6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0xMiBoLTEyIG14LWF1dG8gbWItMyB0ZXh0LWdyYXktMzAwXCIgLz5cbiAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjkxNDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5ObyBpdGVtcyBmb3VuZDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBDYXJ0IEJ1dHRvbiAqL31cbiAgICAgIDxBbmltYXRlUHJlc2VuY2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6OTIwOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAge2NhcnQubGVuZ3RoID4gMCAmJlxuICAgICAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo5MjI6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICBpbml0aWFsPXt7IHk6IDEwMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEgfX1cbiAgICAgICAgZXhpdD17eyB5OiAxMDAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgcC00IGJnLXdoaXRlIGJvcmRlci10IHNoYWRvdy1sZ1wiPlxuXG4gICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjkyODoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLW9yYW5nZS02MDAgaG92ZXI6Ymctb3JhbmdlLTcwMCBweS02IHRleHQtbGdcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzQ2FydE9wZW4odHJ1ZSl9PlxuXG4gICAgICAgICAgICAgIDxTaG9wcGluZ0NhcnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6OTMyOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTUgbXItMlwiIC8+XG4gICAgICAgICAgICAgIFZpZXcgQ2FydCAoe2dldENhcnRJdGVtQ291bnQoKX0pXG4gICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjkzNDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1sLWF1dG9cIj7igrl7Z2V0Q2FydFRvdGFsKCl9PC9zcGFuPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICB9XG4gICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cblxuICAgICAgey8qIENhcnQgU2hlZXQgKi99XG4gICAgICA8U2hlZXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6OTQxOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBvcGVuPXtpc0NhcnRPcGVufSBvbk9wZW5DaGFuZ2U9e3NldElzQ2FydE9wZW59PlxuICAgICAgICA8U2hlZXRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51Ojk0Mjo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgc2lkZT1cImJvdHRvbVwiIGNsYXNzTmFtZT1cImgtWzg1dmhdIHJvdW5kZWQtdC0yeGxcIj5cbiAgICAgICAgICA8U2hlZXRIZWFkZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6OTQzOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgPFNoZWV0VGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6OTQ0OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPllvdXIgT3JkZXI8L1NoZWV0VGl0bGU+XG4gICAgICAgICAgPC9TaGVldEhlYWRlcj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51Ojk0NzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm10LTQgZmxleC0xIG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICAgICAge2NhcnQubWFwKChjYXJ0SXRlbSkgPT5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6OTQ5OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtjYXJ0SXRlbS5pdGVtLmlkfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHktMyBib3JkZXItYlwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtjYXJ0SXRlbT8uaXRlbT8uaWR9PlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6OTUwOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo5NTE6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiaXRlbS5uYW1lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2NhcnRJdGVtPy5pZH0+e2NhcnRJdGVtLml0ZW0ubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo5NTI6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIml0ZW0ucHJpY2VcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17Y2FydEl0ZW0/LmlkfT7igrl7Y2FydEl0ZW0uaXRlbS5wcmljZX0gZWFjaDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51Ojk1NDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51Ojk1NToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cImljb25cIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTggdy04XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVDYXJ0UXVhbnRpdHkoY2FydEl0ZW0uaXRlbS5pZCwgY2FydEl0ZW0ucXVhbnRpdHkgLSAxKX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPE1pbnVzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51Ojk2MToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6OTYzOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidy02IHRleHQtY2VudGVyXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJxdWFudGl0eVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtjYXJ0SXRlbT8uaWR9PntjYXJ0SXRlbS5xdWFudGl0eX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51Ojk2NDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cImljb25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOCB3LTggYmctb3JhbmdlLTYwMCBob3ZlcjpiZy1vcmFuZ2UtNzAwXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVDYXJ0UXVhbnRpdHkoY2FydEl0ZW0uaXRlbS5pZCwgY2FydEl0ZW0ucXVhbnRpdHkgKyAxKX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPFBsdXMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6OTY5OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo5NzI6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ3LTIwIHRleHQtcmlnaHQgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgIOKCuXtjYXJ0SXRlbS5pdGVtLnByaWNlICogY2FydEl0ZW0ucXVhbnRpdHl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBUb3RhbHMgKi99XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo5ODA6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJib3JkZXItdCBwdC00IHNwYWNlLXktMlwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo5ODE6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo5ODI6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+U3VidG90YWw8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51Ojk4MzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPuKCuXtnZXRDYXJ0VG90YWwoKX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6OTg1OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51Ojk4NjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlRheCAoe3Jlc3RhdXJhbnQ/LnNldHRpbmdzPy50YXhfcmF0ZSB8fCA1fSUpPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo5ODc6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj7igrl7TWF0aC5yb3VuZChnZXRDYXJ0VG90YWwoKSAqIChyZXN0YXVyYW50Py5zZXR0aW5ncz8udGF4X3JhdGUgfHwgNSkgLyAxMDApfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2RlbGl2ZXJ5RmVlID4gMCAmJlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo5OTA6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo5OTE6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+RGVsaXZlcnkgRmVlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51Ojk5MjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiZGVsaXZlcnlGZWVcIj7igrl7ZGVsaXZlcnlGZWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6OTk1OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gZm9udC1ib2xkIHRleHQtbGdcIj5cbiAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6OTk2OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlRvdGFsPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudTo5OTc6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj7igrl7Z2V0Q2FydFRvdGFsKCkgKyBNYXRoLnJvdW5kKGdldENhcnRUb3RhbCgpICogKHJlc3RhdXJhbnQ/LnNldHRpbmdzPy50YXhfcmF0ZSB8fCA1KSAvIDEwMCkgKyBkZWxpdmVyeUZlZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTAwMToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG10LTQgYmctdmlvbGV0LTYwMCBob3ZlcjpiZy12aW9sZXQtNzAwIHB5LTYgdGV4dC1sZ1wiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0SXNDYXJ0T3BlbihmYWxzZSk7XG4gICAgICAgICAgICBzZXRJc0NoZWNrb3V0T3Blbih0cnVlKTtcbiAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgUHJvY2VlZCB0byBPcmRlclxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1NoZWV0Q29udGVudD5cbiAgICAgIDwvU2hlZXQ+XG5cbiAgICAgIHsvKiBDaGVja291dCBEaWFsb2cgKi99XG4gICAgICA8RGlhbG9nIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjEwMTQ6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG9wZW49e2lzQ2hlY2tvdXRPcGVufSBvbk9wZW5DaGFuZ2U9e3NldElzQ2hlY2tvdXRPcGVufT5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTAxNTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWF4LXctbWQgbWF4LWgtWzkwdmhdIG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICAgIDxEaWFsb2dIZWFkZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTAxNjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgIDxEaWFsb2dUaXRsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudToxMDE3OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPkNvbXBsZXRlIFlvdXIgT3JkZXI8L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgIDwvRGlhbG9nSGVhZGVyPlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTAyMDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktNCBwYi00XCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJzZXR0aW5ncy5hY2NlcHRfb25saW5lX3BheW1lbnRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmVzdGF1cmFudD8uaWQgfHwgcmVzdGF1cmFudD8uX2lkfT5cbiAgICAgICAgICAgIHsvKiBGb3IgZGluZS1pbiB3aXRoIHRhYmxlLCBzaG93IG9ubHkgc3BlY2lhbCBpbnN0cnVjdGlvbnMgKi99XG4gICAgICAgICAgICB7b3JkZXJUeXBlID09PSBcImRpbmVfaW5cIiAmJiB0YWJsZU51bWJlciA/XG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTAyNDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtMyBiZy1vcmFuZ2UtNTAgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTAyNToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1vcmFuZ2UtNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTAyNjoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidGFibGVOdW1iZXJcIj5UYWJsZSB7dGFibGVOdW1iZXJ9PC9zdHJvbmc+IC0gWW91ciBvcmRlciB3aWxsIGJlIGRlbGl2ZXJlZCB0byB5b3VyIHRhYmxlXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudToxMDI5OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTAzMDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+U3BlY2lhbCBJbnN0cnVjdGlvbnM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPFRleHRhcmVhIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjEwMzE6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtjdXN0b21lckluZm8ubm90ZXN9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDdXN0b21lckluZm8oeyAuLi5jdXN0b21lckluZm8sIG5vdGVzOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFueSBhbGxlcmdpZXMgb3Igc3BlY2lhbCByZXF1ZXN0cz9cIlxuICAgICAgICAgICAgICAgIHJvd3M9ezJ9IC8+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC8+IDpcblxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7LyogTmFtZSBhbmQgUGhvbmUgZm9yIHRha2Vhd2F5IGFuZCBkZWxpdmVyeSAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjEwNDI6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudToxMDQzOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW1cIj5Zb3VyIE5hbWUgKjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8SW5wdXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTA0NDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2N1c3RvbWVySW5mby5uYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3VzdG9tZXJJbmZvKHsgLi4uY3VzdG9tZXJJbmZvLCBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbmFtZVwiIC8+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjEwNTA6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudToxMDUxOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW1cIj5QaG9uZSBOdW1iZXIgKjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8SW5wdXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTA1MjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2N1c3RvbWVySW5mby5waG9uZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldEN1c3RvbWVySW5mbyh7IC4uLmN1c3RvbWVySW5mbywgcGhvbmU6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA9PT0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZEN1c3RvbWVyRGF0YShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGhvbmUgbnVtYmVyXCIgLz5cblxuICAgICAgICAgICAgICAgICAge2N1c3RvbWVyRGF0YSAmJlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjEwNjM6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JlZW4tNjAwIG10LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICDinJMge2N1c3RvbWVyRGF0YS5sb3lhbHR5X3BvaW50cyB8fCAwfSBsb3lhbHR5IHBvaW50cyDCtyB7Y3VzdG9tZXJEYXRhLmxveWFsdHlfdGllcj8udG9VcHBlckNhc2UoKX0gdGllclxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIEFkZHJlc3MgZm9yIGRlbGl2ZXJ5ICovfVxuICAgICAgICAgICAgICAgIHtvcmRlclR5cGUgPT09IFwiZGVsaXZlcnlcIiAmJlxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjEwNzI6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTA3MzoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+RGVsaXZlcnkgQWRkcmVzcyAqPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWEgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTA3NDoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VzdG9tZXJJbmZvLmFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VzdG9tZXJJbmZvKHsgLi4uY3VzdG9tZXJJbmZvLCBhZGRyZXNzOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tEZWxpdmVyeVpvbmUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgY29tcGxldGUgZGVsaXZlcnkgYWRkcmVzcyB3aXRoIGFyZWEvbG9jYWxpdHlcIlxuICAgICAgICAgICAgICAgICAgcm93cz17M30gLz5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7LyogTG9jYXRpb24gUGlja2VyIE1hcCAqL31cbiAgICAgICAgICAgICAgICAgICAgPExvY2F0aW9uUGlja2VyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjEwODY6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgIGxvY2F0aW9uPXtjdXN0b21lckluZm8ubG9jYXRpb259XG4gICAgICAgICAgICAgICAgb25Mb2NhdGlvbkNoYW5nZT17KGxvY2F0aW9uKSA9PiBzZXRDdXN0b21lckluZm8oeyAuLi5jdXN0b21lckluZm8sIGxvY2F0aW9uIH0pfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7LyogRGVsaXZlcnkgWm9uZSBJbmZvICovfVxuICAgICAgICAgICAgICAgICAgICB7cmVzdGF1cmFudD8uZGVsaXZlcnlfem9uZXMgJiYgcmVzdGF1cmFudC5kZWxpdmVyeV96b25lcy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudToxMDkzOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTA5NDoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIGJsb2NrIG1iLTJcIj5TZWxlY3QgRGVsaXZlcnkgWm9uZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjEwOTU6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciByb3VuZGVkLW1kIHAtMiB0ZXh0LXNtXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFpvbmUgPyBKU09OLnN0cmluZ2lmeShzZWxlY3RlZFpvbmUpIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB6b25lID0gSlNPTi5wYXJzZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRab25lKHpvbmUpO1xuICAgICAgICAgICAgICAgICAgICAgIHNldERlbGl2ZXJ5RmVlKHpvbmUuZGVsaXZlcnlfZmVlIHx8IDApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkWm9uZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXREZWxpdmVyeUZlZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfX0gZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJkZWxpdmVyeV96b25lc1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyZXN0YXVyYW50Py5pZCB8fCByZXN0YXVyYW50Py5faWR9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTEwOToyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB2YWx1ZT1cIlwiPlNlbGVjdCB5b3VyIGFyZWE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlc3RhdXJhbnQuZGVsaXZlcnlfem9uZXMubWFwKCh6b25lLCBpZHgpID0+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTExMToyOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17aWR4fSB2YWx1ZT17SlNPTi5zdHJpbmdpZnkoem9uZSl9IGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiem9uZV9uYW1lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3pvbmU/LmlkIHx8IHpvbmU/Ll9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7em9uZS56b25lX25hbWV9IC0g4oK5e3pvbmUuZGVsaXZlcnlfZmVlfSAoTWluLiBPcmRlcjog4oK5e3pvbmUubWluaW11bV9vcmRlcn0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFpvbmUgJiZcbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTExNzoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm10LTIgcC0yIGJnLWJsdWUtNTAgcm91bmRlZCB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTExODoyOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtYmx1ZS03MDBcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInpvbmVfbmFtZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtzZWxlY3RlZFpvbmU/LmlkIHx8IHNlbGVjdGVkWm9uZT8uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIPCfk40ge3NlbGVjdGVkWm9uZS56b25lX25hbWV9OiBEZWxpdmVyeSBGZWUg4oK5e3NlbGVjdGVkWm9uZS5kZWxpdmVyeV9mZWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRDYXJ0VG90YWwoKSA8IHNlbGVjdGVkWm9uZS5taW5pbXVtX29yZGVyICYmXG4gICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjExMjI6MzBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgbXQtMVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwibWluaW11bV9vcmRlclwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtzZWxlY3RlZFpvbmU/LmlkIHx8IHNlbGVjdGVkWm9uZT8uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pqg77iPIE1pbmltdW0gb3JkZXIgdmFsdWU6IOKCuXtzZWxlY3RlZFpvbmUubWluaW11bV9vcmRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudToxMTMzOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTEzNDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+U3BlY2lhbCBJbnN0cnVjdGlvbnM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPFRleHRhcmVhIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjExMzU6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtjdXN0b21lckluZm8ubm90ZXN9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDdXN0b21lckluZm8oeyAuLi5jdXN0b21lckluZm8sIG5vdGVzOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFueSBhbGxlcmdpZXMgb3Igc3BlY2lhbCByZXF1ZXN0cz9cIlxuICAgICAgICAgICAgICAgIHJvd3M9ezJ9IC8+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHsvKiBQYXltZW50IE1ldGhvZCBTZWxlY3Rpb24gKi99XG4gICAgICAgICAgICB7cmVzdGF1cmFudD8uc2V0dGluZ3M/LmFjY2VwdF9vbmxpbmVfcGF5bWVudCAmJlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudToxMTQ3OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjExNDg6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSBibG9jayBtYi0yXCI+UGF5bWVudCBNZXRob2Q8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTE0OToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTE1MDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGF5bWVudE1ldGhvZChcImNhc2hcIil9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcC0zIHJvdW5kZWQtbGcgYm9yZGVyLTIgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIganVzdGlmeS1jZW50ZXIgdHJhbnNpdGlvbi1hbGwgJHtcbiAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kID09PSBcImNhc2hcIiA/XG4gICAgICAgICAgICAgICAgXCJib3JkZXItdmlvbGV0LTYwMCBiZy12aW9sZXQtNTBcIiA6XG4gICAgICAgICAgICAgICAgXCJib3JkZXItZ3JheS0yMDAgaG92ZXI6Ym9yZGVyLWdyYXktMzAwXCJ9YFxuICAgICAgICAgICAgICAgIH0+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJhbmtub3RlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjExNTk6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjExNjA6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bVwiPkNhc2g8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTE2MjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGF5bWVudE1ldGhvZChcInVwaVwiKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwLTMgcm91bmRlZC1sZyBib3JkZXItMiBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBqdXN0aWZ5LWNlbnRlciB0cmFuc2l0aW9uLWFsbCAke1xuICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2QgPT09IFwidXBpXCIgP1xuICAgICAgICAgICAgICAgIFwiYm9yZGVyLXZpb2xldC02MDAgYmctdmlvbGV0LTUwXCIgOlxuICAgICAgICAgICAgICAgIFwiYm9yZGVyLWdyYXktMjAwIGhvdmVyOmJvcmRlci1ncmF5LTMwMFwifWBcbiAgICAgICAgICAgICAgICB9PlxuXG4gICAgICAgICAgICAgICAgICAgIDxTbWFydHBob25lIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjExNzE6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjExNzI6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bVwiPlVQSTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudToxMTc0OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQYXltZW50TWV0aG9kKFwiY2FyZFwiKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwLTMgcm91bmRlZC1sZyBib3JkZXItMiBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBqdXN0aWZ5LWNlbnRlciB0cmFuc2l0aW9uLWFsbCAke1xuICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2QgPT09IFwiY2FyZFwiID9cbiAgICAgICAgICAgICAgICBcImJvcmRlci12aW9sZXQtNjAwIGJnLXZpb2xldC01MFwiIDpcbiAgICAgICAgICAgICAgICBcImJvcmRlci1ncmF5LTIwMCBob3Zlcjpib3JkZXItZ3JheS0zMDBcIn1gXG4gICAgICAgICAgICAgICAgfT5cblxuICAgICAgICAgICAgICAgICAgICA8Q3JlZGl0Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudToxMTgzOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudToxMTg0OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW1cIj5DYXJkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjExODY6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBheW1lbnRNZXRob2QoXCJvbmxpbmVcIil9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcC0zIHJvdW5kZWQtbGcgYm9yZGVyLTIgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIganVzdGlmeS1jZW50ZXIgdHJhbnNpdGlvbi1hbGwgJHtcbiAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kID09PSBcIm9ubGluZVwiID9cbiAgICAgICAgICAgICAgICBcImJvcmRlci12aW9sZXQtNjAwIGJnLXZpb2xldC01MFwiIDpcbiAgICAgICAgICAgICAgICBcImJvcmRlci1ncmF5LTIwMCBob3Zlcjpib3JkZXItZ3JheS0zMDBcIn1gXG4gICAgICAgICAgICAgICAgfT5cblxuICAgICAgICAgICAgICAgICAgICA8Q3JlZGl0Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudToxMTk1OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudToxMTk2OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW1cIj5PbmxpbmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTIwMjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctdmlvbGV0LTYwMCBob3ZlcjpiZy12aW9sZXQtNzAwXCJcbiAgICAgICAgICAgIGRpc2FibGVkPXtcbiAgICAgICAgICAgIChvcmRlclR5cGUgPT09IFwiZGluZV9pblwiICYmIHRhYmxlTnVtYmVyID8gZmFsc2UgOiAhY3VzdG9tZXJJbmZvLm5hbWUgfHwgIWN1c3RvbWVySW5mby5waG9uZSkgfHxcbiAgICAgICAgICAgIG9yZGVyVHlwZSA9PT0gXCJkZWxpdmVyeVwiICYmICghY3VzdG9tZXJJbmZvLmFkZHJlc3MgfHwgIWN1c3RvbWVySW5mby5sb2NhdGlvbiB8fCBzZWxlY3RlZFpvbmUgJiYgZ2V0Q2FydFRvdGFsKCkgPCBzZWxlY3RlZFpvbmUubWluaW11bV9vcmRlcikgfHxcbiAgICAgICAgICAgIGlzU3VibWl0dGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0T3JkZXJ9PlxuXG4gICAgICAgICAgICAgIHtpc1Byb2Nlc3NpbmdQYXltZW50ID8gJ1Byb2Nlc3NpbmcgUGF5bWVudC4uLicgOiBpc1N1Ym1pdHRpbmcgPyAnUGxhY2luZyBPcmRlci4uLicgOiAnUGxhY2UgT3JkZXInfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICB7b3JkZXJUeXBlID09PSBcImRlbGl2ZXJ5XCIgJiYgc2VsZWN0ZWRab25lICYmIGdldENhcnRUb3RhbCgpIDwgc2VsZWN0ZWRab25lLm1pbmltdW1fb3JkZXIgJiZcbiAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjEyMTQ6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtcmVkLTYwMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIEFkZCDigrl7c2VsZWN0ZWRab25lLm1pbmltdW1fb3JkZXIgLSBnZXRDYXJ0VG90YWwoKX0gbW9yZSB0byBtZWV0IG1pbmltdW0gb3JkZXIgdmFsdWVcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICA8L0RpYWxvZz5cblxuICAgICAgey8qIEl0ZW0gRGV0YWlsIERpYWxvZyAqL31cbiAgICAgIDxEaWFsb2cgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTIyMzo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgb3Blbj17ISFzZWxlY3RlZEl0ZW19IG9uT3BlbkNoYW5nZT17KCkgPT4gc2V0U2VsZWN0ZWRJdGVtKG51bGwpfT5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTIyNDo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWF4LXctbWQgbWF4LWgtWzkwdmhdIG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICAgIHtzZWxlY3RlZEl0ZW0gJiZcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgICB7c2VsZWN0ZWRJdGVtLmltYWdlX3VybCAmJlxuICAgICAgICAgICAgPGltZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudToxMjI4OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgIHNyYz17c2VsZWN0ZWRJdGVtLmltYWdlX3VybH1cbiAgICAgICAgICAgIGFsdD17c2VsZWN0ZWRJdGVtLm5hbWV9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC00OCBvYmplY3QtY292ZXIgcm91bmRlZC1sZyAtbXQtMlwiIC8+XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudToxMjM0OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS0zXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJkZXNjcmlwdGlvblwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtzZWxlY3RlZEl0ZW0/LmlkIHx8IHNlbGVjdGVkSXRlbT8uX2lkfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjEyMzU6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudToxMjM2OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudToxMjM3OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIm5hbWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2VsZWN0ZWRJdGVtPy5pZCB8fCBzZWxlY3RlZEl0ZW0/Ll9pZH0+e3NlbGVjdGVkSXRlbS5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTIzODoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIG10LTFcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImlzX3ZlZ2V0YXJpYW5cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2VsZWN0ZWRJdGVtPy5pZCB8fCBzZWxlY3RlZEl0ZW0/Ll9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkSXRlbS5pc192ZWdldGFyaWFuICYmXG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudToxMjQwOjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImJnLWdyZWVuLTEwMCB0ZXh0LWdyZWVuLTcwMFwiPlZlZ2V0YXJpYW48L0JhZGdlPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkSXRlbS5pc19zcGljeSAmJlxuICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTI0MzoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJiZy1yZWQtMTAwIHRleHQtcmVkLTcwMFwiPlNwaWN5PC9CYWRnZT5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTI0NzoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJwcmljZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtzZWxlY3RlZEl0ZW0/LmlkIHx8IHNlbGVjdGVkSXRlbT8uX2lkfT7igrl7c2VsZWN0ZWRJdGVtLnByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRJdGVtLmRlc2NyaXB0aW9uICYmXG4gICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjEyNTE6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJkZXNjcmlwdGlvblwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtzZWxlY3RlZEl0ZW0/LmlkIHx8IHNlbGVjdGVkSXRlbT8uX2lkfT57c2VsZWN0ZWRJdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAge3NlbGVjdGVkSXRlbS5wcmVwYXJhdGlvbl90aW1lICYmXG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTI1NToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8Q2xvY2sgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTI1NjoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9DdXN0b21lck1lbnU6MTI1NzoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicHJlcGFyYXRpb25fdGltZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtzZWxlY3RlZEl0ZW0/LmlkIHx8IHNlbGVjdGVkSXRlbT8uX2lkfT57c2VsZWN0ZWRJdGVtLnByZXBhcmF0aW9uX3RpbWV9IG1pbnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0N1c3RvbWVyTWVudToxMjYxOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXZpb2xldC02MDAgaG92ZXI6YmctdmlvbGV0LTcwMFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBhZGRUb0NhcnQoc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZEl0ZW0obnVsbCk7XG4gICAgICAgICAgICAgIH19IGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicHJpY2VcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2VsZWN0ZWRJdGVtPy5pZCB8fCBzZWxlY3RlZEl0ZW0/Ll9pZH0+XG5cbiAgICAgICAgICAgICAgICAgIDxQbHVzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ3VzdG9tZXJNZW51OjEyNjg6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCBtci0yXCIgLz5cbiAgICAgICAgICAgICAgICAgIEFkZCB0byBDYXJ0IC0g4oK5e3NlbGVjdGVkSXRlbS5wcmljZX1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgIDwvRGlhbG9nPlxuICAgIDwvZGl2Pik7XG5cbn0iXSwiZmlsZSI6Ii9hcHAvc3JjL3BhZ2VzL0N1c3RvbWVyTWVudS5qc3gifQ==