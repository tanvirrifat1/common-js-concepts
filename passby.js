// primitive types are pass by value
let num1 = 5;
let num2 = 7;

function multiply(a, b) {
    a = 26;
    const result = a * b;
    return result;
}
console.log(num1)
multiply(num1, num2);
console.log(num1)

// object and array are pass by reference
let person1 = { name: 'Jalil', partner: 'borsa' };
let person2 = { name: 'raj', partner: 'anika' };

function makeMovie(friend1, friend2) {
    friend1.name = 'Ononto';
    friend2.partner = 'mim';
}
console.log(person1, person2);
makeMovie(person1, person2);
console.log(person1, person2)