const nome = ["José", "João", "Maria", "Lucas"];
const nasc = [1983, 2012, 2000, 1945];
const data = new Date();
const ano = data.getFullYear();
let contador = 0;
// criando o loop
while (contador < nome.length) {
    idade = ano - nasc[contador];
    if(idade >= 18){
        console.log(`${nome[contador]} tem ${idade} e pode dirigir.`);
    } else {
        console.log(`${nome[contador]} só poderá dirigir ao completar 18 anos.`);
    }
    contador++;
}