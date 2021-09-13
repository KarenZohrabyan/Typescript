function identity<Type>(arg: Type[]): Type[] {
    console.log(arg.length);

    return arg;
}


const arr = [1,5,23,4];

// console.log(identity(arr))
// console.log(typeof arr)


function gener<Type>(arg: Type): Type | Type[] {
    if(Array.isArray(arg)) {
        return arg  
    } 

    return arg;
}

console.log(gener(23123));
