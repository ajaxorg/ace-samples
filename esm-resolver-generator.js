var fs = require("fs");
const BUILD_DIR = "node_modules/ace-builds";

function buildResolver() {
    var paths = fs.readdirSync(BUILD_DIR + '/src-noconflict');

    fs.readdirSync(BUILD_DIR + '/src-noconflict/snippets').forEach(function (path) {
        paths.push("snippets/" + path);
    });
    var loader = "//this file is auto-generated\n";
    loader = loader + paths.map(function (path) {
        if (/\.js$/.test(path) && !/^ace\.js$/.test(path)) {
            var moduleName = path.split('.')[0].replace(/-/, "/");
            if (/^worker/.test(moduleName)) moduleName = "mode" + moduleName.slice(6) + "_worker";
            moduleName = moduleName.replace(/keybinding/, "keyboard");
            return `ace.config.setModuleUrl('ace/${moduleName}', new URL("ace-builds/src-noconflict/${path}", import.meta.url))`;
        }
    }).join('\n');

    fs.writeFileSync(__dirname + '/esm-resolver.js', loader, "utf8");
}

buildResolver();
