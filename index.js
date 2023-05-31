// Lecture 3
// function bind (context, fn) {
//     return function(...args) {
//         fn.apply(context, args);
//         // console.log(args)
//     }
// }
// console.log('mal')
// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
// }

// const person1 = {name: 'Rama', age: 22, job: 'Frontend'};
// const person2 = {name: 'Ramazan', age: 23, job: 'Frontend developer'};

// bind(person1, logPerson)();
// bind(person2, logPerson)();

// context = person1/2
//fn = logPerson()


// Lecture 4 (event loop, setTimeout)

// console.log('can see simultaneously');

// window.setTimeout(function() {
//     console.log('Can see after 5 seconds')
// },5000);


//Lecture 5 (Promise)

// console.log('Requesting data');
//
// setTimeout(() => {
//
//     console.log('Receiving data');
//
//     const backendData = {
//         name: 'Rama',
//         age: 22
//     };
//
//     setTimeout(() => {
//         backendData.isStudent = true;
//         console.log('Received data is below', backendData);
//     }, 2000);
// }, 2000);

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Receiving data');
//         const backendData = {
//             name: 'Rama',
//             age: 22
//         }
//         resolve(backendData);
//     }, 2000);
// })
//
// p.then(data => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             data.isStudent = true;
//             resolve(data);
//         }, 2000);
//     })
//
// })
// .then(clientData => {
//     console.log('The received data is ', clientData);
//     clientData.isMarried = false;
//     return clientData;
// }).then(data => {
//     console.log('The received new data is ', data)
// }).catch (err => console.error(err))
// .finally(() => console.log('Finally'));


// const sleep = ms => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), ms)
//     })
// }

// sleep(2000).then(() => console.log('After 5 seconds'));
// Promise.all([sleep(5000), sleep(11000)]).then(() => {
//     console.log('All promises done');
// })
//

// Promise.race([sleep(5000), sleep(2000)]).then(() => {
//     console.log('All race promises done');
// })


// Lecture 6 (Objects, getters, setters)

// const person = Object.create(
//     {
//         calculateAge() {
//             console.log('Age:', new Date().getFullYear() - this.birthYear);
//         }
//     }, 
//     {
//     name: {
//         value: 'Ramazan',
//         enumerable: true,
//         writable: true,
//         configurable: true
//     },
//     birthYear: {
//         value: 2000,
//         enumerable: false,
//         writable: false,
//         configurable: false
//     },
//     age: {
//         get() {
//             return new Date().getFullYear() - this.birthYear;
//         },
//         set(value) {
//             console.log('set age is', value);
//         }
//     }
// })

// // console.log(person)
// person.name = 'Aisultan'
// for (let key in person) {
//     if(person.hasOwnProperty(key)) {
//         console.log('Key is', key, person[key]);
//     }
// }

// Lecture 7 (Классы)

// class Animal {
//     static type = 'animal type';
//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }
//     voice() {
//         console.log('I am an animal');
//     }
// }
// const animal = new Animal({
//     name: 'lion',
//     age: 5,
//     hasTail: true
// })

// class Cat extends Animal{
//     static type = 'cotya';

//     constructor(options) {
//         super(options);
//         this.color = options.color;
//     }

//     voice() {
//         super.voice();
//         console.log('I am cat')
//     }

//     get ageInfo() {
//         return this.age * 7;
//     }
//     set ageInfo(newAge) {
//         this.age = newAge;
//     }
// };

// const cat = new Cat ({
//     name: 'Marusia',
//     age: 2,
//     hasTail: true,
//     color: 'black'
// })

//practical use of classes 

// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector);
//     }

//     hide() {
//         this.$el.style.display = 'none';
//     }

//     show() {
//         this.$el.style.display = 'block';
//     }
// }

// class Box extends Component {
//     constructor(options) {
//         super(options.selector)

//         this.$el.style.width = this.$el.style.height = options.size + 'px';
//         this.$el.style.background = options.color;
//     }
// }

// const box1 = new Box({
//     selector: '#box1',
//     size: 100,
//     color: 'red'
// })

// class Circle extends Box {
//     constructor(options) {
//         super(options)

//         this.$el.style.borderRadius = options.bRadius;
//     }
// }

// const circle = new Circle ({
//     selector: '#circle',
//     size: 200,
//     color: 'green',
//     bRadius: '50%'
// })


//Lecture 8 (async/await)

// const delay = ms => {
//     return new Promise(r => setTimeout(() => r(),ms))
// }

