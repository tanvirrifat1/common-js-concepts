// array like object
function sum(a, b, c) {
    const args = [...arguments];
    console.log(args)
    const result = a + b + c;
    return result;
}
// console.log(arguments);
const total = sum(12, 56, 45, 78, 98, 85);
// console.log(total)
console.log(sum.length)

