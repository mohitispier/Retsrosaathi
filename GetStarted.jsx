import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/GetStarted.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/GetStarted.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=79425e35";
import { Link, useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=79425e35";
import { Button } from "/src/components/ui/button.jsx";
const createPageUrl = (pageName) => `/${pageName}`;
import { Input } from "/src/components/ui/input.jsx";
import { Label } from "/src/components/ui/label.jsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "/src/components/ui/select.jsx";
import { Checkbox } from "/src/components/ui/checkbox.jsx";
import { base44 } from "/src/api/base44Client.js";
import { Store, ArrowRight, Check, Sparkles } from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
const cities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Chandigarh",
  "Gurgaon",
  "Noida",
  "Other"
];
const benefits = [
  "14-day free trial",
  "No credit card required",
  "Setup in under 10 minutes",
  "Cancel anytime"
];
export default function GetStarted() {
  _s();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    restaurant_name: "",
    city: "",
    phone: "",
    agreed_to_terms: false
  });
  useEffect(() => {
    checkAuth();
  }, []);
  const checkAuth = async () => {
    try {
      const isAuth = await base44.auth.isAuthenticated();
      setIsAuthenticated(isAuth);
      if (isAuth) {
        const userData = await base44.auth.me();
        setUser(userData);
        if (userData.role === "admin" && !userData.restaurant_id) {
          navigate(createPageUrl("SuperAdminDashboard"), { replace: true });
          return;
        }
        if (userData?.restaurant_id) {
          const restaurants = await base44.entities.Restaurant.filter({
            restaurant_id: userData.restaurant_id
          });
          if (restaurants.length > 0) {
            navigate(createPageUrl("Dashboard"), { replace: true });
            return;
          }
        }
        setStep(2);
      }
    } catch (e) {
      console.log("Not authenticated");
    } finally {
      setIsLoading(false);
    }
  };
  const handleSignup = () => {
    base44.auth.redirectToLogin(createPageUrl("GetStarted"));
  };
  const generateRestaurantId = () => {
    const randomNum = Math.floor(1e4 + Math.random() * 9e4);
    return `REST_${randomNum}`;
  };
  const generateSlug = (name) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  };
  const handleCreateRestaurant = async () => {
    if (!formData.restaurant_name || !formData.city || !formData.phone) {
      return;
    }
    setIsCreating(true);
    const restaurantId = generateRestaurantId();
    const slug = generateSlug(formData.restaurant_name);
    const trialExpires = /* @__PURE__ */ new Date();
    trialExpires.setDate(trialExpires.getDate() + 14);
    const restaurant = await base44.entities.Restaurant.create({
      restaurant_id: restaurantId,
      name: formData.restaurant_name,
      slug,
      city: formData.city,
      phone: formData.phone,
      email: user?.email || "",
      subscription_plan: "trial",
      subscription_status: "active",
      subscription_expires_at: trialExpires.toISOString().split("T")[0],
      is_active: true,
      onboarding_completed: false,
      onboarding_step: 1,
      owner_user_id: user?.id,
      features_enabled: {
        qr_ordering: true,
        direct_orders: false,
        payment_integration: false,
        customer_analytics: false,
        multi_outlet: false,
        custom_branding: false
      },
      settings: {
        currency: "INR",
        tax_rate: 5,
        service_charge: 0,
        accept_online_payment: false,
        table_count: 10
      }
    });
    await base44.entities.RestaurantUser.create({
      restaurant_id: restaurantId,
      user_email: user?.email,
      role: "owner",
      permissions: ["all"],
      is_active: true
    });
    await base44.auth.updateMe({
      restaurant_id: restaurantId
    });
    navigate(createPageUrl("Onboarding"), { replace: true });
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/GetStarted:171:6", "data-dynamic-content": "false", className: "min-h-[80vh] flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/GetStarted:172:8", "data-dynamic-content": "false", className: "animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600" }, void 0, false, {
      fileName: "/app/src/pages/GetStarted.jsx",
      lineNumber: 191,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/GetStarted.jsx",
      lineNumber: 190,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/GetStarted:178:4", "data-dynamic-content": "true", className: "min-h-[80vh] flex items-center justify-center px-4 py-12 bg-gradient-to-br from-orange-50 via-white to-orange-50", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/GetStarted:179:6", "data-dynamic-content": "true", className: "max-w-5xl w-full grid lg:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-source-location": "pages/GetStarted:181:8",
        "data-dynamic-content": "true",
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        className: "hidden lg:block",
        children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/GetStarted:186:10", "data-dynamic-content": "false", className: "inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6", children: [
            /* @__PURE__ */ jsxDEV(Sparkles, { "data-source-location": "pages/GetStarted:187:12", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
              fileName: "/app/src/pages/GetStarted.jsx",
              lineNumber: 206,
              columnNumber: 13
            }, this),
            "Start Your Free Trial"
          ] }, void 0, true, {
            fileName: "/app/src/pages/GetStarted.jsx",
            lineNumber: 205,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/GetStarted:191:10", "data-dynamic-content": "false", className: "text-4xl font-bold text-gray-900 mb-4", children: "Transform Your Restaurant in Minutes" }, void 0, false, {
            fileName: "/app/src/pages/GetStarted.jsx",
            lineNumber: 210,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/GetStarted:194:10", "data-dynamic-content": "false", className: "text-xl text-gray-600 mb-8", children: "Join hundreds of restaurants already saving thousands in commissions with RestroSaathi." }, void 0, false, {
            fileName: "/app/src/pages/GetStarted.jsx",
            lineNumber: 213,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/GetStarted:198:10", "data-dynamic-content": "true", className: "space-y-4", children: benefits.map(
            (benefit, __arrIdx__) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/GetStarted:200:12", "data-dynamic-content": "true", className: "flex items-center gap-3", "data-arr-index": __arrIdx__, "data-arr-variable-name": "benefits", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/GetStarted:201:16", "data-dynamic-content": "false", className: "w-6 h-6 bg-green-100 rounded-full flex items-center justify-center", "data-arr-index": __arrIdx__, "data-arr-variable-name": "benefits", children: /* @__PURE__ */ jsxDEV(Check, { "data-source-location": "pages/GetStarted:202:18", "data-dynamic-content": "false", className: "w-4 h-4 text-green-600", "data-arr-index": __arrIdx__, "data-arr-variable-name": "benefits" }, void 0, false, {
                fileName: "/app/src/pages/GetStarted.jsx",
                lineNumber: 221,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "/app/src/pages/GetStarted.jsx",
                lineNumber: 220,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/GetStarted:204:16", "data-dynamic-content": "true", className: "text-gray-700", "data-arr-index": __arrIdx__, "data-arr-variable-name": "benefits", children: benefit }, void 0, false, {
                fileName: "/app/src/pages/GetStarted.jsx",
                lineNumber: 223,
                columnNumber: 17
              }, this)
            ] }, benefit, true, {
              fileName: "/app/src/pages/GetStarted.jsx",
              lineNumber: 219,
              columnNumber: 13
            }, this)
          ) }, void 0, false, {
            fileName: "/app/src/pages/GetStarted.jsx",
            lineNumber: 217,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/src/pages/GetStarted.jsx",
        lineNumber: 200,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-source-location": "pages/GetStarted:227:8",
        "data-dynamic-content": "true",
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/GetStarted:231:10", "data-dynamic-content": "true", className: "bg-white rounded-2xl shadow-xl border border-gray-100 p-8", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/GetStarted:233:12", "data-dynamic-content": "true", className: "text-center mb-8", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/GetStarted:234:14", "data-dynamic-content": "false", className: "bg-slate-900 mb-4 mx-auto rounded-2xl w-16 h-16 from-orange-600 to-orange-500 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Store, { "data-source-location": "pages/GetStarted:235:16", "data-dynamic-content": "false", className: "w-8 h-8 text-white" }, void 0, false, {
                fileName: "/app/src/pages/GetStarted.jsx",
                lineNumber: 254,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "/app/src/pages/GetStarted.jsx",
                lineNumber: 253,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "pages/GetStarted:237:14", "data-dynamic-content": "true", className: "text-2xl font-bold text-gray-900", children: step === 1 ? "Get Started" : "Setup Your Restaurant" }, void 0, false, {
                fileName: "/app/src/pages/GetStarted.jsx",
                lineNumber: 256,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/GetStarted:240:14", "data-dynamic-content": "true", className: "text-gray-500 mt-2", children: step === 1 ? "Sign in to start your 14-day free trial" : "Just a few details to get you started" }, void 0, false, {
                fileName: "/app/src/pages/GetStarted.jsx",
                lineNumber: 259,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/GetStarted.jsx",
              lineNumber: 252,
              columnNumber: 13
            }, this),
            step === 1 && /* @__PURE__ */ jsxDEV(Fragment, { children: [
              /* @__PURE__ */ jsxDEV(
                Button,
                {
                  "data-source-location": "pages/GetStarted:251:16",
                  "data-dynamic-content": "true",
                  onClick: handleSignup,
                  className: "bg-slate-900 text-primary-foreground px-4 py-6 text-lg font-medium rounded-md inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow hover:bg-primary/90 h-9 w-full from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600",
                  children: [
                    "Continue with Email",
                    /* @__PURE__ */ jsxDEV(ArrowRight, { "data-source-location": "pages/GetStarted:256:18", "data-dynamic-content": "false", className: "w-5 h-5 ml-2" }, void 0, false, {
                      fileName: "/app/src/pages/GetStarted.jsx",
                      lineNumber: 275,
                      columnNumber: 19
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/src/pages/GetStarted.jsx",
                  lineNumber: 270,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/GetStarted:259:16", "data-dynamic-content": "false", className: "text-center text-gray-500 text-sm mt-6", children: "By continuing, you agree to our Terms of Service and Privacy Policy" }, void 0, false, {
                fileName: "/app/src/pages/GetStarted.jsx",
                lineNumber: 278,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/GetStarted.jsx",
              lineNumber: 269,
              columnNumber: 13
            }, this),
            step === 2 && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/GetStarted:267:12", "data-dynamic-content": "true", className: "space-y-6", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/GetStarted:268:16", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/GetStarted:269:18", "data-dynamic-content": "false", htmlFor: "restaurant_name", children: "Restaurant Name *" }, void 0, false, {
                  fileName: "/app/src/pages/GetStarted.jsx",
                  lineNumber: 288,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV(
                  Input,
                  {
                    "data-source-location": "pages/GetStarted:270:18",
                    "data-dynamic-content": "true",
                    id: "restaurant_name",
                    value: formData.restaurant_name,
                    onChange: (e) => setFormData({ ...formData, restaurant_name: e.target.value }),
                    placeholder: "e.g., Spice Garden",
                    className: "mt-1"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/pages/GetStarted.jsx",
                    lineNumber: 289,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/src/pages/GetStarted.jsx",
                lineNumber: 287,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/GetStarted:279:16", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/GetStarted:280:18", "data-dynamic-content": "false", htmlFor: "city", children: "City *" }, void 0, false, {
                  fileName: "/app/src/pages/GetStarted.jsx",
                  lineNumber: 299,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV(
                  Select,
                  {
                    "data-source-location": "pages/GetStarted:281:18",
                    "data-dynamic-content": "true",
                    value: formData.city,
                    onValueChange: (value) => setFormData({ ...formData, city: value }),
                    children: [
                      /* @__PURE__ */ jsxDEV(SelectTrigger, { "data-source-location": "pages/GetStarted:285:20", "data-dynamic-content": "false", className: "mt-1", children: /* @__PURE__ */ jsxDEV(SelectValue, { "data-source-location": "pages/GetStarted:286:22", "data-dynamic-content": "false", placeholder: "Select your city" }, void 0, false, {
                        fileName: "/app/src/pages/GetStarted.jsx",
                        lineNumber: 305,
                        columnNumber: 23
                      }, this) }, void 0, false, {
                        fileName: "/app/src/pages/GetStarted.jsx",
                        lineNumber: 304,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV(SelectContent, { "data-source-location": "pages/GetStarted:288:20", "data-dynamic-content": "true", children: cities.map(
                        (city, __arrIdx__) => /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/GetStarted:290:20", "data-dynamic-content": "true", value: city, "data-arr-index": __arrIdx__, "data-arr-variable-name": "cities", children: city }, city, false, {
                          fileName: "/app/src/pages/GetStarted.jsx",
                          lineNumber: 309,
                          columnNumber: 21
                        }, this)
                      ) }, void 0, false, {
                        fileName: "/app/src/pages/GetStarted.jsx",
                        lineNumber: 307,
                        columnNumber: 21
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/src/pages/GetStarted.jsx",
                    lineNumber: 300,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/src/pages/GetStarted.jsx",
                lineNumber: 298,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/GetStarted:296:16", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/GetStarted:297:18", "data-dynamic-content": "false", htmlFor: "phone", children: "Phone Number *" }, void 0, false, {
                  fileName: "/app/src/pages/GetStarted.jsx",
                  lineNumber: 316,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV(
                  Input,
                  {
                    "data-source-location": "pages/GetStarted:298:18",
                    "data-dynamic-content": "true",
                    id: "phone",
                    value: formData.phone,
                    onChange: (e) => setFormData({ ...formData, phone: e.target.value }),
                    placeholder: "+91 98765 43210",
                    className: "mt-1"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/pages/GetStarted.jsx",
                    lineNumber: 317,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/src/pages/GetStarted.jsx",
                lineNumber: 315,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/GetStarted:307:16", "data-dynamic-content": "true", className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxDEV(
                  Checkbox,
                  {
                    "data-source-location": "pages/GetStarted:308:18",
                    "data-dynamic-content": "true",
                    id: "terms",
                    checked: formData.agreed_to_terms,
                    onCheckedChange: (checked) => setFormData({ ...formData, agreed_to_terms: checked })
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/pages/GetStarted.jsx",
                    lineNumber: 327,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/GetStarted:313:18", "data-dynamic-content": "false", htmlFor: "terms", className: "text-sm text-gray-600 leading-relaxed cursor-pointer", children: [
                  "I agree to the ",
                  /* @__PURE__ */ jsxDEV("a", { "data-source-location": "pages/GetStarted:314:35", "data-dynamic-content": "false", href: "#", className: "text-orange-600 hover:underline", children: "Terms of Service" }, void 0, false, {
                    fileName: "/app/src/pages/GetStarted.jsx",
                    lineNumber: 333,
                    columnNumber: 36
                  }, this),
                  " and",
                  " ",
                  /* @__PURE__ */ jsxDEV("a", { "data-source-location": "pages/GetStarted:315:20", "data-dynamic-content": "false", href: "#", className: "text-orange-600 hover:underline", children: "Privacy Policy" }, void 0, false, {
                    fileName: "/app/src/pages/GetStarted.jsx",
                    lineNumber: 334,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/GetStarted.jsx",
                  lineNumber: 332,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/GetStarted.jsx",
                lineNumber: 326,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(
                Button,
                {
                  "data-source-location": "pages/GetStarted:319:16",
                  "data-dynamic-content": "true",
                  onClick: handleCreateRestaurant,
                  disabled: !formData.restaurant_name || !formData.city || !formData.phone || !formData.agreed_to_terms || isCreating,
                  className: "w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 py-6 text-lg",
                  children: [
                    isCreating ? "Creating Your Restaurant..." : "Start My Free Trial",
                    /* @__PURE__ */ jsxDEV(ArrowRight, { "data-source-location": "pages/GetStarted:325:18", "data-dynamic-content": "false", className: "w-5 h-5 ml-2" }, void 0, false, {
                      fileName: "/app/src/pages/GetStarted.jsx",
                      lineNumber: 344,
                      columnNumber: 19
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/src/pages/GetStarted.jsx",
                  lineNumber: 338,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/pages/GetStarted.jsx",
              lineNumber: 286,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/GetStarted.jsx",
            lineNumber: 250,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/GetStarted:332:10", "data-dynamic-content": "false", className: "mt-6 text-center", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/GetStarted:333:12", "data-dynamic-content": "false", className: "flex justify-center gap-6 text-gray-400 text-xs", children: [
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/GetStarted:334:14", "data-dynamic-content": "false", children: "🔒 SSL Secured" }, void 0, false, {
              fileName: "/app/src/pages/GetStarted.jsx",
              lineNumber: 353,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/GetStarted:335:14", "data-dynamic-content": "false", children: "✓ GDPR Compliant" }, void 0, false, {
              fileName: "/app/src/pages/GetStarted.jsx",
              lineNumber: 354,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/GetStarted:336:14", "data-dynamic-content": "false", children: "❤️ No Credit Card" }, void 0, false, {
              fileName: "/app/src/pages/GetStarted.jsx",
              lineNumber: 355,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/GetStarted.jsx",
            lineNumber: 352,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/GetStarted.jsx",
            lineNumber: 351,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/src/pages/GetStarted.jsx",
        lineNumber: 246,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/src/pages/GetStarted.jsx",
    lineNumber: 198,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/src/pages/GetStarted.jsx",
    lineNumber: 197,
    columnNumber: 5
  }, this);
}
_s(GetStarted, "i1efZlFvBl5NaOXclSGRMn7xXwY=", false, function() {
  return [useNavigate];
});
_c = GetStarted;
var _c;
$RefreshReg$(_c, "GetStarted");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/GetStarted.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/GetStarted.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QSxZQUNsRyx1QkFBQyxVQUFLLHdCQUFxQiwyQkFBMEIsd0JBQXFCLFNBQVEsaUNBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQW1HO0FBQUEsZUFIckc7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFJQSxLQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTUE7QUFBQTtBQUFBO0FBQUEsTUEvR0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZ0hBO0FBQUEsT0FoS0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWlLQSxLQWxLRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBbUtBO0FBRUo7QUFBQ1IsR0F0VHVCRCxZQUFVO0FBQUEsVUFDZm5CLFdBQVc7QUFBQTtBQUFBNkcsS0FETjFGO0FBQVUsSUFBQTBGO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibW90aW9uIiwiTGluayIsInVzZU5hdmlnYXRlIiwiQnV0dG9uIiwiY3JlYXRlUGFnZVVybCIsInBhZ2VOYW1lIiwiSW5wdXQiLCJMYWJlbCIsIlNlbGVjdCIsIlNlbGVjdENvbnRlbnQiLCJTZWxlY3RJdGVtIiwiU2VsZWN0VHJpZ2dlciIsIlNlbGVjdFZhbHVlIiwiQ2hlY2tib3giLCJiYXNlNDQiLCJTdG9yZSIsIkFycm93UmlnaHQiLCJDaGVjayIsIlNwYXJrbGVzIiwiY2l0aWVzIiwiYmVuZWZpdHMiLCJHZXRTdGFydGVkIiwiX3MiLCJuYXZpZ2F0ZSIsInN0ZXAiLCJzZXRTdGVwIiwiaXNBdXRoZW50aWNhdGVkIiwic2V0SXNBdXRoZW50aWNhdGVkIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaXNDcmVhdGluZyIsInNldElzQ3JlYXRpbmciLCJ1c2VyIiwic2V0VXNlciIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJyZXN0YXVyYW50X25hbWUiLCJjaXR5IiwicGhvbmUiLCJhZ3JlZWRfdG9fdGVybXMiLCJjaGVja0F1dGgiLCJpc0F1dGgiLCJhdXRoIiwidXNlckRhdGEiLCJtZSIsInJvbGUiLCJyZXN0YXVyYW50X2lkIiwicmVwbGFjZSIsInJlc3RhdXJhbnRzIiwiZW50aXRpZXMiLCJSZXN0YXVyYW50IiwiZmlsdGVyIiwibGVuZ3RoIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTaWdudXAiLCJyZWRpcmVjdFRvTG9naW4iLCJnZW5lcmF0ZVJlc3RhdXJhbnRJZCIsInJhbmRvbU51bSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImdlbmVyYXRlU2x1ZyIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImhhbmRsZUNyZWF0ZVJlc3RhdXJhbnQiLCJyZXN0YXVyYW50SWQiLCJzbHVnIiwidHJpYWxFeHBpcmVzIiwiRGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwicmVzdGF1cmFudCIsImNyZWF0ZSIsImVtYWlsIiwic3Vic2NyaXB0aW9uX3BsYW4iLCJzdWJzY3JpcHRpb25fc3RhdHVzIiwic3Vic2NyaXB0aW9uX2V4cGlyZXNfYXQiLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwiaXNfYWN0aXZlIiwib25ib2FyZGluZ19jb21wbGV0ZWQiLCJvbmJvYXJkaW5nX3N0ZXAiLCJvd25lcl91c2VyX2lkIiwiaWQiLCJmZWF0dXJlc19lbmFibGVkIiwicXJfb3JkZXJpbmciLCJkaXJlY3Rfb3JkZXJzIiwicGF5bWVudF9pbnRlZ3JhdGlvbiIsImN1c3RvbWVyX2FuYWx5dGljcyIsIm11bHRpX291dGxldCIsImN1c3RvbV9icmFuZGluZyIsInNldHRpbmdzIiwiY3VycmVuY3kiLCJ0YXhfcmF0ZSIsInNlcnZpY2VfY2hhcmdlIiwiYWNjZXB0X29ubGluZV9wYXltZW50IiwidGFibGVfY291bnQiLCJSZXN0YXVyYW50VXNlciIsInVzZXJfZW1haWwiLCJwZXJtaXNzaW9ucyIsInVwZGF0ZU1lIiwib3BhY2l0eSIsIngiLCJtYXAiLCJiZW5lZml0IiwiX19hcnJJZHhfXyIsInRhcmdldCIsInZhbHVlIiwiY2hlY2tlZCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkdldFN0YXJ0ZWQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcblxuY29uc3QgY3JlYXRlUGFnZVVybCA9IChwYWdlTmFtZSkgPT4gYC8ke3BhZ2VOYW1lfWA7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9sYWJlbFwiO1xuaW1wb3J0IHtcbiAgU2VsZWN0LFxuICBTZWxlY3RDb250ZW50LFxuICBTZWxlY3RJdGVtLFxuICBTZWxlY3RUcmlnZ2VyLFxuICBTZWxlY3RWYWx1ZSB9IGZyb21cblwiQC9jb21wb25lbnRzL3VpL3NlbGVjdFwiO1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NoZWNrYm94XCI7XG5pbXBvcnQgeyBiYXNlNDQgfSBmcm9tIFwiQC9hcGkvYmFzZTQ0Q2xpZW50XCI7XG5pbXBvcnQgeyBTdG9yZSwgQXJyb3dSaWdodCwgQ2hlY2ssIFNwYXJrbGVzIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5jb25zdCBjaXRpZXMgPSBbXG5cIk11bWJhaVwiLCBcIkRlbGhpXCIsIFwiQmFuZ2Fsb3JlXCIsIFwiSHlkZXJhYmFkXCIsIFwiQ2hlbm5haVwiLFxuXCJLb2xrYXRhXCIsIFwiUHVuZVwiLCBcIkFobWVkYWJhZFwiLCBcIkphaXB1clwiLCBcIkx1Y2tub3dcIixcblwiQ2hhbmRpZ2FyaFwiLCBcIkd1cmdhb25cIiwgXCJOb2lkYVwiLCBcIk90aGVyXCJdO1xuXG5cbmNvbnN0IGJlbmVmaXRzID0gW1xuXCIxNC1kYXkgZnJlZSB0cmlhbFwiLFxuXCJObyBjcmVkaXQgY2FyZCByZXF1aXJlZFwiLFxuXCJTZXR1cCBpbiB1bmRlciAxMCBtaW51dGVzXCIsXG5cIkNhbmNlbCBhbnl0aW1lXCJdO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdldFN0YXJ0ZWQoKSB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgW3N0ZXAsIHNldFN0ZXBdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtpc0F1dGhlbnRpY2F0ZWQsIHNldElzQXV0aGVudGljYXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2lzQ3JlYXRpbmcsIHNldElzQ3JlYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICByZXN0YXVyYW50X25hbWU6IFwiXCIsXG4gICAgY2l0eTogXCJcIixcbiAgICBwaG9uZTogXCJcIixcbiAgICBhZ3JlZWRfdG9fdGVybXM6IGZhbHNlXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hlY2tBdXRoKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjaGVja0F1dGggPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGlzQXV0aCA9IGF3YWl0IGJhc2U0NC5hdXRoLmlzQXV0aGVudGljYXRlZCgpO1xuICAgICAgc2V0SXNBdXRoZW50aWNhdGVkKGlzQXV0aCk7XG4gICAgICBpZiAoaXNBdXRoKSB7XG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgYmFzZTQ0LmF1dGgubWUoKTtcbiAgICAgICAgc2V0VXNlcih1c2VyRGF0YSk7XG5cbiAgICAgICAgLy8gU3VwZXIgYWRtaW4gY2hlY2sgLSBpZiBhZG1pbiB3aXRob3V0IHJlc3RhdXJhbnRfaWRcbiAgICAgICAgaWYgKHVzZXJEYXRhLnJvbGUgPT09ICdhZG1pbicgJiYgIXVzZXJEYXRhLnJlc3RhdXJhbnRfaWQpIHtcbiAgICAgICAgICBuYXZpZ2F0ZShjcmVhdGVQYWdlVXJsKFwiU3VwZXJBZG1pbkRhc2hib2FyZFwiKSwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHVzZXIgaGFzIHJlc3RhdXJhbnRfaWQsIHJlZGlyZWN0IHRvIGRhc2hib2FyZFxuICAgICAgICBpZiAodXNlckRhdGE/LnJlc3RhdXJhbnRfaWQpIHtcbiAgICAgICAgICAvLyBWZXJpZnkgcmVzdGF1cmFudCBzdGlsbCBleGlzdHNcbiAgICAgICAgICBjb25zdCByZXN0YXVyYW50cyA9IGF3YWl0IGJhc2U0NC5lbnRpdGllcy5SZXN0YXVyYW50LmZpbHRlcih7XG4gICAgICAgICAgICByZXN0YXVyYW50X2lkOiB1c2VyRGF0YS5yZXN0YXVyYW50X2lkXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAocmVzdGF1cmFudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbmF2aWdhdGUoY3JlYXRlUGFnZVVybChcIkRhc2hib2FyZFwiKSwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVzZXIgYXV0aGVudGljYXRlZCBidXQgbm8gcmVzdGF1cmFudCAtIHNob3cgc2V0dXAgZm9ybVxuICAgICAgICBzZXRTdGVwKDIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTm90IGF1dGhlbnRpY2F0ZWRcIik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNpZ251cCA9ICgpID0+IHtcbiAgICBiYXNlNDQuYXV0aC5yZWRpcmVjdFRvTG9naW4oY3JlYXRlUGFnZVVybChcIkdldFN0YXJ0ZWRcIikpO1xuICB9O1xuXG4gIGNvbnN0IGdlbmVyYXRlUmVzdGF1cmFudElkID0gKCkgPT4ge1xuICAgIGNvbnN0IHJhbmRvbU51bSA9IE1hdGguZmxvb3IoMTAwMDAgKyBNYXRoLnJhbmRvbSgpICogOTAwMDApO1xuICAgIHJldHVybiBgUkVTVF8ke3JhbmRvbU51bX1gO1xuICB9O1xuXG4gIGNvbnN0IGdlbmVyYXRlU2x1ZyA9IChuYW1lKSA9PiB7XG4gICAgcmV0dXJuIG5hbWUuXG4gICAgdG9Mb3dlckNhc2UoKS5cbiAgICByZXBsYWNlKC9bXmEtejAtOV0rL2csICctJykuXG4gICAgcmVwbGFjZSgvKF4tfC0kKS9nLCAnJyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ3JlYXRlUmVzdGF1cmFudCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIWZvcm1EYXRhLnJlc3RhdXJhbnRfbmFtZSB8fCAhZm9ybURhdGEuY2l0eSB8fCAhZm9ybURhdGEucGhvbmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRJc0NyZWF0aW5nKHRydWUpO1xuXG4gICAgY29uc3QgcmVzdGF1cmFudElkID0gZ2VuZXJhdGVSZXN0YXVyYW50SWQoKTtcbiAgICBjb25zdCBzbHVnID0gZ2VuZXJhdGVTbHVnKGZvcm1EYXRhLnJlc3RhdXJhbnRfbmFtZSk7XG5cbiAgICAvLyBTZXQgdHJpYWwgZXhwaXJhdGlvbiB0byAxNCBkYXlzIGZyb20gbm93XG4gICAgY29uc3QgdHJpYWxFeHBpcmVzID0gbmV3IERhdGUoKTtcbiAgICB0cmlhbEV4cGlyZXMuc2V0RGF0ZSh0cmlhbEV4cGlyZXMuZ2V0RGF0ZSgpICsgMTQpO1xuXG4gICAgLy8gQ3JlYXRlIHJlc3RhdXJhbnRcbiAgICBjb25zdCByZXN0YXVyYW50ID0gYXdhaXQgYmFzZTQ0LmVudGl0aWVzLlJlc3RhdXJhbnQuY3JlYXRlKHtcbiAgICAgIHJlc3RhdXJhbnRfaWQ6IHJlc3RhdXJhbnRJZCxcbiAgICAgIG5hbWU6IGZvcm1EYXRhLnJlc3RhdXJhbnRfbmFtZSxcbiAgICAgIHNsdWc6IHNsdWcsXG4gICAgICBjaXR5OiBmb3JtRGF0YS5jaXR5LFxuICAgICAgcGhvbmU6IGZvcm1EYXRhLnBob25lLFxuICAgICAgZW1haWw6IHVzZXI/LmVtYWlsIHx8IFwiXCIsXG4gICAgICBzdWJzY3JpcHRpb25fcGxhbjogXCJ0cmlhbFwiLFxuICAgICAgc3Vic2NyaXB0aW9uX3N0YXR1czogXCJhY3RpdmVcIixcbiAgICAgIHN1YnNjcmlwdGlvbl9leHBpcmVzX2F0OiB0cmlhbEV4cGlyZXMudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdLFxuICAgICAgaXNfYWN0aXZlOiB0cnVlLFxuICAgICAgb25ib2FyZGluZ19jb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgb25ib2FyZGluZ19zdGVwOiAxLFxuICAgICAgb3duZXJfdXNlcl9pZDogdXNlcj8uaWQsXG4gICAgICBmZWF0dXJlc19lbmFibGVkOiB7XG4gICAgICAgIHFyX29yZGVyaW5nOiB0cnVlLFxuICAgICAgICBkaXJlY3Rfb3JkZXJzOiBmYWxzZSxcbiAgICAgICAgcGF5bWVudF9pbnRlZ3JhdGlvbjogZmFsc2UsXG4gICAgICAgIGN1c3RvbWVyX2FuYWx5dGljczogZmFsc2UsXG4gICAgICAgIG11bHRpX291dGxldDogZmFsc2UsXG4gICAgICAgIGN1c3RvbV9icmFuZGluZzogZmFsc2VcbiAgICAgIH0sXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBjdXJyZW5jeTogXCJJTlJcIixcbiAgICAgICAgdGF4X3JhdGU6IDUsXG4gICAgICAgIHNlcnZpY2VfY2hhcmdlOiAwLFxuICAgICAgICBhY2NlcHRfb25saW5lX3BheW1lbnQ6IGZhbHNlLFxuICAgICAgICB0YWJsZV9jb3VudDogMTBcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSByZXN0YXVyYW50IHVzZXIgbWFwcGluZ1xuICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5SZXN0YXVyYW50VXNlci5jcmVhdGUoe1xuICAgICAgcmVzdGF1cmFudF9pZDogcmVzdGF1cmFudElkLFxuICAgICAgdXNlcl9lbWFpbDogdXNlcj8uZW1haWwsXG4gICAgICByb2xlOiBcIm93bmVyXCIsXG4gICAgICBwZXJtaXNzaW9uczogW1wiYWxsXCJdLFxuICAgICAgaXNfYWN0aXZlOiB0cnVlXG4gICAgfSk7XG5cbiAgICAvLyBVcGRhdGUgdXNlciB3aXRoIHJlc3RhdXJhbnRfaWRcbiAgICBhd2FpdCBiYXNlNDQuYXV0aC51cGRhdGVNZSh7XG4gICAgICByZXN0YXVyYW50X2lkOiByZXN0YXVyYW50SWRcbiAgICB9KTtcblxuICAgIC8vIE5hdmlnYXRlIHRvIG9uYm9hcmRpbmcgKHJlcGxhY2UgaGlzdG9yeSB0byBwcmV2ZW50IGJhY2sgbmF2aWdhdGlvbilcbiAgICBuYXZpZ2F0ZShjcmVhdGVQYWdlVXJsKFwiT25ib2FyZGluZ1wiKSwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICB9O1xuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0dldFN0YXJ0ZWQ6MTcxOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwibWluLWgtWzgwdmhdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9HZXRTdGFydGVkOjE3Mjo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImFuaW1hdGUtc3BpbiByb3VuZGVkLWZ1bGwgaC04IHctOCBib3JkZXItYi0yIGJvcmRlci1vcmFuZ2UtNjAwXCI+PC9kaXY+XG4gICAgICA8L2Rpdj4pO1xuXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9HZXRTdGFydGVkOjE3ODo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWluLWgtWzgwdmhdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTQgcHktMTIgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1vcmFuZ2UtNTAgdmlhLXdoaXRlIHRvLW9yYW5nZS01MFwiPlxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0dldFN0YXJ0ZWQ6MTc5OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtYXgtdy01eGwgdy1mdWxsIGdyaWQgbGc6Z3JpZC1jb2xzLTIgZ2FwLTEyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICB7LyogTGVmdCAtIEJlbmVmaXRzICovfVxuICAgICAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0dldFN0YXJ0ZWQ6MTgxOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHg6IC0yMCB9fVxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHg6IDAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmJsb2NrXCI+XG5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvR2V0U3RhcnRlZDoxODY6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGJnLW9yYW5nZS0xMDAgdGV4dC1vcmFuZ2UtNzAwIHB4LTQgcHktMiByb3VuZGVkLWZ1bGwgdGV4dC1zbSBmb250LW1lZGl1bSBtYi02XCI+XG4gICAgICAgICAgICA8U3BhcmtsZXMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9HZXRTdGFydGVkOjE4NzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgIFN0YXJ0IFlvdXIgRnJlZSBUcmlhbFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxoMSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0dldFN0YXJ0ZWQ6MTkxOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwIG1iLTRcIj5cbiAgICAgICAgICAgIFRyYW5zZm9ybSBZb3VyIFJlc3RhdXJhbnQgaW4gTWludXRlc1xuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9HZXRTdGFydGVkOjE5NDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtZ3JheS02MDAgbWItOFwiPlxuICAgICAgICAgICAgSm9pbiBodW5kcmVkcyBvZiByZXN0YXVyYW50cyBhbHJlYWR5IHNhdmluZyB0aG91c2FuZHMgaW4gY29tbWlzc2lvbnMgd2l0aCBSZXN0cm9TYWF0aGkuXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0dldFN0YXJ0ZWQ6MTk4OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICB7YmVuZWZpdHMubWFwKChiZW5lZml0LCBfX2FycklkeF9fKSA9PlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0dldFN0YXJ0ZWQ6MjAwOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtiZW5lZml0fSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiIGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwiYmVuZWZpdHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvR2V0U3RhcnRlZDoyMDE6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy02IGgtNiBiZy1ncmVlbi0xMDAgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCIgZGF0YS1hcnItaW5kZXg9e19fYXJySWR4X199IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJiZW5lZml0c1wiPlxuICAgICAgICAgICAgICAgICAgPENoZWNrIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvR2V0U3RhcnRlZDoyMDI6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWdyZWVuLTYwMFwiIGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwiYmVuZWZpdHNcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvR2V0U3RhcnRlZDoyMDQ6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCIgZGF0YS1hcnItaW5kZXg9e19fYXJySWR4X199IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJiZW5lZml0c1wiPntiZW5lZml0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICAgICAgICBcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgIHsvKiBSaWdodCAtIEZvcm0gKi99XG4gICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvR2V0U3RhcnRlZDoyMjc6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogMjAgfX1cbiAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB4OiAwIH19PlxuXG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0dldFN0YXJ0ZWQ6MjMxOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgc2hhZG93LXhsIGJvcmRlciBib3JkZXItZ3JheS0xMDAgcC04XCI+XG4gICAgICAgICAgICB7LyogTG9nbyAqL31cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9HZXRTdGFydGVkOjIzMzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLThcIj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0dldFN0YXJ0ZWQ6MjM0OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImJnLXNsYXRlLTkwMCBtYi00IG14LWF1dG8gcm91bmRlZC0yeGwgdy0xNiBoLTE2IGZyb20tb3JhbmdlLTYwMCB0by1vcmFuZ2UtNTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPFN0b3JlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvR2V0U3RhcnRlZDoyMzU6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy04IGgtOCB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0dldFN0YXJ0ZWQ6MjM3OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICB7c3RlcCA9PT0gMSA/IFwiR2V0IFN0YXJ0ZWRcIiA6IFwiU2V0dXAgWW91ciBSZXN0YXVyYW50XCJ9XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvR2V0U3RhcnRlZDoyNDA6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIG10LTJcIj5cbiAgICAgICAgICAgICAgICB7c3RlcCA9PT0gMSA/XG4gICAgICAgICAgICAgICAgXCJTaWduIGluIHRvIHN0YXJ0IHlvdXIgMTQtZGF5IGZyZWUgdHJpYWxcIiA6XG4gICAgICAgICAgICAgICAgXCJKdXN0IGEgZmV3IGRldGFpbHMgdG8gZ2V0IHlvdSBzdGFydGVkXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogU3RlcCAxOiBTaWduIHVwICovfVxuICAgICAgICAgICAge3N0ZXAgPT09IDEgJiZcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0dldFN0YXJ0ZWQ6MjUxOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2lnbnVwfSBjbGFzc05hbWU9XCJiZy1zbGF0ZS05MDAgdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgcHgtNCBweS02IHRleHQtbGcgZm9udC1tZWRpdW0gcm91bmRlZC1tZCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgd2hpdGVzcGFjZS1ub3dyYXAgdHJhbnNpdGlvbi1jb2xvcnMgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW5vbmUgZm9jdXMtdmlzaWJsZTpyaW5nLTEgZm9jdXMtdmlzaWJsZTpyaW5nLXJpbmcgZGlzYWJsZWQ6cG9pbnRlci1ldmVudHMtbm9uZSBkaXNhYmxlZDpvcGFjaXR5LTUwIFsmX3N2Z106cG9pbnRlci1ldmVudHMtbm9uZSBbJl9zdmddOnNpemUtNCBbJl9zdmddOnNocmluay0wIHNoYWRvdyBob3ZlcjpiZy1wcmltYXJ5LzkwIGgtOSB3LWZ1bGwgZnJvbS1vcmFuZ2UtNjAwIHRvLW9yYW5nZS01MDAgaG92ZXI6ZnJvbS1vcmFuZ2UtNzAwIGhvdmVyOnRvLW9yYW5nZS02MDBcIj5cblxuXG4gICAgICAgICAgICAgICAgICBDb250aW51ZSB3aXRoIEVtYWlsXG4gICAgICAgICAgICAgICAgICA8QXJyb3dSaWdodCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0dldFN0YXJ0ZWQ6MjU2OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTUgbWwtMlwiIC8+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0dldFN0YXJ0ZWQ6MjU5OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtZ3JheS01MDAgdGV4dC1zbSBtdC02XCI+XG4gICAgICAgICAgICAgICAgICBCeSBjb250aW51aW5nLCB5b3UgYWdyZWUgdG8gb3VyIFRlcm1zIG9mIFNlcnZpY2UgYW5kIFByaXZhY3kgUG9saWN5XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgey8qIFN0ZXAgMjogUmVzdGF1cmFudCBEZXRhaWxzICovfVxuICAgICAgICAgICAge3N0ZXAgPT09IDIgJiZcbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9HZXRTdGFydGVkOjI2NzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9HZXRTdGFydGVkOjI2ODoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgPExhYmVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvR2V0U3RhcnRlZDoyNjk6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgaHRtbEZvcj1cInJlc3RhdXJhbnRfbmFtZVwiPlJlc3RhdXJhbnQgTmFtZSAqPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0dldFN0YXJ0ZWQ6MjcwOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBpZD1cInJlc3RhdXJhbnRfbmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnJlc3RhdXJhbnRfbmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIHJlc3RhdXJhbnRfbmFtZTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuLCBTcGljZSBHYXJkZW5cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTFcIiAvPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvR2V0U3RhcnRlZDoyNzk6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgIDxMYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0dldFN0YXJ0ZWQ6MjgwOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGh0bWxGb3I9XCJjaXR5XCI+Q2l0eSAqPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxTZWxlY3QgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9HZXRTdGFydGVkOjI4MToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmNpdHl9XG4gICAgICAgICAgICAgICAgb25WYWx1ZUNoYW5nZT17KHZhbHVlKSA9PiBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBjaXR5OiB2YWx1ZSB9KX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFRyaWdnZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9HZXRTdGFydGVkOjI4NToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJtdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFZhbHVlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvR2V0U3RhcnRlZDoyODY6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgcGxhY2Vob2xkZXI9XCJTZWxlY3QgeW91ciBjaXR5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3RUcmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Q29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0dldFN0YXJ0ZWQ6Mjg4OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2NpdGllcy5tYXAoKGNpdHksIF9fYXJySWR4X18pID0+XG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvR2V0U3RhcnRlZDoyOTA6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2NpdHl9IHZhbHVlPXtjaXR5fSBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cImNpdGllc1wiPntjaXR5fTwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3RDb250ZW50PlxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvR2V0U3RhcnRlZDoyOTY6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgIDxMYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0dldFN0YXJ0ZWQ6Mjk3OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGh0bWxGb3I9XCJwaG9uZVwiPlBob25lIE51bWJlciAqPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0dldFN0YXJ0ZWQ6Mjk4OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBpZD1cInBob25lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucGhvbmV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBwaG9uZTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIrOTEgOTg3NjUgNDMyMTBcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTFcIiAvPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvR2V0U3RhcnRlZDozMDc6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9HZXRTdGFydGVkOjMwODoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJ0ZXJtc1wiXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17Zm9ybURhdGEuYWdyZWVkX3RvX3Rlcm1zfVxuICAgICAgICAgICAgICAgIG9uQ2hlY2tlZENoYW5nZT17KGNoZWNrZWQpID0+IHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIGFncmVlZF90b190ZXJtczogY2hlY2tlZCB9KX0gLz5cblxuICAgICAgICAgICAgICAgICAgPExhYmVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvR2V0U3RhcnRlZDozMTM6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgaHRtbEZvcj1cInRlcm1zXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwIGxlYWRpbmctcmVsYXhlZCBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICBJIGFncmVlIHRvIHRoZSA8YSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0dldFN0YXJ0ZWQ6MzE0OjM1XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtNjAwIGhvdmVyOnVuZGVybGluZVwiPlRlcm1zIG9mIFNlcnZpY2U8L2E+IGFuZHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgPGEgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9HZXRTdGFydGVkOjMxNToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTYwMCBob3Zlcjp1bmRlcmxpbmVcIj5Qcml2YWN5IFBvbGljeTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvR2V0U3RhcnRlZDozMTk6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDcmVhdGVSZXN0YXVyYW50fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWZvcm1EYXRhLnJlc3RhdXJhbnRfbmFtZSB8fCAhZm9ybURhdGEuY2l0eSB8fCAhZm9ybURhdGEucGhvbmUgfHwgIWZvcm1EYXRhLmFncmVlZF90b190ZXJtcyB8fCBpc0NyZWF0aW5nfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLW9yYW5nZS02MDAgdG8tb3JhbmdlLTUwMCBob3Zlcjpmcm9tLW9yYW5nZS03MDAgaG92ZXI6dG8tb3JhbmdlLTYwMCBweS02IHRleHQtbGdcIj5cblxuICAgICAgICAgICAgICAgICAge2lzQ3JlYXRpbmcgPyBcIkNyZWF0aW5nIFlvdXIgUmVzdGF1cmFudC4uLlwiIDogXCJTdGFydCBNeSBGcmVlIFRyaWFsXCJ9XG4gICAgICAgICAgICAgICAgICA8QXJyb3dSaWdodCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0dldFN0YXJ0ZWQ6MzI1OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTUgbWwtMlwiIC8+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFRydXN0IGJhZGdlcyAqL31cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvR2V0U3RhcnRlZDozMzI6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwibXQtNiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0dldFN0YXJ0ZWQ6MzMzOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTYgdGV4dC1ncmF5LTQwMCB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvR2V0U3RhcnRlZDozMzQ6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+8J+UkiBTU0wgU2VjdXJlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9HZXRTdGFydGVkOjMzNToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj7inJMgR0RQUiBDb21wbGlhbnQ8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvR2V0U3RhcnRlZDozMzY6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+4p2k77iPIE5vIENyZWRpdCBDYXJkPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2Pik7XG5cbn0iXSwiZmlsZSI6Ii9hcHAvc3JjL3BhZ2VzL0dldFN0YXJ0ZWQuanN4In0=