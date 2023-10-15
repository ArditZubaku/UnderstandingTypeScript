function combine(
  input1: number | string,
  input2: number | string,
  //   resultForm: string
  // Literal types -> value defined types
  resultForm: "as-number" | "as-string"
) {
  let result: string | number;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultForm === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  /*   if (resultForm === "as-number") {
    return +result;
  } else {
    return result;
  } */
}

const combinedAges = combine(30, 50, "as-number");
console.log(combinedAges);

const combinedNames = combine("Test", "1", "as-string");
console.log(combinedNames);

const combinedStringAges = combine("30", "50", "as-number");
console.log(combinedStringAges);
