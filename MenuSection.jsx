import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/dashboard/MenuSection.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/dashboard/MenuSection.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=79425e35";
import { base44 } from "/src/api/base44Client.js";
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  Eye,
  EyeOff,
  Leaf,
  Flame,
  MoreVertical,
  Upload,
  X,
  PackageX,
  Settings2
} from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
import CategoryManager from "/src/components/dashboard/CategoryManager.jsx";
import ModifiersEditor from "/src/components/dashboard/ModifiersEditor.jsx";
import VariationsEditor from "/src/components/dashboard/VariationsEditor.jsx";
import MenuAIAssistant from "/src/components/dashboard/MenuAIAssistant.jsx";
import SmartMenuBuilder from "/src/components/dashboard/SmartMenuBuilder.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "/src/components/ui/card.jsx";
import { Button } from "/src/components/ui/button.jsx";
import { Input } from "/src/components/ui/input.jsx";
import { Label } from "/src/components/ui/label.jsx";
import { Textarea } from "/src/components/ui/textarea.jsx";
import { Badge } from "/src/components/ui/badge.jsx";
import { Switch } from "/src/components/ui/switch.jsx";
import { Tabs, TabsList, TabsTrigger } from "/src/components/ui/tabs.jsx";
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
export default function MenuSection({ restaurant, menuItems, reloadMenuItems, orders, id }) {
  _s();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCategoryManagerOpen, setIsCategoryManagerOpen] = useState(false);
  const [isSmartBuilderOpen, setIsSmartBuilderOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [customCategories, setCustomCategories] = useState([]);
  const [showDeleteAllDialog, setShowDeleteAllDialog] = useState(false);
  const [deleteAllEmail, setDeleteAllEmail] = useState("");
  const [deleteAllError, setDeleteAllError] = useState("");
  const [isDeletingAll, setIsDeletingAll] = useState(false);
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
    is_out_of_stock: false,
    preparation_time: "",
    modifiers: [],
    variations: [],
    allow_special_instructions: true
  });
  useEffect(() => {
    loadCustomCategories();
  }, [restaurant]);
  const loadCustomCategories = async () => {
    if (!restaurant?.restaurant_id) return;
    const cats = await base44.entities.MenuCategory.filter(
      { restaurant_id: restaurant.restaurant_id },
      "sort_order"
    );
    setCustomCategories(cats);
  };
  const categories = [...new Set(menuItems.map((item) => item.category))].filter(Boolean);
  const customCategoryNames = customCategories.map((c) => c.name);
  const allCategories = [.../* @__PURE__ */ new Set([...customCategoryNames, ...categories])];
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
    if (menuItems.length === 0) {
      setIsSmartBuilderOpen(true);
    } else {
      setIsSmartBuilderOpen(true);
    }
  };
  const handleManualAdd = () => {
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
      is_out_of_stock: false,
      preparation_time: "",
      modifiers: [],
      variations: [],
      allow_special_instructions: true
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
      is_out_of_stock: item.is_out_of_stock || false,
      preparation_time: item.preparation_time?.toString() || "",
      modifiers: item.modifiers || [],
      variations: item.variations || [],
      allow_special_instructions: item.allow_special_instructions !== false
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
    await reloadMenuItems();
    setIsDialogOpen(false);
    setIsSaving(false);
  };
  const handleDelete = async (id2) => {
    await base44.entities.MenuItem.delete(id2);
    await reloadMenuItems();
    setDeleteConfirm(null);
  };
  const toggleAvailability = async (item) => {
    await base44.entities.MenuItem.update(item.id, {
      is_available: !item.is_available
    });
    await reloadMenuItems();
  };
  const toggleOutOfStock = async (item) => {
    await base44.entities.MenuItem.update(item.id, {
      is_out_of_stock: !item.is_out_of_stock
    });
    await reloadMenuItems();
  };
  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    setFormData({ ...formData, image_url: file_url });
  };
  const handleDeleteAllMenu = async () => {
    setDeleteAllError("");
    setIsDeletingAll(true);
    try {
      const user = await base44.auth.me();
      if (deleteAllEmail.toLowerCase().trim() !== user.email.toLowerCase().trim()) {
        setDeleteAllError("Email does not match your account email");
        setIsDeletingAll(false);
        return;
      }
      for (const item of menuItems) {
        await base44.entities.MenuItem.delete(item.id);
      }
      await reloadMenuItems();
      setShowDeleteAllDialog(false);
      setDeleteAllEmail("");
    } catch (error) {
      setDeleteAllError("Failed to delete menu items");
    }
    setIsDeletingAll(false);
  };
  return /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      "data-source-location": "components/dashboard/MenuSection:246:4",
      "data-dynamic-content": "true",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "space-y-6",
      children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:253:6", "data-dynamic-content": "true", className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:254:8", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "components/dashboard/MenuSection:255:10", "data-dynamic-content": "false", className: "text-xl font-bold text-gray-900", children: "Menu Items" }, void 0, false, {
              fileName: "/app/src/components/dashboard/MenuSection.jsx",
              lineNumber: 274,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/MenuSection:256:10", "data-dynamic-content": "true", className: "text-gray-500", children: [
              menuItems.length,
              " items in your menu"
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/MenuSection.jsx",
              lineNumber: 275,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/MenuSection.jsx",
            lineNumber: 273,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:258:8", "data-dynamic-content": "true", className: "flex gap-2 flex-wrap", children: [
            menuItems.length > 0 && /* @__PURE__ */ jsxDEV(
              Button,
              {
                "data-source-location": "components/dashboard/MenuSection:260:12",
                "data-dynamic-content": "true",
                onClick: () => setShowDeleteAllDialog(true),
                variant: "outline",
                className: "text-red-600 border-red-200 hover:bg-red-50",
                children: [
                  /* @__PURE__ */ jsxDEV(Trash2, { "data-source-location": "components/dashboard/MenuSection:265:14", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/MenuSection.jsx",
                    lineNumber: 284,
                    columnNumber: 15
                  }, this),
                  "Delete All Menu"
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 279,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              MenuAIAssistant,
              {
                "data-source-location": "components/dashboard/MenuSection:269:10",
                "data-dynamic-content": "true",
                restaurant,
                menuItems,
                orders: orders || [],
                onSuggestedItem: (suggestion) => {
                  setFormData({
                    name: suggestion.name,
                    description: suggestion.description,
                    price: suggestion.price_range.includes("-") ? suggestion.price_range.split("-")[0].replace(/[^\d]/g, "") : "299",
                    category: suggestion.category,
                    image_url: "",
                    is_vegetarian: false,
                    is_vegan: false,
                    is_spicy: false,
                    is_available: true,
                    is_out_of_stock: false,
                    preparation_time: "",
                    modifiers: [],
                    variations: [],
                    allow_special_instructions: true
                  });
                  setIsDialogOpen(true);
                },
                onCategoryAssigned: reloadMenuItems,
                onDescriptionGenerated: async (item, description) => {
                  await base44.entities.MenuItem.update(item.id, { description });
                  await reloadMenuItems();
                },
                onPriceOptimized: reloadMenuItems
              },
              void 0,
              false,
              {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 288,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "components/dashboard/MenuSection:301:10", "data-dynamic-content": "true", onClick: () => setIsCategoryManagerOpen(true), variant: "outline", children: [
              /* @__PURE__ */ jsxDEV(Settings2, { "data-source-location": "components/dashboard/MenuSection:302:12", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 321,
                columnNumber: 13
              }, this),
              "Manage Categories"
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/MenuSection.jsx",
              lineNumber: 320,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "components/dashboard/MenuSection:305:10", "data-dynamic-content": "true", onClick: handleAddNew, className: "bg-gradient-to-r from-orange-600 to-orange-500", children: [
              /* @__PURE__ */ jsxDEV(Plus, { "data-source-location": "components/dashboard/MenuSection:306:12", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 325,
                columnNumber: 13
              }, this),
              "Add Menu Item"
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/MenuSection.jsx",
              lineNumber: 324,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/MenuSection.jsx",
            lineNumber: 277,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/MenuSection.jsx",
          lineNumber: 272,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/MenuSection:313:6", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/MenuSection:314:8", "data-dynamic-content": "true", className: "p-4", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:315:10", "data-dynamic-content": "true", className: "flex flex-col md:flex-row gap-4", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:316:12", "data-dynamic-content": "true", className: "flex-1 relative", children: [
            /* @__PURE__ */ jsxDEV(Search, { "data-source-location": "components/dashboard/MenuSection:317:14", "data-dynamic-content": "false", className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }, void 0, false, {
              fileName: "/app/src/components/dashboard/MenuSection.jsx",
              lineNumber: 336,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(
              Input,
              {
                "data-source-location": "components/dashboard/MenuSection:318:14",
                "data-dynamic-content": "true",
                placeholder: "Search menu items...",
                value: searchQuery,
                onChange: (e) => setSearchQuery(e.target.value),
                className: "pl-9"
              },
              void 0,
              false,
              {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 337,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/MenuSection.jsx",
            lineNumber: 335,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(Tabs, { "data-source-location": "components/dashboard/MenuSection:325:12", "data-dynamic-content": "true", value: selectedCategory, onValueChange: setSelectedCategory, children: /* @__PURE__ */ jsxDEV(TabsList, { "data-source-location": "components/dashboard/MenuSection:326:14", "data-dynamic-content": "true", className: "bg-gray-100 flex-wrap h-auto", children: [
            /* @__PURE__ */ jsxDEV(TabsTrigger, { "data-source-location": "components/dashboard/MenuSection:327:16", "data-dynamic-content": "false", value: "all", children: "All" }, void 0, false, {
              fileName: "/app/src/components/dashboard/MenuSection.jsx",
              lineNumber: 346,
              columnNumber: 17
            }, this),
            categories.slice(0, 5).map(
              (cat) => /* @__PURE__ */ jsxDEV(TabsTrigger, { "data-source-location": "components/dashboard/MenuSection:329:18", "data-dynamic-content": "true", value: cat, "data-collection-item-field": "cat", children: cat }, cat, false, {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 348,
                columnNumber: 17
              }, this)
            )
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/MenuSection.jsx",
            lineNumber: 345,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/MenuSection.jsx",
            lineNumber: 344,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/MenuSection.jsx",
          lineNumber: 334,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "/app/src/components/dashboard/MenuSection.jsx",
          lineNumber: 333,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "/app/src/components/dashboard/MenuSection.jsx",
          lineNumber: 332,
          columnNumber: 7
        }, this),
        Object.keys(groupedItems).length === 0 ? /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/MenuSection:339:8", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/MenuSection:340:10", "data-dynamic-content": "true", className: "py-16 text-center", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:341:12", "data-dynamic-content": "false", className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxDEV(Plus, { "data-source-location": "components/dashboard/MenuSection:342:14", "data-dynamic-content": "false", className: "w-8 h-8 text-gray-400" }, void 0, false, {
            fileName: "/app/src/components/dashboard/MenuSection.jsx",
            lineNumber: 361,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/MenuSection.jsx",
            lineNumber: 360,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "components/dashboard/MenuSection:344:12", "data-dynamic-content": "false", className: "text-lg font-medium text-gray-900 mb-2", children: "No menu items yet" }, void 0, false, {
            fileName: "/app/src/components/dashboard/MenuSection.jsx",
            lineNumber: 363,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/MenuSection:345:12", "data-dynamic-content": "false", className: "text-gray-500 mb-4", children: "Start by adding your first menu item" }, void 0, false, {
            fileName: "/app/src/components/dashboard/MenuSection.jsx",
            lineNumber: 364,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "components/dashboard/MenuSection:346:12", "data-dynamic-content": "true", onClick: handleAddNew, children: "Add Menu Item" }, void 0, false, {
            fileName: "/app/src/components/dashboard/MenuSection.jsx",
            lineNumber: 365,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/MenuSection.jsx",
          lineNumber: 359,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "/app/src/components/dashboard/MenuSection.jsx",
          lineNumber: 358,
          columnNumber: 7
        }, this) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:350:8", "data-dynamic-content": "true", className: "space-y-6", children: Object.entries(groupedItems).map(
          ([category, items]) => /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/MenuSection:352:12", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "components/dashboard/MenuSection:353:14", "data-dynamic-content": "true", className: "pb-2", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "components/dashboard/MenuSection:354:16", "data-dynamic-content": "true", className: "text-lg flex items-center justify-between", children: [
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/MenuSection:355:18", "data-dynamic-content": "true", "data-collection-item-field": "category", children: category }, void 0, false, {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 374,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "components/dashboard/MenuSection:356:18", "data-dynamic-content": "true", variant: "secondary", children: [
                items.length,
                " items"
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 375,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/MenuSection.jsx",
              lineNumber: 373,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/MenuSection.jsx",
              lineNumber: 372,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/MenuSection:359:14", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:360:16", "data-dynamic-content": "true", className: "divide-y", children: items.map(
              (item) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:362:20", "data-dynamic-content": "true", className: "py-4 flex items-center gap-4", "data-collection-item-id": item?.id, children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:363:22", "data-dynamic-content": "true", className: "w-16 h-16 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0", children: item.image_url ? /* @__PURE__ */ jsxDEV("img", { "data-source-location": "components/dashboard/MenuSection:365:26", "data-dynamic-content": "true", src: item.image_url, alt: item.name, className: "w-full h-full object-cover" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/MenuSection.jsx",
                  lineNumber: 384,
                  columnNumber: 19
                }, this) : /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:367:26", "data-dynamic-content": "false", className: "w-full h-full flex items-center justify-center text-gray-400", children: "🍽️" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/MenuSection.jsx",
                  lineNumber: 386,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "/app/src/components/dashboard/MenuSection.jsx",
                  lineNumber: 382,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:370:22", "data-dynamic-content": "true", className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:371:24", "data-dynamic-content": "true", className: "flex items-center gap-2 flex-wrap", "data-collection-item-field": "is_vegetarian", "data-collection-item-id": item?.id, children: [
                    /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "components/dashboard/MenuSection:372:26", "data-dynamic-content": "true", className: `font-medium ${!item.is_available ? "text-gray-400" : "text-gray-900"}`, "data-collection-item-field": "name", "data-collection-item-id": item?.id, children: item.name }, void 0, false, {
                      fileName: "/app/src/components/dashboard/MenuSection.jsx",
                      lineNumber: 391,
                      columnNumber: 27
                    }, this),
                    item.is_vegetarian && /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "components/dashboard/MenuSection:376:28", "data-dynamic-content": "false", className: "bg-green-100 text-green-700 text-xs", children: [
                      /* @__PURE__ */ jsxDEV(Leaf, { "data-source-location": "components/dashboard/MenuSection:377:30", "data-dynamic-content": "false", className: "w-3 h-3 mr-1" }, void 0, false, {
                        fileName: "/app/src/components/dashboard/MenuSection.jsx",
                        lineNumber: 396,
                        columnNumber: 31
                      }, this),
                      " Veg"
                    ] }, void 0, true, {
                      fileName: "/app/src/components/dashboard/MenuSection.jsx",
                      lineNumber: 395,
                      columnNumber: 21
                    }, this),
                    item.is_spicy && /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "components/dashboard/MenuSection:381:28", "data-dynamic-content": "false", className: "bg-red-100 text-red-700 text-xs", children: [
                      /* @__PURE__ */ jsxDEV(Flame, { "data-source-location": "components/dashboard/MenuSection:382:30", "data-dynamic-content": "false", className: "w-3 h-3 mr-1" }, void 0, false, {
                        fileName: "/app/src/components/dashboard/MenuSection.jsx",
                        lineNumber: 401,
                        columnNumber: 31
                      }, this),
                      " Spicy"
                    ] }, void 0, true, {
                      fileName: "/app/src/components/dashboard/MenuSection.jsx",
                      lineNumber: 400,
                      columnNumber: 21
                    }, this),
                    !item.is_available && /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "components/dashboard/MenuSection:386:28", "data-dynamic-content": "false", variant: "secondary", className: "text-xs", children: "Unavailable" }, void 0, false, {
                      fileName: "/app/src/components/dashboard/MenuSection.jsx",
                      lineNumber: 405,
                      columnNumber: 21
                    }, this),
                    item.is_out_of_stock && /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "components/dashboard/MenuSection:389:28", "data-dynamic-content": "false", className: "bg-red-100 text-red-700 text-xs", children: [
                      /* @__PURE__ */ jsxDEV(PackageX, { "data-source-location": "components/dashboard/MenuSection:390:30", "data-dynamic-content": "false", className: "w-3 h-3 mr-1" }, void 0, false, {
                        fileName: "/app/src/components/dashboard/MenuSection.jsx",
                        lineNumber: 409,
                        columnNumber: 31
                      }, this),
                      " Out of Stock"
                    ] }, void 0, true, {
                      fileName: "/app/src/components/dashboard/MenuSection.jsx",
                      lineNumber: 408,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/src/components/dashboard/MenuSection.jsx",
                    lineNumber: 390,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/MenuSection:394:24", "data-dynamic-content": "true", className: "text-sm text-gray-500 truncate", "data-collection-item-field": "description", "data-collection-item-id": item?.id, children: item.description }, void 0, false, {
                    fileName: "/app/src/components/dashboard/MenuSection.jsx",
                    lineNumber: 413,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/MenuSection.jsx",
                  lineNumber: 389,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:396:22", "data-dynamic-content": "true", className: "text-right", "data-collection-item-field": "preparation_time", "data-collection-item-id": item?.id, children: [
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/MenuSection:397:24", "data-dynamic-content": "true", className: "font-semibold text-gray-900", "data-collection-item-field": "price", "data-collection-item-id": item?.id, children: [
                    "₹",
                    item.price
                  ] }, void 0, true, {
                    fileName: "/app/src/components/dashboard/MenuSection.jsx",
                    lineNumber: 416,
                    columnNumber: 25
                  }, this),
                  item.preparation_time && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/MenuSection:399:26", "data-dynamic-content": "true", className: "text-xs text-gray-500", "data-collection-item-field": "preparation_time", "data-collection-item-id": item?.id, children: [
                    item.preparation_time,
                    " mins"
                  ] }, void 0, true, {
                    fileName: "/app/src/components/dashboard/MenuSection.jsx",
                    lineNumber: 418,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/MenuSection.jsx",
                  lineNumber: 415,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:402:22", "data-dynamic-content": "true", className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxDEV(
                    Button,
                    {
                      "data-source-location": "components/dashboard/MenuSection:403:24",
                      "data-dynamic-content": "true",
                      variant: "ghost",
                      size: "icon",
                      onClick: () => toggleAvailability(item),
                      className: item.is_available ? "text-green-600" : "text-gray-400",
                      children: item.is_available ? /* @__PURE__ */ jsxDEV(Eye, { "data-source-location": "components/dashboard/MenuSection:409:47", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                        fileName: "/app/src/components/dashboard/MenuSection.jsx",
                        lineNumber: 428,
                        columnNumber: 48
                      }, this) : /* @__PURE__ */ jsxDEV(EyeOff, { "data-source-location": "components/dashboard/MenuSection:409:77", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                        fileName: "/app/src/components/dashboard/MenuSection.jsx",
                        lineNumber: 428,
                        columnNumber: 170
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/src/components/dashboard/MenuSection.jsx",
                      lineNumber: 422,
                      columnNumber: 25
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV(DropdownMenu, { "data-source-location": "components/dashboard/MenuSection:411:24", "data-dynamic-content": "true", children: [
                    /* @__PURE__ */ jsxDEV(DropdownMenuTrigger, { "data-source-location": "components/dashboard/MenuSection:412:26", "data-dynamic-content": "false", asChild: true, children: /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "components/dashboard/MenuSection:413:28", "data-dynamic-content": "false", variant: "ghost", size: "icon", children: /* @__PURE__ */ jsxDEV(MoreVertical, { "data-source-location": "components/dashboard/MenuSection:414:30", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                      fileName: "/app/src/components/dashboard/MenuSection.jsx",
                      lineNumber: 433,
                      columnNumber: 31
                    }, this) }, void 0, false, {
                      fileName: "/app/src/components/dashboard/MenuSection.jsx",
                      lineNumber: 432,
                      columnNumber: 29
                    }, this) }, void 0, false, {
                      fileName: "/app/src/components/dashboard/MenuSection.jsx",
                      lineNumber: 431,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ jsxDEV(DropdownMenuContent, { "data-source-location": "components/dashboard/MenuSection:417:26", "data-dynamic-content": "true", align: "end", children: [
                      /* @__PURE__ */ jsxDEV(DropdownMenuItem, { "data-source-location": "components/dashboard/MenuSection:418:28", "data-dynamic-content": "true", onClick: () => handleEdit(item), children: [
                        /* @__PURE__ */ jsxDEV(Edit2, { "data-source-location": "components/dashboard/MenuSection:419:30", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
                          fileName: "/app/src/components/dashboard/MenuSection.jsx",
                          lineNumber: 438,
                          columnNumber: 31
                        }, this),
                        " Edit"
                      ] }, void 0, true, {
                        fileName: "/app/src/components/dashboard/MenuSection.jsx",
                        lineNumber: 437,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ jsxDEV(DropdownMenuItem, { "data-source-location": "components/dashboard/MenuSection:421:28", "data-dynamic-content": "true", onClick: () => toggleOutOfStock(item), children: [
                        /* @__PURE__ */ jsxDEV(PackageX, { "data-source-location": "components/dashboard/MenuSection:422:30", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
                          fileName: "/app/src/components/dashboard/MenuSection.jsx",
                          lineNumber: 441,
                          columnNumber: 31
                        }, this),
                        item.is_out_of_stock ? "Mark In Stock" : "Mark Out of Stock"
                      ] }, void 0, true, {
                        fileName: "/app/src/components/dashboard/MenuSection.jsx",
                        lineNumber: 440,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ jsxDEV(
                        DropdownMenuItem,
                        {
                          "data-source-location": "components/dashboard/MenuSection:425:28",
                          "data-dynamic-content": "true",
                          onClick: () => setDeleteConfirm(item),
                          className: "text-red-600",
                          children: [
                            /* @__PURE__ */ jsxDEV(Trash2, { "data-source-location": "components/dashboard/MenuSection:429:30", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
                              fileName: "/app/src/components/dashboard/MenuSection.jsx",
                              lineNumber: 448,
                              columnNumber: 31
                            }, this),
                            " Delete"
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "/app/src/components/dashboard/MenuSection.jsx",
                          lineNumber: 444,
                          columnNumber: 29
                        },
                        this
                      )
                    ] }, void 0, true, {
                      fileName: "/app/src/components/dashboard/MenuSection.jsx",
                      lineNumber: 436,
                      columnNumber: 27
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/src/components/dashboard/MenuSection.jsx",
                    lineNumber: 430,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/components/dashboard/MenuSection.jsx",
                  lineNumber: 421,
                  columnNumber: 23
                }, this)
              ] }, item.id, true, {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 381,
                columnNumber: 15
              }, this)
            ) }, void 0, false, {
              fileName: "/app/src/components/dashboard/MenuSection.jsx",
              lineNumber: 379,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/MenuSection.jsx",
              lineNumber: 378,
              columnNumber: 15
            }, this)
          ] }, category, true, {
            fileName: "/app/src/components/dashboard/MenuSection.jsx",
            lineNumber: 371,
            columnNumber: 9
          }, this)
        ) }, void 0, false, {
          fileName: "/app/src/components/dashboard/MenuSection.jsx",
          lineNumber: 369,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(
          SmartMenuBuilder,
          {
            "data-source-location": "components/dashboard/MenuSection:444:6",
            "data-dynamic-content": "true",
            isOpen: isSmartBuilderOpen,
            onClose: () => setIsSmartBuilderOpen(false),
            restaurant,
            existingItemsCount: menuItems.length,
            onMenuCreated: reloadMenuItems,
            onManualAdd: handleManualAdd
          },
          void 0,
          false,
          {
            fileName: "/app/src/components/dashboard/MenuSection.jsx",
            lineNumber: 463,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(Dialog, { "data-source-location": "components/dashboard/MenuSection:454:6", "data-dynamic-content": "true", open: isCategoryManagerOpen, onOpenChange: setIsCategoryManagerOpen, children: /* @__PURE__ */ jsxDEV(DialogContent, { "data-source-location": "components/dashboard/MenuSection:455:8", "data-dynamic-content": "true", className: "max-w-2xl max-h-[90vh] overflow-y-auto", children: [
          /* @__PURE__ */ jsxDEV(DialogHeader, { "data-source-location": "components/dashboard/MenuSection:456:10", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(DialogTitle, { "data-source-location": "components/dashboard/MenuSection:457:12", "data-dynamic-content": "false", children: "Manage Menu Categories" }, void 0, false, {
            fileName: "/app/src/components/dashboard/MenuSection.jsx",
            lineNumber: 476,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/MenuSection.jsx",
            lineNumber: 475,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV(CategoryManager, { "data-source-location": "components/dashboard/MenuSection:459:10", "data-dynamic-content": "true", restaurant, onCategoriesUpdated: loadCustomCategories }, void 0, false, {
            fileName: "/app/src/components/dashboard/MenuSection.jsx",
            lineNumber: 478,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/MenuSection.jsx",
          lineNumber: 474,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "/app/src/components/dashboard/MenuSection.jsx",
          lineNumber: 473,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(Dialog, { "data-source-location": "components/dashboard/MenuSection:464:6", "data-dynamic-content": "true", open: isDialogOpen, onOpenChange: setIsDialogOpen, children: /* @__PURE__ */ jsxDEV(DialogContent, { "data-source-location": "components/dashboard/MenuSection:465:8", "data-dynamic-content": "true", className: "max-w-3xl max-h-[90vh] overflow-y-auto", children: [
          /* @__PURE__ */ jsxDEV(DialogHeader, { "data-source-location": "components/dashboard/MenuSection:466:10", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(DialogTitle, { "data-source-location": "components/dashboard/MenuSection:467:12", "data-dynamic-content": "true", children: editingItem ? "Edit Menu Item" : "Add Menu Item" }, void 0, false, {
            fileName: "/app/src/components/dashboard/MenuSection.jsx",
            lineNumber: 486,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/MenuSection.jsx",
            lineNumber: 485,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:469:10", "data-dynamic-content": "true", className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:470:12", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "components/dashboard/MenuSection:471:14", "data-dynamic-content": "false", htmlFor: "name", children: "Item Name *" }, void 0, false, {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 490,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV(
                Input,
                {
                  "data-source-location": "components/dashboard/MenuSection:472:14",
                  "data-dynamic-content": "true",
                  id: "name",
                  value: formData.name,
                  onChange: (e) => setFormData({ ...formData, name: e.target.value }),
                  placeholder: "e.g., Butter Chicken"
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/dashboard/MenuSection.jsx",
                  lineNumber: 491,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/MenuSection.jsx",
              lineNumber: 489,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:479:12", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "components/dashboard/MenuSection:480:14", "data-dynamic-content": "false", htmlFor: "description", children: "Description" }, void 0, false, {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 499,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV(
                Textarea,
                {
                  "data-source-location": "components/dashboard/MenuSection:481:14",
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
                  fileName: "/app/src/components/dashboard/MenuSection.jsx",
                  lineNumber: 500,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/MenuSection.jsx",
              lineNumber: 498,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:489:12", "data-dynamic-content": "true", className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:490:14", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "components/dashboard/MenuSection:491:16", "data-dynamic-content": "false", htmlFor: "price", children: "Price (₹) *" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/MenuSection.jsx",
                  lineNumber: 510,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV(
                  Input,
                  {
                    "data-source-location": "components/dashboard/MenuSection:492:16",
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
                    fileName: "/app/src/components/dashboard/MenuSection.jsx",
                    lineNumber: 511,
                    columnNumber: 17
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 509,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:500:14", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "components/dashboard/MenuSection:501:16", "data-dynamic-content": "false", htmlFor: "category", children: "Category *" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/MenuSection.jsx",
                  lineNumber: 520,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV(
                  Select,
                  {
                    "data-source-location": "components/dashboard/MenuSection:502:16",
                    "data-dynamic-content": "true",
                    value: formData.category,
                    onValueChange: (value) => setFormData({ ...formData, category: value }),
                    children: [
                      /* @__PURE__ */ jsxDEV(SelectTrigger, { "data-source-location": "components/dashboard/MenuSection:506:18", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(SelectValue, { "data-source-location": "components/dashboard/MenuSection:507:20", "data-dynamic-content": "false", placeholder: "Select category" }, void 0, false, {
                        fileName: "/app/src/components/dashboard/MenuSection.jsx",
                        lineNumber: 526,
                        columnNumber: 21
                      }, this) }, void 0, false, {
                        fileName: "/app/src/components/dashboard/MenuSection.jsx",
                        lineNumber: 525,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ jsxDEV(SelectContent, { "data-source-location": "components/dashboard/MenuSection:509:18", "data-dynamic-content": "true", children: allCategories.map(
                        (cat, __arrIdx__) => /* @__PURE__ */ jsxDEV(SelectItem, { "data-source-location": "components/dashboard/MenuSection:511:22", "data-dynamic-content": "true", value: cat, "data-arr-index": __arrIdx__, "data-arr-variable-name": "allCategories", children: cat }, cat, false, {
                          fileName: "/app/src/components/dashboard/MenuSection.jsx",
                          lineNumber: 530,
                          columnNumber: 21
                        }, this)
                      ) }, void 0, false, {
                        fileName: "/app/src/components/dashboard/MenuSection.jsx",
                        lineNumber: 528,
                        columnNumber: 19
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/src/components/dashboard/MenuSection.jsx",
                    lineNumber: 521,
                    columnNumber: 17
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 519,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/MenuSection.jsx",
              lineNumber: 508,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:517:12", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "components/dashboard/MenuSection:518:14", "data-dynamic-content": "false", htmlFor: "preparation_time", children: "Preparation Time (mins)" }, void 0, false, {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 537,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV(
                Input,
                {
                  "data-source-location": "components/dashboard/MenuSection:519:14",
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
                  fileName: "/app/src/components/dashboard/MenuSection.jsx",
                  lineNumber: 538,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/MenuSection.jsx",
              lineNumber: 536,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:527:12", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "components/dashboard/MenuSection:528:14", "data-dynamic-content": "false", children: "Item Image" }, void 0, false, {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 547,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:529:14", "data-dynamic-content": "true", className: "mt-1 flex items-center gap-4", children: formData.image_url ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:531:18", "data-dynamic-content": "true", className: "relative w-20 h-20", "data-collection-item-field": "image_url", "data-collection-item-id": formData?.id || formData?._id, children: [
                /* @__PURE__ */ jsxDEV("img", { "data-source-location": "components/dashboard/MenuSection:532:20", "data-dynamic-content": "true", src: formData.image_url, alt: "Preview", className: "w-full h-full object-cover rounded-lg" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/MenuSection.jsx",
                  lineNumber: 551,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    "data-source-location": "components/dashboard/MenuSection:533:20",
                    "data-dynamic-content": "true",
                    onClick: () => setFormData({ ...formData, image_url: "" }),
                    className: "absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center",
                    children: /* @__PURE__ */ jsxDEV(X, { "data-source-location": "components/dashboard/MenuSection:537:22", "data-dynamic-content": "false", className: "w-3 h-3" }, void 0, false, {
                      fileName: "/app/src/components/dashboard/MenuSection.jsx",
                      lineNumber: 556,
                      columnNumber: 23
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/components/dashboard/MenuSection.jsx",
                    lineNumber: 552,
                    columnNumber: 21
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 550,
                columnNumber: 17
              }, this) : /* @__PURE__ */ jsxDEV("label", { "data-source-location": "components/dashboard/MenuSection:541:18", "data-dynamic-content": "true", className: "w-20 h-20 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-orange-400", children: [
                /* @__PURE__ */ jsxDEV(Upload, { "data-source-location": "components/dashboard/MenuSection:542:20", "data-dynamic-content": "false", className: "w-6 h-6 text-gray-400" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/MenuSection.jsx",
                  lineNumber: 561,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("input", { "data-source-location": "components/dashboard/MenuSection:543:20", "data-dynamic-content": "true", type: "file", accept: "image/*", className: "hidden", onChange: handleImageUpload }, void 0, false, {
                  fileName: "/app/src/components/dashboard/MenuSection.jsx",
                  lineNumber: 562,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 560,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 548,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/MenuSection.jsx",
              lineNumber: 546,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:548:12", "data-dynamic-content": "true", className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:549:14", "data-dynamic-content": "true", className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxDEV(
                  Switch,
                  {
                    "data-source-location": "components/dashboard/MenuSection:550:16",
                    "data-dynamic-content": "true",
                    checked: formData.is_vegetarian,
                    onCheckedChange: (checked) => setFormData({ ...formData, is_vegetarian: checked })
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/components/dashboard/MenuSection.jsx",
                    lineNumber: 569,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "components/dashboard/MenuSection:554:16", "data-dynamic-content": "false", children: "Vegetarian" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/MenuSection.jsx",
                  lineNumber: 573,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 568,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:556:14", "data-dynamic-content": "true", className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxDEV(
                  Switch,
                  {
                    "data-source-location": "components/dashboard/MenuSection:557:16",
                    "data-dynamic-content": "true",
                    checked: formData.is_spicy,
                    onCheckedChange: (checked) => setFormData({ ...formData, is_spicy: checked })
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/components/dashboard/MenuSection.jsx",
                    lineNumber: 576,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "components/dashboard/MenuSection:561:16", "data-dynamic-content": "false", children: "Spicy" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/MenuSection.jsx",
                  lineNumber: 580,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 575,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:563:14", "data-dynamic-content": "true", className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxDEV(
                  Switch,
                  {
                    "data-source-location": "components/dashboard/MenuSection:564:16",
                    "data-dynamic-content": "true",
                    checked: formData.is_available,
                    onCheckedChange: (checked) => setFormData({ ...formData, is_available: checked })
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/components/dashboard/MenuSection.jsx",
                    lineNumber: 583,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "components/dashboard/MenuSection:568:16", "data-dynamic-content": "false", children: "Available" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/MenuSection.jsx",
                  lineNumber: 587,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 582,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:570:14", "data-dynamic-content": "true", className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxDEV(
                  Switch,
                  {
                    "data-source-location": "components/dashboard/MenuSection:571:16",
                    "data-dynamic-content": "true",
                    checked: formData.is_out_of_stock,
                    onCheckedChange: (checked) => setFormData({ ...formData, is_out_of_stock: checked })
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/components/dashboard/MenuSection.jsx",
                    lineNumber: 590,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "components/dashboard/MenuSection:575:16", "data-dynamic-content": "false", children: "Out of Stock" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/MenuSection.jsx",
                  lineNumber: 594,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 589,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:577:14", "data-dynamic-content": "true", className: "flex items-center gap-2 col-span-2", children: [
                /* @__PURE__ */ jsxDEV(
                  Switch,
                  {
                    "data-source-location": "components/dashboard/MenuSection:578:16",
                    "data-dynamic-content": "true",
                    checked: formData.allow_special_instructions,
                    onCheckedChange: (checked) => setFormData({ ...formData, allow_special_instructions: checked })
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/components/dashboard/MenuSection.jsx",
                    lineNumber: 597,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "components/dashboard/MenuSection:582:16", "data-dynamic-content": "false", children: "Allow Special Instructions" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/MenuSection.jsx",
                  lineNumber: 601,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 596,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/MenuSection.jsx",
              lineNumber: 567,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:587:12", "data-dynamic-content": "true", className: "border-t pt-4", children: /* @__PURE__ */ jsxDEV(
              ModifiersEditor,
              {
                "data-source-location": "components/dashboard/MenuSection:588:14",
                "data-dynamic-content": "true",
                modifiers: formData.modifiers,
                onChange: (modifiers) => setFormData({ ...formData, modifiers })
              },
              void 0,
              false,
              {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 607,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "/app/src/components/dashboard/MenuSection.jsx",
              lineNumber: 606,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:595:12", "data-dynamic-content": "true", className: "border-t pt-4", children: /* @__PURE__ */ jsxDEV(
              VariationsEditor,
              {
                "data-source-location": "components/dashboard/MenuSection:596:14",
                "data-dynamic-content": "true",
                variations: formData.variations,
                onChange: (variations) => setFormData({ ...formData, variations })
              },
              void 0,
              false,
              {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 615,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "/app/src/components/dashboard/MenuSection.jsx",
              lineNumber: 614,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/MenuSection.jsx",
            lineNumber: 488,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV(DialogFooter, { "data-source-location": "components/dashboard/MenuSection:602:10", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "components/dashboard/MenuSection:603:12", "data-dynamic-content": "true", variant: "outline", onClick: () => setIsDialogOpen(false), children: "Cancel" }, void 0, false, {
              fileName: "/app/src/components/dashboard/MenuSection.jsx",
              lineNumber: 622,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(
              Button,
              {
                "data-source-location": "components/dashboard/MenuSection:604:12",
                "data-dynamic-content": "true",
                onClick: handleSave,
                disabled: isSaving || !formData.name || !formData.price || !formData.category,
                className: "bg-gradient-to-r from-orange-600 to-orange-500",
                children: isSaving ? "Saving..." : editingItem ? "Update" : "Add Item"
              },
              void 0,
              false,
              {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 623,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/MenuSection.jsx",
            lineNumber: 621,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/MenuSection.jsx",
          lineNumber: 484,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "/app/src/components/dashboard/MenuSection.jsx",
          lineNumber: 483,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(Dialog, { "data-source-location": "components/dashboard/MenuSection:616:6", "data-dynamic-content": "true", open: showDeleteAllDialog, onOpenChange: setShowDeleteAllDialog, children: /* @__PURE__ */ jsxDEV(DialogContent, { "data-source-location": "components/dashboard/MenuSection:617:8", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV(DialogHeader, { "data-source-location": "components/dashboard/MenuSection:618:10", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(DialogTitle, { "data-source-location": "components/dashboard/MenuSection:619:12", "data-dynamic-content": "false", className: "text-red-600", children: "Delete All Menu Items" }, void 0, false, {
            fileName: "/app/src/components/dashboard/MenuSection.jsx",
            lineNumber: 638,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/MenuSection.jsx",
            lineNumber: 637,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:621:10", "data-dynamic-content": "true", className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/MenuSection:622:12", "data-dynamic-content": "true", className: "text-sm text-gray-600", children: [
              "This will permanently delete all ",
              menuItems.length,
              " menu items. This action cannot be undone."
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/MenuSection.jsx",
              lineNumber: 641,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:625:12", "data-dynamic-content": "false", className: "bg-red-50 border border-red-200 rounded-lg p-3", children: /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/MenuSection:626:14", "data-dynamic-content": "false", className: "text-sm text-red-800 font-medium", children: "⚠️ To confirm, please enter your email address" }, void 0, false, {
              fileName: "/app/src/components/dashboard/MenuSection.jsx",
              lineNumber: 645,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "/app/src/components/dashboard/MenuSection.jsx",
              lineNumber: 644,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/MenuSection:630:12", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "components/dashboard/MenuSection:631:14", "data-dynamic-content": "false", htmlFor: "delete-email", children: "Your Email Address" }, void 0, false, {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 650,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV(
                Input,
                {
                  "data-source-location": "components/dashboard/MenuSection:632:14",
                  "data-dynamic-content": "true",
                  id: "delete-email",
                  type: "email",
                  value: deleteAllEmail,
                  onChange: (e) => {
                    setDeleteAllEmail(e.target.value);
                    setDeleteAllError("");
                  },
                  placeholder: "Enter your email",
                  className: "mt-1"
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/dashboard/MenuSection.jsx",
                  lineNumber: 651,
                  columnNumber: 15
                },
                this
              ),
              deleteAllError && /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/MenuSection:644:16", "data-dynamic-content": "true", className: "text-sm text-red-600 mt-1", "data-collection-item-field": "deleteAllError", "data-collection-item-id": id, children: deleteAllError }, void 0, false, {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 663,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/MenuSection.jsx",
              lineNumber: 649,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/MenuSection.jsx",
            lineNumber: 640,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV(DialogFooter, { "data-source-location": "components/dashboard/MenuSection:648:10", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV(
              Button,
              {
                "data-source-location": "components/dashboard/MenuSection:649:12",
                "data-dynamic-content": "true",
                variant: "outline",
                onClick: () => {
                  setShowDeleteAllDialog(false);
                  setDeleteAllEmail("");
                  setDeleteAllError("");
                },
                children: "Cancel"
              },
              void 0,
              false,
              {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 668,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              Button,
              {
                "data-source-location": "components/dashboard/MenuSection:659:12",
                "data-dynamic-content": "true",
                onClick: handleDeleteAllMenu,
                disabled: !deleteAllEmail || isDeletingAll,
                className: "bg-red-600 hover:bg-red-700",
                children: isDeletingAll ? "Deleting..." : "Delete All Menu"
              },
              void 0,
              false,
              {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 678,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/MenuSection.jsx",
            lineNumber: 667,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/MenuSection.jsx",
          lineNumber: 636,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "/app/src/components/dashboard/MenuSection.jsx",
          lineNumber: 635,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(AlertDialog, { "data-source-location": "components/dashboard/MenuSection:671:6", "data-dynamic-content": "true", open: !!deleteConfirm, onOpenChange: () => setDeleteConfirm(null), children: /* @__PURE__ */ jsxDEV(AlertDialogContent, { "data-source-location": "components/dashboard/MenuSection:672:8", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV(AlertDialogHeader, { "data-source-location": "components/dashboard/MenuSection:673:10", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV(AlertDialogTitle, { "data-source-location": "components/dashboard/MenuSection:674:12", "data-dynamic-content": "false", children: "Delete Menu Item" }, void 0, false, {
              fileName: "/app/src/components/dashboard/MenuSection.jsx",
              lineNumber: 693,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(AlertDialogDescription, { "data-source-location": "components/dashboard/MenuSection:675:12", "data-dynamic-content": "true", "data-collection-item-field": "name", "data-collection-item-id": deleteConfirm?.id || deleteConfirm?._id, children: [
              'Are you sure you want to delete "',
              deleteConfirm?.name,
              '"? This action cannot be undone.'
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/MenuSection.jsx",
              lineNumber: 694,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/MenuSection.jsx",
            lineNumber: 692,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV(AlertDialogFooter, { "data-source-location": "components/dashboard/MenuSection:679:10", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV(AlertDialogCancel, { "data-source-location": "components/dashboard/MenuSection:680:12", "data-dynamic-content": "false", children: "Cancel" }, void 0, false, {
              fileName: "/app/src/components/dashboard/MenuSection.jsx",
              lineNumber: 699,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(
              AlertDialogAction,
              {
                "data-source-location": "components/dashboard/MenuSection:681:12",
                "data-dynamic-content": "true",
                onClick: () => handleDelete(deleteConfirm?.id),
                className: "bg-red-600 hover:bg-red-700",
                children: "Delete"
              },
              void 0,
              false,
              {
                fileName: "/app/src/components/dashboard/MenuSection.jsx",
                lineNumber: 700,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/MenuSection.jsx",
            lineNumber: 698,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/MenuSection.jsx",
          lineNumber: 691,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "/app/src/components/dashboard/MenuSection.jsx",
          lineNumber: 690,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/app/src/components/dashboard/MenuSection.jsx",
      lineNumber: 265,
      columnNumber: 5
    },
    this
  );
}
_s(MenuSection, "Tl0f7NEBhz2D95qXaf1HJ5ugxhg=");
_c = MenuSection;
var _c;
$RefreshReg$(_c, "MenuSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/dashboard/MenuSection.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/dashboard/MenuSection.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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LCJiYXNlNDQiLCJQbHVzIiwiU2VhcmNoIiwiRWRpdDIiLCJUcmFzaDIiLCJFeWUiLCJFeWVPZmYiLCJMZWFmIiwiRmxhbWUiLCJNb3JlVmVydGljYWwiLCJVcGxvYWQiLCJYIiwiUGFja2FnZVgiLCJTZXR0aW5nczIiLCJDYXRlZ29yeU1hbmFnZXIiLCJNb2RpZmllcnNFZGl0b3IiLCJWYXJpYXRpb25zRWRpdG9yIiwiTWVudUFJQXNzaXN0YW50IiwiU21hcnRNZW51QnVpbGRlciIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJCdXR0b24iLCJJbnB1dCIsIkxhYmVsIiwiVGV4dGFyZWEiLCJCYWRnZSIsIlN3aXRjaCIsIlRhYnMiLCJUYWJzTGlzdCIsIlRhYnNUcmlnZ2VyIiwiRGlhbG9nIiwiRGlhbG9nQ29udGVudCIsIkRpYWxvZ0hlYWRlciIsIkRpYWxvZ1RpdGxlIiwiRGlhbG9nRm9vdGVyIiwiU2VsZWN0IiwiU2VsZWN0Q29udGVudCIsIlNlbGVjdEl0ZW0iLCJTZWxlY3RUcmlnZ2VyIiwiU2VsZWN0VmFsdWUiLCJEcm9wZG93bk1lbnUiLCJEcm9wZG93bk1lbnVDb250ZW50IiwiRHJvcGRvd25NZW51SXRlbSIsIkRyb3Bkb3duTWVudVRyaWdnZXIiLCJBbGVydERpYWxvZyIsIkFsZXJ0RGlhbG9nQWN0aW9uIiwiQWxlcnREaWFsb2dDYW5jZWwiLCJBbGVydERpYWxvZ0NvbnRlbnQiLCJBbGVydERpYWxvZ0Rlc2NyaXB0aW9uIiwiQWxlcnREaWFsb2dGb290ZXIiLCJBbGVydERpYWxvZ0hlYWRlciIsIkFsZXJ0RGlhbG9nVGl0bGUiLCJNZW51U2VjdGlvbiIsInJlc3RhdXJhbnQiLCJtZW51SXRlbXMiLCJyZWxvYWRNZW51SXRlbXMiLCJvcmRlcnMiLCJpZCIsIl9zIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZENhdGVnb3J5IiwiaXNEaWFsb2dPcGVuIiwic2V0SXNEaWFsb2dPcGVuIiwiaXNDYXRlZ29yeU1hbmFnZXJPcGVuIiwic2V0SXNDYXRlZ29yeU1hbmFnZXJPcGVuIiwiaXNTbWFydEJ1aWxkZXJPcGVuIiwic2V0SXNTbWFydEJ1aWxkZXJPcGVuIiwiZWRpdGluZ0l0ZW0iLCJzZXRFZGl0aW5nSXRlbSIsImRlbGV0ZUNvbmZpcm0iLCJzZXREZWxldGVDb25maXJtIiwiaXNTYXZpbmciLCJzZXRJc1NhdmluZyIsImN1c3RvbUNhdGVnb3JpZXMiLCJzZXRDdXN0b21DYXRlZ29yaWVzIiwic2hvd0RlbGV0ZUFsbERpYWxvZyIsInNldFNob3dEZWxldGVBbGxEaWFsb2ciLCJkZWxldGVBbGxFbWFpbCIsInNldERlbGV0ZUFsbEVtYWlsIiwiZGVsZXRlQWxsRXJyb3IiLCJzZXREZWxldGVBbGxFcnJvciIsImlzRGVsZXRpbmdBbGwiLCJzZXRJc0RlbGV0aW5nQWxsIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiY2F0ZWdvcnkiLCJpbWFnZV91cmwiLCJpc192ZWdldGFyaWFuIiwiaXNfdmVnYW4iLCJpc19zcGljeSIsImlzX2F2YWlsYWJsZSIsImlzX291dF9vZl9zdG9jayIsInByZXBhcmF0aW9uX3RpbWUiLCJtb2RpZmllcnMiLCJ2YXJpYXRpb25zIiwiYWxsb3dfc3BlY2lhbF9pbnN0cnVjdGlvbnMiLCJsb2FkQ3VzdG9tQ2F0ZWdvcmllcyIsInJlc3RhdXJhbnRfaWQiLCJjYXRzIiwiZW50aXRpZXMiLCJNZW51Q2F0ZWdvcnkiLCJmaWx0ZXIiLCJjYXRlZ29yaWVzIiwiU2V0IiwibWFwIiwiaXRlbSIsIkJvb2xlYW4iLCJjdXN0b21DYXRlZ29yeU5hbWVzIiwiYyIsImFsbENhdGVnb3JpZXMiLCJmaWx0ZXJlZEl0ZW1zIiwibWF0Y2hlc1NlYXJjaCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJtYXRjaGVzQ2F0ZWdvcnkiLCJncm91cGVkSXRlbXMiLCJyZWR1Y2UiLCJhY2MiLCJwdXNoIiwiaGFuZGxlQWRkTmV3IiwibGVuZ3RoIiwiaGFuZGxlTWFudWFsQWRkIiwiaGFuZGxlRWRpdCIsInRvU3RyaW5nIiwiaGFuZGxlU2F2ZSIsIml0ZW1EYXRhIiwicGFyc2VGbG9hdCIsInBhcnNlSW50Iiwic29ydF9vcmRlciIsIk1lbnVJdGVtIiwidXBkYXRlIiwiY3JlYXRlIiwiaGFuZGxlRGVsZXRlIiwiZGVsZXRlIiwidG9nZ2xlQXZhaWxhYmlsaXR5IiwidG9nZ2xlT3V0T2ZTdG9jayIsImhhbmRsZUltYWdlVXBsb2FkIiwiZSIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsImZpbGVfdXJsIiwiaW50ZWdyYXRpb25zIiwiQ29yZSIsIlVwbG9hZEZpbGUiLCJoYW5kbGVEZWxldGVBbGxNZW51IiwidXNlciIsImF1dGgiLCJtZSIsInRyaW0iLCJlbWFpbCIsImVycm9yIiwib3BhY2l0eSIsInN1Z2dlc3Rpb24iLCJwcmljZV9yYW5nZSIsInNwbGl0IiwicmVwbGFjZSIsInZhbHVlIiwic2xpY2UiLCJjYXQiLCJPYmplY3QiLCJrZXlzIiwiZW50cmllcyIsIml0ZW1zIiwiX19hcnJJZHhfXyIsIl9pZCIsImNoZWNrZWQiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJNZW51U2VjdGlvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBiYXNlNDQgfSBmcm9tIFwiQC9hcGkvYmFzZTQ0Q2xpZW50XCI7XG5pbXBvcnQge1xuICBQbHVzLCBTZWFyY2gsIEVkaXQyLCBUcmFzaDIsIEV5ZSwgRXllT2ZmLFxuICBMZWFmLCBGbGFtZSwgTW9yZVZlcnRpY2FsLCBVcGxvYWQsIFgsIFBhY2thZ2VYLCBTZXR0aW5nczIgfSBmcm9tXG5cImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IENhdGVnb3J5TWFuYWdlciBmcm9tIFwiLi9DYXRlZ29yeU1hbmFnZXJcIjtcbmltcG9ydCBNb2RpZmllcnNFZGl0b3IgZnJvbSBcIi4vTW9kaWZpZXJzRWRpdG9yXCI7XG5pbXBvcnQgVmFyaWF0aW9uc0VkaXRvciBmcm9tIFwiLi9WYXJpYXRpb25zRWRpdG9yXCI7XG5pbXBvcnQgTWVudUFJQXNzaXN0YW50IGZyb20gXCIuL01lbnVBSUFzc2lzdGFudFwiO1xuaW1wb3J0IFNtYXJ0TWVudUJ1aWxkZXIgZnJvbSBcIi4vU21hcnRNZW51QnVpbGRlclwiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIENhcmRIZWFkZXIsIENhcmRUaXRsZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2xhYmVsXCI7XG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdGV4dGFyZWFcIjtcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9iYWRnZVwiO1xuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9zd2l0Y2hcIjtcbmltcG9ydCB7IFRhYnMsIFRhYnNMaXN0LCBUYWJzVHJpZ2dlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdGFic1wiO1xuaW1wb3J0IHtcbiAgRGlhbG9nLFxuICBEaWFsb2dDb250ZW50LFxuICBEaWFsb2dIZWFkZXIsXG4gIERpYWxvZ1RpdGxlLFxuICBEaWFsb2dGb290ZXIgfSBmcm9tXG5cIkAvY29tcG9uZW50cy91aS9kaWFsb2dcIjtcbmltcG9ydCB7XG4gIFNlbGVjdCxcbiAgU2VsZWN0Q29udGVudCxcbiAgU2VsZWN0SXRlbSxcbiAgU2VsZWN0VHJpZ2dlcixcbiAgU2VsZWN0VmFsdWUgfSBmcm9tXG5cIkAvY29tcG9uZW50cy91aS9zZWxlY3RcIjtcbmltcG9ydCB7XG4gIERyb3Bkb3duTWVudSxcbiAgRHJvcGRvd25NZW51Q29udGVudCxcbiAgRHJvcGRvd25NZW51SXRlbSxcbiAgRHJvcGRvd25NZW51VHJpZ2dlciB9IGZyb21cblwiQC9jb21wb25lbnRzL3VpL2Ryb3Bkb3duLW1lbnVcIjtcbmltcG9ydCB7XG4gIEFsZXJ0RGlhbG9nLFxuICBBbGVydERpYWxvZ0FjdGlvbixcbiAgQWxlcnREaWFsb2dDYW5jZWwsXG4gIEFsZXJ0RGlhbG9nQ29udGVudCxcbiAgQWxlcnREaWFsb2dEZXNjcmlwdGlvbixcbiAgQWxlcnREaWFsb2dGb290ZXIsXG4gIEFsZXJ0RGlhbG9nSGVhZGVyLFxuICBBbGVydERpYWxvZ1RpdGxlIH0gZnJvbVxuXCJAL2NvbXBvbmVudHMvdWkvYWxlcnQtZGlhbG9nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVTZWN0aW9uKHsgcmVzdGF1cmFudCwgbWVudUl0ZW1zLCByZWxvYWRNZW51SXRlbXMsIG9yZGVycywgaWQgfSkge1xuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZShcImFsbFwiKTtcbiAgY29uc3QgW2lzRGlhbG9nT3Blbiwgc2V0SXNEaWFsb2dPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzQ2F0ZWdvcnlNYW5hZ2VyT3Blbiwgc2V0SXNDYXRlZ29yeU1hbmFnZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzU21hcnRCdWlsZGVyT3Blbiwgc2V0SXNTbWFydEJ1aWxkZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2VkaXRpbmdJdGVtLCBzZXRFZGl0aW5nSXRlbV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2RlbGV0ZUNvbmZpcm0sIHNldERlbGV0ZUNvbmZpcm1dID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc1NhdmluZywgc2V0SXNTYXZpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY3VzdG9tQ2F0ZWdvcmllcywgc2V0Q3VzdG9tQ2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzaG93RGVsZXRlQWxsRGlhbG9nLCBzZXRTaG93RGVsZXRlQWxsRGlhbG9nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2RlbGV0ZUFsbEVtYWlsLCBzZXREZWxldGVBbGxFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2RlbGV0ZUFsbEVycm9yLCBzZXREZWxldGVBbGxFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzRGVsZXRpbmdBbGwsIHNldElzRGVsZXRpbmdBbGxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6IFwiXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgcHJpY2U6IFwiXCIsXG4gICAgY2F0ZWdvcnk6IFwiXCIsXG4gICAgaW1hZ2VfdXJsOiBcIlwiLFxuICAgIGlzX3ZlZ2V0YXJpYW46IGZhbHNlLFxuICAgIGlzX3ZlZ2FuOiBmYWxzZSxcbiAgICBpc19zcGljeTogZmFsc2UsXG4gICAgaXNfYXZhaWxhYmxlOiB0cnVlLFxuICAgIGlzX291dF9vZl9zdG9jazogZmFsc2UsXG4gICAgcHJlcGFyYXRpb25fdGltZTogXCJcIixcbiAgICBtb2RpZmllcnM6IFtdLFxuICAgIHZhcmlhdGlvbnM6IFtdLFxuICAgIGFsbG93X3NwZWNpYWxfaW5zdHJ1Y3Rpb25zOiB0cnVlXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9hZEN1c3RvbUNhdGVnb3JpZXMoKTtcbiAgfSwgW3Jlc3RhdXJhbnRdKTtcblxuICBjb25zdCBsb2FkQ3VzdG9tQ2F0ZWdvcmllcyA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXJlc3RhdXJhbnQ/LnJlc3RhdXJhbnRfaWQpIHJldHVybjtcbiAgICBjb25zdCBjYXRzID0gYXdhaXQgYmFzZTQ0LmVudGl0aWVzLk1lbnVDYXRlZ29yeS5maWx0ZXIoXG4gICAgICB7IHJlc3RhdXJhbnRfaWQ6IHJlc3RhdXJhbnQucmVzdGF1cmFudF9pZCB9LFxuICAgICAgJ3NvcnRfb3JkZXInXG4gICAgKTtcbiAgICBzZXRDdXN0b21DYXRlZ29yaWVzKGNhdHMpO1xuICB9O1xuXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBbLi4ubmV3IFNldChtZW51SXRlbXMubWFwKChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5KSldLmZpbHRlcihCb29sZWFuKTtcbiAgY29uc3QgY3VzdG9tQ2F0ZWdvcnlOYW1lcyA9IGN1c3RvbUNhdGVnb3JpZXMubWFwKChjKSA9PiBjLm5hbWUpO1xuICBjb25zdCBhbGxDYXRlZ29yaWVzID0gWy4uLm5ldyBTZXQoWy4uLmN1c3RvbUNhdGVnb3J5TmFtZXMsIC4uLmNhdGVnb3JpZXNdKV07XG5cbiAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IG1lbnVJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICBjb25zdCBtYXRjaGVzU2VhcmNoID0gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSkgfHxcbiAgICBpdGVtLmRlc2NyaXB0aW9uPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xuICAgIGNvbnN0IG1hdGNoZXNDYXRlZ29yeSA9IHNlbGVjdGVkQ2F0ZWdvcnkgPT09IFwiYWxsXCIgfHwgaXRlbS5jYXRlZ29yeSA9PT0gc2VsZWN0ZWRDYXRlZ29yeTtcbiAgICByZXR1cm4gbWF0Y2hlc1NlYXJjaCAmJiBtYXRjaGVzQ2F0ZWdvcnk7XG4gIH0pO1xuXG4gIGNvbnN0IGdyb3VwZWRJdGVtcyA9IGZpbHRlcmVkSXRlbXMucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcbiAgICBjb25zdCBjYXRlZ29yeSA9IGl0ZW0uY2F0ZWdvcnkgfHwgXCJVbmNhdGVnb3JpemVkXCI7XG4gICAgaWYgKCFhY2NbY2F0ZWdvcnldKSBhY2NbY2F0ZWdvcnldID0gW107XG4gICAgYWNjW2NhdGVnb3J5XS5wdXNoKGl0ZW0pO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcblxuICBjb25zdCBoYW5kbGVBZGROZXcgPSAoKSA9PiB7XG4gICAgLy8gU2hvdyBzbWFydCBidWlsZGVyIGlmIG5vIGl0ZW1zLCBvdGhlcndpc2Ugc2hvdyBvcHRpb25zXG4gICAgaWYgKG1lbnVJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldElzU21hcnRCdWlsZGVyT3Blbih0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SXNTbWFydEJ1aWxkZXJPcGVuKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVNYW51YWxBZGQgPSAoKSA9PiB7XG4gICAgc2V0RWRpdGluZ0l0ZW0obnVsbCk7XG4gICAgc2V0Rm9ybURhdGEoe1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgcHJpY2U6IFwiXCIsXG4gICAgICBjYXRlZ29yeTogXCJcIixcbiAgICAgIGltYWdlX3VybDogXCJcIixcbiAgICAgIGlzX3ZlZ2V0YXJpYW46IGZhbHNlLFxuICAgICAgaXNfdmVnYW46IGZhbHNlLFxuICAgICAgaXNfc3BpY3k6IGZhbHNlLFxuICAgICAgaXNfYXZhaWxhYmxlOiB0cnVlLFxuICAgICAgaXNfb3V0X29mX3N0b2NrOiBmYWxzZSxcbiAgICAgIHByZXBhcmF0aW9uX3RpbWU6IFwiXCIsXG4gICAgICBtb2RpZmllcnM6IFtdLFxuICAgICAgdmFyaWF0aW9uczogW10sXG4gICAgICBhbGxvd19zcGVjaWFsX2luc3RydWN0aW9uczogdHJ1ZVxuICAgIH0pO1xuICAgIHNldElzRGlhbG9nT3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVFZGl0ID0gKGl0ZW0pID0+IHtcbiAgICBzZXRFZGl0aW5nSXRlbShpdGVtKTtcbiAgICBzZXRGb3JtRGF0YSh7XG4gICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbiB8fCBcIlwiLFxuICAgICAgcHJpY2U6IGl0ZW0ucHJpY2U/LnRvU3RyaW5nKCkgfHwgXCJcIixcbiAgICAgIGNhdGVnb3J5OiBpdGVtLmNhdGVnb3J5IHx8IFwiXCIsXG4gICAgICBpbWFnZV91cmw6IGl0ZW0uaW1hZ2VfdXJsIHx8IFwiXCIsXG4gICAgICBpc192ZWdldGFyaWFuOiBpdGVtLmlzX3ZlZ2V0YXJpYW4gfHwgZmFsc2UsXG4gICAgICBpc192ZWdhbjogaXRlbS5pc192ZWdhbiB8fCBmYWxzZSxcbiAgICAgIGlzX3NwaWN5OiBpdGVtLmlzX3NwaWN5IHx8IGZhbHNlLFxuICAgICAgaXNfYXZhaWxhYmxlOiBpdGVtLmlzX2F2YWlsYWJsZSAhPT0gZmFsc2UsXG4gICAgICBpc19vdXRfb2Zfc3RvY2s6IGl0ZW0uaXNfb3V0X29mX3N0b2NrIHx8IGZhbHNlLFxuICAgICAgcHJlcGFyYXRpb25fdGltZTogaXRlbS5wcmVwYXJhdGlvbl90aW1lPy50b1N0cmluZygpIHx8IFwiXCIsXG4gICAgICBtb2RpZmllcnM6IGl0ZW0ubW9kaWZpZXJzIHx8IFtdLFxuICAgICAgdmFyaWF0aW9uczogaXRlbS52YXJpYXRpb25zIHx8IFtdLFxuICAgICAgYWxsb3dfc3BlY2lhbF9pbnN0cnVjdGlvbnM6IGl0ZW0uYWxsb3dfc3BlY2lhbF9pbnN0cnVjdGlvbnMgIT09IGZhbHNlXG4gICAgfSk7XG4gICAgc2V0SXNEaWFsb2dPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFmb3JtRGF0YS5uYW1lIHx8ICFmb3JtRGF0YS5wcmljZSB8fCAhZm9ybURhdGEuY2F0ZWdvcnkpIHJldHVybjtcblxuICAgIHNldElzU2F2aW5nKHRydWUpO1xuICAgIGNvbnN0IGl0ZW1EYXRhID0ge1xuICAgICAgLi4uZm9ybURhdGEsXG4gICAgICByZXN0YXVyYW50X2lkOiByZXN0YXVyYW50LnJlc3RhdXJhbnRfaWQsXG4gICAgICBwcmljZTogcGFyc2VGbG9hdChmb3JtRGF0YS5wcmljZSksXG4gICAgICBwcmVwYXJhdGlvbl90aW1lOiBmb3JtRGF0YS5wcmVwYXJhdGlvbl90aW1lID8gcGFyc2VJbnQoZm9ybURhdGEucHJlcGFyYXRpb25fdGltZSkgOiBudWxsLFxuICAgICAgc29ydF9vcmRlcjogZWRpdGluZ0l0ZW0/LnNvcnRfb3JkZXIgfHwgbWVudUl0ZW1zLmxlbmd0aFxuICAgIH07XG5cbiAgICBpZiAoZWRpdGluZ0l0ZW0pIHtcbiAgICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5NZW51SXRlbS51cGRhdGUoZWRpdGluZ0l0ZW0uaWQsIGl0ZW1EYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgYmFzZTQ0LmVudGl0aWVzLk1lbnVJdGVtLmNyZWF0ZShpdGVtRGF0YSk7XG4gICAgfVxuXG4gICAgYXdhaXQgcmVsb2FkTWVudUl0ZW1zKCk7XG4gICAgc2V0SXNEaWFsb2dPcGVuKGZhbHNlKTtcbiAgICBzZXRJc1NhdmluZyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgYXdhaXQgYmFzZTQ0LmVudGl0aWVzLk1lbnVJdGVtLmRlbGV0ZShpZCk7XG4gICAgYXdhaXQgcmVsb2FkTWVudUl0ZW1zKCk7XG4gICAgc2V0RGVsZXRlQ29uZmlybShudWxsKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVBdmFpbGFiaWxpdHkgPSBhc3luYyAoaXRlbSkgPT4ge1xuICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5NZW51SXRlbS51cGRhdGUoaXRlbS5pZCwge1xuICAgICAgaXNfYXZhaWxhYmxlOiAhaXRlbS5pc19hdmFpbGFibGVcbiAgICB9KTtcbiAgICBhd2FpdCByZWxvYWRNZW51SXRlbXMoKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVPdXRPZlN0b2NrID0gYXN5bmMgKGl0ZW0pID0+IHtcbiAgICBhd2FpdCBiYXNlNDQuZW50aXRpZXMuTWVudUl0ZW0udXBkYXRlKGl0ZW0uaWQsIHtcbiAgICAgIGlzX291dF9vZl9zdG9jazogIWl0ZW0uaXNfb3V0X29mX3N0b2NrXG4gICAgfSk7XG4gICAgYXdhaXQgcmVsb2FkTWVudUl0ZW1zKCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSW1hZ2VVcGxvYWQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlcz8uWzBdO1xuICAgIGlmICghZmlsZSkgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBmaWxlX3VybCB9ID0gYXdhaXQgYmFzZTQ0LmludGVncmF0aW9ucy5Db3JlLlVwbG9hZEZpbGUoeyBmaWxlIH0pO1xuICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIGltYWdlX3VybDogZmlsZV91cmwgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlQWxsTWVudSA9IGFzeW5jICgpID0+IHtcbiAgICBzZXREZWxldGVBbGxFcnJvcihcIlwiKTtcbiAgICBzZXRJc0RlbGV0aW5nQWxsKHRydWUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBiYXNlNDQuYXV0aC5tZSgpO1xuXG4gICAgICBpZiAoZGVsZXRlQWxsRW1haWwudG9Mb3dlckNhc2UoKS50cmltKCkgIT09IHVzZXIuZW1haWwudG9Mb3dlckNhc2UoKS50cmltKCkpIHtcbiAgICAgICAgc2V0RGVsZXRlQWxsRXJyb3IoXCJFbWFpbCBkb2VzIG5vdCBtYXRjaCB5b3VyIGFjY291bnQgZW1haWxcIik7XG4gICAgICAgIHNldElzRGVsZXRpbmdBbGwoZmFsc2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIERlbGV0ZSBhbGwgbWVudSBpdGVtcyBmb3IgdGhpcyByZXN0YXVyYW50XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbWVudUl0ZW1zKSB7XG4gICAgICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5NZW51SXRlbS5kZWxldGUoaXRlbS5pZCk7XG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHJlbG9hZE1lbnVJdGVtcygpO1xuICAgICAgc2V0U2hvd0RlbGV0ZUFsbERpYWxvZyhmYWxzZSk7XG4gICAgICBzZXREZWxldGVBbGxFbWFpbChcIlwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0RGVsZXRlQWxsRXJyb3IoXCJGYWlsZWQgdG8gZGVsZXRlIG1lbnUgaXRlbXNcIik7XG4gICAgfVxuXG4gICAgc2V0SXNEZWxldGluZ0FsbChmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjI0Njo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cbiAgICBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cblxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjoyNTM6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgbWQ6aXRlbXMtY2VudGVyIG1kOmp1c3RpZnktYmV0d2VlbiBnYXAtNFwiPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246MjU0OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICA8aDIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjoyNTU6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMFwiPk1lbnUgSXRlbXM8L2gyPlxuICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246MjU2OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPnttZW51SXRlbXMubGVuZ3RofSBpdGVtcyBpbiB5b3VyIG1lbnU8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246MjU4OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIGZsZXgtd3JhcFwiPlxuICAgICAgICAgIHttZW51SXRlbXMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjoyNjA6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dEZWxldGVBbGxEaWFsb2codHJ1ZSl9XG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCBib3JkZXItcmVkLTIwMCBob3ZlcjpiZy1yZWQtNTBcIj5cblxuICAgICAgICAgICAgICA8VHJhc2gyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246MjY1OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgbXItMlwiIC8+XG4gICAgICAgICAgICAgIERlbGV0ZSBBbGwgTWVudVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgfVxuICAgICAgICAgIDxNZW51QUlBc3Npc3RhbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjoyNjk6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgIHJlc3RhdXJhbnQ9e3Jlc3RhdXJhbnR9XG4gICAgICAgICAgbWVudUl0ZW1zPXttZW51SXRlbXN9XG4gICAgICAgICAgb3JkZXJzPXtvcmRlcnMgfHwgW119XG4gICAgICAgICAgb25TdWdnZXN0ZWRJdGVtPXsoc3VnZ2VzdGlvbikgPT4ge1xuICAgICAgICAgICAgc2V0Rm9ybURhdGEoe1xuICAgICAgICAgICAgICBuYW1lOiBzdWdnZXN0aW9uLm5hbWUsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzdWdnZXN0aW9uLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICBwcmljZTogc3VnZ2VzdGlvbi5wcmljZV9yYW5nZS5pbmNsdWRlcygnLScpID9cbiAgICAgICAgICAgICAgc3VnZ2VzdGlvbi5wcmljZV9yYW5nZS5zcGxpdCgnLScpWzBdLnJlcGxhY2UoL1teXFxkXS9nLCAnJykgOlxuICAgICAgICAgICAgICBcIjI5OVwiLFxuICAgICAgICAgICAgICBjYXRlZ29yeTogc3VnZ2VzdGlvbi5jYXRlZ29yeSxcbiAgICAgICAgICAgICAgaW1hZ2VfdXJsOiBcIlwiLFxuICAgICAgICAgICAgICBpc192ZWdldGFyaWFuOiBmYWxzZSxcbiAgICAgICAgICAgICAgaXNfdmVnYW46IGZhbHNlLFxuICAgICAgICAgICAgICBpc19zcGljeTogZmFsc2UsXG4gICAgICAgICAgICAgIGlzX2F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNfb3V0X29mX3N0b2NrOiBmYWxzZSxcbiAgICAgICAgICAgICAgcHJlcGFyYXRpb25fdGltZTogXCJcIixcbiAgICAgICAgICAgICAgbW9kaWZpZXJzOiBbXSxcbiAgICAgICAgICAgICAgdmFyaWF0aW9uczogW10sXG4gICAgICAgICAgICAgIGFsbG93X3NwZWNpYWxfaW5zdHJ1Y3Rpb25zOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldElzRGlhbG9nT3Blbih0cnVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ2F0ZWdvcnlBc3NpZ25lZD17cmVsb2FkTWVudUl0ZW1zfVxuICAgICAgICAgIG9uRGVzY3JpcHRpb25HZW5lcmF0ZWQ9e2FzeW5jIChpdGVtLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICAgICAgYXdhaXQgYmFzZTQ0LmVudGl0aWVzLk1lbnVJdGVtLnVwZGF0ZShpdGVtLmlkLCB7IGRlc2NyaXB0aW9uIH0pO1xuICAgICAgICAgICAgYXdhaXQgcmVsb2FkTWVudUl0ZW1zKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvblByaWNlT3B0aW1pemVkPXtyZWxvYWRNZW51SXRlbXN9IC8+XG5cbiAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246MzAxOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgb25DbGljaz17KCkgPT4gc2V0SXNDYXRlZ29yeU1hbmFnZXJPcGVuKHRydWUpfSB2YXJpYW50PVwib3V0bGluZVwiPlxuICAgICAgICAgICAgPFNldHRpbmdzMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjMwMjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IG1yLTJcIiAvPlxuICAgICAgICAgICAgTWFuYWdlIENhdGVnb3JpZXNcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246MzA1OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgb25DbGljaz17aGFuZGxlQWRkTmV3fSBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tb3JhbmdlLTYwMCB0by1vcmFuZ2UtNTAwXCI+XG4gICAgICAgICAgICA8UGx1cyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjMwNjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IG1yLTJcIiAvPlxuICAgICAgICAgICAgQWRkIE1lbnUgSXRlbVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogRmlsdGVycyAqL31cbiAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246MzEzOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246MzE0OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246MzE1OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBnYXAtNFwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjMxNjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXgtMSByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICA8U2VhcmNoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246MzE3OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMyB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzIgdy00IGgtNCB0ZXh0LWdyYXktNDAwXCIgLz5cbiAgICAgICAgICAgICAgPElucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246MzE4OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggbWVudSBpdGVtcy4uLlwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsLTlcIiAvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxUYWJzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246MzI1OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdmFsdWU9e3NlbGVjdGVkQ2F0ZWdvcnl9IG9uVmFsdWVDaGFuZ2U9e3NldFNlbGVjdGVkQ2F0ZWdvcnl9PlxuICAgICAgICAgICAgICA8VGFic0xpc3QgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjozMjY6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBmbGV4LXdyYXAgaC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPFRhYnNUcmlnZ2VyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246MzI3OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHZhbHVlPVwiYWxsXCI+QWxsPC9UYWJzVHJpZ2dlcj5cbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5zbGljZSgwLCA1KS5tYXAoKGNhdCkgPT5cbiAgICAgICAgICAgICAgICA8VGFic1RyaWdnZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjozMjk6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2NhdH0gdmFsdWU9e2NhdH0gZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJjYXRcIj57Y2F0fTwvVGFic1RyaWdnZXI+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9UYWJzTGlzdD5cbiAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDwvQ2FyZD5cblxuICAgICAgey8qIE1lbnUgSXRlbXMgKi99XG4gICAgICB7T2JqZWN0LmtleXMoZ3JvdXBlZEl0ZW1zKS5sZW5ndGggPT09IDAgP1xuICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjozMzk6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjM0MDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB5LTE2IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246MzQxOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMTYgaC0xNiBiZy1ncmF5LTEwMCByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXgtYXV0byBtYi00XCI+XG4gICAgICAgICAgICAgIDxQbHVzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246MzQyOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctOCBoLTggdGV4dC1ncmF5LTQwMFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjM0NDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgbWItMlwiPk5vIG1lbnUgaXRlbXMgeWV0PC9oMz5cbiAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246MzQ1OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgbWItNFwiPlN0YXJ0IGJ5IGFkZGluZyB5b3VyIGZpcnN0IG1lbnUgaXRlbTwvcD5cbiAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjozNDY6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBvbkNsaWNrPXtoYW5kbGVBZGROZXd9PkFkZCBNZW51IEl0ZW08L0J1dHRvbj5cbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmQ+IDpcblxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjM1MDo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAge09iamVjdC5lbnRyaWVzKGdyb3VwZWRJdGVtcykubWFwKChbY2F0ZWdvcnksIGl0ZW1zXSkgPT5cbiAgICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjozNTI6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2NhdGVnb3J5fT5cbiAgICAgICAgICAgICAgPENhcmRIZWFkZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjozNTM6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJwYi0yXCI+XG4gICAgICAgICAgICAgICAgPENhcmRUaXRsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjM1NDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtbGcgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjM1NToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiY2F0ZWdvcnlcIj57Y2F0ZWdvcnl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPEJhZGdlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246MzU2OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdmFyaWFudD1cInNlY29uZGFyeVwiPntpdGVtcy5sZW5ndGh9IGl0ZW1zPC9CYWRnZT5cbiAgICAgICAgICAgICAgICA8L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjozNTk6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246MzYwOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZGl2aWRlLXlcIj5cbiAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjozNjI6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cInB5LTQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aXRlbT8uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjozNjM6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgcm91bmRlZC1sZyBiZy1ncmF5LTEwMCBvdmVyZmxvdy1oaWRkZW4gZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uaW1hZ2VfdXJsID9cbiAgICAgICAgICAgICAgICAgIDxpbWcgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjozNjU6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBzcmM9e2l0ZW0uaW1hZ2VfdXJsfSBhbHQ9e2l0ZW0ubmFtZX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIiAvPiA6XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjozNjc6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWdyYXktNDAwXCI+8J+Nve+4jzwvZGl2PlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjozNzA6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4LTEgbWluLXctMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjM3MToyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGZsZXgtd3JhcFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiaXNfdmVnZXRhcmlhblwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtpdGVtPy5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjM3MjoyNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT17YGZvbnQtbWVkaXVtICR7IWl0ZW0uaXNfYXZhaWxhYmxlID8gJ3RleHQtZ3JheS00MDAnIDogJ3RleHQtZ3JheS05MDAnfWB9IGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwibmFtZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtpdGVtPy5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uaXNfdmVnZXRhcmlhbiAmJlxuICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjozNzY6MjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYmctZ3JlZW4tMTAwIHRleHQtZ3JlZW4tNzAwIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMZWFmIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246Mzc3OjMwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMyBoLTMgbXItMVwiIC8+IFZlZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uaXNfc3BpY3kgJiZcbiAgICAgICAgICAgICAgICAgICAgPEJhZGdlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246MzgxOjI4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImJnLXJlZC0xMDAgdGV4dC1yZWQtNzAwIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGFtZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjM4MjozMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTMgaC0zIG1yLTFcIiAvPiBTcGljeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyFpdGVtLmlzX2F2YWlsYWJsZSAmJlxuICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjozODY6MjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdmFyaWFudD1cInNlY29uZGFyeVwiIGNsYXNzTmFtZT1cInRleHQteHNcIj5VbmF2YWlsYWJsZTwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uaXNfb3V0X29mX3N0b2NrICYmXG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjM4OToyOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJiZy1yZWQtMTAwIHRleHQtcmVkLTcwMCB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFja2FnZVggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjozOTA6MzBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0zIGgtMyBtci0xXCIgLz4gT3V0IG9mIFN0b2NrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjM5NDoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCB0cnVuY2F0ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiZGVzY3JpcHRpb25cIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aXRlbT8uaWR9PntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246Mzk2OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicHJlcGFyYXRpb25fdGltZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtpdGVtPy5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjM5NzoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicHJpY2VcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aXRlbT8uaWR9PuKCuXtpdGVtLnByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnByZXBhcmF0aW9uX3RpbWUgJiZcbiAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246Mzk5OjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJwcmVwYXJhdGlvbl90aW1lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2l0ZW0/LmlkfT57aXRlbS5wcmVwYXJhdGlvbl90aW1lfSBtaW5zPC9wPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo0MDI6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjQwMzoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICAgICAgICAgICAgc2l6ZT1cImljb25cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlQXZhaWxhYmlsaXR5KGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpdGVtLmlzX2F2YWlsYWJsZSA/ICd0ZXh0LWdyZWVuLTYwMCcgOiAndGV4dC1ncmF5LTQwMCd9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmlzX2F2YWlsYWJsZSA/IDxFeWUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo0MDk6NDdcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+IDogPEV5ZU9mZiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjQwOTo3N1wiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo0MTE6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudVRyaWdnZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo0MTI6MjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgYXNDaGlsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NDEzOjI4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHZhcmlhbnQ9XCJnaG9zdFwiIHNpemU9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9yZVZlcnRpY2FsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NDE0OjMwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudVRyaWdnZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NDE3OjI2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgYWxpZ249XCJlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51SXRlbSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjQxODoyOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUVkaXQoaXRlbSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXQyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NDE5OjMwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgbXItMlwiIC8+IEVkaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUl0ZW0gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo0MjE6MjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBvbkNsaWNrPXsoKSA9PiB0b2dnbGVPdXRPZlN0b2NrKGl0ZW0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYWNrYWdlWCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjQyMjozMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uaXNfb3V0X29mX3N0b2NrID8gJ01hcmsgSW4gU3RvY2snIDogJ01hcmsgT3V0IG9mIFN0b2NrJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUl0ZW0gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo0MjU6MjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldERlbGV0ZUNvbmZpcm0oaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaDIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo0Mjk6MzBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCBtci0yXCIgLz4gRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudUNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuXG4gICAgICB7LyogU21hcnQgTWVudSBCdWlsZGVyICovfVxuICAgICAgPFNtYXJ0TWVudUJ1aWxkZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo0NDQ6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICBpc09wZW49e2lzU21hcnRCdWlsZGVyT3Blbn1cbiAgICAgIG9uQ2xvc2U9eygpID0+IHNldElzU21hcnRCdWlsZGVyT3BlbihmYWxzZSl9XG4gICAgICByZXN0YXVyYW50PXtyZXN0YXVyYW50fVxuICAgICAgZXhpc3RpbmdJdGVtc0NvdW50PXttZW51SXRlbXMubGVuZ3RofVxuICAgICAgb25NZW51Q3JlYXRlZD17cmVsb2FkTWVudUl0ZW1zfVxuICAgICAgb25NYW51YWxBZGQ9e2hhbmRsZU1hbnVhbEFkZH0gLz5cblxuXG4gICAgICB7LyogQ2F0ZWdvcnkgTWFuYWdlciBEaWFsb2cgKi99XG4gICAgICA8RGlhbG9nIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NDU0OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBvcGVuPXtpc0NhdGVnb3J5TWFuYWdlck9wZW59IG9uT3BlbkNoYW5nZT17c2V0SXNDYXRlZ29yeU1hbmFnZXJPcGVufT5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo0NTU6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1heC13LTJ4bCBtYXgtaC1bOTB2aF0gb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgPERpYWxvZ0hlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjQ1NjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgIDxEaWFsb2dUaXRsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjQ1NzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5NYW5hZ2UgTWVudSBDYXRlZ29yaWVzPC9EaWFsb2dUaXRsZT5cbiAgICAgICAgICA8L0RpYWxvZ0hlYWRlcj5cbiAgICAgICAgICA8Q2F0ZWdvcnlNYW5hZ2VyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NDU5OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgcmVzdGF1cmFudD17cmVzdGF1cmFudH0gb25DYXRlZ29yaWVzVXBkYXRlZD17bG9hZEN1c3RvbUNhdGVnb3JpZXN9IC8+XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgIDwvRGlhbG9nPlxuXG4gICAgICB7LyogQWRkL0VkaXQgRGlhbG9nICovfVxuICAgICAgPERpYWxvZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjQ2NDo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgb3Blbj17aXNEaWFsb2dPcGVufSBvbk9wZW5DaGFuZ2U9e3NldElzRGlhbG9nT3Blbn0+XG4gICAgICAgIDxEaWFsb2dDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NDY1OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtYXgtdy0zeGwgbWF4LWgtWzkwdmhdIG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICAgIDxEaWFsb2dIZWFkZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo0NjY6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgIDxEaWFsb2dUaXRsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjQ2NzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPntlZGl0aW5nSXRlbSA/ICdFZGl0IE1lbnUgSXRlbScgOiAnQWRkIE1lbnUgSXRlbSd9PC9EaWFsb2dUaXRsZT5cbiAgICAgICAgICA8L0RpYWxvZ0hlYWRlcj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NDY5OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NDcwOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDxMYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjQ3MToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBodG1sRm9yPVwibmFtZVwiPkl0ZW0gTmFtZSAqPC9MYWJlbD5cbiAgICAgICAgICAgICAgPElucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NDcyOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLm5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgbmFtZTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiwgQnV0dGVyIENoaWNrZW5cIiAvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo0Nzk6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgPExhYmVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NDgwOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9MYWJlbD5cbiAgICAgICAgICAgICAgPFRleHRhcmVhIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NDgxOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBkZXNjcmlwdGlvbjogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpYmUgdGhlIGRpc2guLi5cIlxuICAgICAgICAgICAgICByb3dzPXsyfSAvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo0ODk6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo0OTA6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8TGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo0OTE6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgaHRtbEZvcj1cInByaWNlXCI+UHJpY2UgKOKCuSkgKjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPElucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NDkyOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBpZD1cInByaWNlXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucHJpY2V9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBwcmljZTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIyOTlcIiAvPlxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NTAwOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPExhYmVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NTAxOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGh0bWxGb3I9XCJjYXRlZ29yeVwiPkNhdGVnb3J5ICo8L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxTZWxlY3QgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo1MDI6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5jYXRlZ29yeX1cbiAgICAgICAgICAgICAgICBvblZhbHVlQ2hhbmdlPXsodmFsdWUpID0+IHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIGNhdGVnb3J5OiB2YWx1ZSB9KX0+XG5cbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RUcmlnZ2VyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NTA2OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0VmFsdWUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo1MDc6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgcGxhY2Vob2xkZXI9XCJTZWxlY3QgY2F0ZWdvcnlcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3RUcmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgPFNlbGVjdENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo1MDk6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAge2FsbENhdGVnb3JpZXMubWFwKChjYXQsIF9fYXJySWR4X18pID0+XG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NTExOjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtjYXR9IHZhbHVlPXtjYXR9IGRhdGEtYXJyLWluZGV4PXtfX2FycklkeF9ffSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwiYWxsQ2F0ZWdvcmllc1wiPntjYXR9PC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3RDb250ZW50PlxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjUxNzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICA8TGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo1MTg6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgaHRtbEZvcj1cInByZXBhcmF0aW9uX3RpbWVcIj5QcmVwYXJhdGlvbiBUaW1lIChtaW5zKTwvTGFiZWw+XG4gICAgICAgICAgICAgIDxJbnB1dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjUxOToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGlkPVwicHJlcGFyYXRpb25fdGltZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucHJlcGFyYXRpb25fdGltZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBwcmVwYXJhdGlvbl90aW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxNVwiIC8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjUyNzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICA8TGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo1Mjg6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+SXRlbSBJbWFnZTwvTGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo1Mjk6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtdC0xIGZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgICAgICAge2Zvcm1EYXRhLmltYWdlX3VybCA/XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjUzMToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInJlbGF0aXZlIHctMjAgaC0yMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiaW1hZ2VfdXJsXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2Zvcm1EYXRhPy5pZCB8fCBmb3JtRGF0YT8uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjUzMjoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHNyYz17Zm9ybURhdGEuaW1hZ2VfdXJsfSBhbHQ9XCJQcmV2aWV3XCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgcm91bmRlZC1sZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo1MzM6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgaW1hZ2VfdXJsOiBcIlwiIH0pfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC0yIC1yaWdodC0yIHctNiBoLTYgYmctcmVkLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPFggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo1Mzc6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+IDpcblxuICAgICAgICAgICAgICAgIDxsYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjU0MToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInctMjAgaC0yMCBib3JkZXItMiBib3JkZXItZGFzaGVkIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGN1cnNvci1wb2ludGVyIGhvdmVyOmJvcmRlci1vcmFuZ2UtNDAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxVcGxvYWQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo1NDI6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LWdyYXktNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NTQzOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCJpbWFnZS8qXCIgY2xhc3NOYW1lPVwiaGlkZGVuXCIgb25DaGFuZ2U9e2hhbmRsZUltYWdlVXBsb2FkfSAvPlxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NTQ4OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NTQ5OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8U3dpdGNoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NTUwOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtmb3JtRGF0YS5pc192ZWdldGFyaWFufVxuICAgICAgICAgICAgICAgIG9uQ2hlY2tlZENoYW5nZT17KGNoZWNrZWQpID0+IHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIGlzX3ZlZ2V0YXJpYW46IGNoZWNrZWQgfSl9IC8+XG5cbiAgICAgICAgICAgICAgICA8TGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo1NTQ6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+VmVnZXRhcmlhbjwvTGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NTU2OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8U3dpdGNoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NTU3OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtmb3JtRGF0YS5pc19zcGljeX1cbiAgICAgICAgICAgICAgICBvbkNoZWNrZWRDaGFuZ2U9eyhjaGVja2VkKSA9PiBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBpc19zcGljeTogY2hlY2tlZCB9KX0gLz5cblxuICAgICAgICAgICAgICAgIDxMYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjU2MToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5TcGljeTwvTGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NTYzOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8U3dpdGNoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NTY0OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtmb3JtRGF0YS5pc19hdmFpbGFibGV9XG4gICAgICAgICAgICAgICAgb25DaGVja2VkQ2hhbmdlPXsoY2hlY2tlZCkgPT4gc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgaXNfYXZhaWxhYmxlOiBjaGVja2VkIH0pfSAvPlxuXG4gICAgICAgICAgICAgICAgPExhYmVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NTY4OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPkF2YWlsYWJsZTwvTGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NTcwOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8U3dpdGNoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NTcxOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtmb3JtRGF0YS5pc19vdXRfb2Zfc3RvY2t9XG4gICAgICAgICAgICAgICAgb25DaGVja2VkQ2hhbmdlPXsoY2hlY2tlZCkgPT4gc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgaXNfb3V0X29mX3N0b2NrOiBjaGVja2VkIH0pfSAvPlxuXG4gICAgICAgICAgICAgICAgPExhYmVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NTc1OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPk91dCBvZiBTdG9jazwvTGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NTc3OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgY29sLXNwYW4tMlwiPlxuICAgICAgICAgICAgICAgIDxTd2l0Y2ggZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo1Nzg6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2Zvcm1EYXRhLmFsbG93X3NwZWNpYWxfaW5zdHJ1Y3Rpb25zfVxuICAgICAgICAgICAgICAgIG9uQ2hlY2tlZENoYW5nZT17KGNoZWNrZWQpID0+IHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIGFsbG93X3NwZWNpYWxfaW5zdHJ1Y3Rpb25zOiBjaGVja2VkIH0pfSAvPlxuXG4gICAgICAgICAgICAgICAgPExhYmVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NTgyOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPkFsbG93IFNwZWNpYWwgSW5zdHJ1Y3Rpb25zPC9MYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIE1vZGlmaWVycyAqL31cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo1ODc6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJib3JkZXItdCBwdC00XCI+XG4gICAgICAgICAgICAgIDxNb2RpZmllcnNFZGl0b3IgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo1ODg6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICBtb2RpZmllcnM9e2Zvcm1EYXRhLm1vZGlmaWVyc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhtb2RpZmllcnMpID0+IHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIG1vZGlmaWVycyB9KX0gLz5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBWYXJpYXRpb25zICovfVxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjU5NToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImJvcmRlci10IHB0LTRcIj5cbiAgICAgICAgICAgICAgPFZhcmlhdGlvbnNFZGl0b3IgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo1OTY6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICB2YXJpYXRpb25zPXtmb3JtRGF0YS52YXJpYXRpb25zfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhcmlhdGlvbnMpID0+IHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIHZhcmlhdGlvbnMgfSl9IC8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxEaWFsb2dGb290ZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo2MDI6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo2MDM6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiB2YXJpYW50PVwib3V0bGluZVwiIG9uQ2xpY2s9eygpID0+IHNldElzRGlhbG9nT3BlbihmYWxzZSl9PkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjYwNDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTYXZlfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU2F2aW5nIHx8ICFmb3JtRGF0YS5uYW1lIHx8ICFmb3JtRGF0YS5wcmljZSB8fCAhZm9ybURhdGEuY2F0ZWdvcnl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tb3JhbmdlLTYwMCB0by1vcmFuZ2UtNTAwXCI+XG5cbiAgICAgICAgICAgICAge2lzU2F2aW5nID8gJ1NhdmluZy4uLicgOiBlZGl0aW5nSXRlbSA/ICdVcGRhdGUnIDogJ0FkZCBJdGVtJ31cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvRGlhbG9nRm9vdGVyPlxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICA8L0RpYWxvZz5cblxuICAgICAgey8qIERlbGV0ZSBBbGwgTWVudSBEaWFsb2cgKi99XG4gICAgICA8RGlhbG9nIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NjE2OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBvcGVuPXtzaG93RGVsZXRlQWxsRGlhbG9nfSBvbk9wZW5DaGFuZ2U9e3NldFNob3dEZWxldGVBbGxEaWFsb2d9PlxuICAgICAgICA8RGlhbG9nQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjYxNzo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgPERpYWxvZ0hlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjYxODoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgIDxEaWFsb2dUaXRsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjYxOToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDBcIj5EZWxldGUgQWxsIE1lbnUgSXRlbXM8L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgIDwvRGlhbG9nSGVhZGVyPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo2MjE6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NjIyOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgIFRoaXMgd2lsbCBwZXJtYW5lbnRseSBkZWxldGUgYWxsIHttZW51SXRlbXMubGVuZ3RofSBtZW51IGl0ZW1zLiBUaGlzIGFjdGlvbiBjYW5ub3QgYmUgdW5kb25lLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjYyNToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJiZy1yZWQtNTAgYm9yZGVyIGJvcmRlci1yZWQtMjAwIHJvdW5kZWQtbGcgcC0zXCI+XG4gICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NjI2OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1yZWQtODAwIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAg4pqg77iPIFRvIGNvbmZpcm0sIHBsZWFzZSBlbnRlciB5b3VyIGVtYWlsIGFkZHJlc3NcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NjMwOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDxMYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjYzMToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBodG1sRm9yPVwiZGVsZXRlLWVtYWlsXCI+WW91ciBFbWFpbCBBZGRyZXNzPC9MYWJlbD5cbiAgICAgICAgICAgICAgPElucHV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NjMyOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgaWQ9XCJkZWxldGUtZW1haWxcIlxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZGVsZXRlQWxsRW1haWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldERlbGV0ZUFsbEVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICBzZXREZWxldGVBbGxFcnJvcihcIlwiKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMVwiIC8+XG5cbiAgICAgICAgICAgICAge2RlbGV0ZUFsbEVycm9yICYmXG4gICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NjQ0OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXJlZC02MDAgbXQtMVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiZGVsZXRlQWxsRXJyb3JcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aWR9PntkZWxldGVBbGxFcnJvcn08L3A+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxEaWFsb2dGb290ZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo2NDg6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo2NDk6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRTaG93RGVsZXRlQWxsRGlhbG9nKGZhbHNlKTtcbiAgICAgICAgICAgICAgc2V0RGVsZXRlQWxsRW1haWwoXCJcIik7XG4gICAgICAgICAgICAgIHNldERlbGV0ZUFsbEVycm9yKFwiXCIpO1xuICAgICAgICAgICAgfX0+XG5cbiAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo2NTk6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRGVsZXRlQWxsTWVudX1cbiAgICAgICAgICAgIGRpc2FibGVkPXshZGVsZXRlQWxsRW1haWwgfHwgaXNEZWxldGluZ0FsbH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC02MDAgaG92ZXI6YmctcmVkLTcwMFwiPlxuXG4gICAgICAgICAgICAgIHtpc0RlbGV0aW5nQWxsID8gXCJEZWxldGluZy4uLlwiIDogXCJEZWxldGUgQWxsIE1lbnVcIn1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvRGlhbG9nRm9vdGVyPlxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICA8L0RpYWxvZz5cblxuICAgICAgey8qIERlbGV0ZSBDb25maXJtYXRpb24gKi99XG4gICAgICA8QWxlcnREaWFsb2cgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo2NzE6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG9wZW49eyEhZGVsZXRlQ29uZmlybX0gb25PcGVuQ2hhbmdlPXsoKSA9PiBzZXREZWxldGVDb25maXJtKG51bGwpfT5cbiAgICAgICAgPEFsZXJ0RGlhbG9nQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjY3Mjo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgPEFsZXJ0RGlhbG9nSGVhZGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246NjczOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICA8QWxlcnREaWFsb2dUaXRsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjY3NDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5EZWxldGUgTWVudSBJdGVtPC9BbGVydERpYWxvZ1RpdGxlPlxuICAgICAgICAgICAgPEFsZXJ0RGlhbG9nRGVzY3JpcHRpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo2NzU6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIm5hbWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17ZGVsZXRlQ29uZmlybT8uaWQgfHwgZGVsZXRlQ29uZmlybT8uX2lkfT5cbiAgICAgICAgICAgICAgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBcIntkZWxldGVDb25maXJtPy5uYW1lfVwiPyBUaGlzIGFjdGlvbiBjYW5ub3QgYmUgdW5kb25lLlxuICAgICAgICAgICAgPC9BbGVydERpYWxvZ0Rlc2NyaXB0aW9uPlxuICAgICAgICAgIDwvQWxlcnREaWFsb2dIZWFkZXI+XG4gICAgICAgICAgPEFsZXJ0RGlhbG9nRm9vdGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb246Njc5OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICA8QWxlcnREaWFsb2dDYW5jZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9NZW51U2VjdGlvbjo2ODA6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+Q2FuY2VsPC9BbGVydERpYWxvZ0NhbmNlbD5cbiAgICAgICAgICAgIDxBbGVydERpYWxvZ0FjdGlvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL01lbnVTZWN0aW9uOjY4MToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoZGVsZXRlQ29uZmlybT8uaWQpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTYwMCBob3ZlcjpiZy1yZWQtNzAwXCI+XG5cbiAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICA8L0FsZXJ0RGlhbG9nQWN0aW9uPlxuICAgICAgICAgIDwvQWxlcnREaWFsb2dGb290ZXI+XG4gICAgICAgIDwvQWxlcnREaWFsb2dDb250ZW50PlxuICAgICAgPC9BbGVydERpYWxvZz5cbiAgICA8L21vdGlvbi5kaXY+KTtcblxufSJdLCJmaWxlIjoiL2FwcC9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvTWVudVNlY3Rpb24uanN4In0=