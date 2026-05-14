import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/QRCodes.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=79425e35"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/QRCodes.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=79425e35"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { base44 } from "/src/api/base44Client.js";
import DashboardLayout from "/src/components/dashboard/DashboardLayout.jsx";
import {
  QrCode,
  Download,
  Printer,
  Copy,
  Check,
  ExternalLink,
  Table,
  Plus,
  Minus
} from "/node_modules/.vite/deps/lucide-react.js?v=79425e35";
import { Card, CardContent, CardHeader, CardTitle } from "/src/components/ui/card.jsx";
import { Button } from "/src/components/ui/button.jsx";
import { Input } from "/src/components/ui/input.jsx";
import { Label } from "/src/components/ui/label.jsx";
import { Badge } from "/src/components/ui/badge.jsx";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "/src/components/ui/tabs.jsx";
function QRCodesContent({ user, restaurant, id }) {
  _s();
  const [tableCount, setTableCount] = useState(restaurant?.settings?.table_count || 10);
  const [copied, setCopied] = useState(null);
  const [selectedSize, setSelectedSize] = useState("medium");
  const baseUrl = window.location.origin;
  const menuUrl = `${baseUrl}/CustomerMenu?r=${restaurant?.restaurant_id}`;
  const sizes = {
    small: { width: 150, label: "Small (150px)" },
    medium: { width: 250, label: "Medium (250px)" },
    large: { width: 350, label: "Large (350px)" }
  };
  const getQRCodeUrl = (data, size = 250) => {
    return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(data)}`;
  };
  const copyToClipboard = (text, id2) => {
    navigator.clipboard.writeText(text);
    setCopied(id2);
    setTimeout(() => setCopied(null), 2e3);
  };
  const downloadQR = (url, filename) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const printQRCode = (tableNumber = null) => {
    const url = tableNumber ? `${menuUrl}&table=${tableNumber}` : menuUrl;
    const qrUrl = getQRCodeUrl(url, 300);
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>QR Code - ${restaurant?.name}</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              text-align: center; 
              padding: 40px;
            }
            .qr-container {
              display: inline-block;
              padding: 20px;
              border: 2px solid #e5e7eb;
              border-radius: 16px;
            }
            h1 { color: #7c3aed; margin-bottom: 10px; }
            h2 { color: #374151; margin-bottom: 20px; }
            img { margin: 20px 0; }
            p { color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="qr-container">
            <h1>${restaurant?.name}</h1>
            ${tableNumber ? `<h2>Table ${tableNumber}</h2>` : ""}
            <img src="${qrUrl}" alt="QR Code" />
            <p>Scan to view our menu & order</p>
          </div>
          <script>
            window.onload = function() { window.print(); }
          <\/script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/QRCodes:94:4", "data-dynamic-content": "true", className: "space-y-6", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/QRCodes:96:6", "data-dynamic-content": "false", className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/QRCodes:97:8", "data-dynamic-content": "false", children: [
      /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/QRCodes:98:10", "data-dynamic-content": "false", className: "text-2xl font-bold text-gray-900", children: "QR Codes" }, void 0, false, {
        fileName: "/app/src/pages/QRCodes.jsx",
        lineNumber: 117,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/QRCodes:99:10", "data-dynamic-content": "false", className: "text-gray-500", children: "Generate QR codes for your tables and menu" }, void 0, false, {
        fileName: "/app/src/pages/QRCodes.jsx",
        lineNumber: 118,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/QRCodes.jsx",
      lineNumber: 116,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/QRCodes.jsx",
      lineNumber: 115,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Tabs, { "data-source-location": "pages/QRCodes:103:6", "data-dynamic-content": "true", defaultValue: "general", className: "space-y-6", children: [
      /* @__PURE__ */ jsxDEV(TabsList, { "data-source-location": "pages/QRCodes:104:8", "data-dynamic-content": "false", children: [
        /* @__PURE__ */ jsxDEV(TabsTrigger, { "data-source-location": "pages/QRCodes:105:10", "data-dynamic-content": "false", value: "general", children: "General Menu QR" }, void 0, false, {
          fileName: "/app/src/pages/QRCodes.jsx",
          lineNumber: 124,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(TabsTrigger, { "data-source-location": "pages/QRCodes:106:10", "data-dynamic-content": "false", value: "tables", children: "Table-Specific QR" }, void 0, false, {
          fileName: "/app/src/pages/QRCodes.jsx",
          lineNumber: 125,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/QRCodes.jsx",
        lineNumber: 123,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(TabsContent, { "data-source-location": "pages/QRCodes:110:8", "data-dynamic-content": "true", value: "general", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/QRCodes:111:10", "data-dynamic-content": "true", className: "grid lg:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/QRCodes:112:12", "data-dynamic-content": "true", children: [
          /* @__PURE__ */ jsxDEV(CardHeader, { "data-source-location": "pages/QRCodes:113:14", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(CardTitle, { "data-source-location": "pages/QRCodes:114:16", "data-dynamic-content": "false", children: "General Menu QR Code" }, void 0, false, {
            fileName: "/app/src/pages/QRCodes.jsx",
            lineNumber: 133,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/src/pages/QRCodes.jsx",
            lineNumber: 132,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/QRCodes:116:14", "data-dynamic-content": "true", className: "space-y-6", children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/QRCodes:117:16", "data-dynamic-content": "false", className: "text-gray-600", children: "This QR code links directly to your restaurant's digital menu. Use it for general purposes like marketing materials, social media, or entry displays." }, void 0, false, {
              fileName: "/app/src/pages/QRCodes.jsx",
              lineNumber: 136,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/QRCodes:123:16", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/QRCodes:124:18", "data-dynamic-content": "false", className: "mb-2 block", children: "QR Code Size" }, void 0, false, {
                fileName: "/app/src/pages/QRCodes.jsx",
                lineNumber: 143,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/QRCodes:125:18", "data-dynamic-content": "true", className: "flex gap-2", children: Object.entries(sizes).map(
                ([key, { label }]) => /* @__PURE__ */ jsxDEV(
                  Button,
                  {
                    "data-source-location": "pages/QRCodes:127:22",
                    "data-dynamic-content": "true",
                    variant: selectedSize === key ? "default" : "outline",
                    onClick: () => setSelectedSize(key),
                    className: selectedSize === key ? "bg-violet-600" : "",
                    "data-collection-item-field": "label",
                    children: label
                  },
                  key,
                  false,
                  {
                    fileName: "/app/src/pages/QRCodes.jsx",
                    lineNumber: 146,
                    columnNumber: 21
                  },
                  this
                )
              ) }, void 0, false, {
                fileName: "/app/src/pages/QRCodes.jsx",
                lineNumber: 144,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/QRCodes.jsx",
              lineNumber: 142,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/QRCodes:140:16", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV(Label, { "data-source-location": "pages/QRCodes:141:18", "data-dynamic-content": "false", className: "mb-2 block", children: "Menu URL" }, void 0, false, {
                fileName: "/app/src/pages/QRCodes.jsx",
                lineNumber: 160,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/QRCodes:142:18", "data-dynamic-content": "true", className: "flex gap-2", children: [
                /* @__PURE__ */ jsxDEV(Input, { "data-source-location": "pages/QRCodes:143:20", "data-dynamic-content": "true", value: menuUrl, readOnly: true, className: "bg-gray-50" }, void 0, false, {
                  fileName: "/app/src/pages/QRCodes.jsx",
                  lineNumber: 162,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV(
                  Button,
                  {
                    "data-source-location": "pages/QRCodes:144:20",
                    "data-dynamic-content": "true",
                    variant: "outline",
                    onClick: () => copyToClipboard(menuUrl, "main"),
                    children: copied === "main" ? /* @__PURE__ */ jsxDEV(Check, { "data-source-location": "pages/QRCodes:148:43", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                      fileName: "/app/src/pages/QRCodes.jsx",
                      lineNumber: 167,
                      columnNumber: 44
                    }, this) : /* @__PURE__ */ jsxDEV(Copy, { "data-source-location": "pages/QRCodes:148:75", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                      fileName: "/app/src/pages/QRCodes.jsx",
                      lineNumber: 167,
                      columnNumber: 149
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/pages/QRCodes.jsx",
                    lineNumber: 163,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV("a", { "data-source-location": "pages/QRCodes:150:20", "data-dynamic-content": "true", href: menuUrl, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/QRCodes:151:22", "data-dynamic-content": "false", variant: "outline", children: /* @__PURE__ */ jsxDEV(ExternalLink, { "data-source-location": "pages/QRCodes:152:24", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                  fileName: "/app/src/pages/QRCodes.jsx",
                  lineNumber: 171,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "/app/src/pages/QRCodes.jsx",
                  lineNumber: 170,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "/app/src/pages/QRCodes.jsx",
                  lineNumber: 169,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/QRCodes.jsx",
                lineNumber: 161,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/QRCodes.jsx",
              lineNumber: 159,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/QRCodes.jsx",
            lineNumber: 135,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/QRCodes.jsx",
          lineNumber: 131,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/QRCodes:160:12", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/QRCodes:161:14", "data-dynamic-content": "true", className: "p-6 flex flex-col items-center justify-center", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/QRCodes:162:16", "data-dynamic-content": "true", className: "bg-white p-6 rounded-2xl shadow-lg border border-gray-100", children: /* @__PURE__ */ jsxDEV(
            "img",
            {
              "data-source-location": "pages/QRCodes:163:18",
              "data-dynamic-content": "true",
              src: getQRCodeUrl(menuUrl, sizes[selectedSize].width),
              alt: "Menu QR Code",
              className: "mx-auto"
            },
            void 0,
            false,
            {
              fileName: "/app/src/pages/QRCodes.jsx",
              lineNumber: 182,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "/app/src/pages/QRCodes.jsx",
            lineNumber: 181,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/QRCodes:169:16", "data-dynamic-content": "true", className: "mt-6 text-center", children: [
            /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/QRCodes:170:18", "data-dynamic-content": "true", className: "font-semibold text-lg", "data-collection-item-field": "name", "data-collection-item-id": restaurant?.id || restaurant?._id, children: restaurant?.name }, void 0, false, {
              fileName: "/app/src/pages/QRCodes.jsx",
              lineNumber: 189,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/QRCodes:171:18", "data-dynamic-content": "false", className: "text-gray-500 text-sm mt-1", children: "Scan to view menu" }, void 0, false, {
              fileName: "/app/src/pages/QRCodes.jsx",
              lineNumber: 190,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/QRCodes.jsx",
            lineNumber: 188,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/QRCodes:173:16", "data-dynamic-content": "true", className: "flex gap-3 mt-6", children: [
            /* @__PURE__ */ jsxDEV(
              Button,
              {
                "data-source-location": "pages/QRCodes:174:18",
                "data-dynamic-content": "true",
                variant: "outline",
                onClick: () => downloadQR(getQRCodeUrl(menuUrl, 500), `${restaurant?.name}-menu-qr.png`),
                children: [
                  /* @__PURE__ */ jsxDEV(Download, { "data-source-location": "pages/QRCodes:178:20", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
                    fileName: "/app/src/pages/QRCodes.jsx",
                    lineNumber: 197,
                    columnNumber: 21
                  }, this),
                  "Download"
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/src/pages/QRCodes.jsx",
                lineNumber: 193,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/QRCodes:181:18", "data-dynamic-content": "true", onClick: () => printQRCode(), children: [
              /* @__PURE__ */ jsxDEV(Printer, { "data-source-location": "pages/QRCodes:182:20", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
                fileName: "/app/src/pages/QRCodes.jsx",
                lineNumber: 201,
                columnNumber: 21
              }, this),
              "Print"
            ] }, void 0, true, {
              fileName: "/app/src/pages/QRCodes.jsx",
              lineNumber: 200,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/QRCodes.jsx",
            lineNumber: 192,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/QRCodes.jsx",
          lineNumber: 180,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/QRCodes.jsx",
          lineNumber: 179,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/QRCodes.jsx",
        lineNumber: 130,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/QRCodes.jsx",
        lineNumber: 129,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(TabsContent, { "data-source-location": "pages/QRCodes:192:8", "data-dynamic-content": "true", value: "tables", children: [
        /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/QRCodes:193:10", "data-dynamic-content": "true", className: "mb-6", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/QRCodes:194:12", "data-dynamic-content": "true", className: "p-4", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/QRCodes:195:14", "data-dynamic-content": "true", className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/QRCodes:196:16", "data-dynamic-content": "false", children: [
            /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/QRCodes:197:18", "data-dynamic-content": "false", className: "font-medium", children: "Number of Tables" }, void 0, false, {
              fileName: "/app/src/pages/QRCodes.jsx",
              lineNumber: 216,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/QRCodes:198:18", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Generate QR codes for each table" }, void 0, false, {
              fileName: "/app/src/pages/QRCodes.jsx",
              lineNumber: 217,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/QRCodes.jsx",
            lineNumber: 215,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/QRCodes:200:16", "data-dynamic-content": "true", className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV(
              Button,
              {
                "data-source-location": "pages/QRCodes:201:18",
                "data-dynamic-content": "true",
                variant: "outline",
                size: "icon",
                onClick: () => setTableCount(Math.max(1, tableCount - 1)),
                children: /* @__PURE__ */ jsxDEV(Minus, { "data-source-location": "pages/QRCodes:206:20", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                  fileName: "/app/src/pages/QRCodes.jsx",
                  lineNumber: 225,
                  columnNumber: 21
                }, this)
              },
              void 0,
              false,
              {
                fileName: "/app/src/pages/QRCodes.jsx",
                lineNumber: 220,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/QRCodes:208:18", "data-dynamic-content": "true", className: "text-2xl font-bold w-12 text-center", "data-collection-item-field": "tableCount", "data-collection-item-id": id, children: tableCount }, void 0, false, {
              fileName: "/app/src/pages/QRCodes.jsx",
              lineNumber: 227,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(
              Button,
              {
                "data-source-location": "pages/QRCodes:209:18",
                "data-dynamic-content": "true",
                variant: "outline",
                size: "icon",
                onClick: () => setTableCount(tableCount + 1),
                children: /* @__PURE__ */ jsxDEV(Plus, { "data-source-location": "pages/QRCodes:214:20", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                  fileName: "/app/src/pages/QRCodes.jsx",
                  lineNumber: 233,
                  columnNumber: 21
                }, this)
              },
              void 0,
              false,
              {
                fileName: "/app/src/pages/QRCodes.jsx",
                lineNumber: 228,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/src/pages/QRCodes.jsx",
            lineNumber: 219,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/QRCodes.jsx",
          lineNumber: 214,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/QRCodes.jsx",
          lineNumber: 213,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/QRCodes.jsx",
          lineNumber: 212,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/QRCodes:221:10", "data-dynamic-content": "true", className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4", children: Array.from({ length: tableCount }, (_, i) => i + 1).map((tableNum) => {
          const tableUrl = `${menuUrl}&table=${tableNum}`;
          return /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/QRCodes:225:16", "data-dynamic-content": "true", className: "overflow-hidden", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/QRCodes:226:18", "data-dynamic-content": "true", className: "p-4 text-center", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/QRCodes:227:20", "data-dynamic-content": "true", className: "bg-violet-50 rounded-lg p-3 mb-3", children: /* @__PURE__ */ jsxDEV(
              "img",
              {
                "data-source-location": "pages/QRCodes:228:22",
                "data-dynamic-content": "true",
                src: getQRCodeUrl(tableUrl, 150),
                alt: `Table ${tableNum} QR`,
                className: "mx-auto"
              },
              void 0,
              false,
              {
                fileName: "/app/src/pages/QRCodes.jsx",
                lineNumber: 247,
                columnNumber: 23
              },
              this
            ) }, void 0, false, {
              fileName: "/app/src/pages/QRCodes.jsx",
              lineNumber: 246,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV(Badge, { "data-source-location": "pages/QRCodes:234:20", "data-dynamic-content": "true", className: "mb-2 bg-violet-100 text-violet-700", "data-collection-item-field": "tableNum", children: [
              /* @__PURE__ */ jsxDEV(Table, { "data-source-location": "pages/QRCodes:235:22", "data-dynamic-content": "false", className: "w-3 h-3 mr-1" }, void 0, false, {
                fileName: "/app/src/pages/QRCodes.jsx",
                lineNumber: 254,
                columnNumber: 23
              }, this),
              "Table ",
              tableNum
            ] }, void 0, true, {
              fileName: "/app/src/pages/QRCodes.jsx",
              lineNumber: 253,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/QRCodes:238:20", "data-dynamic-content": "true", className: "flex gap-1 mt-3", children: [
              /* @__PURE__ */ jsxDEV(
                Button,
                {
                  "data-source-location": "pages/QRCodes:239:22",
                  "data-dynamic-content": "true",
                  variant: "ghost",
                  size: "sm",
                  className: "flex-1",
                  onClick: () => copyToClipboard(tableUrl, `table-${tableNum}`),
                  children: copied === `table-${tableNum}` ? /* @__PURE__ */ jsxDEV(Check, { "data-source-location": "pages/QRCodes:245:58", "data-dynamic-content": "false", className: "w-3 h-3" }, void 0, false, {
                    fileName: "/app/src/pages/QRCodes.jsx",
                    lineNumber: 264,
                    columnNumber: 59
                  }, this) : /* @__PURE__ */ jsxDEV(Copy, { "data-source-location": "pages/QRCodes:245:90", "data-dynamic-content": "false", className: "w-3 h-3" }, void 0, false, {
                    fileName: "/app/src/pages/QRCodes.jsx",
                    lineNumber: 264,
                    columnNumber: 164
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/app/src/pages/QRCodes.jsx",
                  lineNumber: 258,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                Button,
                {
                  "data-source-location": "pages/QRCodes:247:22",
                  "data-dynamic-content": "true",
                  variant: "ghost",
                  size: "sm",
                  className: "flex-1",
                  onClick: () => downloadQR(getQRCodeUrl(tableUrl, 300), `table-${tableNum}-qr.png`),
                  children: /* @__PURE__ */ jsxDEV(Download, { "data-source-location": "pages/QRCodes:253:24", "data-dynamic-content": "false", className: "w-3 h-3" }, void 0, false, {
                    fileName: "/app/src/pages/QRCodes.jsx",
                    lineNumber: 272,
                    columnNumber: 25
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/app/src/pages/QRCodes.jsx",
                  lineNumber: 266,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                Button,
                {
                  "data-source-location": "pages/QRCodes:255:22",
                  "data-dynamic-content": "true",
                  variant: "ghost",
                  size: "sm",
                  className: "flex-1",
                  onClick: () => printQRCode(tableNum),
                  children: /* @__PURE__ */ jsxDEV(Printer, { "data-source-location": "pages/QRCodes:261:24", "data-dynamic-content": "false", className: "w-3 h-3" }, void 0, false, {
                    fileName: "/app/src/pages/QRCodes.jsx",
                    lineNumber: 280,
                    columnNumber: 25
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/app/src/pages/QRCodes.jsx",
                  lineNumber: 274,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/pages/QRCodes.jsx",
              lineNumber: 257,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/QRCodes.jsx",
            lineNumber: 245,
            columnNumber: 19
          }, this) }, tableNum, false, {
            fileName: "/app/src/pages/QRCodes.jsx",
            lineNumber: 244,
            columnNumber: 17
          }, this);
        }) }, void 0, false, {
          fileName: "/app/src/pages/QRCodes.jsx",
          lineNumber: 240,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/QRCodes:271:10", "data-dynamic-content": "false", className: "mt-6", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/QRCodes:272:12", "data-dynamic-content": "false", className: "p-4", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/QRCodes:273:14", "data-dynamic-content": "false", className: "flex flex-col sm:flex-row items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/QRCodes:274:16", "data-dynamic-content": "false", children: [
            /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/QRCodes:275:18", "data-dynamic-content": "false", className: "font-medium", children: "Bulk Actions" }, void 0, false, {
              fileName: "/app/src/pages/QRCodes.jsx",
              lineNumber: 294,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/QRCodes:276:18", "data-dynamic-content": "false", className: "text-sm text-gray-500", children: "Download or print all table QR codes at once" }, void 0, false, {
              fileName: "/app/src/pages/QRCodes.jsx",
              lineNumber: 295,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/QRCodes.jsx",
            lineNumber: 293,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/QRCodes:278:16", "data-dynamic-content": "false", className: "flex gap-3", children: [
            /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/QRCodes:279:18", "data-dynamic-content": "false", variant: "outline", children: [
              /* @__PURE__ */ jsxDEV(Download, { "data-source-location": "pages/QRCodes:280:20", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
                fileName: "/app/src/pages/QRCodes.jsx",
                lineNumber: 299,
                columnNumber: 21
              }, this),
              "Download All"
            ] }, void 0, true, {
              fileName: "/app/src/pages/QRCodes.jsx",
              lineNumber: 298,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(Button, { "data-source-location": "pages/QRCodes:283:18", "data-dynamic-content": "false", children: [
              /* @__PURE__ */ jsxDEV(Printer, { "data-source-location": "pages/QRCodes:284:20", "data-dynamic-content": "false", className: "w-4 h-4 mr-2" }, void 0, false, {
                fileName: "/app/src/pages/QRCodes.jsx",
                lineNumber: 303,
                columnNumber: 21
              }, this),
              "Print All"
            ] }, void 0, true, {
              fileName: "/app/src/pages/QRCodes.jsx",
              lineNumber: 302,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/QRCodes.jsx",
            lineNumber: 297,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/QRCodes.jsx",
          lineNumber: 292,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/QRCodes.jsx",
          lineNumber: 291,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/src/pages/QRCodes.jsx",
          lineNumber: 290,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/QRCodes.jsx",
        lineNumber: 211,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/QRCodes.jsx",
      lineNumber: 122,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Card, { "data-source-location": "pages/QRCodes:295:6", "data-dynamic-content": "false", className: "bg-violet-50 border-violet-100", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-source-location": "pages/QRCodes:296:8", "data-dynamic-content": "false", className: "p-6", children: [
      /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/QRCodes:297:10", "data-dynamic-content": "false", className: "font-semibold text-violet-900 mb-3", children: "How to Use QR Codes" }, void 0, false, {
        fileName: "/app/src/pages/QRCodes.jsx",
        lineNumber: 316,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("ul", { "data-source-location": "pages/QRCodes:298:10", "data-dynamic-content": "false", className: "space-y-2 text-sm text-violet-800", children: [
        /* @__PURE__ */ jsxDEV("li", { "data-source-location": "pages/QRCodes:299:12", "data-dynamic-content": "false", className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/QRCodes:300:14", "data-dynamic-content": "false", className: "bg-violet-200 text-violet-700 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs font-medium", children: "1" }, void 0, false, {
            fileName: "/app/src/pages/QRCodes.jsx",
            lineNumber: 319,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/QRCodes:301:14", "data-dynamic-content": "false", children: "Download or print the QR codes for your tables" }, void 0, false, {
            fileName: "/app/src/pages/QRCodes.jsx",
            lineNumber: 320,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/QRCodes.jsx",
          lineNumber: 318,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("li", { "data-source-location": "pages/QRCodes:303:12", "data-dynamic-content": "false", className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/QRCodes:304:14", "data-dynamic-content": "false", className: "bg-violet-200 text-violet-700 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs font-medium", children: "2" }, void 0, false, {
            fileName: "/app/src/pages/QRCodes.jsx",
            lineNumber: 323,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/QRCodes:305:14", "data-dynamic-content": "false", children: "Place them on table stands or stick them on tables" }, void 0, false, {
            fileName: "/app/src/pages/QRCodes.jsx",
            lineNumber: 324,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/QRCodes.jsx",
          lineNumber: 322,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("li", { "data-source-location": "pages/QRCodes:307:12", "data-dynamic-content": "false", className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/QRCodes:308:14", "data-dynamic-content": "false", className: "bg-violet-200 text-violet-700 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs font-medium", children: "3" }, void 0, false, {
            fileName: "/app/src/pages/QRCodes.jsx",
            lineNumber: 327,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/QRCodes:309:14", "data-dynamic-content": "false", children: "Customers scan with their phone camera to view your menu" }, void 0, false, {
            fileName: "/app/src/pages/QRCodes.jsx",
            lineNumber: 328,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/QRCodes.jsx",
          lineNumber: 326,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("li", { "data-source-location": "pages/QRCodes:311:12", "data-dynamic-content": "false", className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/QRCodes:312:14", "data-dynamic-content": "false", className: "bg-violet-200 text-violet-700 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs font-medium", children: "4" }, void 0, false, {
            fileName: "/app/src/pages/QRCodes.jsx",
            lineNumber: 331,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/QRCodes:313:14", "data-dynamic-content": "false", children: "They can browse, customize, and place orders directly" }, void 0, false, {
            fileName: "/app/src/pages/QRCodes.jsx",
            lineNumber: 332,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/pages/QRCodes.jsx",
          lineNumber: 330,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/pages/QRCodes.jsx",
        lineNumber: 317,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/QRCodes.jsx",
      lineNumber: 315,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/QRCodes.jsx",
      lineNumber: 314,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/QRCodes.jsx",
    lineNumber: 113,
    columnNumber: 5
  }, this);
}
_s(QRCodesContent, "D+0gY0mHF9Brj2Q9P8KjrAJ1I8I=");
_c = QRCodesContent;
export default function QRCodes() {
  return /* @__PURE__ */ jsxDEV(DashboardLayout, { "data-source-location": "pages/QRCodes:324:4", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(QRCodesContent, { "data-source-location": "pages/QRCodes:325:6", "data-dynamic-content": "false" }, void 0, false, {
    fileName: "/app/src/pages/QRCodes.jsx",
    lineNumber: 344,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/src/pages/QRCodes.jsx",
    lineNumber: 343,
    columnNumber: 5
  }, this);
}
_c2 = QRCodes;
var _c, _c2;
$RefreshReg$(_c, "QRCodesContent");
$RefreshReg$(_c2, "QRCodes");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/QRCodes.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/QRCodes.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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aUJBQWtOO0FBQUEsVUFDbE4sdUJBQUMsVUFBSyx3QkFBcUIsd0JBQXVCLHdCQUFxQixTQUFRLHFFQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFvSTtBQUFBLGFBRnRJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFHQTtBQUFBLFdBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFpQkE7QUFBQSxTQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBb0JBLEtBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FzQkE7QUFBQSxPQS9ORjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBZ09BO0FBRUo7QUFBQy9ELEdBalRRSixnQkFBYztBQUFBcUUsS0FBZHJFO0FBbVRULHdCQUF3QnNFLFVBQVU7QUFDaEMsU0FDRSx1QkFBQyxtQkFBZ0Isd0JBQXFCLHVCQUFzQix3QkFBcUIsU0FDL0UsaUNBQUMsa0JBQWUsd0JBQXFCLHVCQUFzQix3QkFBcUIsV0FBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUF1RixLQUR6RjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUE7QUFFSjtBQUFDQyxNQU51QkQ7QUFBTyxJQUFBRCxJQUFBRTtBQUFBQyxhQUFBSCxJQUFBO0FBQUFHLGFBQUFELEtBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYmFzZTQ0IiwiRGFzaGJvYXJkTGF5b3V0IiwiUXJDb2RlIiwiRG93bmxvYWQiLCJQcmludGVyIiwiQ29weSIsIkNoZWNrIiwiRXh0ZXJuYWxMaW5rIiwiVGFibGUiLCJQbHVzIiwiTWludXMiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiQnV0dG9uIiwiSW5wdXQiLCJMYWJlbCIsIkJhZGdlIiwiVGFicyIsIlRhYnNMaXN0IiwiVGFic1RyaWdnZXIiLCJUYWJzQ29udGVudCIsIlFSQ29kZXNDb250ZW50IiwidXNlciIsInJlc3RhdXJhbnQiLCJpZCIsIl9zIiwidGFibGVDb3VudCIsInNldFRhYmxlQ291bnQiLCJzZXR0aW5ncyIsInRhYmxlX2NvdW50IiwiY29waWVkIiwic2V0Q29waWVkIiwic2VsZWN0ZWRTaXplIiwic2V0U2VsZWN0ZWRTaXplIiwiYmFzZVVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwibWVudVVybCIsInJlc3RhdXJhbnRfaWQiLCJzaXplcyIsInNtYWxsIiwid2lkdGgiLCJsYWJlbCIsIm1lZGl1bSIsImxhcmdlIiwiZ2V0UVJDb2RlVXJsIiwiZGF0YSIsInNpemUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJjb3B5VG9DbGlwYm9hcmQiLCJ0ZXh0IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic2V0VGltZW91dCIsImRvd25sb2FkUVIiLCJ1cmwiLCJmaWxlbmFtZSIsImxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiZG93bmxvYWQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInJlbW92ZUNoaWxkIiwicHJpbnRRUkNvZGUiLCJ0YWJsZU51bWJlciIsInFyVXJsIiwicHJpbnRXaW5kb3ciLCJvcGVuIiwid3JpdGUiLCJuYW1lIiwiY2xvc2UiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwia2V5IiwiX2lkIiwiTWF0aCIsIm1heCIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJpIiwidGFibGVOdW0iLCJ0YWJsZVVybCIsIl9jIiwiUVJDb2RlcyIsIl9jMiIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJRUkNvZGVzLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYmFzZTQ0IH0gZnJvbSBcIkAvYXBpL2Jhc2U0NENsaWVudFwiO1xuaW1wb3J0IERhc2hib2FyZExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkTGF5b3V0XCI7XG5pbXBvcnQge1xuICBRckNvZGUsIERvd25sb2FkLCBQcmludGVyLCBDb3B5LCBDaGVjayxcbiAgRXh0ZXJuYWxMaW5rLCBUYWJsZSwgUGx1cywgTWludXMgfSBmcm9tXG5cImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIENhcmRIZWFkZXIsIENhcmRUaXRsZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2xhYmVsXCI7XG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYmFkZ2VcIjtcbmltcG9ydCB7IFRhYnMsIFRhYnNMaXN0LCBUYWJzVHJpZ2dlciwgVGFic0NvbnRlbnQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RhYnNcIjtcblxuZnVuY3Rpb24gUVJDb2Rlc0NvbnRlbnQoeyB1c2VyLCByZXN0YXVyYW50LCBpZCB9KSB7XG4gIGNvbnN0IFt0YWJsZUNvdW50LCBzZXRUYWJsZUNvdW50XSA9IHVzZVN0YXRlKHJlc3RhdXJhbnQ/LnNldHRpbmdzPy50YWJsZV9jb3VudCB8fCAxMCk7XG4gIGNvbnN0IFtjb3BpZWQsIHNldENvcGllZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3NlbGVjdGVkU2l6ZSwgc2V0U2VsZWN0ZWRTaXplXSA9IHVzZVN0YXRlKFwibWVkaXVtXCIpO1xuXG4gIGNvbnN0IGJhc2VVcmwgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xuICBjb25zdCBtZW51VXJsID0gYCR7YmFzZVVybH0vQ3VzdG9tZXJNZW51P3I9JHtyZXN0YXVyYW50Py5yZXN0YXVyYW50X2lkfWA7XG5cbiAgY29uc3Qgc2l6ZXMgPSB7XG4gICAgc21hbGw6IHsgd2lkdGg6IDE1MCwgbGFiZWw6IFwiU21hbGwgKDE1MHB4KVwiIH0sXG4gICAgbWVkaXVtOiB7IHdpZHRoOiAyNTAsIGxhYmVsOiBcIk1lZGl1bSAoMjUwcHgpXCIgfSxcbiAgICBsYXJnZTogeyB3aWR0aDogMzUwLCBsYWJlbDogXCJMYXJnZSAoMzUwcHgpXCIgfVxuICB9O1xuXG4gIGNvbnN0IGdldFFSQ29kZVVybCA9IChkYXRhLCBzaXplID0gMjUwKSA9PiB7XG4gICAgcmV0dXJuIGBodHRwczovL2FwaS5xcnNlcnZlci5jb20vdjEvY3JlYXRlLXFyLWNvZGUvP3NpemU9JHtzaXplfXgke3NpemV9JmRhdGE9JHtlbmNvZGVVUklDb21wb25lbnQoZGF0YSl9YDtcbiAgfTtcblxuICBjb25zdCBjb3B5VG9DbGlwYm9hcmQgPSAodGV4dCwgaWQpID0+IHtcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KTtcbiAgICBzZXRDb3BpZWQoaWQpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q29waWVkKG51bGwpLCAyMDAwKTtcbiAgfTtcblxuICBjb25zdCBkb3dubG9hZFFSID0gKHVybCwgZmlsZW5hbWUpID0+IHtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxpbmsuaHJlZiA9IHVybDtcbiAgICBsaW5rLmRvd25sb2FkID0gZmlsZW5hbWU7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICBsaW5rLmNsaWNrKCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgfTtcblxuICBjb25zdCBwcmludFFSQ29kZSA9ICh0YWJsZU51bWJlciA9IG51bGwpID0+IHtcbiAgICBjb25zdCB1cmwgPSB0YWJsZU51bWJlciA/XG4gICAgYCR7bWVudVVybH0mdGFibGU9JHt0YWJsZU51bWJlcn1gIDpcbiAgICBtZW51VXJsO1xuICAgIGNvbnN0IHFyVXJsID0gZ2V0UVJDb2RlVXJsKHVybCwgMzAwKTtcblxuICAgIGNvbnN0IHByaW50V2luZG93ID0gd2luZG93Lm9wZW4oJycsICdfYmxhbmsnKTtcbiAgICBwcmludFdpbmRvdy5kb2N1bWVudC53cml0ZShgXG4gICAgICA8aHRtbD5cbiAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlFSIENvZGUgLSAke3Jlc3RhdXJhbnQ/Lm5hbWV9PC90aXRsZT5cbiAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICBib2R5IHsgXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjsgXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucXItY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZTVlN2ViO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDEgeyBjb2xvcjogIzdjM2FlZDsgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuICAgICAgICAgICAgaDIgeyBjb2xvcjogIzM3NDE1MTsgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuICAgICAgICAgICAgaW1nIHsgbWFyZ2luOiAyMHB4IDA7IH1cbiAgICAgICAgICAgIHAgeyBjb2xvcjogIzZiNzI4MDsgZm9udC1zaXplOiAxNHB4OyB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9oZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDE+JHtyZXN0YXVyYW50Py5uYW1lfTwvaDE+XG4gICAgICAgICAgICAke3RhYmxlTnVtYmVyID8gYDxoMj5UYWJsZSAke3RhYmxlTnVtYmVyfTwvaDI+YCA6ICcnfVxuICAgICAgICAgICAgPGltZyBzcmM9XCIke3FyVXJsfVwiIGFsdD1cIlFSIENvZGVcIiAvPlxuICAgICAgICAgICAgPHA+U2NhbiB0byB2aWV3IG91ciBtZW51ICYgb3JkZXI8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNjcmlwdD5cbiAgICAgICAgICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHsgd2luZG93LnByaW50KCk7IH1cbiAgICAgICAgICA8L3NjcmlwdD5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9odG1sPlxuICAgIGApO1xuICAgIHByaW50V2luZG93LmRvY3VtZW50LmNsb3NlKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUVJDb2Rlczo5NDo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICB7LyogSGVhZGVyICovfVxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6OTY6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IG1kOml0ZW1zLWNlbnRlciBtZDpqdXN0aWZ5LWJldHdlZW4gZ2FwLTRcIj5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6OTc6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICA8aDEgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjk4OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwXCI+UVIgQ29kZXM8L2gxPlxuICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUVJDb2Rlczo5OToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+R2VuZXJhdGUgUVIgY29kZXMgZm9yIHlvdXIgdGFibGVzIGFuZCBtZW51PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8VGFicyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6MTAzOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBkZWZhdWx0VmFsdWU9XCJnZW5lcmFsXCIgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgIDxUYWJzTGlzdCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6MTA0OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgPFRhYnNUcmlnZ2VyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUVJDb2RlczoxMDU6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdmFsdWU9XCJnZW5lcmFsXCI+R2VuZXJhbCBNZW51IFFSPC9UYWJzVHJpZ2dlcj5cbiAgICAgICAgICA8VGFic1RyaWdnZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjEwNjoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB2YWx1ZT1cInRhYmxlc1wiPlRhYmxlLVNwZWNpZmljIFFSPC9UYWJzVHJpZ2dlcj5cbiAgICAgICAgPC9UYWJzTGlzdD5cblxuICAgICAgICB7LyogR2VuZXJhbCBNZW51IFFSICovfVxuICAgICAgICA8VGFic0NvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjExMDo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdmFsdWU9XCJnZW5lcmFsXCI+XG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6MTExOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JpZCBsZzpncmlkLWNvbHMtMiBnYXAtNlwiPlxuICAgICAgICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjExMjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6MTEzOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgIDxDYXJkVGl0bGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjExNDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5HZW5lcmFsIE1lbnUgUVIgQ29kZTwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6MTE2OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjExNzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgICBUaGlzIFFSIGNvZGUgbGlua3MgZGlyZWN0bHkgdG8geW91ciByZXN0YXVyYW50J3MgZGlnaXRhbCBtZW51LiBcbiAgICAgICAgICAgICAgICAgIFVzZSBpdCBmb3IgZ2VuZXJhbCBwdXJwb3NlcyBsaWtlIG1hcmtldGluZyBtYXRlcmlhbHMsIHNvY2lhbCBtZWRpYSwgb3IgZW50cnkgZGlzcGxheXMuXG4gICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgey8qIFFSIFNpemUgU2VsZWN0aW9uICovfVxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjEyMzoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgPExhYmVsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUVJDb2RlczoxMjQ6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwibWItMiBibG9ja1wiPlFSIENvZGUgU2l6ZTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUVJDb2RlczoxMjU6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhzaXplcykubWFwKChba2V5LCB7IGxhYmVsIH1dKSA9PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUVJDb2RlczoxMjc6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17c2VsZWN0ZWRTaXplID09PSBrZXkgPyBcImRlZmF1bHRcIiA6IFwib3V0bGluZVwifVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZFNpemUoa2V5KX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzZWxlY3RlZFNpemUgPT09IGtleSA/IFwiYmctdmlvbGV0LTYwMFwiIDogXCJcIn0gZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJsYWJlbFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBNZW51IFVSTCAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUVJDb2RlczoxNDA6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgIDxMYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6MTQxOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cIm1iLTIgYmxvY2tcIj5NZW51IFVSTDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUVJDb2RlczoxNDI6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6MTQzOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdmFsdWU9e21lbnVVcmx9IHJlYWRPbmx5IGNsYXNzTmFtZT1cImJnLWdyYXktNTBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUVJDb2RlczoxNDQ6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvcHlUb0NsaXBib2FyZChtZW51VXJsLCAnbWFpbicpfT5cblxuICAgICAgICAgICAgICAgICAgICAgIHtjb3BpZWQgPT09ICdtYWluJyA/IDxDaGVjayBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6MTQ4OjQzXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPiA6IDxDb3B5IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUVJDb2RlczoxNDg6NzVcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+fVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGEgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjE1MDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGhyZWY9e21lbnVVcmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUVJDb2RlczoxNTE6MjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgdmFyaWFudD1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxFeHRlcm5hbExpbmsgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjE1MjoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8L0NhcmQ+XG5cbiAgICAgICAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUVJDb2RlczoxNjA6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUVJDb2RlczoxNjE6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJwLTYgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUVJDb2RlczoxNjI6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTYgcm91bmRlZC0yeGwgc2hhZG93LWxnIGJvcmRlciBib3JkZXItZ3JheS0xMDBcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjE2MzoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICBzcmM9e2dldFFSQ29kZVVybChtZW51VXJsLCBzaXplc1tzZWxlY3RlZFNpemVdLndpZHRoKX1cbiAgICAgICAgICAgICAgICAgIGFsdD1cIk1lbnUgUVIgQ29kZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvXCIgLz5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjE2OToxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm10LTYgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxoMyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6MTcwOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWxnXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJuYW1lXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3Jlc3RhdXJhbnQ/LmlkIHx8IHJlc3RhdXJhbnQ/Ll9pZH0+e3Jlc3RhdXJhbnQ/Lm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUVJDb2RlczoxNzE6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LXNtIG10LTFcIj5TY2FuIHRvIHZpZXcgbWVudTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUVJDb2RlczoxNzM6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIG10LTZcIj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjE3NDoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkb3dubG9hZFFSKGdldFFSQ29kZVVybChtZW51VXJsLCA1MDApLCBgJHtyZXN0YXVyYW50Py5uYW1lfS1tZW51LXFyLnBuZ2ApfT5cblxuICAgICAgICAgICAgICAgICAgICA8RG93bmxvYWQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjE3ODoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICBEb3dubG9hZFxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUVJDb2RlczoxODE6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBvbkNsaWNrPXsoKSA9PiBwcmludFFSQ29kZSgpfT5cbiAgICAgICAgICAgICAgICAgICAgPFByaW50ZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjE4MjoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICBQcmludFxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvVGFic0NvbnRlbnQ+XG5cbiAgICAgICAgey8qIFRhYmxlLVNwZWNpZmljIFFSIENvZGVzICovfVxuICAgICAgICA8VGFic0NvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjE5Mjo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgdmFsdWU9XCJ0YWJsZXNcIj5cbiAgICAgICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6MTkzOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICAgICAgPENhcmRDb250ZW50IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUVJDb2RlczoxOTQ6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6MTk1OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6MTk2OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgPGgzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUVJDb2RlczoxOTc6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj5OdW1iZXIgb2YgVGFibGVzPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUVJDb2RlczoxOTg6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+R2VuZXJhdGUgUVIgY29kZXMgZm9yIGVhY2ggdGFibGU8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6MjAwOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjIwMToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICBzaXplPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUYWJsZUNvdW50KE1hdGgubWF4KDEsIHRhYmxlQ291bnQgLSAxKSl9PlxuXG4gICAgICAgICAgICAgICAgICAgIDxNaW51cyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6MjA2OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6MjA4OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHctMTIgdGV4dC1jZW50ZXJcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInRhYmxlQ291bnRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aWR9Pnt0YWJsZUNvdW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjIwOToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICBzaXplPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUYWJsZUNvdW50KHRhYmxlQ291bnQgKyAxKX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPFBsdXMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjIxNDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgPC9DYXJkPlxuXG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6MjIxOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtNCB4bDpncmlkLWNvbHMtNSBnYXAtNFwiPlxuICAgICAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IHRhYmxlQ291bnQgfSwgKF8sIGkpID0+IGkgKyAxKS5tYXAoKHRhYmxlTnVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHRhYmxlVXJsID0gYCR7bWVudVVybH0mdGFibGU9JHt0YWJsZU51bX1gO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxDYXJkIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUVJDb2RlczoyMjU6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e3RhYmxlTnVtfSBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6MjI2OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicC00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjIyNzoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImJnLXZpb2xldC01MCByb3VuZGVkLWxnIHAtMyBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6MjI4OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2dldFFSQ29kZVVybCh0YWJsZVVybCwgMTUwKX1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BUYWJsZSAke3RhYmxlTnVtfSBRUmB9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0b1wiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6MjM0OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWItMiBiZy12aW9sZXQtMTAwIHRleHQtdmlvbGV0LTcwMFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidGFibGVOdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjIzNToyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTMgaC0zIG1yLTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIFRhYmxlIHt0YWJsZU51bX1cbiAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6MjM4OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBnYXAtMSBtdC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6MjM5OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb3B5VG9DbGlwYm9hcmQodGFibGVVcmwsIGB0YWJsZS0ke3RhYmxlTnVtfWApfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAge2NvcGllZCA9PT0gYHRhYmxlLSR7dGFibGVOdW19YCA/IDxDaGVjayBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6MjQ1OjU4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMyBoLTNcIiAvPiA6IDxDb3B5IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUVJDb2RlczoyNDU6OTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+fVxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjI0NzoyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMVwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZG93bmxvYWRRUihnZXRRUkNvZGVVcmwodGFibGVVcmwsIDMwMCksIGB0YWJsZS0ke3RhYmxlTnVtfS1xci5wbmdgKX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEb3dubG9hZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6MjUzOjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMyBoLTNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjI1NToyMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMVwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJpbnRRUkNvZGUodGFibGVOdW0pfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFByaW50ZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjI2MToyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTMgaC0zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD4pO1xuXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBCdWxrIEFjdGlvbnMgKi99XG4gICAgICAgICAgPENhcmQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjI3MToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJtdC02XCI+XG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjI3MjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6MjczOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjI3NDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgIDxoMyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6Mjc1OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+QnVsayBBY3Rpb25zPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUVJDb2RlczoyNzY6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+RG93bmxvYWQgb3IgcHJpbnQgYWxsIHRhYmxlIFFSIGNvZGVzIGF0IG9uY2U8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6Mjc4OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZsZXggZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjI3OToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiB2YXJpYW50PVwib3V0bGluZVwiPlxuICAgICAgICAgICAgICAgICAgICA8RG93bmxvYWQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjI4MDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICBEb3dubG9hZCBBbGxcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6MjgzOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8UHJpbnRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6Mjg0OjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgbXItMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIFByaW50IEFsbFxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvVGFic0NvbnRlbnQ+XG4gICAgICA8L1RhYnM+XG5cbiAgICAgIHsvKiBJbnN0cnVjdGlvbnMgKi99XG4gICAgICA8Q2FyZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6Mjk1OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYmctdmlvbGV0LTUwIGJvcmRlci12aW9sZXQtMTAwXCI+XG4gICAgICAgIDxDYXJkQ29udGVudCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6Mjk2OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwicC02XCI+XG4gICAgICAgICAgPGgzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUVJDb2RlczoyOTc6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXZpb2xldC05MDAgbWItM1wiPkhvdyB0byBVc2UgUVIgQ29kZXM8L2gzPlxuICAgICAgICAgIDx1bCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6Mjk4OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktMiB0ZXh0LXNtIHRleHQtdmlvbGV0LTgwMFwiPlxuICAgICAgICAgICAgPGxpIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUVJDb2RlczoyOTk6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtMlwiPlxuICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6MzAwOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImJnLXZpb2xldC0yMDAgdGV4dC12aW9sZXQtNzAwIHJvdW5kZWQtZnVsbCB3LTUgaC01IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtc2hyaW5rLTAgdGV4dC14cyBmb250LW1lZGl1bVwiPjE8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUVJDb2RlczozMDE6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+RG93bmxvYWQgb3IgcHJpbnQgdGhlIFFSIGNvZGVzIGZvciB5b3VyIHRhYmxlczwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjMwMzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0yXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUVJDb2RlczozMDQ6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYmctdmlvbGV0LTIwMCB0ZXh0LXZpb2xldC03MDAgcm91bmRlZC1mdWxsIHctNSBoLTUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1zaHJpbmstMCB0ZXh0LXhzIGZvbnQtbWVkaXVtXCI+Mjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjMwNToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5QbGFjZSB0aGVtIG9uIHRhYmxlIHN0YW5kcyBvciBzdGljayB0aGVtIG9uIHRhYmxlczwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjMwNzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0yXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUVJDb2RlczozMDg6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYmctdmlvbGV0LTIwMCB0ZXh0LXZpb2xldC03MDAgcm91bmRlZC1mdWxsIHctNSBoLTUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1zaHJpbmstMCB0ZXh0LXhzIGZvbnQtbWVkaXVtXCI+Mzwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjMwOToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5DdXN0b21lcnMgc2NhbiB3aXRoIHRoZWlyIHBob25lIGNhbWVyYSB0byB2aWV3IHlvdXIgbWVudTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjMxMToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0yXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvUVJDb2RlczozMTI6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYmctdmlvbGV0LTIwMCB0ZXh0LXZpb2xldC03MDAgcm91bmRlZC1mdWxsIHctNSBoLTUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1zaHJpbmstMCB0ZXh0LXhzIGZvbnQtbWVkaXVtXCI+NDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjMxMzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5UaGV5IGNhbiBicm93c2UsIGN1c3RvbWl6ZSwgYW5kIHBsYWNlIG9yZGVycyBkaXJlY3RseTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L2Rpdj4pO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFFSQ29kZXMoKSB7XG4gIHJldHVybiAoXG4gICAgPERhc2hib2FyZExheW91dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1FSQ29kZXM6MzI0OjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICA8UVJDb2Rlc0NvbnRlbnQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9RUkNvZGVzOjMyNTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+XG4gICAgPC9EYXNoYm9hcmRMYXlvdXQ+KTtcblxufSJdLCJmaWxlIjoiL2FwcC9zcmMvcGFnZXMvUVJDb2Rlcy5qc3gifQ==