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