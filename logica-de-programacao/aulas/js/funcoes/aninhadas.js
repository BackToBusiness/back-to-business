var a = function () {
    var result = "Imprima a função A";

    var b = function () { 
        result += "\nImprima a função B";
    }
    b()
    return result;
}
console.log(a());