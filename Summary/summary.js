/* This binding */

// task 1

// function sum (n1, n2, n3) {
//     return n1 + n2 + n3;
// }

// const arr = [10, 20, 30];

// console.log(sum.apply(null, arr));

// task 2

// const student1 = { name: "Anna", score: 80 };

// const student2 = { name: "Mark", score: 95 };

// function printResult() {
//     console.log(this.name + " scored " + this.score);
// }

// printResult.call(student1);

// printResult.apply(student2);

// task 3

// const user = {
//     name: "Alex",
//     greet() {
//         return "Hello " + this.name;
//     }
// };

// const admin = {
//     name: "Admin"
// };

// console.log(user.greet.call(admin))

// task 4

// const nums = [5, 21, 54, 95, 7, 18];

// console.log(Math.max(...nums))

// task 5

// const obj1 = {
//     value: 10,

//     getValue () {
//         return this.value;
//     }
// };

// const obj2 = {
//     value: 50
// };

// console.log(obj1.getValue.call(obj2));

// task 6

// function total (a, b, c) {
//     return a + b + c;
// }

// const args = [7, 8, 9];

// console.log(total.apply(null, args))

// task 7

// function show () {
//     return this.name;
// }

// const obj = {name: "Test"};

// const bound = show.bind(obj);

// console.log(bound.call({name: "Wrong"})) // This will return "Test"

// task 8

// function Students () {
//     return `${this.name} has ${this.point} points`;
// }

// const p1 = {name: "Anna", point: 10};

// const p2 = {name: "Mark", point: 25};

// console.log(Students.call(p1));

// console.log(Students.call(p2));

// task 9

// function sum (a, b, c) {
//     return a + b + c;
// }

// function execute (fn, arr) {
//     return fn.apply(null, arr);
// }

// console.log(execute(sum, [2, 4, 6]));

// task 10

// function show () {
//     return this.name;
// }

// const a = {name: "A"};

// const b = {name: "B"};

// const fn = show.bind(a); // It'll print "A"

// console.log(fn.call(b));

// task 11

// "use strict"

// const obj = {
//     value: 100,

//     get() {
//         const inner = () => this.value;

//         return inner();
//     }
// };

// console.log(obj.get())

// task 12

// const obj = {
//     value: 1,

//     add(x) {
//         this.value += x;

//         return this;
//     }
// };

// console.log(obj.add(5).add(10).value)



/* Setter and Getter */

// task 1

// class Employee {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;

//         this.lastName = lastName;
//     }

//     get fullName () {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const geteverything = new Employee ("Tigran", "Aghassiyan");

// console.log(geteverything.fullName)

// task 2

// class Account {
//     constructor (_password) {
//         this._password = _password;
//     }

//     get limit() {
//         return this._password;
//     }

//     set limit (lim) {
//         if (lim.length > 6) { this._password = lim; }

//         else { console.log("Password is too short"); }
//     }

// }

// const passw = new Account();

// passw.limit = "1234"

// console.log(passw.limit);

// task 3

// class Temperature {
//     constructor (_celsius) {
//         this._celsius = _celsius;
//     }

//     get fahrenheit () {
//         return `Fahrenheit is ${(this._celsius * 1.8) + 32}`;
//     } 
// }

// let fahr = new Temperature (14);

// console.log(fahr.fahrenheit)

// task 4 

// class Counter {
//     constructor (_counter) {
//         this._counter = _counter;

//         this._counter = 0;
//     }

//     increment () {
//         this._counter += 1;
//     }

//     get currentCount () {
//         return `current count: ${this._counter}`;
//     }
// }

// let countt = new Counter (42);

// countt.increment()

// countt.increment()

// countt.increment()

// countt.increment()

// console.log(countt.currentCount)

// task 5

// class Product {
//     constructor (_price) {
//         this._price = _price;
//     }

//     set price (val) {
//         this._price = val;
//     }

//     get price () {
//         return this._price * 0.1;
//     }
// }

// const pr = new Product (54000);

// console.log(pr.price)

