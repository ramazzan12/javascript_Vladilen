//1. data types (null, undefined, boolean, number, string, object, symbol)

//difference between undefined and null: null = we have variable without value; undefined = we have no
//variable and value

// console.log(typeof true)
// console.log(typeof 'Rama')
// console.log(typeof {})

// let language = 'JavaScript';
//
// if (language) {
//     console.log('The language is', language)
// }
// boolean values of '', 0, NaN, null, undefined give = false

// console.log(9 - 4 + '1')

//2. значение и ссылки

// let a = 42;
// let b = a;
// b++;
// console.log('a', a);
// console.log('b', b)

// let a= [1, 2, 3];
// let b = a;
// b.push(4);
// console.log('a', a);
// console.log('b', b)
// let c = a.concat()
// console.log('c', c)


//3. scope

// function  funcA() {
//     let a = 1;
//
//     function funcB() {
//         let b = 2;
//
//         function funcC() {
//             let c = 3;
//
//             console.log('funcC()', a, b, c);
//         }
//         funcC();
//         console.log('funcB()', a, b);
//     }
//     funcB();
//     console.log('funcA()', a);
// }
// funcA()

//4. hoisting

// var i;
// console.log(i);
// i = 4;
// console.log(i)
//
// console.log(num)
// let num = 4;
// console.log(num)

//function expression and function declaration

// console.log(square(25));
// function square(num) {
//     return num ** 2;
// }
// var square = function (num) {
//     return num ** 2;
// }
// console.log(square(25));

//5. let and const

// let a = 'variable a'
// let b = 'variable b'

// {
    // a = 'New variable a';
    // let b = 'local variable b';
    // console.log('Scope A', a);
    // console.log('Scope B', b);
    // console.log('Scope C', c);
    // let c = 'something'
// }
// console.log('A:', a)
// console.log('B:', b)

// const port = 8080;
// const array = ['JavaScript', 'HTML', 'CSS'];
// array.push('Angular');
// array[0] = 'JS'
// console.log(array)
//
// const obj = {}
// obj.name = 'Ramazan';
// obj.age = 22;
// console.log(obj)
//
// delete obj.age;
// console.log(obj)


//6. closures (замыкание)

// function sayHello(name) {
//     let message = 'Hello ' + name;
//     return function() {
//         console.log(message);
//     }
// }
//
// const helloRamazan = sayHello("Ramazan")
// console.log(helloRamazan)
// helloRamazan()

// function createFrameworkManager() {
//     const fw = ['Angular', 'React']
//
//     return {
//         print: function() {
//             console.log(fw);
//         },
//         add: function (framework) {
//             fw.push(framework);
//         }
//     }
// }
// const manager = createFrameworkManager();
// manager.print()
// manager.add('Vue');
// manager.print()

//setTimeout

// const fib = [1, 1, 2, 3, 5, 8, 13];

// for (let i = 0; i < fib.length; i++) {
//     setTimeout(function () {
//         console.log(`fib[${i}] = ${fib[i]}`)
//     }, 1500)
// }

// for (var i = 0; i < fib.length; i++) {
//     (function (j) {
//         setTimeout(function () {
//             console.log(`fib[${j}] = ${fib[j]}`)
//         }, 1500)
//     })(i)
// }

//7. IIFE (immediate invoked function expression)

// let result = [];
// for (var i = 0; i < 5; i++) {
//     result.push(function () {
//         console.log(i);
//     })
// }
// result[2]()

// for (var i = 0; i < 5; i++) {
//     (function() {
//         var j = i;
//         result.push(function () {
//             console.log(j);
//         })
//     })()
// }
// result[2]()

//8.context

// const person = {
//     surname: 'Stark',
//     knows: function (what, name) {
//         console.log(`${what} do you know ${name} ${this.surname}`);
//     }
// }
//
// person.knows('what', 'Bran');
//
// const john = {
//     surname: 'Snow'
// }
//
// person.knows.call(john, 'What', 'John')
// person.knows.apply(john, ['What', 'John'])
// person.knows.bind(john, 'What', 'John')()

// function Person (name, age) {
//     this.name = name
//     this.age = age
//     console.log(this)
// }
//
// const rama = new Person('Ramazan', 22);
//
// function logThis () {
//     console.log(this);
// }
//
// const number = {
//     num:2
// }
// logThis.call(number)
// logThis.apply(number)
// logThis.bind(number)()

// const animal = {
//     legs: 4,
//     logThis: function () {
//         console.log(this);
//     }
// }
// animal.logThis()

// function Cat(color) {
//     this.color = color
//     console.log('This', this)
//     ;(() => console.log('Arrow this', this))()
// }
//
// new Cat('white')

//9. new

// function Cat (age, color) {
//     this.age = age
//     this.color = color
// }

// const cat = new Cat(5, 'white')
// console.log(cat)

// function myNew(constructor, ...args) {
//     const obj = {}
//     Object.setPrototypeOf(obj, constructor.prototype);
//     return constructor.apply(obj, args) || obj;
// }
//
// const cat = myNew(Cat, 5, 'white');
// console.log(cat)

//10.prototype

// function Cat(name, color) {
//     this.name = name
//     this.color = color
// }
//
// Cat.prototype.voice = function () {
//     console.log(`Cat ${this.name} says salamaleikum`);
// }
//
// const cat = new Cat ('Misha', 'white');
// console.log(Cat.prototype)
// console.log(cat)
// console.log(cat.__proto__)
// cat.voice()

// function Person() {
//
// }
// Person.prototype.legs = 2;
// Person.prototype.color = 'whie';
//
// const person = new Person();
// person.name = 'Ramazan'
// console.log(person.legs)
// console.log(person.hasOwnProperty('skin'))

// let proto = {year: 2023}
// const myYear = Object.create(proto)
// console.log(myYear.year)
// console.log(myYear.hasOwnProperty('year'))
// console.log(myYear.__proto__ === proto)

// proto.year = 2000
//
// proto = {year: 1218};
// console.log(myYear.year)

//11. Асинхронность

// const first = () => {console.log('First')}
// const second = () => {console.log('Second')}
// const third = () => {console.log('Third')}
// first()
// setTimeout(second,0)
// third()