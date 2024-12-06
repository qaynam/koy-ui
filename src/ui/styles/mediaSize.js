"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaSize = exports.breakpoints = void 0;
var css_1 = require("@emotion/css");
exports.breakpoints = Object.freeze({
    tablet: 768,
    mobile: 450
});
exports.MediaSize = {
    greaterThen: function (bp) {
        return function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            return (0, css_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t@media (min-width: ", "px) {\n\t\t\t\t", "\n\t\t\t}\n\t\t"], ["\n\t\t\t@media (min-width: ", "px) {\n\t\t\t\t", "\n\t\t\t}\n\t\t"])), exports.breakpoints[bp], css_1.css.apply(void 0, params));
        };
    },
    lessThen: function (bp) {
        return function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            return (0, css_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t\t\t\t@media (max-width: ", "px) {\n\t\t\t\t\t", "\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\t@media (max-width: ", "px) {\n\t\t\t\t\t", "\n\t\t\t\t}\n\t\t\t"])), exports.breakpoints[bp], css_1.css.apply(void 0, params));
        };
    },
    between: function (bpFrom, bpTo) {
        return function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            return (0, css_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t\t\t@media (min-width: ", "px) and (max-width: ", "px) {\n\t\t\t\t", "\n\t\t\t}\n\t\t"], ["\n\t\t\t@media (min-width: ", "px) and (max-width: ", "px) {\n\t\t\t\t", "\n\t\t\t}\n\t\t"])), exports.breakpoints[bpFrom], exports.breakpoints[bpTo], (0, css_1.css)(params));
        };
    }
};
var templateObject_1, templateObject_2, templateObject_3;
