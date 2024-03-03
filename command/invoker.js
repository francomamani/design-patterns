"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoker = void 0;
var Invoker = /** @class */ (function () {
    function Invoker() {
        this.commands = [];
    }
    Invoker.prototype.addCommand = function (command) {
        this.commands.push(command);
    };
    Invoker.prototype.run = function () {
        for (var _i = 0, _a = this.commands; _i < _a.length; _i++) {
            var command = _a[_i];
            command.execute();
        }
    };
    return Invoker;
}());
exports.Invoker = Invoker;
