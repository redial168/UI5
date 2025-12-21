sap.ui.define(["sap/ui/core/UIComponent"], function (UIComponent) {
  "use strict";

  return UIComponent.extend("com.mycompany.myui5app.Component", {
    metadata: { manifest: "json" },

    init: function () {
      UIComponent.prototype.init.apply(this, arguments);

      // 取得 i18n ResourceModel（你在 manifest.json 裡已經有設定 models: { i18n: ... }）
      const oI18nModel = this.getModel("i18n");
      if (!oI18nModel) {
        return;
      }

      const vBundle = oI18nModel.getResourceBundle();

      if (!vBundle) {
        return;
      }

      // 取得翻譯字串
      document.title = vBundle.getText("appTitle");


    }
  });
});
