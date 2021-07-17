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


const getExtensionOFile = (filnName) => {
    if(typeof filnName !== 'string') {
        throw new Error('Invalid type of parameter');
    }
    const spl = filnName.split('.');
    console.log(spl.length)
    return spl.length === 1 ? null : spl[spl.length - 1];
}

console.log(getExtensionOFile('sdf.qwer.twey.yewy.wy.ey.wey.fsa'));

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 1000)
})

myPromise.then((res) => res * 2).then((res) => res * 2).then((res) => console.log(res * 2))


// Try - catch works synchronously