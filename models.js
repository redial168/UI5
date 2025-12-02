sap.ui.define([
	"sap/ui/model/json/JSONModel"
], function (JSONModel) {
	"use strict";

	return {
		createBMIModel: function () {
			const oModel = new JSONModel({
				height: null,
				weight: null,
				bmi: null
			});
			return oModel;
		}
	};
});