import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Onboarding.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/Onboarding.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { base44 } from "/src/api/base44Client.js";
import { Button } from "/src/components/ui/button.jsx";
import { Input } from "/src/components/ui/input.jsx";
import { Textarea } from "/src/components/ui/textarea.jsx";
import { Label } from "/src/components/ui/label.jsx";
import { Card, CardContent } from "/src/components/ui/card.jsx";
import { Badge } from "/src/components/ui/badge.jsx";
import { motion, AnimatePresence } from "/node_modules/.vite/deps/framer-motion.js?v=79425e35";
import {
  Store,
  MapPin,
  Upload,
  Utensils,
  CreditCard,
  Check,
  ChevronRight,
  Sparkles,
  Image as ImageIcon
} from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
const cuisineOptions = [
  "Indian",
  "Chinese",
  "Italian",
  "Mexican",
  "Thai",
  "Japanese",
  "Continental",
  "Fast Food",
  "Bakery",
  "Cafe",
  "Desserts",
  "Beverages"
];
const defaultCategories = [
  "Starters",
  "Main Course",
  "Breads",
  "Rice",
  "Desserts",
  "Beverages"
];
export default function Onboarding() {
  _s();
  const [currentStep, setCurrentStep] = useState(1);
  const [restaurant, setRestaurant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    address: "",
    cuisine_type: [],
    opening_hours: {
      monday: "9:00 AM - 10:00 PM",
      tuesday: "9:00 AM - 10:00 PM",
      wednesday: "9:00 AM - 10:00 PM",
      thursday: "9:00 AM - 10:00 PM",
      friday: "9:00 AM - 10:00 PM",
      saturday: "9:00 AM - 10:00 PM",
      sunday: "9:00 AM - 10:00 PM"
    }
  });
  const [logoFile, setLogoFile] = useState(null);
  const [coverFile, setCoverFile] = useState(null);
  const [categories, setCategories] = useState(defaultCategories);
  const [newCategory, setNewCategory] = useState("");
  const [paymentSettings, setPaymentSettings] = useState({
    accept_online_payment: false,
    razorpay_key_id: "",
    razorpay_key_secret: ""
  });
  useEffect(() => {
    loadRestaurant();
  }, []);
  const loadRestaurant = async () => {
    try {
      const user = await base44.auth.me();
      if (user.restaurant_id) {
        const restaurants = await base44.entities.Restaurant.filter({
          restaurant_id: user.restaurant_id
        });
        if (restaurants.length > 0) {
          const rest = restaurants[0];
          setRestaurant(rest);
          setCurrentStep(rest.onboarding_step || 1);
          if (rest.onboarding_completed) {
            window.location.href = "/Dashboard";
          }
        }
      }
    } catch (e) {
      console.error("Failed to load restaurant", e);
    }
    setIsLoading(false);
  };
  const handleNext = async () => {
    setIsSaving(true);
    try {
      if (currentStep === 1) {
        await base44.entities.Restaurant.update(restaurant.id, {
          address: formData.address,
          cuisine_type: formData.cuisine_type,
          opening_hours: formData.opening_hours,
          onboarding_step: 2
        });
      } else if (currentStep === 2) {
        let updates = { onboarding_step: 3 };
        if (logoFile) {
          const logoResult = await base44.integrations.Core.UploadFile({ file: logoFile });
          updates.logo_url = logoResult.file_url;
        }
        if (coverFile) {
          const coverResult = await base44.integrations.Core.UploadFile({ file: coverFile });
          updates.cover_image_url = coverResult.file_url;
        }
        await base44.entities.Restaurant.update(restaurant.id, updates);
      } else if (currentStep === 3) {
        for (const category of categories) {
          const existing = await base44.entities.MenuCategory.filter({
            restaurant_id: restaurant.restaurant_id,
            name: category
          });
          if (existing.length === 0) {
            await base44.entities.MenuCategory.create({
              restaurant_id: restaurant.restaurant_id,
              name: category,
              sort_order: categories.indexOf(category),
              is_active: true
            });
          }
        }
        await base44.entities.Restaurant.update(restaurant.id, {
          onboarding_step: 4
        });
      } else if (currentStep === 4) {
        await base44.entities.Restaurant.update(restaurant.id, {
          razorpay_key_id: paymentSettings.razorpay_key_id || null,
          razorpay_key_secret: paymentSettings.razorpay_key_secret || null,
          settings: {
            ...restaurant.settings,
            accept_online_payment: paymentSettings.accept_online_payment
          },
          onboarding_completed: true,
          onboarding_step: 5
        });
        window.location.href = "/Dashboard";
        return;
      }
      setCurrentStep(currentStep + 1);
      loadRestaurant();
    } catch (e) {
      console.error("Failed to save", e);
      alert("Failed to save. Please try again.");
    }
    setIsSaving(false);
  };
  const handleSkip = async () => {
    if (currentStep === 4) {
      await base44.entities.Restaurant.update(restaurant.id, {
        onboarding_completed: true,
        onboarding_step: 5
      });
      window.location.href = "/Dashboard";
    } else {
      setCurrentStep(currentStep + 1);
    }
  };
  const toggleCuisine = (cuisine) => {
    if (formData.cuisine_type.includes(cuisine)) {
      setFormData({
        ...formData,
        cuisine_type: formData.cuisine_type.filter((c) => c !== cuisine)
      });
    } else {
      setFormData({
        ...formData,
        cuisine_type: [...formData.cuisine_type, cuisine]
      });
    }
  };
  const addCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory("");
    }
  };
  const removeCategory = (category) => {
    setCategories(categories.filter((c) => c !== category));
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:190:6", "data-dynamic-content": "false", className: "min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:191:8", "data-dynamic-content": "false", className: "text-center", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:192:10", "data-dynamic-content": "false", className: "animate-spin rounded-full h-10 w-10 border-b-2 border-orange-600 mx-auto mb-4" }, void 0, false, {
        fileName: "/app/src/pages/Onboarding.jsx",
        lineNumber: 211,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Onboarding:193:10", "data-dynamic-content": "false", className: "text-gray-500", children: "Loading..." }, void 0, false, {
        fileName: "/app/src/pages/Onboarding.jsx",
        lineNumber: 212,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Onboarding.jsx",
      lineNumber: 210,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/Onboarding.jsx",
      lineNumber: 209,
      columnNumber: 7
    }, this);
  }
  const steps = [
    { number: 1, title: "Restaurant Details", icon: Store },
    { number: 2, title: "Branding", icon: ImageIcon },
    { number: 3, title: "Menu Categories", icon: Utensils },
    { number: 4, title: "Payment Setup", icon: CreditCard }
  ];
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:207:4", "data-dynamic-content": "true", className: "min-h-screen bg-gradient-to-br from-orange-50 to-orange-100", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:209:6", "data-dynamic-content": "true", className: "bg-white border-b shadow-sm", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:210:8", "data-dynamic-content": "true", className: "max-w-4xl mx-auto px-4 py-6", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:211:10", "data-dynamic-content": "true", className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:212:12", "data-dynamic-content": "false", className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:213:14", "data-dynamic-content": "false", className: "w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Sparkles, { "data-source-location": "pages/Onboarding:214:16", "data-dynamic-content": "false", className: "w-5 h-5 text-white" }, void 0, false, {
            fileName: "/app/src/pages/Onboarding.jsx",
            lineNumber: 233,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/Onboarding.jsx",
            lineNumber: 232,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:216:14", "data-dynamic-content": "false", children: [
            /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/Onboarding:217:16", "data-dynamic-content": "false", className: "text-2xl font-bold text-gray-900", children: "Welcome to RestroSaathi " }, void 0, false, {
              fileName: "/app/src/pages/Onboarding.jsx",
              lineNumber: 236,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Onboarding:218:16", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Let's set up your restaurant in 4 easy steps" }, void 0, false, {
              fileName: "/app/src/pages/Onboarding.jsx",
              lineNumber: 237,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Onboarding.jsx",
            lineNumber: 235,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/Onboarding.jsx",
          lineNumber: 231,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/Onboarding:221:12", "data-dynamic-content": "true", className: "bg-orange-600 text-white", "data-collection-item-field": "currentStep", children: [
          "Step ",
          currentStep,
          " of 4"
        ] }, void 0, true, {
          fileName: "/app/src/pages/Onboarding.jsx",
          lineNumber: 240,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/Onboarding.jsx",
        lineNumber: 230,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:227:10", "data-dynamic-content": "true", className: "mt-6 flex items-center gap-2", children: steps.map(
        (step, idx) => /* @__PURE__ */ jsxDEV(React.Fragment, { "data-source-location": "pages/Onboarding:229:12", "data-dynamic-content": "true", "data-arr-index": idx, "data-arr-variable-name": "steps", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:230:16", "data-dynamic-content": "true", className: "flex items-center gap-2", "data-arr-index": idx, "data-arr-variable-name": "steps", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:231:18", "data-dynamic-content": "true", className: `w-8 h-8 rounded-full flex items-center justify-center ${currentStep > step.number ? "bg-green-600 text-white" : currentStep === step.number ? "bg-orange-600 text-white" : "bg-gray-200 text-gray-400"}`, "data-arr-index": idx, "data-arr-variable-name": "steps", children: currentStep > step.number ? /* @__PURE__ */ jsxDEV(Check, { "data-source-location": "pages/Onboarding:236:49", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
              fileName: "/app/src/pages/Onboarding.jsx",
              lineNumber: 255,
              columnNumber: 50
            }, this) : step.number }, void 0, false, {
              fileName: "/app/src/pages/Onboarding.jsx",
              lineNumber: 250,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Onboarding:238:18", "data-dynamic-content": "true", className: `text-xs hidden md:inline ${currentStep >= step.number ? "text-gray-900 font-medium" : "text-gray-400"}`, "data-arr-index": idx, "data-arr-variable-name": "steps", "data-arr-field": "title", children: step.title }, void 0, false, {
              fileName: "/app/src/pages/Onboarding.jsx",
              lineNumber: 257,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Onboarding.jsx",
            lineNumber: 249,
            columnNumber: 17
          }, this),
          idx < steps.length - 1 && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:245:14", "data-dynamic-content": "true", className: `flex-1 h-1 rounded ${currentStep > step.number ? "bg-green-600" : "bg-gray-200"}` }, void 0, false, {
            fileName: "/app/src/pages/Onboarding.jsx",
            lineNumber: 264,
            columnNumber: 15
          }, this)
        ] }, step.number, true, {
          fileName: "/app/src/pages/Onboarding.jsx",
          lineNumber: 248,
          columnNumber: 13
        }, this)
      ) }, void 0, false, {
        fileName: "/app/src/pages/Onboarding.jsx",
        lineNumber: 246,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Onboarding.jsx",
      lineNumber: 229,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/Onboarding.jsx",
      lineNumber: 228,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:256:6", "data-dynamic-content": "true", className: "max-w-4xl mx-auto px-4 py-8", children: /* @__PURE__ */ jsxDEV(AnimatePresence, { "data-source-location": "pages/Onboarding:257:8", "data-dynamic-content": "true", mode: "wait", children: [
      currentStep === 1 && /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-source-location": "pages/Onboarding:260:10",
          "data-dynamic-content": "true",
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -20 },
          children: /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/Onboarding:266:14", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/Onboarding:267:16", "data-dynamic-content": "true", className: "p-8 space-y-6", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:268:18", "data-dynamic-content": "false", className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:269:20", "data-dynamic-content": "false", className: "w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Store, { "data-source-location": "pages/Onboarding:270:22", "data-dynamic-content": "false", className: "w-6 h-6 text-orange-600" }, void 0, false, {
                fileName: "/app/src/pages/Onboarding.jsx",
                lineNumber: 289,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "/app/src/pages/Onboarding.jsx",
                lineNumber: 288,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:272:20", "data-dynamic-content": "false", children: [
                /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "pages/Onboarding:273:22", "data-dynamic-content": "false", className: "text-2xl font-bold", children: "Restaurant Details" }, void 0, false, {
                  fileName: "/app/src/pages/Onboarding.jsx",
                  lineNumber: 292,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Onboarding:274:22", "data-dynamic-content": "false", className: "text-gray-500", children: "Tell us about your restaurant" }, void 0, false, {
                  fileName: "/app/src/pages/Onboarding.jsx",
                  lineNumber: 293,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/Onboarding.jsx",
                lineNumber: 291,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Onboarding.jsx",
              lineNumber: 287,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:278:18", "data-dynamic-content": "true", className: "space-y-4", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:279:20", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/Onboarding:280:22", "data-dynamic-content": "false", children: "Restaurant Address *" }, void 0, false, {
                  fileName: "/app/src/pages/Onboarding.jsx",
                  lineNumber: 299,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV(
                  Textarea,
                  {
                    "data-source-location": "pages/Onboarding:281:22",
                    "data-dynamic-content": "true",
                    placeholder: "Enter complete address",
                    value: formData.address,
                    onChange: (e) => setFormData({ ...formData, address: e.target.value }),
                    rows: 3
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/pages/Onboarding.jsx",
                    lineNumber: 300,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/src/pages/Onboarding.jsx",
                lineNumber: 298,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:289:20", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/Onboarding:290:22", "data-dynamic-content": "false", children: "Cuisine Type *" }, void 0, false, {
                  fileName: "/app/src/pages/Onboarding.jsx",
                  lineNumber: 309,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Onboarding:291:22", "data-dynamic-content": "false", className: "text-sm text-gray-500 mb-3", children: "Select all that apply" }, void 0, false, {
                  fileName: "/app/src/pages/Onboarding.jsx",
                  lineNumber: 310,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:292:22", "data-dynamic-content": "true", className: "grid grid-cols-2 md:grid-cols-3 gap-2", children: cuisineOptions.map(
                  (cuisine, __arrIdx__) => /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      "data-source-location": "pages/Onboarding:294:22",
                      "data-dynamic-content": "true",
                      onClick: () => toggleCuisine(cuisine),
                      className: `p-3 rounded-lg border-2 text-sm font-medium transition-all ${formData.cuisine_type.includes(cuisine) ? "border-orange-600 bg-orange-50 text-orange-600" : "border-gray-200 hover:border-gray-300"}`,
                      "data-arr-index": __arrIdx__,
                      "data-arr-variable-name": "cuisineOptions",
                      children: cuisine
                    },
                    cuisine,
                    false,
                    {
                      fileName: "/app/src/pages/Onboarding.jsx",
                      lineNumber: 313,
                      columnNumber: 23
                    },
                    this
                  )
                ) }, void 0, false, {
                  fileName: "/app/src/pages/Onboarding.jsx",
                  lineNumber: 311,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/Onboarding.jsx",
                lineNumber: 308,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:309:20", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/Onboarding:310:22", "data-dynamic-content": "false", children: "Opening Hours" }, void 0, false, {
                  fileName: "/app/src/pages/Onboarding.jsx",
                  lineNumber: 329,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Onboarding:311:22", "data-dynamic-content": "false", className: "text-sm text-gray-500 mb-3", children: "Default hours for all days (you can customize later)" }, void 0, false, {
                  fileName: "/app/src/pages/Onboarding.jsx",
                  lineNumber: 330,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV(
                  Input,
                  {
                    "data-source-location": "pages/Onboarding:312:22",
                    "data-dynamic-content": "true",
                    placeholder: "e.g., 9:00 AM - 10:00 PM",
                    value: formData.opening_hours.monday,
                    onChange: (e) => {
                      const hours = e.target.value;
                      setFormData({
                        ...formData,
                        opening_hours: {
                          monday: hours,
                          tuesday: hours,
                          wednesday: hours,
                          thursday: hours,
                          friday: hours,
                          saturday: hours,
                          sunday: hours
                        }
                      });
                    }
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/pages/Onboarding.jsx",
                    lineNumber: 331,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/src/pages/Onboarding.jsx",
                lineNumber: 328,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Onboarding.jsx",
              lineNumber: 297,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:334:18", "data-dynamic-content": "true", className: "flex justify-end gap-3 pt-4", children: /* @__PURE__ */ jsxDEV(
              Button,
              {
                "data-source-location": "pages/Onboarding:335:20",
                "data-dynamic-content": "true",
                onClick: handleNext,
                disabled: !formData.address || formData.cuisine_type.length === 0 || isSaving,
                className: "bg-orange-600 hover:bg-orange-700",
                children: [
                  isSaving ? "Saving..." : "Next Step",
                  /* @__PURE__ */ jsxDEV(ChevronRight, { "data-source-location": "pages/Onboarding:341:22", "data-dynamic-content": "false", className: "w-4 h-4 ml-2" }, void 0, false, {
                    fileName: "/app/src/pages/Onboarding.jsx",
                    lineNumber: 360,
                    columnNumber: 23
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/src/pages/Onboarding.jsx",
                lineNumber: 354,
                columnNumber: 21
              },
              this
            ) }, void 0, false, {
              fileName: "/app/src/pages/Onboarding.jsx",
              lineNumber: 353,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Onboarding.jsx",
            lineNumber: 286,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/Onboarding.jsx",
            lineNumber: 285,
            columnNumber: 15
          }, this)
        },
        "step1",
        false,
        {
          fileName: "/app/src/pages/Onboarding.jsx",
          lineNumber: 279,
          columnNumber: 11
        },
        this
      ),
      currentStep === 2 && /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-source-location": "pages/Onboarding:351:10",
          "data-dynamic-content": "true",
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -20 },
          children: /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/Onboarding:357:14", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/Onboarding:358:16", "data-dynamic-content": "true", className: "p-8 space-y-6", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:359:18", "data-dynamic-content": "false", className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:360:20", "data-dynamic-content": "false", className: "w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(ImageIcon, { "data-source-location": "pages/Onboarding:361:22", "data-dynamic-content": "false", className: "w-6 h-6 text-orange-600" }, void 0, false, {
                fileName: "/app/src/pages/Onboarding.jsx",
                lineNumber: 380,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "/app/src/pages/Onboarding.jsx",
                lineNumber: 379,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:363:20", "data-dynamic-content": "false", children: [
                /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "pages/Onboarding:364:22", "data-dynamic-content": "false", className: "text-2xl font-bold", children: "Branding" }, void 0, false, {
                  fileName: "/app/src/pages/Onboarding.jsx",
                  lineNumber: 383,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Onboarding:365:22", "data-dynamic-content": "false", className: "text-gray-500", children: "Upload your logo and cover image" }, void 0, false, {
                  fileName: "/app/src/pages/Onboarding.jsx",
                  lineNumber: 384,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/Onboarding.jsx",
                lineNumber: 382,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Onboarding.jsx",
              lineNumber: 378,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:369:18", "data-dynamic-content": "true", className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:370:20", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/Onboarding:371:22", "data-dynamic-content": "false", children: "Restaurant Logo" }, void 0, false, {
                  fileName: "/app/src/pages/Onboarding.jsx",
                  lineNumber: 390,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:372:22", "data-dynamic-content": "true", className: "mt-2 border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-orange-400 transition-colors cursor-pointer", children: [
                  /* @__PURE__ */ jsxDEV(
                    "input",
                    {
                      "data-source-location": "pages/Onboarding:373:24",
                      "data-dynamic-content": "true",
                      type: "file",
                      accept: "image/*",
                      onChange: (e) => setLogoFile(e.target.files[0]),
                      className: "hidden",
                      id: "logo-upload"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/src/pages/Onboarding.jsx",
                      lineNumber: 392,
                      columnNumber: 25
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV("label", { "data-source-location": "pages/Onboarding:380:24", "data-dynamic-content": "true", htmlFor: "logo-upload", className: "cursor-pointer", children: logoFile ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:382:24", "data-dynamic-content": "true", children: [
                    /* @__PURE__ */ jsxDEV(
                      "img",
                      {
                        "data-source-location": "pages/Onboarding:383:30",
                        "data-dynamic-content": "true",
                        src: URL.createObjectURL(logoFile),
                        alt: "Logo preview",
                        className: "w-32 h-32 mx-auto object-cover rounded-xl mb-3"
                      },
                      void 0,
                      false,
                      {
                        fileName: "/app/src/pages/Onboarding.jsx",
                        lineNumber: 402,
                        columnNumber: 31
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Onboarding:388:30", "data-dynamic-content": "true", className: "text-sm text-green-600 font-medium", "data-collection-item-field": "name", "data-collection-item-id": logoFile?.id || logoFile?._id, children: logoFile.name }, void 0, false, {
                      fileName: "/app/src/pages/Onboarding.jsx",
                      lineNumber: 407,
                      columnNumber: 31
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/Onboarding.jsx",
                    lineNumber: 401,
                    columnNumber: 25
                  }, this) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:391:24", "data-dynamic-content": "false", children: [
                    /* @__PURE__ */ jsxDEV(Upload, { "data-source-location": "pages/Onboarding:392:30", "data-dynamic-content": "false", className: "w-12 h-12 text-gray-400 mx-auto mb-3" }, void 0, false, {
                      fileName: "/app/src/pages/Onboarding.jsx",
                      lineNumber: 411,
                      columnNumber: 31
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Onboarding:393:30", "data-dynamic-content": "false", className: "text-sm text-gray-600", children: "Click to upload logo" }, void 0, false, {
                      fileName: "/app/src/pages/Onboarding.jsx",
                      lineNumber: 412,
                      columnNumber: 31
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Onboarding:394:30", "data-dynamic-content": "false", className: "text-xs text-gray-400 mt-1", children: "Recommended: Square, 500x500px" }, void 0, false, {
                      fileName: "/app/src/pages/Onboarding.jsx",
                      lineNumber: 413,
                      columnNumber: 31
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/Onboarding.jsx",
                    lineNumber: 410,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "/app/src/pages/Onboarding.jsx",
                    lineNumber: 399,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/Onboarding.jsx",
                  lineNumber: 391,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/Onboarding.jsx",
                lineNumber: 389,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:401:20", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/Onboarding:402:22", "data-dynamic-content": "false", children: "Cover Image" }, void 0, false, {
                  fileName: "/app/src/pages/Onboarding.jsx",
                  lineNumber: 421,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:403:22", "data-dynamic-content": "true", className: "mt-2 border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-orange-400 transition-colors cursor-pointer", children: [
                  /* @__PURE__ */ jsxDEV(
                    "input",
                    {
                      "data-source-location": "pages/Onboarding:404:24",
                      "data-dynamic-content": "true",
                      type: "file",
                      accept: "image/*",
                      onChange: (e) => setCoverFile(e.target.files[0]),
                      className: "hidden",
                      id: "cover-upload"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/src/pages/Onboarding.jsx",
                      lineNumber: 423,
                      columnNumber: 25
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV("label", { "data-source-location": "pages/Onboarding:411:24", "data-dynamic-content": "true", htmlFor: "cover-upload", className: "cursor-pointer", children: coverFile ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:413:24", "data-dynamic-content": "true", children: [
                    /* @__PURE__ */ jsxDEV(
                      "img",
                      {
                        "data-source-location": "pages/Onboarding:414:30",
                        "data-dynamic-content": "true",
                        src: URL.createObjectURL(coverFile),
                        alt: "Cover preview",
                        className: "w-full h-32 object-cover rounded-xl mb-3"
                      },
                      void 0,
                      false,
                      {
                        fileName: "/app/src/pages/Onboarding.jsx",
                        lineNumber: 433,
                        columnNumber: 31
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Onboarding:419:30", "data-dynamic-content": "true", className: "text-sm text-green-600 font-medium", "data-collection-item-field": "name", "data-collection-item-id": coverFile?.id || coverFile?._id, children: coverFile.name }, void 0, false, {
                      fileName: "/app/src/pages/Onboarding.jsx",
                      lineNumber: 438,
                      columnNumber: 31
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/Onboarding.jsx",
                    lineNumber: 432,
                    columnNumber: 25
                  }, this) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:422:24", "data-dynamic-content": "false", children: [
                    /* @__PURE__ */ jsxDEV(Upload, { "data-source-location": "pages/Onboarding:423:30", "data-dynamic-content": "false", className: "w-12 h-12 text-gray-400 mx-auto mb-3" }, void 0, false, {
                      fileName: "/app/src/pages/Onboarding.jsx",
                      lineNumber: 442,
                      columnNumber: 31
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Onboarding:424:30", "data-dynamic-content": "false", className: "text-sm text-gray-600", children: "Click to upload cover" }, void 0, false, {
                      fileName: "/app/src/pages/Onboarding.jsx",
                      lineNumber: 443,
                      columnNumber: 31
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Onboarding:425:30", "data-dynamic-content": "false", className: "text-xs text-gray-400 mt-1", children: "Recommended: 1200x400px" }, void 0, false, {
                      fileName: "/app/src/pages/Onboarding.jsx",
                      lineNumber: 444,
                      columnNumber: 31
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/Onboarding.jsx",
                    lineNumber: 441,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "/app/src/pages/Onboarding.jsx",
                    lineNumber: 430,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/Onboarding.jsx",
                  lineNumber: 422,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/Onboarding.jsx",
                lineNumber: 420,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Onboarding.jsx",
              lineNumber: 388,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:433:18", "data-dynamic-content": "true", className: "flex justify-between pt-4", children: [
              /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/Onboarding:434:20", "data-dynamic-content": "true", variant: "outline", onClick: handleSkip, children: "Skip for now" }, void 0, false, {
                fileName: "/app/src/pages/Onboarding.jsx",
                lineNumber: 453,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV(
                Button,
                {
                  "data-source-location": "pages/Onboarding:437:20",
                  "data-dynamic-content": "true",
                  onClick: handleNext,
                  disabled: isSaving,
                  className: "bg-orange-600 hover:bg-orange-700",
                  children: [
                    isSaving ? "Saving..." : "Next Step",
                    /* @__PURE__ */ jsxDEV(ChevronRight, { "data-source-location": "pages/Onboarding:443:22", "data-dynamic-content": "false", className: "w-4 h-4 ml-2" }, void 0, false, {
                      fileName: "/app/src/pages/Onboarding.jsx",
                      lineNumber: 462,
                      columnNumber: 23
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/src/pages/Onboarding.jsx",
                  lineNumber: 456,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/pages/Onboarding.jsx",
              lineNumber: 452,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Onboarding.jsx",
            lineNumber: 377,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/Onboarding.jsx",
            lineNumber: 376,
            columnNumber: 15
          }, this)
        },
        "step2",
        false,
        {
          fileName: "/app/src/pages/Onboarding.jsx",
          lineNumber: 370,
          columnNumber: 11
        },
        this
      ),
      currentStep === 3 && /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-source-location": "pages/Onboarding:453:10",
          "data-dynamic-content": "true",
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -20 },
          children: /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/Onboarding:459:14", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/Onboarding:460:16", "data-dynamic-content": "true", className: "p-8 space-y-6", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:461:18", "data-dynamic-content": "false", className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:462:20", "data-dynamic-content": "false", className: "w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Utensils, { "data-source-location": "pages/Onboarding:463:22", "data-dynamic-content": "false", className: "w-6 h-6 text-orange-600" }, void 0, false, {
                fileName: "/app/src/pages/Onboarding.jsx",
                lineNumber: 482,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "/app/src/pages/Onboarding.jsx",
                lineNumber: 481,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:465:20", "data-dynamic-content": "false", children: [
                /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "pages/Onboarding:466:22", "data-dynamic-content": "false", className: "text-2xl font-bold", children: "Menu Categories" }, void 0, false, {
                  fileName: "/app/src/pages/Onboarding.jsx",
                  lineNumber: 485,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Onboarding:467:22", "data-dynamic-content": "false", className: "text-gray-500", children: "Set up your initial menu categories" }, void 0, false, {
                  fileName: "/app/src/pages/Onboarding.jsx",
                  lineNumber: 486,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/Onboarding.jsx",
                lineNumber: 484,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Onboarding.jsx",
              lineNumber: 480,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:471:18", "data-dynamic-content": "true", className: "space-y-4", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:472:20", "data-dynamic-content": "true", className: "flex gap-2", children: [
                /* @__PURE__ */ jsxDEV(
                  Input,
                  {
                    "data-source-location": "pages/Onboarding:473:22",
                    "data-dynamic-content": "true",
                    placeholder: "Add new category",
                    value: newCategory,
                    onChange: (e) => setNewCategory(e.target.value),
                    onKeyPress: (e) => e.key === "Enter" && addCategory()
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/pages/Onboarding.jsx",
                    lineNumber: 492,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/Onboarding:479:22", "data-dynamic-content": "true", onClick: addCategory, variant: "outline", children: "Add" }, void 0, false, {
                  fileName: "/app/src/pages/Onboarding.jsx",
                  lineNumber: 498,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/Onboarding.jsx",
                lineNumber: 491,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:484:20", "data-dynamic-content": "true", className: "grid grid-cols-2 md:grid-cols-3 gap-3", children: categories.map(
                (category) => /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    "data-source-location": "pages/Onboarding:486:20",
                    "data-dynamic-content": "true",
                    className: "flex items-center justify-between p-3 bg-orange-50 border border-orange-200 rounded-lg",
                    children: [
                      /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Onboarding:490:26", "data-dynamic-content": "true", className: "font-medium text-orange-900", "data-collection-item-field": "category", children: category }, void 0, false, {
                        fileName: "/app/src/pages/Onboarding.jsx",
                        lineNumber: 509,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ jsxDEV(
                        "button",
                        {
                          "data-source-location": "pages/Onboarding:491:26",
                          "data-dynamic-content": "true",
                          onClick: () => removeCategory(category),
                          className: "text-red-500 hover:text-red-700 text-sm",
                          children: "×"
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/src/pages/Onboarding.jsx",
                          lineNumber: 510,
                          columnNumber: 27
                        },
                        this
                      )
                    ]
                  },
                  category,
                  true,
                  {
                    fileName: "/app/src/pages/Onboarding.jsx",
                    lineNumber: 505,
                    columnNumber: 21
                  },
                  this
                )
              ) }, void 0, false, {
                fileName: "/app/src/pages/Onboarding.jsx",
                lineNumber: 503,
                columnNumber: 21
              }, this),
              categories.length === 0 && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Onboarding:502:18", "data-dynamic-content": "false", className: "text-center text-gray-500 py-8", children: "Add at least one category to continue" }, void 0, false, {
                fileName: "/app/src/pages/Onboarding.jsx",
                lineNumber: 521,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Onboarding.jsx",
              lineNumber: 490,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:508:18", "data-dynamic-content": "true", className: "flex justify-between pt-4", children: [
              /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/Onboarding:509:20", "data-dynamic-content": "true", variant: "outline", onClick: () => setCurrentStep(2), children: "Back" }, void 0, false, {
                fileName: "/app/src/pages/Onboarding.jsx",
                lineNumber: 528,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV(
                Button,
                {
                  "data-source-location": "pages/Onboarding:512:20",
                  "data-dynamic-content": "true",
                  onClick: handleNext,
                  disabled: categories.length === 0 || isSaving,
                  className: "bg-orange-600 hover:bg-orange-700",
                  children: [
                    isSaving ? "Saving..." : "Next Step",
                    /* @__PURE__ */ jsxDEV(ChevronRight, { "data-source-location": "pages/Onboarding:518:22", "data-dynamic-content": "false", className: "w-4 h-4 ml-2" }, void 0, false, {
                      fileName: "/app/src/pages/Onboarding.jsx",
                      lineNumber: 537,
                      columnNumber: 23
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/src/pages/Onboarding.jsx",
                  lineNumber: 531,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/pages/Onboarding.jsx",
              lineNumber: 527,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Onboarding.jsx",
            lineNumber: 479,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/Onboarding.jsx",
            lineNumber: 478,
            columnNumber: 15
          }, this)
        },
        "step3",
        false,
        {
          fileName: "/app/src/pages/Onboarding.jsx",
          lineNumber: 472,
          columnNumber: 11
        },
        this
      ),
      currentStep === 4 && /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-source-location": "pages/Onboarding:528:10",
          "data-dynamic-content": "true",
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -20 },
          children: /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/Onboarding:534:14", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/Onboarding:535:16", "data-dynamic-content": "true", className: "p-8 space-y-6", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:536:18", "data-dynamic-content": "false", className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:537:20", "data-dynamic-content": "false", className: "w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(CreditCard, { "data-source-location": "pages/Onboarding:538:22", "data-dynamic-content": "false", className: "w-6 h-6 text-orange-600" }, void 0, false, {
                fileName: "/app/src/pages/Onboarding.jsx",
                lineNumber: 557,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "/app/src/pages/Onboarding.jsx",
                lineNumber: 556,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:540:20", "data-dynamic-content": "false", children: [
                /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "pages/Onboarding:541:22", "data-dynamic-content": "false", className: "text-2xl font-bold", children: "Payment Setup" }, void 0, false, {
                  fileName: "/app/src/pages/Onboarding.jsx",
                  lineNumber: 560,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Onboarding:542:22", "data-dynamic-content": "false", className: "text-gray-500", children: "Configure online payment options (optional)" }, void 0, false, {
                  fileName: "/app/src/pages/Onboarding.jsx",
                  lineNumber: 561,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/Onboarding.jsx",
                lineNumber: 559,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Onboarding.jsx",
              lineNumber: 555,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:546:18", "data-dynamic-content": "true", className: "space-y-4", "data-collection-item-field": "accept_online_payment", "data-collection-item-id": paymentSettings?.id || paymentSettings?._id, children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:547:20", "data-dynamic-content": "true", className: "flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg", children: [
                /* @__PURE__ */ jsxDEV(
                  "input",
                  {
                    "data-source-location": "pages/Onboarding:548:22",
                    "data-dynamic-content": "true",
                    type: "checkbox",
                    checked: paymentSettings.accept_online_payment,
                    onChange: (e) => setPaymentSettings({
                      ...paymentSettings,
                      accept_online_payment: e.target.checked
                    }),
                    className: "w-4 h-4"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/pages/Onboarding.jsx",
                    lineNumber: 567,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:557:22", "data-dynamic-content": "false", children: [
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Onboarding:558:24", "data-dynamic-content": "false", className: "font-medium", children: "Enable Online Payments" }, void 0, false, {
                    fileName: "/app/src/pages/Onboarding.jsx",
                    lineNumber: 577,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Onboarding:559:24", "data-dynamic-content": "false", className: "text-sm text-gray-600", children: "Accept UPI, cards, and other payment methods" }, void 0, false, {
                    fileName: "/app/src/pages/Onboarding.jsx",
                    lineNumber: 578,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/Onboarding.jsx",
                  lineNumber: 576,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/Onboarding.jsx",
                lineNumber: 566,
                columnNumber: 21
              }, this),
              paymentSettings.accept_online_payment && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:564:18", "data-dynamic-content": "true", className: "space-y-4 pl-7", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:565:24", "data-dynamic-content": "true", children: [
                  /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/Onboarding:566:26", "data-dynamic-content": "false", children: "Razorpay Key ID" }, void 0, false, {
                    fileName: "/app/src/pages/Onboarding.jsx",
                    lineNumber: 585,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    Input,
                    {
                      "data-source-location": "pages/Onboarding:567:26",
                      "data-dynamic-content": "true",
                      placeholder: "rzp_live_xxxxxxxxxxxx",
                      value: paymentSettings.razorpay_key_id,
                      onChange: (e) => setPaymentSettings({
                        ...paymentSettings,
                        razorpay_key_id: e.target.value
                      })
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/src/pages/Onboarding.jsx",
                      lineNumber: 586,
                      columnNumber: 27
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/app/src/pages/Onboarding.jsx",
                  lineNumber: 584,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:576:24", "data-dynamic-content": "true", children: [
                  /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/Onboarding:577:26", "data-dynamic-content": "false", children: "Razorpay Key Secret" }, void 0, false, {
                    fileName: "/app/src/pages/Onboarding.jsx",
                    lineNumber: 596,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    Input,
                    {
                      "data-source-location": "pages/Onboarding:578:26",
                      "data-dynamic-content": "true",
                      type: "password",
                      placeholder: "Enter your secret key",
                      value: paymentSettings.razorpay_key_secret,
                      onChange: (e) => setPaymentSettings({
                        ...paymentSettings,
                        razorpay_key_secret: e.target.value
                      })
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/src/pages/Onboarding.jsx",
                      lineNumber: 597,
                      columnNumber: 27
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/app/src/pages/Onboarding.jsx",
                  lineNumber: 595,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Onboarding:588:24", "data-dynamic-content": "false", className: "text-xs text-gray-500", children: [
                  "Don't have a Razorpay account? ",
                  /* @__PURE__ */ jsxDEV("a", { "data-source-location": "pages/Onboarding:589:57", "data-dynamic-content": "false", href: "https://razorpay.com", target: "_blank", rel: "noopener noreferrer", className: "text-orange-600 hover:underline", children: "Sign up here" }, void 0, false, {
                    fileName: "/app/src/pages/Onboarding.jsx",
                    lineNumber: 608,
                    columnNumber: 58
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/Onboarding.jsx",
                  lineNumber: 607,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/Onboarding.jsx",
                lineNumber: 583,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Onboarding.jsx",
              lineNumber: 565,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:595:18", "data-dynamic-content": "true", className: "flex justify-between pt-4", children: [
              /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/Onboarding:596:20", "data-dynamic-content": "true", variant: "outline", onClick: () => setCurrentStep(3), children: "Back" }, void 0, false, {
                fileName: "/app/src/pages/Onboarding.jsx",
                lineNumber: 615,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Onboarding:599:20", "data-dynamic-content": "true", className: "flex gap-3", children: [
                /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/Onboarding:600:22", "data-dynamic-content": "true", variant: "outline", onClick: handleSkip, children: "Skip for now" }, void 0, false, {
                  fileName: "/app/src/pages/Onboarding.jsx",
                  lineNumber: 619,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV(
                  Button,
                  {
                    "data-source-location": "pages/Onboarding:603:22",
                    "data-dynamic-content": "true",
                    onClick: handleNext,
                    disabled: isSaving,
                    className: "bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600",
                    children: [
                      isSaving ? "Completing..." : "Complete Setup",
                      /* @__PURE__ */ jsxDEV(Check, { "data-source-location": "pages/Onboarding:609:24", "data-dynamic-content": "false", className: "w-4 h-4 ml-2" }, void 0, false, {
                        fileName: "/app/src/pages/Onboarding.jsx",
                        lineNumber: 628,
                        columnNumber: 25
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/src/pages/Onboarding.jsx",
                    lineNumber: 622,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/src/pages/Onboarding.jsx",
                lineNumber: 618,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Onboarding.jsx",
              lineNumber: 614,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Onboarding.jsx",
            lineNumber: 554,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/Onboarding.jsx",
            lineNumber: 553,
            columnNumber: 15
          }, this)
        },
        "step4",
        false,
        {
          fileName: "/app/src/pages/Onboarding.jsx",
          lineNumber: 547,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/src/pages/Onboarding.jsx",
      lineNumber: 276,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/Onboarding.jsx",
      lineNumber: 275,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/Onboarding.jsx",
    lineNumber: 226,
    columnNumber: 5
  }, this);
}
_s(Onboarding, "ihu2/dkqSTx9dRNZ6S9ErmqNQ2g=");
_c = Onboarding;
var _c;
$RefreshReg$(_c, "Onboarding");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/Onboarding.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/Onboarding.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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aUNBQVcsa0JBQWtCO0FBQUEsc0JBQzlCLHVCQUFDLFNBQU0sd0JBQXFCLDJCQUEwQix3QkFBcUIsU0FBUSxXQUFVLGtCQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUEyRztBQUFBO0FBQUE7QUFBQSxrQkFON0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU9BO0FBQUEsbUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFZQTtBQUFBLGlCQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWlCQTtBQUFBLGVBN0VGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOEVBLEtBL0VGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZ0ZBO0FBQUE7QUFBQSxRQXJGQTtBQUFBLFFBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQXVGRTtBQUFBLFNBdFdKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0F3V0EsS0F6V0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQTBXQTtBQUFBLE9BM1pGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0E0WkE7QUFFSjtBQUFDUCxHQXJsQnVCRCxZQUFVO0FBQUF3RyxLQUFWeEc7QUFBVSxJQUFBd0c7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJiYXNlNDQiLCJCdXR0b24iLCJJbnB1dCIsIlRleHRhcmVhIiwiTGFiZWwiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJCYWRnZSIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIlN0b3JlIiwiTWFwUGluIiwiVXBsb2FkIiwiVXRlbnNpbHMiLCJDcmVkaXRDYXJkIiwiQ2hlY2siLCJDaGV2cm9uUmlnaHQiLCJTcGFya2xlcyIsIkltYWdlIiwiSW1hZ2VJY29uIiwiY3Vpc2luZU9wdGlvbnMiLCJkZWZhdWx0Q2F0ZWdvcmllcyIsIk9uYm9hcmRpbmciLCJfcyIsImN1cnJlbnRTdGVwIiwic2V0Q3VycmVudFN0ZXAiLCJyZXN0YXVyYW50Iiwic2V0UmVzdGF1cmFudCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImlzU2F2aW5nIiwic2V0SXNTYXZpbmciLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiYWRkcmVzcyIsImN1aXNpbmVfdHlwZSIsIm9wZW5pbmdfaG91cnMiLCJtb25kYXkiLCJ0dWVzZGF5Iiwid2VkbmVzZGF5IiwidGh1cnNkYXkiLCJmcmlkYXkiLCJzYXR1cmRheSIsInN1bmRheSIsImxvZ29GaWxlIiwic2V0TG9nb0ZpbGUiLCJjb3ZlckZpbGUiLCJzZXRDb3ZlckZpbGUiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsIm5ld0NhdGVnb3J5Iiwic2V0TmV3Q2F0ZWdvcnkiLCJwYXltZW50U2V0dGluZ3MiLCJzZXRQYXltZW50U2V0dGluZ3MiLCJhY2NlcHRfb25saW5lX3BheW1lbnQiLCJyYXpvcnBheV9rZXlfaWQiLCJyYXpvcnBheV9rZXlfc2VjcmV0IiwibG9hZFJlc3RhdXJhbnQiLCJ1c2VyIiwiYXV0aCIsIm1lIiwicmVzdGF1cmFudF9pZCIsInJlc3RhdXJhbnRzIiwiZW50aXRpZXMiLCJSZXN0YXVyYW50IiwiZmlsdGVyIiwibGVuZ3RoIiwicmVzdCIsIm9uYm9hcmRpbmdfc3RlcCIsIm9uYm9hcmRpbmdfY29tcGxldGVkIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImhhbmRsZU5leHQiLCJ1cGRhdGUiLCJpZCIsInVwZGF0ZXMiLCJsb2dvUmVzdWx0IiwiaW50ZWdyYXRpb25zIiwiQ29yZSIsIlVwbG9hZEZpbGUiLCJmaWxlIiwibG9nb191cmwiLCJmaWxlX3VybCIsImNvdmVyUmVzdWx0IiwiY292ZXJfaW1hZ2VfdXJsIiwiY2F0ZWdvcnkiLCJleGlzdGluZyIsIk1lbnVDYXRlZ29yeSIsIm5hbWUiLCJjcmVhdGUiLCJzb3J0X29yZGVyIiwiaW5kZXhPZiIsImlzX2FjdGl2ZSIsInNldHRpbmdzIiwiYWxlcnQiLCJoYW5kbGVTa2lwIiwidG9nZ2xlQ3Vpc2luZSIsImN1aXNpbmUiLCJpbmNsdWRlcyIsImMiLCJhZGRDYXRlZ29yeSIsInRyaW0iLCJyZW1vdmVDYXRlZ29yeSIsInN0ZXBzIiwibnVtYmVyIiwidGl0bGUiLCJpY29uIiwibWFwIiwic3RlcCIsImlkeCIsIm9wYWNpdHkiLCJ4IiwidGFyZ2V0IiwidmFsdWUiLCJfX2FycklkeF9fIiwiaG91cnMiLCJmaWxlcyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIl9pZCIsImtleSIsImNoZWNrZWQiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJPbmJvYXJkaW5nLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYmFzZTQ0IH0gZnJvbSBcIkAvYXBpL2Jhc2U0NENsaWVudFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IHsgVGV4dGFyZWEgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RleHRhcmVhXCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvbGFiZWxcIjtcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYmFkZ2VcIjtcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7XG4gIFN0b3JlLCBNYXBQaW4sIFVwbG9hZCwgVXRlbnNpbHMsIENyZWRpdENhcmQsIENoZWNrLFxuICBDaGV2cm9uUmlnaHQsIFNwYXJrbGVzLCBJbWFnZSBhcyBJbWFnZUljb24gfSBmcm9tXG5cImx1Y2lkZS1yZWFjdFwiO1xuXG5jb25zdCBjdWlzaW5lT3B0aW9ucyA9IFtcblwiSW5kaWFuXCIsIFwiQ2hpbmVzZVwiLCBcIkl0YWxpYW5cIiwgXCJNZXhpY2FuXCIsIFwiVGhhaVwiLCBcIkphcGFuZXNlXCIsXG5cIkNvbnRpbmVudGFsXCIsIFwiRmFzdCBGb29kXCIsIFwiQmFrZXJ5XCIsIFwiQ2FmZVwiLCBcIkRlc3NlcnRzXCIsIFwiQmV2ZXJhZ2VzXCJdO1xuXG5cbmNvbnN0IGRlZmF1bHRDYXRlZ29yaWVzID0gW1xuXCJTdGFydGVyc1wiLCBcIk1haW4gQ291cnNlXCIsIFwiQnJlYWRzXCIsIFwiUmljZVwiLCBcIkRlc3NlcnRzXCIsIFwiQmV2ZXJhZ2VzXCJdO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9uYm9hcmRpbmcoKSB7XG4gIGNvbnN0IFtjdXJyZW50U3RlcCwgc2V0Q3VycmVudFN0ZXBdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtyZXN0YXVyYW50LCBzZXRSZXN0YXVyYW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtpc1NhdmluZywgc2V0SXNTYXZpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIEZvcm0gZGF0YVxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBhZGRyZXNzOiBcIlwiLFxuICAgIGN1aXNpbmVfdHlwZTogW10sXG4gICAgb3BlbmluZ19ob3Vyczoge1xuICAgICAgbW9uZGF5OiBcIjk6MDAgQU0gLSAxMDowMCBQTVwiLFxuICAgICAgdHVlc2RheTogXCI5OjAwIEFNIC0gMTA6MDAgUE1cIixcbiAgICAgIHdlZG5lc2RheTogXCI5OjAwIEFNIC0gMTA6MDAgUE1cIixcbiAgICAgIHRodXJzZGF5OiBcIjk6MDAgQU0gLSAxMDowMCBQTVwiLFxuICAgICAgZnJpZGF5OiBcIjk6MDAgQU0gLSAxMDowMCBQTVwiLFxuICAgICAgc2F0dXJkYXk6IFwiOTowMCBBTSAtIDEwOjAwIFBNXCIsXG4gICAgICBzdW5kYXk6IFwiOTowMCBBTSAtIDEwOjAwIFBNXCJcbiAgICB9XG4gIH0pO1xuICBjb25zdCBbbG9nb0ZpbGUsIHNldExvZ29GaWxlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY292ZXJGaWxlLCBzZXRDb3ZlckZpbGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKGRlZmF1bHRDYXRlZ29yaWVzKTtcbiAgY29uc3QgW25ld0NhdGVnb3J5LCBzZXROZXdDYXRlZ29yeV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3BheW1lbnRTZXR0aW5ncywgc2V0UGF5bWVudFNldHRpbmdzXSA9IHVzZVN0YXRlKHtcbiAgICBhY2NlcHRfb25saW5lX3BheW1lbnQ6IGZhbHNlLFxuICAgIHJhem9ycGF5X2tleV9pZDogXCJcIixcbiAgICByYXpvcnBheV9rZXlfc2VjcmV0OiBcIlwiXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9hZFJlc3RhdXJhbnQoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGxvYWRSZXN0YXVyYW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgYmFzZTQ0LmF1dGgubWUoKTtcbiAgICAgIGlmICh1c2VyLnJlc3RhdXJhbnRfaWQpIHtcbiAgICAgICAgY29uc3QgcmVzdGF1cmFudHMgPSBhd2FpdCBiYXNlNDQuZW50aXRpZXMuUmVzdGF1cmFudC5maWx0ZXIoe1xuICAgICAgICAgIHJlc3RhdXJhbnRfaWQ6IHVzZXIucmVzdGF1cmFudF9pZFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3RhdXJhbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCByZXN0ID0gcmVzdGF1cmFudHNbMF07XG4gICAgICAgICAgc2V0UmVzdGF1cmFudChyZXN0KTtcbiAgICAgICAgICBzZXRDdXJyZW50U3RlcChyZXN0Lm9uYm9hcmRpbmdfc3RlcCB8fCAxKTtcblxuICAgICAgICAgIGlmIChyZXN0Lm9uYm9hcmRpbmdfY29tcGxldGVkKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL0Rhc2hib2FyZFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCByZXN0YXVyYW50XCIsIGUpO1xuICAgIH1cbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU5leHQgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0SXNTYXZpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChjdXJyZW50U3RlcCA9PT0gMSkge1xuICAgICAgICBhd2FpdCBiYXNlNDQuZW50aXRpZXMuUmVzdGF1cmFudC51cGRhdGUocmVzdGF1cmFudC5pZCwge1xuICAgICAgICAgIGFkZHJlc3M6IGZvcm1EYXRhLmFkZHJlc3MsXG4gICAgICAgICAgY3Vpc2luZV90eXBlOiBmb3JtRGF0YS5jdWlzaW5lX3R5cGUsXG4gICAgICAgICAgb3BlbmluZ19ob3VyczogZm9ybURhdGEub3BlbmluZ19ob3VycyxcbiAgICAgICAgICBvbmJvYXJkaW5nX3N0ZXA6IDJcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnRTdGVwID09PSAyKSB7XG4gICAgICAgIGxldCB1cGRhdGVzID0geyBvbmJvYXJkaW5nX3N0ZXA6IDMgfTtcblxuICAgICAgICBpZiAobG9nb0ZpbGUpIHtcbiAgICAgICAgICBjb25zdCBsb2dvUmVzdWx0ID0gYXdhaXQgYmFzZTQ0LmludGVncmF0aW9ucy5Db3JlLlVwbG9hZEZpbGUoeyBmaWxlOiBsb2dvRmlsZSB9KTtcbiAgICAgICAgICB1cGRhdGVzLmxvZ29fdXJsID0gbG9nb1Jlc3VsdC5maWxlX3VybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb3ZlckZpbGUpIHtcbiAgICAgICAgICBjb25zdCBjb3ZlclJlc3VsdCA9IGF3YWl0IGJhc2U0NC5pbnRlZ3JhdGlvbnMuQ29yZS5VcGxvYWRGaWxlKHsgZmlsZTogY292ZXJGaWxlIH0pO1xuICAgICAgICAgIHVwZGF0ZXMuY292ZXJfaW1hZ2VfdXJsID0gY292ZXJSZXN1bHQuZmlsZV91cmw7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBiYXNlNDQuZW50aXRpZXMuUmVzdGF1cmFudC51cGRhdGUocmVzdGF1cmFudC5pZCwgdXBkYXRlcyk7XG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnRTdGVwID09PSAzKSB7XG4gICAgICAgIC8vIENyZWF0ZSBtZW51IGNhdGVnb3JpZXNcbiAgICAgICAgZm9yIChjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XG4gICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCBiYXNlNDQuZW50aXRpZXMuTWVudUNhdGVnb3J5LmZpbHRlcih7XG4gICAgICAgICAgICByZXN0YXVyYW50X2lkOiByZXN0YXVyYW50LnJlc3RhdXJhbnRfaWQsXG4gICAgICAgICAgICBuYW1lOiBjYXRlZ29yeVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKGV4aXN0aW5nLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgYXdhaXQgYmFzZTQ0LmVudGl0aWVzLk1lbnVDYXRlZ29yeS5jcmVhdGUoe1xuICAgICAgICAgICAgICByZXN0YXVyYW50X2lkOiByZXN0YXVyYW50LnJlc3RhdXJhbnRfaWQsXG4gICAgICAgICAgICAgIG5hbWU6IGNhdGVnb3J5LFxuICAgICAgICAgICAgICBzb3J0X29yZGVyOiBjYXRlZ29yaWVzLmluZGV4T2YoY2F0ZWdvcnkpLFxuICAgICAgICAgICAgICBpc19hY3RpdmU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5SZXN0YXVyYW50LnVwZGF0ZShyZXN0YXVyYW50LmlkLCB7XG4gICAgICAgICAgb25ib2FyZGluZ19zdGVwOiA0XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50U3RlcCA9PT0gNCkge1xuICAgICAgICBhd2FpdCBiYXNlNDQuZW50aXRpZXMuUmVzdGF1cmFudC51cGRhdGUocmVzdGF1cmFudC5pZCwge1xuICAgICAgICAgIHJhem9ycGF5X2tleV9pZDogcGF5bWVudFNldHRpbmdzLnJhem9ycGF5X2tleV9pZCB8fCBudWxsLFxuICAgICAgICAgIHJhem9ycGF5X2tleV9zZWNyZXQ6IHBheW1lbnRTZXR0aW5ncy5yYXpvcnBheV9rZXlfc2VjcmV0IHx8IG51bGwsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIC4uLnJlc3RhdXJhbnQuc2V0dGluZ3MsXG4gICAgICAgICAgICBhY2NlcHRfb25saW5lX3BheW1lbnQ6IHBheW1lbnRTZXR0aW5ncy5hY2NlcHRfb25saW5lX3BheW1lbnRcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uYm9hcmRpbmdfY29tcGxldGVkOiB0cnVlLFxuICAgICAgICAgIG9uYm9hcmRpbmdfc3RlcDogNVxuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL0Rhc2hib2FyZFwiO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNldEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwICsgMSk7XG4gICAgICBsb2FkUmVzdGF1cmFudCgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2F2ZVwiLCBlKTtcbiAgICAgIGFsZXJ0KFwiRmFpbGVkIHRvIHNhdmUuIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xuICAgIH1cbiAgICBzZXRJc1NhdmluZyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2tpcCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoY3VycmVudFN0ZXAgPT09IDQpIHtcbiAgICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5SZXN0YXVyYW50LnVwZGF0ZShyZXN0YXVyYW50LmlkLCB7XG4gICAgICAgIG9uYm9hcmRpbmdfY29tcGxldGVkOiB0cnVlLFxuICAgICAgICBvbmJvYXJkaW5nX3N0ZXA6IDVcbiAgICAgIH0pO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9EYXNoYm9hcmRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q3VycmVudFN0ZXAoY3VycmVudFN0ZXAgKyAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlQ3Vpc2luZSA9IChjdWlzaW5lKSA9PiB7XG4gICAgaWYgKGZvcm1EYXRhLmN1aXNpbmVfdHlwZS5pbmNsdWRlcyhjdWlzaW5lKSkge1xuICAgICAgc2V0Rm9ybURhdGEoe1xuICAgICAgICAuLi5mb3JtRGF0YSxcbiAgICAgICAgY3Vpc2luZV90eXBlOiBmb3JtRGF0YS5jdWlzaW5lX3R5cGUuZmlsdGVyKChjKSA9PiBjICE9PSBjdWlzaW5lKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEZvcm1EYXRhKHtcbiAgICAgICAgLi4uZm9ybURhdGEsXG4gICAgICAgIGN1aXNpbmVfdHlwZTogWy4uLmZvcm1EYXRhLmN1aXNpbmVfdHlwZSwgY3Vpc2luZV1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhZGRDYXRlZ29yeSA9ICgpID0+IHtcbiAgICBpZiAobmV3Q2F0ZWdvcnkudHJpbSgpICYmICFjYXRlZ29yaWVzLmluY2x1ZGVzKG5ld0NhdGVnb3J5LnRyaW0oKSkpIHtcbiAgICAgIHNldENhdGVnb3JpZXMoWy4uLmNhdGVnb3JpZXMsIG5ld0NhdGVnb3J5LnRyaW0oKV0pO1xuICAgICAgc2V0TmV3Q2F0ZWdvcnkoXCJcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUNhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XG4gICAgc2V0Q2F0ZWdvcmllcyhjYXRlZ29yaWVzLmZpbHRlcigoYykgPT4gYyAhPT0gY2F0ZWdvcnkpKTtcbiAgfTtcblxuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjE5MDo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmFkaWVudC10by1iciBmcm9tLW9yYW5nZS01MCB0by1vcmFuZ2UtMTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjE5MTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6MTkyOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImFuaW1hdGUtc3BpbiByb3VuZGVkLWZ1bGwgaC0xMCB3LTEwIGJvcmRlci1iLTIgYm9yZGVyLW9yYW5nZS02MDAgbXgtYXV0byBtYi00XCI+PC9kaXY+XG4gICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjE5MzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+TG9hZGluZy4uLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4pO1xuXG4gIH1cblxuICBjb25zdCBzdGVwcyA9IFtcbiAgeyBudW1iZXI6IDEsIHRpdGxlOiBcIlJlc3RhdXJhbnQgRGV0YWlsc1wiLCBpY29uOiBTdG9yZSB9LFxuICB7IG51bWJlcjogMiwgdGl0bGU6IFwiQnJhbmRpbmdcIiwgaWNvbjogSW1hZ2VJY29uIH0sXG4gIHsgbnVtYmVyOiAzLCB0aXRsZTogXCJNZW51IENhdGVnb3JpZXNcIiwgaWNvbjogVXRlbnNpbHMgfSxcbiAgeyBudW1iZXI6IDQsIHRpdGxlOiBcIlBheW1lbnQgU2V0dXBcIiwgaWNvbjogQ3JlZGl0Q2FyZCB9XTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6MjA3OjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1vcmFuZ2UtNTAgdG8tb3JhbmdlLTEwMFwiPlxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjIwOTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyLWIgc2hhZG93LXNtXCI+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjIxMDo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gcHgtNCBweS02XCI+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6MjExOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzoyMTI6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6MjEzOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMTAgaC0xMCBiZy1ncmFkaWVudC10by1iciBmcm9tLW9yYW5nZS02MDAgdG8tb3JhbmdlLTUwMCByb3VuZGVkLXhsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPFNwYXJrbGVzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzoyMTQ6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjIxNjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICA8aDEgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjIxNzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMFwiPldlbGNvbWUgdG8gUmVzdHJvU2FhdGhpIDwvaDE+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjIxODoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5MZXQncyBzZXQgdXAgeW91ciByZXN0YXVyYW50IGluIDQgZWFzeSBzdGVwczwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxCYWRnZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6MjIxOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYmctb3JhbmdlLTYwMCB0ZXh0LXdoaXRlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJjdXJyZW50U3RlcFwiPlxuICAgICAgICAgICAgICBTdGVwIHtjdXJyZW50U3RlcH0gb2YgNFxuICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBQcm9ncmVzcyBCYXIgKi99XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6MjI3OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibXQtNiBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAge3N0ZXBzLm1hcCgoc3RlcCwgaWR4KSA9PlxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzoyMjk6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e3N0ZXAubnVtYmVyfSBkYXRhLWFyci1pbmRleD17aWR4fSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwic3RlcHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzoyMzA6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiIGRhdGEtYXJyLWluZGV4PXtpZHh9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJzdGVwc1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6MjMxOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgdy04IGgtOCByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgJHtcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RlcCA+IHN0ZXAubnVtYmVyID8gJ2JnLWdyZWVuLTYwMCB0ZXh0LXdoaXRlJyA6XG4gICAgICAgICAgICAgICAgY3VycmVudFN0ZXAgPT09IHN0ZXAubnVtYmVyID8gJ2JnLW9yYW5nZS02MDAgdGV4dC13aGl0ZScgOlxuICAgICAgICAgICAgICAgICdiZy1ncmF5LTIwMCB0ZXh0LWdyYXktNDAwJ31gXG4gICAgICAgICAgICAgICAgfSBkYXRhLWFyci1pbmRleD17aWR4fSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwic3RlcHNcIj5cbiAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRTdGVwID4gc3RlcC5udW1iZXIgPyA8Q2hlY2sgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjIzNjo0OVwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz4gOiBzdGVwLm51bWJlcn1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjIzODoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YHRleHQteHMgaGlkZGVuIG1kOmlubGluZSAke1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGVwID49IHN0ZXAubnVtYmVyID8gJ3RleHQtZ3JheS05MDAgZm9udC1tZWRpdW0nIDogJ3RleHQtZ3JheS00MDAnfWBcbiAgICAgICAgICAgICAgICB9IGRhdGEtYXJyLWluZGV4PXtpZHh9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJzdGVwc1wiIGRhdGEtYXJyLWZpZWxkPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAge3N0ZXAudGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge2lkeCA8IHN0ZXBzLmxlbmd0aCAtIDEgJiZcbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6MjQ1OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgZmxleC0xIGgtMSByb3VuZGVkICR7XG4gICAgICAgICAgICAgIGN1cnJlbnRTdGVwID4gc3RlcC5udW1iZXIgPyAnYmctZ3JlZW4tNjAwJyA6ICdiZy1ncmF5LTIwMCd9YFxuICAgICAgICAgICAgICB9IC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBDb250ZW50ICovfVxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6MjU2OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBweC00IHB5LThcIj5cbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6MjU3OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBtb2RlPVwid2FpdFwiPlxuICAgICAgICAgIHsvKiBTdGVwIDE6IFJlc3RhdXJhbnQgRGV0YWlscyAqL31cbiAgICAgICAgICB7Y3VycmVudFN0ZXAgPT09IDEgJiZcbiAgICAgICAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6MjYwOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICBrZXk9XCJzdGVwMVwiXG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB4OiAyMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeDogMCB9fVxuICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCwgeDogLTIwIH19PlxuXG4gICAgICAgICAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzoyNjY6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjI2NzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtOCBzcGFjZS15LTZcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjI2ODoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBtYi02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjI2OToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgYmctb3JhbmdlLTEwMCByb3VuZGVkLXhsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFN0b3JlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzoyNzA6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LW9yYW5nZS02MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6MjcyOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6MjczOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPlJlc3RhdXJhbnQgRGV0YWlsczwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjI3NDoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+VGVsbCB1cyBhYm91dCB5b3VyIHJlc3RhdXJhbnQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjI3ODoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzoyNzk6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjI4MDoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5SZXN0YXVyYW50IEFkZHJlc3MgKjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzoyODE6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGNvbXBsZXRlIGFkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuYWRkcmVzc31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBhZGRyZXNzOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgcm93cz17M30gLz5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzoyODk6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjI5MDoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5DdWlzaW5lIFR5cGUgKjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjI5MToyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgbWItM1wiPlNlbGVjdCBhbGwgdGhhdCBhcHBseTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzoyOTI6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3Vpc2luZU9wdGlvbnMubWFwKChjdWlzaW5lLCBfX2FycklkeF9fKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjI5NDoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtjdWlzaW5lfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUN1aXNpbmUoY3Vpc2luZSl9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcC0zIHJvdW5kZWQtbGcgYm9yZGVyLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWFsbCAke1xuICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmN1aXNpbmVfdHlwZS5pbmNsdWRlcyhjdWlzaW5lKSA/XG4gICAgICAgICAgICAgICAgICAgICAgJ2JvcmRlci1vcmFuZ2UtNjAwIGJnLW9yYW5nZS01MCB0ZXh0LW9yYW5nZS02MDAnIDpcbiAgICAgICAgICAgICAgICAgICAgICAnYm9yZGVyLWdyYXktMjAwIGhvdmVyOmJvcmRlci1ncmF5LTMwMCd9YFxuICAgICAgICAgICAgICAgICAgICAgIH0gZGF0YS1hcnItaW5kZXg9e19fYXJySWR4X199IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJjdWlzaW5lT3B0aW9uc1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1aXNpbmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjMwOToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6MzEwOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPk9wZW5pbmcgSG91cnM8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzozMTE6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIG1iLTNcIj5EZWZhdWx0IGhvdXJzIGZvciBhbGwgZGF5cyAoeW91IGNhbiBjdXN0b21pemUgbGF0ZXIpPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6MzEyOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuLCA5OjAwIEFNIC0gMTA6MDAgUE1cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEub3BlbmluZ19ob3Vycy5tb25kYXl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0Rm9ybURhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZm9ybURhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuaW5nX2hvdXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vbmRheTogaG91cnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR1ZXNkYXk6IGhvdXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWRuZXNkYXk6IGhvdXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aHVyc2RheTogaG91cnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZyaWRheTogaG91cnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNhdHVyZGF5OiBob3VycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VuZGF5OiBob3Vyc1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjMzNDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmQgZ2FwLTMgcHQtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzozMzU6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dH1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZm9ybURhdGEuYWRkcmVzcyB8fCBmb3JtRGF0YS5jdWlzaW5lX3R5cGUubGVuZ3RoID09PSAwIHx8IGlzU2F2aW5nfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctb3JhbmdlLTYwMCBob3ZlcjpiZy1vcmFuZ2UtNzAwXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICB7aXNTYXZpbmcgPyAnU2F2aW5nLi4uJyA6ICdOZXh0IFN0ZXAnfVxuICAgICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uUmlnaHQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjM0MToyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IG1sLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB7LyogU3RlcCAyOiBCcmFuZGluZyAqL31cbiAgICAgICAgICB7Y3VycmVudFN0ZXAgPT09IDIgJiZcbiAgICAgICAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6MzUxOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICBrZXk9XCJzdGVwMlwiXG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB4OiAyMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeDogMCB9fVxuICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCwgeDogLTIwIH19PlxuXG4gICAgICAgICAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzozNTc6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjM1ODoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtOCBzcGFjZS15LTZcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjM1OToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBtYi02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjM2MDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgYmctb3JhbmdlLTEwMCByb3VuZGVkLXhsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlSWNvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6MzYxOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNiBoLTYgdGV4dC1vcmFuZ2UtNjAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjM2MzoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjM2NDoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5CcmFuZGluZzwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjM2NToyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+VXBsb2FkIHlvdXIgbG9nbyBhbmQgY292ZXIgaW1hZ2U8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjM2OToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6MzcwOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzozNzE6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+UmVzdGF1cmFudCBMb2dvPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzozNzI6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtdC0yIGJvcmRlci0yIGJvcmRlci1kYXNoZWQgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQteGwgcC02IHRleHQtY2VudGVyIGhvdmVyOmJvcmRlci1vcmFuZ2UtNDAwIHRyYW5zaXRpb24tY29sb3JzIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjM3MzoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TG9nb0ZpbGUoZS50YXJnZXQuZmlsZXNbMF0pfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsb2dvLXVwbG9hZFwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6MzgwOjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgaHRtbEZvcj1cImxvZ28tdXBsb2FkXCIgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2xvZ29GaWxlID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjM4MjoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6MzgzOjMwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtVUkwuY3JlYXRlT2JqZWN0VVJMKGxvZ29GaWxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiTG9nbyBwcmV2aWV3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0zMiBoLTMyIG14LWF1dG8gb2JqZWN0LWNvdmVyIHJvdW5kZWQteGwgbWItM1wiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzozODg6MzBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JlZW4tNjAwIGZvbnQtbWVkaXVtXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJuYW1lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2xvZ29GaWxlPy5pZCB8fCBsb2dvRmlsZT8uX2lkfT57bG9nb0ZpbGUubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDpcblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6MzkxOjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVwbG9hZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6MzkyOjMwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMTIgaC0xMiB0ZXh0LWdyYXktNDAwIG14LWF1dG8gbWItM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6MzkzOjMwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTYwMFwiPkNsaWNrIHRvIHVwbG9hZCBsb2dvPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjM5NDozMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS00MDAgbXQtMVwiPlJlY29tbWVuZGVkOiBTcXVhcmUsIDUwMHg1MDBweDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjQwMToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6NDAyOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPkNvdmVyIEltYWdlPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzo0MDM6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtdC0yIGJvcmRlci0yIGJvcmRlci1kYXNoZWQgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQteGwgcC02IHRleHQtY2VudGVyIGhvdmVyOmJvcmRlci1vcmFuZ2UtNDAwIHRyYW5zaXRpb24tY29sb3JzIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjQwNDoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q292ZXJGaWxlKGUudGFyZ2V0LmZpbGVzWzBdKX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY292ZXItdXBsb2FkXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzo0MTE6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBodG1sRm9yPVwiY292ZXItdXBsb2FkXCIgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdmVyRmlsZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzo0MTM6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjQxNDozMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17VVJMLmNyZWF0ZU9iamVjdFVSTChjb3ZlckZpbGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJDb3ZlciBwcmV2aWV3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMzIgb2JqZWN0LWNvdmVyIHJvdW5kZWQteGwgbWItM1wiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzo0MTk6MzBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JlZW4tNjAwIGZvbnQtbWVkaXVtXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJuYW1lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2NvdmVyRmlsZT8uaWQgfHwgY292ZXJGaWxlPy5faWR9Pntjb3ZlckZpbGUubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDpcblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6NDIyOjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVwbG9hZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6NDIzOjMwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMTIgaC0xMiB0ZXh0LWdyYXktNDAwIG14LWF1dG8gbWItM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6NDI0OjMwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTYwMFwiPkNsaWNrIHRvIHVwbG9hZCBjb3ZlcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzo0MjU6MzBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNDAwIG10LTFcIj5SZWNvbW1lbmRlZDogMTIwMHg0MDBweDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjQzMzoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHB0LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6NDM0OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdmFyaWFudD1cIm91dGxpbmVcIiBvbkNsaWNrPXtoYW5kbGVTa2lwfT5cbiAgICAgICAgICAgICAgICAgICAgICBTa2lwIGZvciBub3dcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjQzNzoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0fVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU2F2aW5nfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctb3JhbmdlLTYwMCBob3ZlcjpiZy1vcmFuZ2UtNzAwXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICB7aXNTYXZpbmcgPyAnU2F2aW5nLi4uJyA6ICdOZXh0IFN0ZXAnfVxuICAgICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uUmlnaHQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjQ0MzoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IG1sLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB7LyogU3RlcCAzOiBNZW51IENhdGVnb3JpZXMgKi99XG4gICAgICAgICAge2N1cnJlbnRTdGVwID09PSAzICYmXG4gICAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjQ1MzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAga2V5PVwic3RlcDNcIlxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogMjAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHg6IDAgfX1cbiAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHg6IC0yMCB9fT5cblxuICAgICAgICAgICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6NDU5OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzo0NjA6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJwLTggc3BhY2UteS02XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzo0NjE6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgbWItNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzo0NjI6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0xMiBoLTEyIGJnLW9yYW5nZS0xMDAgcm91bmRlZC14bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxVdGVuc2lscyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6NDYzOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNiBoLTYgdGV4dC1vcmFuZ2UtNjAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjQ2NToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjQ2NjoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5NZW51IENhdGVnb3JpZXM8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzo0Njc6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPlNldCB1cCB5b3VyIGluaXRpYWwgbWVudSBjYXRlZ29yaWVzPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzo0NzE6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6NDcyOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6NDczOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgbmV3IGNhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld0NhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0NhdGVnb3J5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IGUua2V5ID09PSAnRW50ZXInICYmIGFkZENhdGVnb3J5KCl9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzo0Nzk6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBvbkNsaWNrPXthZGRDYXRlZ29yeX0gdmFyaWFudD1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzo0ODQ6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6NDg2OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtMyBiZy1vcmFuZ2UtNTAgYm9yZGVyIGJvcmRlci1vcmFuZ2UtMjAwIHJvdW5kZWQtbGdcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6NDkwOjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1vcmFuZ2UtOTAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJjYXRlZ29yeVwiPntjYXRlZ29yeX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjQ5MToyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlQ2F0ZWdvcnkoY2F0ZWdvcnkpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBob3Zlcjp0ZXh0LXJlZC03MDAgdGV4dC1zbVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgw5dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6NTAyOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtZ3JheS01MDAgcHktOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkIGF0IGxlYXN0IG9uZSBjYXRlZ29yeSB0byBjb250aW51ZVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzo1MDg6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBwdC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjUwOToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHZhcmlhbnQ9XCJvdXRsaW5lXCIgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudFN0ZXAoMil9PlxuICAgICAgICAgICAgICAgICAgICAgIEJhY2tcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjUxMjoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0fVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2NhdGVnb3JpZXMubGVuZ3RoID09PSAwIHx8IGlzU2F2aW5nfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctb3JhbmdlLTYwMCBob3ZlcjpiZy1vcmFuZ2UtNzAwXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICB7aXNTYXZpbmcgPyAnU2F2aW5nLi4uJyA6ICdOZXh0IFN0ZXAnfVxuICAgICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uUmlnaHQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjUxODoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IG1sLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB7LyogU3RlcCA0OiBQYXltZW50IFNldHVwICovfVxuICAgICAgICAgIHtjdXJyZW50U3RlcCA9PT0gNCAmJlxuICAgICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzo1Mjg6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgIGtleT1cInN0ZXA0XCJcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHg6IDIwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB4OiAwIH19XG4gICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCB4OiAtMjAgfX0+XG5cbiAgICAgICAgICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjUzNDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6NTM1OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicC04IHNwYWNlLXktNlwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6NTM2OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIG1iLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6NTM3OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMTIgaC0xMiBiZy1vcmFuZ2UtMTAwIHJvdW5kZWQteGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q3JlZGl0Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6NTM4OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNiBoLTYgdGV4dC1vcmFuZ2UtNjAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjU0MDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjU0MToyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5QYXltZW50IFNldHVwPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6NTQyOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5Db25maWd1cmUgb25saW5lIHBheW1lbnQgb3B0aW9ucyAob3B0aW9uYWwpPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzo1NDY6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImFjY2VwdF9vbmxpbmVfcGF5bWVudFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtwYXltZW50U2V0dGluZ3M/LmlkIHx8IHBheW1lbnRTZXR0aW5ncz8uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6NTQ3OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcC00IGJnLWJsdWUtNTAgYm9yZGVyIGJvcmRlci1ibHVlLTIwMCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzo1NDg6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtwYXltZW50U2V0dGluZ3MuYWNjZXB0X29ubGluZV9wYXltZW50fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBheW1lbnRTZXR0aW5ncyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4ucGF5bWVudFNldHRpbmdzLFxuICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdF9vbmxpbmVfcGF5bWVudDogZS50YXJnZXQuY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzo1NTc6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6NTU4OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+RW5hYmxlIE9ubGluZSBQYXltZW50czwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzo1NTk6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+QWNjZXB0IFVQSSwgY2FyZHMsIGFuZCBvdGhlciBwYXltZW50IG1ldGhvZHM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIHtwYXltZW50U2V0dGluZ3MuYWNjZXB0X29ubGluZV9wYXltZW50ICYmXG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzo1NjQ6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTQgcGwtN1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6NTY1OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6NTY2OjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlJhem9ycGF5IEtleSBJRDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6NTY3OjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInJ6cF9saXZlX3h4eHh4eHh4eHh4eFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BheW1lbnRTZXR0aW5ncy5yYXpvcnBheV9rZXlfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXltZW50U2V0dGluZ3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4ucGF5bWVudFNldHRpbmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF6b3JwYXlfa2V5X2lkOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0pfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjU3NjoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjU3NzoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5SYXpvcnBheSBLZXkgU2VjcmV0PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzo1Nzg6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHNlY3JldCBrZXlcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXltZW50U2V0dGluZ3MucmF6b3JwYXlfa2V5X3NlY3JldH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBheW1lbnRTZXR0aW5ncyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5wYXltZW50U2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXpvcnBheV9rZXlfc2VjcmV0OiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0pfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzo1ODg6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIERvbid0IGhhdmUgYSBSYXpvcnBheSBhY2NvdW50PyA8YSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6NTg5OjU3XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGhyZWY9XCJodHRwczovL3Jhem9ycGF5LmNvbVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZS02MDAgaG92ZXI6dW5kZXJsaW5lXCI+U2lnbiB1cCBoZXJlPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjU5NToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHB0LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6NTk2OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdmFyaWFudD1cIm91dGxpbmVcIiBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50U3RlcCgzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgQmFja1xuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6NTk5OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9PbmJvYXJkaW5nOjYwMDoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHZhcmlhbnQ9XCJvdXRsaW5lXCIgb25DbGljaz17aGFuZGxlU2tpcH0+XG4gICAgICAgICAgICAgICAgICAgICAgICBTa2lwIGZvciBub3dcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvT25ib2FyZGluZzo2MDM6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0fVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTYXZpbmd9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1vcmFuZ2UtNjAwIHRvLW9yYW5nZS01MDAgaG92ZXI6ZnJvbS1vcmFuZ2UtNzAwIGhvdmVyOnRvLW9yYW5nZS02MDBcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAge2lzU2F2aW5nID8gJ0NvbXBsZXRpbmcuLi4nIDogJ0NvbXBsZXRlIFNldHVwJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVjayBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL09uYm9hcmRpbmc6NjA5OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgbWwtMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4pO1xuXG59Il0sImZpbGUiOiIvYXBwL3NyYy9wYWdlcy9PbmJvYXJkaW5nLmpzeCJ9