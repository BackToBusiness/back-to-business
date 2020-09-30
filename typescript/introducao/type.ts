type Cliente = {
    nome: string,
    telefone: string,
    email: string,
    endereco: string | null
}

const cliente: Cliente = {
    nome: "Marcos",
    telefone: "12-9999-9999",
    email: "teste@gmail.com",
    endereco: null
}

console.log(cliente)