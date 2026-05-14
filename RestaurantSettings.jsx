import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/RestaurantSettings.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/RestaurantSettings.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { base44 } from "/src/api/base44Client.js";
import DashboardLayout from "/src/components/dashboard/DashboardLayout.jsx";
import {
  Store,
  Upload,
  Save,
  Globe,
  Clock,
  IndianRupee,
  MapPin,
  Phone,
  Mail,
  X
} from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
import { Card, CardContent, CardHeader, CardTitle } from "/src/components/ui/card.jsx";
import { Button } from "/src/components/ui/button.jsx";
import { Input } from "/src/components/ui/input.jsx";
import { Label } from "/src/components/ui/label.jsx";
import { Textarea } from "/src/components/ui/textarea.jsx";
import { Switch } from "/src/components/ui/switch.jsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "/src/components/ui/select.jsx";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "/src/components/ui/tabs.jsx";
import { Badge } from "/src/components/ui/badge.jsx";
const cuisineTypes = [
  "North Indian",
  "South Indian",
  "Chinese",
  "Italian",
  "Mexican",
  "Thai",
  "Japanese",
  "Continental",
  "Mughlai",
  "Street Food",
  "Cafe",
  "Fast Food"
];
const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
function RestaurantSettingsContent({ user, restaurant, refreshRestaurant }) {
  _s();
  const [isSaving, setIsSaving] = useState(false);
  const [riders, setRiders] = useState([]);
  const [isAddingRider, setIsAddingRider] = useState(false);
  const [newRider, setNewRider] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle_type: "bike",
    vehicle_number: ""
  });
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    logo_url: "",
    cover_image_url: "",
    cuisine_type: [],
    opening_hours: {},
    features_enabled: {},
    settings: {
      currency: "INR",
      tax_rate: 5,
      service_charge: 0,
      accept_online_payment: false,
      table_count: 10
    }
  });
  useEffect(() => {
    if (restaurant) {
      setFormData({
        name: restaurant.name || "",
        address: restaurant.address || "",
        phone: restaurant.phone || "",
        email: restaurant.email || "",
        logo_url: restaurant.logo_url || "",
        cover_image_url: restaurant.cover_image_url || "",
        cuisine_type: restaurant.cuisine_type || [],
        opening_hours: restaurant.opening_hours || {},
        features_enabled: restaurant.features_enabled || {},
        settings: {
          currency: restaurant.settings?.currency || "INR",
          tax_rate: restaurant.settings?.tax_rate || 5,
          service_charge: restaurant.settings?.service_charge || 0,
          accept_online_payment: restaurant.settings?.accept_online_payment || false,
          table_count: restaurant.settings?.table_count || 10
        }
      });
      loadRiders();
    }
  }, [restaurant]);
  const loadRiders = async () => {
    if (!restaurant?.restaurant_id) return;
    const ridersList = await base44.entities.DeliveryRider.filter({
      restaurant_id: restaurant.restaurant_id
    });
    setRiders(ridersList);
  };
  const handleAddRider = async () => {
    if (!newRider.name || !newRider.phone) return;
    await base44.entities.DeliveryRider.create({
      restaurant_id: restaurant.restaurant_id,
      ...newRider,
      is_active: true,
      is_available: true,
      total_deliveries: 0,
      rating: 5
    });
    setNewRider({
      name: "",
      phone: "",
      email: "",
      vehicle_type: "bike",
      vehicle_number: ""
    });
    setIsAddingRider(false);
    loadRiders();
  };
  const toggleRiderStatus = async (riderId, currentStatus) => {
    await base44.entities.DeliveryRider.update(riderId, {
      is_active: !currentStatus
    });
    loadRiders();
  };
  const handleSave = async () => {
    setIsSaving(true);
    await base44.entities.Restaurant.update(restaurant.id, formData);
    await refreshRestaurant();
    setIsSaving(false);
  };
  const handleImageUpload = async (e, field) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    setFormData({ ...formData, [field]: file_url });
  };
  const toggleCuisine = (cuisine) => {
    const current = formData.cuisine_type || [];
    if (current.includes(cuisine)) {
      setFormData({ ...formData, cuisine_type: current.filter((c) => c !== cuisine) });
    } else {
      setFormData({ ...formData, cuisine_type: [...current, cuisine] });
    }
  };
  const updateOpeningHours = (day, value) => {
    setFormData({
      ...formData,
      opening_hours: { ...formData.opening_hours, [day]: value }
    });
  };
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:156:4", "data-dynamic-content": "true", className: "space-y-6", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:158:6", "data-dynamic-content": "true", className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:159:8", "data-dynamic-content": "false", children: [
        /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/RestaurantSettings:160:10", "data-dynamic-content": "false", className: "text-2xl font-bold text-gray-900", children: "Restaurant Settings" }, void 0, false, {
          fileName: "/app/src/pages/RestaurantSettings.jsx",
          lineNumber: 179,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RestaurantSettings:161:10", "data-dynamic-content": "false", className: "text-gray-500", children: "Manage your restaurant profile and preferences" }, void 0, false, {
          fileName: "/app/src/pages/RestaurantSettings.jsx",
          lineNumber: 180,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/RestaurantSettings.jsx",
        lineNumber: 178,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/RestaurantSettings:163:8", "data-dynamic-content": "true", onClick: handleSave, disabled: isSaving, className: "bg-gradient-to-r from-violet-600 to-indigo-600", children: [
        /* @__PURE__ */ jsxDEV(Save, { "data-source-location": "pages/RestaurantSettings:164:10", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
          fileName: "/app/src/pages/RestaurantSettings.jsx",
          lineNumber: 183,
          columnNumber: 11
        }, this),
        isSaving ? "Saving..." : "Save Changes"
      ] }, void 0, true, {
        fileName: "/app/src/pages/RestaurantSettings.jsx",
        lineNumber: 182,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/RestaurantSettings.jsx",
      lineNumber: 177,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Tabs, { "data-source-location": "pages/RestaurantSettings:169:6", "data-dynamic-content": "true", defaultValue: "profile", className: "space-y-6", children: [
      /* @__PURE__ */ jsxDEV(TabsList, { "data-source-location": "pages/RestaurantSettings:170:8", "data-dynamic-content": "false", children: [
        /* @__PURE__ */ jsxDEV(TabsTrigger, { "data-source-location": "pages/RestaurantSettings:171:10", "data-dynamic-content": "false", value: "profile", children: "Profile" }, void 0, false, {
          fileName: "/app/src/pages/RestaurantSettings.jsx",
          lineNumber: 190,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(TabsTrigger, { "data-source-location": "pages/RestaurantSettings:172:10", "data-dynamic-content": "false", value: "hours", children: "Opening Hours" }, void 0, false, {
          fileName: "/app/src/pages/RestaurantSettings.jsx",
          lineNumber: 191,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(TabsTrigger, { "data-source-location": "pages/RestaurantSettings:173:10", "data-dynamic-content": "false", value: "billing", children: "Billing Settings" }, void 0, false, {
          fileName: "/app/src/pages/RestaurantSettings.jsx",
          lineNumber: 192,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(TabsTrigger, { "data-source-location": "pages/RestaurantSettings:174:10", "data-dynamic-content": "false", value: "riders", children: "Delivery Riders" }, void 0, false, {
          fileName: "/app/src/pages/RestaurantSettings.jsx",
          lineNumber: 193,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/RestaurantSettings.jsx",
        lineNumber: 189,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(TabsContent, { "data-source-location": "pages/RestaurantSettings:178:8", "data-dynamic-content": "true", value: "profile", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:179:10", "data-dynamic-content": "true", className: "grid lg:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:180:12", "data-dynamic-content": "true", className: "lg:col-span-2 space-y-6", children: [
          /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/RestaurantSettings:182:14", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "pages/RestaurantSettings:183:16", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "pages/RestaurantSettings:184:18", "data-dynamic-content": "false", className: "text-lg", children: "Basic Information" }, void 0, false, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 203,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 202,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/RestaurantSettings:186:16", "data-dynamic-content": "true", className: "space-y-4", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:187:18", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/RestaurantSettings:188:20", "data-dynamic-content": "false", htmlFor: "name", children: "Restaurant Name" }, void 0, false, {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 207,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV(
                  Input,
                  {
                    "data-source-location": "pages/RestaurantSettings:189:20",
                    "data-dynamic-content": "true",
                    id: "name",
                    value: formData.name,
                    onChange: (e) => setFormData({ ...formData, name: e.target.value }),
                    placeholder: "Your Restaurant Name"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/pages/RestaurantSettings.jsx",
                    lineNumber: 208,
                    columnNumber: 21
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/src/pages/RestaurantSettings.jsx",
                lineNumber: 206,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:197:18", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/RestaurantSettings:198:20", "data-dynamic-content": "false", htmlFor: "address", children: "Address" }, void 0, false, {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 217,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV(
                  Textarea,
                  {
                    "data-source-location": "pages/RestaurantSettings:199:20",
                    "data-dynamic-content": "true",
                    id: "address",
                    value: formData.address,
                    onChange: (e) => setFormData({ ...formData, address: e.target.value }),
                    placeholder: "Full address",
                    rows: 2
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/pages/RestaurantSettings.jsx",
                    lineNumber: 218,
                    columnNumber: 21
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/src/pages/RestaurantSettings.jsx",
                lineNumber: 216,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:208:18", "data-dynamic-content": "true", className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:209:20", "data-dynamic-content": "true", children: [
                  /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/RestaurantSettings:210:22", "data-dynamic-content": "false", htmlFor: "phone", children: "Phone" }, void 0, false, {
                    fileName: "/app/src/pages/RestaurantSettings.jsx",
                    lineNumber: 229,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    Input,
                    {
                      "data-source-location": "pages/RestaurantSettings:211:22",
                      "data-dynamic-content": "true",
                      id: "phone",
                      value: formData.phone,
                      onChange: (e) => setFormData({ ...formData, phone: e.target.value }),
                      placeholder: "+91 98765 43210"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/src/pages/RestaurantSettings.jsx",
                      lineNumber: 230,
                      columnNumber: 23
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 228,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:218:20", "data-dynamic-content": "true", children: [
                  /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/RestaurantSettings:219:22", "data-dynamic-content": "false", htmlFor: "email", children: "Email" }, void 0, false, {
                    fileName: "/app/src/pages/RestaurantSettings.jsx",
                    lineNumber: 238,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    Input,
                    {
                      "data-source-location": "pages/RestaurantSettings:220:22",
                      "data-dynamic-content": "true",
                      id: "email",
                      type: "email",
                      value: formData.email,
                      onChange: (e) => setFormData({ ...formData, email: e.target.value }),
                      placeholder: "contact@restaurant.com"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/src/pages/RestaurantSettings.jsx",
                      lineNumber: 239,
                      columnNumber: 23
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 237,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/RestaurantSettings.jsx",
                lineNumber: 227,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 205,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/RestaurantSettings.jsx",
            lineNumber: 201,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/RestaurantSettings:233:14", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "pages/RestaurantSettings:234:16", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "pages/RestaurantSettings:235:18", "data-dynamic-content": "false", className: "text-lg", children: "Cuisine Types" }, void 0, false, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 254,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 253,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/RestaurantSettings:237:16", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:238:18", "data-dynamic-content": "true", className: "flex flex-wrap gap-2", children: cuisineTypes.map(
              (cuisine, __arrIdx__) => /* @__PURE__ */ jsxDEV(
                Badge,
                {
                  "data-source-location": "pages/RestaurantSettings:240:22",
                  "data-dynamic-content": "true",
                  variant: formData.cuisine_type?.includes(cuisine) ? "default" : "outline",
                  className: `cursor-pointer ${formData.cuisine_type?.includes(cuisine) ? "bg-violet-600" : ""}`,
                  onClick: () => toggleCuisine(cuisine),
                  "data-arr-index": __arrIdx__,
                  "data-arr-variable-name": "cuisineTypes",
                  children: cuisine
                },
                cuisine,
                false,
                {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 259,
                  columnNumber: 21
                },
                this
              )
            ) }, void 0, false, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 257,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 256,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/RestaurantSettings.jsx",
            lineNumber: 252,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/RestaurantSettings.jsx",
          lineNumber: 199,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:255:12", "data-dynamic-content": "true", className: "space-y-6", children: [
          /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/RestaurantSettings:256:14", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "pages/RestaurantSettings:257:16", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "pages/RestaurantSettings:258:18", "data-dynamic-content": "false", className: "text-lg", children: "Restaurant Logo" }, void 0, false, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 277,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 276,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/RestaurantSettings:260:16", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:261:18", "data-dynamic-content": "true", className: "flex flex-col items-center", children: formData.logo_url ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:263:22", "data-dynamic-content": "true", className: "relative", "data-collection-item-field": "logo_url", "data-collection-item-id": formData?.id || formData?._id, children: [
              /* @__PURE__ */ jsxDEV(
                "img",
                {
                  "data-source-location": "pages/RestaurantSettings:264:24",
                  "data-dynamic-content": "true",
                  src: formData.logo_url,
                  alt: "Logo",
                  className: "w-32 h-32 rounded-xl object-cover"
                },
                void 0,
                false,
                {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 283,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  "data-source-location": "pages/RestaurantSettings:269:24",
                  "data-dynamic-content": "true",
                  onClick: () => setFormData({ ...formData, logo_url: "" }),
                  className: "absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center",
                  children: /* @__PURE__ */ jsxDEV(X, { "data-source-location": "pages/RestaurantSettings:273:26", "data-dynamic-content": "false", className: "w-3 h-3" }, void 0, false, {
                    fileName: "/app/src/pages/RestaurantSettings.jsx",
                    lineNumber: 292,
                    columnNumber: 27
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 288,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 282,
              columnNumber: 21
            }, this) : /* @__PURE__ */ jsxDEV("label", { "data-source-location": "pages/RestaurantSettings:277:22", "data-dynamic-content": "true", className: "w-32 h-32 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-violet-400 transition-colors", children: [
              /* @__PURE__ */ jsxDEV(Upload, { "data-source-location": "pages/RestaurantSettings:278:24", "data-dynamic-content": "false", className: "w-8 h-8 text-gray-400 mb-2" }, void 0, false, {
                fileName: "/app/src/pages/RestaurantSettings.jsx",
                lineNumber: 297,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/RestaurantSettings:279:24", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Upload Logo" }, void 0, false, {
                fileName: "/app/src/pages/RestaurantSettings.jsx",
                lineNumber: 298,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  "data-source-location": "pages/RestaurantSettings:280:24",
                  "data-dynamic-content": "true",
                  type: "file",
                  accept: "image/*",
                  className: "hidden",
                  onChange: (e) => handleImageUpload(e, "logo_url")
                },
                void 0,
                false,
                {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 299,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 296,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 280,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 279,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/RestaurantSettings.jsx",
            lineNumber: 275,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/RestaurantSettings:292:14", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "pages/RestaurantSettings:293:16", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "pages/RestaurantSettings:294:18", "data-dynamic-content": "false", className: "text-lg", children: "Cover Image" }, void 0, false, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 313,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 312,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/RestaurantSettings:296:16", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RestaurantSettings:297:18", "data-dynamic-content": "false", className: "text-xs text-gray-500 mb-2", children: "Recommended: 1200x400px (3:1 ratio)" }, void 0, false, {
                fileName: "/app/src/pages/RestaurantSettings.jsx",
                lineNumber: 316,
                columnNumber: 19
              }, this),
              formData.cover_image_url ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:299:20", "data-dynamic-content": "true", className: "relative", "data-collection-item-field": "cover_image_url", "data-collection-item-id": formData?.id || formData?._id, children: [
                /* @__PURE__ */ jsxDEV(
                  "img",
                  {
                    "data-source-location": "pages/RestaurantSettings:300:22",
                    "data-dynamic-content": "true",
                    src: formData.cover_image_url,
                    alt: "Cover",
                    className: "w-full h-32 rounded-lg object-cover"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/pages/RestaurantSettings.jsx",
                    lineNumber: 319,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    "data-source-location": "pages/RestaurantSettings:305:22",
                    "data-dynamic-content": "true",
                    onClick: () => setFormData({ ...formData, cover_image_url: "" }),
                    className: "absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center",
                    children: /* @__PURE__ */ jsxDEV(X, { "data-source-location": "pages/RestaurantSettings:309:24", "data-dynamic-content": "false", className: "w-3 h-3" }, void 0, false, {
                      fileName: "/app/src/pages/RestaurantSettings.jsx",
                      lineNumber: 328,
                      columnNumber: 25
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/pages/RestaurantSettings.jsx",
                    lineNumber: 324,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/src/pages/RestaurantSettings.jsx",
                lineNumber: 318,
                columnNumber: 19
              }, this) : /* @__PURE__ */ jsxDEV("label", { "data-source-location": "pages/RestaurantSettings:313:20", "data-dynamic-content": "true", className: "w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-orange-400 transition-colors", children: [
                /* @__PURE__ */ jsxDEV(Upload, { "data-source-location": "pages/RestaurantSettings:314:22", "data-dynamic-content": "false", className: "w-8 h-8 text-gray-400 mb-2" }, void 0, false, {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 333,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/RestaurantSettings:315:22", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Upload Cover" }, void 0, false, {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 334,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV(
                  "input",
                  {
                    "data-source-location": "pages/RestaurantSettings:316:22",
                    "data-dynamic-content": "true",
                    type: "file",
                    accept: "image/*",
                    className: "hidden",
                    onChange: (e) => handleImageUpload(e, "cover_image_url")
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/pages/RestaurantSettings.jsx",
                    lineNumber: 335,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/src/pages/RestaurantSettings.jsx",
                lineNumber: 332,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 315,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/RestaurantSettings.jsx",
            lineNumber: 311,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/RestaurantSettings:328:14", "data-dynamic-content": "true", className: "bg-gray-50", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/RestaurantSettings:329:16", "data-dynamic-content": "true", className: "p-4", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RestaurantSettings:330:18", "data-dynamic-content": "false", className: "text-sm text-gray-500 mb-1", children: "Restaurant ID" }, void 0, false, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 349,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RestaurantSettings:331:18", "data-dynamic-content": "true", className: "font-mono font-medium", "data-collection-item-field": "restaurant_id", "data-collection-item-id": restaurant?.id || restaurant?._id, children: restaurant?.restaurant_id }, void 0, false, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 350,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/RestaurantSettings.jsx",
            lineNumber: 348,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/RestaurantSettings.jsx",
            lineNumber: 347,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/RestaurantSettings.jsx",
          lineNumber: 274,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/RestaurantSettings.jsx",
        lineNumber: 198,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/RestaurantSettings.jsx",
        lineNumber: 197,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(TabsContent, { "data-source-location": "pages/RestaurantSettings:339:8", "data-dynamic-content": "true", value: "hours", children: /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/RestaurantSettings:340:10", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "pages/RestaurantSettings:341:12", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "pages/RestaurantSettings:342:14", "data-dynamic-content": "false", className: "text-lg", children: "Opening Hours" }, void 0, false, {
          fileName: "/app/src/pages/RestaurantSettings.jsx",
          lineNumber: 361,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/RestaurantSettings.jsx",
          lineNumber: 360,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/RestaurantSettings:344:12", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:345:14", "data-dynamic-content": "true", className: "space-y-4", children: days.map(
          (day, __arrIdx__) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:347:18", "data-dynamic-content": "true", className: "flex items-center gap-4", "data-arr-index": __arrIdx__, "data-arr-variable-name": "days", children: [
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/RestaurantSettings:348:20", "data-dynamic-content": "true", className: "w-24 capitalize font-medium", "data-arr-index": __arrIdx__, "data-arr-variable-name": "days", children: day }, void 0, false, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 367,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV(
              Input,
              {
                "data-source-location": "pages/RestaurantSettings:349:20",
                "data-dynamic-content": "true",
                value: formData.opening_hours?.[day] || "",
                onChange: (e) => updateOpeningHours(day, e.target.value),
                placeholder: "e.g., 10:00 AM - 10:00 PM",
                className: "flex-1",
                "data-arr-index": __arrIdx__,
                "data-arr-variable-name": "days"
              },
              void 0,
              false,
              {
                fileName: "/app/src/pages/RestaurantSettings.jsx",
                lineNumber: 368,
                columnNumber: 21
              },
              this
            )
          ] }, day, true, {
            fileName: "/app/src/pages/RestaurantSettings.jsx",
            lineNumber: 366,
            columnNumber: 17
          }, this)
        ) }, void 0, false, {
          fileName: "/app/src/pages/RestaurantSettings.jsx",
          lineNumber: 364,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/RestaurantSettings.jsx",
          lineNumber: 363,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/RestaurantSettings.jsx",
        lineNumber: 359,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/RestaurantSettings.jsx",
        lineNumber: 358,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(TabsContent, { "data-source-location": "pages/RestaurantSettings:363:8", "data-dynamic-content": "true", value: "billing", children: /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/RestaurantSettings:364:10", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "pages/RestaurantSettings:365:12", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "pages/RestaurantSettings:366:14", "data-dynamic-content": "false", className: "text-lg", children: "Billing & Tax Settings" }, void 0, false, {
          fileName: "/app/src/pages/RestaurantSettings.jsx",
          lineNumber: 385,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/RestaurantSettings.jsx",
          lineNumber: 384,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/RestaurantSettings:368:12", "data-dynamic-content": "true", className: "space-y-6", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:369:14", "data-dynamic-content": "true", className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:370:16", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/RestaurantSettings:371:18", "data-dynamic-content": "false", htmlFor: "currency", children: "Currency" }, void 0, false, {
                fileName: "/app/src/pages/RestaurantSettings.jsx",
                lineNumber: 390,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(
                Select,
                {
                  "data-source-location": "pages/RestaurantSettings:372:18",
                  "data-dynamic-content": "true",
                  value: formData.settings.currency,
                  onValueChange: (value) => setFormData({
                    ...formData,
                    settings: { ...formData.settings, currency: value }
                  }),
                  children: [
                    /* @__PURE__ */ jsxDEV(SelectTrigger, { "data-source-location": "pages/RestaurantSettings:379:20", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(SelectValue, { "data-source-location": "pages/RestaurantSettings:380:22", "data-dynamic-content": "false" }, void 0, false, {
                      fileName: "/app/src/pages/RestaurantSettings.jsx",
                      lineNumber: 399,
                      columnNumber: 23
                    }, this) }, void 0, false, {
                      fileName: "/app/src/pages/RestaurantSettings.jsx",
                      lineNumber: 398,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ jsxDEV(SelectContent, { "data-source-location": "pages/RestaurantSettings:382:20", "data-dynamic-content": "false", children: [
                      /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/RestaurantSettings:383:22", "data-dynamic-content": "false", value: "INR", children: "INR (₹)" }, void 0, false, {
                        fileName: "/app/src/pages/RestaurantSettings.jsx",
                        lineNumber: 402,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/RestaurantSettings:384:22", "data-dynamic-content": "false", value: "USD", children: "USD ($)" }, void 0, false, {
                        fileName: "/app/src/pages/RestaurantSettings.jsx",
                        lineNumber: 403,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/RestaurantSettings:385:22", "data-dynamic-content": "false", value: "EUR", children: "EUR (€)" }, void 0, false, {
                        fileName: "/app/src/pages/RestaurantSettings.jsx",
                        lineNumber: 404,
                        columnNumber: 23
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/src/pages/RestaurantSettings.jsx",
                      lineNumber: 401,
                      columnNumber: 21
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 391,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 389,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:390:16", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/RestaurantSettings:391:18", "data-dynamic-content": "false", htmlFor: "table_count", children: "Number of Tables" }, void 0, false, {
                fileName: "/app/src/pages/RestaurantSettings.jsx",
                lineNumber: 410,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(
                Input,
                {
                  "data-source-location": "pages/RestaurantSettings:392:18",
                  "data-dynamic-content": "true",
                  id: "table_count",
                  type: "number",
                  value: formData.settings.table_count,
                  onChange: (e) => setFormData({
                    ...formData,
                    settings: { ...formData.settings, table_count: parseInt(e.target.value) }
                  })
                },
                void 0,
                false,
                {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 411,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 409,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:403:16", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/RestaurantSettings:404:18", "data-dynamic-content": "false", htmlFor: "tax_rate", children: "Tax Rate (%)" }, void 0, false, {
                fileName: "/app/src/pages/RestaurantSettings.jsx",
                lineNumber: 423,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(
                Input,
                {
                  "data-source-location": "pages/RestaurantSettings:405:18",
                  "data-dynamic-content": "true",
                  id: "tax_rate",
                  type: "number",
                  step: "0.1",
                  value: formData.settings.tax_rate,
                  onChange: (e) => setFormData({
                    ...formData,
                    settings: { ...formData.settings, tax_rate: parseFloat(e.target.value) }
                  })
                },
                void 0,
                false,
                {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 424,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 422,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:417:16", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/RestaurantSettings:418:18", "data-dynamic-content": "false", htmlFor: "service_charge", children: "Service Charge (%)" }, void 0, false, {
                fileName: "/app/src/pages/RestaurantSettings.jsx",
                lineNumber: 437,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(
                Input,
                {
                  "data-source-location": "pages/RestaurantSettings:419:18",
                  "data-dynamic-content": "true",
                  id: "service_charge",
                  type: "number",
                  step: "0.1",
                  value: formData.settings.service_charge,
                  onChange: (e) => setFormData({
                    ...formData,
                    settings: { ...formData.settings, service_charge: parseFloat(e.target.value) }
                  })
                },
                void 0,
                false,
                {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 438,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 436,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/RestaurantSettings.jsx",
            lineNumber: 388,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:432:14", "data-dynamic-content": "true", className: "space-y-3", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:433:16", "data-dynamic-content": "true", className: "flex items-center justify-between p-4 bg-gray-50 rounded-lg", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:434:18", "data-dynamic-content": "false", children: [
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RestaurantSettings:435:20", "data-dynamic-content": "false", className: "font-medium", children: "Accept Online Payments" }, void 0, false, {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 454,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RestaurantSettings:436:20", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Enable UPI and card payments" }, void 0, false, {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 455,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/RestaurantSettings.jsx",
                lineNumber: 453,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(
                Switch,
                {
                  "data-source-location": "pages/RestaurantSettings:438:18",
                  "data-dynamic-content": "true",
                  checked: formData.settings.accept_online_payment,
                  onCheckedChange: (checked) => setFormData({
                    ...formData,
                    settings: { ...formData.settings, accept_online_payment: checked }
                  })
                },
                void 0,
                false,
                {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 457,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 452,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:447:16", "data-dynamic-content": "true", className: "flex items-center justify-between p-4 bg-gray-50 rounded-lg", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:448:18", "data-dynamic-content": "false", children: [
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RestaurantSettings:449:20", "data-dynamic-content": "false", className: "font-medium", children: "Enable Delivery" }, void 0, false, {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 468,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RestaurantSettings:450:20", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Allow customers to order for delivery" }, void 0, false, {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 469,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/RestaurantSettings.jsx",
                lineNumber: 467,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(
                Switch,
                {
                  "data-source-location": "pages/RestaurantSettings:452:18",
                  "data-dynamic-content": "true",
                  checked: formData.features_enabled?.delivery || false,
                  onCheckedChange: (checked) => setFormData({
                    ...formData,
                    features_enabled: { ...formData.features_enabled, delivery: checked }
                  })
                },
                void 0,
                false,
                {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 471,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 466,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:461:16", "data-dynamic-content": "true", className: "flex items-center justify-between p-4 bg-gray-50 rounded-lg", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:462:18", "data-dynamic-content": "false", children: [
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RestaurantSettings:463:20", "data-dynamic-content": "false", className: "font-medium", children: "Enable Takeaway" }, void 0, false, {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 482,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RestaurantSettings:464:20", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Allow customers to order for takeaway" }, void 0, false, {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 483,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/RestaurantSettings.jsx",
                lineNumber: 481,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(
                Switch,
                {
                  "data-source-location": "pages/RestaurantSettings:466:18",
                  "data-dynamic-content": "true",
                  checked: formData.features_enabled?.takeaway || false,
                  onCheckedChange: (checked) => setFormData({
                    ...formData,
                    features_enabled: { ...formData.features_enabled, takeaway: checked }
                  })
                },
                void 0,
                false,
                {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 485,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 480,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:475:16", "data-dynamic-content": "true", className: "flex items-center justify-between p-4 bg-orange-50 rounded-lg border border-orange-200", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:476:18", "data-dynamic-content": "false", children: [
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RestaurantSettings:477:20", "data-dynamic-content": "false", className: "font-medium", children: "Order Sound Alerts" }, void 0, false, {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 496,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RestaurantSettings:478:20", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Play sound when new orders arrive" }, void 0, false, {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 497,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/RestaurantSettings.jsx",
                lineNumber: 495,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(
                Switch,
                {
                  "data-source-location": "pages/RestaurantSettings:480:18",
                  "data-dynamic-content": "true",
                  checked: formData.settings?.order_sound_enabled !== false,
                  onCheckedChange: (checked) => setFormData({
                    ...formData,
                    settings: { ...formData.settings, order_sound_enabled: checked }
                  })
                },
                void 0,
                false,
                {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 499,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 494,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/RestaurantSettings.jsx",
            lineNumber: 451,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/RestaurantSettings.jsx",
          lineNumber: 387,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/RestaurantSettings.jsx",
        lineNumber: 383,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/RestaurantSettings.jsx",
        lineNumber: 382,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(TabsContent, { "data-source-location": "pages/RestaurantSettings:494:8", "data-dynamic-content": "true", value: "riders", children: /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/RestaurantSettings:495:10", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "pages/RestaurantSettings:496:12", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:497:14", "data-dynamic-content": "true", className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:498:16", "data-dynamic-content": "false", children: [
            /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "pages/RestaurantSettings:499:18", "data-dynamic-content": "false", className: "text-lg", children: "Delivery Riders" }, void 0, false, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 518,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RestaurantSettings:500:18", "data-dynamic-content": "false", className: "text-sm text-gray-500 mt-1", children: "Manage your delivery team" }, void 0, false, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 519,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/RestaurantSettings.jsx",
            lineNumber: 517,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/RestaurantSettings:502:16", "data-dynamic-content": "true", onClick: () => setIsAddingRider(true), className: "bg-indigo-600", children: "+ Add Rider" }, void 0, false, {
            fileName: "/app/src/pages/RestaurantSettings.jsx",
            lineNumber: 521,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/RestaurantSettings.jsx",
          lineNumber: 516,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/RestaurantSettings.jsx",
          lineNumber: 515,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/RestaurantSettings:507:12", "data-dynamic-content": "true", children: [
          isAddingRider && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:509:16", "data-dynamic-content": "true", className: "mb-6 p-4 border border-gray-200 rounded-lg space-y-4", children: [
            /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/RestaurantSettings:510:18", "data-dynamic-content": "false", className: "font-medium", children: "Add New Rider" }, void 0, false, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 529,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:511:18", "data-dynamic-content": "true", className: "grid md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:512:20", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/RestaurantSettings:513:22", "data-dynamic-content": "false", children: "Name *" }, void 0, false, {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 532,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV(
                  Input,
                  {
                    "data-source-location": "pages/RestaurantSettings:514:22",
                    "data-dynamic-content": "true",
                    value: newRider.name,
                    onChange: (e) => setNewRider({ ...newRider, name: e.target.value }),
                    placeholder: "Rider name"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/pages/RestaurantSettings.jsx",
                    lineNumber: 533,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/src/pages/RestaurantSettings.jsx",
                lineNumber: 531,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:520:20", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/RestaurantSettings:521:22", "data-dynamic-content": "false", children: "Phone *" }, void 0, false, {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 540,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV(
                  Input,
                  {
                    "data-source-location": "pages/RestaurantSettings:522:22",
                    "data-dynamic-content": "true",
                    value: newRider.phone,
                    onChange: (e) => setNewRider({ ...newRider, phone: e.target.value }),
                    placeholder: "Phone number"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/pages/RestaurantSettings.jsx",
                    lineNumber: 541,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/src/pages/RestaurantSettings.jsx",
                lineNumber: 539,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:528:20", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/RestaurantSettings:529:22", "data-dynamic-content": "false", children: "Email" }, void 0, false, {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 548,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV(
                  Input,
                  {
                    "data-source-location": "pages/RestaurantSettings:530:22",
                    "data-dynamic-content": "true",
                    value: newRider.email,
                    onChange: (e) => setNewRider({ ...newRider, email: e.target.value }),
                    placeholder: "Email address"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/pages/RestaurantSettings.jsx",
                    lineNumber: 549,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/src/pages/RestaurantSettings.jsx",
                lineNumber: 547,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:536:20", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/RestaurantSettings:537:22", "data-dynamic-content": "false", children: "Vehicle Type" }, void 0, false, {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 556,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV(
                  Select,
                  {
                    "data-source-location": "pages/RestaurantSettings:538:22",
                    "data-dynamic-content": "true",
                    value: newRider.vehicle_type,
                    onValueChange: (value) => setNewRider({ ...newRider, vehicle_type: value }),
                    children: [
                      /* @__PURE__ */ jsxDEV(SelectTrigger, { "data-source-location": "pages/RestaurantSettings:542:24", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(SelectValue, { "data-source-location": "pages/RestaurantSettings:543:26", "data-dynamic-content": "false" }, void 0, false, {
                        fileName: "/app/src/pages/RestaurantSettings.jsx",
                        lineNumber: 562,
                        columnNumber: 27
                      }, this) }, void 0, false, {
                        fileName: "/app/src/pages/RestaurantSettings.jsx",
                        lineNumber: 561,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDEV(SelectContent, { "data-source-location": "pages/RestaurantSettings:545:24", "data-dynamic-content": "false", children: [
                        /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/RestaurantSettings:546:26", "data-dynamic-content": "false", value: "bike", children: "Bike" }, void 0, false, {
                          fileName: "/app/src/pages/RestaurantSettings.jsx",
                          lineNumber: 565,
                          columnNumber: 27
                        }, this),
                        /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/RestaurantSettings:547:26", "data-dynamic-content": "false", value: "scooter", children: "Scooter" }, void 0, false, {
                          fileName: "/app/src/pages/RestaurantSettings.jsx",
                          lineNumber: 566,
                          columnNumber: 27
                        }, this),
                        /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/RestaurantSettings:548:26", "data-dynamic-content": "false", value: "bicycle", children: "Bicycle" }, void 0, false, {
                          fileName: "/app/src/pages/RestaurantSettings.jsx",
                          lineNumber: 567,
                          columnNumber: 27
                        }, this),
                        /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/RestaurantSettings:549:26", "data-dynamic-content": "false", value: "car", children: "Car" }, void 0, false, {
                          fileName: "/app/src/pages/RestaurantSettings.jsx",
                          lineNumber: 568,
                          columnNumber: 27
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/src/pages/RestaurantSettings.jsx",
                        lineNumber: 564,
                        columnNumber: 25
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/src/pages/RestaurantSettings.jsx",
                    lineNumber: 557,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/src/pages/RestaurantSettings.jsx",
                lineNumber: 555,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:553:20", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/RestaurantSettings:554:22", "data-dynamic-content": "false", children: "Vehicle Number" }, void 0, false, {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 573,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV(
                  Input,
                  {
                    "data-source-location": "pages/RestaurantSettings:555:22",
                    "data-dynamic-content": "true",
                    value: newRider.vehicle_number,
                    onChange: (e) => setNewRider({ ...newRider, vehicle_number: e.target.value }),
                    placeholder: "Vehicle number"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/pages/RestaurantSettings.jsx",
                    lineNumber: 574,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/src/pages/RestaurantSettings.jsx",
                lineNumber: 572,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 530,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:562:18", "data-dynamic-content": "true", className: "flex gap-2", children: [
              /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/RestaurantSettings:563:20", "data-dynamic-content": "true", onClick: handleAddRider, className: "bg-green-600", children: "Save Rider" }, void 0, false, {
                fileName: "/app/src/pages/RestaurantSettings.jsx",
                lineNumber: 582,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/RestaurantSettings:564:20", "data-dynamic-content": "true", variant: "outline", onClick: () => setIsAddingRider(false), children: "Cancel" }, void 0, false, {
                fileName: "/app/src/pages/RestaurantSettings.jsx",
                lineNumber: 583,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 581,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/RestaurantSettings.jsx",
            lineNumber: 528,
            columnNumber: 15
          }, this),
          riders.length === 0 ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:570:16", "data-dynamic-content": "false", className: "text-center py-12 text-gray-500", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RestaurantSettings:571:18", "data-dynamic-content": "false", children: "No riders added yet" }, void 0, false, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 590,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RestaurantSettings:572:18", "data-dynamic-content": "false", className: "text-sm mt-2", children: "Add riders to manage deliveries" }, void 0, false, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 591,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/RestaurantSettings.jsx",
            lineNumber: 589,
            columnNumber: 15
          }, this) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:575:16", "data-dynamic-content": "true", className: "space-y-3", "data-collection-id": "DeliveryRider", children: riders.map(
            (rider) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:577:20", "data-dynamic-content": "true", className: "flex items-center justify-between p-4 border border-gray-200 rounded-lg", "data-collection-item-id": rider?.id, children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:578:22", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RestaurantSettings:579:24", "data-dynamic-content": "true", className: "font-medium", "data-collection-item-field": "name", "data-collection-item-id": rider?.id, children: rider.name }, void 0, false, {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 598,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/RestaurantSettings:580:24", "data-dynamic-content": "true", className: "text-sm text-gray-500", "data-collection-item-field": "phone", "data-collection-item-id": rider?.id, children: rider.phone }, void 0, false, {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 599,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:581:24", "data-dynamic-content": "true", className: "flex items-center gap-3 mt-1", children: [
                  /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/RestaurantSettings:582:26", "data-dynamic-content": "true", variant: "outline", className: "text-xs", "data-collection-item-field": "vehicle_type", "data-collection-item-id": rider?.id, children: [
                    rider.vehicle_type,
                    " ",
                    rider.vehicle_number && `• ${rider.vehicle_number}`
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/RestaurantSettings.jsx",
                    lineNumber: 601,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/RestaurantSettings:585:26", "data-dynamic-content": "true", className: "text-xs text-gray-400", children: [
                    rider.total_deliveries || 0,
                    " deliveries • ⭐ ",
                    rider.rating || 5
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/RestaurantSettings.jsx",
                    lineNumber: 604,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 600,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/RestaurantSettings.jsx",
                lineNumber: 597,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/RestaurantSettings:590:22", "data-dynamic-content": "true", className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/RestaurantSettings:591:24", "data-dynamic-content": "true", className: rider.is_available ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700", children: rider.is_available ? "Available" : "Busy" }, void 0, false, {
                  fileName: "/app/src/pages/RestaurantSettings.jsx",
                  lineNumber: 610,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV(
                  Switch,
                  {
                    "data-source-location": "pages/RestaurantSettings:594:24",
                    "data-dynamic-content": "true",
                    checked: rider.is_active,
                    onCheckedChange: () => toggleRiderStatus(rider.id, rider.is_active)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/pages/RestaurantSettings.jsx",
                    lineNumber: 613,
                    columnNumber: 25
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/src/pages/RestaurantSettings.jsx",
                lineNumber: 609,
                columnNumber: 23
              }, this)
            ] }, rider.id, true, {
              fileName: "/app/src/pages/RestaurantSettings.jsx",
              lineNumber: 596,
              columnNumber: 17
            }, this)
          ) }, void 0, false, {
            fileName: "/app/src/pages/RestaurantSettings.jsx",
            lineNumber: 594,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/RestaurantSettings.jsx",
          lineNumber: 526,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/RestaurantSettings.jsx",
        lineNumber: 514,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/RestaurantSettings.jsx",
        lineNumber: 513,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/RestaurantSettings.jsx",
      lineNumber: 188,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/RestaurantSettings.jsx",
    lineNumber: 175,
    columnNumber: 5
  }, this);
}
_s(RestaurantSettingsContent, "0y4Jx134beXWq5Y5dNAyZPfT/Sg=");
_c = RestaurantSettingsContent;
export default function RestaurantSettings() {
  return /* @__PURE__ */ jsxDEV(DashboardLayout, { "data-source-location": "pages/RestaurantSettings:613:4", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(RestaurantSettingsContent, { "data-source-location": "pages/RestaurantSettings:614:6", "data-dynamic-content": "false" }, void 0, false, {
    fileName: "/app/src/pages/RestaurantSettings.jsx",
    lineNumber: 633,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/src/pages/RestaurantSettings.jsx",
    lineNumber: 632,
    columnNumber: 5
  }, this);
}
_c2 = RestaurantSettings;
var _c, _c2;
$RefreshReg$(_c, "RestaurantSettingsContent");
$RefreshReg$(_c2, "RestaurantSettings");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/RestaurantSettings.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/RestaurantSettings.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QixrQ0FBaUMsd0JBQXFCLFdBQXRHO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBNkcsS0FEL0c7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVBO0FBRUo7QUFBQ0MsTUFOdUJEO0FBQWtCLElBQUFELElBQUFFO0FBQUFDLGFBQUFILElBQUE7QUFBQUcsYUFBQUQsS0FBQSIsIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJiYXNlNDQiLCJEYXNoYm9hcmRMYXlvdXQiLCJTdG9yZSIsIlVwbG9hZCIsIlNhdmUiLCJHbG9iZSIsIkNsb2NrIiwiSW5kaWFuUnVwZWUiLCJNYXBQaW4iLCJQaG9uZSIsIk1haWwiLCJYIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEhlYWRlciIsIkNhcmRUaXRsZSIsIkJ1dHRvbiIsIklucHV0IiwiTGFiZWwiLCJUZXh0YXJlYSIsIlN3aXRjaCIsIlNlbGVjdCIsIlNlbGVjdENvbnRlbnQiLCJTZWxlY3RJdGVtIiwiU2VsZWN0VHJpZ2dlciIsIlNlbGVjdFZhbHVlIiwiVGFicyIsIlRhYnNMaXN0IiwiVGFic1RyaWdnZXIiLCJUYWJzQ29udGVudCIsIkJhZGdlIiwiY3Vpc2luZVR5cGVzIiwiZGF5cyIsIlJlc3RhdXJhbnRTZXR0aW5nc0NvbnRlbnQiLCJ1c2VyIiwicmVzdGF1cmFudCIsInJlZnJlc2hSZXN0YXVyYW50IiwiX3MiLCJpc1NhdmluZyIsInNldElzU2F2aW5nIiwicmlkZXJzIiwic2V0UmlkZXJzIiwiaXNBZGRpbmdSaWRlciIsInNldElzQWRkaW5nUmlkZXIiLCJuZXdSaWRlciIsInNldE5ld1JpZGVyIiwibmFtZSIsInBob25lIiwiZW1haWwiLCJ2ZWhpY2xlX3R5cGUiLCJ2ZWhpY2xlX251bWJlciIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJhZGRyZXNzIiwibG9nb191cmwiLCJjb3Zlcl9pbWFnZV91cmwiLCJjdWlzaW5lX3R5cGUiLCJvcGVuaW5nX2hvdXJzIiwiZmVhdHVyZXNfZW5hYmxlZCIsInNldHRpbmdzIiwiY3VycmVuY3kiLCJ0YXhfcmF0ZSIsInNlcnZpY2VfY2hhcmdlIiwiYWNjZXB0X29ubGluZV9wYXltZW50IiwidGFibGVfY291bnQiLCJsb2FkUmlkZXJzIiwicmVzdGF1cmFudF9pZCIsInJpZGVyc0xpc3QiLCJlbnRpdGllcyIsIkRlbGl2ZXJ5UmlkZXIiLCJmaWx0ZXIiLCJoYW5kbGVBZGRSaWRlciIsImNyZWF0ZSIsImlzX2FjdGl2ZSIsImlzX2F2YWlsYWJsZSIsInRvdGFsX2RlbGl2ZXJpZXMiLCJyYXRpbmciLCJ0b2dnbGVSaWRlclN0YXR1cyIsInJpZGVySWQiLCJjdXJyZW50U3RhdHVzIiwidXBkYXRlIiwiaGFuZGxlU2F2ZSIsIlJlc3RhdXJhbnQiLCJpZCIsImhhbmRsZUltYWdlVXBsb2FkIiwiZSIsImZpZWxkIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZV91cmwiLCJpbnRlZ3JhdGlvbnMiLCJDb3JlIiwiVXBsb2FkRmlsZSIsInRvZ2dsZUN1aXNpbmUiLCJjdWlzaW5lIiwiY3VycmVudCIsImluY2x1ZGVzIiwiYyIsInVwZGF0ZU9wZW5pbmdIb3VycyIsImRheSIsInZhbHVlIiwibWFwIiwiX19hcnJJZHhfXyIsIl9pZCIsInBhcnNlSW50IiwicGFyc2VGbG9hdCIsImNoZWNrZWQiLCJkZWxpdmVyeSIsInRha2Vhd2F5Iiwib3JkZXJfc291bmRfZW5hYmxlZCIsImxlbmd0aCIsInJpZGVyIiwiX2MiLCJSZXN0YXVyYW50U2V0dGluZ3MiLCJfYzIiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiUmVzdGF1cmFudFNldHRpbmdzLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYmFzZTQ0IH0gZnJvbSBcIkAvYXBpL2Jhc2U0NENsaWVudFwiO1xuaW1wb3J0IERhc2hib2FyZExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkTGF5b3V0XCI7XG5pbXBvcnQge1xuICBTdG9yZSwgVXBsb2FkLCBTYXZlLCBHbG9iZSwgQ2xvY2ssXG4gIEluZGlhblJ1cGVlLCBNYXBQaW4sIFBob25lLCBNYWlsLCBYIH0gZnJvbVxuXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9sYWJlbFwiO1xuaW1wb3J0IHsgVGV4dGFyZWEgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RleHRhcmVhXCI7XG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3N3aXRjaFwiO1xuaW1wb3J0IHtcbiAgU2VsZWN0LFxuICBTZWxlY3RDb250ZW50LFxuICBTZWxlY3RJdGVtLFxuICBTZWxlY3RUcmlnZ2VyLFxuICBTZWxlY3RWYWx1ZSB9IGZyb21cblwiQC9jb21wb25lbnRzL3VpL3NlbGVjdFwiO1xuaW1wb3J0IHsgVGFicywgVGFic0xpc3QsIFRhYnNUcmlnZ2VyLCBUYWJzQ29udGVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdGFic1wiO1xuaW1wb3J0IHsgQmFkZ2UgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2JhZGdlXCI7XG5cbmNvbnN0IGN1aXNpbmVUeXBlcyA9IFtcblwiTm9ydGggSW5kaWFuXCIsIFwiU291dGggSW5kaWFuXCIsIFwiQ2hpbmVzZVwiLCBcIkl0YWxpYW5cIixcblwiTWV4aWNhblwiLCBcIlRoYWlcIiwgXCJKYXBhbmVzZVwiLCBcIkNvbnRpbmVudGFsXCIsXG5cIk11Z2hsYWlcIiwgXCJTdHJlZXQgRm9vZFwiLCBcIkNhZmVcIiwgXCJGYXN0IEZvb2RcIl07XG5cblxuY29uc3QgZGF5cyA9IFtcIm1vbmRheVwiLCBcInR1ZXNkYXlcIiwgXCJ3ZWRuZXNkYXlcIiwgXCJ0aHVyc2RheVwiLCBcImZyaWRheVwiLCBcInNhdHVyZGF5XCIsIFwic3VuZGF5XCJdO1xuXG5mdW5jdGlvbiBSZXN0YXVyYW50U2V0dGluZ3NDb250ZW50KHsgdXNlciwgcmVzdGF1cmFudCwgcmVmcmVzaFJlc3RhdXJhbnQgfSkge1xuICBjb25zdCBbaXNTYXZpbmcsIHNldElzU2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3JpZGVycywgc2V0UmlkZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lzQWRkaW5nUmlkZXIsIHNldElzQWRkaW5nUmlkZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbmV3UmlkZXIsIHNldE5ld1JpZGVyXSA9IHVzZVN0YXRlKHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIHBob25lOiBcIlwiLFxuICAgIGVtYWlsOiBcIlwiLFxuICAgIHZlaGljbGVfdHlwZTogXCJiaWtlXCIsXG4gICAgdmVoaWNsZV9udW1iZXI6IFwiXCJcbiAgfSk7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6IFwiXCIsXG4gICAgYWRkcmVzczogXCJcIixcbiAgICBwaG9uZTogXCJcIixcbiAgICBlbWFpbDogXCJcIixcbiAgICBsb2dvX3VybDogXCJcIixcbiAgICBjb3Zlcl9pbWFnZV91cmw6IFwiXCIsXG4gICAgY3Vpc2luZV90eXBlOiBbXSxcbiAgICBvcGVuaW5nX2hvdXJzOiB7fSxcbiAgICBmZWF0dXJlc19lbmFibGVkOiB7fSxcbiAgICBzZXR0aW5nczoge1xuICAgICAgY3VycmVuY3k6IFwiSU5SXCIsXG4gICAgICB0YXhfcmF0ZTogNSxcbiAgICAgIHNlcnZpY2VfY2hhcmdlOiAwLFxuICAgICAgYWNjZXB0X29ubGluZV9wYXltZW50OiBmYWxzZSxcbiAgICAgIHRhYmxlX2NvdW50OiAxMFxuICAgIH1cbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmVzdGF1cmFudCkge1xuICAgICAgc2V0Rm9ybURhdGEoe1xuICAgICAgICBuYW1lOiByZXN0YXVyYW50Lm5hbWUgfHwgXCJcIixcbiAgICAgICAgYWRkcmVzczogcmVzdGF1cmFudC5hZGRyZXNzIHx8IFwiXCIsXG4gICAgICAgIHBob25lOiByZXN0YXVyYW50LnBob25lIHx8IFwiXCIsXG4gICAgICAgIGVtYWlsOiByZXN0YXVyYW50LmVtYWlsIHx8IFwiXCIsXG4gICAgICAgIGxvZ29fdXJsOiByZXN0YXVyYW50LmxvZ29fdXJsIHx8IFwiXCIsXG4gICAgICAgIGNvdmVyX2ltYWdlX3VybDogcmVzdGF1cmFudC5jb3Zlcl9pbWFnZV91cmwgfHwgXCJcIixcbiAgICAgICAgY3Vpc2luZV90eXBlOiByZXN0YXVyYW50LmN1aXNpbmVfdHlwZSB8fCBbXSxcbiAgICAgICAgb3BlbmluZ19ob3VyczogcmVzdGF1cmFudC5vcGVuaW5nX2hvdXJzIHx8IHt9LFxuICAgICAgICBmZWF0dXJlc19lbmFibGVkOiByZXN0YXVyYW50LmZlYXR1cmVzX2VuYWJsZWQgfHwge30sXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgY3VycmVuY3k6IHJlc3RhdXJhbnQuc2V0dGluZ3M/LmN1cnJlbmN5IHx8IFwiSU5SXCIsXG4gICAgICAgICAgdGF4X3JhdGU6IHJlc3RhdXJhbnQuc2V0dGluZ3M/LnRheF9yYXRlIHx8IDUsXG4gICAgICAgICAgc2VydmljZV9jaGFyZ2U6IHJlc3RhdXJhbnQuc2V0dGluZ3M/LnNlcnZpY2VfY2hhcmdlIHx8IDAsXG4gICAgICAgICAgYWNjZXB0X29ubGluZV9wYXltZW50OiByZXN0YXVyYW50LnNldHRpbmdzPy5hY2NlcHRfb25saW5lX3BheW1lbnQgfHwgZmFsc2UsXG4gICAgICAgICAgdGFibGVfY291bnQ6IHJlc3RhdXJhbnQuc2V0dGluZ3M/LnRhYmxlX2NvdW50IHx8IDEwXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgbG9hZFJpZGVycygpO1xuICAgIH1cbiAgfSwgW3Jlc3RhdXJhbnRdKTtcblxuICBjb25zdCBsb2FkUmlkZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghcmVzdGF1cmFudD8ucmVzdGF1cmFudF9pZCkgcmV0dXJuO1xuICAgIGNvbnN0IHJpZGVyc0xpc3QgPSBhd2FpdCBiYXNlNDQuZW50aXRpZXMuRGVsaXZlcnlSaWRlci5maWx0ZXIoe1xuICAgICAgcmVzdGF1cmFudF9pZDogcmVzdGF1cmFudC5yZXN0YXVyYW50X2lkXG4gICAgfSk7XG4gICAgc2V0UmlkZXJzKHJpZGVyc0xpc3QpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFkZFJpZGVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghbmV3UmlkZXIubmFtZSB8fCAhbmV3UmlkZXIucGhvbmUpIHJldHVybjtcblxuICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5EZWxpdmVyeVJpZGVyLmNyZWF0ZSh7XG4gICAgICByZXN0YXVyYW50X2lkOiByZXN0YXVyYW50LnJlc3RhdXJhbnRfaWQsXG4gICAgICAuLi5uZXdSaWRlcixcbiAgICAgIGlzX2FjdGl2ZTogdHJ1ZSxcbiAgICAgIGlzX2F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgIHRvdGFsX2RlbGl2ZXJpZXM6IDAsXG4gICAgICByYXRpbmc6IDVcbiAgICB9KTtcblxuICAgIHNldE5ld1JpZGVyKHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBwaG9uZTogXCJcIixcbiAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgdmVoaWNsZV90eXBlOiBcImJpa2VcIixcbiAgICAgIHZlaGljbGVfbnVtYmVyOiBcIlwiXG4gICAgfSk7XG4gICAgc2V0SXNBZGRpbmdSaWRlcihmYWxzZSk7XG4gICAgbG9hZFJpZGVycygpO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZVJpZGVyU3RhdHVzID0gYXN5bmMgKHJpZGVySWQsIGN1cnJlbnRTdGF0dXMpID0+IHtcbiAgICBhd2FpdCBiYXNlNDQuZW50aXRpZXMuRGVsaXZlcnlSaWRlci51cGRhdGUocmlkZXJJZCwge1xuICAgICAgaXNfYWN0aXZlOiAhY3VycmVudFN0YXR1c1xuICAgIH0pO1xuICAgIGxvYWRSaWRlcnMoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTYXZlID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldElzU2F2aW5nKHRydWUpO1xuICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5SZXN0YXVyYW50LnVwZGF0ZShyZXN0YXVyYW50LmlkLCBmb3JtRGF0YSk7XG4gICAgYXdhaXQgcmVmcmVzaFJlc3RhdXJhbnQoKTtcbiAgICBzZXRJc1NhdmluZyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSW1hZ2VVcGxvYWQgPSBhc3luYyAoZSwgZmllbGQpID0+IHtcbiAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXM/LlswXTtcbiAgICBpZiAoIWZpbGUpIHJldHVybjtcblxuICAgIGNvbnN0IHsgZmlsZV91cmwgfSA9IGF3YWl0IGJhc2U0NC5pbnRlZ3JhdGlvbnMuQ29yZS5VcGxvYWRGaWxlKHsgZmlsZSB9KTtcbiAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBbZmllbGRdOiBmaWxlX3VybCB9KTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVDdWlzaW5lID0gKGN1aXNpbmUpID0+IHtcbiAgICBjb25zdCBjdXJyZW50ID0gZm9ybURhdGEuY3Vpc2luZV90eXBlIHx8IFtdO1xuICAgIGlmIChjdXJyZW50LmluY2x1ZGVzKGN1aXNpbmUpKSB7XG4gICAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBjdWlzaW5lX3R5cGU6IGN1cnJlbnQuZmlsdGVyKChjKSA9PiBjICE9PSBjdWlzaW5lKSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgY3Vpc2luZV90eXBlOiBbLi4uY3VycmVudCwgY3Vpc2luZV0gfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZU9wZW5pbmdIb3VycyA9IChkYXksIHZhbHVlKSA9PiB7XG4gICAgc2V0Rm9ybURhdGEoe1xuICAgICAgLi4uZm9ybURhdGEsXG4gICAgICBvcGVuaW5nX2hvdXJzOiB7IC4uLmZvcm1EYXRhLm9wZW5pbmdfaG91cnMsIFtkYXldOiB2YWx1ZSB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjE1Njo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICB7LyogSGVhZGVyICovfVxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczoxNTg6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgbWQ6aXRlbXMtY2VudGVyIG1kOmp1c3RpZnktYmV0d2VlbiBnYXAtNFwiPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjE1OTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgIDxoMSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczoxNjA6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDBcIj5SZXN0YXVyYW50IFNldHRpbmdzPC9oMT5cbiAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczoxNjE6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPk1hbmFnZSB5b3VyIHJlc3RhdXJhbnQgcHJvZmlsZSBhbmQgcHJlZmVyZW5jZXM8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjE2Mzo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgb25DbGljaz17aGFuZGxlU2F2ZX0gZGlzYWJsZWQ9e2lzU2F2aW5nfSBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tdmlvbGV0LTYwMCB0by1pbmRpZ28tNjAwXCI+XG4gICAgICAgICAgPFNhdmUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MTY0OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgbXItMlwiIC8+XG4gICAgICAgICAge2lzU2F2aW5nID8gJ1NhdmluZy4uLicgOiAnU2F2ZSBDaGFuZ2VzJ31cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPFRhYnMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MTY5OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBkZWZhdWx0VmFsdWU9XCJwcm9maWxlXCIgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgIDxUYWJzTGlzdCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczoxNzA6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICA8VGFic1RyaWdnZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MTcxOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHZhbHVlPVwicHJvZmlsZVwiPlByb2ZpbGU8L1RhYnNUcmlnZ2VyPlxuICAgICAgICAgIDxUYWJzVHJpZ2dlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczoxNzI6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdmFsdWU9XCJob3Vyc1wiPk9wZW5pbmcgSG91cnM8L1RhYnNUcmlnZ2VyPlxuICAgICAgICAgIDxUYWJzVHJpZ2dlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczoxNzM6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdmFsdWU9XCJiaWxsaW5nXCI+QmlsbGluZyBTZXR0aW5nczwvVGFic1RyaWdnZXI+XG4gICAgICAgICAgPFRhYnNUcmlnZ2VyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjE3NDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB2YWx1ZT1cInJpZGVyc1wiPkRlbGl2ZXJ5IFJpZGVyczwvVGFic1RyaWdnZXI+XG4gICAgICAgIDwvVGFic0xpc3Q+XG5cbiAgICAgICAgey8qIFByb2ZpbGUgVGFiICovfVxuICAgICAgICA8VGFic0NvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MTc4OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB2YWx1ZT1cInByb2ZpbGVcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjE3OToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLTMgZ2FwLTZcIj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MTgwOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tMiBzcGFjZS15LTZcIj5cbiAgICAgICAgICAgICAgey8qIEJhc2ljIEluZm8gKi99XG4gICAgICAgICAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjE4MjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjE4MzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MTg0OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtbGdcIj5CYXNpYyBJbmZvcm1hdGlvbjwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MTg2OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjE4NzoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MTg4OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGh0bWxGb3I9XCJuYW1lXCI+UmVzdGF1cmFudCBOYW1lPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjE4OToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgUmVzdGF1cmFudCBOYW1lXCIgLz5cblxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MTk3OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczoxOTg6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgaHRtbEZvcj1cImFkZHJlc3NcIj5BZGRyZXNzPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjE5OToyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5hZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIGFkZHJlc3M6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZ1bGwgYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9ezJ9IC8+XG5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjIwODoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczoyMDk6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MjEwOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGh0bWxGb3I9XCJwaG9uZVwiPlBob25lPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MjExOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucGhvbmV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBwaG9uZTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIrOTEgOTg3NjUgNDMyMTBcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjIxODoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczoyMTk6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczoyMjA6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY29udGFjdEByZXN0YXVyYW50LmNvbVwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG5cbiAgICAgICAgICAgICAgey8qIEN1aXNpbmUgVHlwZXMgKi99XG4gICAgICAgICAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjIzMzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjIzNDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MjM1OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtbGdcIj5DdWlzaW5lIFR5cGVzPC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczoyMzc6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MjM4OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAge2N1aXNpbmVUeXBlcy5tYXAoKGN1aXNpbmUsIF9fYXJySWR4X18pID0+XG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczoyNDA6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICBrZXk9e2N1aXNpbmV9XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e2Zvcm1EYXRhLmN1aXNpbmVfdHlwZT8uaW5jbHVkZXMoY3Vpc2luZSkgPyBcImRlZmF1bHRcIiA6IFwib3V0bGluZVwifVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlciAke2Zvcm1EYXRhLmN1aXNpbmVfdHlwZT8uaW5jbHVkZXMoY3Vpc2luZSkgPyAnYmctdmlvbGV0LTYwMCcgOiAnJ31gfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVDdWlzaW5lKGN1aXNpbmUpfSBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cImN1aXNpbmVUeXBlc1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3Vpc2luZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBJbWFnZXMgKi99XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjI1NToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgICAgICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczoyNTY6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczoyNTc6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjI1ODoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+UmVzdGF1cmFudCBMb2dvPC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczoyNjA6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MjYxOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge2Zvcm1EYXRhLmxvZ29fdXJsID9cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczoyNjM6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwibG9nb191cmxcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17Zm9ybURhdGE/LmlkIHx8IGZvcm1EYXRhPy5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczoyNjQ6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17Zm9ybURhdGEubG9nb191cmx9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiTG9nb1wiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0zMiBoLTMyIHJvdW5kZWQteGwgb2JqZWN0LWNvdmVyXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczoyNjk6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIGxvZ29fdXJsOiBcIlwiIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIC10b3AtMiAtcmlnaHQtMiB3LTYgaC02IGJnLXJlZC01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8WCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczoyNzM6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOlxuXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczoyNzc6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ3LTMyIGgtMzIgYm9yZGVyLTIgYm9yZGVyLWRhc2hlZCBib3JkZXItZ3JheS0zMDAgcm91bmRlZC14bCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBjdXJzb3ItcG9pbnRlciBob3Zlcjpib3JkZXItdmlvbGV0LTQwMCB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFVwbG9hZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczoyNzg6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy04IGgtOCB0ZXh0LWdyYXktNDAwIG1iLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6Mjc5OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlVwbG9hZCBMb2dvPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjI4MDoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbWFnZVVwbG9hZChlLCAnbG9nb191cmwnKX0gLz5cblxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cblxuICAgICAgICAgICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczoyOTI6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczoyOTM6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjI5NDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+Q292ZXIgSW1hZ2U8L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjI5NjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6Mjk3OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBtYi0yXCI+UmVjb21tZW5kZWQ6IDEyMDB4NDAwcHggKDM6MSByYXRpbyk8L3A+XG4gICAgICAgICAgICAgICAgICB7Zm9ybURhdGEuY292ZXJfaW1hZ2VfdXJsID9cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6Mjk5OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicmVsYXRpdmVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImNvdmVyX2ltYWdlX3VybFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtmb3JtRGF0YT8uaWQgfHwgZm9ybURhdGE/Ll9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczozMDA6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e2Zvcm1EYXRhLmNvdmVyX2ltYWdlX3VybH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiQ292ZXJcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0zMiByb3VuZGVkLWxnIG9iamVjdC1jb3ZlclwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjMwNToyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIGNvdmVyX2ltYWdlX3VybDogXCJcIiB9KX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIgcmlnaHQtMiB3LTYgaC02IGJnLXJlZC01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MzA5OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMyBoLTNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOlxuXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MzEzOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtMzIgYm9yZGVyLTIgYm9yZGVyLWRhc2hlZCBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBjdXJzb3ItcG9pbnRlciBob3Zlcjpib3JkZXItb3JhbmdlLTQwMCB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxVcGxvYWQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MzE0OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctOCBoLTggdGV4dC1ncmF5LTQwMCBtYi0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczozMTU6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+VXBsb2FkIENvdmVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczozMTY6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUltYWdlVXBsb2FkKGUsICdjb3Zlcl9pbWFnZV91cmwnKX0gLz5cblxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cblxuICAgICAgICAgICAgICB7LyogUmVzdGF1cmFudCBJRCAqL31cbiAgICAgICAgICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MzI4OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYmctZ3JheS01MFwiPlxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczozMjk6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjMzMDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgbWItMVwiPlJlc3RhdXJhbnQgSUQ8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczozMzE6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1tZWRpdW1cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInJlc3RhdXJhbnRfaWRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmVzdGF1cmFudD8uaWQgfHwgcmVzdGF1cmFudD8uX2lkfT57cmVzdGF1cmFudD8ucmVzdGF1cmFudF9pZH08L3A+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvVGFic0NvbnRlbnQ+XG5cbiAgICAgICAgey8qIE9wZW5pbmcgSG91cnMgVGFiICovfVxuICAgICAgICA8VGFic0NvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MzM5OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB2YWx1ZT1cImhvdXJzXCI+XG4gICAgICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MzQwOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICA8Q2FyZEhlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczozNDE6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgIDxDYXJkVGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MzQyOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtbGdcIj5PcGVuaW5nIEhvdXJzPC9DYXJkVGl0bGU+XG4gICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MzQ0OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MzQ1OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAge2RheXMubWFwKChkYXksIF9fYXJySWR4X18pID0+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczozNDc6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2RheX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIiBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cImRheXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MzQ4OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidy0yNCBjYXBpdGFsaXplIGZvbnQtbWVkaXVtXCIgZGF0YS1hcnItaW5kZXg9e19fYXJySWR4X199IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJkYXlzXCI+e2RheX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczozNDk6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLm9wZW5pbmdfaG91cnM/LltkYXldIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZU9wZW5pbmdIb3VycyhkYXksIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiwgMTA6MDAgQU0gLSAxMDowMCBQTVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTFcIiBkYXRhLWFyci1pbmRleD17X19hcnJJZHhfX30gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cImRheXNcIiAvPlxuXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L1RhYnNDb250ZW50PlxuXG4gICAgICAgIHsvKiBCaWxsaW5nIFNldHRpbmdzIFRhYiAqL31cbiAgICAgICAgPFRhYnNDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjM2Mzo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdmFsdWU9XCJiaWxsaW5nXCI+XG4gICAgICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MzY0OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICA8Q2FyZEhlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczozNjU6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgIDxDYXJkVGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MzY2OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtbGdcIj5CaWxsaW5nICYgVGF4IFNldHRpbmdzPC9DYXJkVGl0bGU+XG4gICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MzY4OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MzY5OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBnYXAtNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MzcwOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICA8TGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MzcxOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGh0bWxGb3I9XCJjdXJyZW5jeVwiPkN1cnJlbmN5PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxTZWxlY3QgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MzcyOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5zZXR0aW5ncy5jdXJyZW5jeX1cbiAgICAgICAgICAgICAgICAgIG9uVmFsdWVDaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0Rm9ybURhdGEoe1xuICAgICAgICAgICAgICAgICAgICAuLi5mb3JtRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHsgLi4uZm9ybURhdGEuc2V0dGluZ3MsIGN1cnJlbmN5OiB2YWx1ZSB9XG4gICAgICAgICAgICAgICAgICB9KX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFRyaWdnZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6Mzc5OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RWYWx1ZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczozODA6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3RUcmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Q29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczozODI6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MzgzOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHZhbHVlPVwiSU5SXCI+SU5SICjigrkpPC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjM4NDoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB2YWx1ZT1cIlVTRFwiPlVTRCAoJCk8L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6Mzg1OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHZhbHVlPVwiRVVSXCI+RVVSICjigqwpPC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MzkwOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICA8TGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6MzkxOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGh0bWxGb3I9XCJ0YWJsZV9jb3VudFwiPk51bWJlciBvZiBUYWJsZXM8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgPElucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjM5MjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICBpZD1cInRhYmxlX2NvdW50XCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnNldHRpbmdzLnRhYmxlX2NvdW50fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIC4uLmZvcm1EYXRhLFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczogeyAuLi5mb3JtRGF0YS5zZXR0aW5ncywgdGFibGVfY291bnQ6IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSB9XG4gICAgICAgICAgICAgICAgICB9KX0gLz5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczo0MDM6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgIDxMYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczo0MDQ6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgaHRtbEZvcj1cInRheF9yYXRlXCI+VGF4IFJhdGUgKCUpPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczo0MDU6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJ0YXhfcmF0ZVwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHN0ZXA9XCIwLjFcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnNldHRpbmdzLnRheF9yYXRlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIC4uLmZvcm1EYXRhLFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczogeyAuLi5mb3JtRGF0YS5zZXR0aW5ncywgdGF4X3JhdGU6IHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpIH1cbiAgICAgICAgICAgICAgICAgIH0pfSAvPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjQxNzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgPExhYmVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjQxODoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBodG1sRm9yPVwic2VydmljZV9jaGFyZ2VcIj5TZXJ2aWNlIENoYXJnZSAoJSk8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgPElucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjQxOToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICBpZD1cInNlcnZpY2VfY2hhcmdlXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgc3RlcD1cIjAuMVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuc2V0dGluZ3Muc2VydmljZV9jaGFyZ2V9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZm9ybURhdGEsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7IC4uLmZvcm1EYXRhLnNldHRpbmdzLCBzZXJ2aWNlX2NoYXJnZTogcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSkgfVxuICAgICAgICAgICAgICAgICAgfSl9IC8+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczo0MzI6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjQzMzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTQgYmctZ3JheS01MCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjQzNDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6NDM1OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+QWNjZXB0IE9ubGluZSBQYXltZW50czwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6NDM2OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPkVuYWJsZSBVUEkgYW5kIGNhcmQgcGF5bWVudHM8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxTd2l0Y2ggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6NDM4OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2Zvcm1EYXRhLnNldHRpbmdzLmFjY2VwdF9vbmxpbmVfcGF5bWVudH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZENoYW5nZT17KGNoZWNrZWQpID0+IHNldEZvcm1EYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZm9ybURhdGEsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7IC4uLmZvcm1EYXRhLnNldHRpbmdzLCBhY2NlcHRfb25saW5lX3BheW1lbnQ6IGNoZWNrZWQgfVxuICAgICAgICAgICAgICAgICAgfSl9IC8+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6NDQ3OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtNCBiZy1ncmF5LTUwIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6NDQ4OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczo0NDk6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj5FbmFibGUgRGVsaXZlcnk8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjQ1MDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5BbGxvdyBjdXN0b21lcnMgdG8gb3JkZXIgZm9yIGRlbGl2ZXJ5PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8U3dpdGNoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjQ1MjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtmb3JtRGF0YS5mZWF0dXJlc19lbmFibGVkPy5kZWxpdmVyeSB8fCBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZENoYW5nZT17KGNoZWNrZWQpID0+IHNldEZvcm1EYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZm9ybURhdGEsXG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVzX2VuYWJsZWQ6IHsgLi4uZm9ybURhdGEuZmVhdHVyZXNfZW5hYmxlZCwgZGVsaXZlcnk6IGNoZWNrZWQgfVxuICAgICAgICAgICAgICAgICAgfSl9IC8+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6NDYxOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtNCBiZy1ncmF5LTUwIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6NDYyOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczo0NjM6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj5FbmFibGUgVGFrZWF3YXk8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjQ2NDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5BbGxvdyBjdXN0b21lcnMgdG8gb3JkZXIgZm9yIHRha2Vhd2F5PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8U3dpdGNoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjQ2NjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtmb3JtRGF0YS5mZWF0dXJlc19lbmFibGVkPy50YWtlYXdheSB8fCBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZENoYW5nZT17KGNoZWNrZWQpID0+IHNldEZvcm1EYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZm9ybURhdGEsXG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVzX2VuYWJsZWQ6IHsgLi4uZm9ybURhdGEuZmVhdHVyZXNfZW5hYmxlZCwgdGFrZWF3YXk6IGNoZWNrZWQgfVxuICAgICAgICAgICAgICAgICAgfSl9IC8+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6NDc1OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtNCBiZy1vcmFuZ2UtNTAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLW9yYW5nZS0yMDBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6NDc2OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczo0Nzc6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj5PcmRlciBTb3VuZCBBbGVydHM8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjQ3ODoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5QbGF5IHNvdW5kIHdoZW4gbmV3IG9yZGVycyBhcnJpdmU8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxTd2l0Y2ggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6NDgwOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2Zvcm1EYXRhLnNldHRpbmdzPy5vcmRlcl9zb3VuZF9lbmFibGVkICE9PSBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZENoYW5nZT17KGNoZWNrZWQpID0+IHNldEZvcm1EYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZm9ybURhdGEsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7IC4uLmZvcm1EYXRhLnNldHRpbmdzLCBvcmRlcl9zb3VuZF9lbmFibGVkOiBjaGVja2VkIH1cbiAgICAgICAgICAgICAgICAgIH0pfSAvPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvVGFic0NvbnRlbnQ+XG5cbiAgICAgICAgey8qIFJpZGVycyBUYWIgKi99XG4gICAgICAgIDxUYWJzQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczo0OTQ6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHZhbHVlPVwicmlkZXJzXCI+XG4gICAgICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6NDk1OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICA8Q2FyZEhlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczo0OTY6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczo0OTc6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjQ5ODoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6NDk5OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtbGdcIj5EZWxpdmVyeSBSaWRlcnM8L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjUwMDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgbXQtMVwiPk1hbmFnZSB5b3VyIGRlbGl2ZXJ5IHRlYW08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczo1MDI6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc0FkZGluZ1JpZGVyKHRydWUpfSBjbGFzc05hbWU9XCJiZy1pbmRpZ28tNjAwXCI+XG4gICAgICAgICAgICAgICAgICArIEFkZCBSaWRlclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczo1MDc6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAge2lzQWRkaW5nUmlkZXIgJiZcbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczo1MDk6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtYi02IHAtNCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbGcgc3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAgICA8aDMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6NTEwOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+QWRkIE5ldyBSaWRlcjwvaDM+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjUxMToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczo1MTI6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6NTEzOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPk5hbWUgKjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjUxNDoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdSaWRlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1JpZGVyKHsgLi4ubmV3UmlkZXIsIG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJpZGVyIG5hbWVcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjUyMDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczo1MjE6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+UGhvbmUgKjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjUyMjoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdSaWRlci5waG9uZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdSaWRlcih7IC4uLm5ld1JpZGVyLCBwaG9uZTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmUgbnVtYmVyXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczo1Mjg6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6NTI5OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPkVtYWlsPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6NTMwOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld1JpZGVyLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1JpZGVyKHsgLi4ubmV3UmlkZXIsIGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBhZGRyZXNzXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczo1MzY6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6NTM3OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlZlaGljbGUgVHlwZTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczo1Mzg6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3UmlkZXIudmVoaWNsZV90eXBlfVxuICAgICAgICAgICAgICAgICAgICBvblZhbHVlQ2hhbmdlPXsodmFsdWUpID0+IHNldE5ld1JpZGVyKHsgLi4ubmV3UmlkZXIsIHZlaGljbGVfdHlwZTogdmFsdWUgfSl9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0VHJpZ2dlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczo1NDI6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RWYWx1ZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczo1NDM6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0VHJpZ2dlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjU0NToyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6NTQ2OjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHZhbHVlPVwiYmlrZVwiPkJpa2U8L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjU0NzoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB2YWx1ZT1cInNjb290ZXJcIj5TY29vdGVyPC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczo1NDg6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdmFsdWU9XCJiaWN5Y2xlXCI+QmljeWNsZTwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6NTQ5OjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHZhbHVlPVwiY2FyXCI+Q2FyPC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3RDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczo1NTM6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6NTU0OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlZlaGljbGUgTnVtYmVyPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6NTU1OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld1JpZGVyLnZlaGljbGVfbnVtYmVyfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1JpZGVyKHsgLi4ubmV3UmlkZXIsIHZlaGljbGVfbnVtYmVyOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJWZWhpY2xlIG51bWJlclwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6NTYyOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjU2MzoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG9uQ2xpY2s9e2hhbmRsZUFkZFJpZGVyfSBjbGFzc05hbWU9XCJiZy1ncmVlbi02MDBcIj5TYXZlIFJpZGVyPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6NTY0OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdmFyaWFudD1cIm91dGxpbmVcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc0FkZGluZ1JpZGVyKGZhbHNlKX0+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHtyaWRlcnMubGVuZ3RoID09PSAwID9cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczo1NzA6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktMTIgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6NTcxOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPk5vIHJpZGVycyBhZGRlZCB5ZXQ8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczo1NzI6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBtdC0yXCI+QWRkIHJpZGVycyB0byBtYW5hZ2UgZGVsaXZlcmllczwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gOlxuXG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6NTc1OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS0zXCIgZGF0YS1jb2xsZWN0aW9uLWlkPVwiRGVsaXZlcnlSaWRlclwiPlxuICAgICAgICAgICAgICAgICAge3JpZGVycy5tYXAoKHJpZGVyKSA9PlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6NTc3OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtyaWRlci5pZH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtNCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbGdcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmlkZXI/LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjU3ODoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6NTc5OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIm5hbWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmlkZXI/LmlkfT57cmlkZXIubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczo1ODA6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInBob25lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3JpZGVyPy5pZH0+e3JpZGVyLnBob25lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6NTgxOjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgbXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6NTgyOjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdmFyaWFudD1cIm91dGxpbmVcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJ2ZWhpY2xlX3R5cGVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmlkZXI/LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmlkZXIudmVoaWNsZV90eXBlfSB7cmlkZXIudmVoaWNsZV9udW1iZXIgJiYgYOKAoiAke3JpZGVyLnZlaGljbGVfbnVtYmVyfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjU4NToyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyaWRlci50b3RhbF9kZWxpdmVyaWVzIHx8IDB9IGRlbGl2ZXJpZXMg4oCiIOKtkCB7cmlkZXIucmF0aW5nIHx8IDV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9SZXN0YXVyYW50U2V0dGluZ3M6NTkwOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczo1OTE6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9e3JpZGVyLmlzX2F2YWlsYWJsZSA/IFwiYmctZ3JlZW4tMTAwIHRleHQtZ3JlZW4tNzAwXCIgOiBcImJnLWdyYXktMTAwIHRleHQtZ3JheS03MDBcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtyaWRlci5pc19hdmFpbGFibGUgPyBcIkF2YWlsYWJsZVwiIDogXCJCdXN5XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczo1OTQ6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtyaWRlci5pc19hY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZENoYW5nZT17KCkgPT4gdG9nZ2xlUmlkZXJTdGF0dXMocmlkZXIuaWQsIHJpZGVyLmlzX2FjdGl2ZSl9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvVGFic0NvbnRlbnQ+XG4gICAgICA8L1RhYnM+XG4gICAgPC9kaXY+KTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXN0YXVyYW50U2V0dGluZ3MoKSB7XG4gIHJldHVybiAoXG4gICAgPERhc2hib2FyZExheW91dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1Jlc3RhdXJhbnRTZXR0aW5nczo2MTM6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgIDxSZXN0YXVyYW50U2V0dGluZ3NDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUmVzdGF1cmFudFNldHRpbmdzOjYxNDo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+XG4gICAgPC9EYXNoYm9hcmRMYXlvdXQ+KTtcblxufSJdLCJmaWxlIjoiL2FwcC9zcmMvcGFnZXMvUmVzdGF1cmFudFNldHRpbmdzLmpzeCJ9