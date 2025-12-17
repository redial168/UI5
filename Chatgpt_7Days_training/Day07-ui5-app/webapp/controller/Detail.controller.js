sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History"], function (
  Controller,
  History
) {
  "use strict";

  return Controller.extend("com.mycompany.myui5app.controller.Detail", {
    onInit: function () {
      this.getOwnerComponent()
        .getRouter()
        .getRoute("detail")
        .attachPatternMatched(this._onMatched, this);
    },

    _onMatched: function (oEvent) {
      const sId = oEvent.getParameter("arguments").id;
      const oModel = this.getOwnerComponent().getModel("app");
      const aItems = oModel.getProperty("/items") || [];

      const iIndex = aItems.findIndex((x) => String(x.id) === String(sId));
      if (iIndex >= 0) {
        this.getView().bindElement({ path: "/items/" + iIndex, model: "app" });
      }
    },

    onNavBack: function () {
      const oHistory = History.getInstance();
      const sPrev = oHistory.getPreviousHash();

      if (sPrev !== undefined) {
        window.history.go(-1);
      } else {
        this.getOwnerComponent().getRouter().navTo("home", {}, true);
      }
    }
  });
});
