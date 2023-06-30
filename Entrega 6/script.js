var produtos = [];

function Produto(nome, valorBruto) {
    this.nome = nome;
    this.valorBruto = valorBruto;
    this.valorLiquido = calcularValorComImpostos(valorBruto);
}

function adicionarProduto() {
    var nomeProduto = document.getElementById("nome-produto").value;
    var valorBrutoProduto = document.getElementById("valor-bruto-produto").value;

    if (nomeProduto !== "" && valorBrutoProduto !== "") {
        var valor = parseFloat(valorBrutoProduto);
        if (!isNaN(valor)) {
            var produto = new Produto(nomeProduto, valor);
            produtos.push(produto);
            exibirProdutos();
            limparCampos();
        } else {
            alert("Digite um valor válido!");
        }
    }
}

function calcularValorLiquidoTotal() {
    if (produtos.length === 0) {
        alert("A lista de produtos está vazia!");
        return;
    }

    var valorLiquidoTotal = 0;

    for (var i = 0; i < produtos.length; i++) {
        var produto = produtos[i];
        valorLiquidoTotal += produto.valorLiquido;
    }

    exibirResultado(valorLiquidoTotal);
}

function calcularValorComImpostos(valorBruto) {
    var impostoPCC = 0.2;
    var valorLiquido = valorBruto * (1 - impostoPCC);
    return valorLiquido;
}

function exibirProdutos() {
    var listaProdutos = document.getElementById("lista-produtos");
    listaProdutos.innerHTML = "";

    for (var i = 0; i < produtos.length; i++) {
        var produto = produtos[i];
        var itemLista = document.createElement("li");
        itemLista.textContent = produto.nome + ": R$ " + produto.valorBruto.toFixed(2) + " (Valor líquido: R$ " + produto.valorLiquido.toFixed(2) + ")";
        listaProdutos.appendChild(itemLista);
    }
}

function exibirResultado(valorLiquidoTotal) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = "Valor líquido total: R$ " + valorLiquidoTotal.toFixed(2);
    resultado.style.color = valorLiquidoTotal > 1000 ? "green" : "red";
}

function limparCampos() {
    document.getElementById("nome-produto").value = "";
    document.getElementById("valor-bruto-produto").value = "";
}
