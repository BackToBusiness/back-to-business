var indices = [];
var array = ["Amazon", "Netflix", "Google", "Facebook", "Amazon"];
var elemento = "Amazon";
var idx = array.indexOf(elemento);
while (idx != -1) {
    indices.push(idx);
    idx = array.indexOf(elemento, idx + 1);
}
console.log(indices);
// [0, 2, 4]

var occurencies;
for (let index = 0; index < array.length; index++) {
    if (elemento == array[index]) {
        console.log(index);
    }
}


var array = ["Netflix", "Google", "Facebook", "Amazon"];
array.sort();
console.log(array)

var prices = [12.3, 56.4, 1.2, 0.3]
prices.sort();
console.log(prices) 