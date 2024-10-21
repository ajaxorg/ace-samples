import React, {useEffect, useRef} from "react";
import * as ReactDOMClient from 'react-dom/client';
import AceEditor from "react-ace";

import "ace-builds/esm-resolver";
import "ace-builds/src-noconflict/ext-language_tools";
import {LanguageProvider} from "ace-linters";

let worker = new Worker(new URL('./webworker.js', import.meta.url), {type: "module"});
let languageProvider = LanguageProvider.create(worker);

// Editor component
function AceEditorWithLinters() {
    const editorRef = useRef(null);

    useEffect(() => {
        if (editorRef.current) {
            languageProvider.registerEditor(editorRef.current.editor);
        }
    }, []);

    function onChange(newValue) {
        console.log("change", newValue);
    }

    return (<AceEditor
        ref={editorRef}
        mode="json"
        theme="cobalt"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        enableBasicAutocompletion={true}
        enableLiveAutocompletion={true}
        editorProps={{$blockScrolling: true}}
        height="200px"
        value={`{
       "name": 12
       "country": "Ireland"
    }`}
    />);
}

// Render to the DOM
var root = ReactDOMClient.createRoot(document.body);
root.render(<AceEditorWithLinters/>);
