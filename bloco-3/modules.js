// importar de maneira geral outro arquivo

const pessoasData = require('./pessoas');

// console.log(pessoasData);

// console.log(pessoasData.pessoas, pessoasData.idade) => também pode ser chamado assim

// Pra chamar um valor em especifico, nesse caso o pessoas, se separar por virgula posso chamar varios. Exemplo: {pessoas, idade}

const { pessoas } = require('./pessoas')

// console.log(pessoas)

// importando um objeto já existente: esse objeto criado já existe no Node.js

const os = require('os');

// console.log(os);
// os é sistema operacional em ingles 
console.log(os.homedir())

