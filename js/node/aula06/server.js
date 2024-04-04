const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="">
    <button>Enviar</button>
    </form>`);
} );

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
})

app.get('/contato',(req, res) => {
    res.send('Obrigada por entrar em contato com agente.');
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('servidor executando na porta 3000');
});