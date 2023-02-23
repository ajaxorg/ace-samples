import ace from 'ace-builds';
import 'ace-builds/esm-resolver';
import "ace-builds/src-noconflict/ext-language_tools"; //to turn on autocomplete
import {LanguageProvider} from "ace-linters";

let worker = new Worker(new URL('./webworker.js', import.meta.url),{type: "module"});
let languageProvider = LanguageProvider.create(worker);

let editor = ace.edit("container", {
    useWorker: false,
    theme: "ace/theme/eclipse",
    mode: "ace/mode/html",
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
});
editor.session.setValue("<html>\n    <h1>Hello world!</h1>\n</html>");

languageProvider.registerEditor(editor);
