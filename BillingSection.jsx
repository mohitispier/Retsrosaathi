import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/dashboard/BillingSection.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/dashboard/BillingSection.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$(), _s2 = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { motion, AnimatePresence } from "/node_modules/.vite/deps/framer-motion.js?v=79425e35";
import {
  CreditCard,
  Calendar,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Crown,
  Loader2,
  X,
  Check,
  History,
  ChevronDown,
  Sparkles,
  TrendingUp,
  Receipt,
  AlertTriangle
} from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
import { Card, CardContent, CardHeader, CardTitle } from "/src/components/ui/card.jsx";
import { Button } from "/src/components/ui/button.jsx";
import { Badge } from "/src/components/ui/badge.jsx";
import { Switch } from "/src/components/ui/switch.jsx";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "/src/components/ui/dialog.jsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "/src/components/ui/dropdown-menu.jsx";
import { base44 } from "/src/api/base44Client.js";
import { useToast } from "/src/components/ui/use-toast.jsx";
import { format, addMonths, addYears } from "/node_modules/.vite/deps/date-fns.js?v=79425e35";
const PLAN_HIERARCHY = { trial: 0, basic: 1, pro: 2, multi_outlet: 3 };
const plans = [
  {
    id: "basic",
    name: "Basic",
    monthlyPrice: 999,
    yearlyPrice: 9990,
    features: [
      "QR Code Ordering",
      "Digital Menu (Dine-in only)",
      "Unlimited menu items",
      "Up to 25 Tables",
      "Order Management",
      "Basic Analytics",
      "Custom Branding",
      "Email Support"
    ],
    notIncluded: ["Direct Payments", "Multi-Outlet", "Delivery", "Takeaway"],
    addons: [{ name: "Delivery", price: 299 }, { name: "Takeaway", price: 199 }]
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: 1999,
    yearlyPrice: 19990,
    features: [
      "Everything in Basic",
      "Unlimited Tables",
      "Direct Payments",
      "Advanced Analytics",
      "Priority Support",
      "Customer Database",
      "Delivery & Takeaway"
    ],
    notIncluded: ["Multi-Outlet"],
    addons: [],
    popular: true
  },
  {
    id: "multi_outlet",
    name: "Multi-Outlet",
    monthlyPrice: 4999,
    yearlyPrice: 49990,
    features: [
      "Everything in Pro",
      "Up to 5 Outlets",
      "Centralized Dashboard",
      "Location Analytics",
      "Dedicated Support",
      "Custom Integrations",
      "Delivery Included",
      "Takeaway Included"
    ],
    notIncluded: [],
    addons: []
  }
];
const planFeatureMap = {
  trial: { qr_ordering: true, custom_branding: false, customer_analytics: false, payment_integration: false, delivery: false, takeaway: false, multi_outlet: false },
  basic: { qr_ordering: true, custom_branding: true, customer_analytics: true, payment_integration: false, delivery: false, takeaway: false, multi_outlet: false },
  pro: { qr_ordering: true, custom_branding: true, customer_analytics: true, payment_integration: true, delivery: true, takeaway: true, multi_outlet: false },
  multi_outlet: { qr_ordering: true, custom_branding: true, customer_analytics: true, payment_integration: true, delivery: true, takeaway: true, multi_outlet: true }
};
function BillingHistoryDropdown({ restaurantId }) {
  _s();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const loadTransactions = async () => {
    if (!restaurantId) return;
    setLoading(true);
    try {
      const txns = await base44.entities.BillingTransaction.filter(
        { restaurant_id: restaurantId },
        "-created_date",
        10
      );
      setTransactions(txns);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (open) loadTransactions();
  }, [open]);
  return /* @__PURE__ */ jsxDEV(DropdownMenu, { "data-source-location": "components/dashboard/BillingSection:115:4", "data-dynamic-content": "true", open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxDEV(DropdownMenuTrigger, { "data-source-location": "components/dashboard/BillingSection:116:6", "data-dynamic-content": "false", asChild: true, children: /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "components/dashboard/BillingSection:117:8", "data-dynamic-content": "false", variant: "outline", size: "sm", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxDEV(History, { "data-source-location": "components/dashboard/BillingSection:118:10", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
        fileName: "/app/src/components/dashboard/BillingSection.jsx",
        lineNumber: 137,
        columnNumber: 11
      }, this),
      "Billing History",
      /* @__PURE__ */ jsxDEV(ChevronDown, { "data-source-location": "components/dashboard/BillingSection:120:10", "data-dynamic-content": "false", className: "w-3 h-3 ml-1" }, void 0, false, {
        fileName: "/app/src/components/dashboard/BillingSection.jsx",
        lineNumber: 139,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/BillingSection.jsx",
      lineNumber: 136,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/components/dashboard/BillingSection.jsx",
      lineNumber: 135,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(DropdownMenuContent, { "data-source-location": "components/dashboard/BillingSection:123:6", "data-dynamic-content": "true", align: "end", className: "w-80 p-0", sideOffset: 8, children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:124:8", "data-dynamic-content": "false", className: "p-4 border-b", children: [
        /* @__PURE__ */ jsxDEV("h4", { "data-source-location": "components/dashboard/BillingSection:125:10", "data-dynamic-content": "false", className: "font-semibold text-gray-900", children: "Recent Billing Activity" }, void 0, false, {
          fileName: "/app/src/components/dashboard/BillingSection.jsx",
          lineNumber: 144,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/BillingSection:126:10", "data-dynamic-content": "false", className: "text-xs text-gray-500 mt-0.5", children: "Last 10 transactions" }, void 0, false, {
          fileName: "/app/src/components/dashboard/BillingSection.jsx",
          lineNumber: 145,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/BillingSection.jsx",
        lineNumber: 143,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:128:8", "data-dynamic-content": "true", className: "max-h-80 overflow-y-auto", "data-collection-id": "BillingTransaction", children: loading ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:130:12", "data-dynamic-content": "false", className: "flex items-center justify-center py-8", children: /* @__PURE__ */ jsxDEV(Loader2, { "data-source-location": "components/dashboard/BillingSection:131:14", "data-dynamic-content": "false", className: "w-5 h-5 animate-spin text-gray-400" }, void 0, false, {
        fileName: "/app/src/components/dashboard/BillingSection.jsx",
        lineNumber: 150,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/src/components/dashboard/BillingSection.jsx",
        lineNumber: 149,
        columnNumber: 11
      }, this) : transactions.length === 0 ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:134:12", "data-dynamic-content": "false", className: "py-8 text-center text-gray-500", children: [
        /* @__PURE__ */ jsxDEV(Receipt, { "data-source-location": "components/dashboard/BillingSection:135:14", "data-dynamic-content": "false", className: "w-8 h-8 mx-auto mb-2 text-gray-300" }, void 0, false, {
          fileName: "/app/src/components/dashboard/BillingSection.jsx",
          lineNumber: 154,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/BillingSection:136:14", "data-dynamic-content": "false", className: "text-sm", children: "No transactions yet" }, void 0, false, {
          fileName: "/app/src/components/dashboard/BillingSection.jsx",
          lineNumber: 155,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/BillingSection.jsx",
        lineNumber: 153,
        columnNumber: 11
      }, this) : transactions.map(
        (txn) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:140:14", "data-dynamic-content": "true", className: "flex items-center gap-3 px-4 py-3 border-b last:border-0 hover:bg-gray-50", "data-collection-item-id": txn?.id, children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:141:16", "data-dynamic-content": "true", className: `w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${txn.status === "success" ? "bg-green-100" : "bg-red-100"}`, children: txn.status === "success" ? /* @__PURE__ */ jsxDEV(CheckCircle, { "data-source-location": "components/dashboard/BillingSection:143:22", "data-dynamic-content": "false", className: "w-4 h-4 text-green-600" }, void 0, false, {
            fileName: "/app/src/components/dashboard/BillingSection.jsx",
            lineNumber: 162,
            columnNumber: 15
          }, this) : /* @__PURE__ */ jsxDEV(AlertTriangle, { "data-source-location": "components/dashboard/BillingSection:144:22", "data-dynamic-content": "false", className: "w-4 h-4 text-red-500" }, void 0, false, {
            fileName: "/app/src/components/dashboard/BillingSection.jsx",
            lineNumber: 163,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/BillingSection.jsx",
            lineNumber: 160,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:147:16", "data-dynamic-content": "true", className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/BillingSection:148:18", "data-dynamic-content": "true", className: "text-sm font-medium text-gray-900 truncate", "data-collection-item-field": "plan_name", "data-collection-item-id": txn?.id, children: [
              txn.plan_name,
              " Plan"
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/BillingSection.jsx",
              lineNumber: 167,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/BillingSection:149:18", "data-dynamic-content": "true", className: "text-xs text-gray-500", "data-collection-item-field": "billing_cycle", "data-collection-item-id": txn?.id, children: [
              txn.created_date ? format(new Date(txn.created_date), "MMM d, yyyy") : "N/A",
              txn.billing_cycle && ` · ${txn.billing_cycle}`
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/BillingSection.jsx",
              lineNumber: 168,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/BillingSection.jsx",
            lineNumber: 166,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:154:16", "data-dynamic-content": "true", className: "text-right", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/BillingSection:155:18", "data-dynamic-content": "true", className: `text-sm font-semibold ${txn.status === "success" ? "text-gray-900" : "text-red-500"}`, "data-collection-item-field": "amount", "data-collection-item-id": txn?.id, children: [
              "₹",
              txn.amount
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/BillingSection.jsx",
              lineNumber: 174,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "components/dashboard/BillingSection:158:18", "data-dynamic-content": "true", className: `text-xs ${txn.status === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`, "data-collection-item-field": "status", "data-collection-item-id": txn?.id, children: txn.status }, void 0, false, {
              fileName: "/app/src/components/dashboard/BillingSection.jsx",
              lineNumber: 177,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/BillingSection.jsx",
            lineNumber: 173,
            columnNumber: 17
          }, this)
        ] }, txn.id, true, {
          fileName: "/app/src/components/dashboard/BillingSection.jsx",
          lineNumber: 159,
          columnNumber: 11
        }, this)
      ) }, void 0, false, {
        fileName: "/app/src/components/dashboard/BillingSection.jsx",
        lineNumber: 147,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/BillingSection.jsx",
      lineNumber: 142,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/dashboard/BillingSection.jsx",
    lineNumber: 134,
    columnNumber: 5
  }, this);
}
_s(BillingHistoryDropdown, "2s4xBZsIq2gJE9zekRn/d6icaV4=");
_c = BillingHistoryDropdown;
export default function BillingSection({ restaurant, onPlanUpgraded, id }) {
  _s2();
  const currentPlan = restaurant?.subscription_plan || "trial";
  const expiresAt = restaurant?.subscription_expires_at;
  const isExpired = expiresAt && new Date(expiresAt) < /* @__PURE__ */ new Date();
  const daysRemaining = expiresAt ? Math.ceil((new Date(expiresAt) - /* @__PURE__ */ new Date()) / (1e3 * 60 * 60 * 24)) : null;
  const [isYearly, setIsYearly] = useState(false);
  const [isUpgrading, setIsUpgrading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showUpgradeDialog, setShowUpgradeDialog] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const { toast } = useToast();
  const currentTier = PLAN_HIERARCHY[currentPlan] ?? 0;
  const availablePlans = plans.filter((p) => PLAN_HIERARCHY[p.id] > currentTier);
  const isPro = currentPlan === "pro";
  const isMultiOutlet = currentPlan === "multi_outlet";
  const handleUpgradeClick = (plan) => {
    setPaymentError(null);
    setSelectedPlan(plan);
    setShowUpgradeDialog(true);
  };
  const getPrice = (plan) => isYearly ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice;
  const getTotalCharge = (plan) => isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const initRazorpay = () => {
    return new Promise((resolve, reject) => {
      if (window.Razorpay) return resolve();
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = resolve;
      script.onerror = () => reject(new Error("Failed to load Razorpay SDK"));
      document.body.appendChild(script);
    });
  };
  const confirmUpgrade = async () => {
    if (!selectedPlan) return;
    setIsUpgrading(true);
    setPaymentError(null);
    let razorpayKey = restaurant?.razorpay_key_id;
    if (!razorpayKey) {
      try {
        const settings = await base44.entities.PlatformSettings.filter({ key: "razorpay_key_id" });
        if (settings.length > 0) razorpayKey = settings[0].value;
      } catch (e) {
      }
    }
    if (!razorpayKey) {
      setPaymentError("Payment gateway is not configured. Please contact support.");
      setIsUpgrading(false);
      return;
    }
    try {
      await initRazorpay();
    } catch (e) {
      setPaymentError("Failed to load payment SDK. Check your internet connection and try again.");
      setIsUpgrading(false);
      return;
    }
    const newPlanId = selectedPlan.id;
    const amount = getTotalCharge(selectedPlan);
    const billingCycle = isYearly ? "yearly" : "monthly";
    setShowUpgradeDialog(false);
    setSelectedPlan(selectedPlan);
    await new Promise((resolve) => setTimeout(resolve, 400));
    const options = {
      key: razorpayKey,
      amount: amount * 100,
      currency: "INR",
      name: "RestroSaathi",
      description: `${selectedPlan.name} Plan – ${billingCycle}`,
      handler: async function(response) {
        setIsUpgrading(true);
        try {
          const expirationDate = isYearly ? addYears(/* @__PURE__ */ new Date(), 1) : addMonths(/* @__PURE__ */ new Date(), 1);
          const expiresAtStr = expirationDate.toISOString().split("T")[0];
          await base44.entities.BillingTransaction.create({
            restaurant_id: restaurant.restaurant_id,
            transaction_id: response.razorpay_payment_id || "manual",
            plan_name: selectedPlan.name,
            amount,
            billing_cycle: billingCycle,
            status: "success",
            previous_plan: currentPlan,
            expires_at: expiresAtStr
          });
          await base44.entities.Restaurant.update(restaurant.id, {
            subscription_plan: newPlanId,
            subscription_status: "active",
            subscription_expires_at: expiresAtStr,
            features_enabled: planFeatureMap[newPlanId]
          });
          setIsUpgrading(false);
          toast({
            title: "Plan Upgraded Successfully! 🎉",
            description: `You're now on ${selectedPlan.name}. Refreshing...`,
            duration: 3e3
          });
          if (onPlanUpgraded) {
            await onPlanUpgraded();
          }
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        } catch (e) {
          console.error("Payment success but update failed:", e);
          setIsUpgrading(false);
          toast({
            title: "Payment Successful",
            description: `Payment ID: ${response.razorpay_payment_id}. Your plan will be updated shortly. If not, contact support with this payment ID.`,
            duration: 8e3
          });
          if (onPlanUpgraded) {
            setTimeout(() => onPlanUpgraded(), 2e3);
          }
        }
      },
      prefill: {
        name: restaurant?.name || "",
        email: restaurant?.email || "",
        contact: restaurant?.phone || ""
      },
      theme: { color: "#ea580c" },
      modal: {
        ondismiss: function() {
          setIsUpgrading(false);
          setSelectedPlan(null);
        },
        escape: true,
        confirm_close: true,
        backdropclose: false,
        handleback: true,
        animation: true
      }
    };
    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", async function(response) {
      const errMsg = response.error?.description || "Payment failed. Please try again.";
      setIsUpgrading(false);
      try {
        await base44.entities.BillingTransaction.create({
          restaurant_id: restaurant.restaurant_id,
          transaction_id: response.error?.metadata?.payment_id || "failed",
          plan_name: selectedPlan.name,
          amount,
          billing_cycle: billingCycle,
          status: "failed",
          previous_plan: currentPlan
        });
      } catch (_) {
      }
      toast({
        title: "Payment Failed",
        description: errMsg,
        variant: "destructive",
        duration: 5e3
      });
    });
    try {
      rzp.open();
    } catch (err) {
      console.error("Failed to open Razorpay:", err);
      setIsUpgrading(false);
      setShowUpgradeDialog(true);
      setPaymentError("Failed to open payment window. Please refresh and try again.");
      toast({
        title: "Error",
        description: "Could not open payment window. Please try again.",
        variant: "destructive"
      });
    }
  };
  const currentPlanData = plans.find((p) => p.id === currentPlan);
  return /* @__PURE__ */ jsxDEV(motion.div, { "data-source-location": "components/dashboard/BillingSection:380:4", "data-dynamic-content": "true", initial: { opacity: 0 }, animate: { opacity: 1 }, className: "space-y-4 sm:space-y-6", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:382:6", "data-dynamic-content": "true", className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:383:8", "data-dynamic-content": "false", children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "components/dashboard/BillingSection:384:10", "data-dynamic-content": "false", className: "text-lg sm:text-xl font-bold text-gray-900", children: "Billing & Subscription" }, void 0, false, {
          fileName: "/app/src/components/dashboard/BillingSection.jsx",
          lineNumber: 403,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/BillingSection:385:10", "data-dynamic-content": "false", className: "text-gray-500 text-xs sm:text-sm", children: "Manage your plan and billing details" }, void 0, false, {
          fileName: "/app/src/components/dashboard/BillingSection.jsx",
          lineNumber: 404,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/BillingSection.jsx",
        lineNumber: 402,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(BillingHistoryDropdown, { "data-source-location": "components/dashboard/BillingSection:387:8", "data-dynamic-content": "true", restaurantId: restaurant?.restaurant_id }, void 0, false, {
        fileName: "/app/src/components/dashboard/BillingSection.jsx",
        lineNumber: 406,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/BillingSection.jsx",
      lineNumber: 401,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/BillingSection:391:6", "data-dynamic-content": "true", className: `${isExpired ? "border-red-300 bg-red-50" : "border-orange-200 bg-orange-50"}`, children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/BillingSection:392:8", "data-dynamic-content": "true", className: "p-4 sm:p-6", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:393:10", "data-dynamic-content": "true", className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:394:12", "data-dynamic-content": "true", className: "flex items-center gap-3 sm:gap-4", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:395:14", "data-dynamic-content": "true", className: `w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${isExpired ? "bg-red-100" : "bg-orange-100"}`, children: currentPlan === "trial" ? /* @__PURE__ */ jsxDEV(Sparkles, { "data-source-location": "components/dashboard/BillingSection:397:20", "data-dynamic-content": "true", className: `w-6 h-6 sm:w-7 sm:h-7 ${isExpired ? "text-red-600" : "text-orange-600"}` }, void 0, false, {
            fileName: "/app/src/components/dashboard/BillingSection.jsx",
            lineNumber: 416,
            columnNumber: 17
          }, this) : /* @__PURE__ */ jsxDEV(Crown, { "data-source-location": "components/dashboard/BillingSection:398:20", "data-dynamic-content": "true", className: `w-6 h-6 sm:w-7 sm:h-7 ${isExpired ? "text-red-600" : "text-orange-600"}` }, void 0, false, {
            fileName: "/app/src/components/dashboard/BillingSection.jsx",
            lineNumber: 417,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/BillingSection.jsx",
            lineNumber: 414,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:401:14", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:402:16", "data-dynamic-content": "true", className: "flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "components/dashboard/BillingSection:403:18", "data-dynamic-content": "true", className: "text-base sm:text-xl font-bold capitalize", children: [
                currentPlan === "multi_outlet" ? "Multi-Outlet" : currentPlan,
                " Plan"
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/BillingSection.jsx",
                lineNumber: 422,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "components/dashboard/BillingSection:406:18", "data-dynamic-content": "true", className: isExpired ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700", children: isExpired ? "Expired" : "Active" }, void 0, false, {
                fileName: "/app/src/components/dashboard/BillingSection.jsx",
                lineNumber: 425,
                columnNumber: 19
              }, this),
              isMultiOutlet && /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "components/dashboard/BillingSection:410:20", "data-dynamic-content": "false", className: "bg-purple-100 text-purple-700", children: [
                /* @__PURE__ */ jsxDEV(Crown, { "data-source-location": "components/dashboard/BillingSection:411:22", "data-dynamic-content": "false", className: "w-3 h-3 mr-1" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/BillingSection.jsx",
                  lineNumber: 430,
                  columnNumber: 23
                }, this),
                " Highest Plan"
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/BillingSection.jsx",
                lineNumber: 429,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/BillingSection.jsx",
              lineNumber: 421,
              columnNumber: 17
            }, this),
            expiresAt && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/BillingSection:416:18", "data-dynamic-content": "true", className: `text-sm mt-1 ${isExpired ? "text-red-600" : "text-gray-600"}`, children: isExpired ? `Expired on ${format(new Date(expiresAt), "MMM d, yyyy")}` : `Expires ${format(new Date(expiresAt), "MMM d, yyyy")} · ${daysRemaining} days left` }, void 0, false, {
              fileName: "/app/src/components/dashboard/BillingSection.jsx",
              lineNumber: 435,
              columnNumber: 17
            }, this),
            currentPlan === "trial" && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/BillingSection:424:18", "data-dynamic-content": "false", className: "text-sm text-orange-700 mt-1", children: "Free 14-day trial. Upgrade anytime." }, void 0, false, {
              fileName: "/app/src/components/dashboard/BillingSection.jsx",
              lineNumber: 443,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/BillingSection.jsx",
            lineNumber: 420,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/BillingSection.jsx",
          lineNumber: 413,
          columnNumber: 13
        }, this),
        !isMultiOutlet && /* @__PURE__ */ jsxDEV(
          Button,
          {
            "data-source-location": "components/dashboard/BillingSection:429:14",
            "data-dynamic-content": "true",
            className: "bg-gradient-to-r from-orange-600 to-orange-500 w-full sm:w-auto",
            size: "sm",
            onClick: () => handleUpgradeClick(availablePlans[0]),
            children: [
              /* @__PURE__ */ jsxDEV(TrendingUp, { "data-source-location": "components/dashboard/BillingSection:434:16", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
                fileName: "/app/src/components/dashboard/BillingSection.jsx",
                lineNumber: 453,
                columnNumber: 17
              }, this),
              isPro ? "Upgrade to Multi-Outlet" : "Upgrade Plan"
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/src/components/dashboard/BillingSection.jsx",
            lineNumber: 448,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/BillingSection.jsx",
        lineNumber: 412,
        columnNumber: 11
      }, this),
      daysRemaining !== null && daysRemaining <= 7 && daysRemaining > 0 && !isExpired && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:441:12", "data-dynamic-content": "true", className: "mt-4 p-3 bg-amber-100 border border-amber-200 rounded-lg flex items-start gap-3", children: [
        /* @__PURE__ */ jsxDEV(AlertCircle, { "data-source-location": "components/dashboard/BillingSection:442:14", "data-dynamic-content": "false", className: "w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" }, void 0, false, {
          fileName: "/app/src/components/dashboard/BillingSection.jsx",
          lineNumber: 461,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/BillingSection:443:14", "data-dynamic-content": "true", className: "text-sm text-amber-800", children: [
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/BillingSection:444:16", "data-dynamic-content": "true", className: "font-medium", "data-collection-item-field": "daysRemaining", "data-collection-item-id": id, children: [
            "Plan expires in ",
            daysRemaining,
            " days!"
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/BillingSection.jsx",
            lineNumber: 463,
            columnNumber: 17
          }, this),
          " Upgrade now to avoid interruption."
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/BillingSection.jsx",
          lineNumber: 462,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/BillingSection.jsx",
        lineNumber: 460,
        columnNumber: 11
      }, this),
      isExpired && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:449:12", "data-dynamic-content": "false", className: "mt-4 p-3 bg-red-100 border border-red-200 rounded-lg flex items-start gap-3", children: [
        /* @__PURE__ */ jsxDEV(AlertCircle, { "data-source-location": "components/dashboard/BillingSection:450:14", "data-dynamic-content": "false", className: "w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" }, void 0, false, {
          fileName: "/app/src/components/dashboard/BillingSection.jsx",
          lineNumber: 469,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/BillingSection:451:14", "data-dynamic-content": "false", className: "text-sm text-red-800", children: [
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/BillingSection:452:16", "data-dynamic-content": "false", className: "font-medium", children: "Your subscription has expired." }, void 0, false, {
            fileName: "/app/src/components/dashboard/BillingSection.jsx",
            lineNumber: 471,
            columnNumber: 17
          }, this),
          " Upgrade to restore access to all features."
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/BillingSection.jsx",
          lineNumber: 470,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/BillingSection.jsx",
        lineNumber: 468,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/BillingSection.jsx",
      lineNumber: 411,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/components/dashboard/BillingSection.jsx",
      lineNumber: 410,
      columnNumber: 7
    }, this),
    !isMultiOutlet && /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:462:10", "data-dynamic-content": "true", className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "components/dashboard/BillingSection:463:12", "data-dynamic-content": "true", className: "text-lg font-bold text-gray-900", children: isPro ? "Available Upgrade" : "Upgrade Your Plan" }, void 0, false, {
          fileName: "/app/src/components/dashboard/BillingSection.jsx",
          lineNumber: 482,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:466:12", "data-dynamic-content": "true", className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/BillingSection:467:14", "data-dynamic-content": "true", className: `text-sm ${!isYearly ? "text-gray-900 font-medium" : "text-gray-500"}`, children: "Monthly" }, void 0, false, {
            fileName: "/app/src/components/dashboard/BillingSection.jsx",
            lineNumber: 486,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Switch, { "data-source-location": "components/dashboard/BillingSection:468:14", "data-dynamic-content": "true", checked: isYearly, onCheckedChange: setIsYearly }, void 0, false, {
            fileName: "/app/src/components/dashboard/BillingSection.jsx",
            lineNumber: 487,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/BillingSection:469:14", "data-dynamic-content": "true", className: `text-sm ${isYearly ? "text-gray-900 font-medium" : "text-gray-500"}`, children: "Yearly" }, void 0, false, {
            fileName: "/app/src/components/dashboard/BillingSection.jsx",
            lineNumber: 488,
            columnNumber: 15
          }, this),
          isYearly && /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "components/dashboard/BillingSection:470:27", "data-dynamic-content": "false", className: "bg-green-100 text-green-700", children: "Save ~17%" }, void 0, false, {
            fileName: "/app/src/components/dashboard/BillingSection.jsx",
            lineNumber: 489,
            columnNumber: 28
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/BillingSection.jsx",
          lineNumber: 485,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/BillingSection.jsx",
        lineNumber: 481,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:474:10", "data-dynamic-content": "true", className: `grid gap-4 sm:gap-6 ${availablePlans.length === 1 ? "md:grid-cols-1 max-w-sm" : availablePlans.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`, children: availablePlans.map(
        (plan) => /* @__PURE__ */ jsxDEV(
          Card,
          {
            "data-source-location": "components/dashboard/BillingSection:476:14",
            "data-dynamic-content": "true",
            className: `relative ${plan.popular ? "border-2 border-orange-400 shadow-lg" : ""}`,
            "data-collection-item-id": plan?.id,
            "data-collection-item-field": "popular",
            children: [
              plan.popular && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:481:18", "data-dynamic-content": "false", className: "absolute -top-3 left-1/2 -translate-x-1/2", children: /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "components/dashboard/BillingSection:482:20", "data-dynamic-content": "false", className: "bg-orange-600 text-white", children: [
                /* @__PURE__ */ jsxDEV(Crown, { "data-source-location": "components/dashboard/BillingSection:483:22", "data-dynamic-content": "false", className: "w-3 h-3 mr-1" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/BillingSection.jsx",
                  lineNumber: 502,
                  columnNumber: 23
                }, this),
                " Most Popular"
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/BillingSection.jsx",
                lineNumber: 501,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/app/src/components/dashboard/BillingSection.jsx",
                lineNumber: 500,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/BillingSection:487:16", "data-dynamic-content": "true", className: "p-6", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:488:18", "data-dynamic-content": "true", className: "flex items-center justify-between mb-2", children: /* @__PURE__ */ jsxDEV("h4", { "data-source-location": "components/dashboard/BillingSection:489:20", "data-dynamic-content": "true", className: "font-bold text-xl text-gray-900", "data-collection-item-field": "name", "data-collection-item-id": plan?.id, children: plan.name }, void 0, false, {
                  fileName: "/app/src/components/dashboard/BillingSection.jsx",
                  lineNumber: 508,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "/app/src/components/dashboard/BillingSection.jsx",
                  lineNumber: 507,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:491:18", "data-dynamic-content": "true", className: "mt-2 mb-4", children: [
                  /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/BillingSection:492:20", "data-dynamic-content": "true", className: "text-4xl font-bold text-gray-900", children: [
                    "₹",
                    getPrice(plan)
                  ] }, void 0, true, {
                    fileName: "/app/src/components/dashboard/BillingSection.jsx",
                    lineNumber: 511,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/BillingSection:493:20", "data-dynamic-content": "false", className: "text-gray-500 text-sm", children: "/month" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/BillingSection.jsx",
                    lineNumber: 512,
                    columnNumber: 21
                  }, this),
                  isYearly && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/BillingSection:495:22", "data-dynamic-content": "true", className: "text-xs text-green-600 mt-1", "data-collection-item-field": "yearlyPrice", "data-collection-item-id": plan?.id, children: [
                    "Billed ₹",
                    plan.yearlyPrice,
                    "/year"
                  ] }, void 0, true, {
                    fileName: "/app/src/components/dashboard/BillingSection.jsx",
                    lineNumber: 514,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/BillingSection.jsx",
                  lineNumber: 510,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("ul", { "data-source-location": "components/dashboard/BillingSection:499:18", "data-dynamic-content": "true", className: "space-y-2 mb-4", "data-collection-item-field": "features", "data-collection-item-id": plan?.id, children: [
                  plan.features.map(
                    (f) => /* @__PURE__ */ jsxDEV("li", { "data-source-location": "components/dashboard/BillingSection:501:22", "data-dynamic-content": "true", className: "flex items-start gap-2 text-sm", children: [
                      /* @__PURE__ */ jsxDEV(Check, { "data-source-location": "components/dashboard/BillingSection:502:24", "data-dynamic-content": "false", className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }, void 0, false, {
                        fileName: "/app/src/components/dashboard/BillingSection.jsx",
                        lineNumber: 521,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/BillingSection:503:24", "data-dynamic-content": "true", className: "text-gray-700", "data-collection-item-field": "f", children: f }, void 0, false, {
                        fileName: "/app/src/components/dashboard/BillingSection.jsx",
                        lineNumber: 522,
                        columnNumber: 25
                      }, this)
                    ] }, f, true, {
                      fileName: "/app/src/components/dashboard/BillingSection.jsx",
                      lineNumber: 520,
                      columnNumber: 17
                    }, this)
                  ),
                  plan.notIncluded.map(
                    (f) => /* @__PURE__ */ jsxDEV("li", { "data-source-location": "components/dashboard/BillingSection:507:22", "data-dynamic-content": "true", className: "flex items-start gap-2 text-sm text-gray-400", "data-collection-item-field": "f", children: [
                      /* @__PURE__ */ jsxDEV(X, { "data-source-location": "components/dashboard/BillingSection:508:24", "data-dynamic-content": "false", className: "w-4 h-4 mt-0.5 flex-shrink-0" }, void 0, false, {
                        fileName: "/app/src/components/dashboard/BillingSection.jsx",
                        lineNumber: 527,
                        columnNumber: 25
                      }, this),
                      f
                    ] }, f, true, {
                      fileName: "/app/src/components/dashboard/BillingSection.jsx",
                      lineNumber: 526,
                      columnNumber: 17
                    }, this)
                  )
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/BillingSection.jsx",
                  lineNumber: 518,
                  columnNumber: 19
                }, this),
                plan.addons.length > 0 && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:515:20", "data-dynamic-content": "true", className: "mb-4 pt-3 border-t", "data-collection-item-field": "addons", "data-collection-item-id": plan?.id, children: [
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/BillingSection:516:22", "data-dynamic-content": "false", className: "text-xs text-gray-500 mb-2", children: "Optional add-ons:" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/BillingSection.jsx",
                    lineNumber: 535,
                    columnNumber: 23
                  }, this),
                  plan.addons.map(
                    (a) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:518:24", "data-dynamic-content": "true", className: "flex justify-between text-xs mb-1", children: [
                      /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/BillingSection:519:26", "data-dynamic-content": "true", className: "text-gray-600", "data-collection-item-field": "name", "data-collection-item-id": a?.id, children: a.name }, void 0, false, {
                        fileName: "/app/src/components/dashboard/BillingSection.jsx",
                        lineNumber: 538,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/BillingSection:520:26", "data-dynamic-content": "true", className: "text-gray-500", "data-collection-item-field": "price", "data-collection-item-id": a?.id, children: [
                        "+₹",
                        a.price,
                        "/mo"
                      ] }, void 0, true, {
                        fileName: "/app/src/components/dashboard/BillingSection.jsx",
                        lineNumber: 539,
                        columnNumber: 27
                      }, this)
                    ] }, a.name, true, {
                      fileName: "/app/src/components/dashboard/BillingSection.jsx",
                      lineNumber: 537,
                      columnNumber: 17
                    }, this)
                  )
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/BillingSection.jsx",
                  lineNumber: 534,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV(
                  Button,
                  {
                    "data-source-location": "components/dashboard/BillingSection:526:18",
                    "data-dynamic-content": "true",
                    className: `w-full ${plan.popular ? "bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600" : ""}`,
                    variant: plan.popular ? "default" : "outline",
                    onClick: () => handleUpgradeClick(plan),
                    disabled: isUpgrading,
                    "data-collection-item-field": "name",
                    "data-collection-item-id": plan?.id,
                    children: [
                      "Upgrade to ",
                      plan.name,
                      /* @__PURE__ */ jsxDEV(ArrowRight, { "data-source-location": "components/dashboard/BillingSection:533:20", "data-dynamic-content": "false", className: "w-4 h-4 ml-2" }, void 0, false, {
                        fileName: "/app/src/components/dashboard/BillingSection.jsx",
                        lineNumber: 552,
                        columnNumber: 21
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/src/components/dashboard/BillingSection.jsx",
                    lineNumber: 545,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/BillingSection.jsx",
                lineNumber: 506,
                columnNumber: 17
              }, this)
            ]
          },
          plan.id,
          true,
          {
            fileName: "/app/src/components/dashboard/BillingSection.jsx",
            lineNumber: 495,
            columnNumber: 11
          },
          this
        )
      ) }, void 0, false, {
        fileName: "/app/src/components/dashboard/BillingSection.jsx",
        lineNumber: 493,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/BillingSection.jsx",
      lineNumber: 480,
      columnNumber: 7
    }, this),
    isMultiOutlet && /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/BillingSection:544:8", "data-dynamic-content": "false", className: "border-purple-200 bg-purple-50", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/BillingSection:545:10", "data-dynamic-content": "false", className: "p-6 text-center", children: [
      /* @__PURE__ */ jsxDEV(Crown, { "data-source-location": "components/dashboard/BillingSection:546:12", "data-dynamic-content": "false", className: "w-10 h-10 text-purple-600 mx-auto mb-3" }, void 0, false, {
        fileName: "/app/src/components/dashboard/BillingSection.jsx",
        lineNumber: 565,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("h4", { "data-source-location": "components/dashboard/BillingSection:547:12", "data-dynamic-content": "false", className: "font-bold text-lg text-purple-900", children: "You're on the highest plan!" }, void 0, false, {
        fileName: "/app/src/components/dashboard/BillingSection.jsx",
        lineNumber: 566,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/BillingSection:548:12", "data-dynamic-content": "false", className: "text-purple-700 text-sm mt-1", children: "Multi-Outlet includes all available features. No further upgrades needed." }, void 0, false, {
        fileName: "/app/src/components/dashboard/BillingSection.jsx",
        lineNumber: 567,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/BillingSection.jsx",
      lineNumber: 564,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/src/components/dashboard/BillingSection.jsx",
      lineNumber: 563,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Dialog, { "data-source-location": "components/dashboard/BillingSection:554:6", "data-dynamic-content": "true", open: showUpgradeDialog, onOpenChange: (open) => {
      if (!isUpgrading) {
        setShowUpgradeDialog(open);
        if (!open) setPaymentError(null);
      }
    }, children: /* @__PURE__ */ jsxDEV(DialogContent, { "data-source-location": "components/dashboard/BillingSection:560:8", "data-dynamic-content": "true", children: [
      /* @__PURE__ */ jsxDEV(DialogHeader, { "data-source-location": "components/dashboard/BillingSection:561:10", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV(DialogTitle, { "data-source-location": "components/dashboard/BillingSection:562:12", "data-dynamic-content": "true", "data-collection-item-field": "name", "data-collection-item-id": selectedPlan?.id || selectedPlan?._id, children: [
          "Upgrade to ",
          selectedPlan?.name,
          " Plan"
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/BillingSection.jsx",
          lineNumber: 581,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(DialogDescription, { "data-source-location": "components/dashboard/BillingSection:563:12", "data-dynamic-content": "false", children: "Review your order and confirm payment" }, void 0, false, {
          fileName: "/app/src/components/dashboard/BillingSection.jsx",
          lineNumber: 582,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/BillingSection.jsx",
        lineNumber: 580,
        columnNumber: 11
      }, this),
      selectedPlan && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:567:12", "data-dynamic-content": "true", className: "space-y-4", children: [
        paymentError && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:570:16", "data-dynamic-content": "true", className: "bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3", children: [
          /* @__PURE__ */ jsxDEV(AlertTriangle, { "data-source-location": "components/dashboard/BillingSection:571:18", "data-dynamic-content": "false", className: "w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" }, void 0, false, {
            fileName: "/app/src/components/dashboard/BillingSection.jsx",
            lineNumber: 590,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:572:18", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/BillingSection:573:20", "data-dynamic-content": "false", className: "font-medium text-red-800 text-sm", children: "Payment Error" }, void 0, false, {
              fileName: "/app/src/components/dashboard/BillingSection.jsx",
              lineNumber: 592,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/BillingSection:574:20", "data-dynamic-content": "true", className: "text-xs text-red-700 mt-1", "data-collection-item-field": "paymentError", "data-collection-item-id": id, children: paymentError }, void 0, false, {
              fileName: "/app/src/components/dashboard/BillingSection.jsx",
              lineNumber: 593,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/BillingSection.jsx",
            lineNumber: 591,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/BillingSection.jsx",
          lineNumber: 589,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:579:14", "data-dynamic-content": "true", className: "bg-orange-50 border border-orange-200 rounded-lg p-4 space-y-3", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:580:16", "data-dynamic-content": "true", className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/BillingSection:581:18", "data-dynamic-content": "true", className: "font-bold text-lg text-gray-900", "data-collection-item-field": "name", "data-collection-item-id": selectedPlan?.id || selectedPlan?._id, children: [
              selectedPlan.name,
              " Plan"
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/BillingSection.jsx",
              lineNumber: 600,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:582:18", "data-dynamic-content": "true", className: "text-right", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:583:20", "data-dynamic-content": "true", className: "text-2xl font-bold text-orange-600", children: [
                "₹",
                getTotalCharge(selectedPlan)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/BillingSection.jsx",
                lineNumber: 602,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:584:20", "data-dynamic-content": "true", className: "text-xs text-gray-500", children: [
                "per ",
                isYearly ? "year" : "month"
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/BillingSection.jsx",
                lineNumber: 603,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/BillingSection.jsx",
              lineNumber: 601,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/BillingSection.jsx",
            lineNumber: 599,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/BillingSection:587:16", "data-dynamic-content": "true", className: "text-xs text-gray-600 flex gap-2", children: [
            /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "components/dashboard/BillingSection:588:18", "data-dynamic-content": "true", className: "bg-orange-100 text-orange-700 capitalize", children: isYearly ? "Yearly billing" : "Monthly billing" }, void 0, false, {
              fileName: "/app/src/components/dashboard/BillingSection.jsx",
              lineNumber: 607,
              columnNumber: 19
            }, this),
            isYearly && /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "components/dashboard/BillingSection:589:31", "data-dynamic-content": "true", className: "bg-green-100 text-green-700", children: [
              "Save ₹",
              selectedPlan.monthlyPrice * 12 - selectedPlan.yearlyPrice
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/BillingSection.jsx",
              lineNumber: 608,
              columnNumber: 32
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/BillingSection.jsx",
            lineNumber: 606,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { "data-source-location": "components/dashboard/BillingSection:591:16", "data-dynamic-content": "true", className: "space-y-1", "data-collection-id": "plan", children: selectedPlan.features.slice(0, 4).map(
            (f, i) => /* @__PURE__ */ jsxDEV("li", { "data-source-location": "components/dashboard/BillingSection:593:20", "data-dynamic-content": "true", className: "flex items-center gap-2 text-sm text-gray-600", "data-collection-item-field": "f", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle, { "data-source-location": "components/dashboard/BillingSection:594:22", "data-dynamic-content": "false", className: "w-3 h-3 text-green-500" }, void 0, false, {
                fileName: "/app/src/components/dashboard/BillingSection.jsx",
                lineNumber: 613,
                columnNumber: 23
              }, this),
              " ",
              f
            ] }, i, true, {
              fileName: "/app/src/components/dashboard/BillingSection.jsx",
              lineNumber: 612,
              columnNumber: 17
            }, this)
          ) }, void 0, false, {
            fileName: "/app/src/components/dashboard/BillingSection.jsx",
            lineNumber: 610,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/BillingSection.jsx",
          lineNumber: 598,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/BillingSection:600:14", "data-dynamic-content": "true", className: "text-xs text-gray-500", children: [
          "You will be charged ₹",
          getTotalCharge(selectedPlan),
          " ",
          isYearly ? "for the year" : "for this month",
          ". Your plan upgrades instantly after payment."
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/BillingSection.jsx",
          lineNumber: 619,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/BillingSection.jsx",
        lineNumber: 586,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(DialogFooter, { "data-source-location": "components/dashboard/BillingSection:606:10", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV(
          Button,
          {
            "data-source-location": "components/dashboard/BillingSection:607:12",
            "data-dynamic-content": "true",
            variant: "outline",
            onClick: () => {
              setShowUpgradeDialog(false);
              setPaymentError(null);
            },
            disabled: isUpgrading,
            children: "Cancel"
          },
          void 0,
          false,
          {
            fileName: "/app/src/components/dashboard/BillingSection.jsx",
            lineNumber: 626,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          Button,
          {
            "data-source-location": "components/dashboard/BillingSection:614:12",
            "data-dynamic-content": "true",
            onClick: confirmUpgrade,
            disabled: isUpgrading,
            className: "bg-gradient-to-r from-orange-600 to-orange-500",
            children: isUpgrading ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
              /* @__PURE__ */ jsxDEV(Loader2, { "data-source-location": "components/dashboard/BillingSection:620:18", "data-dynamic-content": "false", className: "w-4 h-4 mr-2 animate-spin" }, void 0, false, {
                fileName: "/app/src/components/dashboard/BillingSection.jsx",
                lineNumber: 639,
                columnNumber: 17
              }, this),
              " Processing..."
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/BillingSection.jsx",
              lineNumber: 639,
              columnNumber: 15
            }, this) : paymentError ? "Retry Payment" : "Proceed to Payment"
          },
          void 0,
          false,
          {
            fileName: "/app/src/components/dashboard/BillingSection.jsx",
            lineNumber: 633,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/BillingSection.jsx",
        lineNumber: 625,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/BillingSection.jsx",
      lineNumber: 579,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/components/dashboard/BillingSection.jsx",
      lineNumber: 573,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/dashboard/BillingSection.jsx",
    lineNumber: 399,
    columnNumber: 5
  }, this);
}
_s2(BillingSection, "MxRpM6yOB7q/MHobArV0g0BNQD8=", false, function() {
  return [useToast];
});
_c2 = BillingSection;
var _c, _c2;
$RefreshReg$(_c, "BillingHistoryDropdown");
$RefreshReg$(_c2, "BillingSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/dashboard/BillingSection.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/dashboard/BillingSection.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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LFVBQUM7QUFBQTtBQUFBLFlBQU8sd0JBQXFCO0FBQUEsWUFBNkMsd0JBQXFCO0FBQUEsWUFDL0YsU0FBU2tDO0FBQUFBLFlBQ1QsVUFBVWxDO0FBQUFBLFlBQ1YsV0FBVTtBQUFBLFlBRVBBLHdCQUNELG1DQUFFO0FBQUEscUNBQUMsV0FBUSx3QkFBcUIsOENBQTZDLHdCQUFxQixTQUFRLFdBQVUsK0JBQWxIO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTZJO0FBQUEsY0FBRztBQUFBLGlCQUFsSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFnSyxJQUNoS00sZUFDQSxrQkFFQTtBQUFBO0FBQUEsVUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFZQTtBQUFBLFdBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFxQkE7QUFBQSxTQW5FRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBb0VBLEtBMUVGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0EyRUE7QUFBQSxPQXpQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBMFBBO0FBRUo7QUFBQ2pCLElBN2N1QkgsZ0JBQWM7QUFBQSxVQWFsQnRELFFBQVE7QUFBQTtBQUFBbUssTUFiSjdHO0FBQWMsSUFBQUQsSUFBQThHO0FBQUFDLGFBQUEvRyxJQUFBO0FBQUErRyxhQUFBRCxLQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIkNyZWRpdENhcmQiLCJDYWxlbmRhciIsIkNoZWNrQ2lyY2xlIiwiQWxlcnRDaXJjbGUiLCJBcnJvd1JpZ2h0IiwiQ3Jvd24iLCJMb2FkZXIyIiwiWCIsIkNoZWNrIiwiSGlzdG9yeSIsIkNoZXZyb25Eb3duIiwiU3BhcmtsZXMiLCJUcmVuZGluZ1VwIiwiUmVjZWlwdCIsIkFsZXJ0VHJpYW5nbGUiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiQnV0dG9uIiwiQmFkZ2UiLCJTd2l0Y2giLCJEaWFsb2ciLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nSGVhZGVyIiwiRGlhbG9nVGl0bGUiLCJEaWFsb2dEZXNjcmlwdGlvbiIsIkRpYWxvZ0Zvb3RlciIsIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duTWVudUNvbnRlbnQiLCJEcm9wZG93bk1lbnVUcmlnZ2VyIiwiYmFzZTQ0IiwidXNlVG9hc3QiLCJmb3JtYXQiLCJhZGRNb250aHMiLCJhZGRZZWFycyIsIlBMQU5fSElFUkFSQ0hZIiwidHJpYWwiLCJiYXNpYyIsInBybyIsIm11bHRpX291dGxldCIsInBsYW5zIiwiaWQiLCJuYW1lIiwibW9udGhseVByaWNlIiwieWVhcmx5UHJpY2UiLCJmZWF0dXJlcyIsIm5vdEluY2x1ZGVkIiwiYWRkb25zIiwicHJpY2UiLCJwb3B1bGFyIiwicGxhbkZlYXR1cmVNYXAiLCJxcl9vcmRlcmluZyIsImN1c3RvbV9icmFuZGluZyIsImN1c3RvbWVyX2FuYWx5dGljcyIsInBheW1lbnRfaW50ZWdyYXRpb24iLCJkZWxpdmVyeSIsInRha2Vhd2F5IiwiQmlsbGluZ0hpc3RvcnlEcm9wZG93biIsInJlc3RhdXJhbnRJZCIsIl9zIiwidHJhbnNhY3Rpb25zIiwic2V0VHJhbnNhY3Rpb25zIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvcGVuIiwic2V0T3BlbiIsImxvYWRUcmFuc2FjdGlvbnMiLCJ0eG5zIiwiZW50aXRpZXMiLCJCaWxsaW5nVHJhbnNhY3Rpb24iLCJmaWx0ZXIiLCJyZXN0YXVyYW50X2lkIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImxlbmd0aCIsIm1hcCIsInR4biIsInN0YXR1cyIsInBsYW5fbmFtZSIsImNyZWF0ZWRfZGF0ZSIsIkRhdGUiLCJiaWxsaW5nX2N5Y2xlIiwiYW1vdW50IiwiX2MiLCJCaWxsaW5nU2VjdGlvbiIsInJlc3RhdXJhbnQiLCJvblBsYW5VcGdyYWRlZCIsIl9zMiIsImN1cnJlbnRQbGFuIiwic3Vic2NyaXB0aW9uX3BsYW4iLCJleHBpcmVzQXQiLCJzdWJzY3JpcHRpb25fZXhwaXJlc19hdCIsImlzRXhwaXJlZCIsImRheXNSZW1haW5pbmciLCJNYXRoIiwiY2VpbCIsImlzWWVhcmx5Iiwic2V0SXNZZWFybHkiLCJpc1VwZ3JhZGluZyIsInNldElzVXBncmFkaW5nIiwic2VsZWN0ZWRQbGFuIiwic2V0U2VsZWN0ZWRQbGFuIiwic2hvd1VwZ3JhZGVEaWFsb2ciLCJzZXRTaG93VXBncmFkZURpYWxvZyIsInBheW1lbnRFcnJvciIsInNldFBheW1lbnRFcnJvciIsInRvYXN0IiwiY3VycmVudFRpZXIiLCJhdmFpbGFibGVQbGFucyIsInAiLCJpc1BybyIsImlzTXVsdGlPdXRsZXQiLCJoYW5kbGVVcGdyYWRlQ2xpY2siLCJwbGFuIiwiZ2V0UHJpY2UiLCJyb3VuZCIsImdldFRvdGFsQ2hhcmdlIiwiaW5pdFJhem9ycGF5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ3aW5kb3ciLCJSYXpvcnBheSIsInNjcmlwdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsIm9ubG9hZCIsIm9uZXJyb3IiLCJFcnJvciIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNvbmZpcm1VcGdyYWRlIiwicmF6b3JwYXlLZXkiLCJyYXpvcnBheV9rZXlfaWQiLCJzZXR0aW5ncyIsIlBsYXRmb3JtU2V0dGluZ3MiLCJrZXkiLCJ2YWx1ZSIsIm5ld1BsYW5JZCIsImJpbGxpbmdDeWNsZSIsInNldFRpbWVvdXQiLCJvcHRpb25zIiwiY3VycmVuY3kiLCJkZXNjcmlwdGlvbiIsImhhbmRsZXIiLCJyZXNwb25zZSIsImV4cGlyYXRpb25EYXRlIiwiZXhwaXJlc0F0U3RyIiwidG9JU09TdHJpbmciLCJzcGxpdCIsImNyZWF0ZSIsInRyYW5zYWN0aW9uX2lkIiwicmF6b3JwYXlfcGF5bWVudF9pZCIsInByZXZpb3VzX3BsYW4iLCJleHBpcmVzX2F0IiwiUmVzdGF1cmFudCIsInVwZGF0ZSIsInN1YnNjcmlwdGlvbl9zdGF0dXMiLCJmZWF0dXJlc19lbmFibGVkIiwidGl0bGUiLCJkdXJhdGlvbiIsImxvY2F0aW9uIiwicmVsb2FkIiwicHJlZmlsbCIsImVtYWlsIiwiY29udGFjdCIsInBob25lIiwidGhlbWUiLCJjb2xvciIsIm1vZGFsIiwib25kaXNtaXNzIiwiZXNjYXBlIiwiY29uZmlybV9jbG9zZSIsImJhY2tkcm9wY2xvc2UiLCJoYW5kbGViYWNrIiwiYW5pbWF0aW9uIiwicnpwIiwib24iLCJlcnJNc2ciLCJtZXRhZGF0YSIsInBheW1lbnRfaWQiLCJfIiwidmFyaWFudCIsImVyciIsImN1cnJlbnRQbGFuRGF0YSIsImZpbmQiLCJvcGFjaXR5IiwiZiIsImEiLCJfaWQiLCJzbGljZSIsImkiLCJfYzIiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQmlsbGluZ1NlY3Rpb24uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQge1xuICBDcmVkaXRDYXJkLCBDYWxlbmRhciwgQ2hlY2tDaXJjbGUsIEFsZXJ0Q2lyY2xlLCBBcnJvd1JpZ2h0LFxuICBDcm93biwgTG9hZGVyMiwgWCwgQ2hlY2ssIEhpc3RvcnksIENoZXZyb25Eb3duLCBTcGFya2xlcyxcbiAgVHJlbmRpbmdVcCwgUmVjZWlwdCwgQWxlcnRUcmlhbmdsZSB9IGZyb21cblwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgQmFkZ2UgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2JhZGdlXCI7XG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3N3aXRjaFwiO1xuaW1wb3J0IHtcbiAgRGlhbG9nLCBEaWFsb2dDb250ZW50LCBEaWFsb2dIZWFkZXIsIERpYWxvZ1RpdGxlLFxuICBEaWFsb2dEZXNjcmlwdGlvbiwgRGlhbG9nRm9vdGVyIH0gZnJvbVxuXCJAL2NvbXBvbmVudHMvdWkvZGlhbG9nXCI7XG5pbXBvcnQge1xuICBEcm9wZG93bk1lbnUsIERyb3Bkb3duTWVudUNvbnRlbnQsIERyb3Bkb3duTWVudVRyaWdnZXIgfSBmcm9tXG5cIkAvY29tcG9uZW50cy91aS9kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgeyBiYXNlNDQgfSBmcm9tIFwiQC9hcGkvYmFzZTQ0Q2xpZW50XCI7XG5pbXBvcnQgeyB1c2VUb2FzdCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdXNlLXRvYXN0XCI7XG5pbXBvcnQgeyBmb3JtYXQsIGFkZE1vbnRocywgYWRkWWVhcnMgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY29uc3QgUExBTl9ISUVSQVJDSFkgPSB7IHRyaWFsOiAwLCBiYXNpYzogMSwgcHJvOiAyLCBtdWx0aV9vdXRsZXQ6IDMgfTtcblxuY29uc3QgcGxhbnMgPSBbXG57XG4gIGlkOiBcImJhc2ljXCIsXG4gIG5hbWU6IFwiQmFzaWNcIixcbiAgbW9udGhseVByaWNlOiA5OTksXG4gIHllYXJseVByaWNlOiA5OTkwLFxuICBmZWF0dXJlczogW1xuICBcIlFSIENvZGUgT3JkZXJpbmdcIixcbiAgXCJEaWdpdGFsIE1lbnUgKERpbmUtaW4gb25seSlcIixcbiAgXCJVbmxpbWl0ZWQgbWVudSBpdGVtc1wiLFxuICBcIlVwIHRvIDI1IFRhYmxlc1wiLFxuICBcIk9yZGVyIE1hbmFnZW1lbnRcIixcbiAgXCJCYXNpYyBBbmFseXRpY3NcIixcbiAgXCJDdXN0b20gQnJhbmRpbmdcIixcbiAgXCJFbWFpbCBTdXBwb3J0XCJdLFxuXG4gIG5vdEluY2x1ZGVkOiBbXCJEaXJlY3QgUGF5bWVudHNcIiwgXCJNdWx0aS1PdXRsZXRcIiwgXCJEZWxpdmVyeVwiLCBcIlRha2Vhd2F5XCJdLFxuICBhZGRvbnM6IFt7IG5hbWU6IFwiRGVsaXZlcnlcIiwgcHJpY2U6IDI5OSB9LCB7IG5hbWU6IFwiVGFrZWF3YXlcIiwgcHJpY2U6IDE5OSB9XVxufSxcbntcbiAgaWQ6IFwicHJvXCIsXG4gIG5hbWU6IFwiUHJvXCIsXG4gIG1vbnRobHlQcmljZTogMTk5OSxcbiAgeWVhcmx5UHJpY2U6IDE5OTkwLFxuICBmZWF0dXJlczogW1xuICBcIkV2ZXJ5dGhpbmcgaW4gQmFzaWNcIixcbiAgXCJVbmxpbWl0ZWQgVGFibGVzXCIsXG4gIFwiRGlyZWN0IFBheW1lbnRzXCIsXG4gIFwiQWR2YW5jZWQgQW5hbHl0aWNzXCIsXG4gIFwiUHJpb3JpdHkgU3VwcG9ydFwiLFxuICBcIkN1c3RvbWVyIERhdGFiYXNlXCIsXG4gIFwiRGVsaXZlcnkgJiBUYWtlYXdheVwiXSxcblxuICBub3RJbmNsdWRlZDogW1wiTXVsdGktT3V0bGV0XCJdLFxuICBhZGRvbnM6IFtdLFxuICBwb3B1bGFyOiB0cnVlXG59LFxue1xuICBpZDogXCJtdWx0aV9vdXRsZXRcIixcbiAgbmFtZTogXCJNdWx0aS1PdXRsZXRcIixcbiAgbW9udGhseVByaWNlOiA0OTk5LFxuICB5ZWFybHlQcmljZTogNDk5OTAsXG4gIGZlYXR1cmVzOiBbXG4gIFwiRXZlcnl0aGluZyBpbiBQcm9cIixcbiAgXCJVcCB0byA1IE91dGxldHNcIixcbiAgXCJDZW50cmFsaXplZCBEYXNoYm9hcmRcIixcbiAgXCJMb2NhdGlvbiBBbmFseXRpY3NcIixcbiAgXCJEZWRpY2F0ZWQgU3VwcG9ydFwiLFxuICBcIkN1c3RvbSBJbnRlZ3JhdGlvbnNcIixcbiAgXCJEZWxpdmVyeSBJbmNsdWRlZFwiLFxuICBcIlRha2Vhd2F5IEluY2x1ZGVkXCJdLFxuXG4gIG5vdEluY2x1ZGVkOiBbXSxcbiAgYWRkb25zOiBbXVxufV07XG5cblxuY29uc3QgcGxhbkZlYXR1cmVNYXAgPSB7XG4gIHRyaWFsOiB7IHFyX29yZGVyaW5nOiB0cnVlLCBjdXN0b21fYnJhbmRpbmc6IGZhbHNlLCBjdXN0b21lcl9hbmFseXRpY3M6IGZhbHNlLCBwYXltZW50X2ludGVncmF0aW9uOiBmYWxzZSwgZGVsaXZlcnk6IGZhbHNlLCB0YWtlYXdheTogZmFsc2UsIG11bHRpX291dGxldDogZmFsc2UgfSxcbiAgYmFzaWM6IHsgcXJfb3JkZXJpbmc6IHRydWUsIGN1c3RvbV9icmFuZGluZzogdHJ1ZSwgY3VzdG9tZXJfYW5hbHl0aWNzOiB0cnVlLCBwYXltZW50X2ludGVncmF0aW9uOiBmYWxzZSwgZGVsaXZlcnk6IGZhbHNlLCB0YWtlYXdheTogZmFsc2UsIG11bHRpX291dGxldDogZmFsc2UgfSxcbiAgcHJvOiB7IHFyX29yZGVyaW5nOiB0cnVlLCBjdXN0b21fYnJhbmRpbmc6IHRydWUsIGN1c3RvbWVyX2FuYWx5dGljczogdHJ1ZSwgcGF5bWVudF9pbnRlZ3JhdGlvbjogdHJ1ZSwgZGVsaXZlcnk6IHRydWUsIHRha2Vhd2F5OiB0cnVlLCBtdWx0aV9vdXRsZXQ6IGZhbHNlIH0sXG4gIG11bHRpX291dGxldDogeyBxcl9vcmRlcmluZzogdHJ1ZSwgY3VzdG9tX2JyYW5kaW5nOiB0cnVlLCBjdXN0b21lcl9hbmFseXRpY3M6IHRydWUsIHBheW1lbnRfaW50ZWdyYXRpb246IHRydWUsIGRlbGl2ZXJ5OiB0cnVlLCB0YWtlYXdheTogdHJ1ZSwgbXVsdGlfb3V0bGV0OiB0cnVlIH1cbn07XG5cbmZ1bmN0aW9uIEJpbGxpbmdIaXN0b3J5RHJvcGRvd24oeyByZXN0YXVyYW50SWQgfSkge1xuICBjb25zdCBbdHJhbnNhY3Rpb25zLCBzZXRUcmFuc2FjdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBsb2FkVHJhbnNhY3Rpb25zID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghcmVzdGF1cmFudElkKSByZXR1cm47XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdHhucyA9IGF3YWl0IGJhc2U0NC5lbnRpdGllcy5CaWxsaW5nVHJhbnNhY3Rpb24uZmlsdGVyKFxuICAgICAgICB7IHJlc3RhdXJhbnRfaWQ6IHJlc3RhdXJhbnRJZCB9LFxuICAgICAgICBcIi1jcmVhdGVkX2RhdGVcIixcbiAgICAgICAgMTBcbiAgICAgICk7XG4gICAgICBzZXRUcmFuc2FjdGlvbnModHhucyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAob3BlbikgbG9hZFRyYW5zYWN0aW9ucygpO1xuICB9LCBbb3Blbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPERyb3Bkb3duTWVudSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjExNTo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgb3Blbj17b3Blbn0gb25PcGVuQ2hhbmdlPXtzZXRPcGVufT5cbiAgICAgIDxEcm9wZG93bk1lbnVUcmlnZ2VyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246MTE2OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgYXNDaGlsZD5cbiAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjExNzo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHZhcmlhbnQ9XCJvdXRsaW5lXCIgc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICA8SGlzdG9yeSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjExODoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICBCaWxsaW5nIEhpc3RvcnlcbiAgICAgICAgICA8Q2hldnJvbkRvd24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjoxMjA6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0zIGgtMyBtbC0xXCIgLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0Ryb3Bkb3duTWVudVRyaWdnZXI+XG4gICAgICA8RHJvcGRvd25NZW51Q29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjEyMzo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgYWxpZ249XCJlbmRcIiBjbGFzc05hbWU9XCJ3LTgwIHAtMFwiIHNpZGVPZmZzZXQ9ezh9PlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246MTI0OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwicC00IGJvcmRlci1iXCI+XG4gICAgICAgICAgPGg0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246MTI1OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPlJlY2VudCBCaWxsaW5nIEFjdGl2aXR5PC9oND5cbiAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjEyNjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDAgbXQtMC41XCI+TGFzdCAxMCB0cmFuc2FjdGlvbnM8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246MTI4OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtYXgtaC04MCBvdmVyZmxvdy15LWF1dG9cIiBkYXRhLWNvbGxlY3Rpb24taWQ9XCJCaWxsaW5nVHJhbnNhY3Rpb25cIj5cbiAgICAgICAgICB7bG9hZGluZyA/XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjEzMDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS04XCI+XG4gICAgICAgICAgICAgIDxMb2FkZXIyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246MTMxOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTUgYW5pbWF0ZS1zcGluIHRleHQtZ3JheS00MDBcIiAvPlxuICAgICAgICAgICAgPC9kaXY+IDpcbiAgICAgICAgICB0cmFuc2FjdGlvbnMubGVuZ3RoID09PSAwID9cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246MTM0OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInB5LTggdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICA8UmVjZWlwdCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjEzNToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTggaC04IG14LWF1dG8gbWItMiB0ZXh0LWdyYXktMzAwXCIgLz5cbiAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjoxMzY6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbVwiPk5vIHRyYW5zYWN0aW9ucyB5ZXQ8L3A+XG4gICAgICAgICAgICA8L2Rpdj4gOlxuXG4gICAgICAgICAgdHJhbnNhY3Rpb25zLm1hcCgodHhuKSA9PlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjoxNDA6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e3R4bi5pZH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcHgtNCBweS0zIGJvcmRlci1iIGxhc3Q6Ym9yZGVyLTAgaG92ZXI6YmctZ3JheS01MFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXt0eG4/LmlkfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246MTQxOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgdy04IGgtOCByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1zaHJpbmstMCAke3R4bi5zdGF0dXMgPT09ICdzdWNjZXNzJyA/ICdiZy1ncmVlbi0xMDAnIDogJ2JnLXJlZC0xMDAnfWB9PlxuICAgICAgICAgICAgICAgICAge3R4bi5zdGF0dXMgPT09ICdzdWNjZXNzJyA/XG4gICAgICAgICAgICAgIDxDaGVja0NpcmNsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjE0MzoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtZ3JlZW4tNjAwXCIgLz4gOlxuICAgICAgICAgICAgICA8QWxlcnRUcmlhbmdsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjE0NDoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtcmVkLTUwMFwiIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246MTQ3OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleC0xIG1pbi13LTBcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246MTQ4OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIHRydW5jYXRlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJwbGFuX25hbWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17dHhuPy5pZH0+e3R4bi5wbGFuX25hbWV9IFBsYW48L3A+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjE0OToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiYmlsbGluZ19jeWNsZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXt0eG4/LmlkfT5cbiAgICAgICAgICAgICAgICAgICAge3R4bi5jcmVhdGVkX2RhdGUgPyBmb3JtYXQobmV3IERhdGUodHhuLmNyZWF0ZWRfZGF0ZSksICdNTU0gZCwgeXl5eScpIDogJ04vQSd9XG4gICAgICAgICAgICAgICAgICAgIHt0eG4uYmlsbGluZ19jeWNsZSAmJiBgIMK3ICR7dHhuLmJpbGxpbmdfY3ljbGV9YH1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246MTU0OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjoxNTU6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgJHt0eG4uc3RhdHVzID09PSAnc3VjY2VzcycgPyAndGV4dC1ncmF5LTkwMCcgOiAndGV4dC1yZWQtNTAwJ31gfSBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImFtb3VudFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXt0eG4/LmlkfT5cbiAgICAgICAgICAgICAgICAgICAg4oK5e3R4bi5hbW91bnR9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8QmFkZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjoxNTg6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B0ZXh0LXhzICR7dHhuLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnID8gJ2JnLWdyZWVuLTEwMCB0ZXh0LWdyZWVuLTcwMCcgOiAnYmctcmVkLTEwMCB0ZXh0LXJlZC03MDAnfWB9IGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwic3RhdHVzXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3R4bj8uaWR9PlxuICAgICAgICAgICAgICAgICAgICB7dHhuLnN0YXR1c31cbiAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Ecm9wZG93bk1lbnVDb250ZW50PlxuICAgIDwvRHJvcGRvd25NZW51Pik7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmlsbGluZ1NlY3Rpb24oeyByZXN0YXVyYW50LCBvblBsYW5VcGdyYWRlZCwgaWQgfSkge1xuICBjb25zdCBjdXJyZW50UGxhbiA9IHJlc3RhdXJhbnQ/LnN1YnNjcmlwdGlvbl9wbGFuIHx8ICd0cmlhbCc7XG4gIGNvbnN0IGV4cGlyZXNBdCA9IHJlc3RhdXJhbnQ/LnN1YnNjcmlwdGlvbl9leHBpcmVzX2F0O1xuICBjb25zdCBpc0V4cGlyZWQgPSBleHBpcmVzQXQgJiYgbmV3IERhdGUoZXhwaXJlc0F0KSA8IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGRheXNSZW1haW5pbmcgPSBleHBpcmVzQXQgP1xuICBNYXRoLmNlaWwoKG5ldyBEYXRlKGV4cGlyZXNBdCkgLSBuZXcgRGF0ZSgpKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSkgOlxuICBudWxsO1xuXG4gIGNvbnN0IFtpc1llYXJseSwgc2V0SXNZZWFybHldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNVcGdyYWRpbmcsIHNldElzVXBncmFkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlbGVjdGVkUGxhbiwgc2V0U2VsZWN0ZWRQbGFuXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc2hvd1VwZ3JhZGVEaWFsb2csIHNldFNob3dVcGdyYWRlRGlhbG9nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3BheW1lbnRFcnJvciwgc2V0UGF5bWVudEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCB7IHRvYXN0IH0gPSB1c2VUb2FzdCgpO1xuXG4gIC8vIEZpbHRlciBwbGFuczogaGlkZSBwbGFucyB0aGF0IGFyZSBsb3dlciBvciBlcXVhbCB0aWVyIHRoYW4gY3VycmVudCBwbGFuXG4gIGNvbnN0IGN1cnJlbnRUaWVyID0gUExBTl9ISUVSQVJDSFlbY3VycmVudFBsYW5dID8/IDA7XG4gIGNvbnN0IGF2YWlsYWJsZVBsYW5zID0gcGxhbnMuZmlsdGVyKChwKSA9PiBQTEFOX0hJRVJBUkNIWVtwLmlkXSA+IGN1cnJlbnRUaWVyKTtcbiAgLy8gSWYgYWxyZWFkeSBvbiBQcm8sIG5vIHVwZ3JhZGUgcGxhbnMgYXJlIHNob3duIChvbmx5IG11bHRpX291dGxldCBpZiBub3Qgb24gaXQpXG4gIGNvbnN0IGlzUHJvID0gY3VycmVudFBsYW4gPT09ICdwcm8nO1xuICBjb25zdCBpc011bHRpT3V0bGV0ID0gY3VycmVudFBsYW4gPT09ICdtdWx0aV9vdXRsZXQnO1xuXG4gIGNvbnN0IGhhbmRsZVVwZ3JhZGVDbGljayA9IChwbGFuKSA9PiB7XG4gICAgc2V0UGF5bWVudEVycm9yKG51bGwpO1xuICAgIHNldFNlbGVjdGVkUGxhbihwbGFuKTtcbiAgICBzZXRTaG93VXBncmFkZURpYWxvZyh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBnZXRQcmljZSA9IChwbGFuKSA9PiBpc1llYXJseSA/IE1hdGgucm91bmQocGxhbi55ZWFybHlQcmljZSAvIDEyKSA6IHBsYW4ubW9udGhseVByaWNlO1xuICBjb25zdCBnZXRUb3RhbENoYXJnZSA9IChwbGFuKSA9PiBpc1llYXJseSA/IHBsYW4ueWVhcmx5UHJpY2UgOiBwbGFuLm1vbnRobHlQcmljZTtcblxuICBjb25zdCBpbml0UmF6b3JwYXkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuUmF6b3JwYXkpIHJldHVybiByZXNvbHZlKCk7XG4gICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9jaGVja291dC5yYXpvcnBheS5jb20vdjEvY2hlY2tvdXQuanMnO1xuICAgICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICBzY3JpcHQub25lcnJvciA9ICgpID0+IHJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBSYXpvcnBheSBTREtcIikpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNvbmZpcm1VcGdyYWRlID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghc2VsZWN0ZWRQbGFuKSByZXR1cm47XG4gICAgc2V0SXNVcGdyYWRpbmcodHJ1ZSk7XG4gICAgc2V0UGF5bWVudEVycm9yKG51bGwpO1xuXG4gICAgLy8gVmVyaWZ5IFJhem9ycGF5IGtleVxuICAgIGxldCByYXpvcnBheUtleSA9IHJlc3RhdXJhbnQ/LnJhem9ycGF5X2tleV9pZDtcbiAgICBpZiAoIXJhem9ycGF5S2V5KSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IGJhc2U0NC5lbnRpdGllcy5QbGF0Zm9ybVNldHRpbmdzLmZpbHRlcih7IGtleTogJ3Jhem9ycGF5X2tleV9pZCcgfSk7XG4gICAgICAgIGlmIChzZXR0aW5ncy5sZW5ndGggPiAwKSByYXpvcnBheUtleSA9IHNldHRpbmdzWzBdLnZhbHVlO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG5cbiAgICBpZiAoIXJhem9ycGF5S2V5KSB7XG4gICAgICBzZXRQYXltZW50RXJyb3IoXCJQYXltZW50IGdhdGV3YXkgaXMgbm90IGNvbmZpZ3VyZWQuIFBsZWFzZSBjb250YWN0IHN1cHBvcnQuXCIpO1xuICAgICAgc2V0SXNVcGdyYWRpbmcoZmFsc2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBpbml0UmF6b3JwYXkoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBzZXRQYXltZW50RXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBwYXltZW50IFNESy4gQ2hlY2sgeW91ciBpbnRlcm5ldCBjb25uZWN0aW9uIGFuZCB0cnkgYWdhaW4uXCIpO1xuICAgICAgc2V0SXNVcGdyYWRpbmcoZmFsc2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld1BsYW5JZCA9IHNlbGVjdGVkUGxhbi5pZDtcbiAgICBjb25zdCBhbW91bnQgPSBnZXRUb3RhbENoYXJnZShzZWxlY3RlZFBsYW4pO1xuICAgIGNvbnN0IGJpbGxpbmdDeWNsZSA9IGlzWWVhcmx5ID8gJ3llYXJseScgOiAnbW9udGhseSc7XG5cbiAgICAvLyBDbG9zZSB0aGUgZGlhbG9nIEJFRk9SRSBvcGVuaW5nIFJhem9ycGF5IHRvIHByZXZlbnQgei1pbmRleCBjb25mbGljdHNcbiAgICBzZXRTaG93VXBncmFkZURpYWxvZyhmYWxzZSk7XG4gICAgc2V0U2VsZWN0ZWRQbGFuKHNlbGVjdGVkUGxhbik7IC8vIFByZXNlcnZlIHBsYW4gc2VsZWN0aW9uXG5cbiAgICAvLyBTbWFsbCBkZWxheSB0byBlbnN1cmUgZGlhbG9nIGZ1bGx5IGNsb3NlcyBhbmQgRE9NIHVwZGF0ZXNcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCA0MDApKTtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBrZXk6IHJhem9ycGF5S2V5LFxuICAgICAgYW1vdW50OiBhbW91bnQgKiAxMDAsXG4gICAgICBjdXJyZW5jeTogJ0lOUicsXG4gICAgICBuYW1lOiAnUmVzdHJvU2FhdGhpJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBgJHtzZWxlY3RlZFBsYW4ubmFtZX0gUGxhbiDigJMgJHtiaWxsaW5nQ3ljbGV9YCxcbiAgICAgIGhhbmRsZXI6IGFzeW5jIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBzZXRJc1VwZ3JhZGluZyh0cnVlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBleHBpcmF0aW9uRGF0ZSA9IGlzWWVhcmx5ID8gYWRkWWVhcnMobmV3IERhdGUoKSwgMSkgOiBhZGRNb250aHMobmV3IERhdGUoKSwgMSk7XG4gICAgICAgICAgY29uc3QgZXhwaXJlc0F0U3RyID0gZXhwaXJhdGlvbkRhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xuXG4gICAgICAgICAgLy8gRmlyc3QgcmVjb3JkIHN1Y2Nlc3NmdWwgcGF5bWVudFxuICAgICAgICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5CaWxsaW5nVHJhbnNhY3Rpb24uY3JlYXRlKHtcbiAgICAgICAgICAgIHJlc3RhdXJhbnRfaWQ6IHJlc3RhdXJhbnQucmVzdGF1cmFudF9pZCxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uX2lkOiByZXNwb25zZS5yYXpvcnBheV9wYXltZW50X2lkIHx8ICdtYW51YWwnLFxuICAgICAgICAgICAgcGxhbl9uYW1lOiBzZWxlY3RlZFBsYW4ubmFtZSxcbiAgICAgICAgICAgIGFtb3VudDogYW1vdW50LFxuICAgICAgICAgICAgYmlsbGluZ19jeWNsZTogYmlsbGluZ0N5Y2xlLFxuICAgICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgICAgICBwcmV2aW91c19wbGFuOiBjdXJyZW50UGxhbixcbiAgICAgICAgICAgIGV4cGlyZXNfYXQ6IGV4cGlyZXNBdFN0clxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gVGhlbiB1cGRhdGUgcmVzdGF1cmFudCBwbGFuXG4gICAgICAgICAgYXdhaXQgYmFzZTQ0LmVudGl0aWVzLlJlc3RhdXJhbnQudXBkYXRlKHJlc3RhdXJhbnQuaWQsIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbl9wbGFuOiBuZXdQbGFuSWQsXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25fc3RhdHVzOiAnYWN0aXZlJyxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbl9leHBpcmVzX2F0OiBleHBpcmVzQXRTdHIsXG4gICAgICAgICAgICBmZWF0dXJlc19lbmFibGVkOiBwbGFuRmVhdHVyZU1hcFtuZXdQbGFuSWRdXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBzZXRJc1VwZ3JhZGluZyhmYWxzZSk7XG5cbiAgICAgICAgICB0b2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogXCJQbGFuIFVwZ3JhZGVkIFN1Y2Nlc3NmdWxseSEg8J+OiVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGBZb3UncmUgbm93IG9uICR7c2VsZWN0ZWRQbGFuLm5hbWV9LiBSZWZyZXNoaW5nLi4uYCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBSZWxvYWQgcmVzdGF1cmFudCBkYXRhIGFuZCByZWZyZXNoIHBhZ2VcbiAgICAgICAgICBpZiAob25QbGFuVXBncmFkZWQpIHtcbiAgICAgICAgICAgIGF3YWl0IG9uUGxhblVwZ3JhZGVkKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRm9yY2UgcGFnZSByZWxvYWQgdG8gc2hvdyB1cGRhdGVkIHBsYW5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1BheW1lbnQgc3VjY2VzcyBidXQgdXBkYXRlIGZhaWxlZDonLCBlKTtcbiAgICAgICAgICBzZXRJc1VwZ3JhZGluZyhmYWxzZSk7XG5cbiAgICAgICAgICB0b2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogXCJQYXltZW50IFN1Y2Nlc3NmdWxcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgUGF5bWVudCBJRDogJHtyZXNwb25zZS5yYXpvcnBheV9wYXltZW50X2lkfS4gWW91ciBwbGFuIHdpbGwgYmUgdXBkYXRlZCBzaG9ydGx5LiBJZiBub3QsIGNvbnRhY3Qgc3VwcG9ydCB3aXRoIHRoaXMgcGF5bWVudCBJRC5gLFxuICAgICAgICAgICAgZHVyYXRpb246IDgwMDBcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIFN0aWxsIHRyeSB0byByZWZyZXNoXG4gICAgICAgICAgaWYgKG9uUGxhblVwZ3JhZGVkKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG9uUGxhblVwZ3JhZGVkKCksIDIwMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByZWZpbGw6IHtcbiAgICAgICAgbmFtZTogcmVzdGF1cmFudD8ubmFtZSB8fCAnJyxcbiAgICAgICAgZW1haWw6IHJlc3RhdXJhbnQ/LmVtYWlsIHx8ICcnLFxuICAgICAgICBjb250YWN0OiByZXN0YXVyYW50Py5waG9uZSB8fCAnJ1xuICAgICAgfSxcbiAgICAgIHRoZW1lOiB7IGNvbG9yOiAnI2VhNTgwYycgfSxcbiAgICAgIG1vZGFsOiB7XG4gICAgICAgIG9uZGlzbWlzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNldElzVXBncmFkaW5nKGZhbHNlKTtcbiAgICAgICAgICBzZXRTZWxlY3RlZFBsYW4obnVsbCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVzY2FwZTogdHJ1ZSxcbiAgICAgICAgY29uZmlybV9jbG9zZTogdHJ1ZSxcbiAgICAgICAgYmFja2Ryb3BjbG9zZTogZmFsc2UsXG4gICAgICAgIGhhbmRsZWJhY2s6IHRydWUsXG4gICAgICAgIGFuaW1hdGlvbjogdHJ1ZVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByenAgPSBuZXcgd2luZG93LlJhem9ycGF5KG9wdGlvbnMpO1xuXG4gICAgcnpwLm9uKCdwYXltZW50LmZhaWxlZCcsIGFzeW5jIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgY29uc3QgZXJyTXNnID0gcmVzcG9uc2UuZXJyb3I/LmRlc2NyaXB0aW9uIHx8IFwiUGF5bWVudCBmYWlsZWQuIFBsZWFzZSB0cnkgYWdhaW4uXCI7XG4gICAgICBzZXRJc1VwZ3JhZGluZyhmYWxzZSk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5CaWxsaW5nVHJhbnNhY3Rpb24uY3JlYXRlKHtcbiAgICAgICAgICByZXN0YXVyYW50X2lkOiByZXN0YXVyYW50LnJlc3RhdXJhbnRfaWQsXG4gICAgICAgICAgdHJhbnNhY3Rpb25faWQ6IHJlc3BvbnNlLmVycm9yPy5tZXRhZGF0YT8ucGF5bWVudF9pZCB8fCAnZmFpbGVkJyxcbiAgICAgICAgICBwbGFuX25hbWU6IHNlbGVjdGVkUGxhbi5uYW1lLFxuICAgICAgICAgIGFtb3VudDogYW1vdW50LFxuICAgICAgICAgIGJpbGxpbmdfY3ljbGU6IGJpbGxpbmdDeWNsZSxcbiAgICAgICAgICBzdGF0dXM6ICdmYWlsZWQnLFxuICAgICAgICAgIHByZXZpb3VzX3BsYW46IGN1cnJlbnRQbGFuXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoXykge31cblxuICAgICAgdG9hc3Qoe1xuICAgICAgICB0aXRsZTogXCJQYXltZW50IEZhaWxlZFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogZXJyTXNnLFxuICAgICAgICB2YXJpYW50OiBcImRlc3RydWN0aXZlXCIsXG4gICAgICAgIGR1cmF0aW9uOiA1MDAwXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICByenAub3BlbigpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIG9wZW4gUmF6b3JwYXk6JywgZXJyKTtcbiAgICAgIHNldElzVXBncmFkaW5nKGZhbHNlKTtcbiAgICAgIHNldFNob3dVcGdyYWRlRGlhbG9nKHRydWUpO1xuICAgICAgc2V0UGF5bWVudEVycm9yKFwiRmFpbGVkIHRvIG9wZW4gcGF5bWVudCB3aW5kb3cuIFBsZWFzZSByZWZyZXNoIGFuZCB0cnkgYWdhaW4uXCIpO1xuICAgICAgdG9hc3Qoe1xuICAgICAgICB0aXRsZTogXCJFcnJvclwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDb3VsZCBub3Qgb3BlbiBwYXltZW50IHdpbmRvdy4gUGxlYXNlIHRyeSBhZ2Fpbi5cIixcbiAgICAgICAgdmFyaWFudDogXCJkZXN0cnVjdGl2ZVwiXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY3VycmVudFBsYW5EYXRhID0gcGxhbnMuZmluZCgocCkgPT4gcC5pZCA9PT0gY3VycmVudFBsYW4pO1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjozODA6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fSBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX0gY2xhc3NOYW1lPVwic3BhY2UteS00IHNtOnNwYWNlLXktNlwiPlxuICAgICAgey8qIEhlYWRlciB3aXRoIEJpbGxpbmcgSGlzdG9yeSAqL31cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjozODI6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgaXRlbXMtc3RhcnQgc206aXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtM1wiPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246MzgzOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgPGgyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246Mzg0OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtbGcgc206dGV4dC14bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMFwiPkJpbGxpbmcgJiBTdWJzY3JpcHRpb248L2gyPlxuICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246Mzg1OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgdGV4dC14cyBzbTp0ZXh0LXNtXCI+TWFuYWdlIHlvdXIgcGxhbiBhbmQgYmlsbGluZyBkZXRhaWxzPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEJpbGxpbmdIaXN0b3J5RHJvcGRvd24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjozODc6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHJlc3RhdXJhbnRJZD17cmVzdGF1cmFudD8ucmVzdGF1cmFudF9pZH0gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogQ3VycmVudCBQbGFuIENhcmQgKi99XG4gICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjM5MTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgJHtpc0V4cGlyZWQgPyAnYm9yZGVyLXJlZC0zMDAgYmctcmVkLTUwJyA6ICdib3JkZXItb3JhbmdlLTIwMCBiZy1vcmFuZ2UtNTAnfWB9PlxuICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjozOTI6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtNCBzbTpwLTZcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246MzkzOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBzbTppdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0zIHNtOmdhcC00XCI+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246Mzk0OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgc206Z2FwLTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjM5NToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YHctMTIgaC0xMiBzbTp3LTE0IHNtOmgtMTQgcm91bmRlZC14bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LXNocmluay0wICR7aXNFeHBpcmVkID8gJ2JnLXJlZC0xMDAnIDogJ2JnLW9yYW5nZS0xMDAnfWB9PlxuICAgICAgICAgICAgICAgIHtjdXJyZW50UGxhbiA9PT0gJ3RyaWFsJyA/XG4gICAgICAgICAgICAgICAgPFNwYXJrbGVzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246Mzk3OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgdy02IGgtNiBzbTp3LTcgc206aC03ICR7aXNFeHBpcmVkID8gJ3RleHQtcmVkLTYwMCcgOiAndGV4dC1vcmFuZ2UtNjAwJ31gfSAvPiA6XG4gICAgICAgICAgICAgICAgPENyb3duIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246Mzk4OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgdy02IGgtNiBzbTp3LTcgc206aC03ICR7aXNFeHBpcmVkID8gJ3RleHQtcmVkLTYwMCcgOiAndGV4dC1vcmFuZ2UtNjAwJ31gfSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjo0MDE6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NDAyOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICA8aDMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjo0MDM6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2Ugc206dGV4dC14bCBmb250LWJvbGQgY2FwaXRhbGl6ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFBsYW4gPT09ICdtdWx0aV9vdXRsZXQnID8gJ011bHRpLU91dGxldCcgOiBjdXJyZW50UGxhbn0gUGxhblxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxCYWRnZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjQwNjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17aXNFeHBpcmVkID8gJ2JnLXJlZC0xMDAgdGV4dC1yZWQtNzAwJyA6ICdiZy1ncmVlbi0xMDAgdGV4dC1ncmVlbi03MDAnfT5cbiAgICAgICAgICAgICAgICAgICAge2lzRXhwaXJlZCA/ICdFeHBpcmVkJyA6ICdBY3RpdmUnfVxuICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgICAgICAgIHtpc011bHRpT3V0bGV0ICYmXG4gICAgICAgICAgICAgICAgICA8QmFkZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjo0MTA6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYmctcHVycGxlLTEwMCB0ZXh0LXB1cnBsZS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q3Jvd24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjo0MTE6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0zIGgtMyBtci0xXCIgLz4gSGlnaGVzdCBQbGFuXG4gICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge2V4cGlyZXNBdCAmJlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NDE2OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgdGV4dC1zbSBtdC0xICR7aXNFeHBpcmVkID8gJ3RleHQtcmVkLTYwMCcgOiAndGV4dC1ncmF5LTYwMCd9YH0+XG4gICAgICAgICAgICAgICAgICAgIHtpc0V4cGlyZWQgP1xuICAgICAgICAgICAgICAgICAgYEV4cGlyZWQgb24gJHtmb3JtYXQobmV3IERhdGUoZXhwaXJlc0F0KSwgJ01NTSBkLCB5eXl5Jyl9YCA6XG4gICAgICAgICAgICAgICAgICBgRXhwaXJlcyAke2Zvcm1hdChuZXcgRGF0ZShleHBpcmVzQXQpLCAnTU1NIGQsIHl5eXknKX0gwrcgJHtkYXlzUmVtYWluaW5nfSBkYXlzIGxlZnRgXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtjdXJyZW50UGxhbiA9PT0gJ3RyaWFsJyAmJlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NDI0OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1vcmFuZ2UtNzAwIG10LTFcIj5GcmVlIDE0LWRheSB0cmlhbC4gVXBncmFkZSBhbnl0aW1lLjwvcD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7IWlzTXVsdGlPdXRsZXQgJiZcbiAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjo0Mjk6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLW9yYW5nZS02MDAgdG8tb3JhbmdlLTUwMCB3LWZ1bGwgc206dy1hdXRvXCJcbiAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVVcGdyYWRlQ2xpY2soYXZhaWxhYmxlUGxhbnNbMF0pfT5cblxuICAgICAgICAgICAgICAgIDxUcmVuZGluZ1VwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NDM0OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgbXItMlwiIC8+XG4gICAgICAgICAgICAgICAge2lzUHJvID8gJ1VwZ3JhZGUgdG8gTXVsdGktT3V0bGV0JyA6ICdVcGdyYWRlIFBsYW4nfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHtkYXlzUmVtYWluaW5nICE9PSBudWxsICYmIGRheXNSZW1haW5pbmcgPD0gNyAmJiBkYXlzUmVtYWluaW5nID4gMCAmJiAhaXNFeHBpcmVkICYmXG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjQ0MToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm10LTQgcC0zIGJnLWFtYmVyLTEwMCBib3JkZXIgYm9yZGVyLWFtYmVyLTIwMCByb3VuZGVkLWxnIGZsZXggaXRlbXMtc3RhcnQgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgPEFsZXJ0Q2lyY2xlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NDQyOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1hbWJlci02MDAgZmxleC1zaHJpbmstMCBtdC0wLjVcIiAvPlxuICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjQ0MzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1hbWJlci04MDBcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjQ0NDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJkYXlzUmVtYWluaW5nXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2lkfT5QbGFuIGV4cGlyZXMgaW4ge2RheXNSZW1haW5pbmd9IGRheXMhPC9zcGFuPiBVcGdyYWRlIG5vdyB0byBhdm9pZCBpbnRlcnJ1cHRpb24uXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgICB7aXNFeHBpcmVkICYmXG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjQ0OToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJtdC00IHAtMyBiZy1yZWQtMTAwIGJvcmRlciBib3JkZXItcmVkLTIwMCByb3VuZGVkLWxnIGZsZXggaXRlbXMtc3RhcnQgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgPEFsZXJ0Q2lyY2xlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NDUwOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1yZWQtNjAwIGZsZXgtc2hyaW5rLTAgbXQtMC41XCIgLz5cbiAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjo0NTE6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXJlZC04MDBcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjQ1MjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPllvdXIgc3Vic2NyaXB0aW9uIGhhcyBleHBpcmVkLjwvc3Bhbj4gVXBncmFkZSB0byByZXN0b3JlIGFjY2VzcyB0byBhbGwgZmVhdHVyZXMuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDwvQ2FyZD5cblxuICAgICAgey8qIFBsYW4gc2VsZWN0aW9uIOKAkyBoaWRlIGlmIG9uIE11bHRpLU91dGxldCAoaGlnaGVzdCBwbGFuKSAqL31cbiAgICAgIHshaXNNdWx0aU91dGxldCAmJlxuICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NDYyOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8aDMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjo0NjM6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgIHtpc1BybyA/ICdBdmFpbGFibGUgVXBncmFkZScgOiAnVXBncmFkZSBZb3VyIFBsYW4nfVxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjo0NjY6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjQ2NzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YHRleHQtc20gJHshaXNZZWFybHkgPyAndGV4dC1ncmF5LTkwMCBmb250LW1lZGl1bScgOiAndGV4dC1ncmF5LTUwMCd9YH0+TW9udGhseTwvc3Bhbj5cbiAgICAgICAgICAgICAgPFN3aXRjaCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjQ2ODoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNoZWNrZWQ9e2lzWWVhcmx5fSBvbkNoZWNrZWRDaGFuZ2U9e3NldElzWWVhcmx5fSAvPlxuICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjQ2OToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YHRleHQtc20gJHtpc1llYXJseSA/ICd0ZXh0LWdyYXktOTAwIGZvbnQtbWVkaXVtJyA6ICd0ZXh0LWdyYXktNTAwJ31gfT5ZZWFybHk8L3NwYW4+XG4gICAgICAgICAgICAgIHtpc1llYXJseSAmJiA8QmFkZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjo0NzA6MjdcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYmctZ3JlZW4tMTAwIHRleHQtZ3JlZW4tNzAwXCI+U2F2ZSB+MTclPC9CYWRnZT59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjo0NzQ6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2BncmlkIGdhcC00IHNtOmdhcC02ICR7YXZhaWxhYmxlUGxhbnMubGVuZ3RoID09PSAxID8gJ21kOmdyaWQtY29scy0xIG1heC13LXNtJyA6IGF2YWlsYWJsZVBsYW5zLmxlbmd0aCA9PT0gMiA/ICdzbTpncmlkLWNvbHMtMicgOiAnc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMnfWB9PlxuICAgICAgICAgICAge2F2YWlsYWJsZVBsYW5zLm1hcCgocGxhbikgPT5cbiAgICAgICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjQ3NjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAga2V5PXtwbGFuLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlICR7cGxhbi5wb3B1bGFyID8gJ2JvcmRlci0yIGJvcmRlci1vcmFuZ2UtNDAwIHNoYWRvdy1sZycgOiAnJ31gfSBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cGxhbj8uaWR9IGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicG9wdWxhclwiPlxuXG4gICAgICAgICAgICAgICAge3BsYW4ucG9wdWxhciAmJlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjQ4MToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTMgbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMlwiPlxuICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjo0ODI6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYmctb3JhbmdlLTYwMCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENyb3duIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NDgzOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMyBoLTMgbXItMVwiIC8+IE1vc3QgUG9wdWxhclxuICAgICAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NDg3OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicC02XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NDg4OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NDg5OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteGwgdGV4dC1ncmF5LTkwMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwibmFtZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtwbGFuPy5pZH0+e3BsYW4ubmFtZX08L2g0PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NDkxOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibXQtMiBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NDkyOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDBcIj7igrl7Z2V0UHJpY2UocGxhbil9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjQ5MzoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQtc21cIj4vbW9udGg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtpc1llYXJseSAmJlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NDk1OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyZWVuLTYwMCBtdC0xXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJ5ZWFybHlQcmljZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtwbGFuPy5pZH0+QmlsbGVkIOKCuXtwbGFuLnllYXJseVByaWNlfS95ZWFyPC9wPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8dWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjo0OTk6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTIgbWItNFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiZmVhdHVyZXNcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cGxhbj8uaWR9PlxuICAgICAgICAgICAgICAgICAgICB7cGxhbi5mZWF0dXJlcy5tYXAoKGYpID0+XG4gICAgICAgICAgICAgICAgPGxpIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NTAxOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtmfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0yIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVjayBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjUwMjoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtZ3JlZW4tNTAwIG10LTAuNSBmbGV4LXNocmluay0wXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NTAzOjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiZlwiPntmfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHtwbGFuLm5vdEluY2x1ZGVkLm1hcCgoZikgPT5cbiAgICAgICAgICAgICAgICA8bGkgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjo1MDc6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2Z9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTIgdGV4dC1zbSB0ZXh0LWdyYXktNDAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJmXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8WCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjUwODoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IG10LTAuNSBmbGV4LXNocmluay0wXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmfVxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgIHtwbGFuLmFkZG9ucy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjo1MTU6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtYi00IHB0LTMgYm9yZGVyLXRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImFkZG9uc1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtwbGFuPy5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjo1MTY6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwIG1iLTJcIj5PcHRpb25hbCBhZGQtb25zOjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICB7cGxhbi5hZGRvbnMubWFwKChhKSA9PlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjo1MTg6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2EubmFtZX0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC14cyBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NTE5OjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwibmFtZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXthPy5pZH0+e2EubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NTIwOjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicHJpY2VcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17YT8uaWR9Pivigrl7YS5wcmljZX0vbW88L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NTI2OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsICR7cGxhbi5wb3B1bGFyID8gJ2JnLWdyYWRpZW50LXRvLXIgZnJvbS1vcmFuZ2UtNjAwIHRvLW9yYW5nZS01MDAgaG92ZXI6ZnJvbS1vcmFuZ2UtNzAwIGhvdmVyOnRvLW9yYW5nZS02MDAnIDogJyd9YH1cbiAgICAgICAgICAgICAgdmFyaWFudD17cGxhbi5wb3B1bGFyID8gJ2RlZmF1bHQnIDogJ291dGxpbmUnfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVVcGdyYWRlQ2xpY2socGxhbil9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZ3JhZGluZ30gZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJuYW1lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3BsYW4/LmlkfT5cblxuICAgICAgICAgICAgICAgICAgICBVcGdyYWRlIHRvIHtwbGFuLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDxBcnJvd1JpZ2h0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NTMzOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgbWwtMlwiIC8+XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICB9XG5cbiAgICAgIHsvKiBIaWdoZXN0IHBsYW4gbWVzc2FnZSAqL31cbiAgICAgIHtpc011bHRpT3V0bGV0ICYmXG4gICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjU0NDo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImJvcmRlci1wdXJwbGUtMjAwIGJnLXB1cnBsZS01MFwiPlxuICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjU0NToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJwLTYgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxDcm93biBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjU0NjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgdGV4dC1wdXJwbGUtNjAwIG14LWF1dG8gbWItM1wiIC8+XG4gICAgICAgICAgICA8aDQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjo1NDc6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtbGcgdGV4dC1wdXJwbGUtOTAwXCI+WW91J3JlIG9uIHRoZSBoaWdoZXN0IHBsYW4hPC9oND5cbiAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NTQ4OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtcHVycGxlLTcwMCB0ZXh0LXNtIG10LTFcIj5NdWx0aS1PdXRsZXQgaW5jbHVkZXMgYWxsIGF2YWlsYWJsZSBmZWF0dXJlcy4gTm8gZnVydGhlciB1cGdyYWRlcyBuZWVkZWQuPC9wPlxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIH1cblxuICAgICAgey8qIFVwZ3JhZGUgQ29uZmlybWF0aW9uIERpYWxvZyAqL31cbiAgICAgIDxEaWFsb2cgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjo1NTQ6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG9wZW49e3Nob3dVcGdyYWRlRGlhbG9nfSBvbk9wZW5DaGFuZ2U9eyhvcGVuKSA9PiB7XG4gICAgICAgIGlmICghaXNVcGdyYWRpbmcpIHtcbiAgICAgICAgICBzZXRTaG93VXBncmFkZURpYWxvZyhvcGVuKTtcbiAgICAgICAgICBpZiAoIW9wZW4pIHNldFBheW1lbnRFcnJvcihudWxsKTtcbiAgICAgICAgfVxuICAgICAgfX0+XG4gICAgICAgIDxEaWFsb2dDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NTYwOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICA8RGlhbG9nSGVhZGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NTYxOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICA8RGlhbG9nVGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjo1NjI6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIm5hbWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2VsZWN0ZWRQbGFuPy5pZCB8fCBzZWxlY3RlZFBsYW4/Ll9pZH0+VXBncmFkZSB0byB7c2VsZWN0ZWRQbGFuPy5uYW1lfSBQbGFuPC9EaWFsb2dUaXRsZT5cbiAgICAgICAgICAgIDxEaWFsb2dEZXNjcmlwdGlvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjU2MzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5SZXZpZXcgeW91ciBvcmRlciBhbmQgY29uZmlybSBwYXltZW50PC9EaWFsb2dEZXNjcmlwdGlvbj5cbiAgICAgICAgICA8L0RpYWxvZ0hlYWRlcj5cblxuICAgICAgICAgIHtzZWxlY3RlZFBsYW4gJiZcbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NTY3OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgIHsvKiBFcnJvciBTdGF0ZSAqL31cbiAgICAgICAgICAgICAge3BheW1lbnRFcnJvciAmJlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjU3MDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImJnLXJlZC01MCBib3JkZXIgYm9yZGVyLXJlZC0yMDAgcm91bmRlZC1sZyBwLTQgZmxleCBpdGVtcy1zdGFydCBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgPEFsZXJ0VHJpYW5nbGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjo1NzE6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LXJlZC02MDAgZmxleC1zaHJpbmstMCBtdC0wLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjU3MjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjU3MzoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LXJlZC04MDAgdGV4dC1zbVwiPlBheW1lbnQgRXJyb3I8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NTc0OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJlZC03MDAgbXQtMVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicGF5bWVudEVycm9yXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2lkfT57cGF5bWVudEVycm9yfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjo1Nzk6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJiZy1vcmFuZ2UtNTAgYm9yZGVyIGJvcmRlci1vcmFuZ2UtMjAwIHJvdW5kZWQtbGcgcC00IHNwYWNlLXktM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjo1ODA6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NTgxOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtbGcgdGV4dC1ncmF5LTkwMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwibmFtZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtzZWxlY3RlZFBsYW4/LmlkIHx8IHNlbGVjdGVkUGxhbj8uX2lkfT57c2VsZWN0ZWRQbGFuLm5hbWV9IFBsYW48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NTgyOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NTgzOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtb3JhbmdlLTYwMFwiPuKCuXtnZXRUb3RhbENoYXJnZShzZWxlY3RlZFBsYW4pfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NTg0OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+cGVyIHtpc1llYXJseSA/ICd5ZWFyJyA6ICdtb250aCd9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NTg3OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNjAwIGZsZXggZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxCYWRnZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjU4ODoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImJnLW9yYW5nZS0xMDAgdGV4dC1vcmFuZ2UtNzAwIGNhcGl0YWxpemVcIj57aXNZZWFybHkgPyAnWWVhcmx5IGJpbGxpbmcnIDogJ01vbnRobHkgYmlsbGluZyd9PC9CYWRnZT5cbiAgICAgICAgICAgICAgICAgIHtpc1llYXJseSAmJiA8QmFkZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjo1ODk6MzFcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJiZy1ncmVlbi0xMDAgdGV4dC1ncmVlbi03MDBcIj5TYXZlIOKCuXtzZWxlY3RlZFBsYW4ubW9udGhseVByaWNlICogMTIgLSBzZWxlY3RlZFBsYW4ueWVhcmx5UHJpY2V9PC9CYWRnZT59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NTkxOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS0xXCIgZGF0YS1jb2xsZWN0aW9uLWlkPVwicGxhblwiPlxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUGxhbi5mZWF0dXJlcy5zbGljZSgwLCA0KS5tYXAoKGYsIGkpID0+XG4gICAgICAgICAgICAgICAgPGxpIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb246NTkzOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtpfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXNtIHRleHQtZ3JheS02MDBcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjo1OTQ6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0zIGgtMyB0ZXh0LWdyZWVuLTUwMFwiIC8+IHtmfVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjo2MDA6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICBZb3Ugd2lsbCBiZSBjaGFyZ2VkIOKCuXtnZXRUb3RhbENoYXJnZShzZWxlY3RlZFBsYW4pfSB7aXNZZWFybHkgPyAnZm9yIHRoZSB5ZWFyJyA6ICdmb3IgdGhpcyBtb250aCd9LiBZb3VyIHBsYW4gdXBncmFkZXMgaW5zdGFudGx5IGFmdGVyIHBheW1lbnQuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cblxuICAgICAgICAgIDxEaWFsb2dGb290ZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjo2MDY6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjo2MDc6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldFNob3dVcGdyYWRlRGlhbG9nKGZhbHNlKTtzZXRQYXltZW50RXJyb3IobnVsbCk7fX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZ3JhZGluZ30+XG5cbiAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbjo2MTQ6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgb25DbGljaz17Y29uZmlybVVwZ3JhZGV9XG4gICAgICAgICAgICBkaXNhYmxlZD17aXNVcGdyYWRpbmd9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tb3JhbmdlLTYwMCB0by1vcmFuZ2UtNTAwXCI+XG5cbiAgICAgICAgICAgICAge2lzVXBncmFkaW5nID9cbiAgICAgICAgICAgICAgPD48TG9hZGVyMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uOjYyMDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IG1yLTIgYW5pbWF0ZS1zcGluXCIgLz4gUHJvY2Vzc2luZy4uLjwvPiA6XG4gICAgICAgICAgICAgIHBheW1lbnRFcnJvciA/XG4gICAgICAgICAgICAgICdSZXRyeSBQYXltZW50JyA6XG5cbiAgICAgICAgICAgICAgJ1Byb2NlZWQgdG8gUGF5bWVudCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9EaWFsb2dGb290ZXI+XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgIDwvRGlhbG9nPlxuICAgIDwvbW90aW9uLmRpdj4pO1xuXG59Il0sImZpbGUiOiIvYXBwL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9CaWxsaW5nU2VjdGlvbi5qc3gifQ==