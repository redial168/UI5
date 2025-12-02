sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";
	return Controller.extend("E01.controller.App", {
		onPress: function () {
			var s = this.getView().getModel("i18n").getResourceBundle().getText("pressMessage");
			MessageToast.show(s);
		}
	});
});
