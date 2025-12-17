sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("com.mycompany.myui5app.controller.App", {
    onInit: function () {
      console.log("Day 3: onInit()");
    },

    onAdd: function () {
      const oModel = this.getOwnerComponent().getModel("app");
      const i = oModel.getProperty("/counter");
      oModel.setProperty("/counter", i + 1);
    }
  });
});
