sap.ui.define([], function () {
    "use strict";
    return {
        sum: function (a, b) {
            return Number(a) + Number(b);
        },
        formatName: function (first, last) {
            return String(first || "") + (last ? (" " + last) : "");
        }
    };
});
