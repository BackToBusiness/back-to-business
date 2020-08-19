var array = ["Netflix", "Google", "Facebook", "Amazon"]
console.log(typeof(array))
//indexOf(param)-> Retorna o primeiro índice 
//em que o elemento pode ser encontrado no array
//caso ele não encontre ele retorna -1
console.log(array.indexOf("Twitter"));
console.log(array.indexOf("Google"));
console.log(array.indexOf("Facebook"));
array.unshift("Amazon")
console.log(array)
console.log(array.indexOf("Amazon",0));

var name = "Marcos MARCOS"
console.log(typeof(name))

console.log(name.length)
console.log(name.toUpperCase())

var object = {id: 1}
console.log(object.id)

name.value = "Paulo" 
console.log(name.value)//undefined

console.log(name.slice(1,3))
console.log(name.indexOf("R"))

var str = " Hello world, welcome to the universe.   ";
console.log(str)
var n = str.indexOf("e", 5);

console.log(n)
console.log(str.trim())
console.log(name.charAt(1))
