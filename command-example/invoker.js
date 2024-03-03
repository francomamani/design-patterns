"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoker = void 0;
var Invoker = /** @class */ (function () {
    function Invoker() {
        this.list = [];
    }
    Invoker.prototype.addCommand = function (command) {
        this.list.push(command);
    };
    Invoker.prototype.run = function () {
        this.list.forEach(function (command) { return command.execute(); });
    };
    return Invoker;
}());
exports.Invoker = Invoker;
