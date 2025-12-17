sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("com.mycompany.myui5app.controller.Home", {
    onItemPress: function (oEvent) {
      const oItem = oEvent.getParameter("listItem");
      const oCtx = oItem.getBindingContext("app");
      const iId = oCtx.getObject().id;

      this.getOwnerComponent().getRouter().navTo("detail", { id: iId });
    }
  });
});
