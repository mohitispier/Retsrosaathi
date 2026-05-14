import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/Layout.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/Layout.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useEffect = __vite__cjsImport3_react["useEffect"]; const useState = __vite__cjsImport3_react["useState"];
import { Link, useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=79425e35";
import { base44 } from "/src/api/base44Client.js";
const createPageUrl = (pageName) => `/${pageName}`;
import {
  Menu,
  X as CloseIcon,
  ChevronDown,
  LogOut,
  LayoutDashboard,
  Settings,
  User,
  Bell,
  Store
} from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
import { Button } from "/src/components/ui/button.jsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "/src/components/ui/dropdown-menu.jsx";
export default function Layout({ children, currentPageName, "data-collection-item-id": __dataCollectionItemId }) {
  _s();
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [restaurantData, setRestaurantData] = useState(null);
  const navigate = useNavigate();
  const noLayoutPages = ["CustomerMenu", "CustomerOrder"];
  const marketingPages = ["Home", "Pricing", "Contact", "Login", "Signup", "Features", "GetStarted"];
  const superAdminPages = ["SuperAdminDashboard", "SuperAdminSetup", "TeamChat", "SupportCenter"];
  const dashboardPages = [
    "Dashboard",
    "MenuManagement",
    "Orders",
    "Customers",
    "Analytics",
    "RestaurantSettings",
    "QRCodes",
    "Billing"
  ];
  useEffect(() => {
    loadUser();
  }, []);
  useEffect(() => {
    if (dashboardPages.includes(currentPageName)) {
      const preventBack = (e) => {
        window.history.pushState(null, null, window.location.pathname);
      };
      window.history.pushState(null, null, window.location.pathname);
      window.addEventListener("popstate", preventBack);
      return () => {
        window.removeEventListener("popstate", preventBack);
      };
    }
  }, [currentPageName]);
  const loadUser = async () => {
    try {
      const isAuth = await base44.auth.isAuthenticated();
      if (isAuth) {
        const userData = await base44.auth.me();
        setUser(userData);
        if (userData?.restaurant_id) {
          const restaurants = await base44.entities.Restaurant.filter({
            restaurant_id: userData.restaurant_id
          });
          if (restaurants.length > 0) {
            setRestaurantData(restaurants[0]);
          }
        }
      }
    } catch (e) {
      console.log("Not authenticated");
    }
  };
  const handleLogout = async () => {
    await base44.auth.logout();
  };
  if (noLayoutPages.includes(currentPageName) || superAdminPages.includes(currentPageName)) {
    return /* @__PURE__ */ jsxDEV(Fragment, { children }, void 0, false, {
      fileName: "/app/src/Layout.jsx",
      lineNumber: 107,
      columnNumber: 12
    }, this);
  }
  if (marketingPages.includes(currentPageName)) {
    return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "Layout:94:6", "data-dynamic-content": "true", className: "min-h-screen bg-white", "data-collection-item-id": __dataCollectionItemId, children: [
      /* @__PURE__ */ jsxDEV("style", { "data-source-location": "Layout:95:8", "data-dynamic-content": "false", children: `
          :root {
            --primary: 24 95% 53%;
            --primary-foreground: 0 0% 100%;
            --accent: 33 100% 50%;
          }
        ` }, void 0, false, {
        fileName: "/app/src/Layout.jsx",
        lineNumber: 114,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("header", { "data-source-location": "Layout:104:8", "data-dynamic-content": "true", className: "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "Layout:105:10", "data-dynamic-content": "true", className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "Layout:106:12", "data-dynamic-content": "true", className: "flex items-center justify-between h-16", children: [
          /* @__PURE__ */ jsxDEV(Link, { "data-source-location": "Layout:108:14", "data-dynamic-content": "true", to: createPageUrl("Home"), className: "flex items-center gap-2", children: /* @__PURE__ */ jsxDEV("span", { "data-source-location": "Layout:112:16", "data-dynamic-content": "false", className: "text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent", children: "RestroSaathi" }, void 0, false, {
            fileName: "/app/src/Layout.jsx",
            lineNumber: 131,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/src/Layout.jsx",
            lineNumber: 127,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("nav", { "data-source-location": "Layout:118:14", "data-dynamic-content": "true", className: "hidden md:flex items-center gap-8", children: [
            /* @__PURE__ */ jsxDEV(
              Link,
              {
                "data-source-location": "Layout:119:16",
                "data-dynamic-content": "true",
                to: createPageUrl("Home"),
                className: "text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium",
                onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
                children: "Home"
              },
              void 0,
              false,
              {
                fileName: "/app/src/Layout.jsx",
                lineNumber: 138,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              Link,
              {
                "data-source-location": "Layout:126:16",
                "data-dynamic-content": "true",
                to: createPageUrl("Features"),
                className: "text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium",
                onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
                children: "Features"
              },
              void 0,
              false,
              {
                fileName: "/app/src/Layout.jsx",
                lineNumber: 145,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              Link,
              {
                "data-source-location": "Layout:133:16",
                "data-dynamic-content": "true",
                to: createPageUrl("Pricing"),
                className: "text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium",
                onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
                children: "Pricing"
              },
              void 0,
              false,
              {
                fileName: "/app/src/Layout.jsx",
                lineNumber: 152,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              Link,
              {
                "data-source-location": "Layout:140:16",
                "data-dynamic-content": "true",
                to: createPageUrl("Contact"),
                className: "text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium",
                onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
                children: "Contact"
              },
              void 0,
              false,
              {
                fileName: "/app/src/Layout.jsx",
                lineNumber: 159,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/src/Layout.jsx",
            lineNumber: 137,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "Layout:150:14", "data-dynamic-content": "true", className: "hidden md:flex items-center gap-3", children: user ? /* @__PURE__ */ jsxDEV(DropdownMenu, { "data-source-location": "Layout:152:16", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV(DropdownMenuTrigger, { "data-source-location": "Layout:153:20", "data-dynamic-content": "true", asChild: true, children: /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "Layout:154:22", "data-dynamic-content": "true", variant: "ghost", className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "Layout:155:24", "data-dynamic-content": "true", className: "w-8 h-8 rounded-full bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center text-white text-sm font-medium", children: user.full_name?.[0] || user.email?.[0] }, void 0, false, {
                fileName: "/app/src/Layout.jsx",
                lineNumber: 174,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV(ChevronDown, { "data-source-location": "Layout:158:24", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                fileName: "/app/src/Layout.jsx",
                lineNumber: 177,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/Layout.jsx",
              lineNumber: 173,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "/app/src/Layout.jsx",
              lineNumber: 172,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV(DropdownMenuContent, { "data-source-location": "Layout:161:20", "data-dynamic-content": "true", align: "end", className: "w-56", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "Layout:162:22", "data-dynamic-content": "true", className: "px-2 py-1.5", children: [
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "Layout:163:24", "data-dynamic-content": "true", className: "text-sm font-medium", "data-collection-item-field": "full_name", "data-collection-item-id": user?.id || user?._id, children: user.full_name }, void 0, false, {
                  fileName: "/app/src/Layout.jsx",
                  lineNumber: 182,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "Layout:164:24", "data-dynamic-content": "true", className: "text-xs text-gray-500", "data-collection-item-field": "email", "data-collection-item-id": user?.id || user?._id, children: user.email }, void 0, false, {
                  fileName: "/app/src/Layout.jsx",
                  lineNumber: 183,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/Layout.jsx",
                lineNumber: 181,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV(DropdownMenuSeparator, { "data-source-location": "Layout:166:22", "data-dynamic-content": "false" }, void 0, false, {
                fileName: "/app/src/Layout.jsx",
                lineNumber: 185,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV(DropdownMenuItem, { "data-source-location": "Layout:167:22", "data-dynamic-content": "true", asChild: true, children: /* @__PURE__ */ jsxDEV(
                Link,
                {
                  "data-source-location": "Layout:168:24",
                  "data-dynamic-content": "true",
                  to: createPageUrl(user?.role === "admin" ? "SuperAdminDashboard" : "Dashboard"),
                  className: "flex items-center gap-2 cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxDEV(LayoutDashboard, { "data-source-location": "Layout:172:26", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                      fileName: "/app/src/Layout.jsx",
                      lineNumber: 191,
                      columnNumber: 27
                    }, this),
                    "Dashboard"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/src/Layout.jsx",
                  lineNumber: 187,
                  columnNumber: 25
                },
                this
              ) }, void 0, false, {
                fileName: "/app/src/Layout.jsx",
                lineNumber: 186,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV(DropdownMenuSeparator, { "data-source-location": "Layout:176:22", "data-dynamic-content": "false" }, void 0, false, {
                fileName: "/app/src/Layout.jsx",
                lineNumber: 195,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV(DropdownMenuItem, { "data-source-location": "Layout:177:22", "data-dynamic-content": "true", onClick: handleLogout, className: "text-red-600 cursor-pointer", children: [
                /* @__PURE__ */ jsxDEV(LogOut, { "data-source-location": "Layout:178:24", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
                  fileName: "/app/src/Layout.jsx",
                  lineNumber: 197,
                  columnNumber: 25
                }, this),
                "Log out"
              ] }, void 0, true, {
                fileName: "/app/src/Layout.jsx",
                lineNumber: 196,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/Layout.jsx",
              lineNumber: 180,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/Layout.jsx",
            lineNumber: 171,
            columnNumber: 17
          }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV(
              Button,
              {
                "data-source-location": "Layout:185:20",
                "data-dynamic-content": "true",
                variant: "ghost",
                className: "text-gray-700",
                onClick: () => {
                  window.location.href = createPageUrl("GetStarted");
                },
                children: "Log in"
              },
              void 0,
              false,
              {
                fileName: "/app/src/Layout.jsx",
                lineNumber: 204,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(Link, { "data-source-location": "Layout:194:20", "data-dynamic-content": "true", to: createPageUrl("GetStarted"), children: /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "Layout:195:22", "data-dynamic-content": "false", className: "bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white", children: "Start Free Trial" }, void 0, false, {
              fileName: "/app/src/Layout.jsx",
              lineNumber: 214,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "/app/src/Layout.jsx",
              lineNumber: 213,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/Layout.jsx",
            lineNumber: 203,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/src/Layout.jsx",
            lineNumber: 169,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              "data-source-location": "Layout:204:14",
              "data-dynamic-content": "true",
              className: "md:hidden p-2",
              onClick: () => setIsMenuOpen(!isMenuOpen),
              children: isMenuOpen ? /* @__PURE__ */ jsxDEV(CloseIcon, { "data-source-location": "Layout:208:30", "data-dynamic-content": "false", className: "w-6 h-6" }, void 0, false, {
                fileName: "/app/src/Layout.jsx",
                lineNumber: 227,
                columnNumber: 31
              }, this) : /* @__PURE__ */ jsxDEV(Menu, { "data-source-location": "Layout:208:66", "data-dynamic-content": "false", className: "w-6 h-6" }, void 0, false, {
                fileName: "/app/src/Layout.jsx",
                lineNumber: 227,
                columnNumber: 133
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/app/src/Layout.jsx",
              lineNumber: 223,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/src/Layout.jsx",
          lineNumber: 125,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/src/Layout.jsx",
          lineNumber: 124,
          columnNumber: 11
        }, this),
        isMenuOpen && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "Layout:215:10", "data-dynamic-content": "true", className: "md:hidden bg-white border-t border-gray-100 py-4 px-4", children: /* @__PURE__ */ jsxDEV("nav", { "data-source-location": "Layout:216:14", "data-dynamic-content": "true", className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              "data-source-location": "Layout:217:16",
              "data-dynamic-content": "true",
              to: createPageUrl("Home"),
              className: "text-gray-600 hover:text-gray-900",
              onClick: () => {
                setIsMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              },
              children: "Home"
            },
            void 0,
            false,
            {
              fileName: "/app/src/Layout.jsx",
              lineNumber: 236,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              "data-source-location": "Layout:227:16",
              "data-dynamic-content": "true",
              to: createPageUrl("Features"),
              className: "text-gray-600 hover:text-gray-900",
              onClick: () => {
                setIsMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              },
              children: "Features"
            },
            void 0,
            false,
            {
              fileName: "/app/src/Layout.jsx",
              lineNumber: 246,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              "data-source-location": "Layout:237:16",
              "data-dynamic-content": "true",
              to: createPageUrl("Pricing"),
              className: "text-gray-600 hover:text-gray-900",
              onClick: () => {
                setIsMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              },
              children: "Pricing"
            },
            void 0,
            false,
            {
              fileName: "/app/src/Layout.jsx",
              lineNumber: 256,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              "data-source-location": "Layout:247:16",
              "data-dynamic-content": "true",
              to: createPageUrl("Contact"),
              className: "text-gray-600 hover:text-gray-900",
              onClick: () => {
                setIsMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              },
              children: "Contact"
            },
            void 0,
            false,
            {
              fileName: "/app/src/Layout.jsx",
              lineNumber: 266,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "Layout:257:16", "data-dynamic-content": "true", className: "flex flex-col gap-2 pt-4 border-t", children: user ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV(
              Link,
              {
                "data-source-location": "Layout:260:22",
                "data-dynamic-content": "true",
                to: createPageUrl(user?.role === "admin" && !user?.restaurant_id ? "SuperAdminDashboard" : "Dashboard"),
                onClick: () => {
                  setIsMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                },
                children: /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "Layout:267:24", "data-dynamic-content": "false", className: "w-full", children: "Dashboard" }, void 0, false, {
                  fileName: "/app/src/Layout.jsx",
                  lineNumber: 286,
                  columnNumber: 25
                }, this)
              },
              void 0,
              false,
              {
                fileName: "/app/src/Layout.jsx",
                lineNumber: 279,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "Layout:269:22", "data-dynamic-content": "true", variant: "outline", onClick: handleLogout, children: "Log out" }, void 0, false, {
              fileName: "/app/src/Layout.jsx",
              lineNumber: 288,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/Layout.jsx",
            lineNumber: 278,
            columnNumber: 17
          }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV(
              Button,
              {
                "data-source-location": "Layout:273:22",
                "data-dynamic-content": "true",
                variant: "outline",
                className: "w-full",
                onClick: () => {
                  setIsMenuOpen(false);
                  window.location.href = createPageUrl("GetStarted");
                },
                children: "Log in"
              },
              void 0,
              false,
              {
                fileName: "/app/src/Layout.jsx",
                lineNumber: 292,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              Link,
              {
                "data-source-location": "Layout:283:22",
                "data-dynamic-content": "true",
                to: createPageUrl("GetStarted"),
                onClick: () => {
                  setIsMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                },
                children: /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "Layout:290:24", "data-dynamic-content": "false", className: "w-full bg-gradient-to-r from-orange-600 to-orange-500", children: "Start Free Trial" }, void 0, false, {
                  fileName: "/app/src/Layout.jsx",
                  lineNumber: 309,
                  columnNumber: 25
                }, this)
              },
              void 0,
              false,
              {
                fileName: "/app/src/Layout.jsx",
                lineNumber: 302,
                columnNumber: 23
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/src/Layout.jsx",
            lineNumber: 291,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/src/Layout.jsx",
            lineNumber: 276,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/Layout.jsx",
          lineNumber: 235,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/src/Layout.jsx",
          lineNumber: 234,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/Layout.jsx",
        lineNumber: 123,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("main", { "data-source-location": "Layout:300:8", "data-dynamic-content": "true", className: "pt-16", children }, void 0, false, {
        fileName: "/app/src/Layout.jsx",
        lineNumber: 319,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("footer", { "data-source-location": "Layout:305:8", "data-dynamic-content": "true", className: "bg-gray-900 text-white py-16", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "Layout:306:10", "data-dynamic-content": "true", className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "Layout:307:12", "data-dynamic-content": "true", className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "Layout:308:14", "data-dynamic-content": "false", className: "col-span-2 md:col-span-1", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "Layout:309:16", "data-dynamic-content": "false", className: "flex items-center gap-2 mb-4", children: /* @__PURE__ */ jsxDEV("span", { "data-source-location": "Layout:313:18", "data-dynamic-content": "false", className: "text-xl font-bold", children: "RestroSaathi " }, void 0, false, {
            fileName: "/app/src/Layout.jsx",
            lineNumber: 332,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/app/src/Layout.jsx",
            lineNumber: 328,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "Layout:315:16", "data-dynamic-content": "false", className: "text-gray-400 text-sm", children: "Empowering restaurants with zero-commission digital ordering solutions." }, void 0, false, {
            fileName: "/app/src/Layout.jsx",
            lineNumber: 334,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/Layout.jsx",
          lineNumber: 327,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "Layout:319:14", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("h4", { "data-source-location": "Layout:320:16", "data-dynamic-content": "false", className: "font-semibold mb-4", children: "Product" }, void 0, false, {
            fileName: "/app/src/Layout.jsx",
            lineNumber: 339,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { "data-source-location": "Layout:321:16", "data-dynamic-content": "true", className: "space-y-2 text-gray-400 text-sm", children: [
            /* @__PURE__ */ jsxDEV("li", { "data-source-location": "Layout:322:18", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(Link, { "data-source-location": "Layout:322:22", "data-dynamic-content": "true", to: createPageUrl("Features"), className: "hover:text-white", children: "Features" }, void 0, false, {
              fileName: "/app/src/Layout.jsx",
              lineNumber: 341,
              columnNumber: 88
            }, this) }, void 0, false, {
              fileName: "/app/src/Layout.jsx",
              lineNumber: 341,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("li", { "data-source-location": "Layout:323:18", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(Link, { "data-source-location": "Layout:323:22", "data-dynamic-content": "true", to: createPageUrl("Pricing"), className: "hover:text-white", children: "Pricing" }, void 0, false, {
              fileName: "/app/src/Layout.jsx",
              lineNumber: 342,
              columnNumber: 88
            }, this) }, void 0, false, {
              fileName: "/app/src/Layout.jsx",
              lineNumber: 342,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("li", { "data-source-location": "Layout:324:18", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV("a", { "data-source-location": "Layout:324:22", "data-dynamic-content": "false", href: "#", className: "hover:text-white", children: "Integrations" }, void 0, false, {
              fileName: "/app/src/Layout.jsx",
              lineNumber: 343,
              columnNumber: 89
            }, this) }, void 0, false, {
              fileName: "/app/src/Layout.jsx",
              lineNumber: 343,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/Layout.jsx",
            lineNumber: 340,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/Layout.jsx",
          lineNumber: 338,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "Layout:327:14", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("h4", { "data-source-location": "Layout:328:16", "data-dynamic-content": "false", className: "font-semibold mb-4", children: "Company" }, void 0, false, {
            fileName: "/app/src/Layout.jsx",
            lineNumber: 347,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { "data-source-location": "Layout:329:16", "data-dynamic-content": "true", className: "space-y-2 text-gray-400 text-sm", children: [
            /* @__PURE__ */ jsxDEV("li", { "data-source-location": "Layout:330:18", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV("a", { "data-source-location": "Layout:330:22", "data-dynamic-content": "false", href: "#", className: "hover:text-white", children: "About" }, void 0, false, {
              fileName: "/app/src/Layout.jsx",
              lineNumber: 349,
              columnNumber: 89
            }, this) }, void 0, false, {
              fileName: "/app/src/Layout.jsx",
              lineNumber: 349,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("li", { "data-source-location": "Layout:331:18", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(Link, { "data-source-location": "Layout:331:22", "data-dynamic-content": "true", to: createPageUrl("Contact"), className: "hover:text-white", children: "Contact" }, void 0, false, {
              fileName: "/app/src/Layout.jsx",
              lineNumber: 350,
              columnNumber: 88
            }, this) }, void 0, false, {
              fileName: "/app/src/Layout.jsx",
              lineNumber: 350,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("li", { "data-source-location": "Layout:332:18", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV("a", { "data-source-location": "Layout:332:22", "data-dynamic-content": "false", href: "#", className: "hover:text-white", children: "Careers" }, void 0, false, {
              fileName: "/app/src/Layout.jsx",
              lineNumber: 351,
              columnNumber: 89
            }, this) }, void 0, false, {
              fileName: "/app/src/Layout.jsx",
              lineNumber: 351,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/Layout.jsx",
            lineNumber: 348,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/Layout.jsx",
          lineNumber: 346,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "Layout:335:14", "data-dynamic-content": "false", children: [
          /* @__PURE__ */ jsxDEV("h4", { "data-source-location": "Layout:336:16", "data-dynamic-content": "false", className: "font-semibold mb-4", children: "Legal" }, void 0, false, {
            fileName: "/app/src/Layout.jsx",
            lineNumber: 355,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { "data-source-location": "Layout:337:16", "data-dynamic-content": "false", className: "space-y-2 text-gray-400 text-sm", children: [
            /* @__PURE__ */ jsxDEV("li", { "data-source-location": "Layout:338:18", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(Link, { "data-source-location": "Layout:338:22", "data-dynamic-content": "false", to: "/PrivacyPolicy", className: "hover:text-white", children: "Privacy Policy" }, void 0, false, {
              fileName: "/app/src/Layout.jsx",
              lineNumber: 357,
              columnNumber: 89
            }, this) }, void 0, false, {
              fileName: "/app/src/Layout.jsx",
              lineNumber: 357,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("li", { "data-source-location": "Layout:339:18", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(Link, { "data-source-location": "Layout:339:22", "data-dynamic-content": "false", to: "/TermsConditions", className: "hover:text-white", children: "Terms & Conditions" }, void 0, false, {
              fileName: "/app/src/Layout.jsx",
              lineNumber: 358,
              columnNumber: 89
            }, this) }, void 0, false, {
              fileName: "/app/src/Layout.jsx",
              lineNumber: 358,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("li", { "data-source-location": "Layout:340:18", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV("a", { "data-source-location": "Layout:340:22", "data-dynamic-content": "false", href: "mailto:support@restrosaathi.in", className: "hover:text-white", children: "Support" }, void 0, false, {
              fileName: "/app/src/Layout.jsx",
              lineNumber: 359,
              columnNumber: 89
            }, this) }, void 0, false, {
              fileName: "/app/src/Layout.jsx",
              lineNumber: 359,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/Layout.jsx",
            lineNumber: 356,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/Layout.jsx",
          lineNumber: 354,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/Layout.jsx",
        lineNumber: 326,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/src/Layout.jsx",
        lineNumber: 325,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/Layout.jsx",
        lineNumber: 324,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/Layout.jsx",
      lineNumber: 113,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "Layout:355:4", "data-dynamic-content": "true", className: "min-h-screen bg-gray-50", "data-collection-item-id": __dataCollectionItemId, children: [
    /* @__PURE__ */ jsxDEV("style", { "data-source-location": "Layout:356:6", "data-dynamic-content": "false", children: `
        :root {
          --primary: 24 95% 53%;
          --primary-foreground: 0 0% 100%;
          --accent: 33 100% 50%;
        }
      ` }, void 0, false, {
      fileName: "/app/src/Layout.jsx",
      lineNumber: 375,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, true, {
    fileName: "/app/src/Layout.jsx",
    lineNumber: 374,
    columnNumber: 5
  }, this);
}
_s(Layout, "isyx9KbXwZASW/oTVAiidFd+xFw=", false, function() {
  return [useNavigate];
});
_c = Layout;
var _c;
$RefreshReg$(_c, "Layout");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/Layout.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/Layout.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFBQTtBQUFBO0FBQUEsaUJBSUE7QUFBQSxhQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFPQTtBQUFBLFdBbkNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFvQ0EsS0FyQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXlDQSxLQTFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMkNBO0FBQUEsU0E5UEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQStQQTtBQUFBLEVBRUo7QUFHQSxTQUNFLHVCQUFDLFNBQUksd0JBQXFCLGdCQUFlLHdCQUFxQixRQUFPLFdBQVUsMkJBQTBCLDJCQUF5QnFCLHdCQUNoSTtBQUFBLDJCQUFDLFdBQU0sd0JBQXFCLGdCQUFlLHdCQUFxQixTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FNRTtBQUFBLElBQ0RGO0FBQUFBLE9BUkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVNBO0FBRUo7QUFBQ0csR0EzVnVCSixRQUFNO0FBQUEsVUFJWHBCLFdBQVc7QUFBQTtBQUFBdUUsS0FKTm5EO0FBQU0sSUFBQW1EO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsInVzZU5hdmlnYXRlIiwiYmFzZTQ0IiwiY3JlYXRlUGFnZVVybCIsInBhZ2VOYW1lIiwiTWVudSIsIlgiLCJDbG9zZUljb24iLCJDaGV2cm9uRG93biIsIkxvZ091dCIsIkxheW91dERhc2hib2FyZCIsIlNldHRpbmdzIiwiVXNlciIsIkJlbGwiLCJTdG9yZSIsIkJ1dHRvbiIsIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duTWVudUNvbnRlbnQiLCJEcm9wZG93bk1lbnVJdGVtIiwiRHJvcGRvd25NZW51U2VwYXJhdG9yIiwiRHJvcGRvd25NZW51VHJpZ2dlciIsIkxheW91dCIsImNoaWxkcmVuIiwiY3VycmVudFBhZ2VOYW1lIiwiX19kYXRhQ29sbGVjdGlvbkl0ZW1JZCIsIl9zIiwidXNlciIsInNldFVzZXIiLCJpc01lbnVPcGVuIiwic2V0SXNNZW51T3BlbiIsInJlc3RhdXJhbnREYXRhIiwic2V0UmVzdGF1cmFudERhdGEiLCJuYXZpZ2F0ZSIsIm5vTGF5b3V0UGFnZXMiLCJtYXJrZXRpbmdQYWdlcyIsInN1cGVyQWRtaW5QYWdlcyIsImRhc2hib2FyZFBhZ2VzIiwibG9hZFVzZXIiLCJpbmNsdWRlcyIsInByZXZlbnRCYWNrIiwiZSIsIndpbmRvdyIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpc0F1dGgiLCJhdXRoIiwiaXNBdXRoZW50aWNhdGVkIiwidXNlckRhdGEiLCJtZSIsInJlc3RhdXJhbnRfaWQiLCJyZXN0YXVyYW50cyIsImVudGl0aWVzIiwiUmVzdGF1cmFudCIsImZpbHRlciIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVMb2dvdXQiLCJsb2dvdXQiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiZnVsbF9uYW1lIiwiZW1haWwiLCJpZCIsIl9pZCIsInJvbGUiLCJocmVmIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiTGF5b3V0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgYmFzZTQ0IH0gZnJvbSBcIkAvYXBpL2Jhc2U0NENsaWVudFwiO1xuXG5jb25zdCBjcmVhdGVQYWdlVXJsID0gKHBhZ2VOYW1lKSA9PiBgLyR7cGFnZU5hbWV9YDtcbmltcG9ydCB7XG4gIE1lbnUsIFggYXMgQ2xvc2VJY29uLCBDaGV2cm9uRG93biwgTG9nT3V0LCBMYXlvdXREYXNoYm9hcmQsXG4gIFNldHRpbmdzLCBVc2VyLCBCZWxsLCBTdG9yZSB9IGZyb21cblwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHtcbiAgRHJvcGRvd25NZW51LFxuICBEcm9wZG93bk1lbnVDb250ZW50LFxuICBEcm9wZG93bk1lbnVJdGVtLFxuICBEcm9wZG93bk1lbnVTZXBhcmF0b3IsXG4gIERyb3Bkb3duTWVudVRyaWdnZXIgfSBmcm9tXG5cIkAvY29tcG9uZW50cy91aS9kcm9wZG93bi1tZW51XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuLCBjdXJyZW50UGFnZU5hbWUsIFwiZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWRcIjogX19kYXRhQ29sbGVjdGlvbkl0ZW1JZCB9KSB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXNNZW51T3Blbiwgc2V0SXNNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyZXN0YXVyYW50RGF0YSwgc2V0UmVzdGF1cmFudERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuICAvLyBQYWdlcyB0aGF0IHNob3VsZCBoYXZlIE5PIGxheW91dCAocHVibGljIG1lbnUgZm9yIGN1c3RvbWVycylcbiAgY29uc3Qgbm9MYXlvdXRQYWdlcyA9IFtcIkN1c3RvbWVyTWVudVwiLCBcIkN1c3RvbWVyT3JkZXJcIl07XG5cbiAgLy8gUGFnZXMgdGhhdCBhcmUgcGFydCBvZiB0aGUgbWFya2V0aW5nIHdlYnNpdGVcbiAgY29uc3QgbWFya2V0aW5nUGFnZXMgPSBbXCJIb21lXCIsIFwiUHJpY2luZ1wiLCBcIkNvbnRhY3RcIiwgXCJMb2dpblwiLCBcIlNpZ251cFwiLCBcIkZlYXR1cmVzXCIsIFwiR2V0U3RhcnRlZFwiXTtcblxuICAvLyBTdXBlciBBZG1pbiBwYWdlcyAobm8gbGF5b3V0LCBzdGFuZGFsb25lKVxuICBjb25zdCBzdXBlckFkbWluUGFnZXMgPSBbXCJTdXBlckFkbWluRGFzaGJvYXJkXCIsIFwiU3VwZXJBZG1pblNldHVwXCIsIFwiVGVhbUNoYXRcIiwgXCJTdXBwb3J0Q2VudGVyXCJdO1xuXG4gIC8vIERhc2hib2FyZCBwYWdlc1xuICBjb25zdCBkYXNoYm9hcmRQYWdlcyA9IFtcbiAgXCJEYXNoYm9hcmRcIiwgXCJNZW51TWFuYWdlbWVudFwiLCBcIk9yZGVyc1wiLCBcIkN1c3RvbWVyc1wiLFxuICBcIkFuYWx5dGljc1wiLCBcIlJlc3RhdXJhbnRTZXR0aW5nc1wiLCBcIlFSQ29kZXNcIiwgXCJCaWxsaW5nXCJdO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkVXNlcigpO1xuICB9LCBbXSk7XG5cbiAgLy8gUHJldmVudCBiYWNrIG5hdmlnYXRpb24gZnJvbSBkYXNoYm9hcmRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGFzaGJvYXJkUGFnZXMuaW5jbHVkZXMoY3VycmVudFBhZ2VOYW1lKSkge1xuICAgICAgY29uc3QgcHJldmVudEJhY2sgPSAoZSkgPT4ge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgIH07XG5cbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgcHJldmVudEJhY2spO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBwcmV2ZW50QmFjayk7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW2N1cnJlbnRQYWdlTmFtZV0pO1xuXG4gIGNvbnN0IGxvYWRVc2VyID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBpc0F1dGggPSBhd2FpdCBiYXNlNDQuYXV0aC5pc0F1dGhlbnRpY2F0ZWQoKTtcbiAgICAgIGlmIChpc0F1dGgpIHtcbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCBiYXNlNDQuYXV0aC5tZSgpO1xuICAgICAgICBzZXRVc2VyKHVzZXJEYXRhKTtcblxuICAgICAgICAvLyBMb2FkIHJlc3RhdXJhbnQgZGF0YSBpZiB1c2VyIGhhcyBvbmVcbiAgICAgICAgaWYgKHVzZXJEYXRhPy5yZXN0YXVyYW50X2lkKSB7XG4gICAgICAgICAgY29uc3QgcmVzdGF1cmFudHMgPSBhd2FpdCBiYXNlNDQuZW50aXRpZXMuUmVzdGF1cmFudC5maWx0ZXIoe1xuICAgICAgICAgICAgcmVzdGF1cmFudF9pZDogdXNlckRhdGEucmVzdGF1cmFudF9pZFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChyZXN0YXVyYW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZXRSZXN0YXVyYW50RGF0YShyZXN0YXVyYW50c1swXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coXCJOb3QgYXV0aGVudGljYXRlZFwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGJhc2U0NC5hdXRoLmxvZ291dCgpO1xuICB9O1xuXG4gIC8vIE5vIGxheW91dCBmb3IgY3VzdG9tZXItZmFjaW5nIG1lbnUgcGFnZXMgYW5kIHN1cGVyIGFkbWluIHBhZ2VzXG4gIGlmIChub0xheW91dFBhZ2VzLmluY2x1ZGVzKGN1cnJlbnRQYWdlTmFtZSkgfHwgc3VwZXJBZG1pblBhZ2VzLmluY2x1ZGVzKGN1cnJlbnRQYWdlTmFtZSkpIHtcbiAgICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xuICB9XG5cbiAgLy8gTWFya2V0aW5nIHdlYnNpdGUgbGF5b3V0XG4gIGlmIChtYXJrZXRpbmdQYWdlcy5pbmNsdWRlcyhjdXJyZW50UGFnZU5hbWUpKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJMYXlvdXQ6OTQ6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy13aGl0ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtfX2RhdGFDb2xsZWN0aW9uSXRlbUlkfT5cbiAgICAgICAgPHN0eWxlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiTGF5b3V0Ojk1OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+e2BcbiAgICAgICAgICA6cm9vdCB7XG4gICAgICAgICAgICAtLXByaW1hcnk6IDI0IDk1JSA1MyU7XG4gICAgICAgICAgICAtLXByaW1hcnktZm9yZWdyb3VuZDogMCAwJSAxMDAlO1xuICAgICAgICAgICAgLS1hY2NlbnQ6IDMzIDEwMCUgNTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICBcbiAgICAgICAgey8qIE1hcmtldGluZyBIZWFkZXIgKi99XG4gICAgICAgIDxoZWFkZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJMYXlvdXQ6MTA0OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBsZWZ0LTAgcmlnaHQtMCB6LTUwIGJnLXdoaXRlLzgwIGJhY2tkcm9wLWJsdXIteGwgYm9yZGVyLWIgYm9yZGVyLWdyYXktMTAwXCI+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkxheW91dDoxMDU6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkxheW91dDoxMDY6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gaC0xNlwiPlxuICAgICAgICAgICAgICB7LyogTG9nbyAqL31cbiAgICAgICAgICAgICAgPExpbmsgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJMYXlvdXQ6MTA4OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdG89e2NyZWF0ZVBhZ2VVcmwoXCJIb21lXCIpfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkxheW91dDoxMTI6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgYmctZ3JhZGllbnQtdG8tciBmcm9tLW9yYW5nZS02MDAgdG8tb3JhbmdlLTUwMCBiZy1jbGlwLXRleHQgdGV4dC10cmFuc3BhcmVudFwiPlJlc3Ryb1NhYXRoaSBcblxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgIHsvKiBEZXNrdG9wIE5hdmlnYXRpb24gKi99XG4gICAgICAgICAgICAgIDxuYXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJMYXlvdXQ6MTE4OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXggaXRlbXMtY2VudGVyIGdhcC04XCI+XG4gICAgICAgICAgICAgICAgPExpbmsgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJMYXlvdXQ6MTE5OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICB0bz17Y3JlYXRlUGFnZVVybChcIkhvbWVcIil9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIHRyYW5zaXRpb24tY29sb3JzIHRleHQtc20gZm9udC1tZWRpdW1cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pfT5cblxuICAgICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkxheW91dDoxMjY6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgIHRvPXtjcmVhdGVQYWdlVXJsKFwiRmVhdHVyZXNcIil9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIHRyYW5zaXRpb24tY29sb3JzIHRleHQtc20gZm9udC1tZWRpdW1cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pfT5cblxuICAgICAgICAgICAgICAgICAgRmVhdHVyZXNcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJMYXlvdXQ6MTMzOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICB0bz17Y3JlYXRlUGFnZVVybChcIlByaWNpbmdcIil9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIHRyYW5zaXRpb24tY29sb3JzIHRleHQtc20gZm9udC1tZWRpdW1cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pfT5cblxuICAgICAgICAgICAgICAgICAgUHJpY2luZ1xuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkxheW91dDoxNDA6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgIHRvPXtjcmVhdGVQYWdlVXJsKFwiQ29udGFjdFwiKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGhvdmVyOnRleHQtZ3JheS05MDAgdHJhbnNpdGlvbi1jb2xvcnMgdGV4dC1zbSBmb250LW1lZGl1bVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSl9PlxuXG4gICAgICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgICAgICB7LyogQXV0aCBCdXR0b25zICovfVxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiTGF5b3V0OjE1MDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICAgIHt1c2VyID9cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiTGF5b3V0OjE1MjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51VHJpZ2dlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkxheW91dDoxNTM6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBhc0NoaWxkPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJMYXlvdXQ6MTU0OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdmFyaWFudD1cImdob3N0XCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJMYXlvdXQ6MTU1OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidy04IGgtOCByb3VuZGVkLWZ1bGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1vcmFuZ2UtNjAwIHRvLW9yYW5nZS01MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyLmZ1bGxfbmFtZT8uWzBdIHx8IHVzZXIuZW1haWw/LlswXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZXZyb25Eb3duIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiTGF5b3V0OjE1ODoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVUcmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51Q29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkxheW91dDoxNjE6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBhbGlnbj1cImVuZFwiIGNsYXNzTmFtZT1cInctNTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiTGF5b3V0OjE2MjoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB4LTIgcHktMS41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkxheW91dDoxNjM6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJmdWxsX25hbWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17dXNlcj8uaWQgfHwgdXNlcj8uX2lkfT57dXNlci5mdWxsX25hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJMYXlvdXQ6MTY0OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJlbWFpbFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXt1c2VyPy5pZCB8fCB1c2VyPy5faWR9Pnt1c2VyLmVtYWlsfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51U2VwYXJhdG9yIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiTGF5b3V0OjE2NjoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVJdGVtIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiTGF5b3V0OjE2NzoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGFzQ2hpbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkxheW91dDoxNjg6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHRvPXtjcmVhdGVQYWdlVXJsKHVzZXI/LnJvbGUgPT09ICdhZG1pbicgPyBcIlN1cGVyQWRtaW5EYXNoYm9hcmRcIiA6IFwiRGFzaGJvYXJkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGN1cnNvci1wb2ludGVyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dERhc2hib2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkxheW91dDoxNzI6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIERhc2hib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51U2VwYXJhdG9yIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiTGF5b3V0OjE3NjoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVJdGVtIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiTGF5b3V0OjE3NzoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0gY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9nT3V0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiTGF5b3V0OjE3ODoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nIG91dFxuICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVDb250ZW50PlxuICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+IDpcblxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJMYXlvdXQ6MTg1OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBjcmVhdGVQYWdlVXJsKFwiR2V0U3RhcnRlZFwiKTtcbiAgICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgTG9nIGluXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkxheW91dDoxOTQ6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB0bz17Y3JlYXRlUGFnZVVybChcIkdldFN0YXJ0ZWRcIil9PlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJMYXlvdXQ6MTk1OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1vcmFuZ2UtNjAwIHRvLW9yYW5nZS01MDAgaG92ZXI6ZnJvbS1vcmFuZ2UtNzAwIGhvdmVyOnRvLW9yYW5nZS02MDAgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnQgRnJlZSBUcmlhbFxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiBNb2JpbGUgTWVudSBCdXR0b24gKi99XG4gICAgICAgICAgICAgIDxidXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJMYXlvdXQ6MjA0OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWQ6aGlkZGVuIHAtMlwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTWVudU9wZW4oIWlzTWVudU9wZW4pfT5cblxuICAgICAgICAgICAgICAgIHtpc01lbnVPcGVuID8gPENsb3NlSWNvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkxheW91dDoyMDg6MzBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+IDogPE1lbnUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJMYXlvdXQ6MjA4OjY2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNiBoLTZcIiAvPn1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBNb2JpbGUgTWVudSAqL31cbiAgICAgICAgICB7aXNNZW51T3BlbiAmJlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJMYXlvdXQ6MjE1OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWQ6aGlkZGVuIGJnLXdoaXRlIGJvcmRlci10IGJvcmRlci1ncmF5LTEwMCBweS00IHB4LTRcIj5cbiAgICAgICAgICAgICAgPG5hdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkxheW91dDoyMTY6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgPExpbmsgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJMYXlvdXQ6MjE3OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgdG89e2NyZWF0ZVBhZ2VVcmwoXCJIb21lXCIpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGhvdmVyOnRleHQtZ3JheS05MDBcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0SXNNZW51T3BlbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiTGF5b3V0OjIyNzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIHRvPXtjcmVhdGVQYWdlVXJsKFwiRmVhdHVyZXNcIil9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgaG92ZXI6dGV4dC1ncmF5LTkwMFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRJc01lbnVPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICAgICAgICAgICAgfX0+XG5cbiAgICAgICAgICAgICAgICAgIEZlYXR1cmVzXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiTGF5b3V0OjIzNzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIHRvPXtjcmVhdGVQYWdlVXJsKFwiUHJpY2luZ1wiKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBob3Zlcjp0ZXh0LWdyYXktOTAwXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldElzTWVudU9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgICAgUHJpY2luZ1xuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkxheW91dDoyNDc6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICB0bz17Y3JlYXRlUGFnZVVybChcIkNvbnRhY3RcIil9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgaG92ZXI6dGV4dC1ncmF5LTkwMFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRJc01lbnVPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICAgICAgICAgICAgfX0+XG5cbiAgICAgICAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkxheW91dDoyNTc6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yIHB0LTQgYm9yZGVyLXRcIj5cbiAgICAgICAgICAgICAgICAgIHt1c2VyID9cbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiTGF5b3V0OjI2MDoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICB0bz17Y3JlYXRlUGFnZVVybCh1c2VyPy5yb2xlID09PSAnYWRtaW4nICYmICF1c2VyPy5yZXN0YXVyYW50X2lkID8gXCJTdXBlckFkbWluRGFzaGJvYXJkXCIgOiBcIkRhc2hib2FyZFwiKX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNNZW51T3BlbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgICAgICAgICAgICAgICAgfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJMYXlvdXQ6MjY3OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctZnVsbFwiPkRhc2hib2FyZDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiTGF5b3V0OjI2OToyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHZhcmlhbnQ9XCJvdXRsaW5lXCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5Mb2cgb3V0PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvPiA6XG5cbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJMYXlvdXQ6MjczOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldElzTWVudU9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGNyZWF0ZVBhZ2VVcmwoXCJHZXRTdGFydGVkXCIpO1xuICAgICAgICAgICAgICAgICAgfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIExvZyBpblxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiTGF5b3V0OjI4MzoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICB0bz17Y3JlYXRlUGFnZVVybChcIkdldFN0YXJ0ZWRcIil9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldElzTWVudU9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiTGF5b3V0OjI5MDoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLW9yYW5nZS02MDAgdG8tb3JhbmdlLTUwMFwiPlN0YXJ0IEZyZWUgVHJpYWw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgIDxtYWluIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiTGF5b3V0OjMwMDo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicHQtMTZcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvbWFpbj5cblxuICAgICAgICB7LyogTWFya2V0aW5nIEZvb3RlciAqL31cbiAgICAgICAgPGZvb3RlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkxheW91dDozMDU6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImJnLWdyYXktOTAwIHRleHQtd2hpdGUgcHktMTZcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiTGF5b3V0OjMwNjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiTGF5b3V0OjMwNzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgZ2FwLThcIj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkxheW91dDozMDg6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBtZDpjb2wtc3Bhbi0xXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkxheW91dDozMDk6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJMYXlvdXQ6MzEzOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+UmVzdHJvU2FhdGhpIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkxheW91dDozMTU6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICBFbXBvd2VyaW5nIHJlc3RhdXJhbnRzIHdpdGggemVyby1jb21taXNzaW9uIGRpZ2l0YWwgb3JkZXJpbmcgc29sdXRpb25zLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJMYXlvdXQ6MzE5OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPGg0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiTGF5b3V0OjMyMDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIG1iLTRcIj5Qcm9kdWN0PC9oND5cbiAgICAgICAgICAgICAgICA8dWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJMYXlvdXQ6MzIxOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS0yIHRleHQtZ3JheS00MDAgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgPGxpIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiTGF5b3V0OjMyMjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPjxMaW5rIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiTGF5b3V0OjMyMjoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHRvPXtjcmVhdGVQYWdlVXJsKFwiRmVhdHVyZXNcIil9IGNsYXNzTmFtZT1cImhvdmVyOnRleHQtd2hpdGVcIj5GZWF0dXJlczwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiTGF5b3V0OjMyMzoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPjxMaW5rIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiTGF5b3V0OjMyMzoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHRvPXtjcmVhdGVQYWdlVXJsKFwiUHJpY2luZ1wiKX0gY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC13aGl0ZVwiPlByaWNpbmc8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkxheW91dDozMjQ6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+PGEgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJMYXlvdXQ6MzI0OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC13aGl0ZVwiPkludGVncmF0aW9uczwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiTGF5b3V0OjMyNzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxoNCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkxheW91dDozMjg6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBtYi00XCI+Q29tcGFueTwvaDQ+XG4gICAgICAgICAgICAgICAgPHVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiTGF5b3V0OjMyOToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktMiB0ZXh0LWdyYXktNDAwIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgIDxsaSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkxheW91dDozMzA6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+PGEgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJMYXlvdXQ6MzMwOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC13aGl0ZVwiPkFib3V0PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJMYXlvdXQ6MzMxOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+PExpbmsgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJMYXlvdXQ6MzMxOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdG89e2NyZWF0ZVBhZ2VVcmwoXCJDb250YWN0XCIpfSBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXdoaXRlXCI+Q29udGFjdDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiTGF5b3V0OjMzMjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj48YSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkxheW91dDozMzI6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXdoaXRlXCI+Q2FyZWVyczwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiTGF5b3V0OjMzNToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICA8aDQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJMYXlvdXQ6MzM2OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgbWItNFwiPkxlZ2FsPC9oND5cbiAgICAgICAgICAgICAgICA8dWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJMYXlvdXQ6MzM3OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktMiB0ZXh0LWdyYXktNDAwIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgIDxsaSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkxheW91dDozMzg6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+PExpbmsgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJMYXlvdXQ6MzM4OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHRvPVwiL1ByaXZhY3lQb2xpY3lcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXdoaXRlXCI+UHJpdmFjeSBQb2xpY3k8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkxheW91dDozMzk6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+PExpbmsgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJMYXlvdXQ6MzM5OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHRvPVwiL1Rlcm1zQ29uZGl0aW9uc1wiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtd2hpdGVcIj5UZXJtcyAmIENvbmRpdGlvbnM8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkxheW91dDozNDA6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+PGEgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJMYXlvdXQ6MzQwOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGhyZWY9XCJtYWlsdG86c3VwcG9ydEByZXN0cm9zYWF0aGkuaW5cIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXdoaXRlXCI+U3VwcG9ydDwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcblxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+KTtcblxuICB9XG5cbiAgLy8gRGFzaGJvYXJkIGxheW91dCAtIHJlcXVpcmVzIGF1dGhlbnRpY2F0aW9uXG4gIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkxheW91dDozNTU6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTUwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e19fZGF0YUNvbGxlY3Rpb25JdGVtSWR9PlxuICAgICAgPHN0eWxlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiTGF5b3V0OjM1Njo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPntgXG4gICAgICAgIDpyb290IHtcbiAgICAgICAgICAtLXByaW1hcnk6IDI0IDk1JSA1MyU7XG4gICAgICAgICAgLS1wcmltYXJ5LWZvcmVncm91bmQ6IDAgMCUgMTAwJTtcbiAgICAgICAgICAtLWFjY2VudDogMzMgMTAwJSA1MCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj4pO1xuXG59Il0sImZpbGUiOiIvYXBwL3NyYy9MYXlvdXQuanN4In0=