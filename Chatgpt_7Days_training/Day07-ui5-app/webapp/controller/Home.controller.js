sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageBox", "sap/ui/core/Fragment"],
  function (Controller, MessageBox, Fragment) {
    "use strict";

    return Controller.extend("com.mycompany.myui5app.controller.Home", {
      onAddItem: function () {
        const oModel = this.getOwnerComponent().getModel("app");
        const sName = (oModel.getProperty("/newItemName") || "").trim();

        if (!sName) {
          MessageBox.error("Please enter a name.");
          return;
        }

        const aItems = oModel.getProperty("/items") || [];
        const iId = Date.now();
        aItems.push({ id: iId, name: sName });

        oModel.setProperty("/items", aItems);
        oModel.setProperty("/newItemName", "");
      },

      onDeleteItem: function (oEvent) {
        const oListItem = oEvent.getParameter("listItem");
        const oCtx = oListItem.getBindingContext("app");
        const sPath = oCtx.getPath();
        const iIndex = parseInt(sPath.split("/").pop(), 10);

        const oModel = this.getOwnerComponent().getModel("app");
        const aItems = oModel.getProperty("/items") || [];
        if (iIndex >= 0) {
          aItems.splice(iIndex, 1);
          oModel.setProperty("/items", aItems);
        }
      },

      onViewPress: function (oEvent) {
        const oCtx = oEvent.getSource().getBindingContext("app");
        const iId = oCtx.getObject().id;
        this.getOwnerComponent().getRouter().navTo("detail", { id: iId });
      },

      onEditPress: async function (oEvent) {
        const oCtx = oEvent.getSource().getBindingContext("app");
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
      },

      onCloseDialog: async function () {
        const oDialog = await this._pDialog;
        oDialog.close();
      }
    });
  }
);
