import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/App.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import { Toaster } from "/src/components/ui/toaster.jsx";
import { QueryClientProvider } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=79425e35";
import { queryClientInstance } from "/src/lib/query-client.js";
import NavigationTracker from "/src/lib/NavigationTracker.jsx";
import { pagesConfig } from "/src/pages.config.js";
import { BrowserRouter as Router, Route, Routes } from "/node_modules/.vite/deps/react-router-dom.js?v=79425e35";
import PageNotFound from "/src/lib/PageNotFound.jsx";
import { AuthProvider, useAuth } from "/src/lib/AuthContext.jsx";
import UserNotRegisteredError from "/src/components/UserNotRegisteredError.jsx";
import PrivacyPolicy from "/src/pages/PrivacyPolicy.jsx";
import TermsConditions from "/src/pages/TermsConditions.jsx";
import ExportPages from "/src/pages/ExportPages.jsx";
const { Pages, Layout, mainPage } = pagesConfig;
const mainPageKey = mainPage ?? Object.keys(Pages)[0];
const MainPage = mainPageKey ? Pages[mainPageKey] : /* @__PURE__ */ jsxDEV(Fragment, {}, void 0, false, {
  fileName: "/app/src/App.jsx",
  lineNumber: 35,
  columnNumber: 53
}, this);
const LayoutWrapper = ({ children, currentPageName }) => Layout ? /* @__PURE__ */ jsxDEV(Layout, { "data-source-location": "App:19:2", "data-dynamic-content": "true", currentPageName, children }, void 0, false, {
  fileName: "/app/src/App.jsx",
  lineNumber: 38,
  columnNumber: 1
}, this) : /* @__PURE__ */ jsxDEV(Fragment, { children }, void 0, false, {
  fileName: "/app/src/App.jsx",
  lineNumber: 39,
  columnNumber: 1
}, this);
_c = LayoutWrapper;
const AuthenticatedApp = () => {
  _s();
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();
  if (isLoadingPublicSettings || isLoadingAuth) {
    return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "App:28:6", "data-dynamic-content": "false", className: "fixed inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "App:29:8", "data-dynamic-content": "false", className: "w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin" }, void 0, false, {
      fileName: "/app/src/App.jsx",
      lineNumber: 48,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/App.jsx",
      lineNumber: 47,
      columnNumber: 7
    }, this);
  }
  if (authError) {
    if (authError.type === "user_not_registered") {
      return /* @__PURE__ */ jsxDEV(UserNotRegisteredError, { "data-source-location": "App:37:13", "data-dynamic-content": "false" }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 56,
        columnNumber: 14
      }, this);
    } else if (authError.type === "auth_required") {
      navigateToLogin();
      return null;
    }
  }
  return /* @__PURE__ */ jsxDEV(Routes, { "data-source-location": "App:47:4", "data-dynamic-content": "true", children: [
    /* @__PURE__ */ jsxDEV(Route, { "data-source-location": "App:48:6", "data-dynamic-content": "true", path: "/", element: /* @__PURE__ */ jsxDEV(LayoutWrapper, { "data-source-location": "App:49:8", "data-dynamic-content": "true", currentPageName: mainPageKey, children: /* @__PURE__ */ jsxDEV(MainPage, { "data-source-location": "App:50:10", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/App.jsx",
      lineNumber: 69,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/src/App.jsx",
      lineNumber: 68,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "/app/src/App.jsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    Object.entries(Pages).map(
      ([path, Page]) => /* @__PURE__ */ jsxDEV(
        Route,
        {
          "data-source-location": "App:54:8",
          "data-dynamic-content": "true",
          path: `/${path}`,
          element: /* @__PURE__ */ jsxDEV(LayoutWrapper, { "data-source-location": "App:58:12", "data-dynamic-content": "true", currentPageName: path, children: /* @__PURE__ */ jsxDEV(Page, { "data-source-location": "App:59:14", "data-dynamic-content": "false" }, void 0, false, {
            fileName: "/app/src/App.jsx",
            lineNumber: 78,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/app/src/App.jsx",
            lineNumber: 77,
            columnNumber: 7
          }, this)
        },
        path,
        false,
        {
          fileName: "/app/src/App.jsx",
          lineNumber: 73,
          columnNumber: 7
        },
        this
      )
    ),
    /* @__PURE__ */ jsxDEV(Route, { "data-source-location": "App:64:6", "data-dynamic-content": "true", path: "/PrivacyPolicy", element: /* @__PURE__ */ jsxDEV(PrivacyPolicy, { "data-source-location": "App:64:44", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/App.jsx",
      lineNumber: 83,
      columnNumber: 105
    }, this) }, void 0, false, {
      fileName: "/app/src/App.jsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { "data-source-location": "App:65:6", "data-dynamic-content": "true", path: "/TermsConditions", element: /* @__PURE__ */ jsxDEV(TermsConditions, { "data-source-location": "App:65:46", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/App.jsx",
      lineNumber: 84,
      columnNumber: 107
    }, this) }, void 0, false, {
      fileName: "/app/src/App.jsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { "data-source-location": "App:66:6", "data-dynamic-content": "true", path: "/ExportPages", element: /* @__PURE__ */ jsxDEV(ExportPages, { "data-source-location": "App:66:42", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/App.jsx",
      lineNumber: 85,
      columnNumber: 103
    }, this) }, void 0, false, {
      fileName: "/app/src/App.jsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { "data-source-location": "App:67:6", "data-dynamic-content": "true", path: "*", element: /* @__PURE__ */ jsxDEV(PageNotFound, { "data-source-location": "App:67:31", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/App.jsx",
      lineNumber: 86,
      columnNumber: 92
    }, this) }, void 0, false, {
      fileName: "/app/src/App.jsx",
      lineNumber: 86,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/App.jsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
};
_s(AuthenticatedApp, "hc27/Ofx9hlCa4t19zXbf5czR38=", false, function() {
  return [useAuth];
});
_c2 = AuthenticatedApp;
function App() {
  return /* @__PURE__ */ jsxDEV(AuthProvider, { "data-source-location": "App:76:4", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(QueryClientProvider, { "data-source-location": "App:77:6", "data-dynamic-content": "true", client: queryClientInstance, children: [
    /* @__PURE__ */ jsxDEV(Router, { "data-source-location": "App:78:8", "data-dynamic-content": "false", children: [
      /* @__PURE__ */ jsxDEV(NavigationTracker, { "data-source-location": "App:79:10", "data-dynamic-content": "false" }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 98,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(AuthenticatedApp, { "data-source-location": "App:80:10", "data-dynamic-content": "false" }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 99,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/App.jsx",
      lineNumber: 97,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Toaster, { "data-source-location": "App:82:8", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/App.jsx",
      lineNumber: 101,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/App.jsx",
    lineNumber: 96,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/src/App.jsx",
    lineNumber: 95,
    columnNumber: 5
  }, this);
}
_c3 = App;
export default App;
var _c, _c2, _c3;
$RefreshReg$(_c, "LayoutWrapper");
$RefreshReg$(_c2, "AuthenticatedApp");
$RefreshReg$(_c3, "App");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/App.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/App.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QVksd0JBQXFCLFdBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBZ0Y7QUFBQSxNQUNoRix1QkFBQyxvQkFBaUIsd0JBQXFCLGFBQVksd0JBQXFCLFdBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBK0U7QUFBQSxTQUZqRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBR0E7QUFBQSxJQUNBLHVCQUFDLFdBQVEsd0JBQXFCLFlBQVcsd0JBQXFCLFdBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBcUU7QUFBQSxPQUx2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTUEsS0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBUUE7QUFFSjtBQUFDc0MsTUFiUUQ7QUFlVCxlQUFlQTtBQUFJLElBQUFiLElBQUFZLEtBQUFFO0FBQUFDLGFBQUFmLElBQUE7QUFBQWUsYUFBQUgsS0FBQTtBQUFBRyxhQUFBRCxLQUFBIiwibmFtZXMiOlsiVG9hc3RlciIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJxdWVyeUNsaWVudEluc3RhbmNlIiwiTmF2aWdhdGlvblRyYWNrZXIiLCJwYWdlc0NvbmZpZyIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXIiLCJSb3V0ZSIsIlJvdXRlcyIsIlBhZ2VOb3RGb3VuZCIsIkF1dGhQcm92aWRlciIsInVzZUF1dGgiLCJVc2VyTm90UmVnaXN0ZXJlZEVycm9yIiwiUHJpdmFjeVBvbGljeSIsIlRlcm1zQ29uZGl0aW9ucyIsIkV4cG9ydFBhZ2VzIiwiUGFnZXMiLCJMYXlvdXQiLCJtYWluUGFnZSIsIm1haW5QYWdlS2V5IiwiT2JqZWN0Iiwia2V5cyIsIk1haW5QYWdlIiwiTGF5b3V0V3JhcHBlciIsImNoaWxkcmVuIiwiY3VycmVudFBhZ2VOYW1lIiwiX2MiLCJBdXRoZW50aWNhdGVkQXBwIiwiX3MiLCJpc0xvYWRpbmdBdXRoIiwiaXNMb2FkaW5nUHVibGljU2V0dGluZ3MiLCJhdXRoRXJyb3IiLCJuYXZpZ2F0ZVRvTG9naW4iLCJ0eXBlIiwiZW50cmllcyIsIm1hcCIsInBhdGgiLCJQYWdlIiwiX2MyIiwiQXBwIiwiX2MzIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkFwcC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG9hc3RlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdG9hc3RlclwiO1xuaW1wb3J0IHsgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyBxdWVyeUNsaWVudEluc3RhbmNlIH0gZnJvbSAnQC9saWIvcXVlcnktY2xpZW50JztcbmltcG9ydCBOYXZpZ2F0aW9uVHJhY2tlciBmcm9tICdAL2xpYi9OYXZpZ2F0aW9uVHJhY2tlcic7XG5pbXBvcnQgeyBwYWdlc0NvbmZpZyB9IGZyb20gJy4vcGFnZXMuY29uZmlnJztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUGFnZU5vdEZvdW5kIGZyb20gJy4vbGliL1BhZ2VOb3RGb3VuZCc7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIsIHVzZUF1dGggfSBmcm9tICdAL2xpYi9BdXRoQ29udGV4dCc7XG5pbXBvcnQgVXNlck5vdFJlZ2lzdGVyZWRFcnJvciBmcm9tICdAL2NvbXBvbmVudHMvVXNlck5vdFJlZ2lzdGVyZWRFcnJvcic7XG5pbXBvcnQgUHJpdmFjeVBvbGljeSBmcm9tICcuL3BhZ2VzL1ByaXZhY3lQb2xpY3knO1xuaW1wb3J0IFRlcm1zQ29uZGl0aW9ucyBmcm9tICcuL3BhZ2VzL1Rlcm1zQ29uZGl0aW9ucyc7XG5pbXBvcnQgRXhwb3J0UGFnZXMgZnJvbSAnLi9wYWdlcy9FeHBvcnRQYWdlcyc7XG5cbmNvbnN0IHsgUGFnZXMsIExheW91dCwgbWFpblBhZ2UgfSA9IHBhZ2VzQ29uZmlnO1xuY29uc3QgbWFpblBhZ2VLZXkgPSBtYWluUGFnZSA/PyBPYmplY3Qua2V5cyhQYWdlcylbMF07XG5jb25zdCBNYWluUGFnZSA9IG1haW5QYWdlS2V5ID8gUGFnZXNbbWFpblBhZ2VLZXldIDogPD48Lz47XG5cbmNvbnN0IExheW91dFdyYXBwZXIgPSAoeyBjaGlsZHJlbiwgY3VycmVudFBhZ2VOYW1lIH0pID0+IExheW91dCA/XG48TGF5b3V0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjE5OjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjdXJyZW50UGFnZU5hbWU9e2N1cnJlbnRQYWdlTmFtZX0+e2NoaWxkcmVufTwvTGF5b3V0PiA6XG48PntjaGlsZHJlbn08Lz47XG5cbmNvbnN0IEF1dGhlbnRpY2F0ZWRBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaXNMb2FkaW5nQXV0aCwgaXNMb2FkaW5nUHVibGljU2V0dGluZ3MsIGF1dGhFcnJvciwgbmF2aWdhdGVUb0xvZ2luIH0gPSB1c2VBdXRoKCk7XG5cbiAgLy8gU2hvdyBsb2FkaW5nIHNwaW5uZXIgd2hpbGUgY2hlY2tpbmcgYXBwIHB1YmxpYyBzZXR0aW5ncyBvciBhdXRoXG4gIGlmIChpc0xvYWRpbmdQdWJsaWNTZXR0aW5ncyB8fCBpc0xvYWRpbmdBdXRoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJBcHA6Mjg6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJBcHA6Mjk6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTggaC04IGJvcmRlci00IGJvcmRlci1zbGF0ZS0yMDAgYm9yZGVyLXQtc2xhdGUtODAwIHJvdW5kZWQtZnVsbCBhbmltYXRlLXNwaW5cIj48L2Rpdj5cbiAgICAgIDwvZGl2Pik7XG5cbiAgfVxuXG4gIC8vIEhhbmRsZSBhdXRoZW50aWNhdGlvbiBlcnJvcnNcbiAgaWYgKGF1dGhFcnJvcikge1xuICAgIGlmIChhdXRoRXJyb3IudHlwZSA9PT0gJ3VzZXJfbm90X3JlZ2lzdGVyZWQnKSB7XG4gICAgICByZXR1cm4gPFVzZXJOb3RSZWdpc3RlcmVkRXJyb3IgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJBcHA6Mzc6MTNcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz47XG4gICAgfSBlbHNlIGlmIChhdXRoRXJyb3IudHlwZSA9PT0gJ2F1dGhfcmVxdWlyZWQnKSB7XG4gICAgICAvLyBSZWRpcmVjdCB0byBsb2dpbiBhdXRvbWF0aWNhbGx5XG4gICAgICBuYXZpZ2F0ZVRvTG9naW4oKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJlbmRlciB0aGUgbWFpbiBhcHBcbiAgcmV0dXJuIChcbiAgICA8Um91dGVzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjQ3OjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgIDxSb3V0ZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkFwcDo0ODo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgcGF0aD1cIi9cIiBlbGVtZW50PXtcbiAgICAgIDxMYXlvdXRXcmFwcGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjQ5OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjdXJyZW50UGFnZU5hbWU9e21haW5QYWdlS2V5fT5cbiAgICAgICAgICA8TWFpblBhZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJBcHA6NTA6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz5cbiAgICAgICAgPC9MYXlvdXRXcmFwcGVyPlxuICAgICAgfSAvPlxuICAgICAge09iamVjdC5lbnRyaWVzKFBhZ2VzKS5tYXAoKFtwYXRoLCBQYWdlXSkgPT5cbiAgICAgIDxSb3V0ZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkFwcDo1NDo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgIGtleT17cGF0aH1cbiAgICAgIHBhdGg9e2AvJHtwYXRofWB9XG4gICAgICBlbGVtZW50PXtcbiAgICAgIDxMYXlvdXRXcmFwcGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjU4OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY3VycmVudFBhZ2VOYW1lPXtwYXRofT5cbiAgICAgICAgICAgICAgPFBhZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJBcHA6NTk6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz5cbiAgICAgICAgICAgIDwvTGF5b3V0V3JhcHBlcj5cbiAgICAgIH0gLz5cblxuICAgICAgKX1cbiAgICAgIDxSb3V0ZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkFwcDo2NDo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgcGF0aD1cIi9Qcml2YWN5UG9saWN5XCIgZWxlbWVudD17PFByaXZhY3lQb2xpY3kgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJBcHA6NjQ6NDRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz59IC8+XG4gICAgICA8Um91dGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJBcHA6NjU6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHBhdGg9XCIvVGVybXNDb25kaXRpb25zXCIgZWxlbWVudD17PFRlcm1zQ29uZGl0aW9ucyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkFwcDo2NTo0NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPn0gLz5cbiAgICAgIDxSb3V0ZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkFwcDo2Njo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgcGF0aD1cIi9FeHBvcnRQYWdlc1wiIGVsZW1lbnQ9ezxFeHBvcnRQYWdlcyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkFwcDo2Njo0MlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPn0gLz5cbiAgICAgIDxSb3V0ZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkFwcDo2Nzo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgcGF0aD1cIipcIiBlbGVtZW50PXs8UGFnZU5vdEZvdW5kIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjY3OjMxXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+fSAvPlxuICAgIDwvUm91dGVzPik7XG5cbn07XG5cblxuZnVuY3Rpb24gQXBwKCkge1xuXG4gIHJldHVybiAoXG4gICAgPEF1dGhQcm92aWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkFwcDo3Njo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkFwcDo3Nzo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xpZW50PXtxdWVyeUNsaWVudEluc3RhbmNlfT5cbiAgICAgICAgPFJvdXRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkFwcDo3ODo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgIDxOYXZpZ2F0aW9uVHJhY2tlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkFwcDo3OToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPlxuICAgICAgICAgIDxBdXRoZW50aWNhdGVkQXBwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjgwOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+XG4gICAgICAgIDwvUm91dGVyPlxuICAgICAgICA8VG9hc3RlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkFwcDo4Mjo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+XG4gICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICAgPC9BdXRoUHJvdmlkZXI+KTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sImZpbGUiOiIvYXBwL3NyYy9BcHAuanN4In0=