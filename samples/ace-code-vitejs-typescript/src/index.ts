
import {tokenize} from "ace-code/src/ext/simple_tokenizer";
import type {Ace} from "ace-code";

import ace from 'ace-code';
import 'ace-code/esm-resolver';

let editor = ace.edit("container", {
    useWorker: false
});
editor.session.setValue("<html>\n    <h1>Hello world!</h1>\n</html>");
editor.setTheme("ace/theme/eclipse");
editor.session.setMode("ace/mode/html"); 

import JavaScriptHighlightRules from "ace-code/src/mode/javascript_highlight_rules"
const tokens = tokenize(document.body.innerHTML, JavaScriptHighlightRules as unknown as Ace.HighlightRules);
console.log(tokens)


export class WeirdEditSession extends ace.EditSession {
    declare $modeId: string;

    constructor(public uri: string, document: Ace.Document, mode: Ace.SyntaxMode) {
        super(document, mode);
        this.selection.on("changeCursor", this.handleCursorChange.bind(this));
        this.on("changeTabSize", this.handleCursorChange.bind(this));
    }

    private handleCursorChange() {
        const cursor = this.selection.getCursor();
        console.log(cursor)
    }
}
