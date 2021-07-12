const corInicial = document.getElementById('black');
corInicial.classList.add('selected');
const paletaDeCores = document.querySelector('#color-palette');

paletaDeCores.addEventListener('click', function (event) {
    let corAtual = document.querySelector('.selected');
    corAtual.classList.remove('selected');
    event.target.classList.add('selected');
})

const pixelBoard = document.getElementById('pixel-board');

pixelBoard.addEventListener('click', function(event) {
    let pixelSelecionado = event.target;
    pixelSelecionado.classList.add('pixelSelecionado')
})



