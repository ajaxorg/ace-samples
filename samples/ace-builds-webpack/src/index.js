import ace from "ace-builds";
import modeYaml from "ace-builds/src-noconflict/mode-yaml";
ace.config.setModuleUrl("ace/mode/yaml_worker", "ace-modules/worker-yaml.js");

let editor = ace.edit("container", {
    mode: "ace/mode/yaml",    
    value: "a: b"
});

