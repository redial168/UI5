sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("com.mycompany.myui5app.controller.App", {
    onInit: function () {
      console.log("Day 3: onInit()");
    },

    onAdd: function () {

      const oModel = this.getOwnerComponent().getModel("app");
      let i = oModel.getProperty("/counter");
      console.log("Current counter value1:", i);
      i = i + 1;
      console.log("Current counter value2:", i);
      oModel.setProperty("/counter", i);
      console.log("Current counter value3:", i);

    }


  });
});
