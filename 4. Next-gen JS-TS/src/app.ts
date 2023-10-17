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
