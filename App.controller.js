sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], function (Controller, MessageToast) {
   "use strict";

   return Controller.extend("sap.ui.demo.bmi.controller.App", {

      formatter: {
         formatBMI: function(fBMI) {
            if (!fBMI) {
               return "";
            }
            return fBMI.toFixed(2);
         }
      },

      onCalcBMI : function () {
         const oModel = this.getView().getModel();
         const fHeight = parseFloat(oModel.getProperty("/height"));
         const fWeight = parseFloat(oModel.getProperty("/weight"));

         // Basic validation
         if (isNaN(fHeight) || isNaN(fWeight) || fHeight <= 0 || fWeight <= 0) {
            MessageToast.show("請輸入有效的身高和體重");
            oModel.setProperty("/bmi", null);
            return;
         }

         // BMI Calculation: weight (kg) / [height (m)]^2
         const fHeightInMeters = fHeight / 100;
         const fBMI = fWeight / (fHeightInMeters * fHeightInMeters);

         oModel.setProperty("/bmi", fBMI);

         let sResultText = "您的BMI是: " + fBMI.toFixed(2);
         if (fBMI < 18.5) {
            sResultText += " (體重過輕)";
         } else if (fBMI >= 18.5 && fBMI < 24) {
            sResultText += " (正常範圍)";
         } else {
            sResultText += " (體重過重)";
         }
         MessageToast.show(sResultText);
      }
   });
});