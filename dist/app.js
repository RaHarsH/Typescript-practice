"use strict";
// primitive types
// number, string, null, boolean etc
// IMPORTANT : never use any or unknown type and never let it occur
let num;
num = 12;
let str;
str = "hello";
let value;
value = null;
let isTrue;
isTrue = true;
// references types
// arrays, objects, tuples, functions etc
// it will hold an array of numbers
let array;
array = [1, 24, 13, 90];
let strArr = ['hello', 'abc', '12', '11', 'Hi'];
// tuples -> here you have to specify what type of value u are inserting at a position
let tuple = [12, 'hello', false, null, 11];
// can be used as return types for function: void, never
// never ->  the code after this is never executed as the loop interates infinitely and doesnt return anything
function print() {
    while (true) {
        console.log('infinite');
    }
}
// print();
// void -> doesnt return anything
const printHello = () => {
    console.log("Hello world");
};
// [] -> returns an array
// Here the function takes a parameter of type array
const returnArray = (arr) => {
    return arr;
};
// You cam use union here also 
// here yiu are basically saying that the parameter might be either an array or a string and same for the return type
const returnArrayOrString = (val) => {
    return val;
};
let a; // union
a = 12;
a = "12";
console.log(typeof a);
let BE = {
    student: 'Aryan',
    usn: 12,
    height: 6.2,
    name: 'Aryan'
};
console.log(BE);
let n;
n = 12;
// creating a user object of type User
let user = {
    name: 'Rahul',
    username: 'RH',
    password: '88..***|t04',
    age: 18,
};
// Enumerations or enums
var Planets;
(function (Planets) {
    Planets["planet1"] = "Mercury";
    Planets["planet2"] = "Venus";
    Planets["planet3"] = "Earth";
    Planets["planet4"] = "Mars";
    Planets["planet5"] = "Jupiter";
    Planets["etc"] = "etc";
})(Planets || (Planets = {}));
const planetsArr = [Planets.planet1, Planets.planet2, Planets.planet3, Planets.planet4, Planets.etc];
console.log(planetsArr);
