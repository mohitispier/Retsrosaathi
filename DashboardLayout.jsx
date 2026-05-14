import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/dashboard/DashboardLayout.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/dashboard/DashboardLayout.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=79425e35";
import { base44 } from "/src/api/base44Client.js";
const createPageUrl = (pageName) => `/${pageName}`;
import DashboardSidebar from "/src/components/dashboard/DashboardSidebar.jsx";
import DashboardHeader from "/src/components/dashboard/DashboardHeader.jsx";
import { AlertCircle, Calendar } from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
import { Alert, AlertDescription } from "/src/components/ui/alert.jsx";
import { Button } from "/src/components/ui/button.jsx";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=79425e35";
export default function DashboardLayout({ children, "data-collection-item-id": __dataCollectionItemId }) {
  _s();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [restaurant, setRestaurant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    try {
      const isAuth = await base44.auth.isAuthenticated();
      if (!isAuth) {
        navigate(createPageUrl("Home"));
        return;
      }
      const userData = await base44.auth.me();
      setUser(userData);
      if (userData.role === "admin" && !userData.restaurant_id) {
        navigate(createPageUrl("SuperAdminDashboard"));
        return;
      }
      if (!userData?.restaurant_id) {
        navigate(createPageUrl("GetStarted"));
        return;
      }
      const restaurants = await base44.entities.Restaurant.filter({
        restaurant_id: userData.restaurant_id
      });
      if (restaurants.length === 0) {
        await base44.auth.updateMe({ restaurant_id: null });
        navigate(createPageUrl("GetStarted"));
        return;
      }
      setRestaurant(restaurants[0]);
    } catch (e) {
      console.error("Error loading data:", e);
      navigate(createPageUrl("Home"));
    } finally {
      setIsLoading(false);
    }
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/DashboardLayout:69:6", "data-dynamic-content": "false", className: "min-h-screen flex items-center justify-center bg-gray-50", "data-collection-item-id": __dataCollectionItemId, children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/DashboardLayout:70:8", "data-dynamic-content": "false", className: "text-center", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/DashboardLayout:71:10", "data-dynamic-content": "false", className: "animate-spin rounded-full h-10 w-10 border-b-2 border-orange-600 mx-auto mb-4" }, void 0, false, {
        fileName: "/app/src/components/dashboard/DashboardLayout.jsx",
        lineNumber: 90,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/DashboardLayout:72:10", "data-dynamic-content": "false", className: "text-gray-500", children: "Loading your dashboard..." }, void 0, false, {
        fileName: "/app/src/components/dashboard/DashboardLayout.jsx",
        lineNumber: 91,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/DashboardLayout.jsx",
      lineNumber: 89,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/components/dashboard/DashboardLayout.jsx",
      lineNumber: 88,
      columnNumber: 7
    }, this);
  }
  const isSubscriptionExpired = restaurant?.subscription_status === "expired";
  const isTrialEnding = restaurant?.subscription_plan === "trial" && restaurant?.subscription_expires_at;
  const daysRemaining = isTrialEnding ? Math.ceil((new Date(restaurant.subscription_expires_at) - /* @__PURE__ */ new Date()) / (1e3 * 60 * 60 * 24)) : null;
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/DashboardLayout:86:4", "data-dynamic-content": "true", className: "min-h-screen bg-gray-50", "data-collection-item-id": __dataCollectionItemId, children: [
    /* @__PURE__ */ jsxDEV(
      DashboardSidebar,
      {
        "data-source-location": "components/dashboard/DashboardLayout:87:6",
        "data-dynamic-content": "true",
        restaurant,
        isOpen: isSidebarOpen,
        onClose: () => setIsSidebarOpen(false),
        isCollapsed: isSidebarCollapsed,
        onToggleCollapse: () => setIsSidebarCollapsed(!isSidebarCollapsed)
      },
      void 0,
      false,
      {
        fileName: "/app/src/components/dashboard/DashboardLayout.jsx",
        lineNumber: 106,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      DashboardHeader,
      {
        "data-source-location": "components/dashboard/DashboardLayout:95:6",
        "data-dynamic-content": "true",
        user,
        restaurant,
        onMenuClick: () => setIsSidebarOpen(true),
        isSidebarCollapsed
      },
      void 0,
      false,
      {
        fileName: "/app/src/components/dashboard/DashboardLayout.jsx",
        lineNumber: 114,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("main", { "data-source-location": "components/dashboard/DashboardLayout:102:6", "data-dynamic-content": "true", className: `
        pt-16 min-h-screen transition-all duration-300
        ${isSidebarCollapsed ? "lg:pl-20" : "lg:pl-64"}
        pb-6
      `, children: [
      isSubscriptionExpired && /* @__PURE__ */ jsxDEV(Alert, { "data-source-location": "components/dashboard/DashboardLayout:109:10", "data-dynamic-content": "true", variant: "destructive", className: "mx-3 mt-3 sm:m-4 bg-red-50 border-red-200", children: [
        /* @__PURE__ */ jsxDEV(AlertCircle, { "data-source-location": "components/dashboard/DashboardLayout:110:12", "data-dynamic-content": "false", className: "h-4 w-4" }, void 0, false, {
          fileName: "/app/src/components/dashboard/DashboardLayout.jsx",
          lineNumber: 129,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(AlertDescription, { "data-source-location": "components/dashboard/DashboardLayout:111:12", "data-dynamic-content": "true", className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/DashboardLayout:112:14", "data-dynamic-content": "false", className: "text-sm", children: "Your subscription has expired. Some features are limited." }, void 0, false, {
            fileName: "/app/src/components/dashboard/DashboardLayout.jsx",
            lineNumber: 131,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Link, { "data-source-location": "components/dashboard/DashboardLayout:113:14", "data-dynamic-content": "true", to: createPageUrl("Billing"), children: /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "components/dashboard/DashboardLayout:114:16", "data-dynamic-content": "false", size: "sm", className: "bg-red-600 hover:bg-red-700 w-full sm:w-auto", children: "Renew Now" }, void 0, false, {
            fileName: "/app/src/components/dashboard/DashboardLayout.jsx",
            lineNumber: 133,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/DashboardLayout.jsx",
            lineNumber: 132,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/DashboardLayout.jsx",
          lineNumber: 130,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/DashboardLayout.jsx",
        lineNumber: 128,
        columnNumber: 9
      }, this),
      isTrialEnding && daysRemaining > 0 && daysRemaining <= 7 && /* @__PURE__ */ jsxDEV(Alert, { "data-source-location": "components/dashboard/DashboardLayout:123:10", "data-dynamic-content": "true", className: "mx-3 mt-3 sm:m-4 bg-amber-50 border-amber-200", children: [
        /* @__PURE__ */ jsxDEV(Calendar, { "data-source-location": "components/dashboard/DashboardLayout:124:12", "data-dynamic-content": "false", className: "h-4 w-4 text-amber-600" }, void 0, false, {
          fileName: "/app/src/components/dashboard/DashboardLayout.jsx",
          lineNumber: 143,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(AlertDescription, { "data-source-location": "components/dashboard/DashboardLayout:125:12", "data-dynamic-content": "true", className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/DashboardLayout:126:14", "data-dynamic-content": "true", className: "text-sm text-amber-700", "data-collection-item-field": "daysRemaining", "data-collection-item-id": __dataCollectionItemId, children: [
            "Your trial ends in ",
            daysRemaining,
            " day",
            daysRemaining !== 1 ? "s" : "",
            ". Upgrade to continue using all features."
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/DashboardLayout.jsx",
            lineNumber: 145,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Link, { "data-source-location": "components/dashboard/DashboardLayout:129:14", "data-dynamic-content": "true", to: createPageUrl("Billing"), children: /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "components/dashboard/DashboardLayout:130:16", "data-dynamic-content": "false", size: "sm", variant: "outline", className: "border-amber-400 text-amber-700 hover:bg-amber-100 w-full sm:w-auto", children: "View Plans" }, void 0, false, {
            fileName: "/app/src/components/dashboard/DashboardLayout.jsx",
            lineNumber: 149,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/DashboardLayout.jsx",
            lineNumber: 148,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/DashboardLayout.jsx",
          lineNumber: 144,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/DashboardLayout.jsx",
        lineNumber: 142,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/DashboardLayout:138:8", "data-dynamic-content": "true", className: "p-3 sm:p-4 lg:p-6", children: React.cloneElement(children, { user, restaurant, refreshRestaurant: loadData }) }, void 0, false, {
        fileName: "/app/src/components/dashboard/DashboardLayout.jsx",
        lineNumber: 157,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/DashboardLayout.jsx",
      lineNumber: 121,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/dashboard/DashboardLayout.jsx",
    lineNumber: 105,
    columnNumber: 5
  }, this);
}
_s(DashboardLayout, "dultgLfbleFMTGueFeCU9fZtZLM=", false, function() {
  return [useNavigate];
});
_c = DashboardLayout;
var _c;
$RefreshReg$(_c, "DashboardLayout");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/dashboard/DashboardLayout.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/dashboard/DashboardLayout.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFxQiwrQ0FBOEMsd0JBQXFCLFFBQU8sSUFBSS9DLGNBQWMsU0FBUyxHQUM5SCxpQ0FBQyxVQUFPLHdCQUFxQiwrQ0FBOEMsd0JBQXFCLFNBQVEsTUFBSyxNQUFLLFNBQVEsV0FBVSxXQUFVLHVFQUFxRSwwQkFBbk47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFQSxLQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSUE7QUFBQSxhQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFTQTtBQUFBLFdBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVlFO0FBQUEsTUFHRix1QkFBQyxTQUFJLHdCQUFxQiw4Q0FBNkMsd0JBQXFCLFFBQU8sV0FBVSxxQkFDMUdMLGdCQUFNd0QsYUFBYXhDLFVBQVUsRUFBRUksTUFBTUUsWUFBWW1DLG1CQUFtQjNCLFNBQVMsQ0FBQyxLQURqRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRUE7QUFBQSxTQXRDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBdUNBO0FBQUEsT0F2REY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQXdEQTtBQUVKO0FBQUNaLEdBbkl1QkgsaUJBQWU7QUFBQSxVQUNwQlosV0FBVztBQUFBO0FBQUF1RCxLQUROM0M7QUFBZSxJQUFBMkM7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VOYXZpZ2F0ZSIsImJhc2U0NCIsImNyZWF0ZVBhZ2VVcmwiLCJwYWdlTmFtZSIsIkRhc2hib2FyZFNpZGViYXIiLCJEYXNoYm9hcmRIZWFkZXIiLCJBbGVydENpcmNsZSIsIkNhbGVuZGFyIiwiQWxlcnQiLCJBbGVydERlc2NyaXB0aW9uIiwiQnV0dG9uIiwiTGluayIsIkRhc2hib2FyZExheW91dCIsImNoaWxkcmVuIiwiX19kYXRhQ29sbGVjdGlvbkl0ZW1JZCIsIl9zIiwibmF2aWdhdGUiLCJ1c2VyIiwic2V0VXNlciIsInJlc3RhdXJhbnQiLCJzZXRSZXN0YXVyYW50IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaXNTaWRlYmFyT3BlbiIsInNldElzU2lkZWJhck9wZW4iLCJpc1NpZGViYXJDb2xsYXBzZWQiLCJzZXRJc1NpZGViYXJDb2xsYXBzZWQiLCJsb2FkRGF0YSIsImlzQXV0aCIsImF1dGgiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ1c2VyRGF0YSIsIm1lIiwicm9sZSIsInJlc3RhdXJhbnRfaWQiLCJyZXN0YXVyYW50cyIsImVudGl0aWVzIiwiUmVzdGF1cmFudCIsImZpbHRlciIsImxlbmd0aCIsInVwZGF0ZU1lIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImlzU3Vic2NyaXB0aW9uRXhwaXJlZCIsInN1YnNjcmlwdGlvbl9zdGF0dXMiLCJpc1RyaWFsRW5kaW5nIiwic3Vic2NyaXB0aW9uX3BsYW4iLCJzdWJzY3JpcHRpb25fZXhwaXJlc19hdCIsImRheXNSZW1haW5pbmciLCJNYXRoIiwiY2VpbCIsIkRhdGUiLCJjbG9uZUVsZW1lbnQiLCJyZWZyZXNoUmVzdGF1cmFudCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkRhc2hib2FyZExheW91dC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IGJhc2U0NCB9IGZyb20gXCJAL2FwaS9iYXNlNDRDbGllbnRcIjtcblxuY29uc3QgY3JlYXRlUGFnZVVybCA9IChwYWdlTmFtZSkgPT4gYC8ke3BhZ2VOYW1lfWA7XG5pbXBvcnQgRGFzaGJvYXJkU2lkZWJhciBmcm9tIFwiLi9EYXNoYm9hcmRTaWRlYmFyXCI7XG5pbXBvcnQgRGFzaGJvYXJkSGVhZGVyIGZyb20gXCIuL0Rhc2hib2FyZEhlYWRlclwiO1xuaW1wb3J0IHsgQWxlcnRDaXJjbGUsIENhbGVuZGFyIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgQWxlcnQsIEFsZXJ0RGVzY3JpcHRpb24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2FsZXJ0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZExheW91dCh7IGNoaWxkcmVuLCBcImRhdGEtY29sbGVjdGlvbi1pdGVtLWlkXCI6IF9fZGF0YUNvbGxlY3Rpb25JdGVtSWQgfSkge1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcmVzdGF1cmFudCwgc2V0UmVzdGF1cmFudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbaXNTaWRlYmFyT3Blbiwgc2V0SXNTaWRlYmFyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1NpZGViYXJDb2xsYXBzZWQsIHNldElzU2lkZWJhckNvbGxhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgbG9hZERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGlzQXV0aCA9IGF3YWl0IGJhc2U0NC5hdXRoLmlzQXV0aGVudGljYXRlZCgpO1xuICAgICAgaWYgKCFpc0F1dGgpIHtcbiAgICAgICAgbmF2aWdhdGUoY3JlYXRlUGFnZVVybChcIkhvbWVcIikpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgYmFzZTQ0LmF1dGgubWUoKTtcbiAgICAgIHNldFVzZXIodXNlckRhdGEpO1xuXG4gICAgICAvLyBTdXBlciBhZG1pbiBjaGVjayAoYWRtaW4gd2l0aG91dCByZXN0YXVyYW50X2lkKVxuICAgICAgaWYgKHVzZXJEYXRhLnJvbGUgPT09ICdhZG1pbicgJiYgIXVzZXJEYXRhLnJlc3RhdXJhbnRfaWQpIHtcbiAgICAgICAgbmF2aWdhdGUoY3JlYXRlUGFnZVVybChcIlN1cGVyQWRtaW5EYXNoYm9hcmRcIikpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghdXNlckRhdGE/LnJlc3RhdXJhbnRfaWQpIHtcbiAgICAgICAgbmF2aWdhdGUoY3JlYXRlUGFnZVVybChcIkdldFN0YXJ0ZWRcIikpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3RhdXJhbnRzID0gYXdhaXQgYmFzZTQ0LmVudGl0aWVzLlJlc3RhdXJhbnQuZmlsdGVyKHtcbiAgICAgICAgcmVzdGF1cmFudF9pZDogdXNlckRhdGEucmVzdGF1cmFudF9pZFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXN0YXVyYW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gUmVzdGF1cmFudCBkZWxldGVkLCBjbGVhciB1c2VyIGRhdGEgYW5kIHJlZGlyZWN0XG4gICAgICAgIGF3YWl0IGJhc2U0NC5hdXRoLnVwZGF0ZU1lKHsgcmVzdGF1cmFudF9pZDogbnVsbCB9KTtcbiAgICAgICAgbmF2aWdhdGUoY3JlYXRlUGFnZVVybChcIkdldFN0YXJ0ZWRcIikpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNldFJlc3RhdXJhbnQocmVzdGF1cmFudHNbMF0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2FkaW5nIGRhdGE6XCIsIGUpO1xuICAgICAgbmF2aWdhdGUoY3JlYXRlUGFnZVVybChcIkhvbWVcIikpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9EYXNoYm9hcmRMYXlvdXQ6Njk6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctZ3JheS01MFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtfX2RhdGFDb2xsZWN0aW9uSXRlbUlkfT5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZExheW91dDo3MDo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZExheW91dDo3MToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJhbmltYXRlLXNwaW4gcm91bmRlZC1mdWxsIGgtMTAgdy0xMCBib3JkZXItYi0yIGJvcmRlci1vcmFuZ2UtNjAwIG14LWF1dG8gbWItNFwiPjwvZGl2PlxuICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkTGF5b3V0OjcyOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5Mb2FkaW5nIHlvdXIgZGFzaGJvYXJkLi4uPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2Pik7XG5cbiAgfVxuXG4gIC8vIENoZWNrIHN1YnNjcmlwdGlvbiBzdGF0dXNcbiAgY29uc3QgaXNTdWJzY3JpcHRpb25FeHBpcmVkID0gcmVzdGF1cmFudD8uc3Vic2NyaXB0aW9uX3N0YXR1cyA9PT0gJ2V4cGlyZWQnO1xuICBjb25zdCBpc1RyaWFsRW5kaW5nID0gcmVzdGF1cmFudD8uc3Vic2NyaXB0aW9uX3BsYW4gPT09ICd0cmlhbCcgJiYgcmVzdGF1cmFudD8uc3Vic2NyaXB0aW9uX2V4cGlyZXNfYXQ7XG4gIGNvbnN0IGRheXNSZW1haW5pbmcgPSBpc1RyaWFsRW5kaW5nID9cbiAgTWF0aC5jZWlsKChuZXcgRGF0ZShyZXN0YXVyYW50LnN1YnNjcmlwdGlvbl9leHBpcmVzX2F0KSAtIG5ldyBEYXRlKCkpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKSA6XG4gIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkTGF5b3V0Ojg2OjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JheS01MFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtfX2RhdGFDb2xsZWN0aW9uSXRlbUlkfT5cbiAgICAgIDxEYXNoYm9hcmRTaWRlYmFyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkTGF5b3V0Ojg3OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgcmVzdGF1cmFudD17cmVzdGF1cmFudH1cbiAgICAgIGlzT3Blbj17aXNTaWRlYmFyT3Blbn1cbiAgICAgIG9uQ2xvc2U9eygpID0+IHNldElzU2lkZWJhck9wZW4oZmFsc2UpfVxuICAgICAgaXNDb2xsYXBzZWQ9e2lzU2lkZWJhckNvbGxhcHNlZH1cbiAgICAgIG9uVG9nZ2xlQ29sbGFwc2U9eygpID0+IHNldElzU2lkZWJhckNvbGxhcHNlZCghaXNTaWRlYmFyQ29sbGFwc2VkKX0gLz5cblxuICAgICAgXG4gICAgICA8RGFzaGJvYXJkSGVhZGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkTGF5b3V0Ojk1OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgdXNlcj17dXNlcn1cbiAgICAgIHJlc3RhdXJhbnQ9e3Jlc3RhdXJhbnR9XG4gICAgICBvbk1lbnVDbGljaz17KCkgPT4gc2V0SXNTaWRlYmFyT3Blbih0cnVlKX1cbiAgICAgIGlzU2lkZWJhckNvbGxhcHNlZD17aXNTaWRlYmFyQ29sbGFwc2VkfSAvPlxuXG5cbiAgICAgIDxtYWluIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkTGF5b3V0OjEwMjo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgXG4gICAgICAgIHB0LTE2IG1pbi1oLXNjcmVlbiB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcbiAgICAgICAgJHtpc1NpZGViYXJDb2xsYXBzZWQgPyAnbGc6cGwtMjAnIDogJ2xnOnBsLTY0J31cbiAgICAgICAgcGItNlxuICAgICAgYH0+XG4gICAgICAgIHsvKiBTdWJzY3JpcHRpb24gQWxlcnRzICovfVxuICAgICAgICB7aXNTdWJzY3JpcHRpb25FeHBpcmVkICYmXG4gICAgICAgIDxBbGVydCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZExheW91dDoxMDk6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIiBjbGFzc05hbWU9XCJteC0zIG10LTMgc206bS00IGJnLXJlZC01MCBib3JkZXItcmVkLTIwMFwiPlxuICAgICAgICAgICAgPEFsZXJ0Q2lyY2xlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkTGF5b3V0OjExMDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgICAgIDxBbGVydERlc2NyaXB0aW9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkTGF5b3V0OjExMToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgaXRlbXMtc3RhcnQgc206aXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMlwiPlxuICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZExheW91dDoxMTI6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbVwiPllvdXIgc3Vic2NyaXB0aW9uIGhhcyBleHBpcmVkLiBTb21lIGZlYXR1cmVzIGFyZSBsaW1pdGVkLjwvc3Bhbj5cbiAgICAgICAgICAgICAgPExpbmsgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9EYXNoYm9hcmRMYXlvdXQ6MTEzOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdG89e2NyZWF0ZVBhZ2VVcmwoXCJCaWxsaW5nXCIpfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkTGF5b3V0OjExNDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBzaXplPVwic21cIiBjbGFzc05hbWU9XCJiZy1yZWQtNjAwIGhvdmVyOmJnLXJlZC03MDAgdy1mdWxsIHNtOnctYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgUmVuZXcgTm93XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvQWxlcnREZXNjcmlwdGlvbj5cbiAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICB9XG5cbiAgICAgICAge2lzVHJpYWxFbmRpbmcgJiYgZGF5c1JlbWFpbmluZyA+IDAgJiYgZGF5c1JlbWFpbmluZyA8PSA3ICYmXG4gICAgICAgIDxBbGVydCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZExheW91dDoxMjM6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJteC0zIG10LTMgc206bS00IGJnLWFtYmVyLTUwIGJvcmRlci1hbWJlci0yMDBcIj5cbiAgICAgICAgICAgIDxDYWxlbmRhciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZExheW91dDoxMjQ6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiaC00IHctNCB0ZXh0LWFtYmVyLTYwMFwiIC8+XG4gICAgICAgICAgICA8QWxlcnREZXNjcmlwdGlvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZExheW91dDoxMjU6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGl0ZW1zLXN0YXJ0IHNtOml0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9EYXNoYm9hcmRMYXlvdXQ6MTI2OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWFtYmVyLTcwMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiZGF5c1JlbWFpbmluZ1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtfX2RhdGFDb2xsZWN0aW9uSXRlbUlkfT5cbiAgICAgICAgICAgICAgICBZb3VyIHRyaWFsIGVuZHMgaW4ge2RheXNSZW1haW5pbmd9IGRheXtkYXlzUmVtYWluaW5nICE9PSAxID8gJ3MnIDogJyd9LiBVcGdyYWRlIHRvIGNvbnRpbnVlIHVzaW5nIGFsbCBmZWF0dXJlcy5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8TGluayBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZExheW91dDoxMjk6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB0bz17Y3JlYXRlUGFnZVVybChcIkJpbGxpbmdcIil9PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9EYXNoYm9hcmRMYXlvdXQ6MTMwOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHNpemU9XCJzbVwiIHZhcmlhbnQ9XCJvdXRsaW5lXCIgY2xhc3NOYW1lPVwiYm9yZGVyLWFtYmVyLTQwMCB0ZXh0LWFtYmVyLTcwMCBob3ZlcjpiZy1hbWJlci0xMDAgdy1mdWxsIHNtOnctYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgVmlldyBQbGFuc1xuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L0FsZXJ0RGVzY3JpcHRpb24+XG4gICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgfVxuXG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9EYXNoYm9hcmRMYXlvdXQ6MTM4OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJwLTMgc206cC00IGxnOnAtNlwiPlxuICAgICAgICAgIHtSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHsgdXNlciwgcmVzdGF1cmFudCwgcmVmcmVzaFJlc3RhdXJhbnQ6IGxvYWREYXRhIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj4pO1xuXG59Il0sImZpbGUiOiIvYXBwL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9EYXNoYm9hcmRMYXlvdXQuanN4In0=