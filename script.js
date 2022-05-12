function colorPalette() {
  const square = document.querySelectorAll('.color');
  square[0].style.backgroundColor = 'black';
  square[1].style.backgroundColor = 'blue';
  square[2].style.backgroundColor = 'red';
  square[3].style.backgroundColor = 'purple';
}
colorPalette();
function changeFirstBlockToBlack() {
  const firstSquare = document.querySelectorAll('.color');
  firstSquare[0].style.backgroundColor = 'black';
}
changeFirstBlockToBlack();

function firstBlack() {
  const firstSquare = document.querySelectorAll('.color');
  const corPreta = firstSquare[0].style.backgroundColor;
  if (corPreta === 'black') {
    firstSquare[0].classList.add('selected');
  }
}
firstBlack();

function selecionaCor() {
  const corSelecionada = document.querySelectorAll('.color');
  for (let index = 0; index < corSelecionada.length; index += 1) {
    corSelecionada[index].addEventListener('click', function () {
      if ( corSelecionada[index].className != 'color selected' ) {
          corSelecionada[index].classList.add('selected');
            for(let indice = 0; indice < corSelecionada.length; indice += 1){
            if(indice != index){
            corSelecionada[indice].classList.remove('selected');
                    }
                }   
            }
        });
    }
}
selecionaCor();

function pintaPixel(){
    let clickToPaint = document.querySelectorAll('.pixel');
    let pixelColor = document.querySelectorAll('.color');
    
    for(let index = 0; index < clickToPaint.length; index += 1){
        clickToPaint[index].addEventListener('click', function(){
            if(clickToPaint[index].className == 'pixel'){
                clickToPaint[index].classList.add('select');
            }
            if(clickToPaint[index].className == 'pixel select'){
                for(let indice = 0; indice < pixelColor.length; indice += 1){
                    if(pixelColor[indice].className == 'color selected'){
                        clickToPaint[index].style.backgroundColor = pixelColor[indice].style.backgroundColor;
                    }
                }
            }
        });
    }
}
pintaPixel();