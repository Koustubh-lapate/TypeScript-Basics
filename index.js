function Greet() {
    return "Welcome in the world of TypeScript";
}
var ans = Greet();
console.log(ans);
var sales = 12;
var course = 'TypeScript';
var is_published = true;
console.log(sales + ' ' + course + ' ' + is_published);
function calculator(num1, num2, operation) {
    var ans = 0;
    if (operation === '+') {
        ans = num1 + num2;
    }
    else if (operation === '-') {
        ans = num1 - num2;
    }
    else if (operation === '*') {
        ans = num1 * num2;
    }
    else if (operation === '/') {
        ans = num1 / num2;
    }
    return ans;
}
console.log(calculator(1, 2, '*'));
console.log(calculator(2, 4, '+'));
console.log(calculator(4, 2, '/'));
console.log(calculator(9, 3, '-'));
function vote(age) {
    if (age >= 18) {
        return true;
    }
    return false;
}
var myAge = vote(19);
if (myAge === true) {
    console.log('You are eligible for voting.');
}
else {
    console.log('You are not eligible for voting.');
}
function details(person) {
    return "Hello my name is " + person.name + ". My Age is " + person.age + ". I live in " + person.address + ". My gender is " + person.gender + ". My height is " + person.height + ".";
}
console.log(details({ gender: "male", height: 162, name: "Koustubh Lapate", age: 21, address: "Pune" }));
