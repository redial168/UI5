sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("sap.ui.demo.bmi.Component", {

        metadata: {
            manifest: "json"
        },

        init: function () {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set data model
            var oData = {
                height: null,
                weight: null,
                bmi: null
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);
        }
    });
});