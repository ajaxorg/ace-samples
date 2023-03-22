import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import AceEditor from "react-ace";

import "ace-builds/esm-resolver";
import "ace-builds/src-noconflict/ext-language_tools";

function onChange(newValue) {
  console.log("change", newValue);
}

var root = ReactDOMClient.createRoot(document.body);

// Render editor
root.render(<AceEditor
    mode="java"
    theme="cobalt"
    onChange={onChange}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{}}
    height={200}
  />);
