import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/dashboard/QRCodesSection.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/dashboard/QRCodesSection.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useRef = __vite__cjsImport3_react["useRef"];
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=79425e35";
import { QRCodeSVG } from "/node_modules/.vite/deps/qrcode__react.js?v=79425e35";
import { base44 } from "/src/api/base44Client.js";
import {
  QrCode,
  Download,
  Printer,
  Plus,
  Trash2,
  Eye
} from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
import { Card, CardContent, CardHeader, CardTitle } from "/src/components/ui/card.jsx";
import { Button } from "/src/components/ui/button.jsx";
import { Input } from "/src/components/ui/input.jsx";
import { Label } from "/src/components/ui/label.jsx";
import { Badge } from "/src/components/ui/badge.jsx";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "/src/components/ui/dialog.jsx";
export default function QRCodesSection({ restaurant, id }) {
  _s();
  const planLimits = {
    trial: 10,
    basic: 25,
    pro: 999,
    multi_outlet: 999
  };
  const currentPlan = restaurant?.subscription_plan || "trial";
  const maxTables = planLimits[currentPlan];
  const currentTableCount = Math.min(restaurant?.settings?.table_count || 10, maxTables);
  const [tables, setTables] = useState(
    Array.from({ length: currentTableCount }, (_, i) => ({
      id: i + 1,
      number: `T${i + 1}`,
      name: `Table ${i + 1}`
    }))
  );
  const [selectedTable, setSelectedTable] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const handleAddTable = async () => {
    if (tables.length >= maxTables) {
      alert(`You've reached your plan's table limit of ${maxTables} tables. Please upgrade to add more.`);
      return;
    }
    const newTableNumber = tables.length + 1;
    const newTable = {
      id: newTableNumber,
      number: `T${newTableNumber}`,
      name: `Table ${newTableNumber}`
    };
    setTables([...tables, newTable]);
    setIsSaving(true);
    try {
      await base44.entities.Restaurant.update(restaurant.id, {
        settings: {
          ...restaurant.settings,
          table_count: newTableNumber
        }
      });
    } catch (e) {
      console.error("Failed to update table count", e);
      setTables(tables);
      alert("Failed to add table");
    } finally {
      setIsSaving(false);
    }
  };
  const generateQRUrl = (tableNumber) => {
    const baseUrl = window.location.origin;
    return `${baseUrl}/CustomerMenu?r=${restaurant.restaurant_id}&table=${tableNumber}`;
  };
  const downloadQR = (tableNumber, qrUrl) => {
    const svg = document.getElementById(`qr-${tableNumber}`);
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = `${tableNumber}-qr-code.png`;
      downloadLink.href = pngFile;
      downloadLink.click();
    };
    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };
  const printQR = (tableNumber) => {
    const printWindow = window.open("", "", "height=600,width=800");
    const qrUrl = generateQRUrl(tableNumber);
    printWindow.document.write(`
      <html>
        <head>
          <title>Print QR Code - ${tableNumber}</title>
          <style>
            body { 
              display: flex; 
              flex-direction: column; 
              align-items: center; 
              justify-content: center; 
              height: 100vh; 
              margin: 0; 
              font-family: Arial, sans-serif;
            }
            .qr-container { text-align: center; }
            h1 { margin-bottom: 20px; }
          </style>
        </head>
        <body>
          <div class="qr-container">
            <h1>${restaurant?.name || "Restaurant"}</h1>
            <h2>${tableNumber}</h2>
            <div id="qr"></div>
          </div>
          <script src="https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js"><\/script>
          <script>
            QRCode.toCanvas(document.getElementById('qr'), '${qrUrl}', { width: 300 }, function (error) {
              if (!error) window.print();
            });
          <\/script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };
  const downloadAll = () => {
    tables.forEach((table, index) => {
      setTimeout(() => {
        downloadQR(table.number, generateQRUrl(table.number));
      }, index * 500);
    });
  };
  const generateGeneralQRUrl = () => {
    const baseUrl = window.location.origin;
    return `${baseUrl}/CustomerMenu?r=${restaurant.restaurant_id}`;
  };
  return /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      "data-source-location": "components/dashboard/QRCodesSection:155:4",
      "data-dynamic-content": "true",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "space-y-6",
      children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/QRCodesSection:162:6", "data-dynamic-content": "true", className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/QRCodesSection:163:8", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "components/dashboard/QRCodesSection:164:10", "data-dynamic-content": "false", className: "text-xl font-bold text-gray-900", children: "QR Codes" }, void 0, false, {
              fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
              lineNumber: 183,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/QRCodesSection:165:10", "data-dynamic-content": "true", className: "text-gray-500", children: [
              "Generate QR codes for your tables and general menu",
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "components/dashboard/QRCodesSection:167:12", "data-dynamic-content": "true", className: "ml-2 text-sm font-medium text-orange-600", children: [
                "(",
                tables.length,
                " / ",
                maxTables === 999 ? "Unlimited" : maxTables,
                " tables)"
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                lineNumber: 186,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
              lineNumber: 184,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
            lineNumber: 182,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/QRCodesSection:172:8", "data-dynamic-content": "true", className: "flex gap-2", children: [
            /* @__PURE__ */ jsxDEV(
              Button,
              {
                "data-source-location": "components/dashboard/QRCodesSection:173:10",
                "data-dynamic-content": "true",
                onClick: handleAddTable,
                variant: "outline",
                disabled: tables.length >= maxTables,
                children: [
                  /* @__PURE__ */ jsxDEV(Plus, { "data-source-location": "components/dashboard/QRCodesSection:178:12", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                    lineNumber: 197,
                    columnNumber: 13
                  }, this),
                  "Add Table"
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                lineNumber: 192,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "components/dashboard/QRCodesSection:181:10", "data-dynamic-content": "true", onClick: downloadAll, className: "bg-slate-900 text-primary-foreground px-4 py-2 text-sm font-medium rounded-md inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow hover:bg-primary/90 h-9 from-orange-600 to-orange-500", children: [
              /* @__PURE__ */ jsxDEV(Download, { "data-source-location": "components/dashboard/QRCodesSection:182:12", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
                fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                lineNumber: 201,
                columnNumber: 13
              }, this),
              "Download All"
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
              lineNumber: 200,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
            lineNumber: 191,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
          lineNumber: 181,
          columnNumber: 7
        }, this),
        tables.length >= maxTables && maxTables < 999 && /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/QRCodesSection:190:6", "data-dynamic-content": "true", className: "bg-orange-50 border-orange-200", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/QRCodesSection:191:10", "data-dynamic-content": "true", className: "p-4", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/QRCodesSection:192:12", "data-dynamic-content": "true", className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxDEV(QrCode, { "data-source-location": "components/dashboard/QRCodesSection:193:14", "data-dynamic-content": "false", className: "w-5 h-5 text-orange-600 mt-0.5" }, void 0, false, {
            fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
            lineNumber: 212,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/QRCodesSection:194:14", "data-dynamic-content": "true", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/QRCodesSection:195:16", "data-dynamic-content": "false", className: "font-medium text-orange-900", children: "Table Limit Reached" }, void 0, false, {
              fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
              lineNumber: 214,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/QRCodesSection:196:16", "data-dynamic-content": "true", className: "text-sm text-orange-700 mt-1", "data-collection-item-field": "maxTables", "data-collection-item-id": id, children: [
              "You've reached your plan's table limit of ",
              maxTables,
              " tables. Upgrade to ",
              currentPlan === "trial" ? "Basic (25 tables)" : "Pro (Unlimited tables)",
              " to add more."
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
              lineNumber: 215,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
            lineNumber: 213,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
          lineNumber: 211,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
          lineNumber: 210,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
          lineNumber: 209,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/QRCodesSection:206:6", "data-dynamic-content": "true", className: "bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200", children: [
          /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "components/dashboard/QRCodesSection:207:8", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "components/dashboard/QRCodesSection:208:10", "data-dynamic-content": "false", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV(QrCode, { "data-source-location": "components/dashboard/QRCodesSection:209:12", "data-dynamic-content": "false", className: "w-5 h-5 text-violet-600" }, void 0, false, {
              fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
              lineNumber: 228,
              columnNumber: 13
            }, this),
            "General Menu QR Code (No Table Number)"
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
            lineNumber: 227,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
            lineNumber: 226,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/QRCodesSection:213:8", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/QRCodesSection:214:10", "data-dynamic-content": "true", className: "flex flex-col md:flex-row items-center gap-6", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/QRCodesSection:215:12", "data-dynamic-content": "true", className: "w-48 h-48 bg-white p-3 rounded-lg border-2 border-violet-200 shadow-md flex-shrink-0", children: /* @__PURE__ */ jsxDEV(
              QRCodeSVG,
              {
                "data-source-location": "components/dashboard/QRCodesSection:216:14",
                "data-dynamic-content": "true",
                id: "qr-general",
                value: generateGeneralQRUrl(),
                size: 168,
                level: "H"
              },
              void 0,
              false,
              {
                fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                lineNumber: 235,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
              lineNumber: 234,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/QRCodesSection:223:12", "data-dynamic-content": "true", className: "flex-1 space-y-3", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/QRCodesSection:224:14", "data-dynamic-content": "false", className: "text-gray-700", children: "This QR code links directly to your restaurant menu without any table number. Perfect for takeaway counters, delivery flyers, social media, or printed menus." }, void 0, false, {
                fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                lineNumber: 243,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/QRCodesSection:228:14", "data-dynamic-content": "true", className: "bg-white rounded-lg p-3 border", children: [
                /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/QRCodesSection:229:16", "data-dynamic-content": "false", className: "text-xs text-gray-500 mb-1", children: "QR Code Link:" }, void 0, false, {
                  fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                  lineNumber: 248,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("code", { "data-source-location": "components/dashboard/QRCodesSection:230:16", "data-dynamic-content": "true", className: "text-sm text-violet-600 break-all block", children: generateGeneralQRUrl() }, void 0, false, {
                  fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                  lineNumber: 249,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                lineNumber: 247,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/QRCodesSection:232:14", "data-dynamic-content": "true", className: "flex gap-2", children: [
                /* @__PURE__ */ jsxDEV(
                  Button,
                  {
                    "data-source-location": "components/dashboard/QRCodesSection:233:16",
                    "data-dynamic-content": "true",
                    variant: "outline",
                    onClick: () => {
                      const svg = document.getElementById("qr-general");
                      const svgData = new XMLSerializer().serializeToString(svg);
                      const canvas = document.createElement("canvas");
                      const ctx = canvas.getContext("2d");
                      const img = new Image();
                      img.onload = () => {
                        canvas.width = img.width;
                        canvas.height = img.height;
                        ctx.drawImage(img, 0, 0);
                        const pngFile = canvas.toDataURL("image/png");
                        const downloadLink = document.createElement("a");
                        downloadLink.download = `${restaurant.name}-General-Menu-QR.png`;
                        downloadLink.href = pngFile;
                        downloadLink.click();
                      };
                      img.src = "data:image/svg+xml;base64," + btoa(svgData);
                    },
                    children: [
                      /* @__PURE__ */ jsxDEV(Download, { "data-source-location": "components/dashboard/QRCodesSection:254:18", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
                        fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                        lineNumber: 273,
                        columnNumber: 19
                      }, this),
                      "Download QR"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                    lineNumber: 252,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(
                  Button,
                  {
                    "data-source-location": "components/dashboard/QRCodesSection:257:16",
                    "data-dynamic-content": "true",
                    variant: "outline",
                    onClick: () => {
                      navigator.clipboard.writeText(generateGeneralQRUrl());
                      alert("Link copied!");
                    },
                    children: "Copy Link"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                    lineNumber: 276,
                    columnNumber: 17
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                lineNumber: 251,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
              lineNumber: 242,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
            lineNumber: 233,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
            lineNumber: 232,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
          lineNumber: 225,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/QRCodesSection:273:6", "data-dynamic-content": "false", className: "bg-blue-50 border-blue-200", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/QRCodesSection:274:8", "data-dynamic-content": "false", className: "p-4", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/QRCodesSection:275:10", "data-dynamic-content": "false", className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxDEV(QrCode, { "data-source-location": "components/dashboard/QRCodesSection:276:12", "data-dynamic-content": "false", className: "w-5 h-5 text-blue-600 mt-0.5" }, void 0, false, {
            fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
            lineNumber: 295,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/QRCodesSection:277:12", "data-dynamic-content": "false", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/QRCodesSection:278:14", "data-dynamic-content": "false", className: "font-medium text-blue-900", children: "Table QR Codes" }, void 0, false, {
              fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
              lineNumber: 297,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/QRCodesSection:279:14", "data-dynamic-content": "false", className: "text-sm text-blue-700 mt-1", children: "Place these QR codes on your tables. Customers scan them to view the menu and place orders directly from their phones." }, void 0, false, {
              fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
              lineNumber: 298,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
            lineNumber: 296,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
          lineNumber: 294,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
          lineNumber: 293,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
          lineNumber: 292,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "components/dashboard/QRCodesSection:288:6", "data-dynamic-content": "false", className: "text-lg font-semibold text-gray-900", children: "Table QR Codes" }, void 0, false, {
          fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
          lineNumber: 307,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/QRCodesSection:289:6", "data-dynamic-content": "true", className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4", children: tables.map(
          (table) => /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "components/dashboard/QRCodesSection:291:8", "data-dynamic-content": "true", className: "hover:shadow-lg transition-shadow", "data-collection-item-id": table?.id, children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "components/dashboard/QRCodesSection:292:12", "data-dynamic-content": "true", className: "p-6", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/QRCodesSection:293:14", "data-dynamic-content": "true", className: "text-center space-y-3", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/QRCodesSection:295:16", "data-dynamic-content": "true", className: "space-y-1", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/QRCodesSection:296:18", "data-dynamic-content": "true", className: "text-xs text-gray-500 uppercase tracking-wide", children: restaurant?.name || "Restaurant" }, void 0, false, {
                fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                lineNumber: 315,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "components/dashboard/QRCodesSection:297:18", "data-dynamic-content": "true", className: "bg-slate-900 text-slate-100 text-2xl font-bold", "data-collection-item-field": "name", "data-collection-item-id": table?.id, children: table.name }, void 0, false, {
                fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                lineNumber: 316,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
              lineNumber: 314,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/QRCodesSection:301:16", "data-dynamic-content": "true", className: "w-40 h-40 mx-auto bg-white p-2 rounded-lg border-2 border-gray-200", children: /* @__PURE__ */ jsxDEV(
              QRCodeSVG,
              {
                "data-source-location": "components/dashboard/QRCodesSection:302:18",
                "data-dynamic-content": "true",
                id: `qr-${table.number}`,
                value: generateQRUrl(table.number),
                size: 144,
                level: "H",
                includeMargin: false
              },
              void 0,
              false,
              {
                fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                lineNumber: 321,
                columnNumber: 19
              },
              this
            ) }, void 0, false, {
              fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
              lineNumber: 320,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/QRCodesSection:311:16", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/QRCodesSection:312:18", "data-dynamic-content": "false", className: "text-sm text-gray-600", children: "Scan to view menu & order" }, void 0, false, {
                fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                lineNumber: 331,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/QRCodesSection:313:18", "data-dynamic-content": "true", className: "text-xs text-gray-400 mt-1", "data-collection-item-field": "restaurant_id", "data-collection-item-id": restaurant?.id, children: [
                "Restaurant ID: ",
                restaurant?.restaurant_id
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                lineNumber: 332,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
              lineNumber: 330,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/QRCodesSection:317:16", "data-dynamic-content": "true", className: "flex gap-2", children: [
              /* @__PURE__ */ jsxDEV(
                Button,
                {
                  "data-source-location": "components/dashboard/QRCodesSection:318:18",
                  "data-dynamic-content": "true",
                  variant: "outline",
                  size: "sm",
                  className: "flex-1",
                  onClick: () => downloadQR(table.number, generateQRUrl(table.number)),
                  children: /* @__PURE__ */ jsxDEV(Download, { "data-source-location": "components/dashboard/QRCodesSection:324:20", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                    lineNumber: 343,
                    columnNumber: 21
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                  lineNumber: 337,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                Button,
                {
                  "data-source-location": "components/dashboard/QRCodesSection:326:18",
                  "data-dynamic-content": "true",
                  variant: "outline",
                  size: "sm",
                  className: "flex-1",
                  onClick: () => printQR(table.number),
                  children: /* @__PURE__ */ jsxDEV(Printer, { "data-source-location": "components/dashboard/QRCodesSection:332:20", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                    lineNumber: 351,
                    columnNumber: 21
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                  lineNumber: 345,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                Button,
                {
                  "data-source-location": "components/dashboard/QRCodesSection:334:18",
                  "data-dynamic-content": "true",
                  variant: "outline",
                  size: "sm",
                  className: "flex-1",
                  onClick: () => setSelectedTable(table),
                  children: /* @__PURE__ */ jsxDEV(Eye, { "data-source-location": "components/dashboard/QRCodesSection:340:20", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                    fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                    lineNumber: 359,
                    columnNumber: 21
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                  lineNumber: 353,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
              lineNumber: 336,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
            lineNumber: 312,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
            lineNumber: 311,
            columnNumber: 13
          }, this) }, table.id, false, {
            fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
            lineNumber: 310,
            columnNumber: 9
          }, this)
        ) }, void 0, false, {
          fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
          lineNumber: 308,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(Dialog, { "data-source-location": "components/dashboard/QRCodesSection:350:6", "data-dynamic-content": "true", open: !!selectedTable, onOpenChange: () => setSelectedTable(null), children: /* @__PURE__ */ jsxDEV(DialogContent, { "data-source-location": "components/dashboard/QRCodesSection:351:8", "data-dynamic-content": "true", className: "max-w-md", children: [
          /* @__PURE__ */ jsxDEV(DialogHeader, { "data-source-location": "components/dashboard/QRCodesSection:352:10", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(DialogTitle, { "data-source-location": "components/dashboard/QRCodesSection:353:12", "data-dynamic-content": "true", "data-collection-item-field": "name", "data-collection-item-id": selectedTable?.id || selectedTable?._id, children: selectedTable?.name }, void 0, false, {
            fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
            lineNumber: 372,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
            lineNumber: 371,
            columnNumber: 11
          }, this),
          selectedTable && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/QRCodesSection:357:10", "data-dynamic-content": "true", className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/QRCodesSection:358:14", "data-dynamic-content": "true", className: "text-center mb-4", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/QRCodesSection:359:16", "data-dynamic-content": "true", className: "text-sm text-gray-500", "data-collection-item-field": "name", "data-collection-item-id": restaurant?.id || restaurant?._id, children: restaurant?.name }, void 0, false, {
                fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                lineNumber: 378,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "components/dashboard/QRCodesSection:360:16", "data-dynamic-content": "true", className: "text-2xl font-bold text-orange-600", "data-collection-item-field": "name", "data-collection-item-id": selectedTable?.id || selectedTable?._id, children: selectedTable.name }, void 0, false, {
                fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                lineNumber: 379,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
              lineNumber: 377,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/QRCodesSection:363:14", "data-dynamic-content": "true", className: "w-64 h-64 mx-auto bg-white p-4 rounded-lg border-2 border-gray-200 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(
              QRCodeSVG,
              {
                "data-source-location": "components/dashboard/QRCodesSection:364:16",
                "data-dynamic-content": "true",
                id: `qr-preview-${selectedTable.number}`,
                value: generateQRUrl(selectedTable.number),
                size: 224,
                level: "H",
                includeMargin: true
              },
              void 0,
              false,
              {
                fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                lineNumber: 383,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
              lineNumber: 382,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/QRCodesSection:373:14", "data-dynamic-content": "true", className: "text-center", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/QRCodesSection:374:16", "data-dynamic-content": "true", className: "text-xs text-gray-400 mb-2", "data-collection-item-field": "restaurant_id", "data-collection-item-id": restaurant?.id || restaurant?._id, children: [
                "Restaurant ID: ",
                restaurant?.restaurant_id
              ] }, void 0, true, {
                fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                lineNumber: 393,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/QRCodesSection:375:16", "data-dynamic-content": "false", className: "text-sm text-gray-500 mb-2", children: "Scan URL:" }, void 0, false, {
                fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                lineNumber: 394,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "components/dashboard/QRCodesSection:376:16", "data-dynamic-content": "true", className: "text-xs bg-gray-50 p-2 rounded break-all", children: generateQRUrl(selectedTable.number) }, void 0, false, {
                fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                lineNumber: 395,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
              lineNumber: 392,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/dashboard/QRCodesSection:381:14", "data-dynamic-content": "true", className: "flex gap-2", children: [
              /* @__PURE__ */ jsxDEV(
                Button,
                {
                  "data-source-location": "components/dashboard/QRCodesSection:382:16",
                  "data-dynamic-content": "true",
                  variant: "outline",
                  className: "flex-1",
                  onClick: () => downloadQR(selectedTable.number, generateQRUrl(selectedTable.number)),
                  children: [
                    /* @__PURE__ */ jsxDEV(Download, { "data-source-location": "components/dashboard/QRCodesSection:387:18", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
                      fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                      lineNumber: 406,
                      columnNumber: 19
                    }, this),
                    "Download"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                  lineNumber: 401,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                Button,
                {
                  "data-source-location": "components/dashboard/QRCodesSection:390:16",
                  "data-dynamic-content": "true",
                  variant: "outline",
                  className: "flex-1",
                  onClick: () => printQR(selectedTable.number),
                  children: [
                    /* @__PURE__ */ jsxDEV(Printer, { "data-source-location": "components/dashboard/QRCodesSection:395:18", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
                      fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                      lineNumber: 414,
                      columnNumber: 19
                    }, this),
                    "Print"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
                  lineNumber: 409,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
              lineNumber: 400,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
            lineNumber: 376,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
          lineNumber: 370,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
          lineNumber: 369,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/app/src/components/dashboard/QRCodesSection.jsx",
      lineNumber: 174,
      columnNumber: 5
    },
    this
  );
}
_s(QRCodesSection, "6MwA8dg/Bm3ClZTrw5aCfM4DQlw=");
_c = QRCodesSection;
var _c;
$RefreshReg$(_c, "QRCodesSection");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/dashboard/QRCodesSection.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/dashboard/QRCodesSection.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFRLHdCQUFxQiw4Q0FBNkMsd0JBQXFCLFNBQVEsV0FBVSxrQkFBbEg7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBZ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMbEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBT0E7QUFBQSxpQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFpQkE7QUFBQSxlQXpDSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTBDRTtBQUFBLGFBaERKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFrREEsS0FuREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW9EQTtBQUFBO0FBQUE7QUFBQSxJQXZQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUF3UEE7QUFFSjtBQUFDckIsR0FoWXVCSCxnQkFBYztBQUFBNEYsS0FBZDVGO0FBQWMsSUFBQTRGO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwibW90aW9uIiwiUVJDb2RlU1ZHIiwiYmFzZTQ0IiwiUXJDb2RlIiwiRG93bmxvYWQiLCJQcmludGVyIiwiUGx1cyIsIlRyYXNoMiIsIkV5ZSIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJCdXR0b24iLCJJbnB1dCIsIkxhYmVsIiwiQmFkZ2UiLCJEaWFsb2ciLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nSGVhZGVyIiwiRGlhbG9nVGl0bGUiLCJEaWFsb2dGb290ZXIiLCJRUkNvZGVzU2VjdGlvbiIsInJlc3RhdXJhbnQiLCJpZCIsIl9zIiwicGxhbkxpbWl0cyIsInRyaWFsIiwiYmFzaWMiLCJwcm8iLCJtdWx0aV9vdXRsZXQiLCJjdXJyZW50UGxhbiIsInN1YnNjcmlwdGlvbl9wbGFuIiwibWF4VGFibGVzIiwiY3VycmVudFRhYmxlQ291bnQiLCJNYXRoIiwibWluIiwic2V0dGluZ3MiLCJ0YWJsZV9jb3VudCIsInRhYmxlcyIsInNldFRhYmxlcyIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJpIiwibnVtYmVyIiwibmFtZSIsInNlbGVjdGVkVGFibGUiLCJzZXRTZWxlY3RlZFRhYmxlIiwiaXNHZW5lcmF0aW5nIiwic2V0SXNHZW5lcmF0aW5nIiwiaXNTYXZpbmciLCJzZXRJc1NhdmluZyIsImhhbmRsZUFkZFRhYmxlIiwiYWxlcnQiLCJuZXdUYWJsZU51bWJlciIsIm5ld1RhYmxlIiwiZW50aXRpZXMiLCJSZXN0YXVyYW50IiwidXBkYXRlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImdlbmVyYXRlUVJVcmwiLCJ0YWJsZU51bWJlciIsImJhc2VVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsInJlc3RhdXJhbnRfaWQiLCJkb3dubG9hZFFSIiwicXJVcmwiLCJzdmciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3ZnRGF0YSIsIlhNTFNlcmlhbGl6ZXIiLCJzZXJpYWxpemVUb1N0cmluZyIsImNhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJjdHgiLCJnZXRDb250ZXh0IiwiaW1nIiwiSW1hZ2UiLCJvbmxvYWQiLCJ3aWR0aCIsImhlaWdodCIsImRyYXdJbWFnZSIsInBuZ0ZpbGUiLCJ0b0RhdGFVUkwiLCJkb3dubG9hZExpbmsiLCJkb3dubG9hZCIsImhyZWYiLCJjbGljayIsInNyYyIsImJ0b2EiLCJwcmludFFSIiwicHJpbnRXaW5kb3ciLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsImRvd25sb2FkQWxsIiwiZm9yRWFjaCIsInRhYmxlIiwiaW5kZXgiLCJzZXRUaW1lb3V0IiwiZ2VuZXJhdGVHZW5lcmFsUVJVcmwiLCJvcGFjaXR5IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwibWFwIiwiX2lkIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiUVJDb2Rlc1NlY3Rpb24uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgUVJDb2RlU1ZHIH0gZnJvbSBcInFyY29kZS5yZWFjdFwiO1xuaW1wb3J0IHsgYmFzZTQ0IH0gZnJvbSBcIkAvYXBpL2Jhc2U0NENsaWVudFwiO1xuaW1wb3J0IHtcbiAgUXJDb2RlLCBEb3dubG9hZCwgUHJpbnRlciwgUGx1cywgVHJhc2gyLCBFeWUgfSBmcm9tXG5cImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIENhcmRIZWFkZXIsIENhcmRUaXRsZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2xhYmVsXCI7XG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYmFkZ2VcIjtcbmltcG9ydCB7XG4gIERpYWxvZyxcbiAgRGlhbG9nQ29udGVudCxcbiAgRGlhbG9nSGVhZGVyLFxuICBEaWFsb2dUaXRsZSxcbiAgRGlhbG9nRm9vdGVyIH0gZnJvbVxuXCJAL2NvbXBvbmVudHMvdWkvZGlhbG9nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFFSQ29kZXNTZWN0aW9uKHsgcmVzdGF1cmFudCwgaWQgfSkge1xuICAvLyBQbGFuLWJhc2VkIHRhYmxlIGxpbWl0c1xuICBjb25zdCBwbGFuTGltaXRzID0ge1xuICAgIHRyaWFsOiAxMCxcbiAgICBiYXNpYzogMjUsXG4gICAgcHJvOiA5OTksXG4gICAgbXVsdGlfb3V0bGV0OiA5OTlcbiAgfTtcblxuICBjb25zdCBjdXJyZW50UGxhbiA9IHJlc3RhdXJhbnQ/LnN1YnNjcmlwdGlvbl9wbGFuIHx8ICd0cmlhbCc7XG4gIGNvbnN0IG1heFRhYmxlcyA9IHBsYW5MaW1pdHNbY3VycmVudFBsYW5dO1xuICBjb25zdCBjdXJyZW50VGFibGVDb3VudCA9IE1hdGgubWluKHJlc3RhdXJhbnQ/LnNldHRpbmdzPy50YWJsZV9jb3VudCB8fCAxMCwgbWF4VGFibGVzKTtcblxuICBjb25zdCBbdGFibGVzLCBzZXRUYWJsZXNdID0gdXNlU3RhdGUoXG4gICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogY3VycmVudFRhYmxlQ291bnQgfSwgKF8sIGkpID0+ICh7XG4gICAgICBpZDogaSArIDEsXG4gICAgICBudW1iZXI6IGBUJHtpICsgMX1gLFxuICAgICAgbmFtZTogYFRhYmxlICR7aSArIDF9YFxuICAgIH0pKVxuICApO1xuICBjb25zdCBbc2VsZWN0ZWRUYWJsZSwgc2V0U2VsZWN0ZWRUYWJsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzR2VuZXJhdGluZywgc2V0SXNHZW5lcmF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzU2F2aW5nLCBzZXRJc1NhdmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQWRkVGFibGUgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHRhYmxlcy5sZW5ndGggPj0gbWF4VGFibGVzKSB7XG4gICAgICBhbGVydChgWW91J3ZlIHJlYWNoZWQgeW91ciBwbGFuJ3MgdGFibGUgbGltaXQgb2YgJHttYXhUYWJsZXN9IHRhYmxlcy4gUGxlYXNlIHVwZ3JhZGUgdG8gYWRkIG1vcmUuYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV3VGFibGVOdW1iZXIgPSB0YWJsZXMubGVuZ3RoICsgMTtcbiAgICBjb25zdCBuZXdUYWJsZSA9IHtcbiAgICAgIGlkOiBuZXdUYWJsZU51bWJlcixcbiAgICAgIG51bWJlcjogYFQke25ld1RhYmxlTnVtYmVyfWAsXG4gICAgICBuYW1lOiBgVGFibGUgJHtuZXdUYWJsZU51bWJlcn1gXG4gICAgfTtcblxuICAgIHNldFRhYmxlcyhbLi4udGFibGVzLCBuZXdUYWJsZV0pO1xuICAgIHNldElzU2F2aW5nKHRydWUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5SZXN0YXVyYW50LnVwZGF0ZShyZXN0YXVyYW50LmlkLCB7XG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgLi4ucmVzdGF1cmFudC5zZXR0aW5ncyxcbiAgICAgICAgICB0YWJsZV9jb3VudDogbmV3VGFibGVOdW1iZXJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byB1cGRhdGUgdGFibGUgY291bnRcIiwgZSk7XG4gICAgICBzZXRUYWJsZXModGFibGVzKTtcbiAgICAgIGFsZXJ0KCdGYWlsZWQgdG8gYWRkIHRhYmxlJyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzU2F2aW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2VuZXJhdGVRUlVybCA9ICh0YWJsZU51bWJlcikgPT4ge1xuICAgIGNvbnN0IGJhc2VVcmwgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xuICAgIHJldHVybiBgJHtiYXNlVXJsfS9DdXN0b21lck1lbnU/cj0ke3Jlc3RhdXJhbnQucmVzdGF1cmFudF9pZH0mdGFibGU9JHt0YWJsZU51bWJlcn1gO1xuICB9O1xuXG4gIGNvbnN0IGRvd25sb2FkUVIgPSAodGFibGVOdW1iZXIsIHFyVXJsKSA9PiB7XG4gICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHFyLSR7dGFibGVOdW1iZXJ9YCk7XG4gICAgY29uc3Qgc3ZnRGF0YSA9IG5ldyBYTUxTZXJpYWxpemVyKCkuc2VyaWFsaXplVG9TdHJpbmcoc3ZnKTtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgICAgY29uc3QgcG5nRmlsZSA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XG4gICAgICBjb25zdCBkb3dubG9hZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgIGRvd25sb2FkTGluay5kb3dubG9hZCA9IGAke3RhYmxlTnVtYmVyfS1xci1jb2RlLnBuZ2A7XG4gICAgICBkb3dubG9hZExpbmsuaHJlZiA9IHBuZ0ZpbGU7XG4gICAgICBkb3dubG9hZExpbmsuY2xpY2soKTtcbiAgICB9O1xuICAgIGltZy5zcmMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsXCIgKyBidG9hKHN2Z0RhdGEpO1xuICB9O1xuXG4gIGNvbnN0IHByaW50UVIgPSAodGFibGVOdW1iZXIpID0+IHtcbiAgICBjb25zdCBwcmludFdpbmRvdyA9IHdpbmRvdy5vcGVuKCcnLCAnJywgJ2hlaWdodD02MDAsd2lkdGg9ODAwJyk7XG4gICAgY29uc3QgcXJVcmwgPSBnZW5lcmF0ZVFSVXJsKHRhYmxlTnVtYmVyKTtcbiAgICBwcmludFdpbmRvdy5kb2N1bWVudC53cml0ZShgXG4gICAgICA8aHRtbD5cbiAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlByaW50IFFSIENvZGUgLSAke3RhYmxlTnVtYmVyfTwvdGl0bGU+XG4gICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgYm9keSB7IFxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7IFxuICAgICAgICAgICAgICBtYXJnaW46IDA7IFxuICAgICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucXItY29udGFpbmVyIHsgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgICAgICAgICBoMSB7IG1hcmdpbi1ib3R0b206IDIwcHg7IH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2hlYWQ+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJxci1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMT4ke3Jlc3RhdXJhbnQ/Lm5hbWUgfHwgJ1Jlc3RhdXJhbnQnfTwvaDE+XG4gICAgICAgICAgICA8aDI+JHt0YWJsZU51bWJlcn08L2gyPlxuICAgICAgICAgICAgPGRpdiBpZD1cInFyXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3FyY29kZUAxLjUuMy9idWlsZC9xcmNvZGUubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgPHNjcmlwdD5cbiAgICAgICAgICAgIFFSQ29kZS50b0NhbnZhcyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXInKSwgJyR7cXJVcmx9JywgeyB3aWR0aDogMzAwIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICBpZiAoIWVycm9yKSB3aW5kb3cucHJpbnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIDwvc2NyaXB0PlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+XG4gICAgYCk7XG4gICAgcHJpbnRXaW5kb3cuZG9jdW1lbnQuY2xvc2UoKTtcbiAgfTtcblxuICBjb25zdCBkb3dubG9hZEFsbCA9ICgpID0+IHtcbiAgICB0YWJsZXMuZm9yRWFjaCgodGFibGUsIGluZGV4KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZG93bmxvYWRRUih0YWJsZS5udW1iZXIsIGdlbmVyYXRlUVJVcmwodGFibGUubnVtYmVyKSk7XG4gICAgICB9LCBpbmRleCAqIDUwMCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gR2VuZXJhbCBSZXN0YXVyYW50IFFSICh3aXRob3V0IHRhYmxlKVxuICBjb25zdCBnZW5lcmF0ZUdlbmVyYWxRUlVybCA9ICgpID0+IHtcbiAgICBjb25zdCBiYXNlVXJsID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbjtcbiAgICByZXR1cm4gYCR7YmFzZVVybH0vQ3VzdG9tZXJNZW51P3I9JHtyZXN0YXVyYW50LnJlc3RhdXJhbnRfaWR9YDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb246MTU1OjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxuICAgIGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuXG4gICAgICB7LyogSGVhZGVyICovfVxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1FSQ29kZXNTZWN0aW9uOjE2Mjo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBtZDppdGVtcy1jZW50ZXIgbWQ6anVzdGlmeS1iZXR3ZWVuIGdhcC00XCI+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9RUkNvZGVzU2VjdGlvbjoxNjM6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgIDxoMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1FSQ29kZXNTZWN0aW9uOjE2NDoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwXCI+UVIgQ29kZXM8L2gyPlxuICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb246MTY1OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgR2VuZXJhdGUgUVIgY29kZXMgZm9yIHlvdXIgdGFibGVzIGFuZCBnZW5lcmFsIG1lbnVcbiAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb246MTY3OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWwtMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtb3JhbmdlLTYwMFwiPlxuICAgICAgICAgICAgICAoe3RhYmxlcy5sZW5ndGh9IC8ge21heFRhYmxlcyA9PT0gOTk5ID8gJ1VubGltaXRlZCcgOiBtYXhUYWJsZXN9IHRhYmxlcylcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb246MTcyOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1FSQ29kZXNTZWN0aW9uOjE3MzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQWRkVGFibGV9XG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgIGRpc2FibGVkPXt0YWJsZXMubGVuZ3RoID49IG1heFRhYmxlc30+XG5cbiAgICAgICAgICAgIDxQbHVzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb246MTc4OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgbXItMlwiIC8+XG4gICAgICAgICAgICBBZGQgVGFibGVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb246MTgxOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgb25DbGljaz17ZG93bmxvYWRBbGx9IGNsYXNzTmFtZT1cImJnLXNsYXRlLTkwMCB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBweC00IHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSByb3VuZGVkLW1kIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiB3aGl0ZXNwYWNlLW5vd3JhcCB0cmFuc2l0aW9uLWNvbG9ycyBmb2N1cy12aXNpYmxlOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctMSBmb2N1cy12aXNpYmxlOnJpbmctcmluZyBkaXNhYmxlZDpwb2ludGVyLWV2ZW50cy1ub25lIGRpc2FibGVkOm9wYWNpdHktNTAgWyZfc3ZnXTpwb2ludGVyLWV2ZW50cy1ub25lIFsmX3N2Z106c2l6ZS00IFsmX3N2Z106c2hyaW5rLTAgc2hhZG93IGhvdmVyOmJnLXByaW1hcnkvOTAgaC05IGZyb20tb3JhbmdlLTYwMCB0by1vcmFuZ2UtNTAwXCI+XG4gICAgICAgICAgICA8RG93bmxvYWQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9RUkNvZGVzU2VjdGlvbjoxODI6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCBtci0yXCIgLz5cbiAgICAgICAgICAgIERvd25sb2FkIEFsbFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogUGxhbiBMaW1pdCBXYXJuaW5nICovfVxuICAgICAge3RhYmxlcy5sZW5ndGggPj0gbWF4VGFibGVzICYmIG1heFRhYmxlcyA8IDk5OSAmJlxuICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9RUkNvZGVzU2VjdGlvbjoxOTA6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImJnLW9yYW5nZS01MCBib3JkZXItb3JhbmdlLTIwMFwiPlxuICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1FSQ29kZXNTZWN0aW9uOjE5MToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1FSQ29kZXNTZWN0aW9uOjE5MjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgPFFyQ29kZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1FSQ29kZXNTZWN0aW9uOjE5MzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtb3JhbmdlLTYwMCBtdC0wLjVcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb246MTk0OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9RUkNvZGVzU2VjdGlvbjoxOTU6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1vcmFuZ2UtOTAwXCI+VGFibGUgTGltaXQgUmVhY2hlZDwvcD5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1FSQ29kZXNTZWN0aW9uOjE5NjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1vcmFuZ2UtNzAwIG10LTFcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIm1heFRhYmxlc1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtpZH0+XG4gICAgICAgICAgICAgICAgICBZb3UndmUgcmVhY2hlZCB5b3VyIHBsYW4ncyB0YWJsZSBsaW1pdCBvZiB7bWF4VGFibGVzfSB0YWJsZXMuIFVwZ3JhZGUgdG8ge2N1cnJlbnRQbGFuID09PSAndHJpYWwnID8gJ0Jhc2ljICgyNSB0YWJsZXMpJyA6ICdQcm8gKFVubGltaXRlZCB0YWJsZXMpJ30gdG8gYWRkIG1vcmUuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIH1cblxuICAgICAgey8qIEdlbmVyYWwgUVIgQ29kZSAqL31cbiAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb246MjA2OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1iciBmcm9tLXZpb2xldC01MCB0by1wdXJwbGUtNTAgYm9yZGVyLXZpb2xldC0yMDBcIj5cbiAgICAgICAgPENhcmRIZWFkZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9RUkNvZGVzU2VjdGlvbjoyMDc6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICA8Q2FyZFRpdGxlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb246MjA4OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICA8UXJDb2RlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb246MjA5OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC12aW9sZXQtNjAwXCIgLz5cbiAgICAgICAgICAgIEdlbmVyYWwgTWVudSBRUiBDb2RlIChObyBUYWJsZSBOdW1iZXIpXG4gICAgICAgICAgPC9DYXJkVGl0bGU+XG4gICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb246MjEzOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb246MjE0OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIgZ2FwLTZcIj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9RUkNvZGVzU2VjdGlvbjoyMTU6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ3LTQ4IGgtNDggYmctd2hpdGUgcC0zIHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLXZpb2xldC0yMDAgc2hhZG93LW1kIGZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgPFFSQ29kZVNWRyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1FSQ29kZXNTZWN0aW9uOjIxNjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGlkPVwicXItZ2VuZXJhbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtnZW5lcmF0ZUdlbmVyYWxRUlVybCgpfVxuICAgICAgICAgICAgICBzaXplPXsxNjh9XG4gICAgICAgICAgICAgIGxldmVsPVwiSFwiIC8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1FSQ29kZXNTZWN0aW9uOjIyMzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXgtMSBzcGFjZS15LTNcIj5cbiAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9RUkNvZGVzU2VjdGlvbjoyMjQ6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgIFRoaXMgUVIgY29kZSBsaW5rcyBkaXJlY3RseSB0byB5b3VyIHJlc3RhdXJhbnQgbWVudSB3aXRob3V0IGFueSB0YWJsZSBudW1iZXIuXG4gICAgICAgICAgICAgICAgUGVyZmVjdCBmb3IgdGFrZWF3YXkgY291bnRlcnMsIGRlbGl2ZXJ5IGZseWVycywgc29jaWFsIG1lZGlhLCBvciBwcmludGVkIG1lbnVzLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9RUkNvZGVzU2VjdGlvbjoyMjg6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLWxnIHAtMyBib3JkZXJcIj5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1FSQ29kZXNTZWN0aW9uOjIyOToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDAgbWItMVwiPlFSIENvZGUgTGluazo8L3A+XG4gICAgICAgICAgICAgICAgPGNvZGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9RUkNvZGVzU2VjdGlvbjoyMzA6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtdmlvbGV0LTYwMCBicmVhay1hbGwgYmxvY2tcIj57Z2VuZXJhdGVHZW5lcmFsUVJVcmwoKX08L2NvZGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb246MjMyOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9RUkNvZGVzU2VjdGlvbjoyMzM6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXItZ2VuZXJhbCcpO1xuICAgICAgICAgICAgICAgICAgY29uc3Qgc3ZnRGF0YSA9IG5ldyBYTUxTZXJpYWxpemVyKCkuc2VyaWFsaXplVG9TdHJpbmcoc3ZnKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgICAgICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSBpbWcud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBuZ0ZpbGUgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkb3dubG9hZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRMaW5rLmRvd25sb2FkID0gYCR7cmVzdGF1cmFudC5uYW1lfS1HZW5lcmFsLU1lbnUtUVIucG5nYDtcbiAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRMaW5rLmhyZWYgPSBwbmdGaWxlO1xuICAgICAgICAgICAgICAgICAgICBkb3dubG9hZExpbmsuY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICBpbWcuc3JjID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFwiICsgYnRvYShzdmdEYXRhKTtcbiAgICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgICAgPERvd25sb2FkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb246MjU0OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgbXItMlwiIC8+XG4gICAgICAgICAgICAgICAgICBEb3dubG9hZCBRUlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9RUkNvZGVzU2VjdGlvbjoyNTc6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChnZW5lcmF0ZUdlbmVyYWxRUlVybCgpKTtcbiAgICAgICAgICAgICAgICAgIGFsZXJ0KCdMaW5rIGNvcGllZCEnKTtcbiAgICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgICAgQ29weSBMaW5rXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICA8L0NhcmQ+XG5cbiAgICAgIHsvKiBJbmZvIENhcmQgKi99XG4gICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1FSQ29kZXNTZWN0aW9uOjI3Mzo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAgYm9yZGVyLWJsdWUtMjAwXCI+XG4gICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1FSQ29kZXNTZWN0aW9uOjI3NDo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9RUkNvZGVzU2VjdGlvbjoyNzU6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtM1wiPlxuICAgICAgICAgICAgPFFyQ29kZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1FSQ29kZXNTZWN0aW9uOjI3NjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtYmx1ZS02MDAgbXQtMC41XCIgLz5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9RUkNvZGVzU2VjdGlvbjoyNzc6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb246Mjc4OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtYmx1ZS05MDBcIj5UYWJsZSBRUiBDb2RlczwvcD5cbiAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9RUkNvZGVzU2VjdGlvbjoyNzk6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWJsdWUtNzAwIG10LTFcIj5cbiAgICAgICAgICAgICAgICBQbGFjZSB0aGVzZSBRUiBjb2RlcyBvbiB5b3VyIHRhYmxlcy4gQ3VzdG9tZXJzIHNjYW4gdGhlbSB0byB2aWV3IHRoZSBtZW51IGFuZCBwbGFjZSBvcmRlcnMgZGlyZWN0bHkgZnJvbSB0aGVpciBwaG9uZXMuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPC9DYXJkPlxuXG4gICAgICB7LyogUVIgQ29kZXMgR3JpZCAqL31cbiAgICAgIDxoMyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1FSQ29kZXNTZWN0aW9uOjI4ODo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+VGFibGUgUVIgQ29kZXM8L2gzPlxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1FSQ29kZXNTZWN0aW9uOjI4OTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyB4bDpncmlkLWNvbHMtNCBnYXAtNFwiPlxuICAgICAgICB7dGFibGVzLm1hcCgodGFibGUpID0+XG4gICAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb246MjkxOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e3RhYmxlLmlkfSBjbGFzc05hbWU9XCJob3ZlcjpzaGFkb3ctbGcgdHJhbnNpdGlvbi1zaGFkb3dcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17dGFibGU/LmlkfT5cbiAgICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1FSQ29kZXNTZWN0aW9uOjI5MjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInAtNlwiPlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb246MjkzOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgc3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgICAgey8qIFJlc3RhdXJhbnQgSW5mbyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb246Mjk1OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1FSQ29kZXNTZWN0aW9uOjI5NjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZVwiPntyZXN0YXVyYW50Py5uYW1lIHx8ICdSZXN0YXVyYW50J308L3A+XG4gICAgICAgICAgICAgICAgICA8aDMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9RUkNvZGVzU2VjdGlvbjoyOTc6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJiZy1zbGF0ZS05MDAgdGV4dC1zbGF0ZS0xMDAgdGV4dC0yeGwgZm9udC1ib2xkXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJuYW1lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3RhYmxlPy5pZH0+e3RhYmxlLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBRUiBDb2RlICovfVxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9RUkNvZGVzU2VjdGlvbjozMDE6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ3LTQwIGgtNDAgbXgtYXV0byBiZy13aGl0ZSBwLTIgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItZ3JheS0yMDBcIj5cbiAgICAgICAgICAgICAgICAgIDxRUkNvZGVTVkcgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9RUkNvZGVzU2VjdGlvbjozMDI6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgIGlkPXtgcXItJHt0YWJsZS5udW1iZXJ9YH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17Z2VuZXJhdGVRUlVybCh0YWJsZS5udW1iZXIpfVxuICAgICAgICAgICAgICAgIHNpemU9ezE0NH1cbiAgICAgICAgICAgICAgICBsZXZlbD1cIkhcIlxuICAgICAgICAgICAgICAgIGluY2x1ZGVNYXJnaW49e2ZhbHNlfSAvPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb246MzExOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1FSQ29kZXNTZWN0aW9uOjMxMjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5TY2FuIHRvIHZpZXcgbWVudSAmIG9yZGVyPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9RUkNvZGVzU2VjdGlvbjozMTM6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS00MDAgbXQtMVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicmVzdGF1cmFudF9pZFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtyZXN0YXVyYW50Py5pZH0+UmVzdGF1cmFudCBJRDoge3Jlc3RhdXJhbnQ/LnJlc3RhdXJhbnRfaWR9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIEFjdGlvbnMgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1FSQ29kZXNTZWN0aW9uOjMxNzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9RUkNvZGVzU2VjdGlvbjozMTg6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZG93bmxvYWRRUih0YWJsZS5udW1iZXIsIGdlbmVyYXRlUVJVcmwodGFibGUubnVtYmVyKSl9PlxuXG4gICAgICAgICAgICAgICAgICAgIDxEb3dubG9hZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1FSQ29kZXNTZWN0aW9uOjMyNDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1FSQ29kZXNTZWN0aW9uOjMyNjoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcmludFFSKHRhYmxlLm51bWJlcil9PlxuXG4gICAgICAgICAgICAgICAgICAgIDxQcmludGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb246MzMyOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb246MzM0OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTFcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkVGFibGUodGFibGUpfT5cblxuICAgICAgICAgICAgICAgICAgICA8RXllIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb246MzQwOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIFByZXZpZXcgRGlhbG9nICovfVxuICAgICAgPERpYWxvZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1FSQ29kZXNTZWN0aW9uOjM1MDo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgb3Blbj17ISFzZWxlY3RlZFRhYmxlfSBvbk9wZW5DaGFuZ2U9eygpID0+IHNldFNlbGVjdGVkVGFibGUobnVsbCl9PlxuICAgICAgICA8RGlhbG9nQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1FSQ29kZXNTZWN0aW9uOjM1MTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWF4LXctbWRcIj5cbiAgICAgICAgICA8RGlhbG9nSGVhZGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb246MzUyOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICA8RGlhbG9nVGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9RUkNvZGVzU2VjdGlvbjozNTM6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIm5hbWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2VsZWN0ZWRUYWJsZT8uaWQgfHwgc2VsZWN0ZWRUYWJsZT8uX2lkfT57c2VsZWN0ZWRUYWJsZT8ubmFtZX08L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgIDwvRGlhbG9nSGVhZGVyPlxuICAgICAgICAgIFxuICAgICAgICAgIHtzZWxlY3RlZFRhYmxlICYmXG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1FSQ29kZXNTZWN0aW9uOjM1NzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb246MzU4OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItNFwiPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb246MzU5OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJuYW1lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3Jlc3RhdXJhbnQ/LmlkIHx8IHJlc3RhdXJhbnQ/Ll9pZH0+e3Jlc3RhdXJhbnQ/Lm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDxoMyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1FSQ29kZXNTZWN0aW9uOjM2MDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LW9yYW5nZS02MDBcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cIm5hbWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c2VsZWN0ZWRUYWJsZT8uaWQgfHwgc2VsZWN0ZWRUYWJsZT8uX2lkfT57c2VsZWN0ZWRUYWJsZS5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9RUkNvZGVzU2VjdGlvbjozNjM6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ3LTY0IGgtNjQgbXgtYXV0byBiZy13aGl0ZSBwLTQgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItZ3JheS0yMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8UVJDb2RlU1ZHIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb246MzY0OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgaWQ9e2Bxci1wcmV2aWV3LSR7c2VsZWN0ZWRUYWJsZS5udW1iZXJ9YH1cbiAgICAgICAgICAgICAgdmFsdWU9e2dlbmVyYXRlUVJVcmwoc2VsZWN0ZWRUYWJsZS5udW1iZXIpfVxuICAgICAgICAgICAgICBzaXplPXsyMjR9XG4gICAgICAgICAgICAgIGxldmVsPVwiSFwiXG4gICAgICAgICAgICAgIGluY2x1ZGVNYXJnaW49e3RydWV9IC8+XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb246MzczOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1FSQ29kZXNTZWN0aW9uOjM3NDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTQwMCBtYi0yXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJyZXN0YXVyYW50X2lkXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3Jlc3RhdXJhbnQ/LmlkIHx8IHJlc3RhdXJhbnQ/Ll9pZH0+UmVzdGF1cmFudCBJRDoge3Jlc3RhdXJhbnQ/LnJlc3RhdXJhbnRfaWR9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb246Mzc1OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBtYi0yXCI+U2NhbiBVUkw6PC9wPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb246Mzc2OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC14cyBiZy1ncmF5LTUwIHAtMiByb3VuZGVkIGJyZWFrLWFsbFwiPlxuICAgICAgICAgICAgICAgICAge2dlbmVyYXRlUVJVcmwoc2VsZWN0ZWRUYWJsZS5udW1iZXIpfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1FSQ29kZXNTZWN0aW9uOjM4MToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9kYXNoYm9hcmQvUVJDb2Rlc1NlY3Rpb246MzgyOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTFcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkb3dubG9hZFFSKHNlbGVjdGVkVGFibGUubnVtYmVyLCBnZW5lcmF0ZVFSVXJsKHNlbGVjdGVkVGFibGUubnVtYmVyKSl9PlxuXG4gICAgICAgICAgICAgICAgICA8RG93bmxvYWQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL2Rhc2hib2FyZC9RUkNvZGVzU2VjdGlvbjozODc6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCBtci0yXCIgLz5cbiAgICAgICAgICAgICAgICAgIERvd25sb2FkXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1FSQ29kZXNTZWN0aW9uOjM5MDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJpbnRRUihzZWxlY3RlZFRhYmxlLm51bWJlcil9PlxuXG4gICAgICAgICAgICAgICAgICA8UHJpbnRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvZGFzaGJvYXJkL1FSQ29kZXNTZWN0aW9uOjM5NToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgUHJpbnRcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgIDwvRGlhbG9nPlxuICAgIDwvbW90aW9uLmRpdj4pO1xuXG59Il0sImZpbGUiOiIvYXBwL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9RUkNvZGVzU2VjdGlvbi5qc3gifQ==