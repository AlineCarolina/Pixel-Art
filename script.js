document.getElementById('black').style.backgroundColor = 'black';
document.getElementById('blue').style.backgroundColor = 'blue';
document.getElementById('palevioletre').style.backgroundColor = 'palevioletre';
document.getElementById('purple').style.backgroundColor = 'purple';
const selecionaCor = document.getElementById('color-palette');
let corInicial = document.getElementById('black').classList.add('selected');
function mudaCor() {
  selecionaCor.addEventListener('click',function(event) {
  let corAtual = document.querySelector('.selected');
  corAtual.classList.remove('selected');
  event.target.classList.add('selected');
 })

} 
mudaCor();
function colorPixel() {
  let corAtual = document.querySelector('.selected').style.backgroundColor;
  let pixel = document.querySelectorAll('.pixel');
  for(let index= 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', function() {
  pixel[index].style.backgroundColor = corAtual ; 
   });
   }
	}
   colorPixel(); 
  function clear() {
  const pixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].style.backgroundColor = 'white';
  }
 }