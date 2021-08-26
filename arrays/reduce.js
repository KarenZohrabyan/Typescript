var nums = [1, 2, 3, 4];
// const objs = [{
//     count: 1,
// },{
//     count: 2,
// },{
//     count: 3,
// }]
var sum = function (total, num, index, arr) {
    // console.log(total)
    // console.log(num)
    // console.log(arr)
    // console.log(index)
    return total + num;
};
var temp = nums.reduce(sum);
console.log(temp);
// console.log(nums.reduce(sum))
