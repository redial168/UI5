sap.ui.define([
   "sap/ui/core/UIComponent"
], function (UIComponent) {
   "use strict";
   return UIComponent.extend("project1.Component", {
      metadata : {
         manifest: "json"
      },
      init : function () {
         // 呼叫父類別的 init 函式 (標準動作)
         UIComponent.prototype.init.apply(this, arguments);
      }
   });
});