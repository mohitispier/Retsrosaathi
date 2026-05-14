import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/RiderApp.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/RiderApp.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { base44 } from "/src/api/base44Client.js";
import { Button } from "/src/components/ui/button.jsx";
import { Input } from "/src/components/ui/input.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "/src/components/ui/card.jsx";
import { Badge } from "/src/components/ui/badge.jsx";
import { MapPin, Navigation, Phone, CheckCircle2, Clock, Banknote, QrCode } from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=79425e35";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "/src/components/ui/dialog.jsx";
export default function RiderApp() {
  _s();
  const [riderPhone, setRiderPhone] = useState("");
  const [rider, setRider] = useState(null);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [liveLocation, setLiveLocation] = useState(null);
  const [orderHistory, setOrderHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [notification, setNotification] = useState(null);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [showQRDialog, setShowQRDialog] = useState(false);
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    if (rider?.id) {
      loadCurrentOrder();
      loadOrderHistory();
      startLocationTracking();
      const unsubscribe = base44.entities.Order.subscribe((event) => {
        if (event.data.assigned_rider_id === rider.id) {
          if (event.type === "update") {
            if (event.data.status === "out_for_delivery" && !currentOrder) {
              showNotification("🚚 New Delivery Assigned!", `Order #${event.data.order_number} is ready for delivery`);
              playNotificationSound();
            }
            setCurrentOrder(event.data);
          } else if (event.type === "create" && event.data.status === "out_for_delivery") {
            showNotification("🚚 New Delivery Assigned!", `Order #${event.data.order_number} is ready for delivery`);
            playNotificationSound();
            setCurrentOrder(event.data);
          }
        }
      });
      return () => {
        unsubscribe();
        stopLocationTracking();
      };
    }
  }, [rider]);
  const loadOrderHistory = async () => {
    const history = await base44.entities.Order.filter({
      assigned_rider_id: rider.id,
      status: "delivered"
    }, "-created_date", 50);
    setOrderHistory(history);
  };
  const showNotification = (title, message) => {
    setNotification({ title, message });
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification(title, { body: message, icon: "🚚" });
    }
    setTimeout(() => setNotification(null), 5e3);
  };
  const playNotificationSound = () => {
    const audio = new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTUIGWi77eeeTBELUKfj8LZiHAU4kNfyzHgrBSR3x/DdkD8KFF603+uoVRQKRp/g8r9sIQQrgs/y2Ik1BxlouOznnU0QDFCn5fC1Yx0FN5DY8sx5LQUkeMfw3I8/ChResN/rp1UTCUWY4vK+bCEEK4PP8tmJNQcYaLjs551NEAxPoOjwtWMdBDiQ2PLMeC4EJXfH8NyQQAoWXrDf66hVFApFmeLzv2wiBCuBzvLZijYHGWi57OecTBAMT6Dn8LVjHQQ4j9fxy3kuBCR3x/Dcj0AKFV6w3+unVRMJRpjh8r5tIgUrgs7y2Yo2BxpmueznmksPDU+h5/C1Yx0EN5DX8st4LgQldsfw3JABChResN/qp1UTCUWY4vK+bSIFK4LP8tmKNgcZZ7ns55xODwxPoeXwtmMdBDiP1/PLdywEJHfH8NyQAQoWXrDf6qhVFApFmOLzvmwhBSyCzvHZiTUHGGe67OedThALT6Dl8LZkHgU4j9jxy3cuBSV2x+/cj0AKFl2w3+qoVRQKRZji8r5tIgUrgs7x2Yo2Bxlouezom00RDU+h5fC2ZB0GN5DX8ct3LgQldsbu3I9AChVesN/qp1UTCkaY4PK/bSEEK4LO8dmKNQcZaLrs6JpNEQxPoOXwtmMdBTeQ1vHLdywEJnfG7tyPQAoVXa/e6qdUEgpFl+Hzv2wiBSyCzvLYizcHGWi47OicTRANT5/l8LVjHgU3j9bxy3cuBCZ2xu3dj0AKFVyu3OmmUxEKRZfh8r9tIgQsgs7y2Ik3BxlouOrompNEwxPoOXwtWQeBTiP1vHLdywEJnbF7t2PQAoVXa7d6aZTE");
    audio.volume = 1;
    audio.play().catch(() => {
    });
  };
  const loadCurrentOrder = async () => {
    const orders = await base44.entities.Order.filter({
      assigned_rider_id: rider.id,
      status: "out_for_delivery"
    });
    if (orders.length > 0) {
      setCurrentOrder(orders[0]);
      const restaurants = await base44.entities.Restaurant.filter({
        restaurant_id: orders[0].restaurant_id
      });
      if (restaurants.length > 0) {
        setRestaurant(restaurants[0]);
      }
    }
  };
  const startLocationTracking = () => {
    if (!navigator.geolocation) return;
    const watchId = navigator.geolocation.watchPosition(
      async (position) => {
        const location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        setLiveLocation(location);
        await base44.entities.DeliveryRider.update(rider.id, {
          current_location: location
        });
      },
      (error) => console.log("Location error", error),
      { enableHighAccuracy: true, maximumAge: 1e4, timeout: 5e3 }
    );
    window.riderLocationWatchId = watchId;
  };
  const stopLocationTracking = () => {
    if (window.riderLocationWatchId) {
      navigator.geolocation.clearWatch(window.riderLocationWatchId);
    }
  };
  const handleLogin = async () => {
    if (!riderPhone) return;
    setIsLoading(true);
    const riders = await base44.entities.DeliveryRider.filter({
      phone: riderPhone,
      is_active: true
    });
    if (riders.length > 0) {
      setRider(riders[0]);
      await base44.entities.DeliveryRider.update(riders[0].id, {
        is_available: true
      });
      if ("Notification" in window && Notification.permission === "default") {
        Notification.requestPermission();
      }
    } else {
      alert("Rider not found. Please contact your restaurant.");
    }
    setIsLoading(false);
  };
  const handleMarkDelivered = async () => {
    if (!currentOrder) return;
    setShowPaymentDialog(true);
  };
  const handlePaymentMethod = async (method) => {
    if (method === "upi") {
      setShowPaymentDialog(false);
      setShowQRDialog(true);
    } else {
      await completeDelivery("cash", false);
    }
  };
  const handleUPIPaid = async () => {
    await completeDelivery("upi", true);
  };
  const completeDelivery = async (paymentMethod, isPaid) => {
    await base44.entities.Order.update(currentOrder.id, {
      status: "delivered",
      payment_status: isPaid ? "paid" : currentOrder.payment_status,
      payment_method: paymentMethod
    });
    let cashToAdd = 0;
    if (paymentMethod === "cash" && currentOrder.payment_status !== "paid") {
      cashToAdd = currentOrder.total_amount;
    }
    await base44.entities.DeliveryRider.update(rider.id, {
      is_available: true,
      current_order_id: null,
      total_deliveries: (rider.total_deliveries || 0) + 1,
      cash_collected: (rider.cash_collected || 0) + cashToAdd
    });
    if (currentOrder.customer_phone) {
      await base44.entities.Notification.create({
        restaurant_id: currentOrder.restaurant_id,
        type: "system",
        title: "✅ Order Delivered!",
        message: `Your order #${currentOrder.order_number} has been delivered successfully. Location: ${liveLocation ? `${liveLocation.latitude.toFixed(4)}, ${liveLocation.longitude.toFixed(4)}` : "Delivered at your address"}`,
        related_order_id: currentOrder.id
      });
    }
    setShowPaymentDialog(false);
    setShowQRDialog(false);
    setCurrentOrder(null);
    setRider({ ...rider, cash_collected: (rider.cash_collected || 0) + cashToAdd });
  };
  const openInMaps = (lat, lng) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, "_blank");
  };
  if (!rider) {
    return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:219:6", "data-dynamic-content": "true", className: "min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/RiderApp:220:8", "data-dynamic-content": "true", className: "w-full max-w-sm", children: [
      /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "pages/RiderApp:221:10", "data-dynamic-content": "false", className: "text-center", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:222:12", "data-dynamic-content": "false", className: "w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/RiderApp:223:14", "data-dynamic-content": "false", className: "text-3xl", children: "🏍️" }, void 0, false, {
          fileName: "/app/src/pages/RiderApp.jsx",
          lineNumber: 242,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/RiderApp.jsx",
          lineNumber: 241,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "pages/RiderApp:225:12", "data-dynamic-content": "false", className: "text-2xl", children: "Rider Login" }, void 0, false, {
          fileName: "/app/src/pages/RiderApp.jsx",
          lineNumber: 244,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RiderApp:226:12", "data-dynamic-content": "false", className: "text-gray-500 text-sm mt-2", children: "Enter your registered phone number" }, void 0, false, {
          fileName: "/app/src/pages/RiderApp.jsx",
          lineNumber: 245,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/RiderApp.jsx",
        lineNumber: 240,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/RiderApp:228:10", "data-dynamic-content": "true", className: "space-y-4", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:229:12", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(
          Input,
          {
            "data-source-location": "pages/RiderApp:230:14",
            "data-dynamic-content": "true",
            placeholder: "Phone Number",
            value: riderPhone,
            onChange: (e) => setRiderPhone(e.target.value),
            className: "text-center text-lg"
          },
          void 0,
          false,
          {
            fileName: "/app/src/pages/RiderApp.jsx",
            lineNumber: 249,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "/app/src/pages/RiderApp.jsx",
          lineNumber: 248,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          Button,
          {
            "data-source-location": "pages/RiderApp:237:12",
            "data-dynamic-content": "true",
            onClick: handleLogin,
            disabled: isLoading || !riderPhone,
            className: "w-full bg-indigo-600 hover:bg-indigo-700 py-6 text-lg",
            children: isLoading ? "Loading..." : "Login"
          },
          void 0,
          false,
          {
            fileName: "/app/src/pages/RiderApp.jsx",
            lineNumber: 256,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/src/pages/RiderApp.jsx",
        lineNumber: 247,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/RiderApp.jsx",
      lineNumber: 239,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/RiderApp.jsx",
      lineNumber: 238,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:252:4", "data-dynamic-content": "true", className: "min-h-screen bg-gray-50 pb-20", children: [
    notification && /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-source-location": "pages/RiderApp:255:8",
        "data-dynamic-content": "true",
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 },
        className: "fixed top-4 left-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4 border-l-4 border-indigo-600",
        children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:261:10", "data-dynamic-content": "true", className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/RiderApp:262:12", "data-dynamic-content": "false", className: "text-2xl", children: "🔔" }, void 0, false, {
            fileName: "/app/src/pages/RiderApp.jsx",
            lineNumber: 281,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:263:12", "data-dynamic-content": "true", className: "flex-1", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RiderApp:264:14", "data-dynamic-content": "true", className: "font-bold text-gray-900", "data-collection-item-field": "title", "data-collection-item-id": notification?.id || notification?._id, children: notification.title }, void 0, false, {
              fileName: "/app/src/pages/RiderApp.jsx",
              lineNumber: 283,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RiderApp:265:14", "data-dynamic-content": "true", className: "text-sm text-gray-600", "data-collection-item-field": "message", "data-collection-item-id": notification?.id || notification?._id, children: notification.message }, void 0, false, {
              fileName: "/app/src/pages/RiderApp.jsx",
              lineNumber: 284,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/RiderApp.jsx",
            lineNumber: 282,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("button", { "data-source-location": "pages/RiderApp:267:12", "data-dynamic-content": "true", onClick: () => setNotification(null), className: "text-gray-400", children: "✕" }, void 0, false, {
            fileName: "/app/src/pages/RiderApp.jsx",
            lineNumber: 286,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/RiderApp.jsx",
          lineNumber: 280,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/app/src/pages/RiderApp.jsx",
        lineNumber: 274,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:273:6", "data-dynamic-content": "true", className: "bg-white shadow-sm p-3 sticky top-0 z-10", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:274:8", "data-dynamic-content": "true", className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:275:10", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RiderApp:276:12", "data-dynamic-content": "false", className: "text-xs text-gray-500", children: "Welcome," }, void 0, false, {
            fileName: "/app/src/pages/RiderApp.jsx",
            lineNumber: 295,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RiderApp:277:12", "data-dynamic-content": "true", className: "font-bold text-base", "data-collection-item-field": "name", "data-collection-item-id": rider?.id || rider?._id, children: rider.name }, void 0, false, {
            fileName: "/app/src/pages/RiderApp.jsx",
            lineNumber: 296,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/RiderApp.jsx",
          lineNumber: 294,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:279:10", "data-dynamic-content": "true", className: "text-right", children: [
          /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/RiderApp:280:12", "data-dynamic-content": "true", className: "bg-green-100 text-green-700 text-xs", children: currentOrder ? "On Delivery" : "Available" }, void 0, false, {
            fileName: "/app/src/pages/RiderApp.jsx",
            lineNumber: 299,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RiderApp:283:12", "data-dynamic-content": "true", className: "text-xs text-gray-500 mt-1", children: [
            rider.total_deliveries || 0,
            " deliveries • ⭐ ",
            rider.rating || 5
          ] }, void 0, true, {
            fileName: "/app/src/pages/RiderApp.jsx",
            lineNumber: 302,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(
            Button,
            {
              "data-source-location": "pages/RiderApp:286:12",
              "data-dynamic-content": "true",
              variant: "ghost",
              size: "sm",
              onClick: () => setShowHistory(!showHistory),
              className: "mt-1 text-xs h-6 px-2",
              children: showHistory ? "Active" : "History"
            },
            void 0,
            false,
            {
              fileName: "/app/src/pages/RiderApp.jsx",
              lineNumber: 305,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/src/pages/RiderApp.jsx",
          lineNumber: 298,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/RiderApp.jsx",
        lineNumber: 293,
        columnNumber: 9
      }, this),
      (rider.cash_collected || 0) > 0 && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:297:10", "data-dynamic-content": "true", className: "mt-2 bg-orange-50 border border-orange-200 rounded-lg p-2", children: /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RiderApp:298:12", "data-dynamic-content": "true", className: "text-xs text-orange-700 font-medium", "data-collection-item-field": "cash_collected", "data-collection-item-id": rider?.id || rider?._id, children: [
        "💰 Cash to Submit: ₹",
        rider.cash_collected
      ] }, void 0, true, {
        fileName: "/app/src/pages/RiderApp.jsx",
        lineNumber: 317,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/RiderApp.jsx",
        lineNumber: 316,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/RiderApp.jsx",
      lineNumber: 292,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:303:6", "data-dynamic-content": "true", className: "p-3 space-y-3 max-w-2xl mx-auto", children: showHistory ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:306:10", "data-dynamic-content": "true", className: "space-y-4", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:307:12", "data-dynamic-content": "true", className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "pages/RiderApp:308:14", "data-dynamic-content": "false", className: "text-xl font-bold", children: "Delivery History" }, void 0, false, {
          fileName: "/app/src/pages/RiderApp.jsx",
          lineNumber: 327,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/RiderApp:309:14", "data-dynamic-content": "true", variant: "outline", children: [
          orderHistory.length,
          " completed"
        ] }, void 0, true, {
          fileName: "/app/src/pages/RiderApp.jsx",
          lineNumber: 328,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/RiderApp.jsx",
        lineNumber: 326,
        columnNumber: 13
      }, this),
      orderHistory.length === 0 ? /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/RiderApp:313:14", "data-dynamic-content": "false", className: "text-center py-12", children: /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RiderApp:314:16", "data-dynamic-content": "false", className: "text-gray-500", children: "No completed deliveries yet" }, void 0, false, {
        fileName: "/app/src/pages/RiderApp.jsx",
        lineNumber: 333,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/RiderApp.jsx",
        lineNumber: 332,
        columnNumber: 11
      }, this) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:317:14", "data-dynamic-content": "true", className: "space-y-3", "data-collection-id": "Order", children: orderHistory.map(
        (order) => /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/RiderApp:319:18", "data-dynamic-content": "true", "data-collection-item-id": order?.id, children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/RiderApp:320:20", "data-dynamic-content": "true", className: "p-4", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:321:22", "data-dynamic-content": "true", className: "flex items-start justify-between mb-3", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:322:24", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RiderApp:323:26", "data-dynamic-content": "true", className: "font-bold", "data-collection-item-field": "order_number", "data-collection-item-id": order?.id, children: [
                "Order #",
                order.order_number
              ] }, void 0, true, {
                fileName: "/app/src/pages/RiderApp.jsx",
                lineNumber: 342,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RiderApp:324:26", "data-dynamic-content": "true", className: "text-sm text-gray-500", "data-collection-item-field": "customer_name", "data-collection-item-id": order?.id, children: order.customer_name }, void 0, false, {
                fileName: "/app/src/pages/RiderApp.jsx",
                lineNumber: 343,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/RiderApp.jsx",
              lineNumber: 341,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/RiderApp:326:24", "data-dynamic-content": "false", className: "bg-green-100 text-green-700", children: "✓ Delivered" }, void 0, false, {
              fileName: "/app/src/pages/RiderApp.jsx",
              lineNumber: 345,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/RiderApp.jsx",
            lineNumber: 340,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:331:22", "data-dynamic-content": "true", className: "space-y-2 text-sm", "data-collection-item-field": "customer_feedback", "data-collection-item-id": order?.id, children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:332:24", "data-dynamic-content": "true", className: "flex justify-between", children: [
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/RiderApp:333:26", "data-dynamic-content": "false", className: "text-gray-500", children: "Date:" }, void 0, false, {
                fileName: "/app/src/pages/RiderApp.jsx",
                lineNumber: 352,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/RiderApp:334:26", "data-dynamic-content": "true", children: new Date(order.updated_date).toLocaleDateString() }, void 0, false, {
                fileName: "/app/src/pages/RiderApp.jsx",
                lineNumber: 353,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/RiderApp.jsx",
              lineNumber: 351,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:336:24", "data-dynamic-content": "true", className: "flex justify-between", children: [
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/RiderApp:337:26", "data-dynamic-content": "false", className: "text-gray-500", children: "Time:" }, void 0, false, {
                fileName: "/app/src/pages/RiderApp.jsx",
                lineNumber: 356,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/RiderApp:338:26", "data-dynamic-content": "true", children: new Date(order.updated_date).toLocaleTimeString() }, void 0, false, {
                fileName: "/app/src/pages/RiderApp.jsx",
                lineNumber: 357,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/RiderApp.jsx",
              lineNumber: 355,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:340:24", "data-dynamic-content": "true", className: "flex justify-between", children: [
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/RiderApp:341:26", "data-dynamic-content": "false", className: "text-gray-500", children: "Address:" }, void 0, false, {
                fileName: "/app/src/pages/RiderApp.jsx",
                lineNumber: 360,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/RiderApp:342:26", "data-dynamic-content": "true", className: "text-right max-w-xs truncate", "data-collection-item-field": "delivery_address", "data-collection-item-id": order?.id, children: order.delivery_address }, void 0, false, {
                fileName: "/app/src/pages/RiderApp.jsx",
                lineNumber: 361,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/RiderApp.jsx",
              lineNumber: 359,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:344:24", "data-dynamic-content": "true", className: "flex justify-between font-medium", children: [
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/RiderApp:345:26", "data-dynamic-content": "false", children: "Amount:" }, void 0, false, {
                fileName: "/app/src/pages/RiderApp.jsx",
                lineNumber: 364,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/RiderApp:346:26", "data-dynamic-content": "true", "data-collection-item-field": "total_amount", "data-collection-item-id": order?.id, children: [
                "₹",
                order.total_amount
              ] }, void 0, true, {
                fileName: "/app/src/pages/RiderApp.jsx",
                lineNumber: 365,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/RiderApp.jsx",
              lineNumber: 363,
              columnNumber: 25
            }, this),
            order.customer_feedback && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:349:26", "data-dynamic-content": "true", className: "bg-yellow-50 p-2 rounded mt-2", "data-collection-item-field": "customer_rating", "data-collection-item-id": order?.id, children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RiderApp:350:28", "data-dynamic-content": "false", className: "text-xs text-gray-500", children: "Customer Feedback:" }, void 0, false, {
                fileName: "/app/src/pages/RiderApp.jsx",
                lineNumber: 369,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RiderApp:351:28", "data-dynamic-content": "true", className: "text-sm", "data-collection-item-field": "customer_feedback", "data-collection-item-id": order?.id, children: order.customer_feedback }, void 0, false, {
                fileName: "/app/src/pages/RiderApp.jsx",
                lineNumber: 370,
                columnNumber: 29
              }, this),
              order.customer_rating && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RiderApp:353:30", "data-dynamic-content": "true", className: "text-xs mt-1", "data-collection-item-field": "customer_rating", "data-collection-item-id": order?.id, children: [
                "⭐ ",
                order.customer_rating,
                "/5"
              ] }, void 0, true, {
                fileName: "/app/src/pages/RiderApp.jsx",
                lineNumber: 372,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/RiderApp.jsx",
              lineNumber: 368,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/RiderApp.jsx",
            lineNumber: 350,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/RiderApp.jsx",
          lineNumber: 339,
          columnNumber: 21
        }, this) }, order.id, false, {
          fileName: "/app/src/pages/RiderApp.jsx",
          lineNumber: 338,
          columnNumber: 13
        }, this)
      ) }, void 0, false, {
        fileName: "/app/src/pages/RiderApp.jsx",
        lineNumber: 336,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/RiderApp.jsx",
      lineNumber: 325,
      columnNumber: 9
    }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
      currentOrder ? /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-source-location": "pages/RiderApp:368:10",
          "data-dynamic-content": "true",
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          children: /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/RiderApp:372:12", "data-dynamic-content": "true", className: "border-2 border-indigo-200", children: [
            /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "pages/RiderApp:373:14", "data-dynamic-content": "true", className: "bg-indigo-50", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:374:16", "data-dynamic-content": "true", className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "pages/RiderApp:375:18", "data-dynamic-content": "false", className: "text-lg", children: "Active Delivery" }, void 0, false, {
                fileName: "/app/src/pages/RiderApp.jsx",
                lineNumber: 394,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/RiderApp:376:18", "data-dynamic-content": "true", className: "bg-indigo-600 text-white", "data-collection-item-field": "order_number", "data-collection-item-id": currentOrder?.id || currentOrder?._id, children: [
                "Order #",
                currentOrder.order_number
              ] }, void 0, true, {
                fileName: "/app/src/pages/RiderApp.jsx",
                lineNumber: 395,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/RiderApp.jsx",
              lineNumber: 393,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/app/src/pages/RiderApp.jsx",
              lineNumber: 392,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/RiderApp:381:14", "data-dynamic-content": "true", className: "space-y-4 pt-4", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:383:16", "data-dynamic-content": "true", className: "bg-gray-50 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RiderApp:384:18", "data-dynamic-content": "false", className: "text-sm text-gray-500 mb-2", children: "Customer Details" }, void 0, false, {
                  fileName: "/app/src/pages/RiderApp.jsx",
                  lineNumber: 403,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RiderApp:385:18", "data-dynamic-content": "true", className: "font-medium text-lg", "data-collection-item-field": "customer_name", "data-collection-item-id": currentOrder?.id || currentOrder?._id, children: currentOrder.customer_name }, void 0, false, {
                  fileName: "/app/src/pages/RiderApp.jsx",
                  lineNumber: 404,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("a", { "data-source-location": "pages/RiderApp:386:18", "data-dynamic-content": "true", href: `tel:${currentOrder.customer_phone}`, className: "flex items-center gap-2 text-indigo-600 mt-2", "data-collection-item-field": "customer_phone", "data-collection-item-id": currentOrder?.id || currentOrder?._id, children: [
                  /* @__PURE__ */ jsxDEV(Phone, { "data-source-location": "pages/RiderApp:387:20", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                    fileName: "/app/src/pages/RiderApp.jsx",
                    lineNumber: 406,
                    columnNumber: 21
                  }, this),
                  currentOrder.customer_phone
                ] }, void 0, true, {
                  fileName: "/app/src/pages/RiderApp.jsx",
                  lineNumber: 405,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/RiderApp.jsx",
                lineNumber: 402,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:393:16", "data-dynamic-content": "true", className: "bg-blue-50 rounded-lg p-4", "data-collection-item-field": "delivery_location", "data-collection-item-id": currentOrder?.id || currentOrder?._id, children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:394:18", "data-dynamic-content": "true", className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:395:20", "data-dynamic-content": "true", className: "flex-1", children: [
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RiderApp:396:22", "data-dynamic-content": "false", className: "text-sm text-gray-500 mb-1", children: "Delivery Address" }, void 0, false, {
                      fileName: "/app/src/pages/RiderApp.jsx",
                      lineNumber: 415,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RiderApp:397:22", "data-dynamic-content": "true", className: "font-medium", "data-collection-item-field": "delivery_address", "data-collection-item-id": currentOrder?.id || currentOrder?._id, children: currentOrder.delivery_address }, void 0, false, {
                      fileName: "/app/src/pages/RiderApp.jsx",
                      lineNumber: 416,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/RiderApp.jsx",
                    lineNumber: 414,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV(MapPin, { "data-source-location": "pages/RiderApp:399:20", "data-dynamic-content": "false", className: "w-5 h-5 text-blue-600 mt-1" }, void 0, false, {
                    fileName: "/app/src/pages/RiderApp.jsx",
                    lineNumber: 418,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/RiderApp.jsx",
                  lineNumber: 413,
                  columnNumber: 19
                }, this),
                currentOrder.delivery_location && /* @__PURE__ */ jsxDEV(
                  Button,
                  {
                    "data-source-location": "pages/RiderApp:402:20",
                    "data-dynamic-content": "true",
                    onClick: () => openInMaps(
                      currentOrder.delivery_location.latitude,
                      currentOrder.delivery_location.longitude
                    ),
                    className: "w-full mt-3 bg-blue-600 hover:bg-blue-700",
                    children: [
                      /* @__PURE__ */ jsxDEV(Navigation, { "data-source-location": "pages/RiderApp:409:22", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
                        fileName: "/app/src/pages/RiderApp.jsx",
                        lineNumber: 428,
                        columnNumber: 23
                      }, this),
                      "Open in Maps"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/src/pages/RiderApp.jsx",
                    lineNumber: 421,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/src/pages/RiderApp.jsx",
                lineNumber: 412,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:416:16", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RiderApp:417:18", "data-dynamic-content": "false", className: "text-sm text-gray-500 mb-2", children: "Order Items" }, void 0, false, {
                  fileName: "/app/src/pages/RiderApp.jsx",
                  lineNumber: 436,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:418:18", "data-dynamic-content": "true", className: "space-y-2", children: [
                  currentOrder.items?.map(
                    (item, i) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:420:22", "data-dynamic-content": "true", className: "flex justify-between text-sm", "data-collection-item-id": item?.["data-collection-item-id"], children: [
                      /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/RiderApp:421:24", "data-dynamic-content": "true", "data-collection-item-field": "quantity", "data-collection-item-id": item?.id || item?._id, children: [
                        item.quantity,
                        "x ",
                        item.name
                      ] }, void 0, true, {
                        fileName: "/app/src/pages/RiderApp.jsx",
                        lineNumber: 440,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/RiderApp:422:24", "data-dynamic-content": "true", className: "font-medium", "data-collection-item-field": "total_price", "data-collection-item-id": item?.id || item?._id, children: [
                        "₹",
                        item.total_price
                      ] }, void 0, true, {
                        fileName: "/app/src/pages/RiderApp.jsx",
                        lineNumber: 441,
                        columnNumber: 25
                      }, this)
                    ] }, i, true, {
                      fileName: "/app/src/pages/RiderApp.jsx",
                      lineNumber: 439,
                      columnNumber: 21
                    }, this)
                  ),
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:425:20", "data-dynamic-content": "true", className: "flex justify-between font-bold text-base border-t pt-2", children: [
                    /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/RiderApp:426:22", "data-dynamic-content": "false", children: "Total" }, void 0, false, {
                      fileName: "/app/src/pages/RiderApp.jsx",
                      lineNumber: 445,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/RiderApp:427:22", "data-dynamic-content": "true", "data-collection-item-field": "total_amount", "data-collection-item-id": currentOrder?.id || currentOrder?._id, children: [
                      "₹",
                      currentOrder.total_amount
                    ] }, void 0, true, {
                      fileName: "/app/src/pages/RiderApp.jsx",
                      lineNumber: 446,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/RiderApp.jsx",
                    lineNumber: 444,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/RiderApp.jsx",
                  lineNumber: 437,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/RiderApp.jsx",
                lineNumber: 435,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:433:16", "data-dynamic-content": "true", className: "bg-yellow-50 border border-yellow-200 rounded-lg p-3", children: /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RiderApp:434:18", "data-dynamic-content": "true", className: "text-sm font-medium", children: [
                "💰 Payment: ",
                currentOrder.payment_status === "paid" ? "✅ Already Paid" : `Collect ₹${currentOrder.total_amount} (${currentOrder.payment_method})`
              ] }, void 0, true, {
                fileName: "/app/src/pages/RiderApp.jsx",
                lineNumber: 453,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "/app/src/pages/RiderApp.jsx",
                lineNumber: 452,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(
                Button,
                {
                  "data-source-location": "pages/RiderApp:440:16",
                  "data-dynamic-content": "true",
                  onClick: handleMarkDelivered,
                  className: "w-full bg-green-600 hover:bg-green-700 py-6 text-base sm:text-lg",
                  children: [
                    /* @__PURE__ */ jsxDEV(CheckCircle2, { "data-source-location": "pages/RiderApp:444:18", "data-dynamic-content": "false", className: "w-5 h-5 mr-2" }, void 0, false, {
                      fileName: "/app/src/pages/RiderApp.jsx",
                      lineNumber: 463,
                      columnNumber: 19
                    }, this),
                    "Mark as Delivered"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/src/pages/RiderApp.jsx",
                  lineNumber: 459,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/pages/RiderApp.jsx",
              lineNumber: 400,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/RiderApp.jsx",
            lineNumber: 391,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/app/src/pages/RiderApp.jsx",
          lineNumber: 387,
          columnNumber: 11
        },
        this
      ) : /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/RiderApp:451:10", "data-dynamic-content": "false", className: "text-center py-12", children: [
        /* @__PURE__ */ jsxDEV(Clock, { "data-source-location": "pages/RiderApp:452:12", "data-dynamic-content": "false", className: "w-16 h-16 text-gray-300 mx-auto mb-4" }, void 0, false, {
          fileName: "/app/src/pages/RiderApp.jsx",
          lineNumber: 471,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RiderApp:453:12", "data-dynamic-content": "false", className: "text-xl font-medium text-gray-900 mb-2", children: "No Active Deliveries" }, void 0, false, {
          fileName: "/app/src/pages/RiderApp.jsx",
          lineNumber: 472,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RiderApp:454:12", "data-dynamic-content": "false", className: "text-gray-500", children: "You'll be notified when a new order is assigned" }, void 0, false, {
          fileName: "/app/src/pages/RiderApp.jsx",
          lineNumber: 473,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:455:12", "data-dynamic-content": "false", className: "mt-6 p-4 bg-green-50 rounded-lg inline-block", children: /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RiderApp:456:14", "data-dynamic-content": "false", className: "text-green-700 font-medium", children: "✓ Available for deliveries" }, void 0, false, {
          fileName: "/app/src/pages/RiderApp.jsx",
          lineNumber: 475,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/RiderApp.jsx",
          lineNumber: 474,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/RiderApp.jsx",
        lineNumber: 470,
        columnNumber: 11
      }, this),
      liveLocation && /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/RiderApp:463:14", "data-dynamic-content": "false", className: "bg-gradient-to-r from-purple-50 to-indigo-50", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/RiderApp:464:16", "data-dynamic-content": "false", className: "p-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:465:18", "data-dynamic-content": "false", className: "w-3 h-3 bg-green-500 rounded-full animate-pulse" }, void 0, false, {
          fileName: "/app/src/pages/RiderApp.jsx",
          lineNumber: 484,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:466:18", "data-dynamic-content": "false", className: "flex-1", children: [
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RiderApp:467:20", "data-dynamic-content": "false", className: "text-sm font-medium", children: "Location Tracking Active" }, void 0, false, {
            fileName: "/app/src/pages/RiderApp.jsx",
            lineNumber: 486,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RiderApp:468:20", "data-dynamic-content": "false", className: "text-xs text-gray-500", children: "Your location is being shared" }, void 0, false, {
            fileName: "/app/src/pages/RiderApp.jsx",
            lineNumber: 487,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/RiderApp.jsx",
          lineNumber: 485,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/RiderApp.jsx",
        lineNumber: 483,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/RiderApp.jsx",
        lineNumber: 482,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/RiderApp.jsx",
      lineNumber: 384,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/RiderApp.jsx",
      lineNumber: 322,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Dialog, { "data-source-location": "pages/RiderApp:478:6", "data-dynamic-content": "true", open: showPaymentDialog, onOpenChange: setShowPaymentDialog, children: /* @__PURE__ */ jsxDEV(DialogContent, { "data-source-location": "pages/RiderApp:479:8", "data-dynamic-content": "true", className: "max-w-sm", children: [
      /* @__PURE__ */ jsxDEV(DialogHeader, { "data-source-location": "pages/RiderApp:480:10", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(DialogTitle, { "data-source-location": "pages/RiderApp:481:12", "data-dynamic-content": "false", children: "Payment Method" }, void 0, false, {
        fileName: "/app/src/pages/RiderApp.jsx",
        lineNumber: 500,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/RiderApp.jsx",
        lineNumber: 499,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:483:10", "data-dynamic-content": "true", className: "space-y-3", children: [
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RiderApp:484:12", "data-dynamic-content": "false", className: "text-sm text-gray-600", children: "How did customer pay?" }, void 0, false, {
          fileName: "/app/src/pages/RiderApp.jsx",
          lineNumber: 503,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:485:12", "data-dynamic-content": "true", className: "text-2xl font-bold text-center py-4 bg-gray-50 rounded-lg", "data-collection-item-field": "total_amount", "data-collection-item-id": currentOrder?.id || currentOrder?._id, children: [
          "₹",
          currentOrder?.total_amount
        ] }, void 0, true, {
          fileName: "/app/src/pages/RiderApp.jsx",
          lineNumber: 504,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:488:12", "data-dynamic-content": "true", className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxDEV(
            Button,
            {
              "data-source-location": "pages/RiderApp:489:14",
              "data-dynamic-content": "true",
              onClick: () => handlePaymentMethod("cash"),
              className: "h-20 flex flex-col bg-orange-600 hover:bg-orange-700",
              children: [
                /* @__PURE__ */ jsxDEV(Banknote, { "data-source-location": "pages/RiderApp:493:16", "data-dynamic-content": "false", className: "w-8 h-8 mb-1" }, void 0, false, {
                  fileName: "/app/src/pages/RiderApp.jsx",
                  lineNumber: 512,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/RiderApp:494:16", "data-dynamic-content": "false", children: "Cash" }, void 0, false, {
                  fileName: "/app/src/pages/RiderApp.jsx",
                  lineNumber: 513,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/src/pages/RiderApp.jsx",
              lineNumber: 508,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Button,
            {
              "data-source-location": "pages/RiderApp:496:14",
              "data-dynamic-content": "true",
              onClick: () => handlePaymentMethod("upi"),
              className: "h-20 flex flex-col bg-blue-600 hover:bg-blue-700",
              children: [
                /* @__PURE__ */ jsxDEV(QrCode, { "data-source-location": "pages/RiderApp:500:16", "data-dynamic-content": "false", className: "w-8 h-8 mb-1" }, void 0, false, {
                  fileName: "/app/src/pages/RiderApp.jsx",
                  lineNumber: 519,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/RiderApp:501:16", "data-dynamic-content": "false", children: "UPI/Online" }, void 0, false, {
                  fileName: "/app/src/pages/RiderApp.jsx",
                  lineNumber: 520,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/src/pages/RiderApp.jsx",
              lineNumber: 515,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/src/pages/RiderApp.jsx",
          lineNumber: 507,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/RiderApp.jsx",
        lineNumber: 502,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/RiderApp.jsx",
      lineNumber: 498,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/RiderApp.jsx",
      lineNumber: 497,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Dialog, { "data-source-location": "pages/RiderApp:509:6", "data-dynamic-content": "true", open: showQRDialog, onOpenChange: setShowQRDialog, children: /* @__PURE__ */ jsxDEV(DialogContent, { "data-source-location": "pages/RiderApp:510:8", "data-dynamic-content": "true", className: "max-w-sm", children: [
      /* @__PURE__ */ jsxDEV(DialogHeader, { "data-source-location": "pages/RiderApp:511:10", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(DialogTitle, { "data-source-location": "pages/RiderApp:512:12", "data-dynamic-content": "false", children: "Scan to Pay" }, void 0, false, {
        fileName: "/app/src/pages/RiderApp.jsx",
        lineNumber: 531,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/RiderApp.jsx",
        lineNumber: 530,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:514:10", "data-dynamic-content": "true", className: "space-y-4", children: [
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RiderApp:515:12", "data-dynamic-content": "false", className: "text-sm text-center text-gray-600", children: "Customer should scan this QR code" }, void 0, false, {
          fileName: "/app/src/pages/RiderApp.jsx",
          lineNumber: 534,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:518:12", "data-dynamic-content": "true", className: "bg-white p-4 rounded-lg border-2 border-gray-200", children: restaurant?.razorpay_key_id ? /* @__PURE__ */ jsxDEV(
          "img",
          {
            "data-source-location": "pages/RiderApp:520:16",
            "data-dynamic-content": "true",
            src: `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=upi://pay?pa=${restaurant.razorpay_key_id}@paytm&pn=${restaurant.name}&am=${currentOrder?.total_amount}&cu=INR`,
            alt: "Payment QR",
            className: "w-full"
          },
          void 0,
          false,
          {
            fileName: "/app/src/pages/RiderApp.jsx",
            lineNumber: 539,
            columnNumber: 15
          },
          this
        ) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:526:16", "data-dynamic-content": "false", className: "aspect-square bg-gray-100 flex items-center justify-center text-gray-400", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:527:18", "data-dynamic-content": "false", className: "text-center", children: [
          /* @__PURE__ */ jsxDEV(QrCode, { "data-source-location": "pages/RiderApp:528:20", "data-dynamic-content": "false", className: "w-12 h-12 mx-auto mb-2" }, void 0, false, {
            fileName: "/app/src/pages/RiderApp.jsx",
            lineNumber: 547,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RiderApp:529:20", "data-dynamic-content": "false", className: "text-xs", children: "QR not configured" }, void 0, false, {
            fileName: "/app/src/pages/RiderApp.jsx",
            lineNumber: 548,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/RiderApp.jsx",
          lineNumber: 546,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/RiderApp.jsx",
          lineNumber: 545,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/RiderApp.jsx",
          lineNumber: 537,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RiderApp:534:12", "data-dynamic-content": "true", className: "text-center", children: [
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RiderApp:535:14", "data-dynamic-content": "true", className: "text-2xl font-bold mb-2", "data-collection-item-field": "total_amount", "data-collection-item-id": currentOrder?.id || currentOrder?._id, children: [
            "₹",
            currentOrder?.total_amount
          ] }, void 0, true, {
            fileName: "/app/src/pages/RiderApp.jsx",
            lineNumber: 554,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RiderApp:536:14", "data-dynamic-content": "true", className: "text-xs text-gray-500", "data-collection-item-field": "name", "data-collection-item-id": restaurant?.id || restaurant?._id, children: restaurant?.name }, void 0, false, {
            fileName: "/app/src/pages/RiderApp.jsx",
            lineNumber: 555,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/RiderApp.jsx",
          lineNumber: 553,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          Button,
          {
            "data-source-location": "pages/RiderApp:538:12",
            "data-dynamic-content": "true",
            onClick: handleUPIPaid,
            className: "w-full bg-green-600 hover:bg-green-700",
            children: [
              /* @__PURE__ */ jsxDEV(CheckCircle2, { "data-source-location": "pages/RiderApp:542:14", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
                fileName: "/app/src/pages/RiderApp.jsx",
                lineNumber: 561,
                columnNumber: 15
              }, this),
              "Payment Received"
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/src/pages/RiderApp.jsx",
            lineNumber: 557,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/src/pages/RiderApp.jsx",
        lineNumber: 533,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/RiderApp.jsx",
      lineNumber: 529,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/RiderApp.jsx",
      lineNumber: 528,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/RiderApp.jsx",
    lineNumber: 271,
    columnNumber: 5
  }, this);
}
_s(RiderApp, "sENvgRcqcxiIu/0GCE31PRdUZZM=");
_c = RiderApp;
var _c;
$RefreshReg$(_c, "RiderApp");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/RiderApp.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/RiderApp.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QkFBeUI1RixjQUFja0IsTUFBTWxCLGNBQWM4RyxLQUFLO0FBQUE7QUFBQSxZQUFFOUcsY0FBYzRGO0FBQUFBLGVBQTFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQXVQO0FBQUEsVUFDdlAsdUJBQUMsT0FBRSx3QkFBcUIseUJBQXdCLHdCQUFxQixRQUFPLFdBQVUseUJBQXdCLDhCQUEyQixRQUFPLDJCQUF5QjVFLFlBQVlFLE1BQU1GLFlBQVk4RixLQUFNOUYsc0JBQVkrRixRQUF6TjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUE4TjtBQUFBLGFBRmhPO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFHQTtBQUFBLFFBQ0E7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUFPLHdCQUFxQjtBQUFBLFlBQXdCLHdCQUFxQjtBQUFBLFlBQzFFLFNBQVN6QjtBQUFBQSxZQUNULFdBQVU7QUFBQSxZQUVSO0FBQUEscUNBQUMsZ0JBQWEsd0JBQXFCLHlCQUF3Qix3QkFBcUIsU0FBUSxXQUFVLGtCQUFsRztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFnSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBSmxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU1BO0FBQUEsV0E5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQStCQTtBQUFBLFNBbkNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FvQ0EsS0FyQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQXNDQTtBQUFBLE9BdlNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0F3U0E7QUFFSjtBQUFDM0YsR0EzaEJ1QkQsVUFBUTtBQUFBd0ksS0FBUnhJO0FBQVEsSUFBQXdJO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYmFzZTQ0IiwiQnV0dG9uIiwiSW5wdXQiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiQmFkZ2UiLCJNYXBQaW4iLCJOYXZpZ2F0aW9uIiwiUGhvbmUiLCJDaGVja0NpcmNsZTIiLCJDbG9jayIsIkJhbmtub3RlIiwiUXJDb2RlIiwibW90aW9uIiwiRGlhbG9nIiwiRGlhbG9nQ29udGVudCIsIkRpYWxvZ0hlYWRlciIsIkRpYWxvZ1RpdGxlIiwiUmlkZXJBcHAiLCJfcyIsInJpZGVyUGhvbmUiLCJzZXRSaWRlclBob25lIiwicmlkZXIiLCJzZXRSaWRlciIsImN1cnJlbnRPcmRlciIsInNldEN1cnJlbnRPcmRlciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImxpdmVMb2NhdGlvbiIsInNldExpdmVMb2NhdGlvbiIsIm9yZGVySGlzdG9yeSIsInNldE9yZGVySGlzdG9yeSIsInNob3dIaXN0b3J5Iiwic2V0U2hvd0hpc3RvcnkiLCJub3RpZmljYXRpb24iLCJzZXROb3RpZmljYXRpb24iLCJzaG93UGF5bWVudERpYWxvZyIsInNldFNob3dQYXltZW50RGlhbG9nIiwic2hvd1FSRGlhbG9nIiwic2V0U2hvd1FSRGlhbG9nIiwicmVzdGF1cmFudCIsInNldFJlc3RhdXJhbnQiLCJpZCIsImxvYWRDdXJyZW50T3JkZXIiLCJsb2FkT3JkZXJIaXN0b3J5Iiwic3RhcnRMb2NhdGlvblRyYWNraW5nIiwidW5zdWJzY3JpYmUiLCJlbnRpdGllcyIsIk9yZGVyIiwic3Vic2NyaWJlIiwiZXZlbnQiLCJkYXRhIiwiYXNzaWduZWRfcmlkZXJfaWQiLCJ0eXBlIiwic3RhdHVzIiwic2hvd05vdGlmaWNhdGlvbiIsIm9yZGVyX251bWJlciIsInBsYXlOb3RpZmljYXRpb25Tb3VuZCIsInN0b3BMb2NhdGlvblRyYWNraW5nIiwiaGlzdG9yeSIsImZpbHRlciIsInRpdGxlIiwibWVzc2FnZSIsIndpbmRvdyIsIk5vdGlmaWNhdGlvbiIsInBlcm1pc3Npb24iLCJib2R5IiwiaWNvbiIsInNldFRpbWVvdXQiLCJhdWRpbyIsIkF1ZGlvIiwidm9sdW1lIiwicGxheSIsImNhdGNoIiwib3JkZXJzIiwibGVuZ3RoIiwicmVzdGF1cmFudHMiLCJSZXN0YXVyYW50IiwicmVzdGF1cmFudF9pZCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwid2F0Y2hJZCIsIndhdGNoUG9zaXRpb24iLCJwb3NpdGlvbiIsImxvY2F0aW9uIiwibGF0aXR1ZGUiLCJjb29yZHMiLCJsb25naXR1ZGUiLCJEZWxpdmVyeVJpZGVyIiwidXBkYXRlIiwiY3VycmVudF9sb2NhdGlvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImVuYWJsZUhpZ2hBY2N1cmFjeSIsIm1heGltdW1BZ2UiLCJ0aW1lb3V0IiwicmlkZXJMb2NhdGlvbldhdGNoSWQiLCJjbGVhcldhdGNoIiwiaGFuZGxlTG9naW4iLCJyaWRlcnMiLCJwaG9uZSIsImlzX2FjdGl2ZSIsImlzX2F2YWlsYWJsZSIsInJlcXVlc3RQZXJtaXNzaW9uIiwiYWxlcnQiLCJoYW5kbGVNYXJrRGVsaXZlcmVkIiwiaGFuZGxlUGF5bWVudE1ldGhvZCIsIm1ldGhvZCIsImNvbXBsZXRlRGVsaXZlcnkiLCJoYW5kbGVVUElQYWlkIiwicGF5bWVudE1ldGhvZCIsImlzUGFpZCIsInBheW1lbnRfc3RhdHVzIiwicGF5bWVudF9tZXRob2QiLCJjYXNoVG9BZGQiLCJ0b3RhbF9hbW91bnQiLCJjdXJyZW50X29yZGVyX2lkIiwidG90YWxfZGVsaXZlcmllcyIsImNhc2hfY29sbGVjdGVkIiwiY3VzdG9tZXJfcGhvbmUiLCJjcmVhdGUiLCJ0b0ZpeGVkIiwicmVsYXRlZF9vcmRlcl9pZCIsIm9wZW5Jbk1hcHMiLCJsYXQiLCJsbmciLCJ1cmwiLCJvcGVuIiwiZSIsInRhcmdldCIsInZhbHVlIiwib3BhY2l0eSIsInkiLCJfaWQiLCJuYW1lIiwicmF0aW5nIiwibWFwIiwib3JkZXIiLCJjdXN0b21lcl9uYW1lIiwiRGF0ZSIsInVwZGF0ZWRfZGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInRvTG9jYWxlVGltZVN0cmluZyIsImRlbGl2ZXJ5X2FkZHJlc3MiLCJjdXN0b21lcl9mZWVkYmFjayIsImN1c3RvbWVyX3JhdGluZyIsImRlbGl2ZXJ5X2xvY2F0aW9uIiwiaXRlbXMiLCJpdGVtIiwiaSIsInF1YW50aXR5IiwidG90YWxfcHJpY2UiLCJyYXpvcnBheV9rZXlfaWQiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJSaWRlckFwcC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGJhc2U0NCB9IGZyb20gXCJAL2FwaS9iYXNlNDRDbGllbnRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9iYWRnZVwiO1xuaW1wb3J0IHsgTWFwUGluLCBOYXZpZ2F0aW9uLCBQaG9uZSwgQ2hlY2tDaXJjbGUyLCBDbG9jaywgQmFua25vdGUsIFFyQ29kZSB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBEaWFsb2csIERpYWxvZ0NvbnRlbnQsIERpYWxvZ0hlYWRlciwgRGlhbG9nVGl0bGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2RpYWxvZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSaWRlckFwcCgpIHtcbiAgY29uc3QgW3JpZGVyUGhvbmUsIHNldFJpZGVyUGhvbmVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtyaWRlciwgc2V0UmlkZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjdXJyZW50T3JkZXIsIHNldEN1cnJlbnRPcmRlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xpdmVMb2NhdGlvbiwgc2V0TGl2ZUxvY2F0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbb3JkZXJIaXN0b3J5LCBzZXRPcmRlckhpc3RvcnldID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2hvd0hpc3RvcnksIHNldFNob3dIaXN0b3J5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW25vdGlmaWNhdGlvbiwgc2V0Tm90aWZpY2F0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc2hvd1BheW1lbnREaWFsb2csIHNldFNob3dQYXltZW50RGlhbG9nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dRUkRpYWxvZywgc2V0U2hvd1FSRGlhbG9nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Jlc3RhdXJhbnQsIHNldFJlc3RhdXJhbnRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmlkZXI/LmlkKSB7XG4gICAgICBsb2FkQ3VycmVudE9yZGVyKCk7XG4gICAgICBsb2FkT3JkZXJIaXN0b3J5KCk7XG4gICAgICBzdGFydExvY2F0aW9uVHJhY2tpbmcoKTtcblxuICAgICAgLy8gU3Vic2NyaWJlIHRvIG9yZGVyIHVwZGF0ZXNcbiAgICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gYmFzZTQ0LmVudGl0aWVzLk9yZGVyLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmRhdGEuYXNzaWduZWRfcmlkZXJfaWQgPT09IHJpZGVyLmlkKSB7XG4gICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICd1cGRhdGUnKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGlzIGlzIGEgbmV3IGFzc2lnbm1lbnRcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnN0YXR1cyA9PT0gJ291dF9mb3JfZGVsaXZlcnknICYmICFjdXJyZW50T3JkZXIpIHtcbiAgICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbihcIvCfmpogTmV3IERlbGl2ZXJ5IEFzc2lnbmVkIVwiLCBgT3JkZXIgIyR7ZXZlbnQuZGF0YS5vcmRlcl9udW1iZXJ9IGlzIHJlYWR5IGZvciBkZWxpdmVyeWApO1xuICAgICAgICAgICAgICBwbGF5Tm90aWZpY2F0aW9uU291bmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEN1cnJlbnRPcmRlcihldmVudC5kYXRhKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09ICdjcmVhdGUnICYmIGV2ZW50LmRhdGEuc3RhdHVzID09PSAnb3V0X2Zvcl9kZWxpdmVyeScpIHtcbiAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb24oXCLwn5qaIE5ldyBEZWxpdmVyeSBBc3NpZ25lZCFcIiwgYE9yZGVyICMke2V2ZW50LmRhdGEub3JkZXJfbnVtYmVyfSBpcyByZWFkeSBmb3IgZGVsaXZlcnlgKTtcbiAgICAgICAgICAgIHBsYXlOb3RpZmljYXRpb25Tb3VuZCgpO1xuICAgICAgICAgICAgc2V0Q3VycmVudE9yZGVyKGV2ZW50LmRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHN0b3BMb2NhdGlvblRyYWNraW5nKCk7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW3JpZGVyXSk7XG5cbiAgY29uc3QgbG9hZE9yZGVySGlzdG9yeSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBoaXN0b3J5ID0gYXdhaXQgYmFzZTQ0LmVudGl0aWVzLk9yZGVyLmZpbHRlcih7XG4gICAgICBhc3NpZ25lZF9yaWRlcl9pZDogcmlkZXIuaWQsXG4gICAgICBzdGF0dXM6IFwiZGVsaXZlcmVkXCJcbiAgICB9LCBcIi1jcmVhdGVkX2RhdGVcIiwgNTApO1xuICAgIHNldE9yZGVySGlzdG9yeShoaXN0b3J5KTtcbiAgfTtcblxuICBjb25zdCBzaG93Tm90aWZpY2F0aW9uID0gKHRpdGxlLCBtZXNzYWdlKSA9PiB7XG4gICAgc2V0Tm90aWZpY2F0aW9uKHsgdGl0bGUsIG1lc3NhZ2UgfSk7XG5cbiAgICAvLyBCcm93c2VyIG5vdGlmaWNhdGlvblxuICAgIGlmIChcIk5vdGlmaWNhdGlvblwiIGluIHdpbmRvdyAmJiBOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gXCJncmFudGVkXCIpIHtcbiAgICAgIG5ldyBOb3RpZmljYXRpb24odGl0bGUsIHsgYm9keTogbWVzc2FnZSwgaWNvbjogXCLwn5qaXCIgfSk7XG4gICAgfVxuXG4gICAgLy8gQXV0byBkaXNtaXNzIGFmdGVyIDUgc2Vjb25kc1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Tm90aWZpY2F0aW9uKG51bGwpLCA1MDAwKTtcbiAgfTtcblxuICBjb25zdCBwbGF5Tm90aWZpY2F0aW9uU291bmQgPSAoKSA9PiB7XG4gICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oJ2RhdGE6YXVkaW8vd2F2O2Jhc2U2NCxVa2xHUm5vR0FBQlhRVlpGWm0xMElCQUFBQUFCQUFFQVFCOEFBRUFmQUFBQkFBZ0FaR0YwWVFvR0FBQ0JoWXFGYkYxZmRKaXZySkJoTmpWZ29kRGJxMkVjQmorYTIvTERjaVVGTElITzh0aUpOd2daYUx2dDU1OU5FQXhRcCtQd3RtTWNCamlSMS9MTWVTd0ZKSGZIOE4yUVFBb1VYclRwNjZoVkZBcEduK0R5dm13aEJTdUJ6dkxaaVRVSUdXaTc3ZWVlVEJFTFVLZmo4TFppSEFVNGtOZnl6SGdyQlNSM3gvRGRrRDhLRkY2MDMrdW9WUlFLUnAvZzhyOXNJUVFyZ3MveTJJazFCeGxvdU96bm5VMFFERkNuNWZDMVl4MEZONURZOHN4NUxRVWtlTWZ3M0k4L0NoUmVzTi9ycDFVVENVV1k0dksrYkNFRUs0UFA4dG1KTlFjWWFManM1NTFORUF4UG9Pand0V01kQkRpUTJQTE1lQzRFSlhmSDhOeVFRQW9XWHJEZjY2aFZGQXBGbWVMenYyd2lCQ3VCenZMWmlqWUhHV2k1N09lY1RCQU1UNkRuOExWakhRUTRqOWZ4eTNrdUJDUjN4L0RjajBBS0ZWNnczK3VuVlJNSlJwamg4cjV0SWdVcmdzN3kyWW8yQnhwbXVlem5ta3NQRFUraDUvQzFZeDBFTjVEWDhzdDRMZ1FsZHNmdzNKQUJDaFJlc04vcXAxVVRDVVdZNHZLK2JTSUZLNExQOHRtS05nY1paN25zNTV4T0R3eFBvZVh3dG1NZEJEaVAxL1BMZHl3RUpIZkg4TnlRQVFvV1hyRGY2cWhWRkFwRm1PTHp2bXdoQlN5Q3p2SFppVFVIR0dlNjdPZWRUaEFMVDZEbDhMWmtIZ1U0ajlqeHkzY3VCU1YyeCsvY2owQUtGbDJ3Mytxb1ZSUUtSWmppOHI1dElnVXJnczd4MllvMkJ4bG91ZXpvbTAwUkRVK2g1ZkMyWkIwR041RFg4Y3QzTGdRbGRzYnUzSTlBQ2hWZXNOL3FwMVVUQ2thWTRQSy9iU0VFSzRMTzhkbUtOUWNaYUxyczZKcE5FUXhQb09Yd3RtTWRCVGVRMXZITGR5d0VKbmZHN3R5UFFBb1ZYYS9lNnFkVUVncEZsK0h6djJ3aUJTeUN6dkxZaXpjSEdXaTQ3T2ljVFJBTlQ1L2w4TFZqSGdVM2o5Ynh5M2N1QkNaMnh1M2RqMEFLRlZ5dTNPbW1VeEVLUlpmaDhyOXRJZ1FzZ3M3eTJJazNCeGxvdU9yb21wTkV3eFBvT1h3dFdRZUJUaVAxdkhMZHl3RUpuYkY3dDJQUUFvVlhhN2Q2YVpURScpO1xuICAgIGF1ZGlvLnZvbHVtZSA9IDEuMDsgLy8gTWF4aW11bSB2b2x1bWVcbiAgICBhdWRpby5wbGF5KCkuY2F0Y2goKCkgPT4ge30pO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRDdXJyZW50T3JkZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgb3JkZXJzID0gYXdhaXQgYmFzZTQ0LmVudGl0aWVzLk9yZGVyLmZpbHRlcih7XG4gICAgICBhc3NpZ25lZF9yaWRlcl9pZDogcmlkZXIuaWQsXG4gICAgICBzdGF0dXM6IFwib3V0X2Zvcl9kZWxpdmVyeVwiXG4gICAgfSk7XG4gICAgaWYgKG9yZGVycy5sZW5ndGggPiAwKSB7XG4gICAgICBzZXRDdXJyZW50T3JkZXIob3JkZXJzWzBdKTtcblxuICAgICAgLy8gTG9hZCByZXN0YXVyYW50IGRhdGEgZm9yIFFSIGNvZGVcbiAgICAgIGNvbnN0IHJlc3RhdXJhbnRzID0gYXdhaXQgYmFzZTQ0LmVudGl0aWVzLlJlc3RhdXJhbnQuZmlsdGVyKHtcbiAgICAgICAgcmVzdGF1cmFudF9pZDogb3JkZXJzWzBdLnJlc3RhdXJhbnRfaWRcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlc3RhdXJhbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2V0UmVzdGF1cmFudChyZXN0YXVyYW50c1swXSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHN0YXJ0TG9jYXRpb25UcmFja2luZyA9ICgpID0+IHtcbiAgICBpZiAoIW5hdmlnYXRvci5nZW9sb2NhdGlvbikgcmV0dXJuO1xuXG4gICAgY29uc3Qgd2F0Y2hJZCA9IG5hdmlnYXRvci5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKFxuICAgICAgYXN5bmMgKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0ge1xuICAgICAgICAgIGxhdGl0dWRlOiBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsXG4gICAgICAgICAgbG9uZ2l0dWRlOiBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlXG4gICAgICAgIH07XG4gICAgICAgIHNldExpdmVMb2NhdGlvbihsb2NhdGlvbik7XG5cbiAgICAgICAgLy8gVXBkYXRlIHJpZGVyIGxvY2F0aW9uIGluIGRhdGFiYXNlXG4gICAgICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5EZWxpdmVyeVJpZGVyLnVwZGF0ZShyaWRlci5pZCwge1xuICAgICAgICAgIGN1cnJlbnRfbG9jYXRpb246IGxvY2F0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIChlcnJvcikgPT4gY29uc29sZS5sb2coXCJMb2NhdGlvbiBlcnJvclwiLCBlcnJvciksXG4gICAgICB7IGVuYWJsZUhpZ2hBY2N1cmFjeTogdHJ1ZSwgbWF4aW11bUFnZTogMTAwMDAsIHRpbWVvdXQ6IDUwMDAgfVxuICAgICk7XG5cbiAgICB3aW5kb3cucmlkZXJMb2NhdGlvbldhdGNoSWQgPSB3YXRjaElkO1xuICB9O1xuXG4gIGNvbnN0IHN0b3BMb2NhdGlvblRyYWNraW5nID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cucmlkZXJMb2NhdGlvbldhdGNoSWQpIHtcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5jbGVhcldhdGNoKHdpbmRvdy5yaWRlckxvY2F0aW9uV2F0Y2hJZCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghcmlkZXJQaG9uZSkgcmV0dXJuO1xuXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIGNvbnN0IHJpZGVycyA9IGF3YWl0IGJhc2U0NC5lbnRpdGllcy5EZWxpdmVyeVJpZGVyLmZpbHRlcih7XG4gICAgICBwaG9uZTogcmlkZXJQaG9uZSxcbiAgICAgIGlzX2FjdGl2ZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgaWYgKHJpZGVycy5sZW5ndGggPiAwKSB7XG4gICAgICBzZXRSaWRlcihyaWRlcnNbMF0pO1xuICAgICAgYXdhaXQgYmFzZTQ0LmVudGl0aWVzLkRlbGl2ZXJ5UmlkZXIudXBkYXRlKHJpZGVyc1swXS5pZCwge1xuICAgICAgICBpc19hdmFpbGFibGU6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZXF1ZXN0IG5vdGlmaWNhdGlvbiBwZXJtaXNzaW9uXG4gICAgICBpZiAoXCJOb3RpZmljYXRpb25cIiBpbiB3aW5kb3cgJiYgTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChcIlJpZGVyIG5vdCBmb3VuZC4gUGxlYXNlIGNvbnRhY3QgeW91ciByZXN0YXVyYW50LlwiKTtcbiAgICB9XG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNYXJrRGVsaXZlcmVkID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghY3VycmVudE9yZGVyKSByZXR1cm47XG4gICAgc2V0U2hvd1BheW1lbnREaWFsb2codHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUGF5bWVudE1ldGhvZCA9IGFzeW5jIChtZXRob2QpID0+IHtcbiAgICBpZiAobWV0aG9kID09PSAndXBpJykge1xuICAgICAgc2V0U2hvd1BheW1lbnREaWFsb2coZmFsc2UpO1xuICAgICAgc2V0U2hvd1FSRGlhbG9nKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDYXNoIHBheW1lbnRcbiAgICAgIGF3YWl0IGNvbXBsZXRlRGVsaXZlcnkoJ2Nhc2gnLCBmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVVQSVBhaWQgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgY29tcGxldGVEZWxpdmVyeSgndXBpJywgdHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgY29tcGxldGVEZWxpdmVyeSA9IGFzeW5jIChwYXltZW50TWV0aG9kLCBpc1BhaWQpID0+IHtcbiAgICAvLyBVcGRhdGUgb3JkZXIgc3RhdHVzXG4gICAgYXdhaXQgYmFzZTQ0LmVudGl0aWVzLk9yZGVyLnVwZGF0ZShjdXJyZW50T3JkZXIuaWQsIHtcbiAgICAgIHN0YXR1czogXCJkZWxpdmVyZWRcIixcbiAgICAgIHBheW1lbnRfc3RhdHVzOiBpc1BhaWQgPyAncGFpZCcgOiBjdXJyZW50T3JkZXIucGF5bWVudF9zdGF0dXMsXG4gICAgICBwYXltZW50X21ldGhvZDogcGF5bWVudE1ldGhvZFxuICAgIH0pO1xuXG4gICAgLy8gQWRkIGNhc2ggdG8gcmlkZXIgaWYgY2FzaCBwYXltZW50IGFuZCBub3QgcGFpZFxuICAgIGxldCBjYXNoVG9BZGQgPSAwO1xuICAgIGlmIChwYXltZW50TWV0aG9kID09PSAnY2FzaCcgJiYgY3VycmVudE9yZGVyLnBheW1lbnRfc3RhdHVzICE9PSAncGFpZCcpIHtcbiAgICAgIGNhc2hUb0FkZCA9IGN1cnJlbnRPcmRlci50b3RhbF9hbW91bnQ7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHJpZGVyXG4gICAgYXdhaXQgYmFzZTQ0LmVudGl0aWVzLkRlbGl2ZXJ5UmlkZXIudXBkYXRlKHJpZGVyLmlkLCB7XG4gICAgICBpc19hdmFpbGFibGU6IHRydWUsXG4gICAgICBjdXJyZW50X29yZGVyX2lkOiBudWxsLFxuICAgICAgdG90YWxfZGVsaXZlcmllczogKHJpZGVyLnRvdGFsX2RlbGl2ZXJpZXMgfHwgMCkgKyAxLFxuICAgICAgY2FzaF9jb2xsZWN0ZWQ6IChyaWRlci5jYXNoX2NvbGxlY3RlZCB8fCAwKSArIGNhc2hUb0FkZFxuICAgIH0pO1xuXG4gICAgLy8gU2VuZCBub3RpZmljYXRpb24gdG8gY3VzdG9tZXJcbiAgICBpZiAoY3VycmVudE9yZGVyLmN1c3RvbWVyX3Bob25lKSB7XG4gICAgICBhd2FpdCBiYXNlNDQuZW50aXRpZXMuTm90aWZpY2F0aW9uLmNyZWF0ZSh7XG4gICAgICAgIHJlc3RhdXJhbnRfaWQ6IGN1cnJlbnRPcmRlci5yZXN0YXVyYW50X2lkLFxuICAgICAgICB0eXBlOiAnc3lzdGVtJyxcbiAgICAgICAgdGl0bGU6ICfinIUgT3JkZXIgRGVsaXZlcmVkIScsXG4gICAgICAgIG1lc3NhZ2U6IGBZb3VyIG9yZGVyICMke2N1cnJlbnRPcmRlci5vcmRlcl9udW1iZXJ9IGhhcyBiZWVuIGRlbGl2ZXJlZCBzdWNjZXNzZnVsbHkuIExvY2F0aW9uOiAke2xpdmVMb2NhdGlvbiA/IGAke2xpdmVMb2NhdGlvbi5sYXRpdHVkZS50b0ZpeGVkKDQpfSwgJHtsaXZlTG9jYXRpb24ubG9uZ2l0dWRlLnRvRml4ZWQoNCl9YCA6ICdEZWxpdmVyZWQgYXQgeW91ciBhZGRyZXNzJ31gLFxuICAgICAgICByZWxhdGVkX29yZGVyX2lkOiBjdXJyZW50T3JkZXIuaWRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFNob3dQYXltZW50RGlhbG9nKGZhbHNlKTtcbiAgICBzZXRTaG93UVJEaWFsb2coZmFsc2UpO1xuICAgIHNldEN1cnJlbnRPcmRlcihudWxsKTtcbiAgICBzZXRSaWRlcih7IC4uLnJpZGVyLCBjYXNoX2NvbGxlY3RlZDogKHJpZGVyLmNhc2hfY29sbGVjdGVkIHx8IDApICsgY2FzaFRvQWRkIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9wZW5Jbk1hcHMgPSAobGF0LCBsbmcpID0+IHtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2Rpci8/YXBpPTEmZGVzdGluYXRpb249JHtsYXR9LCR7bG5nfWA7XG4gICAgd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJyk7XG4gIH07XG5cbiAgLy8gTG9naW4gU2NyZWVuXG4gIGlmICghcmlkZXIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjIxOTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWdyYWRpZW50LXRvLWJyIGZyb20taW5kaWdvLTYwMCB0by1wdXJwbGUtNjAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNFwiPlxuICAgICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjIyMDo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LXNtXCI+XG4gICAgICAgICAgPENhcmRIZWFkZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDoyMjE6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDoyMjI6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0xNiBoLTE2IGJnLWluZGlnby0xMDAgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG14LWF1dG8gbWItNFwiPlxuICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjIyMzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPvCfj43vuI88L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDYXJkVGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDoyMjU6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5SaWRlciBMb2dpbjwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDoyMjY6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LXNtIG10LTJcIj5FbnRlciB5b3VyIHJlZ2lzdGVyZWQgcGhvbmUgbnVtYmVyPC9wPlxuICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDoyMjg6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDoyMjk6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgPElucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6MjMwOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaG9uZSBOdW1iZXJcIlxuICAgICAgICAgICAgICB2YWx1ZT17cmlkZXJQaG9uZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSaWRlclBob25lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1sZ1wiIC8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjIzNzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dpbn1cbiAgICAgICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmcgfHwgIXJpZGVyUGhvbmV9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctaW5kaWdvLTYwMCBob3ZlcjpiZy1pbmRpZ28tNzAwIHB5LTYgdGV4dC1sZ1wiPlxuXG4gICAgICAgICAgICAgIHtpc0xvYWRpbmcgPyBcIkxvYWRpbmcuLi5cIiA6IFwiTG9naW5cIn1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2Pik7XG5cbiAgfVxuXG4gIC8vIE1haW4gUmlkZXIgRGFzaGJvYXJkXG4gIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjI1Mjo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWdyYXktNTAgcGItMjBcIj5cbiAgICAgIHsvKiBOb3RpZmljYXRpb24gVG9hc3QgKi99XG4gICAgICB7bm90aWZpY2F0aW9uICYmXG4gICAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjI1NTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogLTUwIH19XG4gICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCwgeTogLTUwIH19XG4gICAgICBjbGFzc05hbWU9XCJmaXhlZCB0b3AtNCBsZWZ0LTQgcmlnaHQtNCB6LTUwIGJnLXdoaXRlIHNoYWRvdy1sZyByb3VuZGVkLWxnIHAtNCBib3JkZXItbC00IGJvcmRlci1pbmRpZ28tNjAwXCI+XG5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6MjYxOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtM1wiPlxuICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDoyNjI6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC0yeGxcIj7wn5SUPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjI2MzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjI2NDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJ0aXRsZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtub3RpZmljYXRpb24/LmlkIHx8IG5vdGlmaWNhdGlvbj8uX2lkfT57bm90aWZpY2F0aW9uLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDoyNjU6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIm1lc3NhZ2VcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17bm90aWZpY2F0aW9uPy5pZCB8fCBub3RpZmljYXRpb24/Ll9pZH0+e25vdGlmaWNhdGlvbi5tZXNzYWdlfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjI2NzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG9uQ2xpY2s9eygpID0+IHNldE5vdGlmaWNhdGlvbihudWxsKX0gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMFwiPuKclTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICB9XG5cbiAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6MjczOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3ctc20gcC0zIHN0aWNreSB0b3AtMCB6LTEwXCI+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDoyNzQ6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDoyNzU6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6Mjc2OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiPldlbGNvbWUsPC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDoyNzc6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1iYXNlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJuYW1lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3JpZGVyPy5pZCB8fCByaWRlcj8uX2lkfT57cmlkZXIubmFtZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjI3OToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgIDxCYWRnZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjI4MDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImJnLWdyZWVuLTEwMCB0ZXh0LWdyZWVuLTcwMCB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgIHtjdXJyZW50T3JkZXIgPyBcIk9uIERlbGl2ZXJ5XCIgOiBcIkF2YWlsYWJsZVwifVxuICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6MjgzOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwIG10LTFcIj5cbiAgICAgICAgICAgICAge3JpZGVyLnRvdGFsX2RlbGl2ZXJpZXMgfHwgMH0gZGVsaXZlcmllcyDigKIg4q2QIHtyaWRlci5yYXRpbmcgfHwgNX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDoyODY6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcbiAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93SGlzdG9yeSghc2hvd0hpc3RvcnkpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LXhzIGgtNiBweC0yXCI+XG5cbiAgICAgICAgICAgICAge3Nob3dIaXN0b3J5ID8gXCJBY3RpdmVcIiA6IFwiSGlzdG9yeVwifVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7KHJpZGVyLmNhc2hfY29sbGVjdGVkIHx8IDApID4gMCAmJlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6Mjk3OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibXQtMiBiZy1vcmFuZ2UtNTAgYm9yZGVyIGJvcmRlci1vcmFuZ2UtMjAwIHJvdW5kZWQtbGcgcC0yXCI+XG4gICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjI5ODoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1vcmFuZ2UtNzAwIGZvbnQtbWVkaXVtXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJjYXNoX2NvbGxlY3RlZFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyaWRlcj8uaWQgfHwgcmlkZXI/Ll9pZH0+8J+SsCBDYXNoIHRvIFN1Ym1pdDog4oK5e3JpZGVyLmNhc2hfY29sbGVjdGVkfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDozMDM6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtMyBzcGFjZS15LTMgbWF4LXctMnhsIG14LWF1dG9cIj5cbiAgICAgICAgey8qIE9yZGVyIEhpc3RvcnkgVmlldyAqL31cbiAgICAgICAge3Nob3dIaXN0b3J5ID9cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjMwNjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjMwNzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8aDIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDozMDg6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj5EZWxpdmVyeSBIaXN0b3J5PC9oMj5cbiAgICAgICAgICAgICAgPEJhZGdlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6MzA5OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdmFyaWFudD1cIm91dGxpbmVcIj57b3JkZXJIaXN0b3J5Lmxlbmd0aH0gY29tcGxldGVkPC9CYWRnZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7b3JkZXJIaXN0b3J5Lmxlbmd0aCA9PT0gMCA/XG4gICAgICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDozMTM6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktMTJcIj5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjMxNDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+Tm8gY29tcGxldGVkIGRlbGl2ZXJpZXMgeWV0PC9wPlxuICAgICAgICAgICAgICA8L0NhcmQ+IDpcblxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDozMTc6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIiBkYXRhLWNvbGxlY3Rpb24taWQ9XCJPcmRlclwiPlxuICAgICAgICAgICAgICAgIHtvcmRlckhpc3RvcnkubWFwKChvcmRlcikgPT5cbiAgICAgICAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6MzE5OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtvcmRlci5pZH0gZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e29yZGVyPy5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjMyMDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDozMjE6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6MzIyOjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6MzIzOjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJvcmRlcl9udW1iZXJcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17b3JkZXI/LmlkfT5PcmRlciAje29yZGVyLm9yZGVyX251bWJlcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6MzI0OjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJjdXN0b21lcl9uYW1lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e29yZGVyPy5pZH0+e29yZGVyLmN1c3RvbWVyX25hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDozMjY6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYmctZ3JlZW4tMTAwIHRleHQtZ3JlZW4tNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIOKckyBEZWxpdmVyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjMzMToyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktMiB0ZXh0LXNtXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJjdXN0b21lcl9mZWVkYmFja1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtvcmRlcj8uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjMzMjoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6MzMzOjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5EYXRlOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDozMzQ6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj57bmV3IERhdGUob3JkZXIudXBkYXRlZF9kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDozMzY6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjMzNzoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+VGltZTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6MzM4OjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+e25ldyBEYXRlKG9yZGVyLnVwZGF0ZWRfZGF0ZSkudG9Mb2NhbGVUaW1lU3RyaW5nKCl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6MzQwOjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDozNDE6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPkFkZHJlc3M6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjM0MjoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtcmlnaHQgbWF4LXcteHMgdHJ1bmNhdGVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImRlbGl2ZXJ5X2FkZHJlc3NcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17b3JkZXI/LmlkfT57b3JkZXIuZGVsaXZlcnlfYWRkcmVzc308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDozNDQ6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjM0NToyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5BbW91bnQ6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjM0NjoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidG90YWxfYW1vdW50XCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e29yZGVyPy5pZH0+4oK5e29yZGVyLnRvdGFsX2Ftb3VudH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtvcmRlci5jdXN0b21lcl9mZWVkYmFjayAmJlxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjM0OToyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImJnLXllbGxvdy01MCBwLTIgcm91bmRlZCBtdC0yXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJjdXN0b21lcl9yYXRpbmdcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17b3JkZXI/LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjM1MDoyOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDBcIj5DdXN0b21lciBGZWVkYmFjazo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDozNTE6MjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJjdXN0b21lcl9mZWVkYmFja1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtvcmRlcj8uaWR9PntvcmRlci5jdXN0b21lcl9mZWVkYmFja308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge29yZGVyLmN1c3RvbWVyX3JhdGluZyAmJlxuICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjM1MzozMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgbXQtMVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiY3VzdG9tZXJfcmF0aW5nXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e29yZGVyPy5pZH0+4q2QIHtvcmRlci5jdXN0b21lcl9yYXRpbmd9LzU8L3A+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+IDpcblxuICAgICAgICA8PlxuICAgICAgICAgICAgey8qIEN1cnJlbnQgT3JkZXIgKi99XG4gICAgICAgICAgICB7Y3VycmVudE9yZGVyID9cbiAgICAgICAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjM2ODoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fT5cblxuICAgICAgICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDozNzI6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItaW5kaWdvLTIwMFwiPlxuICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjM3MzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImJnLWluZGlnby01MFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDozNzQ6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDozNzU6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPkFjdGl2ZSBEZWxpdmVyeTwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICAgICAgPEJhZGdlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6Mzc2OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYmctaW5kaWdvLTYwMCB0ZXh0LXdoaXRlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJvcmRlcl9udW1iZXJcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17Y3VycmVudE9yZGVyPy5pZCB8fCBjdXJyZW50T3JkZXI/Ll9pZH0+XG4gICAgICAgICAgICAgICAgICAgIE9yZGVyICN7Y3VycmVudE9yZGVyLm9yZGVyX251bWJlcn1cbiAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6MzgxOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS00IHB0LTRcIj5cbiAgICAgICAgICAgICAgICB7LyogQ3VzdG9tZXIgRGV0YWlscyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6MzgzOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYmctZ3JheS01MCByb3VuZGVkLWxnIHAtNFwiPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDozODQ6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIG1iLTJcIj5DdXN0b21lciBEZXRhaWxzPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDozODU6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWxnXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJjdXN0b21lcl9uYW1lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2N1cnJlbnRPcmRlcj8uaWQgfHwgY3VycmVudE9yZGVyPy5faWR9PntjdXJyZW50T3JkZXIuY3VzdG9tZXJfbmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICA8YSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjM4NjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGhyZWY9e2B0ZWw6JHtjdXJyZW50T3JkZXIuY3VzdG9tZXJfcGhvbmV9YH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1pbmRpZ28tNjAwIG10LTJcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImN1c3RvbWVyX3Bob25lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2N1cnJlbnRPcmRlcj8uaWQgfHwgY3VycmVudE9yZGVyPy5faWR9PlxuICAgICAgICAgICAgICAgICAgICA8UGhvbmUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDozODc6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIHtjdXJyZW50T3JkZXIuY3VzdG9tZXJfcGhvbmV9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogRGVsaXZlcnkgQWRkcmVzcyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6MzkzOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYmctYmx1ZS01MCByb3VuZGVkLWxnIHAtNFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiZGVsaXZlcnlfbG9jYXRpb25cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17Y3VycmVudE9yZGVyPy5pZCB8fCBjdXJyZW50T3JkZXI/Ll9pZH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6Mzk0OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjM5NToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6Mzk2OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBtYi0xXCI+RGVsaXZlcnkgQWRkcmVzczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjM5NzoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJkZWxpdmVyeV9hZGRyZXNzXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2N1cnJlbnRPcmRlcj8uaWQgfHwgY3VycmVudE9yZGVyPy5faWR9PntjdXJyZW50T3JkZXIuZGVsaXZlcnlfYWRkcmVzc308L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8TWFwUGluIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6Mzk5OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1ibHVlLTYwMCBtdC0xXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAge2N1cnJlbnRPcmRlci5kZWxpdmVyeV9sb2NhdGlvbiAmJlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjQwMjoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuSW5NYXBzKFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50T3JkZXIuZGVsaXZlcnlfbG9jYXRpb24ubGF0aXR1ZGUsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPcmRlci5kZWxpdmVyeV9sb2NhdGlvbi5sb25naXR1ZGVcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMyBiZy1ibHVlLTYwMCBob3ZlcjpiZy1ibHVlLTcwMFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDo0MDk6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCBtci0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICBPcGVuIGluIE1hcHNcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogT3JkZXIgSXRlbXMgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjQxNjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDo0MTc6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIG1iLTJcIj5PcmRlciBJdGVtczwvcD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDo0MTg6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRPcmRlci5pdGVtcz8ubWFwKChpdGVtLCBpKSA9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6NDIwOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtpfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXNtXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2l0ZW0/LltcImRhdGEtY29sbGVjdGlvbi1pdGVtLWlkXCJdfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6NDIxOjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJxdWFudGl0eVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtpdGVtPy5pZCB8fCBpdGVtPy5faWR9PntpdGVtLnF1YW50aXR5fXgge2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjQyMjoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJ0b3RhbF9wcmljZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtpdGVtPy5pZCB8fCBpdGVtPy5faWR9PuKCuXtpdGVtLnRvdGFsX3ByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjQyNToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGZvbnQtYm9sZCB0ZXh0LWJhc2UgYm9yZGVyLXQgcHQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6NDI2OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlRvdGFsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6NDI3OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJ0b3RhbF9hbW91bnRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17Y3VycmVudE9yZGVyPy5pZCB8fCBjdXJyZW50T3JkZXI/Ll9pZH0+4oK5e2N1cnJlbnRPcmRlci50b3RhbF9hbW91bnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIFBheW1lbnQgSW5mbyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6NDMzOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYmcteWVsbG93LTUwIGJvcmRlciBib3JkZXIteWVsbG93LTIwMCByb3VuZGVkLWxnIHAtM1wiPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDo0MzQ6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgIPCfkrAgUGF5bWVudDoge2N1cnJlbnRPcmRlci5wYXltZW50X3N0YXR1cyA9PT0gJ3BhaWQnID8gJ+KchSBBbHJlYWR5IFBhaWQnIDogYENvbGxlY3Qg4oK5JHtjdXJyZW50T3JkZXIudG90YWxfYW1vdW50fSAoJHtjdXJyZW50T3JkZXIucGF5bWVudF9tZXRob2R9KWB9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogTWFyayBEZWxpdmVyZWQgQnV0dG9uICovfVxuICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDo0NDA6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU1hcmtEZWxpdmVyZWR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyZWVuLTYwMCBob3ZlcjpiZy1ncmVlbi03MDAgcHktNiB0ZXh0LWJhc2Ugc206dGV4dC1sZ1wiPlxuXG4gICAgICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGUyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6NDQ0OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTUgbXItMlwiIC8+XG4gICAgICAgICAgICAgICAgICBNYXJrIGFzIERlbGl2ZXJlZFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj4gOlxuXG4gICAgICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDo0NTE6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktMTJcIj5cbiAgICAgICAgICAgIDxDbG9jayBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjQ1MjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgdGV4dC1ncmF5LTMwMCBteC1hdXRvIG1iLTRcIiAvPlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDo0NTM6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIG1iLTJcIj5ObyBBY3RpdmUgRGVsaXZlcmllczwvcD5cbiAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6NDU0OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5Zb3UnbGwgYmUgbm90aWZpZWQgd2hlbiBhIG5ldyBvcmRlciBpcyBhc3NpZ25lZDwvcD5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDo0NTU6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwibXQtNiBwLTQgYmctZ3JlZW4tNTAgcm91bmRlZC1sZyBpbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDo0NTY6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmVlbi03MDAgZm9udC1tZWRpdW1cIj7inJMgQXZhaWxhYmxlIGZvciBkZWxpdmVyaWVzPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgey8qIExpdmUgTG9jYXRpb24gU3RhdHVzICovfVxuICAgICAgICAgICAge2xpdmVMb2NhdGlvbiAmJlxuICAgICAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6NDYzOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1wdXJwbGUtNTAgdG8taW5kaWdvLTUwXCI+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6NDY0OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInAtNCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjQ2NToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTMgaC0zIGJnLWdyZWVuLTUwMCByb3VuZGVkLWZ1bGwgYW5pbWF0ZS1wdWxzZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjQ2NjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDo0Njc6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bVwiPkxvY2F0aW9uIFRyYWNraW5nIEFjdGl2ZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDo0Njg6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+WW91ciBsb2NhdGlvbiBpcyBiZWluZyBzaGFyZWQ8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgfVxuICAgICAgICAgIDwvPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIFBheW1lbnQgTWV0aG9kIERpYWxvZyAqL31cbiAgICAgIDxEaWFsb2cgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDo0Nzg6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG9wZW49e3Nob3dQYXltZW50RGlhbG9nfSBvbk9wZW5DaGFuZ2U9e3NldFNob3dQYXltZW50RGlhbG9nfT5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDo0Nzk6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1heC13LXNtXCI+XG4gICAgICAgICAgPERpYWxvZ0hlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjQ4MDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgIDxEaWFsb2dUaXRsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjQ4MToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5QYXltZW50IE1ldGhvZDwvRGlhbG9nVGl0bGU+XG4gICAgICAgICAgPC9EaWFsb2dIZWFkZXI+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjQ4MzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDo0ODQ6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+SG93IGRpZCBjdXN0b21lciBwYXk/PC9wPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjQ4NToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBweS00IGJnLWdyYXktNTAgcm91bmRlZC1sZ1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidG90YWxfYW1vdW50XCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2N1cnJlbnRPcmRlcj8uaWQgfHwgY3VycmVudE9yZGVyPy5faWR9PlxuICAgICAgICAgICAgICDigrl7Y3VycmVudE9yZGVyPy50b3RhbF9hbW91bnR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDo0ODg6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0zXCI+XG4gICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDo0ODk6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQYXltZW50TWV0aG9kKCdjYXNoJyl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMjAgZmxleCBmbGV4LWNvbCBiZy1vcmFuZ2UtNjAwIGhvdmVyOmJnLW9yYW5nZS03MDBcIj5cblxuICAgICAgICAgICAgICAgIDxCYW5rbm90ZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjQ5MzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTggaC04IG1iLTFcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6NDk0OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPkNhc2g8L3NwYW4+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6NDk2OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUGF5bWVudE1ldGhvZCgndXBpJyl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMjAgZmxleCBmbGV4LWNvbCBiZy1ibHVlLTYwMCBob3ZlcjpiZy1ibHVlLTcwMFwiPlxuXG4gICAgICAgICAgICAgICAgPFFyQ29kZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjUwMDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTggaC04IG1iLTFcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6NTAxOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlVQSS9PbmxpbmU8L3NwYW4+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgIDwvRGlhbG9nPlxuXG4gICAgICB7LyogUVIgQ29kZSBEaWFsb2cgKi99XG4gICAgICA8RGlhbG9nIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6NTA5OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBvcGVuPXtzaG93UVJEaWFsb2d9IG9uT3BlbkNoYW5nZT17c2V0U2hvd1FSRGlhbG9nfT5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDo1MTA6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1heC13LXNtXCI+XG4gICAgICAgICAgPERpYWxvZ0hlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjUxMToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgIDxEaWFsb2dUaXRsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjUxMjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5TY2FuIHRvIFBheTwvRGlhbG9nVGl0bGU+XG4gICAgICAgICAgPC9EaWFsb2dIZWFkZXI+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjUxNDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDo1MTU6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgIEN1c3RvbWVyIHNob3VsZCBzY2FuIHRoaXMgUVIgY29kZVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjUxODoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1ncmF5LTIwMFwiPlxuICAgICAgICAgICAgICB7cmVzdGF1cmFudD8ucmF6b3JwYXlfa2V5X2lkID9cbiAgICAgICAgICAgICAgPGltZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjUyMDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vYXBpLnFyc2VydmVyLmNvbS92MS9jcmVhdGUtcXItY29kZS8/c2l6ZT0zMDB4MzAwJmRhdGE9dXBpOi8vcGF5P3BhPSR7cmVzdGF1cmFudC5yYXpvcnBheV9rZXlfaWR9QHBheXRtJnBuPSR7cmVzdGF1cmFudC5uYW1lfSZhbT0ke2N1cnJlbnRPcmRlcj8udG90YWxfYW1vdW50fSZjdT1JTlJgfVxuICAgICAgICAgICAgICBhbHQ9XCJQYXltZW50IFFSXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCIgLz4gOlxuXG5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjUyNjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJhc3BlY3Qtc3F1YXJlIGJnLWdyYXktMTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDo1Mjc6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFFyQ29kZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjUyODoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgbXgtYXV0byBtYi0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SaWRlckFwcDo1Mjk6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC14c1wiPlFSIG5vdCBjb25maWd1cmVkPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjUzNDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6NTM1OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTJcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInRvdGFsX2Ftb3VudFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtjdXJyZW50T3JkZXI/LmlkIHx8IGN1cnJlbnRPcmRlcj8uX2lkfT7igrl7Y3VycmVudE9yZGVyPy50b3RhbF9hbW91bnR9PC9wPlxuICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjUzNjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwibmFtZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyZXN0YXVyYW50Py5pZCB8fCByZXN0YXVyYW50Py5faWR9PntyZXN0YXVyYW50Py5uYW1lfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1JpZGVyQXBwOjUzODoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVVUElQYWlkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyZWVuLTYwMCBob3ZlcjpiZy1ncmVlbi03MDBcIj5cblxuICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGUyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmlkZXJBcHA6NTQyOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgbXItMlwiIC8+XG4gICAgICAgICAgICAgIFBheW1lbnQgUmVjZWl2ZWRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICA8L0RpYWxvZz5cbiAgICA8L2Rpdj4pO1xuXG59Il0sImZpbGUiOiIvYXBwL3NyYy9wYWdlcy9SaWRlckFwcC5qc3gifQ==