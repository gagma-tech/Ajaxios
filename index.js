"use strict";
if(typeof exports !== 'undefined')
         exports.__esModule = true;
else 
         var exports = {"__esModule": true};
var Ajaxios = /** @class */ (function () {
    function Ajaxios(options, requirements) {
        if (requirements === void 0) { requirements = {}; }
        this.eleform = options.eleform;
        this.requirements = requirements;
        this.data = {};
        this.http = options.http;
        this.type = options.type || "fetch"; //$.ajax,fetch,request,axios,httpclient
        this.headers = options.headers || {};
        this.validation(requirements);
    }
    // return object from FormData
    Ajaxios.prototype.dict = function () {
        var _this = this;
        new FormData(this.eleform).forEach(function (value, key) { _this.data[key] = value; });
    };
    // test parameter before sending
    Ajaxios.prototype.validate = function (data_validate) {
        for (var key in data_validate)
            if (!data_validate[key](this.data[key]))
                return 0;
        return 1;
    };
    // validation of requirements
    Ajaxios.prototype.validation = function (dataObject) {
        var _this = this;
        var _loop_1 = function (key) {
            _this.eleform[key].addEventListener('change', function (e) { dataObject[key](_this.eleform[key].value); }, false);
        };
        for (var key in dataObject) {
            _loop_1(key);
        }
    };
    // append query to data
    Ajaxios.prototype.append = function (object_data) {
        for (var key in object_data)
            this.data[key] = object_data[key];
    };
    //sending request using ajax
    Ajaxios.prototype.send = function (beforeSend) {
        if (beforeSend === void 0) { beforeSend = function () { }; }
        this.dict();
        beforeSend();
        try {
            if (!this.validate(this.requirements))
                throw "invalid data";
            var data = this.data;
            if (this.type === "Axios") {
                return this.http({
                    method: this.eleform.method,
                    url: this.eleform.action,
                    params: data,
                    headers: this.headers
                });
            }
            if (this.type === "HttpClient") {
                return this.http[this.eleform.method](this.eleform.action, data, { headers: new Headers(this.headers) });
            }
            if (this.type === "JqueryAjax") {
                return this.http({
                    url: this.eleform.action,
                    method: this.eleform.method,
                    data: data,
                    headers: this.headers
                });
            }
            return fetch(this.eleform.action, {
                method: this.eleform.action,
                headers: new Headers(this.headers),
                body: JSON.stringify(data)
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    return Ajaxios;
}());
exports.Ajaxios = Ajaxios;
