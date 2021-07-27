var Department = /** @class */ (function () {
    function Department(n, age) {
        this.name = n;
        this.age = age;
    }
    Department.prototype.describe = function () {
        console.log("My name is " + this.name);
        console.log("My age is " + this.age);
    };
    return Department;
}());
try {
    var IT = new Department("Karen", 25);
    IT.describe();
    console.log(IT.name);
}
catch (error) {
    throw new Error("-----------------");
}