// delay(2000).then(() => console.log('2 sec passed'));

// const url = 'https://jsonplaceholder.typicode.com/todos';

// function fetchTodos() {
//     console.log('Fetch todo started');
//     return delay(2000).then(() => {return fetch(url)}).then(response => response.json())
// }

// fetchTodos().then(data => {console.log('Data:', data)}).catch(e=>console.error(e))

// async function fetchAsyncTodos() {
//     console.log('Fetch todo started')
//     try{
//         await delay(2000)
//         const response = await fetch(url)
//         const data = await response.json()
//         console.log('Data: ', data)
//     } catch(e) {
//         console.error(e);
//     }
// }
// fetchAsyncTodos()


//Lecture 9 (Proxy, part1)
//objects
// const person = {
//     name: 'Ramazan',
//     age: 22,
//     job: 'Frontend'
// }

// const op = new Proxy(person, {
//     get(target, prop) {
//         // console.log('Target is', target);
//         // console.log('Prop is', prop);
//         return target[prop];
//     },
//     set(target, prop, value) {
//         if (prop in target) {
//             target[prop] = value;
//         } else {
//             throw new Error(`No ${prop} field in target`);
//         }
//     },
//     has(target, prop) {
//         return ['age', 'name', 'job'].includes(prop);
//     },
//     deleteProperty(target, prop) {
//         console.log('Deleting...', prop);
//         delete target[prop];
//         return true;
//     }
// })


//functions

// const log = text => `Log: ${text}`;

// const fp = new Proxy(log, {
//     apply (target, thisArg, args) {
//        console.log('Calling fn...');
//        return target.apply(thisArg, args);
//     }
// })

//classes

// class Person {
//     constructor(name, age) {
//         this.name = name; 
//         this.age = age;
//     }
// }

// const PersonProxy = new Proxy (Person, {
//     construct(target, args) {
//         console.log('Construct...');
//         return new Proxy (new target(...args), {
//             get (t, prop) {
//                 console.log(`Getting prop "${prop}"`);
//                 return t[prop];
//             }
//         });
//     }
// })

// const p = new PersonProxy('Rama', 22);


//Lecture 11 (generators, symbol iterator, for of)

// function* strGenerator() {
//     yield 'H'
//     yield 'e'
//     yield 'l'
//     yield 'l'
//     yield 'o'
// }

// const str = strGenerator();

// function* numberGenerator(n = 10) {
//     for (let i = 0; i < n; i++) {
//         yield i;
//     }
// }

// const ng = numberGenerator(7);

// const iterator = {
//     gen (n = 10) {
//         let i = 0; 
//         return {
//             next() {
//                 if (i < n) {
//                     return {value: ++i, done: false};
//                 }
//                 return {value: undefined, done: true};
//             }
//         }
//     }
// }


//Lecture 12 (forEach, map, filter, reduce, find, findIndex)

// const people = [
//     {name: 'Ramazan', age: 22, budget: 100000},
//     {name: 'Ruslan', age: 18, budget: 20000},
//     {name: 'Rauan', age: 19, budget: 30000},
//     {name: 'Asylbek', age: 19, budget: 40000},
//     {name: 'Bekzhan', age: 12, budget: 50000},
//     {name: 'Rakhman', age: 10, budget: 60000}
// ];

//for, forOf, forEach
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }

// for (let person of people) {
//     console.log(person);
// }
//es5 version
// people.forEach(function(person, index, pArray) {
//     console.log(person);
// })
//es6 version 
// people.forEach(person => console.log(person));

//map creates new array

// const newPeople = people.map(person => `${person.name} is ${person.age} years old`)
// console.log(newPeople)

//filter filters by some conditions

// const adults = people.filter(person => {
//     if (person.age >= 18) {
//         return true;
//     }
// })
// const adults2 = people.filter(person => person.age >= 18)
// console.log(adults)
// console.log(adults2)

//reduce f.e. sum up the budget

// const money1 = people.reduce((total, person) => {
//     return total + person.budget;
// }, 0);
// const money2 = people.reduce((total, person) => total + person.budget, 0);
// console.log(money1)
// console.log(money2)

//find used to find some element

// const rama = people.find(person => person.name === 'Ramazan');
// console.log(rama)

//findIndex used to find index

// const rakhIndex = people.findIndex(person => person.name === 'Rakhman');
// console.log(rakhIndex)


// const newPeople = people
//     .filter(person => person.age >= 18)
//     .map(person => {
//         return {
//             info: `${person.name} is ${person.age} years old`,
//             budget: person.budget
//         }
//     })


