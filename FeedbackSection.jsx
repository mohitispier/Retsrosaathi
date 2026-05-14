import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/dashboard/FeedbackSection.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/dashboard/FeedbackSection.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"];
import { base44 } from "/src/api/base44Client.js";
import { Button } from "/src/components/ui/button.jsx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "/src/components/ui/card.jsx";
import { Textarea } from "/src/components/ui/textarea.jsx";
import { Star, MessageSquare, Send } from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
import { useToast } from "/src/components/ui/use-toast.jsx";
export default function FeedbackSection({ restaurant, user }) {
  _s();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [review, setReview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const handleSubmit = async () => {
    if (!rating) {
      toast({
        title: "Rating Required",
        description: "Please select a rating",
        variant: "destructive"
      });
      return;
    }
    if (!review.trim()) {
      toast({
        title: "Review Required",
        description: "Please write a review",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    try {
      await base44.entities.Feedback.create({
        restaurant_id: restaurant.restaurant_id,
        restaurant_name: restaurant.name,
        restaurant_logo: restaurant.logo_url || null,
        user_email: user.email,
        rating,
        review: review.trim(),
        is_approved: true
      });
      const toastDismiss = toast({
        title: "Thank You! 🎉",
        description: "Your feedback has been submitted successfully"
      });
      setTimeout(() => {
        toastDismiss.dismiss();
      }, 2e3);
      setRating(0);
      setReview("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit feedback",
        variant: "destructive"
      });
    }
    setIsSubmitting(false);
  };
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/FeedbackSection:70:4", "data-dynamic-content": "true", className: "p-6 max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/FeedbackSection:71:6", "data-dynamic-content": "false", className: "mb-6", children: [
      /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "components/dashboard/FeedbackSection:72:8", "data-dynamic-content": "false", className: "text-2xl font-bold text-gray-900 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV(MessageSquare, { "data-source-location": "components/dashboard/FeedbackSection:73:10", "data-dynamic-content": "false", className: "w-6 h-6 text-orange-600" }, void 0, false, {
          fileName: "/app/src/components/dashboard/FeedbackSection.jsx",
          lineNumber: 92,
          columnNumber: 11
        }, this),
        "Share Your Experience"
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/FeedbackSection.jsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/FeedbackSection:76:8", "data-dynamic-content": "false", className: "text-gray-600 mt-1", children: "Help us improve and inspire other restaurants to join AxoraDigi" }, void 0, false, {
        fileName: "/app/src/components/dashboard/FeedbackSection.jsx",
        lineNumber: 95,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/FeedbackSection.jsx",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/FeedbackSection:81:6", "data-dynamic-content": "true", children: [
      /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "components/dashboard/FeedbackSection:82:8", "data-dynamic-content": "false", children: [
        /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "components/dashboard/FeedbackSection:83:10", "data-dynamic-content": "false", children: "Rate Your Experience" }, void 0, false, {
          fileName: "/app/src/components/dashboard/FeedbackSection.jsx",
          lineNumber: 102,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(CardDescription, { "data-source-location": "components/dashboard/FeedbackSection:84:10", "data-dynamic-content": "false", children: "Your feedback will be displayed on our homepage to help other restaurants" }, void 0, false, {
          fileName: "/app/src/components/dashboard/FeedbackSection.jsx",
          lineNumber: 103,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/FeedbackSection.jsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/FeedbackSection:88:8", "data-dynamic-content": "true", className: "space-y-6", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/FeedbackSection:90:10", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("label", { "data-source-location": "components/dashboard/FeedbackSection:91:12", "data-dynamic-content": "false", className: "block text-sm font-medium text-gray-700 mb-2", children: "Rating" }, void 0, false, {
            fileName: "/app/src/components/dashboard/FeedbackSection.jsx",
            lineNumber: 110,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/FeedbackSection:94:12", "data-dynamic-content": "true", className: "flex gap-2", children: [1, 2, 3, 4, 5].map(
            (star, __arrIdx__) => /* @__PURE__ */ jsxDEV(
              "button",
              {
                "data-source-location": "components/dashboard/FeedbackSection:96:16",
                "data-dynamic-content": "true",
                type: "button",
                onMouseEnter: () => setHoveredRating(star),
                onMouseLeave: () => setHoveredRating(0),
                onClick: () => setRating(star),
                className: "transition-transform hover:scale-110",
                "data-arr-index": __arrIdx__,
                children: /* @__PURE__ */ jsxDEV(
                  Star,
                  {
                    "data-source-location": "components/dashboard/FeedbackSection:104:18",
                    "data-dynamic-content": "true",
                    className: `w-10 h-10 ${star <= (hoveredRating || rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`,
                    "data-arr-index": __arrIdx__
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/components/dashboard/FeedbackSection.jsx",
                    lineNumber: 123,
                    columnNumber: 19
                  },
                  this
                )
              },
              star,
              false,
              {
                fileName: "/app/src/components/dashboard/FeedbackSection.jsx",
                lineNumber: 115,
                columnNumber: 15
              },
              this
            )
          ) }, void 0, false, {
            fileName: "/app/src/components/dashboard/FeedbackSection.jsx",
            lineNumber: 113,
            columnNumber: 13
          }, this),
          rating > 0 && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/FeedbackSection:115:14", "data-dynamic-content": "true", className: "text-sm text-gray-600 mt-2", children: [
            rating === 5 && "Excellent! 🌟",
            rating === 4 && "Great! 👍",
            rating === 3 && "Good! 😊",
            rating === 2 && "Fair 😐",
            rating === 1 && "Poor 😞"
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/FeedbackSection.jsx",
            lineNumber: 134,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/FeedbackSection.jsx",
          lineNumber: 109,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/FeedbackSection:126:10", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("label", { "data-source-location": "components/dashboard/FeedbackSection:127:12", "data-dynamic-content": "false", className: "block text-sm font-medium text-gray-700 mb-2", children: "Your Review" }, void 0, false, {
            fileName: "/app/src/components/dashboard/FeedbackSection.jsx",
            lineNumber: 146,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(
            Textarea,
            {
              "data-source-location": "components/dashboard/FeedbackSection:130:12",
              "data-dynamic-content": "true",
              value: review,
              onChange: (e) => setReview(e.target.value),
              placeholder: "Share your experience with AxoraDigi. How has it helped your restaurant?",
              rows: 5,
              className: "resize-none"
            },
            void 0,
            false,
            {
              fileName: "/app/src/components/dashboard/FeedbackSection.jsx",
              lineNumber: 149,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/FeedbackSection:137:12", "data-dynamic-content": "false", className: "text-xs text-gray-500 mt-1", children: "Minimum 10 characters" }, void 0, false, {
            fileName: "/app/src/components/dashboard/FeedbackSection.jsx",
            lineNumber: 156,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/FeedbackSection.jsx",
          lineNumber: 145,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(
          Button,
          {
            "data-source-location": "components/dashboard/FeedbackSection:143:10",
            "data-dynamic-content": "true",
            onClick: handleSubmit,
            disabled: isSubmitting || !rating || review.trim().length < 10,
            className: "w-full bg-gradient-to-r from-orange-600 to-orange-500",
            children: [
              /* @__PURE__ */ jsxDEV(Send, { "data-source-location": "components/dashboard/FeedbackSection:148:12", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
                fileName: "/app/src/components/dashboard/FeedbackSection.jsx",
                lineNumber: 167,
                columnNumber: 13
              }, this),
              isSubmitting ? "Submitting..." : "Submit Feedback"
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/src/components/dashboard/FeedbackSection.jsx",
            lineNumber: 162,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/FeedbackSection.jsx",
        lineNumber: 107,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/FeedbackSection.jsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/FeedbackSection:155:6", "data-dynamic-content": "false", className: "mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4", children: /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/FeedbackSection:156:8", "data-dynamic-content": "false", className: "text-sm text-blue-800", children: [
      /* @__PURE__ */ jsxDEV("strong", { "data-source-location": "components/dashboard/FeedbackSection:157:10", "data-dynamic-content": "false", children: "💡 Note:" }, void 0, false, {
        fileName: "/app/src/components/dashboard/FeedbackSection.jsx",
        lineNumber: 176,
        columnNumber: 11
      }, this),
      " Your feedback will be publicly visible on our homepage. It helps other restaurant owners understand the benefits of AxoraDigi."
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/FeedbackSection.jsx",
      lineNumber: 175,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/components/dashboard/FeedbackSection.jsx",
      lineNumber: 174,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/dashboard/FeedbackSection.jsx",
    lineNumber: 89,
    columnNumber: 5
  }, this);
}
_s(FeedbackSection, "/w2K1ZlgUU7s4RYvbhKqWVg3NZU=", false, function() {
  return [useToast];
});
_c = FeedbackSection;
var _c;
$RefreshReg$(_c, "FeedbackSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/dashboard/FeedbackSection.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/dashboard/FeedbackSection.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQU8sd0JBQXFCO0FBQUEsWUFBOEMsd0JBQXFCO0FBQUEsWUFDaEcsU0FBU3pCO0FBQUFBLFlBQ1QsVUFBVUgsZ0JBQWdCLENBQUNOLFVBQVVJLE9BQU9TLEtBQUssRUFBRXNCLFNBQVM7QUFBQSxZQUM1RCxXQUFVO0FBQUEsWUFFUjtBQUFBLHFDQUFDLFFBQUssd0JBQXFCLCtDQUE4Qyx3QkFBcUIsU0FBUSxXQUFVLGtCQUFoSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUE4SDtBQUFBLGNBQzdIN0IsZUFBZSxrQkFBa0I7QUFBQTtBQUFBO0FBQUEsVUFOcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBT0E7QUFBQSxXQTlERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBK0RBO0FBQUEsU0F0RUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQXVFQTtBQUFBLElBR0EsdUJBQUMsU0FBSSx3QkFBcUIsOENBQTZDLHdCQUFxQixTQUFRLFdBQVUseURBQzVHLGlDQUFDLE9BQUUsd0JBQXFCLDhDQUE2Qyx3QkFBcUIsU0FBUSxXQUFVLHlCQUMxRztBQUFBLDZCQUFDLFlBQU8sd0JBQXFCLCtDQUE4Qyx3QkFBcUIsU0FBUSx3QkFBeEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFnSDtBQUFBLE1BQVM7QUFBQSxTQUQzSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBR0EsS0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBS0E7QUFBQSxPQTFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBMkZBO0FBRUo7QUFBQ1AsR0ExSnVCSCxpQkFBZTtBQUFBLFVBS25CRCxRQUFRO0FBQUE7QUFBQXlDLEtBTEp4QztBQUFlLElBQUF3QztBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImJhc2U0NCIsIkJ1dHRvbiIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmREZXNjcmlwdGlvbiIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJUZXh0YXJlYSIsIlN0YXIiLCJNZXNzYWdlU3F1YXJlIiwiU2VuZCIsInVzZVRvYXN0IiwiRmVlZGJhY2tTZWN0aW9uIiwicmVzdGF1cmFudCIsInVzZXIiLCJfcyIsInJhdGluZyIsInNldFJhdGluZyIsImhvdmVyZWRSYXRpbmciLCJzZXRIb3ZlcmVkUmF0aW5nIiwicmV2aWV3Iiwic2V0UmV2aWV3IiwiaXNTdWJtaXR0aW5nIiwic2V0SXNTdWJtaXR0aW5nIiwidG9hc3QiLCJoYW5kbGVTdWJtaXQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidmFyaWFudCIsInRyaW0iLCJlbnRpdGllcyIsIkZlZWRiYWNrIiwiY3JlYXRlIiwicmVzdGF1cmFudF9pZCIsInJlc3RhdXJhbnRfbmFtZSIsIm5hbWUiLCJyZXN0YXVyYW50X2xvZ28iLCJsb2dvX3VybCIsInVzZXJfZW1haWwiLCJlbWFpbCIsImlzX2FwcHJvdmVkIiwidG9hc3REaXNtaXNzIiwic2V0VGltZW91dCIsImRpc21pc3MiLCJlcnJvciIsIm1hcCIsInN0YXIiLCJfX2FycklkeF9fIiwiZSIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiRmVlZGJhY2tTZWN0aW9uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGJhc2U0NCB9IGZyb20gXCJAL2FwaS9iYXNlNDRDbGllbnRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZERlc2NyaXB0aW9uLCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7IFRleHRhcmVhIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90ZXh0YXJlYVwiO1xuaW1wb3J0IHsgU3RhciwgTWVzc2FnZVNxdWFyZSwgU2VuZCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IHVzZVRvYXN0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS91c2UtdG9hc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVlZGJhY2tTZWN0aW9uKHsgcmVzdGF1cmFudCwgdXNlciB9KSB7XG4gIGNvbnN0IFtyYXRpbmcsIHNldFJhdGluZ10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2hvdmVyZWRSYXRpbmcsIHNldEhvdmVyZWRSYXRpbmddID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtyZXZpZXcsIHNldFJldmlld10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzU3VibWl0dGluZywgc2V0SXNTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyB0b2FzdCB9ID0gdXNlVG9hc3QoKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFyYXRpbmcpIHtcbiAgICAgIHRvYXN0KHtcbiAgICAgICAgdGl0bGU6IFwiUmF0aW5nIFJlcXVpcmVkXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlBsZWFzZSBzZWxlY3QgYSByYXRpbmdcIixcbiAgICAgICAgdmFyaWFudDogXCJkZXN0cnVjdGl2ZVwiXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXJldmlldy50cmltKCkpIHtcbiAgICAgIHRvYXN0KHtcbiAgICAgICAgdGl0bGU6IFwiUmV2aWV3IFJlcXVpcmVkXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlBsZWFzZSB3cml0ZSBhIHJldmlld1wiLFxuICAgICAgICB2YXJpYW50OiBcImRlc3RydWN0aXZlXCJcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldElzU3VibWl0dGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYmFzZTQ0LmVudGl0aWVzLkZlZWRiYWNrLmNyZWF0ZSh7XG4gICAgICAgIHJlc3RhdXJhbnRfaWQ6IHJlc3RhdXJhbnQucmVzdGF1cmFudF9pZCxcbiAgICAgICAgcmVzdGF1cmFudF9uYW1lOiByZXN0YXVyYW50Lm5hbWUsXG4gICAgICAgIHJlc3RhdXJhbnRfbG9nbzogcmVzdGF1cmFudC5sb2dvX3VybCB8fCBudWxsLFxuICAgICAgICB1c2VyX2VtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICByYXRpbmc6IHJhdGluZyxcbiAgICAgICAgcmV2aWV3OiByZXZpZXcudHJpbSgpLFxuICAgICAgICBpc19hcHByb3ZlZDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHRvYXN0RGlzbWlzcyA9IHRvYXN0KHtcbiAgICAgICAgdGl0bGU6IFwiVGhhbmsgWW91ISDwn46JXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIllvdXIgZmVlZGJhY2sgaGFzIGJlZW4gc3VibWl0dGVkIHN1Y2Nlc3NmdWxseVwiXG4gICAgICB9KTtcblxuICAgICAgLy8gQXV0by1kaXNtaXNzIGFmdGVyIDIgc2Vjb25kc1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRvYXN0RGlzbWlzcy5kaXNtaXNzKCk7XG4gICAgICB9LCAyMDAwKTtcblxuICAgICAgc2V0UmF0aW5nKDApO1xuICAgICAgc2V0UmV2aWV3KFwiXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0b2FzdCh7XG4gICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkZhaWxlZCB0byBzdWJtaXQgZmVlZGJhY2tcIixcbiAgICAgICAgdmFyaWFudDogXCJkZXN0cnVjdGl2ZVwiXG4gICAgICB9KTtcbiAgICB9XG4gICAgc2V0SXNTdWJtaXR0aW5nKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9GZWVkYmFja1NlY3Rpb246NzA6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtNiBtYXgtdy00eGwgbXgtYXV0b1wiPlxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0ZlZWRiYWNrU2VjdGlvbjo3MTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cIm1iLTZcIj5cbiAgICAgICAgPGgyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRmVlZGJhY2tTZWN0aW9uOjcyOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICA8TWVzc2FnZVNxdWFyZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0ZlZWRiYWNrU2VjdGlvbjo3MzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTYgaC02IHRleHQtb3JhbmdlLTYwMFwiIC8+XG4gICAgICAgICAgU2hhcmUgWW91ciBFeHBlcmllbmNlXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRmVlZGJhY2tTZWN0aW9uOjc2OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBtdC0xXCI+XG4gICAgICAgICAgSGVscCB1cyBpbXByb3ZlIGFuZCBpbnNwaXJlIG90aGVyIHJlc3RhdXJhbnRzIHRvIGpvaW4gQXhvcmFEaWdpXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0ZlZWRiYWNrU2VjdGlvbjo4MTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgIDxDYXJkSGVhZGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRmVlZGJhY2tTZWN0aW9uOjgyOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgPENhcmRUaXRsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0ZlZWRiYWNrU2VjdGlvbjo4MzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5SYXRlIFlvdXIgRXhwZXJpZW5jZTwvQ2FyZFRpdGxlPlxuICAgICAgICAgIDxDYXJkRGVzY3JpcHRpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9GZWVkYmFja1NlY3Rpb246ODQ6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICBZb3VyIGZlZWRiYWNrIHdpbGwgYmUgZGlzcGxheWVkIG9uIG91ciBob21lcGFnZSB0byBoZWxwIG90aGVyIHJlc3RhdXJhbnRzXG4gICAgICAgICAgPC9DYXJkRGVzY3JpcHRpb24+XG4gICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRmVlZGJhY2tTZWN0aW9uOjg4OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgICAgICB7LyogUmF0aW5nIFN0YXJzICovfVxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9GZWVkYmFja1NlY3Rpb246OTA6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgIDxsYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0ZlZWRiYWNrU2VjdGlvbjo5MToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgbWItMlwiPlxuICAgICAgICAgICAgICBSYXRpbmdcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRmVlZGJhY2tTZWN0aW9uOjk0OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICB7WzEsIDIsIDMsIDQsIDVdLm1hcCgoc3RhciwgX19hcnJJZHhfXykgPT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0ZlZWRiYWNrU2VjdGlvbjo5NjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGtleT17c3Rhcn1cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXJlZFJhdGluZyhzdGFyKX1cbiAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcmVkUmF0aW5nKDApfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRSYXRpbmcoc3Rhcil9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYW5zaXRpb24tdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTExMFwiIGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffT5cblxuICAgICAgICAgICAgICAgICAgPFN0YXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9GZWVkYmFja1NlY3Rpb246MTA0OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTEwIGgtMTAgJHtcbiAgICAgICAgICAgICAgICBzdGFyIDw9IChob3ZlcmVkUmF0aW5nIHx8IHJhdGluZykgP1xuICAgICAgICAgICAgICAgIFwiZmlsbC15ZWxsb3ctNDAwIHRleHQteWVsbG93LTQwMFwiIDpcbiAgICAgICAgICAgICAgICBcInRleHQtZ3JheS0zMDBcIn1gXG4gICAgICAgICAgICAgICAgfSBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30gLz5cblxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7cmF0aW5nID4gMCAmJlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9GZWVkYmFja1NlY3Rpb246MTE1OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwIG10LTJcIj5cbiAgICAgICAgICAgICAgICB7cmF0aW5nID09PSA1ICYmIFwiRXhjZWxsZW50ISDwn4yfXCJ9XG4gICAgICAgICAgICAgICAge3JhdGluZyA9PT0gNCAmJiBcIkdyZWF0ISDwn5GNXCJ9XG4gICAgICAgICAgICAgICAge3JhdGluZyA9PT0gMyAmJiBcIkdvb2QhIPCfmIpcIn1cbiAgICAgICAgICAgICAgICB7cmF0aW5nID09PSAyICYmIFwiRmFpciDwn5iQXCJ9XG4gICAgICAgICAgICAgICAge3JhdGluZyA9PT0gMSAmJiBcIlBvb3Ig8J+YnlwifVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogUmV2aWV3IFRleHQgKi99XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0ZlZWRiYWNrU2VjdGlvbjoxMjY6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgIDxsYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0ZlZWRiYWNrU2VjdGlvbjoxMjc6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIG1iLTJcIj5cbiAgICAgICAgICAgICAgWW91ciBSZXZpZXdcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8VGV4dGFyZWEgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9GZWVkYmFja1NlY3Rpb246MTMwOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgIHZhbHVlPXtyZXZpZXd9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJldmlldyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNoYXJlIHlvdXIgZXhwZXJpZW5jZSB3aXRoIEF4b3JhRGlnaS4gSG93IGhhcyBpdCBoZWxwZWQgeW91ciByZXN0YXVyYW50P1wiXG4gICAgICAgICAgICByb3dzPXs1fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmVcIiAvPlxuXG4gICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0ZlZWRiYWNrU2VjdGlvbjoxMzc6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwIG10LTFcIj5cbiAgICAgICAgICAgICAgTWluaW11bSAxMCBjaGFyYWN0ZXJzXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogU3VibWl0IEJ1dHRvbiAqL31cbiAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRmVlZGJhY2tTZWN0aW9uOjE0MzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmcgfHwgIXJhdGluZyB8fCByZXZpZXcudHJpbSgpLmxlbmd0aCA8IDEwfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmFkaWVudC10by1yIGZyb20tb3JhbmdlLTYwMCB0by1vcmFuZ2UtNTAwXCI+XG5cbiAgICAgICAgICAgIDxTZW5kIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRmVlZGJhY2tTZWN0aW9uOjE0ODoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IG1yLTJcIiAvPlxuICAgICAgICAgICAge2lzU3VibWl0dGluZyA/IFwiU3VibWl0dGluZy4uLlwiIDogXCJTdWJtaXQgRmVlZGJhY2tcIn1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDwvQ2FyZD5cblxuICAgICAgey8qIEluZm8gQm94ICovfVxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0ZlZWRiYWNrU2VjdGlvbjoxNTU6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJtdC02IGJnLWJsdWUtNTAgYm9yZGVyIGJvcmRlci1ibHVlLTIwMCByb3VuZGVkLWxnIHAtNFwiPlxuICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0ZlZWRiYWNrU2VjdGlvbjoxNTY6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtYmx1ZS04MDBcIj5cbiAgICAgICAgICA8c3Ryb25nIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvRmVlZGJhY2tTZWN0aW9uOjE1NzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj7wn5KhIE5vdGU6PC9zdHJvbmc+IFlvdXIgZmVlZGJhY2sgd2lsbCBiZSBwdWJsaWNseSB2aXNpYmxlIG9uIG91ciBob21lcGFnZS5cbiAgICAgICAgICBJdCBoZWxwcyBvdGhlciByZXN0YXVyYW50IG93bmVycyB1bmRlcnN0YW5kIHRoZSBiZW5lZml0cyBvZiBBeG9yYURpZ2kuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2Pik7XG5cbn0iXSwiZmlsZSI6Ii9hcHAvc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL0ZlZWRiYWNrU2VjdGlvbi5qc3gifQ==