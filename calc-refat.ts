const teclado = require(`prompt-sync`)();
let resultado: number = 0;
let n1: number = 0;
let n2: number = 0;

menu();

function soma (n1: number, n2: number): void{
    n1= parseInt(teclado(`Digite o primeiro número: `));
    n2= parseInt(teclado(`Digite o segundo número: `));
        resultado = n1+n2;
        console.log(`O valor da soma de ${n1} com ${n2} `);
        console.log(`é ${resultado}`);
        voltar();
}

function subtração (n1: number, n2: number): void{
    n1= parseInt(teclado(`Digite o primeiro número: `));
    n2= parseInt(teclado(`Digite o segundo número: `));
        resultado = n1-n2;
        console.log(`O valor da subtração de ${n1} com ${n2} `);
        console.log(`é ${resultado}`);
        voltar();
}

function multiplicacao (n1: number, n2: number): void{
    n1= parseInt(teclado(`Digite o primeiro número: `));
    n2= parseInt(teclado(`Digite o segundo número: `));
        resultado = n1*n2;
        console.log(`O valor da multiplicação de ${n1} com ${n2} `);
        console.log(`é ${resultado}`);
        voltar();
}

function divisao (n1: number, n2: number): void{
    n1= parseInt(teclado(`Digite o primeiro número: `));
    n2= parseInt(teclado(`Digite o segundo número: `));
        resultado = n1/n2;
        console.log(`O valor da divisão de ${n1} com ${n2} `);
        console.log(`é ${resultado}`);
        voltar();
}

function sair (): void{
    console.clear();
    console.log(`Fim do programa....`);
    process.exit(0);
}

function selecao (opcao: string): void{
    switch(opcao){
        case `0`: sair(); break;
        case `+`: soma(n1,n2); break;
        case `-`: subtração(n1,n2); break;
        case `*`: multiplicacao(n1,n2); break;
        case `/`: divisao(n1,n2); break;
        default: break;

    }    
}

function menu (): void{
    console.log(`Qual operação deseja?`);
    console.log(`+ --> Adição`);
    console.log(`- --> Subtração`);
    console.log(`* --> Multiplicação`);
    console.log(`/ --> Divisão`);
    console.log(`0 --> Sair`);
    let opcao : string = teclado (`Digite a opção desejada: `);
    selecao(opcao);
}

function voltar (): void{
    console.log(``);
    console.log(`Para continuar digite...`);
    console.log(`0 - para Sair `);
    console.log(`1 - para continuar`);
    let x:number = parseInt(teclado(`Digite a opção --> `));
    switch (x){
        case 0: sair(); break;
        case 1: menu(); break;
        default: break;
    }
}