// const amount = people
//     .filter(person => person.age >= 18)
//     .map(person => {
//         return {
//             info: `${person.name} is ${person.age} years old`,
//             budget: person.budget
//         }
//     })
//     .reduce((total, person) => total + person.budget, 0);

// console.log(amount)
// console.log(newPeople)

//Lecture 14 (requests/запросы)

//xhr request
// const requestURL = 'https://jsonplaceholder.typicode.com/users';

// function sendRequest(method, url, body = null) {
//     return new Promise ((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.responseType = 'json'
//         xhr.setRequestHeader('Content-Type','application/json')
//         xhr.onload = () => {
//             if (xhr.status >= 400) {
//                 reject(xhr.response);
//             } else {
//                 resolve(xhr.response)
//             }
//         }
//         xhr.onerror = () => {
//             console.log(xhr.response)
//         }
//         xhr.send(JSON.stringify(body));
//     })
// }

// sendRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// const body = {
//     name: 'Ramazan',
//     age: 22,
//     job: 'Frontend'
// }

//     sendRequest('POST', requestURL, body)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

//fetch request

// const requestURL = 'https://jsonplaceholder.typicode.com/users';

// function sendRequest(method, url, body = null) {
//     const headers = {
//         'Content-Type': 'application/json'
//     }
//     return fetch(url, {
//         method: method,
//         body: JSON.stringify(body),
//         headers: headers
//     }).then(response => {
//         if (response.ok) {
//             return response.json()
//         }
//         return response.json().then(error => {
//             const e = new Error('Something went wrong')
//             e.data = error
//             throw e
//         })
//     })
// }

// sendRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// const body = {
//     name: 'Ramazan',
//     age: 22,
//     job: 'Frontend'
// }

//     sendRequest('POST', requestURL, body)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


//Lecture 15 (Spread and rest)


//spread
// const citiesKaz = ['Astana', 'Almaty', 'Shymkent'];
// const regions = ['Otyrar', 'Shardara', 'Shaulder'];

// const citiesKazPop = {
//     Astana: 1.2,
//     Almaty: 2,
//     Shymkent: 1
// }
// const regionsPop = {
//     Otyrar: 50000,
//     Shardara: 100000,
//     Shaulder: 5000
// }
// console.log(...citiesKaz);
// console.log(...regions);

// const allCities = [...citiesKaz, ...regions];
// const allCities2 = citiesKaz.concat(regions);

// console.log({...citiesKazPop}) 
// console.log({...citiesKazPop, ...regionsPop}) 

// const divs = document.querySelectorAll('div');
// const nodes = [...divs];
// console.log(nodes)
// console.log(divs)

//rest

// function sum(a, b, ...rest) {
//     return a + b + rest.reduce((a, i) => a + i, 0);
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(sum(...numbers))

// const [a, b, ...others] = numbers;
// console.log(a, b, others);

// const person = {
//     name: 'Ramazan',
//     age: 22, 
//     city: 'Almaty',
//     country: 'Kazakhstan'
// }

// const {name, age, ...address} = person;
// console.log(name, age, address)

//Lecture 16 (Деструктизация)

// function calcValues(a, b) {
//     return [
//         a + b, 
//         a - b,
//         a * b, 
//         a / b
//     ]
// }

// const result = calcValues(42, 10);
// const sum = result[0];
// const sub = result[1];
// const [sum, sub] = result;

// const [sum, sub] = calcValues(42, 10);

// const person = {
//     name: undefined,
//     age: 22,
//     address: {
//         country: 'Kazakhstan',
//         city: 'Almaty'
//     }
// }
// const name = person.name
// const {name: firstName, car = 'Mercedes', address: {
//     city: homeTown, country
// }} = person
// console.log(homeTown)
// console.log(name)
// console.log(firstName)

// function logInfo ({name = 'Ramazan', age}) {
//     console.log(name, age);
// }
// logInfo(person)

//Lecture 17 (localStorage)

// const myNumber = 42; 

// localStorage.setItem('number', myNumber.toString());
// console.log(localStorage.getItem('number'))
// localStorage.removeItem('number')
// localStorage.clear()

// const person = {
//     name: 'Rama',
//     age: 20
// }

// localStorage.setItem('person', JSON.stringify(person))

// const raw = JSON.parse(localStorage.getItem('person'));
// raw.name = 'Ramazan'
// console.log(raw)

// window.addEventListener('storage', event => {
//     console.log(event)
// })