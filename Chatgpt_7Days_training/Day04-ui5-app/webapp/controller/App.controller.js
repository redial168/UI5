sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast"], function (
  Controller,
  MessageToast
) {
  "use strict";

  return Controller.extend("com.mycompany.myui5app.controller.App", {
    onInit: function () {
      console.log("Day 4: onInit()");
    },

    onAdd: function () {
      const oModel = this.getOwnerComponent().getModel("app");
      const i = oModel.getProperty("/counter");
      oModel.setProperty("/counter", i + 1);
    },

    onItemPress: function (oEvent) {
      const oItem = oEvent.getParameter("listItem");
      const oCtx = oItem.getBindingContext("app");
      const oData = oCtx.getObject();

      sap.m.MessageToast.show("You pressed " + oData.name);

    }


  });
});
