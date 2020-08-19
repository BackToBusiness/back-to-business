function power(base, exponent) {
    if (exponent == 0)
        return 1;
    else
        //condição de parada
        console.log(exponent);
        return base * power(base, exponent - 1);
}
console.log(power(2, 3));
// → 8