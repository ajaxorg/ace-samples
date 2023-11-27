import ace from 'ace-code';
import 'ace-code/esm-resolver';

//^ you could use direct imports instead like
//import 'ace-builds/src-noconflict/mode-html'; for HTML mode
//or import "ace-builds/src-noconflict/theme-eclipse.js"; for theme

import {LanguageProvider} from "ace-linters";

let worker = new Worker(new URL('./webworker.js', import.meta.url), {type: "module"});
let languageProvider = LanguageProvider.create(worker);

let editor = ace.edit("container", {
    useWorker: false
});
editor.session.setValue("<html>\n    <h1>Hello world!</h1>\n</html>");
editor.setTheme("ace/theme/eclipse");
editor.session.setMode("ace/mode/html");

languageProvider.registerEditor(editor);
