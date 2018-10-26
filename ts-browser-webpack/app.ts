import * as base64 from "base-64";
import * as utf8 from "utf8";

const load = () => {
  const str = "mikeerickson";
  const bytes = utf8.encode(str);
  const encodedStr = base64.encode(bytes);
  const el = document.getElementById("encoded");
  el
    ? (el.innerHTML = `${encodedStr} [${str}]`)
    : console.error("Missing element: #encoded");
};

load();
