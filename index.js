"use strict";
if(typeof exports !== 'undefined')
         exports.__esModule = true;
else 
         var exports = {"__esModule": true};
         
var Ajaxios = /** @class */ (function () {
    function Ajaxios(eleform, axios, requirements) {
        this.eleform = eleform;
        this.requirements = requirements;
        this.data = {};
        this.axios = axios;
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
    Ajaxios.prototype.validation = function (dataObject) {
        var _this = this;
        var _loop_1 = function (key) {
            this_1.eleform[key].addEventListener('change', function (e) { dataObject[key](_this.eleform[key].value); }, false);
        };
        var this_1 = this;
        for (var key in dataObject) {
            _loop_1(key);
        }
    };
    // append query to data
    Ajaxios.prototype.append = function (object_data) {
        for (var key in object_data)
            this.data[key] = object_data[key];
    };
    // sending request using ajax
    Ajaxios.prototype.send = function (before) {
        this.dict();
        before();
        try {
            if (!this.validate(this.requirements))
                throw "invalid data";
            return this.axios({
                method: this.eleform.method,
                url: this.eleform.action,
                params: this.data
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    return Ajaxios;
}());
exports.Ajaxios = Ajaxios;
