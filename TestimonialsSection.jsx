import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/landing/TestimonialsSection.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/landing/TestimonialsSection.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useEffect = __vite__cjsImport3_react["useEffect"]; const useState = __vite__cjsImport3_react["useState"];
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=79425e35";
import { Star, Quote } from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
import { base44 } from "/src/api/base44Client.js";
export default function TestimonialsSection() {
  _s();
  const [testimonials, setTestimonials] = useState([]);
  const [avgRating, setAvgRating] = useState(5);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    loadFeedback();
  }, []);
  const loadFeedback = async () => {
    setLoading(true);
    try {
      const feedbacks = await base44.entities.Feedback.filter({
        is_approved: true
      }, "-created_date", 50);
      if (feedbacks.length > 0) {
        const avg = feedbacks.reduce((sum, f) => sum + f.rating, 0) / feedbacks.length;
        setAvgRating(avg.toFixed(1));
        setTestimonials(feedbacks.slice(0, 6));
      }
    } catch (error) {
      console.error("Failed to load feedback:", error);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxDEV("section", { "data-source-location": "components/landing/TestimonialsSection:34:4", "data-dynamic-content": "true", className: "py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/TestimonialsSection:36:6", "data-dynamic-content": "false", className: "absolute top-0 left-0 w-full h-full", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/TestimonialsSection:37:8", "data-dynamic-content": "false", className: "absolute top-20 right-20 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30" }, void 0, false, {
        fileName: "/app/src/components/landing/TestimonialsSection.jsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/TestimonialsSection:38:8", "data-dynamic-content": "false", className: "absolute bottom-20 left-20 w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-30" }, void 0, false, {
        fileName: "/app/src/components/landing/TestimonialsSection.jsx",
        lineNumber: 57,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/landing/TestimonialsSection.jsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/TestimonialsSection:41:6", "data-dynamic-content": "true", className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/TestimonialsSection:43:8", "data-dynamic-content": "true", className: "text-center max-w-3xl mx-auto mb-16 md:mb-20", children: /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-source-location": "components/landing/TestimonialsSection:44:10",
          "data-dynamic-content": "true",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/TestimonialsSection:49:12", "data-dynamic-content": "true", className: "inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6", "data-collection-item-field": "avgRating", children: [
              "⭐ Rated ",
              avgRating,
              "/5 by Restaurant Owners"
            ] }, void 0, true, {
              fileName: "/app/src/components/landing/TestimonialsSection.jsx",
              lineNumber: 68,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "components/landing/TestimonialsSection:52:12", "data-dynamic-content": "false", className: "text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-5 leading-tight", children: [
              "Join ",
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/landing/TestimonialsSection:53:19", "data-dynamic-content": "false", className: "bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent", children: "Happy" }, void 0, false, {
                fileName: "/app/src/components/landing/TestimonialsSection.jsx",
                lineNumber: 72,
                columnNumber: 20
              }, this),
              " Restaurants"
            ] }, void 0, true, {
              fileName: "/app/src/components/landing/TestimonialsSection.jsx",
              lineNumber: 71,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/TestimonialsSection:55:12", "data-dynamic-content": "false", className: "text-xl md:text-2xl text-gray-600", children: "Real stories from restaurant owners who took control" }, void 0, false, {
              fileName: "/app/src/components/landing/TestimonialsSection.jsx",
              lineNumber: 74,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/src/components/landing/TestimonialsSection.jsx",
          lineNumber: 63,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "/app/src/components/landing/TestimonialsSection.jsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/TestimonialsSection:62:8", "data-dynamic-content": "true", className: "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8", "data-collection-id": "Feedback", children: loading ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/TestimonialsSection:64:12", "data-dynamic-content": "false", className: "col-span-full text-center py-12", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/TestimonialsSection:65:14", "data-dynamic-content": "false", className: "animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto" }, void 0, false, {
          fileName: "/app/src/components/landing/TestimonialsSection.jsx",
          lineNumber: 84,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/TestimonialsSection:66:14", "data-dynamic-content": "false", className: "text-gray-600 mt-4", children: "Loading testimonials..." }, void 0, false, {
          fileName: "/app/src/components/landing/TestimonialsSection.jsx",
          lineNumber: 85,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/landing/TestimonialsSection.jsx",
        lineNumber: 83,
        columnNumber: 11
      }, this) : testimonials.length > 0 ? testimonials.map(
        (testimonial, index) => /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            "data-source-location": "components/landing/TestimonialsSection:69:12",
            "data-dynamic-content": "true",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: index * 0.15 },
            className: "bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border-2 border-gray-100 hover:border-orange-300 relative shadow-lg hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 group",
            "data-collection-item-id": testimonial?.id,
            children: [
              /* @__PURE__ */ jsxDEV(Quote, { "data-source-location": "components/landing/TestimonialsSection:77:14", "data-dynamic-content": "false", className: "absolute top-6 right-6 md:top-8 md:right-8 w-8 h-8 md:w-12 md:h-12 text-orange-100 group-hover:text-orange-200 transition-colors" }, void 0, false, {
                fileName: "/app/src/components/landing/TestimonialsSection.jsx",
                lineNumber: 96,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/TestimonialsSection:80:14", "data-dynamic-content": "true", className: "flex gap-1 mb-4 md:mb-6", children: [...Array(testimonial.rating)].map(
                (_, i) => /* @__PURE__ */ jsxDEV(Star, { "data-source-location": "components/landing/TestimonialsSection:82:18", "data-dynamic-content": "true", className: "w-4 h-4 md:w-6 md:h-6 fill-yellow-400 text-yellow-400 drop-shadow-sm", "data-arr-index": i }, i, false, {
                  fileName: "/app/src/components/landing/TestimonialsSection.jsx",
                  lineNumber: 101,
                  columnNumber: 15
                }, this)
              ) }, void 0, false, {
                fileName: "/app/src/components/landing/TestimonialsSection.jsx",
                lineNumber: 99,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/TestimonialsSection:87:14", "data-dynamic-content": "true", className: "text-gray-700 text-sm md:text-base lg:text-lg mb-6 md:mb-8 leading-relaxed font-medium", "data-collection-item-field": "review", "data-collection-item-id": testimonial?.id, children: [
                '"',
                testimonial.review,
                '"'
              ] }, void 0, true, {
                fileName: "/app/src/components/landing/TestimonialsSection.jsx",
                lineNumber: 106,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/TestimonialsSection:92:14", "data-dynamic-content": "true", className: "flex items-center gap-3 md:gap-4 pt-4 md:pt-6 border-t border-gray-100", children: [
                testimonial.restaurant_logo ? /* @__PURE__ */ jsxDEV(
                  "img",
                  {
                    "data-source-location": "components/landing/TestimonialsSection:94:18",
                    "data-dynamic-content": "true",
                    src: testimonial.restaurant_logo,
                    alt: testimonial.restaurant_name,
                    className: "w-12 h-12 md:w-14 md:h-14 rounded-full object-cover ring-4 ring-orange-100"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/components/landing/TestimonialsSection.jsx",
                    lineNumber: 113,
                    columnNumber: 15
                  },
                  this
                ) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/TestimonialsSection:100:18", "data-dynamic-content": "true", className: "w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center text-white text-lg md:text-xl font-bold ring-4 ring-orange-100", children: testimonial.restaurant_name?.[0] || "R" }, void 0, false, {
                  fileName: "/app/src/components/landing/TestimonialsSection.jsx",
                  lineNumber: 119,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/TestimonialsSection:104:16", "data-dynamic-content": "true", children: [
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/TestimonialsSection:105:18", "data-dynamic-content": "true", className: "font-bold text-gray-900 text-base md:text-lg", "data-collection-item-field": "restaurant_name", "data-collection-item-id": testimonial?.id, children: testimonial.restaurant_name }, void 0, false, {
                    fileName: "/app/src/components/landing/TestimonialsSection.jsx",
                    lineNumber: 124,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/TestimonialsSection:106:18", "data-dynamic-content": "false", className: "text-xs md:text-sm text-gray-600 font-medium", children: "Restaurant Owner" }, void 0, false, {
                    fileName: "/app/src/components/landing/TestimonialsSection.jsx",
                    lineNumber: 125,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/landing/TestimonialsSection.jsx",
                  lineNumber: 123,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/landing/TestimonialsSection.jsx",
                lineNumber: 111,
                columnNumber: 15
              }, this)
            ]
          },
          testimonial.id,
          true,
          {
            fileName: "/app/src/components/landing/TestimonialsSection.jsx",
            lineNumber: 88,
            columnNumber: 11
          },
          this
        )
      ) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/landing/TestimonialsSection:113:12", "data-dynamic-content": "false", className: "col-span-3 text-center py-12 text-gray-500", children: /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/landing/TestimonialsSection:114:14", "data-dynamic-content": "false", className: "text-lg", children: "No reviews yet. Be the first to share your experience!" }, void 0, false, {
        fileName: "/app/src/components/landing/TestimonialsSection.jsx",
        lineNumber: 133,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/src/components/landing/TestimonialsSection.jsx",
        lineNumber: 132,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/components/landing/TestimonialsSection.jsx",
        lineNumber: 81,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/landing/TestimonialsSection.jsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/landing/TestimonialsSection.jsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
_s(TestimonialsSection, "clIghhaACSCc1kKAbvB1m5jCUCw=");
_c = TestimonialsSection;
var _c;
$RefreshReg$(_c, "TestimonialsSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/landing/TestimonialsSection.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/landing/TestimonialsSection.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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LDJCQUF5QlQsYUFBYUcsSUFBS0gsc0JBQVlTLG1CQUFuUTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFtUjtBQUFBLGtCQUNuUix1QkFBQyxTQUFJLHdCQUFxQixpREFBZ0Qsd0JBQXFCLFNBQVEsV0FBVSxnREFBOEMsZ0NBQS9KO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRUE7QUFBQSxxQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUtBO0FBQUEsbUJBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBa0JBO0FBQUE7QUFBQTtBQUFBLFVBeENDVCxZQUFZRztBQUFBQSxVQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBMENFO0FBQUEsTUFDRixJQUNBLHVCQUFDLFNBQUksd0JBQXFCLGlEQUFnRCx3QkFBcUIsU0FBUSxXQUFVLDhDQUM3RyxpQ0FBQyxPQUFFLHdCQUFxQixpREFBZ0Qsd0JBQXFCLFNBQVEsV0FBVSxXQUFVLHNFQUF6SDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQStLLEtBRG5MO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFFRSxLQXJESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdURBO0FBQUEsU0E1RUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQTZFQTtBQUFBLE9BcEZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FxRkE7QUFFSjtBQUFDOUIsR0FuSHVCRCxxQkFBbUI7QUFBQXNDLEtBQW5CdEM7QUFBbUIsSUFBQXNDO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwibW90aW9uIiwiU3RhciIsIlF1b3RlIiwiYmFzZTQ0IiwiVGVzdGltb25pYWxzU2VjdGlvbiIsIl9zIiwidGVzdGltb25pYWxzIiwic2V0VGVzdGltb25pYWxzIiwiYXZnUmF0aW5nIiwic2V0QXZnUmF0aW5nIiwibG9hZGluZyIsInNldExvYWRpbmciLCJsb2FkRmVlZGJhY2siLCJmZWVkYmFja3MiLCJlbnRpdGllcyIsIkZlZWRiYWNrIiwiZmlsdGVyIiwiaXNfYXBwcm92ZWQiLCJsZW5ndGgiLCJhdmciLCJyZWR1Y2UiLCJzdW0iLCJmIiwicmF0aW5nIiwidG9GaXhlZCIsInNsaWNlIiwiZXJyb3IiLCJjb25zb2xlIiwib3BhY2l0eSIsInkiLCJvbmNlIiwibWFwIiwidGVzdGltb25pYWwiLCJpbmRleCIsImRlbGF5IiwiaWQiLCJBcnJheSIsIl8iLCJpIiwicmV2aWV3IiwicmVzdGF1cmFudF9sb2dvIiwicmVzdGF1cmFudF9uYW1lIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiVGVzdGltb25pYWxzU2VjdGlvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBTdGFyLCBRdW90ZSB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IGJhc2U0NCB9IGZyb20gXCJAL2FwaS9iYXNlNDRDbGllbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdGltb25pYWxzU2VjdGlvbigpIHtcbiAgY29uc3QgW3Rlc3RpbW9uaWFscywgc2V0VGVzdGltb25pYWxzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2F2Z1JhdGluZywgc2V0QXZnUmF0aW5nXSA9IHVzZVN0YXRlKDUpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvYWRGZWVkYmFjaygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgbG9hZEZlZWRiYWNrID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZlZWRiYWNrcyA9IGF3YWl0IGJhc2U0NC5lbnRpdGllcy5GZWVkYmFjay5maWx0ZXIoe1xuICAgICAgICBpc19hcHByb3ZlZDogdHJ1ZVxuICAgICAgfSwgJy1jcmVhdGVkX2RhdGUnLCA1MCk7XG5cbiAgICAgIGlmIChmZWVkYmFja3MubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBhdmcgPSBmZWVkYmFja3MucmVkdWNlKChzdW0sIGYpID0+IHN1bSArIGYucmF0aW5nLCAwKSAvIGZlZWRiYWNrcy5sZW5ndGg7XG4gICAgICAgIHNldEF2Z1JhdGluZyhhdmcudG9GaXhlZCgxKSk7XG4gICAgICAgIHNldFRlc3RpbW9uaWFscyhmZWVkYmFja3Muc2xpY2UoMCwgNikpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgZmVlZGJhY2s6XCIsIGVycm9yKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL1Rlc3RpbW9uaWFsc1NlY3Rpb246MzQ6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB5LTE2IG1kOnB5LTI0IGxnOnB5LTMyIGJnLXdoaXRlIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgey8qIEJhY2tncm91bmQgZGVjb3JhdGlvbiAqL31cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvVGVzdGltb25pYWxzU2VjdGlvbjozNjo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1mdWxsXCI+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvVGVzdGltb25pYWxzU2VjdGlvbjozNzo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yMCByaWdodC0yMCB3LTk2IGgtOTYgYmctb3JhbmdlLTEwMCByb3VuZGVkLWZ1bGwgYmx1ci0zeGwgb3BhY2l0eS0zMFwiIC8+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvVGVzdGltb25pYWxzU2VjdGlvbjozODo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0yMCBsZWZ0LTIwIHctOTYgaC05NiBiZy1yb3NlLTEwMCByb3VuZGVkLWZ1bGwgYmx1ci0zeGwgb3BhY2l0eS0zMFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9UZXN0aW1vbmlhbHNTZWN0aW9uOjQxOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYXgtdy03eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICB7LyogSGVhZGVyICovfVxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL1Rlc3RpbW9uaWFsc1NlY3Rpb246NDM6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1heC13LTN4bCBteC1hdXRvIG1iLTE2IG1kOm1iLTIwXCI+XG4gICAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvVGVzdGltb25pYWxzU2VjdGlvbjo0NDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxuICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19PlxuXG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL1Rlc3RpbW9uaWFsc1NlY3Rpb246NDk6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHgtNCBweS0yIGJnLWdyZWVuLTEwMCB0ZXh0LWdyZWVuLTcwMCByb3VuZGVkLWZ1bGwgdGV4dC1zbSBmb250LXNlbWlib2xkIG1iLTZcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImF2Z1JhdGluZ1wiPlxuICAgICAgICAgICAgICDirZAgUmF0ZWQge2F2Z1JhdGluZ30vNSBieSBSZXN0YXVyYW50IE93bmVyc1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvVGVzdGltb25pYWxzU2VjdGlvbjo1MjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTV4bCBsZzp0ZXh0LTZ4bCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwIG1iLTUgbGVhZGluZy10aWdodFwiPlxuICAgICAgICAgICAgICBKb2luIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL1Rlc3RpbW9uaWFsc1NlY3Rpb246NTM6MTlcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLW9yYW5nZS02MDAgdG8tcm9zZS02MDAgYmctY2xpcC10ZXh0IHRleHQtdHJhbnNwYXJlbnRcIj5IYXBweTwvc3Bhbj4gUmVzdGF1cmFudHNcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9UZXN0aW1vbmlhbHNTZWN0aW9uOjU1OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQteGwgbWQ6dGV4dC0yeGwgdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICBSZWFsIHN0b3JpZXMgZnJvbSByZXN0YXVyYW50IG93bmVycyB3aG8gdG9vayBjb250cm9sXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogVGVzdGltb25pYWxzIEdyaWQgKi99XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvVGVzdGltb25pYWxzU2VjdGlvbjo2Mjo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JpZCBzbTpncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNiBtZDpnYXAtOFwiIGRhdGEtY29sbGVjdGlvbi1pZD1cIkZlZWRiYWNrXCI+XG4gICAgICAgICAge2xvYWRpbmcgP1xuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvVGVzdGltb25pYWxzU2VjdGlvbjo2NDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJjb2wtc3Bhbi1mdWxsIHRleHQtY2VudGVyIHB5LTEyXCI+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvVGVzdGltb25pYWxzU2VjdGlvbjo2NToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJhbmltYXRlLXNwaW4gcm91bmRlZC1mdWxsIGgtMTIgdy0xMiBib3JkZXItYi0yIGJvcmRlci1vcmFuZ2UtNjAwIG14LWF1dG9cIj48L2Rpdj5cbiAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvVGVzdGltb25pYWxzU2VjdGlvbjo2NjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIG10LTRcIj5Mb2FkaW5nIHRlc3RpbW9uaWFscy4uLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PiA6XG4gICAgICAgICAgdGVzdGltb25pYWxzLmxlbmd0aCA+IDAgPyB0ZXN0aW1vbmlhbHMubWFwKCh0ZXN0aW1vbmlhbCwgaW5kZXgpID0+XG4gICAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvVGVzdGltb25pYWxzU2VjdGlvbjo2OToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAga2V5PXt0ZXN0aW1vbmlhbC5pZH1cbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XG4gICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiBpbmRleCAqIDAuMTUgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBtZDpyb3VuZGVkLTN4bCBwLTYgbWQ6cC04IGxnOnAtMTAgYm9yZGVyLTIgYm9yZGVyLWdyYXktMTAwIGhvdmVyOmJvcmRlci1vcmFuZ2UtMzAwIHJlbGF0aXZlIHNoYWRvdy1sZyBob3ZlcjpzaGFkb3ctMnhsIGhvdmVyOnNoYWRvdy1vcmFuZ2UtNTAwLzEwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCBncm91cFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXt0ZXN0aW1vbmlhbD8uaWR9PlxuXG4gICAgICAgICAgICAgIDxRdW90ZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9UZXN0aW1vbmlhbHNTZWN0aW9uOjc3OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC02IHJpZ2h0LTYgbWQ6dG9wLTggbWQ6cmlnaHQtOCB3LTggaC04IG1kOnctMTIgbWQ6aC0xMiB0ZXh0LW9yYW5nZS0xMDAgZ3JvdXAtaG92ZXI6dGV4dC1vcmFuZ2UtMjAwIHRyYW5zaXRpb24tY29sb3JzXCIgLz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHsvKiBSYXRpbmcgKi99XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvVGVzdGltb25pYWxzU2VjdGlvbjo4MDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggZ2FwLTEgbWItNCBtZDptYi02XCI+XG4gICAgICAgICAgICAgICAge1suLi5BcnJheSh0ZXN0aW1vbmlhbC5yYXRpbmcpXS5tYXAoKF8sIGkpID0+XG4gICAgICAgICAgICAgIDxTdGFyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL1Rlc3RpbW9uaWFsc1NlY3Rpb246ODI6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2l9IGNsYXNzTmFtZT1cInctNCBoLTQgbWQ6dy02IG1kOmgtNiBmaWxsLXllbGxvdy00MDAgdGV4dC15ZWxsb3ctNDAwIGRyb3Atc2hhZG93LXNtXCIgZGF0YS1hcnItaW5kZXg9e2l9IC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiBRdW90ZSAqL31cbiAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvVGVzdGltb25pYWxzU2VjdGlvbjo4NzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgdGV4dC1zbSBtZDp0ZXh0LWJhc2UgbGc6dGV4dC1sZyBtYi02IG1kOm1iLTggbGVhZGluZy1yZWxheGVkIGZvbnQtbWVkaXVtXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJyZXZpZXdcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17dGVzdGltb25pYWw/LmlkfT5cbiAgICAgICAgICAgICAgICBcInt0ZXN0aW1vbmlhbC5yZXZpZXd9XCJcbiAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgIHsvKiBBdXRob3IgKi99XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvVGVzdGltb25pYWxzU2VjdGlvbjo5MjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIG1kOmdhcC00IHB0LTQgbWQ6cHQtNiBib3JkZXItdCBib3JkZXItZ3JheS0xMDBcIj5cbiAgICAgICAgICAgICAgICB7dGVzdGltb25pYWwucmVzdGF1cmFudF9sb2dvID9cbiAgICAgICAgICAgICAgPGltZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9UZXN0aW1vbmlhbHNTZWN0aW9uOjk0OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgc3JjPXt0ZXN0aW1vbmlhbC5yZXN0YXVyYW50X2xvZ299XG4gICAgICAgICAgICAgIGFsdD17dGVzdGltb25pYWwucmVzdGF1cmFudF9uYW1lfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgbWQ6dy0xNCBtZDpoLTE0IHJvdW5kZWQtZnVsbCBvYmplY3QtY292ZXIgcmluZy00IHJpbmctb3JhbmdlLTEwMFwiIC8+IDpcblxuXG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2xhbmRpbmcvVGVzdGltb25pYWxzU2VjdGlvbjoxMDA6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgbWQ6dy0xNCBtZDpoLTE0IHJvdW5kZWQtZnVsbCBiZy1ncmFkaWVudC10by1iciBmcm9tLW9yYW5nZS02MDAgdG8tb3JhbmdlLTUwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXdoaXRlIHRleHQtbGcgbWQ6dGV4dC14bCBmb250LWJvbGQgcmluZy00IHJpbmctb3JhbmdlLTEwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7dGVzdGltb25pYWwucmVzdGF1cmFudF9uYW1lPy5bMF0gfHwgJ1InfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL1Rlc3RpbW9uaWFsc1NlY3Rpb246MTA0OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL1Rlc3RpbW9uaWFsc1NlY3Rpb246MTA1OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtZ3JheS05MDAgdGV4dC1iYXNlIG1kOnRleHQtbGdcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInJlc3RhdXJhbnRfbmFtZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXt0ZXN0aW1vbmlhbD8uaWR9Pnt0ZXN0aW1vbmlhbC5yZXN0YXVyYW50X25hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL1Rlc3RpbW9uaWFsc1NlY3Rpb246MTA2OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQteHMgbWQ6dGV4dC1zbSB0ZXh0LWdyYXktNjAwIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgIFJlc3RhdXJhbnQgT3duZXJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICApIDpcbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYW5kaW5nL1Rlc3RpbW9uaWFsc1NlY3Rpb246MTEzOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImNvbC1zcGFuLTMgdGV4dC1jZW50ZXIgcHktMTIgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGFuZGluZy9UZXN0aW1vbmlhbHNTZWN0aW9uOjExNDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+Tm8gcmV2aWV3cyB5ZXQuIEJlIHRoZSBmaXJzdCB0byBzaGFyZSB5b3VyIGV4cGVyaWVuY2UhPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj4pO1xuXG59Il0sImZpbGUiOiIvYXBwL3NyYy9jb21wb25lbnRzL2xhbmRpbmcvVGVzdGltb25pYWxzU2VjdGlvbi5qc3gifQ==