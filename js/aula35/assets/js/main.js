const elementos = [
    {tag: 'p', texto: 'Texto aqui 1'},
    {tag: 'div', texto: 'Texto aqui 2'},
    {tag: 'footer', texto: 'Texto aqui 3'},
    {tag: 'section', texto: 'Texto aqui 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
    
}

container.appendChild(div);

