import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Pricing.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/Pricing.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=79425e35";
import { Link, useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=79425e35";
import { Button } from "/src/components/ui/button.jsx";
import { base44 } from "/src/api/base44Client.js";
const createPageUrl = (pageName) => `/${pageName}`;
import { Switch } from "/src/components/ui/switch.jsx";
import { Check, X, ArrowRight, Sparkles } from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
const plans = [
  {
    name: "Basic",
    description: "Perfect for small restaurants getting started",
    monthlyPrice: 999,
    yearlyPrice: 9990,
    features: [
      { name: "QR Code Ordering", included: true },
      { name: "Digital Menu", included: true },
      { name: "Up to 50 Menu Items", included: true },
      { name: "Up to 10 Tables", included: true },
      { name: "Order Management", included: true },
      { name: "Basic Analytics", included: true },
      { name: "Email Support", included: true },
      { name: "Direct Payments", included: false },
      { name: "Customer Database", included: false },
      { name: "Custom Branding", included: false },
      { name: "Multi-Outlet", included: false }
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Pro",
    description: "For growing restaurants that want more control",
    monthlyPrice: 1999,
    yearlyPrice: 19990,
    features: [
      { name: "QR Code Ordering", included: true },
      { name: "Digital Menu", included: true },
      { name: "Unlimited Menu Items", included: true },
      { name: "Unlimited Tables", included: true },
      { name: "Order Management", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "Priority Support", included: true },
      { name: "Direct Payments", included: true },
      { name: "Customer Database", included: true },
      { name: "Custom Branding", included: true },
      { name: "Multi-Outlet", included: false }
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Multi-Outlet",
    description: "For restaurant chains with multiple locations",
    monthlyPrice: 4999,
    yearlyPrice: 49990,
    features: [
      { name: "QR Code Ordering", included: true },
      { name: "Digital Menu", included: true },
      { name: "Unlimited Menu Items", included: true },
      { name: "Unlimited Tables", included: true },
      { name: "Order Management", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "Dedicated Support", included: true },
      { name: "Direct Payments", included: true },
      { name: "Customer Database", included: true },
      { name: "Custom Branding", included: true },
      { name: "Multi-Outlet (Up to 5)", included: true }
    ],
    cta: "Contact Sales",
    popular: false
  }
];
const faqs = [
  {
    question: "Is there a free trial?",
    answer: "Yes! All plans come with a 14-day free trial. No credit card required to start."
  },
  {
    question: "Can I change plans later?",
    answer: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, UPI, and net banking for Indian customers."
  },
  {
    question: "Is there a transaction fee?",
    answer: "No transaction fee from RestroSaathi. Standard payment gateway charges (2-3%) apply for online payments."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period."
  },
  {
    question: "Do you offer custom enterprise plans?",
    answer: "Yes! For large chains or specific requirements, contact our sales team for a custom quote."
  }
];
export default function Pricing() {
  _s();
  const [isYearly, setIsYearly] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    base44.auth.isAuthenticated().then(async (isAuth) => {
      if (isAuth) {
        const userData = await base44.auth.me();
        setUser(userData);
      }
    }).catch(() => {
    });
  }, []);
  const handlePlanClick = (plan) => {
    if (plan.cta === "Contact Sales") {
      navigate(createPageUrl("Contact"));
      return;
    }
    if (!user) {
      base44.auth.redirectToLogin(createPageUrl("GetStarted"));
      return;
    }
    if (user.restaurant_id) {
      navigate(createPageUrl("Billing"));
    } else {
      navigate(createPageUrl("GetStarted"));
    }
  };
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Pricing:138:4", "data-dynamic-content": "true", className: "py-20", children: [
    /* @__PURE__ */ jsxDEV("section", { "data-source-location": "pages/Pricing:140:6", "data-dynamic-content": "true", className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16", children: /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-source-location": "pages/Pricing:141:8",
        "data-dynamic-content": "true",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        children: [
          /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/Pricing:145:10", "data-dynamic-content": "false", className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6", children: "Simple, Transparent Pricing" }, void 0, false, {
            fileName: "/app/src/pages/Pricing.jsx",
            lineNumber: 164,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Pricing:148:10", "data-dynamic-content": "false", className: "text-xl text-gray-600 max-w-2xl mx-auto mb-8", children: "No hidden fees. No commission on orders. Just a flat monthly fee." }, void 0, false, {
            fileName: "/app/src/pages/Pricing.jsx",
            lineNumber: 167,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Pricing:153:10", "data-dynamic-content": "true", className: "flex items-center justify-center gap-4 mb-12", children: [
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Pricing:154:12", "data-dynamic-content": "true", className: `text-sm ${!isYearly ? "text-gray-900 font-medium" : "text-gray-500"}`, children: "Monthly" }, void 0, false, {
              fileName: "/app/src/pages/Pricing.jsx",
              lineNumber: 173,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(
              Switch,
              {
                "data-source-location": "pages/Pricing:157:12",
                "data-dynamic-content": "true",
                checked: isYearly,
                onCheckedChange: setIsYearly
              },
              void 0,
              false,
              {
                fileName: "/app/src/pages/Pricing.jsx",
                lineNumber: 176,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Pricing:161:12", "data-dynamic-content": "true", className: `text-sm ${isYearly ? "text-gray-900 font-medium" : "text-gray-500"}`, children: "Yearly" }, void 0, false, {
              fileName: "/app/src/pages/Pricing.jsx",
              lineNumber: 180,
              columnNumber: 13
            }, this),
            isYearly && /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Pricing:165:12", "data-dynamic-content": "false", className: "bg-green-100 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full", children: "Save 17%" }, void 0, false, {
              fileName: "/app/src/pages/Pricing.jsx",
              lineNumber: 184,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Pricing.jsx",
            lineNumber: 172,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/src/pages/Pricing.jsx",
        lineNumber: 160,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "/app/src/pages/Pricing.jsx",
      lineNumber: 159,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { "data-source-location": "pages/Pricing:174:6", "data-dynamic-content": "true", className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Pricing:175:8", "data-dynamic-content": "true", className: "grid md:grid-cols-3 gap-8", children: plans.map(
      (plan, index) => /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-source-location": "pages/Pricing:177:10",
          "data-dynamic-content": "true",
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1 },
          className: "bg-slate-900 text-white p-8 rounded-2xl relative from-orange-600 to-orange-500 shadow-xl shadow-orange-200",
          "data-arr-index": index,
          "data-arr-variable-name": "plans",
          children: [
            plan.popular && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Pricing:189:12", "data-dynamic-content": "false", className: "absolute -top-4 left-1/2 -translate-x-1/2", children: /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Pricing:190:18", "data-dynamic-content": "false", className: "bg-gradient-to-r from-amber-400 to-orange-400 text-gray-900 text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1", children: [
              /* @__PURE__ */ jsxDEV(Sparkles, { "data-source-location": "pages/Pricing:191:20", "data-dynamic-content": "false", className: "w-3 h-3" }, void 0, false, {
                fileName: "/app/src/pages/Pricing.jsx",
                lineNumber: 210,
                columnNumber: 21
              }, this),
              "MOST POPULAR"
            ] }, void 0, true, {
              fileName: "/app/src/pages/Pricing.jsx",
              lineNumber: 209,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/src/pages/Pricing.jsx",
              lineNumber: 208,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Pricing:197:14", "data-dynamic-content": "true", className: "mb-6", "data-arr-index": index, "data-arr-variable-name": "plans", children: [
              /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/Pricing:198:16", "data-dynamic-content": "true", className: `text-2xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`, "data-arr-index": index, "data-arr-variable-name": "plans", "data-arr-field": "name", children: plan.name }, void 0, false, {
                fileName: "/app/src/pages/Pricing.jsx",
                lineNumber: 217,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Pricing:201:16", "data-dynamic-content": "true", className: "text-slate-50 mt-1 text-base", "data-arr-index": index, "data-arr-variable-name": "plans", "data-arr-field": "description", children: plan.description }, void 0, false, {
                fileName: "/app/src/pages/Pricing.jsx",
                lineNumber: 220,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Pricing.jsx",
              lineNumber: 216,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Pricing:206:14", "data-dynamic-content": "true", className: "mb-6", "data-arr-index": index, "data-arr-variable-name": "plans", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Pricing:207:16", "data-dynamic-content": "true", className: "flex items-baseline gap-1", "data-arr-index": index, "data-arr-variable-name": "plans", children: [
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Pricing:208:18", "data-dynamic-content": "true", className: "text-slate-50 text-4xl font-bold", children: [
                  "₹",
                  isYearly ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice
                ] }, void 0, true, {
                  fileName: "/app/src/pages/Pricing.jsx",
                  lineNumber: 227,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Pricing:211:18", "data-dynamic-content": "false", className: "text-slate-200", children: "/month" }, void 0, false, {
                  fileName: "/app/src/pages/Pricing.jsx",
                  lineNumber: 230,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/Pricing.jsx",
                lineNumber: 226,
                columnNumber: 17
              }, this),
              isYearly && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Pricing:216:14", "data-dynamic-content": "true", className: `text-sm mt-1 ${plan.popular ? "text-orange-100" : "text-gray-500"}`, children: [
                "Billed ₹",
                plan.yearlyPrice,
                " yearly"
              ] }, void 0, true, {
                fileName: "/app/src/pages/Pricing.jsx",
                lineNumber: 235,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Pricing.jsx",
              lineNumber: 225,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(
              Button,
              {
                "data-source-location": "pages/Pricing:222:14",
                "data-dynamic-content": "true",
                onClick: () => handlePlanClick(plan),
                className: `w-full mb-6 ${plan.popular ? "bg-white text-orange-600 hover:bg-gray-100" : "bg-gradient-to-r from-orange-600 to-orange-500 text-white"}`,
                "data-arr-index": index,
                "data-arr-variable-name": "plans",
                "data-arr-field": "cta",
                children: [
                  plan.cta,
                  /* @__PURE__ */ jsxDEV(ArrowRight, { "data-source-location": "pages/Pricing:230:16", "data-dynamic-content": "false", className: "w-4 h-4 ml-2", "data-arr-index": index, "data-arr-variable-name": "plans" }, void 0, false, {
                    fileName: "/app/src/pages/Pricing.jsx",
                    lineNumber: 249,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/src/pages/Pricing.jsx",
                lineNumber: 241,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("ul", { "data-source-location": "pages/Pricing:233:14", "data-dynamic-content": "true", className: "space-y-3", "data-arr-index": index, "data-arr-variable-name": "plans", children: plan.features.map(
              (feature) => /* @__PURE__ */ jsxDEV("li", { "data-source-location": "pages/Pricing:235:14", "data-dynamic-content": "true", className: "flex items-center gap-3", children: [
                feature.included ? /* @__PURE__ */ jsxDEV(Check, { "data-source-location": "pages/Pricing:237:16", "data-dynamic-content": "true", className: `w-5 h-5 ${plan.popular ? "text-green-300" : "text-green-500"}` }, void 0, false, {
                  fileName: "/app/src/pages/Pricing.jsx",
                  lineNumber: 256,
                  columnNumber: 17
                }, this) : /* @__PURE__ */ jsxDEV(X, { "data-source-location": "pages/Pricing:239:16", "data-dynamic-content": "true", className: `w-5 h-5 ${plan.popular ? "text-orange-300" : "text-gray-300"}` }, void 0, false, {
                  fileName: "/app/src/pages/Pricing.jsx",
                  lineNumber: 258,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/Pricing:241:20", "data-dynamic-content": "true", className: "text-slate-100 text-base", "data-collection-item-field": "name", "data-collection-item-id": feature?.id || feature?._id, children: feature.name }, void 0, false, {
                  fileName: "/app/src/pages/Pricing.jsx",
                  lineNumber: 260,
                  columnNumber: 21
                }, this)
              ] }, feature.name, true, {
                fileName: "/app/src/pages/Pricing.jsx",
                lineNumber: 254,
                columnNumber: 15
              }, this)
            ) }, void 0, false, {
              fileName: "/app/src/pages/Pricing.jsx",
              lineNumber: 252,
              columnNumber: 15
            }, this)
          ]
        },
        plan.name,
        true,
        {
          fileName: "/app/src/pages/Pricing.jsx",
          lineNumber: 196,
          columnNumber: 11
        },
        this
      )
    ) }, void 0, false, {
      fileName: "/app/src/pages/Pricing.jsx",
      lineNumber: 194,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/Pricing.jsx",
      lineNumber: 193,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { "data-source-location": "pages/Pricing:257:6", "data-dynamic-content": "true", className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "pages/Pricing:258:8", "data-dynamic-content": "false", className: "text-3xl font-bold text-gray-900 text-center mb-12", children: "Frequently Asked Questions" }, void 0, false, {
        fileName: "/app/src/pages/Pricing.jsx",
        lineNumber: 277,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Pricing:261:8", "data-dynamic-content": "true", className: "space-y-6", children: faqs.map(
        (faq, index) => /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            "data-source-location": "pages/Pricing:263:10",
            "data-dynamic-content": "true",
            initial: { opacity: 0, y: 10 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: index * 0.05 },
            className: "bg-gray-50 rounded-xl p-6",
            "data-arr-index": index,
            "data-arr-variable-name": "faqs",
            children: [
              /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/Pricing:271:14", "data-dynamic-content": "true", className: "font-semibold text-gray-900 mb-2", "data-arr-index": index, "data-arr-variable-name": "faqs", "data-arr-field": "question", children: faq.question }, void 0, false, {
                fileName: "/app/src/pages/Pricing.jsx",
                lineNumber: 290,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Pricing:274:14", "data-dynamic-content": "true", className: "text-gray-600 text-sm", "data-arr-index": index, "data-arr-variable-name": "faqs", "data-arr-field": "answer", children: faq.answer }, void 0, false, {
                fileName: "/app/src/pages/Pricing.jsx",
                lineNumber: 293,
                columnNumber: 15
              }, this)
            ]
          },
          faq.question,
          true,
          {
            fileName: "/app/src/pages/Pricing.jsx",
            lineNumber: 282,
            columnNumber: 11
          },
          this
        )
      ) }, void 0, false, {
        fileName: "/app/src/pages/Pricing.jsx",
        lineNumber: 280,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Pricing.jsx",
      lineNumber: 276,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/Pricing.jsx",
    lineNumber: 157,
    columnNumber: 5
  }, this);
}
_s(Pricing, "FJwWqoHLzcBW/+unyaeF9qlSKAc=", false, function() {
  return [useNavigate];
});
_c = Pricing;
var _c;
$RefreshReg$(_c, "Pricing");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/Pricing.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/Pricing.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFBO0FBQUE7QUFBQSxXQXVCQTtBQUFBLE9BOUlGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0ErSUE7QUFFSjtBQUFDRyxHQW5MdUJELFNBQU87QUFBQSxVQUdadEIsV0FBVztBQUFBO0FBQUF3RCxLQUhObEM7QUFBTyxJQUFBa0M7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJtb3Rpb24iLCJMaW5rIiwidXNlTmF2aWdhdGUiLCJCdXR0b24iLCJiYXNlNDQiLCJjcmVhdGVQYWdlVXJsIiwicGFnZU5hbWUiLCJTd2l0Y2giLCJDaGVjayIsIlgiLCJBcnJvd1JpZ2h0IiwiU3BhcmtsZXMiLCJwbGFucyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIm1vbnRobHlQcmljZSIsInllYXJseVByaWNlIiwiZmVhdHVyZXMiLCJpbmNsdWRlZCIsImN0YSIsInBvcHVsYXIiLCJmYXFzIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJQcmljaW5nIiwiX3MiLCJpc1llYXJseSIsInNldElzWWVhcmx5IiwidXNlciIsInNldFVzZXIiLCJuYXZpZ2F0ZSIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJhdXRoIiwiaXNBdXRoZW50aWNhdGVkIiwidGhlbiIsImlzQXV0aCIsInVzZXJEYXRhIiwibWUiLCJjYXRjaCIsImhhbmRsZVBsYW5DbGljayIsInBsYW4iLCJyZWRpcmVjdFRvTG9naW4iLCJyZXN0YXVyYW50X2lkIiwib3BhY2l0eSIsInkiLCJtYXAiLCJpbmRleCIsImRlbGF5IiwiTWF0aCIsInJvdW5kIiwiZmVhdHVyZSIsImlkIiwiX2lkIiwiZmFxIiwib25jZSIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlByaWNpbmcuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IGJhc2U0NCB9IGZyb20gXCJAL2FwaS9iYXNlNDRDbGllbnRcIjtcblxuY29uc3QgY3JlYXRlUGFnZVVybCA9IChwYWdlTmFtZSkgPT4gYC8ke3BhZ2VOYW1lfWA7XG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3N3aXRjaFwiO1xuaW1wb3J0IHsgQ2hlY2ssIFgsIEFycm93UmlnaHQsIFNwYXJrbGVzIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5jb25zdCBwbGFucyA9IFtcbntcbiAgbmFtZTogXCJCYXNpY1wiLFxuICBkZXNjcmlwdGlvbjogXCJQZXJmZWN0IGZvciBzbWFsbCByZXN0YXVyYW50cyBnZXR0aW5nIHN0YXJ0ZWRcIixcbiAgbW9udGhseVByaWNlOiA5OTksXG4gIHllYXJseVByaWNlOiA5OTkwLFxuICBmZWF0dXJlczogW1xuICB7IG5hbWU6IFwiUVIgQ29kZSBPcmRlcmluZ1wiLCBpbmNsdWRlZDogdHJ1ZSB9LFxuICB7IG5hbWU6IFwiRGlnaXRhbCBNZW51XCIsIGluY2x1ZGVkOiB0cnVlIH0sXG4gIHsgbmFtZTogXCJVcCB0byA1MCBNZW51IEl0ZW1zXCIsIGluY2x1ZGVkOiB0cnVlIH0sXG4gIHsgbmFtZTogXCJVcCB0byAxMCBUYWJsZXNcIiwgaW5jbHVkZWQ6IHRydWUgfSxcbiAgeyBuYW1lOiBcIk9yZGVyIE1hbmFnZW1lbnRcIiwgaW5jbHVkZWQ6IHRydWUgfSxcbiAgeyBuYW1lOiBcIkJhc2ljIEFuYWx5dGljc1wiLCBpbmNsdWRlZDogdHJ1ZSB9LFxuICB7IG5hbWU6IFwiRW1haWwgU3VwcG9ydFwiLCBpbmNsdWRlZDogdHJ1ZSB9LFxuICB7IG5hbWU6IFwiRGlyZWN0IFBheW1lbnRzXCIsIGluY2x1ZGVkOiBmYWxzZSB9LFxuICB7IG5hbWU6IFwiQ3VzdG9tZXIgRGF0YWJhc2VcIiwgaW5jbHVkZWQ6IGZhbHNlIH0sXG4gIHsgbmFtZTogXCJDdXN0b20gQnJhbmRpbmdcIiwgaW5jbHVkZWQ6IGZhbHNlIH0sXG4gIHsgbmFtZTogXCJNdWx0aS1PdXRsZXRcIiwgaW5jbHVkZWQ6IGZhbHNlIH1dLFxuXG4gIGN0YTogXCJTdGFydCBGcmVlIFRyaWFsXCIsXG4gIHBvcHVsYXI6IGZhbHNlXG59LFxue1xuICBuYW1lOiBcIlByb1wiLFxuICBkZXNjcmlwdGlvbjogXCJGb3IgZ3Jvd2luZyByZXN0YXVyYW50cyB0aGF0IHdhbnQgbW9yZSBjb250cm9sXCIsXG4gIG1vbnRobHlQcmljZTogMTk5OSxcbiAgeWVhcmx5UHJpY2U6IDE5OTkwLFxuICBmZWF0dXJlczogW1xuICB7IG5hbWU6IFwiUVIgQ29kZSBPcmRlcmluZ1wiLCBpbmNsdWRlZDogdHJ1ZSB9LFxuICB7IG5hbWU6IFwiRGlnaXRhbCBNZW51XCIsIGluY2x1ZGVkOiB0cnVlIH0sXG4gIHsgbmFtZTogXCJVbmxpbWl0ZWQgTWVudSBJdGVtc1wiLCBpbmNsdWRlZDogdHJ1ZSB9LFxuICB7IG5hbWU6IFwiVW5saW1pdGVkIFRhYmxlc1wiLCBpbmNsdWRlZDogdHJ1ZSB9LFxuICB7IG5hbWU6IFwiT3JkZXIgTWFuYWdlbWVudFwiLCBpbmNsdWRlZDogdHJ1ZSB9LFxuICB7IG5hbWU6IFwiQWR2YW5jZWQgQW5hbHl0aWNzXCIsIGluY2x1ZGVkOiB0cnVlIH0sXG4gIHsgbmFtZTogXCJQcmlvcml0eSBTdXBwb3J0XCIsIGluY2x1ZGVkOiB0cnVlIH0sXG4gIHsgbmFtZTogXCJEaXJlY3QgUGF5bWVudHNcIiwgaW5jbHVkZWQ6IHRydWUgfSxcbiAgeyBuYW1lOiBcIkN1c3RvbWVyIERhdGFiYXNlXCIsIGluY2x1ZGVkOiB0cnVlIH0sXG4gIHsgbmFtZTogXCJDdXN0b20gQnJhbmRpbmdcIiwgaW5jbHVkZWQ6IHRydWUgfSxcbiAgeyBuYW1lOiBcIk11bHRpLU91dGxldFwiLCBpbmNsdWRlZDogZmFsc2UgfV0sXG5cbiAgY3RhOiBcIlN0YXJ0IEZyZWUgVHJpYWxcIixcbiAgcG9wdWxhcjogdHJ1ZVxufSxcbntcbiAgbmFtZTogXCJNdWx0aS1PdXRsZXRcIixcbiAgZGVzY3JpcHRpb246IFwiRm9yIHJlc3RhdXJhbnQgY2hhaW5zIHdpdGggbXVsdGlwbGUgbG9jYXRpb25zXCIsXG4gIG1vbnRobHlQcmljZTogNDk5OSxcbiAgeWVhcmx5UHJpY2U6IDQ5OTkwLFxuICBmZWF0dXJlczogW1xuICB7IG5hbWU6IFwiUVIgQ29kZSBPcmRlcmluZ1wiLCBpbmNsdWRlZDogdHJ1ZSB9LFxuICB7IG5hbWU6IFwiRGlnaXRhbCBNZW51XCIsIGluY2x1ZGVkOiB0cnVlIH0sXG4gIHsgbmFtZTogXCJVbmxpbWl0ZWQgTWVudSBJdGVtc1wiLCBpbmNsdWRlZDogdHJ1ZSB9LFxuICB7IG5hbWU6IFwiVW5saW1pdGVkIFRhYmxlc1wiLCBpbmNsdWRlZDogdHJ1ZSB9LFxuICB7IG5hbWU6IFwiT3JkZXIgTWFuYWdlbWVudFwiLCBpbmNsdWRlZDogdHJ1ZSB9LFxuICB7IG5hbWU6IFwiQWR2YW5jZWQgQW5hbHl0aWNzXCIsIGluY2x1ZGVkOiB0cnVlIH0sXG4gIHsgbmFtZTogXCJEZWRpY2F0ZWQgU3VwcG9ydFwiLCBpbmNsdWRlZDogdHJ1ZSB9LFxuICB7IG5hbWU6IFwiRGlyZWN0IFBheW1lbnRzXCIsIGluY2x1ZGVkOiB0cnVlIH0sXG4gIHsgbmFtZTogXCJDdXN0b21lciBEYXRhYmFzZVwiLCBpbmNsdWRlZDogdHJ1ZSB9LFxuICB7IG5hbWU6IFwiQ3VzdG9tIEJyYW5kaW5nXCIsIGluY2x1ZGVkOiB0cnVlIH0sXG4gIHsgbmFtZTogXCJNdWx0aS1PdXRsZXQgKFVwIHRvIDUpXCIsIGluY2x1ZGVkOiB0cnVlIH1dLFxuXG4gIGN0YTogXCJDb250YWN0IFNhbGVzXCIsXG4gIHBvcHVsYXI6IGZhbHNlXG59XTtcblxuXG5jb25zdCBmYXFzID0gW1xue1xuICBxdWVzdGlvbjogXCJJcyB0aGVyZSBhIGZyZWUgdHJpYWw/XCIsXG4gIGFuc3dlcjogXCJZZXMhIEFsbCBwbGFucyBjb21lIHdpdGggYSAxNC1kYXkgZnJlZSB0cmlhbC4gTm8gY3JlZGl0IGNhcmQgcmVxdWlyZWQgdG8gc3RhcnQuXCJcbn0sXG57XG4gIHF1ZXN0aW9uOiBcIkNhbiBJIGNoYW5nZSBwbGFucyBsYXRlcj9cIixcbiAgYW5zd2VyOiBcIkFic29sdXRlbHkuIFlvdSBjYW4gdXBncmFkZSBvciBkb3duZ3JhZGUgeW91ciBwbGFuIGF0IGFueSB0aW1lLiBDaGFuZ2VzIHRha2UgZWZmZWN0IG9uIHlvdXIgbmV4dCBiaWxsaW5nIGN5Y2xlLlwiXG59LFxue1xuICBxdWVzdGlvbjogXCJXaGF0IHBheW1lbnQgbWV0aG9kcyBkbyB5b3UgYWNjZXB0P1wiLFxuICBhbnN3ZXI6IFwiV2UgYWNjZXB0IGFsbCBtYWpvciBjcmVkaXQgY2FyZHMsIGRlYml0IGNhcmRzLCBVUEksIGFuZCBuZXQgYmFua2luZyBmb3IgSW5kaWFuIGN1c3RvbWVycy5cIlxufSxcbntcbiAgcXVlc3Rpb246IFwiSXMgdGhlcmUgYSB0cmFuc2FjdGlvbiBmZWU/XCIsXG4gIGFuc3dlcjogXCJObyB0cmFuc2FjdGlvbiBmZWUgZnJvbSBSZXN0cm9TYWF0aGkuIFN0YW5kYXJkIHBheW1lbnQgZ2F0ZXdheSBjaGFyZ2VzICgyLTMlKSBhcHBseSBmb3Igb25saW5lIHBheW1lbnRzLlwiXG59LFxue1xuICBxdWVzdGlvbjogXCJDYW4gSSBjYW5jZWwgYW55dGltZT9cIixcbiAgYW5zd2VyOiBcIlllcywgeW91IGNhbiBjYW5jZWwgeW91ciBzdWJzY3JpcHRpb24gYXQgYW55IHRpbWUuIFlvdXIgYWNjZXNzIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB5b3VyIGJpbGxpbmcgcGVyaW9kLlwiXG59LFxue1xuICBxdWVzdGlvbjogXCJEbyB5b3Ugb2ZmZXIgY3VzdG9tIGVudGVycHJpc2UgcGxhbnM/XCIsXG4gIGFuc3dlcjogXCJZZXMhIEZvciBsYXJnZSBjaGFpbnMgb3Igc3BlY2lmaWMgcmVxdWlyZW1lbnRzLCBjb250YWN0IG91ciBzYWxlcyB0ZWFtIGZvciBhIGN1c3RvbSBxdW90ZS5cIlxufV07XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpY2luZygpIHtcbiAgY29uc3QgW2lzWWVhcmx5LCBzZXRJc1llYXJseV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGJlaGF2aW9yOiAnaW5zdGFudCcgfSk7XG4gICAgYmFzZTQ0LmF1dGguaXNBdXRoZW50aWNhdGVkKCkudGhlbihhc3luYyAoaXNBdXRoKSA9PiB7XG4gICAgICBpZiAoaXNBdXRoKSB7XG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgYmFzZTQ0LmF1dGgubWUoKTtcbiAgICAgICAgc2V0VXNlcih1c2VyRGF0YSk7XG4gICAgICB9XG4gICAgfSkuY2F0Y2goKCkgPT4ge30pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlUGxhbkNsaWNrID0gKHBsYW4pID0+IHtcbiAgICBpZiAocGxhbi5jdGEgPT09IFwiQ29udGFjdCBTYWxlc1wiKSB7XG4gICAgICBuYXZpZ2F0ZShjcmVhdGVQYWdlVXJsKFwiQ29udGFjdFwiKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdXNlcikge1xuICAgICAgLy8gTm90IGxvZ2dlZCBpbiAtIHJlZGlyZWN0IHRvIEdldFN0YXJ0ZWQgKGxvZ2luL3NpZ251cClcbiAgICAgIGJhc2U0NC5hdXRoLnJlZGlyZWN0VG9Mb2dpbihjcmVhdGVQYWdlVXJsKFwiR2V0U3RhcnRlZFwiKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh1c2VyLnJlc3RhdXJhbnRfaWQpIHtcbiAgICAgIC8vIExvZ2dlZCBpbiB3aXRoIHJlc3RhdXJhbnQgLSBnbyB0byBiaWxsaW5nIGRhc2hib2FyZFxuICAgICAgbmF2aWdhdGUoY3JlYXRlUGFnZVVybChcIkJpbGxpbmdcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYXZpZ2F0ZShjcmVhdGVQYWdlVXJsKFwiR2V0U3RhcnRlZFwiKSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaWNpbmc6MTM4OjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJweS0yMFwiPlxuICAgICAgey8qIEhlcm8gKi99XG4gICAgICA8c2VjdGlvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaWNpbmc6MTQwOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOCB0ZXh0LWNlbnRlciBtYi0xNlwiPlxuICAgICAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaWNpbmc6MTQxOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fT5cblxuICAgICAgICAgIDxoMSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaWNpbmc6MTQ1OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtNHhsIG1kOnRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwIG1iLTZcIj5cbiAgICAgICAgICAgIFNpbXBsZSwgVHJhbnNwYXJlbnQgUHJpY2luZ1xuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9QcmljaW5nOjE0ODoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtZ3JheS02MDAgbWF4LXctMnhsIG14LWF1dG8gbWItOFwiPlxuICAgICAgICAgICAgTm8gaGlkZGVuIGZlZXMuIE5vIGNvbW1pc3Npb24gb24gb3JkZXJzLiBKdXN0IGEgZmxhdCBtb250aGx5IGZlZS5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICB7LyogQmlsbGluZyBUb2dnbGUgKi99XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaWNpbmc6MTUzOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTQgbWItMTJcIj5cbiAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUHJpY2luZzoxNTQ6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B0ZXh0LXNtICR7IWlzWWVhcmx5ID8gJ3RleHQtZ3JheS05MDAgZm9udC1tZWRpdW0nIDogJ3RleHQtZ3JheS01MDAnfWB9PlxuICAgICAgICAgICAgICBNb250aGx5XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8U3dpdGNoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUHJpY2luZzoxNTc6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgY2hlY2tlZD17aXNZZWFybHl9XG4gICAgICAgICAgICBvbkNoZWNrZWRDaGFuZ2U9e3NldElzWWVhcmx5fSAvPlxuXG4gICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaWNpbmc6MTYxOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgdGV4dC1zbSAke2lzWWVhcmx5ID8gJ3RleHQtZ3JheS05MDAgZm9udC1tZWRpdW0nIDogJ3RleHQtZ3JheS01MDAnfWB9PlxuICAgICAgICAgICAgICBZZWFybHlcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIHtpc1llYXJseSAmJlxuICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9QcmljaW5nOjE2NToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJiZy1ncmVlbi0xMDAgdGV4dC1ncmVlbi03MDAgdGV4dC14cyBmb250LW1lZGl1bSBweC0yLjUgcHktMSByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICBTYXZlIDE3JVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIFByaWNpbmcgQ2FyZHMgKi99XG4gICAgICA8c2VjdGlvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaWNpbmc6MTc0OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOCBtYi0yNFwiPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUHJpY2luZzoxNzU6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTMgZ2FwLThcIj5cbiAgICAgICAgICB7cGxhbnMubWFwKChwbGFuLCBpbmRleCkgPT5cbiAgICAgICAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaWNpbmc6MTc3OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICBrZXk9e3BsYW4ubmFtZX1cbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogaW5kZXggKiAwLjEgfX0gY2xhc3NOYW1lPVwiYmctc2xhdGUtOTAwIHRleHQtd2hpdGUgcC04IHJvdW5kZWQtMnhsIHJlbGF0aXZlIGZyb20tb3JhbmdlLTYwMCB0by1vcmFuZ2UtNTAwIHNoYWRvdy14bCBzaGFkb3ctb3JhbmdlLTIwMFwiIGRhdGEtYXJyLWluZGV4PXtpbmRleH0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cInBsYW5zXCI+XG5cblxuXG5cblxuXG4gICAgICAgICAgICAgIHtwbGFuLnBvcHVsYXIgJiZcbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9QcmljaW5nOjE4OToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTQgbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMlwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9QcmljaW5nOjE5MDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tYW1iZXItNDAwIHRvLW9yYW5nZS00MDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXhzIGZvbnQtYm9sZCBweC00IHB5LTEuNSByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNwYXJrbGVzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUHJpY2luZzoxOTE6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIE1PU1QgUE9QVUxBUlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9QcmljaW5nOjE5NzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1iLTZcIiBkYXRhLWFyci1pbmRleD17aW5kZXh9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJwbGFuc1wiPlxuICAgICAgICAgICAgICAgIDxoMyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaWNpbmc6MTk4OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgdGV4dC0yeGwgZm9udC1ib2xkICR7cGxhbi5wb3B1bGFyID8gJ3RleHQtd2hpdGUnIDogJ3RleHQtZ3JheS05MDAnfWB9IGRhdGEtYXJyLWluZGV4PXtpbmRleH0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cInBsYW5zXCIgZGF0YS1hcnItZmllbGQ9XCJuYW1lXCI+XG4gICAgICAgICAgICAgICAgICB7cGxhbi5uYW1lfVxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9QcmljaW5nOjIwMToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNTAgbXQtMSB0ZXh0LWJhc2VcIiBkYXRhLWFyci1pbmRleD17aW5kZXh9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJwbGFuc1wiIGRhdGEtYXJyLWZpZWxkPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgIHtwbGFuLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaWNpbmc6MjA2OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWItNlwiIGRhdGEtYXJyLWluZGV4PXtpbmRleH0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cInBsYW5zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaWNpbmc6MjA3OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1iYXNlbGluZSBnYXAtMVwiIGRhdGEtYXJyLWluZGV4PXtpbmRleH0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cInBsYW5zXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaWNpbmc6MjA4OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS01MCB0ZXh0LTR4bCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAg4oK5e2lzWWVhcmx5ID8gTWF0aC5yb3VuZChwbGFuLnllYXJseVByaWNlIC8gMTIpIDogcGxhbi5tb250aGx5UHJpY2V9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaWNpbmc6MjExOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgIC9tb250aFxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtpc1llYXJseSAmJlxuICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaWNpbmc6MjE2OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgdGV4dC1zbSBtdC0xICR7cGxhbi5wb3B1bGFyID8gJ3RleHQtb3JhbmdlLTEwMCcgOiAndGV4dC1ncmF5LTUwMCd9YH0+XG4gICAgICAgICAgICAgICAgICAgIEJpbGxlZCDigrl7cGxhbi55ZWFybHlQcmljZX0geWVhcmx5XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaWNpbmc6MjIyOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBsYW5DbGljayhwbGFuKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBtYi02ICR7XG4gICAgICAgICAgICBwbGFuLnBvcHVsYXIgP1xuICAgICAgICAgICAgJ2JnLXdoaXRlIHRleHQtb3JhbmdlLTYwMCBob3ZlcjpiZy1ncmF5LTEwMCcgOlxuICAgICAgICAgICAgJ2JnLWdyYWRpZW50LXRvLXIgZnJvbS1vcmFuZ2UtNjAwIHRvLW9yYW5nZS01MDAgdGV4dC13aGl0ZSd9YFxuICAgICAgICAgICAgfSBkYXRhLWFyci1pbmRleD17aW5kZXh9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJwbGFuc1wiIGRhdGEtYXJyLWZpZWxkPVwiY3RhXCI+XG4gICAgICAgICAgICAgICAge3BsYW4uY3RhfVxuICAgICAgICAgICAgICAgIDxBcnJvd1JpZ2h0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUHJpY2luZzoyMzA6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCBtbC0yXCIgZGF0YS1hcnItaW5kZXg9e2luZGV4fSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwicGxhbnNcIiAvPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICA8dWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9QcmljaW5nOjIzMzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktM1wiIGRhdGEtYXJyLWluZGV4PXtpbmRleH0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cInBsYW5zXCI+XG4gICAgICAgICAgICAgICAge3BsYW4uZmVhdHVyZXMubWFwKChmZWF0dXJlKSA9PlxuICAgICAgICAgICAgICA8bGkgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9QcmljaW5nOjIzNToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17ZmVhdHVyZS5uYW1lfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgICB7ZmVhdHVyZS5pbmNsdWRlZCA/XG4gICAgICAgICAgICAgICAgPENoZWNrIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUHJpY2luZzoyMzc6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B3LTUgaC01ICR7cGxhbi5wb3B1bGFyID8gJ3RleHQtZ3JlZW4tMzAwJyA6ICd0ZXh0LWdyZWVuLTUwMCd9YH0gLz4gOlxuXG4gICAgICAgICAgICAgICAgPFggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9QcmljaW5nOjIzOToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YHctNSBoLTUgJHtwbGFuLnBvcHVsYXIgPyAndGV4dC1vcmFuZ2UtMzAwJyA6ICd0ZXh0LWdyYXktMzAwJ31gfSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9QcmljaW5nOjI0MToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMTAwIHRleHQtYmFzZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwibmFtZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtmZWF0dXJlPy5pZCB8fCBmZWF0dXJlPy5faWR9PlxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAge2ZlYXR1cmUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIEZBUXMgKi99XG4gICAgICA8c2VjdGlvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaWNpbmc6MjU3OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtYXgtdy0zeGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICA8aDIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9QcmljaW5nOjI1ODo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwIHRleHQtY2VudGVyIG1iLTEyXCI+XG4gICAgICAgICAgRnJlcXVlbnRseSBBc2tlZCBRdWVzdGlvbnNcbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaWNpbmc6MjYxOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgICAgICB7ZmFxcy5tYXAoKGZhcSwgaW5kZXgpID0+XG4gICAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9QcmljaW5nOjI2MzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAga2V5PXtmYXEucXVlc3Rpb259XG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAxMCB9fVxuICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogaW5kZXggKiAwLjA1IH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS01MCByb3VuZGVkLXhsIHAtNlwiIGRhdGEtYXJyLWluZGV4PXtpbmRleH0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cImZhcXNcIj5cblxuICAgICAgICAgICAgICA8aDMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9QcmljaW5nOjI3MToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMCBtYi0yXCIgZGF0YS1hcnItaW5kZXg9e2luZGV4fSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwiZmFxc1wiIGRhdGEtYXJyLWZpZWxkPVwicXVlc3Rpb25cIj5cbiAgICAgICAgICAgICAgICB7ZmFxLnF1ZXN0aW9ufVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1ByaWNpbmc6Mjc0OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtXCIgZGF0YS1hcnItaW5kZXg9e2luZGV4fSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwiZmFxc1wiIGRhdGEtYXJyLWZpZWxkPVwiYW5zd2VyXCI+XG4gICAgICAgICAgICAgICAge2ZhcS5hbnN3ZXJ9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj4pO1xuXG59Il0sImZpbGUiOiIvYXBwL3NyYy9wYWdlcy9QcmljaW5nLmpzeCJ9