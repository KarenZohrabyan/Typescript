var myAdd = function (x, y) {
    return x + y;
};
console.log(myAdd(457, 20));
var dask = {
    name: "Karen",
    age: 25,
    info: function () {
        return this.age + 20;
    }
};
console.log(dask.info());
var mylist = [1, "string", false];
for (var temp in mylist) {
    console.log(temp);
}
for (var _i = 0, mylist_1 = mylist; _i < mylist_1.length; _i++) {
    var temp = mylist_1[_i];
    console.log(temp);
}
