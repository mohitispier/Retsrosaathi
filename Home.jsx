import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Home.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/Home.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useEffect = __vite__cjsImport3_react["useEffect"];
import HeroSection from "/src/components/landing/HeroSection.jsx";
import FeaturesSection from "/src/components/landing/FeaturesSection.jsx";
import HowItWorksSection from "/src/components/landing/HowItWorksSection.jsx";
import AnimatedStatsSection from "/src/components/landing/AnimatedStatsSection.jsx";
import TestimonialsSection from "/src/components/landing/TestimonialsSection.jsx";
import CTASection from "/src/components/landing/CTASection.jsx";
export default function Home() {
  _s();
  React.useEffect(() => {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
    } else {
      const meta = document.createElement("meta");
      meta.name = "viewport";
      meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
      document.head.appendChild(meta);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Home:26:4", "data-dynamic-content": "false", children: [
    /* @__PURE__ */ jsxDEV(HeroSection, { "data-source-location": "pages/Home:27:6", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/pages/Home.jsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(AnimatedStatsSection, { "data-source-location": "pages/Home:28:6", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/pages/Home.jsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(FeaturesSection, { "data-source-location": "pages/Home:29:6", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/pages/Home.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(HowItWorksSection, { "data-source-location": "pages/Home:30:6", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/pages/Home.jsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(TestimonialsSection, { "data-source-location": "pages/Home:31:6", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/pages/Home.jsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(CTASection, { "data-source-location": "pages/Home:32:6", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/pages/Home.jsx",
      lineNumber: 51,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/Home.jsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}
_s(Home, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Home;
var _c;
$RefreshReg$(_c, "Home");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/Home.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/Home.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBMEJNOzs7Ozs7Ozs7Ozs7Ozs7OztBQTFCTixPQUFPQSxTQUFTQyxpQkFBaUI7QUFDakMsT0FBT0MsaUJBQWlCO0FBQ3hCLE9BQU9DLHFCQUFxQjtBQUM1QixPQUFPQyx1QkFBdUI7QUFDOUIsT0FBT0MsMEJBQTBCO0FBQ2pDLE9BQU9DLHlCQUF5QjtBQUNoQyxPQUFPQyxnQkFBZ0I7QUFFdkIsd0JBQXdCQyxPQUFPO0FBQUFDLEtBQUE7QUFDN0JULFFBQU1DLFVBQVUsTUFBTTtBQUVwQixVQUFNUyxXQUFXQyxTQUFTQyxjQUFjLHVCQUF1QjtBQUMvRCxRQUFJRixVQUFVO0FBQ1pBLGVBQVNHLGFBQWEsV0FBVyw0RUFBNEU7QUFBQSxJQUMvRyxPQUFPO0FBQ0wsWUFBTUMsT0FBT0gsU0FBU0ksY0FBYyxNQUFNO0FBQzFDRCxXQUFLRSxPQUFPO0FBQ1pGLFdBQUtHLFVBQVU7QUFDZk4sZUFBU08sS0FBS0MsWUFBWUwsSUFBSTtBQUFBLElBQ2hDO0FBRUFNLFdBQU9DLFNBQVMsRUFBRUMsS0FBSyxHQUFHQyxVQUFVLFVBQVUsQ0FBQztBQUFBLEVBQ2pELEdBQUcsRUFBRTtBQUVMLFNBQ0UsdUJBQUMsU0FBSSx3QkFBcUIsbUJBQWtCLHdCQUFxQixTQUMvRDtBQUFBLDJCQUFDLGVBQVksd0JBQXFCLG1CQUFrQix3QkFBcUIsV0FBekU7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFnRjtBQUFBLElBQ2hGLHVCQUFDLHdCQUFxQix3QkFBcUIsbUJBQWtCLHdCQUFxQixXQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXlGO0FBQUEsSUFDekYsdUJBQUMsbUJBQWdCLHdCQUFxQixtQkFBa0Isd0JBQXFCLFdBQTdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBb0Y7QUFBQSxJQUNwRix1QkFBQyxxQkFBa0Isd0JBQXFCLG1CQUFrQix3QkFBcUIsV0FBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFzRjtBQUFBLElBQ3RGLHVCQUFDLHVCQUFvQix3QkFBcUIsbUJBQWtCLHdCQUFxQixXQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXdGO0FBQUEsSUFDeEYsdUJBQUMsY0FBVyx3QkFBcUIsbUJBQWtCLHdCQUFxQixXQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQStFO0FBQUEsT0FOakY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU9BO0FBRUo7QUFBQ2QsR0ExQnVCRCxNQUFJO0FBQUFnQixLQUFKaEI7QUFBSSxJQUFBZ0I7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiSGVyb1NlY3Rpb24iLCJGZWF0dXJlc1NlY3Rpb24iLCJIb3dJdFdvcmtzU2VjdGlvbiIsIkFuaW1hdGVkU3RhdHNTZWN0aW9uIiwiVGVzdGltb25pYWxzU2VjdGlvbiIsIkNUQVNlY3Rpb24iLCJIb21lIiwiX3MiLCJ2aWV3cG9ydCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsIm1ldGEiLCJjcmVhdGVFbGVtZW50IiwibmFtZSIsImNvbnRlbnQiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiSG9tZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlcm9TZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL2xhbmRpbmcvSGVyb1NlY3Rpb25cIjtcbmltcG9ydCBGZWF0dXJlc1NlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvbGFuZGluZy9GZWF0dXJlc1NlY3Rpb25cIjtcbmltcG9ydCBIb3dJdFdvcmtzU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9sYW5kaW5nL0hvd0l0V29ya3NTZWN0aW9uXCI7XG5pbXBvcnQgQW5pbWF0ZWRTdGF0c1NlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvbGFuZGluZy9BbmltYXRlZFN0YXRzU2VjdGlvblwiO1xuaW1wb3J0IFRlc3RpbW9uaWFsc1NlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvbGFuZGluZy9UZXN0aW1vbmlhbHNTZWN0aW9uXCI7XG5pbXBvcnQgQ1RBU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9sYW5kaW5nL0NUQVNlY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBTZXQgdmlld3BvcnQgbWV0YSBmb3IgcHJvcGVyIG1vYmlsZSBzY2FsaW5nXG4gICAgY29uc3Qgdmlld3BvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ2aWV3cG9ydFwiXScpO1xuICAgIGlmICh2aWV3cG9ydCkge1xuICAgICAgdmlld3BvcnQuc2V0QXR0cmlidXRlKCdjb250ZW50JywgJ3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPW5vJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJyk7XG4gICAgICBtZXRhLm5hbWUgPSAndmlld3BvcnQnO1xuICAgICAgbWV0YS5jb250ZW50ID0gJ3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPW5vJztcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YSk7XG4gICAgfVxuXG4gICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBiZWhhdmlvcjogJ2luc3RhbnQnIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG9tZToyNjo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgPEhlcm9TZWN0aW9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG9tZToyNzo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+XG4gICAgICA8QW5pbWF0ZWRTdGF0c1NlY3Rpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib21lOjI4OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz5cbiAgICAgIDxGZWF0dXJlc1NlY3Rpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib21lOjI5OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz5cbiAgICAgIDxIb3dJdFdvcmtzU2VjdGlvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvbWU6MzA6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPlxuICAgICAgPFRlc3RpbW9uaWFsc1NlY3Rpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib21lOjMxOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz5cbiAgICAgIDxDVEFTZWN0aW9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvSG9tZTozMjo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+XG4gICAgPC9kaXY+KTtcblxufSJdLCJmaWxlIjoiL2FwcC9zcmMvcGFnZXMvSG9tZS5qc3gifQ==