type NumberOrString = number | string;
type AsStringOrAsNumber = "as-number" | "as-string";

function combine(
  input1: NumberOrString,
  input2: NumberOrString,
  //   resultForm: string
  // Literal types -> value defined types
  // resultForm: "as-number" | "as-string"
  resultForm: AsStringOrAsNumber
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

type User = { name: string; age: number };

function greet(user: User) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
