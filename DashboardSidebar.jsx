import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/dashboard/DashboardSidebar.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/dashboard/DashboardSidebar.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { Link, useLocation } from "/node_modules/.vite/deps/react-router-dom.js?v=79425e35";
import { createPageUrl } from "/src/utils/index.ts";
import { base44 } from "/src/api/base44Client.js";
import {
  LayoutDashboard,
  Menu,
  ShoppingBag,
  Users,
  BarChart3,
  Settings,
  QrCode,
  CreditCard,
  LogOut,
  ChevronLeft,
  Store,
  X
} from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
import { Button } from "/src/components/ui/button.jsx";
const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, page: "Dashboard" },
  { name: "Menu", icon: Menu, page: "MenuManagement" },
  { name: "Orders", icon: ShoppingBag, page: "Orders" },
  { name: "Customers", icon: Users, page: "Customers" },
  { name: "Analytics", icon: BarChart3, page: "Analytics" },
  { name: "QR Codes", icon: QrCode, page: "QRCodes" },
  { name: "Billing", icon: CreditCard, page: "Billing" },
  { name: "Settings", icon: Settings, page: "RestaurantSettings" }
];
export default function DashboardSidebar({ restaurant, isOpen, onClose, isCollapsed, onToggleCollapse }) {
  _s();
  const location = useLocation();
  const currentPage = location.pathname.split("/").pop()?.replace(".jsx", "");
  const handleLogout = async () => {
    await base44.auth.logout(createPageUrl("Home"));
  };
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    isOpen && /* @__PURE__ */ jsxDEV(
      "div",
      {
        "data-source-location": "components/dashboard/DashboardSidebar:36:8",
        "data-dynamic-content": "true",
        className: "fixed inset-0 bg-black/50 z-40 lg:hidden",
        onClick: onClose
      },
      void 0,
      false,
      {
        fileName: "/app/src/components/dashboard/DashboardSidebar.jsx",
        lineNumber: 55,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("aside", { "data-source-location": "components/dashboard/DashboardSidebar:43:6", "data-dynamic-content": "true", className: `
        fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-50
        transition-all duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        ${isCollapsed ? "w-20" : "w-64"}
      `, children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/DashboardSidebar:50:8", "data-dynamic-content": "true", className: `h-16 flex items-center border-b border-gray-100 ${isCollapsed ? "px-4 justify-center" : "px-6 justify-between"}`, children: [
        !isCollapsed && /* @__PURE__ */ jsxDEV(Link, { "data-source-location": "components/dashboard/DashboardSidebar:52:12", "data-dynamic-content": "true", to: createPageUrl("Home"), className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/DashboardSidebar:53:14", "data-dynamic-content": "false", className: "w-9 h-9 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/DashboardSidebar:54:16", "data-dynamic-content": "false", className: "text-white font-bold", children: "A" }, void 0, false, {
            fileName: "/app/src/components/dashboard/DashboardSidebar.jsx",
            lineNumber: 73,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/DashboardSidebar.jsx",
            lineNumber: 72,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/DashboardSidebar:56:14", "data-dynamic-content": "false", className: "text-lg font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent", children: "AxoraDigi" }, void 0, false, {
            fileName: "/app/src/components/dashboard/DashboardSidebar.jsx",
            lineNumber: 75,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/DashboardSidebar.jsx",
          lineNumber: 71,
          columnNumber: 11
        }, this),
        isCollapsed && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/DashboardSidebar:63:12", "data-dynamic-content": "false", className: "w-9 h-9 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/DashboardSidebar:64:14", "data-dynamic-content": "false", className: "text-white font-bold", children: "A" }, void 0, false, {
          fileName: "/app/src/components/dashboard/DashboardSidebar.jsx",
          lineNumber: 83,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/src/components/dashboard/DashboardSidebar.jsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            "data-source-location": "components/dashboard/DashboardSidebar:69:10",
            "data-dynamic-content": "true",
            className: "lg:hidden p-2 hover:bg-gray-100 rounded-lg",
            onClick: onClose,
            children: /* @__PURE__ */ jsxDEV(X, { "data-source-location": "components/dashboard/DashboardSidebar:73:12", "data-dynamic-content": "false", className: "w-5 h-5" }, void 0, false, {
              fileName: "/app/src/components/dashboard/DashboardSidebar.jsx",
              lineNumber: 92,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/app/src/components/dashboard/DashboardSidebar.jsx",
            lineNumber: 88,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            "data-source-location": "components/dashboard/DashboardSidebar:77:10",
            "data-dynamic-content": "true",
            className: "hidden lg:flex p-2 hover:bg-gray-100 rounded-lg",
            onClick: onToggleCollapse,
            children: /* @__PURE__ */ jsxDEV(ChevronLeft, { "data-source-location": "components/dashboard/DashboardSidebar:81:12", "data-dynamic-content": "true", className: `w-5 h-5 transition-transform ${isCollapsed ? "rotate-180" : ""}` }, void 0, false, {
              fileName: "/app/src/components/dashboard/DashboardSidebar.jsx",
              lineNumber: 100,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/app/src/components/dashboard/DashboardSidebar.jsx",
            lineNumber: 96,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/DashboardSidebar.jsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      restaurant && !isCollapsed && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/DashboardSidebar:87:10", "data-dynamic-content": "true", className: "p-4 border-b border-gray-100", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/DashboardSidebar:88:12", "data-dynamic-content": "true", className: "flex items-center gap-3 p-3 bg-gray-50 rounded-xl", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/DashboardSidebar:89:14", "data-dynamic-content": "false", className: "w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Store, { "data-source-location": "components/dashboard/DashboardSidebar:90:16", "data-dynamic-content": "false", className: "w-5 h-5 text-orange-600" }, void 0, false, {
          fileName: "/app/src/components/dashboard/DashboardSidebar.jsx",
          lineNumber: 109,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/src/components/dashboard/DashboardSidebar.jsx",
          lineNumber: 108,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/DashboardSidebar:92:14", "data-dynamic-content": "true", className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/DashboardSidebar:93:16", "data-dynamic-content": "true", className: "font-medium text-gray-900 truncate", "data-collection-item-field": "name", "data-collection-item-id": restaurant?.id || restaurant?._id, children: restaurant.name }, void 0, false, {
            fileName: "/app/src/components/dashboard/DashboardSidebar.jsx",
            lineNumber: 112,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/DashboardSidebar:94:16", "data-dynamic-content": "true", className: "text-xs text-gray-500", "data-collection-item-field": "restaurant_id", "data-collection-item-id": restaurant?.id || restaurant?._id, children: restaurant.restaurant_id }, void 0, false, {
            fileName: "/app/src/components/dashboard/DashboardSidebar.jsx",
            lineNumber: 113,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/DashboardSidebar.jsx",
          lineNumber: 111,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/DashboardSidebar.jsx",
        lineNumber: 107,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/src/components/dashboard/DashboardSidebar.jsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("nav", { "data-source-location": "components/dashboard/DashboardSidebar:101:8", "data-dynamic-content": "true", className: "p-4 space-y-1 flex-1 overflow-y-auto", children: menuItems.map((item, __arrIdx__) => {
        const isActive = currentPage === item.page;
        return /* @__PURE__ */ jsxDEV(
          Link,
          {
            "data-source-location": "components/dashboard/DashboardSidebar:105:14",
            "data-dynamic-content": "true",
            to: createPageUrl(item.page),
            onClick: onClose,
            className: `
                  flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all
                  ${isActive ? "bg-orange-100 text-orange-700" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}
                  ${isCollapsed ? "justify-center" : ""}
                `,
            "data-arr-index": __arrIdx__,
            "data-arr-variable-name": "menuItems",
            children: [
              /* @__PURE__ */ jsxDEV(item.icon, { "data-source-location": "components/dashboard/DashboardSidebar:118:16", "data-dynamic-content": "true", className: `w-5 h-5 ${isActive ? "text-orange-600" : ""}` }, void 0, false, {
                fileName: "/app/src/components/dashboard/DashboardSidebar.jsx",
                lineNumber: 137,
                columnNumber: 17
              }, this),
              !isCollapsed && /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/DashboardSidebar:120:18", "data-dynamic-content": "true", className: "font-medium", children: item.name }, void 0, false, {
                fileName: "/app/src/components/dashboard/DashboardSidebar.jsx",
                lineNumber: 139,
                columnNumber: 17
              }, this)
            ]
          },
          item.page,
          true,
          {
            fileName: "/app/src/components/dashboard/DashboardSidebar.jsx",
            lineNumber: 124,
            columnNumber: 15
          },
          this
        );
      }) }, void 0, false, {
        fileName: "/app/src/components/dashboard/DashboardSidebar.jsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/DashboardSidebar:128:8", "data-dynamic-content": "true", className: "p-4 border-t border-gray-100", children: /* @__PURE__ */ jsxDEV(
        "button",
        {
          "data-source-location": "components/dashboard/DashboardSidebar:129:10",
          "data-dynamic-content": "true",
          onClick: handleLogout,
          className: `
              flex items-center gap-3 px-3 py-2.5 rounded-xl w-full
              text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all
              ${isCollapsed ? "justify-center" : ""}
            `,
          children: [
            /* @__PURE__ */ jsxDEV(LogOut, { "data-source-location": "components/dashboard/DashboardSidebar:137:12", "data-dynamic-content": "false", className: "w-5 h-5" }, void 0, false, {
              fileName: "/app/src/components/dashboard/DashboardSidebar.jsx",
              lineNumber: 156,
              columnNumber: 13
            }, this),
            !isCollapsed && /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/DashboardSidebar:138:29", "data-dynamic-content": "false", className: "font-medium", children: "Logout" }, void 0, false, {
              fileName: "/app/src/components/dashboard/DashboardSidebar.jsx",
              lineNumber: 157,
              columnNumber: 30
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/src/components/dashboard/DashboardSidebar.jsx",
          lineNumber: 148,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "/app/src/components/dashboard/DashboardSidebar.jsx",
        lineNumber: 147,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/DashboardSidebar.jsx",
      lineNumber: 62,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/dashboard/DashboardSidebar.jsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}
_s(DashboardSidebar, "pkHmaVRPskBaU4tMJuJJpV42k1I=", false, function() {
  return [useLocation];
});
_c = DashboardSidebar;
var _c;
$RefreshReg$(_c, "DashboardSidebar");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/dashboard/DashboardSidebar.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/dashboard/DashboardSidebar.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUVKO0FBQUNFLEdBekh1Qk4sa0JBQWdCO0FBQUEsVUFDckJwQixXQUFXO0FBQUE7QUFBQTJDLEtBRE52QjtBQUFnQixJQUFBdUI7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsInVzZUxvY2F0aW9uIiwiY3JlYXRlUGFnZVVybCIsImJhc2U0NCIsIkxheW91dERhc2hib2FyZCIsIk1lbnUiLCJTaG9wcGluZ0JhZyIsIlVzZXJzIiwiQmFyQ2hhcnQzIiwiU2V0dGluZ3MiLCJRckNvZGUiLCJDcmVkaXRDYXJkIiwiTG9nT3V0IiwiQ2hldnJvbkxlZnQiLCJTdG9yZSIsIlgiLCJCdXR0b24iLCJtZW51SXRlbXMiLCJuYW1lIiwiaWNvbiIsInBhZ2UiLCJEYXNoYm9hcmRTaWRlYmFyIiwicmVzdGF1cmFudCIsImlzT3BlbiIsIm9uQ2xvc2UiLCJpc0NvbGxhcHNlZCIsIm9uVG9nZ2xlQ29sbGFwc2UiLCJfcyIsImxvY2F0aW9uIiwiY3VycmVudFBhZ2UiLCJwYXRobmFtZSIsInNwbGl0IiwicG9wIiwicmVwbGFjZSIsImhhbmRsZUxvZ291dCIsImF1dGgiLCJsb2dvdXQiLCJpZCIsIl9pZCIsInJlc3RhdXJhbnRfaWQiLCJtYXAiLCJpdGVtIiwiX19hcnJJZHhfXyIsImlzQWN0aXZlIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiRGFzaGJvYXJkU2lkZWJhci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluaywgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgY3JlYXRlUGFnZVVybCB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgYmFzZTQ0IH0gZnJvbSBcIkAvYXBpL2Jhc2U0NENsaWVudFwiO1xuaW1wb3J0IHtcbiAgTGF5b3V0RGFzaGJvYXJkLCBNZW51LCBTaG9wcGluZ0JhZywgVXNlcnMsXG4gIEJhckNoYXJ0MywgU2V0dGluZ3MsIFFyQ29kZSwgQ3JlZGl0Q2FyZCxcbiAgTG9nT3V0LCBDaGV2cm9uTGVmdCwgU3RvcmUsIFggfSBmcm9tXG5cImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcblxuY29uc3QgbWVudUl0ZW1zID0gW1xueyBuYW1lOiBcIkRhc2hib2FyZFwiLCBpY29uOiBMYXlvdXREYXNoYm9hcmQsIHBhZ2U6IFwiRGFzaGJvYXJkXCIgfSxcbnsgbmFtZTogXCJNZW51XCIsIGljb246IE1lbnUsIHBhZ2U6IFwiTWVudU1hbmFnZW1lbnRcIiB9LFxueyBuYW1lOiBcIk9yZGVyc1wiLCBpY29uOiBTaG9wcGluZ0JhZywgcGFnZTogXCJPcmRlcnNcIiB9LFxueyBuYW1lOiBcIkN1c3RvbWVyc1wiLCBpY29uOiBVc2VycywgcGFnZTogXCJDdXN0b21lcnNcIiB9LFxueyBuYW1lOiBcIkFuYWx5dGljc1wiLCBpY29uOiBCYXJDaGFydDMsIHBhZ2U6IFwiQW5hbHl0aWNzXCIgfSxcbnsgbmFtZTogXCJRUiBDb2Rlc1wiLCBpY29uOiBRckNvZGUsIHBhZ2U6IFwiUVJDb2Rlc1wiIH0sXG57IG5hbWU6IFwiQmlsbGluZ1wiLCBpY29uOiBDcmVkaXRDYXJkLCBwYWdlOiBcIkJpbGxpbmdcIiB9LFxueyBuYW1lOiBcIlNldHRpbmdzXCIsIGljb246IFNldHRpbmdzLCBwYWdlOiBcIlJlc3RhdXJhbnRTZXR0aW5nc1wiIH1dO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZFNpZGViYXIoeyByZXN0YXVyYW50LCBpc09wZW4sIG9uQ2xvc2UsIGlzQ29sbGFwc2VkLCBvblRvZ2dsZUNvbGxhcHNlIH0pIHtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuXG4gIGNvbnN0IGN1cnJlbnRQYWdlID0gbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKS5wb3AoKT8ucmVwbGFjZSgnLmpzeCcsICcnKTtcblxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgYmFzZTQ0LmF1dGgubG9nb3V0KGNyZWF0ZVBhZ2VVcmwoXCJIb21lXCIpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogTW9iaWxlIE92ZXJsYXkgKi99XG4gICAgICB7aXNPcGVuICYmXG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkU2lkZWJhcjozNjo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgYmctYmxhY2svNTAgei00MCBsZzpoaWRkZW5cIlxuICAgICAgb25DbGljaz17b25DbG9zZX0gLz5cblxuICAgICAgfVxuXG4gICAgICB7LyogU2lkZWJhciAqL31cbiAgICAgIDxhc2lkZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZFNpZGViYXI6NDM6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YFxuICAgICAgICBmaXhlZCB0b3AtMCBsZWZ0LTAgaC1mdWxsIGJnLXdoaXRlIGJvcmRlci1yIGJvcmRlci1ncmF5LTIwMCB6LTUwXG4gICAgICAgIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dFxuICAgICAgICAke2lzT3BlbiA/ICd0cmFuc2xhdGUteC0wJyA6ICctdHJhbnNsYXRlLXgtZnVsbCBsZzp0cmFuc2xhdGUteC0wJ31cbiAgICAgICAgJHtpc0NvbGxhcHNlZCA/ICd3LTIwJyA6ICd3LTY0J31cbiAgICAgIGB9PlxuICAgICAgICB7LyogSGVhZGVyICovfVxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkU2lkZWJhcjo1MDo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgaC0xNiBmbGV4IGl0ZW1zLWNlbnRlciBib3JkZXItYiBib3JkZXItZ3JheS0xMDAgJHtpc0NvbGxhcHNlZCA/ICdweC00IGp1c3RpZnktY2VudGVyJyA6ICdweC02IGp1c3RpZnktYmV0d2Vlbid9YH0+XG4gICAgICAgICAgeyFpc0NvbGxhcHNlZCAmJlxuICAgICAgICAgIDxMaW5rIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkU2lkZWJhcjo1MjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHRvPXtjcmVhdGVQYWdlVXJsKFwiSG9tZVwiKX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZFNpZGViYXI6NTM6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy05IGgtOSBiZy1ncmFkaWVudC10by1iciBmcm9tLW9yYW5nZS02MDAgdG8tb3JhbmdlLTUwMCByb3VuZGVkLXhsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9EYXNoYm9hcmRTaWRlYmFyOjU0OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkXCI+QTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkU2lkZWJhcjo1NjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCBiZy1ncmFkaWVudC10by1yIGZyb20tb3JhbmdlLTYwMCB0by1vcmFuZ2UtNTAwIGJnLWNsaXAtdGV4dCB0ZXh0LXRyYW5zcGFyZW50XCI+XG4gICAgICAgICAgICAgICAgQXhvcmFEaWdpXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAge2lzQ29sbGFwc2VkICYmXG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZFNpZGViYXI6NjM6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy05IGgtOSBiZy1ncmFkaWVudC10by1iciBmcm9tLW9yYW5nZS02MDAgdG8tb3JhbmdlLTUwMCByb3VuZGVkLXhsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkU2lkZWJhcjo2NDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiPkE8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB7LyogTW9iaWxlIENsb3NlICovfVxuICAgICAgICAgIDxidXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9EYXNoYm9hcmRTaWRlYmFyOjY5OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJsZzpoaWRkZW4gcC0yIGhvdmVyOmJnLWdyYXktMTAwIHJvdW5kZWQtbGdcIlxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9PlxuXG4gICAgICAgICAgICA8WCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZFNpZGViYXI6NzM6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICB7LyogRGVza3RvcCBDb2xsYXBzZSBUb2dnbGUgKi99XG4gICAgICAgICAgPGJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZFNpZGViYXI6Nzc6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBsZzpmbGV4IHAtMiBob3ZlcjpiZy1ncmF5LTEwMCByb3VuZGVkLWxnXCJcbiAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZUNvbGxhcHNlfT5cblxuICAgICAgICAgICAgPENoZXZyb25MZWZ0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkU2lkZWJhcjo4MToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YHctNSBoLTUgdHJhbnNpdGlvbi10cmFuc2Zvcm0gJHtpc0NvbGxhcHNlZCA/ICdyb3RhdGUtMTgwJyA6ICcnfWB9IC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBSZXN0YXVyYW50IEluZm8gKi99XG4gICAgICAgIHtyZXN0YXVyYW50ICYmICFpc0NvbGxhcHNlZCAmJlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkU2lkZWJhcjo4NzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtNCBib3JkZXItYiBib3JkZXItZ3JheS0xMDBcIj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9EYXNoYm9hcmRTaWRlYmFyOjg4OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcC0zIGJnLWdyYXktNTAgcm91bmRlZC14bFwiPlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkU2lkZWJhcjo4OToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgYmctb3JhbmdlLTEwMCByb3VuZGVkLWxnIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPFN0b3JlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkU2lkZWJhcjo5MDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtb3JhbmdlLTYwMFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkU2lkZWJhcjo5MjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXgtMSBtaW4tdy0wXCI+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9EYXNoYm9hcmRTaWRlYmFyOjkzOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCB0cnVuY2F0ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwibmFtZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyZXN0YXVyYW50Py5pZCB8fCByZXN0YXVyYW50Py5faWR9PntyZXN0YXVyYW50Lm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkU2lkZWJhcjo5NDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicmVzdGF1cmFudF9pZFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyZXN0YXVyYW50Py5pZCB8fCByZXN0YXVyYW50Py5faWR9PntyZXN0YXVyYW50LnJlc3RhdXJhbnRfaWR9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG5cbiAgICAgICAgey8qIE5hdmlnYXRpb24gKi99XG4gICAgICAgIDxuYXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9EYXNoYm9hcmRTaWRlYmFyOjEwMTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicC00IHNwYWNlLXktMSBmbGV4LTEgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAge21lbnVJdGVtcy5tYXAoKGl0ZW0sIF9fYXJySWR4X18pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gY3VycmVudFBhZ2UgPT09IGl0ZW0ucGFnZTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxMaW5rIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkU2lkZWJhcjoxMDU6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICBrZXk9e2l0ZW0ucGFnZX1cbiAgICAgICAgICAgICAgdG89e2NyZWF0ZVBhZ2VVcmwoaXRlbS5wYWdlKX1cbiAgICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgXG4gICAgICAgICAgICAgICAgICBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBweC0zIHB5LTIuNSByb3VuZGVkLXhsIHRyYW5zaXRpb24tYWxsXG4gICAgICAgICAgICAgICAgICAke2lzQWN0aXZlID9cbiAgICAgICAgICAgICAgJ2JnLW9yYW5nZS0xMDAgdGV4dC1vcmFuZ2UtNzAwJyA6XG4gICAgICAgICAgICAgICd0ZXh0LWdyYXktNjAwIGhvdmVyOmJnLWdyYXktMTAwIGhvdmVyOnRleHQtZ3JheS05MDAnfVxuICAgICAgICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgaXNDb2xsYXBzZWQgPyAnanVzdGlmeS1jZW50ZXInIDogJyd9XG4gICAgICAgICAgICAgICAgYH0gZGF0YS1hcnItaW5kZXg9e19fYXJySWR4X199IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJtZW51SXRlbXNcIj5cblxuICAgICAgICAgICAgICAgIDxpdGVtLmljb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9EYXNoYm9hcmRTaWRlYmFyOjExODoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YHctNSBoLTUgJHtpc0FjdGl2ZSA/ICd0ZXh0LW9yYW5nZS02MDAnIDogJyd9YH0gLz5cbiAgICAgICAgICAgICAgICB7IWlzQ29sbGFwc2VkICYmXG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9EYXNoYm9hcmRTaWRlYmFyOjEyMDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L0xpbms+KTtcblxuICAgICAgICAgIH0pfVxuICAgICAgICA8L25hdj5cblxuICAgICAgICB7LyogTG9nb3V0ICovfVxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkU2lkZWJhcjoxMjg6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtNCBib3JkZXItdCBib3JkZXItZ3JheS0xMDBcIj5cbiAgICAgICAgICA8YnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkU2lkZWJhcjoxMjk6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH1cbiAgICAgICAgICBjbGFzc05hbWU9e2BcbiAgICAgICAgICAgICAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcHgtMyBweS0yLjUgcm91bmRlZC14bCB3LWZ1bGxcbiAgICAgICAgICAgICAgdGV4dC1ncmF5LTYwMCBob3ZlcjpiZy1yZWQtNTAgaG92ZXI6dGV4dC1yZWQtNjAwIHRyYW5zaXRpb24tYWxsXG4gICAgICAgICAgICAgICR7aXNDb2xsYXBzZWQgPyAnanVzdGlmeS1jZW50ZXInIDogJyd9XG4gICAgICAgICAgICBgfT5cblxuICAgICAgICAgICAgPExvZ091dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZFNpZGViYXI6MTM3OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgeyFpc0NvbGxhcHNlZCAmJiA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZFNpZGViYXI6MTM4OjI5XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+TG9nb3V0PC9zcGFuPn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2FzaWRlPlxuICAgIDwvPik7XG5cbn0iXSwiZmlsZSI6Ii9hcHAvc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZFNpZGViYXIuanN4In0=