import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/dashboard/SettingsSection.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/dashboard/SettingsSection.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"];
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=79425e35";
import { Card, CardContent, CardHeader, CardTitle } from "/src/components/ui/card.jsx";
import { Switch } from "/src/components/ui/switch.jsx";
import { Label } from "/src/components/ui/label.jsx";
import { Button } from "/src/components/ui/button.jsx";
import { Input } from "/src/components/ui/input.jsx";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "/src/components/ui/dialog.jsx";
import { base44 } from "/src/api/base44Client.js";
import { Truck, ShoppingBag, Upload, Image as ImageIcon, CreditCard, Lock } from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
export default function SettingsSection({ restaurant, user }) {
  _s();
  const [features, setFeatures] = useState(restaurant?.features_enabled || {});
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [showOtpDialog, setShowOtpDialog] = useState(false);
  const [otp, setOtp] = useState("");
  const [sentOtp, setSentOtp] = useState(null);
  const [selectedGateway, setSelectedGateway] = useState(restaurant?.payment_gateway || "");
  const [gatewayKeys, setGatewayKeys] = useState({
    // Razorpay
    razorpay_key_id: restaurant?.razorpay_key_id || "",
    razorpay_key_secret: "",
    // PhonePe
    phonepe_merchant_id: restaurant?.phonepe_merchant_id || "",
    phonepe_salt_key: "",
    // Paytm
    paytm_merchant_id: restaurant?.paytm_merchant_id || "",
    paytm_merchant_key: "",
    // Stripe
    stripe_publishable_key: restaurant?.stripe_publishable_key || "",
    stripe_secret_key: "",
    // Cashfree
    cashfree_app_id: restaurant?.cashfree_app_id || "",
    cashfree_secret_key: ""
  });
  const [isEditingKeys, setIsEditingKeys] = useState(false);
  const [acceptOnlinePayment, setAcceptOnlinePayment] = useState(restaurant?.settings?.accept_online_payment || false);
  const paymentGateways = [
    { id: "razorpay", name: "Razorpay", logo: "💳", popular: true },
    { id: "phonepe", name: "PhonePe", logo: "📱" },
    { id: "paytm", name: "Paytm", logo: "💰" },
    { id: "stripe", name: "Stripe", logo: "🌐" },
    { id: "cashfree", name: "Cashfree", logo: "💵" }
  ];
  const getGatewayFields = (gatewayId) => {
    const fields = {
      razorpay: [
        { key: "razorpay_key_id", label: "Razorpay Key ID", placeholder: "rzp_live_xxxxxxxx", type: "text" },
        { key: "razorpay_key_secret", label: "Razorpay Key Secret", placeholder: "Enter Secret Key", type: "password" }
      ],
      phonepe: [
        { key: "phonepe_merchant_id", label: "PhonePe Merchant ID", placeholder: "Enter Merchant ID", type: "text" },
        { key: "phonepe_salt_key", label: "PhonePe Salt Key", placeholder: "Enter Salt Key", type: "password" }
      ],
      paytm: [
        { key: "paytm_merchant_id", label: "Paytm Merchant ID", placeholder: "Enter Merchant ID", type: "text" },
        { key: "paytm_merchant_key", label: "Paytm Merchant Key", placeholder: "Enter Merchant Key", type: "password" }
      ],
      stripe: [
        { key: "stripe_publishable_key", label: "Stripe Publishable Key", placeholder: "pk_live_xxxxx", type: "text" },
        { key: "stripe_secret_key", label: "Stripe Secret Key", placeholder: "sk_live_xxxxx", type: "password" }
      ],
      cashfree: [
        { key: "cashfree_app_id", label: "Cashfree App ID", placeholder: "Enter App ID", type: "text" },
        { key: "cashfree_secret_key", label: "Cashfree Secret Key", placeholder: "Enter Secret Key", type: "password" }
      ]
    };
    return fields[gatewayId] || [];
  };
  const [deliveryZones, setDeliveryZones] = useState(restaurant?.delivery_zones || []);
  const [newZone, setNewZone] = useState({ zone_name: "", areas: "", delivery_fee: 0, minimum_order: 0 });
  const planLimits = {
    trial: {
      tables: 10,
      features: ["qr_ordering"],
      canUpgrade: true
    },
    basic: {
      tables: 25,
      features: ["qr_ordering", "custom_branding", "customer_analytics"],
      canUpgrade: true
    },
    pro: {
      tables: 999,
      features: ["qr_ordering", "custom_branding", "customer_analytics", "payment_integration", "delivery", "takeaway"],
      canUpgrade: true
    },
    multi_outlet: {
      tables: 999,
      features: ["qr_ordering", "custom_branding", "customer_analytics", "payment_integration", "delivery", "takeaway", "multi_outlet"],
      canUpgrade: false
    }
  };
  const currentPlan = restaurant?.subscription_plan || "trial";
  const currentLimits = planLimits[currentPlan];
  const isFeatureAvailable = (featureName) => {
    return currentLimits.features.includes(featureName);
  };
  const handleFeatureToggle = async (featureName, value) => {
    setIsSaving(true);
    const updatedFeatures = { ...features, [featureName]: value };
    setFeatures(updatedFeatures);
    try {
      await base44.entities.Restaurant.update(restaurant.id, {
        features_enabled: updatedFeatures
      });
    } catch (e) {
      console.error("Failed to update features", e);
      setFeatures(features);
    } finally {
      setIsSaving(false);
    }
  };
  const handleImageUpload = async (file, fieldName) => {
    if (!file) return;
    setIsUploading(true);
    try {
      const result = await base44.integrations.Core.UploadFile({ file });
      await base44.entities.Restaurant.update(restaurant.id, {
        [fieldName]: result.file_url
      });
      alert("Image uploaded successfully!");
    } catch (e) {
      console.error("Failed to upload image", e);
      alert("Failed to upload image");
    } finally {
      setIsUploading(false);
    }
  };
  const sendOtpForKeyUpdate = async () => {
    const generatedOtp = Math.floor(1e5 + Math.random() * 9e5).toString();
    setSentOtp(generatedOtp);
    try {
      await base44.integrations.Core.SendEmail({
        to: restaurant.email,
        subject: "OTP for Razorpay API Key Update",
        body: `Your OTP for updating Razorpay API keys is: ${generatedOtp}. This OTP is valid for 10 minutes.`
      });
      setShowOtpDialog(true);
      alert("OTP sent to your registered email");
    } catch (e) {
      console.error("Failed to send OTP", e);
      alert("Failed to send OTP. Please try again.");
    }
  };
  const handleSaveGatewayKeys = async () => {
    if (!selectedGateway) {
      alert("Please select a payment gateway");
      return;
    }
    const fields = getGatewayFields(selectedGateway);
    const missingField = fields.find((f) => !gatewayKeys[f.key]);
    if (missingField) {
      alert(`Please enter ${missingField.label}`);
      return;
    }
    setIsSaving(true);
    try {
      const updateData = { payment_gateway: selectedGateway };
      fields.forEach((f) => {
        updateData[f.key] = gatewayKeys[f.key];
      });
      await base44.entities.Restaurant.update(restaurant.id, updateData);
      alert(`${paymentGateways.find((g) => g.id === selectedGateway)?.name} keys saved successfully!`);
      setIsEditingKeys(false);
    } catch (e) {
      console.error("Failed to save keys", e);
      alert("Failed to save payment gateway keys");
    } finally {
      setIsSaving(false);
    }
  };
  const handleSaveRazorpayKeys = handleSaveGatewayKeys;
  const handleToggleOnlinePayment = async (checked) => {
    if (checked && !restaurant.payment_gateway) {
      alert("Please configure a payment gateway first to enable online payments");
      return;
    }
    setIsSaving(true);
    setAcceptOnlinePayment(checked);
    try {
      await base44.entities.Restaurant.update(restaurant.id, {
        settings: {
          ...restaurant.settings,
          accept_online_payment: checked
        }
      });
    } catch (e) {
      console.error("Failed to update payment settings", e);
      setAcceptOnlinePayment(!checked);
    } finally {
      setIsSaving(false);
    }
  };
  const handleAddDeliveryZone = async () => {
    if (!newZone.zone_name || !newZone.areas) {
      alert("Please enter zone name and areas");
      return;
    }
    const zone = {
      zone_name: newZone.zone_name,
      areas: newZone.areas.split(",").map((a) => a.trim()).filter(Boolean),
      delivery_fee: Number(newZone.delivery_fee),
      minimum_order: Number(newZone.minimum_order)
    };
    const updatedZones = [...deliveryZones, zone];
    setDeliveryZones(updatedZones);
    setIsSaving(true);
    try {
      await base44.entities.Restaurant.update(restaurant.id, {
        delivery_zones: updatedZones
      });
      setNewZone({ zone_name: "", areas: "", delivery_fee: 0, minimum_order: 0 });
      alert("Delivery zone added successfully!");
    } catch (e) {
      console.error("Failed to add delivery zone", e);
      setDeliveryZones(deliveryZones);
      alert("Failed to add delivery zone");
    } finally {
      setIsSaving(false);
    }
  };
  const handleDeleteZone = async (index) => {
    const updatedZones = deliveryZones.filter((_, i) => i !== index);
    setDeliveryZones(updatedZones);
    setIsSaving(true);
    try {
      await base44.entities.Restaurant.update(restaurant.id, {
        delivery_zones: updatedZones
      });
    } catch (e) {
      console.error("Failed to delete zone", e);
      setDeliveryZones(deliveryZones);
    } finally {
      setIsSaving(false);
    }
  };
  return /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      "data-source-location": "components/dashboard/SettingsSection:263:4",
      "data-dynamic-content": "true",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "space-y-6",
      "data-collection-item-field": "delivery",
      "data-collection-item-id": features?.id || features?._id,
      children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:269:6", "data-dynamic-content": "false", children: [
          /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "components/dashboard/SettingsSection:270:8", "data-dynamic-content": "false", className: "text-xl font-bold text-gray-900", children: "Settings" }, void 0, false, {
            fileName: "/app/src/components/dashboard/SettingsSection.jsx",
            lineNumber: 289,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:271:8", "data-dynamic-content": "false", className: "text-gray-500", children: "Manage your restaurant settings" }, void 0, false, {
            fileName: "/app/src/components/dashboard/SettingsSection.jsx",
            lineNumber: 290,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/SettingsSection.jsx",
          lineNumber: 288,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/SettingsSection:274:6", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "components/dashboard/SettingsSection:275:8", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "components/dashboard/SettingsSection:276:10", "data-dynamic-content": "true", className: "flex items-center gap-2", children: [
            "Restaurant Branding",
            !isFeatureAvailable("custom_branding") && /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/SettingsSection:279:14", "data-dynamic-content": "false", className: "text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded", children: "Basic Plan" }, void 0, false, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 298,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/SettingsSection.jsx",
            lineNumber: 295,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/SettingsSection.jsx",
            lineNumber: 294,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/SettingsSection:283:8", "data-dynamic-content": "true", className: "space-y-6", children: !isFeatureAvailable("custom_branding") ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:285:12", "data-dynamic-content": "false", className: "bg-orange-50 border border-orange-200 rounded-lg p-4", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:286:14", "data-dynamic-content": "false", className: "text-sm text-orange-700 font-medium", children: "Custom branding is only available in Basic plan and above." }, void 0, false, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 305,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:287:14", "data-dynamic-content": "false", className: "text-sm text-orange-600 mt-1", children: "Upgrade your plan to customize your restaurant logo and cover image." }, void 0, false, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 306,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/SettingsSection.jsx",
            lineNumber: 304,
            columnNumber: 11
          }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:291:14", "data-dynamic-content": "true", "data-collection-item-field": "logo_url", "data-collection-item-id": restaurant?.id || restaurant?._id, children: [
              /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "components/dashboard/SettingsSection:292:16", "data-dynamic-content": "false", className: "text-base font-medium mb-2 block", children: "Restaurant Logo" }, void 0, false, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 311,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:293:16", "data-dynamic-content": "false", className: "text-sm text-gray-500 mb-3", children: "Upload your restaurant logo (appears in menu header)" }, void 0, false, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 312,
                columnNumber: 17
              }, this),
              restaurant?.logo_url && /* @__PURE__ */ jsxDEV("img", { "data-source-location": "components/dashboard/SettingsSection:295:18", "data-dynamic-content": "true", src: restaurant.logo_url, alt: "Logo", className: "w-24 h-24 object-cover rounded-lg mb-3 border" }, void 0, false, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 314,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV(
                Input,
                {
                  "data-source-location": "components/dashboard/SettingsSection:297:16",
                  "data-dynamic-content": "true",
                  type: "file",
                  accept: "image/*",
                  onChange: (e) => handleImageUpload(e.target.files[0], "logo_url"),
                  disabled: isUploading
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                  lineNumber: 316,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 310,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:305:14", "data-dynamic-content": "true", "data-collection-item-field": "cover_image_url", "data-collection-item-id": restaurant?.id || restaurant?._id, children: [
              /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "components/dashboard/SettingsSection:306:16", "data-dynamic-content": "false", className: "text-base font-medium mb-2 block", children: "Cover Image" }, void 0, false, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 325,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:307:16", "data-dynamic-content": "false", className: "text-sm text-gray-500 mb-3", children: "Upload a cover image for your menu page" }, void 0, false, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 326,
                columnNumber: 17
              }, this),
              restaurant?.cover_image_url && /* @__PURE__ */ jsxDEV("img", { "data-source-location": "components/dashboard/SettingsSection:309:18", "data-dynamic-content": "true", src: restaurant.cover_image_url, alt: "Cover", className: "w-full h-32 object-cover rounded-lg mb-3 border" }, void 0, false, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 328,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV(
                Input,
                {
                  "data-source-location": "components/dashboard/SettingsSection:311:16",
                  "data-dynamic-content": "true",
                  type: "file",
                  accept: "image/*",
                  onChange: (e) => handleImageUpload(e.target.files[0], "cover_image_url"),
                  disabled: isUploading
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                  lineNumber: 330,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 324,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/SettingsSection.jsx",
            lineNumber: 309,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/SettingsSection.jsx",
            lineNumber: 302,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/SettingsSection.jsx",
          lineNumber: 293,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/SettingsSection:323:6", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "components/dashboard/SettingsSection:324:8", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "components/dashboard/SettingsSection:325:10", "data-dynamic-content": "false", children: "Restaurant Information" }, void 0, false, {
            fileName: "/app/src/components/dashboard/SettingsSection.jsx",
            lineNumber: 344,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/SettingsSection.jsx",
            lineNumber: 343,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/SettingsSection:327:8", "data-dynamic-content": "true", className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:328:10", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:329:12", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Restaurant Name" }, void 0, false, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 348,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:330:12", "data-dynamic-content": "true", className: "font-medium", "data-collection-item-field": "name", "data-collection-item-id": restaurant?.id || restaurant?._id, children: restaurant?.name }, void 0, false, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 349,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 347,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:332:10", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:333:12", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "City" }, void 0, false, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 352,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:334:12", "data-dynamic-content": "true", className: "font-medium", "data-collection-item-field": "city", "data-collection-item-id": restaurant?.id || restaurant?._id, children: restaurant?.city }, void 0, false, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 353,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 351,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:336:10", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:337:12", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Phone" }, void 0, false, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 356,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:338:12", "data-dynamic-content": "true", className: "font-medium", "data-collection-item-field": "phone", "data-collection-item-id": restaurant?.id || restaurant?._id, children: restaurant?.phone }, void 0, false, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 357,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 355,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:340:10", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:341:12", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Email" }, void 0, false, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 360,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:342:12", "data-dynamic-content": "true", className: "font-medium", "data-collection-item-field": "email", "data-collection-item-id": restaurant?.id || restaurant?._id, children: restaurant?.email }, void 0, false, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 361,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 359,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:344:10", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:345:12", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Subscription Plan" }, void 0, false, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 364,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:346:12", "data-dynamic-content": "true", className: "font-medium capitalize", "data-collection-item-field": "subscription_plan", "data-collection-item-id": restaurant?.id || restaurant?._id, children: restaurant?.subscription_plan }, void 0, false, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 365,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 363,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:348:10", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:349:12", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Table Limit" }, void 0, false, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 368,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:350:12", "data-dynamic-content": "true", className: "font-medium", children: [
                currentLimits.tables === 999 ? "Unlimited" : currentLimits.tables,
                " tables"
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 369,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 367,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/SettingsSection.jsx",
            lineNumber: 346,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/SettingsSection.jsx",
          lineNumber: 342,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/SettingsSection:356:6", "data-dynamic-content": "true", className: "bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200", children: [
          /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "components/dashboard/SettingsSection:357:8", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "components/dashboard/SettingsSection:358:10", "data-dynamic-content": "false", children: "Your Plan Features" }, void 0, false, {
            fileName: "/app/src/components/dashboard/SettingsSection.jsx",
            lineNumber: 377,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/SettingsSection.jsx",
            lineNumber: 376,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/SettingsSection:360:8", "data-dynamic-content": "true", className: "space-y-3", "data-collection-item-field": "canUpgrade", "data-collection-item-id": currentLimits?.id || currentLimits?._id, children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:361:10", "data-dynamic-content": "true", className: "grid grid-cols-2 gap-2", children: ["qr_ordering", "custom_branding", "customer_analytics", "payment_integration", "delivery", "takeaway", "multi_outlet"].map(
              (feature, __arrIdx__) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:363:14", "data-dynamic-content": "true", className: "flex items-center gap-2", "data-arr-index": __arrIdx__, children: [
                isFeatureAvailable(feature) ? /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/SettingsSection:365:18", "data-dynamic-content": "false", className: "text-green-600", children: "✓" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                  lineNumber: 384,
                  columnNumber: 15
                }, this) : /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/SettingsSection:367:18", "data-dynamic-content": "false", className: "text-gray-300", children: "✗" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                  lineNumber: 386,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/SettingsSection:369:16", "data-dynamic-content": "true", className: `text-sm ${isFeatureAvailable(feature) ? "text-gray-700" : "text-gray-400"}`, "data-arr-index": __arrIdx__, children: feature.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()) }, void 0, false, {
                  fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                  lineNumber: 388,
                  columnNumber: 17
                }, this)
              ] }, feature, true, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 382,
                columnNumber: 13
              }, this)
            ) }, void 0, false, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 380,
              columnNumber: 11
            }, this),
            currentLimits.canUpgrade && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:376:12", "data-dynamic-content": "false", className: "pt-3 border-t border-orange-200", children: /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:377:14", "data-dynamic-content": "false", className: "text-sm text-orange-700", children: "Upgrade your plan to unlock more features" }, void 0, false, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 396,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 395,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/SettingsSection.jsx",
            lineNumber: 379,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/SettingsSection.jsx",
          lineNumber: 375,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/SettingsSection:385:6", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "components/dashboard/SettingsSection:386:8", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "components/dashboard/SettingsSection:387:10", "data-dynamic-content": "false", children: "Order Features" }, void 0, false, {
            fileName: "/app/src/components/dashboard/SettingsSection.jsx",
            lineNumber: 406,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/SettingsSection.jsx",
            lineNumber: 405,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/SettingsSection:389:8", "data-dynamic-content": "true", className: "space-y-6", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:390:10", "data-dynamic-content": "true", className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:391:12", "data-dynamic-content": "true", className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxDEV(ShoppingBag, { "data-source-location": "components/dashboard/SettingsSection:392:14", "data-dynamic-content": "false", className: "w-5 h-5 text-gray-500" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                  lineNumber: 411,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:393:14", "data-dynamic-content": "true", children: [
                  /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "components/dashboard/SettingsSection:394:16", "data-dynamic-content": "false", className: "text-base font-medium", children: "Takeaway Orders" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                    lineNumber: 413,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:395:16", "data-dynamic-content": "true", className: "text-sm text-gray-500", children: isFeatureAvailable("takeaway") ? "Allow customers to place takeaway orders" : "Available in Pro plan and above" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                    lineNumber: 414,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                  lineNumber: 412,
                  columnNumber: 15
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 410,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV(
                Switch,
                {
                  "data-source-location": "components/dashboard/SettingsSection:402:12",
                  "data-dynamic-content": "true",
                  checked: features.takeaway || false,
                  onCheckedChange: (checked) => {
                    if (!isFeatureAvailable("takeaway")) {
                      alert("Takeaway feature is only available in Pro plan and above. Please upgrade your plan.");
                      return;
                    }
                    handleFeatureToggle("takeaway", checked);
                  },
                  disabled: isSaving || !isFeatureAvailable("takeaway")
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                  lineNumber: 421,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 409,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:415:10", "data-dynamic-content": "true", className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:416:12", "data-dynamic-content": "true", className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxDEV(Truck, { "data-source-location": "components/dashboard/SettingsSection:417:14", "data-dynamic-content": "false", className: "w-5 h-5 text-gray-500" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                  lineNumber: 436,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:418:14", "data-dynamic-content": "true", children: [
                  /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "components/dashboard/SettingsSection:419:16", "data-dynamic-content": "false", className: "text-base font-medium", children: "Delivery Orders" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                    lineNumber: 438,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:420:16", "data-dynamic-content": "true", className: "text-sm text-gray-500", children: isFeatureAvailable("delivery") ? "Allow customers to place delivery orders" : "Available in Pro plan and above" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                    lineNumber: 439,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                  lineNumber: 437,
                  columnNumber: 15
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 435,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV(
                Switch,
                {
                  "data-source-location": "components/dashboard/SettingsSection:427:12",
                  "data-dynamic-content": "true",
                  checked: features.delivery || false,
                  onCheckedChange: (checked) => {
                    if (!isFeatureAvailable("delivery")) {
                      alert("Delivery feature is only available in Pro plan and above. Please upgrade your plan.");
                      return;
                    }
                    handleFeatureToggle("delivery", checked);
                  },
                  disabled: isSaving || !isFeatureAvailable("delivery")
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                  lineNumber: 446,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 434,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/SettingsSection.jsx",
            lineNumber: 408,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/SettingsSection.jsx",
          lineNumber: 404,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/SettingsSection:442:6", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "components/dashboard/SettingsSection:443:8", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "components/dashboard/SettingsSection:444:10", "data-dynamic-content": "true", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV(CreditCard, { "data-source-location": "components/dashboard/SettingsSection:445:12", "data-dynamic-content": "false", className: "w-5 h-5" }, void 0, false, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 464,
              columnNumber: 13
            }, this),
            "Payment Gateway Integration",
            !isFeatureAvailable("payment_integration") && /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/SettingsSection:448:14", "data-dynamic-content": "false", className: "text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded", children: "Pro Plan" }, void 0, false, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 467,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/SettingsSection.jsx",
            lineNumber: 463,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/SettingsSection.jsx",
            lineNumber: 462,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/SettingsSection:452:8", "data-dynamic-content": "true", className: "space-y-4", children: !isFeatureAvailable("payment_integration") ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:454:12", "data-dynamic-content": "false", className: "bg-orange-50 border border-orange-200 rounded-lg p-4", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:455:14", "data-dynamic-content": "false", className: "text-sm text-orange-700 font-medium", children: "Payment integration is only available in Pro plan and above." }, void 0, false, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 474,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:456:14", "data-dynamic-content": "false", className: "text-sm text-orange-600 mt-1", children: "Upgrade your plan to accept online payments from customers." }, void 0, false, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 475,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/SettingsSection.jsx",
            lineNumber: 473,
            columnNumber: 11
          }, this) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:459:12", "data-dynamic-content": "true", className: "space-y-4", "data-collection-item-field": "payment_gateway", "data-collection-item-id": restaurant?.id || restaurant?._id, children: [
            restaurant.payment_gateway && !isEditingKeys ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:461:16", "data-dynamic-content": "true", className: "space-y-3", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:462:18", "data-dynamic-content": "true", className: "bg-green-50 border border-green-200 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:463:20", "data-dynamic-content": "true", className: "flex items-center gap-2 text-green-700 mb-2", children: [
                  /* @__PURE__ */ jsxDEV(Lock, { "data-source-location": "components/dashboard/SettingsSection:464:22", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                    lineNumber: 483,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/SettingsSection:465:22", "data-dynamic-content": "true", className: "font-medium", children: [
                    paymentGateways.find((g) => g.id === restaurant.payment_gateway)?.name || restaurant.payment_gateway,
                    " Connected"
                  ] }, void 0, true, {
                    fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                    lineNumber: 484,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                  lineNumber: 482,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:467:20", "data-dynamic-content": "true", className: "text-sm text-green-600", "data-collection-item-field": "payment_gateway", "data-collection-item-id": restaurant?.id || restaurant?._id, children: [
                  "Gateway: ",
                  restaurant.payment_gateway
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                  lineNumber: 486,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 481,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "components/dashboard/SettingsSection:469:18", "data-dynamic-content": "true", variant: "outline", onClick: () => setIsEditingKeys(true), children: "Update Payment Gateway" }, void 0, false, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 488,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 480,
              columnNumber: 13
            }, this) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:474:16", "data-dynamic-content": "true", className: "space-y-4", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:476:18", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "components/dashboard/SettingsSection:477:20", "data-dynamic-content": "false", className: "text-base font-medium mb-3 block", children: "Select Payment Gateway" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                  lineNumber: 496,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:478:20", "data-dynamic-content": "true", className: "grid grid-cols-2 sm:grid-cols-3 gap-3", children: paymentGateways.map(
                  (gateway, __arrIdx__) => /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      "data-source-location": "components/dashboard/SettingsSection:480:24",
                      "data-dynamic-content": "true",
                      onClick: () => setSelectedGateway(gateway.id),
                      className: `p-3 rounded-lg border-2 text-left transition-all ${selectedGateway === gateway.id ? "border-orange-600 bg-orange-50" : "border-gray-200 hover:border-gray-300"}`,
                      "data-collection-item-id": gateway?.id,
                      "data-arr-index": __arrIdx__,
                      "data-arr-variable-name": "paymentGateways",
                      children: [
                        /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/SettingsSection:489:26", "data-dynamic-content": "true", className: "text-2xl block mb-1", "data-arr-index": __arrIdx__, "data-arr-variable-name": "paymentGateways", "data-arr-field": "logo", children: gateway.logo }, void 0, false, {
                          fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                          lineNumber: 508,
                          columnNumber: 27
                        }, this),
                        /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/SettingsSection:490:26", "data-dynamic-content": "true", className: "text-sm font-medium", "data-arr-index": __arrIdx__, "data-arr-variable-name": "paymentGateways", "data-arr-field": "name", children: gateway.name }, void 0, false, {
                          fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                          lineNumber: 509,
                          columnNumber: 27
                        }, this),
                        gateway.popular && /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/SettingsSection:491:46", "data-dynamic-content": "false", className: "text-xs text-orange-600 block", children: "Popular" }, void 0, false, {
                          fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                          lineNumber: 510,
                          columnNumber: 47
                        }, this)
                      ]
                    },
                    gateway.id,
                    true,
                    {
                      fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                      lineNumber: 499,
                      columnNumber: 19
                    },
                    this
                  )
                ) }, void 0, false, {
                  fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                  lineNumber: 497,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 495,
                columnNumber: 19
              }, this),
              selectedGateway && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:499:20", "data-dynamic-content": "true", className: "space-y-3 border-t pt-4", children: [
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:500:22", "data-dynamic-content": "true", className: "text-sm font-medium text-gray-700", children: [
                  "Enter ",
                  paymentGateways.find((g) => g.id === selectedGateway)?.name,
                  " Credentials"
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                  lineNumber: 519,
                  columnNumber: 23
                }, this),
                getGatewayFields(selectedGateway).map(
                  (field) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:504:24", "data-dynamic-content": "true", children: [
                    /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "components/dashboard/SettingsSection:505:26", "data-dynamic-content": "true", "data-collection-item-field": "label", "data-collection-item-id": field?.id || field?._id, children: field.label }, void 0, false, {
                      fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                      lineNumber: 524,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ jsxDEV(
                      Input,
                      {
                        "data-source-location": "components/dashboard/SettingsSection:506:26",
                        "data-dynamic-content": "true",
                        type: field.type,
                        value: gatewayKeys[field.key] || "",
                        onChange: (e) => setGatewayKeys({ ...gatewayKeys, [field.key]: e.target.value }),
                        placeholder: field.placeholder,
                        className: "mt-1"
                      },
                      void 0,
                      false,
                      {
                        fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                        lineNumber: 525,
                        columnNumber: 27
                      },
                      this
                    )
                  ] }, field.key, true, {
                    fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                    lineNumber: 523,
                    columnNumber: 17
                  }, this)
                ),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:515:22", "data-dynamic-content": "true", className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "components/dashboard/SettingsSection:516:24", "data-dynamic-content": "true", onClick: handleSaveGatewayKeys, disabled: isSaving, children: isSaving ? "Saving..." : "Save Keys" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                    lineNumber: 535,
                    columnNumber: 25
                  }, this),
                  isEditingKeys && /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "components/dashboard/SettingsSection:520:26", "data-dynamic-content": "true", variant: "ghost", onClick: () => setIsEditingKeys(false), children: "Cancel" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                    lineNumber: 539,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                  lineNumber: 534,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 518,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 493,
              columnNumber: 13
            }, this),
            restaurant.payment_gateway && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:530:16", "data-dynamic-content": "true", className: "pt-4 border-t", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:531:18", "data-dynamic-content": "true", className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:532:20", "data-dynamic-content": "false", children: [
                /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "components/dashboard/SettingsSection:533:22", "data-dynamic-content": "false", className: "text-base font-medium", children: "Enable Online Payments" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                  lineNumber: 552,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:534:22", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Allow customers to pay online" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                  lineNumber: 553,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 551,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV(
                Switch,
                {
                  "data-source-location": "components/dashboard/SettingsSection:536:20",
                  "data-dynamic-content": "true",
                  checked: acceptOnlinePayment,
                  onCheckedChange: handleToggleOnlinePayment,
                  disabled: isSaving
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                  lineNumber: 555,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 550,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 549,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/SettingsSection.jsx",
            lineNumber: 478,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/SettingsSection.jsx",
            lineNumber: 471,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/SettingsSection.jsx",
          lineNumber: 461,
          columnNumber: 7
        }, this),
        features.delivery && /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/SettingsSection:551:8", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "components/dashboard/SettingsSection:552:10", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "components/dashboard/SettingsSection:553:12", "data-dynamic-content": "false", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV(Truck, { "data-source-location": "components/dashboard/SettingsSection:554:14", "data-dynamic-content": "false", className: "w-5 h-5" }, void 0, false, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 573,
              columnNumber: 15
            }, this),
            "Delivery Zones"
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/SettingsSection.jsx",
            lineNumber: 572,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/SettingsSection.jsx",
            lineNumber: 571,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/SettingsSection:558:10", "data-dynamic-content": "true", className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:559:12", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Define delivery zones with associated fees and minimum order values" }, void 0, false, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 578,
              columnNumber: 13
            }, this),
            deliveryZones.length > 0 && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:565:14", "data-dynamic-content": "true", className: "space-y-2", children: deliveryZones.map(
              (zone, idx) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:567:18", "data-dynamic-content": "true", className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:568:20", "data-dynamic-content": "true", children: [
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:569:22", "data-dynamic-content": "true", className: "font-medium", "data-collection-item-field": "zone_name", "data-collection-item-id": zone?.id || zone?._id, children: zone.zone_name }, void 0, false, {
                    fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                    lineNumber: 588,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:570:22", "data-dynamic-content": "true", className: "text-xs text-gray-500", "data-collection-item-field": "delivery_fee", "data-collection-item-id": zone?.id || zone?._id, children: [
                    "Areas: ",
                    zone.areas?.join(", "),
                    " • Fee: ₹",
                    zone.delivery_fee,
                    " • Min Order: ₹",
                    zone.minimum_order
                  ] }, void 0, true, {
                    fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                    lineNumber: 589,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                  lineNumber: 587,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "components/dashboard/SettingsSection:574:20", "data-dynamic-content": "true", variant: "ghost", size: "sm", onClick: () => handleDeleteZone(idx), children: "Delete" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                  lineNumber: 593,
                  columnNumber: 21
                }, this)
              ] }, idx, true, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 586,
                columnNumber: 13
              }, this)
            ) }, void 0, false, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 584,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:583:12", "data-dynamic-content": "true", className: "border-t pt-4 space-y-3", children: [
              /* @__PURE__ */ jsxDEV("h4", { "data-source-location": "components/dashboard/SettingsSection:584:14", "data-dynamic-content": "false", className: "font-medium", children: "Add New Zone" }, void 0, false, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 603,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:585:14", "data-dynamic-content": "true", className: "grid grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:586:16", "data-dynamic-content": "true", children: [
                  /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "components/dashboard/SettingsSection:587:18", "data-dynamic-content": "false", children: "Zone Name" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                    lineNumber: 606,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    Input,
                    {
                      "data-source-location": "components/dashboard/SettingsSection:588:18",
                      "data-dynamic-content": "true",
                      value: newZone.zone_name,
                      onChange: (e) => setNewZone({ ...newZone, zone_name: e.target.value }),
                      placeholder: "e.g., Zone 1"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                      lineNumber: 607,
                      columnNumber: 19
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                  lineNumber: 605,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:594:16", "data-dynamic-content": "true", children: [
                  /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "components/dashboard/SettingsSection:595:18", "data-dynamic-content": "false", children: "Areas (comma-separated)" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                    lineNumber: 614,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    Input,
                    {
                      "data-source-location": "components/dashboard/SettingsSection:596:18",
                      "data-dynamic-content": "true",
                      value: newZone.areas,
                      onChange: (e) => setNewZone({ ...newZone, areas: e.target.value }),
                      placeholder: "e.g., Area1, Area2"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                      lineNumber: 615,
                      columnNumber: 19
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                  lineNumber: 613,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:602:16", "data-dynamic-content": "true", children: [
                  /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "components/dashboard/SettingsSection:603:18", "data-dynamic-content": "false", children: "Delivery Fee (₹)" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                    lineNumber: 622,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    Input,
                    {
                      "data-source-location": "components/dashboard/SettingsSection:604:18",
                      "data-dynamic-content": "true",
                      type: "number",
                      value: newZone.delivery_fee,
                      onChange: (e) => setNewZone({ ...newZone, delivery_fee: e.target.value }),
                      placeholder: "50"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                      lineNumber: 623,
                      columnNumber: 19
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                  lineNumber: 621,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:611:16", "data-dynamic-content": "true", children: [
                  /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "components/dashboard/SettingsSection:612:18", "data-dynamic-content": "false", children: "Minimum Order (₹)" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                    lineNumber: 631,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    Input,
                    {
                      "data-source-location": "components/dashboard/SettingsSection:613:18",
                      "data-dynamic-content": "true",
                      type: "number",
                      value: newZone.minimum_order,
                      onChange: (e) => setNewZone({ ...newZone, minimum_order: e.target.value }),
                      placeholder: "200"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                      lineNumber: 632,
                      columnNumber: 19
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                  lineNumber: 630,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 604,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "components/dashboard/SettingsSection:621:14", "data-dynamic-content": "true", onClick: handleAddDeliveryZone, disabled: isSaving, children: "Add Zone" }, void 0, false, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 640,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 602,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/SettingsSection.jsx",
            lineNumber: 577,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/SettingsSection.jsx",
          lineNumber: 570,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/SettingsSection:629:6", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "components/dashboard/SettingsSection:630:8", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "components/dashboard/SettingsSection:631:10", "data-dynamic-content": "false", children: "User Information" }, void 0, false, {
            fileName: "/app/src/components/dashboard/SettingsSection.jsx",
            lineNumber: 650,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/SettingsSection.jsx",
            lineNumber: 649,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/SettingsSection:633:8", "data-dynamic-content": "true", className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:634:10", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:635:12", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Name" }, void 0, false, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 654,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:636:12", "data-dynamic-content": "true", className: "font-medium", "data-collection-item-field": "full_name", "data-collection-item-id": user?.id || user?._id, children: user?.full_name }, void 0, false, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 655,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 653,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:638:10", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:639:12", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Email" }, void 0, false, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 658,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:640:12", "data-dynamic-content": "true", className: "font-medium", "data-collection-item-field": "email", "data-collection-item-id": user?.id || user?._id, children: user?.email }, void 0, false, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 659,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 657,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:642:10", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:643:12", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Role" }, void 0, false, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 662,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:644:12", "data-dynamic-content": "true", className: "font-medium capitalize", "data-collection-item-field": "role", "data-collection-item-id": user?.id || user?._id, children: user?.role }, void 0, false, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 663,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 661,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/SettingsSection.jsx",
            lineNumber: 652,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/SettingsSection.jsx",
          lineNumber: 648,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(Dialog, { "data-source-location": "components/dashboard/SettingsSection:650:6", "data-dynamic-content": "true", open: showOtpDialog, onOpenChange: setShowOtpDialog, children: /* @__PURE__ */ jsxDEV(DialogContent, { "data-source-location": "components/dashboard/SettingsSection:651:8", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV(DialogHeader, { "data-source-location": "components/dashboard/SettingsSection:652:10", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(DialogTitle, { "data-source-location": "components/dashboard/SettingsSection:653:12", "data-dynamic-content": "false", children: "Verify OTP" }, void 0, false, {
            fileName: "/app/src/components/dashboard/SettingsSection.jsx",
            lineNumber: 672,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/SettingsSection.jsx",
            lineNumber: 671,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:655:10", "data-dynamic-content": "true", className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/SettingsSection:656:12", "data-dynamic-content": "true", className: "text-sm text-gray-600", children: [
              "An OTP has been sent to ",
              /* @__PURE__ */ jsxDEV("strong", { "data-source-location": "components/dashboard/SettingsSection:657:38", "data-dynamic-content": "true", "data-collection-item-field": "email", "data-collection-item-id": restaurant?.id || restaurant?._id, children: restaurant.email }, void 0, false, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 676,
                columnNumber: 39
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 675,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/SettingsSection:659:12", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "components/dashboard/SettingsSection:660:14", "data-dynamic-content": "false", children: "Enter OTP" }, void 0, false, {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 679,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV(
                Input,
                {
                  "data-source-location": "components/dashboard/SettingsSection:661:14",
                  "data-dynamic-content": "true",
                  value: otp,
                  onChange: (e) => setOtp(e.target.value),
                  placeholder: "Enter 6-digit OTP",
                  maxLength: 6
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                  lineNumber: 680,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/SettingsSection.jsx",
              lineNumber: 678,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(
              Button,
              {
                "data-source-location": "components/dashboard/SettingsSection:668:12",
                "data-dynamic-content": "true",
                onClick: handleSaveRazorpayKeys,
                disabled: isSaving || otp.length !== 6,
                className: "w-full",
                children: isSaving ? "Verifying..." : "Verify & Save"
              },
              void 0,
              false,
              {
                fileName: "/app/src/components/dashboard/SettingsSection.jsx",
                lineNumber: 687,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/SettingsSection.jsx",
            lineNumber: 674,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/SettingsSection.jsx",
          lineNumber: 670,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "/app/src/components/dashboard/SettingsSection.jsx",
          lineNumber: 669,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/app/src/components/dashboard/SettingsSection.jsx",
      lineNumber: 282,
      columnNumber: 5
    },
    this
  );
}
_s(SettingsSection, "MAkZ1skUAPW1NkSh950iAour0HI=");
_c = SettingsSection;
var _c;
$RefreshReg$(_c, "SettingsSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/dashboard/SettingsSection.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/dashboard/SettingsSection.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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LGtCQUFNLHdCQUFxQjtBQUFBLGtCQUE4Qyx3QkFBcUI7QUFBQSxrQkFDL0YsT0FBTzFGO0FBQUFBLGtCQUNQLFVBQVUsQ0FBQ3NFLE1BQU1yRSxPQUFPcUUsRUFBRWtELE9BQU92RCxLQUFLO0FBQUEsa0JBQ3RDLGFBQVk7QUFBQSxrQkFDWixXQUFXO0FBQUE7QUFBQSxnQkFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FJYTtBQUFBLGlCQU5mO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUUE7QUFBQSxZQUNBO0FBQUEsY0FBQztBQUFBO0FBQUEsZ0JBQU8sd0JBQXFCO0FBQUEsZ0JBQThDLHdCQUFxQjtBQUFBLGdCQUNoRyxTQUFTbUM7QUFBQUEsZ0JBQ1QsVUFBVTFHLFlBQVlNLElBQUlzSSxXQUFXO0FBQUEsZ0JBQ3JDLFdBQVU7QUFBQSxnQkFFUDVJLHFCQUFXLGlCQUFpQjtBQUFBO0FBQUEsY0FML0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTUE7QUFBQSxlQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW9CQTtBQUFBLGFBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF5QkEsS0ExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTJCQTtBQUFBO0FBQUE7QUFBQSxJQTlaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUErWkE7QUFFSjtBQUFDSixHQTVwQnVCSCxpQkFBZTtBQUFBd0osS0FBZnhKO0FBQWUsSUFBQXdKO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwibW90aW9uIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEhlYWRlciIsIkNhcmRUaXRsZSIsIlN3aXRjaCIsIkxhYmVsIiwiQnV0dG9uIiwiSW5wdXQiLCJEaWFsb2ciLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nSGVhZGVyIiwiRGlhbG9nVGl0bGUiLCJiYXNlNDQiLCJUcnVjayIsIlNob3BwaW5nQmFnIiwiVXBsb2FkIiwiSW1hZ2UiLCJJbWFnZUljb24iLCJDcmVkaXRDYXJkIiwiTG9jayIsIlNldHRpbmdzU2VjdGlvbiIsInJlc3RhdXJhbnQiLCJ1c2VyIiwiX3MiLCJmZWF0dXJlcyIsInNldEZlYXR1cmVzIiwiZmVhdHVyZXNfZW5hYmxlZCIsImlzU2F2aW5nIiwic2V0SXNTYXZpbmciLCJpc1VwbG9hZGluZyIsInNldElzVXBsb2FkaW5nIiwic2hvd090cERpYWxvZyIsInNldFNob3dPdHBEaWFsb2ciLCJvdHAiLCJzZXRPdHAiLCJzZW50T3RwIiwic2V0U2VudE90cCIsInNlbGVjdGVkR2F0ZXdheSIsInNldFNlbGVjdGVkR2F0ZXdheSIsInBheW1lbnRfZ2F0ZXdheSIsImdhdGV3YXlLZXlzIiwic2V0R2F0ZXdheUtleXMiLCJyYXpvcnBheV9rZXlfaWQiLCJyYXpvcnBheV9rZXlfc2VjcmV0IiwicGhvbmVwZV9tZXJjaGFudF9pZCIsInBob25lcGVfc2FsdF9rZXkiLCJwYXl0bV9tZXJjaGFudF9pZCIsInBheXRtX21lcmNoYW50X2tleSIsInN0cmlwZV9wdWJsaXNoYWJsZV9rZXkiLCJzdHJpcGVfc2VjcmV0X2tleSIsImNhc2hmcmVlX2FwcF9pZCIsImNhc2hmcmVlX3NlY3JldF9rZXkiLCJpc0VkaXRpbmdLZXlzIiwic2V0SXNFZGl0aW5nS2V5cyIsImFjY2VwdE9ubGluZVBheW1lbnQiLCJzZXRBY2NlcHRPbmxpbmVQYXltZW50Iiwic2V0dGluZ3MiLCJhY2NlcHRfb25saW5lX3BheW1lbnQiLCJwYXltZW50R2F0ZXdheXMiLCJpZCIsIm5hbWUiLCJsb2dvIiwicG9wdWxhciIsImdldEdhdGV3YXlGaWVsZHMiLCJnYXRld2F5SWQiLCJmaWVsZHMiLCJyYXpvcnBheSIsImtleSIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwicGhvbmVwZSIsInBheXRtIiwic3RyaXBlIiwiY2FzaGZyZWUiLCJkZWxpdmVyeVpvbmVzIiwic2V0RGVsaXZlcnlab25lcyIsImRlbGl2ZXJ5X3pvbmVzIiwibmV3Wm9uZSIsInNldE5ld1pvbmUiLCJ6b25lX25hbWUiLCJhcmVhcyIsImRlbGl2ZXJ5X2ZlZSIsIm1pbmltdW1fb3JkZXIiLCJwbGFuTGltaXRzIiwidHJpYWwiLCJ0YWJsZXMiLCJjYW5VcGdyYWRlIiwiYmFzaWMiLCJwcm8iLCJtdWx0aV9vdXRsZXQiLCJjdXJyZW50UGxhbiIsInN1YnNjcmlwdGlvbl9wbGFuIiwiY3VycmVudExpbWl0cyIsImlzRmVhdHVyZUF2YWlsYWJsZSIsImZlYXR1cmVOYW1lIiwiaW5jbHVkZXMiLCJoYW5kbGVGZWF0dXJlVG9nZ2xlIiwidmFsdWUiLCJ1cGRhdGVkRmVhdHVyZXMiLCJlbnRpdGllcyIsIlJlc3RhdXJhbnQiLCJ1cGRhdGUiLCJlIiwiY29uc29sZSIsImVycm9yIiwiaGFuZGxlSW1hZ2VVcGxvYWQiLCJmaWxlIiwiZmllbGROYW1lIiwicmVzdWx0IiwiaW50ZWdyYXRpb25zIiwiQ29yZSIsIlVwbG9hZEZpbGUiLCJmaWxlX3VybCIsImFsZXJ0Iiwic2VuZE90cEZvcktleVVwZGF0ZSIsImdlbmVyYXRlZE90cCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiU2VuZEVtYWlsIiwidG8iLCJlbWFpbCIsInN1YmplY3QiLCJib2R5IiwiaGFuZGxlU2F2ZUdhdGV3YXlLZXlzIiwibWlzc2luZ0ZpZWxkIiwiZmluZCIsImYiLCJ1cGRhdGVEYXRhIiwiZm9yRWFjaCIsImciLCJoYW5kbGVTYXZlUmF6b3JwYXlLZXlzIiwiaGFuZGxlVG9nZ2xlT25saW5lUGF5bWVudCIsImNoZWNrZWQiLCJoYW5kbGVBZGREZWxpdmVyeVpvbmUiLCJ6b25lIiwic3BsaXQiLCJtYXAiLCJhIiwidHJpbSIsImZpbHRlciIsIkJvb2xlYW4iLCJOdW1iZXIiLCJ1cGRhdGVkWm9uZXMiLCJoYW5kbGVEZWxldGVab25lIiwiaW5kZXgiLCJfIiwiaSIsIm9wYWNpdHkiLCJfaWQiLCJsb2dvX3VybCIsInRhcmdldCIsImZpbGVzIiwiY292ZXJfaW1hZ2VfdXJsIiwiY2l0eSIsInBob25lIiwiZmVhdHVyZSIsIl9fYXJySWR4X18iLCJyZXBsYWNlIiwibCIsInRvVXBwZXJDYXNlIiwidGFrZWF3YXkiLCJkZWxpdmVyeSIsImdhdGV3YXkiLCJmaWVsZCIsImxlbmd0aCIsImlkeCIsImpvaW4iLCJmdWxsX25hbWUiLCJyb2xlIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiU2V0dGluZ3NTZWN0aW9uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3N3aXRjaFwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2xhYmVsXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCI7XG5pbXBvcnQgeyBEaWFsb2csIERpYWxvZ0NvbnRlbnQsIERpYWxvZ0hlYWRlciwgRGlhbG9nVGl0bGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2RpYWxvZ1wiO1xuaW1wb3J0IHsgYmFzZTQ0IH0gZnJvbSBcIkAvYXBpL2Jhc2U0NENsaWVudFwiO1xuaW1wb3J0IHsgVHJ1Y2ssIFNob3BwaW5nQmFnLCBVcGxvYWQsIEltYWdlIGFzIEltYWdlSWNvbiwgQ3JlZGl0Q2FyZCwgTG9jayB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2V0dGluZ3NTZWN0aW9uKHsgcmVzdGF1cmFudCwgdXNlciB9KSB7XG4gIGNvbnN0IFtmZWF0dXJlcywgc2V0RmVhdHVyZXNdID0gdXNlU3RhdGUocmVzdGF1cmFudD8uZmVhdHVyZXNfZW5hYmxlZCB8fCB7fSk7XG4gIGNvbnN0IFtpc1NhdmluZywgc2V0SXNTYXZpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNVcGxvYWRpbmcsIHNldElzVXBsb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dPdHBEaWFsb2csIHNldFNob3dPdHBEaWFsb2ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbb3RwLCBzZXRPdHBdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzZW50T3RwLCBzZXRTZW50T3RwXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc2VsZWN0ZWRHYXRld2F5LCBzZXRTZWxlY3RlZEdhdGV3YXldID0gdXNlU3RhdGUocmVzdGF1cmFudD8ucGF5bWVudF9nYXRld2F5IHx8ICcnKTtcbiAgY29uc3QgW2dhdGV3YXlLZXlzLCBzZXRHYXRld2F5S2V5c10gPSB1c2VTdGF0ZSh7XG4gICAgLy8gUmF6b3JwYXlcbiAgICByYXpvcnBheV9rZXlfaWQ6IHJlc3RhdXJhbnQ/LnJhem9ycGF5X2tleV9pZCB8fCAnJyxcbiAgICByYXpvcnBheV9rZXlfc2VjcmV0OiAnJyxcbiAgICAvLyBQaG9uZVBlXG4gICAgcGhvbmVwZV9tZXJjaGFudF9pZDogcmVzdGF1cmFudD8ucGhvbmVwZV9tZXJjaGFudF9pZCB8fCAnJyxcbiAgICBwaG9uZXBlX3NhbHRfa2V5OiAnJyxcbiAgICAvLyBQYXl0bVxuICAgIHBheXRtX21lcmNoYW50X2lkOiByZXN0YXVyYW50Py5wYXl0bV9tZXJjaGFudF9pZCB8fCAnJyxcbiAgICBwYXl0bV9tZXJjaGFudF9rZXk6ICcnLFxuICAgIC8vIFN0cmlwZVxuICAgIHN0cmlwZV9wdWJsaXNoYWJsZV9rZXk6IHJlc3RhdXJhbnQ/LnN0cmlwZV9wdWJsaXNoYWJsZV9rZXkgfHwgJycsXG4gICAgc3RyaXBlX3NlY3JldF9rZXk6ICcnLFxuICAgIC8vIENhc2hmcmVlXG4gICAgY2FzaGZyZWVfYXBwX2lkOiByZXN0YXVyYW50Py5jYXNoZnJlZV9hcHBfaWQgfHwgJycsXG4gICAgY2FzaGZyZWVfc2VjcmV0X2tleTogJydcbiAgfSk7XG4gIGNvbnN0IFtpc0VkaXRpbmdLZXlzLCBzZXRJc0VkaXRpbmdLZXlzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2FjY2VwdE9ubGluZVBheW1lbnQsIHNldEFjY2VwdE9ubGluZVBheW1lbnRdID0gdXNlU3RhdGUocmVzdGF1cmFudD8uc2V0dGluZ3M/LmFjY2VwdF9vbmxpbmVfcGF5bWVudCB8fCBmYWxzZSk7XG5cbiAgY29uc3QgcGF5bWVudEdhdGV3YXlzID0gW1xuICB7IGlkOiAncmF6b3JwYXknLCBuYW1lOiAnUmF6b3JwYXknLCBsb2dvOiAn8J+SsycsIHBvcHVsYXI6IHRydWUgfSxcbiAgeyBpZDogJ3Bob25lcGUnLCBuYW1lOiAnUGhvbmVQZScsIGxvZ286ICfwn5OxJyB9LFxuICB7IGlkOiAncGF5dG0nLCBuYW1lOiAnUGF5dG0nLCBsb2dvOiAn8J+SsCcgfSxcbiAgeyBpZDogJ3N0cmlwZScsIG5hbWU6ICdTdHJpcGUnLCBsb2dvOiAn8J+MkCcgfSxcbiAgeyBpZDogJ2Nhc2hmcmVlJywgbmFtZTogJ0Nhc2hmcmVlJywgbG9nbzogJ/CfkrUnIH1dO1xuXG5cbiAgY29uc3QgZ2V0R2F0ZXdheUZpZWxkcyA9IChnYXRld2F5SWQpID0+IHtcbiAgICBjb25zdCBmaWVsZHMgPSB7XG4gICAgICByYXpvcnBheTogW1xuICAgICAgeyBrZXk6ICdyYXpvcnBheV9rZXlfaWQnLCBsYWJlbDogJ1Jhem9ycGF5IEtleSBJRCcsIHBsYWNlaG9sZGVyOiAncnpwX2xpdmVfeHh4eHh4eHgnLCB0eXBlOiAndGV4dCcgfSxcbiAgICAgIHsga2V5OiAncmF6b3JwYXlfa2V5X3NlY3JldCcsIGxhYmVsOiAnUmF6b3JwYXkgS2V5IFNlY3JldCcsIHBsYWNlaG9sZGVyOiAnRW50ZXIgU2VjcmV0IEtleScsIHR5cGU6ICdwYXNzd29yZCcgfV0sXG5cbiAgICAgIHBob25lcGU6IFtcbiAgICAgIHsga2V5OiAncGhvbmVwZV9tZXJjaGFudF9pZCcsIGxhYmVsOiAnUGhvbmVQZSBNZXJjaGFudCBJRCcsIHBsYWNlaG9sZGVyOiAnRW50ZXIgTWVyY2hhbnQgSUQnLCB0eXBlOiAndGV4dCcgfSxcbiAgICAgIHsga2V5OiAncGhvbmVwZV9zYWx0X2tleScsIGxhYmVsOiAnUGhvbmVQZSBTYWx0IEtleScsIHBsYWNlaG9sZGVyOiAnRW50ZXIgU2FsdCBLZXknLCB0eXBlOiAncGFzc3dvcmQnIH1dLFxuXG4gICAgICBwYXl0bTogW1xuICAgICAgeyBrZXk6ICdwYXl0bV9tZXJjaGFudF9pZCcsIGxhYmVsOiAnUGF5dG0gTWVyY2hhbnQgSUQnLCBwbGFjZWhvbGRlcjogJ0VudGVyIE1lcmNoYW50IElEJywgdHlwZTogJ3RleHQnIH0sXG4gICAgICB7IGtleTogJ3BheXRtX21lcmNoYW50X2tleScsIGxhYmVsOiAnUGF5dG0gTWVyY2hhbnQgS2V5JywgcGxhY2Vob2xkZXI6ICdFbnRlciBNZXJjaGFudCBLZXknLCB0eXBlOiAncGFzc3dvcmQnIH1dLFxuXG4gICAgICBzdHJpcGU6IFtcbiAgICAgIHsga2V5OiAnc3RyaXBlX3B1Ymxpc2hhYmxlX2tleScsIGxhYmVsOiAnU3RyaXBlIFB1Ymxpc2hhYmxlIEtleScsIHBsYWNlaG9sZGVyOiAncGtfbGl2ZV94eHh4eCcsIHR5cGU6ICd0ZXh0JyB9LFxuICAgICAgeyBrZXk6ICdzdHJpcGVfc2VjcmV0X2tleScsIGxhYmVsOiAnU3RyaXBlIFNlY3JldCBLZXknLCBwbGFjZWhvbGRlcjogJ3NrX2xpdmVfeHh4eHgnLCB0eXBlOiAncGFzc3dvcmQnIH1dLFxuXG4gICAgICBjYXNoZnJlZTogW1xuICAgICAgeyBrZXk6ICdjYXNoZnJlZV9hcHBfaWQnLCBsYWJlbDogJ0Nhc2hmcmVlIEFwcCBJRCcsIHBsYWNlaG9sZGVyOiAnRW50ZXIgQXBwIElEJywgdHlwZTogJ3RleHQnIH0sXG4gICAgICB7IGtleTogJ2Nhc2hmcmVlX3NlY3JldF9rZXknLCBsYWJlbDogJ0Nhc2hmcmVlIFNlY3JldCBLZXknLCBwbGFjZWhvbGRlcjogJ0VudGVyIFNlY3JldCBLZXknLCB0eXBlOiAncGFzc3dvcmQnIH1dXG5cbiAgICB9O1xuICAgIHJldHVybiBmaWVsZHNbZ2F0ZXdheUlkXSB8fCBbXTtcbiAgfTtcbiAgY29uc3QgW2RlbGl2ZXJ5Wm9uZXMsIHNldERlbGl2ZXJ5Wm9uZXNdID0gdXNlU3RhdGUocmVzdGF1cmFudD8uZGVsaXZlcnlfem9uZXMgfHwgW10pO1xuICBjb25zdCBbbmV3Wm9uZSwgc2V0TmV3Wm9uZV0gPSB1c2VTdGF0ZSh7IHpvbmVfbmFtZTogXCJcIiwgYXJlYXM6IFwiXCIsIGRlbGl2ZXJ5X2ZlZTogMCwgbWluaW11bV9vcmRlcjogMCB9KTtcblxuICAvLyBQbGFuLWJhc2VkIGZlYXR1cmUgbGltaXRzXG4gIGNvbnN0IHBsYW5MaW1pdHMgPSB7XG4gICAgdHJpYWw6IHtcbiAgICAgIHRhYmxlczogMTAsXG4gICAgICBmZWF0dXJlczogWydxcl9vcmRlcmluZyddLFxuICAgICAgY2FuVXBncmFkZTogdHJ1ZVxuICAgIH0sXG4gICAgYmFzaWM6IHtcbiAgICAgIHRhYmxlczogMjUsXG4gICAgICBmZWF0dXJlczogWydxcl9vcmRlcmluZycsICdjdXN0b21fYnJhbmRpbmcnLCAnY3VzdG9tZXJfYW5hbHl0aWNzJ10sXG4gICAgICBjYW5VcGdyYWRlOiB0cnVlXG4gICAgfSxcbiAgICBwcm86IHtcbiAgICAgIHRhYmxlczogOTk5LFxuICAgICAgZmVhdHVyZXM6IFsncXJfb3JkZXJpbmcnLCAnY3VzdG9tX2JyYW5kaW5nJywgJ2N1c3RvbWVyX2FuYWx5dGljcycsICdwYXltZW50X2ludGVncmF0aW9uJywgJ2RlbGl2ZXJ5JywgJ3Rha2Vhd2F5J10sXG4gICAgICBjYW5VcGdyYWRlOiB0cnVlXG4gICAgfSxcbiAgICBtdWx0aV9vdXRsZXQ6IHtcbiAgICAgIHRhYmxlczogOTk5LFxuICAgICAgZmVhdHVyZXM6IFsncXJfb3JkZXJpbmcnLCAnY3VzdG9tX2JyYW5kaW5nJywgJ2N1c3RvbWVyX2FuYWx5dGljcycsICdwYXltZW50X2ludGVncmF0aW9uJywgJ2RlbGl2ZXJ5JywgJ3Rha2Vhd2F5JywgJ211bHRpX291dGxldCddLFxuICAgICAgY2FuVXBncmFkZTogZmFsc2VcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY3VycmVudFBsYW4gPSByZXN0YXVyYW50Py5zdWJzY3JpcHRpb25fcGxhbiB8fCAndHJpYWwnO1xuICBjb25zdCBjdXJyZW50TGltaXRzID0gcGxhbkxpbWl0c1tjdXJyZW50UGxhbl07XG5cbiAgY29uc3QgaXNGZWF0dXJlQXZhaWxhYmxlID0gKGZlYXR1cmVOYW1lKSA9PiB7XG4gICAgcmV0dXJuIGN1cnJlbnRMaW1pdHMuZmVhdHVyZXMuaW5jbHVkZXMoZmVhdHVyZU5hbWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZlYXR1cmVUb2dnbGUgPSBhc3luYyAoZmVhdHVyZU5hbWUsIHZhbHVlKSA9PiB7XG4gICAgc2V0SXNTYXZpbmcodHJ1ZSk7XG4gICAgY29uc3QgdXBkYXRlZEZlYXR1cmVzID0geyAuLi5mZWF0dXJlcywgW2ZlYXR1cmVOYW1lXTogdmFsdWUgfTtcbiAgICBzZXRGZWF0dXJlcyh1cGRhdGVkRmVhdHVyZXMpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5SZXN0YXVyYW50LnVwZGF0ZShyZXN0YXVyYW50LmlkLCB7XG4gICAgICAgIGZlYXR1cmVzX2VuYWJsZWQ6IHVwZGF0ZWRGZWF0dXJlc1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byB1cGRhdGUgZmVhdHVyZXNcIiwgZSk7XG4gICAgICBzZXRGZWF0dXJlcyhmZWF0dXJlcyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzU2F2aW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSW1hZ2VVcGxvYWQgPSBhc3luYyAoZmlsZSwgZmllbGROYW1lKSA9PiB7XG4gICAgaWYgKCFmaWxlKSByZXR1cm47XG4gICAgc2V0SXNVcGxvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGJhc2U0NC5pbnRlZ3JhdGlvbnMuQ29yZS5VcGxvYWRGaWxlKHsgZmlsZSB9KTtcbiAgICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5SZXN0YXVyYW50LnVwZGF0ZShyZXN0YXVyYW50LmlkLCB7XG4gICAgICAgIFtmaWVsZE5hbWVdOiByZXN1bHQuZmlsZV91cmxcbiAgICAgIH0pO1xuICAgICAgYWxlcnQoJ0ltYWdlIHVwbG9hZGVkIHN1Y2Nlc3NmdWxseSEnKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHVwbG9hZCBpbWFnZVwiLCBlKTtcbiAgICAgIGFsZXJ0KCdGYWlsZWQgdG8gdXBsb2FkIGltYWdlJyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzVXBsb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2VuZE90cEZvcktleVVwZGF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBnZW5lcmF0ZWRPdHAgPSBNYXRoLmZsb29yKDEwMDAwMCArIE1hdGgucmFuZG9tKCkgKiA5MDAwMDApLnRvU3RyaW5nKCk7XG4gICAgc2V0U2VudE90cChnZW5lcmF0ZWRPdHApO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGJhc2U0NC5pbnRlZ3JhdGlvbnMuQ29yZS5TZW5kRW1haWwoe1xuICAgICAgICB0bzogcmVzdGF1cmFudC5lbWFpbCxcbiAgICAgICAgc3ViamVjdDogXCJPVFAgZm9yIFJhem9ycGF5IEFQSSBLZXkgVXBkYXRlXCIsXG4gICAgICAgIGJvZHk6IGBZb3VyIE9UUCBmb3IgdXBkYXRpbmcgUmF6b3JwYXkgQVBJIGtleXMgaXM6ICR7Z2VuZXJhdGVkT3RwfS4gVGhpcyBPVFAgaXMgdmFsaWQgZm9yIDEwIG1pbnV0ZXMuYFxuICAgICAgfSk7XG4gICAgICBzZXRTaG93T3RwRGlhbG9nKHRydWUpO1xuICAgICAgYWxlcnQoJ09UUCBzZW50IHRvIHlvdXIgcmVnaXN0ZXJlZCBlbWFpbCcpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBPVFBcIiwgZSk7XG4gICAgICBhbGVydCgnRmFpbGVkIHRvIHNlbmQgT1RQLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVTYXZlR2F0ZXdheUtleXMgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFzZWxlY3RlZEdhdGV3YXkpIHtcbiAgICAgIGFsZXJ0KCdQbGVhc2Ugc2VsZWN0IGEgcGF5bWVudCBnYXRld2F5Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmllbGRzID0gZ2V0R2F0ZXdheUZpZWxkcyhzZWxlY3RlZEdhdGV3YXkpO1xuICAgIGNvbnN0IG1pc3NpbmdGaWVsZCA9IGZpZWxkcy5maW5kKChmKSA9PiAhZ2F0ZXdheUtleXNbZi5rZXldKTtcbiAgICBpZiAobWlzc2luZ0ZpZWxkKSB7XG4gICAgICBhbGVydChgUGxlYXNlIGVudGVyICR7bWlzc2luZ0ZpZWxkLmxhYmVsfWApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldElzU2F2aW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1cGRhdGVEYXRhID0geyBwYXltZW50X2dhdGV3YXk6IHNlbGVjdGVkR2F0ZXdheSB9O1xuICAgICAgZmllbGRzLmZvckVhY2goKGYpID0+IHt1cGRhdGVEYXRhW2Yua2V5XSA9IGdhdGV3YXlLZXlzW2Yua2V5XTt9KTtcblxuICAgICAgYXdhaXQgYmFzZTQ0LmVudGl0aWVzLlJlc3RhdXJhbnQudXBkYXRlKHJlc3RhdXJhbnQuaWQsIHVwZGF0ZURhdGEpO1xuICAgICAgYWxlcnQoYCR7cGF5bWVudEdhdGV3YXlzLmZpbmQoKGcpID0+IGcuaWQgPT09IHNlbGVjdGVkR2F0ZXdheSk/Lm5hbWV9IGtleXMgc2F2ZWQgc3VjY2Vzc2Z1bGx5IWApO1xuICAgICAgc2V0SXNFZGl0aW5nS2V5cyhmYWxzZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzYXZlIGtleXNcIiwgZSk7XG4gICAgICBhbGVydCgnRmFpbGVkIHRvIHNhdmUgcGF5bWVudCBnYXRld2F5IGtleXMnKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNTYXZpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVTYXZlUmF6b3JwYXlLZXlzID0gaGFuZGxlU2F2ZUdhdGV3YXlLZXlzO1xuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZU9ubGluZVBheW1lbnQgPSBhc3luYyAoY2hlY2tlZCkgPT4ge1xuICAgIGlmIChjaGVja2VkICYmICFyZXN0YXVyYW50LnBheW1lbnRfZ2F0ZXdheSkge1xuICAgICAgYWxlcnQoJ1BsZWFzZSBjb25maWd1cmUgYSBwYXltZW50IGdhdGV3YXkgZmlyc3QgdG8gZW5hYmxlIG9ubGluZSBwYXltZW50cycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldElzU2F2aW5nKHRydWUpO1xuICAgIHNldEFjY2VwdE9ubGluZVBheW1lbnQoY2hlY2tlZCk7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgYmFzZTQ0LmVudGl0aWVzLlJlc3RhdXJhbnQudXBkYXRlKHJlc3RhdXJhbnQuaWQsIHtcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAuLi5yZXN0YXVyYW50LnNldHRpbmdzLFxuICAgICAgICAgIGFjY2VwdF9vbmxpbmVfcGF5bWVudDogY2hlY2tlZFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHVwZGF0ZSBwYXltZW50IHNldHRpbmdzXCIsIGUpO1xuICAgICAgc2V0QWNjZXB0T25saW5lUGF5bWVudCghY2hlY2tlZCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzU2F2aW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQWRkRGVsaXZlcnlab25lID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghbmV3Wm9uZS56b25lX25hbWUgfHwgIW5ld1pvbmUuYXJlYXMpIHtcbiAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgem9uZSBuYW1lIGFuZCBhcmVhcycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHpvbmUgPSB7XG4gICAgICB6b25lX25hbWU6IG5ld1pvbmUuem9uZV9uYW1lLFxuICAgICAgYXJlYXM6IG5ld1pvbmUuYXJlYXMuc3BsaXQoJywnKS5tYXAoKGEpID0+IGEudHJpbSgpKS5maWx0ZXIoQm9vbGVhbiksXG4gICAgICBkZWxpdmVyeV9mZWU6IE51bWJlcihuZXdab25lLmRlbGl2ZXJ5X2ZlZSksXG4gICAgICBtaW5pbXVtX29yZGVyOiBOdW1iZXIobmV3Wm9uZS5taW5pbXVtX29yZGVyKVxuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGVkWm9uZXMgPSBbLi4uZGVsaXZlcnlab25lcywgem9uZV07XG4gICAgc2V0RGVsaXZlcnlab25lcyh1cGRhdGVkWm9uZXMpO1xuXG4gICAgc2V0SXNTYXZpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5SZXN0YXVyYW50LnVwZGF0ZShyZXN0YXVyYW50LmlkLCB7XG4gICAgICAgIGRlbGl2ZXJ5X3pvbmVzOiB1cGRhdGVkWm9uZXNcbiAgICAgIH0pO1xuICAgICAgc2V0TmV3Wm9uZSh7IHpvbmVfbmFtZTogXCJcIiwgYXJlYXM6IFwiXCIsIGRlbGl2ZXJ5X2ZlZTogMCwgbWluaW11bV9vcmRlcjogMCB9KTtcbiAgICAgIGFsZXJ0KCdEZWxpdmVyeSB6b25lIGFkZGVkIHN1Y2Nlc3NmdWxseSEnKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGFkZCBkZWxpdmVyeSB6b25lXCIsIGUpO1xuICAgICAgc2V0RGVsaXZlcnlab25lcyhkZWxpdmVyeVpvbmVzKTtcbiAgICAgIGFsZXJ0KCdGYWlsZWQgdG8gYWRkIGRlbGl2ZXJ5IHpvbmUnKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNTYXZpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVab25lID0gYXN5bmMgKGluZGV4KSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZFpvbmVzID0gZGVsaXZlcnlab25lcy5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGluZGV4KTtcbiAgICBzZXREZWxpdmVyeVpvbmVzKHVwZGF0ZWRab25lcyk7XG5cbiAgICBzZXRJc1NhdmluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYmFzZTQ0LmVudGl0aWVzLlJlc3RhdXJhbnQudXBkYXRlKHJlc3RhdXJhbnQuaWQsIHtcbiAgICAgICAgZGVsaXZlcnlfem9uZXM6IHVwZGF0ZWRab25lc1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBkZWxldGUgem9uZVwiLCBlKTtcbiAgICAgIHNldERlbGl2ZXJ5Wm9uZXMoZGVsaXZlcnlab25lcyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzU2F2aW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246MjYzOjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxuICAgIGNsYXNzTmFtZT1cInNwYWNlLXktNlwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiZGVsaXZlcnlcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17ZmVhdHVyZXM/LmlkIHx8IGZlYXR1cmVzPy5faWR9PlxuXG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjI2OTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICA8aDIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246MjcwOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMFwiPlNldHRpbmdzPC9oMj5cbiAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246MjcxOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPk1hbmFnZSB5b3VyIHJlc3RhdXJhbnQgc2V0dGluZ3M8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246Mjc0OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgPENhcmRIZWFkZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246Mjc1OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICA8Q2FyZFRpdGxlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjI3NjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICBSZXN0YXVyYW50IEJyYW5kaW5nXG4gICAgICAgICAgICB7IWlzRmVhdHVyZUF2YWlsYWJsZSgnY3VzdG9tX2JyYW5kaW5nJykgJiZcbiAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjI3OToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGJnLW9yYW5nZS0xMDAgdGV4dC1vcmFuZ2UtNzAwIHB4LTIgcHktMSByb3VuZGVkXCI+QmFzaWMgUGxhbjwvc3Bhbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L0NhcmRUaXRsZT5cbiAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246MjgzOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgICAgICB7IWlzRmVhdHVyZUF2YWlsYWJsZSgnY3VzdG9tX2JyYW5kaW5nJykgP1xuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246Mjg1OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImJnLW9yYW5nZS01MCBib3JkZXIgYm9yZGVyLW9yYW5nZS0yMDAgcm91bmRlZC1sZyBwLTRcIj5cbiAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246Mjg2OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1vcmFuZ2UtNzAwIGZvbnQtbWVkaXVtXCI+Q3VzdG9tIGJyYW5kaW5nIGlzIG9ubHkgYXZhaWxhYmxlIGluIEJhc2ljIHBsYW4gYW5kIGFib3ZlLjwvcD5cbiAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246Mjg3OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1vcmFuZ2UtNjAwIG10LTFcIj5VcGdyYWRlIHlvdXIgcGxhbiB0byBjdXN0b21pemUgeW91ciByZXN0YXVyYW50IGxvZ28gYW5kIGNvdmVyIGltYWdlLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PiA6XG5cbiAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjI5MToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwibG9nb191cmxcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmVzdGF1cmFudD8uaWQgfHwgcmVzdGF1cmFudD8uX2lkfT5cbiAgICAgICAgICAgICAgICA8TGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246MjkyOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LW1lZGl1bSBtYi0yIGJsb2NrXCI+UmVzdGF1cmFudCBMb2dvPC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjoyOTM6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIG1iLTNcIj5VcGxvYWQgeW91ciByZXN0YXVyYW50IGxvZ28gKGFwcGVhcnMgaW4gbWVudSBoZWFkZXIpPC9wPlxuICAgICAgICAgICAgICAgIHtyZXN0YXVyYW50Py5sb2dvX3VybCAmJlxuICAgICAgICAgICAgICA8aW1nIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjI5NToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHNyYz17cmVzdGF1cmFudC5sb2dvX3VybH0gYWx0PVwiTG9nb1wiIGNsYXNzTmFtZT1cInctMjQgaC0yNCBvYmplY3QtY292ZXIgcm91bmRlZC1sZyBtYi0zIGJvcmRlclwiIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8SW5wdXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246Mjk3OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbWFnZVVwbG9hZChlLnRhcmdldC5maWxlc1swXSwgJ2xvZ29fdXJsJyl9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwbG9hZGluZ30gLz5cblxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjMwNToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiY292ZXJfaW1hZ2VfdXJsXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3Jlc3RhdXJhbnQ/LmlkIHx8IHJlc3RhdXJhbnQ/Ll9pZH0+XG4gICAgICAgICAgICAgICAgPExhYmVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjMwNjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1tZWRpdW0gbWItMiBibG9ja1wiPkNvdmVyIEltYWdlPC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjozMDc6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIG1iLTNcIj5VcGxvYWQgYSBjb3ZlciBpbWFnZSBmb3IgeW91ciBtZW51IHBhZ2U8L3A+XG4gICAgICAgICAgICAgICAge3Jlc3RhdXJhbnQ/LmNvdmVyX2ltYWdlX3VybCAmJlxuICAgICAgICAgICAgICA8aW1nIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjMwOToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHNyYz17cmVzdGF1cmFudC5jb3Zlcl9pbWFnZV91cmx9IGFsdD1cIkNvdmVyXCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtMzIgb2JqZWN0LWNvdmVyIHJvdW5kZWQtbGcgbWItMyBib3JkZXJcIiAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPElucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjMxMToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW1hZ2VVcGxvYWQoZS50YXJnZXQuZmlsZXNbMF0sICdjb3Zlcl9pbWFnZV91cmwnKX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBsb2FkaW5nfSAvPlxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgfVxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPC9DYXJkPlxuXG4gICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjozMjM6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICA8Q2FyZEhlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjozMjQ6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICA8Q2FyZFRpdGxlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjMyNToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5SZXN0YXVyYW50IEluZm9ybWF0aW9uPC9DYXJkVGl0bGU+XG4gICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjMyNzo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjozMjg6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjMyOToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5SZXN0YXVyYW50IE5hbWU8L3A+XG4gICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjozMzA6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwibmFtZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyZXN0YXVyYW50Py5pZCB8fCByZXN0YXVyYW50Py5faWR9PntyZXN0YXVyYW50Py5uYW1lfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjMzMjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246MzMzOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPkNpdHk8L3A+XG4gICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjozMzQ6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiY2l0eVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyZXN0YXVyYW50Py5pZCB8fCByZXN0YXVyYW50Py5faWR9PntyZXN0YXVyYW50Py5jaXR5fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjMzNjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246MzM3OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlBob25lPC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246MzM4OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInBob25lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3Jlc3RhdXJhbnQ/LmlkIHx8IHJlc3RhdXJhbnQ/Ll9pZH0+e3Jlc3RhdXJhbnQ/LnBob25lfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjM0MDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246MzQxOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPkVtYWlsPC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246MzQyOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImVtYWlsXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3Jlc3RhdXJhbnQ/LmlkIHx8IHJlc3RhdXJhbnQ/Ll9pZH0+e3Jlc3RhdXJhbnQ/LmVtYWlsfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjM0NDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246MzQ1OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlN1YnNjcmlwdGlvbiBQbGFuPC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246MzQ2OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gY2FwaXRhbGl6ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwic3Vic2NyaXB0aW9uX3BsYW5cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmVzdGF1cmFudD8uaWQgfHwgcmVzdGF1cmFudD8uX2lkfT57cmVzdGF1cmFudD8uc3Vic2NyaXB0aW9uX3BsYW59PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246MzQ4OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjozNDk6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+VGFibGUgTGltaXQ8L3A+XG4gICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjozNTA6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPntjdXJyZW50TGltaXRzLnRhYmxlcyA9PT0gOTk5ID8gJ1VubGltaXRlZCcgOiBjdXJyZW50TGltaXRzLnRhYmxlc30gdGFibGVzPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPC9DYXJkPlxuXG4gICAgICB7LyogUGxhbiBGZWF0dXJlcyBDYXJkICovfVxuICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246MzU2OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1iciBmcm9tLW9yYW5nZS01MCB0by1hbWJlci01MCBib3JkZXItb3JhbmdlLTIwMFwiPlxuICAgICAgICA8Q2FyZEhlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjozNTc6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICA8Q2FyZFRpdGxlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjM1ODoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5Zb3VyIFBsYW4gRmVhdHVyZXM8L0NhcmRUaXRsZT5cbiAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246MzYwOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImNhblVwZ3JhZGVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17Y3VycmVudExpbWl0cz8uaWQgfHwgY3VycmVudExpbWl0cz8uX2lkfT5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjM2MToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTJcIj5cbiAgICAgICAgICAgIHtbJ3FyX29yZGVyaW5nJywgJ2N1c3RvbV9icmFuZGluZycsICdjdXN0b21lcl9hbmFseXRpY3MnLCAncGF5bWVudF9pbnRlZ3JhdGlvbicsICdkZWxpdmVyeScsICd0YWtlYXdheScsICdtdWx0aV9vdXRsZXQnXS5tYXAoKGZlYXR1cmUsIF9fYXJySWR4X18pID0+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjM2MzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17ZmVhdHVyZX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIiBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30+XG4gICAgICAgICAgICAgICAge2lzRmVhdHVyZUF2YWlsYWJsZShmZWF0dXJlKSA/XG4gICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjM2NToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTYwMFwiPuKckzwvc3Bhbj4gOlxuXG4gICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjM2NzoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwXCI+4pyXPC9zcGFuPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246MzY5OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgdGV4dC1zbSAke2lzRmVhdHVyZUF2YWlsYWJsZShmZWF0dXJlKSA/ICd0ZXh0LWdyYXktNzAwJyA6ICd0ZXh0LWdyYXktNDAwJ31gfSBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30+XG4gICAgICAgICAgICAgICAgICB7ZmVhdHVyZS5yZXBsYWNlKC9fL2csICcgJykucmVwbGFjZSgvXFxiXFx3L2csIChsKSA9PiBsLnRvVXBwZXJDYXNlKCkpfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtjdXJyZW50TGltaXRzLmNhblVwZ3JhZGUgJiZcbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjM3NjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJwdC0zIGJvcmRlci10IGJvcmRlci1vcmFuZ2UtMjAwXCI+XG4gICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjM3NzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtb3JhbmdlLTcwMFwiPlxuICAgICAgICAgICAgICAgIFVwZ3JhZGUgeW91ciBwbGFuIHRvIHVubG9jayBtb3JlIGZlYXR1cmVzXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDwvQ2FyZD5cblxuICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246Mzg1OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgPENhcmRIZWFkZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246Mzg2OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgPENhcmRUaXRsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjozODc6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+T3JkZXIgRmVhdHVyZXM8L0NhcmRUaXRsZT5cbiAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246Mzg5OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjM5MDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjozOTE6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICA8U2hvcHBpbmdCYWcgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246MzkyOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1ncmF5LTUwMFwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246MzkzOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPExhYmVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjM5NDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1tZWRpdW1cIj5UYWtlYXdheSBPcmRlcnM8L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjM5NToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAge2lzRmVhdHVyZUF2YWlsYWJsZSgndGFrZWF3YXknKSA/XG4gICAgICAgICAgICAgICAgICAnQWxsb3cgY3VzdG9tZXJzIHRvIHBsYWNlIHRha2Vhd2F5IG9yZGVycycgOlxuICAgICAgICAgICAgICAgICAgJ0F2YWlsYWJsZSBpbiBQcm8gcGxhbiBhbmQgYWJvdmUnfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxTd2l0Y2ggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NDAyOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgIGNoZWNrZWQ9e2ZlYXR1cmVzLnRha2Vhd2F5IHx8IGZhbHNlfVxuICAgICAgICAgICAgb25DaGVja2VkQ2hhbmdlPXsoY2hlY2tlZCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWlzRmVhdHVyZUF2YWlsYWJsZSgndGFrZWF3YXknKSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdUYWtlYXdheSBmZWF0dXJlIGlzIG9ubHkgYXZhaWxhYmxlIGluIFBybyBwbGFuIGFuZCBhYm92ZS4gUGxlYXNlIHVwZ3JhZGUgeW91ciBwbGFuLicpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBoYW5kbGVGZWF0dXJlVG9nZ2xlKCd0YWtlYXdheScsIGNoZWNrZWQpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtpc1NhdmluZyB8fCAhaXNGZWF0dXJlQXZhaWxhYmxlKCd0YWtlYXdheScpfSAvPlxuXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjQxNToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo0MTY6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICA8VHJ1Y2sgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NDE3OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1ncmF5LTUwMFwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NDE4OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPExhYmVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjQxOToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1tZWRpdW1cIj5EZWxpdmVyeSBPcmRlcnM8L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjQyMDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAge2lzRmVhdHVyZUF2YWlsYWJsZSgnZGVsaXZlcnknKSA/XG4gICAgICAgICAgICAgICAgICAnQWxsb3cgY3VzdG9tZXJzIHRvIHBsYWNlIGRlbGl2ZXJ5IG9yZGVycycgOlxuICAgICAgICAgICAgICAgICAgJ0F2YWlsYWJsZSBpbiBQcm8gcGxhbiBhbmQgYWJvdmUnfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxTd2l0Y2ggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NDI3OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgIGNoZWNrZWQ9e2ZlYXR1cmVzLmRlbGl2ZXJ5IHx8IGZhbHNlfVxuICAgICAgICAgICAgb25DaGVja2VkQ2hhbmdlPXsoY2hlY2tlZCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWlzRmVhdHVyZUF2YWlsYWJsZSgnZGVsaXZlcnknKSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdEZWxpdmVyeSBmZWF0dXJlIGlzIG9ubHkgYXZhaWxhYmxlIGluIFBybyBwbGFuIGFuZCBhYm92ZS4gUGxlYXNlIHVwZ3JhZGUgeW91ciBwbGFuLicpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBoYW5kbGVGZWF0dXJlVG9nZ2xlKCdkZWxpdmVyeScsIGNoZWNrZWQpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtpc1NhdmluZyB8fCAhaXNGZWF0dXJlQXZhaWxhYmxlKCdkZWxpdmVyeScpfSAvPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICA8L0NhcmQ+XG5cbiAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjQ0Mjo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgIDxDYXJkSGVhZGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjQ0Mzo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgPENhcmRUaXRsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo0NDQ6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgPENyZWRpdENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NDQ1OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgUGF5bWVudCBHYXRld2F5IEludGVncmF0aW9uXG4gICAgICAgICAgICB7IWlzRmVhdHVyZUF2YWlsYWJsZSgncGF5bWVudF9pbnRlZ3JhdGlvbicpICYmXG4gICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo0NDg6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC14cyBiZy1vcmFuZ2UtMTAwIHRleHQtb3JhbmdlLTcwMCBweC0yIHB5LTEgcm91bmRlZFwiPlBybyBQbGFuPC9zcGFuPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvQ2FyZFRpdGxlPlxuICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo0NTI6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgIHshaXNGZWF0dXJlQXZhaWxhYmxlKCdwYXltZW50X2ludGVncmF0aW9uJykgP1xuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NDU0OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImJnLW9yYW5nZS01MCBib3JkZXIgYm9yZGVyLW9yYW5nZS0yMDAgcm91bmRlZC1sZyBwLTRcIj5cbiAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NDU1OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1vcmFuZ2UtNzAwIGZvbnQtbWVkaXVtXCI+UGF5bWVudCBpbnRlZ3JhdGlvbiBpcyBvbmx5IGF2YWlsYWJsZSBpbiBQcm8gcGxhbiBhbmQgYWJvdmUuPC9wPlxuICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo0NTY6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW9yYW5nZS02MDAgbXQtMVwiPlVwZ3JhZGUgeW91ciBwbGFuIHRvIGFjY2VwdCBvbmxpbmUgcGF5bWVudHMgZnJvbSBjdXN0b21lcnMuPC9wPlxuICAgICAgICAgICAgPC9kaXY+IDpcblxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NDU5OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS00XCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJwYXltZW50X2dhdGV3YXlcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmVzdGF1cmFudD8uaWQgfHwgcmVzdGF1cmFudD8uX2lkfT5cbiAgICAgICAgICAgICAge3Jlc3RhdXJhbnQucGF5bWVudF9nYXRld2F5ICYmICFpc0VkaXRpbmdLZXlzID9cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NDYxOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjQ2MjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwIGJvcmRlciBib3JkZXItZ3JlZW4tMjAwIHJvdW5kZWQtbGcgcC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NDYzOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1ncmVlbi03MDAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxMb2NrIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjQ2NDoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo0NjU6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPntwYXltZW50R2F0ZXdheXMuZmluZCgoZykgPT4gZy5pZCA9PT0gcmVzdGF1cmFudC5wYXltZW50X2dhdGV3YXkpPy5uYW1lIHx8IHJlc3RhdXJhbnQucGF5bWVudF9nYXRld2F5fSBDb25uZWN0ZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo0Njc6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JlZW4tNjAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJwYXltZW50X2dhdGV3YXlcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmVzdGF1cmFudD8uaWQgfHwgcmVzdGF1cmFudD8uX2lkfT5HYXRld2F5OiB7cmVzdGF1cmFudC5wYXltZW50X2dhdGV3YXl9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjQ2OToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHZhcmlhbnQ9XCJvdXRsaW5lXCIgb25DbGljaz17KCkgPT4gc2V0SXNFZGl0aW5nS2V5cyh0cnVlKX0+XG4gICAgICAgICAgICAgICAgICAgIFVwZGF0ZSBQYXltZW50IEdhdGV3YXlcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PiA6XG5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NDc0OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAgICB7LyogR2F0ZXdheSBTZWxlY3Rpb24gKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjQ3NjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NDc3OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LW1lZGl1bSBtYi0zIGJsb2NrXCI+U2VsZWN0IFBheW1lbnQgR2F0ZXdheTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NDc4OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBzbTpncmlkLWNvbHMtMyBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgIHtwYXltZW50R2F0ZXdheXMubWFwKChnYXRld2F5LCBfX2FycklkeF9fKSA9PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo0ODA6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAga2V5PXtnYXRld2F5LmlkfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRHYXRld2F5KGdhdGV3YXkuaWQpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcC0zIHJvdW5kZWQtbGcgYm9yZGVyLTIgdGV4dC1sZWZ0IHRyYW5zaXRpb24tYWxsICR7XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZEdhdGV3YXkgPT09IGdhdGV3YXkuaWQgP1xuICAgICAgICAgICAgICAgICAgJ2JvcmRlci1vcmFuZ2UtNjAwIGJnLW9yYW5nZS01MCcgOlxuICAgICAgICAgICAgICAgICAgJ2JvcmRlci1ncmF5LTIwMCBob3Zlcjpib3JkZXItZ3JheS0zMDAnfWBcbiAgICAgICAgICAgICAgICAgIH0gZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2dhdGV3YXk/LmlkfSBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cInBheW1lbnRHYXRld2F5c1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjQ4OToyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtMnhsIGJsb2NrIG1iLTFcIiBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cInBheW1lbnRHYXRld2F5c1wiIGRhdGEtYXJyLWZpZWxkPVwibG9nb1wiPntnYXRld2F5LmxvZ299PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo0OTA6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtXCIgZGF0YS1hcnItaW5kZXg9e19fYXJySWR4X199IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJwYXltZW50R2F0ZXdheXNcIiBkYXRhLWFyci1maWVsZD1cIm5hbWVcIj57Z2F0ZXdheS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2dhdGV3YXkucG9wdWxhciAmJiA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo0OTE6NDZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW9yYW5nZS02MDAgYmxvY2tcIj5Qb3B1bGFyPC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgey8qIER5bmFtaWMgS2V5IEZpZWxkcyAqL31cbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEdhdGV3YXkgJiZcbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo0OTk6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTMgYm9yZGVyLXQgcHQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjUwMDoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRW50ZXIge3BheW1lbnRHYXRld2F5cy5maW5kKChnKSA9PiBnLmlkID09PSBzZWxlY3RlZEdhdGV3YXkpPy5uYW1lfSBDcmVkZW50aWFsc1xuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICB7Z2V0R2F0ZXdheUZpZWxkcyhzZWxlY3RlZEdhdGV3YXkpLm1hcCgoZmllbGQpID0+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo1MDQ6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2ZpZWxkLmtleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo1MDU6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImxhYmVsXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2ZpZWxkPy5pZCB8fCBmaWVsZD8uX2lkfT57ZmllbGQubGFiZWx9PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjUwNjoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICB0eXBlPXtmaWVsZC50eXBlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2dhdGV3YXlLZXlzW2ZpZWxkLmtleV0gfHwgJyd9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEdhdGV3YXlLZXlzKHsgLi4uZ2F0ZXdheUtleXMsIFtmaWVsZC5rZXldOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtmaWVsZC5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTFcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NTE1OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo1MTY6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBvbkNsaWNrPXtoYW5kbGVTYXZlR2F0ZXdheUtleXN9IGRpc2FibGVkPXtpc1NhdmluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpc1NhdmluZyA/IFwiU2F2aW5nLi4uXCIgOiBcIlNhdmUgS2V5c1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNFZGl0aW5nS2V5cyAmJlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo1MjA6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB2YXJpYW50PVwiZ2hvc3RcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXRpbmdLZXlzKGZhbHNlKX0+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgey8qIEVuYWJsZS9EaXNhYmxlIE9ubGluZSBQYXltZW50IFRvZ2dsZSAqL31cbiAgICAgICAgICAgICAge3Jlc3RhdXJhbnQucGF5bWVudF9nYXRld2F5ICYmXG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjUzMDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB0LTQgYm9yZGVyLXRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NTMxOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NTMyOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo1MzM6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbWVkaXVtXCI+RW5hYmxlIE9ubGluZSBQYXltZW50czwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NTM0OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPkFsbG93IGN1c3RvbWVycyB0byBwYXkgb25saW5lPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo1MzY6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2FjY2VwdE9ubGluZVBheW1lbnR9XG4gICAgICAgICAgICAgICAgb25DaGVja2VkQ2hhbmdlPXtoYW5kbGVUb2dnbGVPbmxpbmVQYXltZW50fVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1NhdmluZ30gLz5cblxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICA8L0NhcmQ+XG5cbiAgICAgIHsvKiBEZWxpdmVyeSBab25lcyAqL31cbiAgICAgIHtmZWF0dXJlcy5kZWxpdmVyeSAmJlxuICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NTUxOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICA8Q2FyZEhlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo1NTI6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICA8Q2FyZFRpdGxlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjU1MzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICA8VHJ1Y2sgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NTU0OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgICBEZWxpdmVyeSBab25lc1xuICAgICAgICAgICAgPC9DYXJkVGl0bGU+XG4gICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo1NTg6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjU1OToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgRGVmaW5lIGRlbGl2ZXJ5IHpvbmVzIHdpdGggYXNzb2NpYXRlZCBmZWVzIGFuZCBtaW5pbXVtIG9yZGVyIHZhbHVlc1xuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICB7LyogRXhpc3RpbmcgWm9uZXMgKi99XG4gICAgICAgICAgICB7ZGVsaXZlcnlab25lcy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo1NjU6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICB7ZGVsaXZlcnlab25lcy5tYXAoKHpvbmUsIGlkeCkgPT5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NTY3OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtpZHh9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTMgYmctZ3JheS01MCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NTY4OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NTY5OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInpvbmVfbmFtZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXt6b25lPy5pZCB8fCB6b25lPy5faWR9Pnt6b25lLnpvbmVfbmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NTcwOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJkZWxpdmVyeV9mZWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17em9uZT8uaWQgfHwgem9uZT8uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFyZWFzOiB7em9uZS5hcmVhcz8uam9pbignLCAnKX0g4oCiIEZlZTog4oK5e3pvbmUuZGVsaXZlcnlfZmVlfSDigKIgTWluIE9yZGVyOiDigrl7em9uZS5taW5pbXVtX29yZGVyfVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NTc0OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdmFyaWFudD1cImdob3N0XCIgc2l6ZT1cInNtXCIgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlWm9uZShpZHgpfT5cbiAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cblxuICAgICAgICAgICAgey8qIEFkZCBOZXcgWm9uZSAqL31cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NTgzOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYm9yZGVyLXQgcHQtNCBzcGFjZS15LTNcIj5cbiAgICAgICAgICAgICAgPGg0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjU4NDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPkFkZCBOZXcgWm9uZTwvaDQ+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NTg1OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NTg2OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICA8TGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NTg3OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlpvbmUgTmFtZTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8SW5wdXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NTg4OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmV3Wm9uZS56b25lX25hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdab25lKHsgLi4ubmV3Wm9uZSwgem9uZV9uYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4sIFpvbmUgMVwiIC8+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjU5NDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgPExhYmVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjU5NToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5BcmVhcyAoY29tbWEtc2VwYXJhdGVkKTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8SW5wdXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NTk2OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmV3Wm9uZS5hcmVhc31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1pvbmUoeyAuLi5uZXdab25lLCBhcmVhczogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuLCBBcmVhMSwgQXJlYTJcIiAvPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo2MDI6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgIDxMYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo2MDM6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+RGVsaXZlcnkgRmVlICjigrkpPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo2MDQ6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdab25lLmRlbGl2ZXJ5X2ZlZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1pvbmUoeyAuLi5uZXdab25lLCBkZWxpdmVyeV9mZWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiNTBcIiAvPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo2MTE6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgIDxMYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo2MTI6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+TWluaW11bSBPcmRlciAo4oK5KTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8SW5wdXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NjEzOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmV3Wm9uZS5taW5pbXVtX29yZGVyfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3Wm9uZSh7IC4uLm5ld1pvbmUsIG1pbmltdW1fb3JkZXI6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMjAwXCIgLz5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo2MjE6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBvbkNsaWNrPXtoYW5kbGVBZGREZWxpdmVyeVpvbmV9IGRpc2FibGVkPXtpc1NhdmluZ30+XG4gICAgICAgICAgICAgICAgQWRkIFpvbmVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICB9XG5cbiAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjYyOTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgIDxDYXJkSGVhZGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjYzMDo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgIDxDYXJkVGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NjMxOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlVzZXIgSW5mb3JtYXRpb248L0NhcmRUaXRsZT5cbiAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NjMzOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjYzNDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NjM1OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPk5hbWU8L3A+XG4gICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo2MzY6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiZnVsbF9uYW1lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3VzZXI/LmlkIHx8IHVzZXI/Ll9pZH0+e3VzZXI/LmZ1bGxfbmFtZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo2Mzg6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjYzOToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5FbWFpbDwvcD5cbiAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjY0MDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJlbWFpbFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXt1c2VyPy5pZCB8fCB1c2VyPy5faWR9Pnt1c2VyPy5lbWFpbH08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo2NDI6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjY0MzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5Sb2xlPC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NjQ0OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gY2FwaXRhbGl6ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicm9sZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXt1c2VyPy5pZCB8fCB1c2VyPy5faWR9Pnt1c2VyPy5yb2xlfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDwvQ2FyZD5cblxuICAgICAgey8qIE9UUCBWZXJpZmljYXRpb24gRGlhbG9nICovfVxuICAgICAgPERpYWxvZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo2NTA6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG9wZW49e3Nob3dPdHBEaWFsb2d9IG9uT3BlbkNoYW5nZT17c2V0U2hvd090cERpYWxvZ30+XG4gICAgICAgIDxEaWFsb2dDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjY1MTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgPERpYWxvZ0hlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo2NTI6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICA8RGlhbG9nVGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NjUzOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlZlcmlmeSBPVFA8L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgIDwvRGlhbG9nSGVhZGVyPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NjU1OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo2NTY6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgQW4gT1RQIGhhcyBiZWVuIHNlbnQgdG8gPHN0cm9uZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo2NTc6MzhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImVtYWlsXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3Jlc3RhdXJhbnQ/LmlkIHx8IHJlc3RhdXJhbnQ/Ll9pZH0+e3Jlc3RhdXJhbnQuZW1haWx9PC9zdHJvbmc+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3NTZWN0aW9uOjY1OToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICA8TGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb246NjYwOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPkVudGVyIE9UUDwvTGFiZWw+XG4gICAgICAgICAgICAgIDxJbnB1dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo2NjE6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICB2YWx1ZT17b3RwfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE90cChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgNi1kaWdpdCBPVFBcIlxuICAgICAgICAgICAgICBtYXhMZW5ndGg9ezZ9IC8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzU2VjdGlvbjo2Njg6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2F2ZVJhem9ycGF5S2V5c31cbiAgICAgICAgICAgIGRpc2FibGVkPXtpc1NhdmluZyB8fCBvdHAubGVuZ3RoICE9PSA2fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG5cbiAgICAgICAgICAgICAge2lzU2F2aW5nID8gXCJWZXJpZnlpbmcuLi5cIiA6IFwiVmVyaWZ5ICYgU2F2ZVwifVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgIDwvRGlhbG9nPlxuICAgIDwvbW90aW9uLmRpdj4pO1xuXG59Il0sImZpbGUiOiIvYXBwL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5nc1NlY3Rpb24uanN4In0=