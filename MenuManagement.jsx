import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/MenuManagement.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/MenuManagement.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { motion, AnimatePresence } from "/node_modules/.vite/deps/framer-motion.js?v=79425e35";
import { base44 } from "/src/api/base44Client.js";
import DashboardLayout from "/src/components/dashboard/DashboardLayout.jsx";
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  Eye,
  EyeOff,
  Leaf,
  Flame,
  Filter,
  MoreVertical,
  Upload,
  GripVertical,
  X
} from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
import { Card, CardContent, CardHeader, CardTitle } from "/src/components/ui/card.jsx";
import { Button } from "/src/components/ui/button.jsx";
import { Input } from "/src/components/ui/input.jsx";
import { Label } from "/src/components/ui/label.jsx";
import { Textarea } from "/src/components/ui/textarea.jsx";
import { Badge } from "/src/components/ui/badge.jsx";
import { Switch } from "/src/components/ui/switch.jsx";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "/src/components/ui/dialog.jsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "/src/components/ui/select.jsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "/src/components/ui/dropdown-menu.jsx";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "/src/components/ui/alert-dialog.jsx";
import { Tabs, TabsList, TabsTrigger } from "/src/components/ui/tabs.jsx";
const defaultCategories = [
  "Starters",
  "Main Course",
  "Breads",
  "Rice & Biryani",
  "Desserts",
  "Beverages",
  "Soups",
  "Salads",
  "Combos"
];
function MenuManagementContent({ user, restaurant }) {
  _s();
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image_url: "",
    is_vegetarian: false,
    is_vegan: false,
    is_spicy: false,
    is_available: true,
    preparation_time: ""
  });
  useEffect(() => {
    if (restaurant?.restaurant_id) {
      loadMenuItems();
    }
  }, [restaurant]);
  const loadMenuItems = async () => {
    try {
      const items = await base44.entities.MenuItem.filter(
        { restaurant_id: restaurant.restaurant_id },
        "sort_order"
      );
      setMenuItems(items);
    } catch (e) {
      console.error("Error loading menu:", e);
    } finally {
      setIsLoading(false);
    }
  };
  const categories = [...new Set(menuItems.map((item) => item.category))].filter(Boolean);
  const allCategories = [.../* @__PURE__ */ new Set([...defaultCategories, ...categories])];
  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  const groupedItems = filteredItems.reduce((acc, item) => {
    const category = item.category || "Uncategorized";
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});
  const handleAddNew = () => {
    setEditingItem(null);
    setFormData({
      name: "",
      description: "",
      price: "",
      category: "",
      image_url: "",
      is_vegetarian: false,
      is_vegan: false,
      is_spicy: false,
      is_available: true,
      preparation_time: ""
    });
    setIsDialogOpen(true);
  };
  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      description: item.description || "",
      price: item.price?.toString() || "",
      category: item.category || "",
      image_url: item.image_url || "",
      is_vegetarian: item.is_vegetarian || false,
      is_vegan: item.is_vegan || false,
      is_spicy: item.is_spicy || false,
      is_available: item.is_available !== false,
      preparation_time: item.preparation_time?.toString() || ""
    });
    setIsDialogOpen(true);
  };
  const handleSave = async () => {
    if (!formData.name || !formData.price || !formData.category) return;
    setIsSaving(true);
    const itemData = {
      ...formData,
      restaurant_id: restaurant.restaurant_id,
      price: parseFloat(formData.price),
      preparation_time: formData.preparation_time ? parseInt(formData.preparation_time) : null,
      sort_order: editingItem?.sort_order || menuItems.length
    };
    if (editingItem) {
      await base44.entities.MenuItem.update(editingItem.id, itemData);
    } else {
      await base44.entities.MenuItem.create(itemData);
    }
    await loadMenuItems();
    setIsDialogOpen(false);
    setIsSaving(false);
  };
  const handleDelete = async (id) => {
    await base44.entities.MenuItem.delete(id);
    await loadMenuItems();
    setDeleteConfirm(null);
  };
  const toggleAvailability = async (item) => {
    await base44.entities.MenuItem.update(item.id, {
      is_available: !item.is_available
    });
    await loadMenuItems();
  };
  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    setFormData({ ...formData, image_url: file_url });
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/MenuManagement:194:6", "data-dynamic-content": "false", className: "flex items-center justify-center h-64", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/MenuManagement:195:8", "data-dynamic-content": "false", className: "animate-spin rounded-full h-8 w-8 border-b-2 border-violet-600" }, void 0, false, {
      fileName: "/app/src/pages/MenuManagement.jsx",
      lineNumber: 214,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/MenuManagement.jsx",
      lineNumber: 213,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/MenuManagement:201:4", "data-dynamic-content": "true", className: "space-y-6", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/MenuManagement:203:6", "data-dynamic-content": "true", className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/MenuManagement:204:8", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/MenuManagement:205:10", "data-dynamic-content": "false", className: "text-2xl font-bold text-gray-900", children: "Menu Management" }, void 0, false, {
          fileName: "/app/src/pages/MenuManagement.jsx",
          lineNumber: 224,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/MenuManagement:206:10", "data-dynamic-content": "true", className: "text-gray-500", children: [
          menuItems.length,
          " items in your menu"
        ] }, void 0, true, {
          fileName: "/app/src/pages/MenuManagement.jsx",
          lineNumber: 225,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/MenuManagement.jsx",
        lineNumber: 223,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/MenuManagement:208:8", "data-dynamic-content": "true", onClick: handleAddNew, className: "bg-gradient-to-r from-violet-600 to-indigo-600", children: [
        /* @__PURE__ */ jsxDEV(Plus, { "data-source-location": "pages/MenuManagement:209:10", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
          fileName: "/app/src/pages/MenuManagement.jsx",
          lineNumber: 228,
          columnNumber: 11
        }, this),
        "Add Menu Item"
      ] }, void 0, true, {
        fileName: "/app/src/pages/MenuManagement.jsx",
        lineNumber: 227,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/MenuManagement.jsx",
      lineNumber: 222,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/MenuManagement:215:6", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/MenuManagement:216:8", "data-dynamic-content": "true", className: "p-4", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/MenuManagement:217:10", "data-dynamic-content": "true", className: "flex flex-col md:flex-row gap-4", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/MenuManagement:218:12", "data-dynamic-content": "true", className: "flex-1 relative", children: [
        /* @__PURE__ */ jsxDEV(Search, { "data-source-location": "pages/MenuManagement:219:14", "data-dynamic-content": "false", className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }, void 0, false, {
          fileName: "/app/src/pages/MenuManagement.jsx",
          lineNumber: 238,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(
          Input,
          {
            "data-source-location": "pages/MenuManagement:220:14",
            "data-dynamic-content": "true",
            placeholder: "Search menu items...",
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            className: "pl-9"
          },
          void 0,
          false,
          {
            fileName: "/app/src/pages/MenuManagement.jsx",
            lineNumber: 239,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/src/pages/MenuManagement.jsx",
        lineNumber: 237,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Tabs, { "data-source-location": "pages/MenuManagement:227:12", "data-dynamic-content": "true", value: selectedCategory, onValueChange: setSelectedCategory, children: /* @__PURE__ */ jsxDEV(TabsList, { "data-source-location": "pages/MenuManagement:228:14", "data-dynamic-content": "true", className: "bg-gray-100 flex-wrap h-auto", children: [
        /* @__PURE__ */ jsxDEV(TabsTrigger, { "data-source-location": "pages/MenuManagement:229:16", "data-dynamic-content": "false", value: "all", children: "All" }, void 0, false, {
          fileName: "/app/src/pages/MenuManagement.jsx",
          lineNumber: 248,
          columnNumber: 17
        }, this),
        categories.slice(0, 5).map(
          (cat) => /* @__PURE__ */ jsxDEV(TabsTrigger, { "data-source-location": "pages/MenuManagement:231:18", "data-dynamic-content": "true", value: cat, "data-collection-item-field": "cat", children: cat }, cat, false, {
            fileName: "/app/src/pages/MenuManagement.jsx",
            lineNumber: 250,
            columnNumber: 17
          }, this)
        )
      ] }, void 0, true, {
        fileName: "/app/src/pages/MenuManagement.jsx",
        lineNumber: 247,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/MenuManagement.jsx",
        lineNumber: 246,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/MenuManagement.jsx",
      lineNumber: 236,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/MenuManagement.jsx",
      lineNumber: 235,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/MenuManagement.jsx",
      lineNumber: 234,
      columnNumber: 7
    }, this),
    Object.keys(groupedItems).length === 0 ? /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/MenuManagement:241:8", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/MenuManagement:242:10", "data-dynamic-content": "true", className: "py-16 text-center", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/MenuManagement:243:12", "data-dynamic-content": "false", className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxDEV(Plus, { "data-source-location": "pages/MenuManagement:244:14", "data-dynamic-content": "false", className: "w-8 h-8 text-gray-400" }, void 0, false, {
        fileName: "/app/src/pages/MenuManagement.jsx",
        lineNumber: 263,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/MenuManagement.jsx",
        lineNumber: 262,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/MenuManagement:246:12", "data-dynamic-content": "false", className: "text-lg font-medium text-gray-900 mb-2", children: "No menu items yet" }, void 0, false, {
        fileName: "/app/src/pages/MenuManagement.jsx",
        lineNumber: 265,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/MenuManagement:247:12", "data-dynamic-content": "false", className: "text-gray-500 mb-4", children: "Start by adding your first menu item" }, void 0, false, {
        fileName: "/app/src/pages/MenuManagement.jsx",
        lineNumber: 266,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/MenuManagement:248:12", "data-dynamic-content": "true", onClick: handleAddNew, children: "Add Menu Item" }, void 0, false, {
        fileName: "/app/src/pages/MenuManagement.jsx",
        lineNumber: 267,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/MenuManagement.jsx",
      lineNumber: 261,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/MenuManagement.jsx",
      lineNumber: 260,
      columnNumber: 7
    }, this) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/MenuManagement:252:8", "data-dynamic-content": "true", className: "space-y-6", children: Object.entries(groupedItems).map(
      ([category, items]) => /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/MenuManagement:254:12", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "pages/MenuManagement:255:14", "data-dynamic-content": "true", className: "pb-2", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "pages/MenuManagement:256:16", "data-dynamic-content": "true", className: "text-lg flex items-center justify-between", children: [
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/MenuManagement:257:18", "data-dynamic-content": "true", "data-collection-item-field": "category", children: category }, void 0, false, {
            fileName: "/app/src/pages/MenuManagement.jsx",
            lineNumber: 276,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/MenuManagement:258:18", "data-dynamic-content": "true", variant: "secondary", children: [
            items.length,
            " items"
          ] }, void 0, true, {
            fileName: "/app/src/pages/MenuManagement.jsx",
            lineNumber: 277,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/MenuManagement.jsx",
          lineNumber: 275,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/MenuManagement.jsx",
          lineNumber: 274,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/MenuManagement:261:14", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/MenuManagement:262:16", "data-dynamic-content": "true", className: "divide-y", children: items.map(
          (item) => /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              "data-source-location": "pages/MenuManagement:264:20",
              "data-dynamic-content": "true",
              layout: true,
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              className: "py-4 flex items-center gap-4",
              "data-collection-item-id": item?.id,
              children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/MenuManagement:272:22", "data-dynamic-content": "true", className: "w-16 h-16 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0", children: item.image_url ? /* @__PURE__ */ jsxDEV(
                  "img",
                  {
                    "data-source-location": "pages/MenuManagement:274:26",
                    "data-dynamic-content": "true",
                    src: item.image_url,
                    alt: item.name,
                    className: "w-full h-full object-cover"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/pages/MenuManagement.jsx",
                    lineNumber: 293,
                    columnNumber: 19
                  },
                  this
                ) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/MenuManagement:280:26", "data-dynamic-content": "false", className: "w-full h-full flex items-center justify-center text-gray-400", children: "🍽️" }, void 0, false, {
                  fileName: "/app/src/pages/MenuManagement.jsx",
                  lineNumber: 299,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "/app/src/pages/MenuManagement.jsx",
                  lineNumber: 291,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/MenuManagement:287:22", "data-dynamic-content": "true", className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/MenuManagement:288:24", "data-dynamic-content": "true", className: "flex items-center gap-2 flex-wrap", "data-collection-item-field": "is_vegetarian", "data-collection-item-id": item?.id, children: [
                    /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/MenuManagement:289:26", "data-dynamic-content": "true", className: `font-medium ${!item.is_available ? "text-gray-400" : "text-gray-900"}`, "data-collection-item-field": "name", "data-collection-item-id": item?.id, children: item.name }, void 0, false, {
                      fileName: "/app/src/pages/MenuManagement.jsx",
                      lineNumber: 308,
                      columnNumber: 27
                    }, this),
                    item.is_vegetarian && /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/MenuManagement:293:28", "data-dynamic-content": "false", className: "bg-green-100 text-green-700 text-xs", children: [
                      /* @__PURE__ */ jsxDEV(Leaf, { "data-source-location": "pages/MenuManagement:294:30", "data-dynamic-content": "false", className: "w-3 h-3 mr-1" }, void 0, false, {
                        fileName: "/app/src/pages/MenuManagement.jsx",
                        lineNumber: 313,
                        columnNumber: 31
                      }, this),
                      " Veg"
                    ] }, void 0, true, {
                      fileName: "/app/src/pages/MenuManagement.jsx",
                      lineNumber: 312,
                      columnNumber: 21
                    }, this),
                    item.is_spicy && /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/MenuManagement:298:28", "data-dynamic-content": "false", className: "bg-red-100 text-red-700 text-xs", children: [
                      /* @__PURE__ */ jsxDEV(Flame, { "data-source-location": "pages/MenuManagement:299:30", "data-dynamic-content": "false", className: "w-3 h-3 mr-1" }, void 0, false, {
                        fileName: "/app/src/pages/MenuManagement.jsx",
                        lineNumber: 318,
                        columnNumber: 31
                      }, this),
                      " Spicy"
                    ] }, void 0, true, {
                      fileName: "/app/src/pages/MenuManagement.jsx",
                      lineNumber: 317,
                      columnNumber: 21
                    }, this),
                    !item.is_available && /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/MenuManagement:303:28", "data-dynamic-content": "false", variant: "secondary", className: "text-xs", children: "Unavailable" }, void 0, false, {
                      fileName: "/app/src/pages/MenuManagement.jsx",
                      lineNumber: 322,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/MenuManagement.jsx",
                    lineNumber: 307,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/MenuManagement:306:24", "data-dynamic-content": "true", className: "text-sm text-gray-500 truncate", "data-collection-item-field": "description", "data-collection-item-id": item?.id, children: item.description }, void 0, false, {
                    fileName: "/app/src/pages/MenuManagement.jsx",
                    lineNumber: 325,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/MenuManagement.jsx",
                  lineNumber: 306,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/MenuManagement:310:22", "data-dynamic-content": "true", className: "text-right", "data-collection-item-field": "preparation_time", "data-collection-item-id": item?.id, children: [
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/MenuManagement:311:24", "data-dynamic-content": "true", className: "font-semibold text-gray-900", "data-collection-item-field": "price", "data-collection-item-id": item?.id, children: [
                    "₹",
                    item.price
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/MenuManagement.jsx",
                    lineNumber: 330,
                    columnNumber: 25
                  }, this),
                  item.preparation_time && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/MenuManagement:313:26", "data-dynamic-content": "true", className: "text-xs text-gray-500", "data-collection-item-field": "preparation_time", "data-collection-item-id": item?.id, children: [
                    item.preparation_time,
                    " mins"
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/MenuManagement.jsx",
                    lineNumber: 332,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/MenuManagement.jsx",
                  lineNumber: 329,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/MenuManagement:318:22", "data-dynamic-content": "true", className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxDEV(
                    Button,
                    {
                      "data-source-location": "pages/MenuManagement:319:24",
                      "data-dynamic-content": "true",
                      variant: "ghost",
                      size: "icon",
                      onClick: () => toggleAvailability(item),
                      className: item.is_available ? "text-green-600" : "text-gray-400",
                      children: item.is_available ? /* @__PURE__ */ jsxDEV(Eye, { "data-source-location": "pages/MenuManagement:325:47", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                        fileName: "/app/src/pages/MenuManagement.jsx",
                        lineNumber: 344,
                        columnNumber: 48
                      }, this) : /* @__PURE__ */ jsxDEV(EyeOff, { "data-source-location": "pages/MenuManagement:325:77", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                        fileName: "/app/src/pages/MenuManagement.jsx",
                        lineNumber: 344,
                        columnNumber: 158
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/src/pages/MenuManagement.jsx",
                      lineNumber: 338,
                      columnNumber: 25
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV(DropdownMenu, { "data-source-location": "pages/MenuManagement:327:24", "data-dynamic-content": "true", children: [
                    /* @__PURE__ */ jsxDEV(DropdownMenuTrigger, { "data-source-location": "pages/MenuManagement:328:26", "data-dynamic-content": "false", asChild: true, children: /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/MenuManagement:329:28", "data-dynamic-content": "false", variant: "ghost", size: "icon", children: /* @__PURE__ */ jsxDEV(MoreVertical, { "data-source-location": "pages/MenuManagement:330:30", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                      fileName: "/app/src/pages/MenuManagement.jsx",
                      lineNumber: 349,
                      columnNumber: 31
                    }, this) }, void 0, false, {
                      fileName: "/app/src/pages/MenuManagement.jsx",
                      lineNumber: 348,
                      columnNumber: 29
                    }, this) }, void 0, false, {
                      fileName: "/app/src/pages/MenuManagement.jsx",
                      lineNumber: 347,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ jsxDEV(DropdownMenuContent, { "data-source-location": "pages/MenuManagement:333:26", "data-dynamic-content": "true", align: "end", children: [
                      /* @__PURE__ */ jsxDEV(DropdownMenuItem, { "data-source-location": "pages/MenuManagement:334:28", "data-dynamic-content": "true", onClick: () => handleEdit(item), children: [
                        /* @__PURE__ */ jsxDEV(Edit2, { "data-source-location": "pages/MenuManagement:335:30", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
                          fileName: "/app/src/pages/MenuManagement.jsx",
                          lineNumber: 354,
                          columnNumber: 31
                        }, this),
                        " Edit"
                      ] }, void 0, true, {
                        fileName: "/app/src/pages/MenuManagement.jsx",
                        lineNumber: 353,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ jsxDEV(
                        DropdownMenuItem,
                        {
                          "data-source-location": "pages/MenuManagement:337:28",
                          "data-dynamic-content": "true",
                          onClick: () => setDeleteConfirm(item),
                          className: "text-red-600",
                          children: [
                            /* @__PURE__ */ jsxDEV(Trash2, { "data-source-location": "pages/MenuManagement:341:30", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
                              fileName: "/app/src/pages/MenuManagement.jsx",
                              lineNumber: 360,
                              columnNumber: 31
                            }, this),
                            " Delete"
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "/app/src/pages/MenuManagement.jsx",
                          lineNumber: 356,
                          columnNumber: 29
                        },
                        this
                      )
                    ] }, void 0, true, {
                      fileName: "/app/src/pages/MenuManagement.jsx",
                      lineNumber: 352,
                      columnNumber: 27
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/src/pages/MenuManagement.jsx",
                    lineNumber: 346,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/MenuManagement.jsx",
                  lineNumber: 337,
                  columnNumber: 23
                }, this)
              ]
            },
            item.id,
            true,
            {
              fileName: "/app/src/pages/MenuManagement.jsx",
              lineNumber: 283,
              columnNumber: 15
            },
            this
          )
        ) }, void 0, false, {
          fileName: "/app/src/pages/MenuManagement.jsx",
          lineNumber: 281,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/MenuManagement.jsx",
          lineNumber: 280,
          columnNumber: 15
        }, this)
      ] }, category, true, {
        fileName: "/app/src/pages/MenuManagement.jsx",
        lineNumber: 273,
        columnNumber: 9
      }, this)
    ) }, void 0, false, {
      fileName: "/app/src/pages/MenuManagement.jsx",
      lineNumber: 271,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Dialog, { "data-source-location": "pages/MenuManagement:356:6", "data-dynamic-content": "true", open: isDialogOpen, onOpenChange: setIsDialogOpen, children: /* @__PURE__ */ jsxDEV(DialogContent, { "data-source-location": "pages/MenuManagement:357:8", "data-dynamic-content": "true", className: "max-w-lg max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxDEV(DialogHeader, { "data-source-location": "pages/MenuManagement:358:10", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(DialogTitle, { "data-source-location": "pages/MenuManagement:359:12", "data-dynamic-content": "true", children: editingItem ? "Edit Menu Item" : "Add Menu Item" }, void 0, false, {
        fileName: "/app/src/pages/MenuManagement.jsx",
        lineNumber: 378,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/MenuManagement.jsx",
        lineNumber: 377,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/MenuManagement:362:10", "data-dynamic-content": "true", className: "space-y-4", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/MenuManagement:363:12", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/MenuManagement:364:14", "data-dynamic-content": "false", htmlFor: "name", children: "Item Name *" }, void 0, false, {
            fileName: "/app/src/pages/MenuManagement.jsx",
            lineNumber: 383,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(
            Input,
            {
              "data-source-location": "pages/MenuManagement:365:14",
              "data-dynamic-content": "true",
              id: "name",
              value: formData.name,
              onChange: (e) => setFormData({ ...formData, name: e.target.value }),
              placeholder: "e.g., Butter Chicken"
            },
            void 0,
            false,
            {
              fileName: "/app/src/pages/MenuManagement.jsx",
              lineNumber: 384,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/src/pages/MenuManagement.jsx",
          lineNumber: 382,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/MenuManagement:373:12", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/MenuManagement:374:14", "data-dynamic-content": "false", htmlFor: "description", children: "Description" }, void 0, false, {
            fileName: "/app/src/pages/MenuManagement.jsx",
            lineNumber: 393,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(
            Textarea,
            {
              "data-source-location": "pages/MenuManagement:375:14",
              "data-dynamic-content": "true",
              id: "description",
              value: formData.description,
              onChange: (e) => setFormData({ ...formData, description: e.target.value }),
              placeholder: "Describe the dish...",
              rows: 2
            },
            void 0,
            false,
            {
              fileName: "/app/src/pages/MenuManagement.jsx",
              lineNumber: 394,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/src/pages/MenuManagement.jsx",
          lineNumber: 392,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/MenuManagement:384:12", "data-dynamic-content": "true", className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/MenuManagement:385:14", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/MenuManagement:386:16", "data-dynamic-content": "false", htmlFor: "price", children: "Price (₹) *" }, void 0, false, {
              fileName: "/app/src/pages/MenuManagement.jsx",
              lineNumber: 405,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(
              Input,
              {
                "data-source-location": "pages/MenuManagement:387:16",
                "data-dynamic-content": "true",
                id: "price",
                type: "number",
                value: formData.price,
                onChange: (e) => setFormData({ ...formData, price: e.target.value }),
                placeholder: "299"
              },
              void 0,
              false,
              {
                fileName: "/app/src/pages/MenuManagement.jsx",
                lineNumber: 406,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/src/pages/MenuManagement.jsx",
            lineNumber: 404,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/MenuManagement:395:14", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/MenuManagement:396:16", "data-dynamic-content": "false", htmlFor: "category", children: "Category *" }, void 0, false, {
              fileName: "/app/src/pages/MenuManagement.jsx",
              lineNumber: 415,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(
              Select,
              {
                "data-source-location": "pages/MenuManagement:397:16",
                "data-dynamic-content": "true",
                value: formData.category,
                onValueChange: (value) => setFormData({ ...formData, category: value }),
                children: [
                  /* @__PURE__ */ jsxDEV(SelectTrigger, { "data-source-location": "pages/MenuManagement:401:18", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(SelectValue, { "data-source-location": "pages/MenuManagement:402:20", "data-dynamic-content": "false", placeholder: "Select category" }, void 0, false, {
                    fileName: "/app/src/pages/MenuManagement.jsx",
                    lineNumber: 421,
                    columnNumber: 21
                  }, this) }, void 0, false, {
                    fileName: "/app/src/pages/MenuManagement.jsx",
                    lineNumber: 420,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV(SelectContent, { "data-source-location": "pages/MenuManagement:404:18", "data-dynamic-content": "true", children: allCategories.map(
                    (cat, __arrIdx__) => /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "pages/MenuManagement:406:22", "data-dynamic-content": "true", value: cat, "data-arr-index": __arrIdx__, "data-arr-variable-name": "allCategories", children: cat }, cat, false, {
                      fileName: "/app/src/pages/MenuManagement.jsx",
                      lineNumber: 425,
                      columnNumber: 21
                    }, this)
                  ) }, void 0, false, {
                    fileName: "/app/src/pages/MenuManagement.jsx",
                    lineNumber: 423,
                    columnNumber: 19
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/src/pages/MenuManagement.jsx",
                lineNumber: 416,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/src/pages/MenuManagement.jsx",
            lineNumber: 414,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/MenuManagement.jsx",
          lineNumber: 403,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/MenuManagement:413:12", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/MenuManagement:414:14", "data-dynamic-content": "false", htmlFor: "preparation_time", children: "Preparation Time (mins)" }, void 0, false, {
            fileName: "/app/src/pages/MenuManagement.jsx",
            lineNumber: 433,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(
            Input,
            {
              "data-source-location": "pages/MenuManagement:415:14",
              "data-dynamic-content": "true",
              id: "preparation_time",
              type: "number",
              value: formData.preparation_time,
              onChange: (e) => setFormData({ ...formData, preparation_time: e.target.value }),
              placeholder: "15"
            },
            void 0,
            false,
            {
              fileName: "/app/src/pages/MenuManagement.jsx",
              lineNumber: 434,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/src/pages/MenuManagement.jsx",
          lineNumber: 432,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/MenuManagement:424:12", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/MenuManagement:425:14", "data-dynamic-content": "false", children: "Item Image" }, void 0, false, {
            fileName: "/app/src/pages/MenuManagement.jsx",
            lineNumber: 444,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/MenuManagement:426:14", "data-dynamic-content": "true", className: "mt-1 flex items-center gap-4", children: formData.image_url ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/MenuManagement:428:18", "data-dynamic-content": "true", className: "relative w-20 h-20", "data-collection-item-field": "image_url", "data-collection-item-id": formData?.id || formData?._id, children: [
            /* @__PURE__ */ jsxDEV(
              "img",
              {
                "data-source-location": "pages/MenuManagement:429:20",
                "data-dynamic-content": "true",
                src: formData.image_url,
                alt: "Preview",
                className: "w-full h-full object-cover rounded-lg"
              },
              void 0,
              false,
              {
                fileName: "/app/src/pages/MenuManagement.jsx",
                lineNumber: 448,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                "data-source-location": "pages/MenuManagement:434:20",
                "data-dynamic-content": "true",
                onClick: () => setFormData({ ...formData, image_url: "" }),
                className: "absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center",
                children: /* @__PURE__ */ jsxDEV(X, { "data-source-location": "pages/MenuManagement:438:22", "data-dynamic-content": "false", className: "w-3 h-3" }, void 0, false, {
                  fileName: "/app/src/pages/MenuManagement.jsx",
                  lineNumber: 457,
                  columnNumber: 23
                }, this)
              },
              void 0,
              false,
              {
                fileName: "/app/src/pages/MenuManagement.jsx",
                lineNumber: 453,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/src/pages/MenuManagement.jsx",
            lineNumber: 447,
            columnNumber: 17
          }, this) : /* @__PURE__ */ jsxDEV("label", { "data-source-location": "pages/MenuManagement:442:18", "data-dynamic-content": "true", className: "w-20 h-20 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-violet-400", children: [
            /* @__PURE__ */ jsxDEV(Upload, { "data-source-location": "pages/MenuManagement:443:20", "data-dynamic-content": "false", className: "w-6 h-6 text-gray-400" }, void 0, false, {
              fileName: "/app/src/pages/MenuManagement.jsx",
              lineNumber: 462,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                "data-source-location": "pages/MenuManagement:444:20",
                "data-dynamic-content": "true",
                type: "file",
                accept: "image/*",
                className: "hidden",
                onChange: handleImageUpload
              },
              void 0,
              false,
              {
                fileName: "/app/src/pages/MenuManagement.jsx",
                lineNumber: 463,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/src/pages/MenuManagement.jsx",
            lineNumber: 461,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/MenuManagement.jsx",
            lineNumber: 445,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/MenuManagement.jsx",
          lineNumber: 443,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/MenuManagement:455:12", "data-dynamic-content": "true", className: "flex flex-wrap gap-6", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/MenuManagement:456:14", "data-dynamic-content": "true", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV(
              Switch,
              {
                "data-source-location": "pages/MenuManagement:457:16",
                "data-dynamic-content": "true",
                checked: formData.is_vegetarian,
                onCheckedChange: (checked) => setFormData({ ...formData, is_vegetarian: checked })
              },
              void 0,
              false,
              {
                fileName: "/app/src/pages/MenuManagement.jsx",
                lineNumber: 476,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/MenuManagement:461:16", "data-dynamic-content": "false", children: "Vegetarian" }, void 0, false, {
              fileName: "/app/src/pages/MenuManagement.jsx",
              lineNumber: 480,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/MenuManagement.jsx",
            lineNumber: 475,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/MenuManagement:463:14", "data-dynamic-content": "true", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV(
              Switch,
              {
                "data-source-location": "pages/MenuManagement:464:16",
                "data-dynamic-content": "true",
                checked: formData.is_spicy,
                onCheckedChange: (checked) => setFormData({ ...formData, is_spicy: checked })
              },
              void 0,
              false,
              {
                fileName: "/app/src/pages/MenuManagement.jsx",
                lineNumber: 483,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/MenuManagement:468:16", "data-dynamic-content": "false", children: "Spicy" }, void 0, false, {
              fileName: "/app/src/pages/MenuManagement.jsx",
              lineNumber: 487,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/MenuManagement.jsx",
            lineNumber: 482,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/MenuManagement:470:14", "data-dynamic-content": "true", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV(
              Switch,
              {
                "data-source-location": "pages/MenuManagement:471:16",
                "data-dynamic-content": "true",
                checked: formData.is_available,
                onCheckedChange: (checked) => setFormData({ ...formData, is_available: checked })
              },
              void 0,
              false,
              {
                fileName: "/app/src/pages/MenuManagement.jsx",
                lineNumber: 490,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/MenuManagement:475:16", "data-dynamic-content": "false", children: "Available" }, void 0, false, {
              fileName: "/app/src/pages/MenuManagement.jsx",
              lineNumber: 494,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/MenuManagement.jsx",
            lineNumber: 489,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/MenuManagement.jsx",
          lineNumber: 474,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/MenuManagement.jsx",
        lineNumber: 381,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(DialogFooter, { "data-source-location": "pages/MenuManagement:480:10", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/MenuManagement:481:12", "data-dynamic-content": "true", variant: "outline", onClick: () => setIsDialogOpen(false), children: "Cancel" }, void 0, false, {
          fileName: "/app/src/pages/MenuManagement.jsx",
          lineNumber: 500,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          Button,
          {
            "data-source-location": "pages/MenuManagement:484:12",
            "data-dynamic-content": "true",
            onClick: handleSave,
            disabled: isSaving || !formData.name || !formData.price || !formData.category,
            className: "bg-gradient-to-r from-violet-600 to-indigo-600",
            children: isSaving ? "Saving..." : editingItem ? "Update" : "Add Item"
          },
          void 0,
          false,
          {
            fileName: "/app/src/pages/MenuManagement.jsx",
            lineNumber: 503,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/src/pages/MenuManagement.jsx",
        lineNumber: 499,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/MenuManagement.jsx",
      lineNumber: 376,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/MenuManagement.jsx",
      lineNumber: 375,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(AlertDialog, { "data-source-location": "pages/MenuManagement:496:6", "data-dynamic-content": "true", open: !!deleteConfirm, onOpenChange: () => setDeleteConfirm(null), children: /* @__PURE__ */ jsxDEV(AlertDialogContent, { "data-source-location": "pages/MenuManagement:497:8", "data-dynamic-content": "true", children: [
      /* @__PURE__ */ jsxDEV(AlertDialogHeader, { "data-source-location": "pages/MenuManagement:498:10", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV(AlertDialogTitle, { "data-source-location": "pages/MenuManagement:499:12", "data-dynamic-content": "false", children: "Delete Menu Item" }, void 0, false, {
          fileName: "/app/src/pages/MenuManagement.jsx",
          lineNumber: 518,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(AlertDialogDescription, { "data-source-location": "pages/MenuManagement:500:12", "data-dynamic-content": "true", "data-collection-item-field": "name", "data-collection-item-id": deleteConfirm?.id || deleteConfirm?._id, children: [
          'Are you sure you want to delete "',
          deleteConfirm?.name,
          '"? This action cannot be undone.'
        ] }, void 0, true, {
          fileName: "/app/src/pages/MenuManagement.jsx",
          lineNumber: 519,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/MenuManagement.jsx",
        lineNumber: 517,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(AlertDialogFooter, { "data-source-location": "pages/MenuManagement:504:10", "data-dynamic-content": "true", children: [
        /* @__PURE__ */ jsxDEV(AlertDialogCancel, { "data-source-location": "pages/MenuManagement:505:12", "data-dynamic-content": "false", children: "Cancel" }, void 0, false, {
          fileName: "/app/src/pages/MenuManagement.jsx",
          lineNumber: 524,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          AlertDialogAction,
          {
            "data-source-location": "pages/MenuManagement:506:12",
            "data-dynamic-content": "true",
            onClick: () => handleDelete(deleteConfirm?.id),
            className: "bg-red-600 hover:bg-red-700",
            children: "Delete"
          },
          void 0,
          false,
          {
            fileName: "/app/src/pages/MenuManagement.jsx",
            lineNumber: 525,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/src/pages/MenuManagement.jsx",
        lineNumber: 523,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/MenuManagement.jsx",
      lineNumber: 516,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/MenuManagement.jsx",
      lineNumber: 515,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/MenuManagement.jsx",
    lineNumber: 220,
    columnNumber: 5
  }, this);
}
_s(MenuManagementContent, "rEuSNytpfItVZU9kIs9gdtDiqpM=");
_c = MenuManagementContent;
export default function MenuManagement() {
  return /* @__PURE__ */ jsxDEV(DashboardLayout, { "data-source-location": "pages/MenuManagement:521:4", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(MenuManagementContent, { "data-source-location": "pages/MenuManagement:522:6", "data-dynamic-content": "false" }, void 0, false, {
    fileName: "/app/src/pages/MenuManagement.jsx",
    lineNumber: 541,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/src/pages/MenuManagement.jsx",
    lineNumber: 540,
    columnNumber: 5
  }, this);
}
_c2 = MenuManagement;
var _c, _c2;
$RefreshReg$(_c, "MenuManagementContent");
$RefreshReg$(_c2, "MenuManagement");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/MenuManagement.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/MenuManagement.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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LFlBQzNGLFNBQVMsTUFBTThDLGFBQWFwRCxlQUFla0QsRUFBRTtBQUFBLFlBQzdDLFdBQVU7QUFBQSxZQUE2QjtBQUFBO0FBQUEsVUFGdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBS0E7QUFBQSxXQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFRQTtBQUFBLFNBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWdCQSxLQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBa0JBO0FBQUEsT0F6VEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQTBUQTtBQUVKO0FBQUMvRCxHQS9jUUgsdUJBQXFCO0FBQUF5RixLQUFyQnpGO0FBaWRULHdCQUF3QjBGLGlCQUFpQjtBQUN2QyxTQUNFLHVCQUFDLG1CQUFnQix3QkFBcUIsOEJBQTZCLHdCQUFxQixTQUN0RixpQ0FBQyx5QkFBc0Isd0JBQXFCLDhCQUE2Qix3QkFBcUIsV0FBOUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFxRyxLQUR2RztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUE7QUFFSjtBQUFDQyxNQU51QkQ7QUFBYyxJQUFBRCxJQUFBRTtBQUFBQyxhQUFBSCxJQUFBO0FBQUFHLGFBQUFELEtBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiYmFzZTQ0IiwiRGFzaGJvYXJkTGF5b3V0IiwiUGx1cyIsIlNlYXJjaCIsIkVkaXQyIiwiVHJhc2gyIiwiRXllIiwiRXllT2ZmIiwiTGVhZiIsIkZsYW1lIiwiRmlsdGVyIiwiTW9yZVZlcnRpY2FsIiwiVXBsb2FkIiwiR3JpcFZlcnRpY2FsIiwiWCIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJCdXR0b24iLCJJbnB1dCIsIkxhYmVsIiwiVGV4dGFyZWEiLCJCYWRnZSIsIlN3aXRjaCIsIkRpYWxvZyIsIkRpYWxvZ0NvbnRlbnQiLCJEaWFsb2dIZWFkZXIiLCJEaWFsb2dUaXRsZSIsIkRpYWxvZ0Zvb3RlciIsIlNlbGVjdCIsIlNlbGVjdENvbnRlbnQiLCJTZWxlY3RJdGVtIiwiU2VsZWN0VHJpZ2dlciIsIlNlbGVjdFZhbHVlIiwiRHJvcGRvd25NZW51IiwiRHJvcGRvd25NZW51Q29udGVudCIsIkRyb3Bkb3duTWVudUl0ZW0iLCJEcm9wZG93bk1lbnVUcmlnZ2VyIiwiQWxlcnREaWFsb2ciLCJBbGVydERpYWxvZ0FjdGlvbiIsIkFsZXJ0RGlhbG9nQ2FuY2VsIiwiQWxlcnREaWFsb2dDb250ZW50IiwiQWxlcnREaWFsb2dEZXNjcmlwdGlvbiIsIkFsZXJ0RGlhbG9nRm9vdGVyIiwiQWxlcnREaWFsb2dIZWFkZXIiLCJBbGVydERpYWxvZ1RpdGxlIiwiVGFicyIsIlRhYnNMaXN0IiwiVGFic1RyaWdnZXIiLCJkZWZhdWx0Q2F0ZWdvcmllcyIsIk1lbnVNYW5hZ2VtZW50Q29udGVudCIsInVzZXIiLCJyZXN0YXVyYW50IiwiX3MiLCJtZW51SXRlbXMiLCJzZXRNZW51SXRlbXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5Iiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJpc0RpYWxvZ09wZW4iLCJzZXRJc0RpYWxvZ09wZW4iLCJlZGl0aW5nSXRlbSIsInNldEVkaXRpbmdJdGVtIiwiZGVsZXRlQ29uZmlybSIsInNldERlbGV0ZUNvbmZpcm0iLCJpc1NhdmluZyIsInNldElzU2F2aW5nIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiY2F0ZWdvcnkiLCJpbWFnZV91cmwiLCJpc192ZWdldGFyaWFuIiwiaXNfdmVnYW4iLCJpc19zcGljeSIsImlzX2F2YWlsYWJsZSIsInByZXBhcmF0aW9uX3RpbWUiLCJyZXN0YXVyYW50X2lkIiwibG9hZE1lbnVJdGVtcyIsIml0ZW1zIiwiZW50aXRpZXMiLCJNZW51SXRlbSIsImZpbHRlciIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjYXRlZ29yaWVzIiwiU2V0IiwibWFwIiwiaXRlbSIsIkJvb2xlYW4iLCJhbGxDYXRlZ29yaWVzIiwiZmlsdGVyZWRJdGVtcyIsIm1hdGNoZXNTZWFyY2giLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibWF0Y2hlc0NhdGVnb3J5IiwiZ3JvdXBlZEl0ZW1zIiwicmVkdWNlIiwiYWNjIiwicHVzaCIsImhhbmRsZUFkZE5ldyIsImhhbmRsZUVkaXQiLCJ0b1N0cmluZyIsImhhbmRsZVNhdmUiLCJpdGVtRGF0YSIsInBhcnNlRmxvYXQiLCJwYXJzZUludCIsInNvcnRfb3JkZXIiLCJsZW5ndGgiLCJ1cGRhdGUiLCJpZCIsImNyZWF0ZSIsImhhbmRsZURlbGV0ZSIsImRlbGV0ZSIsInRvZ2dsZUF2YWlsYWJpbGl0eSIsImhhbmRsZUltYWdlVXBsb2FkIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZV91cmwiLCJpbnRlZ3JhdGlvbnMiLCJDb3JlIiwiVXBsb2FkRmlsZSIsInZhbHVlIiwic2xpY2UiLCJjYXQiLCJPYmplY3QiLCJrZXlzIiwiZW50cmllcyIsIm9wYWNpdHkiLCJfX2FycklkeF9fIiwiX2lkIiwiY2hlY2tlZCIsIl9jIiwiTWVudU1hbmFnZW1lbnQiLCJfYzIiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiTWVudU1hbmFnZW1lbnQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBiYXNlNDQgfSBmcm9tIFwiQC9hcGkvYmFzZTQ0Q2xpZW50XCI7XG5pbXBvcnQgRGFzaGJvYXJkTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2Rhc2hib2FyZC9EYXNoYm9hcmRMYXlvdXRcIjtcbmltcG9ydCB7XG4gIFBsdXMsIFNlYXJjaCwgRWRpdDIsIFRyYXNoMiwgRXllLCBFeWVPZmYsXG4gIExlYWYsIEZsYW1lLCBGaWx0ZXIsIE1vcmVWZXJ0aWNhbCwgVXBsb2FkLFxuICBHcmlwVmVydGljYWwsIFggfSBmcm9tXG5cImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIENhcmRIZWFkZXIsIENhcmRUaXRsZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2xhYmVsXCI7XG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdGV4dGFyZWFcIjtcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9iYWRnZVwiO1xuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9zd2l0Y2hcIjtcbmltcG9ydCB7XG4gIERpYWxvZyxcbiAgRGlhbG9nQ29udGVudCxcbiAgRGlhbG9nSGVhZGVyLFxuICBEaWFsb2dUaXRsZSxcbiAgRGlhbG9nRm9vdGVyIH0gZnJvbVxuXCJAL2NvbXBvbmVudHMvdWkvZGlhbG9nXCI7XG5pbXBvcnQge1xuICBTZWxlY3QsXG4gIFNlbGVjdENvbnRlbnQsXG4gIFNlbGVjdEl0ZW0sXG4gIFNlbGVjdFRyaWdnZXIsXG4gIFNlbGVjdFZhbHVlIH0gZnJvbVxuXCJAL2NvbXBvbmVudHMvdWkvc2VsZWN0XCI7XG5pbXBvcnQge1xuICBEcm9wZG93bk1lbnUsXG4gIERyb3Bkb3duTWVudUNvbnRlbnQsXG4gIERyb3Bkb3duTWVudUl0ZW0sXG4gIERyb3Bkb3duTWVudVRyaWdnZXIgfSBmcm9tXG5cIkAvY29tcG9uZW50cy91aS9kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQge1xuICBBbGVydERpYWxvZyxcbiAgQWxlcnREaWFsb2dBY3Rpb24sXG4gIEFsZXJ0RGlhbG9nQ2FuY2VsLFxuICBBbGVydERpYWxvZ0NvbnRlbnQsXG4gIEFsZXJ0RGlhbG9nRGVzY3JpcHRpb24sXG4gIEFsZXJ0RGlhbG9nRm9vdGVyLFxuICBBbGVydERpYWxvZ0hlYWRlcixcbiAgQWxlcnREaWFsb2dUaXRsZSB9IGZyb21cblwiQC9jb21wb25lbnRzL3VpL2FsZXJ0LWRpYWxvZ1wiO1xuaW1wb3J0IHsgVGFicywgVGFic0xpc3QsIFRhYnNUcmlnZ2VyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90YWJzXCI7XG5cbmNvbnN0IGRlZmF1bHRDYXRlZ29yaWVzID0gW1xuXCJTdGFydGVyc1wiLCBcIk1haW4gQ291cnNlXCIsIFwiQnJlYWRzXCIsIFwiUmljZSAmIEJpcnlhbmlcIixcblwiRGVzc2VydHNcIiwgXCJCZXZlcmFnZXNcIiwgXCJTb3Vwc1wiLCBcIlNhbGFkc1wiLCBcIkNvbWJvc1wiXTtcblxuXG5mdW5jdGlvbiBNZW51TWFuYWdlbWVudENvbnRlbnQoeyB1c2VyLCByZXN0YXVyYW50IH0pIHtcbiAgY29uc3QgW21lbnVJdGVtcywgc2V0TWVudUl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZShcImFsbFwiKTtcbiAgY29uc3QgW2lzRGlhbG9nT3Blbiwgc2V0SXNEaWFsb2dPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2VkaXRpbmdJdGVtLCBzZXRFZGl0aW5nSXRlbV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2RlbGV0ZUNvbmZpcm0sIHNldERlbGV0ZUNvbmZpcm1dID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc1NhdmluZywgc2V0SXNTYXZpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6IFwiXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgcHJpY2U6IFwiXCIsXG4gICAgY2F0ZWdvcnk6IFwiXCIsXG4gICAgaW1hZ2VfdXJsOiBcIlwiLFxuICAgIGlzX3ZlZ2V0YXJpYW46IGZhbHNlLFxuICAgIGlzX3ZlZ2FuOiBmYWxzZSxcbiAgICBpc19zcGljeTogZmFsc2UsXG4gICAgaXNfYXZhaWxhYmxlOiB0cnVlLFxuICAgIHByZXBhcmF0aW9uX3RpbWU6IFwiXCJcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmVzdGF1cmFudD8ucmVzdGF1cmFudF9pZCkge1xuICAgICAgbG9hZE1lbnVJdGVtcygpO1xuICAgIH1cbiAgfSwgW3Jlc3RhdXJhbnRdKTtcblxuICBjb25zdCBsb2FkTWVudUl0ZW1zID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IGJhc2U0NC5lbnRpdGllcy5NZW51SXRlbS5maWx0ZXIoXG4gICAgICAgIHsgcmVzdGF1cmFudF9pZDogcmVzdGF1cmFudC5yZXN0YXVyYW50X2lkIH0sXG4gICAgICAgICdzb3J0X29yZGVyJ1xuICAgICAgKTtcbiAgICAgIHNldE1lbnVJdGVtcyhpdGVtcyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgbWVudTpcIiwgZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBbLi4ubmV3IFNldChtZW51SXRlbXMubWFwKChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5KSldLmZpbHRlcihCb29sZWFuKTtcbiAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9IFsuLi5uZXcgU2V0KFsuLi5kZWZhdWx0Q2F0ZWdvcmllcywgLi4uY2F0ZWdvcmllc10pXTtcblxuICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gbWVudUl0ZW1zLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgIGNvbnN0IG1hdGNoZXNTZWFyY2ggPSBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgIGl0ZW0uZGVzY3JpcHRpb24/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSk7XG4gICAgY29uc3QgbWF0Y2hlc0NhdGVnb3J5ID0gc2VsZWN0ZWRDYXRlZ29yeSA9PT0gXCJhbGxcIiB8fCBpdGVtLmNhdGVnb3J5ID09PSBzZWxlY3RlZENhdGVnb3J5O1xuICAgIHJldHVybiBtYXRjaGVzU2VhcmNoICYmIG1hdGNoZXNDYXRlZ29yeTtcbiAgfSk7XG5cbiAgY29uc3QgZ3JvdXBlZEl0ZW1zID0gZmlsdGVyZWRJdGVtcy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gaXRlbS5jYXRlZ29yeSB8fCBcIlVuY2F0ZWdvcml6ZWRcIjtcbiAgICBpZiAoIWFjY1tjYXRlZ29yeV0pIGFjY1tjYXRlZ29yeV0gPSBbXTtcbiAgICBhY2NbY2F0ZWdvcnldLnB1c2goaXRlbSk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG4gIGNvbnN0IGhhbmRsZUFkZE5ldyA9ICgpID0+IHtcbiAgICBzZXRFZGl0aW5nSXRlbShudWxsKTtcbiAgICBzZXRGb3JtRGF0YSh7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICBwcmljZTogXCJcIixcbiAgICAgIGNhdGVnb3J5OiBcIlwiLFxuICAgICAgaW1hZ2VfdXJsOiBcIlwiLFxuICAgICAgaXNfdmVnZXRhcmlhbjogZmFsc2UsXG4gICAgICBpc192ZWdhbjogZmFsc2UsXG4gICAgICBpc19zcGljeTogZmFsc2UsXG4gICAgICBpc19hdmFpbGFibGU6IHRydWUsXG4gICAgICBwcmVwYXJhdGlvbl90aW1lOiBcIlwiXG4gICAgfSk7XG4gICAgc2V0SXNEaWFsb2dPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUVkaXQgPSAoaXRlbSkgPT4ge1xuICAgIHNldEVkaXRpbmdJdGVtKGl0ZW0pO1xuICAgIHNldEZvcm1EYXRhKHtcbiAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLmRlc2NyaXB0aW9uIHx8IFwiXCIsXG4gICAgICBwcmljZTogaXRlbS5wcmljZT8udG9TdHJpbmcoKSB8fCBcIlwiLFxuICAgICAgY2F0ZWdvcnk6IGl0ZW0uY2F0ZWdvcnkgfHwgXCJcIixcbiAgICAgIGltYWdlX3VybDogaXRlbS5pbWFnZV91cmwgfHwgXCJcIixcbiAgICAgIGlzX3ZlZ2V0YXJpYW46IGl0ZW0uaXNfdmVnZXRhcmlhbiB8fCBmYWxzZSxcbiAgICAgIGlzX3ZlZ2FuOiBpdGVtLmlzX3ZlZ2FuIHx8IGZhbHNlLFxuICAgICAgaXNfc3BpY3k6IGl0ZW0uaXNfc3BpY3kgfHwgZmFsc2UsXG4gICAgICBpc19hdmFpbGFibGU6IGl0ZW0uaXNfYXZhaWxhYmxlICE9PSBmYWxzZSxcbiAgICAgIHByZXBhcmF0aW9uX3RpbWU6IGl0ZW0ucHJlcGFyYXRpb25fdGltZT8udG9TdHJpbmcoKSB8fCBcIlwiXG4gICAgfSk7XG4gICAgc2V0SXNEaWFsb2dPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFmb3JtRGF0YS5uYW1lIHx8ICFmb3JtRGF0YS5wcmljZSB8fCAhZm9ybURhdGEuY2F0ZWdvcnkpIHJldHVybjtcblxuICAgIHNldElzU2F2aW5nKHRydWUpO1xuICAgIGNvbnN0IGl0ZW1EYXRhID0ge1xuICAgICAgLi4uZm9ybURhdGEsXG4gICAgICByZXN0YXVyYW50X2lkOiByZXN0YXVyYW50LnJlc3RhdXJhbnRfaWQsXG4gICAgICBwcmljZTogcGFyc2VGbG9hdChmb3JtRGF0YS5wcmljZSksXG4gICAgICBwcmVwYXJhdGlvbl90aW1lOiBmb3JtRGF0YS5wcmVwYXJhdGlvbl90aW1lID8gcGFyc2VJbnQoZm9ybURhdGEucHJlcGFyYXRpb25fdGltZSkgOiBudWxsLFxuICAgICAgc29ydF9vcmRlcjogZWRpdGluZ0l0ZW0/LnNvcnRfb3JkZXIgfHwgbWVudUl0ZW1zLmxlbmd0aFxuICAgIH07XG5cbiAgICBpZiAoZWRpdGluZ0l0ZW0pIHtcbiAgICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5NZW51SXRlbS51cGRhdGUoZWRpdGluZ0l0ZW0uaWQsIGl0ZW1EYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgYmFzZTQ0LmVudGl0aWVzLk1lbnVJdGVtLmNyZWF0ZShpdGVtRGF0YSk7XG4gICAgfVxuXG4gICAgYXdhaXQgbG9hZE1lbnVJdGVtcygpO1xuICAgIHNldElzRGlhbG9nT3BlbihmYWxzZSk7XG4gICAgc2V0SXNTYXZpbmcoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChpZCkgPT4ge1xuICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5NZW51SXRlbS5kZWxldGUoaWQpO1xuICAgIGF3YWl0IGxvYWRNZW51SXRlbXMoKTtcbiAgICBzZXREZWxldGVDb25maXJtKG51bGwpO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZUF2YWlsYWJpbGl0eSA9IGFzeW5jIChpdGVtKSA9PiB7XG4gICAgYXdhaXQgYmFzZTQ0LmVudGl0aWVzLk1lbnVJdGVtLnVwZGF0ZShpdGVtLmlkLCB7XG4gICAgICBpc19hdmFpbGFibGU6ICFpdGVtLmlzX2F2YWlsYWJsZVxuICAgIH0pO1xuICAgIGF3YWl0IGxvYWRNZW51SXRlbXMoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVJbWFnZVVwbG9hZCA9IGFzeW5jIChlKSA9PiB7XG4gICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzPy5bMF07XG4gICAgaWYgKCFmaWxlKSByZXR1cm47XG5cbiAgICBjb25zdCB7IGZpbGVfdXJsIH0gPSBhd2FpdCBiYXNlNDQuaW50ZWdyYXRpb25zLkNvcmUuVXBsb2FkRmlsZSh7IGZpbGUgfSk7XG4gICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgaW1hZ2VfdXJsOiBmaWxlX3VybCB9KTtcbiAgfTtcblxuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDoxOTQ6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTY0XCI+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDoxOTU6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJhbmltYXRlLXNwaW4gcm91bmRlZC1mdWxsIGgtOCB3LTggYm9yZGVyLWItMiBib3JkZXItdmlvbGV0LTYwMFwiPjwvZGl2PlxuICAgICAgPC9kaXY+KTtcblxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6MjAxOjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6MjAzOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IG1kOml0ZW1zLWNlbnRlciBtZDpqdXN0aWZ5LWJldHdlZW4gZ2FwLTRcIj5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjIwNDo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgPGgxIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6MjA1OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwXCI+TWVudSBNYW5hZ2VtZW50PC9oMT5cbiAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjIwNjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj57bWVudUl0ZW1zLmxlbmd0aH0gaXRlbXMgaW4geW91ciBtZW51PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjIwODo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgb25DbGljaz17aGFuZGxlQWRkTmV3fSBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tdmlvbGV0LTYwMCB0by1pbmRpZ28tNjAwXCI+XG4gICAgICAgICAgPFBsdXMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDoyMDk6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCBtci0yXCIgLz5cbiAgICAgICAgICBBZGQgTWVudSBJdGVtXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBGaWx0ZXJzICovfVxuICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDoyMTU6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDoyMTY6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDoyMTc6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGdhcC00XCI+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6MjE4OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleC0xIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDxTZWFyY2ggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDoyMTk6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0zIHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB3LTQgaC00IHRleHQtZ3JheS00MDBcIiAvPlxuICAgICAgICAgICAgICA8SW5wdXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDoyMjA6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBtZW51IGl0ZW1zLi4uXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGwtOVwiIC8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFRhYnMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDoyMjc6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB2YWx1ZT17c2VsZWN0ZWRDYXRlZ29yeX0gb25WYWx1ZUNoYW5nZT17c2V0U2VsZWN0ZWRDYXRlZ29yeX0+XG4gICAgICAgICAgICAgIDxUYWJzTGlzdCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjIyODoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIGZsZXgtd3JhcCBoLWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8VGFic1RyaWdnZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDoyMjk6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdmFsdWU9XCJhbGxcIj5BbGw8L1RhYnNUcmlnZ2VyPlxuICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLnNsaWNlKDAsIDUpLm1hcCgoY2F0KSA9PlxuICAgICAgICAgICAgICAgIDxUYWJzVHJpZ2dlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjIzMToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17Y2F0fSB2YWx1ZT17Y2F0fSBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImNhdFwiPntjYXR9PC9UYWJzVHJpZ2dlcj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1RhYnNMaXN0PlxuICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPC9DYXJkPlxuXG4gICAgICB7LyogTWVudSBJdGVtcyAqL31cbiAgICAgIHtPYmplY3Qua2V5cyhncm91cGVkSXRlbXMpLmxlbmd0aCA9PT0gMCA/XG4gICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjI0MTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6MjQyOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicHktMTYgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDoyNDM6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0xNiBoLTE2IGJnLWdyYXktMTAwIHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBteC1hdXRvIG1iLTRcIj5cbiAgICAgICAgICAgICAgPFBsdXMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDoyNDQ6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy04IGgtOCB0ZXh0LWdyYXktNDAwXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6MjQ2OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBtYi0yXCI+Tm8gbWVudSBpdGVtcyB5ZXQ8L2gzPlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDoyNDc6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBtYi00XCI+U3RhcnQgYnkgYWRkaW5nIHlvdXIgZmlyc3QgbWVudSBpdGVtPC9wPlxuICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjI0ODoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG9uQ2xpY2s9e2hhbmRsZUFkZE5ld30+QWRkIE1lbnUgSXRlbTwvQnV0dG9uPlxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZD4gOlxuXG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6MjUyOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgICAgICB7T2JqZWN0LmVudHJpZXMoZ3JvdXBlZEl0ZW1zKS5tYXAoKFtjYXRlZ29yeSwgaXRlbXNdKSA9PlxuICAgICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjI1NDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17Y2F0ZWdvcnl9PlxuICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjI1NToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInBiLTJcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6MjU2OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1sZyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6MjU3OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJjYXRlZ29yeVwiPntjYXRlZ29yeX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8QmFkZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDoyNTg6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB2YXJpYW50PVwic2Vjb25kYXJ5XCI+e2l0ZW1zLmxlbmd0aH0gaXRlbXM8L0JhZGdlPlxuICAgICAgICAgICAgICAgIDwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjI2MToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDoyNjI6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJkaXZpZGUteVwiPlxuICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT5cbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDoyNjQ6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgIGxheW91dFxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aXRlbT8uaWR9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgey8qIEltYWdlICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDoyNzI6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgcm91bmRlZC1sZyBiZy1ncmF5LTEwMCBvdmVyZmxvdy1oaWRkZW4gZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uaW1hZ2VfdXJsID9cbiAgICAgICAgICAgICAgICAgIDxpbWcgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDoyNzQ6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlX3VybH1cbiAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIiAvPiA6XG5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjI4MDoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDwn42977iPXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgey8qIERldGFpbHMgKi99XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjI4NzoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXgtMSBtaW4tdy0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6Mjg4OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgZmxleC13cmFwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJpc192ZWdldGFyaWFuXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2l0ZW0/LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6Mjg5OjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPXtgZm9udC1tZWRpdW0gJHshaXRlbS5pc19hdmFpbGFibGUgPyAndGV4dC1ncmF5LTQwMCcgOiAndGV4dC1ncmF5LTkwMCd9YH0gZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJuYW1lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2l0ZW0/LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5pc192ZWdldGFyaWFuICYmXG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjI5MzoyOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJiZy1ncmVlbi0xMDAgdGV4dC1ncmVlbi03MDAgdGV4dC14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExlYWYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDoyOTQ6MzBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0zIGgtMyBtci0xXCIgLz4gVmVnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5pc19zcGljeSAmJlxuICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDoyOTg6MjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYmctcmVkLTEwMCB0ZXh0LXJlZC03MDAgdGV4dC14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsYW1lIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6Mjk5OjMwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMyBoLTMgbXItMVwiIC8+IFNwaWN5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IWl0ZW0uaXNfYXZhaWxhYmxlICYmXG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjMwMzoyOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgY2xhc3NOYW1lPVwidGV4dC14c1wiPlVuYXZhaWxhYmxlPC9CYWRnZT5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjMwNjoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCB0cnVuY2F0ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiZGVzY3JpcHRpb25cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aXRlbT8uaWR9PntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBQcmljZSAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6MzEwOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicHJlcGFyYXRpb25fdGltZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtpdGVtPy5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjMxMToyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicHJpY2VcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aXRlbT8uaWR9PuKCuXtpdGVtLnByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnByZXBhcmF0aW9uX3RpbWUgJiZcbiAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6MzEzOjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJwcmVwYXJhdGlvbl90aW1lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2l0ZW0/LmlkfT57aXRlbS5wcmVwYXJhdGlvbl90aW1lfSBtaW5zPC9wPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgey8qIEFjdGlvbnMgKi99XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjMxODoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6MzE5OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgICAgICAgICBzaXplPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVBdmFpbGFiaWxpdHkoaXRlbSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2l0ZW0uaXNfYXZhaWxhYmxlID8gJ3RleHQtZ3JlZW4tNjAwJyA6ICd0ZXh0LWdyYXktNDAwJ30+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uaXNfYXZhaWxhYmxlID8gPEV5ZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjMyNTo0N1wiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz4gOiA8RXllT2ZmIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6MzI1Ojc3XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjMyNzoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51VHJpZ2dlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjMyODoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBhc0NoaWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDozMjk6MjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdmFyaWFudD1cImdob3N0XCIgc2l6ZT1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3JlVmVydGljYWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDozMzA6MzBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51VHJpZ2dlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUNvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDozMzM6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBhbGlnbj1cImVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVJdGVtIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6MzM0OjI4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgb25DbGljaz17KCkgPT4gaGFuZGxlRWRpdChpdGVtKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdDIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDozMzU6MzBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCBtci0yXCIgLz4gRWRpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51SXRlbSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjMzNzoyOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGVsZXRlQ29uZmlybShpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDBcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjM0MTozMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IG1yLTJcIiAvPiBEZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51Q29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuXG4gICAgICB7LyogQWRkL0VkaXQgRGlhbG9nICovfVxuICAgICAgPERpYWxvZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjM1Njo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgb3Blbj17aXNEaWFsb2dPcGVufSBvbk9wZW5DaGFuZ2U9e3NldElzRGlhbG9nT3Blbn0+XG4gICAgICAgIDxEaWFsb2dDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6MzU3OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtYXgtdy1sZyBtYXgtaC1bOTB2aF0gb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgPERpYWxvZ0hlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjM1ODoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgPERpYWxvZ1RpdGxlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6MzU5OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+e2VkaXRpbmdJdGVtID8gJ0VkaXQgTWVudSBJdGVtJyA6ICdBZGQgTWVudSBJdGVtJ308L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgIDwvRGlhbG9nSGVhZGVyPlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDozNjI6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDozNjM6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgPExhYmVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6MzY0OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGh0bWxGb3I9XCJuYW1lXCI+SXRlbSBOYW1lICo8L0xhYmVsPlxuICAgICAgICAgICAgICA8SW5wdXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDozNjU6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuLCBCdXR0ZXIgQ2hpY2tlblwiIC8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6MzczOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDxMYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjM3NDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvTGFiZWw+XG4gICAgICAgICAgICAgIDxUZXh0YXJlYSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjM3NToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgZGVzY3JpcHRpb246IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaWJlIHRoZSBkaXNoLi4uXCJcbiAgICAgICAgICAgICAgcm93cz17Mn0gLz5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDozODQ6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDozODU6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8TGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDozODY6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgaHRtbEZvcj1cInByaWNlXCI+UHJpY2UgKOKCuSkgKjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPElucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6Mzg3OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBpZD1cInByaWNlXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucHJpY2V9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBwcmljZTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIyOTlcIiAvPlxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6Mzk1OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPExhYmVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6Mzk2OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGh0bWxGb3I9XCJjYXRlZ29yeVwiPkNhdGVnb3J5ICo8L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxTZWxlY3QgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDozOTc6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5jYXRlZ29yeX1cbiAgICAgICAgICAgICAgICBvblZhbHVlQ2hhbmdlPXsodmFsdWUpID0+IHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIGNhdGVnb3J5OiB2YWx1ZSB9KX0+XG5cbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RUcmlnZ2VyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6NDAxOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0VmFsdWUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDo0MDI6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgcGxhY2Vob2xkZXI9XCJTZWxlY3QgY2F0ZWdvcnlcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3RUcmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgPFNlbGVjdENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDo0MDQ6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAge2FsbENhdGVnb3JpZXMubWFwKChjYXQsIF9fYXJySWR4X18pID0+XG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6NDA2OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtjYXR9IHZhbHVlPXtjYXR9IGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwiYWxsQ2F0ZWdvcmllc1wiPntjYXR9PC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3RDb250ZW50PlxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6NDEzOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDxMYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjQxNDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBodG1sRm9yPVwicHJlcGFyYXRpb25fdGltZVwiPlByZXBhcmF0aW9uIFRpbWUgKG1pbnMpPC9MYWJlbD5cbiAgICAgICAgICAgICAgPElucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6NDE1OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgaWQ9XCJwcmVwYXJhdGlvbl90aW1lXCJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wcmVwYXJhdGlvbl90aW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIHByZXBhcmF0aW9uX3RpbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjE1XCIgLz5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDo0MjQ6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgPExhYmVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6NDI1OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPkl0ZW0gSW1hZ2U8L0xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6NDI2OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibXQtMSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgICAgIHtmb3JtRGF0YS5pbWFnZV91cmwgP1xuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDo0Mjg6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTIwIGgtMjBcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImltYWdlX3VybFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtmb3JtRGF0YT8uaWQgfHwgZm9ybURhdGE/Ll9pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDo0Mjk6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgc3JjPXtmb3JtRGF0YS5pbWFnZV91cmx9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJQcmV2aWV3XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIHJvdW5kZWQtbGdcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDo0MzQ6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgaW1hZ2VfdXJsOiBcIlwiIH0pfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC0yIC1yaWdodC0yIHctNiBoLTYgYmctcmVkLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPFggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDo0Mzg6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+IDpcblxuICAgICAgICAgICAgICAgIDxsYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjQ0MjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInctMjAgaC0yMCBib3JkZXItMiBib3JkZXItZGFzaGVkIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGN1cnNvci1wb2ludGVyIGhvdmVyOmJvcmRlci12aW9sZXQtNDAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxVcGxvYWQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDo0NDM6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LWdyYXktNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6NDQ0OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbWFnZVVwbG9hZH0gLz5cblxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDo0NTU6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtNlwiPlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6NDU2OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8U3dpdGNoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6NDU3OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtmb3JtRGF0YS5pc192ZWdldGFyaWFufVxuICAgICAgICAgICAgICAgIG9uQ2hlY2tlZENoYW5nZT17KGNoZWNrZWQpID0+IHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIGlzX3ZlZ2V0YXJpYW46IGNoZWNrZWQgfSl9IC8+XG5cbiAgICAgICAgICAgICAgICA8TGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDo0NjE6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+VmVnZXRhcmlhbjwvTGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6NDYzOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8U3dpdGNoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6NDY0OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtmb3JtRGF0YS5pc19zcGljeX1cbiAgICAgICAgICAgICAgICBvbkNoZWNrZWRDaGFuZ2U9eyhjaGVja2VkKSA9PiBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBpc19zcGljeTogY2hlY2tlZCB9KX0gLz5cblxuICAgICAgICAgICAgICAgIDxMYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjQ2ODoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5TcGljeTwvTGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6NDcwOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8U3dpdGNoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6NDcxOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtmb3JtRGF0YS5pc19hdmFpbGFibGV9XG4gICAgICAgICAgICAgICAgb25DaGVja2VkQ2hhbmdlPXsoY2hlY2tlZCkgPT4gc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgaXNfYXZhaWxhYmxlOiBjaGVja2VkIH0pfSAvPlxuXG4gICAgICAgICAgICAgICAgPExhYmVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6NDc1OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPkF2YWlsYWJsZTwvTGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8RGlhbG9nRm9vdGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6NDgwOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6NDgxOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdmFyaWFudD1cIm91dGxpbmVcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc0RpYWxvZ09wZW4oZmFsc2UpfT5cbiAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDo0ODQ6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2F2ZX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtpc1NhdmluZyB8fCAhZm9ybURhdGEubmFtZSB8fCAhZm9ybURhdGEucHJpY2UgfHwgIWZvcm1EYXRhLmNhdGVnb3J5fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLXZpb2xldC02MDAgdG8taW5kaWdvLTYwMFwiPlxuXG4gICAgICAgICAgICAgIHtpc1NhdmluZyA/ICdTYXZpbmcuLi4nIDogZWRpdGluZ0l0ZW0gPyAnVXBkYXRlJyA6ICdBZGQgSXRlbSd9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0RpYWxvZ0Zvb3Rlcj5cbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgPC9EaWFsb2c+XG5cbiAgICAgIHsvKiBEZWxldGUgQ29uZmlybWF0aW9uICovfVxuICAgICAgPEFsZXJ0RGlhbG9nIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6NDk2OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBvcGVuPXshIWRlbGV0ZUNvbmZpcm19IG9uT3BlbkNoYW5nZT17KCkgPT4gc2V0RGVsZXRlQ29uZmlybShudWxsKX0+XG4gICAgICAgIDxBbGVydERpYWxvZ0NvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDo0OTc6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgIDxBbGVydERpYWxvZ0hlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjQ5ODoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgPEFsZXJ0RGlhbG9nVGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDo0OTk6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+RGVsZXRlIE1lbnUgSXRlbTwvQWxlcnREaWFsb2dUaXRsZT5cbiAgICAgICAgICAgIDxBbGVydERpYWxvZ0Rlc2NyaXB0aW9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6NTAwOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJuYW1lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2RlbGV0ZUNvbmZpcm0/LmlkIHx8IGRlbGV0ZUNvbmZpcm0/Ll9pZH0+XG4gICAgICAgICAgICAgIEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgXCJ7ZGVsZXRlQ29uZmlybT8ubmFtZX1cIj8gVGhpcyBhY3Rpb24gY2Fubm90IGJlIHVuZG9uZS5cbiAgICAgICAgICAgIDwvQWxlcnREaWFsb2dEZXNjcmlwdGlvbj5cbiAgICAgICAgICA8L0FsZXJ0RGlhbG9nSGVhZGVyPlxuICAgICAgICAgIDxBbGVydERpYWxvZ0Zvb3RlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL01lbnVNYW5hZ2VtZW50OjUwNDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgPEFsZXJ0RGlhbG9nQ2FuY2VsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6NTA1OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPkNhbmNlbDwvQWxlcnREaWFsb2dDYW5jZWw+XG4gICAgICAgICAgICA8QWxlcnREaWFsb2dBY3Rpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9NZW51TWFuYWdlbWVudDo1MDY6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKGRlbGV0ZUNvbmZpcm0/LmlkKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC02MDAgaG92ZXI6YmctcmVkLTcwMFwiPlxuXG4gICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgPC9BbGVydERpYWxvZ0FjdGlvbj5cbiAgICAgICAgICA8L0FsZXJ0RGlhbG9nRm9vdGVyPlxuICAgICAgICA8L0FsZXJ0RGlhbG9nQ29udGVudD5cbiAgICAgIDwvQWxlcnREaWFsb2c+XG4gICAgPC9kaXY+KTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51TWFuYWdlbWVudCgpIHtcbiAgcmV0dXJuIChcbiAgICA8RGFzaGJvYXJkTGF5b3V0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6NTIxOjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICA8TWVudU1hbmFnZW1lbnRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTWVudU1hbmFnZW1lbnQ6NTIyOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz5cbiAgICA8L0Rhc2hib2FyZExheW91dD4pO1xuXG59Il0sImZpbGUiOiIvYXBwL3NyYy9wYWdlcy9NZW51TWFuYWdlbWVudC5qc3gifQ==