import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Contact.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/Contact.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"];
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=79425e35";
import { Button } from "/src/components/ui/button.jsx";
import { Input } from "/src/components/ui/input.jsx";
import { Textarea } from "/src/components/ui/textarea.jsx";
import { Label } from "/src/components/ui/label.jsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "/src/components/ui/select.jsx";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
export default function Contact() {
  _s();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    restaurant_name: "",
    enquiry_type: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.enquiry_type) newErrors.enquiry_type = "Please select enquiry type";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1e3));
    setSubmitted(true);
    setIsSubmitting(false);
  };
  if (submitted) {
    return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:67:6", "data-dynamic-content": "true", className: "min-h-[70vh] flex items-center justify-center px-4", children: /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-source-location": "pages/Contact:68:8",
        "data-dynamic-content": "true",
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        className: "text-center max-w-md",
        children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:73:10", "data-dynamic-content": "false", className: "w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxDEV(Send, { "data-source-location": "pages/Contact:74:12", "data-dynamic-content": "false", className: "w-10 h-10 text-green-600" }, void 0, false, {
            fileName: "/app/src/pages/Contact.jsx",
            lineNumber: 93,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/Contact.jsx",
            lineNumber: 92,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "pages/Contact:76:10", "data-dynamic-content": "false", className: "text-2xl font-bold text-gray-900 mb-2", children: "Thank You!" }, void 0, false, {
            fileName: "/app/src/pages/Contact.jsx",
            lineNumber: 95,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Contact:79:10", "data-dynamic-content": "false", className: "text-gray-600 mb-6", children: "We've received your message and will get back to you within 24 hours." }, void 0, false, {
            fileName: "/app/src/pages/Contact.jsx",
            lineNumber: 98,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/Contact:82:10", "data-dynamic-content": "true", onClick: () => setSubmitted(false), variant: "outline", children: "Send Another Message" }, void 0, false, {
            fileName: "/app/src/pages/Contact.jsx",
            lineNumber: 101,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/src/pages/Contact.jsx",
        lineNumber: 87,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "/app/src/pages/Contact.jsx",
      lineNumber: 86,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:91:4", "data-dynamic-content": "true", className: "py-20", children: [
    /* @__PURE__ */ jsxDEV("section", { "data-source-location": "pages/Contact:93:6", "data-dynamic-content": "true", className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:94:8", "data-dynamic-content": "true", className: "text-center max-w-3xl mx-auto", children: /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-source-location": "pages/Contact:95:10",
        "data-dynamic-content": "true",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        children: [
          /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/Contact:99:12", "data-dynamic-content": "false", className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6", children: "Get in Touch" }, void 0, false, {
            fileName: "/app/src/pages/Contact.jsx",
            lineNumber: 118,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Contact:102:12", "data-dynamic-content": "false", className: "text-xl text-gray-600", children: "Have questions? Want a demo? We're here to help you get started." }, void 0, false, {
            fileName: "/app/src/pages/Contact.jsx",
            lineNumber: 121,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/src/pages/Contact.jsx",
        lineNumber: 114,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "/app/src/pages/Contact.jsx",
      lineNumber: 113,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/Contact.jsx",
      lineNumber: 112,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { "data-source-location": "pages/Contact:110:6", "data-dynamic-content": "true", className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:111:8", "data-dynamic-content": "true", className: "grid lg:grid-cols-5 gap-12", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-source-location": "pages/Contact:113:10",
          "data-dynamic-content": "true",
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          className: "lg:col-span-2",
          children: [
            /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "pages/Contact:118:12", "data-dynamic-content": "false", className: "text-2xl font-bold text-gray-900 mb-6", children: "Let's Talk" }, void 0, false, {
              fileName: "/app/src/pages/Contact.jsx",
              lineNumber: 137,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Contact:121:12", "data-dynamic-content": "false", className: "text-gray-600 mb-8", children: "Whether you're looking for a demo, have questions about pricing, or need support, our team is ready to help." }, void 0, false, {
              fileName: "/app/src/pages/Contact.jsx",
              lineNumber: 140,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:125:12", "data-dynamic-content": "false", className: "space-y-6", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:126:14", "data-dynamic-content": "false", className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:127:16", "data-dynamic-content": "false", className: "bg-slate-900 rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxDEV(Mail, { "data-source-location": "pages/Contact:128:18", "data-dynamic-content": "false", className: "text-slate-100 lucide lucide-mail w-5 h-5" }, void 0, false, {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 147,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 146,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:130:16", "data-dynamic-content": "false", children: [
                  /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/Contact:131:18", "data-dynamic-content": "false", className: "font-semibold text-gray-900", children: "Email Us" }, void 0, false, {
                    fileName: "/app/src/pages/Contact.jsx",
                    lineNumber: 150,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Contact:132:18", "data-dynamic-content": "false", className: "text-gray-600", children: "Founder@RestroSaathi.in" }, void 0, false, {
                    fileName: "/app/src/pages/Contact.jsx",
                    lineNumber: 151,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 149,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/Contact.jsx",
                lineNumber: 145,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:137:14", "data-dynamic-content": "false", className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:138:16", "data-dynamic-content": "false", className: "bg-slate-900 rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxDEV(Phone, { "data-source-location": "pages/Contact:139:18", "data-dynamic-content": "false", className: "text-slate-100 lucide lucide-phone w-5 h-5" }, void 0, false, {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 158,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 157,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:141:16", "data-dynamic-content": "false", children: [
                  /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/Contact:142:18", "data-dynamic-content": "false", className: "font-semibold text-gray-900", children: "Call Us" }, void 0, false, {
                    fileName: "/app/src/pages/Contact.jsx",
                    lineNumber: 161,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Contact:143:18", "data-dynamic-content": "false", className: "text-gray-600", children: "+91 86890 62091" }, void 0, false, {
                    fileName: "/app/src/pages/Contact.jsx",
                    lineNumber: 162,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Contact:144:18", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Mon-Sat, 9AM-6PM IST" }, void 0, false, {
                    fileName: "/app/src/pages/Contact.jsx",
                    lineNumber: 163,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 160,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/Contact.jsx",
                lineNumber: 156,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:148:14", "data-dynamic-content": "false", className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:149:16", "data-dynamic-content": "false", className: "bg-slate-900 rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxDEV(MapPin, { "data-source-location": "pages/Contact:150:18", "data-dynamic-content": "false", className: "text-slate-100 lucide lucide-map-pin w-5 h-5" }, void 0, false, {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 169,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 168,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:152:16", "data-dynamic-content": "false", children: [
                  /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/Contact:153:18", "data-dynamic-content": "false", className: "font-semibold text-gray-900", children: "Visit Us" }, void 0, false, {
                    fileName: "/app/src/pages/Contact.jsx",
                    lineNumber: 172,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Contact:154:18", "data-dynamic-content": "false", className: "text-gray-600 text-lg", children: "Kutic Incubation, Kurukshetra University, Haryana" }, void 0, false, {
                    fileName: "/app/src/pages/Contact.jsx",
                    lineNumber: 173,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 171,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/Contact.jsx",
                lineNumber: 167,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:161:14", "data-dynamic-content": "false", className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:162:16", "data-dynamic-content": "false", className: "bg-slate-900 rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxDEV(Clock, { "data-source-location": "pages/Contact:163:18", "data-dynamic-content": "false", className: "text-slate-100 lucide lucide-clock w-5 h-5" }, void 0, false, {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 182,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 181,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:165:16", "data-dynamic-content": "false", children: [
                  /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/Contact:166:18", "data-dynamic-content": "false", className: "font-semibold text-gray-900", children: "Response Time" }, void 0, false, {
                    fileName: "/app/src/pages/Contact.jsx",
                    lineNumber: 185,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Contact:167:18", "data-dynamic-content": "false", className: "text-gray-600", children: "We typically respond within 4-6 hours during business hours" }, void 0, false, {
                    fileName: "/app/src/pages/Contact.jsx",
                    lineNumber: 186,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 184,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/Contact.jsx",
                lineNumber: 180,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Contact.jsx",
              lineNumber: 144,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/src/pages/Contact.jsx",
          lineNumber: 132,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-source-location": "pages/Contact:176:10",
          "data-dynamic-content": "true",
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          className: "lg:col-span-3",
          children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:181:12", "data-dynamic-content": "true", className: "bg-white rounded-2xl p-8 shadow-lg border border-gray-100", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:182:14", "data-dynamic-content": "false", className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsxDEV(MessageSquare, { "data-source-location": "pages/Contact:183:16", "data-dynamic-content": "false", className: "w-6 h-6 text-orange-600" }, void 0, false, {
                fileName: "/app/src/pages/Contact.jsx",
                lineNumber: 202,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "pages/Contact:184:16", "data-dynamic-content": "false", className: "text-xl font-bold text-gray-900", children: "Send us a Message" }, void 0, false, {
                fileName: "/app/src/pages/Contact.jsx",
                lineNumber: 203,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Contact.jsx",
              lineNumber: 201,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("form", { "data-source-location": "pages/Contact:187:14", "data-dynamic-content": "true", onSubmit: handleSubmit, className: "space-y-6", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:188:16", "data-dynamic-content": "true", className: "grid md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:189:18", "data-dynamic-content": "true", "data-collection-item-field": "name", "data-collection-item-id": errors?.id || errors?._id, children: [
                  /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/Contact:190:20", "data-dynamic-content": "false", htmlFor: "name", children: "Your Name *" }, void 0, false, {
                    fileName: "/app/src/pages/Contact.jsx",
                    lineNumber: 209,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    Input,
                    {
                      "data-source-location": "pages/Contact:191:20",
                      "data-dynamic-content": "true",
                      id: "name",
                      value: formData.name,
                      onChange: (e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      },
                      placeholder: "John Doe",
                      className: `mt-1 ${errors.name ? "border-red-500" : ""}`
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/src/pages/Contact.jsx",
                      lineNumber: 210,
                      columnNumber: 21
                    },
                    this
                  ),
                  errors.name && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Contact:201:36", "data-dynamic-content": "true", className: "text-red-500 text-sm mt-1", "data-collection-item-field": "name", "data-collection-item-id": errors?.id || errors?._id, children: errors.name }, void 0, false, {
                    fileName: "/app/src/pages/Contact.jsx",
                    lineNumber: 220,
                    columnNumber: 37
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 208,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:203:18", "data-dynamic-content": "true", "data-collection-item-field": "email", "data-collection-item-id": errors?.id || errors?._id, children: [
                  /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/Contact:204:20", "data-dynamic-content": "false", htmlFor: "email", children: "Email Address *" }, void 0, false, {
                    fileName: "/app/src/pages/Contact.jsx",
                    lineNumber: 223,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    Input,
                    {
                      "data-source-location": "pages/Contact:205:20",
                      "data-dynamic-content": "true",
                      id: "email",
                      type: "email",
                      value: formData.email,
                      onChange: (e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      },
                      placeholder: "john@restaurant.com",
                      className: `mt-1 ${errors.email ? "border-red-500" : ""}`
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/src/pages/Contact.jsx",
                      lineNumber: 224,
                      columnNumber: 21
                    },
                    this
                  ),
                  errors.email && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Contact:216:37", "data-dynamic-content": "true", className: "text-red-500 text-sm mt-1", "data-collection-item-field": "email", "data-collection-item-id": errors?.id || errors?._id, children: errors.email }, void 0, false, {
                    fileName: "/app/src/pages/Contact.jsx",
                    lineNumber: 235,
                    columnNumber: 38
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 222,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/Contact.jsx",
                lineNumber: 207,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:220:16", "data-dynamic-content": "true", className: "grid md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:221:18", "data-dynamic-content": "true", children: [
                  /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/Contact:222:20", "data-dynamic-content": "false", htmlFor: "phone", children: "Phone Number" }, void 0, false, {
                    fileName: "/app/src/pages/Contact.jsx",
                    lineNumber: 241,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    Input,
                    {
                      "data-source-location": "pages/Contact:223:20",
                      "data-dynamic-content": "true",
                      id: "phone",
                      value: formData.phone,
                      onChange: (e) => setFormData({ ...formData, phone: e.target.value }),
                      placeholder: "+91 98765 43210",
                      className: "mt-1"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/src/pages/Contact.jsx",
                      lineNumber: 242,
                      columnNumber: 21
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 240,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:231:18", "data-dynamic-content": "true", children: [
                  /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/Contact:232:20", "data-dynamic-content": "false", htmlFor: "restaurant", children: "Restaurant Name" }, void 0, false, {
                    fileName: "/app/src/pages/Contact.jsx",
                    lineNumber: 251,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    Input,
                    {
                      "data-source-location": "pages/Contact:233:20",
                      "data-dynamic-content": "true",
                      id: "restaurant",
                      value: formData.restaurant_name,
                      onChange: (e) => setFormData({ ...formData, restaurant_name: e.target.value }),
                      placeholder: "Your Restaurant",
                      className: "mt-1"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/src/pages/Contact.jsx",
                      lineNumber: 252,
                      columnNumber: 21
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 250,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/Contact.jsx",
                lineNumber: 239,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:243:16", "data-dynamic-content": "true", "data-collection-item-field": "enquiry_type", "data-collection-item-id": errors?.id || errors?._id, children: [
                /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/Contact:244:18", "data-dynamic-content": "false", htmlFor: "enquiry_type", children: "Enquiry Type *" }, void 0, false, {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 263,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV(
                  Select,
                  {
                    "data-source-location": "pages/Contact:245:18",
                    "data-dynamic-content": "true",
                    value: formData.enquiry_type,
                    onValueChange: (value) => {
                      setFormData({ ...formData, enquiry_type: value });
                      if (errors.enquiry_type) setErrors({ ...errors, enquiry_type: "" });
                    },
                    children: [
                      /* @__PURE__ */ jsxDEV(SelectTrigger, { "data-source-location": "pages/Contact:252:20", "data-dynamic-content": "true", className: `mt-1 ${errors.enquiry_type ? "border-red-500" : ""}`, children: /* @__PURE__ */ jsxDEV(SelectValue, { "data-source-location": "pages/Contact:253:22", "data-dynamic-content": "false", placeholder: "Select enquiry type" }, void 0, false, {
                        fileName: "/app/src/pages/Contact.jsx",
                        lineNumber: 272,
                        columnNumber: 23
                      }, this) }, void 0, false, {
                        fileName: "/app/src/pages/Contact.jsx",
                        lineNumber: 271,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV(SelectContent, { "data-source-location": "pages/Contact:255:20", "data-dynamic-content": "false", children: [
                        /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/Contact:256:22", "data-dynamic-content": "false", value: "demo", children: "Request a Demo" }, void 0, false, {
                          fileName: "/app/src/pages/Contact.jsx",
                          lineNumber: 275,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/Contact:257:22", "data-dynamic-content": "false", value: "pricing", children: "Pricing Question" }, void 0, false, {
                          fileName: "/app/src/pages/Contact.jsx",
                          lineNumber: 276,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/Contact:258:22", "data-dynamic-content": "false", value: "support", children: "Technical Support" }, void 0, false, {
                          fileName: "/app/src/pages/Contact.jsx",
                          lineNumber: 277,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/Contact:259:22", "data-dynamic-content": "false", value: "partnership", children: "Partnership Inquiry" }, void 0, false, {
                          fileName: "/app/src/pages/Contact.jsx",
                          lineNumber: 278,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/Contact:260:22", "data-dynamic-content": "false", value: "other", children: "Other" }, void 0, false, {
                          fileName: "/app/src/pages/Contact.jsx",
                          lineNumber: 279,
                          columnNumber: 23
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/src/pages/Contact.jsx",
                        lineNumber: 274,
                        columnNumber: 21
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/src/pages/Contact.jsx",
                    lineNumber: 264,
                    columnNumber: 19
                  },
                  this
                ),
                errors.enquiry_type && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Contact:263:42", "data-dynamic-content": "true", className: "text-red-500 text-sm mt-1", "data-collection-item-field": "enquiry_type", "data-collection-item-id": errors?.id || errors?._id, children: errors.enquiry_type }, void 0, false, {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 282,
                  columnNumber: 43
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/Contact.jsx",
                lineNumber: 262,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:266:16", "data-dynamic-content": "true", "data-collection-item-field": "message", "data-collection-item-id": errors?.id || errors?._id, children: [
                /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/Contact:267:18", "data-dynamic-content": "false", htmlFor: "message", children: "Message *" }, void 0, false, {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 286,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV(
                  Textarea,
                  {
                    "data-source-location": "pages/Contact:268:18",
                    "data-dynamic-content": "true",
                    id: "message",
                    value: formData.message,
                    onChange: (e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    },
                    placeholder: "Tell us how we can help you...",
                    className: `mt-1 h-32 ${errors.message ? "border-red-500" : ""}`
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/pages/Contact.jsx",
                    lineNumber: 287,
                    columnNumber: 19
                  },
                  this
                ),
                errors.message && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Contact:278:37", "data-dynamic-content": "true", className: "text-red-500 text-sm mt-1", "data-collection-item-field": "message", "data-collection-item-id": errors?.id || errors?._id, children: errors.message }, void 0, false, {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 297,
                  columnNumber: 38
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/Contact.jsx",
                lineNumber: 285,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(
                Button,
                {
                  "data-source-location": "pages/Contact:281:16",
                  "data-dynamic-content": "true",
                  type: "submit",
                  disabled: isSubmitting,
                  className: "bg-slate-900 text-primary-foreground px-4 py-2 text-sm font-medium rounded-md inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow hover:bg-primary/90 h-9 w-full from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600",
                  children: [
                    isSubmitting ? "Sending..." : "Send Message",
                    /* @__PURE__ */ jsxDEV(Send, { "data-source-location": "pages/Contact:287:18", "data-dynamic-content": "false", className: "w-4 h-4 ml-2" }, void 0, false, {
                      fileName: "/app/src/pages/Contact.jsx",
                      lineNumber: 306,
                      columnNumber: 19
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 300,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/pages/Contact.jsx",
              lineNumber: 206,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Contact.jsx",
            lineNumber: 200,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/app/src/pages/Contact.jsx",
          lineNumber: 195,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/src/pages/Contact.jsx",
      lineNumber: 130,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/Contact.jsx",
      lineNumber: 129,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/Contact.jsx",
    lineNumber: 110,
    columnNumber: 5
  }, this);
}
_s(Contact, "FdCD064/ObtBGu1ZE/hLw49AEJk=");
_c = Contact;
var _c;
$RefreshReg$(_c, "Contact");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/Contact.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/Contact.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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YSIsIkxhYmVsIiwiU2VsZWN0IiwiU2VsZWN0Q29udGVudCIsIlNlbGVjdEl0ZW0iLCJTZWxlY3RUcmlnZ2VyIiwiU2VsZWN0VmFsdWUiLCJNYWlsIiwiUGhvbmUiLCJNYXBQaW4iLCJTZW5kIiwiTWVzc2FnZVNxdWFyZSIsIkNsb2NrIiwiQ29udGFjdCIsIl9zIiwidXNlRWZmZWN0Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJuYW1lIiwiZW1haWwiLCJwaG9uZSIsInJlc3RhdXJhbnRfbmFtZSIsImVucXVpcnlfdHlwZSIsIm1lc3NhZ2UiLCJpc1N1Ym1pdHRpbmciLCJzZXRJc1N1Ym1pdHRpbmciLCJzdWJtaXR0ZWQiLCJzZXRTdWJtaXR0ZWQiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJ2YWxpZGF0ZUZvcm0iLCJuZXdFcnJvcnMiLCJ0cmltIiwidGVzdCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJvcGFjaXR5Iiwic2NhbGUiLCJ5IiwieCIsImlkIiwiX2lkIiwidGFyZ2V0IiwidmFsdWUiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJDb250YWN0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCI7XG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdGV4dGFyZWFcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9sYWJlbFwiO1xuaW1wb3J0IHtcbiAgU2VsZWN0LFxuICBTZWxlY3RDb250ZW50LFxuICBTZWxlY3RJdGVtLFxuICBTZWxlY3RUcmlnZ2VyLFxuICBTZWxlY3RWYWx1ZSB9IGZyb21cblwiQC9jb21wb25lbnRzL3VpL3NlbGVjdFwiO1xuaW1wb3J0IHsgTWFpbCwgUGhvbmUsIE1hcFBpbiwgU2VuZCwgTWVzc2FnZVNxdWFyZSwgQ2xvY2sgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBiZWhhdmlvcjogJ2luc3RhbnQnIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgbmFtZTogXCJcIixcbiAgICBlbWFpbDogXCJcIixcbiAgICBwaG9uZTogXCJcIixcbiAgICByZXN0YXVyYW50X25hbWU6IFwiXCIsXG4gICAgZW5xdWlyeV90eXBlOiBcIlwiLFxuICAgIG1lc3NhZ2U6IFwiXCJcbiAgfSk7XG4gIGNvbnN0IFtpc1N1Ym1pdHRpbmcsIHNldElzU3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzdWJtaXR0ZWQsIHNldFN1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgY29uc3QgdmFsaWRhdGVGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld0Vycm9ycyA9IHt9O1xuXG4gICAgaWYgKCFmb3JtRGF0YS5uYW1lLnRyaW0oKSkgbmV3RXJyb3JzLm5hbWUgPSBcIk5hbWUgaXMgcmVxdWlyZWRcIjtcbiAgICBpZiAoIWZvcm1EYXRhLmVtYWlsLnRyaW0oKSkge1xuICAgICAgbmV3RXJyb3JzLmVtYWlsID0gXCJFbWFpbCBpcyByZXF1aXJlZFwiO1xuICAgIH0gZWxzZSBpZiAoIS9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvLnRlc3QoZm9ybURhdGEuZW1haWwpKSB7XG4gICAgICBuZXdFcnJvcnMuZW1haWwgPSBcIkludmFsaWQgZW1haWwgZm9ybWF0XCI7XG4gICAgfVxuICAgIGlmICghZm9ybURhdGEuZW5xdWlyeV90eXBlKSBuZXdFcnJvcnMuZW5xdWlyeV90eXBlID0gXCJQbGVhc2Ugc2VsZWN0IGVucXVpcnkgdHlwZVwiO1xuICAgIGlmICghZm9ybURhdGEubWVzc2FnZS50cmltKCkpIG5ld0Vycm9ycy5tZXNzYWdlID0gXCJNZXNzYWdlIGlzIHJlcXVpcmVkXCI7XG5cbiAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobmV3RXJyb3JzKS5sZW5ndGggPT09IDA7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoIXZhbGlkYXRlRm9ybSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0SXNTdWJtaXR0aW5nKHRydWUpO1xuXG4gICAgLy8gU2ltdWxhdGUgc3VibWlzc2lvblxuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApKTtcblxuICAgIHNldFN1Ym1pdHRlZCh0cnVlKTtcbiAgICBzZXRJc1N1Ym1pdHRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIGlmIChzdWJtaXR0ZWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6Njc6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1pbi1oLVs3MHZoXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC00XCI+XG4gICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDo2ODo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC45IH19XG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgc2NhbGU6IDEgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWF4LXctbWRcIj5cblxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjczOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMjAgaC0yMCBiZy1ncmVlbi0xMDAgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG14LWF1dG8gbWItNlwiPlxuICAgICAgICAgICAgPFNlbmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0Ojc0OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMTAgaC0xMCB0ZXh0LWdyZWVuLTYwMFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDo3NjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMCBtYi0yXCI+XG4gICAgICAgICAgICBUaGFuayBZb3UhXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6Nzk6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBtYi02XCI+XG4gICAgICAgICAgICBXZSd2ZSByZWNlaXZlZCB5b3VyIG1lc3NhZ2UgYW5kIHdpbGwgZ2V0IGJhY2sgdG8geW91IHdpdGhpbiAyNCBob3Vycy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6ODI6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBvbkNsaWNrPXsoKSA9PiBzZXRTdWJtaXR0ZWQoZmFsc2UpfSB2YXJpYW50PVwib3V0bGluZVwiPlxuICAgICAgICAgICAgU2VuZCBBbm90aGVyIE1lc3NhZ2VcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9kaXY+KTtcblxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDo5MTo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicHktMjBcIj5cbiAgICAgIHsvKiBIZXJvICovfVxuICAgICAgPHNlY3Rpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjkzOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOCBtYi0xNlwiPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDo5NDo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWF4LXctM3hsIG14LWF1dG9cIj5cbiAgICAgICAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6OTU6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX0+XG5cbiAgICAgICAgICAgIDxoMSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6OTk6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC00eGwgbWQ6dGV4dC01eGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDAgbWItNlwiPlxuICAgICAgICAgICAgICBHZXQgaW4gVG91Y2hcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MTAyOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICBIYXZlIHF1ZXN0aW9ucz8gV2FudCBhIGRlbW8/IFdlJ3JlIGhlcmUgdG8gaGVscCB5b3UgZ2V0IHN0YXJ0ZWQuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIENvbnRhY3QgU2VjdGlvbiAqL31cbiAgICAgIDxzZWN0aW9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoxMTA6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjExMTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JpZCBsZzpncmlkLWNvbHMtNSBnYXAtMTJcIj5cbiAgICAgICAgICB7LyogQ29udGFjdCBJbmZvICovfVxuICAgICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoxMTM6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogLTIwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB4OiAwIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tMlwiPlxuXG4gICAgICAgICAgICA8aDIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjExODoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMCBtYi02XCI+XG4gICAgICAgICAgICAgIExldCdzIFRhbGtcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MTIxOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgbWItOFwiPlxuICAgICAgICAgICAgICBXaGV0aGVyIHlvdSdyZSBsb29raW5nIGZvciBhIGRlbW8sIGhhdmUgcXVlc3Rpb25zIGFib3V0IHByaWNpbmcsIG9yIG5lZWQgc3VwcG9ydCwgb3VyIHRlYW0gaXMgcmVhZHkgdG8gaGVscC5cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MTI1OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoxMjY6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjEyNzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJiZy1zbGF0ZS05MDAgcm91bmRlZC14bCB3LTEyIGgtMTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgICAgICAgPE1haWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjEyODoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTEwMCBsdWNpZGUgbHVjaWRlLW1haWwgdy01IGgtNVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MTMwOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgPGgzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoxMzE6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+RW1haWwgVXM8L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjEzMjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+Rm91bmRlckBSZXN0cm9TYWF0aGkuaW48L3A+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MTM3OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoxMzg6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYmctc2xhdGUtOTAwIHJvdW5kZWQteGwgdy0xMiBoLTEyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgIDxQaG9uZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MTM5OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMTAwIGx1Y2lkZSBsdWNpZGUtcGhvbmUgdy01IGgtNVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MTQxOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgPGgzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoxNDI6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+Q2FsbCBVczwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MTQzOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj4rOTEgODY4OTAgNjIwOTE8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MTQ0OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPk1vbi1TYXQsIDlBTS02UE0gSVNUPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoxNDg6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjE0OToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJiZy1zbGF0ZS05MDAgcm91bmRlZC14bCB3LTEyIGgtMTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgICAgICAgPE1hcFBpbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MTUwOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMTAwIGx1Y2lkZSBsdWNpZGUtbWFwLXBpbiB3LTUgaC01XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoxNTI6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICA8aDMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjE1MzoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj5WaXNpdCBVczwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MTU0OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgdGV4dC1sZ1wiPkt1dGljIEluY3ViYXRpb24sIEt1cnVrc2hldHJhIFVuaXZlcnNpdHksIEhhcnlhbmEgXG5cblxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoxNjE6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjE2MjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJiZy1zbGF0ZS05MDAgcm91bmRlZC14bCB3LTEyIGgtMTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgICAgICAgPENsb2NrIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoxNjM6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS0xMDAgbHVjaWRlIGx1Y2lkZS1jbG9jayB3LTUgaC01XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoxNjU6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICA8aDMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjE2NjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj5SZXNwb25zZSBUaW1lPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoxNjc6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPldlIHR5cGljYWxseSByZXNwb25kIHdpdGhpbiA0LTYgaG91cnMgZHVyaW5nIGJ1c2luZXNzIGhvdXJzXG5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICB7LyogQ29udGFjdCBGb3JtICovfVxuICAgICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoxNzY6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogMjAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHg6IDAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi0zXCI+XG5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjE4MToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIHAtOCBzaGFkb3ctbGcgYm9yZGVyIGJvcmRlci1ncmF5LTEwMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoxODI6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgbWItNlwiPlxuICAgICAgICAgICAgICAgIDxNZXNzYWdlU3F1YXJlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoxODM6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LW9yYW5nZS02MDBcIiAvPlxuICAgICAgICAgICAgICAgIDxoMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MTg0OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDBcIj5TZW5kIHVzIGEgTWVzc2FnZTwvaDI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxmb3JtIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoxODc6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoxODg6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGdhcC02XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoxODk6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIm5hbWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17ZXJyb3JzPy5pZCB8fCBlcnJvcnM/Ll9pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MTkwOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGh0bWxGb3I9XCJuYW1lXCI+WW91ciBOYW1lICo8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjE5MToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JzLm5hbWUpIHNldEVycm9ycyh7IC4uLmVycm9ycywgbmFtZTogXCJcIiB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJKb2huIERvZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG10LTEgJHtlcnJvcnMubmFtZSA/IFwiYm9yZGVyLXJlZC01MDBcIiA6IFwiXCJ9YH0gLz5cblxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLm5hbWUgJiYgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjIwMTozNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LXNtIG10LTFcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIm5hbWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17ZXJyb3JzPy5pZCB8fCBlcnJvcnM/Ll9pZH0+e2Vycm9ycy5uYW1lfTwvcD59XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjIwMzoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiZW1haWxcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17ZXJyb3JzPy5pZCB8fCBlcnJvcnM/Ll9pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MjA0OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsIEFkZHJlc3MgKjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MjA1OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcnMuZW1haWwpIHNldEVycm9ycyh7IC4uLmVycm9ycywgZW1haWw6IFwiXCIgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiam9obkByZXN0YXVyYW50LmNvbVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG10LTEgJHtlcnJvcnMuZW1haWwgPyBcImJvcmRlci1yZWQtNTAwXCIgOiBcIlwifWB9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5lbWFpbCAmJiA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MjE2OjM3XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQtc20gbXQtMVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiZW1haWxcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17ZXJyb3JzPy5pZCB8fCBlcnJvcnM/Ll9pZH0+e2Vycm9ycy5lbWFpbH08L3A+fVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoyMjA6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGdhcC02XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoyMjE6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoyMjI6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgaHRtbEZvcj1cInBob25lXCI+UGhvbmUgTnVtYmVyPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoyMjM6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBob25lfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIHBob25lOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIrOTEgOTg3NjUgNDMyMTBcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xXCIgLz5cblxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoyMzE6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoyMzI6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgaHRtbEZvcj1cInJlc3RhdXJhbnRcIj5SZXN0YXVyYW50IE5hbWU8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjIzMzoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicmVzdGF1cmFudFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5yZXN0YXVyYW50X25hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgcmVzdGF1cmFudF9uYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIFJlc3RhdXJhbnRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xXCIgLz5cblxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoyNDM6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImVucXVpcnlfdHlwZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtlcnJvcnM/LmlkIHx8IGVycm9ycz8uX2lkfT5cbiAgICAgICAgICAgICAgICAgIDxMYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MjQ0OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGh0bWxGb3I9XCJlbnF1aXJ5X3R5cGVcIj5FbnF1aXJ5IFR5cGUgKjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8U2VsZWN0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoyNDU6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVucXVpcnlfdHlwZX1cbiAgICAgICAgICAgICAgICAgIG9uVmFsdWVDaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBlbnF1aXJ5X3R5cGU6IHZhbHVlIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JzLmVucXVpcnlfdHlwZSkgc2V0RXJyb3JzKHsgLi4uZXJyb3JzLCBlbnF1aXJ5X3R5cGU6IFwiXCIgfSk7XG4gICAgICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0VHJpZ2dlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MjUyOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgbXQtMSAke2Vycm9ycy5lbnF1aXJ5X3R5cGUgPyBcImJvcmRlci1yZWQtNTAwXCIgOiBcIlwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RWYWx1ZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MjUzOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGVucXVpcnkgdHlwZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0VHJpZ2dlcj5cbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjI1NToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MjU2OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHZhbHVlPVwiZGVtb1wiPlJlcXVlc3QgYSBEZW1vPC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoyNTc6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdmFsdWU9XCJwcmljaW5nXCI+UHJpY2luZyBRdWVzdGlvbjwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MjU4OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHZhbHVlPVwic3VwcG9ydFwiPlRlY2huaWNhbCBTdXBwb3J0PC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoyNTk6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdmFsdWU9XCJwYXJ0bmVyc2hpcFwiPlBhcnRuZXJzaGlwIElucXVpcnk8L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjI2MDoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB2YWx1ZT1cIm90aGVyXCI+T3RoZXI8L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Q29udGVudD5cbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgICAge2Vycm9ycy5lbnF1aXJ5X3R5cGUgJiYgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjI2Mzo0MlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LXNtIG10LTFcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImVucXVpcnlfdHlwZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtlcnJvcnM/LmlkIHx8IGVycm9ycz8uX2lkfT57ZXJyb3JzLmVucXVpcnlfdHlwZX08L3A+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MjY2OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJtZXNzYWdlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2Vycm9ycz8uaWQgfHwgZXJyb3JzPy5faWR9PlxuICAgICAgICAgICAgICAgICAgPExhYmVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoyNjc6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgaHRtbEZvcj1cIm1lc3NhZ2VcIj5NZXNzYWdlICo8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgPFRleHRhcmVhIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoyNjg6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIG1lc3NhZ2U6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JzLm1lc3NhZ2UpIHNldEVycm9ycyh7IC4uLmVycm9ycywgbWVzc2FnZTogXCJcIiB9KTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRlbGwgdXMgaG93IHdlIGNhbiBoZWxwIHlvdS4uLlwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BtdC0xIGgtMzIgJHtlcnJvcnMubWVzc2FnZSA/IFwiYm9yZGVyLXJlZC01MDBcIiA6IFwiXCJ9YH0gLz5cblxuICAgICAgICAgICAgICAgICAge2Vycm9ycy5tZXNzYWdlICYmIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoyNzg6MzdcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC1zbSBtdC0xXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJtZXNzYWdlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2Vycm9ycz8uaWQgfHwgZXJyb3JzPy5faWR9PntlcnJvcnMubWVzc2FnZX08L3A+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MjgxOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfSBjbGFzc05hbWU9XCJiZy1zbGF0ZS05MDAgdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgcHgtNCBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gcm91bmRlZC1tZCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgd2hpdGVzcGFjZS1ub3dyYXAgdHJhbnNpdGlvbi1jb2xvcnMgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW5vbmUgZm9jdXMtdmlzaWJsZTpyaW5nLTEgZm9jdXMtdmlzaWJsZTpyaW5nLXJpbmcgZGlzYWJsZWQ6cG9pbnRlci1ldmVudHMtbm9uZSBkaXNhYmxlZDpvcGFjaXR5LTUwIFsmX3N2Z106cG9pbnRlci1ldmVudHMtbm9uZSBbJl9zdmddOnNpemUtNCBbJl9zdmddOnNocmluay0wIHNoYWRvdyBob3ZlcjpiZy1wcmltYXJ5LzkwIGgtOSB3LWZ1bGwgZnJvbS1vcmFuZ2UtNjAwIHRvLW9yYW5nZS01MDAgaG92ZXI6ZnJvbS1vcmFuZ2UtNzAwIGhvdmVyOnRvLW9yYW5nZS02MDBcIj5cblxuXG4gICAgICAgICAgICAgICAgICB7aXNTdWJtaXR0aW5nID8gXCJTZW5kaW5nLi4uXCIgOiBcIlNlbmQgTWVzc2FnZVwifVxuICAgICAgICAgICAgICAgICAgPFNlbmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjI4NzoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IG1sLTJcIiAvPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2Pik7XG5cbn0iXSwiZmlsZSI6Ii9hcHAvc3JjL3BhZ2VzL0NvbnRhY3QuanN4In0=