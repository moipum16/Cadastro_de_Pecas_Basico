const prompt = require('prompt-sync')({ sigint: true });

var Eslotes = new Array;
var ObjetosMaximos = parseInt(10);
var Nome = null;
var NomeTamanhoMinimo = parseInt(3);
var MassaMaxima = parseInt(100);
var Massa = null;

function Nomear() {
    Nome = String(prompt("Digite o nome do objeto: "));
    return (Nome);
}

function Massar() {
    Massa = parseInt(prompt("Digite a massa do objeto: "));
    return (Massa);
}

function Executar() {

    Nomear();
    Massar();

    if (Nome.length < NomeTamanhoMinimo || !Nome) {
        console.log("O nome do objeto deve possuir ao menos 3 caracteres.");
        return (null);
    } else if (Massa < MassaMaxima || !Massa) {
        console.log("A massa do objeto deve sobrepor a 100 gramas.");
        return (null);
    } else if (Eslotes.length >= ObjetosMaximos) {
        console.log("O número máximo de ${ObjetosMaximos} da lista já foram atingidos.");
        return (null);
    } else {
        Eslotes[Eslotes.length] = [" Nome: " + Nome + " -" + " Massa: " + Massa];
        console.log("Lista de objetos " + Eslotes);
    }

    var Sair = String(prompt("Objeto adicionado. Tecle ENTER para continuar..."));

    if ((Sair == "Exit" || "exit" || "EXIT" || "eXIT") && (Sair != "") && (Sair != null)) {
        console.log("Você optou por sair.");
        process.exit(0);
        return (null);
    } else if (Eslotes.length >= ObjetosMaximos) {
        console.log("Quantidade máxima de objetos atingida. Total de: " + Eslotes.length + " de " + ObjetosMaximos + " objetos cadastrados.")
    } else {
        return (null);
    }
    return (null);
}

do {
    Executar();
} while ((Eslotes.length < ObjetosMaximos));


