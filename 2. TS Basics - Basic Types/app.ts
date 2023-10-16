function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printNumbers(n1: number, n2: number): void {
  console.log(n1, n2);
}

function returnUndefined(n: number): undefined {
  console.log(n);
  return;
}

// let combinedValues: Function;
// CombinedValues is a type of a function that accepts 2 numbers and returns a number
let combinedValues: (n1: number, n2: number) => number;

combinedValues = add;
// combinedValues = 5;
// combinedValues = printNumbers;

console.log(combinedValues(8, 8));
