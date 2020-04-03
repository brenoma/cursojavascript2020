/*

Luiz Otávio Miranda tem 30 anos, pesa 84 Kg
tem 1.8 de altura e seu IMC é de 25.9259...

*/

const nome = 'Breno';
const sobrenome = 'Silocórb';
const idade = 27;
const pesoEmKg = 72;
const alturaEmM = 1.78;
let imc = pesoEmKg/(alturaEmM*alturaEmM);
let anoNascimento = 2020 - idade;

// Utilizando Template Strings

console.log(`${nome} ${sobrenome}, tem ${idade} anos pesa ${pesoEmKg}Kg`);
console.log(`tem ${alturaEmM.toPrecision(3)} M de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);