import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/dashboard/DashboardHeader.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/dashboard/DashboardHeader.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=79425e35";
import { createPageUrl } from "/src/utils/index.ts";
import { base44 } from "/src/api/base44Client.js";
import {
  Menu,
  Bell,
  Search,
  ChevronDown,
  User,
  Settings,
  LogOut,
  ExternalLink
} from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
import { Button } from "/src/components/ui/button.jsx";
import { Input } from "/src/components/ui/input.jsx";
import { Badge } from "/src/components/ui/badge.jsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "/src/components/ui/dropdown-menu.jsx";
export default function DashboardHeader({ user, restaurant, onMenuClick, isSidebarCollapsed, "data-collection-item-id": __dataCollectionItemId }) {
  const handleLogout = async () => {
    await base44.auth.logout(createPageUrl("Home"));
  };
  const getSubscriptionBadge = () => {
    if (!restaurant) return null;
    const statusColors = {
      active: "bg-green-100 text-green-700",
      expired: "bg-red-100 text-red-700",
      cancelled: "bg-gray-100 text-gray-700"
    };
    const planLabels = {
      trial: "Trial",
      basic: "Basic",
      pro: "Pro",
      multi_outlet: "Multi-Outlet"
    };
    return /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "components/dashboard/DashboardHeader:42:6", "data-dynamic-content": "true", className: `${statusColors[restaurant.subscription_status]} text-xs`, "data-collection-item-field": "subscription_status", "data-collection-item-id": restaurant?.id || restaurant?._id, children: [
      planLabels[restaurant.subscription_plan],
      " · ",
      restaurant.subscription_status
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
      lineNumber: 61,
      columnNumber: 7
    }, this);
  };
  return /* @__PURE__ */ jsxDEV("header", { "data-source-location": "components/dashboard/DashboardHeader:49:4", "data-dynamic-content": "true", className: `
      fixed top-0 right-0 h-16 bg-white border-b border-gray-200 z-30
      flex items-center justify-between px-4 lg:px-6
      transition-all duration-300
      ${isSidebarCollapsed ? "left-20" : "left-0 lg:left-64"}
    `, "data-collection-item-id": __dataCollectionItemId, children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/DashboardHeader:56:6", "data-dynamic-content": "true", className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          "data-source-location": "components/dashboard/DashboardHeader:57:8",
          "data-dynamic-content": "true",
          onClick: onMenuClick,
          className: "lg:hidden p-2 hover:bg-gray-100 rounded-lg",
          children: /* @__PURE__ */ jsxDEV(Menu, { "data-source-location": "components/dashboard/DashboardHeader:61:10", "data-dynamic-content": "false", className: "w-5 h-5" }, void 0, false, {
            fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
            lineNumber: 80,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
          lineNumber: 76,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/DashboardHeader:65:8", "data-dynamic-content": "false", className: "hidden md:block relative", children: [
        /* @__PURE__ */ jsxDEV(Search, { "data-source-location": "components/dashboard/DashboardHeader:66:10", "data-dynamic-content": "false", className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }, void 0, false, {
          fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
          lineNumber: 85,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(
          Input,
          {
            "data-source-location": "components/dashboard/DashboardHeader:67:10",
            "data-dynamic-content": "false",
            placeholder: "Search orders, menu items...",
            className: "w-64 pl-9 bg-gray-50 border-gray-200"
          },
          void 0,
          false,
          {
            fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
            lineNumber: 86,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
        lineNumber: 84,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/DashboardHeader:75:6", "data-dynamic-content": "true", className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/DashboardHeader:77:8", "data-dynamic-content": "true", className: "hidden sm:block", children: getSubscriptionBadge() }, void 0, false, {
        fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      restaurant && /* @__PURE__ */ jsxDEV(
        Link,
        {
          "data-source-location": "components/dashboard/DashboardHeader:83:10",
          "data-dynamic-content": "true",
          to: createPageUrl(`CustomerMenu?r=${restaurant.restaurant_id}`),
          target: "_blank",
          className: "hidden sm:flex items-center gap-1 text-sm text-violet-600 hover:text-violet-700",
          children: [
            "View Menu",
            /* @__PURE__ */ jsxDEV(ExternalLink, { "data-source-location": "components/dashboard/DashboardHeader:89:12", "data-dynamic-content": "false", className: "w-3 h-3" }, void 0, false, {
              fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
              lineNumber: 108,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
          lineNumber: 102,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "components/dashboard/DashboardHeader:94:8", "data-dynamic-content": "false", variant: "ghost", size: "icon", className: "relative", children: [
        /* @__PURE__ */ jsxDEV(Bell, { "data-source-location": "components/dashboard/DashboardHeader:95:10", "data-dynamic-content": "false", className: "w-5 h-5 text-gray-600" }, void 0, false, {
          fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
          lineNumber: 114,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/DashboardHeader:96:10", "data-dynamic-content": "false", className: "absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" }, void 0, false, {
          fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
          lineNumber: 115,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(DropdownMenu, { "data-source-location": "components/dashboard/DashboardHeader:100:8", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV(DropdownMenuTrigger, { "data-source-location": "components/dashboard/DashboardHeader:101:10", "data-dynamic-content": "true", asChild: true, children: /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "components/dashboard/DashboardHeader:102:12", "data-dynamic-content": "true", variant: "ghost", className: "flex items-center gap-2 px-2", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/DashboardHeader:103:14", "data-dynamic-content": "true", className: "w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white text-sm font-medium", children: user?.full_name?.[0] || user?.email?.[0] || "U" }, void 0, false, {
            fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
            lineNumber: 122,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/DashboardHeader:106:14", "data-dynamic-content": "true", className: "hidden md:block text-left", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/DashboardHeader:107:16", "data-dynamic-content": "true", className: "text-sm font-medium text-gray-900", children: user?.full_name || "User" }, void 0, false, {
              fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
              lineNumber: 126,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/DashboardHeader:108:16", "data-dynamic-content": "false", className: "text-xs text-gray-500", children: "Admin" }, void 0, false, {
              fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
              lineNumber: 127,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
            lineNumber: 125,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(ChevronDown, { "data-source-location": "components/dashboard/DashboardHeader:110:14", "data-dynamic-content": "false", className: "w-4 h-4 text-gray-400" }, void 0, false, {
            fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
            lineNumber: 129,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
          lineNumber: 121,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
          lineNumber: 120,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(DropdownMenuContent, { "data-source-location": "components/dashboard/DashboardHeader:113:10", "data-dynamic-content": "true", align: "end", className: "w-56", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/DashboardHeader:114:12", "data-dynamic-content": "true", className: "px-2 py-1.5", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/DashboardHeader:115:14", "data-dynamic-content": "true", className: "text-sm font-medium", "data-collection-item-field": "full_name", "data-collection-item-id": user?.id || user?._id, children: user?.full_name }, void 0, false, {
              fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
              lineNumber: 134,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/DashboardHeader:116:14", "data-dynamic-content": "true", className: "text-xs text-gray-500", "data-collection-item-field": "email", "data-collection-item-id": user?.id || user?._id, children: user?.email }, void 0, false, {
              fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
              lineNumber: 135,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
            lineNumber: 133,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(DropdownMenuSeparator, { "data-source-location": "components/dashboard/DashboardHeader:118:12", "data-dynamic-content": "false" }, void 0, false, {
            fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
            lineNumber: 137,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(DropdownMenuItem, { "data-source-location": "components/dashboard/DashboardHeader:119:12", "data-dynamic-content": "true", asChild: true, children: /* @__PURE__ */ jsxDEV(Link, { "data-source-location": "components/dashboard/DashboardHeader:120:14", "data-dynamic-content": "true", to: createPageUrl("RestaurantSettings"), className: "flex items-center gap-2 cursor-pointer", children: [
            /* @__PURE__ */ jsxDEV(Settings, { "data-source-location": "components/dashboard/DashboardHeader:121:16", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
              fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
              lineNumber: 140,
              columnNumber: 17
            }, this),
            "Restaurant Settings"
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
            lineNumber: 139,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
            lineNumber: 138,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(DropdownMenuSeparator, { "data-source-location": "components/dashboard/DashboardHeader:125:12", "data-dynamic-content": "false" }, void 0, false, {
            fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
            lineNumber: 144,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(DropdownMenuItem, { "data-source-location": "components/dashboard/DashboardHeader:126:12", "data-dynamic-content": "true", onClick: handleLogout, className: "text-red-600 cursor-pointer", children: [
            /* @__PURE__ */ jsxDEV(LogOut, { "data-source-location": "components/dashboard/DashboardHeader:127:14", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
              fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
              lineNumber: 146,
              columnNumber: 15
            }, this),
            "Log out"
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
            lineNumber: 145,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
          lineNumber: 132,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
        lineNumber: 119,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
      lineNumber: 94,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/dashboard/DashboardHeader.jsx",
    lineNumber: 68,
    columnNumber: 5
  }, this);
}
_c = DashboardHeader;
var _c;
$RefreshReg$(_c, "DashboardHeader");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/dashboard/DashboardHeader.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/dashboard/DashboardHeader.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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LElBQUEwQjtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiY3JlYXRlUGFnZVVybCIsImJhc2U0NCIsIk1lbnUiLCJCZWxsIiwiU2VhcmNoIiwiQ2hldnJvbkRvd24iLCJVc2VyIiwiU2V0dGluZ3MiLCJMb2dPdXQiLCJFeHRlcm5hbExpbmsiLCJCdXR0b24iLCJJbnB1dCIsIkJhZGdlIiwiRHJvcGRvd25NZW51IiwiRHJvcGRvd25NZW51Q29udGVudCIsIkRyb3Bkb3duTWVudUl0ZW0iLCJEcm9wZG93bk1lbnVTZXBhcmF0b3IiLCJEcm9wZG93bk1lbnVUcmlnZ2VyIiwiRGFzaGJvYXJkSGVhZGVyIiwidXNlciIsInJlc3RhdXJhbnQiLCJvbk1lbnVDbGljayIsImlzU2lkZWJhckNvbGxhcHNlZCIsIl9fZGF0YUNvbGxlY3Rpb25JdGVtSWQiLCJoYW5kbGVMb2dvdXQiLCJhdXRoIiwibG9nb3V0IiwiZ2V0U3Vic2NyaXB0aW9uQmFkZ2UiLCJzdGF0dXNDb2xvcnMiLCJhY3RpdmUiLCJleHBpcmVkIiwiY2FuY2VsbGVkIiwicGxhbkxhYmVscyIsInRyaWFsIiwiYmFzaWMiLCJwcm8iLCJtdWx0aV9vdXRsZXQiLCJzdWJzY3JpcHRpb25fc3RhdHVzIiwiaWQiLCJfaWQiLCJzdWJzY3JpcHRpb25fcGxhbiIsInJlc3RhdXJhbnRfaWQiLCJmdWxsX25hbWUiLCJlbWFpbCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkRhc2hib2FyZEhlYWRlci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBjcmVhdGVQYWdlVXJsIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgeyBiYXNlNDQgfSBmcm9tIFwiQC9hcGkvYmFzZTQ0Q2xpZW50XCI7XG5pbXBvcnQge1xuICBNZW51LCBCZWxsLCBTZWFyY2gsIENoZXZyb25Eb3duLFxuICBVc2VyLCBTZXR0aW5ncywgTG9nT3V0LCBFeHRlcm5hbExpbmsgfSBmcm9tXG5cImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IHsgQmFkZ2UgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2JhZGdlXCI7XG5pbXBvcnQge1xuICBEcm9wZG93bk1lbnUsXG4gIERyb3Bkb3duTWVudUNvbnRlbnQsXG4gIERyb3Bkb3duTWVudUl0ZW0sXG4gIERyb3Bkb3duTWVudVNlcGFyYXRvcixcbiAgRHJvcGRvd25NZW51VHJpZ2dlciB9IGZyb21cblwiQC9jb21wb25lbnRzL3VpL2Ryb3Bkb3duLW1lbnVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkSGVhZGVyKHsgdXNlciwgcmVzdGF1cmFudCwgb25NZW51Q2xpY2ssIGlzU2lkZWJhckNvbGxhcHNlZCwgXCJkYXRhLWNvbGxlY3Rpb24taXRlbS1pZFwiOiBfX2RhdGFDb2xsZWN0aW9uSXRlbUlkIH0pIHtcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGJhc2U0NC5hdXRoLmxvZ291dChjcmVhdGVQYWdlVXJsKFwiSG9tZVwiKSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0U3Vic2NyaXB0aW9uQmFkZ2UgPSAoKSA9PiB7XG4gICAgaWYgKCFyZXN0YXVyYW50KSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IHN0YXR1c0NvbG9ycyA9IHtcbiAgICAgIGFjdGl2ZTogXCJiZy1ncmVlbi0xMDAgdGV4dC1ncmVlbi03MDBcIixcbiAgICAgIGV4cGlyZWQ6IFwiYmctcmVkLTEwMCB0ZXh0LXJlZC03MDBcIixcbiAgICAgIGNhbmNlbGxlZDogXCJiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNzAwXCJcbiAgICB9O1xuXG4gICAgY29uc3QgcGxhbkxhYmVscyA9IHtcbiAgICAgIHRyaWFsOiBcIlRyaWFsXCIsXG4gICAgICBiYXNpYzogXCJCYXNpY1wiLFxuICAgICAgcHJvOiBcIlByb1wiLFxuICAgICAgbXVsdGlfb3V0bGV0OiBcIk11bHRpLU91dGxldFwiXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8QmFkZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9EYXNoYm9hcmRIZWFkZXI6NDI6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YCR7c3RhdHVzQ29sb3JzW3Jlc3RhdXJhbnQuc3Vic2NyaXB0aW9uX3N0YXR1c119IHRleHQteHNgfSBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInN1YnNjcmlwdGlvbl9zdGF0dXNcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmVzdGF1cmFudD8uaWQgfHwgcmVzdGF1cmFudD8uX2lkfT5cbiAgICAgICAge3BsYW5MYWJlbHNbcmVzdGF1cmFudC5zdWJzY3JpcHRpb25fcGxhbl19IMK3IHtyZXN0YXVyYW50LnN1YnNjcmlwdGlvbl9zdGF0dXN9XG4gICAgICA8L0JhZGdlPik7XG5cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9EYXNoYm9hcmRIZWFkZXI6NDk6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YFxuICAgICAgZml4ZWQgdG9wLTAgcmlnaHQtMCBoLTE2IGJnLXdoaXRlIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCB6LTMwXG4gICAgICBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtNCBsZzpweC02XG4gICAgICB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcbiAgICAgICR7aXNTaWRlYmFyQ29sbGFwc2VkID8gJ2xlZnQtMjAnIDogJ2xlZnQtMCBsZzpsZWZ0LTY0J31cbiAgICBgfSBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17X19kYXRhQ29sbGVjdGlvbkl0ZW1JZH0+XG4gICAgICB7LyogTGVmdCBTZWN0aW9uICovfVxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZEhlYWRlcjo1Njo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgPGJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZEhlYWRlcjo1Nzo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgb25DbGljaz17b25NZW51Q2xpY2t9XG4gICAgICAgIGNsYXNzTmFtZT1cImxnOmhpZGRlbiBwLTIgaG92ZXI6YmctZ3JheS0xMDAgcm91bmRlZC1sZ1wiPlxuXG4gICAgICAgICAgPE1lbnUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9EYXNoYm9hcmRIZWFkZXI6NjE6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIHsvKiBTZWFyY2ggLSBIaWRkZW4gb24gbW9iaWxlICovfVxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkSGVhZGVyOjY1OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrIHJlbGF0aXZlXCI+XG4gICAgICAgICAgPFNlYXJjaCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZEhlYWRlcjo2NjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTMgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIHctNCBoLTQgdGV4dC1ncmF5LTQwMFwiIC8+XG4gICAgICAgICAgPElucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkSGVhZGVyOjY3OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggb3JkZXJzLCBtZW51IGl0ZW1zLi4uXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTY0IHBsLTkgYmctZ3JheS01MCBib3JkZXItZ3JheS0yMDBcIiAvPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBSaWdodCBTZWN0aW9uICovfVxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZEhlYWRlcjo3NTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgey8qIFN1YnNjcmlwdGlvbiBCYWRnZSAqL31cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZEhlYWRlcjo3Nzo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmJsb2NrXCI+XG4gICAgICAgICAge2dldFN1YnNjcmlwdGlvbkJhZGdlKCl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBWaWV3IE1lbnUgTGluayAqL31cbiAgICAgICAge3Jlc3RhdXJhbnQgJiZcbiAgICAgICAgPExpbmsgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9EYXNoYm9hcmRIZWFkZXI6ODM6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICB0bz17Y3JlYXRlUGFnZVVybChgQ3VzdG9tZXJNZW51P3I9JHtyZXN0YXVyYW50LnJlc3RhdXJhbnRfaWR9YCl9XG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBzbTpmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXNtIHRleHQtdmlvbGV0LTYwMCBob3Zlcjp0ZXh0LXZpb2xldC03MDBcIj5cblxuICAgICAgICAgICAgVmlldyBNZW51XG4gICAgICAgICAgICA8RXh0ZXJuYWxMaW5rIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkSGVhZGVyOjg5OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMyBoLTNcIiAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgfVxuXG4gICAgICAgIHsvKiBOb3RpZmljYXRpb25zICovfVxuICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkSGVhZGVyOjk0OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdmFyaWFudD1cImdob3N0XCIgc2l6ZT1cImljb25cIiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIDxCZWxsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkSGVhZGVyOjk1OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1ncmF5LTYwMFwiIC8+XG4gICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9EYXNoYm9hcmRIZWFkZXI6OTY6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEgcmlnaHQtMSB3LTIgaC0yIGJnLXJlZC01MDAgcm91bmRlZC1mdWxsXCIgLz5cbiAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgey8qIFVzZXIgTWVudSAqL31cbiAgICAgICAgPERyb3Bkb3duTWVudSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZEhlYWRlcjoxMDA6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgIDxEcm9wZG93bk1lbnVUcmlnZ2VyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkSGVhZGVyOjEwMToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGFzQ2hpbGQ+XG4gICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkSGVhZGVyOjEwMjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHZhcmlhbnQ9XCJnaG9zdFwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZEhlYWRlcjoxMDM6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ3LTggaC04IHJvdW5kZWQtZnVsbCBiZy1ncmFkaWVudC10by1iciBmcm9tLXZpb2xldC02MDAgdG8taW5kaWdvLTYwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXdoaXRlIHRleHQtc20gZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICB7dXNlcj8uZnVsbF9uYW1lPy5bMF0gfHwgdXNlcj8uZW1haWw/LlswXSB8fCAnVSd9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkSGVhZGVyOjEwNjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9jayB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZEhlYWRlcjoxMDc6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj57dXNlcj8uZnVsbF9uYW1lIHx8ICdVc2VyJ308L3A+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9EYXNoYm9hcmRIZWFkZXI6MTA4OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiPkFkbWluPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPENoZXZyb25Eb3duIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkSGVhZGVyOjExMDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtZ3JheS00MDBcIiAvPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Ecm9wZG93bk1lbnVUcmlnZ2VyPlxuICAgICAgICAgIDxEcm9wZG93bk1lbnVDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkSGVhZGVyOjExMzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGFsaWduPVwiZW5kXCIgY2xhc3NOYW1lPVwidy01NlwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZEhlYWRlcjoxMTQ6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJweC0yIHB5LTEuNVwiPlxuICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZEhlYWRlcjoxMTU6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJmdWxsX25hbWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17dXNlcj8uaWQgfHwgdXNlcj8uX2lkfT57dXNlcj8uZnVsbF9uYW1lfTwvcD5cbiAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9EYXNoYm9hcmRIZWFkZXI6MTE2OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJlbWFpbFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXt1c2VyPy5pZCB8fCB1c2VyPy5faWR9Pnt1c2VyPy5lbWFpbH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnVTZXBhcmF0b3IgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9EYXNoYm9hcmRIZWFkZXI6MTE4OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+XG4gICAgICAgICAgICA8RHJvcGRvd25NZW51SXRlbSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZEhlYWRlcjoxMTk6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBhc0NoaWxkPlxuICAgICAgICAgICAgICA8TGluayBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZEhlYWRlcjoxMjA6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB0bz17Y3JlYXRlUGFnZVVybChcIlJlc3RhdXJhbnRTZXR0aW5nc1wiKX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8U2V0dGluZ3MgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9EYXNoYm9hcmRIZWFkZXI6MTIxOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgIFJlc3RhdXJhbnQgU2V0dGluZ3NcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVJdGVtPlxuICAgICAgICAgICAgPERyb3Bkb3duTWVudVNlcGFyYXRvciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZEhlYWRlcjoxMjU6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz5cbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnVJdGVtIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkSGVhZGVyOjEyNjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0gY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgIDxMb2dPdXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9EYXNoYm9hcmRIZWFkZXI6MTI3OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgbXItMlwiIC8+XG4gICAgICAgICAgICAgIExvZyBvdXRcbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51SXRlbT5cbiAgICAgICAgICA8L0Ryb3Bkb3duTWVudUNvbnRlbnQ+XG4gICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+KTtcblxufSJdLCJmaWxlIjoiL2FwcC9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkSGVhZGVyLmpzeCJ9