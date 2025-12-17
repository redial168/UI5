sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast"], function (
  Controller,
  MessageToast
) {
  "use strict";

  return Controller.extend("com.mycompany.myui5app.controller.App", {
    onInit: function () {
      console.log("App.controller onInit()");
    },

    onPress: function () {
      MessageToast.show("Day 1: Button pressed!");
    }
  });
});
