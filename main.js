// "use strict"

// const obj = {
//     age: 42,
//     say: function () {
//         setTimeout(
//             function() {
//                 console.log(this.age)
//             }.bind(this),
//             1000
//         )
//     },
//     pr: function () {
//         console.log(this.age);
//     }
// }

// obj.say();

// let arr = [1,2,3,4,5];
// let result = arr.filter((el) => {
//     return el % 2;
// })
// console.log(result);
// console.log((0.1 + 0.2 - 0.2) == 0.1)


// var a = 5;

// function foo () {
//     if(a) {
//         console.log(a);
//         var a = 20;
//     }
// }

// foo()

// console.log(a);
// var a = 10;


// function foo (a) {
//     this.a = a;
// }
// const aaa = new foo("asfsaf");
// console.log(aaa.a)

// let a = "Karen";
// const temp = (function (name) {
//     console.log(`Hello ${name}!`);
//     return name
// })(a)

// console.log(temp);


// console.log(Math.floor(Math.random() * 16))
// console.log(Math.random() * 16)

// console.log(typeof undefined)
// console.log(typeof typeof 123)

// function carry(f) {
//     return function(a) {
//         return function(b) {
//             return f(a,b)
//         }
//     }
// }

// function sum(a, b) {
//     return a + b;
// }

// let res = carry(sum)
// console.log(res(5)(10))


// class Dog {

// }
// console.log(typeof Dog)

// const keys = Object.keys(ob);
// console.log(keys)


// Try - catch works synchronously 

// const obj = {
//     name: "karen",
//     age: 25
// }

// const ob = {
//     heigth: 185
// }

// const blo = {
//     asd: 'asd'
// }

// ob.__proto__ = obj;
// obj.name = "qweqweqwe"
// console.log(ob.name)

// blo.__proto__ = ob;
// console.log(blo.name)
// console.log(blo.age)

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 300)
})

myPromise.then((res) => res * 2).then((res) => res * 2).then((res) => console.log(res * 2))


let promise = Promise.all([
    new Promise(reject => setTimeout(() => reject(new Error("ASDASD")), 300)),
    new Promise(resolve => setTimeout(() => resolve(1), 600)),
    new Promise(resolve => setTimeout(() => resolve(555), 2000)),
])
.then(res => console.log(res))
// .catch((err) => console.log(err))

// const temp = 'asdasd ads asd asd'
// console.log(temp.split(' ').join(''))
// console.log(temp.trim(' '))