"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Receiver = void 0;
var Receiver = /** @class */ (function () {
    function Receiver() {
    }
    Receiver.prototype.greeting = function (value) {
        console.log("hi ".concat(value));
    };
    return Receiver;
}());
exports.Receiver = Receiver;
