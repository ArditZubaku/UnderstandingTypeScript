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

// Returning void means => i will not use whatever u return
function addCallbacks(n1: number, n2: number, callback: (n: number) => void) {
  const res = n1 + n2;
  callback(res);
  return 1;
}

addCallbacks(5, 10, () => {
  console.log("Ardit");
});

addCallbacks(5, 10, (result) => {
  console.log(result);
});
