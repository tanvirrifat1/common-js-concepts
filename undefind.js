/*
  8 ways to get Undefind
1. variable that is initialized will give undefind
2. function with no return
3. parameter that is not passes will be undefind
4. if return has nothing on the right side will return undefind
5. property that doesnt exists on an object will give you undefind
6. accessing array elements outside of the index range
7. deleting an element inside an array
8. set a value directly to undefind
*/

let first;
// console.log(first)

function second(a, b) {
    const total = a + b;
}
const result = second();
// console.log(result)

function third(a, b, c, d, e) {
    const total = a + b + c + d + e;
    console.log(a, b, c, d, e)
}
// third(2, 5)

function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return
    }
    return a + b;
}
const total = noNegative(2, -5);
// console.log(total)

const fifth = { id: 2, name: 'ponchom', age: 40 };
// console.log(fifth.age, fifth.salary)

const sixth = [4, 89, 87, 56, 54];
// you should not do it. Instead use aplice
delete sixth[1];
// console.log(sixth[1], sixth[5], sixth[7])
// console.log(sixth)

const eighth = undefined;

const ninth = null;

const data = { result: [], update: null }

// console.log(typeof undefined)
console.log(typeof null)