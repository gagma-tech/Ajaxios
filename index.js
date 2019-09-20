"use strict";
var Ajaxios = /** @class */ (function () {
    function Ajaxios(eleform) {
        this.method = eleform.method;
        this.url = eleform.action;
        this.form = new FormData(eleform);
        this.data = this.dict(this.form);
    }
    Ajaxios.prototype.dict = function (form) {
        var data = {};
        for (var _i = 0, _a = form.entries(); _i < _a.length; _i++) {
            var d = _a[_i];
            data[d[0]] = d[1];
        }
        return data;
    };
    Ajaxios.prototype.validate = function (data_validate) {
        for (var key in data_validate)
            if (!data_validate[key](this.data[key]))
                return 0;
        return 1;
    };
    Ajaxios.prototype.append = function (object_data) {
        for (var key in object_data)
            this.data[key] = object_data[key];
    };
    Ajaxios.prototype.send = function (before, require) {
        if (!this.validate(require))
            return null;
        before();
        return axios({
            method: this.method,
            url: this.url,
            params: this.data
        });
    };
    return Ajaxios;
}());
exports.Ajaxios = Ajaxios;
