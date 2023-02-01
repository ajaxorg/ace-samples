import ace from 'ace-builds';
import './esm-resolver';
//^ you could use direct imports instead like
//import 'ace-builds/src-noconflict/mode-html'; for HTML mode
//or import "ace-builds/src-noconflict/theme-eclipse.js"; for theme

let editor = ace.edit("container", {
    useWorker: true
});
editor.session.setValue("<html>\n    <h1>Hello world!</h1>\n</html>");
editor.setTheme("ace/theme/eclipse");
editor.session.setMode("ace/mode/html");
