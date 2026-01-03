sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("my.test.app.controller.App", {
        onPress: function () {
            // 按下按鈕後的動作
            MessageToast.show("Hello World");
        }
    });
});
