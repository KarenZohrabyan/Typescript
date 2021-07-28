// class Department {
//     public readonly name: string
//     private age: number;
//     constructor(n: string, age: number) {
//         this.name = n;
//         this.age = age;
//     }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     describe() {
//         console.log(`My name is ${this.name}`);
//         console.log(`My age is ${this.age}`);
//     }
// }
var Department = /** @class */ (function () {
    // public readonly name: string
    // private age: number;
    function Department(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    Department.prototype.describe = function () {
        console.log("My name is " + this.name);
        console.log("My age is " + this.age);
    };
    return Department;
}());
var MyDeparment = /** @class */ (function (_super) {
    __extends(MyDeparment, _super);
    function MyDeparment(name, admins) {
        var _this = _super.call(this, name, 25) || this;
        _this.admins = admins;
        return _this;
    }
    return MyDeparment;
}(Department));
var MyAccount = /** @class */ (function (_super) {
    __extends(MyAccount, _super);
    function MyAccount(name, reports) {
        var _this = _super.call(this, name, 34) || this;
        _this.reports = reports;
        return _this;
    }
    MyAccount.prototype.addReport = function (text) {
        this.reports.push(text);
    };
    MyAccount.prototype.getReports = function () {
        console.log(this.reports);
    };
    return MyAccount;
}(Department));
var account = new MyAccount("AAAAAA", []);
account.addReport('asdasdasdas');
account.getReports();
var IT = new Department("Karen", 25);
IT.describe();
var obj = { name: 'asd', describe: IT.describe };
obj.describe();
