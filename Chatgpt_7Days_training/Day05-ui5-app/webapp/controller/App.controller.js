sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/core/Fragment"],
  function (Controller, MessageToast, Fragment) {
    "use strict";

    return Controller.extend("com.mycompany.myui5app.controller.App", {
      onInit: function () {
        console.log("Day 5: onInit()");
      },

      onAdd: function () {
        const oModel = this.getOwnerComponent().getModel("app");
        const i = oModel.getProperty("/counter");
        oModel.setProperty("/counter", i + 1);
      },

      onItemPress: async function (oEvent) {
        const oItem = oEvent.getParameter("listItem");
        const oCtx = oItem.getBindingContext("app");
        const sPath = oCtx.getPath();

        if (!this._pDialog) {
          this._pDialog = Fragment.load({
            name: "com.mycompany.myui5app.view.EditDialog",
            controller: this
          }).then((oDialog) => {
            this.getView().addDependent(oDialog);
            return oDialog;
          });
        }

        const oDialog = await this._pDialog;
        oDialog.bindElement({ path: sPath, model: "app" });
        oDialog.open();

        MessageToast.show("Editing: " + oCtx.getObject().name);
      },

      onCloseDialog: async function () {
        const oDialog = await this._pDialog;
        oDialog.close();
      }
    });
  }
);
