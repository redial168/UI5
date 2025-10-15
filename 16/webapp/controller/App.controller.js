sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
   "use strict";

   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      // onInit 已經不需要了，因為 Model 在 Component.js 裡建立了

      onAddItem : function () {
         var oModel = this.getView().getModel();
         var aTodos = oModel.getProperty("/todos");
         var sNewItem = oModel.getProperty("/newItem");

         if (!sNewItem) {
            return;
         }

         aTodos.push({ text: sNewItem });

         oModel.setProperty("/todos", aTodos);
         oModel.setProperty("/newItem", "");
      }
   });
});