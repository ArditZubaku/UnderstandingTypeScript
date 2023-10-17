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

const add = (...numbers: number[]): number => {
  return numbers.reduce(
    (currentResult: number, currentValue: number): number => {
      return currentResult + currentValue;
    },
    0
  );
};

const result: number = add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result);

const add3params = (...numbers: [number, number, number]): number => {
  let res: number = 0;
  for (const num of numbers) res += num;
  return res;
};

// const result2: number = add3params(1, 2, 3, 4, 5, 6, 7);
const result2: number = add3params(1, 2, 3);
console.log(result2);

const [testHobby, testHobby2, whateverName, ...otherHobbies] = hobbies;
console.log(testHobby);
console.log(testHobby2);
console.log(whateverName);

console.log(otherHobbies);

const { key: differentName, key2: stringIsADifferentNameHereNotAType } = obj;
console.log(differentName);
