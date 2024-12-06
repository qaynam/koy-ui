"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStyleLabel = getStyleLabel;
exports.style = style;
/* eslint-disable @typescript-eslint/no-explicit-any */
var css_1 = require("@emotion/css");
var dev = import.meta.env.MODE === 'development';
function getStyleLabel(namespace, key) {
    if (!dev) {
        return namespace;
    }
    return "".concat(namespace, "__").concat(key.toString());
}
function style(namespace, props) {
    if (namespace === void 0) { namespace = 'Style'; }
    if (!dev) {
        return props;
    }
    var styles = {};
    Object.keys(props).forEach(function (key) {
        var item = props[key];
        if (typeof item === 'function') {
            styles[key] = (function () {
                var props = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    props[_i] = arguments[_i];
                }
                return (0, css_1.cx)(item.apply(void 0, props), (0, css_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t\t\tlabel: ", ";\n\t\t\t\t\t"], ["\n\t\t\t\t\t\tlabel: ", ";\n\t\t\t\t\t"])), getStyleLabel(namespace, key)));
            });
        }
        else {
            styles[key] = (0, css_1.cx)(item, (0, css_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t\t\t\t\tlabel: ", ";\n\t\t\t\t"], ["\n\t\t\t\t\tlabel: ", ";\n\t\t\t\t"])), getStyleLabel(namespace, key)));
        }
    });
    return styles;
}
var templateObject_1, templateObject_2;
