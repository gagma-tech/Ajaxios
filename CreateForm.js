"use strict";
exports.__esModule = true;
var CreateForm = /** @class */ (function () {
    function CreateForm(action, method, id) {
        this.formHtml = document.createElement('form');
        this.formHtml.action = action;
        this.formHtml.method = method;
        this.formHtml.id = id;
    }
    CreateForm.prototype.getJsonByUrl = function () {
    };
    CreateForm.prototype.trait = function (inputs) {
        for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
            var input = inputs_1[_i];
            var ele = document.createElement(input.tag);
            for (var i in input) {
                if (i !== 'tag' && i !== 'options')
                    ele[i] = input[i];
                if (i === 'options') {
                    for (var _a = 0, _b = input.options; _a < _b.length; _a++) {
                        var j = _b[_a];
                        var opt = document.createElement('option');
                        opt.value = j.value;
                        opt.innerHTML = j.txt;
                        ele.append(opt);
                    }
                }
            }
            this.formHtml.append(ele);
        }
    };
    CreateForm.prototype.toHtml = function () {
        return this.formHtml.innerHTML;
    };
    return CreateForm;
}());
exports.CreateForm = CreateForm;
var form = new CreateForm('jjj', 'dd', 'dd');
form.trait([
    {
        tag: 'input',
        name: 'jj',
        value: 'cc',
        type: 'checkbox'
    }
]);
form.toHtml();
