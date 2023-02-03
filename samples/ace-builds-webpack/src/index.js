import ace from "ace-builds";
import "../../../generated/esm-resolver";
import "ace-builds/src-noconflict/ext-language_tools";

let editor = ace.edit("container", {
    useWorker: true,
    theme: "ace/theme/eclipse",
    mode: "ace/mode/html",
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
});
editor.session.setValue("<html>\n    <h1>Hello world!</h1>\n</html>");

