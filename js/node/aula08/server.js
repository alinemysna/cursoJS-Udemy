const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/',(req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>`);
} );

app.get('/testes/:idUsuarios?/:maisparametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Oque voce me enviou foi: ${req.body.nome}, Legal!`);
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('servidor executando na porta 3000');
});