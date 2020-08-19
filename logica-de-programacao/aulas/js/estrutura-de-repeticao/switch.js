var statusDaNegociacao = "Fechado"

if (statusDaNegociacao == "Novo") {
    console.log("Esse imóvel está disponível");
} else if (statusDaNegociacao == "Visitando") {
    console.log("Esse imóvel está sendo visitado");
} else if (statusDaNegociacao == "Negociando") {
    console.log("Esse imóvel está em negociação");
} else if (statusDaNegociacao == "Fechado") {
    console.log("Esse imóvel está indisponível");
} else {
    console.log("Status não encontrado");
}

switch (statusDaNegociacao) {
    case "Novo":
        console.log("Esse imóvel está disponível");
        break;
    case "Visitando":
        console.log("Esse imóvel está sendo visitado");
        break;
    case "Negociando":
        console.log("Esse imóvel está em negociação");
        break;
    case "Fechado":
        console.log("Esse imóvel está indisponível");
        break;
    default:
        console.log("Status não encontrado");
        break;
}