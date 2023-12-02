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

type PrimitiveType = number | string | boolean;

class StorageClass<T extends PrimitiveType> {
  private data: T[] = [];

  public addItem(item: T): void {
    this.data.push(item);
  }

  public removeItem(item: T): void {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1); // -1 if doesn't find the item's index => splice(-1) === from the end
  }

  public getItems(): T[] {
    return [...this.data];
  }
}

const storage = new StorageClass<string>();
storage.addItem("new Item");
// storage.addItem(10);
const items = storage.getItems();

const numbersStorage = new StorageClass<number>();
numbersStorage.addItem(10);
// numbersStorage.addItem("new Number");

// const objectsStorage = new StorageClass<object>();
// const testObj = { name: "Test" };
// const testObj2 = { name: "Test2" };
// objectsStorage.addItem({ name: "Test" });
// objectsStorage.addItem({ name: "Test2" });
// objectsStorage.addItem(testObj);
// objectsStorage.addItem(testObj2);
//...
// Now we can correctly remove it since we have the same references now
// objectsStorage.removeItem({ name: "Test" });
// console.log(objectsStorage.getItems());

// const testStorage = new StorageClass<"Test">();
// testStorage.addItem('test');

const booleanStorage = new StorageClass<boolean>();
booleanStorage.addItem(true);
booleanStorage.addItem(false);
console.log(booleanStorage.getItems());
