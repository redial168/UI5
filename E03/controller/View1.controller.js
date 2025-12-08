sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        
        onInit: function () {
            // 初始化時執行，目前留空
        },

        onSayHello: function () {
            // 這是對應 XML View 裡 Button 的 press=".onSayHello"
            MessageToast.show("Hello World! 這是我的第一個 SAP UI5 App！");
        }
    });
});