const colorPalette = document.getElementById('color-palette');
let corAtual = 'black';
function mudaCor() {
  colorPalette.addEventListener('click', function (event) {
  const corSelecionada = document.querySelector( ".selected" );
  corSelecionada.classList.remove('selected');
  event.target.classList.add('selected');
  corAtual = event.target.style.backgroundColor;
  }
  )}; 
mudaCor();
function colorPixel() {
   let pixel = document.querySelectorAll('.pixel');
  for (let index= 0; index < pixel.length; index += 1) {
   pixel[index].addEventListener('click', function() {
   pixel[index].style.backgroundColor = corAtual; })}
   }
   colorPixel();
   function clear() {
    const pixel = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
    }
  }
  const clearPixel = document.getElementById('clear-board');
  clearPixel.addEventListener('click', clear);
