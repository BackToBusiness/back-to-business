// This is an annonymous function
var future = function () {
    return "We STILL have no flying cars.";
}
console.log("Print the " + future);

console.log("Print the " + future());

//você pode usá-lo em expressões arbitrárias e não apenas invocá-la
if (typeof (future) === "function") {
    console.log("This is a function");
    future = "New value" //É possível armazenar um valor de função em um novo local
    BackToTheFuture(future); //passá-lo como argumento para outra função
} else {
    console.log("This is not a function");
}

function BackToTheFuture(future) {
    console.log("Recieving a new argument: " + future);
}

console.log(typeof(future))
console.log("The future says:", future);