// primitive types
// number, string, null, boolean etc

// IMPORTANT : never use any or unknown type and never let it occur
let num: number;
num = 12;

let str: string;
str = "hello";

let value: null
value = null;

let isTrue: boolean;
isTrue = true;


// references types
// arrays, objects, tuples, functions etc

// it will hold an array of numbers
let array: number[];
array = [1, 24, 13, 90];


let strArr: string[] = ['hello', 'abc', '12', '11', 'Hi'];

// tuples -> here you have to specify what type of value u are inserting at a position
let tuple: [number, string, boolean, null, number] = [12, 'hello', false, null, 11];

// can be used as return types for function: void, never

// never ->  the code after this is never executed as the loop interates infinitely and doesnt return anything
function print(): never {
    while(true) {
        console.log('infinite');
    }
}
// print();

// void -> doesnt return anything
const printHello = (): void => {
    console.log("Hello world");
}


// [] -> returns an array
// Here the function takes a parameter of type array
const returnArray = (arr: []): [] => {
    return arr;
}


// You cam use union here also 
// here yiu are basically saying that the parameter might be either an array or a string and same for the return type
const returnArrayOrString = (val: [] | string): [] | string => {
    return val;
}





let a: number | string; // union
a = 12;
a = "12"
console.log(typeof a);


// intersection
type Class = {
    student: string,
    usn: number,
}

type Student = {
    name: string,
    height: number,
}
// Intersection of 2 types
type StudentInClass = Class & Student; 

let BE: StudentInClass = {
    student: 'Aryan',
    usn: 12,
    height: 6.2,
    name: 'Aryan'
}

console.log(BE)


// use tsc to compile along ts file name
// to create tsconfig file -> tsc --init
// if you want to to store the compiled js file in a separate dir -> use just "tsc" no filename is required
// to apply real time changes to the js file -> use tsc --watch


// type aliasing

type Num = number;

let n: Num;
n = 12;


// type alisaing for objects
type User = {
    name: string,
    username: string,
    password: string,
    age: number
}

// creating a user object of type User
let user: User = {
    name: 'Rahul',
    username: 'RH',
    password: '88..***|t04',
    age: 18,
}



// Enumerations or enums

enum Planets {
    planet1 = 'Mercury',
    planet2 = 'Venus',
    planet3 = 'Earth',
    planet4 = 'Mars',
    planet5 = 'Jupiter',
    etc = 'etc',
}

const planetsArr: string[] = [Planets.planet1, Planets.planet2, Planets.planet3, Planets.planet4, Planets.etc];
console.log(planetsArr);
