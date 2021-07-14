const corInicial = document.getElementById('black');
corInicial.classList.add('selected');
const paletaDeCores = document.querySelector('#color-palette');
paletaDeCores.addEventListener('click', function (event) {
    let corAtual = document.querySelector('.selected');
    corAtual.classList.remove('selected');
    event.target.classList.add('selected');
})

function pintar() {
 
    const pixelBoard = document.getElementById('pixel-board');

    pixelBoard.addEventListener('click', function(event) {
        let pixelSelecionado = event.target.classList.add('pixelSelected');
    }) 

    let pintar = document.getElementsByClassName('pixelSelected');
    for (let index = 0; index < pintar.length; index += 1) { const element = pintar[index];
        element.style.backgroundColor = corAtual.style.backgroundColor;
   }
}