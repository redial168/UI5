sap.ui.define([
	"sap/ui/core/UIComponent",
	"E01/model/models"
], function (UIComponent, models) {
	"use strict";
	return UIComponent.extend("E01.Component", {
		metadata: { manifest: "json" },
		init: function () {
			UIComponent.prototype.init.apply(this, arguments);
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});
