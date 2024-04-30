var teclado = require("prompt-sync")();
var resultado = 0;
var n1 = 0;
var n2 = 0;
menu();
function soma(n1, n2) {
    n1 = parseInt(teclado("Digite o primeiro n\u00FAmero: "));
    n2 = parseInt(teclado("Digite o segundo n\u00FAmero: "));
    resultado = n1 + n2;
    console.log("O valor da soma de ".concat(n1, " com ").concat(n2, " "));
    console.log("\u00E9 ".concat(resultado));
    voltar();
}
function subtração(n1, n2) {
    n1 = parseInt(teclado("Digite o primeiro n\u00FAmero: "));
    n2 = parseInt(teclado("Digite o segundo n\u00FAmero: "));
    resultado = n1 - n2;
    console.log("O valor da subtra\u00E7\u00E3o de ".concat(n1, " com ").concat(n2, " "));
    console.log("\u00E9 ".concat(resultado));
    voltar();
}
function multiplicacao(n1, n2) {
    n1 = parseInt(teclado("Digite o primeiro n\u00FAmero: "));
    n2 = parseInt(teclado("Digite o segundo n\u00FAmero: "));
    resultado = n1 * n2;
    console.log("O valor da multiplica\u00E7\u00E3o de ".concat(n1, " com ").concat(n2, " "));
    console.log("\u00E9 ".concat(resultado));
    voltar();
}
function divisao(n1, n2) {
    n1 = parseInt(teclado("Digite o primeiro n\u00FAmero: "));
    n2 = parseInt(teclado("Digite o segundo n\u00FAmero: "));
    resultado = n1 / n2;
    console.log("O valor da divis\u00E3o de ".concat(n1, " com ").concat(n2, " "));
    console.log("\u00E9 ".concat(resultado));
    voltar();
}
function sair() {
    console.clear();
    console.log("Fim do programa....");
    process.exit(0);
}
function selecao(opcao) {
    switch (opcao) {
        case "0":
            sair();
            break;
        case "+":
            soma(n1, n2);
            break;
        case "-":
            subtração(n1, n2);
            break;
        case "*":
            multiplicacao(n1, n2);
            break;
        case "/":
            divisao(n1, n2);
            break;
        default: break;
    }
}
function menu() {
    console.log("Qual opera\u00E7\u00E3o deseja?");
    console.log("+ --> Adi\u00E7\u00E3o");
    console.log("- --> Subtra\u00E7\u00E3o");
    console.log("* --> Multiplica\u00E7\u00E3o");
    console.log("/ --> Divis\u00E3o");
    console.log("0 --> Sair");
    var opcao = teclado("Digite a op\u00E7\u00E3o desejada: ");
    selecao(opcao);
}
function voltar() {
    console.log("");
    console.log("Para continuar digite...");
    console.log("0 - para Sair ");
    console.log("1 - para continuar");
    var x = parseInt(teclado("Digite a op\u00E7\u00E3o --> "));
    switch (x) {
        case 0:
            sair();
            break;
        case 1:
            menu();
            break;
        default: break;
    }
}
