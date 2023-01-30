var fs = require("fs");
const BUILD_DIR = "node_modules/ace-builds";
function buildTypes() {
    var paths = fs.readdirSync(BUILD_DIR + '/src-noconflict');

    fs.readdirSync(BUILD_DIR + '/src-noconflict/snippets').forEach(function(path) {
        paths.push("snippets/" + path);
    });
    var loader = "//this file is auto-generated\n";
    loader = loader + paths.map(function(path) {
        if (/\.js$/.test(path) && !/^ace\.js$/.test(path)) {
            var moduleName = path.split('.')[0].replace(/-/, "/");
            if (/^worker/.test(moduleName))
                moduleName = "mode" + moduleName.slice(6) + "_worker";
            moduleName = moduleName.replace(/keybinding/, "keyboard");
            var importModuleName = moduleName.replaceAll("/", "_");
            return `import ${importModuleName} from "ace-builds/src-noconflict/${path}?url";\nace.config.setModuleUrl('ace/${moduleName}', ${importModuleName})`;
        }
    }).join('\n');

    fs.writeFileSync(__dirname + '/src/vitejs-resolver.js', loader, "utf8");
}

buildTypes();
