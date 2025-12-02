sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";
	return Controller.extend("E02_BMI.controller.App", {
		onCalculateBMI: function () {
			var oModel = this.getView().getModel();
			var oData = oModel.getData();
			var fHeight = parseFloat(oData.height);
			var fWeight = parseFloat(oData.weight);

			if (!fHeight || !fWeight || fHeight <= 0 || fWeight <= 0) {
				MessageToast.show(this.getView().getModel("i18n").getResourceBundle().getText("invalidInput"));
				return;
			}

			var fHeightM = fHeight / 100;
			var fBMI = fWeight / (fHeightM * fHeightM);
			var sCategory = this._getBMICategory(fBMI);

			oData.bmi = fBMI.toFixed(2);
			oData.bmiCategory = sCategory;
			oModel.refresh();
		},

		onReset: function () {
			var oModel = this.getView().getModel();
			oModel.setData({
				height: "",
				weight: "",
				bmi: "",
				bmiCategory: ""
			});
		},

		_getBMICategory: function (fBMI) {
			if (fBMI < 18.5) {
				return "過輕";
			} else if (fBMI < 25) {
				return "正常";
			} else if (fBMI < 30) {
				return "過重";
			} else {
				return "肥胖";
			}
		}
	});
});
