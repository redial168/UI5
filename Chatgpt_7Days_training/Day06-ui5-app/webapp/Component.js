sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"], function (
  UIComponent,
  JSONModel
) {
  "use strict";

  return UIComponent.extend("com.mycompany.myui5app.Component", {
    metadata: { manifest: "json" },

    init: function () {
      UIComponent.prototype.init.apply(this, arguments);

      const oModel = new JSONModel({
        items: [
          { id: 1, name: "Apple" },
          { id: 2, name: "Banana" },
          { id: 3, name: "Cherry" }
        ]
      });
      this.setModel(oModel, "app");

      this.getRouter().initialize();
    }
  });
});
