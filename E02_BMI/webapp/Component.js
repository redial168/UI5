sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
	"use strict";
	return UIComponent.extend("E02_BMI.Component", {
		metadata: { manifest: "json" },
		init: function () {
			UIComponent.prototype.init.apply(this, arguments);
			var oModel = new JSONModel({
				height: "",
				weight: "",
				bmi: "",
				bmiCategory: ""
			});
			this.setModel(oModel);
		}
	});
});
