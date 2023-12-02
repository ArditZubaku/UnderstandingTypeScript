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
