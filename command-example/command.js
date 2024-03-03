"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteCommand = void 0;
var ConcreteCommand = /** @class */ (function () {
    function ConcreteCommand(receiver, text) {
        this.receiver = receiver;
        this.text = text;
    }
    ConcreteCommand.prototype.execute = function () {
        var response = this.receiver.method1(this.text);
        console.info(response);
    };
    return ConcreteCommand;
}());
exports.ConcreteCommand = ConcreteCommand;
