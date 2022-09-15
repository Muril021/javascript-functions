const prompt=require('prompt-sync')();
let resultText;
let result=Number(resultText);

const weight=Number(prompt('Digite o seu peso: '));
const height=Number(prompt('Digite a sua altura: '));

function calcImc(weight,height){
    result=weight/(Math.pow(height,2));
    return result;
}
result = calcImc(weight, height);
console.log(`\nO seu IMC é: ${result}.`);