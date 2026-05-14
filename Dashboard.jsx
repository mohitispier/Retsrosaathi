import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Dashboard.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/Dashboard.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { motion, AnimatePresence } from "/node_modules/.vite/deps/framer-motion.js?v=79425e35";
import { base44 } from "/src/api/base44Client.js";
import {
  ShoppingBag,
  Users,
  IndianRupee,
  TrendingUp,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  LayoutDashboard,
  Menu as MenuIcon,
  Utensils,
  BarChart3,
  UserCircle,
  Settings,
  QrCode,
  CreditCard,
  X,
  ChefHat,
  Bell,
  Eye,
  Printer,
  Download,
  Plus,
  Search,
  Edit2,
  Trash2,
  EyeOff,
  Leaf,
  Flame,
  Filter as FilterIcon,
  MoreVertical,
  Upload,
  Phone,
  RefreshCw,
  FileText,
  Store,
  LogOut,
  MessageSquare,
  Bike
} from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
import { Card, CardContent, CardHeader, CardTitle } from "/src/components/ui/card.jsx";
import { Button } from "/src/components/ui/button.jsx";
import { Badge } from "/src/components/ui/badge.jsx";
import { Input } from "/src/components/ui/input.jsx";
import { Label } from "/src/components/ui/label.jsx";
import { Textarea } from "/src/components/ui/textarea.jsx";
import { Switch } from "/src/components/ui/switch.jsx";
import { Tabs, TabsList, TabsTrigger } from "/src/components/ui/tabs.jsx";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "/src/components/ui/dialog.jsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "/src/components/ui/select.jsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "/src/components/ui/dropdown-menu.jsx";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "/src/components/ui/alert-dialog.jsx";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "/node_modules/.vite/deps/recharts.js?v=79425e35";
import { Toaster } from "/src/components/ui/toaster.jsx";
import OverviewSection from "/src/components/dashboard/OverviewSection.jsx";
import OrdersSection from "/src/components/dashboard/OrdersSection.jsx";
import MenuSection from "/src/components/dashboard/MenuSection.jsx";
import AnalyticsSection from "/src/components/dashboard/AnalyticsSection.jsx";
import CustomersSection from "/src/components/dashboard/CustomersSection.jsx";
import QRCodesSection from "/src/components/dashboard/QRCodesSection.jsx";
import BillingSection from "/src/components/dashboard/BillingSection.jsx";
import SettingsSection from "/src/components/dashboard/SettingsSection.jsx";
import FeedbackSection from "/src/components/dashboard/FeedbackSection.jsx";
import ChatSection from "/src/components/dashboard/ChatSection.jsx";
import SupportChatSection from "/src/components/dashboard/SupportChatSection.jsx";
import RidersSection from "/src/components/dashboard/RidersSection.jsx";
export default function Dashboard() {
  _s();
  const [activeSection, setActiveSection] = useState("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [restaurant, setRestaurant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showFeedbackDialog, setShowFeedbackDialog] = useState(false);
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [unreadChatCount, setUnreadChatCount] = useState(0);
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    loadData();
    const interval = setInterval(loadUnreadCounts, 5e3);
    let unsubscribeOrders;
    if (restaurant?.restaurant_id) {
      unsubscribeOrders = base44.entities.Order.subscribe((event) => {
        if (event.data.restaurant_id === restaurant.restaurant_id) {
          if (event.type === "create") {
            setOrders((prev) => [event.data, ...prev]);
          } else if (event.type === "update") {
            setOrders((prev) => prev.map((o) => o.id === event.data.id ? event.data : o));
          } else if (event.type === "delete") {
            setOrders((prev) => prev.filter((o) => o.id !== event.data.id));
          }
        }
      });
    }
    return () => {
      clearInterval(interval);
      if (unsubscribeOrders) unsubscribeOrders();
    };
  }, [restaurant?.restaurant_id]);
  useEffect(() => {
    const preventBack = () => {
      window.history.pushState(null, null, window.location.pathname);
    };
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener("popstate", preventBack);
    return () => {
      window.removeEventListener("popstate", preventBack);
    };
  }, []);
  const loadData = async () => {
    try {
      const isAuth = await base44.auth.isAuthenticated();
      if (!isAuth) {
        window.location.href = "/Home";
        return;
      }
      const userData = await base44.auth.me();
      setUser(userData);
      if (!userData?.restaurant_id) {
        window.location.href = "/GetStarted";
        return;
      }
      const restaurants = await base44.entities.Restaurant.filter({
        restaurant_id: userData.restaurant_id
      });
      if (restaurants.length === 0) {
        await base44.auth.updateMe({ restaurant_id: null });
        window.location.href = "/GetStarted";
        return;
      }
      if (!restaurants[0].onboarding_completed) {
        window.location.href = "/Onboarding";
        return;
      }
      setRestaurant(restaurants[0]);
      const [ordersData, customersData, menuData] = await Promise.all(
        [
          base44.entities.Order.filter({ restaurant_id: userData.restaurant_id }, "-created_date", 500),
          base44.entities.Customer.filter({ restaurant_id: userData.restaurant_id }),
          base44.entities.MenuItem.filter({ restaurant_id: userData.restaurant_id }, "sort_order")
        ]
      );
      setOrders(ordersData);
      setCustomers(customersData);
      setMenuItems(menuData);
      await loadUnreadCounts();
      if (ordersData.length >= 20) {
        const existingFeedback = await base44.entities.Feedback.filter({
          restaurant_id: userData.restaurant_id
        });
        if (existingFeedback.length === 0) {
          setShowFeedbackDialog(true);
        }
      }
    } catch (e) {
      console.error("Error loading data:", e);
      window.location.href = "/Home";
    } finally {
      setIsLoading(false);
    }
  };
  const reloadOrders = async () => {
    if (!restaurant?.restaurant_id) return;
    const ordersData = await base44.entities.Order.filter(
      { restaurant_id: restaurant.restaurant_id },
      "-created_date",
      500
    );
    setOrders(ordersData);
  };
  const reloadMenuItems = async () => {
    if (!restaurant?.restaurant_id) return;
    const menuData = await base44.entities.MenuItem.filter(
      { restaurant_id: restaurant.restaurant_id },
      "sort_order"
    );
    setMenuItems(menuData);
  };
  const loadUnreadCounts = async () => {
    if (!restaurant?.restaurant_id) return;
    const allMessages = await base44.entities.ChatMessage.filter(
      { restaurant_id: restaurant.restaurant_id },
      "-created_date",
      200
    );
    const unreadSessions = /* @__PURE__ */ new Set();
    allMessages.forEach((msg) => {
      if (!msg.is_read && msg.sender_type === "customer") {
        unreadSessions.add(msg.session_id);
      }
    });
    setUnreadChatCount(unreadSessions.size);
    const notifs = await base44.entities.Notification.filter(
      { restaurant_id: restaurant.restaurant_id, is_read: false },
      "-created_date",
      50
    );
    setNotifications(notifs);
  };
  const handlePlanUpgraded = async () => {
    if (!user?.restaurant_id) return;
    const restaurants = await base44.entities.Restaurant.filter({
      restaurant_id: user.restaurant_id
    });
    if (restaurants.length > 0) {
      setRestaurant(restaurants[0]);
    }
  };
  const sections = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "orders", label: "Orders", icon: ShoppingBag },
    { id: "menu", label: "Menu", icon: Utensils },
    { id: "riders", label: "Delivery Riders", icon: Bike },
    { id: "chat", label: "Customer Chat", icon: MessageSquare, badge: unreadChatCount },
    { id: "support", label: "Support Chat", icon: Phone },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "customers", label: "Customers", icon: Users },
    { id: "qrcodes", label: "QR Codes", icon: QrCode },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "feedback", label: "Feedback", icon: MessageSquare }
  ];
  const handleLogout = async () => {
    await base44.auth.logout();
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:275:6", "data-dynamic-content": "false", className: "min-h-screen flex items-center justify-center bg-gray-50", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:276:8", "data-dynamic-content": "false", className: "text-center", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:277:10", "data-dynamic-content": "false", className: "animate-spin rounded-full h-10 w-10 border-b-2 border-orange-600 mx-auto mb-4" }, void 0, false, {
        fileName: "/app/src/pages/Dashboard.jsx",
        lineNumber: 296,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Dashboard:278:10", "data-dynamic-content": "false", className: "text-gray-500", children: "Loading dashboard..." }, void 0, false, {
        fileName: "/app/src/pages/Dashboard.jsx",
        lineNumber: 297,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Dashboard.jsx",
      lineNumber: 295,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/Dashboard.jsx",
      lineNumber: 294,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Toaster, { "data-source-location": "pages/Dashboard:286:6", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/pages/Dashboard.jsx",
      lineNumber: 305,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:287:6", "data-dynamic-content": "true", className: "min-h-screen bg-gray-50 flex", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:289:6", "data-dynamic-content": "true", className: `
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `, children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:293:8", "data-dynamic-content": "true", className: "h-full flex flex-col", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:295:10", "data-dynamic-content": "true", className: "p-6 border-b border-gray-200", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:296:12", "data-dynamic-content": "true", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:297:14", "data-dynamic-content": "false", className: "w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Store, { "data-source-location": "pages/Dashboard:298:16", "data-dynamic-content": "false", className: "w-6 h-6 text-white" }, void 0, false, {
            fileName: "/app/src/pages/Dashboard.jsx",
            lineNumber: 317,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/Dashboard.jsx",
            lineNumber: 316,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:300:14", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/Dashboard:301:16", "data-dynamic-content": "true", className: "font-bold text-gray-900", "data-collection-item-field": "name", "data-collection-item-id": restaurant?.id || restaurant?._id, children: restaurant?.name }, void 0, false, {
              fileName: "/app/src/pages/Dashboard.jsx",
              lineNumber: 320,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Dashboard:302:16", "data-dynamic-content": "true", className: "text-xs text-gray-500", "data-collection-item-field": "restaurant_id", "data-collection-item-id": restaurant?.id || restaurant?._id, children: restaurant?.restaurant_id }, void 0, false, {
              fileName: "/app/src/pages/Dashboard.jsx",
              lineNumber: 321,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Dashboard.jsx",
            lineNumber: 319,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Dashboard.jsx",
          lineNumber: 315,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Dashboard.jsx",
          lineNumber: 314,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("nav", { "data-source-location": "pages/Dashboard:308:10", "data-dynamic-content": "true", className: "flex-1 p-4 space-y-1 overflow-y-auto", children: sections.map((section) => {
          const Icon = section.icon;
          return /* @__PURE__ */ jsxDEV(
            "button",
            {
              "data-source-location": "pages/Dashboard:312:16",
              "data-dynamic-content": "true",
              onClick: () => {
                setActiveSection(section.id);
                setIsSidebarOpen(false);
              },
              className: `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeSection === section.id ? "bg-orange-50 text-orange-600" : "text-gray-600 hover:bg-gray-50"}`,
              "data-collection-item-id": section?.id,
              children: [
                /* @__PURE__ */ jsxDEV(Icon, { "data-source-location": "pages/Dashboard:324:18", "data-dynamic-content": "false", className: "w-5 h-5" }, void 0, false, {
                  fileName: "/app/src/pages/Dashboard.jsx",
                  lineNumber: 343,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Dashboard:325:18", "data-dynamic-content": "true", className: "font-medium", "data-collection-item-field": "label", "data-collection-item-id": section?.id, children: section.label }, void 0, false, {
                  fileName: "/app/src/pages/Dashboard.jsx",
                  lineNumber: 344,
                  columnNumber: 19
                }, this),
                section.badge > 0 && /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Dashboard:327:20", "data-dynamic-content": "true", className: "ml-auto w-5 h-5 bg-red-600 text-white text-xs rounded-full flex items-center justify-center", "data-collection-item-field": "badge", "data-collection-item-id": section?.id, children: section.badge }, void 0, false, {
                  fileName: "/app/src/pages/Dashboard.jsx",
                  lineNumber: 346,
                  columnNumber: 21
                }, this)
              ]
            },
            section.id,
            true,
            {
              fileName: "/app/src/pages/Dashboard.jsx",
              lineNumber: 331,
              columnNumber: 19
            },
            this
          );
        }) }, void 0, false, {
          fileName: "/app/src/pages/Dashboard.jsx",
          lineNumber: 327,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:337:10", "data-dynamic-content": "true", className: "p-4 border-t border-gray-200", children: /* @__PURE__ */ jsxDEV(DropdownMenu, { "data-source-location": "pages/Dashboard:338:12", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV(DropdownMenuTrigger, { "data-source-location": "pages/Dashboard:339:14", "data-dynamic-content": "true", asChild: true, children: /* @__PURE__ */ jsxDEV("button", { "data-source-location": "pages/Dashboard:340:16", "data-dynamic-content": "true", className: "w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:341:18", "data-dynamic-content": "true", className: "w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Dashboard:342:20", "data-dynamic-content": "true", className: "text-orange-600 font-medium text-sm", children: user?.full_name?.[0] || user?.email?.[0] }, void 0, false, {
              fileName: "/app/src/pages/Dashboard.jsx",
              lineNumber: 361,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/app/src/pages/Dashboard.jsx",
              lineNumber: 360,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:346:18", "data-dynamic-content": "true", className: "flex-1 text-left", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Dashboard:347:20", "data-dynamic-content": "true", className: "font-medium text-gray-900 text-sm", "data-collection-item-field": "full_name", "data-collection-item-id": user?.id || user?._id, children: user?.full_name }, void 0, false, {
                fileName: "/app/src/pages/Dashboard.jsx",
                lineNumber: 366,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Dashboard:348:20", "data-dynamic-content": "true", className: "text-xs text-gray-500", "data-collection-item-field": "email", "data-collection-item-id": user?.id || user?._id, children: user?.email }, void 0, false, {
                fileName: "/app/src/pages/Dashboard.jsx",
                lineNumber: 367,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Dashboard.jsx",
              lineNumber: 365,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Dashboard.jsx",
            lineNumber: 359,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/Dashboard.jsx",
            lineNumber: 358,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(DropdownMenuContent, { "data-source-location": "pages/Dashboard:352:14", "data-dynamic-content": "true", align: "end", className: "w-56", children: /* @__PURE__ */ jsxDEV(DropdownMenuItem, { "data-source-location": "pages/Dashboard:353:16", "data-dynamic-content": "true", onClick: handleLogout, className: "text-red-600", children: [
            /* @__PURE__ */ jsxDEV(LogOut, { "data-source-location": "pages/Dashboard:354:18", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
              fileName: "/app/src/pages/Dashboard.jsx",
              lineNumber: 373,
              columnNumber: 19
            }, this),
            "Logout"
          ] }, void 0, true, {
            fileName: "/app/src/pages/Dashboard.jsx",
            lineNumber: 372,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/Dashboard.jsx",
            lineNumber: 371,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Dashboard.jsx",
          lineNumber: 357,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Dashboard.jsx",
          lineNumber: 356,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Dashboard.jsx",
        lineNumber: 312,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Dashboard.jsx",
        lineNumber: 308,
        columnNumber: 7
      }, this),
      isSidebarOpen && /* @__PURE__ */ jsxDEV(
        "div",
        {
          "data-source-location": "pages/Dashboard:365:8",
          "data-dynamic-content": "true",
          className: "fixed inset-0 bg-black/50 z-40 lg:hidden",
          onClick: () => setIsSidebarOpen(false)
        },
        void 0,
        false,
        {
          fileName: "/app/src/pages/Dashboard.jsx",
          lineNumber: 384,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:372:6", "data-dynamic-content": "true", className: "flex-1 lg:ml-64", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:374:8", "data-dynamic-content": "true", className: "sticky top-0 z-30 bg-white border-b border-gray-200 px-4 py-3", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:375:10", "data-dynamic-content": "true", className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:376:12", "data-dynamic-content": "true", className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                "data-source-location": "pages/Dashboard:377:14",
                "data-dynamic-content": "true",
                onClick: () => setIsSidebarOpen(true),
                className: "lg:hidden p-2 hover:bg-gray-100 rounded-lg",
                children: /* @__PURE__ */ jsxDEV(MenuIcon, { "data-source-location": "pages/Dashboard:381:16", "data-dynamic-content": "false", className: "w-5 h-5" }, void 0, false, {
                  fileName: "/app/src/pages/Dashboard.jsx",
                  lineNumber: 400,
                  columnNumber: 17
                }, this)
              },
              void 0,
              false,
              {
                fileName: "/app/src/pages/Dashboard.jsx",
                lineNumber: 396,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:383:14", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "pages/Dashboard:384:16", "data-dynamic-content": "true", className: "text-lg font-bold text-gray-900", children: sections.find((s) => s.id === activeSection)?.label }, void 0, false, {
              fileName: "/app/src/pages/Dashboard.jsx",
              lineNumber: 403,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/app/src/pages/Dashboard.jsx",
              lineNumber: 402,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Dashboard.jsx",
            lineNumber: 395,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:389:12", "data-dynamic-content": "true", className: "flex items-center gap-3", children: [
            notifications.length > 0 && /* @__PURE__ */ jsxDEV(DropdownMenu, { "data-source-location": "pages/Dashboard:391:16", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV(DropdownMenuTrigger, { "data-source-location": "pages/Dashboard:392:18", "data-dynamic-content": "true", asChild: true, children: /* @__PURE__ */ jsxDEV("button", { "data-source-location": "pages/Dashboard:393:20", "data-dynamic-content": "true", className: "relative p-2 hover:bg-gray-100 rounded-lg", children: [
                /* @__PURE__ */ jsxDEV(Bell, { "data-source-location": "pages/Dashboard:394:22", "data-dynamic-content": "false", className: "w-5 h-5 text-gray-600" }, void 0, false, {
                  fileName: "/app/src/pages/Dashboard.jsx",
                  lineNumber: 413,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Dashboard:395:22", "data-dynamic-content": "true", className: "absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white text-xs rounded-full flex items-center justify-center", children: notifications.length }, void 0, false, {
                  fileName: "/app/src/pages/Dashboard.jsx",
                  lineNumber: 414,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/Dashboard.jsx",
                lineNumber: 412,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/app/src/pages/Dashboard.jsx",
                lineNumber: 411,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(DropdownMenuContent, { "data-source-location": "pages/Dashboard:400:18", "data-dynamic-content": "true", align: "end", className: "w-80", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:401:20", "data-dynamic-content": "false", className: "p-3 border-b", children: /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Dashboard:402:22", "data-dynamic-content": "false", className: "font-semibold", children: "Notifications" }, void 0, false, {
                  fileName: "/app/src/pages/Dashboard.jsx",
                  lineNumber: 421,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "/app/src/pages/Dashboard.jsx",
                  lineNumber: 420,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:404:20", "data-dynamic-content": "true", className: "max-h-96 overflow-y-auto", "data-collection-id": "Notification", children: notifications.map(
                  (notif) => /* @__PURE__ */ jsxDEV(
                    "div",
                    {
                      "data-source-location": "pages/Dashboard:406:24",
                      "data-dynamic-content": "true",
                      className: "p-3 border-b hover:bg-gray-50 cursor-pointer",
                      onClick: async () => {
                        await base44.entities.Notification.update(notif.id, { is_read: true });
                        loadUnreadCounts();
                      },
                      "data-collection-item-id": notif?.id,
                      children: [
                        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Dashboard:414:26", "data-dynamic-content": "true", className: "font-medium text-sm", "data-collection-item-field": "title", "data-collection-item-id": notif?.id, children: notif.title }, void 0, false, {
                          fileName: "/app/src/pages/Dashboard.jsx",
                          lineNumber: 433,
                          columnNumber: 27
                        }, this),
                        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Dashboard:415:26", "data-dynamic-content": "true", className: "text-xs text-gray-600 mt-1", "data-collection-item-field": "message", "data-collection-item-id": notif?.id, children: notif.message }, void 0, false, {
                          fileName: "/app/src/pages/Dashboard.jsx",
                          lineNumber: 434,
                          columnNumber: 27
                        }, this),
                        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Dashboard:416:26", "data-dynamic-content": "true", className: "text-xs text-gray-400 mt-1", children: new Date(notif.created_date).toLocaleString() }, void 0, false, {
                          fileName: "/app/src/pages/Dashboard.jsx",
                          lineNumber: 435,
                          columnNumber: 27
                        }, this)
                      ]
                    },
                    notif.id,
                    true,
                    {
                      fileName: "/app/src/pages/Dashboard.jsx",
                      lineNumber: 425,
                      columnNumber: 23
                    },
                    this
                  )
                ) }, void 0, false, {
                  fileName: "/app/src/pages/Dashboard.jsx",
                  lineNumber: 423,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/Dashboard.jsx",
                lineNumber: 419,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Dashboard.jsx",
              lineNumber: 410,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/Dashboard:425:14", "data-dynamic-content": "true", className: "bg-orange-600 text-white capitalize", "data-collection-item-field": "subscription_plan", "data-collection-item-id": restaurant?.id || restaurant?._id, children: restaurant?.subscription_plan }, void 0, false, {
              fileName: "/app/src/pages/Dashboard.jsx",
              lineNumber: 444,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Dashboard.jsx",
            lineNumber: 408,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Dashboard.jsx",
          lineNumber: 394,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Dashboard.jsx",
          lineNumber: 393,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:433:8", "data-dynamic-content": "true", className: "p-4 sm:p-6 pb-24 lg:pb-6", children: /* @__PURE__ */ jsxDEV(AnimatePresence, { "data-source-location": "pages/Dashboard:434:10", "data-dynamic-content": "true", mode: "wait", children: [
          activeSection === "overview" && /* @__PURE__ */ jsxDEV(OverviewSection, { "data-source-location": "pages/Dashboard:435:45", "data-dynamic-content": "true", restaurant, orders, customers, menuItems }, "overview", false, {
            fileName: "/app/src/pages/Dashboard.jsx",
            lineNumber: 454,
            columnNumber: 46
          }, this),
          activeSection === "orders" && /* @__PURE__ */ jsxDEV(OrdersSection, { "data-source-location": "pages/Dashboard:436:43", "data-dynamic-content": "true", restaurant, orders, reloadOrders }, "orders", false, {
            fileName: "/app/src/pages/Dashboard.jsx",
            lineNumber: 455,
            columnNumber: 44
          }, this),
          activeSection === "menu" && /* @__PURE__ */ jsxDEV(MenuSection, { "data-source-location": "pages/Dashboard:437:41", "data-dynamic-content": "true", restaurant, menuItems, reloadMenuItems, orders }, "menu", false, {
            fileName: "/app/src/pages/Dashboard.jsx",
            lineNumber: 456,
            columnNumber: 42
          }, this),
          activeSection === "riders" && /* @__PURE__ */ jsxDEV(RidersSection, { "data-source-location": "pages/Dashboard:438:43", "data-dynamic-content": "true", restaurant }, "riders", false, {
            fileName: "/app/src/pages/Dashboard.jsx",
            lineNumber: 457,
            columnNumber: 44
          }, this),
          activeSection === "chat" && /* @__PURE__ */ jsxDEV(ChatSection, { "data-source-location": "pages/Dashboard:439:41", "data-dynamic-content": "true", restaurant }, "chat", false, {
            fileName: "/app/src/pages/Dashboard.jsx",
            lineNumber: 458,
            columnNumber: 42
          }, this),
          activeSection === "support" && /* @__PURE__ */ jsxDEV(SupportChatSection, { "data-source-location": "pages/Dashboard:440:44", "data-dynamic-content": "true", restaurant, user }, "support", false, {
            fileName: "/app/src/pages/Dashboard.jsx",
            lineNumber: 459,
            columnNumber: 45
          }, this),
          activeSection === "analytics" && /* @__PURE__ */ jsxDEV(AnalyticsSection, { "data-source-location": "pages/Dashboard:441:46", "data-dynamic-content": "true", restaurant, orders, menuItems }, "analytics", false, {
            fileName: "/app/src/pages/Dashboard.jsx",
            lineNumber: 460,
            columnNumber: 47
          }, this),
          activeSection === "customers" && /* @__PURE__ */ jsxDEV(CustomersSection, { "data-source-location": "pages/Dashboard:442:46", "data-dynamic-content": "true", restaurant, customers, orders }, "customers", false, {
            fileName: "/app/src/pages/Dashboard.jsx",
            lineNumber: 461,
            columnNumber: 47
          }, this),
          activeSection === "qrcodes" && /* @__PURE__ */ jsxDEV(QRCodesSection, { "data-source-location": "pages/Dashboard:443:44", "data-dynamic-content": "true", restaurant }, "qrcodes", false, {
            fileName: "/app/src/pages/Dashboard.jsx",
            lineNumber: 462,
            columnNumber: 45
          }, this),
          activeSection === "billing" && /* @__PURE__ */ jsxDEV(BillingSection, { "data-source-location": "pages/Dashboard:444:44", "data-dynamic-content": "true", restaurant, onPlanUpgraded: handlePlanUpgraded }, "billing", false, {
            fileName: "/app/src/pages/Dashboard.jsx",
            lineNumber: 463,
            columnNumber: 45
          }, this),
          activeSection === "settings" && /* @__PURE__ */ jsxDEV(SettingsSection, { "data-source-location": "pages/Dashboard:445:45", "data-dynamic-content": "true", restaurant, user, onRestaurantUpdated: handlePlanUpgraded }, "settings", false, {
            fileName: "/app/src/pages/Dashboard.jsx",
            lineNumber: 464,
            columnNumber: 46
          }, this),
          activeSection === "feedback" && /* @__PURE__ */ jsxDEV(FeedbackSection, { "data-source-location": "pages/Dashboard:446:45", "data-dynamic-content": "true", restaurant, user }, "feedback", false, {
            fileName: "/app/src/pages/Dashboard.jsx",
            lineNumber: 465,
            columnNumber: 46
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Dashboard.jsx",
          lineNumber: 453,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/Dashboard.jsx",
          lineNumber: 452,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Dashboard.jsx",
        lineNumber: 391,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:452:6", "data-dynamic-content": "true", className: "lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 safe-area-inset-bottom", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:453:8", "data-dynamic-content": "true", className: "flex items-center justify-around px-2 py-1", children: [
        { id: "overview", label: "Home", icon: LayoutDashboard },
        { id: "orders", label: "Orders", icon: ShoppingBag, badge: orders.filter((o) => ["pending", "confirmed", "preparing"].includes(o.status)).length },
        { id: "menu", label: "Menu", icon: Utensils },
        { id: "analytics", label: "Analytics", icon: BarChart3 },
        { id: "settings", label: "Settings", icon: Settings }
      ].map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        return /* @__PURE__ */ jsxDEV(
          "button",
          {
            "data-source-location": "pages/Dashboard:464:14",
            "data-dynamic-content": "true",
            onClick: () => setActiveSection(item.id),
            className: `relative flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl transition-all min-w-0 flex-1 ${isActive ? "text-orange-600" : "text-gray-400"}`,
            "data-collection-item-id": item?.id,
            children: [
              isActive && /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Dashboard:472:18", "data-dynamic-content": "false", className: "absolute top-1 inset-x-1 h-0.5 bg-orange-500 rounded-full" }, void 0, false, {
                fileName: "/app/src/pages/Dashboard.jsx",
                lineNumber: 491,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:474:16", "data-dynamic-content": "true", className: "relative", children: [
                /* @__PURE__ */ jsxDEV(Icon, { "data-source-location": "pages/Dashboard:475:18", "data-dynamic-content": "true", className: `w-5 h-5 ${isActive ? "text-orange-600" : "text-gray-400"}` }, void 0, false, {
                  fileName: "/app/src/pages/Dashboard.jsx",
                  lineNumber: 494,
                  columnNumber: 19
                }, this),
                item.badge > 0 && /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Dashboard:477:20", "data-dynamic-content": "true", className: "absolute -top-1.5 -right-1.5 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold", children: item.badge > 9 ? "9+" : item.badge }, void 0, false, {
                  fileName: "/app/src/pages/Dashboard.jsx",
                  lineNumber: 496,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/Dashboard.jsx",
                lineNumber: 493,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Dashboard:482:16", "data-dynamic-content": "true", className: `text-[10px] font-medium truncate w-full text-center ${isActive ? "text-orange-600" : "text-gray-400"}`, "data-collection-item-field": "label", "data-collection-item-id": item?.id, children: item.label }, void 0, false, {
                fileName: "/app/src/pages/Dashboard.jsx",
                lineNumber: 501,
                columnNumber: 17
              }, this)
            ]
          },
          item.id,
          true,
          {
            fileName: "/app/src/pages/Dashboard.jsx",
            lineNumber: 483,
            columnNumber: 17
          },
          this
        );
      }) }, void 0, false, {
        fileName: "/app/src/pages/Dashboard.jsx",
        lineNumber: 472,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Dashboard.jsx",
        lineNumber: 471,
        columnNumber: 7
      }, this),
      showFeedbackDialog && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:493:8", "data-dynamic-content": "true", className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:494:10", "data-dynamic-content": "true", className: "bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:495:12", "data-dynamic-content": "true", className: "p-6 border-b border-gray-200 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:496:14", "data-dynamic-content": "false", children: [
            /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "pages/Dashboard:497:16", "data-dynamic-content": "false", className: "text-2xl font-bold text-gray-900", children: "🎉 Congratulations!" }, void 0, false, {
              fileName: "/app/src/pages/Dashboard.jsx",
              lineNumber: 516,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Dashboard:498:16", "data-dynamic-content": "false", className: "text-gray-600 mt-1", children: "You've processed 20+ orders" }, void 0, false, {
              fileName: "/app/src/pages/Dashboard.jsx",
              lineNumber: 517,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Dashboard.jsx",
            lineNumber: 515,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              "data-source-location": "pages/Dashboard:500:14",
              "data-dynamic-content": "true",
              onClick: () => setShowFeedbackDialog(false),
              className: "text-gray-400 hover:text-gray-600",
              children: /* @__PURE__ */ jsxDEV(X, { "data-source-location": "pages/Dashboard:504:16", "data-dynamic-content": "false", className: "w-6 h-6" }, void 0, false, {
                fileName: "/app/src/pages/Dashboard.jsx",
                lineNumber: 523,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/app/src/pages/Dashboard.jsx",
              lineNumber: 519,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/src/pages/Dashboard.jsx",
          lineNumber: 514,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Dashboard:507:12", "data-dynamic-content": "true", className: "p-6", children: [
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Dashboard:508:14", "data-dynamic-content": "false", className: "text-gray-700 mb-6", children: "We'd love to hear about your experience! Your feedback helps other restaurants discover RestroSaathi." }, void 0, false, {
            fileName: "/app/src/pages/Dashboard.jsx",
            lineNumber: 527,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(FeedbackSection, { "data-source-location": "pages/Dashboard:512:14", "data-dynamic-content": "true", restaurant, user }, void 0, false, {
            fileName: "/app/src/pages/Dashboard.jsx",
            lineNumber: 531,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(
            Button,
            {
              "data-source-location": "pages/Dashboard:513:14",
              "data-dynamic-content": "true",
              variant: "outline",
              onClick: () => setShowFeedbackDialog(false),
              className: "w-full mt-4",
              children: "Maybe Later"
            },
            void 0,
            false,
            {
              fileName: "/app/src/pages/Dashboard.jsx",
              lineNumber: 532,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/src/pages/Dashboard.jsx",
          lineNumber: 526,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Dashboard.jsx",
        lineNumber: 513,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Dashboard.jsx",
        lineNumber: 512,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Dashboard.jsx",
      lineNumber: 306,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/Dashboard.jsx",
    lineNumber: 304,
    columnNumber: 5
  }, this);
}
_s(Dashboard, "y29p5hzfvTAkFoug6AF0kw1ZWac=");
_c = Dashboard;
var _c;
$RefreshReg$(_c, "Dashboard");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/Dashboard.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/Dashboard.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBaUc7QUFBQTtBQUFBLFlBSm5HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUtBO0FBQUEsYUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBV0E7QUFBQSxRQUNBLHVCQUFDLFNBQUksd0JBQXFCLDBCQUF5Qix3QkFBcUIsUUFBTyxXQUFVLE9BQ3ZGO0FBQUEsaUNBQUMsT0FBRSx3QkFBcUIsMEJBQXlCLHdCQUFxQixTQUFRLFdBQVUsc0JBQW9CLHFIQUE1RztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUdBO0FBQUEsVUFDQSx1QkFBQyxtQkFBZ0Isd0JBQXFCLDBCQUF5Qix3QkFBcUIsUUFBTyxZQUF3QixRQUFuSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUE4SDtBQUFBLFVBQzlIO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FBTyx3QkFBcUI7QUFBQSxjQUF5Qix3QkFBcUI7QUFBQSxjQUMzRSxTQUFRO0FBQUEsY0FDUixTQUFTLE1BQU1BLHNCQUFzQixLQUFLO0FBQUEsY0FDMUMsV0FBVTtBQUFBLGNBQWE7QUFBQTtBQUFBLFlBSHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQU1BO0FBQUEsYUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYUE7QUFBQSxXQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMkJBLEtBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE2QkE7QUFBQSxTQTNPRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBNk9GO0FBQUEsT0EvT0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWdQQTtBQUVKO0FBQUNaLEdBemN1QkQsV0FBUztBQUFBbUgsS0FBVG5IO0FBQVMsSUFBQW1IO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiYmFzZTQ0IiwiU2hvcHBpbmdCYWciLCJVc2VycyIsIkluZGlhblJ1cGVlIiwiVHJlbmRpbmdVcCIsIkFycm93VXBSaWdodCIsIkNsb2NrIiwiQ2hlY2tDaXJjbGUyIiwiTGF5b3V0RGFzaGJvYXJkIiwiTWVudSIsIk1lbnVJY29uIiwiVXRlbnNpbHMiLCJCYXJDaGFydDMiLCJVc2VyQ2lyY2xlIiwiU2V0dGluZ3MiLCJRckNvZGUiLCJDcmVkaXRDYXJkIiwiWCIsIkNoZWZIYXQiLCJCZWxsIiwiRXllIiwiUHJpbnRlciIsIkRvd25sb2FkIiwiUGx1cyIsIlNlYXJjaCIsIkVkaXQyIiwiVHJhc2gyIiwiRXllT2ZmIiwiTGVhZiIsIkZsYW1lIiwiRmlsdGVyIiwiRmlsdGVySWNvbiIsIk1vcmVWZXJ0aWNhbCIsIlVwbG9hZCIsIlBob25lIiwiUmVmcmVzaEN3IiwiRmlsZVRleHQiLCJTdG9yZSIsIkxvZ091dCIsIk1lc3NhZ2VTcXVhcmUiLCJCaWtlIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEhlYWRlciIsIkNhcmRUaXRsZSIsIkJ1dHRvbiIsIkJhZGdlIiwiSW5wdXQiLCJMYWJlbCIsIlRleHRhcmVhIiwiU3dpdGNoIiwiVGFicyIsIlRhYnNMaXN0IiwiVGFic1RyaWdnZXIiLCJEaWFsb2ciLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nSGVhZGVyIiwiRGlhbG9nVGl0bGUiLCJEaWFsb2dGb290ZXIiLCJTZWxlY3QiLCJTZWxlY3RDb250ZW50IiwiU2VsZWN0SXRlbSIsIlNlbGVjdFRyaWdnZXIiLCJTZWxlY3RWYWx1ZSIsIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duTWVudUNvbnRlbnQiLCJEcm9wZG93bk1lbnVJdGVtIiwiRHJvcGRvd25NZW51U2VwYXJhdG9yIiwiRHJvcGRvd25NZW51VHJpZ2dlciIsIkFsZXJ0RGlhbG9nIiwiQWxlcnREaWFsb2dBY3Rpb24iLCJBbGVydERpYWxvZ0NhbmNlbCIsIkFsZXJ0RGlhbG9nQ29udGVudCIsIkFsZXJ0RGlhbG9nRGVzY3JpcHRpb24iLCJBbGVydERpYWxvZ0Zvb3RlciIsIkFsZXJ0RGlhbG9nSGVhZGVyIiwiQWxlcnREaWFsb2dUaXRsZSIsIkxpbmVDaGFydCIsIkxpbmUiLCJYQXhpcyIsIllBeGlzIiwiQ2FydGVzaWFuR3JpZCIsIlRvb2x0aXAiLCJSZXNwb25zaXZlQ29udGFpbmVyIiwiQmFyQ2hhcnQiLCJCYXIiLCJQaWVDaGFydCIsIlBpZSIsIkNlbGwiLCJUb2FzdGVyIiwiT3ZlcnZpZXdTZWN0aW9uIiwiT3JkZXJzU2VjdGlvbiIsIk1lbnVTZWN0aW9uIiwiQW5hbHl0aWNzU2VjdGlvbiIsIkN1c3RvbWVyc1NlY3Rpb24iLCJRUkNvZGVzU2VjdGlvbiIsIkJpbGxpbmdTZWN0aW9uIiwiU2V0dGluZ3NTZWN0aW9uIiwiRmVlZGJhY2tTZWN0aW9uIiwiQ2hhdFNlY3Rpb24iLCJTdXBwb3J0Q2hhdFNlY3Rpb24iLCJSaWRlcnNTZWN0aW9uIiwiRGFzaGJvYXJkIiwiX3MiLCJhY3RpdmVTZWN0aW9uIiwic2V0QWN0aXZlU2VjdGlvbiIsImlzU2lkZWJhck9wZW4iLCJzZXRJc1NpZGViYXJPcGVuIiwidXNlciIsInNldFVzZXIiLCJyZXN0YXVyYW50Iiwic2V0UmVzdGF1cmFudCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInNob3dGZWVkYmFja0RpYWxvZyIsInNldFNob3dGZWVkYmFja0RpYWxvZyIsIm9yZGVycyIsInNldE9yZGVycyIsImN1c3RvbWVycyIsInNldEN1c3RvbWVycyIsIm1lbnVJdGVtcyIsInNldE1lbnVJdGVtcyIsInVucmVhZENoYXRDb3VudCIsInNldFVucmVhZENoYXRDb3VudCIsIm5vdGlmaWNhdGlvbnMiLCJzZXROb3RpZmljYXRpb25zIiwibG9hZERhdGEiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibG9hZFVucmVhZENvdW50cyIsInVuc3Vic2NyaWJlT3JkZXJzIiwicmVzdGF1cmFudF9pZCIsImVudGl0aWVzIiwiT3JkZXIiLCJzdWJzY3JpYmUiLCJldmVudCIsImRhdGEiLCJ0eXBlIiwicHJldiIsIm1hcCIsIm8iLCJpZCIsImZpbHRlciIsImNsZWFySW50ZXJ2YWwiLCJwcmV2ZW50QmFjayIsIndpbmRvdyIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpc0F1dGgiLCJhdXRoIiwiaXNBdXRoZW50aWNhdGVkIiwiaHJlZiIsInVzZXJEYXRhIiwibWUiLCJyZXN0YXVyYW50cyIsIlJlc3RhdXJhbnQiLCJsZW5ndGgiLCJ1cGRhdGVNZSIsIm9uYm9hcmRpbmdfY29tcGxldGVkIiwib3JkZXJzRGF0YSIsImN1c3RvbWVyc0RhdGEiLCJtZW51RGF0YSIsIlByb21pc2UiLCJhbGwiLCJDdXN0b21lciIsIk1lbnVJdGVtIiwiZXhpc3RpbmdGZWVkYmFjayIsIkZlZWRiYWNrIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlbG9hZE9yZGVycyIsInJlbG9hZE1lbnVJdGVtcyIsImFsbE1lc3NhZ2VzIiwiQ2hhdE1lc3NhZ2UiLCJ1bnJlYWRTZXNzaW9ucyIsIlNldCIsImZvckVhY2giLCJtc2ciLCJpc19yZWFkIiwic2VuZGVyX3R5cGUiLCJhZGQiLCJzZXNzaW9uX2lkIiwic2l6ZSIsIm5vdGlmcyIsIk5vdGlmaWNhdGlvbiIsImhhbmRsZVBsYW5VcGdyYWRlZCIsInNlY3Rpb25zIiwibGFiZWwiLCJpY29uIiwiYmFkZ2UiLCJoYW5kbGVMb2dvdXQiLCJsb2dvdXQiLCJfaWQiLCJuYW1lIiwic2VjdGlvbiIsIkljb24iLCJmdWxsX25hbWUiLCJlbWFpbCIsImZpbmQiLCJzIiwibm90aWYiLCJ1cGRhdGUiLCJ0aXRsZSIsIm1lc3NhZ2UiLCJEYXRlIiwiY3JlYXRlZF9kYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJzdWJzY3JpcHRpb25fcGxhbiIsImluY2x1ZGVzIiwic3RhdHVzIiwiaXRlbSIsImlzQWN0aXZlIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiRGFzaGJvYXJkLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgYmFzZTQ0IH0gZnJvbSBcIkAvYXBpL2Jhc2U0NENsaWVudFwiO1xuaW1wb3J0IHtcbiAgU2hvcHBpbmdCYWcsIFVzZXJzLCBJbmRpYW5SdXBlZSwgVHJlbmRpbmdVcCxcbiAgQXJyb3dVcFJpZ2h0LCBDbG9jaywgQ2hlY2tDaXJjbGUyLCBMYXlvdXREYXNoYm9hcmQsXG4gIE1lbnUgYXMgTWVudUljb24sIFV0ZW5zaWxzLCBCYXJDaGFydDMsIFVzZXJDaXJjbGUsIFNldHRpbmdzLFxuICBRckNvZGUsIENyZWRpdENhcmQsIFgsIENoZWZIYXQsIEJlbGwsIEV5ZSwgUHJpbnRlciwgRG93bmxvYWQsXG4gIFBsdXMsIFNlYXJjaCwgRWRpdDIsIFRyYXNoMiwgRXllT2ZmLCBMZWFmLCBGbGFtZSwgRmlsdGVyIGFzIEZpbHRlckljb24sXG4gIE1vcmVWZXJ0aWNhbCwgVXBsb2FkLCBQaG9uZSwgUmVmcmVzaEN3LCBGaWxlVGV4dCwgU3RvcmUsIExvZ091dCwgTWVzc2FnZVNxdWFyZSwgQmlrZSB9IGZyb21cblwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgQmFkZ2UgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2JhZGdlXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9sYWJlbFwiO1xuaW1wb3J0IHsgVGV4dGFyZWEgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RleHRhcmVhXCI7XG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3N3aXRjaFwiO1xuaW1wb3J0IHsgVGFicywgVGFic0xpc3QsIFRhYnNUcmlnZ2VyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90YWJzXCI7XG5pbXBvcnQge1xuICBEaWFsb2csXG4gIERpYWxvZ0NvbnRlbnQsXG4gIERpYWxvZ0hlYWRlcixcbiAgRGlhbG9nVGl0bGUsXG4gIERpYWxvZ0Zvb3RlciB9IGZyb21cblwiQC9jb21wb25lbnRzL3VpL2RpYWxvZ1wiO1xuaW1wb3J0IHtcbiAgU2VsZWN0LFxuICBTZWxlY3RDb250ZW50LFxuICBTZWxlY3RJdGVtLFxuICBTZWxlY3RUcmlnZ2VyLFxuICBTZWxlY3RWYWx1ZSB9IGZyb21cblwiQC9jb21wb25lbnRzL3VpL3NlbGVjdFwiO1xuaW1wb3J0IHtcbiAgRHJvcGRvd25NZW51LFxuICBEcm9wZG93bk1lbnVDb250ZW50LFxuICBEcm9wZG93bk1lbnVJdGVtLFxuICBEcm9wZG93bk1lbnVTZXBhcmF0b3IsXG4gIERyb3Bkb3duTWVudVRyaWdnZXIgfSBmcm9tXG5cIkAvY29tcG9uZW50cy91aS9kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQge1xuICBBbGVydERpYWxvZyxcbiAgQWxlcnREaWFsb2dBY3Rpb24sXG4gIEFsZXJ0RGlhbG9nQ2FuY2VsLFxuICBBbGVydERpYWxvZ0NvbnRlbnQsXG4gIEFsZXJ0RGlhbG9nRGVzY3JpcHRpb24sXG4gIEFsZXJ0RGlhbG9nRm9vdGVyLFxuICBBbGVydERpYWxvZ0hlYWRlcixcbiAgQWxlcnREaWFsb2dUaXRsZSB9IGZyb21cblwiQC9jb21wb25lbnRzL3VpL2FsZXJ0LWRpYWxvZ1wiO1xuaW1wb3J0IHtcbiAgTGluZUNoYXJ0LCBMaW5lLCBYQXhpcywgWUF4aXMsIENhcnRlc2lhbkdyaWQsXG4gIFRvb2x0aXAsIFJlc3BvbnNpdmVDb250YWluZXIsIEJhckNoYXJ0LCBCYXIsXG4gIFBpZUNoYXJ0LCBQaWUsIENlbGwgfSBmcm9tXG5cInJlY2hhcnRzXCI7XG5pbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90b2FzdGVyXCI7XG5pbXBvcnQgT3ZlcnZpZXdTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL2Rhc2hib2FyZC9PdmVydmlld1NlY3Rpb25cIjtcbmltcG9ydCBPcmRlcnNTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL2Rhc2hib2FyZC9PcmRlcnNTZWN0aW9uXCI7XG5pbXBvcnQgTWVudVNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uXCI7XG5pbXBvcnQgQW5hbHl0aWNzU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9kYXNoYm9hcmQvQW5hbHl0aWNzU2VjdGlvblwiO1xuaW1wb3J0IEN1c3RvbWVyc1NlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL0N1c3RvbWVyc1NlY3Rpb25cIjtcbmltcG9ydCBRUkNvZGVzU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb25cIjtcbmltcG9ydCBCaWxsaW5nU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9kYXNoYm9hcmQvQmlsbGluZ1NlY3Rpb25cIjtcbmltcG9ydCBTZXR0aW5nc1NlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvblwiO1xuaW1wb3J0IEZlZWRiYWNrU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9kYXNoYm9hcmQvRmVlZGJhY2tTZWN0aW9uXCI7XG5pbXBvcnQgQ2hhdFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL0NoYXRTZWN0aW9uXCI7XG5pbXBvcnQgU3VwcG9ydENoYXRTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL2Rhc2hib2FyZC9TdXBwb3J0Q2hhdFNlY3Rpb25cIjtcbmltcG9ydCBSaWRlcnNTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL2Rhc2hib2FyZC9SaWRlcnNTZWN0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCgpIHtcbiAgY29uc3QgW2FjdGl2ZVNlY3Rpb24sIHNldEFjdGl2ZVNlY3Rpb25dID0gdXNlU3RhdGUoXCJvdmVydmlld1wiKTtcbiAgY29uc3QgW2lzU2lkZWJhck9wZW4sIHNldElzU2lkZWJhck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Jlc3RhdXJhbnQsIHNldFJlc3RhdXJhbnRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3Nob3dGZWVkYmFja0RpYWxvZywgc2V0U2hvd0ZlZWRiYWNrRGlhbG9nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBEYXRhIHN0YXRlc1xuICBjb25zdCBbb3JkZXJzLCBzZXRPcmRlcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY3VzdG9tZXJzLCBzZXRDdXN0b21lcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbWVudUl0ZW1zLCBzZXRNZW51SXRlbXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdW5yZWFkQ2hhdENvdW50LCBzZXRVbnJlYWRDaGF0Q291bnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtub3RpZmljYXRpb25zLCBzZXROb3RpZmljYXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvYWREYXRhKCk7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChsb2FkVW5yZWFkQ291bnRzLCA1MDAwKTtcblxuICAgIC8vIFJlYWwtdGltZSBvcmRlciBzdWJzY3JpcHRpb25cbiAgICBsZXQgdW5zdWJzY3JpYmVPcmRlcnM7XG4gICAgaWYgKHJlc3RhdXJhbnQ/LnJlc3RhdXJhbnRfaWQpIHtcbiAgICAgIHVuc3Vic2NyaWJlT3JkZXJzID0gYmFzZTQ0LmVudGl0aWVzLk9yZGVyLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmRhdGEucmVzdGF1cmFudF9pZCA9PT0gcmVzdGF1cmFudC5yZXN0YXVyYW50X2lkKSB7XG4gICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjcmVhdGUnKSB7XG4gICAgICAgICAgICBzZXRPcmRlcnMoKHByZXYpID0+IFtldmVudC5kYXRhLCAuLi5wcmV2XSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSAndXBkYXRlJykge1xuICAgICAgICAgICAgc2V0T3JkZXJzKChwcmV2KSA9PiBwcmV2Lm1hcCgobykgPT4gby5pZCA9PT0gZXZlbnQuZGF0YS5pZCA/IGV2ZW50LmRhdGEgOiBvKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSAnZGVsZXRlJykge1xuICAgICAgICAgICAgc2V0T3JkZXJzKChwcmV2KSA9PiBwcmV2LmZpbHRlcigobykgPT4gby5pZCAhPT0gZXZlbnQuZGF0YS5pZCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgaWYgKHVuc3Vic2NyaWJlT3JkZXJzKSB1bnN1YnNjcmliZU9yZGVycygpO1xuICAgIH07XG4gIH0sIFtyZXN0YXVyYW50Py5yZXN0YXVyYW50X2lkXSk7XG5cbiAgLy8gUHJldmVudCBiYWNrIG5hdmlnYXRpb24gZnJvbSBkYXNoYm9hcmRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwcmV2ZW50QmFjayA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIH07XG5cbiAgICAvLyBQdXNoIGluaXRpYWwgc3RhdGVcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcblxuICAgIC8vIExpc3RlbiBmb3IgcG9wc3RhdGUgKGJhY2sgYnV0dG9uKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHByZXZlbnRCYWNrKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBwcmV2ZW50QmFjayk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGxvYWREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBpc0F1dGggPSBhd2FpdCBiYXNlNDQuYXV0aC5pc0F1dGhlbnRpY2F0ZWQoKTtcbiAgICAgIGlmICghaXNBdXRoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvSG9tZVwiO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgYmFzZTQ0LmF1dGgubWUoKTtcbiAgICAgIHNldFVzZXIodXNlckRhdGEpO1xuXG4gICAgICBpZiAoIXVzZXJEYXRhPy5yZXN0YXVyYW50X2lkKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvR2V0U3RhcnRlZFwiO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3RhdXJhbnRzID0gYXdhaXQgYmFzZTQ0LmVudGl0aWVzLlJlc3RhdXJhbnQuZmlsdGVyKHtcbiAgICAgICAgcmVzdGF1cmFudF9pZDogdXNlckRhdGEucmVzdGF1cmFudF9pZFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXN0YXVyYW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYXdhaXQgYmFzZTQ0LmF1dGgudXBkYXRlTWUoeyByZXN0YXVyYW50X2lkOiBudWxsIH0pO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL0dldFN0YXJ0ZWRcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBvbmJvYXJkaW5nIHN0YXR1c1xuICAgICAgaWYgKCFyZXN0YXVyYW50c1swXS5vbmJvYXJkaW5nX2NvbXBsZXRlZCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL09uYm9hcmRpbmdcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZXRSZXN0YXVyYW50KHJlc3RhdXJhbnRzWzBdKTtcblxuICAgICAgLy8gTG9hZCBhbGwgZGF0YVxuICAgICAgY29uc3QgW29yZGVyc0RhdGEsIGN1c3RvbWVyc0RhdGEsIG1lbnVEYXRhXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIGJhc2U0NC5lbnRpdGllcy5PcmRlci5maWx0ZXIoeyByZXN0YXVyYW50X2lkOiB1c2VyRGF0YS5yZXN0YXVyYW50X2lkIH0sICctY3JlYXRlZF9kYXRlJywgNTAwKSxcbiAgICAgIGJhc2U0NC5lbnRpdGllcy5DdXN0b21lci5maWx0ZXIoeyByZXN0YXVyYW50X2lkOiB1c2VyRGF0YS5yZXN0YXVyYW50X2lkIH0pLFxuICAgICAgYmFzZTQ0LmVudGl0aWVzLk1lbnVJdGVtLmZpbHRlcih7IHJlc3RhdXJhbnRfaWQ6IHVzZXJEYXRhLnJlc3RhdXJhbnRfaWQgfSwgJ3NvcnRfb3JkZXInKV1cbiAgICAgICk7XG5cbiAgICAgIHNldE9yZGVycyhvcmRlcnNEYXRhKTtcbiAgICAgIHNldEN1c3RvbWVycyhjdXN0b21lcnNEYXRhKTtcbiAgICAgIHNldE1lbnVJdGVtcyhtZW51RGF0YSk7XG5cbiAgICAgIC8vIExvYWQgdW5yZWFkIGNvdW50c1xuICAgICAgYXdhaXQgbG9hZFVucmVhZENvdW50cygpO1xuXG4gICAgICAvLyBDaGVjayBpZiByZXN0YXVyYW50IGhhcyAyMCsgb3JkZXJzIGFuZCBoYXNuJ3QgZ2l2ZW4gZmVlZGJhY2sgeWV0XG4gICAgICBpZiAob3JkZXJzRGF0YS5sZW5ndGggPj0gMjApIHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdGZWVkYmFjayA9IGF3YWl0IGJhc2U0NC5lbnRpdGllcy5GZWVkYmFjay5maWx0ZXIoe1xuICAgICAgICAgIHJlc3RhdXJhbnRfaWQ6IHVzZXJEYXRhLnJlc3RhdXJhbnRfaWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nRmVlZGJhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgc2V0U2hvd0ZlZWRiYWNrRGlhbG9nKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgZGF0YTpcIiwgZSk7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL0hvbWVcIjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVsb2FkT3JkZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghcmVzdGF1cmFudD8ucmVzdGF1cmFudF9pZCkgcmV0dXJuO1xuICAgIGNvbnN0IG9yZGVyc0RhdGEgPSBhd2FpdCBiYXNlNDQuZW50aXRpZXMuT3JkZXIuZmlsdGVyKFxuICAgICAgeyByZXN0YXVyYW50X2lkOiByZXN0YXVyYW50LnJlc3RhdXJhbnRfaWQgfSxcbiAgICAgICctY3JlYXRlZF9kYXRlJyxcbiAgICAgIDUwMFxuICAgICk7XG4gICAgc2V0T3JkZXJzKG9yZGVyc0RhdGEpO1xuICB9O1xuXG4gIGNvbnN0IHJlbG9hZE1lbnVJdGVtcyA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXJlc3RhdXJhbnQ/LnJlc3RhdXJhbnRfaWQpIHJldHVybjtcbiAgICBjb25zdCBtZW51RGF0YSA9IGF3YWl0IGJhc2U0NC5lbnRpdGllcy5NZW51SXRlbS5maWx0ZXIoXG4gICAgICB7IHJlc3RhdXJhbnRfaWQ6IHJlc3RhdXJhbnQucmVzdGF1cmFudF9pZCB9LFxuICAgICAgJ3NvcnRfb3JkZXInXG4gICAgKTtcbiAgICBzZXRNZW51SXRlbXMobWVudURhdGEpO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRVbnJlYWRDb3VudHMgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFyZXN0YXVyYW50Py5yZXN0YXVyYW50X2lkKSByZXR1cm47XG5cbiAgICAvLyBDb3VudCB1bnJlYWQgY3VzdG9tZXIgY2hhdHNcbiAgICBjb25zdCBhbGxNZXNzYWdlcyA9IGF3YWl0IGJhc2U0NC5lbnRpdGllcy5DaGF0TWVzc2FnZS5maWx0ZXIoXG4gICAgICB7IHJlc3RhdXJhbnRfaWQ6IHJlc3RhdXJhbnQucmVzdGF1cmFudF9pZCB9LFxuICAgICAgJy1jcmVhdGVkX2RhdGUnLFxuICAgICAgMjAwXG4gICAgKTtcblxuICAgIGNvbnN0IHVucmVhZFNlc3Npb25zID0gbmV3IFNldCgpO1xuICAgIGFsbE1lc3NhZ2VzLmZvckVhY2goKG1zZykgPT4ge1xuICAgICAgaWYgKCFtc2cuaXNfcmVhZCAmJiBtc2cuc2VuZGVyX3R5cGUgPT09ICdjdXN0b21lcicpIHtcbiAgICAgICAgdW5yZWFkU2Vzc2lvbnMuYWRkKG1zZy5zZXNzaW9uX2lkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRVbnJlYWRDaGF0Q291bnQodW5yZWFkU2Vzc2lvbnMuc2l6ZSk7XG5cbiAgICAvLyBMb2FkIHVucmVhZCBub3RpZmljYXRpb25zXG4gICAgY29uc3Qgbm90aWZzID0gYXdhaXQgYmFzZTQ0LmVudGl0aWVzLk5vdGlmaWNhdGlvbi5maWx0ZXIoXG4gICAgICB7IHJlc3RhdXJhbnRfaWQ6IHJlc3RhdXJhbnQucmVzdGF1cmFudF9pZCwgaXNfcmVhZDogZmFsc2UgfSxcbiAgICAgICctY3JlYXRlZF9kYXRlJyxcbiAgICAgIDUwXG4gICAgKTtcbiAgICBzZXROb3RpZmljYXRpb25zKG5vdGlmcyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUGxhblVwZ3JhZGVkID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vIFJlbG9hZCByZXN0YXVyYW50IGRhdGEgdG8gZ2V0IHVwZGF0ZWQgcGxhbiBhbmQgZmVhdHVyZXNcbiAgICBpZiAoIXVzZXI/LnJlc3RhdXJhbnRfaWQpIHJldHVybjtcblxuICAgIGNvbnN0IHJlc3RhdXJhbnRzID0gYXdhaXQgYmFzZTQ0LmVudGl0aWVzLlJlc3RhdXJhbnQuZmlsdGVyKHtcbiAgICAgIHJlc3RhdXJhbnRfaWQ6IHVzZXIucmVzdGF1cmFudF9pZFxuICAgIH0pO1xuXG4gICAgaWYgKHJlc3RhdXJhbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHNldFJlc3RhdXJhbnQocmVzdGF1cmFudHNbMF0pO1xuICAgIH1cbiAgfTtcblxuICAvLyBTaWRlYmFyIHNlY3Rpb25zXG4gIGNvbnN0IHNlY3Rpb25zID0gW1xuICB7IGlkOiBcIm92ZXJ2aWV3XCIsIGxhYmVsOiBcIk92ZXJ2aWV3XCIsIGljb246IExheW91dERhc2hib2FyZCB9LFxuICB7IGlkOiBcIm9yZGVyc1wiLCBsYWJlbDogXCJPcmRlcnNcIiwgaWNvbjogU2hvcHBpbmdCYWcgfSxcbiAgeyBpZDogXCJtZW51XCIsIGxhYmVsOiBcIk1lbnVcIiwgaWNvbjogVXRlbnNpbHMgfSxcbiAgeyBpZDogXCJyaWRlcnNcIiwgbGFiZWw6IFwiRGVsaXZlcnkgUmlkZXJzXCIsIGljb246IEJpa2UgfSxcbiAgeyBpZDogXCJjaGF0XCIsIGxhYmVsOiBcIkN1c3RvbWVyIENoYXRcIiwgaWNvbjogTWVzc2FnZVNxdWFyZSwgYmFkZ2U6IHVucmVhZENoYXRDb3VudCB9LFxuICB7IGlkOiBcInN1cHBvcnRcIiwgbGFiZWw6IFwiU3VwcG9ydCBDaGF0XCIsIGljb246IFBob25lIH0sXG4gIHsgaWQ6IFwiYW5hbHl0aWNzXCIsIGxhYmVsOiBcIkFuYWx5dGljc1wiLCBpY29uOiBCYXJDaGFydDMgfSxcbiAgeyBpZDogXCJjdXN0b21lcnNcIiwgbGFiZWw6IFwiQ3VzdG9tZXJzXCIsIGljb246IFVzZXJzIH0sXG4gIHsgaWQ6IFwicXJjb2Rlc1wiLCBsYWJlbDogXCJRUiBDb2Rlc1wiLCBpY29uOiBRckNvZGUgfSxcbiAgeyBpZDogXCJiaWxsaW5nXCIsIGxhYmVsOiBcIkJpbGxpbmdcIiwgaWNvbjogQ3JlZGl0Q2FyZCB9LFxuICB7IGlkOiBcInNldHRpbmdzXCIsIGxhYmVsOiBcIlNldHRpbmdzXCIsIGljb246IFNldHRpbmdzIH0sXG4gIHsgaWQ6IFwiZmVlZGJhY2tcIiwgbGFiZWw6IFwiRmVlZGJhY2tcIiwgaWNvbjogTWVzc2FnZVNxdWFyZSB9XTtcblxuXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBiYXNlNDQuYXV0aC5sb2dvdXQoKTtcbiAgfTtcblxuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6Mjc1OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYXktNTBcIj5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDoyNzY6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6Mjc3OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImFuaW1hdGUtc3BpbiByb3VuZGVkLWZ1bGwgaC0xMCB3LTEwIGJvcmRlci1iLTIgYm9yZGVyLW9yYW5nZS02MDAgbXgtYXV0byBtYi00XCI+PC9kaXY+XG4gICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6Mjc4OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5Mb2FkaW5nIGRhc2hib2FyZC4uLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4pO1xuXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VG9hc3RlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDoyODY6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPlxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDoyODc6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTUwIGZsZXhcIj5cbiAgICAgIHsvKiBTaWRlYmFyICovfVxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDoyODk6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YFxuICAgICAgICBmaXhlZCBpbnNldC15LTAgbGVmdC0wIHotNTAgdy02NCBiZy13aGl0ZSBib3JkZXItciBib3JkZXItZ3JheS0yMDAgdHJhbnNmb3JtIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMFxuICAgICAgICAke2lzU2lkZWJhck9wZW4gPyAndHJhbnNsYXRlLXgtMCcgOiAnLXRyYW5zbGF0ZS14LWZ1bGwgbGc6dHJhbnNsYXRlLXgtMCd9XG4gICAgICBgfT5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDoyOTM6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImgtZnVsbCBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgey8qIExvZ28gKi99XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDoyOTU6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJwLTYgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjI5NjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6Mjk3OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMTAgaC0xMCBiZy1ncmFkaWVudC10by1iciBmcm9tLW9yYW5nZS02MDAgdG8tb3JhbmdlLTUwMCByb3VuZGVkLXhsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPFN0b3JlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjI5ODoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTYgaC02IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDozMDA6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8aDEgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6MzAxOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtZ3JheS05MDBcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIm5hbWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmVzdGF1cmFudD8uaWQgfHwgcmVzdGF1cmFudD8uX2lkfT57cmVzdGF1cmFudD8ubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjMwMjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicmVzdGF1cmFudF9pZFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyZXN0YXVyYW50Py5pZCB8fCByZXN0YXVyYW50Py5faWR9PntyZXN0YXVyYW50Py5yZXN0YXVyYW50X2lkfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBOYXZpZ2F0aW9uICovfVxuICAgICAgICAgIDxuYXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6MzA4OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleC0xIHAtNCBzcGFjZS15LTEgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgICB7c2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgSWNvbiA9IHNlY3Rpb24uaWNvbjtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDozMTI6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAga2V5PXtzZWN0aW9uLmlkfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVTZWN0aW9uKHNlY3Rpb24uaWQpO1xuICAgICAgICAgICAgICAgICAgICBzZXRJc1NpZGViYXJPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcHgtNCBweS0zIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1jb2xvcnMgJHtcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZVNlY3Rpb24gPT09IHNlY3Rpb24uaWQgP1xuICAgICAgICAgICAgICAgICAgJ2JnLW9yYW5nZS01MCB0ZXh0LW9yYW5nZS02MDAnIDpcbiAgICAgICAgICAgICAgICAgICd0ZXh0LWdyYXktNjAwIGhvdmVyOmJnLWdyYXktNTAnfWBcbiAgICAgICAgICAgICAgICAgIH0gZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3NlY3Rpb24/LmlkfT5cblxuICAgICAgICAgICAgICAgICAgPEljb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6MzI0OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6MzI1OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImxhYmVsXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3NlY3Rpb24/LmlkfT57c2VjdGlvbi5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICB7c2VjdGlvbi5iYWRnZSA+IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6MzI3OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWwtYXV0byB3LTUgaC01IGJnLXJlZC02MDAgdGV4dC13aGl0ZSB0ZXh0LXhzIHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiYmFkZ2VcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2VjdGlvbj8uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIHtzZWN0aW9uLmJhZGdlfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj4pO1xuXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgey8qIFVzZXIgTWVudSAqL31cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjMzNzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtNCBib3JkZXItdCBib3JkZXItZ3JheS0yMDBcIj5cbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6MzM4OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVUcmlnZ2VyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjMzOToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGFzQ2hpbGQ+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDozNDA6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcHgtNCBweS0zIHJvdW5kZWQtbGcgaG92ZXI6YmctZ3JheS01MCB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDozNDE6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ3LTggaC04IHJvdW5kZWQtZnVsbCBiZy1vcmFuZ2UtMTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjM0MjoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTYwMCBmb250LW1lZGl1bSB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3VzZXI/LmZ1bGxfbmFtZT8uWzBdIHx8IHVzZXI/LmVtYWlsPy5bMF19XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDozNDY6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4LTEgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjM0NzoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgdGV4dC1zbVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiZnVsbF9uYW1lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3VzZXI/LmlkIHx8IHVzZXI/Ll9pZH0+e3VzZXI/LmZ1bGxfbmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjM0ODoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiZW1haWxcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17dXNlcj8uaWQgfHwgdXNlcj8uX2lkfT57dXNlcj8uZW1haWx9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51VHJpZ2dlcj5cbiAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUNvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6MzUyOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgYWxpZ249XCJlbmRcIiBjbGFzc05hbWU9XCJ3LTU2XCI+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUl0ZW0gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6MzUzOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgb25DbGljaz17aGFuZGxlTG9nb3V0fSBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDBcIj5cbiAgICAgICAgICAgICAgICAgIDxMb2dPdXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6MzU0OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgbXItMlwiIC8+XG4gICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51Q29udGVudD5cbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTW9iaWxlIG92ZXJsYXkgKi99XG4gICAgICB7aXNTaWRlYmFyT3BlbiAmJlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjM2NTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1ibGFjay81MCB6LTQwIGxnOmhpZGRlblwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzU2lkZWJhck9wZW4oZmFsc2UpfSAvPlxuXG4gICAgICAgIH1cblxuICAgICAgey8qIE1haW4gQ29udGVudCAqL31cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6MzcyOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4LTEgbGc6bWwtNjRcIj5cbiAgICAgICAgey8qIFRvcCBCYXIgKi99XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6Mzc0OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTAgei0zMCBiZy13aGl0ZSBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgcHgtNCBweS0zXCI+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDozNzU6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6Mzc2OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDozNzc6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzU2lkZWJhck9wZW4odHJ1ZSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGc6aGlkZGVuIHAtMiBob3ZlcjpiZy1ncmF5LTEwMCByb3VuZGVkLWxnXCI+XG5cbiAgICAgICAgICAgICAgICA8TWVudUljb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6MzgxOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDozODM6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8aDIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6Mzg0OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgICAge3NlY3Rpb25zLmZpbmQoKHMpID0+IHMuaWQgPT09IGFjdGl2ZVNlY3Rpb24pPy5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDozODk6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICB7bm90aWZpY2F0aW9ucy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDozOTE6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVUcmlnZ2VyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjM5MjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGFzQ2hpbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6MzkzOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgcC0yIGhvdmVyOmJnLWdyYXktMTAwIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8QmVsbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDozOTQ6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWdyYXktNjAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDozOTU6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTEgLXJpZ2h0LTEgdy01IGgtNSBiZy1yZWQtNjAwIHRleHQtd2hpdGUgdGV4dC14cyByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtub3RpZmljYXRpb25zLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVUcmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUNvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6NDAwOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgYWxpZ249XCJlbmRcIiBjbGFzc05hbWU9XCJ3LTgwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6NDAxOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInAtMyBib3JkZXItYlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjQwMjoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+Tm90aWZpY2F0aW9uczwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6NDA0OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWF4LWgtOTYgb3ZlcmZsb3cteS1hdXRvXCIgZGF0YS1jb2xsZWN0aW9uLWlkPVwiTm90aWZpY2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAge25vdGlmaWNhdGlvbnMubWFwKChub3RpZikgPT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjQwNjoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtub3RpZi5pZH1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTMgYm9yZGVyLWIgaG92ZXI6YmctZ3JheS01MCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgYmFzZTQ0LmVudGl0aWVzLk5vdGlmaWNhdGlvbi51cGRhdGUobm90aWYuaWQsIHsgaXNfcmVhZDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRVbnJlYWRDb3VudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fSBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17bm90aWY/LmlkfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDo0MTQ6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LXNtXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJ0aXRsZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtub3RpZj8uaWR9Pntub3RpZi50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjQxNToyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTYwMCBtdC0xXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJtZXNzYWdlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e25vdGlmPy5pZH0+e25vdGlmLm1lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDo0MTY6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS00MDAgbXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShub3RpZi5jcmVhdGVkX2RhdGUpLnRvTG9jYWxlU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVDb250ZW50PlxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPEJhZGdlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjQyNToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImJnLW9yYW5nZS02MDAgdGV4dC13aGl0ZSBjYXBpdGFsaXplXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJzdWJzY3JpcHRpb25fcGxhblwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyZXN0YXVyYW50Py5pZCB8fCByZXN0YXVyYW50Py5faWR9PlxuICAgICAgICAgICAgICAgIHtyZXN0YXVyYW50Py5zdWJzY3JpcHRpb25fcGxhbn1cbiAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogU2VjdGlvbiBDb250ZW50ICovfVxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjQzMzo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicC00IHNtOnAtNiBwYi0yNCBsZzpwYi02XCI+XG4gICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDo0MzQ6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBtb2RlPVwid2FpdFwiPlxuICAgICAgICAgICAge2FjdGl2ZVNlY3Rpb24gPT09IFwib3ZlcnZpZXdcIiAmJiA8T3ZlcnZpZXdTZWN0aW9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjQzNTo0NVwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT1cIm92ZXJ2aWV3XCIgcmVzdGF1cmFudD17cmVzdGF1cmFudH0gb3JkZXJzPXtvcmRlcnN9IGN1c3RvbWVycz17Y3VzdG9tZXJzfSBtZW51SXRlbXM9e21lbnVJdGVtc30gLz59XG4gICAgICAgICAgICB7YWN0aXZlU2VjdGlvbiA9PT0gXCJvcmRlcnNcIiAmJiA8T3JkZXJzU2VjdGlvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDo0MzY6NDNcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9XCJvcmRlcnNcIiByZXN0YXVyYW50PXtyZXN0YXVyYW50fSBvcmRlcnM9e29yZGVyc30gcmVsb2FkT3JkZXJzPXtyZWxvYWRPcmRlcnN9IC8+fVxuICAgICAgICAgICAge2FjdGl2ZVNlY3Rpb24gPT09IFwibWVudVwiICYmIDxNZW51U2VjdGlvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDo0Mzc6NDFcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9XCJtZW51XCIgcmVzdGF1cmFudD17cmVzdGF1cmFudH0gbWVudUl0ZW1zPXttZW51SXRlbXN9IHJlbG9hZE1lbnVJdGVtcz17cmVsb2FkTWVudUl0ZW1zfSBvcmRlcnM9e29yZGVyc30gLz59XG4gICAgICAgICAgICB7YWN0aXZlU2VjdGlvbiA9PT0gXCJyaWRlcnNcIiAmJiA8UmlkZXJzU2VjdGlvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDo0Mzg6NDNcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9XCJyaWRlcnNcIiByZXN0YXVyYW50PXtyZXN0YXVyYW50fSAvPn1cbiAgICAgICAgICAgIHthY3RpdmVTZWN0aW9uID09PSBcImNoYXRcIiAmJiA8Q2hhdFNlY3Rpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6NDM5OjQxXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PVwiY2hhdFwiIHJlc3RhdXJhbnQ9e3Jlc3RhdXJhbnR9IC8+fVxuICAgICAgICAgICAge2FjdGl2ZVNlY3Rpb24gPT09IFwic3VwcG9ydFwiICYmIDxTdXBwb3J0Q2hhdFNlY3Rpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6NDQwOjQ0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PVwic3VwcG9ydFwiIHJlc3RhdXJhbnQ9e3Jlc3RhdXJhbnR9IHVzZXI9e3VzZXJ9IC8+fVxuICAgICAgICAgICAge2FjdGl2ZVNlY3Rpb24gPT09IFwiYW5hbHl0aWNzXCIgJiYgPEFuYWx5dGljc1NlY3Rpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6NDQxOjQ2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PVwiYW5hbHl0aWNzXCIgcmVzdGF1cmFudD17cmVzdGF1cmFudH0gb3JkZXJzPXtvcmRlcnN9IG1lbnVJdGVtcz17bWVudUl0ZW1zfSAvPn1cbiAgICAgICAgICAgIHthY3RpdmVTZWN0aW9uID09PSBcImN1c3RvbWVyc1wiICYmIDxDdXN0b21lcnNTZWN0aW9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjQ0Mjo0NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT1cImN1c3RvbWVyc1wiIHJlc3RhdXJhbnQ9e3Jlc3RhdXJhbnR9IGN1c3RvbWVycz17Y3VzdG9tZXJzfSBvcmRlcnM9e29yZGVyc30gLz59XG4gICAgICAgICAgICB7YWN0aXZlU2VjdGlvbiA9PT0gXCJxcmNvZGVzXCIgJiYgPFFSQ29kZXNTZWN0aW9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjQ0Mzo0NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT1cInFyY29kZXNcIiByZXN0YXVyYW50PXtyZXN0YXVyYW50fSAvPn1cbiAgICAgICAgICAgIHthY3RpdmVTZWN0aW9uID09PSBcImJpbGxpbmdcIiAmJiA8QmlsbGluZ1NlY3Rpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6NDQ0OjQ0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PVwiYmlsbGluZ1wiIHJlc3RhdXJhbnQ9e3Jlc3RhdXJhbnR9IG9uUGxhblVwZ3JhZGVkPXtoYW5kbGVQbGFuVXBncmFkZWR9IC8+fVxuICAgICAgICAgICAge2FjdGl2ZVNlY3Rpb24gPT09IFwic2V0dGluZ3NcIiAmJiA8U2V0dGluZ3NTZWN0aW9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjQ0NTo0NVwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT1cInNldHRpbmdzXCIgcmVzdGF1cmFudD17cmVzdGF1cmFudH0gdXNlcj17dXNlcn0gb25SZXN0YXVyYW50VXBkYXRlZD17aGFuZGxlUGxhblVwZ3JhZGVkfSAvPn1cbiAgICAgICAgICAgIHthY3RpdmVTZWN0aW9uID09PSBcImZlZWRiYWNrXCIgJiYgPEZlZWRiYWNrU2VjdGlvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDo0NDY6NDVcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9XCJmZWVkYmFja1wiIHJlc3RhdXJhbnQ9e3Jlc3RhdXJhbnR9IHVzZXI9e3VzZXJ9IC8+fVxuICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTW9iaWxlIEJvdHRvbSBOYXZpZ2F0aW9uICovfVxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDo0NTI6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImxnOmhpZGRlbiBmaXhlZCBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMCB6LTQwIGJnLXdoaXRlIGJvcmRlci10IGJvcmRlci1ncmF5LTIwMCBzYWZlLWFyZWEtaW5zZXQtYm90dG9tXCI+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6NDUzOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWFyb3VuZCBweC0yIHB5LTFcIj5cbiAgICAgICAgICB7W1xuICAgICAgICAgICAgeyBpZDogXCJvdmVydmlld1wiLCBsYWJlbDogXCJIb21lXCIsIGljb246IExheW91dERhc2hib2FyZCB9LFxuICAgICAgICAgICAgeyBpZDogXCJvcmRlcnNcIiwgbGFiZWw6IFwiT3JkZXJzXCIsIGljb246IFNob3BwaW5nQmFnLCBiYWRnZTogb3JkZXJzLmZpbHRlcigobykgPT4gWydwZW5kaW5nJywgJ2NvbmZpcm1lZCcsICdwcmVwYXJpbmcnXS5pbmNsdWRlcyhvLnN0YXR1cykpLmxlbmd0aCB9LFxuICAgICAgICAgICAgeyBpZDogXCJtZW51XCIsIGxhYmVsOiBcIk1lbnVcIiwgaWNvbjogVXRlbnNpbHMgfSxcbiAgICAgICAgICAgIHsgaWQ6IFwiYW5hbHl0aWNzXCIsIGxhYmVsOiBcIkFuYWx5dGljc1wiLCBpY29uOiBCYXJDaGFydDMgfSxcbiAgICAgICAgICAgIHsgaWQ6IFwic2V0dGluZ3NcIiwgbGFiZWw6IFwiU2V0dGluZ3NcIiwgaWNvbjogU2V0dGluZ3MgfV0uXG4gICAgICAgICAgICBtYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgSWNvbiA9IGl0ZW0uaWNvbjtcbiAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBhY3RpdmVTZWN0aW9uID09PSBpdGVtLmlkO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6NDY0OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlU2VjdGlvbihpdGVtLmlkKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtMC41IHB4LTMgcHktMiByb3VuZGVkLXhsIHRyYW5zaXRpb24tYWxsIG1pbi13LTAgZmxleC0xICR7XG4gICAgICAgICAgICAgICAgaXNBY3RpdmUgPyAndGV4dC1vcmFuZ2UtNjAwJyA6ICd0ZXh0LWdyYXktNDAwJ31gXG4gICAgICAgICAgICAgICAgfSBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aXRlbT8uaWR9PlxuXG4gICAgICAgICAgICAgICAge2lzQWN0aXZlICYmXG4gICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDo0NzI6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEgaW5zZXQteC0xIGgtMC41IGJnLW9yYW5nZS01MDAgcm91bmRlZC1mdWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjQ3NDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDo0NzU6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B3LTUgaC01ICR7aXNBY3RpdmUgPyAndGV4dC1vcmFuZ2UtNjAwJyA6ICd0ZXh0LWdyYXktNDAwJ31gfSAvPlxuICAgICAgICAgICAgICAgICAge2l0ZW0uYmFkZ2UgPiAwICYmXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjQ3NzoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImFic29sdXRlIC10b3AtMS41IC1yaWdodC0xLjUgdy00IGgtNCBiZy1yZWQtNTAwIHRleHQtd2hpdGUgdGV4dC1bMTBweF0gcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmJhZGdlID4gOSA/ICc5KycgOiBpdGVtLmJhZGdlfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDo0ODI6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B0ZXh0LVsxMHB4XSBmb250LW1lZGl1bSB0cnVuY2F0ZSB3LWZ1bGwgdGV4dC1jZW50ZXIgJHtpc0FjdGl2ZSA/ICd0ZXh0LW9yYW5nZS02MDAnIDogJ3RleHQtZ3JheS00MDAnfWB9IGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwibGFiZWxcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aXRlbT8uaWR9PlxuICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj4pO1xuXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIEZlZWRiYWNrIERpYWxvZyAtIEF1dG8gcG9wdXAgYWZ0ZXIgMjAgb3JkZXJzICovfVxuICAgICAge3Nob3dGZWVkYmFja0RpYWxvZyAmJlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjQ5Mzo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1ibGFjay81MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB6LTUwIHAtNFwiPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6NDk0OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgbWF4LXctMnhsIHctZnVsbCBtYXgtaC1bOTB2aF0gb3ZlcmZsb3cteS1hdXRvIHNoYWRvdy0yeGxcIj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6NDk1OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicC02IGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDo0OTY6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgPGgyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjQ5NzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMFwiPvCfjokgQ29uZ3JhdHVsYXRpb25zITwvaDI+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6NDk4OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgbXQtMVwiPllvdSd2ZSBwcm9jZXNzZWQgMjArIG9yZGVyczwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6NTAwOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0ZlZWRiYWNrRGlhbG9nKGZhbHNlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LWdyYXktNjAwXCI+XG5cbiAgICAgICAgICAgICAgICA8WCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDo1MDQ6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRGFzaGJvYXJkOjUwNzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtNlwiPlxuICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDo1MDg6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCBtYi02XCI+XG4gICAgICAgICAgICAgICAgV2UnZCBsb3ZlIHRvIGhlYXIgYWJvdXQgeW91ciBleHBlcmllbmNlISBZb3VyIGZlZWRiYWNrIGhlbHBzIG90aGVyIHJlc3RhdXJhbnRzXG4gICAgICAgICAgICAgICAgZGlzY292ZXIgUmVzdHJvU2FhdGhpLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxGZWVkYmFja1NlY3Rpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9EYXNoYm9hcmQ6NTEyOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgcmVzdGF1cmFudD17cmVzdGF1cmFudH0gdXNlcj17dXNlcn0gLz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Rhc2hib2FyZDo1MTM6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dGZWVkYmFja0RpYWxvZyhmYWxzZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtdC00XCI+XG5cbiAgICAgICAgICAgICAgICBNYXliZSBMYXRlclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgIDwvZGl2PlxuICAgIDwvPik7XG5cbn0iXSwiZmlsZSI6Ii9hcHAvc3JjL3BhZ2VzL0Rhc2hib2FyZC5qc3gifQ==