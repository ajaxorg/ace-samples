import {ServiceManager} from "ace-linters/build/service-manager";

let manager = new ServiceManager(self);

manager.registerService("json", {
    module: () => import("ace-linters/build/json-service"),
    className: "JsonService",
    modes: "json"
});
