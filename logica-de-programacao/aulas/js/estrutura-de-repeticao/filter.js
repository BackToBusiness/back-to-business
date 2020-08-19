var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers)

function getEvens(value) {
    return value % 2 === 0;
}

//console.log(getEvens(8));
//console.log(getEvens(3));

function getOdds(value) {
    return value % 2 !== 0;
}

function getDivisibleBy5(value) {
    return value % 5 === 0 && value / 5 > 0;
}

let result = numbers.filter(getEvens);
console.log("The evens numbers are: " + result);

result = numbers.filter(getOdds);
console.log("The odds numbers are: " + result);

result = numbers.filter(getDivisibleBy5);
console.log("The divisible numbers by " + 5 + " are: " + result);

var cars = [{
        name: 'BMW X600',
        year: 2010,
        type: 'Sporting',
        producer: 'BMW'
    },
    {
        name: 'Mercedes CW20',
        year: 2018,
        type: 'Luxury',
        producer: 'Mercedes'
    },
    {
        name: 'Ferrari N10',
        year: 2020,
        type: 'Sporting',
        producer: 'Ferrari'
    },
    {
        name: 'Fiesta',
        year: 2019,
        type: 'Sedan',
        producer: 'Ford'
    },
    {
        name: 'Fiesta',
        year: 2012,
        type: 'Hatch',
        producer: 'Ford'
    },
];

let luxuryCars = cars.filter((car) => {
    return car.type == 'Luxury'
});
console.log(luxuryCars)

let currentCars = cars.filter((car) => {
    return car.year > 2019
});
console.log(currentCars)

let producers = cars.filter((car) => {
    return car.producer === 'Ford'
});
console.log(producers)

var data = [{
        name: 'Pluto',
        age: 2,
        type: 'cachorro'
    },
    {
        name: 'Snoopy',
        age: 5,
        type: 'cachorro'
    },
    {
        name: 'Fofinho',
        age: 4,
        type: 'gato'
    },
    {
        name: 'Jack Jones',
        age: 1,
        type: 'cachorro'
    },
];

let dogs = data.filter((dog) => {
    return dog.type === 'cachorro'
});
dogs.map((dog) => {
    return dog.age *= 7;
});

console.log(dogs)