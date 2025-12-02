sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/demo/bmi/model/models"
], function (UIComponent, JSONModel, models) {
   "use strict";

   return UIComponent.extend("sap.ui.demo.bmi.Component", {
      metadata : {
            manifest: "json"
      },

      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);

         // set data model
         this.setModel(models.createBMIModel());
      }
   });
});