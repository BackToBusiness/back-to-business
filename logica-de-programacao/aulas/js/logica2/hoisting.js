/**
 * Significado de Içamento = Hoisting
substantivo masculino
Ação ou efeito de içar, de erguer; fazer subir; levantamento, içagem: içamento de vigas, de cargas, de carros.
 */

//var message; //como se ele tentasse fazer isso aqui. E como a variável message não foi inicializada, ela é undefined
console.log(message); // Aqui ocorre o hoisting

var message = "WELCOME HOME";

console.log(message);

console.log(message2);
let message2
console.log(message2);
