import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/dashboard/ChatSection.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/dashboard/ChatSection.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"]; const useRef = __vite__cjsImport3_react["useRef"];
import { base44 } from "/src/api/base44Client.js";
import { Card, CardContent, CardHeader, CardTitle } from "/src/components/ui/card.jsx";
import { Button } from "/src/components/ui/button.jsx";
import { Input } from "/src/components/ui/input.jsx";
import { Badge } from "/src/components/ui/badge.jsx";
import { MessageCircle, Send, User, Bot, Circle } from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
export default function ChatSection({ restaurant }) {
  _s();
  const [chatSessions, setChatSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [userScrolling, setUserScrolling] = useState(false);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  useEffect(() => {
    loadChatSessions();
    const interval = setInterval(loadChatSessions, 5e3);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (selectedSession) {
      loadMessages();
      const interval = setInterval(loadMessages, 3e3);
      return () => clearInterval(interval);
    }
  }, [selectedSession]);
  useEffect(() => {
    if (!userScrolling) {
      scrollToBottom();
    }
  }, [messages]);
  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
    setUserScrolling(!isNearBottom);
  };
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const loadChatSessions = async () => {
    const allMessages = await base44.entities.ChatMessage.filter(
      { restaurant_id: restaurant.restaurant_id },
      "-created_date",
      500
    );
    const sessionsMap = {};
    allMessages.forEach((msg) => {
      if (!sessionsMap[msg.session_id]) {
        sessionsMap[msg.session_id] = {
          session_id: msg.session_id,
          customer_name: msg.customer_name,
          customer_phone: msg.customer_phone,
          last_message: msg.message,
          last_message_time: msg.created_date,
          unread_count: 0,
          messages: []
        };
      }
      sessionsMap[msg.session_id].messages.push(msg);
      if (!msg.is_read && msg.sender_type === "customer") {
        sessionsMap[msg.session_id].unread_count++;
      }
    });
    const sessions = Object.values(sessionsMap).sort(
      (a, b) => new Date(b.last_message_time) - new Date(a.last_message_time)
    );
    setChatSessions(sessions);
  };
  const loadMessages = async () => {
    if (!selectedSession) return;
    const msgs = await base44.entities.ChatMessage.filter(
      { restaurant_id: restaurant.restaurant_id, session_id: selectedSession.session_id },
      "created_date"
    );
    setMessages(msgs);
    msgs.forEach(async (msg) => {
      if (!msg.is_read && msg.sender_type === "customer") {
        await base44.entities.ChatMessage.update(msg.id, { is_read: true });
      }
    });
  };
  const handleSendMessage = async () => {
    if (!newMessage.trim() || !selectedSession) return;
    setUserScrolling(false);
    await base44.entities.ChatMessage.create({
      restaurant_id: restaurant.restaurant_id,
      customer_name: selectedSession.customer_name,
      customer_phone: selectedSession.customer_phone,
      sender_type: "restaurant",
      message: newMessage.trim(),
      session_id: selectedSession.session_id,
      is_read: false
    });
    setNewMessage("");
    loadMessages();
  };
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ChatSection:117:4", "data-dynamic-content": "true", className: "grid md:grid-cols-3 gap-6 h-[calc(100vh-12rem)]", children: [
    /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/ChatSection:119:6", "data-dynamic-content": "true", className: "md:col-span-1", children: [
      /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "components/dashboard/ChatSection:120:8", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "components/dashboard/ChatSection:121:10", "data-dynamic-content": "false", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV(MessageCircle, { "data-source-location": "components/dashboard/ChatSection:122:12", "data-dynamic-content": "false", className: "w-5 h-5" }, void 0, false, {
          fileName: "/app/src/components/dashboard/ChatSection.jsx",
          lineNumber: 141,
          columnNumber: 13
        }, this),
        "Customer Chats"
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/ChatSection.jsx",
        lineNumber: 140,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/components/dashboard/ChatSection.jsx",
        lineNumber: 139,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/ChatSection:126:8", "data-dynamic-content": "true", className: "p-0", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ChatSection:127:10", "data-dynamic-content": "true", className: "divide-y max-h-[calc(100vh-16rem)] overflow-y-auto", children: chatSessions.length === 0 ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ChatSection:129:14", "data-dynamic-content": "false", className: "p-8 text-center text-gray-500", children: [
        /* @__PURE__ */ jsxDEV(MessageCircle, { "data-source-location": "components/dashboard/ChatSection:130:16", "data-dynamic-content": "false", className: "w-12 h-12 mx-auto mb-3 text-gray-300" }, void 0, false, {
          fileName: "/app/src/components/dashboard/ChatSection.jsx",
          lineNumber: 149,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/ChatSection:131:16", "data-dynamic-content": "false", children: "No customer chats yet" }, void 0, false, {
          fileName: "/app/src/components/dashboard/ChatSection.jsx",
          lineNumber: 150,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/ChatSection.jsx",
        lineNumber: 148,
        columnNumber: 13
      }, this) : chatSessions.map(
        (session) => /* @__PURE__ */ jsxDEV(
          "button",
          {
            "data-source-location": "components/dashboard/ChatSection:135:16",
            "data-dynamic-content": "true",
            onClick: () => setSelectedSession(session),
            className: `w-full p-4 text-left hover:bg-gray-50 transition-colors ${selectedSession?.session_id === session.session_id ? "bg-orange-50" : ""}`,
            children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ChatSection:142:18", "data-dynamic-content": "true", className: "flex items-start justify-between mb-1", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ChatSection:143:20", "data-dynamic-content": "true", className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ChatSection:144:22", "data-dynamic-content": "false", className: "w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(User, { "data-source-location": "components/dashboard/ChatSection:145:24", "data-dynamic-content": "false", className: "w-5 h-5 text-orange-600" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/ChatSection.jsx",
                    lineNumber: 164,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "/app/src/components/dashboard/ChatSection.jsx",
                    lineNumber: 163,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ChatSection:147:22", "data-dynamic-content": "true", children: [
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/ChatSection:148:24", "data-dynamic-content": "true", className: "font-medium text-gray-900", "data-collection-item-field": "customer_name", "data-collection-item-id": session?.id || session?._id, children: session.customer_name }, void 0, false, {
                      fileName: "/app/src/components/dashboard/ChatSection.jsx",
                      lineNumber: 167,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/ChatSection:149:24", "data-dynamic-content": "true", className: "text-xs text-gray-500", "data-collection-item-field": "customer_phone", "data-collection-item-id": session?.id || session?._id, children: session.customer_phone }, void 0, false, {
                      fileName: "/app/src/components/dashboard/ChatSection.jsx",
                      lineNumber: 168,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/src/components/dashboard/ChatSection.jsx",
                    lineNumber: 166,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/ChatSection.jsx",
                  lineNumber: 162,
                  columnNumber: 21
                }, this),
                session.unread_count > 0 && /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "components/dashboard/ChatSection:153:22", "data-dynamic-content": "true", className: "bg-orange-600", "data-collection-item-field": "unread_count", "data-collection-item-id": session?.id || session?._id, children: session.unread_count }, void 0, false, {
                  fileName: "/app/src/components/dashboard/ChatSection.jsx",
                  lineNumber: 172,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/ChatSection.jsx",
                lineNumber: 161,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/ChatSection:156:18", "data-dynamic-content": "true", className: "text-sm text-gray-600 truncate mt-2", "data-collection-item-field": "last_message", "data-collection-item-id": session?.id || session?._id, children: session.last_message }, void 0, false, {
                fileName: "/app/src/components/dashboard/ChatSection.jsx",
                lineNumber: 175,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/ChatSection:157:18", "data-dynamic-content": "true", className: "text-xs text-gray-400 mt-1", children: new Date(session.last_message_time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }, void 0, false, {
                fileName: "/app/src/components/dashboard/ChatSection.jsx",
                lineNumber: 176,
                columnNumber: 19
              }, this)
            ]
          },
          session.session_id,
          true,
          {
            fileName: "/app/src/components/dashboard/ChatSection.jsx",
            lineNumber: 154,
            columnNumber: 13
          },
          this
        )
      ) }, void 0, false, {
        fileName: "/app/src/components/dashboard/ChatSection.jsx",
        lineNumber: 146,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/components/dashboard/ChatSection.jsx",
        lineNumber: 145,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/ChatSection.jsx",
      lineNumber: 138,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/ChatSection:168:6", "data-dynamic-content": "true", className: "md:col-span-2", children: selectedSession ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "components/dashboard/ChatSection:171:12", "data-dynamic-content": "true", className: "border-b", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ChatSection:172:14", "data-dynamic-content": "true", className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ChatSection:173:16", "data-dynamic-content": "false", className: "w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(User, { "data-source-location": "components/dashboard/ChatSection:174:18", "data-dynamic-content": "false", className: "w-5 h-5 text-orange-600" }, void 0, false, {
          fileName: "/app/src/components/dashboard/ChatSection.jsx",
          lineNumber: 193,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "/app/src/components/dashboard/ChatSection.jsx",
          lineNumber: 192,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ChatSection:176:16", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "components/dashboard/ChatSection:177:18", "data-dynamic-content": "true", "data-collection-item-field": "customer_name", "data-collection-item-id": selectedSession?.id || selectedSession?._id, children: selectedSession.customer_name }, void 0, false, {
            fileName: "/app/src/components/dashboard/ChatSection.jsx",
            lineNumber: 196,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/ChatSection:178:18", "data-dynamic-content": "true", className: "text-sm text-gray-500", "data-collection-item-field": "customer_phone", "data-collection-item-id": selectedSession?.id || selectedSession?._id, children: selectedSession.customer_phone }, void 0, false, {
            fileName: "/app/src/components/dashboard/ChatSection.jsx",
            lineNumber: 197,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/ChatSection.jsx",
          lineNumber: 195,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/ChatSection.jsx",
        lineNumber: 191,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/src/components/dashboard/ChatSection.jsx",
        lineNumber: 190,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/ChatSection:182:12", "data-dynamic-content": "true", className: "p-0 flex flex-col", style: { height: "calc(100% - 5rem)" }, children: [
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            "data-source-location": "components/dashboard/ChatSection:184:14",
            "data-dynamic-content": "true",
            ref: messagesContainerRef,
            onScroll: handleScroll,
            className: "flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50",
            "data-collection-id": "ChatMessage",
            children: [
              messages.map(
                (msg) => /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    "data-source-location": "components/dashboard/ChatSection:190:18",
                    "data-dynamic-content": "true",
                    className: `flex ${msg.sender_type === "restaurant" ? "justify-end" : "justify-start"}`,
                    "data-collection-item-id": msg?.id,
                    children: /* @__PURE__ */ jsxDEV(
                      "div",
                      {
                        "data-source-location": "components/dashboard/ChatSection:194:20",
                        "data-dynamic-content": "true",
                        className: `max-w-[75%] rounded-2xl px-4 py-2 ${msg.sender_type === "restaurant" ? "bg-orange-600 text-white" : msg.sender_type === "ai" ? "bg-blue-100 text-blue-900 border border-blue-200" : "bg-white text-gray-900 border border-gray-200"}`,
                        children: [
                          msg.sender_type === "ai" && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ChatSection:204:24", "data-dynamic-content": "false", className: "flex items-center gap-1 mb-1 text-xs font-medium", children: [
                            /* @__PURE__ */ jsxDEV(Bot, { "data-source-location": "components/dashboard/ChatSection:205:26", "data-dynamic-content": "false", className: "w-3 h-3" }, void 0, false, {
                              fileName: "/app/src/components/dashboard/ChatSection.jsx",
                              lineNumber: 224,
                              columnNumber: 27
                            }, this),
                            "AI Assistant"
                          ] }, void 0, true, {
                            fileName: "/app/src/components/dashboard/ChatSection.jsx",
                            lineNumber: 223,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/ChatSection:209:22", "data-dynamic-content": "true", className: "text-sm", "data-collection-item-field": "message", "data-collection-item-id": msg?.id, children: msg.message }, void 0, false, {
                            fileName: "/app/src/components/dashboard/ChatSection.jsx",
                            lineNumber: 228,
                            columnNumber: 23
                          }, this),
                          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/ChatSection:210:22", "data-dynamic-content": "true", className: `text-xs mt-1 ${msg.sender_type === "restaurant" ? "text-orange-200" : "text-gray-400"}`, children: new Date(msg.created_date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }, void 0, false, {
                            fileName: "/app/src/components/dashboard/ChatSection.jsx",
                            lineNumber: 229,
                            columnNumber: 23
                          }, this)
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "/app/src/components/dashboard/ChatSection.jsx",
                        lineNumber: 213,
                        columnNumber: 21
                      },
                      this
                    )
                  },
                  msg.id,
                  false,
                  {
                    fileName: "/app/src/components/dashboard/ChatSection.jsx",
                    lineNumber: 209,
                    columnNumber: 15
                  },
                  this
                )
              ),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ChatSection:216:16", "data-dynamic-content": "true", ref: messagesEndRef }, void 0, false, {
                fileName: "/app/src/components/dashboard/ChatSection.jsx",
                lineNumber: 235,
                columnNumber: 17
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/src/components/dashboard/ChatSection.jsx",
            lineNumber: 203,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ChatSection:220:14", "data-dynamic-content": "true", className: "p-4 border-t bg-white", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ChatSection:221:16", "data-dynamic-content": "true", className: "flex gap-2", children: [
          /* @__PURE__ */ jsxDEV(
            Input,
            {
              "data-source-location": "components/dashboard/ChatSection:222:18",
              "data-dynamic-content": "true",
              placeholder: "Type your message...",
              value: newMessage,
              onChange: (e) => setNewMessage(e.target.value),
              onKeyPress: (e) => e.key === "Enter" && handleSendMessage()
            },
            void 0,
            false,
            {
              fileName: "/app/src/components/dashboard/ChatSection.jsx",
              lineNumber: 241,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Button,
            {
              "data-source-location": "components/dashboard/ChatSection:228:18",
              "data-dynamic-content": "true",
              onClick: handleSendMessage,
              disabled: !newMessage.trim(),
              className: "bg-gradient-to-r from-orange-600 to-orange-500",
              children: /* @__PURE__ */ jsxDEV(Send, { "data-source-location": "components/dashboard/ChatSection:233:20", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                fileName: "/app/src/components/dashboard/ChatSection.jsx",
                lineNumber: 252,
                columnNumber: 21
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/app/src/components/dashboard/ChatSection.jsx",
              lineNumber: 247,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/ChatSection.jsx",
          lineNumber: 240,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/src/components/dashboard/ChatSection.jsx",
          lineNumber: 239,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/ChatSection.jsx",
        lineNumber: 201,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/ChatSection.jsx",
      lineNumber: 189,
      columnNumber: 9
    }, this) : /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/ChatSection:240:10", "data-dynamic-content": "false", className: "flex items-center justify-center h-full", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/ChatSection:241:12", "data-dynamic-content": "false", className: "text-center text-gray-500", children: [
      /* @__PURE__ */ jsxDEV(MessageCircle, { "data-source-location": "components/dashboard/ChatSection:242:14", "data-dynamic-content": "false", className: "w-16 h-16 mx-auto mb-4 text-gray-300" }, void 0, false, {
        fileName: "/app/src/components/dashboard/ChatSection.jsx",
        lineNumber: 261,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/ChatSection:243:14", "data-dynamic-content": "false", children: "Select a chat to start messaging" }, void 0, false, {
        fileName: "/app/src/components/dashboard/ChatSection.jsx",
        lineNumber: 262,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/ChatSection.jsx",
      lineNumber: 260,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "/app/src/components/dashboard/ChatSection.jsx",
      lineNumber: 259,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/components/dashboard/ChatSection.jsx",
      lineNumber: 187,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/dashboard/ChatSection.jsx",
    lineNumber: 136,
    columnNumber: 5
  }, this);
}
_s(ChatSection, "xNKmAZNNObeub/OJj5Xb80SChig=");
_c = ChatSection;
var _c;
$RefreshReg$(_c, "ChatSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/dashboard/ChatSection.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/dashboard/ChatSection.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QiwyQ0FBMEMsd0JBQXFCLFNBQVEsV0FBVSwwQ0FBckg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUEySjtBQUFBLE1BQzNKLHVCQUFDLE9BQUUsd0JBQXFCLDJDQUEwQyx3QkFBcUIsU0FBUSxnREFBL0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUErSDtBQUFBLFNBRmpJO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FHQSxLQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FLRSxLQTdFSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBK0VBO0FBQUEsT0FsSUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQW1JQTtBQUVKO0FBQUMzRCxHQWpQdUJGLGFBQVc7QUFBQXlFLEtBQVh6RTtBQUFXLElBQUF5RTtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsImJhc2U0NCIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJCdXR0b24iLCJJbnB1dCIsIkJhZGdlIiwiTWVzc2FnZUNpcmNsZSIsIlNlbmQiLCJVc2VyIiwiQm90IiwiQ2lyY2xlIiwiQ2hhdFNlY3Rpb24iLCJyZXN0YXVyYW50IiwiX3MiLCJjaGF0U2Vzc2lvbnMiLCJzZXRDaGF0U2Vzc2lvbnMiLCJzZWxlY3RlZFNlc3Npb24iLCJzZXRTZWxlY3RlZFNlc3Npb24iLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwibmV3TWVzc2FnZSIsInNldE5ld01lc3NhZ2UiLCJ1c2VyU2Nyb2xsaW5nIiwic2V0VXNlclNjcm9sbGluZyIsIm1lc3NhZ2VzRW5kUmVmIiwibWVzc2FnZXNDb250YWluZXJSZWYiLCJsb2FkQ2hhdFNlc3Npb25zIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkTWVzc2FnZXMiLCJzY3JvbGxUb0JvdHRvbSIsImhhbmRsZVNjcm9sbCIsImUiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJ0YXJnZXQiLCJpc05lYXJCb3R0b20iLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImFsbE1lc3NhZ2VzIiwiZW50aXRpZXMiLCJDaGF0TWVzc2FnZSIsImZpbHRlciIsInJlc3RhdXJhbnRfaWQiLCJzZXNzaW9uc01hcCIsImZvckVhY2giLCJtc2ciLCJzZXNzaW9uX2lkIiwiY3VzdG9tZXJfbmFtZSIsImN1c3RvbWVyX3Bob25lIiwibGFzdF9tZXNzYWdlIiwibWVzc2FnZSIsImxhc3RfbWVzc2FnZV90aW1lIiwiY3JlYXRlZF9kYXRlIiwidW5yZWFkX2NvdW50IiwicHVzaCIsImlzX3JlYWQiLCJzZW5kZXJfdHlwZSIsInNlc3Npb25zIiwiT2JqZWN0IiwidmFsdWVzIiwic29ydCIsImEiLCJiIiwiRGF0ZSIsIm1zZ3MiLCJ1cGRhdGUiLCJpZCIsImhhbmRsZVNlbmRNZXNzYWdlIiwidHJpbSIsImNyZWF0ZSIsImxlbmd0aCIsIm1hcCIsInNlc3Npb24iLCJfaWQiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJob3VyIiwibWludXRlIiwiaGVpZ2h0IiwidmFsdWUiLCJrZXkiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJDaGF0U2VjdGlvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYmFzZTQ0IH0gZnJvbSBcIkAvYXBpL2Jhc2U0NENsaWVudFwiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIENhcmRIZWFkZXIsIENhcmRUaXRsZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IHsgQmFkZ2UgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2JhZGdlXCI7XG5pbXBvcnQgeyBNZXNzYWdlQ2lyY2xlLCBTZW5kLCBVc2VyLCBCb3QsIENpcmNsZSB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdFNlY3Rpb24oeyByZXN0YXVyYW50IH0pIHtcbiAgY29uc3QgW2NoYXRTZXNzaW9ucywgc2V0Q2hhdFNlc3Npb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkU2Vzc2lvbiwgc2V0U2VsZWN0ZWRTZXNzaW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW25ld01lc3NhZ2UsIHNldE5ld01lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt1c2VyU2Nyb2xsaW5nLCBzZXRVc2VyU2Nyb2xsaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgbWVzc2FnZXNFbmRSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IG1lc3NhZ2VzQ29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9hZENoYXRTZXNzaW9ucygpO1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwobG9hZENoYXRTZXNzaW9ucywgNTAwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRTZXNzaW9uKSB7XG4gICAgICBsb2FkTWVzc2FnZXMoKTtcbiAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwobG9hZE1lc3NhZ2VzLCAzMDAwKTtcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9XG4gIH0sIFtzZWxlY3RlZFNlc3Npb25dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghdXNlclNjcm9sbGluZykge1xuICAgICAgc2Nyb2xsVG9Cb3R0b20oKTtcbiAgICB9XG4gIH0sIFttZXNzYWdlc10pO1xuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0IH0gPSBlLnRhcmdldDtcbiAgICBjb25zdCBpc05lYXJCb3R0b20gPSBzY3JvbGxIZWlnaHQgLSBzY3JvbGxUb3AgLSBjbGllbnRIZWlnaHQgPCAxMDA7XG4gICAgc2V0VXNlclNjcm9sbGluZyghaXNOZWFyQm90dG9tKTtcbiAgfTtcblxuICBjb25zdCBzY3JvbGxUb0JvdHRvbSA9ICgpID0+IHtcbiAgICBtZXNzYWdlc0VuZFJlZi5jdXJyZW50Py5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRDaGF0U2Vzc2lvbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYWxsTWVzc2FnZXMgPSBhd2FpdCBiYXNlNDQuZW50aXRpZXMuQ2hhdE1lc3NhZ2UuZmlsdGVyKFxuICAgICAgeyByZXN0YXVyYW50X2lkOiByZXN0YXVyYW50LnJlc3RhdXJhbnRfaWQgfSxcbiAgICAgICctY3JlYXRlZF9kYXRlJyxcbiAgICAgIDUwMFxuICAgICk7XG5cbiAgICAvLyBHcm91cCBieSBzZXNzaW9uX2lkXG4gICAgY29uc3Qgc2Vzc2lvbnNNYXAgPSB7fTtcbiAgICBhbGxNZXNzYWdlcy5mb3JFYWNoKChtc2cpID0+IHtcbiAgICAgIGlmICghc2Vzc2lvbnNNYXBbbXNnLnNlc3Npb25faWRdKSB7XG4gICAgICAgIHNlc3Npb25zTWFwW21zZy5zZXNzaW9uX2lkXSA9IHtcbiAgICAgICAgICBzZXNzaW9uX2lkOiBtc2cuc2Vzc2lvbl9pZCxcbiAgICAgICAgICBjdXN0b21lcl9uYW1lOiBtc2cuY3VzdG9tZXJfbmFtZSxcbiAgICAgICAgICBjdXN0b21lcl9waG9uZTogbXNnLmN1c3RvbWVyX3Bob25lLFxuICAgICAgICAgIGxhc3RfbWVzc2FnZTogbXNnLm1lc3NhZ2UsXG4gICAgICAgICAgbGFzdF9tZXNzYWdlX3RpbWU6IG1zZy5jcmVhdGVkX2RhdGUsXG4gICAgICAgICAgdW5yZWFkX2NvdW50OiAwLFxuICAgICAgICAgIG1lc3NhZ2VzOiBbXVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgc2Vzc2lvbnNNYXBbbXNnLnNlc3Npb25faWRdLm1lc3NhZ2VzLnB1c2gobXNnKTtcbiAgICAgIGlmICghbXNnLmlzX3JlYWQgJiYgbXNnLnNlbmRlcl90eXBlID09PSAnY3VzdG9tZXInKSB7XG4gICAgICAgIHNlc3Npb25zTWFwW21zZy5zZXNzaW9uX2lkXS51bnJlYWRfY291bnQrKztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHNlc3Npb25zID0gT2JqZWN0LnZhbHVlcyhzZXNzaW9uc01hcCkuc29ydCgoYSwgYikgPT5cbiAgICBuZXcgRGF0ZShiLmxhc3RfbWVzc2FnZV90aW1lKSAtIG5ldyBEYXRlKGEubGFzdF9tZXNzYWdlX3RpbWUpXG4gICAgKTtcblxuICAgIHNldENoYXRTZXNzaW9ucyhzZXNzaW9ucyk7XG4gIH07XG5cbiAgY29uc3QgbG9hZE1lc3NhZ2VzID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghc2VsZWN0ZWRTZXNzaW9uKSByZXR1cm47XG4gICAgY29uc3QgbXNncyA9IGF3YWl0IGJhc2U0NC5lbnRpdGllcy5DaGF0TWVzc2FnZS5maWx0ZXIoXG4gICAgICB7IHJlc3RhdXJhbnRfaWQ6IHJlc3RhdXJhbnQucmVzdGF1cmFudF9pZCwgc2Vzc2lvbl9pZDogc2VsZWN0ZWRTZXNzaW9uLnNlc3Npb25faWQgfSxcbiAgICAgICdjcmVhdGVkX2RhdGUnXG4gICAgKTtcbiAgICBzZXRNZXNzYWdlcyhtc2dzKTtcblxuICAgIC8vIE1hcmsgbWVzc2FnZXMgYXMgcmVhZFxuICAgIG1zZ3MuZm9yRWFjaChhc3luYyAobXNnKSA9PiB7XG4gICAgICBpZiAoIW1zZy5pc19yZWFkICYmIG1zZy5zZW5kZXJfdHlwZSA9PT0gJ2N1c3RvbWVyJykge1xuICAgICAgICBhd2FpdCBiYXNlNDQuZW50aXRpZXMuQ2hhdE1lc3NhZ2UudXBkYXRlKG1zZy5pZCwgeyBpc19yZWFkOiB0cnVlIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNlbmRNZXNzYWdlID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghbmV3TWVzc2FnZS50cmltKCkgfHwgIXNlbGVjdGVkU2Vzc2lvbikgcmV0dXJuO1xuXG4gICAgc2V0VXNlclNjcm9sbGluZyhmYWxzZSk7XG4gICAgYXdhaXQgYmFzZTQ0LmVudGl0aWVzLkNoYXRNZXNzYWdlLmNyZWF0ZSh7XG4gICAgICByZXN0YXVyYW50X2lkOiByZXN0YXVyYW50LnJlc3RhdXJhbnRfaWQsXG4gICAgICBjdXN0b21lcl9uYW1lOiBzZWxlY3RlZFNlc3Npb24uY3VzdG9tZXJfbmFtZSxcbiAgICAgIGN1c3RvbWVyX3Bob25lOiBzZWxlY3RlZFNlc3Npb24uY3VzdG9tZXJfcGhvbmUsXG4gICAgICBzZW5kZXJfdHlwZTogXCJyZXN0YXVyYW50XCIsXG4gICAgICBtZXNzYWdlOiBuZXdNZXNzYWdlLnRyaW0oKSxcbiAgICAgIHNlc3Npb25faWQ6IHNlbGVjdGVkU2Vzc2lvbi5zZXNzaW9uX2lkLFxuICAgICAgaXNfcmVhZDogZmFsc2VcbiAgICB9KTtcblxuICAgIHNldE5ld01lc3NhZ2UoXCJcIik7XG4gICAgbG9hZE1lc3NhZ2VzKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ2hhdFNlY3Rpb246MTE3OjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0zIGdhcC02IGgtW2NhbGMoMTAwdmgtMTJyZW0pXVwiPlxuICAgICAgey8qIENoYXQgU2Vzc2lvbnMgTGlzdCAqL31cbiAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ2hhdFNlY3Rpb246MTE5OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi0xXCI+XG4gICAgICAgIDxDYXJkSGVhZGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ2hhdFNlY3Rpb246MTIwOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgPENhcmRUaXRsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0NoYXRTZWN0aW9uOjEyMToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgPE1lc3NhZ2VDaXJjbGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DaGF0U2VjdGlvbjoxMjI6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XG4gICAgICAgICAgICBDdXN0b21lciBDaGF0c1xuICAgICAgICAgIDwvQ2FyZFRpdGxlPlxuICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0NoYXRTZWN0aW9uOjEyNjo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicC0wXCI+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0NoYXRTZWN0aW9uOjEyNzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImRpdmlkZS15IG1heC1oLVtjYWxjKDEwMHZoLTE2cmVtKV0gb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgICB7Y2hhdFNlc3Npb25zLmxlbmd0aCA9PT0gMCA/XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ2hhdFNlY3Rpb246MTI5OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInAtOCB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgPE1lc3NhZ2VDaXJjbGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DaGF0U2VjdGlvbjoxMzA6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0xMiBoLTEyIG14LWF1dG8gbWItMyB0ZXh0LWdyYXktMzAwXCIgLz5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0NoYXRTZWN0aW9uOjEzMToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5ObyBjdXN0b21lciBjaGF0cyB5ZXQ8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PiA6XG5cbiAgICAgICAgICAgIGNoYXRTZXNzaW9ucy5tYXAoKHNlc3Npb24pID0+XG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ2hhdFNlY3Rpb246MTM1OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgIGtleT17c2Vzc2lvbi5zZXNzaW9uX2lkfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRTZXNzaW9uKHNlc3Npb24pfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIHAtNCB0ZXh0LWxlZnQgaG92ZXI6YmctZ3JheS01MCB0cmFuc2l0aW9uLWNvbG9ycyAke1xuICAgICAgICAgICAgc2VsZWN0ZWRTZXNzaW9uPy5zZXNzaW9uX2lkID09PSBzZXNzaW9uLnNlc3Npb25faWQgPyAnYmctb3JhbmdlLTUwJyA6ICcnfWBcbiAgICAgICAgICAgIH0+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DaGF0U2VjdGlvbjoxNDI6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DaGF0U2VjdGlvbjoxNDM6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DaGF0U2VjdGlvbjoxNDQ6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtZnVsbCBiZy1vcmFuZ2UtMTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VXNlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0NoYXRTZWN0aW9uOjE0NToyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtb3JhbmdlLTYwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0NoYXRTZWN0aW9uOjE0NzoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DaGF0U2VjdGlvbjoxNDg6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJjdXN0b21lcl9uYW1lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3Nlc3Npb24/LmlkIHx8IHNlc3Npb24/Ll9pZH0+e3Nlc3Npb24uY3VzdG9tZXJfbmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0NoYXRTZWN0aW9uOjE0OToyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiY3VzdG9tZXJfcGhvbmVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2Vzc2lvbj8uaWQgfHwgc2Vzc2lvbj8uX2lkfT57c2Vzc2lvbi5jdXN0b21lcl9waG9uZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7c2Vzc2lvbi51bnJlYWRfY291bnQgPiAwICYmXG4gICAgICAgICAgICAgICAgPEJhZGdlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ2hhdFNlY3Rpb246MTUzOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYmctb3JhbmdlLTYwMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidW5yZWFkX2NvdW50XCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3Nlc3Npb24/LmlkIHx8IHNlc3Npb24/Ll9pZH0+e3Nlc3Npb24udW5yZWFkX2NvdW50fTwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0NoYXRTZWN0aW9uOjE1NjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTYwMCB0cnVuY2F0ZSBtdC0yXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJsYXN0X21lc3NhZ2VcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2Vzc2lvbj8uaWQgfHwgc2Vzc2lvbj8uX2lkfT57c2Vzc2lvbi5sYXN0X21lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DaGF0U2VjdGlvbjoxNTc6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS00MDAgbXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUoc2Vzc2lvbi5sYXN0X21lc3NhZ2VfdGltZSkudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7IGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcgfSl9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICA8L0NhcmQ+XG5cbiAgICAgIHsvKiBDaGF0IE1lc3NhZ2VzICovfVxuICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DaGF0U2VjdGlvbjoxNjg6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1kOmNvbC1zcGFuLTJcIj5cbiAgICAgICAge3NlbGVjdGVkU2Vzc2lvbiA/XG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Q2FyZEhlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0NoYXRTZWN0aW9uOjE3MToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImJvcmRlci1iXCI+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DaGF0U2VjdGlvbjoxNzI6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DaGF0U2VjdGlvbjoxNzM6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtZnVsbCBiZy1vcmFuZ2UtMTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8VXNlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0NoYXRTZWN0aW9uOjE3NDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtb3JhbmdlLTYwMFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0NoYXRTZWN0aW9uOjE3NjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0NoYXRTZWN0aW9uOjE3NzoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiY3VzdG9tZXJfbmFtZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtzZWxlY3RlZFNlc3Npb24/LmlkIHx8IHNlbGVjdGVkU2Vzc2lvbj8uX2lkfT57c2VsZWN0ZWRTZXNzaW9uLmN1c3RvbWVyX25hbWV9PC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0NoYXRTZWN0aW9uOjE3ODoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiY3VzdG9tZXJfcGhvbmVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2VsZWN0ZWRTZXNzaW9uPy5pZCB8fCBzZWxlY3RlZFNlc3Npb24/Ll9pZH0+e3NlbGVjdGVkU2Vzc2lvbi5jdXN0b21lcl9waG9uZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ2hhdFNlY3Rpb246MTgyOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicC0wIGZsZXggZmxleC1jb2xcIiBzdHlsZT17eyBoZWlnaHQ6ICdjYWxjKDEwMCUgLSA1cmVtKScgfX0+XG4gICAgICAgICAgICAgIHsvKiBNZXNzYWdlcyAqL31cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0NoYXRTZWN0aW9uOjE4NDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICByZWY9e21lc3NhZ2VzQ29udGFpbmVyUmVmfVxuICAgICAgICAgICAgb25TY3JvbGw9e2hhbmRsZVNjcm9sbH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBvdmVyZmxvdy15LWF1dG8gcC00IHNwYWNlLXktMyBiZy1ncmF5LTUwXCIgZGF0YS1jb2xsZWN0aW9uLWlkPVwiQ2hhdE1lc3NhZ2VcIj5cblxuICAgICAgICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1zZykgPT5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0NoYXRTZWN0aW9uOjE5MDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGtleT17bXNnLmlkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4ICR7bXNnLnNlbmRlcl90eXBlID09PSAncmVzdGF1cmFudCcgPyAnanVzdGlmeS1lbmQnIDogJ2p1c3RpZnktc3RhcnQnfWB9IGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXttc2c/LmlkfT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ2hhdFNlY3Rpb246MTk0OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BtYXgtdy1bNzUlXSByb3VuZGVkLTJ4bCBweC00IHB5LTIgJHtcbiAgICAgICAgICAgICAgICBtc2cuc2VuZGVyX3R5cGUgPT09ICdyZXN0YXVyYW50JyA/XG4gICAgICAgICAgICAgICAgJ2JnLW9yYW5nZS02MDAgdGV4dC13aGl0ZScgOlxuICAgICAgICAgICAgICAgIG1zZy5zZW5kZXJfdHlwZSA9PT0gJ2FpJyA/XG4gICAgICAgICAgICAgICAgJ2JnLWJsdWUtMTAwIHRleHQtYmx1ZS05MDAgYm9yZGVyIGJvcmRlci1ibHVlLTIwMCcgOlxuICAgICAgICAgICAgICAgICdiZy13aGl0ZSB0ZXh0LWdyYXktOTAwIGJvcmRlciBib3JkZXItZ3JheS0yMDAnfWBcbiAgICAgICAgICAgICAgICB9PlxuXG4gICAgICAgICAgICAgICAgICAgICAge21zZy5zZW5kZXJfdHlwZSA9PT0gJ2FpJyAmJlxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0NoYXRTZWN0aW9uOjIwNDoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBtYi0xIHRleHQteHMgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvdCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0NoYXRTZWN0aW9uOjIwNToyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTMgaC0zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQUkgQXNzaXN0YW50XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0NoYXRTZWN0aW9uOjIwOToyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc21cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIm1lc3NhZ2VcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17bXNnPy5pZH0+e21zZy5tZXNzYWdlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0NoYXRTZWN0aW9uOjIxMDoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YHRleHQteHMgbXQtMSAke21zZy5zZW5kZXJfdHlwZSA9PT0gJ3Jlc3RhdXJhbnQnID8gJ3RleHQtb3JhbmdlLTIwMCcgOiAndGV4dC1ncmF5LTQwMCd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUobXNnLmNyZWF0ZWRfZGF0ZSkudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7IGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DaGF0U2VjdGlvbjoyMTY6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiByZWY9e21lc3NhZ2VzRW5kUmVmfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogSW5wdXQgKi99XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DaGF0U2VjdGlvbjoyMjA6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyLXQgYmctd2hpdGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ2hhdFNlY3Rpb246MjIxOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgPElucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ2hhdFNlY3Rpb246MjIyOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlLi4uXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmV3TWVzc2FnZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld01lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiBlLmtleSA9PT0gJ0VudGVyJyAmJiBoYW5kbGVTZW5kTWVzc2FnZSgpfSAvPlxuXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ2hhdFNlY3Rpb246MjI4OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZW5kTWVzc2FnZX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IW5ld01lc3NhZ2UudHJpbSgpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1vcmFuZ2UtNjAwIHRvLW9yYW5nZS01MDBcIj5cblxuICAgICAgICAgICAgICAgICAgICA8U2VuZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL0NoYXRTZWN0aW9uOjIzMzoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgPC8+IDpcblxuICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DaGF0U2VjdGlvbjoyNDA6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1mdWxsXCI+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvQ2hhdFNlY3Rpb246MjQxOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgPE1lc3NhZ2VDaXJjbGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DaGF0U2VjdGlvbjoyNDI6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0xNiBoLTE2IG14LWF1dG8gbWItNCB0ZXh0LWdyYXktMzAwXCIgLz5cbiAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9DaGF0U2VjdGlvbjoyNDM6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+U2VsZWN0IGEgY2hhdCB0byBzdGFydCBtZXNzYWdpbmc8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICB9XG4gICAgICA8L0NhcmQ+XG4gICAgPC9kaXY+KTtcblxufSJdLCJmaWxlIjoiL2FwcC9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvQ2hhdFNlY3Rpb24uanN4In0=