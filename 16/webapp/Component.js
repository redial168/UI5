sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
   "use strict";

   return UIComponent.extend("sap.ui.demo.walkthrough.Component", {

      metadata : {
         manifest: "json"
      },

      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);

         // set data model
         var oData = {
            todos: [
               { text: "學習 UI5 Component" },
               { text: "完成第一個練習" }
            ],
            newItem: ""
         };
         var oModel = new JSONModel(oData);
         this.setModel(oModel);
      }
   });
});