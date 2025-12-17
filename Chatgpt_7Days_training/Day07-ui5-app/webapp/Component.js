sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"], function (
  UIComponent,
  JSONModel
) {
  "use strict";

  const STORAGE_KEY = "myui5app_items";

  function loadItems() {
    try {
      const s = window.localStorage.getItem(STORAGE_KEY);
      if (s) return JSON.parse(s);
    } catch (e) {}
    return [
      { id: 1, name: "Apple" },
      { id: 2, name: "Banana" },
      { id: 3, name: "Cherry" }
    ];
  }

  function saveItems(aItems) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(aItems || []));
    } catch (e) {}
  }

  return UIComponent.extend("com.mycompany.myui5app.Component", {
    metadata: { manifest: "json" },

    init: function () {
      UIComponent.prototype.init.apply(this, arguments);

      const oModel = new JSONModel({
        newItemName: "",
        items: loadItems()
      });
      this.setModel(oModel, "app");

      oModel.attachPropertyChange(function (oEvent) {
        const sPath = oEvent.getParameter("path") || "";
        if (sPath.startsWith("/items")) {
          saveItems(oModel.getProperty("/items"));
        }
      });

      this.getRouter().initialize();
    }
  });
});
