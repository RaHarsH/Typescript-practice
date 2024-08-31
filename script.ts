// Interfaces
interface Users {
    name: string;
    password: string;
    age: number;
    email: string
}


function acceptUser(user: Users) {
    console.log(user);
}

let users: Users;
users = {
    name: "Harish",
    email: 'test@123.com',
    age: 21,
    password: '12763487'
}
// acceptUser(users);

// you can even merge interfaces of same names

interface Animal {
    name: string;
}

interface Animal {
    color: string;
}
// Here the interface Animal will now have both the fields
let animal: Animal = {
    name: 'Tiger',
    color: 'Orange'
}

// console.log(animal);


// using extends to inherit
interface Dog extends Animal {
    weight: number;
}

let dog: Dog = {
    name: 'Bull Dog',
    color: 'black',
    weight: 80
}

console.log(dog)

type Data = string | null;

// classes and instances
// Construnctors

// Access modifiers -> public, private, protected
// public -> can ve accessible from anywhere
// private -> can only be accessed within the same class or by using getters and setters
// private -> just like private but it can also be accessed within the class which interits or extends the main class

class Pendrive {
    public data: Data;
    constructor(data: Data) {
        this.data = data;
    }
    
    // even if you dont specify the access modifiers it will take 'public' as defualt
    getData() {
        console.log(`getting data.....`);
        console.log(`got data ${this.data}`);
    }

    public sendData(data: Data) {
        console.log('sending data.....');
        console.log('sent data', data);
        
    }
}


let p1 = new Pendrive('Music');
console.log(p1.data);

// p1.getData();
// p1.sendData(null);
// p1.sendData('Movie');

// private access modifier
class Account {
    private balance: number;
    constructor(balance: number) {
        this.balance = balance
    }

    // or
    // you can declare the class field in the construnctor itself

    // constructor(private balance: number) {
    //     this.balance = balance
    // }

    // getters: use get key word -> can be used to access the private scope fields outside the class
    get getBalance(): number {
        return this.balance;
    }

    // setters: use set key word -> can be used to set the private field value outside the class
    set setBalance(balance: number) {
        this.balance = balance;
    }
}

let acc = new Account(100000);
// console.log(acc.balance); -> cant access directly as the balance field is private

// using getter method to acces it
// Note : dont use () 'parenthesis' when calling for getters and setters
console.log(acc.getBalance);

// using setters to set the value of the private field
acc.setBalance = 90001893598;
console.log(acc.getBalance)


// using extends
class Device {
    protected id: number;
    public name: string

    constructor(id: number, name: string)  {
        this.id = id;
        this.name = name
    }
}

class Mobile extends Device {
    public brand: string;
    // the child clas construtor must use super()
    constructor(id: number, name: string, brand: string) {
        super(id, name);
        this.brand = brand;
    }

    public call() {
        console.log('calling..');    
    }

    public openCamera() {
        console.log('opening camera.....');
        console.log('camera opened');
    }

    public getId(): number {
        return this.id;
    }
}

let mb = new Mobile(1, 'smartphone', 'apple');
// console.log(mb.getId());

// functions 
const printingHello = function(): void {
    console.log(`hello`); 
}

// functions parameters 
// Optional parameters

// here age is an opetional parameter: using ?
function hello(name: string, age?: number): void {
    console.log(`Hello my name is ${name} and my age is ${age}`);
}

// hello('Aryan');

// default parameters: default value is provided to the the function parameter if they are not passed ay value during the function call
function add(num: number, num2: number = 10): void {
    console.log(num + num2);
}

add(20);

// resting parametes : using spread operator
function getNames(...names: string[]) {
    console.log(names);
}

getNames('Aryan', 'Rahul', 'Abhi', 'Rohan', 'Karthik'); // passing mutiple string values to the function of paramter type string[]

type UserType = {
    name: string,
    age?: number, // optional field
    email: string,
}

let userS: UserType = {
    name: 'Aryan',
    email: 'aryan@123.com'
}

// modules -> imports and exports

export const PI = 3.14

//  to import 
// import { PI } from 'dir/filename'


// array methods
// map() method

let arr: number[] = [1, 2, 3, 5, 7];

function addNum(num1: number, num2: number): number{
    return num1 + num2;
}

let newArray: number[] = arr.map((num: number): number => {
    if(num > 5) {
        return addNum(num, 10);
    }
    else return num + 1;
})

// console.log(newArray);

// forEach method()
const callBackfn = (num: number): number => {
//  console.log(num * num);
    return num * num
}
arr.forEach((num): void => console.log(callBackfn(num)));

// Binary Search 
// recursive approach

// let array: number[] = [1, 2, 8, 10, 89, 11, 12, 15];

// sort the array for binary search to work

// array.sort();
// console.log(array);

const binarySearch = (arr: number[], low: number, high: number, key: number): number => {
    if(low <= high) {
        let mid = Math.floor((low + high)/2);
        if(arr[mid] === key) {
            return mid;
        }
        else if(key < arr[mid]) {
           return binarySearch(arr, low, mid - 1, key);
        }
        else {
            return binarySearch(arr, mid + 1, high, key);
        }
    }
    return -1;
}

// let pos: number = binarySearch(array, 0, array.length - 1, 89);
// console.log(pos);


// iterative approach

// let array: number[] = [1, 2, 8, 10, 89, 11, 12, 15];

// array.sort();
// console.log(array);

