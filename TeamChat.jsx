import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/TeamChat.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/TeamChat.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"]; const useRef = __vite__cjsImport3_react["useRef"];
import { base44 } from "/src/api/base44Client.js";
import { Button } from "/src/components/ui/button.jsx";
import { Input } from "/src/components/ui/input.jsx";
import { Badge } from "/src/components/ui/badge.jsx";
import { MessageCircle, Send, Bot, HeadphonesIcon, ArrowLeft } from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
export default function TeamChat() {
  _s();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [sessionInfo, setSessionInfo] = useState(null);
  const [user, setUser] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef(null);
  const urlParams = new URLSearchParams(window.location.search);
  const sessionId = urlParams.get("session");
  useEffect(() => {
    loadUser();
    if (sessionId) {
      loadMessages();
      const interval = setInterval(loadMessages, 2e3);
      return () => clearInterval(interval);
    }
  }, [sessionId]);
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const loadUser = async () => {
    try {
      const userData = await base44.auth.me();
      setUser(userData);
    } catch (e) {
      console.error("Failed to load user", e);
    }
  };
  const loadMessages = async () => {
    if (!sessionId) return;
    const msgs = await base44.entities.RestaurantSupportChat.filter(
      { session_id: sessionId },
      "created_date"
    );
    setMessages(msgs);
    if (msgs.length > 0) {
      setSessionInfo({
        restaurant_id: msgs[0].restaurant_id,
        restaurant_name: msgs[0].restaurant_name,
        issue_type: msgs[0].issue_type,
        status: msgs[0].status
      });
      msgs.forEach(async (msg) => {
        if (user?.role === "admin" && msg.sender_type === "restaurant" && !msg.is_read) {
          await base44.entities.RestaurantSupportChat.update(msg.id, { is_read: true });
        } else if (user?.role !== "admin" && msg.sender_type === "admin" && !msg.is_read) {
          await base44.entities.RestaurantSupportChat.update(msg.id, { is_read: true });
        }
      });
    }
  };
  const handleSendMessage = async () => {
    if (!newMessage.trim() || isSending || !sessionInfo) return;
    setIsSending(true);
    try {
      const isAdmin = user?.role === "admin";
      await base44.entities.RestaurantSupportChat.create({
        restaurant_id: sessionInfo.restaurant_id,
        restaurant_name: sessionInfo.restaurant_name,
        sender_type: isAdmin ? "admin" : "restaurant",
        sender_email: user.email,
        message: newMessage.trim(),
        session_id: sessionId,
        issue_type: sessionInfo.issue_type,
        status: "in_progress",
        is_read: false
      });
      setNewMessage("");
      loadMessages();
    } catch (error) {
      console.error("Failed to send message:", error);
    }
    setIsSending(false);
  };
  const markAsResolved = async () => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage) {
      await base44.entities.RestaurantSupportChat.update(lastMessage.id, { status: "resolved" });
      loadMessages();
    }
  };
  if (!sessionId) {
    return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/TeamChat:108:6", "data-dynamic-content": "false", className: "min-h-screen bg-gray-50 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/TeamChat:109:8", "data-dynamic-content": "false", className: "text-center", children: [
      /* @__PURE__ */ jsxDEV(MessageCircle, { "data-source-location": "pages/TeamChat:110:10", "data-dynamic-content": "false", className: "w-16 h-16 text-gray-300 mx-auto mb-4" }, void 0, false, {
        fileName: "/app/src/pages/TeamChat.jsx",
        lineNumber: 129,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/TeamChat:111:10", "data-dynamic-content": "false", className: "text-gray-500", children: "No session ID provided" }, void 0, false, {
        fileName: "/app/src/pages/TeamChat.jsx",
        lineNumber: 130,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/TeamChat.jsx",
      lineNumber: 128,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/TeamChat.jsx",
      lineNumber: 127,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/TeamChat:118:4", "data-dynamic-content": "true", className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/TeamChat:120:6", "data-dynamic-content": "true", className: "bg-white border-b shadow-sm sticky top-0 z-10", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/TeamChat:121:8", "data-dynamic-content": "true", className: "max-w-4xl mx-auto p-4", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/TeamChat:122:10", "data-dynamic-content": "true", className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/TeamChat:123:12", "data-dynamic-content": "true", className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDEV(
          Button,
          {
            "data-source-location": "pages/TeamChat:124:14",
            "data-dynamic-content": "true",
            variant: "ghost",
            size: "icon",
            onClick: () => window.close(),
            children: /* @__PURE__ */ jsxDEV(ArrowLeft, { "data-source-location": "pages/TeamChat:129:16", "data-dynamic-content": "false", className: "w-5 h-5" }, void 0, false, {
              fileName: "/app/src/pages/TeamChat.jsx",
              lineNumber: 148,
              columnNumber: 17
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/app/src/pages/TeamChat.jsx",
            lineNumber: 143,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/TeamChat:131:14", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/TeamChat:132:16", "data-dynamic-content": "true", className: "font-bold text-lg", children: sessionInfo?.restaurant_name || "Support Chat" }, void 0, false, {
            fileName: "/app/src/pages/TeamChat.jsx",
            lineNumber: 151,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/TeamChat:133:16", "data-dynamic-content": "true", className: "flex items-center gap-2 mt-1", children: [
            /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/TeamChat:134:18", "data-dynamic-content": "true", variant: "outline", className: "text-xs", children: sessionInfo?.issue_type || "General" }, void 0, false, {
              fileName: "/app/src/pages/TeamChat.jsx",
              lineNumber: 153,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/TeamChat:137:18", "data-dynamic-content": "true", className: sessionInfo?.status === "resolved" ? "bg-green-600" : sessionInfo?.status === "in_progress" ? "bg-blue-600" : "bg-orange-600", children: sessionInfo?.status || "Open" }, void 0, false, {
              fileName: "/app/src/pages/TeamChat.jsx",
              lineNumber: 156,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/TeamChat.jsx",
            lineNumber: 152,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/TeamChat.jsx",
          lineNumber: 150,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/TeamChat.jsx",
        lineNumber: 142,
        columnNumber: 13
      }, this),
      user?.role === "admin" && sessionInfo?.status !== "resolved" && /* @__PURE__ */ jsxDEV(
        Button,
        {
          "data-source-location": "pages/TeamChat:147:14",
          "data-dynamic-content": "true",
          size: "sm",
          variant: "outline",
          onClick: markAsResolved,
          className: "text-green-600 border-green-600",
          children: "Mark as Resolved"
        },
        void 0,
        false,
        {
          fileName: "/app/src/pages/TeamChat.jsx",
          lineNumber: 166,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/src/pages/TeamChat.jsx",
      lineNumber: 141,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/TeamChat.jsx",
      lineNumber: 140,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/TeamChat.jsx",
      lineNumber: 139,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/TeamChat:161:6", "data-dynamic-content": "true", className: "max-w-4xl mx-auto p-4", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/TeamChat:162:8", "data-dynamic-content": "true", className: "bg-white rounded-xl shadow-sm", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/TeamChat:163:10", "data-dynamic-content": "true", className: "h-[calc(100vh-240px)] overflow-y-auto p-4 space-y-3", "data-collection-id": "RestaurantSupportChat", children: [
        messages.length === 0 ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/TeamChat:165:14", "data-dynamic-content": "false", className: "text-center text-gray-500 mt-20", children: [
          /* @__PURE__ */ jsxDEV(MessageCircle, { "data-source-location": "pages/TeamChat:166:16", "data-dynamic-content": "false", className: "w-12 h-12 mx-auto mb-3 text-gray-300" }, void 0, false, {
            fileName: "/app/src/pages/TeamChat.jsx",
            lineNumber: 185,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/TeamChat:167:16", "data-dynamic-content": "false", children: "No messages yet" }, void 0, false, {
            fileName: "/app/src/pages/TeamChat.jsx",
            lineNumber: 186,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/TeamChat.jsx",
          lineNumber: 184,
          columnNumber: 13
        }, this) : messages.map((msg) => {
          const isOwnMessage = msg.sender_email === user?.email;
          return /* @__PURE__ */ jsxDEV(
            "div",
            {
              "data-source-location": "pages/TeamChat:173:18",
              "data-dynamic-content": "true",
              className: `flex ${isOwnMessage ? "justify-end" : "justify-start"}`,
              "data-collection-item-id": msg?.id,
              children: /* @__PURE__ */ jsxDEV(
                "div",
                {
                  "data-source-location": "pages/TeamChat:177:20",
                  "data-dynamic-content": "true",
                  className: `max-w-[75%] rounded-2xl px-4 py-2 ${isOwnMessage ? "bg-orange-600 text-white" : msg.sender_type === "ai" ? "bg-blue-100 text-blue-900 border border-blue-200" : msg.sender_type === "admin" ? "bg-purple-100 text-purple-900 border border-purple-200" : "bg-gray-100 text-gray-900"}`,
                  children: [
                    msg.sender_type === "ai" && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/TeamChat:189:24", "data-dynamic-content": "false", className: "flex items-center gap-1 mb-1 text-xs font-medium", children: [
                      /* @__PURE__ */ jsxDEV(Bot, { "data-source-location": "pages/TeamChat:190:26", "data-dynamic-content": "false", className: "w-3 h-3" }, void 0, false, {
                        fileName: "/app/src/pages/TeamChat.jsx",
                        lineNumber: 209,
                        columnNumber: 27
                      }, this),
                      "AI Assistant"
                    ] }, void 0, true, {
                      fileName: "/app/src/pages/TeamChat.jsx",
                      lineNumber: 208,
                      columnNumber: 21
                    }, this),
                    msg.sender_type === "admin" && !isOwnMessage && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/TeamChat:195:24", "data-dynamic-content": "false", className: "flex items-center gap-1 mb-1 text-xs font-medium", children: [
                      /* @__PURE__ */ jsxDEV(HeadphonesIcon, { "data-source-location": "pages/TeamChat:196:26", "data-dynamic-content": "false", className: "w-3 h-3" }, void 0, false, {
                        fileName: "/app/src/pages/TeamChat.jsx",
                        lineNumber: 215,
                        columnNumber: 27
                      }, this),
                      "Admin Team"
                    ] }, void 0, true, {
                      fileName: "/app/src/pages/TeamChat.jsx",
                      lineNumber: 214,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/TeamChat:200:22", "data-dynamic-content": "true", className: "text-sm", "data-collection-item-field": "message", "data-collection-item-id": msg?.id, children: msg.message }, void 0, false, {
                      fileName: "/app/src/pages/TeamChat.jsx",
                      lineNumber: 219,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/TeamChat:201:22", "data-dynamic-content": "true", className: `text-xs mt-1 ${isOwnMessage ? "text-orange-200" : "text-gray-500"}`, children: new Date(msg.created_date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }, void 0, false, {
                      fileName: "/app/src/pages/TeamChat.jsx",
                      lineNumber: 220,
                      columnNumber: 23
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/src/pages/TeamChat.jsx",
                  lineNumber: 196,
                  columnNumber: 21
                },
                this
              )
            },
            msg.id,
            false,
            {
              fileName: "/app/src/pages/TeamChat.jsx",
              lineNumber: 192,
              columnNumber: 17
            },
            this
          );
        }),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/TeamChat:209:12", "data-dynamic-content": "true", ref: messagesEndRef }, void 0, false, {
          fileName: "/app/src/pages/TeamChat.jsx",
          lineNumber: 228,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/TeamChat.jsx",
        lineNumber: 182,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/TeamChat:213:10", "data-dynamic-content": "true", className: "p-4 border-t", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/TeamChat:214:12", "data-dynamic-content": "true", className: "flex gap-2", children: [
        /* @__PURE__ */ jsxDEV(
          Input,
          {
            "data-source-location": "pages/TeamChat:215:14",
            "data-dynamic-content": "true",
            placeholder: "Type your message...",
            value: newMessage,
            onChange: (e) => setNewMessage(e.target.value),
            onKeyPress: (e) => e.key === "Enter" && handleSendMessage(),
            disabled: sessionInfo?.status === "resolved"
          },
          void 0,
          false,
          {
            fileName: "/app/src/pages/TeamChat.jsx",
            lineNumber: 234,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          Button,
          {
            "data-source-location": "pages/TeamChat:222:14",
            "data-dynamic-content": "true",
            onClick: handleSendMessage,
            disabled: isSending || !newMessage.trim() || sessionInfo?.status === "resolved",
            className: "bg-gradient-to-r from-orange-600 to-orange-500",
            children: /* @__PURE__ */ jsxDEV(Send, { "data-source-location": "pages/TeamChat:227:16", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
              fileName: "/app/src/pages/TeamChat.jsx",
              lineNumber: 246,
              columnNumber: 17
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/app/src/pages/TeamChat.jsx",
            lineNumber: 241,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/src/pages/TeamChat.jsx",
        lineNumber: 233,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/TeamChat.jsx",
        lineNumber: 232,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/TeamChat.jsx",
      lineNumber: 181,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/TeamChat.jsx",
      lineNumber: 180,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/TeamChat.jsx",
    lineNumber: 137,
    columnNumber: 5
  }, this);
}
_s(TeamChat, "Z2x2IaqPykkxz8LucDpw6Rf2GJg=");
_c = TeamChat;
var _c;
$RefreshReg$(_c, "TeamChat");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/TeamChat.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/TeamChat.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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LHdCQUFxQjtBQUFBLFlBQXdCLHdCQUFxQjtBQUFBLFlBQ3pFLGFBQVk7QUFBQSxZQUNaLE9BQU9SO0FBQUFBLFlBQ1AsVUFBVSxDQUFDNEIsTUFBTTNCLGNBQWMyQixFQUFFcUMsT0FBT0MsS0FBSztBQUFBLFlBQzdDLFlBQVksQ0FBQ3RDLE1BQU1BLEVBQUV1QyxRQUFRLFdBQVduQixrQkFBa0I7QUFBQSxZQUMxRCxVQUFVOUMsYUFBYXNDLFdBQVc7QUFBQTtBQUFBLFVBTGxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUs2QztBQUFBLFFBRTdDO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFBTyx3QkFBcUI7QUFBQSxZQUF3Qix3QkFBcUI7QUFBQSxZQUMxRSxTQUFTUTtBQUFBQSxZQUNULFVBQVUxQyxhQUFhLENBQUNOLFdBQVdpRCxLQUFLLEtBQUsvQyxhQUFhc0MsV0FBVztBQUFBLFlBQ3JFLFdBQVU7QUFBQSxZQUVSLGlDQUFDLFFBQUssd0JBQXFCLHlCQUF3Qix3QkFBcUIsU0FBUSxXQUFVLGFBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQW1HO0FBQUE7QUFBQSxVQUxyRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFNQTtBQUFBLFdBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWVBLEtBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFpQkE7QUFBQSxTQXBFRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBcUVBLEtBdEVGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0F1RUE7QUFBQSxPQWxIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBbUhBO0FBRUo7QUFBQzNDLEdBbk91QkQsVUFBUTtBQUFBd0UsS0FBUnhFO0FBQVEsSUFBQXdFO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiYmFzZTQ0IiwiQnV0dG9uIiwiSW5wdXQiLCJCYWRnZSIsIk1lc3NhZ2VDaXJjbGUiLCJTZW5kIiwiQm90IiwiSGVhZHBob25lc0ljb24iLCJBcnJvd0xlZnQiLCJUZWFtQ2hhdCIsIl9zIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsIm5ld01lc3NhZ2UiLCJzZXROZXdNZXNzYWdlIiwic2Vzc2lvbkluZm8iLCJzZXRTZXNzaW9uSW5mbyIsInVzZXIiLCJzZXRVc2VyIiwiaXNTZW5kaW5nIiwic2V0SXNTZW5kaW5nIiwibWVzc2FnZXNFbmRSZWYiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInNlc3Npb25JZCIsImdldCIsImxvYWRVc2VyIiwibG9hZE1lc3NhZ2VzIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzY3JvbGxUb0JvdHRvbSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwidXNlckRhdGEiLCJhdXRoIiwibWUiLCJlIiwiY29uc29sZSIsImVycm9yIiwibXNncyIsImVudGl0aWVzIiwiUmVzdGF1cmFudFN1cHBvcnRDaGF0IiwiZmlsdGVyIiwic2Vzc2lvbl9pZCIsImxlbmd0aCIsInJlc3RhdXJhbnRfaWQiLCJyZXN0YXVyYW50X25hbWUiLCJpc3N1ZV90eXBlIiwic3RhdHVzIiwiZm9yRWFjaCIsIm1zZyIsInJvbGUiLCJzZW5kZXJfdHlwZSIsImlzX3JlYWQiLCJ1cGRhdGUiLCJpZCIsImhhbmRsZVNlbmRNZXNzYWdlIiwidHJpbSIsImlzQWRtaW4iLCJjcmVhdGUiLCJzZW5kZXJfZW1haWwiLCJlbWFpbCIsIm1lc3NhZ2UiLCJtYXJrQXNSZXNvbHZlZCIsImxhc3RNZXNzYWdlIiwiY2xvc2UiLCJtYXAiLCJpc093bk1lc3NhZ2UiLCJEYXRlIiwiY3JlYXRlZF9kYXRlIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiaG91ciIsIm1pbnV0ZSIsInRhcmdldCIsInZhbHVlIiwia2V5IiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiVGVhbUNoYXQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGJhc2U0NCB9IGZyb20gXCJAL2FwaS9iYXNlNDRDbGllbnRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9iYWRnZVwiO1xuaW1wb3J0IHsgTWVzc2FnZUNpcmNsZSwgU2VuZCwgQm90LCBIZWFkcGhvbmVzSWNvbiwgQXJyb3dMZWZ0IH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZWFtQ2hhdCgpIHtcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtuZXdNZXNzYWdlLCBzZXROZXdNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2Vzc2lvbkluZm8sIHNldFNlc3Npb25JbmZvXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzU2VuZGluZywgc2V0SXNTZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgbWVzc2FnZXNFbmRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgY29uc3Qgc2Vzc2lvbklkID0gdXJsUGFyYW1zLmdldCgnc2Vzc2lvbicpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9hZFVzZXIoKTtcbiAgICBpZiAoc2Vzc2lvbklkKSB7XG4gICAgICBsb2FkTWVzc2FnZXMoKTtcbiAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwobG9hZE1lc3NhZ2VzLCAyMDAwKTtcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9XG4gIH0sIFtzZXNzaW9uSWRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNjcm9sbFRvQm90dG9tKCk7XG4gIH0sIFttZXNzYWdlc10pO1xuXG4gIGNvbnN0IHNjcm9sbFRvQm90dG9tID0gKCkgPT4ge1xuICAgIG1lc3NhZ2VzRW5kUmVmLmN1cnJlbnQ/LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gIH07XG5cbiAgY29uc3QgbG9hZFVzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgYmFzZTQ0LmF1dGgubWUoKTtcbiAgICAgIHNldFVzZXIodXNlckRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCB1c2VyXCIsIGUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBsb2FkTWVzc2FnZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFzZXNzaW9uSWQpIHJldHVybjtcbiAgICBjb25zdCBtc2dzID0gYXdhaXQgYmFzZTQ0LmVudGl0aWVzLlJlc3RhdXJhbnRTdXBwb3J0Q2hhdC5maWx0ZXIoXG4gICAgICB7IHNlc3Npb25faWQ6IHNlc3Npb25JZCB9LFxuICAgICAgJ2NyZWF0ZWRfZGF0ZSdcbiAgICApO1xuICAgIHNldE1lc3NhZ2VzKG1zZ3MpO1xuXG4gICAgaWYgKG1zZ3MubGVuZ3RoID4gMCkge1xuICAgICAgc2V0U2Vzc2lvbkluZm8oe1xuICAgICAgICByZXN0YXVyYW50X2lkOiBtc2dzWzBdLnJlc3RhdXJhbnRfaWQsXG4gICAgICAgIHJlc3RhdXJhbnRfbmFtZTogbXNnc1swXS5yZXN0YXVyYW50X25hbWUsXG4gICAgICAgIGlzc3VlX3R5cGU6IG1zZ3NbMF0uaXNzdWVfdHlwZSxcbiAgICAgICAgc3RhdHVzOiBtc2dzWzBdLnN0YXR1c1xuICAgICAgfSk7XG5cbiAgICAgIC8vIE1hcmsgbWVzc2FnZXMgYXMgcmVhZCBiYXNlZCBvbiB1c2VyIHR5cGVcbiAgICAgIG1zZ3MuZm9yRWFjaChhc3luYyAobXNnKSA9PiB7XG4gICAgICAgIGlmICh1c2VyPy5yb2xlID09PSAnYWRtaW4nICYmIG1zZy5zZW5kZXJfdHlwZSA9PT0gJ3Jlc3RhdXJhbnQnICYmICFtc2cuaXNfcmVhZCkge1xuICAgICAgICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5SZXN0YXVyYW50U3VwcG9ydENoYXQudXBkYXRlKG1zZy5pZCwgeyBpc19yZWFkOiB0cnVlIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHVzZXI/LnJvbGUgIT09ICdhZG1pbicgJiYgbXNnLnNlbmRlcl90eXBlID09PSAnYWRtaW4nICYmICFtc2cuaXNfcmVhZCkge1xuICAgICAgICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5SZXN0YXVyYW50U3VwcG9ydENoYXQudXBkYXRlKG1zZy5pZCwgeyBpc19yZWFkOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2VuZE1lc3NhZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFuZXdNZXNzYWdlLnRyaW0oKSB8fCBpc1NlbmRpbmcgfHwgIXNlc3Npb25JbmZvKSByZXR1cm47XG5cbiAgICBzZXRJc1NlbmRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGlzQWRtaW4gPSB1c2VyPy5yb2xlID09PSAnYWRtaW4nO1xuICAgICAgYXdhaXQgYmFzZTQ0LmVudGl0aWVzLlJlc3RhdXJhbnRTdXBwb3J0Q2hhdC5jcmVhdGUoe1xuICAgICAgICByZXN0YXVyYW50X2lkOiBzZXNzaW9uSW5mby5yZXN0YXVyYW50X2lkLFxuICAgICAgICByZXN0YXVyYW50X25hbWU6IHNlc3Npb25JbmZvLnJlc3RhdXJhbnRfbmFtZSxcbiAgICAgICAgc2VuZGVyX3R5cGU6IGlzQWRtaW4gPyBcImFkbWluXCIgOiBcInJlc3RhdXJhbnRcIixcbiAgICAgICAgc2VuZGVyX2VtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICBtZXNzYWdlOiBuZXdNZXNzYWdlLnRyaW0oKSxcbiAgICAgICAgc2Vzc2lvbl9pZDogc2Vzc2lvbklkLFxuICAgICAgICBpc3N1ZV90eXBlOiBzZXNzaW9uSW5mby5pc3N1ZV90eXBlLFxuICAgICAgICBzdGF0dXM6IFwiaW5fcHJvZ3Jlc3NcIixcbiAgICAgICAgaXNfcmVhZDogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgICBzZXROZXdNZXNzYWdlKFwiXCIpO1xuICAgICAgbG9hZE1lc3NhZ2VzKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBtZXNzYWdlOlwiLCBlcnJvcik7XG4gICAgfVxuICAgIHNldElzU2VuZGluZyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgbWFya0FzUmVzb2x2ZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbGFzdE1lc3NhZ2UgPSBtZXNzYWdlc1ttZXNzYWdlcy5sZW5ndGggLSAxXTtcbiAgICBpZiAobGFzdE1lc3NhZ2UpIHtcbiAgICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5SZXN0YXVyYW50U3VwcG9ydENoYXQudXBkYXRlKGxhc3RNZXNzYWdlLmlkLCB7IHN0YXR1czogXCJyZXNvbHZlZFwiIH0pO1xuICAgICAgbG9hZE1lc3NhZ2VzKCk7XG4gICAgfVxuICB9O1xuXG4gIGlmICghc2Vzc2lvbklkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9UZWFtQ2hhdDoxMDg6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JheS01MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvVGVhbUNoYXQ6MTA5OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8TWVzc2FnZUNpcmNsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1RlYW1DaGF0OjExMDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgdGV4dC1ncmF5LTMwMCBteC1hdXRvIG1iLTRcIiAvPlxuICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvVGVhbUNoYXQ6MTExOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5ObyBzZXNzaW9uIElEIHByb3ZpZGVkPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2Pik7XG5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1RlYW1DaGF0OjExODo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWdyYXktNTBcIj5cbiAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvVGVhbUNoYXQ6MTIwOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXItYiBzaGFkb3ctc20gc3RpY2t5IHRvcC0wIHotMTBcIj5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1RlYW1DaGF0OjEyMTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gcC00XCI+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1RlYW1DaGF0OjEyMjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1RlYW1DaGF0OjEyMzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9UZWFtQ2hhdDoxMjQ6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICAgICAgICBzaXplPVwiaWNvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5jbG9zZSgpfT5cblxuICAgICAgICAgICAgICAgIDxBcnJvd0xlZnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9UZWFtQ2hhdDoxMjk6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvVGVhbUNoYXQ6MTMxOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPGgxIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvVGVhbUNoYXQ6MTMyOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtbGdcIj57c2Vzc2lvbkluZm8/LnJlc3RhdXJhbnRfbmFtZSB8fCAnU3VwcG9ydCBDaGF0J308L2gxPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9UZWFtQ2hhdDoxMzM6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBtdC0xXCI+XG4gICAgICAgICAgICAgICAgICA8QmFkZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9UZWFtQ2hhdDoxMzQ6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB2YXJpYW50PVwib3V0bGluZVwiIGNsYXNzTmFtZT1cInRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgICAge3Nlc3Npb25JbmZvPy5pc3N1ZV90eXBlIHx8ICdHZW5lcmFsJ31cbiAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgICA8QmFkZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9UZWFtQ2hhdDoxMzc6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgc2Vzc2lvbkluZm8/LnN0YXR1cyA9PT0gJ3Jlc29sdmVkJyA/ICdiZy1ncmVlbi02MDAnIDpcbiAgICAgICAgICAgICAgICAgIHNlc3Npb25JbmZvPy5zdGF0dXMgPT09ICdpbl9wcm9ncmVzcycgPyAnYmctYmx1ZS02MDAnIDogJ2JnLW9yYW5nZS02MDAnXG4gICAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICAgICAgICAgICB7c2Vzc2lvbkluZm8/LnN0YXR1cyB8fCAnT3Blbid9XG4gICAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3VzZXI/LnJvbGUgPT09ICdhZG1pbicgJiYgc2Vzc2lvbkluZm8/LnN0YXR1cyAhPT0gJ3Jlc29sdmVkJyAmJlxuICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1RlYW1DaGF0OjE0NzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgb25DbGljaz17bWFya0FzUmVzb2x2ZWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTYwMCBib3JkZXItZ3JlZW4tNjAwXCI+XG5cbiAgICAgICAgICAgICAgICBNYXJrIGFzIFJlc29sdmVkXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTWVzc2FnZXMgKi99XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvVGVhbUNoYXQ6MTYxOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBwLTRcIj5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1RlYW1DaGF0OjE2Mjo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bCBzaGFkb3ctc21cIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvVGVhbUNoYXQ6MTYzOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiaC1bY2FsYygxMDB2aC0yNDBweCldIG92ZXJmbG93LXktYXV0byBwLTQgc3BhY2UteS0zXCIgZGF0YS1jb2xsZWN0aW9uLWlkPVwiUmVzdGF1cmFudFN1cHBvcnRDaGF0XCI+XG4gICAgICAgICAgICB7bWVzc2FnZXMubGVuZ3RoID09PSAwID9cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9UZWFtQ2hhdDoxNjU6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1ncmF5LTUwMCBtdC0yMFwiPlxuICAgICAgICAgICAgICAgIDxNZXNzYWdlQ2lyY2xlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvVGVhbUNoYXQ6MTY2OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMTIgaC0xMiBteC1hdXRvIG1iLTMgdGV4dC1ncmF5LTMwMFwiIC8+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9UZWFtQ2hhdDoxNjc6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+Tm8gbWVzc2FnZXMgeWV0PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj4gOlxuXG4gICAgICAgICAgICBtZXNzYWdlcy5tYXAoKG1zZykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpc093bk1lc3NhZ2UgPSBtc2cuc2VuZGVyX2VtYWlsID09PSB1c2VyPy5lbWFpbDtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvVGVhbUNoYXQ6MTczOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBrZXk9e21zZy5pZH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4ICR7aXNPd25NZXNzYWdlID8gJ2p1c3RpZnktZW5kJyA6ICdqdXN0aWZ5LXN0YXJ0J31gfSBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17bXNnPy5pZH0+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1RlYW1DaGF0OjE3NzoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BtYXgtdy1bNzUlXSByb3VuZGVkLTJ4bCBweC00IHB5LTIgJHtcbiAgICAgICAgICAgICAgICAgIGlzT3duTWVzc2FnZSA/XG4gICAgICAgICAgICAgICAgICAnYmctb3JhbmdlLTYwMCB0ZXh0LXdoaXRlJyA6XG4gICAgICAgICAgICAgICAgICBtc2cuc2VuZGVyX3R5cGUgPT09ICdhaScgP1xuICAgICAgICAgICAgICAgICAgJ2JnLWJsdWUtMTAwIHRleHQtYmx1ZS05MDAgYm9yZGVyIGJvcmRlci1ibHVlLTIwMCcgOlxuICAgICAgICAgICAgICAgICAgbXNnLnNlbmRlcl90eXBlID09PSAnYWRtaW4nID9cbiAgICAgICAgICAgICAgICAgICdiZy1wdXJwbGUtMTAwIHRleHQtcHVycGxlLTkwMCBib3JkZXIgYm9yZGVyLXB1cnBsZS0yMDAnIDpcbiAgICAgICAgICAgICAgICAgICdiZy1ncmF5LTEwMCB0ZXh0LWdyYXktOTAwJ31gXG4gICAgICAgICAgICAgICAgICB9PlxuXG4gICAgICAgICAgICAgICAgICAgICAge21zZy5zZW5kZXJfdHlwZSA9PT0gJ2FpJyAmJlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvVGVhbUNoYXQ6MTg5OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIG1iLTEgdGV4dC14cyBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm90IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvVGVhbUNoYXQ6MTkwOjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMyBoLTNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBBSSBBc3Npc3RhbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAge21zZy5zZW5kZXJfdHlwZSA9PT0gJ2FkbWluJyAmJiAhaXNPd25NZXNzYWdlICYmXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9UZWFtQ2hhdDoxOTU6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgbWItMSB0ZXh0LXhzIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkcGhvbmVzSWNvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1RlYW1DaGF0OjE5NjoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTMgaC0zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWRtaW4gVGVhbVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1RlYW1DaGF0OjIwMDoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc21cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIm1lc3NhZ2VcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17bXNnPy5pZH0+e21zZy5tZXNzYWdlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1RlYW1DaGF0OjIwMToyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YHRleHQteHMgbXQtMSAke2lzT3duTWVzc2FnZSA/ICd0ZXh0LW9yYW5nZS0yMDAnIDogJ3RleHQtZ3JheS01MDAnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKG1zZy5jcmVhdGVkX2RhdGUpLnRvTG9jYWxlVGltZVN0cmluZyhbXSwgeyBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj4pO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1RlYW1DaGF0OjIwOToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHJlZj17bWVzc2FnZXNFbmRSZWZ9IC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogSW5wdXQgKi99XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1RlYW1DaGF0OjIxMzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtNCBib3JkZXItdFwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1RlYW1DaGF0OjIxNDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggZ2FwLTJcIj5cbiAgICAgICAgICAgICAgPElucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvVGVhbUNoYXQ6MjE1OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbWVzc2FnZS4uLlwiXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdNZXNzYWdlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld01lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBvbktleVByZXNzPXsoZSkgPT4gZS5rZXkgPT09ICdFbnRlcicgJiYgaGFuZGxlU2VuZE1lc3NhZ2UoKX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3Nlc3Npb25JbmZvPy5zdGF0dXMgPT09ICdyZXNvbHZlZCd9IC8+XG5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1RlYW1DaGF0OjIyMjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbmRNZXNzYWdlfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTZW5kaW5nIHx8ICFuZXdNZXNzYWdlLnRyaW0oKSB8fCBzZXNzaW9uSW5mbz8uc3RhdHVzID09PSAncmVzb2x2ZWQnfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tb3JhbmdlLTYwMCB0by1vcmFuZ2UtNTAwXCI+XG5cbiAgICAgICAgICAgICAgICA8U2VuZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1RlYW1DaGF0OjIyNzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4pO1xuXG59Il0sImZpbGUiOiIvYXBwL3NyYy9wYWdlcy9UZWFtQ2hhdC5qc3gifQ==