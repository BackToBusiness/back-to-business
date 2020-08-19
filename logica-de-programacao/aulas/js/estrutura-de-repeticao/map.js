var values = [2, 6, 3, 5]
var double = values.map(function (value) {
    return value * 2;
})
console.log(values)
console.log(typeof (values))

console.log(double)
console.log(typeof (double))

//outra forma
function doubleValues(value) {
    return value * 2
}
double = values.map(doubleValues);
console.log(double);

var number = 4

function sum(value) {
    return value + number;
}

function divide(value) {
    return value / number;
}

console.log("***********************")
var maps = values.map(doubleValues).map(sum).map(divide);
console.log(maps)

/*
values = [2, 6, 3, 5]
doubleValues = [4, 12, 6, 10]
sum = [8, 16, 10, 14]
divide = [2, 4, 2.5, 3.5]
*/