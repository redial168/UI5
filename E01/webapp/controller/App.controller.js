sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("sap.ui.demo.bmi.controller.App", {

        onInit: function () {
            var oViewModel = new JSONModel({
                bmi: null,
                bmiStatus: ""
            });
            this.getView().setModel(oViewModel, "view");
        },

        onCalculateBMI: function () {
            var oModel = this.getView().getModel();
            var oViewModel = this.getView().getModel("view");
            var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();

            var fHeight = parseFloat(oModel.getProperty("/height"));
            var fWeight = parseFloat(oModel.getProperty("/weight"));

            if (isNaN(fHeight) || isNaN(fWeight) || fHeight <= 0 || fWeight <= 0) {
                MessageToast.show(oResourceBundle.getText("invalidInputMessage"));
                return;
            }

            var fHeightInMeters = fHeight / 100;
            var fBMI = fWeight / (fHeightInMeters * fHeightInMeters);
            var sBmiStatus = "";
            
            if (fBMI < 18.5) {
                sBmiStatus = oResourceBundle.getText("bmiResultUnderweight");
            } else if (fBMI >= 18.5 && fBMI < 24) {
                sBmiStatus = oResourceBundle.getText("bmiResultHealthy");
            } else if (fBMI >= 24 && fBMI < 28) {
                sBmiStatus = oResourceBundle.getText("bmiResultOverweight");
            } else {
                sBmiStatus = oResourceBundle.getText("bmiResultObese");
            }
            
            oViewModel.setProperty("/bmi", fBMI.toFixed(2));
            oViewModel.setProperty("/bmiStatus", sBmiStatus);
        },

        formatBmiResult: function(fBmi, sStatus) {
            if (!fBmi) {
                return "";
            }
            var sColor = "";
            if (sStatus === this.getView().getModel("i18n").getResourceBundle().getText("bmiResultUnderweight")) {
                sColor = "blue";
            } else if (sStatus === this.getView().getModel("i18n").getResourceBundle().getText("bmiResultHealthy")) {
                sColor = "green";
            } else if (sStatus === this.getView().getModel("i18n").getResourceBundle().getText("bmiResultOverweight")) {
                sColor = "orange";
            } else {
                sColor = "red";
            }

            return "<strong>" + fBmi + "</strong>" + " <span style='color:" + sColor + ";'>(" + sStatus + ")</span>";
        },

        onClear: function () {
            var oModel = this.getView().getModel();
            var oViewModel = this.getView().getModel("view");
            oModel.setProperty("/height", null);
            oModel.setProperty("/weight", null);
            oViewModel.setProperty("/bmi", null);
            oViewModel.setProperty("/bmiStatus", "");
        }

    });
});