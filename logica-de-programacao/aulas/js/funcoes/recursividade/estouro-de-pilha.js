function f1(){
    console.log("Imprimindo a função 1");
    f2();
}

function f2(){
    f1();
}

f1();