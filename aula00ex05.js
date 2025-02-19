const numeros = [1,2,3,4,5,6];

numeros.forEach(num => {
    console.log(`Numero: ${num}`);
}) ;

const dobrado = numeros.map(num => num *2);
console.log(dobrado)

const busca = dobrado.filter(num => num > 5);
console.log(busca);

const maiorq9 = dobrado.find(num => num > 9);
console.log(maiorq9)

const todosmaiorq2 = dobrado.every(num => num >= 2);
console.log(todosmaiorq2);

const algumMaior12 = dobrado.some(num => num > 12);
console.log(algumMaior12);