// task 6

// class BankAccount {
//     constructor (_balance) {
//         this._balance = 0;
//     }

//     set balance (add) {
//         if (add >= 0) this._balance += add;

//         else { console.log("No any negative number"); }
//     }

//     get balance () {
//         return this._balance;
//     }
// }

// let bankacc = new BankAccount ();

// bankacc.balance = 95000;

// bankacc.balance = 5000;

// bankacc.balance = -2000;

// console.log(bankacc.balance)

// task 7

// class Rectangle {
//     constructor (_width, _height) {
//         this._width = _width;

//         this._height = _height;
//     }

//     set width (val) {
//         this._width = val;
//     }

//     set height (val) {
//         this._height = val;
//     }

//     get width () {
//         return this.width;
//     }

//     get height () {
//         return this._height;
//     }

//     get area () {
//         return this._height * this._width;
//     }
// }

// let rect = new Rectangle();

// rect.width = 95;

// rect.height = 20;

// console.log(rect.area)

// task 8

// class Email {
//     constructor (_email) {
//         this._email = _email;
//     }

//     set check (val) {
//         if (val.includes("@")) this._email = val;

//         else { console.log("Invalid Email"); }
//     }

//     get check () {
//         return this._email;
//     }
// }

// const email = new Email ();

// email.check = "hello@mail.ru";

// console.log(email.check)

// task 9

// class Cart {
//     constructor (_total) {
//         this._total = 0;
//     }

//     set total (price) {
//         this._total += price;
//     }

//     get total () {
//         return this._total;
//     }
// }

// const cart = new Cart ();

// cart.total = 9000;

// cart.total = 2000;

// console.log(cart.total)

// task 10

// class Car {
//     constructor (_speed) {
//         this._speed = _speed;
//     }

//     set speed (lim) {
//         if (lim >= 200) console.log("Too fast");

//         else { this._speed = lim; }
//     }

//     get speed () {
//         return this._speed;
//     }
// }

// let car = new Car ();

// car.speed = 150;

// console.log(car.speed)



/* Map, Zip, Filter */

// task 1

// const arr = [1, 2, 3];

// const arrDouble = arr.map(i => i *= 2);

// console.log(arrDouble)

// task 2

// const names = ["anna", "john"];

// const capitalLetters = names.map(n => n.toUpperCase());

// console.log(capitalLetters);

// task 3

// const arr = [{name: "A", age: 10}, {name: "B", age: 15}];

// const ages = arr.map(a => a.age);

// console.log(ages);

// task 4

// const arr = [12, 65, 74, 36, 83, 90];

// const evenNums = arr.filter (i => i % 2 === 0);

// console.log(evenNums);

// task 5

// const arr = [16, 5, 17, 19, 1, 25, 9];

// const adult = arr.filter (i => i >= 18);

// console.log(adult);

// task 6

// const arr = ["Hello", "Bye", "Earphones", "Davo", "Tigran", "enginner"];

// const five = arr.filter (i => i.length > 5);

// console.log(five)

// task 7

// const arr = [{name: "John", age: 15}, {name: "Qristik", age: 26}, {name: "Vardkes", age: 19}, {name: "Vzgo", age: 7}, {name: "Vasilis", age: 45}];

// const adult = arr.filter(adu => adu.age >= 18).map(adu => adu.name);

// console.log(adult);

// task 8

// const arr = [12, 65, 74, 36, 83, 90];

// const evenNumsSquare = arr.filter (i => i % 2 === 0).map(i => i * i);

// console.log(evenNumsSquare)

// task 9

// const products = [{prod: "potato", price: 250}, {prod: "iPhone", price: 875900}, {prod: "cup", price: 1450}];

// const ones = products.filter (i => i.price > 1000);

// console.log(ones)

// task 10

const arr = [
    { name: "Anna", age: 17 },

    { name: "John", age: 20 }
];

const adult = arr.filter(adu => adu.age >= 18).map(adu => `${adu.name} is ${adu.age} years old`);

console.log(adult)
