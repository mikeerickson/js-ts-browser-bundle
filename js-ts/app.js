"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var base64 = __importStar(require("base-64"));
var utf8 = __importStar(require("utf8"));
var str = "mikeerickson";
var bytes = utf8.encode(str);
var encodedStr = base64.encode(bytes);
console.log("encodedStr :", encodedStr);
