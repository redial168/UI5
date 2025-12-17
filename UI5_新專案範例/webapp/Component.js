sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
	"use strict";

	return UIComponent.extend("E04.Component", {

		metadata: {
			manifest: "json"
		},

		init: function () {
			// 調用父類別的 init 方法
			UIComponent.prototype.init.apply(this, arguments);

			// 建立資料模型
			var oData = {
				items: []
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);
		}
	});
});
