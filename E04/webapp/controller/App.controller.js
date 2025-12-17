sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"E04/js/myUtil"
], function (Controller, myUtil) {
	"use strict";

	return Controller.extend("E04.controller.App", {

		onInit: function () {
			// 使用示範模組
			var n = myUtil.sum(2, 3);
			console.log("[E04] myUtil.sum(2,3)=", n);

			// 範例：將結果放到元件模型（如果存在）
			var oComponent = this.getOwnerComponent && this.getOwnerComponent();
			if (oComponent) {
				var oModel = oComponent.getModel();
				if (oModel) {
					oModel.setProperty("/lastSum", n);
				}
			}
		}
	});
});
