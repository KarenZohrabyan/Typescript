// const obj : {
//     name: string,
//     age: number,
// } = {
//     name: "Karen",
//     age: 25
// }

// interface User {
//     name: string,
//     weight: number,
//     age: number
// };

// const user1: User = {
//     name: "Karen",
//     weight: 25,
//     age: 25
// };


// console.log(user1)
// console.log(obj)



interface User {
    [key: string]: any,
    name: string,
    age: number,
}

const me : User = {
    name: "Karen",
    age: 25,
}

me['describe'] = 'ASDSAD';
// me.about = 255;
console.log(me["name"]);




const obj : {
    [key: string]: any,
    name: string,
    age: number
} = {
    name: "karen",
    age: 25
}

obj.asd = "asdasd";
console.log(obj)