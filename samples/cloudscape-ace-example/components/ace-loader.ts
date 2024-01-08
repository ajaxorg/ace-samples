import "ace-code/styles/ace.css";
import "ace-code/styles/theme/chrome.css";
import "ace-code/styles/theme/clouds.css";
import "ace-code/styles/theme/crimson_editor.css";
import "ace-code/styles/theme/dawn.css";
import "ace-code/styles/theme/dreamweaver.css";
import "ace-code/styles/theme/eclipse.css";
import "ace-code/styles/theme/github.css";
import "ace-code/styles/theme/iplastic.css";
import "ace-code/styles/theme/solarized_light.css";
import "ace-code/styles/theme/textmate.css";
import "ace-code/styles/theme/tomorrow.css";
import "ace-code/styles/theme/xcode.css";
import "ace-code/styles/theme/kuroir.css";
import "ace-code/styles/theme/katzenmilch.css";
import "ace-code/styles/theme/sqlserver.css";

import "ace-code/styles/theme/ambiance.css";
import "ace-code/styles/theme/chaos.css";
import "ace-code/styles/theme/clouds_midnight.css";
import "ace-code/styles/theme/dracula.css";
import "ace-code/styles/theme/cobalt.css";
import "ace-code/styles/theme/gruvbox.css";
import "ace-code/styles/theme/gob.css";
import "ace-code/styles/theme/idle_fingers.css";
import "ace-code/styles/theme/kr_theme.css";
import "ace-code/styles/theme/merbivore.css";
import "ace-code/styles/theme/merbivore_soft.css";
import "ace-code/styles/theme/mono_industrial.css";
import "ace-code/styles/theme/monokai.css";
import "ace-code/styles/theme/nord_dark.css";
import "ace-code/styles/theme/pastel_on_dark.css";
import "ace-code/styles/theme/solarized_dark.css";
import "ace-code/styles/theme/terminal.css";
import "ace-code/styles/theme/tomorrow_night.css";
import "ace-code/styles/theme/tomorrow_night_blue.css";
import "ace-code/styles/theme/tomorrow_night_bright.css";
import "ace-code/styles/theme/tomorrow_night_eighties.css";
import "ace-code/styles/theme/twilight.css";
import "ace-code/styles/theme/vibrant_ink.css";
import {LanguageProvider} from "ace-linters";

