var mySample = {
    id: 25,
    name: "Karen",
    desc: {
        id: 11,
        name: "asfasf",
        desc: {
            id: 876,
            name: "ASDASDSADASD"
        }
    }
};
var readIds = function (temp) {
    for (var i in temp) {
        if (typeof temp[i] == "object" && temp[i] != null) {
            readIds(temp[i]);
        }
        else if (i === "id") {
            console.log(temp[i]);
        }
    }
    return true;
};
readIds(mySample);
