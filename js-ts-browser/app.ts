console.log("Hello from Script");

declare var base64: any;
declare var utf8: any;

const load = () => {
  const str = "mikeerickson";
  const bytes = utf8.encode(str);
  const encodedStr = base64.encode(bytes);
  const el = document.getElementById("encoded");
  if (el) {
    el.innerHTML = encodedStr;
  } else {
    console.log("Missing element: #encoded");
  }
};
