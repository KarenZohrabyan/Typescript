class Department {
    public readonly name: string
    private age: number;
    constructor(n: string, age: number) {
        this.name = n;
        this.age = age;
    }

    describe() {
        console.log(`My name is ${this.name}`);
        console.log(`My age is ${this.age}`);
    }
}

class MyDepartment extends Department {

}

try {
    const IT = new Department("Karen", 25);
    IT.describe();

    console.log(IT.name);
} catch (error) {
    throw new Error("-----------------")
}
