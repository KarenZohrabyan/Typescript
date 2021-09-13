function identity(arg) {
    console.log(arg.length);
    return arg;
}
var arr = [1, 5, 23, 4];
// console.log(identity(arr))
// console.log(typeof arr)
function gener(arg) {
    if (Array.isArray(arg)) {
        return arg;
    }
    return arg;
}
console.log(gener(23123));
