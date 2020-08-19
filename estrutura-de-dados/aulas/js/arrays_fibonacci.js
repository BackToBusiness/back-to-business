const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

var sequencia = 8;

for (let index = 3; index <= sequencia; index++) {
    fibonacci[index] = fibonacci[index - 1] + fibonacci[index - 2];
}

for (let index = 1; index < fibonacci.length; index++) {
    console.log(fibonacci[index]);
}