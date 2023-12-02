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
