import {ServiceManager} from "ace-linters/build/service-manager";

let manager = new ServiceManager(self);
manager.registerService("html", {
    features: {signatureHelp: false},
    module: () => import("ace-linters/build/html-service"),
    className: "HtmlService",
    modes: "html"
});
manager.registerService("css", {
    features: {signatureHelp: false},
    module: () => import("ace-linters/build/css-service"),
    className: "CssService",
    modes: "css"
});
manager.registerService("less", {
    features: {signatureHelp: false},
    module: () => import("ace-linters/build/css-service"),
    className: "CssService",
    modes: "less"
});
manager.registerService("scss", {
    features: {signatureHelp: false},
    module: () => import("ace-linters/build/css-service"),
    className: "CssService",
    modes: "scss"
});
manager.registerService("json", {
    features: {signatureHelp: false, documentHighlight: false},
    module: () => import("ace-linters/build/json-service"),
    className: "JsonService",
    modes: "json",
});
manager.registerService("json5", {
    features: {signatureHelp: false, documentHighlight: false},
    module: () => import("ace-linters/build/json-service"),
    className: "JsonService",
    modes: "json5",
});
manager.registerService("typescript", {
    module: () => import("ace-linters/build/typescript-service"),
    className: "TypescriptService",
    modes: "typescript|tsx|javascript|jsx",
});
