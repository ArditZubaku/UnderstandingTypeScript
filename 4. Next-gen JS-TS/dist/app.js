"use strict";
const test = (testVariable) => console.log(testVariable);
test(1, "2");
const test2 = (testVar) => console.log(testVar);
test2(1);
const test3 = (b) => {
    return 0 * b;
};
const test4 = (a, b = 5) => {
    console.log(a + b);
};
test4(5);
test4(5, 10);
const hobbies = ["Reading", "Running"];
const activeHobbies = ["Writing", ...hobbies];
activeHobbies.push(...hobbies);
const obj = {
    key: "value",
    key2: "value2",
};
const obj2 = Object.assign({}, obj);
const add = (...numbers) => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0);
};
const result = add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result);
const add3params = (...numbers) => {
    let res = 0;
    for (const num of numbers)
        res += num;
    return res;
};
const result2 = add3params(1, 2, 3);
console.log(result2);
const [testHobby, testHobby2, whateverName, ...otherHobbies] = hobbies;
console.log(testHobby);
console.log(testHobby2);
console.log(whateverName);
console.log(otherHobbies);
const { key: differentName, key2: stringIsADifferentNameHereNotAType } = obj;
console.log(differentName);
//# sourceMappingURL=app.js.map