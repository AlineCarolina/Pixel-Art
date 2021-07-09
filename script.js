const corInicial = document.getElementById('black');
corInicial.classList.add('selected');
const paletaDeCores = document.querySelector('#color-palette');

paletaDeCores.addEventListener('click', function (event) {
    let corAtual = document.querySelector('.selected');
    corAtual.classList.remove('selected');
    event.target.classList.add('selected');
    
    
})