function bSearchIterative(arr: number[], low: number, high: number, key: number): number {
    while(low <= high) {
        let mid: number = Math.floor((low + high) / 2);

        if(key === arr[mid]) {
            return mid;
        }
        else if(key < arr[mid])  {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }

    return -1;
}


// let pos: number = bSearchIterative(array, 0, array.length - 1, 89);
// console.log(pos);

// 


let array: number[] = [1, 2, 8, 10, 89, 11, 12, 15];

function getMinMax(arr: number[], low: number, high: number, min: number, max: number): [number, number] {
    if (low == high) {
        min = max = arr[low];
        return [min, max];
    } else if (low == high - 1) {
        if (arr[low] < arr[high]) {
            min = arr[low];
            max = arr[high];
            return [min, max];
        } else {
            min = arr[high];
            max = arr[low]
            return [min, max];
        }
    } else {
        let mid: number = Math.floor((low + high) / 2);
        let [min1, max1] = getMinMax(arr, low, mid, min, max);
        let [min2, max2] = getMinMax(arr, mid + 1, high, min, max);

        min = Math.min(min1, min2);
        max = Math.max(max1, max2);

        return [min, max];
    }
}

let [min, max] = getMinMax(array, 0, array.length - 1, 10000, 0); // pass initial values of min and max

console.log(`minimum element = ${min}`);
console.log(`maximum element = ${max}`);

console.table(array);


// Heap construction using bottom up approach

const bottomUpHeapConstruct = (heap: number[]): number[] => {
    const n = heap.length;
    for(let i = Math.floor(n/2); i >= 1; i--) {
        let val: number = heap[i]; // store the parent node value 
        let k: number = i; // store the index of the parent node
        let isHeap: boolean = false;
        let j = 2 * k; // get the left child of the parent node
        while(!isHeap && j <= n) {
            // check if one more child is present to parent i.e the right child
            if(j < n) {
                if(heap[j] < heap[j + 1])  {
                    j = j + 1;
                }
            }
            if(val >= heap[j]) {
                isHeap = true;
            }
            else {
                heap[k] = heap[j];
                k = j;
            }
        }
        heap[k] = val; // place the initial parent node in its correct position
    }
    return heap;
}


// Insertion Sort using Sort class and creating its instance

class Sort {
    private nums: number[];
    // pass the array using rest when creating an instance
    constructor(...nums: number[]) {
        this.nums = nums;
    }

    public printArray() {
        console.table(this.nums);
    }

    public insertionSort() {
        for(let i: number = 1; i < this.nums.length; i++) {
            let curVal: number = this.nums[i];
            let idx: number = i;
            let j: number = i - 1;
            while(j >= 0 && this.nums[j] > curVal) {
                this.nums[j + 1] = this.nums[j];
                j--;
            }
            this.nums[j + 1] = curVal;
        }
        console.log(`Array sorted!`);;
    }
}

const obj = new Sort(5, 1, 4, 10, 6, 9, 8, 15, 21, 18); // pass the array elements
// obj.printArray();
// obj.insertionSort();
// obj.printArray();


// program to count the sum of array elements using classes and objects

class Arrays {
    private numsArray: number[];

    constructor(...numsArray: number[]) {
        this.numsArray = numsArray;
    }

    public getArray(): number[] {
        return this.numsArray;
    }

    private printArray() {
        console.log(this.numsArray);
    }

    public countSumofArray() {
        let sum = 0;
        this.numsArray.forEach((elem) => sum += elem);
        this.printArray();
        console.log(sum);;    
    }
}

const arrObj = new Arrays(1, 3, 8, 59, 29, 10, 12, 28, 10, 11);
// arrObj.countSumofArray();

// let returnArr: number[] = arrObj.getArray();
// console.log(returnArr);


// return a new array of numbers in String format using map and implement it using classes and objects

class StringArray {
    private nums: number[];

    constructor (...nums: number[]) {
        this.nums = nums;
    }

    private printArray(nums: string[]) {
        console.log(nums);
    }

    public convertToStringArray(): string[] {
        let strArrayOfNums : string[];
        strArrayOfNums = this.nums.map((num) => num.toString());
        console.log(typeof strArrayOfNums);
        this.printArray(strArrayOfNums);
        return strArrayOfNums;
    }
}


// const strArrayObj = new StringArray(1, 378, 190, 190, 90.2, -190, 904.90, 78.90431, 389, 10.1);

// let strArray: string[] = strArrayObj.convertToStringArray();


// Manipulating the string array using map and storing the result in a different array of type string[]
let strArr: string[] = ["Histesh", "Aryan", "Superman", "Batman", "Tony Stark"];

strArr.push('Harish');
const helloStrArr: string[] = strArr.map((str: string) => `Hello ${str}`);

// print the modified array of strings
// console.log(helloStrArr);


// destructuring an object

type Admin = {
    adId: number,
    adminName: string,
    adminRights?: string,  // optional property , doesnt give any error even if not provided
    adminPassword: string,
    canAccess: boolean
}


let dbAdmin: Admin = {
    adId: 1001,
    adminName: "Hitesh",
    adminPassword: "&&8***??*%$!#",
    canAccess: true,
}

// console.log(dbAdmin)

let {adId, adminName, ...other} = dbAdmin;

// console.log(adId);
// console.log(adminName);

// other contains the rest of the properties in the form of an object
// console.log(other);




// returning an array through a function and destructuring it

const returnArr = (): string[] => {
    let arr: string[] = ['Hello', 'Hi', 'Bye', 'How are you', 'How was your day'];
    // return an array
    // return arr;

    // or

    return arr.map((greeting) => `${greeting} Rahul`);
}

// let [greeting1, greeting2, greeting3, greeting4, greeting5] = returnArr();
let [greeting1, greeting2, ...otherGreetings] = returnArr();


// console.table([greeting1, greeting2, greeting3, greeting4, greeting5]);

// console.log(greeting1);
// console.log(otherGreetings);







