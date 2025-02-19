function exibirInfoProduto(produto){
    return `Prduto: ${produto.nome}, Preco: ${produto.preco.toFixed(2)},
    Estoque: ${produto.estoque} unidade.`;
}

const produto1 = {
    nome: "Notebook",
    preco: 3500.8263,
    estoque: 10
}

const produto2 = {
    nome: "Tablet",
    preco: 1300.5693,
    estoque: 20
}

console.log(exibirInfoProduto(produto1));
console.log(exibirInfoProduto(produto2));
