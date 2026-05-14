import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/dashboard/SupportChatSection.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/dashboard/SupportChatSection.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"]; const useRef = __vite__cjsImport3_react["useRef"];
import { base44 } from "/src/api/base44Client.js";
import { Card, CardContent, CardHeader, CardTitle } from "/src/components/ui/card.jsx";
import { Button } from "/src/components/ui/button.jsx";
import { Input } from "/src/components/ui/input.jsx";
import { Badge } from "/src/components/ui/badge.jsx";
import { MessageCircle, Send, HeadphonesIcon, Bot, ExternalLink } from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
import { createPageUrl } from "/src/utils/index.ts";
export default function SupportChatSection({ restaurant, user, id }) {
  _s();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [sessionId, setSessionId] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);
  const suggestions = [
    { label: "Billing Issue", value: "billing_issue", category: "billing_issue" },
    { label: "Plan Upgrade", value: "plan_upgrade", category: "plan_upgrade" },
    { label: "Order Sync Problem", value: "order_sync", category: "order_sync" },
    { label: "QR Not Working", value: "qr_not_working", category: "qr_not_working" },
    { label: "Technical Support", value: "technical_support", category: "technical_support" },
    { label: "Create Support Ticket", value: "escalate", category: "other" }
  ];
  useEffect(() => {
    initializeSession();
  }, []);
  useEffect(() => {
    if (sessionId) {
      loadMessages();
      const interval = setInterval(loadMessages, 3e3);
      return () => clearInterval(interval);
    }
  }, [sessionId]);
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const initializeSession = async () => {
    const existingSessions = await base44.entities.RestaurantSupportChat.filter(
      { restaurant_id: restaurant.restaurant_id, status: "open" },
      "-created_date",
      1
    );
    if (existingSessions.length > 0) {
      setSessionId(existingSessions[0].session_id);
    } else {
      const newSessionId = `restaurant_${restaurant.restaurant_id}_${Date.now()}`;
      setSessionId(newSessionId);
      setTimeout(async () => {
        await base44.entities.RestaurantSupportChat.create({
          restaurant_id: restaurant.restaurant_id,
          restaurant_name: restaurant.name,
          sender_type: "ai",
          sender_email: "ai@axoradigi.com",
          message: `Hello Restaurant Partner 👋

How can AxoraDigi Support assist you?

Please select from options below or describe your issue.`,
          session_id: newSessionId,
          issue_type: "general",
          status: "open",
          is_read: false
        });
        loadMessages();
      }, 500);
    }
  };
  const loadMessages = async () => {
    if (!sessionId) return;
    const msgs = await base44.entities.RestaurantSupportChat.filter(
      { session_id: sessionId },
      "created_date"
    );
    setMessages(msgs);
    msgs.forEach(async (msg) => {
      if (!msg.is_read && msg.sender_type === "admin") {
        await base44.entities.RestaurantSupportChat.update(msg.id, { is_read: true });
      }
    });
  };
  const handleSuggestionClick = async (suggestion) => {
    setShowSuggestions(false);
    if (suggestion.value === "escalate") {
      await createSupportTicket(suggestion.category, "Restaurant requested support ticket");
      await base44.entities.RestaurantSupportChat.create({
        restaurant_id: restaurant.restaurant_id,
        restaurant_name: restaurant.name,
        sender_type: "ai",
        sender_email: "ai@axoradigi.com",
        message: "Support ticket created! Our team will respond within 2-4 hours. You can continue chatting here.",
        session_id: sessionId,
        issue_type: suggestion.category,
        status: "in_progress",
        is_read: false
      });
      loadMessages();
      return;
    }
    const responses = {
      billing_issue: "I understand you have a billing concern. Let me help:\n\n1. Check Billing section in dashboard\n2. View transaction history\n3. Download invoices\n\nIf issue persists, I'll create a ticket for our billing team.",
      plan_upgrade: "Great! Looking to upgrade? 🚀\n\nCurrent Plan: " + restaurant.subscription_plan + "\n\nAvailable Plans:\n• Basic - ₹999/month\n• Pro - ₹2499/month\n• Multi-Outlet - Custom\n\nGo to Billing → Upgrade Plan or I can connect you with our team.",
      order_sync: "Order sync issue? Let's troubleshoot:\n\n1. Refresh dashboard (F5)\n2. Check internet connection\n3. Verify active subscription\n4. Clear browser cache\n\nIf problem continues, I'll escalate to tech team.",
      qr_not_working: "QR Code not working? Try:\n\n1. Download fresh QR from QR Codes section\n2. Ensure QR is scanning correct URL\n3. Test with different QR scanner\n4. Regenerate QR code\n\nStill facing issue? I'll create tech ticket.",
      technical_support: "Technical issue? I'm here to help!\n\nCommon fixes:\n• Clear browser cache\n• Use Chrome/Firefox\n• Check internet speed\n• Disable ad blockers\n\nDescribe your issue and I'll assist or escalate if needed."
    };
    await base44.entities.RestaurantSupportChat.create({
      restaurant_id: restaurant.restaurant_id,
      restaurant_name: restaurant.name,
      sender_type: "restaurant",
      sender_email: user.email,
      message: suggestion.label,
      session_id: sessionId,
      issue_type: suggestion.category,
      status: "open",
      is_read: false
    });
    setTimeout(async () => {
      await base44.entities.RestaurantSupportChat.create({
        restaurant_id: restaurant.restaurant_id,
        restaurant_name: restaurant.name,
        sender_type: "ai",
        sender_email: "ai@axoradigi.com",
        message: responses[suggestion.value] || "Let me help you with that.",
        session_id: sessionId,
        issue_type: suggestion.category,
        status: "open",
        is_read: false
      });
      loadMessages();
    }, 1e3);
  };
  const createSupportTicket = async (category, description) => {
    const ticketId = `TICK_${Date.now()}`;
    await base44.entities.SupportTicket.create({
      ticket_id: ticketId,
      user_type: "restaurant",
      customer_name: restaurant.name,
      customer_phone: restaurant.phone,
      restaurant_id: restaurant.restaurant_id,
      restaurant_name: restaurant.name,
      issue_category: category,
      description,
      status: "open",
      priority: "medium",
      session_id: sessionId,
      metadata: {
        plan: restaurant.subscription_plan,
        subscription_status: restaurant.subscription_status,
        last_payment: restaurant.subscription_expires_at,
        contact: restaurant.phone
      }
    });
  };
  const handleSendMessage = async () => {
    if (!newMessage.trim() || isSending) return;
    setIsSending(true);
    try {
      await base44.entities.RestaurantSupportChat.create({
        restaurant_id: restaurant.restaurant_id,
        restaurant_name: restaurant.name,
        sender_type: "restaurant",
        sender_email: user.email,
        message: newMessage.trim(),
        session_id: sessionId,
        issue_type: "general",
        status: "open",
        is_read: false
      });
      setTimeout(async () => {
        try {
          const aiResponse = await base44.integrations.Core.InvokeLLM({
            prompt: `You are AxoraDigi support AI. Restaurant owner (${restaurant.name}) said: "${newMessage}"
            
            Current plan: ${restaurant.subscription_plan}
            
            Provide helpful response (2-3 sentences). For billing/technical issues, suggest creating ticket.
            Keep professional and friendly tone.`,
            add_context_from_internet: false
          });
          await base44.entities.RestaurantSupportChat.create({
            restaurant_id: restaurant.restaurant_id,
            restaurant_name: restaurant.name,
            sender_type: "ai",
            sender_email: "ai@axoradigi.com",
            message: aiResponse,
            session_id: sessionId,
            issue_type: "general",
            status: "open",
            is_read: false
          });
          loadMessages();
        } catch (e) {
          console.error("AI response failed:", e);
        }
      }, 1e3);
      setNewMessage("");
      loadMessages();
    } catch (error) {
      console.error("Failed to send message:", error);
    }
    setIsSending(false);
  };
  const unreadAdminMessages = messages.filter((m) => !m.is_read && m.sender_type === "admin").length;
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SupportChatSection:229:4", "data-dynamic-content": "true", className: "space-y-6", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SupportChatSection:230:6", "data-dynamic-content": "true", className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SupportChatSection:231:8", "data-dynamic-content": "false", children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "components/dashboard/SupportChatSection:232:10", "data-dynamic-content": "false", className: "text-2xl font-bold text-gray-900 flex items-center gap-2", children: "RestroSaathi Support" }, void 0, false, {
          fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
          lineNumber: 251,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SupportChatSection:236:10", "data-dynamic-content": "false", className: "text-gray-600 mt-1", children: "Get help from our support team" }, void 0, false, {
          fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
          lineNumber: 255,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
        lineNumber: 250,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        Button,
        {
          "data-source-location": "components/dashboard/SupportChatSection:238:8",
          "data-dynamic-content": "true",
          variant: "outline",
          onClick: () => window.open(createPageUrl("TeamChat") + `?session=${sessionId}`, "_blank"),
          children: [
            /* @__PURE__ */ jsxDEV(ExternalLink, { "data-source-location": "components/dashboard/SupportChatSection:242:10", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
              fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
              lineNumber: 261,
              columnNumber: 11
            }, this),
            "Open in New Tab"
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
          lineNumber: 257,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
      lineNumber: 249,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/SupportChatSection:247:6", "data-dynamic-content": "true", children: [
      /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "components/dashboard/SupportChatSection:248:8", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "components/dashboard/SupportChatSection:249:10", "data-dynamic-content": "true", className: "flex items-center gap-2", children: [
        "Support Chat",
        unreadAdminMessages > 0 && /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "components/dashboard/SupportChatSection:252:12", "data-dynamic-content": "true", className: "bg-orange-600", "data-collection-item-field": "unreadAdminMessages", "data-collection-item-id": id, children: [
          unreadAdminMessages,
          " new"
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
          lineNumber: 271,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
        lineNumber: 268,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
        lineNumber: 267,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/SupportChatSection:256:8", "data-dynamic-content": "true", className: "p-0", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SupportChatSection:257:10", "data-dynamic-content": "true", className: "h-[500px] overflow-y-auto p-4 space-y-3 bg-gray-50", "data-collection-id": "RestaurantSupportChat", children: [
          messages.length === 0 ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SupportChatSection:259:12", "data-dynamic-content": "false", className: "text-center text-gray-500 mt-20", children: [
            /* @__PURE__ */ jsxDEV(HeadphonesIcon, { "data-source-location": "components/dashboard/SupportChatSection:260:16", "data-dynamic-content": "false", className: "w-12 h-12 mx-auto mb-3 text-gray-300" }, void 0, false, {
              fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
              lineNumber: 279,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SupportChatSection:261:16", "data-dynamic-content": "false", children: "Start a conversation with support" }, void 0, false, {
              fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
              lineNumber: 280,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
            lineNumber: 278,
            columnNumber: 13
          }, this) : messages.map(
            (msg) => /* @__PURE__ */ jsxDEV(
              "div",
              {
                "data-source-location": "components/dashboard/SupportChatSection:265:12",
                "data-dynamic-content": "true",
                className: `flex ${msg.sender_type === "restaurant" ? "justify-end" : "justify-start"}`,
                "data-collection-item-id": msg?.id,
                children: /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    "data-source-location": "components/dashboard/SupportChatSection:269:18",
                    "data-dynamic-content": "true",
                    className: `max-w-[75%] rounded-2xl px-4 py-2 ${msg.sender_type === "restaurant" ? "bg-orange-600 text-white" : msg.sender_type === "ai" ? "bg-blue-100 text-blue-900 border border-blue-200" : "bg-green-100 text-green-900 border border-green-200"}`,
                    children: [
                      msg.sender_type === "ai" && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SupportChatSection:279:16", "data-dynamic-content": "false", className: "flex items-center gap-1 mb-1 text-xs font-medium", children: [
                        /* @__PURE__ */ jsxDEV(Bot, { "data-source-location": "components/dashboard/SupportChatSection:280:24", "data-dynamic-content": "false", className: "w-3 h-3" }, void 0, false, {
                          fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
                          lineNumber: 299,
                          columnNumber: 25
                        }, this),
                        "AI Assistant"
                      ] }, void 0, true, {
                        fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
                        lineNumber: 298,
                        columnNumber: 17
                      }, this),
                      msg.sender_type === "admin" && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SupportChatSection:285:16", "data-dynamic-content": "false", className: "flex items-center gap-1 mb-1 text-xs font-medium", children: [
                        /* @__PURE__ */ jsxDEV(HeadphonesIcon, { "data-source-location": "components/dashboard/SupportChatSection:286:24", "data-dynamic-content": "false", className: "w-3 h-3" }, void 0, false, {
                          fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
                          lineNumber: 305,
                          columnNumber: 25
                        }, this),
                        "Support Team"
                      ] }, void 0, true, {
                        fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
                        lineNumber: 304,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SupportChatSection:290:20", "data-dynamic-content": "true", className: "text-sm whitespace-pre-line", "data-collection-item-field": "message", "data-collection-item-id": msg?.id, children: msg.message }, void 0, false, {
                        fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
                        lineNumber: 309,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SupportChatSection:291:20", "data-dynamic-content": "true", className: `text-xs mt-1 ${msg.sender_type === "restaurant" ? "text-orange-200" : "text-gray-500"}`, children: new Date(msg.created_date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }, void 0, false, {
                        fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
                        lineNumber: 310,
                        columnNumber: 21
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
                    lineNumber: 288,
                    columnNumber: 19
                  },
                  this
                )
              },
              msg.id,
              false,
              {
                fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
                lineNumber: 284,
                columnNumber: 13
              },
              this
            )
          ),
          showSuggestions && messages.length > 0 && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SupportChatSection:300:12", "data-dynamic-content": "true", className: "space-y-2", children: suggestions.map(
            (suggestion, __arrIdx__) => /* @__PURE__ */ jsxDEV(
              "button",
              {
                "data-source-location": "components/dashboard/SupportChatSection:302:14",
                "data-dynamic-content": "true",
                onClick: () => handleSuggestionClick(suggestion),
                className: "block w-full text-left px-4 py-2 bg-white border border-orange-200 rounded-lg hover:bg-orange-50 text-sm text-gray-700 transition-colors",
                "data-arr-index": __arrIdx__,
                "data-arr-variable-name": "suggestions",
                "data-arr-field": "label",
                children: suggestion.label
              },
              suggestion.value,
              false,
              {
                fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
                lineNumber: 321,
                columnNumber: 15
              },
              this
            )
          ) }, void 0, false, {
            fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
            lineNumber: 319,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SupportChatSection:313:12", "data-dynamic-content": "true", ref: messagesEndRef }, void 0, false, {
            fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
            lineNumber: 332,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
          lineNumber: 276,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SupportChatSection:316:10", "data-dynamic-content": "true", className: "p-4 border-t bg-white", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SupportChatSection:317:12", "data-dynamic-content": "true", className: "flex gap-2", children: [
          /* @__PURE__ */ jsxDEV(
            Input,
            {
              "data-source-location": "components/dashboard/SupportChatSection:318:14",
              "data-dynamic-content": "true",
              placeholder: "Type your message...",
              value: newMessage,
              onChange: (e) => setNewMessage(e.target.value),
              onKeyPress: (e) => e.key === "Enter" && handleSendMessage()
            },
            void 0,
            false,
            {
              fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
              lineNumber: 337,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Button,
            {
              "data-source-location": "components/dashboard/SupportChatSection:324:14",
              "data-dynamic-content": "true",
              onClick: handleSendMessage,
              disabled: isSending || !newMessage.trim(),
              className: "bg-gradient-to-r from-orange-600 to-orange-500",
              children: /* @__PURE__ */ jsxDEV(Send, { "data-source-location": "components/dashboard/SupportChatSection:329:16", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
                lineNumber: 348,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
              lineNumber: 343,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
          lineNumber: 336,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
          lineNumber: 335,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
        lineNumber: 275,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
      lineNumber: 266,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/dashboard/SupportChatSection.jsx",
    lineNumber: 248,
    columnNumber: 5
  }, this);
}
_s(SupportChatSection, "7AFVLPImHyNHPRu7P1EzimK3gTg=");
_c = SupportChatSection;
var _c;
$RefreshReg$(_c, "SupportChatSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/dashboard/SupportChatSection.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/dashboard/SupportChatSection.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUE7QUFBQTtBQUFBO0FBQUEsV0F1RkE7QUFBQSxPQXpHRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBMEdBO0FBRUo7QUFBQzdFLEdBdlV1Qkosb0JBQWtCO0FBQUF1RyxLQUFsQnZHO0FBQWtCLElBQUF1RztBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsImJhc2U0NCIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJCdXR0b24iLCJJbnB1dCIsIkJhZGdlIiwiTWVzc2FnZUNpcmNsZSIsIlNlbmQiLCJIZWFkcGhvbmVzSWNvbiIsIkJvdCIsIkV4dGVybmFsTGluayIsImNyZWF0ZVBhZ2VVcmwiLCJTdXBwb3J0Q2hhdFNlY3Rpb24iLCJyZXN0YXVyYW50IiwidXNlciIsImlkIiwiX3MiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwibmV3TWVzc2FnZSIsInNldE5ld01lc3NhZ2UiLCJzZXNzaW9uSWQiLCJzZXRTZXNzaW9uSWQiLCJpc1NlbmRpbmciLCJzZXRJc1NlbmRpbmciLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJtZXNzYWdlc0VuZFJlZiIsInN1Z2dlc3Rpb25zIiwibGFiZWwiLCJ2YWx1ZSIsImNhdGVnb3J5IiwiaW5pdGlhbGl6ZVNlc3Npb24iLCJsb2FkTWVzc2FnZXMiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNjcm9sbFRvQm90dG9tIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJleGlzdGluZ1Nlc3Npb25zIiwiZW50aXRpZXMiLCJSZXN0YXVyYW50U3VwcG9ydENoYXQiLCJmaWx0ZXIiLCJyZXN0YXVyYW50X2lkIiwic3RhdHVzIiwibGVuZ3RoIiwic2Vzc2lvbl9pZCIsIm5ld1Nlc3Npb25JZCIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiY3JlYXRlIiwicmVzdGF1cmFudF9uYW1lIiwibmFtZSIsInNlbmRlcl90eXBlIiwic2VuZGVyX2VtYWlsIiwibWVzc2FnZSIsImlzc3VlX3R5cGUiLCJpc19yZWFkIiwibXNncyIsImZvckVhY2giLCJtc2ciLCJ1cGRhdGUiLCJoYW5kbGVTdWdnZXN0aW9uQ2xpY2siLCJzdWdnZXN0aW9uIiwiY3JlYXRlU3VwcG9ydFRpY2tldCIsInJlc3BvbnNlcyIsImJpbGxpbmdfaXNzdWUiLCJwbGFuX3VwZ3JhZGUiLCJzdWJzY3JpcHRpb25fcGxhbiIsIm9yZGVyX3N5bmMiLCJxcl9ub3Rfd29ya2luZyIsInRlY2huaWNhbF9zdXBwb3J0IiwiZW1haWwiLCJkZXNjcmlwdGlvbiIsInRpY2tldElkIiwiU3VwcG9ydFRpY2tldCIsInRpY2tldF9pZCIsInVzZXJfdHlwZSIsImN1c3RvbWVyX25hbWUiLCJjdXN0b21lcl9waG9uZSIsInBob25lIiwiaXNzdWVfY2F0ZWdvcnkiLCJwcmlvcml0eSIsIm1ldGFkYXRhIiwicGxhbiIsInN1YnNjcmlwdGlvbl9zdGF0dXMiLCJsYXN0X3BheW1lbnQiLCJzdWJzY3JpcHRpb25fZXhwaXJlc19hdCIsImNvbnRhY3QiLCJoYW5kbGVTZW5kTWVzc2FnZSIsInRyaW0iLCJhaVJlc3BvbnNlIiwiaW50ZWdyYXRpb25zIiwiQ29yZSIsIkludm9rZUxMTSIsInByb21wdCIsImFkZF9jb250ZXh0X2Zyb21faW50ZXJuZXQiLCJlIiwiY29uc29sZSIsImVycm9yIiwidW5yZWFkQWRtaW5NZXNzYWdlcyIsIm0iLCJ3aW5kb3ciLCJvcGVuIiwibWFwIiwiY3JlYXRlZF9kYXRlIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiaG91ciIsIm1pbnV0ZSIsIl9fYXJySWR4X18iLCJ0YXJnZXQiLCJrZXkiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJTdXBwb3J0Q2hhdFNlY3Rpb24uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGJhc2U0NCB9IGZyb20gXCJAL2FwaS9iYXNlNDRDbGllbnRcIjtcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9iYWRnZVwiO1xuaW1wb3J0IHsgTWVzc2FnZUNpcmNsZSwgU2VuZCwgSGVhZHBob25lc0ljb24sIEJvdCwgRXh0ZXJuYWxMaW5rIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUGFnZVVybCB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdXBwb3J0Q2hhdFNlY3Rpb24oeyByZXN0YXVyYW50LCB1c2VyLCBpZCB9KSB7XG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbmV3TWVzc2FnZSwgc2V0TmV3TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Nlc3Npb25JZCwgc2V0U2Vzc2lvbklkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXNTZW5kaW5nLCBzZXRJc1NlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd1N1Z2dlc3Rpb25zLCBzZXRTaG93U3VnZ2VzdGlvbnNdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IG1lc3NhZ2VzRW5kUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IHN1Z2dlc3Rpb25zID0gW1xuICB7IGxhYmVsOiBcIkJpbGxpbmcgSXNzdWVcIiwgdmFsdWU6IFwiYmlsbGluZ19pc3N1ZVwiLCBjYXRlZ29yeTogXCJiaWxsaW5nX2lzc3VlXCIgfSxcbiAgeyBsYWJlbDogXCJQbGFuIFVwZ3JhZGVcIiwgdmFsdWU6IFwicGxhbl91cGdyYWRlXCIsIGNhdGVnb3J5OiBcInBsYW5fdXBncmFkZVwiIH0sXG4gIHsgbGFiZWw6IFwiT3JkZXIgU3luYyBQcm9ibGVtXCIsIHZhbHVlOiBcIm9yZGVyX3N5bmNcIiwgY2F0ZWdvcnk6IFwib3JkZXJfc3luY1wiIH0sXG4gIHsgbGFiZWw6IFwiUVIgTm90IFdvcmtpbmdcIiwgdmFsdWU6IFwicXJfbm90X3dvcmtpbmdcIiwgY2F0ZWdvcnk6IFwicXJfbm90X3dvcmtpbmdcIiB9LFxuICB7IGxhYmVsOiBcIlRlY2huaWNhbCBTdXBwb3J0XCIsIHZhbHVlOiBcInRlY2huaWNhbF9zdXBwb3J0XCIsIGNhdGVnb3J5OiBcInRlY2huaWNhbF9zdXBwb3J0XCIgfSxcbiAgeyBsYWJlbDogXCJDcmVhdGUgU3VwcG9ydCBUaWNrZXRcIiwgdmFsdWU6IFwiZXNjYWxhdGVcIiwgY2F0ZWdvcnk6IFwib3RoZXJcIiB9XTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaW5pdGlhbGl6ZVNlc3Npb24oKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlc3Npb25JZCkge1xuICAgICAgbG9hZE1lc3NhZ2VzKCk7XG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGxvYWRNZXNzYWdlcywgMzAwMCk7XG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfVxuICB9LCBbc2Vzc2lvbklkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzY3JvbGxUb0JvdHRvbSgpO1xuICB9LCBbbWVzc2FnZXNdKTtcblxuICBjb25zdCBzY3JvbGxUb0JvdHRvbSA9ICgpID0+IHtcbiAgICBtZXNzYWdlc0VuZFJlZi5jdXJyZW50Py5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICB9O1xuXG4gIGNvbnN0IGluaXRpYWxpemVTZXNzaW9uID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nU2Vzc2lvbnMgPSBhd2FpdCBiYXNlNDQuZW50aXRpZXMuUmVzdGF1cmFudFN1cHBvcnRDaGF0LmZpbHRlcihcbiAgICAgIHsgcmVzdGF1cmFudF9pZDogcmVzdGF1cmFudC5yZXN0YXVyYW50X2lkLCBzdGF0dXM6IFwib3BlblwiIH0sXG4gICAgICAnLWNyZWF0ZWRfZGF0ZScsXG4gICAgICAxXG4gICAgKTtcblxuICAgIGlmIChleGlzdGluZ1Nlc3Npb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIHNldFNlc3Npb25JZChleGlzdGluZ1Nlc3Npb25zWzBdLnNlc3Npb25faWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuZXdTZXNzaW9uSWQgPSBgcmVzdGF1cmFudF8ke3Jlc3RhdXJhbnQucmVzdGF1cmFudF9pZH1fJHtEYXRlLm5vdygpfWA7XG4gICAgICBzZXRTZXNzaW9uSWQobmV3U2Vzc2lvbklkKTtcblxuICAgICAgLy8gU2VuZCBBSSB3ZWxjb21lIG1lc3NhZ2VcbiAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBiYXNlNDQuZW50aXRpZXMuUmVzdGF1cmFudFN1cHBvcnRDaGF0LmNyZWF0ZSh7XG4gICAgICAgICAgcmVzdGF1cmFudF9pZDogcmVzdGF1cmFudC5yZXN0YXVyYW50X2lkLFxuICAgICAgICAgIHJlc3RhdXJhbnRfbmFtZTogcmVzdGF1cmFudC5uYW1lLFxuICAgICAgICAgIHNlbmRlcl90eXBlOiBcImFpXCIsXG4gICAgICAgICAgc2VuZGVyX2VtYWlsOiBcImFpQGF4b3JhZGlnaS5jb21cIixcbiAgICAgICAgICBtZXNzYWdlOiBgSGVsbG8gUmVzdGF1cmFudCBQYXJ0bmVyIPCfkYtcXG5cXG5Ib3cgY2FuIEF4b3JhRGlnaSBTdXBwb3J0IGFzc2lzdCB5b3U/XFxuXFxuUGxlYXNlIHNlbGVjdCBmcm9tIG9wdGlvbnMgYmVsb3cgb3IgZGVzY3JpYmUgeW91ciBpc3N1ZS5gLFxuICAgICAgICAgIHNlc3Npb25faWQ6IG5ld1Nlc3Npb25JZCxcbiAgICAgICAgICBpc3N1ZV90eXBlOiBcImdlbmVyYWxcIixcbiAgICAgICAgICBzdGF0dXM6IFwib3BlblwiLFxuICAgICAgICAgIGlzX3JlYWQ6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBsb2FkTWVzc2FnZXMoKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGxvYWRNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXNlc3Npb25JZCkgcmV0dXJuO1xuICAgIGNvbnN0IG1zZ3MgPSBhd2FpdCBiYXNlNDQuZW50aXRpZXMuUmVzdGF1cmFudFN1cHBvcnRDaGF0LmZpbHRlcihcbiAgICAgIHsgc2Vzc2lvbl9pZDogc2Vzc2lvbklkIH0sXG4gICAgICAnY3JlYXRlZF9kYXRlJ1xuICAgICk7XG4gICAgc2V0TWVzc2FnZXMobXNncyk7XG5cbiAgICBtc2dzLmZvckVhY2goYXN5bmMgKG1zZykgPT4ge1xuICAgICAgaWYgKCFtc2cuaXNfcmVhZCAmJiBtc2cuc2VuZGVyX3R5cGUgPT09ICdhZG1pbicpIHtcbiAgICAgICAgYXdhaXQgYmFzZTQ0LmVudGl0aWVzLlJlc3RhdXJhbnRTdXBwb3J0Q2hhdC51cGRhdGUobXNnLmlkLCB7IGlzX3JlYWQ6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VnZ2VzdGlvbkNsaWNrID0gYXN5bmMgKHN1Z2dlc3Rpb24pID0+IHtcbiAgICBzZXRTaG93U3VnZ2VzdGlvbnMoZmFsc2UpO1xuXG4gICAgaWYgKHN1Z2dlc3Rpb24udmFsdWUgPT09IFwiZXNjYWxhdGVcIikge1xuICAgICAgYXdhaXQgY3JlYXRlU3VwcG9ydFRpY2tldChzdWdnZXN0aW9uLmNhdGVnb3J5LCBcIlJlc3RhdXJhbnQgcmVxdWVzdGVkIHN1cHBvcnQgdGlja2V0XCIpO1xuICAgICAgYXdhaXQgYmFzZTQ0LmVudGl0aWVzLlJlc3RhdXJhbnRTdXBwb3J0Q2hhdC5jcmVhdGUoe1xuICAgICAgICByZXN0YXVyYW50X2lkOiByZXN0YXVyYW50LnJlc3RhdXJhbnRfaWQsXG4gICAgICAgIHJlc3RhdXJhbnRfbmFtZTogcmVzdGF1cmFudC5uYW1lLFxuICAgICAgICBzZW5kZXJfdHlwZTogXCJhaVwiLFxuICAgICAgICBzZW5kZXJfZW1haWw6IFwiYWlAYXhvcmFkaWdpLmNvbVwiLFxuICAgICAgICBtZXNzYWdlOiBcIlN1cHBvcnQgdGlja2V0IGNyZWF0ZWQhIE91ciB0ZWFtIHdpbGwgcmVzcG9uZCB3aXRoaW4gMi00IGhvdXJzLiBZb3UgY2FuIGNvbnRpbnVlIGNoYXR0aW5nIGhlcmUuXCIsXG4gICAgICAgIHNlc3Npb25faWQ6IHNlc3Npb25JZCxcbiAgICAgICAgaXNzdWVfdHlwZTogc3VnZ2VzdGlvbi5jYXRlZ29yeSxcbiAgICAgICAgc3RhdHVzOiBcImluX3Byb2dyZXNzXCIsXG4gICAgICAgIGlzX3JlYWQ6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIGxvYWRNZXNzYWdlcygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3BvbnNlcyA9IHtcbiAgICAgIGJpbGxpbmdfaXNzdWU6IFwiSSB1bmRlcnN0YW5kIHlvdSBoYXZlIGEgYmlsbGluZyBjb25jZXJuLiBMZXQgbWUgaGVscDpcXG5cXG4xLiBDaGVjayBCaWxsaW5nIHNlY3Rpb24gaW4gZGFzaGJvYXJkXFxuMi4gVmlldyB0cmFuc2FjdGlvbiBoaXN0b3J5XFxuMy4gRG93bmxvYWQgaW52b2ljZXNcXG5cXG5JZiBpc3N1ZSBwZXJzaXN0cywgSSdsbCBjcmVhdGUgYSB0aWNrZXQgZm9yIG91ciBiaWxsaW5nIHRlYW0uXCIsXG4gICAgICBwbGFuX3VwZ3JhZGU6IFwiR3JlYXQhIExvb2tpbmcgdG8gdXBncmFkZT8g8J+agFxcblxcbkN1cnJlbnQgUGxhbjogXCIgKyByZXN0YXVyYW50LnN1YnNjcmlwdGlvbl9wbGFuICsgXCJcXG5cXG5BdmFpbGFibGUgUGxhbnM6XFxu4oCiIEJhc2ljIC0g4oK5OTk5L21vbnRoXFxu4oCiIFBybyAtIOKCuTI0OTkvbW9udGhcXG7igKIgTXVsdGktT3V0bGV0IC0gQ3VzdG9tXFxuXFxuR28gdG8gQmlsbGluZyDihpIgVXBncmFkZSBQbGFuIG9yIEkgY2FuIGNvbm5lY3QgeW91IHdpdGggb3VyIHRlYW0uXCIsXG4gICAgICBvcmRlcl9zeW5jOiBcIk9yZGVyIHN5bmMgaXNzdWU/IExldCdzIHRyb3VibGVzaG9vdDpcXG5cXG4xLiBSZWZyZXNoIGRhc2hib2FyZCAoRjUpXFxuMi4gQ2hlY2sgaW50ZXJuZXQgY29ubmVjdGlvblxcbjMuIFZlcmlmeSBhY3RpdmUgc3Vic2NyaXB0aW9uXFxuNC4gQ2xlYXIgYnJvd3NlciBjYWNoZVxcblxcbklmIHByb2JsZW0gY29udGludWVzLCBJJ2xsIGVzY2FsYXRlIHRvIHRlY2ggdGVhbS5cIixcbiAgICAgIHFyX25vdF93b3JraW5nOiBcIlFSIENvZGUgbm90IHdvcmtpbmc/IFRyeTpcXG5cXG4xLiBEb3dubG9hZCBmcmVzaCBRUiBmcm9tIFFSIENvZGVzIHNlY3Rpb25cXG4yLiBFbnN1cmUgUVIgaXMgc2Nhbm5pbmcgY29ycmVjdCBVUkxcXG4zLiBUZXN0IHdpdGggZGlmZmVyZW50IFFSIHNjYW5uZXJcXG40LiBSZWdlbmVyYXRlIFFSIGNvZGVcXG5cXG5TdGlsbCBmYWNpbmcgaXNzdWU/IEknbGwgY3JlYXRlIHRlY2ggdGlja2V0LlwiLFxuICAgICAgdGVjaG5pY2FsX3N1cHBvcnQ6IFwiVGVjaG5pY2FsIGlzc3VlPyBJJ20gaGVyZSB0byBoZWxwIVxcblxcbkNvbW1vbiBmaXhlczpcXG7igKIgQ2xlYXIgYnJvd3NlciBjYWNoZVxcbuKAoiBVc2UgQ2hyb21lL0ZpcmVmb3hcXG7igKIgQ2hlY2sgaW50ZXJuZXQgc3BlZWRcXG7igKIgRGlzYWJsZSBhZCBibG9ja2Vyc1xcblxcbkRlc2NyaWJlIHlvdXIgaXNzdWUgYW5kIEknbGwgYXNzaXN0IG9yIGVzY2FsYXRlIGlmIG5lZWRlZC5cIlxuICAgIH07XG5cbiAgICBhd2FpdCBiYXNlNDQuZW50aXRpZXMuUmVzdGF1cmFudFN1cHBvcnRDaGF0LmNyZWF0ZSh7XG4gICAgICByZXN0YXVyYW50X2lkOiByZXN0YXVyYW50LnJlc3RhdXJhbnRfaWQsXG4gICAgICByZXN0YXVyYW50X25hbWU6IHJlc3RhdXJhbnQubmFtZSxcbiAgICAgIHNlbmRlcl90eXBlOiBcInJlc3RhdXJhbnRcIixcbiAgICAgIHNlbmRlcl9lbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIG1lc3NhZ2U6IHN1Z2dlc3Rpb24ubGFiZWwsXG4gICAgICBzZXNzaW9uX2lkOiBzZXNzaW9uSWQsXG4gICAgICBpc3N1ZV90eXBlOiBzdWdnZXN0aW9uLmNhdGVnb3J5LFxuICAgICAgc3RhdHVzOiBcIm9wZW5cIixcbiAgICAgIGlzX3JlYWQ6IGZhbHNlXG4gICAgfSk7XG5cbiAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5SZXN0YXVyYW50U3VwcG9ydENoYXQuY3JlYXRlKHtcbiAgICAgICAgcmVzdGF1cmFudF9pZDogcmVzdGF1cmFudC5yZXN0YXVyYW50X2lkLFxuICAgICAgICByZXN0YXVyYW50X25hbWU6IHJlc3RhdXJhbnQubmFtZSxcbiAgICAgICAgc2VuZGVyX3R5cGU6IFwiYWlcIixcbiAgICAgICAgc2VuZGVyX2VtYWlsOiBcImFpQGF4b3JhZGlnaS5jb21cIixcbiAgICAgICAgbWVzc2FnZTogcmVzcG9uc2VzW3N1Z2dlc3Rpb24udmFsdWVdIHx8IFwiTGV0IG1lIGhlbHAgeW91IHdpdGggdGhhdC5cIixcbiAgICAgICAgc2Vzc2lvbl9pZDogc2Vzc2lvbklkLFxuICAgICAgICBpc3N1ZV90eXBlOiBzdWdnZXN0aW9uLmNhdGVnb3J5LFxuICAgICAgICBzdGF0dXM6IFwib3BlblwiLFxuICAgICAgICBpc19yZWFkOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICBsb2FkTWVzc2FnZXMoKTtcbiAgICB9LCAxMDAwKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVTdXBwb3J0VGlja2V0ID0gYXN5bmMgKGNhdGVnb3J5LCBkZXNjcmlwdGlvbikgPT4ge1xuICAgIGNvbnN0IHRpY2tldElkID0gYFRJQ0tfJHtEYXRlLm5vdygpfWA7XG4gICAgYXdhaXQgYmFzZTQ0LmVudGl0aWVzLlN1cHBvcnRUaWNrZXQuY3JlYXRlKHtcbiAgICAgIHRpY2tldF9pZDogdGlja2V0SWQsXG4gICAgICB1c2VyX3R5cGU6IFwicmVzdGF1cmFudFwiLFxuICAgICAgY3VzdG9tZXJfbmFtZTogcmVzdGF1cmFudC5uYW1lLFxuICAgICAgY3VzdG9tZXJfcGhvbmU6IHJlc3RhdXJhbnQucGhvbmUsXG4gICAgICByZXN0YXVyYW50X2lkOiByZXN0YXVyYW50LnJlc3RhdXJhbnRfaWQsXG4gICAgICByZXN0YXVyYW50X25hbWU6IHJlc3RhdXJhbnQubmFtZSxcbiAgICAgIGlzc3VlX2NhdGVnb3J5OiBjYXRlZ29yeSxcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIHN0YXR1czogXCJvcGVuXCIsXG4gICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgIHNlc3Npb25faWQ6IHNlc3Npb25JZCxcbiAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgIHBsYW46IHJlc3RhdXJhbnQuc3Vic2NyaXB0aW9uX3BsYW4sXG4gICAgICAgIHN1YnNjcmlwdGlvbl9zdGF0dXM6IHJlc3RhdXJhbnQuc3Vic2NyaXB0aW9uX3N0YXR1cyxcbiAgICAgICAgbGFzdF9wYXltZW50OiByZXN0YXVyYW50LnN1YnNjcmlwdGlvbl9leHBpcmVzX2F0LFxuICAgICAgICBjb250YWN0OiByZXN0YXVyYW50LnBob25lXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2VuZE1lc3NhZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFuZXdNZXNzYWdlLnRyaW0oKSB8fCBpc1NlbmRpbmcpIHJldHVybjtcblxuICAgIHNldElzU2VuZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYmFzZTQ0LmVudGl0aWVzLlJlc3RhdXJhbnRTdXBwb3J0Q2hhdC5jcmVhdGUoe1xuICAgICAgICByZXN0YXVyYW50X2lkOiByZXN0YXVyYW50LnJlc3RhdXJhbnRfaWQsXG4gICAgICAgIHJlc3RhdXJhbnRfbmFtZTogcmVzdGF1cmFudC5uYW1lLFxuICAgICAgICBzZW5kZXJfdHlwZTogXCJyZXN0YXVyYW50XCIsXG4gICAgICAgIHNlbmRlcl9lbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgbWVzc2FnZTogbmV3TWVzc2FnZS50cmltKCksXG4gICAgICAgIHNlc3Npb25faWQ6IHNlc3Npb25JZCxcbiAgICAgICAgaXNzdWVfdHlwZTogXCJnZW5lcmFsXCIsXG4gICAgICAgIHN0YXR1czogXCJvcGVuXCIsXG4gICAgICAgIGlzX3JlYWQ6IGZhbHNlXG4gICAgICB9KTtcblxuICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgYWlSZXNwb25zZSA9IGF3YWl0IGJhc2U0NC5pbnRlZ3JhdGlvbnMuQ29yZS5JbnZva2VMTE0oe1xuICAgICAgICAgICAgcHJvbXB0OiBgWW91IGFyZSBBeG9yYURpZ2kgc3VwcG9ydCBBSS4gUmVzdGF1cmFudCBvd25lciAoJHtyZXN0YXVyYW50Lm5hbWV9KSBzYWlkOiBcIiR7bmV3TWVzc2FnZX1cIlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBDdXJyZW50IHBsYW46ICR7cmVzdGF1cmFudC5zdWJzY3JpcHRpb25fcGxhbn1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUHJvdmlkZSBoZWxwZnVsIHJlc3BvbnNlICgyLTMgc2VudGVuY2VzKS4gRm9yIGJpbGxpbmcvdGVjaG5pY2FsIGlzc3Vlcywgc3VnZ2VzdCBjcmVhdGluZyB0aWNrZXQuXG4gICAgICAgICAgICBLZWVwIHByb2Zlc3Npb25hbCBhbmQgZnJpZW5kbHkgdG9uZS5gLFxuICAgICAgICAgICAgYWRkX2NvbnRleHRfZnJvbV9pbnRlcm5ldDogZmFsc2VcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5SZXN0YXVyYW50U3VwcG9ydENoYXQuY3JlYXRlKHtcbiAgICAgICAgICAgIHJlc3RhdXJhbnRfaWQ6IHJlc3RhdXJhbnQucmVzdGF1cmFudF9pZCxcbiAgICAgICAgICAgIHJlc3RhdXJhbnRfbmFtZTogcmVzdGF1cmFudC5uYW1lLFxuICAgICAgICAgICAgc2VuZGVyX3R5cGU6IFwiYWlcIixcbiAgICAgICAgICAgIHNlbmRlcl9lbWFpbDogXCJhaUBheG9yYWRpZ2kuY29tXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBhaVJlc3BvbnNlLFxuICAgICAgICAgICAgc2Vzc2lvbl9pZDogc2Vzc2lvbklkLFxuICAgICAgICAgICAgaXNzdWVfdHlwZTogXCJnZW5lcmFsXCIsXG4gICAgICAgICAgICBzdGF0dXM6IFwib3BlblwiLFxuICAgICAgICAgICAgaXNfcmVhZDogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsb2FkTWVzc2FnZXMoKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBSSByZXNwb25zZSBmYWlsZWQ6XCIsIGUpO1xuICAgICAgICB9XG4gICAgICB9LCAxMDAwKTtcblxuICAgICAgc2V0TmV3TWVzc2FnZShcIlwiKTtcbiAgICAgIGxvYWRNZXNzYWdlcygpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgbWVzc2FnZTpcIiwgZXJyb3IpO1xuICAgIH1cbiAgICBzZXRJc1NlbmRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IHVucmVhZEFkbWluTWVzc2FnZXMgPSBtZXNzYWdlcy5maWx0ZXIoKG0pID0+ICFtLmlzX3JlYWQgJiYgbS5zZW5kZXJfdHlwZSA9PT0gJ2FkbWluJykubGVuZ3RoO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1N1cHBvcnRDaGF0U2VjdGlvbjoyMjk6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1N1cHBvcnRDaGF0U2VjdGlvbjoyMzA6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU3VwcG9ydENoYXRTZWN0aW9uOjIzMTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgIDxoMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1N1cHBvcnRDaGF0U2VjdGlvbjoyMzI6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5SZXN0cm9TYWF0aGkgU3VwcG9ydFxuXG5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU3VwcG9ydENoYXRTZWN0aW9uOjIzNjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIG10LTFcIj5HZXQgaGVscCBmcm9tIG91ciBzdXBwb3J0IHRlYW08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU3VwcG9ydENoYXRTZWN0aW9uOjIzODo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3BlbihjcmVhdGVQYWdlVXJsKFwiVGVhbUNoYXRcIikgKyBgP3Nlc3Npb249JHtzZXNzaW9uSWR9YCwgJ19ibGFuaycpfT5cblxuICAgICAgICAgIDxFeHRlcm5hbExpbmsgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TdXBwb3J0Q2hhdFNlY3Rpb246MjQyOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgbXItMlwiIC8+XG4gICAgICAgICAgT3BlbiBpbiBOZXcgVGFiXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU3VwcG9ydENoYXRTZWN0aW9uOjI0Nzo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgIDxDYXJkSGVhZGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU3VwcG9ydENoYXRTZWN0aW9uOjI0ODo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgPENhcmRUaXRsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1N1cHBvcnRDaGF0U2VjdGlvbjoyNDk6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgU3VwcG9ydCBDaGF0XG4gICAgICAgICAgICB7dW5yZWFkQWRtaW5NZXNzYWdlcyA+IDAgJiZcbiAgICAgICAgICAgIDxCYWRnZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1N1cHBvcnRDaGF0U2VjdGlvbjoyNTI6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJiZy1vcmFuZ2UtNjAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJ1bnJlYWRBZG1pbk1lc3NhZ2VzXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2lkfT57dW5yZWFkQWRtaW5NZXNzYWdlc30gbmV3PC9CYWRnZT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L0NhcmRUaXRsZT5cbiAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TdXBwb3J0Q2hhdFNlY3Rpb246MjU2OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJwLTBcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU3VwcG9ydENoYXRTZWN0aW9uOjI1NzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImgtWzUwMHB4XSBvdmVyZmxvdy15LWF1dG8gcC00IHNwYWNlLXktMyBiZy1ncmF5LTUwXCIgZGF0YS1jb2xsZWN0aW9uLWlkPVwiUmVzdGF1cmFudFN1cHBvcnRDaGF0XCI+XG4gICAgICAgICAgICB7bWVzc2FnZXMubGVuZ3RoID09PSAwID9cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TdXBwb3J0Q2hhdFNlY3Rpb246MjU5OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtZ3JheS01MDAgbXQtMjBcIj5cbiAgICAgICAgICAgICAgICA8SGVhZHBob25lc0ljb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TdXBwb3J0Q2hhdFNlY3Rpb246MjYwOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMTIgaC0xMiBteC1hdXRvIG1iLTMgdGV4dC1ncmF5LTMwMFwiIC8+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TdXBwb3J0Q2hhdFNlY3Rpb246MjYxOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlN0YXJ0IGEgY29udmVyc2F0aW9uIHdpdGggc3VwcG9ydDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+IDpcblxuICAgICAgICAgICAgbWVzc2FnZXMubWFwKChtc2cpID0+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU3VwcG9ydENoYXRTZWN0aW9uOjI2NToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICBrZXk9e21zZy5pZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggJHttc2cuc2VuZGVyX3R5cGUgPT09ICdyZXN0YXVyYW50JyA/ICdqdXN0aWZ5LWVuZCcgOiAnanVzdGlmeS1zdGFydCd9YH0gZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e21zZz8uaWR9PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU3VwcG9ydENoYXRTZWN0aW9uOjI2OToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1heC13LVs3NSVdIHJvdW5kZWQtMnhsIHB4LTQgcHktMiAke1xuICAgICAgICAgICAgICBtc2cuc2VuZGVyX3R5cGUgPT09ICdyZXN0YXVyYW50JyA/XG4gICAgICAgICAgICAgICdiZy1vcmFuZ2UtNjAwIHRleHQtd2hpdGUnIDpcbiAgICAgICAgICAgICAgbXNnLnNlbmRlcl90eXBlID09PSAnYWknID9cbiAgICAgICAgICAgICAgJ2JnLWJsdWUtMTAwIHRleHQtYmx1ZS05MDAgYm9yZGVyIGJvcmRlci1ibHVlLTIwMCcgOlxuICAgICAgICAgICAgICAnYmctZ3JlZW4tMTAwIHRleHQtZ3JlZW4tOTAwIGJvcmRlciBib3JkZXItZ3JlZW4tMjAwJ31gXG4gICAgICAgICAgICAgIH0+XG5cbiAgICAgICAgICAgICAgICAgICAge21zZy5zZW5kZXJfdHlwZSA9PT0gJ2FpJyAmJlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TdXBwb3J0Q2hhdFNlY3Rpb246Mjc5OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIG1iLTEgdGV4dC14cyBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1N1cHBvcnRDaGF0U2VjdGlvbjoyODA6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBBSSBBc3Npc3RhbnRcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHttc2cuc2VuZGVyX3R5cGUgPT09ICdhZG1pbicgJiZcbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU3VwcG9ydENoYXRTZWN0aW9uOjI4NToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBtYi0xIHRleHQteHMgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkcGhvbmVzSWNvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1N1cHBvcnRDaGF0U2VjdGlvbjoyODY6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBTdXBwb3J0IFRlYW1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU3VwcG9ydENoYXRTZWN0aW9uOjI5MDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gd2hpdGVzcGFjZS1wcmUtbGluZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwibWVzc2FnZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXttc2c/LmlkfT57bXNnLm1lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1N1cHBvcnRDaGF0U2VjdGlvbjoyOTE6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e2B0ZXh0LXhzIG10LTEgJHttc2cuc2VuZGVyX3R5cGUgPT09ICdyZXN0YXVyYW50JyA/ICd0ZXh0LW9yYW5nZS0yMDAnIDogJ3RleHQtZ3JheS01MDAnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShtc2cuY3JlYXRlZF9kYXRlKS50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHtzaG93U3VnZ2VzdGlvbnMgJiYgbWVzc2FnZXMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1N1cHBvcnRDaGF0U2VjdGlvbjozMDA6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICB7c3VnZ2VzdGlvbnMubWFwKChzdWdnZXN0aW9uLCBfX2FycklkeF9fKSA9PlxuICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU3VwcG9ydENoYXRTZWN0aW9uOjMwMjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGtleT17c3VnZ2VzdGlvbi52YWx1ZX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU3VnZ2VzdGlvbkNsaWNrKHN1Z2dlc3Rpb24pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgdGV4dC1sZWZ0IHB4LTQgcHktMiBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLW9yYW5nZS0yMDAgcm91bmRlZC1sZyBob3ZlcjpiZy1vcmFuZ2UtNTAgdGV4dC1zbSB0ZXh0LWdyYXktNzAwIHRyYW5zaXRpb24tY29sb3JzXCIgZGF0YS1hcnItaW5kZXg9e19fYXJySWR4X199IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJzdWdnZXN0aW9uc1wiIGRhdGEtYXJyLWZpZWxkPVwibGFiZWxcIj5cblxuICAgICAgICAgICAgICAgICAgICB7c3VnZ2VzdGlvbi5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1N1cHBvcnRDaGF0U2VjdGlvbjozMTM6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiByZWY9e21lc3NhZ2VzRW5kUmVmfSAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1N1cHBvcnRDaGF0U2VjdGlvbjozMTY6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyLXQgYmctd2hpdGVcIj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TdXBwb3J0Q2hhdFNlY3Rpb246MzE3OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICA8SW5wdXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TdXBwb3J0Q2hhdFNlY3Rpb246MzE4OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbWVzc2FnZS4uLlwiXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdNZXNzYWdlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld01lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBvbktleVByZXNzPXsoZSkgPT4gZS5rZXkgPT09ICdFbnRlcicgJiYgaGFuZGxlU2VuZE1lc3NhZ2UoKX0gLz5cblxuICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU3VwcG9ydENoYXRTZWN0aW9uOjMyNDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbmRNZXNzYWdlfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTZW5kaW5nIHx8ICFuZXdNZXNzYWdlLnRyaW0oKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLW9yYW5nZS02MDAgdG8tb3JhbmdlLTUwMFwiPlxuXG4gICAgICAgICAgICAgICAgPFNlbmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TdXBwb3J0Q2hhdFNlY3Rpb246MzI5OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPC9DYXJkPlxuICAgIDwvZGl2Pik7XG5cbn0iXSwiZmlsZSI6Ii9hcHAvc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL1N1cHBvcnRDaGF0U2VjdGlvbi5qc3gifQ==