"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Receiver = void 0;
var Receiver = /** @class */ (function () {
    function Receiver() {
    }
    Receiver.prototype.method1 = function (text) {
        return "Hi ".concat(text);
    };
    return Receiver;
}());
exports.Receiver = Receiver;
