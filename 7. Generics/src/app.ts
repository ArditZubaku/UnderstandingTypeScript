const names: Array<string> = [];
// Same as
const names2: string[] = [];
names[0].split("");
names2[0].split("");

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);
});

function merge<T, K>(objA: T, objB: K) {
  return Object.assign({}, objA, objB);
}

const mergedObj = merge(
  {
    name: "Test",
  },
  {
    age: 30,
  }
);

console.log(mergedObj.name);

const mergedObj2 = merge<
  {
    name: string;
  },
  {
    age: number;
  }
>(
  {
    name: "Test",
  },
  {
    age: 50,
  }
);

function merge2<T extends object, K extends object>(objA: T, objB: K) {
  return Object.assign({}, objA, objB);
}

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let description = "Got no description";
  if (element.length === 1) {
    description = "Got 1 element";
  } else if (element.length > 1) {
    description = "Got " + element.length + " elements";
  }
  return [element, description];
}

console.log(countAndDescribe("Test"));
console.log(countAndDescribe([]));
// console.log(countAndDescribe(1));

function extractAndConvert<T extends object, K extends keyof T>(
  obj: T,
  key: K
): T[K] {
  return obj[key];
}
