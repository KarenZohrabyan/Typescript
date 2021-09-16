const arr = [123, 534, 56, [123, 42, 546], 4124];

const arr2 = [1, [1, 2, 3], 123, [1, 3], {age:25, name: "asdasd", flan: 1, desc: [1,2,3], uu: [{age:22}, [1, {age:23}]]}]



const arr3 = [1, 3, [1, 2], {age: 25, desc: {flan: 25}}]

// const sumOfArrayRec = (arr) => {
//     let count = 0;
//     if(Array.isArray(arr)) {
//         for(let temp of arr) {
//             if(Array.isArray(temp)) {
//                 count += sumOfArray(temp);
//             } else {
//                 count += temp;
//             }
//         }
//     }
//     return count;
// }

// console.log(sumOfArrayRec(arr2))

const checkObj = (obj) => {
    let count = 0;
    for(let temp in obj) {
        if(Array.isArray(obj[temp])) {
            count += sumOfArrayRecObj(obj[temp]);
        } else if (typeof obj[temp] == "object" && obj[temp] != null) {
            count += checkObj(obj[temp]);
        } else if (typeof obj[temp] == "number") {
            count += obj[temp];
        }
    }
    return count;
}

const sumOfArrayRecObj = (arr) => {
    let count = 0;
    if(Array.isArray(arr)) {
        for(let temp of arr) {
            if(Array.isArray(temp)) {
                count += sumOfArrayRecObj(temp);
            } else if(typeof temp === "object" && temp != null) {
                count += checkObj(temp)
            } else {
                count += temp;
            }
        }
    }
    return count;
}


console.log(sumOfArrayRecObj(arr));