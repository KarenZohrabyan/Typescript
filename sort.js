const words = ["kgjskfdh", "dsadasd", "skglsdjgkl", "wlsdkhfldskjgh", "asdsagf"];
const numbers = [1,234, 556,235, 25,32 ]

// const result = numbers.sort((a, b) => {
//     if (a > b)
//         return 1;
//     if (a < b)
//         return -1;
//     return 0;
// })

const result = numbers.sort((a, b) => a - b);

console.log(result);

(function() {
    console.log('aaa')
})()