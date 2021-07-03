let myAdd: (x: number, y: number) => number = function (
    x: number,
    y: number,
): number {
    return x + y;
}

console.log(myAdd(457, 20));

let dask = {
    name: "Karen",
    age: 25,
    info: function () { 
        return this.age + 20;
    }
}

console.log(dask.info())  


const mylist = [1, "string", false];

for (let temp in mylist) {
    console.log(temp);
}

for (let temp of mylist) {
    console.log(temp);
}

let number: Number = 20;
console.log(number);
// number = true;

let NS: number | string = "Karen";
console.log(typeof NS);
NS = 25;