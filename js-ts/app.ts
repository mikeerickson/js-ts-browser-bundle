import * as base64 from "base-64";
import * as utf8 from "utf8";

let str = "mikeerickson";

const bytes = utf8.encode(str);
const encodedStr = base64.encode(bytes);

console.log("encodedStr :", encodedStr);
