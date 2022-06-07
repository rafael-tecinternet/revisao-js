/* // Descobrir se alguém já pode dirigir no Brasil
const nome = "Marquinhos";
const nasc = 1990;
// pegando a data atual (JS - data da máquina)
var data = new Date();
var anoAtual = data.getFullYear();
// calculando a idade
let idade = anoAtual - nasc;
console.log(idade);
// verificando se é maior de 18 e dando feedback
if(idade >= 18){
    console.log(`${nome} tem ${idade} e já pode dirigir.`);
    if(idade > 30){
        console.log(`Com ${idade} anos, aconselhamos a comprar um carro zero.`);
    }else{
        console.log(`Aconselhamos a comprar um carro usado.`);
    }
} else {
    console.log(nome + ' poderá dirigir quano completar 18 anos.');
} */
// Variação 1 - Deixando o usuário digitar o nome e ano de nascimento através do prompt e exibindo na tela
const nomeUser = prompt("Digite seu nome");
const nascUser = prompt("Digite seu ano de nascimento com 4 dígitos");
let dataUser = new Date();
let anoAtualUser = dataUser.getFullYear();
let idadeUser = anoAtualUser - nascUser;
let conteudo = document.getElementById("conteudo");
if(idadeUser > 17) {
    conteudo.innerHTML = `<strong>${nomeUser}</strong> tem ${idadeUser} e já pode dirigir.`;
    if(idadeUser > 30){
        conteudo.innerHTML += `<br>Com ${idadeUser} anos, aconselhamos a comprar um carro zero.`;
    }else{
        conteudo.innerHTML += `<br>Aconselhamos a comprar um carro usado.`;
    }
} else {
    conteudo.innerHTML = `${nomeUser} poderá dirigir ao completar 18 anos.`
};
// Variação 2 - Usando funções para não ficar restrito a um único
function podeDirigir(nome, nasc){
    // pegando a data atual (JS - data da máquina)
    var data = new Date();
    var anoAtual = data.getFullYear();
    // calculando a idade
    let idade = anoAtual - nasc;
    console.log(idade);
    // verificando se é maior de 18 e dando feedback
    if(idade >= 18){
        console.log(`${nome} tem ${idade} e já pode dirigir.`);
        if(idade > 30){
            console.log(`Com ${idade} anos, aconselhamos a comprar um carro zero.`);
        }else{
            console.log(`Aconselhamos a comprar um carro usado.`);
        }
    } else {
        console.log(nome + ' poderá dirigir quano completar 18 anos.');
    }
};
podeDirigir("João", 1990);
podeDirigir("Marina", 2015);
podeDirigir("Marcos", 1999);