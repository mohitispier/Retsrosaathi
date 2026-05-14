import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/SuperAdminDashboard.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/SuperAdminDashboard.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=79425e35";
import { base44 } from "/src/api/base44Client.js";
import { createPageUrl } from "/src/utils/index.ts";
import {
  Store,
  Users,
  IndianRupee,
  TrendingUp,
  Search,
  Eye,
  Ban,
  CheckCircle,
  Crown,
  Mail,
  Send,
  Edit,
  Save,
  RotateCcw,
  AlertTriangle,
  ShieldAlert,
  HelpCircle,
  Settings,
  Activity,
  X,
  MessageSquare,
  EyeOff,
  Trash2
} from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
import { Card, CardContent, CardHeader, CardTitle } from "/src/components/ui/card.jsx";
import { Button } from "/src/components/ui/button.jsx";
import { Input } from "/src/components/ui/input.jsx";
import { Badge } from "/src/components/ui/badge.jsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "/src/components/ui/tabs.jsx";
import { Textarea } from "/src/components/ui/textarea.jsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "/src/components/ui/select.jsx";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "/src/components/ui/dialog.jsx";
import { format } from "/node_modules/.vite/deps/date-fns.js?v=79425e35";
import RazorpayConfigDialog from "/src/components/superadmin/RazorpayConfigDialog.jsx";
import AdminStatsGrid from "/src/components/superadmin/AdminStatsGrid.jsx";
export default function SuperAdminDashboard() {
  _s();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [allOrders, setAllOrders] = useState([]);
  const [auditLogs, setAuditLogs] = useState([]);
  const [supportRequests, setSupportRequests] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [allChatMessages, setAllChatMessages] = useState([]);
  const [restaurantSupportChats, setRestaurantSupportChats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [accountStatusFilter, setAccountStatusFilter] = useState("all");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isPasswordVerified, setIsPasswordVerified] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [showEmailDialog, setShowEmailDialog] = useState(false);
  const [showSuspendDialog, setShowSuspendDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showRestoreDialog, setShowRestoreDialog] = useState(false);
  const [editingRestaurant, setEditingRestaurant] = useState(null);
  const [selectedSupport, setSelectedSupport] = useState(null);
  const [showCreatePlanDialog, setShowCreatePlanDialog] = useState(false);
  const [customPlans, setCustomPlans] = useState([]);
  const [showRazorpayDialog, setShowRazorpayDialog] = useState(false);
  const [emailData, setEmailData] = useState({ to: "", subject: "", body: "" });
  const [suspendReason, setSuspendReason] = useState("");
  const [deleteReason, setDeleteReason] = useState("");
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState("");
  useEffect(() => {
    checkAccess();
    const interval = setInterval(() => {
      checkAccess();
    }, 3e4);
    return () => clearInterval(interval);
  }, []);
  const checkAccess = async () => {
    try {
      const isAuth = await base44.auth.isAuthenticated();
      if (!isAuth) {
        navigate(createPageUrl("Home"));
        return;
      }
      const userData = await base44.auth.me();
      setUser(userData);
      if (userData.role !== "admin") {
        navigate(createPageUrl("Home"));
        return;
      }
      if (userData.restaurant_id) {
        navigate(createPageUrl("Dashboard"));
        return;
      }
      const [restaurantsData, ordersData, auditData, supportData, feedbackData, chatData, supportChatData] = await Promise.all(
        [
          base44.entities.Restaurant.list("-created_date", 100),
          base44.entities.Order.list("-created_date", 500),
          base44.entities.AuditLog.list("-created_date", 100),
          base44.entities.SupportRequest.list("-created_date", 100),
          base44.entities.Feedback.list("-created_date", 100),
          base44.entities.ChatMessage.list("-created_date", 500),
          base44.entities.RestaurantSupportChat.list("-created_date", 500)
        ]
      );
      setRestaurants(restaurantsData);
      setAllOrders(ordersData);
      setAuditLogs(auditData);
      setSupportRequests(supportData);
      setFeedbacks(feedbackData);
      setAllChatMessages(chatData);
      setRestaurantSupportChats(supportChatData);
    } catch (e) {
      console.error("Error:", e);
      navigate(createPageUrl("Home"));
    } finally {
      setIsLoading(false);
    }
  };
  const createAuditLog = async (action, restaurant, reason, previousValue, newValue) => {
    await base44.entities.AuditLog.create({
      action,
      restaurant_id: restaurant.restaurant_id,
      restaurant_name: restaurant.name,
      admin_email: user.email,
      reason,
      previous_value: JSON.stringify(previousValue),
      new_value: JSON.stringify(newValue)
    });
  };
  const handleSuspendAccount = async () => {
    if (!suspendReason.trim()) {
      alert("Please provide a reason for suspension");
      return;
    }
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const previousValue = { account_status: selectedRestaurant.account_status };
    await base44.entities.Restaurant.update(selectedRestaurant.id, { account_status: "suspended", suspension_reason: suspendReason, suspension_date: now, is_active: false });
    await createAuditLog("suspend_account", selectedRestaurant, suspendReason, previousValue, { account_status: "suspended", suspension_date: now });
    setSuspendReason("");
    setShowSuspendDialog(false);
    setSelectedRestaurant(null);
    checkAccess();
  };
  const handleDeleteAccount = async () => {
    if (!deleteReason.trim()) {
      alert("Please provide a reason for deletion");
      return;
    }
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const permanentDeletionDate = /* @__PURE__ */ new Date();
    permanentDeletionDate.setDate(permanentDeletionDate.getDate() + 30);
    const previousValue = { account_status: selectedRestaurant.account_status };
    await base44.entities.Restaurant.update(selectedRestaurant.id, { account_status: "deleted", suspension_reason: deleteReason, deletion_date: now, permanent_deletion_date: permanentDeletionDate.toISOString(), is_active: false });
    await createAuditLog("delete_account", selectedRestaurant, deleteReason, previousValue, { account_status: "deleted", deletion_date: now, permanent_deletion_date: permanentDeletionDate.toISOString() });
    setDeleteReason("");
    setShowDeleteDialog(false);
    setSelectedRestaurant(null);
    checkAccess();
  };
  const handleRestoreAccount = async () => {
    const restaurant = selectedRestaurant;
    const deletionDate = new Date(restaurant.deletion_date || restaurant.suspension_date);
    const daysSinceDeletion = Math.floor((/* @__PURE__ */ new Date() - deletionDate) / (1e3 * 60 * 60 * 24));
    if (daysSinceDeletion > 30) {
      alert("Restore window expired. Account cannot be restored after 30 days.");
      return;
    }
    const previousValue = { account_status: restaurant.account_status, suspension_reason: restaurant.suspension_reason };
    await base44.entities.Restaurant.update(restaurant.id, { account_status: "active", suspension_reason: null, suspension_date: null, deletion_date: null, permanent_deletion_date: null, is_active: true });
    await createAuditLog("restore_account", restaurant, "Account restored by super admin", previousValue, { account_status: "active" });
    setShowRestoreDialog(false);
    setSelectedRestaurant(null);
    checkAccess();
  };
  const handleSaveRestaurant = async () => {
    setIsSaving(true);
    try {
      const previousPlan = restaurants.find((r) => r.id === editingRestaurant.id)?.subscription_plan;
      await base44.entities.Restaurant.update(editingRestaurant.id, editingRestaurant);
      if (previousPlan !== editingRestaurant.subscription_plan) {
        await createAuditLog("change_plan", editingRestaurant, `Plan changed from ${previousPlan} to ${editingRestaurant.subscription_plan}`, { subscription_plan: previousPlan }, { subscription_plan: editingRestaurant.subscription_plan });
      }
      setEditingRestaurant(null);
      checkAccess();
    } catch (error) {
      alert("Failed to update restaurant: " + error.message);
    } finally {
      setIsSaving(false);
    }
  };
  const handleSendEmail = async () => {
    setIsSendingEmail(true);
    setEmailSuccess("");
    try {
      await base44.integrations.Core.SendEmail({ to: emailData.to, subject: emailData.subject, body: emailData.body, from_name: "RestroSaathi Admin" });
      setEmailSuccess("Email sent successfully!");
      setEmailData({ to: "", subject: "", body: "" });
      setTimeout(() => {
        setShowEmailDialog(false);
        setEmailSuccess("");
      }, 2e3);
    } catch (error) {
      alert("Failed to send email: " + error.message);
    } finally {
      setIsSendingEmail(false);
    }
  };
  const handleResolveSupportRequest = async (requestId, adminNotes) => {
    await base44.entities.SupportRequest.update(requestId, { status: "resolved", admin_notes: adminNotes, resolved_by: user.email, resolved_at: (/* @__PURE__ */ new Date()).toISOString() });
    setSelectedSupport(null);
    checkAccess();
  };
  const filteredRestaurants = restaurants.filter((r) => {
    const matchesSearch = r.name?.toLowerCase().includes(searchQuery.toLowerCase()) || r.restaurant_id?.toLowerCase().includes(searchQuery.toLowerCase()) || r.city?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = accountStatusFilter === "all" || r.account_status === accountStatusFilter;
    return matchesSearch && matchesStatus;
  });
  const totalRevenue = allOrders.reduce((sum, o) => sum + (o.total_amount || 0), 0);
  const activeRestaurants = restaurants.filter((r) => r.account_status === "active" || !r.account_status).length;
  const suspendedRestaurants = restaurants.filter((r) => r.account_status === "suspended").length;
  const deletedRestaurants = restaurants.filter((r) => r.account_status === "deleted").length;
  const trialRestaurants = restaurants.filter((r) => r.subscription_plan === "trial").length;
  const basicRestaurants = restaurants.filter((r) => r.subscription_plan === "basic").length;
  const proRestaurants = restaurants.filter((r) => r.subscription_plan === "pro").length;
  const multiOutletRestaurants = restaurants.filter((r) => r.subscription_plan === "multi_outlet").length;
  const openSupport = supportRequests.filter((s) => s.status === "open").length;
  const getAccountStatusColor = (status) => ({ active: "bg-green-100 text-green-700", suspended: "bg-yellow-100 text-yellow-700", deleted: "bg-red-100 text-red-700" })[status] || "bg-gray-100 text-gray-700";
  const getSubscriptionStatusColor = (status) => ({ active: "bg-blue-100 text-blue-700", expired: "bg-red-100 text-red-700", cancelled: "bg-gray-100 text-gray-700" })[status] || "bg-gray-100 text-gray-700";
  const getPlanBadge = (plan) => ({ trial: { color: "bg-amber-100 text-amber-700", label: "Trial" }, basic: { color: "bg-blue-100 text-blue-700", label: "Basic" }, pro: { color: "bg-orange-100 text-orange-700", label: "Pro" }, multi_outlet: { color: "bg-indigo-100 text-indigo-700", label: "Multi-Outlet" } })[plan] || { color: "bg-amber-100 text-amber-700", label: "Trial" };
  const canRestore = (restaurant) => {
    if (restaurant.account_status !== "suspended" && restaurant.account_status !== "deleted") return false;
    const deletionDate = new Date(restaurant.deletion_date || restaurant.suspension_date);
    return Math.floor((/* @__PURE__ */ new Date() - deletionDate) / (1e3 * 60 * 60 * 24)) <= 30;
  };
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === "Super@123") {
      setIsPasswordVerified(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
      setPasswordInput("");
    }
  };
  if (isLoading) return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:195:4", "data-dynamic-content": "false", className: "min-h-screen bg-gray-50 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:196:6", "data-dynamic-content": "false", className: "animate-spin rounded-full h-10 w-10 border-b-2 border-orange-600" }, void 0, false, {
    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
    lineNumber: 215,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
    lineNumber: 214,
    columnNumber: 5
  }, this);
  if (!isPasswordVerified) return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:201:4", "data-dynamic-content": "true", className: "bg-slate-900 p-4 min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:202:6", "data-dynamic-content": "true", className: "bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-md w-full", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:203:8", "data-dynamic-content": "false", className: "text-center mb-8", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:204:10", "data-dynamic-content": "false", className: "w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxDEV(ShieldAlert, { "data-source-location": "pages/SuperAdminDashboard:205:12", "data-dynamic-content": "false", className: "w-8 h-8 sm:w-10 sm:h-10 text-white" }, void 0, false, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 224,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 223,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/SuperAdminDashboard:207:10", "data-dynamic-content": "false", className: "text-2xl sm:text-3xl font-bold text-gray-900 mb-2", children: "Super Admin Access" }, void 0, false, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 226,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:208:10", "data-dynamic-content": "false", className: "text-gray-500", children: "Enter password to continue" }, void 0, false, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 227,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
      lineNumber: 222,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("form", { "data-source-location": "pages/SuperAdminDashboard:210:8", "data-dynamic-content": "true", onSubmit: handlePasswordSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:211:10", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV(
          Input,
          {
            "data-source-location": "pages/SuperAdminDashboard:212:12",
            "data-dynamic-content": "true",
            type: "password",
            placeholder: "Enter super admin password",
            value: passwordInput,
            onChange: (e) => {
              setPasswordInput(e.target.value);
              setPasswordError(false);
            },
            className: "text-center text-lg h-12",
            autoFocus: true
          },
          void 0,
          false,
          {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 231,
            columnNumber: 13
          },
          this
        ),
        passwordError && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:215:30", "data-dynamic-content": "false", className: "text-red-600 text-sm mt-2 text-center", children: "Incorrect password. Please try again." }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 234,
          columnNumber: 31
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 230,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/SuperAdminDashboard:217:10", "data-dynamic-content": "false", type: "submit", className: "w-full bg-gradient-to-r from-orange-600 to-orange-500 h-12 text-base", children: [
        /* @__PURE__ */ jsxDEV(ShieldAlert, { "data-source-location": "pages/SuperAdminDashboard:218:12", "data-dynamic-content": "false", className: "w-5 h-5 mr-2" }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 237,
          columnNumber: 13
        }, this),
        " Access Dashboard"
      ] }, void 0, true, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 236,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
      lineNumber: 229,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:221:8", "data-dynamic-content": "true", className: "mt-6 text-center", children: /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/SuperAdminDashboard:222:10", "data-dynamic-content": "true", variant: "ghost", onClick: () => navigate(createPageUrl("Home")), className: "text-gray-500", children: "← Back to Home" }, void 0, false, {
      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
      lineNumber: 241,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
      lineNumber: 240,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
    lineNumber: 221,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
    lineNumber: 220,
    columnNumber: 5
  }, this);
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:229:4", "data-dynamic-content": "true", className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:231:6", "data-dynamic-content": "true", className: "bg-white border-b", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:232:8", "data-dynamic-content": "true", className: "max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-5", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:233:10", "data-dynamic-content": "true", className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:234:12", "data-dynamic-content": "false", className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:235:14", "data-dynamic-content": "false", className: "w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/SuperAdminDashboard:236:16", "data-dynamic-content": "false", className: "text-white font-bold text-lg sm:text-xl", children: "A" }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 255,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 254,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:238:14", "data-dynamic-content": "false", children: [
          /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/SuperAdminDashboard:239:16", "data-dynamic-content": "false", className: "text-base sm:text-2xl font-bold text-gray-900", children: "RestroSaathi Super Admin" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 258,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:240:16", "data-dynamic-content": "false", className: "text-gray-500 text-xs sm:text-sm", children: "Platform Management Dashboard" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 259,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 257,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 253,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:243:12", "data-dynamic-content": "true", className: "flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/SuperAdminDashboard:244:14", "data-dynamic-content": "true", onClick: () => setShowEmailDialog(true), variant: "outline", size: "sm", children: [
          /* @__PURE__ */ jsxDEV(Mail, { "data-source-location": "pages/SuperAdminDashboard:245:16", "data-dynamic-content": "false", className: "w-4 h-4 mr-1" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 264,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/SuperAdminDashboard:245:49", "data-dynamic-content": "false", className: "hidden sm:inline", children: "Send Email" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 264,
            columnNumber: 135
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/SuperAdminDashboard:245:101", "data-dynamic-content": "false", className: "sm:hidden", children: "Email" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 264,
            columnNumber: 272
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 263,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/SuperAdminDashboard:247:14", "data-dynamic-content": "false", className: "bg-orange-600 text-xs", children: "Super Admin" }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 266,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/SuperAdminDashboard:248:14", "data-dynamic-content": "true", variant: "outline", size: "sm", onClick: () => base44.auth.logout(), children: "Logout" }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 267,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 262,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
      lineNumber: 252,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
      lineNumber: 251,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
      lineNumber: 250,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:254:6", "data-dynamic-content": "true", className: "max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8", children: /* @__PURE__ */ jsxDEV(Tabs, { "data-source-location": "pages/SuperAdminDashboard:255:8", "data-dynamic-content": "true", defaultValue: "overview", className: "space-y-4 sm:space-y-6", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:256:10", "data-dynamic-content": "true", className: "flex flex-col sm:flex-row sm:items-center gap-3 mb-2", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:257:12", "data-dynamic-content": "true", className: "overflow-x-auto -mx-3 px-3 sm:mx-0 sm:px-0 scrollbar-none", children: /* @__PURE__ */ jsxDEV(TabsList, { "data-source-location": "pages/SuperAdminDashboard:258:14", "data-dynamic-content": "true", className: "flex w-max", children: [
          /* @__PURE__ */ jsxDEV(TabsTrigger, { "data-source-location": "pages/SuperAdminDashboard:259:16", "data-dynamic-content": "false", value: "overview", className: "text-xs sm:text-sm whitespace-nowrap", children: "Overview" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 278,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(TabsTrigger, { "data-source-location": "pages/SuperAdminDashboard:260:16", "data-dynamic-content": "false", value: "restaurants", className: "text-xs sm:text-sm whitespace-nowrap", children: "Restaurants" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 279,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(TabsTrigger, { "data-source-location": "pages/SuperAdminDashboard:261:16", "data-dynamic-content": "false", value: "restaurant_support", className: "text-xs sm:text-sm whitespace-nowrap", children: "Support Chats" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 280,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(TabsTrigger, { "data-source-location": "pages/SuperAdminDashboard:262:16", "data-dynamic-content": "false", value: "chats", className: "text-xs sm:text-sm whitespace-nowrap", children: "Cust. Chats" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 281,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(TabsTrigger, { "data-source-location": "pages/SuperAdminDashboard:263:16", "data-dynamic-content": "false", value: "feedback", className: "text-xs sm:text-sm whitespace-nowrap", children: "Feedback" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 282,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(TabsTrigger, { "data-source-location": "pages/SuperAdminDashboard:264:16", "data-dynamic-content": "false", value: "plans", className: "text-xs sm:text-sm whitespace-nowrap", children: "Plans" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 283,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(TabsTrigger, { "data-source-location": "pages/SuperAdminDashboard:265:16", "data-dynamic-content": "true", value: "support", className: "text-xs sm:text-sm whitespace-nowrap", children: [
            "Support ",
            openSupport > 0 && `(${openSupport})`
          ] }, void 0, true, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 284,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(TabsTrigger, { "data-source-location": "pages/SuperAdminDashboard:266:16", "data-dynamic-content": "false", value: "audit", className: "text-xs sm:text-sm whitespace-nowrap", children: "Audit" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 285,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 277,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 276,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          Button,
          {
            "data-source-location": "pages/SuperAdminDashboard:269:12",
            "data-dynamic-content": "true",
            onClick: () => window.open("/SupportCenter", "_blank"),
            size: "sm",
            className: "bg-gradient-to-r from-orange-600 to-orange-500 w-full sm:w-auto flex-shrink-0",
            children: "Support Center"
          },
          void 0,
          false,
          {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 288,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 275,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(TabsContent, { "data-source-location": "pages/SuperAdminDashboard:276:10", "data-dynamic-content": "true", value: "overview", className: "space-y-4 sm:space-y-6", children: [
        /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/SuperAdminDashboard:277:12", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "pages/SuperAdminDashboard:278:14", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "pages/SuperAdminDashboard:278:26", "data-dynamic-content": "false", className: "text-base sm:text-lg", children: "Platform Revenue Overview" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 297,
            columnNumber: 112
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 297,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/SuperAdminDashboard:279:14", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:280:16", "data-dynamic-content": "true", className: "grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:281:18", "data-dynamic-content": "true", className: "text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:282:20", "data-dynamic-content": "false", className: "text-xs sm:text-sm text-gray-600 mb-1", children: "Total GMV" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 301,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:283:20", "data-dynamic-content": "true", className: "text-2xl sm:text-3xl font-bold text-green-600", children: [
                "₹",
                (totalRevenue / 1e3).toFixed(1),
                "K"
              ] }, void 0, true, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 302,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:284:20", "data-dynamic-content": "false", className: "text-xs text-gray-500 mt-1", children: "All time" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 303,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 300,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:286:18", "data-dynamic-content": "true", className: "text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:287:20", "data-dynamic-content": "false", className: "text-xs sm:text-sm text-gray-600 mb-1", children: "Monthly Recurring Revenue" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 306,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:288:20", "data-dynamic-content": "true", className: "text-2xl sm:text-3xl font-bold text-blue-600", children: [
                "₹",
                (basicRestaurants * 999 + proRestaurants * 2499 + multiOutletRestaurants * 4999).toLocaleString()
              ] }, void 0, true, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 307,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:289:20", "data-dynamic-content": "false", className: "text-xs text-gray-500 mt-1", children: "Projected MRR" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 308,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 305,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:291:18", "data-dynamic-content": "true", className: "text-center p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:292:20", "data-dynamic-content": "false", className: "text-xs sm:text-sm text-gray-600 mb-1", children: "Avg Revenue Per User" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 311,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:293:20", "data-dynamic-content": "true", className: "text-2xl sm:text-3xl font-bold text-orange-600", children: [
                "₹",
                Math.round((basicRestaurants * 999 + proRestaurants * 2499 + multiOutletRestaurants * 4999) / (basicRestaurants + proRestaurants + multiOutletRestaurants || 1))
              ] }, void 0, true, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 312,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:294:20", "data-dynamic-content": "false", className: "text-xs text-gray-500 mt-1", children: "ARPU" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 313,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 310,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 299,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 298,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 296,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          AdminStatsGrid,
          {
            "data-source-location": "pages/SuperAdminDashboard:300:12",
            "data-dynamic-content": "true",
            restaurants,
            totalRevenue,
            activeRestaurants,
            suspendedRestaurants,
            deletedRestaurants,
            openSupport,
            trialRestaurants,
            basicRestaurants,
            proRestaurants,
            multiOutletRestaurants,
            auditLogs
          },
          void 0,
          false,
          {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 319,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/SuperAdminDashboard:307:12", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "pages/SuperAdminDashboard:308:14", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "pages/SuperAdminDashboard:308:26", "data-dynamic-content": "false", className: "text-base sm:text-lg", children: "Recent Admin Actions" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 327,
            columnNumber: 112
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 327,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/SuperAdminDashboard:309:14", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:310:16", "data-dynamic-content": "true", className: "space-y-3", children: auditLogs.slice(0, 10).map(
            (log) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:312:20", "data-dynamic-content": "true", className: "flex items-start gap-3 pb-3 border-b last:border-0", "data-collection-item-id": log?.id, children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:313:22", "data-dynamic-content": "false", className: "p-2 bg-gray-100 rounded-lg flex-shrink-0", children: /* @__PURE__ */ jsxDEV(Activity, { "data-source-location": "pages/SuperAdminDashboard:314:24", "data-dynamic-content": "false", className: "w-4 h-4 text-gray-600" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 333,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 332,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:316:22", "data-dynamic-content": "true", className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:317:24", "data-dynamic-content": "true", className: "text-sm font-medium truncate", "data-collection-item-field": "restaurant_name", "data-collection-item-id": log?.id, children: [
                  log.action.replace(/_/g, " ").toUpperCase(),
                  " - ",
                  log.restaurant_name
                ] }, void 0, true, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 336,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:318:24", "data-dynamic-content": "true", className: "text-xs text-gray-500", children: log.reason || "No reason provided" }, void 0, false, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 337,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:319:24", "data-dynamic-content": "true", className: "text-xs text-gray-400 mt-1", "data-collection-item-field": "admin_email", "data-collection-item-id": log?.id, children: [
                  "By ",
                  log.admin_email,
                  " • ",
                  format(new Date(log.created_date), "MMM d, yyyy HH:mm")
                ] }, void 0, true, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 338,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 335,
                columnNumber: 23
              }, this)
            ] }, log.id, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 331,
              columnNumber: 19
            }, this)
          ) }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 329,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 328,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 326,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 295,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(TabsContent, { "data-source-location": "pages/SuperAdminDashboard:329:10", "data-dynamic-content": "true", value: "plans", className: "space-y-4 sm:space-y-6", children: [
        /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/SuperAdminDashboard:330:12", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "pages/SuperAdminDashboard:331:14", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:332:16", "data-dynamic-content": "true", className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:333:18", "data-dynamic-content": "false", children: [
              /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "pages/SuperAdminDashboard:334:20", "data-dynamic-content": "false", className: "text-base sm:text-lg", children: "Subscription Plans" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 353,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:335:20", "data-dynamic-content": "false", className: "text-sm text-gray-500 mt-1", children: "Manage pricing and features" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 354,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 352,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:337:18", "data-dynamic-content": "true", className: "flex gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/SuperAdminDashboard:338:20", "data-dynamic-content": "true", onClick: () => setShowRazorpayDialog(true), variant: "outline", size: "sm", children: [
                /* @__PURE__ */ jsxDEV(Settings, { "data-source-location": "pages/SuperAdminDashboard:339:22", "data-dynamic-content": "false", className: "w-4 h-4 mr-1" }, void 0, false, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 358,
                  columnNumber: 23
                }, this),
                "Razorpay"
              ] }, void 0, true, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 357,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/SuperAdminDashboard:341:20", "data-dynamic-content": "true", onClick: () => setShowCreatePlanDialog(true), size: "sm", className: "bg-gradient-to-r from-orange-600 to-orange-500", children: [
                /* @__PURE__ */ jsxDEV(Crown, { "data-source-location": "pages/SuperAdminDashboard:342:22", "data-dynamic-content": "false", className: "w-4 h-4 mr-1" }, void 0, false, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 361,
                  columnNumber: 23
                }, this),
                "Custom Plan"
              ] }, void 0, true, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 360,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 356,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 351,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 350,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/SuperAdminDashboard:347:14", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:348:16", "data-dynamic-content": "true", className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [
            { label: "Trial", price: "Free", sub: "14 days trial", color: "bg-amber-50 border-amber-200", badge: "bg-amber-600", count: trialRestaurants, features: ["QR Ordering", "10 Tables"], noFeatures: ["Analytics"] },
            { label: "Basic", price: "₹999", sub: "per month", color: "bg-blue-50 border-blue-200", badge: "bg-blue-600", count: basicRestaurants, features: ["Everything in Trial", "20 Tables", "Basic Analytics"], noFeatures: [] },
            { label: "Pro", price: "₹2,499", sub: "per month", color: "bg-orange-50 border-orange-200", badge: "bg-orange-600", count: proRestaurants, features: ["Everything in Basic", "Unlimited Tables", "Advanced Analytics", "Payment Integration"], noFeatures: [] },
            { label: "Multi-Outlet", price: "₹4,999", sub: "per month", color: "bg-indigo-50 border-indigo-200", badge: "bg-indigo-600", count: multiOutletRestaurants, features: ["Everything in Pro", "Multiple Outlets", "Centralized Dashboard", "Priority Support"], noFeatures: [] }
          ].map(
            (plan) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:355:20", "data-dynamic-content": "true", className: `border rounded-xl p-4 ${plan.color}`, children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:356:22", "data-dynamic-content": "true", className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/SuperAdminDashboard:357:24", "data-dynamic-content": "true", className: plan.badge, "data-collection-item-field": "label", "data-collection-item-id": plan?.id || plan?._id, children: plan.label }, void 0, false, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 376,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/SuperAdminDashboard:358:24", "data-dynamic-content": "false", variant: "ghost", size: "sm", children: /* @__PURE__ */ jsxDEV(Edit, { "data-source-location": "pages/SuperAdminDashboard:358:58", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 377,
                  columnNumber: 144
                }, this) }, void 0, false, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 377,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 375,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:360:22", "data-dynamic-content": "true", className: "text-2xl font-bold mb-0.5", "data-collection-item-field": "price", "data-collection-item-id": plan?.id || plan?._id, children: plan.price }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 379,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:361:22", "data-dynamic-content": "true", className: "text-sm text-gray-600 mb-3", "data-collection-item-field": "sub", "data-collection-item-id": plan?.id || plan?._id, children: plan.sub }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 380,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:362:22", "data-dynamic-content": "true", className: "space-y-1.5 text-xs", "data-collection-item-field": "features", "data-collection-item-id": plan?.id || plan?._id, children: [
                plan.features.map((f) => /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:363:48", "data-dynamic-content": "true", className: "flex items-center gap-1.5", "data-collection-item-field": "f", children: [
                  /* @__PURE__ */ jsxDEV(CheckCircle, { "data-source-location": "pages/SuperAdminDashboard:363:97", "data-dynamic-content": "false", className: "w-3 h-3 text-green-600 flex-shrink-0" }, void 0, false, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 382,
                    columnNumber: 215
                  }, this),
                  f
                ] }, f, true, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 382,
                  columnNumber: 51
                }, this)),
                plan.noFeatures.map((f) => /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:364:50", "data-dynamic-content": "true", className: "flex items-center gap-1.5 text-gray-400", "data-collection-item-field": "f", children: [
                  /* @__PURE__ */ jsxDEV(X, { "data-source-location": "pages/SuperAdminDashboard:364:113", "data-dynamic-content": "false", className: "w-3 h-3 flex-shrink-0" }, void 0, false, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 383,
                    columnNumber: 231
                  }, this),
                  f
                ] }, f, true, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 383,
                  columnNumber: 53
                }, this))
              ] }, void 0, true, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 381,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:366:22", "data-dynamic-content": "true", className: "mt-3 pt-3 border-t", children: /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:366:58", "data-dynamic-content": "true", className: "text-xs text-gray-500", "data-collection-item-field": "count", "data-collection-item-id": plan?.id || plan?._id, children: [
                plan.count,
                " restaurants"
              ] }, void 0, true, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 385,
                columnNumber: 143
              }, this) }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 385,
                columnNumber: 23
              }, this)
            ] }, plan.label, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 374,
              columnNumber: 19
            }, this)
          ) }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 367,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 366,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 349,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:372:12", "data-dynamic-content": "true", className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/SuperAdminDashboard:373:14", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/SuperAdminDashboard:373:20", "data-dynamic-content": "true", className: "p-4 sm:p-6", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:373:56", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Monthly Recurring Revenue" }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 392,
              columnNumber: 225
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:373:122", "data-dynamic-content": "true", className: "text-2xl sm:text-3xl font-bold mt-2", children: [
              "₹",
              (basicRestaurants * 999 + proRestaurants * 2499 + multiOutletRestaurants * 4999).toLocaleString()
            ] }, void 0, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 392,
              columnNumber: 376
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:373:277", "data-dynamic-content": "false", className: "text-xs text-green-600 mt-1", children: "Projected MRR" }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 392,
              columnNumber: 616
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 392,
            columnNumber: 105
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 392,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/SuperAdminDashboard:374:14", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/SuperAdminDashboard:374:20", "data-dynamic-content": "true", className: "p-4 sm:p-6", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:374:56", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Avg Revenue Per User" }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 393,
              columnNumber: 225
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:374:117", "data-dynamic-content": "true", className: "text-2xl sm:text-3xl font-bold mt-2", children: [
              "₹",
              Math.round((basicRestaurants * 999 + proRestaurants * 2499 + multiOutletRestaurants * 4999) / (basicRestaurants + proRestaurants + multiOutletRestaurants || 1))
            ] }, void 0, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 393,
              columnNumber: 371
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:374:335", "data-dynamic-content": "false", className: "text-xs text-gray-600 mt-1", children: "ARPU" }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 393,
              columnNumber: 674
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 393,
            columnNumber: 105
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 393,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/SuperAdminDashboard:375:14", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/SuperAdminDashboard:375:20", "data-dynamic-content": "true", className: "p-4 sm:p-6", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:375:56", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Conversion from Trial" }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 394,
              columnNumber: 225
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:375:118", "data-dynamic-content": "true", className: "text-2xl sm:text-3xl font-bold mt-2", children: [
              Math.round((basicRestaurants + proRestaurants + multiOutletRestaurants) / restaurants.length * 100),
              "%"
            ] }, void 0, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 394,
              columnNumber: 372
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:375:275", "data-dynamic-content": "false", className: "text-xs text-gray-600 mt-1", children: "Trial to Paid" }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 394,
              columnNumber: 614
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 394,
            columnNumber: 105
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 394,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 391,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 348,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(TabsContent, { "data-source-location": "pages/SuperAdminDashboard:380:10", "data-dynamic-content": "true", value: "restaurant_support", className: "space-y-4 sm:space-y-6", children: /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/SuperAdminDashboard:381:12", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "pages/SuperAdminDashboard:382:14", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "pages/SuperAdminDashboard:382:26", "data-dynamic-content": "false", className: "text-base sm:text-lg", children: "Restaurant Support Chats" }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 401,
          columnNumber: 112
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 401,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/SuperAdminDashboard:383:14", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:384:16", "data-dynamic-content": "true", className: "space-y-4", children: (() => {
          const supportSessions = {};
          restaurantSupportChats.forEach((msg) => {
            if (!supportSessions[msg.session_id]) {
              supportSessions[msg.session_id] = { session_id: msg.session_id, restaurant_id: msg.restaurant_id, restaurant_name: msg.restaurant_name, issue_type: msg.issue_type, status: msg.status, last_message: msg.message, last_message_time: msg.created_date, unread_count: 0 };
            }
            if (!msg.is_read && msg.sender_type === "restaurant") supportSessions[msg.session_id].unread_count++;
            if (new Date(msg.created_date) > new Date(supportSessions[msg.session_id].last_message_time)) {
              supportSessions[msg.session_id].last_message = msg.message;
              supportSessions[msg.session_id].last_message_time = msg.created_date;
              supportSessions[msg.session_id].status = msg.status;
            }
          });
          const sessions = Object.values(supportSessions).sort((a, b) => new Date(b.last_message_time) - new Date(a.last_message_time));
          if (sessions.length === 0) return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:399:54", "data-dynamic-content": "false", className: "text-center py-8 text-gray-500", children: [
            /* @__PURE__ */ jsxDEV(HelpCircle, { "data-source-location": "pages/SuperAdminDashboard:399:102", "data-dynamic-content": "false", className: "w-12 h-12 mx-auto mb-3 text-gray-300" }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 418,
              columnNumber: 188
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:399:165", "data-dynamic-content": "false", children: "No support chats yet" }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 418,
              columnNumber: 337
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 418,
            columnNumber: 55
          }, this);
          return sessions.map((session) => {
            const restaurant = restaurants.find((r) => r.restaurant_id === session.restaurant_id);
            return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:403:24", "data-dynamic-content": "true", className: "border rounded-lg p-4 hover:shadow-md transition-shadow", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:404:26", "data-dynamic-content": "true", className: "flex items-start justify-between mb-2 gap-3", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:405:28", "data-dynamic-content": "true", className: "flex items-center gap-3 min-w-0", children: [
                  restaurant?.logo_url ? /* @__PURE__ */ jsxDEV("img", { "data-source-location": "pages/SuperAdminDashboard:406:54", "data-dynamic-content": "true", src: restaurant.logo_url, alt: session.restaurant_name, className: "w-10 h-10 rounded-lg object-cover flex-shrink-0" }, void 0, false, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 425,
                    columnNumber: 55
                  }, this) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:406:180", "data-dynamic-content": "false", className: "w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxDEV(Store, { "data-source-location": "pages/SuperAdminDashboard:406:279", "data-dynamic-content": "false", className: "w-5 h-5 text-orange-600" }, void 0, false, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 425,
                    columnNumber: 450
                  }, this) }, void 0, false, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 425,
                    columnNumber: 265
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:407:30", "data-dynamic-content": "true", className: "min-w-0", children: [
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:408:32", "data-dynamic-content": "true", className: "font-semibold truncate", "data-collection-item-field": "restaurant_name", "data-collection-item-id": session?.id || session?._id, children: session.restaurant_name }, void 0, false, {
                      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                      lineNumber: 427,
                      columnNumber: 33
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:409:32", "data-dynamic-content": "true", className: "flex items-center gap-1 mt-1 flex-wrap", children: [
                      /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/SuperAdminDashboard:410:34", "data-dynamic-content": "true", variant: "outline", className: "text-xs", "data-collection-item-field": "issue_type", "data-collection-item-id": session?.id || session?._id, children: session.issue_type }, void 0, false, {
                        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                        lineNumber: 429,
                        columnNumber: 35
                      }, this),
                      /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/SuperAdminDashboard:411:34", "data-dynamic-content": "true", className: session.status === "resolved" ? "bg-green-600" : session.status === "in_progress" ? "bg-blue-600" : "bg-orange-600", "data-collection-item-field": "status", "data-collection-item-id": session?.id || session?._id, children: session.status }, void 0, false, {
                        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                        lineNumber: 430,
                        columnNumber: 35
                      }, this),
                      session.unread_count > 0 && /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/SuperAdminDashboard:412:63", "data-dynamic-content": "true", className: "bg-red-600", "data-collection-item-field": "unread_count", "data-collection-item-id": session?.id || session?._id, children: [
                        session.unread_count,
                        " new"
                      ] }, void 0, true, {
                        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                        lineNumber: 431,
                        columnNumber: 64
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                      lineNumber: 428,
                      columnNumber: 33
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 426,
                    columnNumber: 31
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 424,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/SuperAdminDashboard:416:28", "data-dynamic-content": "true", size: "sm", className: "flex-shrink-0", onClick: () => window.open(`/TeamChat?session=${session.session_id}`, "_blank"), children: "Open" }, void 0, false, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 435,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 423,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:418:26", "data-dynamic-content": "true", className: "text-sm text-gray-600 italic truncate", "data-collection-item-field": "last_message", "data-collection-item-id": session?.id || session?._id, children: [
                '"',
                session.last_message,
                '"'
              ] }, void 0, true, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 437,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:419:26", "data-dynamic-content": "true", className: "text-xs text-gray-400 mt-1", children: format(new Date(session.last_message_time), "MMM d, yyyy HH:mm") }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 438,
                columnNumber: 27
              }, this)
            ] }, session.session_id, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 422,
              columnNumber: 25
            }, this);
          });
        })() }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 403,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 402,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 400,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 399,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(TabsContent, { "data-source-location": "pages/SuperAdminDashboard:430:10", "data-dynamic-content": "true", value: "chats", className: "space-y-4 sm:space-y-6", children: /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/SuperAdminDashboard:431:12", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "pages/SuperAdminDashboard:432:14", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "pages/SuperAdminDashboard:432:26", "data-dynamic-content": "false", className: "text-base sm:text-lg", children: "All Customer Chats" }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 451,
          columnNumber: 112
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 451,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/SuperAdminDashboard:433:14", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:434:16", "data-dynamic-content": "true", className: "space-y-4", children: (() => {
          const chatSessions = {};
          allChatMessages.forEach((msg) => {
            if (!chatSessions[msg.session_id]) {
              chatSessions[msg.session_id] = { session_id: msg.session_id, restaurant_id: msg.restaurant_id, customer_name: msg.customer_name, customer_phone: msg.customer_phone, last_message: msg.message, last_message_time: msg.created_date, message_count: 0 };
            }
            chatSessions[msg.session_id].message_count++;
            if (new Date(msg.created_date) > new Date(chatSessions[msg.session_id].last_message_time)) {
              chatSessions[msg.session_id].last_message = msg.message;
              chatSessions[msg.session_id].last_message_time = msg.created_date;
            }
          });
          const sessions = Object.values(chatSessions).sort((a, b) => new Date(b.last_message_time) - new Date(a.last_message_time));
          if (sessions.length === 0) return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:448:54", "data-dynamic-content": "false", className: "text-center py-8 text-gray-500", children: [
            /* @__PURE__ */ jsxDEV(MessageSquare, { "data-source-location": "pages/SuperAdminDashboard:448:102", "data-dynamic-content": "false", className: "w-12 h-12 mx-auto mb-3 text-gray-300" }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 467,
              columnNumber: 188
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:448:168", "data-dynamic-content": "false", children: "No customer chats yet" }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 467,
              columnNumber: 340
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 467,
            columnNumber: 55
          }, this);
          return sessions.map((session) => {
            const restaurant = restaurants.find((r) => r.restaurant_id === session.restaurant_id);
            return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:452:24", "data-dynamic-content": "true", className: "border rounded-lg p-4 hover:shadow-md transition-shadow", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:453:26", "data-dynamic-content": "true", className: "flex items-start justify-between gap-3 mb-2", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:454:28", "data-dynamic-content": "true", className: "flex items-center gap-3 min-w-0", children: [
                  restaurant?.logo_url ? /* @__PURE__ */ jsxDEV("img", { "data-source-location": "pages/SuperAdminDashboard:455:54", "data-dynamic-content": "true", src: restaurant.logo_url, alt: restaurant.name, className: "w-10 h-10 rounded-lg object-cover flex-shrink-0" }, void 0, false, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 474,
                    columnNumber: 55
                  }, this) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:455:172", "data-dynamic-content": "false", className: "w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxDEV(Store, { "data-source-location": "pages/SuperAdminDashboard:455:271", "data-dynamic-content": "false", className: "w-5 h-5 text-orange-600" }, void 0, false, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 474,
                    columnNumber: 442
                  }, this) }, void 0, false, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 474,
                    columnNumber: 257
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:456:30", "data-dynamic-content": "true", className: "min-w-0", children: [
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:457:32", "data-dynamic-content": "true", className: "font-semibold truncate", "data-collection-item-field": "name", "data-collection-item-id": restaurant?.id || restaurant?._id, children: restaurant?.name }, void 0, false, {
                      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                      lineNumber: 476,
                      columnNumber: 33
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:458:32", "data-dynamic-content": "true", className: "text-xs text-gray-600 truncate", "data-collection-item-field": "customer_name", "data-collection-item-id": session?.id || session?._id, children: [
                      session.customer_name,
                      " • ",
                      session.customer_phone
                    ] }, void 0, true, {
                      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                      lineNumber: 477,
                      columnNumber: 33
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 475,
                    columnNumber: 31
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 473,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/SuperAdminDashboard:461:28", "data-dynamic-content": "true", className: "bg-blue-100 text-blue-700 flex-shrink-0", "data-collection-item-field": "message_count", "data-collection-item-id": session?.id || session?._id, children: [
                  session.message_count,
                  " msgs"
                ] }, void 0, true, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 480,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 472,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:463:26", "data-dynamic-content": "true", className: "text-sm text-gray-600 italic truncate", "data-collection-item-field": "last_message", "data-collection-item-id": session?.id || session?._id, children: [
                '"',
                session.last_message,
                '"'
              ] }, void 0, true, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 482,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:464:26", "data-dynamic-content": "true", className: "text-xs text-gray-400 mt-1", children: format(new Date(session.last_message_time), "MMM d, yyyy HH:mm") }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 483,
                columnNumber: 27
              }, this)
            ] }, session.session_id, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 471,
              columnNumber: 25
            }, this);
          });
        })() }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 453,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 452,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 450,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 449,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(TabsContent, { "data-source-location": "pages/SuperAdminDashboard:475:10", "data-dynamic-content": "true", value: "feedback", className: "space-y-4 sm:space-y-6", children: /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/SuperAdminDashboard:476:12", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "pages/SuperAdminDashboard:477:14", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "pages/SuperAdminDashboard:477:26", "data-dynamic-content": "false", className: "text-base sm:text-lg", children: "Restaurant Feedback" }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 496,
          columnNumber: 112
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 496,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/SuperAdminDashboard:478:14", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:479:16", "data-dynamic-content": "true", className: "space-y-4", children: feedbacks.length === 0 ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:480:44", "data-dynamic-content": "false", className: "text-center py-8 text-gray-500", children: [
          /* @__PURE__ */ jsxDEV(MessageSquare, { "data-source-location": "pages/SuperAdminDashboard:480:92", "data-dynamic-content": "false", className: "w-12 h-12 mx-auto mb-3 text-gray-300" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 499,
            columnNumber: 178
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:480:158", "data-dynamic-content": "false", children: "No feedback submitted yet" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 499,
            columnNumber: 329
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 499,
          columnNumber: 45
        }, this) : feedbacks.map((feedback) => {
          const restaurant = restaurants.find((r) => r.restaurant_id === feedback.restaurant_id);
          return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:484:24", "data-dynamic-content": "true", className: "border rounded-lg p-4 hover:shadow-md transition-shadow", "data-collection-item-id": feedback?.id, children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:485:26", "data-dynamic-content": "true", className: "flex items-start justify-between mb-3 gap-3", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:486:28", "data-dynamic-content": "true", className: "flex items-center gap-3 min-w-0", children: [
                restaurant?.logo_url ? /* @__PURE__ */ jsxDEV("img", { "data-source-location": "pages/SuperAdminDashboard:487:54", "data-dynamic-content": "true", src: restaurant.logo_url, alt: feedback.restaurant_name, className: "w-10 h-10 rounded-lg object-cover flex-shrink-0" }, void 0, false, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 506,
                  columnNumber: 55
                }, this) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:487:181", "data-dynamic-content": "false", className: "w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxDEV(Store, { "data-source-location": "pages/SuperAdminDashboard:487:280", "data-dynamic-content": "false", className: "w-5 h-5 text-orange-600" }, void 0, false, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 506,
                  columnNumber: 451
                }, this) }, void 0, false, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 506,
                  columnNumber: 266
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:488:30", "data-dynamic-content": "true", className: "min-w-0", children: [
                  /* @__PURE__ */ jsxDEV("h4", { "data-source-location": "pages/SuperAdminDashboard:489:32", "data-dynamic-content": "true", className: "font-semibold truncate", "data-collection-item-field": "restaurant_name", "data-collection-item-id": feedback?.id, children: feedback.restaurant_name }, void 0, false, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 508,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:490:32", "data-dynamic-content": "true", className: "flex gap-0.5 mt-0.5", children: [...Array(feedback.rating)].map((_, i) => /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/SuperAdminDashboard:490:112", "data-dynamic-content": "true", className: "text-yellow-400 text-sm", "data-arr-index": i, children: "★" }, i, false, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 509,
                    columnNumber: 197
                  }, this)) }, void 0, false, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 509,
                    columnNumber: 33
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 507,
                  columnNumber: 31
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 505,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/SuperAdminDashboard:493:28", "data-dynamic-content": "true", className: feedback.is_approved ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700", children: feedback.is_approved ? "Approved" : "Hidden" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 512,
                columnNumber: 29
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 504,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:495:26", "data-dynamic-content": "true", className: "text-sm text-gray-600 mb-3 italic", "data-collection-item-field": "review", "data-collection-item-id": feedback?.id, children: [
              '"',
              feedback.review,
              '"'
            ] }, void 0, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 514,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:496:26", "data-dynamic-content": "true", className: "flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/SuperAdminDashboard:497:28", "data-dynamic-content": "true", className: "text-xs text-gray-400", children: format(new Date(feedback.created_date), "MMM d, yyyy") }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 516,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ jsxDEV(
                Button,
                {
                  "data-source-location": "pages/SuperAdminDashboard:498:28",
                  "data-dynamic-content": "true",
                  size: "sm",
                  variant: feedback.is_approved ? "destructive" : "default",
                  className: "ml-auto",
                  onClick: async () => {
                    await base44.entities.Feedback.update(feedback.id, { is_approved: !feedback.is_approved });
                    checkAccess();
                  },
                  children: feedback.is_approved ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
                    /* @__PURE__ */ jsxDEV(EyeOff, { "data-source-location": "pages/SuperAdminDashboard:500:56", "data-dynamic-content": "false", className: "w-3 h-3 mr-1" }, void 0, false, {
                      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                      lineNumber: 519,
                      columnNumber: 57
                    }, this),
                    "Hide"
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 519,
                    columnNumber: 55
                  }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
                    /* @__PURE__ */ jsxDEV(Eye, { "data-source-location": "pages/SuperAdminDashboard:500:103", "data-dynamic-content": "false", className: "w-3 h-3 mr-1" }, void 0, false, {
                      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                      lineNumber: 519,
                      columnNumber: 189
                    }, this),
                    "Show"
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 519,
                    columnNumber: 187
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 517,
                  columnNumber: 29
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                Button,
                {
                  "data-source-location": "pages/SuperAdminDashboard:502:28",
                  "data-dynamic-content": "true",
                  size: "sm",
                  variant: "outline",
                  onClick: async () => {
                    if (confirm("Delete this feedback?")) {
                      await base44.entities.Feedback.delete(feedback.id);
                      checkAccess();
                    }
                  },
                  children: [
                    /* @__PURE__ */ jsxDEV(Trash2, { "data-source-location": "pages/SuperAdminDashboard:504:30", "data-dynamic-content": "false", className: "w-3 h-3 mr-1" }, void 0, false, {
                      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                      lineNumber: 523,
                      columnNumber: 31
                    }, this),
                    "Delete"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 521,
                  columnNumber: 29
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 515,
              columnNumber: 27
            }, this)
          ] }, feedback.id, true, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 503,
            columnNumber: 23
          }, this);
        }) }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 498,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 497,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 495,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 494,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(TabsContent, { "data-source-location": "pages/SuperAdminDashboard:517:10", "data-dynamic-content": "true", value: "restaurants", className: "space-y-4 sm:space-y-6", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:518:12", "data-dynamic-content": "true", className: "grid grid-cols-2 sm:grid-cols-5 gap-3", children: [
          { v: activeRestaurants, l: "Active", cls: "from-green-50 to-emerald-50 border-green-200 text-green-700" },
          { v: basicRestaurants, l: "Basic Plan", cls: "from-blue-50 to-indigo-50 border-blue-200 text-blue-700" },
          { v: proRestaurants, l: "Pro Plan", cls: "from-orange-50 to-amber-50 border-orange-200 text-orange-700" },
          { v: suspendedRestaurants, l: "Suspended", cls: "from-yellow-50 to-amber-50 border-yellow-200 text-yellow-700" },
          { v: deletedRestaurants, l: "Deleted", cls: "from-red-50 to-rose-50 border-red-200 text-red-700" }
        ].map(
          (s) => /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/SuperAdminDashboard:526:16", "data-dynamic-content": "true", className: `bg-gradient-to-br border ${s.cls.split(" ").filter((c) => c.startsWith("from-") || c.startsWith("to-") || c.startsWith("border-")).join(" ")}`, children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/SuperAdminDashboard:527:18", "data-dynamic-content": "true", className: "p-3 sm:p-4 text-center", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:528:20", "data-dynamic-content": "true", className: `text-xl sm:text-2xl font-bold ${s.cls.split(" ").find((c) => c.startsWith("text-"))}`, "data-collection-item-field": "v", "data-collection-item-id": s?.id || s?._id, children: s.v }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 547,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:529:20", "data-dynamic-content": "true", className: "text-xs text-gray-600", "data-collection-item-field": "l", "data-collection-item-id": s?.id || s?._id, children: s.l }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 548,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 546,
            columnNumber: 19
          }, this) }, s.l, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 545,
            columnNumber: 15
          }, this)
        ) }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 537,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/SuperAdminDashboard:535:12", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/SuperAdminDashboard:536:14", "data-dynamic-content": "true", className: "p-3 sm:p-4", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:537:16", "data-dynamic-content": "true", className: "flex flex-col sm:flex-row gap-3", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:538:18", "data-dynamic-content": "true", className: "flex-1 relative", children: [
            /* @__PURE__ */ jsxDEV(Search, { "data-source-location": "pages/SuperAdminDashboard:539:20", "data-dynamic-content": "false", className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 558,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV(Input, { "data-source-location": "pages/SuperAdminDashboard:540:20", "data-dynamic-content": "true", placeholder: "Search restaurants...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "pl-9 w-full" }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 559,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 557,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV(Select, { "data-source-location": "pages/SuperAdminDashboard:542:18", "data-dynamic-content": "true", value: accountStatusFilter, onValueChange: setAccountStatusFilter, children: [
            /* @__PURE__ */ jsxDEV(SelectTrigger, { "data-source-location": "pages/SuperAdminDashboard:543:20", "data-dynamic-content": "false", className: "w-full sm:w-40", children: /* @__PURE__ */ jsxDEV(SelectValue, { "data-source-location": "pages/SuperAdminDashboard:543:62", "data-dynamic-content": "false" }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 562,
              columnNumber: 148
            }, this) }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 562,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV(SelectContent, { "data-source-location": "pages/SuperAdminDashboard:544:20", "data-dynamic-content": "false", children: [
              /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/SuperAdminDashboard:545:22", "data-dynamic-content": "false", value: "all", children: "All Status" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 564,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/SuperAdminDashboard:546:22", "data-dynamic-content": "false", value: "active", children: "Active" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 565,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/SuperAdminDashboard:547:22", "data-dynamic-content": "false", value: "suspended", children: "Suspended" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 566,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/SuperAdminDashboard:548:22", "data-dynamic-content": "false", value: "deleted", children: "Deleted" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 567,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 563,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 561,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV(
            Button,
            {
              "data-source-location": "pages/SuperAdminDashboard:551:18",
              "data-dynamic-content": "true",
              variant: "outline",
              size: "sm",
              className: "w-full sm:w-auto",
              onClick: () => {
                const csv = [["Restaurant ID", "Name", "City", "Plan", "Status", "Orders", "Created Date"].join(","), ...filteredRestaurants.map((r) => [r.restaurant_id, r.name, r.city, r.subscription_plan, r.account_status || "active", allOrders.filter((o) => o.restaurant_id === r.restaurant_id).length, new Date(r.created_date).toLocaleDateString()].join(","))].join("\n");
                const blob = new Blob([csv], { type: "text/csv" });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "restaurants.csv";
                a.click();
              },
              children: "Export CSV"
            },
            void 0,
            false,
            {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 570,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 556,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 555,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 554,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/SuperAdminDashboard:562:12", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "pages/SuperAdminDashboard:563:14", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "pages/SuperAdminDashboard:563:26", "data-dynamic-content": "false", className: "text-base sm:text-lg", children: "All Restaurants" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 582,
            columnNumber: 112
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 582,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/SuperAdminDashboard:564:14", "data-dynamic-content": "true", className: "p-0 sm:p-6 sm:pt-0", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:565:16", "data-dynamic-content": "true", className: "overflow-x-auto", children: /* @__PURE__ */ jsxDEV("table", { "data-source-location": "pages/SuperAdminDashboard:566:18", "data-dynamic-content": "true", className: "w-full min-w-[600px]", children: [
            /* @__PURE__ */ jsxDEV("thead", { "data-source-location": "pages/SuperAdminDashboard:567:20", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV("tr", { "data-source-location": "pages/SuperAdminDashboard:568:22", "data-dynamic-content": "false", className: "text-left text-xs sm:text-sm text-gray-500 border-b", children: [
              /* @__PURE__ */ jsxDEV("th", { "data-source-location": "pages/SuperAdminDashboard:569:24", "data-dynamic-content": "false", className: "pb-3 px-3 sm:px-0 font-medium", children: "Restaurant" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 588,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("th", { "data-source-location": "pages/SuperAdminDashboard:570:24", "data-dynamic-content": "false", className: "pb-3 font-medium hidden sm:table-cell", children: "ID" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 589,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("th", { "data-source-location": "pages/SuperAdminDashboard:571:24", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Status" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 590,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("th", { "data-source-location": "pages/SuperAdminDashboard:572:24", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Plan" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 591,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("th", { "data-source-location": "pages/SuperAdminDashboard:573:24", "data-dynamic-content": "false", className: "pb-3 font-medium hidden md:table-cell", children: "Sub." }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 592,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("th", { "data-source-location": "pages/SuperAdminDashboard:574:24", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Actions" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 593,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 587,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 586,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("tbody", { "data-source-location": "pages/SuperAdminDashboard:577:20", "data-dynamic-content": "true", className: "divide-y", children: filteredRestaurants.map((restaurant) => {
              const planBadge = getPlanBadge(restaurant.subscription_plan);
              const ordersCount = allOrders.filter((o) => o.restaurant_id === restaurant.restaurant_id).length;
              const canRestoreAccount = canRestore(restaurant);
              return /* @__PURE__ */ jsxDEV("tr", { "data-source-location": "pages/SuperAdminDashboard:583:26", "data-dynamic-content": "true", className: "text-xs sm:text-sm hover:bg-gray-50", "data-collection-item-id": restaurant?.id, children: [
                /* @__PURE__ */ jsxDEV("td", { "data-source-location": "pages/SuperAdminDashboard:584:28", "data-dynamic-content": "true", className: "py-3 px-3 sm:px-0", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:585:30", "data-dynamic-content": "true", className: "flex items-center gap-2", children: [
                  restaurant.logo_url ? /* @__PURE__ */ jsxDEV("img", { "data-source-location": "pages/SuperAdminDashboard:586:55", "data-dynamic-content": "true", src: restaurant.logo_url, alt: restaurant.name, className: "w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-cover flex-shrink-0" }, void 0, false, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 605,
                    columnNumber: 56
                  }, this) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:586:187", "data-dynamic-content": "false", className: "w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxDEV(Store, { "data-source-location": "pages/SuperAdminDashboard:586:300", "data-dynamic-content": "false", className: "w-4 h-4 sm:w-5 sm:h-5 text-orange-600" }, void 0, false, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 605,
                    columnNumber: 471
                  }, this) }, void 0, false, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 605,
                    columnNumber: 272
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:587:32", "data-dynamic-content": "true", className: "min-w-0", children: [
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:588:34", "data-dynamic-content": "true", className: "font-medium truncate max-w-[100px] sm:max-w-none", "data-collection-item-field": "name", "data-collection-item-id": restaurant?.id, children: restaurant.name }, void 0, false, {
                      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                      lineNumber: 607,
                      columnNumber: 35
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:589:34", "data-dynamic-content": "true", className: "text-xs text-gray-500", "data-collection-item-field": "city", "data-collection-item-id": restaurant?.id, children: [
                      restaurant.city,
                      " · ",
                      ordersCount
                    ] }, void 0, true, {
                      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                      lineNumber: 608,
                      columnNumber: 35
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 606,
                    columnNumber: 33
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 604,
                  columnNumber: 31
                }, this) }, void 0, false, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 603,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV("td", { "data-source-location": "pages/SuperAdminDashboard:593:28", "data-dynamic-content": "true", className: "py-3 font-mono text-xs hidden sm:table-cell", "data-collection-item-field": "restaurant_id", "data-collection-item-id": restaurant?.id, children: restaurant.restaurant_id }, void 0, false, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 612,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV("td", { "data-source-location": "pages/SuperAdminDashboard:594:28", "data-dynamic-content": "true", className: "py-3", children: /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/SuperAdminDashboard:594:49", "data-dynamic-content": "true", className: `${getAccountStatusColor(restaurant.account_status || "active")} text-xs`, children: (restaurant.account_status || "active").slice(0, 4) }, void 0, false, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 613,
                  columnNumber: 134
                }, this) }, void 0, false, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 613,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV("td", { "data-source-location": "pages/SuperAdminDashboard:595:28", "data-dynamic-content": "true", className: "py-3", children: /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/SuperAdminDashboard:595:49", "data-dynamic-content": "true", className: `${planBadge.color} text-xs`, "data-collection-item-field": "label", "data-collection-item-id": planBadge?.id, children: planBadge.label }, void 0, false, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 614,
                  columnNumber: 134
                }, this) }, void 0, false, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 614,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV("td", { "data-source-location": "pages/SuperAdminDashboard:596:28", "data-dynamic-content": "true", className: "py-3 hidden md:table-cell", children: /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/SuperAdminDashboard:596:70", "data-dynamic-content": "true", className: `${getSubscriptionStatusColor(restaurant.subscription_status)} text-xs`, "data-collection-item-field": "subscription_status", "data-collection-item-id": restaurant?.id, children: restaurant.subscription_status }, void 0, false, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 615,
                  columnNumber: 155
                }, this) }, void 0, false, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 615,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV("td", { "data-source-location": "pages/SuperAdminDashboard:597:28", "data-dynamic-content": "true", className: "py-3", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:598:30", "data-dynamic-content": "true", className: "flex gap-0.5", children: [
                  /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/SuperAdminDashboard:599:32", "data-dynamic-content": "true", variant: "ghost", size: "sm", className: "h-7 w-7 p-0", onClick: () => setSelectedRestaurant(restaurant), children: /* @__PURE__ */ jsxDEV(Eye, { "data-source-location": "pages/SuperAdminDashboard:599:140", "data-dynamic-content": "false", className: "w-3.5 h-3.5" }, void 0, false, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 618,
                    columnNumber: 225
                  }, this) }, void 0, false, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 618,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/SuperAdminDashboard:600:32", "data-dynamic-content": "true", variant: "ghost", size: "sm", className: "h-7 w-7 p-0", onClick: () => setEditingRestaurant({ ...restaurant }), children: /* @__PURE__ */ jsxDEV(Edit, { "data-source-location": "pages/SuperAdminDashboard:600:146", "data-dynamic-content": "false", className: "w-3.5 h-3.5" }, void 0, false, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 619,
                    columnNumber: 231
                  }, this) }, void 0, false, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 619,
                    columnNumber: 33
                  }, this),
                  (restaurant.account_status === "active" || !restaurant.account_status) && /* @__PURE__ */ jsxDEV(Fragment, { children: [
                    /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/SuperAdminDashboard:602:34", "data-dynamic-content": "true", variant: "ghost", size: "sm", className: "h-7 w-7 p-0 text-yellow-600", onClick: () => {
                      setSelectedRestaurant(restaurant);
                      setShowSuspendDialog(true);
                    }, children: /* @__PURE__ */ jsxDEV(ShieldAlert, { "data-source-location": "pages/SuperAdminDashboard:602:191", "data-dynamic-content": "false", className: "w-3.5 h-3.5" }, void 0, false, {
                      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                      lineNumber: 621,
                      columnNumber: 273
                    }, this) }, void 0, false, {
                      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                      lineNumber: 621,
                      columnNumber: 35
                    }, this),
                    /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/SuperAdminDashboard:603:34", "data-dynamic-content": "true", variant: "ghost", size: "sm", className: "h-7 w-7 p-0 text-red-600", onClick: () => {
                      setSelectedRestaurant(restaurant);
                      setShowDeleteDialog(true);
                    }, children: /* @__PURE__ */ jsxDEV(Ban, { "data-source-location": "pages/SuperAdminDashboard:603:187", "data-dynamic-content": "false", className: "w-3.5 h-3.5" }, void 0, false, {
                      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                      lineNumber: 622,
                      columnNumber: 269
                    }, this) }, void 0, false, {
                      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                      lineNumber: 622,
                      columnNumber: 35
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 620,
                    columnNumber: 108
                  }, this),
                  canRestoreAccount && /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/SuperAdminDashboard:605:54", "data-dynamic-content": "true", variant: "ghost", size: "sm", className: "h-7 w-7 p-0 text-green-600", onClick: () => {
                    setSelectedRestaurant(restaurant);
                    setShowRestoreDialog(true);
                  }, children: /* @__PURE__ */ jsxDEV(RotateCcw, { "data-source-location": "pages/SuperAdminDashboard:605:210", "data-dynamic-content": "false", className: "w-3.5 h-3.5" }, void 0, false, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 624,
                    columnNumber: 292
                  }, this) }, void 0, false, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 624,
                    columnNumber: 55
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 617,
                  columnNumber: 31
                }, this) }, void 0, false, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 616,
                  columnNumber: 29
                }, this)
              ] }, restaurant.id, true, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 602,
                columnNumber: 27
              }, this);
            }) }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 596,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 585,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 584,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 583,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 581,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 536,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(TabsContent, { "data-source-location": "pages/SuperAdminDashboard:619:10", "data-dynamic-content": "true", value: "support", className: "space-y-4 sm:space-y-6", children: /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/SuperAdminDashboard:620:12", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "pages/SuperAdminDashboard:621:14", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "pages/SuperAdminDashboard:621:26", "data-dynamic-content": "false", className: "text-base sm:text-lg", children: "Support Requests" }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 640,
          columnNumber: 112
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 640,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/SuperAdminDashboard:622:14", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:623:16", "data-dynamic-content": "true", className: "space-y-4", children: supportRequests.length === 0 ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:624:50", "data-dynamic-content": "false", className: "text-center py-8 text-gray-500", children: [
          /* @__PURE__ */ jsxDEV(HelpCircle, { "data-source-location": "pages/SuperAdminDashboard:624:98", "data-dynamic-content": "false", className: "w-12 h-12 mx-auto mb-3 text-gray-300" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 643,
            columnNumber: 184
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:624:161", "data-dynamic-content": "false", children: "No support requests yet" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 643,
            columnNumber: 332
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 643,
          columnNumber: 51
        }, this) : supportRequests.map(
          (request) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:626:22", "data-dynamic-content": "true", className: "border rounded-lg p-4", "data-collection-item-id": request?.id, children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:627:24", "data-dynamic-content": "true", className: "flex items-start justify-between gap-3 mb-3", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:628:26", "data-dynamic-content": "true", className: "min-w-0", children: [
                /* @__PURE__ */ jsxDEV("h4", { "data-source-location": "pages/SuperAdminDashboard:629:28", "data-dynamic-content": "true", className: "font-semibold truncate", "data-collection-item-field": "subject", "data-collection-item-id": request?.id, children: request.subject }, void 0, false, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 648,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:630:28", "data-dynamic-content": "true", className: "text-xs sm:text-sm text-gray-500", "data-collection-item-field": "restaurant_name", "data-collection-item-id": request?.id, children: [
                  request.restaurant_name,
                  " • ",
                  request.requester_name
                ] }, void 0, true, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 649,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 647,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/SuperAdminDashboard:632:26", "data-dynamic-content": "true", className: `flex-shrink-0 ${request.status === "open" ? "bg-red-100 text-red-700" : request.status === "in_progress" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}`, "data-collection-item-field": "status", "data-collection-item-id": request?.id, children: request.status }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 651,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 646,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:634:24", "data-dynamic-content": "true", className: "text-sm text-gray-600 mb-3", "data-collection-item-field": "description", "data-collection-item-id": request?.id, children: request.description }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 653,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:635:24", "data-dynamic-content": "true", className: "flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/SuperAdminDashboard:636:26", "data-dynamic-content": "true", variant: "outline", className: "text-xs", "data-collection-item-field": "issue_type", "data-collection-item-id": request?.id, children: request.issue_type }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 655,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/SuperAdminDashboard:637:26", "data-dynamic-content": "true", variant: "outline", className: "text-xs", "data-collection-item-field": "priority", "data-collection-item-id": request?.id, children: request.priority }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 656,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/SuperAdminDashboard:638:26", "data-dynamic-content": "true", className: "text-xs text-gray-400", children: format(new Date(request.created_date), "MMM d, yyyy HH:mm") }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 657,
                columnNumber: 27
              }, this),
              request.status !== "resolved" && request.status !== "closed" && /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/SuperAdminDashboard:639:91", "data-dynamic-content": "true", size: "sm", variant: "outline", onClick: () => setSelectedSupport(request), className: "ml-auto", children: "Resolve" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 658,
                columnNumber: 92
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 654,
              columnNumber: 25
            }, this)
          ] }, request.id, true, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 645,
            columnNumber: 19
          }, this)
        ) }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 642,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 641,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 639,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 638,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(TabsContent, { "data-source-location": "pages/SuperAdminDashboard:650:10", "data-dynamic-content": "true", value: "audit", className: "space-y-4 sm:space-y-6", children: /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/SuperAdminDashboard:651:12", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "pages/SuperAdminDashboard:652:14", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "pages/SuperAdminDashboard:652:26", "data-dynamic-content": "false", className: "text-base sm:text-lg", children: "Audit Logs" }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 671,
          columnNumber: 112
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 671,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/SuperAdminDashboard:653:14", "data-dynamic-content": "true", className: "p-0 sm:p-6 sm:pt-0", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:654:16", "data-dynamic-content": "true", className: "overflow-x-auto", children: /* @__PURE__ */ jsxDEV("table", { "data-source-location": "pages/SuperAdminDashboard:655:18", "data-dynamic-content": "true", className: "w-full min-w-[500px]", children: [
          /* @__PURE__ */ jsxDEV("thead", { "data-source-location": "pages/SuperAdminDashboard:656:20", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV("tr", { "data-source-location": "pages/SuperAdminDashboard:657:22", "data-dynamic-content": "false", className: "text-left text-xs sm:text-sm text-gray-500 border-b", children: [
            /* @__PURE__ */ jsxDEV("th", { "data-source-location": "pages/SuperAdminDashboard:658:24", "data-dynamic-content": "false", className: "pb-3 px-3 sm:px-0 font-medium", children: "Action" }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 677,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("th", { "data-source-location": "pages/SuperAdminDashboard:659:24", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Restaurant" }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 678,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("th", { "data-source-location": "pages/SuperAdminDashboard:660:24", "data-dynamic-content": "false", className: "pb-3 font-medium hidden sm:table-cell", children: "Admin" }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 679,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("th", { "data-source-location": "pages/SuperAdminDashboard:661:24", "data-dynamic-content": "false", className: "pb-3 font-medium hidden md:table-cell", children: "Reason" }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 680,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV("th", { "data-source-location": "pages/SuperAdminDashboard:662:24", "data-dynamic-content": "false", className: "pb-3 font-medium", children: "Date" }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 681,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 676,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 675,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("tbody", { "data-source-location": "pages/SuperAdminDashboard:665:20", "data-dynamic-content": "true", className: "divide-y", children: auditLogs.map(
            (log) => /* @__PURE__ */ jsxDEV("tr", { "data-source-location": "pages/SuperAdminDashboard:667:24", "data-dynamic-content": "true", className: "text-xs sm:text-sm hover:bg-gray-50", "data-collection-item-id": log?.id, children: [
              /* @__PURE__ */ jsxDEV("td", { "data-source-location": "pages/SuperAdminDashboard:668:26", "data-dynamic-content": "true", className: "py-3 px-3 sm:px-0", children: /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/SuperAdminDashboard:668:60", "data-dynamic-content": "true", variant: "outline", className: "capitalize text-xs", "data-collection-item-field": "action", "data-collection-item-id": log?.id, children: log.action.replace(/_/g, " ") }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 687,
                columnNumber: 145
              }, this) }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 687,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDEV("td", { "data-source-location": "pages/SuperAdminDashboard:669:26", "data-dynamic-content": "true", className: "py-3", children: [
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:669:47", "data-dynamic-content": "true", className: "font-medium truncate max-w-[120px]", "data-collection-item-field": "restaurant_name", "data-collection-item-id": log?.id, children: log.restaurant_name }, void 0, false, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 688,
                  columnNumber: 132
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:669:122", "data-dynamic-content": "true", className: "text-xs text-gray-500 hidden sm:block", "data-collection-item-field": "restaurant_id", "data-collection-item-id": log?.id, children: log.restaurant_id }, void 0, false, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 688,
                  columnNumber: 370
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 688,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDEV("td", { "data-source-location": "pages/SuperAdminDashboard:670:26", "data-dynamic-content": "true", className: "py-3 text-gray-600 hidden sm:table-cell truncate max-w-[150px]", "data-collection-item-field": "admin_email", "data-collection-item-id": log?.id, children: log.admin_email }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 689,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDEV("td", { "data-source-location": "pages/SuperAdminDashboard:671:26", "data-dynamic-content": "true", className: "py-3 text-gray-600 hidden md:table-cell truncate max-w-[150px]", children: log.reason || "-" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 690,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDEV("td", { "data-source-location": "pages/SuperAdminDashboard:672:26", "data-dynamic-content": "true", className: "py-3 text-gray-500 whitespace-nowrap", children: format(new Date(log.created_date), "MMM d, yy") }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 691,
                columnNumber: 27
              }, this)
            ] }, log.id, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 686,
              columnNumber: 23
            }, this)
          ) }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 684,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 674,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 673,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 672,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 670,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 669,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
      lineNumber: 274,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
      lineNumber: 273,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Dialog, { "data-source-location": "pages/SuperAdminDashboard:685:6", "data-dynamic-content": "true", open: !!selectedRestaurant && !showSuspendDialog && !showDeleteDialog && !showRestoreDialog, onOpenChange: () => setSelectedRestaurant(null), children: /* @__PURE__ */ jsxDEV(DialogContent, { "data-source-location": "pages/SuperAdminDashboard:686:8", "data-dynamic-content": "true", className: "max-w-2xl max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxDEV(DialogHeader, { "data-source-location": "pages/SuperAdminDashboard:687:10", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(DialogTitle, { "data-source-location": "pages/SuperAdminDashboard:687:24", "data-dynamic-content": "false", children: "Restaurant Details" }, void 0, false, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 706,
        columnNumber: 110
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 706,
        columnNumber: 11
      }, this),
      selectedRestaurant && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:689:12", "data-dynamic-content": "true", className: "space-y-4", "data-collection-item-field": "suspension_reason", "data-collection-item-id": selectedRestaurant?.id || selectedRestaurant?._id, children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:690:14", "data-dynamic-content": "true", className: "flex items-center gap-4 pb-4 border-b", children: [
          selectedRestaurant.logo_url ? /* @__PURE__ */ jsxDEV("img", { "data-source-location": "pages/SuperAdminDashboard:691:47", "data-dynamic-content": "true", src: selectedRestaurant.logo_url, alt: selectedRestaurant.name, className: "w-14 h-14 rounded-xl object-cover" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 710,
            columnNumber: 48
          }, this) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:691:167", "data-dynamic-content": "false", className: "w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Store, { "data-source-location": "pages/SuperAdminDashboard:691:252", "data-dynamic-content": "false", className: "w-7 h-7 text-orange-600" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 710,
            columnNumber: 423
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 710,
            columnNumber: 252
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:692:16", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/SuperAdminDashboard:692:21", "data-dynamic-content": "true", className: "text-lg sm:text-xl font-bold", "data-collection-item-field": "name", "data-collection-item-id": selectedRestaurant?.id || selectedRestaurant?._id, children: selectedRestaurant.name }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 711,
              columnNumber: 106
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:692:96", "data-dynamic-content": "true", className: "text-gray-500 text-sm", "data-collection-item-field": "restaurant_id", "data-collection-item-id": selectedRestaurant?.id || selectedRestaurant?._id, children: selectedRestaurant.restaurant_id }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 711,
              columnNumber: 375
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 711,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 709,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:694:14", "data-dynamic-content": "true", className: "grid grid-cols-2 gap-4 text-sm", children: [
          [["City", selectedRestaurant.city], ["Phone", selectedRestaurant.phone], ["Email", selectedRestaurant.email]].map(([l, v]) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:695:143", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:695:156", "data-dynamic-content": "true", className: "text-gray-500", "data-collection-item-field": "l", children: l }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 714,
              columnNumber: 242
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:695:192", "data-dynamic-content": "true", className: "font-medium truncate", "data-collection-item-field": "v", children: v }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 714,
              columnNumber: 394
            }, this)
          ] }, l, true, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 714,
            columnNumber: 144
          }, this)),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:696:16", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:696:21", "data-dynamic-content": "false", className: "text-gray-500", children: "Account Status" }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 715,
              columnNumber: 106
            }, this),
            /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/SuperAdminDashboard:696:68", "data-dynamic-content": "true", className: getAccountStatusColor(selectedRestaurant.account_status || "active"), children: selectedRestaurant.account_status || "active" }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 715,
              columnNumber: 238
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 715,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 713,
          columnNumber: 15
        }, this),
        selectedRestaurant.suspension_reason && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:698:55", "data-dynamic-content": "true", className: "border-t pt-4", children: [
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:698:86", "data-dynamic-content": "false", className: "text-sm text-gray-500 mb-1", children: "Suspension/Deletion Reason" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 717,
            columnNumber: 171
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:698:158", "data-dynamic-content": "true", className: "text-sm font-medium text-red-600", "data-collection-item-field": "suspension_reason", "data-collection-item-id": selectedRestaurant?.id || selectedRestaurant?._id, children: selectedRestaurant.suspension_reason }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 717,
            columnNumber: 328
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 717,
          columnNumber: 56
        }, this),
        selectedRestaurant.permanent_deletion_date && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:699:61", "data-dynamic-content": "true", className: "bg-red-50 border border-red-200 rounded-lg p-3", children: /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:699:125", "data-dynamic-content": "true", className: "text-sm font-medium text-red-700", children: [
          "Permanent deletion: ",
          format(new Date(selectedRestaurant.permanent_deletion_date), "MMM d, yyyy")
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 718,
          columnNumber: 210
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 718,
          columnNumber: 62
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:700:14", "data-dynamic-content": "true", className: "border-t pt-4", children: [
          /* @__PURE__ */ jsxDEV("h4", { "data-source-location": "pages/SuperAdminDashboard:701:16", "data-dynamic-content": "false", className: "font-semibold mb-2", children: "Subscription" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 720,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:702:16", "data-dynamic-content": "true", className: "grid grid-cols-3 gap-3 text-sm", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:703:18", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:703:23", "data-dynamic-content": "false", className: "text-gray-500", children: "Plan" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 722,
                columnNumber: 108
              }, this),
              /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/SuperAdminDashboard:703:60", "data-dynamic-content": "true", className: getPlanBadge(selectedRestaurant.subscription_plan).color, children: getPlanBadge(selectedRestaurant.subscription_plan).label }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 722,
                columnNumber: 230
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 722,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:704:18", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:704:23", "data-dynamic-content": "false", className: "text-gray-500", children: "Status" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 723,
                columnNumber: 108
              }, this),
              /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/SuperAdminDashboard:704:62", "data-dynamic-content": "true", className: getSubscriptionStatusColor(selectedRestaurant.subscription_status), "data-collection-item-field": "subscription_status", "data-collection-item-id": selectedRestaurant?.id || selectedRestaurant?._id, children: selectedRestaurant.subscription_status }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 723,
                columnNumber: 232
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 723,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:705:18", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:705:23", "data-dynamic-content": "false", className: "text-gray-500", children: "Expires" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 724,
                columnNumber: 108
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:705:63", "data-dynamic-content": "true", className: "font-medium", children: selectedRestaurant.subscription_expires_at ? format(new Date(selectedRestaurant.subscription_expires_at), "MMM d, yyyy") : "-" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 724,
                columnNumber: 233
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 724,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 721,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 719,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 708,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
      lineNumber: 705,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
      lineNumber: 704,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Dialog, { "data-source-location": "pages/SuperAdminDashboard:713:6", "data-dynamic-content": "true", open: showSuspendDialog, onOpenChange: setShowSuspendDialog, children: /* @__PURE__ */ jsxDEV(DialogContent, { "data-source-location": "pages/SuperAdminDashboard:714:8", "data-dynamic-content": "true", children: [
      /* @__PURE__ */ jsxDEV(DialogHeader, { "data-source-location": "pages/SuperAdminDashboard:715:10", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV(DialogTitle, { "data-source-location": "pages/SuperAdminDashboard:715:24", "data-dynamic-content": "false", children: "Suspend Account" }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 734,
          columnNumber: 109
        }, this),
        /* @__PURE__ */ jsxDEV(DialogDescription, { "data-source-location": "pages/SuperAdminDashboard:715:66", "data-dynamic-content": "true", "data-collection-item-field": "name", "data-collection-item-id": selectedRestaurant?.id || selectedRestaurant?._id, children: [
          "This will suspend ",
          selectedRestaurant?.name,
          ". Can be restored within 30 days."
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 734,
          columnNumber: 236
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 734,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:716:10", "data-dynamic-content": "true", className: "space-y-4", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:717:12", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("label", { "data-source-location": "pages/SuperAdminDashboard:717:17", "data-dynamic-content": "false", className: "text-sm font-medium text-gray-700 mb-1 block", children: "Reason *" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 736,
            columnNumber: 102
          }, this),
          /* @__PURE__ */ jsxDEV(Textarea, { "data-source-location": "pages/SuperAdminDashboard:717:97", "data-dynamic-content": "true", value: suspendReason, onChange: (e) => setSuspendReason(e.target.value), placeholder: "Provide a reason...", rows: 4 }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 736,
            columnNumber: 267
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 736,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:718:12", "data-dynamic-content": "true", className: "flex gap-3", children: [
          /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/SuperAdminDashboard:718:40", "data-dynamic-content": "true", variant: "outline", onClick: () => {
            setShowSuspendDialog(false);
            setSuspendReason("");
          }, className: "flex-1", children: "Cancel" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 737,
            columnNumber: 125
          }, this),
          /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/SuperAdminDashboard:718:171", "data-dynamic-content": "true", onClick: handleSuspendAccount, disabled: !suspendReason.trim(), className: "flex-1 bg-yellow-600 hover:bg-yellow-700", children: [
            /* @__PURE__ */ jsxDEV(ShieldAlert, { "data-source-location": "pages/SuperAdminDashboard:718:296", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 737,
              columnNumber: 547
            }, this),
            "Suspend"
          ] }, void 0, true, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 737,
            columnNumber: 337
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 737,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 735,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
      lineNumber: 733,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
      lineNumber: 732,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Dialog, { "data-source-location": "pages/SuperAdminDashboard:723:6", "data-dynamic-content": "true", open: showDeleteDialog, onOpenChange: setShowDeleteDialog, children: /* @__PURE__ */ jsxDEV(DialogContent, { "data-source-location": "pages/SuperAdminDashboard:724:8", "data-dynamic-content": "true", children: [
      /* @__PURE__ */ jsxDEV(DialogHeader, { "data-source-location": "pages/SuperAdminDashboard:725:10", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV(DialogTitle, { "data-source-location": "pages/SuperAdminDashboard:725:24", "data-dynamic-content": "false", children: "Delete Account" }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 744,
          columnNumber: 109
        }, this),
        /* @__PURE__ */ jsxDEV(DialogDescription, { "data-source-location": "pages/SuperAdminDashboard:725:65", "data-dynamic-content": "true", "data-collection-item-field": "name", "data-collection-item-id": selectedRestaurant?.id || selectedRestaurant?._id, children: [
          "This will mark ",
          selectedRestaurant?.name,
          " for deletion. Restorable within 30 days."
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 744,
          columnNumber: 235
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 744,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:726:10", "data-dynamic-content": "true", className: "space-y-4", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:727:12", "data-dynamic-content": "false", className: "bg-red-50 border border-red-200 rounded-lg p-3", children: /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:727:76", "data-dynamic-content": "false", className: "text-sm text-red-700", children: "⚠️ The restaurant will lose access immediately." }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 746,
          columnNumber: 162
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 746,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:728:12", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("label", { "data-source-location": "pages/SuperAdminDashboard:728:17", "data-dynamic-content": "false", className: "text-sm font-medium text-gray-700 mb-1 block", children: "Reason *" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 747,
            columnNumber: 102
          }, this),
          /* @__PURE__ */ jsxDEV(Textarea, { "data-source-location": "pages/SuperAdminDashboard:728:97", "data-dynamic-content": "true", value: deleteReason, onChange: (e) => setDeleteReason(e.target.value), placeholder: "Provide a reason...", rows: 4 }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 747,
            columnNumber: 267
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 747,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:729:12", "data-dynamic-content": "true", className: "flex gap-3", children: [
          /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/SuperAdminDashboard:729:40", "data-dynamic-content": "true", variant: "outline", onClick: () => {
            setShowDeleteDialog(false);
            setDeleteReason("");
          }, className: "flex-1", children: "Cancel" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 748,
            columnNumber: 125
          }, this),
          /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/SuperAdminDashboard:729:169", "data-dynamic-content": "true", onClick: handleDeleteAccount, disabled: !deleteReason.trim(), className: "flex-1 bg-red-600 hover:bg-red-700", children: [
            /* @__PURE__ */ jsxDEV(Ban, { "data-source-location": "pages/SuperAdminDashboard:729:286", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 748,
              columnNumber: 537
            }, this),
            "Delete"
          ] }, void 0, true, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 748,
            columnNumber: 335
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 748,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 745,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
      lineNumber: 743,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
      lineNumber: 742,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Dialog, { "data-source-location": "pages/SuperAdminDashboard:734:6", "data-dynamic-content": "true", open: showRestoreDialog, onOpenChange: setShowRestoreDialog, children: /* @__PURE__ */ jsxDEV(DialogContent, { "data-source-location": "pages/SuperAdminDashboard:735:8", "data-dynamic-content": "true", children: [
      /* @__PURE__ */ jsxDEV(DialogHeader, { "data-source-location": "pages/SuperAdminDashboard:736:10", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV(DialogTitle, { "data-source-location": "pages/SuperAdminDashboard:736:24", "data-dynamic-content": "false", children: "Restore Account" }, void 0, false, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 755,
          columnNumber: 109
        }, this),
        /* @__PURE__ */ jsxDEV(DialogDescription, { "data-source-location": "pages/SuperAdminDashboard:736:66", "data-dynamic-content": "true", "data-collection-item-field": "name", "data-collection-item-id": selectedRestaurant?.id || selectedRestaurant?._id, children: [
          "Restore ",
          selectedRestaurant?.name,
          " and grant access again."
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 755,
          columnNumber: 236
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 755,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:737:10", "data-dynamic-content": "true", className: "space-y-4", children: [
        selectedRestaurant && /* @__PURE__ */ jsxDEV(Fragment, { children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:739:14", "data-dynamic-content": "false", className: "bg-green-50 border border-green-200 rounded-lg p-3", children: /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:739:82", "data-dynamic-content": "false", className: "text-sm text-green-700", children: "✓ Within the 30-day restore window" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 758,
            columnNumber: 168
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 758,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:740:14", "data-dynamic-content": "true", className: "space-y-2 text-sm", "data-collection-item-field": "suspension_reason", "data-collection-item-id": selectedRestaurant?.id || selectedRestaurant?._id, children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:741:16", "data-dynamic-content": "true", "data-collection-item-field": "name", "data-collection-item-id": selectedRestaurant?.id || selectedRestaurant?._id, children: [
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/SuperAdminDashboard:741:19", "data-dynamic-content": "false", className: "font-medium", children: "Restaurant:" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 760,
                columnNumber: 214
              }, this),
              " ",
              selectedRestaurant.name
            ] }, void 0, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 760,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:742:16", "data-dynamic-content": "true", "data-collection-item-field": "account_status", "data-collection-item-id": selectedRestaurant?.id || selectedRestaurant?._id, children: [
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/SuperAdminDashboard:742:19", "data-dynamic-content": "false", className: "font-medium", children: "Status:" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 761,
                columnNumber: 224
              }, this),
              " ",
              selectedRestaurant.account_status
            ] }, void 0, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 761,
              columnNumber: 17
            }, this),
            selectedRestaurant.suspension_reason && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:743:57", "data-dynamic-content": "true", "data-collection-item-field": "suspension_reason", "data-collection-item-id": selectedRestaurant?.id || selectedRestaurant?._id, children: [
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/SuperAdminDashboard:743:60", "data-dynamic-content": "false", className: "font-medium", children: "Reason:" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 762,
                columnNumber: 268
              }, this),
              " ",
              selectedRestaurant.suspension_reason
            ] }, void 0, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 762,
              columnNumber: 58
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 759,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 757,
          columnNumber: 36
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:746:12", "data-dynamic-content": "true", className: "flex gap-3", children: [
          /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/SuperAdminDashboard:746:40", "data-dynamic-content": "true", variant: "outline", onClick: () => setShowRestoreDialog(false), className: "flex-1", children: "Cancel" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 765,
            columnNumber: 125
          }, this),
          /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/SuperAdminDashboard:746:144", "data-dynamic-content": "true", onClick: handleRestoreAccount, className: "flex-1 bg-green-600 hover:bg-green-700", children: [
            /* @__PURE__ */ jsxDEV(RotateCcw, { "data-source-location": "pages/SuperAdminDashboard:746:234", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 765,
              columnNumber: 488
            }, this),
            "Restore"
          ] }, void 0, true, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 765,
            columnNumber: 313
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 765,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 756,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
      lineNumber: 754,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
      lineNumber: 753,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Dialog, { "data-source-location": "pages/SuperAdminDashboard:751:6", "data-dynamic-content": "true", open: !!editingRestaurant, onOpenChange: () => setEditingRestaurant(null), children: /* @__PURE__ */ jsxDEV(DialogContent, { "data-source-location": "pages/SuperAdminDashboard:752:8", "data-dynamic-content": "true", className: "max-w-2xl max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxDEV(DialogHeader, { "data-source-location": "pages/SuperAdminDashboard:753:10", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(DialogTitle, { "data-source-location": "pages/SuperAdminDashboard:753:24", "data-dynamic-content": "true", "data-collection-item-field": "name", "data-collection-item-id": editingRestaurant?.id || editingRestaurant?._id, children: [
        "Edit Restaurant - ",
        editingRestaurant?.name
      ] }, void 0, true, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 772,
        columnNumber: 109
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 772,
        columnNumber: 11
      }, this),
      editingRestaurant && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:755:12", "data-dynamic-content": "true", className: "space-y-6", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:756:14", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("h4", { "data-source-location": "pages/SuperAdminDashboard:757:16", "data-dynamic-content": "false", className: "font-semibold mb-3", children: "Subscription Plan" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 776,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:758:16", "data-dynamic-content": "true", className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:759:18", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("label", { "data-source-location": "pages/SuperAdminDashboard:759:23", "data-dynamic-content": "false", className: "text-sm font-medium text-gray-700 mb-1 block", children: "Plan" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 778,
                columnNumber: 108
              }, this),
              /* @__PURE__ */ jsxDEV(Select, { "data-source-location": "pages/SuperAdminDashboard:760:20", "data-dynamic-content": "true", value: editingRestaurant.subscription_plan, onValueChange: (v) => setEditingRestaurant({ ...editingRestaurant, subscription_plan: v }), children: [
                /* @__PURE__ */ jsxDEV(SelectTrigger, { "data-source-location": "pages/SuperAdminDashboard:761:22", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(SelectValue, { "data-source-location": "pages/SuperAdminDashboard:761:37", "data-dynamic-content": "false" }, void 0, false, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 780,
                  columnNumber: 123
                }, this) }, void 0, false, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 780,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV(SelectContent, { "data-source-location": "pages/SuperAdminDashboard:762:22", "data-dynamic-content": "false", children: [
                  /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/SuperAdminDashboard:762:37", "data-dynamic-content": "false", value: "trial", children: "Trial" }, void 0, false, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 781,
                    columnNumber: 123
                  }, this),
                  /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/SuperAdminDashboard:762:81", "data-dynamic-content": "false", value: "basic", children: "Basic" }, void 0, false, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 781,
                    columnNumber: 252
                  }, this),
                  /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/SuperAdminDashboard:762:125", "data-dynamic-content": "false", value: "pro", children: "Pro" }, void 0, false, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 781,
                    columnNumber: 381
                  }, this),
                  /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/SuperAdminDashboard:762:165", "data-dynamic-content": "false", value: "multi_outlet", children: "Multi-Outlet" }, void 0, false, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 781,
                    columnNumber: 507
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 781,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 779,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 778,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:764:18", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("label", { "data-source-location": "pages/SuperAdminDashboard:764:23", "data-dynamic-content": "false", className: "text-sm font-medium text-gray-700 mb-1 block", children: "Sub. Status" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 783,
                columnNumber: 108
              }, this),
              /* @__PURE__ */ jsxDEV(Select, { "data-source-location": "pages/SuperAdminDashboard:765:20", "data-dynamic-content": "true", value: editingRestaurant.subscription_status, onValueChange: (v) => setEditingRestaurant({ ...editingRestaurant, subscription_status: v }), children: [
                /* @__PURE__ */ jsxDEV(SelectTrigger, { "data-source-location": "pages/SuperAdminDashboard:766:22", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(SelectValue, { "data-source-location": "pages/SuperAdminDashboard:766:37", "data-dynamic-content": "false" }, void 0, false, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 785,
                  columnNumber: 123
                }, this) }, void 0, false, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 785,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV(SelectContent, { "data-source-location": "pages/SuperAdminDashboard:767:22", "data-dynamic-content": "false", children: [
                  /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/SuperAdminDashboard:767:37", "data-dynamic-content": "false", value: "active", children: "Active" }, void 0, false, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 786,
                    columnNumber: 123
                  }, this),
                  /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/SuperAdminDashboard:767:83", "data-dynamic-content": "false", value: "expired", children: "Expired" }, void 0, false, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 786,
                    columnNumber: 254
                  }, this),
                  /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/SuperAdminDashboard:767:131", "data-dynamic-content": "false", value: "cancelled", children: "Cancelled" }, void 0, false, {
                    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                    lineNumber: 786,
                    columnNumber: 387
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                  lineNumber: 786,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 784,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 783,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:769:18", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("label", { "data-source-location": "pages/SuperAdminDashboard:769:23", "data-dynamic-content": "false", className: "text-sm font-medium text-gray-700 mb-1 block", children: "Expires At" }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 788,
                columnNumber: 108
              }, this),
              /* @__PURE__ */ jsxDEV(Input, { "data-source-location": "pages/SuperAdminDashboard:769:105", "data-dynamic-content": "true", type: "date", value: editingRestaurant.subscription_expires_at || "", onChange: (e) => setEditingRestaurant({ ...editingRestaurant, subscription_expires_at: e.target.value }) }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 788,
                columnNumber: 275
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 788,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 777,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 775,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:772:14", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("h4", { "data-source-location": "pages/SuperAdminDashboard:773:16", "data-dynamic-content": "false", className: "font-semibold mb-3", children: "Enabled Features" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 792,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:774:16", "data-dynamic-content": "true", className: "grid grid-cols-2 gap-2", children: [{ key: "qr_ordering", label: "QR Ordering" }, { key: "direct_orders", label: "Direct Orders" }, { key: "payment_integration", label: "Payments" }, { key: "customer_analytics", label: "Analytics" }, { key: "multi_outlet", label: "Multi Outlet" }, { key: "custom_branding", label: "Branding" }, { key: "delivery", label: "Delivery" }, { key: "takeaway", label: "Takeaway" }].map(
            (f, __arrIdx__) => /* @__PURE__ */ jsxDEV("label", { "data-source-location": "pages/SuperAdminDashboard:776:20", "data-dynamic-content": "true", className: "flex items-center gap-2 p-2.5 border rounded-lg cursor-pointer hover:bg-gray-50 text-sm", "data-arr-index": __arrIdx__, "data-arr-field": "label", children: [
              /* @__PURE__ */ jsxDEV("input", { "data-source-location": "pages/SuperAdminDashboard:777:22", "data-dynamic-content": "true", type: "checkbox", checked: editingRestaurant.features_enabled?.[f.key] || false, onChange: (e) => setEditingRestaurant({ ...editingRestaurant, features_enabled: { ...editingRestaurant.features_enabled, [f.key]: e.target.checked } }), className: "w-4 h-4 text-orange-600 rounded", "data-arr-index": __arrIdx__ }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 796,
                columnNumber: 23
              }, this),
              f.label
            ] }, f.key, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 795,
              columnNumber: 17
            }, this)
          ) }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 793,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 791,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:783:14", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("h4", { "data-source-location": "pages/SuperAdminDashboard:784:16", "data-dynamic-content": "false", className: "font-semibold mb-3", children: "Settings" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 803,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:785:16", "data-dynamic-content": "true", className: "grid grid-cols-2 gap-4", children: [{ l: "Currency", k: "currency", t: "text", def: "INR" }, { l: "Tax Rate (%)", k: "tax_rate", t: "number", def: 5 }, { l: "Service Charge (%)", k: "service_charge", t: "number", def: 0 }, { l: "Table Count", k: "table_count", t: "number", def: 10 }].map(
            (s, __arrIdx__) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:787:20", "data-dynamic-content": "true", "data-arr-index": __arrIdx__, children: [
              /* @__PURE__ */ jsxDEV("label", { "data-source-location": "pages/SuperAdminDashboard:787:35", "data-dynamic-content": "true", className: "text-sm font-medium text-gray-700 mb-1 block", "data-arr-index": __arrIdx__, "data-arr-field": "l", children: s.l }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 806,
                columnNumber: 144
              }, this),
              /* @__PURE__ */ jsxDEV(Input, { "data-source-location": "pages/SuperAdminDashboard:788:22", "data-dynamic-content": "true", type: s.t, value: editingRestaurant.settings?.[s.k] ?? s.def, onChange: (e) => setEditingRestaurant({ ...editingRestaurant, settings: { ...editingRestaurant.settings, [s.k]: s.t === "number" ? s.k === "table_count" ? parseInt(e.target.value) : parseFloat(e.target.value) : e.target.value } }), "data-arr-index": __arrIdx__ }, void 0, false, {
                fileName: "/app/src/pages/SuperAdminDashboard.jsx",
                lineNumber: 807,
                columnNumber: 23
              }, this)
            ] }, s.k, true, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 806,
              columnNumber: 17
            }, this)
          ) }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 804,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 802,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:792:14", "data-dynamic-content": "true", className: "flex gap-3 pt-4 border-t", children: [
          /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/SuperAdminDashboard:793:16", "data-dynamic-content": "true", variant: "outline", onClick: () => setEditingRestaurant(null), className: "flex-1", children: "Cancel" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 812,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/SuperAdminDashboard:794:16", "data-dynamic-content": "true", onClick: handleSaveRestaurant, disabled: isSaving, className: "flex-1 bg-gradient-to-r from-orange-600 to-orange-500", children: isSaving ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:795:32", "data-dynamic-content": "false", className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 814,
              columnNumber: 33
            }, this),
            "Saving..."
          ] }, void 0, true, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 814,
            columnNumber: 31
          }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV(Save, { "data-source-location": "pages/SuperAdminDashboard:795:135", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 814,
              columnNumber: 221
            }, this),
            "Save Changes"
          ] }, void 0, true, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 814,
            columnNumber: 219
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 813,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 811,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 774,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
      lineNumber: 771,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
      lineNumber: 770,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Dialog, { "data-source-location": "pages/SuperAdminDashboard:803:6", "data-dynamic-content": "true", open: !!selectedSupport, onOpenChange: () => setSelectedSupport(null), children: /* @__PURE__ */ jsxDEV(DialogContent, { "data-source-location": "pages/SuperAdminDashboard:804:8", "data-dynamic-content": "true", children: [
      /* @__PURE__ */ jsxDEV(DialogHeader, { "data-source-location": "pages/SuperAdminDashboard:805:10", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(DialogTitle, { "data-source-location": "pages/SuperAdminDashboard:805:24", "data-dynamic-content": "false", children: "Resolve Support Request" }, void 0, false, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 824,
        columnNumber: 110
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 824,
        columnNumber: 11
      }, this),
      selectedSupport && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:807:12", "data-dynamic-content": "true", className: "space-y-4", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:808:14", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:808:19", "data-dynamic-content": "true", className: "text-sm font-medium", "data-collection-item-field": "subject", "data-collection-item-id": selectedSupport?.id || selectedSupport?._id, children: selectedSupport.subject }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 827,
            columnNumber: 104
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/SuperAdminDashboard:808:83", "data-dynamic-content": "true", className: "text-sm text-gray-500", "data-collection-item-field": "restaurant_name", "data-collection-item-id": selectedSupport?.id || selectedSupport?._id, children: selectedSupport.restaurant_name }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 827,
            columnNumber: 359
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 827,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:809:14", "data-dynamic-content": "false", children: [
          /* @__PURE__ */ jsxDEV("label", { "data-source-location": "pages/SuperAdminDashboard:809:19", "data-dynamic-content": "false", className: "text-sm font-medium text-gray-700 mb-1 block", children: "Admin Notes" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 828,
            columnNumber: 105
          }, this),
          /* @__PURE__ */ jsxDEV(Textarea, { "data-source-location": "pages/SuperAdminDashboard:809:102", "data-dynamic-content": "false", placeholder: "Add resolution notes...", rows: 4, id: "admin-notes" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 828,
            columnNumber: 273
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 828,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:810:14", "data-dynamic-content": "true", className: "flex gap-3", children: [
          /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/SuperAdminDashboard:811:16", "data-dynamic-content": "true", variant: "outline", onClick: () => setSelectedSupport(null), className: "flex-1", children: "Cancel" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 830,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/SuperAdminDashboard:812:16", "data-dynamic-content": "true", onClick: () => {
            const notes = document.getElementById("admin-notes").value;
            handleResolveSupportRequest(selectedSupport.id, notes);
          }, className: "flex-1 bg-gradient-to-r from-orange-600 to-orange-500", children: "Mark as Resolved" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 831,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 829,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 826,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
      lineNumber: 823,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
      lineNumber: 822,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Dialog, { "data-source-location": "pages/SuperAdminDashboard:819:6", "data-dynamic-content": "true", open: showEmailDialog, onOpenChange: setShowEmailDialog, children: /* @__PURE__ */ jsxDEV(DialogContent, { "data-source-location": "pages/SuperAdminDashboard:820:8", "data-dynamic-content": "true", className: "max-w-lg", children: [
      /* @__PURE__ */ jsxDEV(DialogHeader, { "data-source-location": "pages/SuperAdminDashboard:821:10", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(DialogTitle, { "data-source-location": "pages/SuperAdminDashboard:821:24", "data-dynamic-content": "false", children: "Send Email" }, void 0, false, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 840,
        columnNumber: 110
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 840,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:822:10", "data-dynamic-content": "true", className: "space-y-4", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:823:12", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("label", { "data-source-location": "pages/SuperAdminDashboard:823:17", "data-dynamic-content": "false", className: "text-sm font-medium text-gray-700 mb-1 block", children: "To Email" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 842,
            columnNumber: 102
          }, this),
          /* @__PURE__ */ jsxDEV(Input, { "data-source-location": "pages/SuperAdminDashboard:823:97", "data-dynamic-content": "true", value: emailData.to, onChange: (e) => setEmailData({ ...emailData, to: e.target.value }), placeholder: "restaurant@example.com", type: "email" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 842,
            columnNumber: 267
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 842,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:824:12", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("label", { "data-source-location": "pages/SuperAdminDashboard:824:17", "data-dynamic-content": "false", className: "text-sm font-medium text-gray-700 mb-1 block", children: "Subject" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 843,
            columnNumber: 102
          }, this),
          /* @__PURE__ */ jsxDEV(Input, { "data-source-location": "pages/SuperAdminDashboard:824:96", "data-dynamic-content": "true", value: emailData.subject, onChange: (e) => setEmailData({ ...emailData, subject: e.target.value }), placeholder: "Email subject" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 843,
            columnNumber: 266
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 843,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:825:12", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("label", { "data-source-location": "pages/SuperAdminDashboard:825:17", "data-dynamic-content": "false", className: "text-sm font-medium text-gray-700 mb-1 block", children: "Message" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 844,
            columnNumber: 102
          }, this),
          /* @__PURE__ */ jsxDEV(Textarea, { "data-source-location": "pages/SuperAdminDashboard:825:96", "data-dynamic-content": "true", value: emailData.body, onChange: (e) => setEmailData({ ...emailData, body: e.target.value }), placeholder: "Write your message here...", rows: 5 }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 844,
            columnNumber: 266
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 844,
          columnNumber: 13
        }, this),
        emailSuccess && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:826:29", "data-dynamic-content": "true", className: "bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2", "data-collection-item-field": "emailSuccess", children: [
          /* @__PURE__ */ jsxDEV(CheckCircle, { "data-source-location": "pages/SuperAdminDashboard:826:142", "data-dynamic-content": "false", className: "w-5 h-5" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 845,
            columnNumber: 269
          }, this),
          emailSuccess
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 845,
          columnNumber: 30
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:827:12", "data-dynamic-content": "true", className: "flex gap-3", children: [
          /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/SuperAdminDashboard:828:14", "data-dynamic-content": "true", variant: "outline", onClick: () => setShowEmailDialog(false), className: "flex-1", children: "Cancel" }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 847,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/SuperAdminDashboard:829:14", "data-dynamic-content": "true", onClick: handleSendEmail, disabled: !emailData.to || !emailData.subject || !emailData.body || isSendingEmail, className: "flex-1 bg-gradient-to-r from-orange-600 to-orange-500", children: isSendingEmail ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/SuperAdminDashboard:830:36", "data-dynamic-content": "false", className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 849,
              columnNumber: 37
            }, this),
            "Sending..."
          ] }, void 0, true, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 849,
            columnNumber: 35
          }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV(Send, { "data-source-location": "pages/SuperAdminDashboard:830:140", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
              fileName: "/app/src/pages/SuperAdminDashboard.jsx",
              lineNumber: 849,
              columnNumber: 226
            }, this),
            "Send Email"
          ] }, void 0, true, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 849,
            columnNumber: 224
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/SuperAdminDashboard.jsx",
            lineNumber: 848,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/SuperAdminDashboard.jsx",
          lineNumber: 846,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/SuperAdminDashboard.jsx",
        lineNumber: 841,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
      lineNumber: 839,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
      lineNumber: 838,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(RazorpayConfigDialog, { "data-source-location": "pages/SuperAdminDashboard:837:6", "data-dynamic-content": "true", open: showRazorpayDialog, onClose: () => setShowRazorpayDialog(false) }, void 0, false, {
      fileName: "/app/src/pages/SuperAdminDashboard.jsx",
      lineNumber: 856,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/SuperAdminDashboard.jsx",
    lineNumber: 248,
    columnNumber: 5
  }, this);
}
_s(SuperAdminDashboard, "YbcyBW8SXjO9erhDGt20K2qmds0=", false, function() {
  return [useNavigate];
});
_c = SuperAdminDashboard;
var _c;
$RefreshReg$(_c, "SuperAdminDashboard");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/SuperAdminDashboard.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/SuperAdminDashboard.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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RCxXQUFXO0FBQUE7QUFBQXFWLEtBRE5sUztBQUFtQixJQUFBa1M7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VOYXZpZ2F0ZSIsImJhc2U0NCIsImNyZWF0ZVBhZ2VVcmwiLCJTdG9yZSIsIlVzZXJzIiwiSW5kaWFuUnVwZWUiLCJUcmVuZGluZ1VwIiwiU2VhcmNoIiwiRXllIiwiQmFuIiwiQ2hlY2tDaXJjbGUiLCJDcm93biIsIk1haWwiLCJTZW5kIiwiRWRpdCIsIlNhdmUiLCJSb3RhdGVDY3ciLCJBbGVydFRyaWFuZ2xlIiwiU2hpZWxkQWxlcnQiLCJIZWxwQ2lyY2xlIiwiU2V0dGluZ3MiLCJBY3Rpdml0eSIsIlgiLCJNZXNzYWdlU3F1YXJlIiwiRXllT2ZmIiwiVHJhc2gyIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEhlYWRlciIsIkNhcmRUaXRsZSIsIkJ1dHRvbiIsIklucHV0IiwiQmFkZ2UiLCJUYWJzIiwiVGFic0NvbnRlbnQiLCJUYWJzTGlzdCIsIlRhYnNUcmlnZ2VyIiwiVGV4dGFyZWEiLCJTZWxlY3QiLCJTZWxlY3RDb250ZW50IiwiU2VsZWN0SXRlbSIsIlNlbGVjdFRyaWdnZXIiLCJTZWxlY3RWYWx1ZSIsIkRpYWxvZyIsIkRpYWxvZ0NvbnRlbnQiLCJEaWFsb2dIZWFkZXIiLCJEaWFsb2dUaXRsZSIsIkRpYWxvZ0Rlc2NyaXB0aW9uIiwiZm9ybWF0IiwiUmF6b3JwYXlDb25maWdEaWFsb2ciLCJBZG1pblN0YXRzR3JpZCIsIlN1cGVyQWRtaW5EYXNoYm9hcmQiLCJfcyIsIm5hdmlnYXRlIiwidXNlciIsInNldFVzZXIiLCJyZXN0YXVyYW50cyIsInNldFJlc3RhdXJhbnRzIiwiYWxsT3JkZXJzIiwic2V0QWxsT3JkZXJzIiwiYXVkaXRMb2dzIiwic2V0QXVkaXRMb2dzIiwic3VwcG9ydFJlcXVlc3RzIiwic2V0U3VwcG9ydFJlcXVlc3RzIiwiZmVlZGJhY2tzIiwic2V0RmVlZGJhY2tzIiwiYWxsQ2hhdE1lc3NhZ2VzIiwic2V0QWxsQ2hhdE1lc3NhZ2VzIiwicmVzdGF1cmFudFN1cHBvcnRDaGF0cyIsInNldFJlc3RhdXJhbnRTdXBwb3J0Q2hhdHMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwiYWNjb3VudFN0YXR1c0ZpbHRlciIsInNldEFjY291bnRTdGF0dXNGaWx0ZXIiLCJzZWxlY3RlZFJlc3RhdXJhbnQiLCJzZXRTZWxlY3RlZFJlc3RhdXJhbnQiLCJpc1Bhc3N3b3JkVmVyaWZpZWQiLCJzZXRJc1Bhc3N3b3JkVmVyaWZpZWQiLCJwYXNzd29yZElucHV0Iiwic2V0UGFzc3dvcmRJbnB1dCIsInBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwic2hvd0VtYWlsRGlhbG9nIiwic2V0U2hvd0VtYWlsRGlhbG9nIiwic2hvd1N1c3BlbmREaWFsb2ciLCJzZXRTaG93U3VzcGVuZERpYWxvZyIsInNob3dEZWxldGVEaWFsb2ciLCJzZXRTaG93RGVsZXRlRGlhbG9nIiwic2hvd1Jlc3RvcmVEaWFsb2ciLCJzZXRTaG93UmVzdG9yZURpYWxvZyIsImVkaXRpbmdSZXN0YXVyYW50Iiwic2V0RWRpdGluZ1Jlc3RhdXJhbnQiLCJzZWxlY3RlZFN1cHBvcnQiLCJzZXRTZWxlY3RlZFN1cHBvcnQiLCJzaG93Q3JlYXRlUGxhbkRpYWxvZyIsInNldFNob3dDcmVhdGVQbGFuRGlhbG9nIiwiY3VzdG9tUGxhbnMiLCJzZXRDdXN0b21QbGFucyIsInNob3dSYXpvcnBheURpYWxvZyIsInNldFNob3dSYXpvcnBheURpYWxvZyIsImVtYWlsRGF0YSIsInNldEVtYWlsRGF0YSIsInRvIiwic3ViamVjdCIsImJvZHkiLCJzdXNwZW5kUmVhc29uIiwic2V0U3VzcGVuZFJlYXNvbiIsImRlbGV0ZVJlYXNvbiIsInNldERlbGV0ZVJlYXNvbiIsImlzU2VuZGluZ0VtYWlsIiwic2V0SXNTZW5kaW5nRW1haWwiLCJpc1NhdmluZyIsInNldElzU2F2aW5nIiwiZW1haWxTdWNjZXNzIiwic2V0RW1haWxTdWNjZXNzIiwiY2hlY2tBY2Nlc3MiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImlzQXV0aCIsImF1dGgiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ1c2VyRGF0YSIsIm1lIiwicm9sZSIsInJlc3RhdXJhbnRfaWQiLCJyZXN0YXVyYW50c0RhdGEiLCJvcmRlcnNEYXRhIiwiYXVkaXREYXRhIiwic3VwcG9ydERhdGEiLCJmZWVkYmFja0RhdGEiLCJjaGF0RGF0YSIsInN1cHBvcnRDaGF0RGF0YSIsIlByb21pc2UiLCJhbGwiLCJlbnRpdGllcyIsIlJlc3RhdXJhbnQiLCJsaXN0IiwiT3JkZXIiLCJBdWRpdExvZyIsIlN1cHBvcnRSZXF1ZXN0IiwiRmVlZGJhY2siLCJDaGF0TWVzc2FnZSIsIlJlc3RhdXJhbnRTdXBwb3J0Q2hhdCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjcmVhdGVBdWRpdExvZyIsImFjdGlvbiIsInJlc3RhdXJhbnQiLCJyZWFzb24iLCJwcmV2aW91c1ZhbHVlIiwibmV3VmFsdWUiLCJjcmVhdGUiLCJyZXN0YXVyYW50X25hbWUiLCJuYW1lIiwiYWRtaW5fZW1haWwiLCJlbWFpbCIsInByZXZpb3VzX3ZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsIm5ld192YWx1ZSIsImhhbmRsZVN1c3BlbmRBY2NvdW50IiwidHJpbSIsImFsZXJ0Iiwibm93IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiYWNjb3VudF9zdGF0dXMiLCJ1cGRhdGUiLCJpZCIsInN1c3BlbnNpb25fcmVhc29uIiwic3VzcGVuc2lvbl9kYXRlIiwiaXNfYWN0aXZlIiwiaGFuZGxlRGVsZXRlQWNjb3VudCIsInBlcm1hbmVudERlbGV0aW9uRGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwiZGVsZXRpb25fZGF0ZSIsInBlcm1hbmVudF9kZWxldGlvbl9kYXRlIiwiaGFuZGxlUmVzdG9yZUFjY291bnQiLCJkZWxldGlvbkRhdGUiLCJkYXlzU2luY2VEZWxldGlvbiIsIk1hdGgiLCJmbG9vciIsImhhbmRsZVNhdmVSZXN0YXVyYW50IiwicHJldmlvdXNQbGFuIiwiZmluZCIsInIiLCJzdWJzY3JpcHRpb25fcGxhbiIsIm1lc3NhZ2UiLCJoYW5kbGVTZW5kRW1haWwiLCJpbnRlZ3JhdGlvbnMiLCJDb3JlIiwiU2VuZEVtYWlsIiwiZnJvbV9uYW1lIiwic2V0VGltZW91dCIsImhhbmRsZVJlc29sdmVTdXBwb3J0UmVxdWVzdCIsInJlcXVlc3RJZCIsImFkbWluTm90ZXMiLCJzdGF0dXMiLCJhZG1pbl9ub3RlcyIsInJlc29sdmVkX2J5IiwicmVzb2x2ZWRfYXQiLCJmaWx0ZXJlZFJlc3RhdXJhbnRzIiwiZmlsdGVyIiwibWF0Y2hlc1NlYXJjaCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJjaXR5IiwibWF0Y2hlc1N0YXR1cyIsInRvdGFsUmV2ZW51ZSIsInJlZHVjZSIsInN1bSIsIm8iLCJ0b3RhbF9hbW91bnQiLCJhY3RpdmVSZXN0YXVyYW50cyIsImxlbmd0aCIsInN1c3BlbmRlZFJlc3RhdXJhbnRzIiwiZGVsZXRlZFJlc3RhdXJhbnRzIiwidHJpYWxSZXN0YXVyYW50cyIsImJhc2ljUmVzdGF1cmFudHMiLCJwcm9SZXN0YXVyYW50cyIsIm11bHRpT3V0bGV0UmVzdGF1cmFudHMiLCJvcGVuU3VwcG9ydCIsInMiLCJnZXRBY2NvdW50U3RhdHVzQ29sb3IiLCJhY3RpdmUiLCJzdXNwZW5kZWQiLCJkZWxldGVkIiwiZ2V0U3Vic2NyaXB0aW9uU3RhdHVzQ29sb3IiLCJleHBpcmVkIiwiY2FuY2VsbGVkIiwiZ2V0UGxhbkJhZGdlIiwicGxhbiIsInRyaWFsIiwiY29sb3IiLCJsYWJlbCIsImJhc2ljIiwicHJvIiwibXVsdGlfb3V0bGV0IiwiY2FuUmVzdG9yZSIsImhhbmRsZVBhc3N3b3JkU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxvZ291dCIsIndpbmRvdyIsIm9wZW4iLCJ0b0ZpeGVkIiwidG9Mb2NhbGVTdHJpbmciLCJyb3VuZCIsInNsaWNlIiwibWFwIiwibG9nIiwicmVwbGFjZSIsInRvVXBwZXJDYXNlIiwiY3JlYXRlZF9kYXRlIiwicHJpY2UiLCJzdWIiLCJiYWRnZSIsImNvdW50IiwiZmVhdHVyZXMiLCJub0ZlYXR1cmVzIiwiX2lkIiwiZiIsInN1cHBvcnRTZXNzaW9ucyIsImZvckVhY2giLCJtc2ciLCJzZXNzaW9uX2lkIiwiaXNzdWVfdHlwZSIsImxhc3RfbWVzc2FnZSIsImxhc3RfbWVzc2FnZV90aW1lIiwidW5yZWFkX2NvdW50IiwiaXNfcmVhZCIsInNlbmRlcl90eXBlIiwic2Vzc2lvbnMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJzZXNzaW9uIiwibG9nb191cmwiLCJjaGF0U2Vzc2lvbnMiLCJjdXN0b21lcl9uYW1lIiwiY3VzdG9tZXJfcGhvbmUiLCJtZXNzYWdlX2NvdW50IiwiZmVlZGJhY2siLCJBcnJheSIsInJhdGluZyIsIl8iLCJpIiwiaXNfYXBwcm92ZWQiLCJyZXZpZXciLCJjb25maXJtIiwiZGVsZXRlIiwidiIsImwiLCJjbHMiLCJzcGxpdCIsImMiLCJzdGFydHNXaXRoIiwiam9pbiIsImNzdiIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImJsb2IiLCJCbG9iIiwidHlwZSIsInVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJkb3dubG9hZCIsImNsaWNrIiwicGxhbkJhZGdlIiwib3JkZXJzQ291bnQiLCJjYW5SZXN0b3JlQWNjb3VudCIsInN1YnNjcmlwdGlvbl9zdGF0dXMiLCJyZXF1ZXN0IiwicmVxdWVzdGVyX25hbWUiLCJkZXNjcmlwdGlvbiIsInByaW9yaXR5IiwicGhvbmUiLCJzdWJzY3JpcHRpb25fZXhwaXJlc19hdCIsImtleSIsIl9fYXJySWR4X18iLCJmZWF0dXJlc19lbmFibGVkIiwiY2hlY2tlZCIsImsiLCJ0IiwiZGVmIiwic2V0dGluZ3MiLCJwYXJzZUludCIsInBhcnNlRmxvYXQiLCJub3RlcyIsImdldEVsZW1lbnRCeUlkIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiU3VwZXJBZG1pbkRhc2hib2FyZC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IGJhc2U0NCB9IGZyb20gXCJAL2FwaS9iYXNlNDRDbGllbnRcIjtcbmltcG9ydCB7IGNyZWF0ZVBhZ2VVcmwgfSBmcm9tIFwiLi4vdXRpbHNcIjtcbmltcG9ydCB7XG4gIFN0b3JlLCBVc2VycywgSW5kaWFuUnVwZWUsIFRyZW5kaW5nVXAsIFNlYXJjaCwgRXllLCBCYW4sIENoZWNrQ2lyY2xlLFxuICBDcm93biwgTWFpbCwgU2VuZCwgRWRpdCwgU2F2ZSwgUm90YXRlQ2N3LCBBbGVydFRyaWFuZ2xlLFxuICBTaGllbGRBbGVydCwgSGVscENpcmNsZSwgU2V0dGluZ3MsIEFjdGl2aXR5LCBYLCBNZXNzYWdlU3F1YXJlLCBFeWVPZmYsIFRyYXNoMiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9iYWRnZVwiO1xuaW1wb3J0IHsgVGFicywgVGFic0NvbnRlbnQsIFRhYnNMaXN0LCBUYWJzVHJpZ2dlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdGFic1wiO1xuaW1wb3J0IHsgVGV4dGFyZWEgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RleHRhcmVhXCI7XG5pbXBvcnQgeyBTZWxlY3QsIFNlbGVjdENvbnRlbnQsIFNlbGVjdEl0ZW0sIFNlbGVjdFRyaWdnZXIsIFNlbGVjdFZhbHVlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9zZWxlY3RcIjtcbmltcG9ydCB7IERpYWxvZywgRGlhbG9nQ29udGVudCwgRGlhbG9nSGVhZGVyLCBEaWFsb2dUaXRsZSwgRGlhbG9nRGVzY3JpcHRpb24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2RpYWxvZ1wiO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgUmF6b3JwYXlDb25maWdEaWFsb2cgZnJvbSBcIkAvY29tcG9uZW50cy9zdXBlcmFkbWluL1Jhem9ycGF5Q29uZmlnRGlhbG9nXCI7XG5pbXBvcnQgQWRtaW5TdGF0c0dyaWQgZnJvbSBcIkAvY29tcG9uZW50cy9zdXBlcmFkbWluL0FkbWluU3RhdHNHcmlkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1cGVyQWRtaW5EYXNoYm9hcmQoKSB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtyZXN0YXVyYW50cywgc2V0UmVzdGF1cmFudHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYWxsT3JkZXJzLCBzZXRBbGxPcmRlcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYXVkaXRMb2dzLCBzZXRBdWRpdExvZ3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc3VwcG9ydFJlcXVlc3RzLCBzZXRTdXBwb3J0UmVxdWVzdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZmVlZGJhY2tzLCBzZXRGZWVkYmFja3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYWxsQ2hhdE1lc3NhZ2VzLCBzZXRBbGxDaGF0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcmVzdGF1cmFudFN1cHBvcnRDaGF0cywgc2V0UmVzdGF1cmFudFN1cHBvcnRDaGF0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2FjY291bnRTdGF0dXNGaWx0ZXIsIHNldEFjY291bnRTdGF0dXNGaWx0ZXJdID0gdXNlU3RhdGUoXCJhbGxcIik7XG4gIGNvbnN0IFtzZWxlY3RlZFJlc3RhdXJhbnQsIHNldFNlbGVjdGVkUmVzdGF1cmFudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzUGFzc3dvcmRWZXJpZmllZCwgc2V0SXNQYXNzd29yZFZlcmlmaWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Bhc3N3b3JkSW5wdXQsIHNldFBhc3N3b3JkSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZEVycm9yLCBzZXRQYXNzd29yZEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbc2hvd0VtYWlsRGlhbG9nLCBzZXRTaG93RW1haWxEaWFsb2ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd1N1c3BlbmREaWFsb2csIHNldFNob3dTdXNwZW5kRGlhbG9nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dEZWxldGVEaWFsb2csIHNldFNob3dEZWxldGVEaWFsb2ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd1Jlc3RvcmVEaWFsb2csIHNldFNob3dSZXN0b3JlRGlhbG9nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2VkaXRpbmdSZXN0YXVyYW50LCBzZXRFZGl0aW5nUmVzdGF1cmFudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3NlbGVjdGVkU3VwcG9ydCwgc2V0U2VsZWN0ZWRTdXBwb3J0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc2hvd0NyZWF0ZVBsYW5EaWFsb2csIHNldFNob3dDcmVhdGVQbGFuRGlhbG9nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2N1c3RvbVBsYW5zLCBzZXRDdXN0b21QbGFuc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzaG93UmF6b3JwYXlEaWFsb2csIHNldFNob3dSYXpvcnBheURpYWxvZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW2VtYWlsRGF0YSwgc2V0RW1haWxEYXRhXSA9IHVzZVN0YXRlKHsgdG86IFwiXCIsIHN1YmplY3Q6IFwiXCIsIGJvZHk6IFwiXCIgfSk7XG4gIGNvbnN0IFtzdXNwZW5kUmVhc29uLCBzZXRTdXNwZW5kUmVhc29uXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZGVsZXRlUmVhc29uLCBzZXREZWxldGVSZWFzb25dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc1NlbmRpbmdFbWFpbCwgc2V0SXNTZW5kaW5nRW1haWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNTYXZpbmcsIHNldElzU2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2VtYWlsU3VjY2Vzcywgc2V0RW1haWxTdWNjZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hlY2tBY2Nlc3MoKTtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtjaGVja0FjY2VzcygpO30sIDMwMDAwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjaGVja0FjY2VzcyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgaXNBdXRoID0gYXdhaXQgYmFzZTQ0LmF1dGguaXNBdXRoZW50aWNhdGVkKCk7XG4gICAgICBpZiAoIWlzQXV0aCkge25hdmlnYXRlKGNyZWF0ZVBhZ2VVcmwoXCJIb21lXCIpKTtyZXR1cm47fVxuICAgICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCBiYXNlNDQuYXV0aC5tZSgpO1xuICAgICAgc2V0VXNlcih1c2VyRGF0YSk7XG4gICAgICBpZiAodXNlckRhdGEucm9sZSAhPT0gJ2FkbWluJykge25hdmlnYXRlKGNyZWF0ZVBhZ2VVcmwoXCJIb21lXCIpKTtyZXR1cm47fVxuICAgICAgaWYgKHVzZXJEYXRhLnJlc3RhdXJhbnRfaWQpIHtuYXZpZ2F0ZShjcmVhdGVQYWdlVXJsKFwiRGFzaGJvYXJkXCIpKTtyZXR1cm47fVxuICAgICAgY29uc3QgW3Jlc3RhdXJhbnRzRGF0YSwgb3JkZXJzRGF0YSwgYXVkaXREYXRhLCBzdXBwb3J0RGF0YSwgZmVlZGJhY2tEYXRhLCBjaGF0RGF0YSwgc3VwcG9ydENoYXREYXRhXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIGJhc2U0NC5lbnRpdGllcy5SZXN0YXVyYW50Lmxpc3QoJy1jcmVhdGVkX2RhdGUnLCAxMDApLFxuICAgICAgYmFzZTQ0LmVudGl0aWVzLk9yZGVyLmxpc3QoJy1jcmVhdGVkX2RhdGUnLCA1MDApLFxuICAgICAgYmFzZTQ0LmVudGl0aWVzLkF1ZGl0TG9nLmxpc3QoJy1jcmVhdGVkX2RhdGUnLCAxMDApLFxuICAgICAgYmFzZTQ0LmVudGl0aWVzLlN1cHBvcnRSZXF1ZXN0Lmxpc3QoJy1jcmVhdGVkX2RhdGUnLCAxMDApLFxuICAgICAgYmFzZTQ0LmVudGl0aWVzLkZlZWRiYWNrLmxpc3QoJy1jcmVhdGVkX2RhdGUnLCAxMDApLFxuICAgICAgYmFzZTQ0LmVudGl0aWVzLkNoYXRNZXNzYWdlLmxpc3QoJy1jcmVhdGVkX2RhdGUnLCA1MDApLFxuICAgICAgYmFzZTQ0LmVudGl0aWVzLlJlc3RhdXJhbnRTdXBwb3J0Q2hhdC5saXN0KCctY3JlYXRlZF9kYXRlJywgNTAwKV1cbiAgICAgICk7XG4gICAgICBzZXRSZXN0YXVyYW50cyhyZXN0YXVyYW50c0RhdGEpO1xuICAgICAgc2V0QWxsT3JkZXJzKG9yZGVyc0RhdGEpO1xuICAgICAgc2V0QXVkaXRMb2dzKGF1ZGl0RGF0YSk7XG4gICAgICBzZXRTdXBwb3J0UmVxdWVzdHMoc3VwcG9ydERhdGEpO1xuICAgICAgc2V0RmVlZGJhY2tzKGZlZWRiYWNrRGF0YSk7XG4gICAgICBzZXRBbGxDaGF0TWVzc2FnZXMoY2hhdERhdGEpO1xuICAgICAgc2V0UmVzdGF1cmFudFN1cHBvcnRDaGF0cyhzdXBwb3J0Q2hhdERhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZSk7XG4gICAgICBuYXZpZ2F0ZShjcmVhdGVQYWdlVXJsKFwiSG9tZVwiKSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUF1ZGl0TG9nID0gYXN5bmMgKGFjdGlvbiwgcmVzdGF1cmFudCwgcmVhc29uLCBwcmV2aW91c1ZhbHVlLCBuZXdWYWx1ZSkgPT4ge1xuICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5BdWRpdExvZy5jcmVhdGUoe1xuICAgICAgYWN0aW9uLCByZXN0YXVyYW50X2lkOiByZXN0YXVyYW50LnJlc3RhdXJhbnRfaWQsIHJlc3RhdXJhbnRfbmFtZTogcmVzdGF1cmFudC5uYW1lLFxuICAgICAgYWRtaW5fZW1haWw6IHVzZXIuZW1haWwsIHJlYXNvbixcbiAgICAgIHByZXZpb3VzX3ZhbHVlOiBKU09OLnN0cmluZ2lmeShwcmV2aW91c1ZhbHVlKSwgbmV3X3ZhbHVlOiBKU09OLnN0cmluZ2lmeShuZXdWYWx1ZSlcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdXNwZW5kQWNjb3VudCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXN1c3BlbmRSZWFzb24udHJpbSgpKSB7YWxlcnQoXCJQbGVhc2UgcHJvdmlkZSBhIHJlYXNvbiBmb3Igc3VzcGVuc2lvblwiKTtyZXR1cm47fVxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0geyBhY2NvdW50X3N0YXR1czogc2VsZWN0ZWRSZXN0YXVyYW50LmFjY291bnRfc3RhdHVzIH07XG4gICAgYXdhaXQgYmFzZTQ0LmVudGl0aWVzLlJlc3RhdXJhbnQudXBkYXRlKHNlbGVjdGVkUmVzdGF1cmFudC5pZCwgeyBhY2NvdW50X3N0YXR1czogXCJzdXNwZW5kZWRcIiwgc3VzcGVuc2lvbl9yZWFzb246IHN1c3BlbmRSZWFzb24sIHN1c3BlbnNpb25fZGF0ZTogbm93LCBpc19hY3RpdmU6IGZhbHNlIH0pO1xuICAgIGF3YWl0IGNyZWF0ZUF1ZGl0TG9nKFwic3VzcGVuZF9hY2NvdW50XCIsIHNlbGVjdGVkUmVzdGF1cmFudCwgc3VzcGVuZFJlYXNvbiwgcHJldmlvdXNWYWx1ZSwgeyBhY2NvdW50X3N0YXR1czogXCJzdXNwZW5kZWRcIiwgc3VzcGVuc2lvbl9kYXRlOiBub3cgfSk7XG4gICAgc2V0U3VzcGVuZFJlYXNvbihcIlwiKTtzZXRTaG93U3VzcGVuZERpYWxvZyhmYWxzZSk7c2V0U2VsZWN0ZWRSZXN0YXVyYW50KG51bGwpO2NoZWNrQWNjZXNzKCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlQWNjb3VudCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIWRlbGV0ZVJlYXNvbi50cmltKCkpIHthbGVydChcIlBsZWFzZSBwcm92aWRlIGEgcmVhc29uIGZvciBkZWxldGlvblwiKTtyZXR1cm47fVxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICBjb25zdCBwZXJtYW5lbnREZWxldGlvbkRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIHBlcm1hbmVudERlbGV0aW9uRGF0ZS5zZXREYXRlKHBlcm1hbmVudERlbGV0aW9uRGF0ZS5nZXREYXRlKCkgKyAzMCk7XG4gICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IHsgYWNjb3VudF9zdGF0dXM6IHNlbGVjdGVkUmVzdGF1cmFudC5hY2NvdW50X3N0YXR1cyB9O1xuICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5SZXN0YXVyYW50LnVwZGF0ZShzZWxlY3RlZFJlc3RhdXJhbnQuaWQsIHsgYWNjb3VudF9zdGF0dXM6IFwiZGVsZXRlZFwiLCBzdXNwZW5zaW9uX3JlYXNvbjogZGVsZXRlUmVhc29uLCBkZWxldGlvbl9kYXRlOiBub3csIHBlcm1hbmVudF9kZWxldGlvbl9kYXRlOiBwZXJtYW5lbnREZWxldGlvbkRhdGUudG9JU09TdHJpbmcoKSwgaXNfYWN0aXZlOiBmYWxzZSB9KTtcbiAgICBhd2FpdCBjcmVhdGVBdWRpdExvZyhcImRlbGV0ZV9hY2NvdW50XCIsIHNlbGVjdGVkUmVzdGF1cmFudCwgZGVsZXRlUmVhc29uLCBwcmV2aW91c1ZhbHVlLCB7IGFjY291bnRfc3RhdHVzOiBcImRlbGV0ZWRcIiwgZGVsZXRpb25fZGF0ZTogbm93LCBwZXJtYW5lbnRfZGVsZXRpb25fZGF0ZTogcGVybWFuZW50RGVsZXRpb25EYXRlLnRvSVNPU3RyaW5nKCkgfSk7XG4gICAgc2V0RGVsZXRlUmVhc29uKFwiXCIpO3NldFNob3dEZWxldGVEaWFsb2coZmFsc2UpO3NldFNlbGVjdGVkUmVzdGF1cmFudChudWxsKTtjaGVja0FjY2VzcygpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVJlc3RvcmVBY2NvdW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3RhdXJhbnQgPSBzZWxlY3RlZFJlc3RhdXJhbnQ7XG4gICAgY29uc3QgZGVsZXRpb25EYXRlID0gbmV3IERhdGUocmVzdGF1cmFudC5kZWxldGlvbl9kYXRlIHx8IHJlc3RhdXJhbnQuc3VzcGVuc2lvbl9kYXRlKTtcbiAgICBjb25zdCBkYXlzU2luY2VEZWxldGlvbiA9IE1hdGguZmxvb3IoKG5ldyBEYXRlKCkgLSBkZWxldGlvbkRhdGUpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICBpZiAoZGF5c1NpbmNlRGVsZXRpb24gPiAzMCkge2FsZXJ0KFwiUmVzdG9yZSB3aW5kb3cgZXhwaXJlZC4gQWNjb3VudCBjYW5ub3QgYmUgcmVzdG9yZWQgYWZ0ZXIgMzAgZGF5cy5cIik7cmV0dXJuO31cbiAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0geyBhY2NvdW50X3N0YXR1czogcmVzdGF1cmFudC5hY2NvdW50X3N0YXR1cywgc3VzcGVuc2lvbl9yZWFzb246IHJlc3RhdXJhbnQuc3VzcGVuc2lvbl9yZWFzb24gfTtcbiAgICBhd2FpdCBiYXNlNDQuZW50aXRpZXMuUmVzdGF1cmFudC51cGRhdGUocmVzdGF1cmFudC5pZCwgeyBhY2NvdW50X3N0YXR1czogXCJhY3RpdmVcIiwgc3VzcGVuc2lvbl9yZWFzb246IG51bGwsIHN1c3BlbnNpb25fZGF0ZTogbnVsbCwgZGVsZXRpb25fZGF0ZTogbnVsbCwgcGVybWFuZW50X2RlbGV0aW9uX2RhdGU6IG51bGwsIGlzX2FjdGl2ZTogdHJ1ZSB9KTtcbiAgICBhd2FpdCBjcmVhdGVBdWRpdExvZyhcInJlc3RvcmVfYWNjb3VudFwiLCByZXN0YXVyYW50LCBcIkFjY291bnQgcmVzdG9yZWQgYnkgc3VwZXIgYWRtaW5cIiwgcHJldmlvdXNWYWx1ZSwgeyBhY2NvdW50X3N0YXR1czogXCJhY3RpdmVcIiB9KTtcbiAgICBzZXRTaG93UmVzdG9yZURpYWxvZyhmYWxzZSk7c2V0U2VsZWN0ZWRSZXN0YXVyYW50KG51bGwpO2NoZWNrQWNjZXNzKCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2F2ZVJlc3RhdXJhbnQgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0SXNTYXZpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHByZXZpb3VzUGxhbiA9IHJlc3RhdXJhbnRzLmZpbmQoKHIpID0+IHIuaWQgPT09IGVkaXRpbmdSZXN0YXVyYW50LmlkKT8uc3Vic2NyaXB0aW9uX3BsYW47XG4gICAgICBhd2FpdCBiYXNlNDQuZW50aXRpZXMuUmVzdGF1cmFudC51cGRhdGUoZWRpdGluZ1Jlc3RhdXJhbnQuaWQsIGVkaXRpbmdSZXN0YXVyYW50KTtcbiAgICAgIGlmIChwcmV2aW91c1BsYW4gIT09IGVkaXRpbmdSZXN0YXVyYW50LnN1YnNjcmlwdGlvbl9wbGFuKSB7XG4gICAgICAgIGF3YWl0IGNyZWF0ZUF1ZGl0TG9nKFwiY2hhbmdlX3BsYW5cIiwgZWRpdGluZ1Jlc3RhdXJhbnQsIGBQbGFuIGNoYW5nZWQgZnJvbSAke3ByZXZpb3VzUGxhbn0gdG8gJHtlZGl0aW5nUmVzdGF1cmFudC5zdWJzY3JpcHRpb25fcGxhbn1gLCB7IHN1YnNjcmlwdGlvbl9wbGFuOiBwcmV2aW91c1BsYW4gfSwgeyBzdWJzY3JpcHRpb25fcGxhbjogZWRpdGluZ1Jlc3RhdXJhbnQuc3Vic2NyaXB0aW9uX3BsYW4gfSk7XG4gICAgICB9XG4gICAgICBzZXRFZGl0aW5nUmVzdGF1cmFudChudWxsKTtjaGVja0FjY2VzcygpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7YWxlcnQoXCJGYWlsZWQgdG8gdXBkYXRlIHJlc3RhdXJhbnQ6IFwiICsgZXJyb3IubWVzc2FnZSk7fSBmaW5hbGx5XG4gICAge3NldElzU2F2aW5nKGZhbHNlKTt9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2VuZEVtYWlsID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldElzU2VuZGluZ0VtYWlsKHRydWUpO3NldEVtYWlsU3VjY2VzcyhcIlwiKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYmFzZTQ0LmludGVncmF0aW9ucy5Db3JlLlNlbmRFbWFpbCh7IHRvOiBlbWFpbERhdGEudG8sIHN1YmplY3Q6IGVtYWlsRGF0YS5zdWJqZWN0LCBib2R5OiBlbWFpbERhdGEuYm9keSwgZnJvbV9uYW1lOiBcIlJlc3Ryb1NhYXRoaSBBZG1pblwiIH0pO1xuICAgICAgc2V0RW1haWxTdWNjZXNzKFwiRW1haWwgc2VudCBzdWNjZXNzZnVsbHkhXCIpO1xuICAgICAgc2V0RW1haWxEYXRhKHsgdG86IFwiXCIsIHN1YmplY3Q6IFwiXCIsIGJvZHk6IFwiXCIgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtzZXRTaG93RW1haWxEaWFsb2coZmFsc2UpO3NldEVtYWlsU3VjY2VzcyhcIlwiKTt9LCAyMDAwKTtcbiAgICB9IGNhdGNoIChlcnJvcikge2FsZXJ0KFwiRmFpbGVkIHRvIHNlbmQgZW1haWw6IFwiICsgZXJyb3IubWVzc2FnZSk7fSBmaW5hbGx5XG4gICAge3NldElzU2VuZGluZ0VtYWlsKGZhbHNlKTt9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVzb2x2ZVN1cHBvcnRSZXF1ZXN0ID0gYXN5bmMgKHJlcXVlc3RJZCwgYWRtaW5Ob3RlcykgPT4ge1xuICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5TdXBwb3J0UmVxdWVzdC51cGRhdGUocmVxdWVzdElkLCB7IHN0YXR1czogXCJyZXNvbHZlZFwiLCBhZG1pbl9ub3RlczogYWRtaW5Ob3RlcywgcmVzb2x2ZWRfYnk6IHVzZXIuZW1haWwsIHJlc29sdmVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkgfSk7XG4gICAgc2V0U2VsZWN0ZWRTdXBwb3J0KG51bGwpO2NoZWNrQWNjZXNzKCk7XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyZWRSZXN0YXVyYW50cyA9IHJlc3RhdXJhbnRzLmZpbHRlcigocikgPT4ge1xuICAgIGNvbnN0IG1hdGNoZXNTZWFyY2ggPSByLm5hbWU/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSkgfHwgci5yZXN0YXVyYW50X2lkPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpIHx8IHIuY2l0eT8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKTtcbiAgICBjb25zdCBtYXRjaGVzU3RhdHVzID0gYWNjb3VudFN0YXR1c0ZpbHRlciA9PT0gXCJhbGxcIiB8fCByLmFjY291bnRfc3RhdHVzID09PSBhY2NvdW50U3RhdHVzRmlsdGVyO1xuICAgIHJldHVybiBtYXRjaGVzU2VhcmNoICYmIG1hdGNoZXNTdGF0dXM7XG4gIH0pO1xuXG4gIGNvbnN0IHRvdGFsUmV2ZW51ZSA9IGFsbE9yZGVycy5yZWR1Y2UoKHN1bSwgbykgPT4gc3VtICsgKG8udG90YWxfYW1vdW50IHx8IDApLCAwKTtcbiAgY29uc3QgYWN0aXZlUmVzdGF1cmFudHMgPSByZXN0YXVyYW50cy5maWx0ZXIoKHIpID0+IHIuYWNjb3VudF9zdGF0dXMgPT09ICdhY3RpdmUnIHx8ICFyLmFjY291bnRfc3RhdHVzKS5sZW5ndGg7XG4gIGNvbnN0IHN1c3BlbmRlZFJlc3RhdXJhbnRzID0gcmVzdGF1cmFudHMuZmlsdGVyKChyKSA9PiByLmFjY291bnRfc3RhdHVzID09PSAnc3VzcGVuZGVkJykubGVuZ3RoO1xuICBjb25zdCBkZWxldGVkUmVzdGF1cmFudHMgPSByZXN0YXVyYW50cy5maWx0ZXIoKHIpID0+IHIuYWNjb3VudF9zdGF0dXMgPT09ICdkZWxldGVkJykubGVuZ3RoO1xuICBjb25zdCB0cmlhbFJlc3RhdXJhbnRzID0gcmVzdGF1cmFudHMuZmlsdGVyKChyKSA9PiByLnN1YnNjcmlwdGlvbl9wbGFuID09PSAndHJpYWwnKS5sZW5ndGg7XG4gIGNvbnN0IGJhc2ljUmVzdGF1cmFudHMgPSByZXN0YXVyYW50cy5maWx0ZXIoKHIpID0+IHIuc3Vic2NyaXB0aW9uX3BsYW4gPT09ICdiYXNpYycpLmxlbmd0aDtcbiAgY29uc3QgcHJvUmVzdGF1cmFudHMgPSByZXN0YXVyYW50cy5maWx0ZXIoKHIpID0+IHIuc3Vic2NyaXB0aW9uX3BsYW4gPT09ICdwcm8nKS5sZW5ndGg7XG4gIGNvbnN0IG11bHRpT3V0bGV0UmVzdGF1cmFudHMgPSByZXN0YXVyYW50cy5maWx0ZXIoKHIpID0+IHIuc3Vic2NyaXB0aW9uX3BsYW4gPT09ICdtdWx0aV9vdXRsZXQnKS5sZW5ndGg7XG4gIGNvbnN0IG9wZW5TdXBwb3J0ID0gc3VwcG9ydFJlcXVlc3RzLmZpbHRlcigocykgPT4gcy5zdGF0dXMgPT09ICdvcGVuJykubGVuZ3RoO1xuXG4gIGNvbnN0IGdldEFjY291bnRTdGF0dXNDb2xvciA9IChzdGF0dXMpID0+ICh7IGFjdGl2ZTogXCJiZy1ncmVlbi0xMDAgdGV4dC1ncmVlbi03MDBcIiwgc3VzcGVuZGVkOiBcImJnLXllbGxvdy0xMDAgdGV4dC15ZWxsb3ctNzAwXCIsIGRlbGV0ZWQ6IFwiYmctcmVkLTEwMCB0ZXh0LXJlZC03MDBcIiB9KVtzdGF0dXNdIHx8IFwiYmctZ3JheS0xMDAgdGV4dC1ncmF5LTcwMFwiO1xuICBjb25zdCBnZXRTdWJzY3JpcHRpb25TdGF0dXNDb2xvciA9IChzdGF0dXMpID0+ICh7IGFjdGl2ZTogXCJiZy1ibHVlLTEwMCB0ZXh0LWJsdWUtNzAwXCIsIGV4cGlyZWQ6IFwiYmctcmVkLTEwMCB0ZXh0LXJlZC03MDBcIiwgY2FuY2VsbGVkOiBcImJnLWdyYXktMTAwIHRleHQtZ3JheS03MDBcIiB9KVtzdGF0dXNdIHx8IFwiYmctZ3JheS0xMDAgdGV4dC1ncmF5LTcwMFwiO1xuICBjb25zdCBnZXRQbGFuQmFkZ2UgPSAocGxhbikgPT4gKHsgdHJpYWw6IHsgY29sb3I6IFwiYmctYW1iZXItMTAwIHRleHQtYW1iZXItNzAwXCIsIGxhYmVsOiBcIlRyaWFsXCIgfSwgYmFzaWM6IHsgY29sb3I6IFwiYmctYmx1ZS0xMDAgdGV4dC1ibHVlLTcwMFwiLCBsYWJlbDogXCJCYXNpY1wiIH0sIHBybzogeyBjb2xvcjogXCJiZy1vcmFuZ2UtMTAwIHRleHQtb3JhbmdlLTcwMFwiLCBsYWJlbDogXCJQcm9cIiB9LCBtdWx0aV9vdXRsZXQ6IHsgY29sb3I6IFwiYmctaW5kaWdvLTEwMCB0ZXh0LWluZGlnby03MDBcIiwgbGFiZWw6IFwiTXVsdGktT3V0bGV0XCIgfSB9KVtwbGFuXSB8fCB7IGNvbG9yOiBcImJnLWFtYmVyLTEwMCB0ZXh0LWFtYmVyLTcwMFwiLCBsYWJlbDogXCJUcmlhbFwiIH07XG5cbiAgY29uc3QgY2FuUmVzdG9yZSA9IChyZXN0YXVyYW50KSA9PiB7XG4gICAgaWYgKHJlc3RhdXJhbnQuYWNjb3VudF9zdGF0dXMgIT09ICdzdXNwZW5kZWQnICYmIHJlc3RhdXJhbnQuYWNjb3VudF9zdGF0dXMgIT09ICdkZWxldGVkJykgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IGRlbGV0aW9uRGF0ZSA9IG5ldyBEYXRlKHJlc3RhdXJhbnQuZGVsZXRpb25fZGF0ZSB8fCByZXN0YXVyYW50LnN1c3BlbnNpb25fZGF0ZSk7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKG5ldyBEYXRlKCkgLSBkZWxldGlvbkRhdGUpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKSA8PSAzMDtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQYXNzd29yZFN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChwYXNzd29yZElucHV0ID09PSBcIlN1cGVyQDEyM1wiKSB7c2V0SXNQYXNzd29yZFZlcmlmaWVkKHRydWUpO3NldFBhc3N3b3JkRXJyb3IoZmFsc2UpO30gZWxzZVxuICAgIHtzZXRQYXNzd29yZEVycm9yKHRydWUpO3NldFBhc3N3b3JkSW5wdXQoXCJcIik7fVxuICB9O1xuXG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MTk1OjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWdyYXktNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjE5Njo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImFuaW1hdGUtc3BpbiByb3VuZGVkLWZ1bGwgaC0xMCB3LTEwIGJvcmRlci1iLTIgYm9yZGVyLW9yYW5nZS02MDBcIj48L2Rpdj5cbiAgICA8L2Rpdj4pO1xuXG5cbiAgaWYgKCFpc1Bhc3N3b3JkVmVyaWZpZWQpIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MjAxOjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJiZy1zbGF0ZS05MDAgcC00IG1pbi1oLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MjAyOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBzaGFkb3ctMnhsIHAtNiBzbTpwLTggbWF4LXctbWQgdy1mdWxsXCI+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjIwMzo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLThcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDoyMDQ6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0xNiBoLTE2IHNtOnctMjAgc206aC0yMCBiZy1ncmFkaWVudC10by1iciBmcm9tLW9yYW5nZS02MDAgdG8tb3JhbmdlLTUwMCByb3VuZGVkLTJ4bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBteC1hdXRvIG1iLTRcIj5cbiAgICAgICAgICAgIDxTaGllbGRBbGVydCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MjA1OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctOCBoLTggc206dy0xMCBzbTpoLTEwIHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MjA3OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtMnhsIHNtOnRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwIG1iLTJcIj5TdXBlciBBZG1pbiBBY2Nlc3M8L2gxPlxuICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDoyMDg6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPkVudGVyIHBhc3N3b3JkIHRvIGNvbnRpbnVlPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvcm0gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjIxMDo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgb25TdWJtaXQ9e2hhbmRsZVBhc3N3b3JkU3VibWl0fSBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDoyMTE6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgIDxJbnB1dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MjEyOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBzdXBlciBhZG1pbiBwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZElucHV0fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0UGFzc3dvcmRJbnB1dChlLnRhcmdldC52YWx1ZSk7c2V0UGFzc3dvcmRFcnJvcihmYWxzZSk7fX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtbGcgaC0xMlwiIGF1dG9Gb2N1cyAvPlxuICAgICAgICAgICAge3Bhc3N3b3JkRXJyb3IgJiYgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjIxNTozMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgdGV4dC1zbSBtdC0yIHRleHQtY2VudGVyXCI+SW5jb3JyZWN0IHBhc3N3b3JkLiBQbGVhc2UgdHJ5IGFnYWluLjwvcD59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MjE3OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLW9yYW5nZS02MDAgdG8tb3JhbmdlLTUwMCBoLTEyIHRleHQtYmFzZVwiPlxuICAgICAgICAgICAgPFNoaWVsZEFsZXJ0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDoyMTg6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy01IGgtNSBtci0yXCIgLz4gQWNjZXNzIERhc2hib2FyZFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjIyMTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibXQtNiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjIyMjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHZhcmlhbnQ9XCJnaG9zdFwiIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKGNyZWF0ZVBhZ2VVcmwoXCJIb21lXCIpKX0gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPuKGkCBCYWNrIHRvIEhvbWU8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDoyMjk6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTUwXCI+XG4gICAgICB7LyogSGVhZGVyICovfVxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MjMxOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXItYlwiPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDoyMzI6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTMgc206cHgtNiBsZzpweC04IHB5LTQgc206cHktNVwiPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjIzMzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgc206aXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtM1wiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MjM0OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjIzNToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgc206dy0xMiBzbTpoLTEyIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tb3JhbmdlLTYwMCB0by1vcmFuZ2UtNTAwIHJvdW5kZWQteGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDoyMzY6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC1sZyBzbTp0ZXh0LXhsXCI+QTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjIzODoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICA8aDEgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjIzOToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2Ugc206dGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDBcIj5SZXN0cm9TYWF0aGkgU3VwZXIgQWRtaW48L2gxPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDoyNDA6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LXhzIHNtOnRleHQtc21cIj5QbGF0Zm9ybSBNYW5hZ2VtZW50IERhc2hib2FyZDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjI0MzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDoyNDQ6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93RW1haWxEaWFsb2codHJ1ZSl9IHZhcmlhbnQ9XCJvdXRsaW5lXCIgc2l6ZT1cInNtXCI+XG4gICAgICAgICAgICAgICAgPE1haWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjI0NToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IG1yLTFcIiAvPjxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDoyNDU6NDlcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmlubGluZVwiPlNlbmQgRW1haWw8L3NwYW4+PHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjI0NToxMDFcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwic206aGlkZGVuXCI+RW1haWw8L3NwYW4+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QmFkZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjI0NzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJiZy1vcmFuZ2UtNjAwIHRleHQteHNcIj5TdXBlciBBZG1pbjwvQmFkZ2U+XG4gICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjI0ODoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHZhcmlhbnQ9XCJvdXRsaW5lXCIgc2l6ZT1cInNtXCIgb25DbGljaz17KCkgPT4gYmFzZTQ0LmF1dGgubG9nb3V0KCl9PkxvZ291dDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjI1NDo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtMyBzbTpweC02IGxnOnB4LTggcHktNCBzbTpweS04XCI+XG4gICAgICAgIDxUYWJzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDoyNTU6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGRlZmF1bHRWYWx1ZT1cIm92ZXJ2aWV3XCIgY2xhc3NOYW1lPVwic3BhY2UteS00IHNtOnNwYWNlLXktNlwiPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjI1NjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgc206aXRlbXMtY2VudGVyIGdhcC0zIG1iLTJcIj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjI1NzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0byAtbXgtMyBweC0zIHNtOm14LTAgc206cHgtMCBzY3JvbGxiYXItbm9uZVwiPlxuICAgICAgICAgICAgICA8VGFic0xpc3QgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjI1ODoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggdy1tYXhcIj5cbiAgICAgICAgICAgICAgICA8VGFic1RyaWdnZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjI1OToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB2YWx1ZT1cIm92ZXJ2aWV3XCIgY2xhc3NOYW1lPVwidGV4dC14cyBzbTp0ZXh0LXNtIHdoaXRlc3BhY2Utbm93cmFwXCI+T3ZlcnZpZXc8L1RhYnNUcmlnZ2VyPlxuICAgICAgICAgICAgICAgIDxUYWJzVHJpZ2dlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MjYwOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHZhbHVlPVwicmVzdGF1cmFudHNcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHNtOnRleHQtc20gd2hpdGVzcGFjZS1ub3dyYXBcIj5SZXN0YXVyYW50czwvVGFic1RyaWdnZXI+XG4gICAgICAgICAgICAgICAgPFRhYnNUcmlnZ2VyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDoyNjE6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdmFsdWU9XCJyZXN0YXVyYW50X3N1cHBvcnRcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHNtOnRleHQtc20gd2hpdGVzcGFjZS1ub3dyYXBcIj5TdXBwb3J0IENoYXRzPC9UYWJzVHJpZ2dlcj5cbiAgICAgICAgICAgICAgICA8VGFic1RyaWdnZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjI2MjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB2YWx1ZT1cImNoYXRzXCIgY2xhc3NOYW1lPVwidGV4dC14cyBzbTp0ZXh0LXNtIHdoaXRlc3BhY2Utbm93cmFwXCI+Q3VzdC4gQ2hhdHM8L1RhYnNUcmlnZ2VyPlxuICAgICAgICAgICAgICAgIDxUYWJzVHJpZ2dlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MjYzOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHZhbHVlPVwiZmVlZGJhY2tcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHNtOnRleHQtc20gd2hpdGVzcGFjZS1ub3dyYXBcIj5GZWVkYmFjazwvVGFic1RyaWdnZXI+XG4gICAgICAgICAgICAgICAgPFRhYnNUcmlnZ2VyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDoyNjQ6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdmFsdWU9XCJwbGFuc1wiIGNsYXNzTmFtZT1cInRleHQteHMgc206dGV4dC1zbSB3aGl0ZXNwYWNlLW5vd3JhcFwiPlBsYW5zPC9UYWJzVHJpZ2dlcj5cbiAgICAgICAgICAgICAgICA8VGFic1RyaWdnZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjI2NToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHZhbHVlPVwic3VwcG9ydFwiIGNsYXNzTmFtZT1cInRleHQteHMgc206dGV4dC1zbSB3aGl0ZXNwYWNlLW5vd3JhcFwiPlN1cHBvcnQge29wZW5TdXBwb3J0ID4gMCAmJiBgKCR7b3BlblN1cHBvcnR9KWB9PC9UYWJzVHJpZ2dlcj5cbiAgICAgICAgICAgICAgICA8VGFic1RyaWdnZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjI2NjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB2YWx1ZT1cImF1ZGl0XCIgY2xhc3NOYW1lPVwidGV4dC14cyBzbTp0ZXh0LXNtIHdoaXRlc3BhY2Utbm93cmFwXCI+QXVkaXQ8L1RhYnNUcmlnZ2VyPlxuICAgICAgICAgICAgICA8L1RhYnNMaXN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDoyNjk6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3BlbignL1N1cHBvcnRDZW50ZXInLCAnX2JsYW5rJyl9IHNpemU9XCJzbVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tb3JhbmdlLTYwMCB0by1vcmFuZ2UtNTAwIHctZnVsbCBzbTp3LWF1dG8gZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgICBTdXBwb3J0IENlbnRlclxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogT3ZlcnZpZXcgVGFiICovfVxuICAgICAgICAgIDxUYWJzQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6Mjc2OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdmFsdWU9XCJvdmVydmlld1wiIGNsYXNzTmFtZT1cInNwYWNlLXktNCBzbTpzcGFjZS15LTZcIj5cbiAgICAgICAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDoyNzc6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgPENhcmRIZWFkZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjI3ODoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj48Q2FyZFRpdGxlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDoyNzg6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHNtOnRleHQtbGdcIj5QbGF0Zm9ybSBSZXZlbnVlIE92ZXJ2aWV3PC9DYXJkVGl0bGU+PC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjI3OToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjI4MDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTMgZ2FwLTMgc206Z2FwLTZcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjI4MToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHAtNCBiZy1ncmFkaWVudC10by1iciBmcm9tLWdyZWVuLTUwIHRvLWVtZXJhbGQtNTAgcm91bmRlZC14bFwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MjgyOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQteHMgc206dGV4dC1zbSB0ZXh0LWdyYXktNjAwIG1iLTFcIj5Ub3RhbCBHTVY8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDoyODM6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBzbTp0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ncmVlbi02MDBcIj7igrl7KHRvdGFsUmV2ZW51ZSAvIDEwMDApLnRvRml4ZWQoMSl9SzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjI4NDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDAgbXQtMVwiPkFsbCB0aW1lPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDoyODY6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwLTQgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ibHVlLTUwIHRvLWluZGlnby01MCByb3VuZGVkLXhsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDoyODc6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC14cyBzbTp0ZXh0LXNtIHRleHQtZ3JheS02MDAgbWItMVwiPk1vbnRobHkgUmVjdXJyaW5nIFJldmVudWU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDoyODg6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBzbTp0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ibHVlLTYwMFwiPuKCuXsoYmFzaWNSZXN0YXVyYW50cyAqIDk5OSArIHByb1Jlc3RhdXJhbnRzICogMjQ5OSArIG11bHRpT3V0bGV0UmVzdGF1cmFudHMgKiA0OTk5KS50b0xvY2FsZVN0cmluZygpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjI4OToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDAgbXQtMVwiPlByb2plY3RlZCBNUlI8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjI5MToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHAtNCBiZy1ncmFkaWVudC10by1iciBmcm9tLW9yYW5nZS01MCB0by1hbWJlci01MCByb3VuZGVkLXhsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDoyOTI6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC14cyBzbTp0ZXh0LXNtIHRleHQtZ3JheS02MDAgbWItMVwiPkF2ZyBSZXZlbnVlIFBlciBVc2VyPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MjkzOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgc206dGV4dC0zeGwgZm9udC1ib2xkIHRleHQtb3JhbmdlLTYwMFwiPuKCuXtNYXRoLnJvdW5kKChiYXNpY1Jlc3RhdXJhbnRzICogOTk5ICsgcHJvUmVzdGF1cmFudHMgKiAyNDk5ICsgbXVsdGlPdXRsZXRSZXN0YXVyYW50cyAqIDQ5OTkpIC8gKGJhc2ljUmVzdGF1cmFudHMgKyBwcm9SZXN0YXVyYW50cyArIG11bHRpT3V0bGV0UmVzdGF1cmFudHMgfHwgMSkpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjI5NDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDAgbXQtMVwiPkFSUFU8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgIDwvQ2FyZD5cblxuICAgICAgICAgICAgPEFkbWluU3RhdHNHcmlkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDozMDA6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgcmVzdGF1cmFudHM9e3Jlc3RhdXJhbnRzfSB0b3RhbFJldmVudWU9e3RvdGFsUmV2ZW51ZX0gYWN0aXZlUmVzdGF1cmFudHM9e2FjdGl2ZVJlc3RhdXJhbnRzfVxuICAgICAgICAgICAgc3VzcGVuZGVkUmVzdGF1cmFudHM9e3N1c3BlbmRlZFJlc3RhdXJhbnRzfSBkZWxldGVkUmVzdGF1cmFudHM9e2RlbGV0ZWRSZXN0YXVyYW50c31cbiAgICAgICAgICAgIG9wZW5TdXBwb3J0PXtvcGVuU3VwcG9ydH0gdHJpYWxSZXN0YXVyYW50cz17dHJpYWxSZXN0YXVyYW50c30gYmFzaWNSZXN0YXVyYW50cz17YmFzaWNSZXN0YXVyYW50c31cbiAgICAgICAgICAgIHByb1Jlc3RhdXJhbnRzPXtwcm9SZXN0YXVyYW50c30gbXVsdGlPdXRsZXRSZXN0YXVyYW50cz17bXVsdGlPdXRsZXRSZXN0YXVyYW50c30gYXVkaXRMb2dzPXthdWRpdExvZ3N9IC8+XG5cblxuICAgICAgICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjMwNzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MzA4OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPjxDYXJkVGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjMwODoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2Ugc206dGV4dC1sZ1wiPlJlY2VudCBBZG1pbiBBY3Rpb25zPC9DYXJkVGl0bGU+PC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjMwOToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjMxMDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxuICAgICAgICAgICAgICAgICAge2F1ZGl0TG9ncy5zbGljZSgwLCAxMCkubWFwKChsb2cpID0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDozMTI6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2xvZy5pZH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtMyBwYi0zIGJvcmRlci1iIGxhc3Q6Ym9yZGVyLTBcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17bG9nPy5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MzEzOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInAtMiBiZy1ncmF5LTEwMCByb3VuZGVkLWxnIGZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY3Rpdml0eSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MzE0OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1ncmF5LTYwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MzE2OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleC0xIG1pbi13LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDozMTc6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRydW5jYXRlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJyZXN0YXVyYW50X25hbWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17bG9nPy5pZH0+e2xvZy5hY3Rpb24ucmVwbGFjZSgvXy9nLCAnICcpLnRvVXBwZXJDYXNlKCl9IC0ge2xvZy5yZXN0YXVyYW50X25hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjMxODoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiPntsb2cucmVhc29uIHx8ICdObyByZWFzb24gcHJvdmlkZWQnfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDozMTk6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS00MDAgbXQtMVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiYWRtaW5fZW1haWxcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17bG9nPy5pZH0+Qnkge2xvZy5hZG1pbl9lbWFpbH0g4oCiIHtmb3JtYXQobmV3IERhdGUobG9nLmNyZWF0ZWRfZGF0ZSksICdNTU0gZCwgeXl5eSBISDptbScpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvVGFic0NvbnRlbnQ+XG5cbiAgICAgICAgICB7LyogUGxhbnMgVGFiICovfVxuICAgICAgICAgIDxUYWJzQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MzI5OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdmFsdWU9XCJwbGFuc1wiIGNsYXNzTmFtZT1cInNwYWNlLXktNCBzbTpzcGFjZS15LTZcIj5cbiAgICAgICAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDozMzA6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgPENhcmRIZWFkZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjMzMToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjMzMjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgc206aXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MzMzOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDozMzQ6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHNtOnRleHQtbGdcIj5TdWJzY3JpcHRpb24gUGxhbnM8L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjMzNToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgbXQtMVwiPk1hbmFnZSBwcmljaW5nIGFuZCBmZWF0dXJlczwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MzM3OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MzM4OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd1Jhem9ycGF5RGlhbG9nKHRydWUpfSB2YXJpYW50PVwib3V0bGluZVwiIHNpemU9XCJzbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5ncyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MzM5OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgbXItMVwiIC8+UmF6b3JwYXlcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjM0MToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dDcmVhdGVQbGFuRGlhbG9nKHRydWUpfSBzaXplPVwic21cIiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tb3JhbmdlLTYwMCB0by1vcmFuZ2UtNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENyb3duIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDozNDI6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCBtci0xXCIgLz5DdXN0b20gUGxhblxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MzQ3OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MzQ4OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IFwiVHJpYWxcIiwgcHJpY2U6IFwiRnJlZVwiLCBzdWI6IFwiMTQgZGF5cyB0cmlhbFwiLCBjb2xvcjogXCJiZy1hbWJlci01MCBib3JkZXItYW1iZXItMjAwXCIsIGJhZGdlOiBcImJnLWFtYmVyLTYwMFwiLCBjb3VudDogdHJpYWxSZXN0YXVyYW50cywgZmVhdHVyZXM6IFtcIlFSIE9yZGVyaW5nXCIsIFwiMTAgVGFibGVzXCJdLCBub0ZlYXR1cmVzOiBbXCJBbmFseXRpY3NcIl0gfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IFwiQmFzaWNcIiwgcHJpY2U6IFwi4oK5OTk5XCIsIHN1YjogXCJwZXIgbW9udGhcIiwgY29sb3I6IFwiYmctYmx1ZS01MCBib3JkZXItYmx1ZS0yMDBcIiwgYmFkZ2U6IFwiYmctYmx1ZS02MDBcIiwgY291bnQ6IGJhc2ljUmVzdGF1cmFudHMsIGZlYXR1cmVzOiBbXCJFdmVyeXRoaW5nIGluIFRyaWFsXCIsIFwiMjAgVGFibGVzXCIsIFwiQmFzaWMgQW5hbHl0aWNzXCJdLCBub0ZlYXR1cmVzOiBbXSB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogXCJQcm9cIiwgcHJpY2U6IFwi4oK5Miw0OTlcIiwgc3ViOiBcInBlciBtb250aFwiLCBjb2xvcjogXCJiZy1vcmFuZ2UtNTAgYm9yZGVyLW9yYW5nZS0yMDBcIiwgYmFkZ2U6IFwiYmctb3JhbmdlLTYwMFwiLCBjb3VudDogcHJvUmVzdGF1cmFudHMsIGZlYXR1cmVzOiBbXCJFdmVyeXRoaW5nIGluIEJhc2ljXCIsIFwiVW5saW1pdGVkIFRhYmxlc1wiLCBcIkFkdmFuY2VkIEFuYWx5dGljc1wiLCBcIlBheW1lbnQgSW50ZWdyYXRpb25cIl0sIG5vRmVhdHVyZXM6IFtdIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiBcIk11bHRpLU91dGxldFwiLCBwcmljZTogXCLigrk0LDk5OVwiLCBzdWI6IFwicGVyIG1vbnRoXCIsIGNvbG9yOiBcImJnLWluZGlnby01MCBib3JkZXItaW5kaWdvLTIwMFwiLCBiYWRnZTogXCJiZy1pbmRpZ28tNjAwXCIsIGNvdW50OiBtdWx0aU91dGxldFJlc3RhdXJhbnRzLCBmZWF0dXJlczogW1wiRXZlcnl0aGluZyBpbiBQcm9cIiwgXCJNdWx0aXBsZSBPdXRsZXRzXCIsIFwiQ2VudHJhbGl6ZWQgRGFzaGJvYXJkXCIsIFwiUHJpb3JpdHkgU3VwcG9ydFwiXSwgbm9GZWF0dXJlczogW10gfV0uXG4gICAgICAgICAgICAgICAgICBtYXAoKHBsYW4pID0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDozNTU6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e3BsYW4ubGFiZWx9IGNsYXNzTmFtZT17YGJvcmRlciByb3VuZGVkLXhsIHAtNCAke3BsYW4uY29sb3J9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MzU2OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MzU3OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtwbGFuLmJhZGdlfSBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImxhYmVsXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3BsYW4/LmlkIHx8IHBsYW4/Ll9pZH0+e3BsYW4ubGFiZWx9PC9CYWRnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjM1ODoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB2YXJpYW50PVwiZ2hvc3RcIiBzaXplPVwic21cIj48RWRpdCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MzU4OjU4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDozNjA6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItMC41XCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJwcmljZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtwbGFuPy5pZCB8fCBwbGFuPy5faWR9PntwbGFuLnByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MzYxOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwIG1iLTNcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInN1YlwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtwbGFuPy5pZCB8fCBwbGFuPy5faWR9PntwbGFuLnN1Yn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MzYyOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS0xLjUgdGV4dC14c1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiZmVhdHVyZXNcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cGxhbj8uaWQgfHwgcGxhbj8uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwbGFuLmZlYXR1cmVzLm1hcCgoZikgPT4gPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjM2Mzo0OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17Zn0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiZlwiPjxDaGVja0NpcmNsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MzYzOjk3XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMyBoLTMgdGV4dC1ncmVlbi02MDAgZmxleC1zaHJpbmstMFwiIC8+e2Z9PC9wPil9XG4gICAgICAgICAgICAgICAgICAgICAgICB7cGxhbi5ub0ZlYXR1cmVzLm1hcCgoZikgPT4gPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjM2NDo1MFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17Zn0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSB0ZXh0LWdyYXktNDAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJmXCI+PFggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjM2NDoxMTNcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0zIGgtMyBmbGV4LXNocmluay0wXCIgLz57Zn08L3A+KX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDozNjY6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtdC0zIHB0LTMgYm9yZGVyLXRcIj48cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MzY2OjU4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJjb3VudFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtwbGFuPy5pZCB8fCBwbGFuPy5faWR9PntwbGFuLmNvdW50fSByZXN0YXVyYW50czwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MzcyOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMyBnYXAtNFwiPlxuICAgICAgICAgICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MzczOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+PENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDozNzM6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJwLTQgc206cC02XCI+PHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjM3Mzo1NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5Nb250aGx5IFJlY3VycmluZyBSZXZlbnVlPC9wPjxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDozNzM6MTIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgc206dGV4dC0zeGwgZm9udC1ib2xkIG10LTJcIj7igrl7KGJhc2ljUmVzdGF1cmFudHMgKiA5OTkgKyBwcm9SZXN0YXVyYW50cyAqIDI0OTkgKyBtdWx0aU91dGxldFJlc3RhdXJhbnRzICogNDk5OSkudG9Mb2NhbGVTdHJpbmcoKX08L3A+PHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjM3MzoyNzdcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyZWVuLTYwMCBtdC0xXCI+UHJvamVjdGVkIE1SUjwvcD48L0NhcmRDb250ZW50PjwvQ2FyZD5cbiAgICAgICAgICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjM3NDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPjxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6Mzc0OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicC00IHNtOnAtNlwiPjxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDozNzQ6NTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+QXZnIFJldmVudWUgUGVyIFVzZXI8L3A+PHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjM3NDoxMTdcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBzbTp0ZXh0LTN4bCBmb250LWJvbGQgbXQtMlwiPuKCuXtNYXRoLnJvdW5kKChiYXNpY1Jlc3RhdXJhbnRzICogOTk5ICsgcHJvUmVzdGF1cmFudHMgKiAyNDk5ICsgbXVsdGlPdXRsZXRSZXN0YXVyYW50cyAqIDQ5OTkpIC8gKGJhc2ljUmVzdGF1cmFudHMgKyBwcm9SZXN0YXVyYW50cyArIG11bHRpT3V0bGV0UmVzdGF1cmFudHMgfHwgMSkpfTwvcD48cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6Mzc0OjMzNVwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS02MDAgbXQtMVwiPkFSUFU8L3A+PC9DYXJkQ29udGVudD48L0NhcmQ+XG4gICAgICAgICAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDozNzU6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj48Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjM3NToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtNCBzbTpwLTZcIj48cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6Mzc1OjU2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPkNvbnZlcnNpb24gZnJvbSBUcmlhbDwvcD48cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6Mzc1OjExOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtMnhsIHNtOnRleHQtM3hsIGZvbnQtYm9sZCBtdC0yXCI+e01hdGgucm91bmQoKGJhc2ljUmVzdGF1cmFudHMgKyBwcm9SZXN0YXVyYW50cyArIG11bHRpT3V0bGV0UmVzdGF1cmFudHMpIC8gcmVzdGF1cmFudHMubGVuZ3RoICogMTAwKX0lPC9wPjxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDozNzU6Mjc1XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTYwMCBtdC0xXCI+VHJpYWwgdG8gUGFpZDwvcD48L0NhcmRDb250ZW50PjwvQ2FyZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvVGFic0NvbnRlbnQ+XG5cbiAgICAgICAgICB7LyogUmVzdGF1cmFudCBTdXBwb3J0IENoYXRzIFRhYiAqL31cbiAgICAgICAgICA8VGFic0NvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjM4MDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHZhbHVlPVwicmVzdGF1cmFudF9zdXBwb3J0XCIgY2xhc3NOYW1lPVwic3BhY2UteS00IHNtOnNwYWNlLXktNlwiPlxuICAgICAgICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjM4MToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6MzgyOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPjxDYXJkVGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjM4MjoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2Ugc206dGV4dC1sZ1wiPlJlc3RhdXJhbnQgU3VwcG9ydCBDaGF0czwvQ2FyZFRpdGxlPjwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDozODM6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDozODQ6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdXBwb3J0U2Vzc2lvbnMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdGF1cmFudFN1cHBvcnRDaGF0cy5mb3JFYWNoKChtc2cpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIXN1cHBvcnRTZXNzaW9uc1ttc2cuc2Vzc2lvbl9pZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRTZXNzaW9uc1ttc2cuc2Vzc2lvbl9pZF0gPSB7IHNlc3Npb25faWQ6IG1zZy5zZXNzaW9uX2lkLCByZXN0YXVyYW50X2lkOiBtc2cucmVzdGF1cmFudF9pZCwgcmVzdGF1cmFudF9uYW1lOiBtc2cucmVzdGF1cmFudF9uYW1lLCBpc3N1ZV90eXBlOiBtc2cuaXNzdWVfdHlwZSwgc3RhdHVzOiBtc2cuc3RhdHVzLCBsYXN0X21lc3NhZ2U6IG1zZy5tZXNzYWdlLCBsYXN0X21lc3NhZ2VfdGltZTogbXNnLmNyZWF0ZWRfZGF0ZSwgdW5yZWFkX2NvdW50OiAwIH07XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGlmICghbXNnLmlzX3JlYWQgJiYgbXNnLnNlbmRlcl90eXBlID09PSAncmVzdGF1cmFudCcpIHN1cHBvcnRTZXNzaW9uc1ttc2cuc2Vzc2lvbl9pZF0udW5yZWFkX2NvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKG5ldyBEYXRlKG1zZy5jcmVhdGVkX2RhdGUpID4gbmV3IERhdGUoc3VwcG9ydFNlc3Npb25zW21zZy5zZXNzaW9uX2lkXS5sYXN0X21lc3NhZ2VfdGltZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRTZXNzaW9uc1ttc2cuc2Vzc2lvbl9pZF0ubGFzdF9tZXNzYWdlID0gbXNnLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0U2Vzc2lvbnNbbXNnLnNlc3Npb25faWRdLmxhc3RfbWVzc2FnZV90aW1lID0gbXNnLmNyZWF0ZWRfZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRTZXNzaW9uc1ttc2cuc2Vzc2lvbl9pZF0uc3RhdHVzID0gbXNnLnN0YXR1cztcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXNzaW9ucyA9IE9iamVjdC52YWx1ZXMoc3VwcG9ydFNlc3Npb25zKS5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShiLmxhc3RfbWVzc2FnZV90aW1lKSAtIG5ldyBEYXRlKGEubGFzdF9tZXNzYWdlX3RpbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlc3Npb25zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjM5OTo1NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS04IHRleHQtZ3JheS01MDBcIj48SGVscENpcmNsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6Mzk5OjEwMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgbXgtYXV0byBtYi0zIHRleHQtZ3JheS0zMDBcIiAvPjxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDozOTk6MTY1XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPk5vIHN1cHBvcnQgY2hhdHMgeWV0PC9wPjwvZGl2PjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlc3Npb25zLm1hcCgoc2Vzc2lvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3RhdXJhbnQgPSByZXN0YXVyYW50cy5maW5kKChyKSA9PiByLnJlc3RhdXJhbnRfaWQgPT09IHNlc3Npb24ucmVzdGF1cmFudF9pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjQwMzoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17c2Vzc2lvbi5zZXNzaW9uX2lkfSBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZC1sZyBwLTQgaG92ZXI6c2hhZG93LW1kIHRyYW5zaXRpb24tc2hhZG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjQwNDoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIG1iLTIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo0MDU6MjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBtaW4tdy0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzdGF1cmFudD8ubG9nb191cmwgPyA8aW1nIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo0MDY6NTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBzcmM9e3Jlc3RhdXJhbnQubG9nb191cmx9IGFsdD17c2Vzc2lvbi5yZXN0YXVyYW50X25hbWV9IGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWxnIG9iamVjdC1jb3ZlciBmbGV4LXNocmluay0wXCIgLz4gOiA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo0MDY6MTgwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWxnIGJnLW9yYW5nZS0xMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1zaHJpbmstMFwiPjxTdG9yZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NDA2OjI3OVwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtb3JhbmdlLTYwMFwiIC8+PC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NDA3OjMwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWluLXctMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NDA4OjMyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0cnVuY2F0ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicmVzdGF1cmFudF9uYW1lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3Nlc3Npb24/LmlkIHx8IHNlc3Npb24/Ll9pZH0+e3Nlc3Npb24ucmVzdGF1cmFudF9uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NDA5OjMyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgbXQtMSBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjQxMDozNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHZhcmlhbnQ9XCJvdXRsaW5lXCIgY2xhc3NOYW1lPVwidGV4dC14c1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiaXNzdWVfdHlwZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtzZXNzaW9uPy5pZCB8fCBzZXNzaW9uPy5faWR9PntzZXNzaW9uLmlzc3VlX3R5cGV9PC9CYWRnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjQxMTozNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17c2Vzc2lvbi5zdGF0dXMgPT09ICdyZXNvbHZlZCcgPyAnYmctZ3JlZW4tNjAwJyA6IHNlc3Npb24uc3RhdHVzID09PSAnaW5fcHJvZ3Jlc3MnID8gJ2JnLWJsdWUtNjAwJyA6ICdiZy1vcmFuZ2UtNjAwJ30gZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJzdGF0dXNcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2Vzc2lvbj8uaWQgfHwgc2Vzc2lvbj8uX2lkfT57c2Vzc2lvbi5zdGF0dXN9PC9CYWRnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2Vzc2lvbi51bnJlYWRfY291bnQgPiAwICYmIDxCYWRnZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NDEyOjYzXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYmctcmVkLTYwMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidW5yZWFkX2NvdW50XCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3Nlc3Npb24/LmlkIHx8IHNlc3Npb24/Ll9pZH0+e3Nlc3Npb24udW5yZWFkX2NvdW50fSBuZXc8L0JhZGdlPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo0MTY6MjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBzaXplPVwic21cIiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wXCIgb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oYC9UZWFtQ2hhdD9zZXNzaW9uPSR7c2Vzc2lvbi5zZXNzaW9uX2lkfWAsICdfYmxhbmsnKX0+T3BlbjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjQxODoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTYwMCBpdGFsaWMgdHJ1bmNhdGVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImxhc3RfbWVzc2FnZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtzZXNzaW9uPy5pZCB8fCBzZXNzaW9uPy5faWR9Plwie3Nlc3Npb24ubGFzdF9tZXNzYWdlfVwiPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NDE5OjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNDAwIG10LTFcIj57Zm9ybWF0KG5ldyBEYXRlKHNlc3Npb24ubGFzdF9tZXNzYWdlX3RpbWUpLCAnTU1NIGQsIHl5eXkgSEg6bW0nKX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pO1xuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L1RhYnNDb250ZW50PlxuXG4gICAgICAgICAgey8qIEN1c3RvbWVyIENoYXRzIFRhYiAqL31cbiAgICAgICAgICA8VGFic0NvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjQzMDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHZhbHVlPVwiY2hhdHNcIiBjbGFzc05hbWU9XCJzcGFjZS15LTQgc206c3BhY2UteS02XCI+XG4gICAgICAgICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NDMxOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDxDYXJkSGVhZGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo0MzI6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+PENhcmRUaXRsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NDMyOjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtYmFzZSBzbTp0ZXh0LWxnXCI+QWxsIEN1c3RvbWVyIENoYXRzPC9DYXJkVGl0bGU+PC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjQzMzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjQzNDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoYXRTZXNzaW9ucyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBhbGxDaGF0TWVzc2FnZXMuZm9yRWFjaCgobXNnKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGF0U2Vzc2lvbnNbbXNnLnNlc3Npb25faWRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGF0U2Vzc2lvbnNbbXNnLnNlc3Npb25faWRdID0geyBzZXNzaW9uX2lkOiBtc2cuc2Vzc2lvbl9pZCwgcmVzdGF1cmFudF9pZDogbXNnLnJlc3RhdXJhbnRfaWQsIGN1c3RvbWVyX25hbWU6IG1zZy5jdXN0b21lcl9uYW1lLCBjdXN0b21lcl9waG9uZTogbXNnLmN1c3RvbWVyX3Bob25lLCBsYXN0X21lc3NhZ2U6IG1zZy5tZXNzYWdlLCBsYXN0X21lc3NhZ2VfdGltZTogbXNnLmNyZWF0ZWRfZGF0ZSwgbWVzc2FnZV9jb3VudDogMCB9O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBjaGF0U2Vzc2lvbnNbbXNnLnNlc3Npb25faWRdLm1lc3NhZ2VfY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3IERhdGUobXNnLmNyZWF0ZWRfZGF0ZSkgPiBuZXcgRGF0ZShjaGF0U2Vzc2lvbnNbbXNnLnNlc3Npb25faWRdLmxhc3RfbWVzc2FnZV90aW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhdFNlc3Npb25zW21zZy5zZXNzaW9uX2lkXS5sYXN0X21lc3NhZ2UgPSBtc2cubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXRTZXNzaW9uc1ttc2cuc2Vzc2lvbl9pZF0ubGFzdF9tZXNzYWdlX3RpbWUgPSBtc2cuY3JlYXRlZF9kYXRlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlc3Npb25zID0gT2JqZWN0LnZhbHVlcyhjaGF0U2Vzc2lvbnMpLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGIubGFzdF9tZXNzYWdlX3RpbWUpIC0gbmV3IERhdGUoYS5sYXN0X21lc3NhZ2VfdGltZSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2Vzc2lvbnMubGVuZ3RoID09PSAwKSByZXR1cm4gPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NDQ4OjU0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTggdGV4dC1ncmF5LTUwMFwiPjxNZXNzYWdlU3F1YXJlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo0NDg6MTAyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMTIgaC0xMiBteC1hdXRvIG1iLTMgdGV4dC1ncmF5LTMwMFwiIC8+PHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjQ0ODoxNjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+Tm8gY3VzdG9tZXIgY2hhdHMgeWV0PC9wPjwvZGl2PjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlc3Npb25zLm1hcCgoc2Vzc2lvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3RhdXJhbnQgPSByZXN0YXVyYW50cy5maW5kKChyKSA9PiByLnJlc3RhdXJhbnRfaWQgPT09IHNlc3Npb24ucmVzdGF1cmFudF9pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjQ1MjoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17c2Vzc2lvbi5zZXNzaW9uX2lkfSBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZC1sZyBwLTQgaG92ZXI6c2hhZG93LW1kIHRyYW5zaXRpb24tc2hhZG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjQ1MzoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIGdhcC0zIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo0NTQ6MjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBtaW4tdy0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzdGF1cmFudD8ubG9nb191cmwgPyA8aW1nIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo0NTU6NTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBzcmM9e3Jlc3RhdXJhbnQubG9nb191cmx9IGFsdD17cmVzdGF1cmFudC5uYW1lfSBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1sZyBvYmplY3QtY292ZXIgZmxleC1zaHJpbmstMFwiIC8+IDogPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NDU1OjE3MlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1sZyBiZy1vcmFuZ2UtMTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtc2hyaW5rLTBcIj48U3RvcmUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjQ1NToyNzFcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LW9yYW5nZS02MDBcIiAvPjwvZGl2Pn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjQ1NjozMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1pbi13LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjQ1NzozMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdHJ1bmNhdGVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIm5hbWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmVzdGF1cmFudD8uaWQgfHwgcmVzdGF1cmFudD8uX2lkfT57cmVzdGF1cmFudD8ubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo0NTg6MzJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS02MDAgdHJ1bmNhdGVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImN1c3RvbWVyX25hbWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2Vzc2lvbj8uaWQgfHwgc2Vzc2lvbj8uX2lkfT57c2Vzc2lvbi5jdXN0b21lcl9uYW1lfSDigKIge3Nlc3Npb24uY3VzdG9tZXJfcGhvbmV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo0NjE6MjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJiZy1ibHVlLTEwMCB0ZXh0LWJsdWUtNzAwIGZsZXgtc2hyaW5rLTBcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIm1lc3NhZ2VfY291bnRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2Vzc2lvbj8uaWQgfHwgc2Vzc2lvbj8uX2lkfT57c2Vzc2lvbi5tZXNzYWdlX2NvdW50fSBtc2dzPC9CYWRnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo0NjM6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDAgaXRhbGljIHRydW5jYXRlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJsYXN0X21lc3NhZ2VcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2Vzc2lvbj8uaWQgfHwgc2Vzc2lvbj8uX2lkfT5cIntzZXNzaW9uLmxhc3RfbWVzc2FnZX1cIjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjQ2NDoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTQwMCBtdC0xXCI+e2Zvcm1hdChuZXcgRGF0ZShzZXNzaW9uLmxhc3RfbWVzc2FnZV90aW1lKSwgJ01NTSBkLCB5eXl5IEhIOm1tJyl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KTtcblxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9UYWJzQ29udGVudD5cblxuICAgICAgICAgIHsvKiBGZWVkYmFjayBUYWIgKi99XG4gICAgICAgICAgPFRhYnNDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo0NzU6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB2YWx1ZT1cImZlZWRiYWNrXCIgY2xhc3NOYW1lPVwic3BhY2UteS00IHNtOnNwYWNlLXktNlwiPlxuICAgICAgICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjQ3NjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NDc3OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPjxDYXJkVGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjQ3NzoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2Ugc206dGV4dC1sZ1wiPlJlc3RhdXJhbnQgRmVlZGJhY2s8L0NhcmRUaXRsZT48L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NDc4OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NDc5OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAgICB7ZmVlZGJhY2tzLmxlbmd0aCA9PT0gMCA/IDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjQ4MDo0NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS04IHRleHQtZ3JheS01MDBcIj48TWVzc2FnZVNxdWFyZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NDgwOjkyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMTIgaC0xMiBteC1hdXRvIG1iLTMgdGV4dC1ncmF5LTMwMFwiIC8+PHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjQ4MDoxNThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+Tm8gZmVlZGJhY2sgc3VibWl0dGVkIHlldDwvcD48L2Rpdj4gOlxuICAgICAgICAgICAgICAgICAgZmVlZGJhY2tzLm1hcCgoZmVlZGJhY2spID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdGF1cmFudCA9IHJlc3RhdXJhbnRzLmZpbmQoKHIpID0+IHIucmVzdGF1cmFudF9pZCA9PT0gZmVlZGJhY2sucmVzdGF1cmFudF9pZCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NDg0OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtmZWVkYmFjay5pZH0gY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQtbGcgcC00IGhvdmVyOnNoYWRvdy1tZCB0cmFuc2l0aW9uLXNoYWRvd1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtmZWVkYmFjaz8uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo0ODU6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBtYi0zIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NDg2OjI4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgbWluLXctMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlc3RhdXJhbnQ/LmxvZ29fdXJsID8gPGltZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NDg3OjU0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgc3JjPXtyZXN0YXVyYW50LmxvZ29fdXJsfSBhbHQ9e2ZlZWRiYWNrLnJlc3RhdXJhbnRfbmFtZX0gY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtbGcgb2JqZWN0LWNvdmVyIGZsZXgtc2hyaW5rLTBcIiAvPiA6IDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjQ4NzoxODFcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtbGcgYmctb3JhbmdlLTEwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LXNocmluay0wXCI+PFN0b3JlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo0ODc6MjgwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1vcmFuZ2UtNjAwXCIgLz48L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo0ODg6MzBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtaW4tdy0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NDg5OjMyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0cnVuY2F0ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicmVzdGF1cmFudF9uYW1lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2ZlZWRiYWNrPy5pZH0+e2ZlZWRiYWNrLnJlc3RhdXJhbnRfbmFtZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo0OTA6MzJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGdhcC0wLjUgbXQtMC41XCI+e1suLi5BcnJheShmZWVkYmFjay5yYXRpbmcpXS5tYXAoKF8sIGkpID0+IDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo0OTA6MTEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtpfSBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy00MDAgdGV4dC1zbVwiIGRhdGEtYXJyLWluZGV4PXtpfT7imIU8L3NwYW4+KX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NDkzOjI4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtmZWVkYmFjay5pc19hcHByb3ZlZCA/ICdiZy1ncmVlbi0xMDAgdGV4dC1ncmVlbi03MDAnIDogJ2JnLXJlZC0xMDAgdGV4dC1yZWQtNzAwJ30+e2ZlZWRiYWNrLmlzX2FwcHJvdmVkID8gJ0FwcHJvdmVkJyA6ICdIaWRkZW4nfTwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NDk1OjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwIG1iLTMgaXRhbGljXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJyZXZpZXdcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17ZmVlZGJhY2s/LmlkfT5cIntmZWVkYmFjay5yZXZpZXd9XCI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjQ5NjoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo0OTc6MjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS00MDBcIj57Zm9ybWF0KG5ldyBEYXRlKGZlZWRiYWNrLmNyZWF0ZWRfZGF0ZSksICdNTU0gZCwgeXl5eScpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo0OTg6MjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBzaXplPVwic21cIiB2YXJpYW50PXtmZWVkYmFjay5pc19hcHByb3ZlZCA/IFwiZGVzdHJ1Y3RpdmVcIiA6IFwiZGVmYXVsdFwifSBjbGFzc05hbWU9XCJtbC1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge2F3YWl0IGJhc2U0NC5lbnRpdGllcy5GZWVkYmFjay51cGRhdGUoZmVlZGJhY2suaWQsIHsgaXNfYXBwcm92ZWQ6ICFmZWVkYmFjay5pc19hcHByb3ZlZCB9KTtjaGVja0FjY2VzcygpO319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZlZWRiYWNrLmlzX2FwcHJvdmVkID8gPD48RXllT2ZmIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo1MDA6NTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0zIGgtMyBtci0xXCIgLz5IaWRlPC8+IDogPD48RXllIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo1MDA6MTAzXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMyBoLTMgbXItMVwiIC8+U2hvdzwvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo1MDI6MjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBzaXplPVwic21cIiB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtpZiAoY29uZmlybSgnRGVsZXRlIHRoaXMgZmVlZGJhY2s/JykpIHthd2FpdCBiYXNlNDQuZW50aXRpZXMuRmVlZGJhY2suZGVsZXRlKGZlZWRiYWNrLmlkKTtjaGVja0FjY2VzcygpO319fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaDIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjUwNDozMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTMgaC0zIG1yLTFcIiAvPkRlbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pik7XG5cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9UYWJzQ29udGVudD5cblxuICAgICAgICAgIHsvKiBSZXN0YXVyYW50cyBUYWIgKi99XG4gICAgICAgICAgPFRhYnNDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo1MTc6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB2YWx1ZT1cInJlc3RhdXJhbnRzXCIgY2xhc3NOYW1lPVwic3BhY2UteS00IHNtOnNwYWNlLXktNlwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NTE4OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBzbTpncmlkLWNvbHMtNSBnYXAtM1wiPlxuICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICB7IHY6IGFjdGl2ZVJlc3RhdXJhbnRzLCBsOiBcIkFjdGl2ZVwiLCBjbHM6IFwiZnJvbS1ncmVlbi01MCB0by1lbWVyYWxkLTUwIGJvcmRlci1ncmVlbi0yMDAgdGV4dC1ncmVlbi03MDBcIiB9LFxuICAgICAgICAgICAgICB7IHY6IGJhc2ljUmVzdGF1cmFudHMsIGw6IFwiQmFzaWMgUGxhblwiLCBjbHM6IFwiZnJvbS1ibHVlLTUwIHRvLWluZGlnby01MCBib3JkZXItYmx1ZS0yMDAgdGV4dC1ibHVlLTcwMFwiIH0sXG4gICAgICAgICAgICAgIHsgdjogcHJvUmVzdGF1cmFudHMsIGw6IFwiUHJvIFBsYW5cIiwgY2xzOiBcImZyb20tb3JhbmdlLTUwIHRvLWFtYmVyLTUwIGJvcmRlci1vcmFuZ2UtMjAwIHRleHQtb3JhbmdlLTcwMFwiIH0sXG4gICAgICAgICAgICAgIHsgdjogc3VzcGVuZGVkUmVzdGF1cmFudHMsIGw6IFwiU3VzcGVuZGVkXCIsIGNsczogXCJmcm9tLXllbGxvdy01MCB0by1hbWJlci01MCBib3JkZXIteWVsbG93LTIwMCB0ZXh0LXllbGxvdy03MDBcIiB9LFxuICAgICAgICAgICAgICB7IHY6IGRlbGV0ZWRSZXN0YXVyYW50cywgbDogXCJEZWxldGVkXCIsIGNsczogXCJmcm9tLXJlZC01MCB0by1yb3NlLTUwIGJvcmRlci1yZWQtMjAwIHRleHQtcmVkLTcwMFwiIH1dLlxuICAgICAgICAgICAgICBtYXAoKHMpID0+XG4gICAgICAgICAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo1MjY6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e3MubH0gY2xhc3NOYW1lPXtgYmctZ3JhZGllbnQtdG8tYnIgYm9yZGVyICR7cy5jbHMuc3BsaXQoJyAnKS5maWx0ZXIoKGMpID0+IGMuc3RhcnRzV2l0aCgnZnJvbS0nKSB8fCBjLnN0YXJ0c1dpdGgoJ3RvLScpIHx8IGMuc3RhcnRzV2l0aCgnYm9yZGVyLScpKS5qb2luKCcgJyl9YH0+XG4gICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjUyNzoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtMyBzbTpwLTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjUyODoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YHRleHQteGwgc206dGV4dC0yeGwgZm9udC1ib2xkICR7cy5jbHMuc3BsaXQoJyAnKS5maW5kKChjKSA9PiBjLnN0YXJ0c1dpdGgoJ3RleHQtJykpfWB9IGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidlwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtzPy5pZCB8fCBzPy5faWR9PntzLnZ9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NTI5OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNjAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJsXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3M/LmlkIHx8IHM/Ll9pZH0+e3MubH08L3A+XG4gICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NTM1OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NTM2OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicC0zIHNtOnAtNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjUzNzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjUzODoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXgtMSByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo1Mzk6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0zIHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB3LTQgaC00IHRleHQtZ3JheS00MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjU0MDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHJlc3RhdXJhbnRzLi4uXCIgdmFsdWU9e3NlYXJjaFF1ZXJ5fSBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwicGwtOSB3LWZ1bGxcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8U2VsZWN0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo1NDI6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB2YWx1ZT17YWNjb3VudFN0YXR1c0ZpbHRlcn0gb25WYWx1ZUNoYW5nZT17c2V0QWNjb3VudFN0YXR1c0ZpbHRlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RUcmlnZ2VyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo1NDM6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctNDBcIj48U2VsZWN0VmFsdWUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjU0Mzo2MlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPjwvU2VsZWN0VHJpZ2dlcj5cbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjU0NDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NTQ1OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHZhbHVlPVwiYWxsXCI+QWxsIFN0YXR1czwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NTQ2OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHZhbHVlPVwiYWN0aXZlXCI+QWN0aXZlPC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo1NDc6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdmFsdWU9XCJzdXNwZW5kZWRcIj5TdXNwZW5kZWQ8L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjU0ODoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB2YWx1ZT1cImRlbGV0ZWRcIj5EZWxldGVkPC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjU1MToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHZhcmlhbnQ9XCJvdXRsaW5lXCIgc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctYXV0b1wiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNzdiA9IFtbJ1Jlc3RhdXJhbnQgSUQnLCAnTmFtZScsICdDaXR5JywgJ1BsYW4nLCAnU3RhdHVzJywgJ09yZGVycycsICdDcmVhdGVkIERhdGUnXS5qb2luKCcsJyksIC4uLmZpbHRlcmVkUmVzdGF1cmFudHMubWFwKChyKSA9PiBbci5yZXN0YXVyYW50X2lkLCByLm5hbWUsIHIuY2l0eSwgci5zdWJzY3JpcHRpb25fcGxhbiwgci5hY2NvdW50X3N0YXR1cyB8fCAnYWN0aXZlJywgYWxsT3JkZXJzLmZpbHRlcigobykgPT4gby5yZXN0YXVyYW50X2lkID09PSByLnJlc3RhdXJhbnRfaWQpLmxlbmd0aCwgbmV3IERhdGUoci5jcmVhdGVkX2RhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpXS5qb2luKCcsJykpXS5qb2luKCdcXG4nKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtjc3ZdLCB7IHR5cGU6ICd0ZXh0L2NzdicgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO2EuaHJlZiA9IHVybDthLmRvd25sb2FkID0gJ3Jlc3RhdXJhbnRzLmNzdic7YS5jbGljaygpO1xuICAgICAgICAgICAgICAgICAgfX0+RXhwb3J0IENTVjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgPC9DYXJkPlxuXG4gICAgICAgICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NTYyOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDxDYXJkSGVhZGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo1NjM6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+PENhcmRUaXRsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NTYzOjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtYmFzZSBzbTp0ZXh0LWxnXCI+QWxsIFJlc3RhdXJhbnRzPC9DYXJkVGl0bGU+PC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjU2NDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtMCBzbTpwLTYgc206cHQtMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjU2NToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgPHRhYmxlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo1NjY6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWluLXctWzYwMHB4XVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjU2NzoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dHIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjU2ODoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgdGV4dC14cyBzbTp0ZXh0LXNtIHRleHQtZ3JheS01MDAgYm9yZGVyLWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NTY5OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInBiLTMgcHgtMyBzbTpweC0wIGZvbnQtbWVkaXVtXCI+UmVzdGF1cmFudDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjU3MDoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJwYi0zIGZvbnQtbWVkaXVtIGhpZGRlbiBzbTp0YWJsZS1jZWxsXCI+SUQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo1NzE6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwicGItMyBmb250LW1lZGl1bVwiPlN0YXR1czwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjU3MjoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJwYi0zIGZvbnQtbWVkaXVtXCI+UGxhbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjU3MzoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJwYi0zIGZvbnQtbWVkaXVtIGhpZGRlbiBtZDp0YWJsZS1jZWxsXCI+U3ViLjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjU3NDoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJwYi0zIGZvbnQtbWVkaXVtXCI+QWN0aW9uczwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo1Nzc6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJkaXZpZGUteVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJlZFJlc3RhdXJhbnRzLm1hcCgocmVzdGF1cmFudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxhbkJhZGdlID0gZ2V0UGxhbkJhZGdlKHJlc3RhdXJhbnQuc3Vic2NyaXB0aW9uX3BsYW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JkZXJzQ291bnQgPSBhbGxPcmRlcnMuZmlsdGVyKChvKSA9PiBvLnJlc3RhdXJhbnRfaWQgPT09IHJlc3RhdXJhbnQucmVzdGF1cmFudF9pZCkubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FuUmVzdG9yZUFjY291bnQgPSBjYW5SZXN0b3JlKHJlc3RhdXJhbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo1ODM6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e3Jlc3RhdXJhbnQuaWR9IGNsYXNzTmFtZT1cInRleHQteHMgc206dGV4dC1zbSBob3ZlcjpiZy1ncmF5LTUwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3Jlc3RhdXJhbnQ/LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjU4NDoyOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB5LTMgcHgtMyBzbTpweC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo1ODU6MzBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzdGF1cmFudC5sb2dvX3VybCA/IDxpbWcgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjU4Njo1NVwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHNyYz17cmVzdGF1cmFudC5sb2dvX3VybH0gYWx0PXtyZXN0YXVyYW50Lm5hbWV9IGNsYXNzTmFtZT1cInctOCBoLTggc206dy0xMCBzbTpoLTEwIHJvdW5kZWQtbGcgb2JqZWN0LWNvdmVyIGZsZXgtc2hyaW5rLTBcIiAvPiA6IDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjU4NjoxODdcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy04IGgtOCBzbTp3LTEwIHNtOmgtMTAgcm91bmRlZC1sZyBiZy1vcmFuZ2UtMTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtc2hyaW5rLTBcIj48U3RvcmUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjU4NjozMDBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCBzbTp3LTUgc206aC01IHRleHQtb3JhbmdlLTYwMFwiIC8+PC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo1ODc6MzJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtaW4tdy0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjU4ODozNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRydW5jYXRlIG1heC13LVsxMDBweF0gc206bWF4LXctbm9uZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwibmFtZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyZXN0YXVyYW50Py5pZH0+e3Jlc3RhdXJhbnQubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjU4OTozNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiY2l0eVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyZXN0YXVyYW50Py5pZH0+e3Jlc3RhdXJhbnQuY2l0eX0gwrcge29yZGVyc0NvdW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NTkzOjI4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicHktMyBmb250LW1vbm8gdGV4dC14cyBoaWRkZW4gc206dGFibGUtY2VsbFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicmVzdGF1cmFudF9pZFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyZXN0YXVyYW50Py5pZH0+e3Jlc3RhdXJhbnQucmVzdGF1cmFudF9pZH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NTk0OjI4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicHktM1wiPjxCYWRnZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NTk0OjQ5XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgJHtnZXRBY2NvdW50U3RhdHVzQ29sb3IocmVzdGF1cmFudC5hY2NvdW50X3N0YXR1cyB8fCAnYWN0aXZlJyl9IHRleHQteHNgfT57KHJlc3RhdXJhbnQuYWNjb3VudF9zdGF0dXMgfHwgJ2FjdGl2ZScpLnNsaWNlKDAsIDQpfTwvQmFkZ2U+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjU5NToyOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB5LTNcIj48QmFkZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjU5NTo0OVwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YCR7cGxhbkJhZGdlLmNvbG9yfSB0ZXh0LXhzYH0gZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJsYWJlbFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtwbGFuQmFkZ2U/LmlkfT57cGxhbkJhZGdlLmxhYmVsfTwvQmFkZ2U+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjU5NjoyOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB5LTMgaGlkZGVuIG1kOnRhYmxlLWNlbGxcIj48QmFkZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjU5Njo3MFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YCR7Z2V0U3Vic2NyaXB0aW9uU3RhdHVzQ29sb3IocmVzdGF1cmFudC5zdWJzY3JpcHRpb25fc3RhdHVzKX0gdGV4dC14c2B9IGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwic3Vic2NyaXB0aW9uX3N0YXR1c1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyZXN0YXVyYW50Py5pZH0+e3Jlc3RhdXJhbnQuc3Vic2NyaXB0aW9uX3N0YXR1c308L0JhZGdlPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo1OTc6MjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo1OTg6MzBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGdhcC0wLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NTk5OjMyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdmFyaWFudD1cImdob3N0XCIgc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwiaC03IHctNyBwLTBcIiBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZFJlc3RhdXJhbnQocmVzdGF1cmFudCl9PjxFeWUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjU5OToxNDBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo2MDA6MzJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB2YXJpYW50PVwiZ2hvc3RcIiBzaXplPVwic21cIiBjbGFzc05hbWU9XCJoLTcgdy03IHAtMFwiIG9uQ2xpY2s9eygpID0+IHNldEVkaXRpbmdSZXN0YXVyYW50KHsgLi4ucmVzdGF1cmFudCB9KX0+PEVkaXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjYwMDoxNDZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHJlc3RhdXJhbnQuYWNjb3VudF9zdGF0dXMgPT09ICdhY3RpdmUnIHx8ICFyZXN0YXVyYW50LmFjY291bnRfc3RhdHVzKSAmJiA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjYwMjozNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHZhcmlhbnQ9XCJnaG9zdFwiIHNpemU9XCJzbVwiIGNsYXNzTmFtZT1cImgtNyB3LTcgcC0wIHRleHQteWVsbG93LTYwMFwiIG9uQ2xpY2s9eygpID0+IHtzZXRTZWxlY3RlZFJlc3RhdXJhbnQocmVzdGF1cmFudCk7c2V0U2hvd1N1c3BlbmREaWFsb2codHJ1ZSk7fX0+PFNoaWVsZEFsZXJ0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo2MDI6MTkxXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo2MDM6MzRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB2YXJpYW50PVwiZ2hvc3RcIiBzaXplPVwic21cIiBjbGFzc05hbWU9XCJoLTcgdy03IHAtMCB0ZXh0LXJlZC02MDBcIiBvbkNsaWNrPXsoKSA9PiB7c2V0U2VsZWN0ZWRSZXN0YXVyYW50KHJlc3RhdXJhbnQpO3NldFNob3dEZWxldGVEaWFsb2codHJ1ZSk7fX0+PEJhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NjAzOjE4N1wiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhblJlc3RvcmVBY2NvdW50ICYmIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjYwNTo1NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHZhcmlhbnQ9XCJnaG9zdFwiIHNpemU9XCJzbVwiIGNsYXNzTmFtZT1cImgtNyB3LTcgcC0wIHRleHQtZ3JlZW4tNjAwXCIgb25DbGljaz17KCkgPT4ge3NldFNlbGVjdGVkUmVzdGF1cmFudChyZXN0YXVyYW50KTtzZXRTaG93UmVzdG9yZURpYWxvZyh0cnVlKTt9fT48Um90YXRlQ2N3IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo2MDU6MjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz48L0J1dHRvbj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPik7XG5cbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9UYWJzQ29udGVudD5cblxuICAgICAgICAgIHsvKiBTdXBwb3J0IFRhYiAqL31cbiAgICAgICAgICA8VGFic0NvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjYxOToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHZhbHVlPVwic3VwcG9ydFwiIGNsYXNzTmFtZT1cInNwYWNlLXktNCBzbTpzcGFjZS15LTZcIj5cbiAgICAgICAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo2MjA6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgPENhcmRIZWFkZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjYyMToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj48Q2FyZFRpdGxlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo2MjE6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHNtOnRleHQtbGdcIj5TdXBwb3J0IFJlcXVlc3RzPC9DYXJkVGl0bGU+PC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjYyMjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjYyMzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgICAge3N1cHBvcnRSZXF1ZXN0cy5sZW5ndGggPT09IDAgPyA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo2MjQ6NTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktOCB0ZXh0LWdyYXktNTAwXCI+PEhlbHBDaXJjbGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjYyNDo5OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgbXgtYXV0byBtYi0zIHRleHQtZ3JheS0zMDBcIiAvPjxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo2MjQ6MTYxXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPk5vIHN1cHBvcnQgcmVxdWVzdHMgeWV0PC9wPjwvZGl2PiA6XG4gICAgICAgICAgICAgICAgICBzdXBwb3J0UmVxdWVzdHMubWFwKChyZXF1ZXN0KSA9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NjI2OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtyZXF1ZXN0LmlkfSBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZC1sZyBwLTRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmVxdWVzdD8uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NjI3OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTMgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo2Mjg6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtaW4tdy0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo2Mjk6MjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRydW5jYXRlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJzdWJqZWN0XCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3JlcXVlc3Q/LmlkfT57cmVxdWVzdC5zdWJqZWN0fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjYzMDoyOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgc206dGV4dC1zbSB0ZXh0LWdyYXktNTAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJyZXN0YXVyYW50X25hbWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmVxdWVzdD8uaWR9PntyZXF1ZXN0LnJlc3RhdXJhbnRfbmFtZX0g4oCiIHtyZXF1ZXN0LnJlcXVlc3Rlcl9uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NjMyOjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgZmxleC1zaHJpbmstMCAke3JlcXVlc3Quc3RhdHVzID09PSAnb3BlbicgPyAnYmctcmVkLTEwMCB0ZXh0LXJlZC03MDAnIDogcmVxdWVzdC5zdGF0dXMgPT09ICdpbl9wcm9ncmVzcycgPyAnYmctYmx1ZS0xMDAgdGV4dC1ibHVlLTcwMCcgOiAnYmctZ3JlZW4tMTAwIHRleHQtZ3JlZW4tNzAwJ31gfSBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInN0YXR1c1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyZXF1ZXN0Py5pZH0+e3JlcXVlc3Quc3RhdHVzfTwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo2MzQ6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDAgbWItM1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiZGVzY3JpcHRpb25cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmVxdWVzdD8uaWR9PntyZXF1ZXN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjYzNToyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjYzNjoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHZhcmlhbnQ9XCJvdXRsaW5lXCIgY2xhc3NOYW1lPVwidGV4dC14c1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiaXNzdWVfdHlwZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyZXF1ZXN0Py5pZH0+e3JlcXVlc3QuaXNzdWVfdHlwZX08L0JhZGdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjYzNzoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHZhcmlhbnQ9XCJvdXRsaW5lXCIgY2xhc3NOYW1lPVwidGV4dC14c1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicHJpb3JpdHlcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmVxdWVzdD8uaWR9PntyZXF1ZXN0LnByaW9yaXR5fTwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo2Mzg6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS00MDBcIj57Zm9ybWF0KG5ldyBEYXRlKHJlcXVlc3QuY3JlYXRlZF9kYXRlKSwgJ01NTSBkLCB5eXl5IEhIOm1tJyl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVxdWVzdC5zdGF0dXMgIT09ICdyZXNvbHZlZCcgJiYgcmVxdWVzdC5zdGF0dXMgIT09ICdjbG9zZWQnICYmIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjYzOTo5MVwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHNpemU9XCJzbVwiIHZhcmlhbnQ9XCJvdXRsaW5lXCIgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRTdXBwb3J0KHJlcXVlc3QpfSBjbGFzc05hbWU9XCJtbC1hdXRvXCI+UmVzb2x2ZTwvQnV0dG9uPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvVGFic0NvbnRlbnQ+XG5cbiAgICAgICAgICB7LyogQXVkaXQgVGFiICovfVxuICAgICAgICAgIDxUYWJzQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NjUwOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdmFsdWU9XCJhdWRpdFwiIGNsYXNzTmFtZT1cInNwYWNlLXktNCBzbTpzcGFjZS15LTZcIj5cbiAgICAgICAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo2NTE6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgPENhcmRIZWFkZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjY1MjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj48Q2FyZFRpdGxlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo2NTI6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHNtOnRleHQtbGdcIj5BdWRpdCBMb2dzPC9DYXJkVGl0bGU+PC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjY1MzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtMCBzbTpwLTYgc206cHQtMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjY1NDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgPHRhYmxlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo2NTU6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWluLXctWzUwMHB4XVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjY1NjoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dHIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjY1NzoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgdGV4dC14cyBzbTp0ZXh0LXNtIHRleHQtZ3JheS01MDAgYm9yZGVyLWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NjU4OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInBiLTMgcHgtMyBzbTpweC0wIGZvbnQtbWVkaXVtXCI+QWN0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NjU5OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInBiLTMgZm9udC1tZWRpdW1cIj5SZXN0YXVyYW50PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NjYwOjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInBiLTMgZm9udC1tZWRpdW0gaGlkZGVuIHNtOnRhYmxlLWNlbGxcIj5BZG1pbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjY2MToyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJwYi0zIGZvbnQtbWVkaXVtIGhpZGRlbiBtZDp0YWJsZS1jZWxsXCI+UmVhc29uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NjYyOjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInBiLTMgZm9udC1tZWRpdW1cIj5EYXRlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHkgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjY2NToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImRpdmlkZS15XCI+XG4gICAgICAgICAgICAgICAgICAgICAge2F1ZGl0TG9ncy5tYXAoKGxvZykgPT5cbiAgICAgICAgICAgICAgICAgICAgICA8dHIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjY2NzoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17bG9nLmlkfSBjbGFzc05hbWU9XCJ0ZXh0LXhzIHNtOnRleHQtc20gaG92ZXI6YmctZ3JheS01MFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtsb2c/LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo2Njg6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJweS0zIHB4LTMgc206cHgtMFwiPjxCYWRnZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NjY4OjYwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdmFyaWFudD1cIm91dGxpbmVcIiBjbGFzc05hbWU9XCJjYXBpdGFsaXplIHRleHQteHNcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImFjdGlvblwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtsb2c/LmlkfT57bG9nLmFjdGlvbi5yZXBsYWNlKC9fL2csICcgJyl9PC9CYWRnZT48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjY2OToyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB5LTNcIj48cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NjY5OjQ3XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdHJ1bmNhdGUgbWF4LXctWzEyMHB4XVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicmVzdGF1cmFudF9uYW1lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2xvZz8uaWR9Pntsb2cucmVzdGF1cmFudF9uYW1lfTwvcD48cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NjY5OjEyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBoaWRkZW4gc206YmxvY2tcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInJlc3RhdXJhbnRfaWRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17bG9nPy5pZH0+e2xvZy5yZXN0YXVyYW50X2lkfTwvcD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjY3MDoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB5LTMgdGV4dC1ncmF5LTYwMCBoaWRkZW4gc206dGFibGUtY2VsbCB0cnVuY2F0ZSBtYXgtdy1bMTUwcHhdXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJhZG1pbl9lbWFpbFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtsb2c/LmlkfT57bG9nLmFkbWluX2VtYWlsfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NjcxOjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicHktMyB0ZXh0LWdyYXktNjAwIGhpZGRlbiBtZDp0YWJsZS1jZWxsIHRydW5jYXRlIG1heC13LVsxNTBweF1cIj57bG9nLnJlYXNvbiB8fCAnLSd9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo2NzI6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJweS0zIHRleHQtZ3JheS01MDAgd2hpdGVzcGFjZS1ub3dyYXBcIj57Zm9ybWF0KG5ldyBEYXRlKGxvZy5jcmVhdGVkX2RhdGUpLCAnTU1NIGQsIHl5Jyl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9UYWJzQ29udGVudD5cbiAgICAgICAgPC9UYWJzPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBEaWFsb2dzICovfVxuICAgICAgPERpYWxvZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6Njg1OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBvcGVuPXshIXNlbGVjdGVkUmVzdGF1cmFudCAmJiAhc2hvd1N1c3BlbmREaWFsb2cgJiYgIXNob3dEZWxldGVEaWFsb2cgJiYgIXNob3dSZXN0b3JlRGlhbG9nfSBvbk9wZW5DaGFuZ2U9eygpID0+IHNldFNlbGVjdGVkUmVzdGF1cmFudChudWxsKX0+XG4gICAgICAgIDxEaWFsb2dDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo2ODY6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1heC13LTJ4bCBtYXgtaC1bOTB2aF0gb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgPERpYWxvZ0hlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6Njg3OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPjxEaWFsb2dUaXRsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6Njg3OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlJlc3RhdXJhbnQgRGV0YWlsczwvRGlhbG9nVGl0bGU+PC9EaWFsb2dIZWFkZXI+XG4gICAgICAgICAge3NlbGVjdGVkUmVzdGF1cmFudCAmJlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjY4OToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktNFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwic3VzcGVuc2lvbl9yZWFzb25cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2VsZWN0ZWRSZXN0YXVyYW50Py5pZCB8fCBzZWxlY3RlZFJlc3RhdXJhbnQ/Ll9pZH0+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjY5MDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00IHBiLTQgYm9yZGVyLWJcIj5cbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRSZXN0YXVyYW50LmxvZ29fdXJsID8gPGltZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NjkxOjQ3XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgc3JjPXtzZWxlY3RlZFJlc3RhdXJhbnQubG9nb191cmx9IGFsdD17c2VsZWN0ZWRSZXN0YXVyYW50Lm5hbWV9IGNsYXNzTmFtZT1cInctMTQgaC0xNCByb3VuZGVkLXhsIG9iamVjdC1jb3ZlclwiIC8+IDogPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NjkxOjE2N1wiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTE0IGgtMTQgcm91bmRlZC14bCBiZy1vcmFuZ2UtMTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+PFN0b3JlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo2OTE6MjUyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNyBoLTcgdGV4dC1vcmFuZ2UtNjAwXCIgLz48L2Rpdj59XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NjkyOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+PGgzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo2OTI6MjFcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnIHNtOnRleHQteGwgZm9udC1ib2xkXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJuYW1lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3NlbGVjdGVkUmVzdGF1cmFudD8uaWQgfHwgc2VsZWN0ZWRSZXN0YXVyYW50Py5faWR9PntzZWxlY3RlZFJlc3RhdXJhbnQubmFtZX08L2gzPjxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo2OTI6OTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQtc21cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInJlc3RhdXJhbnRfaWRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2VsZWN0ZWRSZXN0YXVyYW50Py5pZCB8fCBzZWxlY3RlZFJlc3RhdXJhbnQ/Ll9pZH0+e3NlbGVjdGVkUmVzdGF1cmFudC5yZXN0YXVyYW50X2lkfTwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjY5NDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTQgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgIHtbW1wiQ2l0eVwiLCBzZWxlY3RlZFJlc3RhdXJhbnQuY2l0eV0sIFtcIlBob25lXCIsIHNlbGVjdGVkUmVzdGF1cmFudC5waG9uZV0sIFtcIkVtYWlsXCIsIHNlbGVjdGVkUmVzdGF1cmFudC5lbWFpbF1dLm1hcCgoW2wsIHZdKSA9PiA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo2OTU6MTQzXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtsfT48cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6Njk1OjE1NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImxcIj57bH08L3A+PHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjY5NToxOTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0cnVuY2F0ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidlwiPnt2fTwvcD48L2Rpdj4pfVxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjY5NjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPjxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo2OTY6MjFcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPkFjY291bnQgU3RhdHVzPC9wPjxCYWRnZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6Njk2OjY4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtnZXRBY2NvdW50U3RhdHVzQ29sb3Ioc2VsZWN0ZWRSZXN0YXVyYW50LmFjY291bnRfc3RhdHVzIHx8ICdhY3RpdmUnKX0+e3NlbGVjdGVkUmVzdGF1cmFudC5hY2NvdW50X3N0YXR1cyB8fCAnYWN0aXZlJ308L0JhZGdlPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge3NlbGVjdGVkUmVzdGF1cmFudC5zdXNwZW5zaW9uX3JlYXNvbiAmJiA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo2OTg6NTVcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJib3JkZXItdCBwdC00XCI+PHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjY5ODo4NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgbWItMVwiPlN1c3BlbnNpb24vRGVsZXRpb24gUmVhc29uPC9wPjxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo2OTg6MTU4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXJlZC02MDBcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInN1c3BlbnNpb25fcmVhc29uXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3NlbGVjdGVkUmVzdGF1cmFudD8uaWQgfHwgc2VsZWN0ZWRSZXN0YXVyYW50Py5faWR9PntzZWxlY3RlZFJlc3RhdXJhbnQuc3VzcGVuc2lvbl9yZWFzb259PC9wPjwvZGl2Pn1cbiAgICAgICAgICAgICAge3NlbGVjdGVkUmVzdGF1cmFudC5wZXJtYW5lbnRfZGVsZXRpb25fZGF0ZSAmJiA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo2OTk6NjFcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJiZy1yZWQtNTAgYm9yZGVyIGJvcmRlci1yZWQtMjAwIHJvdW5kZWQtbGcgcC0zXCI+PHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjY5OToxMjVcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtcmVkLTcwMFwiPlBlcm1hbmVudCBkZWxldGlvbjoge2Zvcm1hdChuZXcgRGF0ZShzZWxlY3RlZFJlc3RhdXJhbnQucGVybWFuZW50X2RlbGV0aW9uX2RhdGUpLCAnTU1NIGQsIHl5eXknKX08L3A+PC9kaXY+fVxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3MDA6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJib3JkZXItdCBwdC00XCI+XG4gICAgICAgICAgICAgICAgPGg0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3MDE6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBtYi0yXCI+U3Vic2NyaXB0aW9uPC9oND5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3MDI6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC0zIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjcwMzoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPjxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3MDM6MjNcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPlBsYW48L3A+PEJhZGdlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3MDM6NjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2dldFBsYW5CYWRnZShzZWxlY3RlZFJlc3RhdXJhbnQuc3Vic2NyaXB0aW9uX3BsYW4pLmNvbG9yfT57Z2V0UGxhbkJhZGdlKHNlbGVjdGVkUmVzdGF1cmFudC5zdWJzY3JpcHRpb25fcGxhbikubGFiZWx9PC9CYWRnZT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjcwNDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPjxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3MDQ6MjNcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPlN0YXR1czwvcD48QmFkZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjcwNDo2MlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17Z2V0U3Vic2NyaXB0aW9uU3RhdHVzQ29sb3Ioc2VsZWN0ZWRSZXN0YXVyYW50LnN1YnNjcmlwdGlvbl9zdGF0dXMpfSBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInN1YnNjcmlwdGlvbl9zdGF0dXNcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2VsZWN0ZWRSZXN0YXVyYW50Py5pZCB8fCBzZWxlY3RlZFJlc3RhdXJhbnQ/Ll9pZH0+e3NlbGVjdGVkUmVzdGF1cmFudC5zdWJzY3JpcHRpb25fc3RhdHVzfTwvQmFkZ2U+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3MDU6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj48cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzA1OjIzXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5FeHBpcmVzPC9wPjxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3MDU6NjNcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPntzZWxlY3RlZFJlc3RhdXJhbnQuc3Vic2NyaXB0aW9uX2V4cGlyZXNfYXQgPyBmb3JtYXQobmV3IERhdGUoc2VsZWN0ZWRSZXN0YXVyYW50LnN1YnNjcmlwdGlvbl9leHBpcmVzX2F0KSwgJ01NTSBkLCB5eXl5JykgOiAnLSd9PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgPC9EaWFsb2c+XG5cbiAgICAgIDxEaWFsb2cgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjcxMzo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgb3Blbj17c2hvd1N1c3BlbmREaWFsb2d9IG9uT3BlbkNoYW5nZT17c2V0U2hvd1N1c3BlbmREaWFsb2d9PlxuICAgICAgICA8RGlhbG9nQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzE0OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICA8RGlhbG9nSGVhZGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3MTU6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj48RGlhbG9nVGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjcxNToyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5TdXNwZW5kIEFjY291bnQ8L0RpYWxvZ1RpdGxlPjxEaWFsb2dEZXNjcmlwdGlvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzE1OjY2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJuYW1lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3NlbGVjdGVkUmVzdGF1cmFudD8uaWQgfHwgc2VsZWN0ZWRSZXN0YXVyYW50Py5faWR9PlRoaXMgd2lsbCBzdXNwZW5kIHtzZWxlY3RlZFJlc3RhdXJhbnQ/Lm5hbWV9LiBDYW4gYmUgcmVzdG9yZWQgd2l0aGluIDMwIGRheXMuPC9EaWFsb2dEZXNjcmlwdGlvbj48L0RpYWxvZ0hlYWRlcj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3MTY6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjcxNzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPjxsYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzE3OjE3XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCBtYi0xIGJsb2NrXCI+UmVhc29uICo8L2xhYmVsPjxUZXh0YXJlYSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzE3Ojk3XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdmFsdWU9e3N1c3BlbmRSZWFzb259IG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3VzcGVuZFJlYXNvbihlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwiUHJvdmlkZSBhIHJlYXNvbi4uLlwiIHJvd3M9ezR9IC8+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3MTg6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zXCI+PEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzE4OjQwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdmFyaWFudD1cIm91dGxpbmVcIiBvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd1N1c3BlbmREaWFsb2coZmFsc2UpO3NldFN1c3BlbmRSZWFzb24oXCJcIik7fX0gY2xhc3NOYW1lPVwiZmxleC0xXCI+Q2FuY2VsPC9CdXR0b24+PEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzE4OjE3MVwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG9uQ2xpY2s9e2hhbmRsZVN1c3BlbmRBY2NvdW50fSBkaXNhYmxlZD17IXN1c3BlbmRSZWFzb24udHJpbSgpfSBjbGFzc05hbWU9XCJmbGV4LTEgYmcteWVsbG93LTYwMCBob3ZlcjpiZy15ZWxsb3ctNzAwXCI+PFNoaWVsZEFsZXJ0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3MTg6Mjk2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgbXItMlwiIC8+U3VzcGVuZDwvQnV0dG9uPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICA8L0RpYWxvZz5cblxuICAgICAgPERpYWxvZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzIzOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBvcGVuPXtzaG93RGVsZXRlRGlhbG9nfSBvbk9wZW5DaGFuZ2U9e3NldFNob3dEZWxldGVEaWFsb2d9PlxuICAgICAgICA8RGlhbG9nQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzI0OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICA8RGlhbG9nSGVhZGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3MjU6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj48RGlhbG9nVGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjcyNToyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5EZWxldGUgQWNjb3VudDwvRGlhbG9nVGl0bGU+PERpYWxvZ0Rlc2NyaXB0aW9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3MjU6NjVcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIm5hbWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2VsZWN0ZWRSZXN0YXVyYW50Py5pZCB8fCBzZWxlY3RlZFJlc3RhdXJhbnQ/Ll9pZH0+VGhpcyB3aWxsIG1hcmsge3NlbGVjdGVkUmVzdGF1cmFudD8ubmFtZX0gZm9yIGRlbGV0aW9uLiBSZXN0b3JhYmxlIHdpdGhpbiAzMCBkYXlzLjwvRGlhbG9nRGVzY3JpcHRpb24+PC9EaWFsb2dIZWFkZXI+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzI2OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3Mjc6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYmctcmVkLTUwIGJvcmRlciBib3JkZXItcmVkLTIwMCByb3VuZGVkLWxnIHAtM1wiPjxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3Mjc6NzZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXJlZC03MDBcIj7imqDvuI8gVGhlIHJlc3RhdXJhbnQgd2lsbCBsb3NlIGFjY2VzcyBpbW1lZGlhdGVseS48L3A+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3Mjg6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj48bGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjcyODoxN1wiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgbWItMSBibG9ja1wiPlJlYXNvbiAqPC9sYWJlbD48VGV4dGFyZWEgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjcyODo5N1wiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHZhbHVlPXtkZWxldGVSZWFzb259IG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVsZXRlUmVhc29uKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJQcm92aWRlIGEgcmVhc29uLi4uXCIgcm93cz17NH0gLz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjcyOToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggZ2FwLTNcIj48QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3Mjk6NDBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB2YXJpYW50PVwib3V0bGluZVwiIG9uQ2xpY2s9eygpID0+IHtzZXRTaG93RGVsZXRlRGlhbG9nKGZhbHNlKTtzZXREZWxldGVSZWFzb24oXCJcIik7fX0gY2xhc3NOYW1lPVwiZmxleC0xXCI+Q2FuY2VsPC9CdXR0b24+PEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzI5OjE2OVwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZUFjY291bnR9IGRpc2FibGVkPXshZGVsZXRlUmVhc29uLnRyaW0oKX0gY2xhc3NOYW1lPVwiZmxleC0xIGJnLXJlZC02MDAgaG92ZXI6YmctcmVkLTcwMFwiPjxCYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjcyOToyODZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCBtci0yXCIgLz5EZWxldGU8L0J1dHRvbj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgPC9EaWFsb2c+XG5cbiAgICAgIDxEaWFsb2cgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjczNDo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgb3Blbj17c2hvd1Jlc3RvcmVEaWFsb2d9IG9uT3BlbkNoYW5nZT17c2V0U2hvd1Jlc3RvcmVEaWFsb2d9PlxuICAgICAgICA8RGlhbG9nQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzM1OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICA8RGlhbG9nSGVhZGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3MzY6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj48RGlhbG9nVGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjczNjoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5SZXN0b3JlIEFjY291bnQ8L0RpYWxvZ1RpdGxlPjxEaWFsb2dEZXNjcmlwdGlvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzM2OjY2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJuYW1lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3NlbGVjdGVkUmVzdGF1cmFudD8uaWQgfHwgc2VsZWN0ZWRSZXN0YXVyYW50Py5faWR9PlJlc3RvcmUge3NlbGVjdGVkUmVzdGF1cmFudD8ubmFtZX0gYW5kIGdyYW50IGFjY2VzcyBhZ2Fpbi48L0RpYWxvZ0Rlc2NyaXB0aW9uPjwvRGlhbG9nSGVhZGVyPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjczNzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAge3NlbGVjdGVkUmVzdGF1cmFudCAmJiA8PlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3Mzk6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAgYm9yZGVyIGJvcmRlci1ncmVlbi0yMDAgcm91bmRlZC1sZyBwLTNcIj48cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzM5OjgyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmVlbi03MDBcIj7inJMgV2l0aGluIHRoZSAzMC1kYXkgcmVzdG9yZSB3aW5kb3c8L3A+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjc0MDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktMiB0ZXh0LXNtXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJzdXNwZW5zaW9uX3JlYXNvblwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtzZWxlY3RlZFJlc3RhdXJhbnQ/LmlkIHx8IHNlbGVjdGVkUmVzdGF1cmFudD8uX2lkfT5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzQxOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJuYW1lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3NlbGVjdGVkUmVzdGF1cmFudD8uaWQgfHwgc2VsZWN0ZWRSZXN0YXVyYW50Py5faWR9PjxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3NDE6MTlcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj5SZXN0YXVyYW50Ojwvc3Bhbj4ge3NlbGVjdGVkUmVzdGF1cmFudC5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzQyOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJhY2NvdW50X3N0YXR1c1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtzZWxlY3RlZFJlc3RhdXJhbnQ/LmlkIHx8IHNlbGVjdGVkUmVzdGF1cmFudD8uX2lkfT48c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzQyOjE5XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+U3RhdHVzOjwvc3Bhbj4ge3NlbGVjdGVkUmVzdGF1cmFudC5hY2NvdW50X3N0YXR1c308L3A+XG4gICAgICAgICAgICAgICAge3NlbGVjdGVkUmVzdGF1cmFudC5zdXNwZW5zaW9uX3JlYXNvbiAmJiA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzQzOjU3XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJzdXNwZW5zaW9uX3JlYXNvblwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtzZWxlY3RlZFJlc3RhdXJhbnQ/LmlkIHx8IHNlbGVjdGVkUmVzdGF1cmFudD8uX2lkfT48c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzQzOjYwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+UmVhc29uOjwvc3Bhbj4ge3NlbGVjdGVkUmVzdGF1cmFudC5zdXNwZW5zaW9uX3JlYXNvbn08L3A+fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPn1cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjc0NjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggZ2FwLTNcIj48QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3NDY6NDBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB2YXJpYW50PVwib3V0bGluZVwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dSZXN0b3JlRGlhbG9nKGZhbHNlKX0gY2xhc3NOYW1lPVwiZmxleC0xXCI+Q2FuY2VsPC9CdXR0b24+PEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzQ2OjE0NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG9uQ2xpY2s9e2hhbmRsZVJlc3RvcmVBY2NvdW50fSBjbGFzc05hbWU9XCJmbGV4LTEgYmctZ3JlZW4tNjAwIGhvdmVyOmJnLWdyZWVuLTcwMFwiPjxSb3RhdGVDY3cgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjc0NjoyMzRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCBtci0yXCIgLz5SZXN0b3JlPC9CdXR0b24+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgIDwvRGlhbG9nPlxuXG4gICAgICA8RGlhbG9nIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3NTE6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG9wZW49eyEhZWRpdGluZ1Jlc3RhdXJhbnR9IG9uT3BlbkNoYW5nZT17KCkgPT4gc2V0RWRpdGluZ1Jlc3RhdXJhbnQobnVsbCl9PlxuICAgICAgICA8RGlhbG9nQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzUyOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtYXgtdy0yeGwgbWF4LWgtWzkwdmhdIG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICAgIDxEaWFsb2dIZWFkZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjc1MzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPjxEaWFsb2dUaXRsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzUzOjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJuYW1lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2VkaXRpbmdSZXN0YXVyYW50Py5pZCB8fCBlZGl0aW5nUmVzdGF1cmFudD8uX2lkfT5FZGl0IFJlc3RhdXJhbnQgLSB7ZWRpdGluZ1Jlc3RhdXJhbnQ/Lm5hbWV9PC9EaWFsb2dUaXRsZT48L0RpYWxvZ0hlYWRlcj5cbiAgICAgICAgICB7ZWRpdGluZ1Jlc3RhdXJhbnQgJiZcbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3NTU6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzU2OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPGg0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3NTc6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBtYi0zXCI+U3Vic2NyaXB0aW9uIFBsYW48L2g0PlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjc1ODoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjc1OToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPjxsYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzU5OjIzXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCBtYi0xIGJsb2NrXCI+UGxhbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjc2MDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHZhbHVlPXtlZGl0aW5nUmVzdGF1cmFudC5zdWJzY3JpcHRpb25fcGxhbn0gb25WYWx1ZUNoYW5nZT17KHYpID0+IHNldEVkaXRpbmdSZXN0YXVyYW50KHsgLi4uZWRpdGluZ1Jlc3RhdXJhbnQsIHN1YnNjcmlwdGlvbl9wbGFuOiB2IH0pfT5cbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0VHJpZ2dlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzYxOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPjxTZWxlY3RWYWx1ZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzYxOjM3XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+PC9TZWxlY3RUcmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3NjI6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+PFNlbGVjdEl0ZW0gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjc2MjozN1wiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB2YWx1ZT1cInRyaWFsXCI+VHJpYWw8L1NlbGVjdEl0ZW0+PFNlbGVjdEl0ZW0gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjc2Mjo4MVwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB2YWx1ZT1cImJhc2ljXCI+QmFzaWM8L1NlbGVjdEl0ZW0+PFNlbGVjdEl0ZW0gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjc2MjoxMjVcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdmFsdWU9XCJwcm9cIj5Qcm88L1NlbGVjdEl0ZW0+PFNlbGVjdEl0ZW0gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjc2MjoxNjVcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdmFsdWU9XCJtdWx0aV9vdXRsZXRcIj5NdWx0aS1PdXRsZXQ8L1NlbGVjdEl0ZW0+PC9TZWxlY3RDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjc2NDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPjxsYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzY0OjIzXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCBtYi0xIGJsb2NrXCI+U3ViLiBTdGF0dXM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3NjU6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB2YWx1ZT17ZWRpdGluZ1Jlc3RhdXJhbnQuc3Vic2NyaXB0aW9uX3N0YXR1c30gb25WYWx1ZUNoYW5nZT17KHYpID0+IHNldEVkaXRpbmdSZXN0YXVyYW50KHsgLi4uZWRpdGluZ1Jlc3RhdXJhbnQsIHN1YnNjcmlwdGlvbl9zdGF0dXM6IHYgfSl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RUcmlnZ2VyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3NjY6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+PFNlbGVjdFZhbHVlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3NjY6MzdcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz48L1NlbGVjdFRyaWdnZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjc2NzoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj48U2VsZWN0SXRlbSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzY3OjM3XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHZhbHVlPVwiYWN0aXZlXCI+QWN0aXZlPC9TZWxlY3RJdGVtPjxTZWxlY3RJdGVtIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3Njc6ODNcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdmFsdWU9XCJleHBpcmVkXCI+RXhwaXJlZDwvU2VsZWN0SXRlbT48U2VsZWN0SXRlbSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzY3OjEzMVwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB2YWx1ZT1cImNhbmNlbGxlZFwiPkNhbmNlbGxlZDwvU2VsZWN0SXRlbT48L1NlbGVjdENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzY5OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+PGxhYmVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3Njk6MjNcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIG1iLTEgYmxvY2tcIj5FeHBpcmVzIEF0PC9sYWJlbD48SW5wdXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjc2OToxMDVcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPXtlZGl0aW5nUmVzdGF1cmFudC5zdWJzY3JpcHRpb25fZXhwaXJlc19hdCB8fCBcIlwifSBvbkNoYW5nZT17KGUpID0+IHNldEVkaXRpbmdSZXN0YXVyYW50KHsgLi4uZWRpdGluZ1Jlc3RhdXJhbnQsIHN1YnNjcmlwdGlvbl9leHBpcmVzX2F0OiBlLnRhcmdldC52YWx1ZSB9KX0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjc3MjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxoNCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzczOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgbWItM1wiPkVuYWJsZWQgRmVhdHVyZXM8L2g0PlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjc3NDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgIHtbeyBrZXk6ICdxcl9vcmRlcmluZycsIGxhYmVsOiAnUVIgT3JkZXJpbmcnIH0sIHsga2V5OiAnZGlyZWN0X29yZGVycycsIGxhYmVsOiAnRGlyZWN0IE9yZGVycycgfSwgeyBrZXk6ICdwYXltZW50X2ludGVncmF0aW9uJywgbGFiZWw6ICdQYXltZW50cycgfSwgeyBrZXk6ICdjdXN0b21lcl9hbmFseXRpY3MnLCBsYWJlbDogJ0FuYWx5dGljcycgfSwgeyBrZXk6ICdtdWx0aV9vdXRsZXQnLCBsYWJlbDogJ011bHRpIE91dGxldCcgfSwgeyBrZXk6ICdjdXN0b21fYnJhbmRpbmcnLCBsYWJlbDogJ0JyYW5kaW5nJyB9LCB7IGtleTogJ2RlbGl2ZXJ5JywgbGFiZWw6ICdEZWxpdmVyeScgfSwgeyBrZXk6ICd0YWtlYXdheScsIGxhYmVsOiAnVGFrZWF3YXknIH1dLm1hcCgoZiwgX19hcnJJZHhfXykgPT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjc3NjoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17Zi5rZXl9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHAtMi41IGJvcmRlciByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyIGhvdmVyOmJnLWdyYXktNTAgdGV4dC1zbVwiIGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffSBkYXRhLWFyci1maWVsZD1cImxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3Nzc6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtlZGl0aW5nUmVzdGF1cmFudC5mZWF0dXJlc19lbmFibGVkPy5bZi5rZXldIHx8IGZhbHNlfSBvbkNoYW5nZT17KGUpID0+IHNldEVkaXRpbmdSZXN0YXVyYW50KHsgLi4uZWRpdGluZ1Jlc3RhdXJhbnQsIGZlYXR1cmVzX2VuYWJsZWQ6IHsgLi4uZWRpdGluZ1Jlc3RhdXJhbnQuZmVhdHVyZXNfZW5hYmxlZCwgW2Yua2V5XTogZS50YXJnZXQuY2hlY2tlZCB9IH0pfSBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtb3JhbmdlLTYwMCByb3VuZGVkXCIgZGF0YS1hcnItaW5kZXg9e19fYXJySWR4X199IC8+XG4gICAgICAgICAgICAgICAgICAgICAge2YubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjc4MzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxoNCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6Nzg0OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgbWItM1wiPlNldHRpbmdzPC9oND5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3ODU6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICB7W3sgbDogXCJDdXJyZW5jeVwiLCBrOiBcImN1cnJlbmN5XCIsIHQ6IFwidGV4dFwiLCBkZWY6IFwiSU5SXCIgfSwgeyBsOiBcIlRheCBSYXRlICglKVwiLCBrOiBcInRheF9yYXRlXCIsIHQ6IFwibnVtYmVyXCIsIGRlZjogNSB9LCB7IGw6IFwiU2VydmljZSBDaGFyZ2UgKCUpXCIsIGs6IFwic2VydmljZV9jaGFyZ2VcIiwgdDogXCJudW1iZXJcIiwgZGVmOiAwIH0sIHsgbDogXCJUYWJsZSBDb3VudFwiLCBrOiBcInRhYmxlX2NvdW50XCIsIHQ6IFwibnVtYmVyXCIsIGRlZjogMTAgfV0ubWFwKChzLCBfX2FycklkeF9fKSA9PlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjc4NzoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17cy5rfSBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30+PGxhYmVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3ODc6MzVcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgbWItMSBibG9ja1wiIGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffSBkYXRhLWFyci1maWVsZD1cImxcIj57cy5sfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo3ODg6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB0eXBlPXtzLnR9IHZhbHVlPXtlZGl0aW5nUmVzdGF1cmFudC5zZXR0aW5ncz8uW3Mua10gPz8gcy5kZWZ9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0RWRpdGluZ1Jlc3RhdXJhbnQoeyAuLi5lZGl0aW5nUmVzdGF1cmFudCwgc2V0dGluZ3M6IHsgLi4uZWRpdGluZ1Jlc3RhdXJhbnQuc2V0dGluZ3MsIFtzLmtdOiBzLnQgPT09ICdudW1iZXInID8gcy5rID09PSAndGFibGVfY291bnQnID8gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpIDogcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSkgOiBlLnRhcmdldC52YWx1ZSB9IH0pfSBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzkyOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBnYXAtMyBwdC00IGJvcmRlci10XCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6NzkzOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdmFyaWFudD1cIm91dGxpbmVcIiBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0aW5nUmVzdGF1cmFudChudWxsKX0gY2xhc3NOYW1lPVwiZmxleC0xXCI+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6Nzk0OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgb25DbGljaz17aGFuZGxlU2F2ZVJlc3RhdXJhbnR9IGRpc2FibGVkPXtpc1NhdmluZ30gY2xhc3NOYW1lPVwiZmxleC0xIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1vcmFuZ2UtNjAwIHRvLW9yYW5nZS01MDBcIj5cbiAgICAgICAgICAgICAgICAgIHtpc1NhdmluZyA/IDw+PGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6Nzk1OjMyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImFuaW1hdGUtc3BpbiByb3VuZGVkLWZ1bGwgaC00IHctNCBib3JkZXItYi0yIGJvcmRlci13aGl0ZSBtci0yXCI+PC9kaXY+U2F2aW5nLi4uPC8+IDogPD48U2F2ZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6Nzk1OjEzNVwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IG1yLTJcIiAvPlNhdmUgQ2hhbmdlczwvPn1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgIDwvRGlhbG9nPlxuXG4gICAgICA8RGlhbG9nIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo4MDM6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG9wZW49eyEhc2VsZWN0ZWRTdXBwb3J0fSBvbk9wZW5DaGFuZ2U9eygpID0+IHNldFNlbGVjdGVkU3VwcG9ydChudWxsKX0+XG4gICAgICAgIDxEaWFsb2dDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo4MDQ6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgIDxEaWFsb2dIZWFkZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjgwNToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj48RGlhbG9nVGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjgwNToyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5SZXNvbHZlIFN1cHBvcnQgUmVxdWVzdDwvRGlhbG9nVGl0bGU+PC9EaWFsb2dIZWFkZXI+XG4gICAgICAgICAge3NlbGVjdGVkU3VwcG9ydCAmJlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjgwNzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo4MDg6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj48cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6ODA4OjE5XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwic3ViamVjdFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtzZWxlY3RlZFN1cHBvcnQ/LmlkIHx8IHNlbGVjdGVkU3VwcG9ydD8uX2lkfT57c2VsZWN0ZWRTdXBwb3J0LnN1YmplY3R9PC9wPjxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo4MDg6ODNcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInJlc3RhdXJhbnRfbmFtZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtzZWxlY3RlZFN1cHBvcnQ/LmlkIHx8IHNlbGVjdGVkU3VwcG9ydD8uX2lkfT57c2VsZWN0ZWRTdXBwb3J0LnJlc3RhdXJhbnRfbmFtZX08L3A+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjgwOToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj48bGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjgwOToxOVwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgbWItMSBibG9ja1wiPkFkbWluIE5vdGVzPC9sYWJlbD48VGV4dGFyZWEgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjgwOToxMDJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgcGxhY2Vob2xkZXI9XCJBZGQgcmVzb2x1dGlvbiBub3Rlcy4uLlwiIHJvd3M9ezR9IGlkPVwiYWRtaW4tbm90ZXNcIiAvPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo4MTA6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6ODExOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdmFyaWFudD1cIm91dGxpbmVcIiBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZFN1cHBvcnQobnVsbCl9IGNsYXNzTmFtZT1cImZsZXgtMVwiPkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjgxMjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG9uQ2xpY2s9eygpID0+IHtjb25zdCBub3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZG1pbi1ub3RlcycpLnZhbHVlO2hhbmRsZVJlc29sdmVTdXBwb3J0UmVxdWVzdChzZWxlY3RlZFN1cHBvcnQuaWQsIG5vdGVzKTt9fSBjbGFzc05hbWU9XCJmbGV4LTEgYmctZ3JhZGllbnQtdG8tciBmcm9tLW9yYW5nZS02MDAgdG8tb3JhbmdlLTUwMFwiPk1hcmsgYXMgUmVzb2x2ZWQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgIDwvRGlhbG9nPlxuXG4gICAgICA8RGlhbG9nIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo4MTk6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG9wZW49e3Nob3dFbWFpbERpYWxvZ30gb25PcGVuQ2hhbmdlPXtzZXRTaG93RW1haWxEaWFsb2d9PlxuICAgICAgICA8RGlhbG9nQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6ODIwOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtYXgtdy1sZ1wiPlxuICAgICAgICAgIDxEaWFsb2dIZWFkZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjgyMToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj48RGlhbG9nVGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjgyMToyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5TZW5kIEVtYWlsPC9EaWFsb2dUaXRsZT48L0RpYWxvZ0hlYWRlcj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo4MjI6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjgyMzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPjxsYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6ODIzOjE3XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCBtYi0xIGJsb2NrXCI+VG8gRW1haWw8L2xhYmVsPjxJbnB1dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6ODIzOjk3XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdmFsdWU9e2VtYWlsRGF0YS50b30gb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbERhdGEoeyAuLi5lbWFpbERhdGEsIHRvOiBlLnRhcmdldC52YWx1ZSB9KX0gcGxhY2Vob2xkZXI9XCJyZXN0YXVyYW50QGV4YW1wbGUuY29tXCIgdHlwZT1cImVtYWlsXCIgLz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjgyNDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPjxsYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6ODI0OjE3XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCBtYi0xIGJsb2NrXCI+U3ViamVjdDwvbGFiZWw+PElucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo4MjQ6OTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB2YWx1ZT17ZW1haWxEYXRhLnN1YmplY3R9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWxEYXRhKHsgLi4uZW1haWxEYXRhLCBzdWJqZWN0OiBlLnRhcmdldC52YWx1ZSB9KX0gcGxhY2Vob2xkZXI9XCJFbWFpbCBzdWJqZWN0XCIgLz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjgyNToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPjxsYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6ODI1OjE3XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCBtYi0xIGJsb2NrXCI+TWVzc2FnZTwvbGFiZWw+PFRleHRhcmVhIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo4MjU6OTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB2YWx1ZT17ZW1haWxEYXRhLmJvZHl9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWxEYXRhKHsgLi4uZW1haWxEYXRhLCBib2R5OiBlLnRhcmdldC52YWx1ZSB9KX0gcGxhY2Vob2xkZXI9XCJXcml0ZSB5b3VyIG1lc3NhZ2UgaGVyZS4uLlwiIHJvd3M9ezV9IC8+PC9kaXY+XG4gICAgICAgICAgICB7ZW1haWxTdWNjZXNzICYmIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjgyNjoyOVwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwIGJvcmRlciBib3JkZXItZ3JlZW4tMjAwIHRleHQtZ3JlZW4tNzAwIHB4LTQgcHktMyByb3VuZGVkLWxnIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJlbWFpbFN1Y2Nlc3NcIj48Q2hlY2tDaXJjbGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjgyNjoxNDJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+e2VtYWlsU3VjY2Vzc308L2Rpdj59XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo4Mjc6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zXCI+XG4gICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjgyODoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHZhcmlhbnQ9XCJvdXRsaW5lXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd0VtYWlsRGlhbG9nKGZhbHNlKX0gY2xhc3NOYW1lPVwiZmxleC0xXCI+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjgyOToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG9uQ2xpY2s9e2hhbmRsZVNlbmRFbWFpbH0gZGlzYWJsZWQ9eyFlbWFpbERhdGEudG8gfHwgIWVtYWlsRGF0YS5zdWJqZWN0IHx8ICFlbWFpbERhdGEuYm9keSB8fCBpc1NlbmRpbmdFbWFpbH0gY2xhc3NOYW1lPVwiZmxleC0xIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1vcmFuZ2UtNjAwIHRvLW9yYW5nZS01MDBcIj5cbiAgICAgICAgICAgICAgICB7aXNTZW5kaW5nRW1haWwgPyA8PjxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9TdXBlckFkbWluRGFzaGJvYXJkOjgzMDozNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJhbmltYXRlLXNwaW4gcm91bmRlZC1mdWxsIGgtNCB3LTQgYm9yZGVyLWItMiBib3JkZXItd2hpdGUgbXItMlwiPjwvZGl2PlNlbmRpbmcuLi48Lz4gOiA8PjxTZW5kIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZDo4MzA6MTQwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgbXItMlwiIC8+U2VuZCBFbWFpbDwvPn1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgPC9EaWFsb2c+XG5cbiAgICAgIDxSYXpvcnBheUNvbmZpZ0RpYWxvZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1N1cGVyQWRtaW5EYXNoYm9hcmQ6ODM3OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBvcGVuPXtzaG93UmF6b3JwYXlEaWFsb2d9IG9uQ2xvc2U9eygpID0+IHNldFNob3dSYXpvcnBheURpYWxvZyhmYWxzZSl9IC8+XG4gICAgPC9kaXY+KTtcblxufSJdLCJmaWxlIjoiL2FwcC9zcmMvcGFnZXMvU3VwZXJBZG1pbkRhc2hib2FyZC5qc3gifQ==