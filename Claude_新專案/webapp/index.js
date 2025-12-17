sap.ui.define([
    "sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
    "use strict";

    new ComponentContainer({
        name: "com.mycompany",
        settings: {
            id: "myui5app"
        },
        async: true
    }).placeAt("content");
});