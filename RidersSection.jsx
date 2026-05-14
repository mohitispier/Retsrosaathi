import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/dashboard/RidersSection.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/dashboard/RidersSection.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { base44 } from "/src/api/base44Client.js";
import { Card, CardContent, CardHeader, CardTitle } from "/src/components/ui/card.jsx";
import { Button } from "/src/components/ui/button.jsx";
import { Input } from "/src/components/ui/input.jsx";
import { Label } from "/src/components/ui/label.jsx";
import { Badge } from "/src/components/ui/badge.jsx";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "/src/components/ui/dialog.jsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "/src/components/ui/select.jsx";
import { Plus, Phone, Mail, Bike, MapPin, Copy, CheckCircle2, Edit2, Trash2 } from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=79425e35";
export default function RidersSection({ restaurant }) {
  _s();
  const [riders, setRiders] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [editingRider, setEditingRider] = useState(null);
  const [copiedLink, setCopiedLink] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle_type: "bike",
    vehicle_number: ""
  });
  useEffect(() => {
    loadRiders();
  }, [restaurant]);
  const loadRiders = async () => {
    const ridersData = await base44.entities.DeliveryRider.filter({
      restaurant_id: restaurant.restaurant_id
    }, "-created_date");
    setRiders(ridersData);
  };
  const handleSubmit = async () => {
    if (!formData.name || !formData.phone) {
      alert("Name and Phone are required");
      return;
    }
    if (editingRider) {
      await base44.entities.DeliveryRider.update(editingRider.id, formData);
    } else {
      await base44.entities.DeliveryRider.create({
        ...formData,
        restaurant_id: restaurant.restaurant_id
      });
    }
    setShowAddDialog(false);
    setEditingRider(null);
    setFormData({
      name: "",
      phone: "",
      email: "",
      vehicle_type: "bike",
      vehicle_number: ""
    });
    loadRiders();
  };
  const handleEdit = (rider) => {
    setEditingRider(rider);
    setFormData({
      name: rider.name,
      phone: rider.phone,
      email: rider.email || "",
      vehicle_type: rider.vehicle_type,
      vehicle_number: rider.vehicle_number || ""
    });
    setShowAddDialog(true);
  };
  const handleDelete = async (riderId) => {
    if (!confirm("Are you sure you want to delete this rider?")) return;
    await base44.entities.DeliveryRider.delete(riderId);
    loadRiders();
  };
  const toggleStatus = async (rider) => {
    await base44.entities.DeliveryRider.update(rider.id, {
      is_active: !rider.is_active
    });
    loadRiders();
  };
  const copyRiderLink = (phone) => {
    const link = `${window.location.origin}/RiderApp`;
    navigator.clipboard.writeText(link);
    setCopiedLink(phone);
    setTimeout(() => setCopiedLink(null), 2e3);
  };
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RidersSection:97:4", "data-dynamic-content": "true", className: "space-y-6", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RidersSection:99:6", "data-dynamic-content": "true", className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RidersSection:100:8", "data-dynamic-content": "false", children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "components/dashboard/RidersSection:101:10", "data-dynamic-content": "false", className: "text-2xl font-bold text-gray-900", children: "Delivery Riders" }, void 0, false, {
          fileName: "/app/src/components/dashboard/RidersSection.jsx",
          lineNumber: 120,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/RidersSection:102:10", "data-dynamic-content": "false", className: "text-gray-500 mt-1", children: "Manage your delivery team" }, void 0, false, {
          fileName: "/app/src/components/dashboard/RidersSection.jsx",
          lineNumber: 121,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/RidersSection.jsx",
        lineNumber: 119,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        Button,
        {
          "data-source-location": "components/dashboard/RidersSection:104:8",
          "data-dynamic-content": "true",
          onClick: () => {
            setEditingRider(null);
            setFormData({
              name: "",
              phone: "",
              email: "",
              vehicle_type: "bike",
              vehicle_number: ""
            });
            setShowAddDialog(true);
          },
          className: "bg-orange-600 hover:bg-orange-700",
          children: [
            /* @__PURE__ */ jsxDEV(Plus, { "data-source-location": "components/dashboard/RidersSection:118:10", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
              fileName: "/app/src/components/dashboard/RidersSection.jsx",
              lineNumber: 137,
              columnNumber: 11
            }, this),
            "Add Rider"
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/src/components/dashboard/RidersSection.jsx",
          lineNumber: 123,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/RidersSection.jsx",
      lineNumber: 118,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RidersSection:124:6", "data-dynamic-content": "true", className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", "data-collection-id": "DeliveryRider", children: riders.map(
      (rider) => /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-source-location": "components/dashboard/RidersSection:126:10",
          "data-dynamic-content": "true",
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          "data-collection-item-id": rider?.id,
          children: /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/RidersSection:131:12", "data-dynamic-content": "true", className: "hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "components/dashboard/RidersSection:132:14", "data-dynamic-content": "true", className: "pb-3", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RidersSection:133:16", "data-dynamic-content": "true", className: "flex items-start justify-between", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RidersSection:134:18", "data-dynamic-content": "true", className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RidersSection:135:20", "data-dynamic-content": "true", className: "w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-lg font-bold", "data-collection-item-field": "name", "data-collection-item-id": rider?.id, children: rider.name[0] }, void 0, false, {
                fileName: "/app/src/components/dashboard/RidersSection.jsx",
                lineNumber: 154,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RidersSection:138:20", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "components/dashboard/RidersSection:139:22", "data-dynamic-content": "true", className: "text-lg", "data-collection-item-field": "name", "data-collection-item-id": rider?.id, children: rider.name }, void 0, false, {
                  fileName: "/app/src/components/dashboard/RidersSection.jsx",
                  lineNumber: 158,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV(
                  Badge,
                  {
                    "data-source-location": "components/dashboard/RidersSection:140:22",
                    "data-dynamic-content": "true",
                    className: rider.is_active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700",
                    children: rider.is_active ? "Active" : "Inactive"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/components/dashboard/RidersSection.jsx",
                    lineNumber: 159,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/RidersSection.jsx",
                lineNumber: 157,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/RidersSection.jsx",
              lineNumber: 153,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/RidersSection.jsx",
              lineNumber: 152,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/RidersSection.jsx",
              lineNumber: 151,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/RidersSection:153:14", "data-dynamic-content": "true", className: "space-y-3", "data-collection-item-field": "email", "data-collection-item-id": rider?.id, children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RidersSection:154:16", "data-dynamic-content": "true", className: "flex items-center gap-2 text-sm text-gray-600", "data-collection-item-field": "phone", "data-collection-item-id": rider?.id, children: [
                /* @__PURE__ */ jsxDEV(Phone, { "data-source-location": "components/dashboard/RidersSection:155:18", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/RidersSection.jsx",
                  lineNumber: 174,
                  columnNumber: 19
                }, this),
                rider.phone
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/RidersSection.jsx",
                lineNumber: 173,
                columnNumber: 17
              }, this),
              rider.email && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RidersSection:159:18", "data-dynamic-content": "true", className: "flex items-center gap-2 text-sm text-gray-600", "data-collection-item-field": "email", "data-collection-item-id": rider?.id, children: [
                /* @__PURE__ */ jsxDEV(Mail, { "data-source-location": "components/dashboard/RidersSection:160:20", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/RidersSection.jsx",
                  lineNumber: 179,
                  columnNumber: 21
                }, this),
                rider.email
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/RidersSection.jsx",
                lineNumber: 178,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RidersSection:164:16", "data-dynamic-content": "true", className: "flex items-center gap-2 text-sm text-gray-600", "data-collection-item-field": "vehicle_type", "data-collection-item-id": rider?.id, children: [
                /* @__PURE__ */ jsxDEV(Bike, { "data-source-location": "components/dashboard/RidersSection:165:18", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/RidersSection.jsx",
                  lineNumber: 184,
                  columnNumber: 19
                }, this),
                rider.vehicle_type,
                " ",
                rider.vehicle_number && `- ${rider.vehicle_number}`
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/RidersSection.jsx",
                lineNumber: 183,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RidersSection:168:16", "data-dynamic-content": "true", className: "grid grid-cols-3 gap-2 text-sm border-t pt-3", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RidersSection:169:18", "data-dynamic-content": "true", className: "text-center", children: [
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/RidersSection:170:20", "data-dynamic-content": "false", className: "text-gray-500 text-xs", children: "Deliveries" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/RidersSection.jsx",
                    lineNumber: 189,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/RidersSection:171:20", "data-dynamic-content": "true", className: "font-bold", children: rider.total_deliveries || 0 }, void 0, false, {
                    fileName: "/app/src/components/dashboard/RidersSection.jsx",
                    lineNumber: 190,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/RidersSection.jsx",
                  lineNumber: 188,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RidersSection:173:18", "data-dynamic-content": "true", className: "text-center", children: [
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/RidersSection:174:20", "data-dynamic-content": "false", className: "text-gray-500 text-xs", children: "Rating" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/RidersSection.jsx",
                    lineNumber: 193,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/RidersSection:175:20", "data-dynamic-content": "true", className: "font-bold", children: [
                    "⭐ ",
                    rider.rating || 5
                  ] }, void 0, true, {
                    fileName: "/app/src/components/dashboard/RidersSection.jsx",
                    lineNumber: 194,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/RidersSection.jsx",
                  lineNumber: 192,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RidersSection:177:18", "data-dynamic-content": "true", className: "text-center", children: [
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/RidersSection:178:20", "data-dynamic-content": "false", className: "text-gray-500 text-xs", children: "Status" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/RidersSection.jsx",
                    lineNumber: 197,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/RidersSection:179:20", "data-dynamic-content": "true", className: "font-bold text-xs", children: rider.is_available ? /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/RidersSection:181:24", "data-dynamic-content": "false", className: "text-green-600", children: "Available" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/RidersSection.jsx",
                    lineNumber: 200,
                    columnNumber: 21
                  }, this) : /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/RidersSection:183:24", "data-dynamic-content": "false", className: "text-orange-600", children: "Busy" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/RidersSection.jsx",
                    lineNumber: 202,
                    columnNumber: 21
                  }, this) }, void 0, false, {
                    fileName: "/app/src/components/dashboard/RidersSection.jsx",
                    lineNumber: 198,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/RidersSection.jsx",
                  lineNumber: 196,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/RidersSection.jsx",
                lineNumber: 187,
                columnNumber: 17
              }, this),
              (rider.cash_collected || 0) > 0 && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RidersSection:190:18", "data-dynamic-content": "true", className: "border-t pt-3", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RidersSection:191:20", "data-dynamic-content": "true", className: "bg-orange-50 border border-orange-200 rounded-lg p-3", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RidersSection:192:22", "data-dynamic-content": "true", className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RidersSection:193:24", "data-dynamic-content": "true", children: [
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/RidersSection:194:26", "data-dynamic-content": "false", className: "text-xs text-gray-500", children: "Cash to Collect" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/RidersSection.jsx",
                    lineNumber: 213,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/RidersSection:195:26", "data-dynamic-content": "true", className: "text-lg font-bold text-orange-700", "data-collection-item-field": "cash_collected", "data-collection-item-id": rider?.id, children: [
                    "₹",
                    rider.cash_collected
                  ] }, void 0, true, {
                    fileName: "/app/src/components/dashboard/RidersSection.jsx",
                    lineNumber: 214,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/RidersSection.jsx",
                  lineNumber: 212,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV(
                  Button,
                  {
                    "data-source-location": "components/dashboard/RidersSection:197:24",
                    "data-dynamic-content": "true",
                    size: "sm",
                    onClick: async () => {
                      if (confirm(`Clear ₹${rider.cash_collected} cash from ${rider.name}?`)) {
                        await base44.entities.DeliveryRider.update(rider.id, {
                          cash_collected: 0
                        });
                        loadRiders();
                      }
                    },
                    className: "bg-green-600 hover:bg-green-700",
                    children: "Clear"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/components/dashboard/RidersSection.jsx",
                    lineNumber: 216,
                    columnNumber: 25
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/RidersSection.jsx",
                lineNumber: 211,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "/app/src/components/dashboard/RidersSection.jsx",
                lineNumber: 210,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/app/src/components/dashboard/RidersSection.jsx",
                lineNumber: 209,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RidersSection:216:16", "data-dynamic-content": "true", className: "border-t pt-3 space-y-2", children: [
                /* @__PURE__ */ jsxDEV(
                  Button,
                  {
                    "data-source-location": "components/dashboard/RidersSection:217:18",
                    "data-dynamic-content": "true",
                    variant: "outline",
                    size: "sm",
                    className: "w-full",
                    onClick: () => copyRiderLink(rider.phone),
                    children: copiedLink === rider.phone ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
                      /* @__PURE__ */ jsxDEV(CheckCircle2, { "data-source-location": "components/dashboard/RidersSection:225:24", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
                        fileName: "/app/src/components/dashboard/RidersSection.jsx",
                        lineNumber: 244,
                        columnNumber: 25
                      }, this),
                      "Link Copied!"
                    ] }, void 0, true, {
                      fileName: "/app/src/components/dashboard/RidersSection.jsx",
                      lineNumber: 243,
                      columnNumber: 19
                    }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
                      /* @__PURE__ */ jsxDEV(Copy, { "data-source-location": "components/dashboard/RidersSection:230:24", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
                        fileName: "/app/src/components/dashboard/RidersSection.jsx",
                        lineNumber: 249,
                        columnNumber: 25
                      }, this),
                      "Copy Rider App Link"
                    ] }, void 0, true, {
                      fileName: "/app/src/components/dashboard/RidersSection.jsx",
                      lineNumber: 248,
                      columnNumber: 19
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/components/dashboard/RidersSection.jsx",
                    lineNumber: 236,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RidersSection:235:18", "data-dynamic-content": "true", className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxDEV(
                    Button,
                    {
                      "data-source-location": "components/dashboard/RidersSection:236:20",
                      "data-dynamic-content": "true",
                      variant: "outline",
                      size: "sm",
                      onClick: () => handleEdit(rider),
                      className: "flex-1",
                      children: [
                        /* @__PURE__ */ jsxDEV(Edit2, { "data-source-location": "components/dashboard/RidersSection:242:22", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
                          fileName: "/app/src/components/dashboard/RidersSection.jsx",
                          lineNumber: 261,
                          columnNumber: 23
                        }, this),
                        "Edit"
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "/app/src/components/dashboard/RidersSection.jsx",
                      lineNumber: 255,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV(
                    Button,
                    {
                      "data-source-location": "components/dashboard/RidersSection:245:20",
                      "data-dynamic-content": "true",
                      variant: "outline",
                      size: "sm",
                      onClick: () => toggleStatus(rider),
                      className: "flex-1",
                      children: rider.is_active ? "Deactivate" : "Activate"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/src/components/dashboard/RidersSection.jsx",
                      lineNumber: 264,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV(
                    Button,
                    {
                      "data-source-location": "components/dashboard/RidersSection:253:20",
                      "data-dynamic-content": "true",
                      variant: "outline",
                      size: "sm",
                      onClick: () => handleDelete(rider.id),
                      className: "text-red-600 hover:text-red-700",
                      children: /* @__PURE__ */ jsxDEV(Trash2, { "data-source-location": "components/dashboard/RidersSection:259:22", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                        fileName: "/app/src/components/dashboard/RidersSection.jsx",
                        lineNumber: 278,
                        columnNumber: 23
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/src/components/dashboard/RidersSection.jsx",
                      lineNumber: 272,
                      columnNumber: 21
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/RidersSection.jsx",
                  lineNumber: 254,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/RidersSection.jsx",
                lineNumber: 235,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/RidersSection.jsx",
              lineNumber: 172,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/RidersSection.jsx",
            lineNumber: 150,
            columnNumber: 13
          }, this)
        },
        rider.id,
        false,
        {
          fileName: "/app/src/components/dashboard/RidersSection.jsx",
          lineNumber: 145,
          columnNumber: 9
        },
        this
      )
    ) }, void 0, false, {
      fileName: "/app/src/components/dashboard/RidersSection.jsx",
      lineNumber: 143,
      columnNumber: 7
    }, this),
    riders.length === 0 && /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/RidersSection:270:8", "data-dynamic-content": "true", className: "text-center py-12", children: [
      /* @__PURE__ */ jsxDEV(Bike, { "data-source-location": "components/dashboard/RidersSection:271:10", "data-dynamic-content": "false", className: "w-16 h-16 text-gray-300 mx-auto mb-4" }, void 0, false, {
        fileName: "/app/src/components/dashboard/RidersSection.jsx",
        lineNumber: 290,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/RidersSection:272:10", "data-dynamic-content": "false", className: "text-xl font-medium text-gray-900 mb-2", children: "No Riders Yet" }, void 0, false, {
        fileName: "/app/src/components/dashboard/RidersSection.jsx",
        lineNumber: 291,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/RidersSection:273:10", "data-dynamic-content": "false", className: "text-gray-500 mb-4", children: "Add your first delivery rider to get started" }, void 0, false, {
        fileName: "/app/src/components/dashboard/RidersSection.jsx",
        lineNumber: 292,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(
        Button,
        {
          "data-source-location": "components/dashboard/RidersSection:274:10",
          "data-dynamic-content": "true",
          onClick: () => setShowAddDialog(true),
          className: "bg-orange-600 hover:bg-orange-700",
          children: [
            /* @__PURE__ */ jsxDEV(Plus, { "data-source-location": "components/dashboard/RidersSection:278:12", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
              fileName: "/app/src/components/dashboard/RidersSection.jsx",
              lineNumber: 297,
              columnNumber: 13
            }, this),
            "Add First Rider"
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/src/components/dashboard/RidersSection.jsx",
          lineNumber: 293,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/RidersSection.jsx",
      lineNumber: 289,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Dialog, { "data-source-location": "components/dashboard/RidersSection:285:6", "data-dynamic-content": "true", open: showAddDialog, onOpenChange: setShowAddDialog, children: /* @__PURE__ */ jsxDEV(DialogContent, { "data-source-location": "components/dashboard/RidersSection:286:8", "data-dynamic-content": "true", className: "max-w-md", children: [
      /* @__PURE__ */ jsxDEV(DialogHeader, { "data-source-location": "components/dashboard/RidersSection:287:10", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(DialogTitle, { "data-source-location": "components/dashboard/RidersSection:288:12", "data-dynamic-content": "true", children: editingRider ? "Edit Rider" : "Add New Rider" }, void 0, false, {
        fileName: "/app/src/components/dashboard/RidersSection.jsx",
        lineNumber: 307,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/src/components/dashboard/RidersSection.jsx",
        lineNumber: 306,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RidersSection:290:10", "data-dynamic-content": "true", className: "space-y-4", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RidersSection:291:12", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "components/dashboard/RidersSection:292:14", "data-dynamic-content": "false", children: "Name *" }, void 0, false, {
            fileName: "/app/src/components/dashboard/RidersSection.jsx",
            lineNumber: 311,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(
            Input,
            {
              "data-source-location": "components/dashboard/RidersSection:293:14",
              "data-dynamic-content": "true",
              placeholder: "Rider name",
              value: formData.name,
              onChange: (e) => setFormData({ ...formData, name: e.target.value })
            },
            void 0,
            false,
            {
              fileName: "/app/src/components/dashboard/RidersSection.jsx",
              lineNumber: 312,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/RidersSection.jsx",
          lineNumber: 310,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RidersSection:299:12", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "components/dashboard/RidersSection:300:14", "data-dynamic-content": "false", children: "Phone Number *" }, void 0, false, {
            fileName: "/app/src/components/dashboard/RidersSection.jsx",
            lineNumber: 319,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(
            Input,
            {
              "data-source-location": "components/dashboard/RidersSection:301:14",
              "data-dynamic-content": "true",
              placeholder: "Phone number",
              value: formData.phone,
              onChange: (e) => setFormData({ ...formData, phone: e.target.value })
            },
            void 0,
            false,
            {
              fileName: "/app/src/components/dashboard/RidersSection.jsx",
              lineNumber: 320,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/RidersSection.jsx",
          lineNumber: 318,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RidersSection:307:12", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "components/dashboard/RidersSection:308:14", "data-dynamic-content": "false", children: "Email" }, void 0, false, {
            fileName: "/app/src/components/dashboard/RidersSection.jsx",
            lineNumber: 327,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(
            Input,
            {
              "data-source-location": "components/dashboard/RidersSection:309:14",
              "data-dynamic-content": "true",
              placeholder: "Email (optional)",
              type: "email",
              value: formData.email,
              onChange: (e) => setFormData({ ...formData, email: e.target.value })
            },
            void 0,
            false,
            {
              fileName: "/app/src/components/dashboard/RidersSection.jsx",
              lineNumber: 328,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/RidersSection.jsx",
          lineNumber: 326,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RidersSection:316:12", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "components/dashboard/RidersSection:317:14", "data-dynamic-content": "false", children: "Vehicle Type" }, void 0, false, {
            fileName: "/app/src/components/dashboard/RidersSection.jsx",
            lineNumber: 336,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(
            Select,
            {
              "data-source-location": "components/dashboard/RidersSection:318:14",
              "data-dynamic-content": "true",
              value: formData.vehicle_type,
              onValueChange: (value) => setFormData({ ...formData, vehicle_type: value }),
              children: [
                /* @__PURE__ */ jsxDEV(SelectTrigger, { "data-source-location": "components/dashboard/RidersSection:324:16", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(SelectValue, { "data-source-location": "components/dashboard/RidersSection:325:18", "data-dynamic-content": "false" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/RidersSection.jsx",
                  lineNumber: 344,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "/app/src/components/dashboard/RidersSection.jsx",
                  lineNumber: 343,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV(SelectContent, { "data-source-location": "components/dashboard/RidersSection:327:16", "data-dynamic-content": "false", children: [
                  /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "components/dashboard/RidersSection:328:18", "data-dynamic-content": "false", value: "bike", children: "Bike" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/RidersSection.jsx",
                    lineNumber: 347,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "components/dashboard/RidersSection:329:18", "data-dynamic-content": "false", value: "scooter", children: "Scooter" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/RidersSection.jsx",
                    lineNumber: 348,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "components/dashboard/RidersSection:330:18", "data-dynamic-content": "false", value: "bicycle", children: "Bicycle" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/RidersSection.jsx",
                    lineNumber: 349,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "components/dashboard/RidersSection:331:18", "data-dynamic-content": "false", value: "car", children: "Car" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/RidersSection.jsx",
                    lineNumber: 350,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/RidersSection.jsx",
                  lineNumber: 346,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/src/components/dashboard/RidersSection.jsx",
              lineNumber: 337,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/RidersSection.jsx",
          lineNumber: 335,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/RidersSection:335:12", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "components/dashboard/RidersSection:336:14", "data-dynamic-content": "false", children: "Vehicle Number" }, void 0, false, {
            fileName: "/app/src/components/dashboard/RidersSection.jsx",
            lineNumber: 355,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(
            Input,
            {
              "data-source-location": "components/dashboard/RidersSection:337:14",
              "data-dynamic-content": "true",
              placeholder: "Vehicle registration number (optional)",
              value: formData.vehicle_number,
              onChange: (e) => setFormData({ ...formData, vehicle_number: e.target.value })
            },
            void 0,
            false,
            {
              fileName: "/app/src/components/dashboard/RidersSection.jsx",
              lineNumber: 356,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/RidersSection.jsx",
          lineNumber: 354,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/RidersSection.jsx",
        lineNumber: 309,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(DialogFooter, { "data-source-location": "components/dashboard/RidersSection:346:10", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "components/dashboard/RidersSection:347:12", "data-dynamic-content": "true", variant: "outline", onClick: () => setShowAddDialog(false), children: "Cancel" }, void 0, false, {
          fileName: "/app/src/components/dashboard/RidersSection.jsx",
          lineNumber: 366,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          Button,
          {
            "data-source-location": "components/dashboard/RidersSection:350:12",
            "data-dynamic-content": "true",
            onClick: handleSubmit,
            className: "bg-orange-600 hover:bg-orange-700",
            children: [
              editingRider ? "Update" : "Add",
              " Rider"
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/src/components/dashboard/RidersSection.jsx",
            lineNumber: 369,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/src/components/dashboard/RidersSection.jsx",
        lineNumber: 365,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/components/dashboard/RidersSection.jsx",
      lineNumber: 305,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/components/dashboard/RidersSection.jsx",
      lineNumber: 304,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/dashboard/RidersSection.jsx",
    lineNumber: 116,
    columnNumber: 5
  }, this);
}
_s(RidersSection, "gcYF3spcWYQXT4C2jkihhzG74Ow=");
_c = RidersSection;
var _c;
$RefreshReg$(_c, "RidersSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/dashboard/RidersSection.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/dashboard/RidersSection.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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SjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUE7QUFBQSxRQUNBO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFBTyx3QkFBcUI7QUFBQSxZQUE0Qyx3QkFBcUI7QUFBQSxZQUM5RixTQUFTa0I7QUFBQUEsWUFDVCxXQUFVO0FBQUEsWUFFUGpCO0FBQUFBLDZCQUFlLFdBQVc7QUFBQSxjQUFNO0FBQUE7QUFBQTtBQUFBLFVBSm5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUtBO0FBQUEsV0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVUE7QUFBQSxTQXRFRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBdUVBLEtBeEVGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0F5RUE7QUFBQSxPQXJRRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBc1FBO0FBRUo7QUFBQ0wsR0E1VnVCRixlQUFhO0FBQUF5RCxLQUFiekQ7QUFBYSxJQUFBeUQ7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJiYXNlNDQiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiQnV0dG9uIiwiSW5wdXQiLCJMYWJlbCIsIkJhZGdlIiwiRGlhbG9nIiwiRGlhbG9nQ29udGVudCIsIkRpYWxvZ0hlYWRlciIsIkRpYWxvZ1RpdGxlIiwiRGlhbG9nRm9vdGVyIiwiU2VsZWN0IiwiU2VsZWN0Q29udGVudCIsIlNlbGVjdEl0ZW0iLCJTZWxlY3RUcmlnZ2VyIiwiU2VsZWN0VmFsdWUiLCJQbHVzIiwiUGhvbmUiLCJNYWlsIiwiQmlrZSIsIk1hcFBpbiIsIkNvcHkiLCJDaGVja0NpcmNsZTIiLCJFZGl0MiIsIlRyYXNoMiIsIm1vdGlvbiIsIlJpZGVyc1NlY3Rpb24iLCJyZXN0YXVyYW50IiwiX3MiLCJyaWRlcnMiLCJzZXRSaWRlcnMiLCJzaG93QWRkRGlhbG9nIiwic2V0U2hvd0FkZERpYWxvZyIsImVkaXRpbmdSaWRlciIsInNldEVkaXRpbmdSaWRlciIsImNvcGllZExpbmsiLCJzZXRDb3BpZWRMaW5rIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIm5hbWUiLCJwaG9uZSIsImVtYWlsIiwidmVoaWNsZV90eXBlIiwidmVoaWNsZV9udW1iZXIiLCJsb2FkUmlkZXJzIiwicmlkZXJzRGF0YSIsImVudGl0aWVzIiwiRGVsaXZlcnlSaWRlciIsImZpbHRlciIsInJlc3RhdXJhbnRfaWQiLCJoYW5kbGVTdWJtaXQiLCJhbGVydCIsInVwZGF0ZSIsImlkIiwiY3JlYXRlIiwiaGFuZGxlRWRpdCIsInJpZGVyIiwiaGFuZGxlRGVsZXRlIiwicmlkZXJJZCIsImNvbmZpcm0iLCJkZWxldGUiLCJ0b2dnbGVTdGF0dXMiLCJpc19hY3RpdmUiLCJjb3B5UmlkZXJMaW5rIiwibGluayIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic2V0VGltZW91dCIsIm1hcCIsIm9wYWNpdHkiLCJ5IiwidG90YWxfZGVsaXZlcmllcyIsInJhdGluZyIsImlzX2F2YWlsYWJsZSIsImNhc2hfY29sbGVjdGVkIiwibGVuZ3RoIiwiZSIsInRhcmdldCIsInZhbHVlIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiUmlkZXJzU2VjdGlvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGJhc2U0NCB9IGZyb20gXCJAL2FwaS9iYXNlNDRDbGllbnRcIjtcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9sYWJlbFwiO1xuaW1wb3J0IHsgQmFkZ2UgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2JhZGdlXCI7XG5pbXBvcnQgeyBEaWFsb2csIERpYWxvZ0NvbnRlbnQsIERpYWxvZ0hlYWRlciwgRGlhbG9nVGl0bGUsIERpYWxvZ0Zvb3RlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvZGlhbG9nXCI7XG5pbXBvcnQgeyBTZWxlY3QsIFNlbGVjdENvbnRlbnQsIFNlbGVjdEl0ZW0sIFNlbGVjdFRyaWdnZXIsIFNlbGVjdFZhbHVlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9zZWxlY3RcIjtcbmltcG9ydCB7IFBsdXMsIFBob25lLCBNYWlsLCBCaWtlLCBNYXBQaW4sIENvcHksIENoZWNrQ2lyY2xlMiwgRWRpdDIsIFRyYXNoMiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJpZGVyc1NlY3Rpb24oeyByZXN0YXVyYW50IH0pIHtcbiAgY29uc3QgW3JpZGVycywgc2V0UmlkZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3Nob3dBZGREaWFsb2csIHNldFNob3dBZGREaWFsb2ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZWRpdGluZ1JpZGVyLCBzZXRFZGl0aW5nUmlkZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjb3BpZWRMaW5rLCBzZXRDb3BpZWRMaW5rXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIHBob25lOiBcIlwiLFxuICAgIGVtYWlsOiBcIlwiLFxuICAgIHZlaGljbGVfdHlwZTogXCJiaWtlXCIsXG4gICAgdmVoaWNsZV9udW1iZXI6IFwiXCJcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkUmlkZXJzKCk7XG4gIH0sIFtyZXN0YXVyYW50XSk7XG5cbiAgY29uc3QgbG9hZFJpZGVycyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByaWRlcnNEYXRhID0gYXdhaXQgYmFzZTQ0LmVudGl0aWVzLkRlbGl2ZXJ5UmlkZXIuZmlsdGVyKHtcbiAgICAgIHJlc3RhdXJhbnRfaWQ6IHJlc3RhdXJhbnQucmVzdGF1cmFudF9pZFxuICAgIH0sIFwiLWNyZWF0ZWRfZGF0ZVwiKTtcbiAgICBzZXRSaWRlcnMocmlkZXJzRGF0YSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghZm9ybURhdGEubmFtZSB8fCAhZm9ybURhdGEucGhvbmUpIHtcbiAgICAgIGFsZXJ0KFwiTmFtZSBhbmQgUGhvbmUgYXJlIHJlcXVpcmVkXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlZGl0aW5nUmlkZXIpIHtcbiAgICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5EZWxpdmVyeVJpZGVyLnVwZGF0ZShlZGl0aW5nUmlkZXIuaWQsIGZvcm1EYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgYmFzZTQ0LmVudGl0aWVzLkRlbGl2ZXJ5UmlkZXIuY3JlYXRlKHtcbiAgICAgICAgLi4uZm9ybURhdGEsXG4gICAgICAgIHJlc3RhdXJhbnRfaWQ6IHJlc3RhdXJhbnQucmVzdGF1cmFudF9pZFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0U2hvd0FkZERpYWxvZyhmYWxzZSk7XG4gICAgc2V0RWRpdGluZ1JpZGVyKG51bGwpO1xuICAgIHNldEZvcm1EYXRhKHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBwaG9uZTogXCJcIixcbiAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgdmVoaWNsZV90eXBlOiBcImJpa2VcIixcbiAgICAgIHZlaGljbGVfbnVtYmVyOiBcIlwiXG4gICAgfSk7XG4gICAgbG9hZFJpZGVycygpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUVkaXQgPSAocmlkZXIpID0+IHtcbiAgICBzZXRFZGl0aW5nUmlkZXIocmlkZXIpO1xuICAgIHNldEZvcm1EYXRhKHtcbiAgICAgIG5hbWU6IHJpZGVyLm5hbWUsXG4gICAgICBwaG9uZTogcmlkZXIucGhvbmUsXG4gICAgICBlbWFpbDogcmlkZXIuZW1haWwgfHwgXCJcIixcbiAgICAgIHZlaGljbGVfdHlwZTogcmlkZXIudmVoaWNsZV90eXBlLFxuICAgICAgdmVoaWNsZV9udW1iZXI6IHJpZGVyLnZlaGljbGVfbnVtYmVyIHx8IFwiXCJcbiAgICB9KTtcbiAgICBzZXRTaG93QWRkRGlhbG9nKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChyaWRlcklkKSA9PiB7XG4gICAgaWYgKCFjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHJpZGVyP1wiKSkgcmV0dXJuO1xuICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5EZWxpdmVyeVJpZGVyLmRlbGV0ZShyaWRlcklkKTtcbiAgICBsb2FkUmlkZXJzKCk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlU3RhdHVzID0gYXN5bmMgKHJpZGVyKSA9PiB7XG4gICAgYXdhaXQgYmFzZTQ0LmVudGl0aWVzLkRlbGl2ZXJ5UmlkZXIudXBkYXRlKHJpZGVyLmlkLCB7XG4gICAgICBpc19hY3RpdmU6ICFyaWRlci5pc19hY3RpdmVcbiAgICB9KTtcbiAgICBsb2FkUmlkZXJzKCk7XG4gIH07XG5cbiAgY29uc3QgY29weVJpZGVyTGluayA9IChwaG9uZSkgPT4ge1xuICAgIGNvbnN0IGxpbmsgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9SaWRlckFwcGA7XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQobGluayk7XG4gICAgc2V0Q29waWVkTGluayhwaG9uZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRDb3BpZWRMaW5rKG51bGwpLCAyMDAwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SaWRlcnNTZWN0aW9uOjk3OjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmlkZXJzU2VjdGlvbjo5OTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SaWRlcnNTZWN0aW9uOjEwMDo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgIDxoMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246MTAxOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwXCI+RGVsaXZlcnkgUmlkZXJzPC9oMj5cbiAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246MTAyOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgbXQtMVwiPk1hbmFnZSB5b3VyIGRlbGl2ZXJ5IHRlYW08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmlkZXJzU2VjdGlvbjoxMDQ6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzZXRFZGl0aW5nUmlkZXIobnVsbCk7XG4gICAgICAgICAgc2V0Rm9ybURhdGEoe1xuICAgICAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgICAgIHBob25lOiBcIlwiLFxuICAgICAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgICAgICB2ZWhpY2xlX3R5cGU6IFwiYmlrZVwiLFxuICAgICAgICAgICAgdmVoaWNsZV9udW1iZXI6IFwiXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZXRTaG93QWRkRGlhbG9nKHRydWUpO1xuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9XCJiZy1vcmFuZ2UtNjAwIGhvdmVyOmJnLW9yYW5nZS03MDBcIj5cblxuICAgICAgICAgIDxQbHVzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmlkZXJzU2VjdGlvbjoxMTg6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCBtci0yXCIgLz5cbiAgICAgICAgICBBZGQgUmlkZXJcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIFJpZGVycyBHcmlkICovfVxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246MTI0OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC00XCIgZGF0YS1jb2xsZWN0aW9uLWlkPVwiRGVsaXZlcnlSaWRlclwiPlxuICAgICAgICB7cmlkZXJzLm1hcCgocmlkZXIpID0+XG4gICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmlkZXJzU2VjdGlvbjoxMjY6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICBrZXk9e3JpZGVyLmlkfVxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fSBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmlkZXI/LmlkfT5cblxuICAgICAgICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SaWRlcnNTZWN0aW9uOjEzMToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImhvdmVyOnNoYWRvdy1sZyB0cmFuc2l0aW9uLXNoYWRvd1wiPlxuICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246MTMyOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicGItM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SaWRlcnNTZWN0aW9uOjEzMzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmlkZXJzU2VjdGlvbjoxMzQ6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmlkZXJzU2VjdGlvbjoxMzU6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1vcmFuZ2UtNTAwIHRvLW9yYW5nZS02MDAgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgdGV4dC1sZyBmb250LWJvbGRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIm5hbWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmlkZXI/LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICB7cmlkZXIubmFtZVswXX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SaWRlcnNTZWN0aW9uOjEzODoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SaWRlcnNTZWN0aW9uOjEzOToyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtbGdcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIm5hbWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmlkZXI/LmlkfT57cmlkZXIubmFtZX08L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SaWRlcnNTZWN0aW9uOjE0MDoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgIHJpZGVyLmlzX2FjdGl2ZSA/XG4gICAgICAgICAgICAgICAgICAgIFwiYmctZ3JlZW4tMTAwIHRleHQtZ3JlZW4tNzAwXCIgOlxuICAgICAgICAgICAgICAgICAgICBcImJnLWdyYXktMTAwIHRleHQtZ3JheS03MDBcIlxuICAgICAgICAgICAgICAgICAgICB9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7cmlkZXIuaXNfYWN0aXZlID8gXCJBY3RpdmVcIiA6IFwiSW5hY3RpdmVcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246MTUzOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS0zXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJlbWFpbFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyaWRlcj8uaWR9PlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SaWRlcnNTZWN0aW9uOjE1NDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc20gdGV4dC1ncmF5LTYwMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicGhvbmVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmlkZXI/LmlkfT5cbiAgICAgICAgICAgICAgICAgIDxQaG9uZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246MTU1OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAge3JpZGVyLnBob25lfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtyaWRlci5lbWFpbCAmJlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmlkZXJzU2VjdGlvbjoxNTk6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXNtIHRleHQtZ3JheS02MDBcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImVtYWlsXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3JpZGVyPy5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxNYWlsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmlkZXJzU2VjdGlvbjoxNjA6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIHtyaWRlci5lbWFpbH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246MTY0OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1zbSB0ZXh0LWdyYXktNjAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJ2ZWhpY2xlX3R5cGVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17cmlkZXI/LmlkfT5cbiAgICAgICAgICAgICAgICAgIDxCaWtlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmlkZXJzU2VjdGlvbjoxNjU6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICB7cmlkZXIudmVoaWNsZV90eXBlfSB7cmlkZXIudmVoaWNsZV9udW1iZXIgJiYgYC0gJHtyaWRlci52ZWhpY2xlX251bWJlcn1gfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SaWRlcnNTZWN0aW9uOjE2ODoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTIgdGV4dC1zbSBib3JkZXItdCBwdC0zXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmlkZXJzU2VjdGlvbjoxNjk6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246MTcwOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgdGV4dC14c1wiPkRlbGl2ZXJpZXM8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmlkZXJzU2VjdGlvbjoxNzE6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57cmlkZXIudG90YWxfZGVsaXZlcmllcyB8fCAwfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246MTczOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SaWRlcnNTZWN0aW9uOjE3NDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQteHNcIj5SYXRpbmc8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmlkZXJzU2VjdGlvbjoxNzU6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj7irZAge3JpZGVyLnJhdGluZyB8fCA1fTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246MTc3OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SaWRlcnNTZWN0aW9uOjE3ODoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQteHNcIj5TdGF0dXM8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmlkZXJzU2VjdGlvbjoxNzk6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgIHtyaWRlci5pc19hdmFpbGFibGUgP1xuICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246MTgxOjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNjAwXCI+QXZhaWxhYmxlPC9zcGFuPiA6XG5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SaWRlcnNTZWN0aW9uOjE4MzoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZS02MDBcIj5CdXN5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgeyhyaWRlci5jYXNoX2NvbGxlY3RlZCB8fCAwKSA+IDAgJiZcbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246MTkwOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYm9yZGVyLXQgcHQtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmlkZXJzU2VjdGlvbjoxOTE6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJiZy1vcmFuZ2UtNTAgYm9yZGVyIGJvcmRlci1vcmFuZ2UtMjAwIHJvdW5kZWQtbGcgcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246MTkyOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmlkZXJzU2VjdGlvbjoxOTM6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SaWRlcnNTZWN0aW9uOjE5NDoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDBcIj5DYXNoIHRvIENvbGxlY3Q8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmlkZXJzU2VjdGlvbjoxOTU6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LW9yYW5nZS03MDBcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImNhc2hfY29sbGVjdGVkXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3JpZGVyPy5pZH0+4oK5e3JpZGVyLmNhc2hfY29sbGVjdGVkfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246MTk3OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maXJtKGBDbGVhciDigrkke3JpZGVyLmNhc2hfY29sbGVjdGVkfSBjYXNoIGZyb20gJHtyaWRlci5uYW1lfT9gKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgYmFzZTQ0LmVudGl0aWVzLkRlbGl2ZXJ5UmlkZXIudXBkYXRlKHJpZGVyLmlkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2hfY29sbGVjdGVkOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRSaWRlcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyZWVuLTYwMCBob3ZlcjpiZy1ncmVlbi03MDBcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICBDbGVhclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SaWRlcnNTZWN0aW9uOjIxNjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImJvcmRlci10IHB0LTMgc3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmlkZXJzU2VjdGlvbjoyMTc6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29weVJpZGVyTGluayhyaWRlci5waG9uZSl9PlxuXG4gICAgICAgICAgICAgICAgICAgIHtjb3BpZWRMaW5rID09PSByaWRlci5waG9uZSA/XG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrQ2lyY2xlMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246MjI1OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgbXItMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBMaW5rIENvcGllZCFcbiAgICAgICAgICAgICAgICAgICAgICA8Lz4gOlxuXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvcHkgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SaWRlcnNTZWN0aW9uOjIzMDoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ29weSBSaWRlciBBcHAgTGlua1xuICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmlkZXJzU2VjdGlvbjoyMzU6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SaWRlcnNTZWN0aW9uOjIzNjoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRWRpdChyaWRlcil9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTFcIj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxFZGl0MiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246MjQyOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgbXItMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246MjQ1OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVTdGF0dXMocmlkZXIpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICB7cmlkZXIuaXNfYWN0aXZlID8gXCJEZWFjdGl2YXRlXCIgOiBcIkFjdGl2YXRlXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmlkZXJzU2VjdGlvbjoyNTM6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShyaWRlci5pZCl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgaG92ZXI6dGV4dC1yZWQtNzAwXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8VHJhc2gyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmlkZXJzU2VjdGlvbjoyNTk6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtyaWRlcnMubGVuZ3RoID09PSAwICYmXG4gICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246MjcwOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS0xMlwiPlxuICAgICAgICAgIDxCaWtlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmlkZXJzU2VjdGlvbjoyNzE6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0xNiBoLTE2IHRleHQtZ3JheS0zMDAgbXgtYXV0byBtYi00XCIgLz5cbiAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246MjcyOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBtYi0yXCI+Tm8gUmlkZXJzIFlldDwvcD5cbiAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246MjczOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgbWItNFwiPkFkZCB5b3VyIGZpcnN0IGRlbGl2ZXJ5IHJpZGVyIHRvIGdldCBzdGFydGVkPC9wPlxuICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SaWRlcnNTZWN0aW9uOjI3NDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dBZGREaWFsb2codHJ1ZSl9XG4gICAgICAgIGNsYXNzTmFtZT1cImJnLW9yYW5nZS02MDAgaG92ZXI6Ymctb3JhbmdlLTcwMFwiPlxuXG4gICAgICAgICAgICA8UGx1cyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246Mjc4OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgbXItMlwiIC8+XG4gICAgICAgICAgICBBZGQgRmlyc3QgUmlkZXJcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgfVxuXG4gICAgICB7LyogQWRkL0VkaXQgUmlkZXIgRGlhbG9nICovfVxuICAgICAgPERpYWxvZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246Mjg1OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBvcGVuPXtzaG93QWRkRGlhbG9nfSBvbk9wZW5DaGFuZ2U9e3NldFNob3dBZGREaWFsb2d9PlxuICAgICAgICA8RGlhbG9nQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246Mjg2OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtYXgtdy1tZFwiPlxuICAgICAgICAgIDxEaWFsb2dIZWFkZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SaWRlcnNTZWN0aW9uOjI4NzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgPERpYWxvZ1RpdGxlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmlkZXJzU2VjdGlvbjoyODg6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj57ZWRpdGluZ1JpZGVyID8gXCJFZGl0IFJpZGVyXCIgOiBcIkFkZCBOZXcgUmlkZXJcIn08L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgIDwvRGlhbG9nSGVhZGVyPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SaWRlcnNTZWN0aW9uOjI5MDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246MjkxOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDxMYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246MjkyOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPk5hbWUgKjwvTGFiZWw+XG4gICAgICAgICAgICAgIDxJbnB1dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246MjkzOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSaWRlciBuYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLm5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgbmFtZTogZS50YXJnZXQudmFsdWUgfSl9IC8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246Mjk5OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDxMYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246MzAwOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlBob25lIE51bWJlciAqPC9MYWJlbD5cbiAgICAgICAgICAgICAgPElucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmlkZXJzU2VjdGlvbjozMDE6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBob25lIG51bWJlclwiXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5waG9uZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBwaG9uZTogZS50YXJnZXQudmFsdWUgfSl9IC8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246MzA3OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDxMYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246MzA4OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPkVtYWlsPC9MYWJlbD5cbiAgICAgICAgICAgICAgPElucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmlkZXJzU2VjdGlvbjozMDk6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIChvcHRpb25hbClcIlxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SaWRlcnNTZWN0aW9uOjMxNjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICA8TGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SaWRlcnNTZWN0aW9uOjMxNzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5WZWhpY2xlIFR5cGU8L0xhYmVsPlxuICAgICAgICAgICAgICA8U2VsZWN0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmlkZXJzU2VjdGlvbjozMTg6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEudmVoaWNsZV90eXBlfVxuICAgICAgICAgICAgICBvblZhbHVlQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIHZlaGljbGVfdHlwZTogdmFsdWUgfSlcbiAgICAgICAgICAgICAgfT5cblxuICAgICAgICAgICAgICAgIDxTZWxlY3RUcmlnZ2VyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmlkZXJzU2VjdGlvbjozMjQ6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICA8U2VsZWN0VmFsdWUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SaWRlcnNTZWN0aW9uOjMyNToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPlxuICAgICAgICAgICAgICAgIDwvU2VsZWN0VHJpZ2dlcj5cbiAgICAgICAgICAgICAgICA8U2VsZWN0Q29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246MzI3OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SaWRlcnNTZWN0aW9uOjMyODoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB2YWx1ZT1cImJpa2VcIj5CaWtlPC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SaWRlcnNTZWN0aW9uOjMyOToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB2YWx1ZT1cInNjb290ZXJcIj5TY29vdGVyPC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SaWRlcnNTZWN0aW9uOjMzMDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB2YWx1ZT1cImJpY3ljbGVcIj5CaWN5Y2xlPC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SaWRlcnNTZWN0aW9uOjMzMToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB2YWx1ZT1cImNhclwiPkNhcjwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICA8L1NlbGVjdENvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmlkZXJzU2VjdGlvbjozMzU6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgPExhYmVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmlkZXJzU2VjdGlvbjozMzY6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+VmVoaWNsZSBOdW1iZXI8L0xhYmVsPlxuICAgICAgICAgICAgICA8SW5wdXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SaWRlcnNTZWN0aW9uOjMzNzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVmVoaWNsZSByZWdpc3RyYXRpb24gbnVtYmVyIChvcHRpb25hbClcIlxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEudmVoaWNsZV9udW1iZXJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgdmVoaWNsZV9udW1iZXI6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgIH0gLz5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPERpYWxvZ0Zvb3RlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1JpZGVyc1NlY3Rpb246MzQ2OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUmlkZXJzU2VjdGlvbjozNDc6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB2YXJpYW50PVwib3V0bGluZVwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dBZGREaWFsb2coZmFsc2UpfT5cbiAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9SaWRlcnNTZWN0aW9uOjM1MDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1vcmFuZ2UtNjAwIGhvdmVyOmJnLW9yYW5nZS03MDBcIj5cblxuICAgICAgICAgICAgICB7ZWRpdGluZ1JpZGVyID8gXCJVcGRhdGVcIiA6IFwiQWRkXCJ9IFJpZGVyXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0RpYWxvZ0Zvb3Rlcj5cbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgPC9EaWFsb2c+XG4gICAgPC9kaXY+KTtcblxufSJdLCJmaWxlIjoiL2FwcC9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvUmlkZXJzU2VjdGlvbi5qc3gifQ==