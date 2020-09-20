const http = require('http');

// req = requisição res = resposta

const server = http.createServer((req, res) => {
    console.log(req);
    // enviar resposta
    // res.setHeader('contentType'...)
    res.write('<p>Olá meninas!<p>')
});

server.listen(3000, 'localhost', () => {
    console.log('Servidor rodando na porta 3000');
});