import React, {useEffect, useState} from "react";
import CodeEditor from "@cloudscape-design/components/code-editor";
import {aceLoader} from "./ace-loader";

const i18nStrings = {
    loadingState: "Loading code editor",
    errorState: "There was an error loading the code editor.",
    errorStateRecovery: "Retry",

    editorGroupAriaLabel: "Code editor",
    statusBarGroupAriaLabel: "Status bar",

    cursorPosition: (row, column) => `Ln ${row}, Col ${column}`,
    errorsTab: "Errors",
    warningsTab: "Warnings",
    preferencesButtonAriaLabel: "Preferences",

    paneCloseButtonAriaLabel: "Close",

    preferencesModalHeader: "Preferences",
    preferencesModalCancel: "Cancel",
    preferencesModalConfirm: "Confirm",
    preferencesModalWrapLines: "Wrap lines",
    preferencesModalTheme: "Theme",
    preferencesModalLightThemes: "Light themes",
    preferencesModalDarkThemes: "Dark themes"
};

function CodeEditorSnippet(props) {
    const [value, setValue] = useState(props.value);
    const [preferences, setPreferences] = useState({});
    const [loading, setLoading] = useState(true);
    const [ace, setAce] = useState();
    //const [provider, setProvider] = useState();

    useEffect(() => {
        setValue(props.value);
    }, [props.value]);

    useEffect(() => {
        aceLoader()
            .then((ace) => {
                setAce(ace);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (<>
        <CodeEditor
            ace={ace}
            value={value}
            language="tsx"
            onDelayedChange={(event) => setValue(event.detail.value)}
            preferences={preferences}
            onPreferencesChange={(event) => setPreferences(event.detail)}
            i18nStrings={i18nStrings}
            loading={loading}
            // should match the imports on top of this file and in modules imports
            themes={{
                light: ["dawn"],
                dark: ["tomorrow_night_bright"]
            }}
        />
    </>);
}

const Wrapper = () => {

    const [value, setValue] = useState("dddd.as.s ;");


    return <div>
        {value}
        <input value={value} type="text" onChange={(event) => setValue(event.currentTarget.value)}/>
        <CodeEditorSnippet value={value}/>
    </div>;
};
export default Wrapper;
