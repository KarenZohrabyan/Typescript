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


const personn: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string]
} = {
    name: "Karen",
    age: 25,
    hobbies: ["Sports", "Cooking"],
    role: [2, 'musician']
}