export async function aceLoader() {
    const ace = await import("ace-code");

    const modules = {
        // Do not change introduce variables in the imports, or your bundle size will blow up.
        "ace/mode/c_cpp": await import("ace-code/src/mode/c_cpp"),
        "ace/mode/csharp": await import("ace-code/src/mode/csharp"),
        "ace/mode/css": await import("ace-code/src/mode/css"),
        "ace/mode/golang": await import("ace-code/src/mode/golang"),
        "ace/mode/html": await import("ace-code/src/mode/html"),
        "ace/mode/java": await import("ace-code/src/mode/java"),
        "ace/mode/javascript": await import("ace-code/src/mode/javascript"),
        "ace/mode/json": await import("ace-code/src/mode/json"),
        "ace/mode/markdown": await import("ace-code/src/mode/markdown"),
        "ace/mode/kotlin": await import("ace-code/src/mode/kotlin"),
        "ace/mode/python": await import("ace-code/src/mode/python"),
        "ace/mode/ruby": await import("ace-code/src/mode/ruby"),
        "ace/mode/rust": await import("ace-code/src/mode/rust"),
        "ace/mode/sql": await import("ace-code/src/mode/sql"),
        "ace/mode/swift": await import("ace-code/src/mode/swift"),
        "ace/mode/text": await import("ace-code/src/mode/text"),
        "ace/mode/typescript": await import("ace-code/src/mode/typescript"),
        "ace/mode/xml": await import("ace-code/src/mode/xml"),
        "ace/mode/yaml": await import("ace-code/src/mode/yaml"),
        "ace/mode/jsx": await import("ace-code/src/mode/jsx"),
        "ace/mode/tsx": await import("ace-code/src/mode/tsx"),

        "ace/snippets/javascript": await import("ace-code/src/snippets/javascript"),
        "ace/ext/language_tools": await import("ace-code/src/ext/language_tools"),
        "ace/ext/searchbox": await import("ace-code/src/ext/searchbox"),

        "ace/theme/chrome": {cssClass: "ace-chrome", isDark: false},
        "ace/theme/clouds": {cssClass: "ace-clouds", isDark: false},
        "ace/theme/crimson_editor": {
            cssClass: "ace-crimson-editor",
            isDark: false,
        },
        "ace/theme/dawn": {cssClass: "ace-dawn", isDark: false},
        "ace/theme/dreamweaver": {cssClass: "ace-dreamweaver", isDark: false},
        "ace/theme/eclipse": {cssClass: "ace-eclipse", isDark: false},
        "ace/theme/github": {cssClass: "ace-github", isDark: false},
        "ace/theme/iplastic": {cssClass: "ace-iplastic", isDark: false},
        "ace/theme/solarized_light": {
            cssClass: "ace-solarized-light",
            isDark: false,
        },
        "ace/theme/textmate": {cssClass: "ace-tm", isDark: false},
        "ace/theme/tomorrow": {cssClass: "ace-tomorrow", isDark: false},
        "ace/theme/xcode": {cssClass: "ace-xcode", isDark: false},
        "ace/theme/kuroir": {cssClass: "ace-kuroir", isDark: false},
        "ace/theme/katzenmilch": {cssClass: "ace-katzenmilch", isDark: false},
        "ace/theme/sqlserver": {cssClass: "ace-sqlserver", isDark: false},
        "ace/theme/ambiance": {cssClass: "ace-ambiance", isDark: true},
        "ace/theme/chaos": {cssClass: "ace-chaos", isDark: true},
        "ace/theme/clouds_midnight": {
            cssClass: "ace-clouds-midnight",
            isDark: true,
        },
        "ace/theme/dracula": {cssClass: "ace-dracula", isDark: true},
        "ace/theme/cobalt": {cssClass: "ace-cobalt", isDark: true},
        "ace/theme/gruvbox": {cssClass: "ace-gruvbox", isDark: true},
        "ace/theme/gob": {cssClass: "ace-gob", isDark: true},
        "ace/theme/idle_fingers": {
            cssClass: "ace-idle-fingers",
            isDark: true,
        },
        "ace/theme/kr_theme": {cssClass: "ace-kr-theme", isDark: true},
        "ace/theme/merbivore": {cssClass: "ace-merbivore", isDark: true},
        "ace/theme/merbivore_soft": {
            cssClass: "ace-merbivore-soft",
            isDark: true,
        },
        "ace/theme/mono_industrial": {
            cssClass: "ace-mono-industrial",
            isDark: true,
        },
        "ace/theme/monokai": {cssClass: "ace-monokai", isDark: true},
        "ace/theme/nord_dark": {cssClass: "ace-nord-dark", isDark: true},
        "ace/theme/pastel_on_dark": {
            cssClass: "ace-pastel-on-dark",
            isDark: true,
        },
        "ace/theme/solarized_dark": {
            cssClass: "ace-solarized-dark",
            isDark: true,
        },
        "ace/theme/terminal": {cssClass: "ace-terminal-theme", isDark: true},
        "ace/theme/tomorrow_night": {
            cssClass: "ace-tomorrow-night",
            isDark: true,
        },
        "ace/theme/tomorrow_night_blue": {
            cssClass: "ace-tomorrow-night-blue",
            isDark: true,
        },
        "ace/theme/tomorrow_night_bright": {
            cssClass: "ace-tomorrow-night-bright",
            isDark: true,
        },
        "ace/theme/tomorrow_night_eighties": {
            cssClass: "ace-tomorrow-night-eighties",
            isDark: true,
        },
        "ace/theme/twilight": {cssClass: "ace-twilight", isDark: true},
        "ace/theme/vibrant_ink": {cssClass: "ace-vibrant-ink", isDark: true},
    };
    ace.config.set("useStrictCSP", true);
    ace.config.setLoader((moduleName, afterLoad) => {
        console.debug(`Loading Ace module '${moduleName}'`);
        if (moduleName in modules) {
            afterLoad(null, modules[moduleName]);
            return;
        }
        console.error("module not found", moduleName);
    });
    if (ace.config["provider"]) {
        return ace;
    }
    
    ace.config["provider"] = loadLinters(ace);
    return ace;
}

export function loadLinters(ace) {
    const worker = new Worker(new URL('./webworker.ts', import.meta.url));
    const provider = LanguageProvider.create(worker);

    (ace?.config as any)?.on("editor", function (editor) {
        if (/awsui_editor/.test(editor.container.className)) {
            provider.registerEditor(editor);
        }
    });
    
    return provider;
}
