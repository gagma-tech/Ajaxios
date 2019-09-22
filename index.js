"use strict";
exports.__esModule = true;
var Ajaxios = /** @class */ (function () {
    function Ajaxios(eleform, axios) {
        this.method = eleform.method;
        this.url = eleform.action;
        this.form = new FormData(eleform);
        this.data = this.dict(this.form);
        this.axios = axios;
    }
    // return object from FormData
    Ajaxios.prototype.dict = function (formData) {
        var data = {};
        formData.forEach(function (value, key) { data[key] = value; });
        return data;
    };
    // test parameter before sending
    Ajaxios.prototype.validate = function (data_validate) {
        for (var key in data_validate)
            if (!data_validate[key](this.data[key]))
                return 0;
        return 1;
    };
    // append query to data
    Ajaxios.prototype.append = function (object_data) {
        for (var key in object_data)
            this.data[key] = object_data[key];
    };
    // sending request using ajax
    Ajaxios.prototype.send = function (before, require) {
        if (!this.validate(require))
            return null;
        before();
        return this.axios({
            method: this.method,
            url: this.url,
            params: this.data
        });
    };
    return Ajaxios;
}());
exports.Ajaxios = Ajaxios;
