/***************** SEQUÊNCIA DE FIBONACCI ******************/
//fibonacci = 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34 + 55

var previous = 0;
var current = 1;
var next = 1;

var sequenceNumber = 8;

for (let index = 1; index < sequenceNumber; index++) {
    next = previous + current;
    previous = current;
    current = next;
}
console.log(next);

// next = 0 + 1
// current = 1
// previous = 1

// next = 1 + 1
// current = 2
// previous = 2