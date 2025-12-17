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
        user: { name: "Joyce" },
        counter: 0
      });
      this.setModel(oModel, "app");
    }
  });
});
