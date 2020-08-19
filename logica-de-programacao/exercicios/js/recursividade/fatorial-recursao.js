function fatorial(n) {
  if (n === 0 || n === 1) return 1;
  // A regra do número fatorial é o (número * ele mesmo - 1)
  console.log("n é igual a: " + n)
  return n * fatorial(n - 1);
}
console.log(fatorial(4));

//4 * 3! = 24
//3 * 2! = 6
//2 * 1! = 2
//1! * 0! = 1

//n! = n * (n - 1) * (n - 2) * ... * 1
//Sendo que 0! e 1! = 1
//Então fatorial de 5! = 5 * 4 * 3 * 2 * 1 = 120
// Outro exemplo 5! = 5 * 4! -> São várias operações iguais sendo repetidas várias vezses

/* Na recursividade ele vai sempre passando um número menor do que o que foi passado na chamada da função, 
por exemplo, se eu chamar fatorialComRecursividade(5) na primeira execução da função o n vai valer 5, 
dentro dela a função vai ser chamada passando o 4 como parâmetro e assim vai até chegar na chamada em que o n vai ser 0. */