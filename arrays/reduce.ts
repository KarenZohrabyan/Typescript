const nums: number[] = [1, 2, 3, 4];
const sum = (total: number, num: number, index: number, arr: number[]): number => {
    // console.log(total)
    // console.log(num)
    // console.log(arr)
    // console.log(index)
    return total + num;
}

console.log(nums.reduce(sum))