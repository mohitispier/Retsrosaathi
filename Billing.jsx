import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Billing.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/Billing.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import DashboardLayout from "/src/components/dashboard/DashboardLayout.jsx";
import BillingSection from "/src/components/dashboard/BillingSection.jsx";
import { base44 } from "/src/api/base44Client.js";
import { Loader2 } from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
export default function Billing() {
  _s();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const loadRestaurant = async () => {
    try {
      const user = await base44.auth.me();
      if (user?.restaurant_id) {
        const restaurants = await base44.entities.Restaurant.filter({
          restaurant_id: user.restaurant_id
        });
        if (restaurants.length > 0) setRestaurant(restaurants[0]);
      }
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };
  useEffect(() => {
    loadRestaurant();
  }, []);
  if (loading) {
    return /* @__PURE__ */ jsxDEV(DashboardLayout, { "data-source-location": "pages/Billing:30:6", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Billing:31:8", "data-dynamic-content": "false", className: "flex items-center justify-center h-64", children: /* @__PURE__ */ jsxDEV(Loader2, { "data-source-location": "pages/Billing:32:10", "data-dynamic-content": "false", className: "w-8 h-8 animate-spin text-orange-500" }, void 0, false, {
      fileName: "/app/src/pages/Billing.jsx",
      lineNumber: 51,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/Billing.jsx",
      lineNumber: 50,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/Billing.jsx",
      lineNumber: 49,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV(DashboardLayout, { "data-source-location": "pages/Billing:39:4", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(BillingSection, { "data-source-location": "pages/Billing:40:6", "data-dynamic-content": "true", restaurant, onPlanUpgraded: loadRestaurant }, void 0, false, {
    fileName: "/app/src/pages/Billing.jsx",
    lineNumber: 59,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/src/pages/Billing.jsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}
_s(Billing, "f/OEzMGT6njGZKwZ1cEkZPAOp0k=");
_c = Billing;
var _c;
$RefreshReg$(_c, "Billing");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/Billing.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/Billing.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBK0JVOzs7Ozs7Ozs7Ozs7Ozs7OztBQS9CVixPQUFPQSxTQUFTQyxVQUFVQyxpQkFBaUI7QUFDM0MsT0FBT0MscUJBQXFCO0FBQzVCLE9BQU9DLG9CQUFvQjtBQUMzQixTQUFTQyxjQUFjO0FBQ3ZCLFNBQVNDLGVBQWU7QUFFeEIsd0JBQXdCQyxVQUFVO0FBQUFDLEtBQUE7QUFDaEMsUUFBTSxDQUFDQyxZQUFZQyxhQUFhLElBQUlULFNBQVMsSUFBSTtBQUNqRCxRQUFNLENBQUNVLFNBQVNDLFVBQVUsSUFBSVgsU0FBUyxJQUFJO0FBRTNDLFFBQU1ZLGlCQUFpQixZQUFZO0FBQ2pDLFFBQUk7QUFDRixZQUFNQyxPQUFPLE1BQU1ULE9BQU9VLEtBQUtDLEdBQUc7QUFDbEMsVUFBSUYsTUFBTUcsZUFBZTtBQUN2QixjQUFNQyxjQUFjLE1BQU1iLE9BQU9jLFNBQVNDLFdBQVdDLE9BQU87QUFBQSxVQUMxREosZUFBZUgsS0FBS0c7QUFBQUEsUUFDdEIsQ0FBQztBQUNELFlBQUlDLFlBQVlJLFNBQVMsRUFBR1osZUFBY1EsWUFBWSxDQUFDLENBQUM7QUFBQSxNQUMxRDtBQUFBLElBQ0YsU0FBU0ssR0FBRztBQUNWQyxjQUFRQyxNQUFNRixDQUFDO0FBQUEsSUFDakI7QUFDQVgsZUFBVyxLQUFLO0FBQUEsRUFDbEI7QUFFQVYsWUFBVSxNQUFNO0FBQUNXLG1CQUFlO0FBQUEsRUFBRSxHQUFHLEVBQUU7QUFFdkMsTUFBSUYsU0FBUztBQUNYLFdBQ0UsdUJBQUMsbUJBQWdCLHdCQUFxQixzQkFBcUIsd0JBQXFCLFNBQzlFLGlDQUFDLFNBQUksd0JBQXFCLHNCQUFxQix3QkFBcUIsU0FBUSxXQUFVLHlDQUNwRixpQ0FBQyxXQUFRLHdCQUFxQix1QkFBc0Isd0JBQXFCLFNBQVEsV0FBVSwwQ0FBM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFpSSxLQURuSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRUEsS0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSUE7QUFBQSxFQUVKO0FBRUEsU0FDRSx1QkFBQyxtQkFBZ0Isd0JBQXFCLHNCQUFxQix3QkFBcUIsUUFDOUUsaUNBQUMsa0JBQWUsd0JBQXFCLHNCQUFxQix3QkFBcUIsUUFBTyxZQUF3QixnQkFBZ0JFLGtCQUE5SDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQTZJLEtBRC9JO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFQTtBQUVKO0FBQUNMLEdBcEN1QkQsU0FBTztBQUFBbUIsS0FBUG5CO0FBQU8sSUFBQW1CO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRGFzaGJvYXJkTGF5b3V0IiwiQmlsbGluZ1NlY3Rpb24iLCJiYXNlNDQiLCJMb2FkZXIyIiwiQmlsbGluZyIsIl9zIiwicmVzdGF1cmFudCIsInNldFJlc3RhdXJhbnQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImxvYWRSZXN0YXVyYW50IiwidXNlciIsImF1dGgiLCJtZSIsInJlc3RhdXJhbnRfaWQiLCJyZXN0YXVyYW50cyIsImVudGl0aWVzIiwiUmVzdGF1cmFudCIsImZpbHRlciIsImxlbmd0aCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJCaWxsaW5nLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERhc2hib2FyZExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkTGF5b3V0XCI7XG5pbXBvcnQgQmlsbGluZ1NlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL0JpbGxpbmdTZWN0aW9uXCI7XG5pbXBvcnQgeyBiYXNlNDQgfSBmcm9tIFwiQC9hcGkvYmFzZTQ0Q2xpZW50XCI7XG5pbXBvcnQgeyBMb2FkZXIyIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCaWxsaW5nKCkge1xuICBjb25zdCBbcmVzdGF1cmFudCwgc2V0UmVzdGF1cmFudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgbG9hZFJlc3RhdXJhbnQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBiYXNlNDQuYXV0aC5tZSgpO1xuICAgICAgaWYgKHVzZXI/LnJlc3RhdXJhbnRfaWQpIHtcbiAgICAgICAgY29uc3QgcmVzdGF1cmFudHMgPSBhd2FpdCBiYXNlNDQuZW50aXRpZXMuUmVzdGF1cmFudC5maWx0ZXIoe1xuICAgICAgICAgIHJlc3RhdXJhbnRfaWQ6IHVzZXIucmVzdGF1cmFudF9pZFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3RhdXJhbnRzLmxlbmd0aCA+IDApIHNldFJlc3RhdXJhbnQocmVzdGF1cmFudHNbMF0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7bG9hZFJlc3RhdXJhbnQoKTt9LCBbXSk7XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPERhc2hib2FyZExheW91dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JpbGxpbmc6MzA6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0JpbGxpbmc6MzE6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTY0XCI+XG4gICAgICAgICAgPExvYWRlcjIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CaWxsaW5nOjMyOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctOCBoLTggYW5pbWF0ZS1zcGluIHRleHQtb3JhbmdlLTUwMFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9EYXNoYm9hcmRMYXlvdXQ+KTtcblxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RGFzaGJvYXJkTGF5b3V0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQmlsbGluZzozOTo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICA8QmlsbGluZ1NlY3Rpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9CaWxsaW5nOjQwOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiByZXN0YXVyYW50PXtyZXN0YXVyYW50fSBvblBsYW5VcGdyYWRlZD17bG9hZFJlc3RhdXJhbnR9IC8+XG4gICAgPC9EYXNoYm9hcmRMYXlvdXQ+KTtcblxufSJdLCJmaWxlIjoiL2FwcC9zcmMvcGFnZXMvQmlsbGluZy5qc3gifQ==