// class Department {
//     public readonly name: string
//     private age: number;
//     constructor(n: string, age: number) {
//         this.name = n;
//         this.age = age;
//     }

//     describe() {
//         console.log(`My name is ${this.name}`);
//         console.log(`My age is ${this.age}`);
//     }
// }

class Department {
    // public readonly name: string
    // private age: number;
    constructor(public name: string, private readonly age: number) {
        this.name = name;
        this.age = age;
    }

    describe() {
        console.log(`My name is ${this.name}`);
        console.log(`My age is ${this.age}`);
    }
}

class MyDeparment extends Department {
    admins: string[];
    constructor(name: string, admins: string[]) {
        super(name, 25);
        this.admins = admins;
    }
}

class MyAccount extends Department {
    constructor(name: string, private reports: string[]) {
        super(name, 34);
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    getReports() {
        console.log(this.reports);
    }
}

const account = new MyAccount("AAAAAA", []);
account.addReport('asdasdasdas');
account.getReports();


const IT = new Department("Karen", 25);
IT.describe();

const obj = {name: 'asd', describe: IT.describe}
obj.describe()
