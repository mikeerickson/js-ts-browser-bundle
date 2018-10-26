"use strict";
console.log("Hello from Script");
var load = function () {
    var str = "mikeerickson";
    var bytes = utf8.encode(str);
    var encodedStr = base64.encode(bytes);
    var el = document.getElementById("encoded");
    if (el) {
        el.innerHTML = encodedStr;
    }
    else {
        console.log("Missing element: #encoded");
    }
};
