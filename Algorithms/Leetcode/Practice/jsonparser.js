
// Implement JSON.stringify();
function stringify(input) {
  if (input === undefined) return undefined; // it actually returns undefined.

  if (input === null) return "null";

  if (typeof input === "number") return `${input}`;

  if (typeof input === "boolean") return `${input}`;

  if (typeof input === "string") return `"${input}"`; //important!

  if (Array.isArray(input)) {
    let result = "";
    let array = [];
    result += "[";

    for (let item of input) {
      let next = stringify(item);
      if (typeof next === "undefined") {
        array.push("null");
      } else {
        array.push(next);
      }
    }
    result += array.join(",") + "]";
    return result;
  }

  if (typeof input === "object") {
    let result = "{";
  }
}
