// Code goes here!

const test: (a: number, b: number | string) => void = (testVariable) =>
  //   console.log(test);
  console.log(testVariable);
test(1, "2");

const test2 = (testVar: string | number): void => console.log(testVar);
test2(1);

// const test3: (a: number) => number = (b: string): void => {
//   console.log(b);
// };

const test3: (a: number) => number = (b: number): number => {
  return 0 * b;
};

// Default params should be the last ones
const test4 = (a: number, b: number = 5) => {
  console.log(a + b);
};

test4(5);
test4(5, 10);

const hobbies: string[] = ["Reading", "Running"];
const activeHobbies: string[] = ["Writing", ...hobbies];

activeHobbies.push(...hobbies);

const obj = {
  key: "value",
  key2: "value2",
};

// const obj2 = obj;
const obj2 = { ...obj };
