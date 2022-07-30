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

function pintaPixel() {
  const clickToPaint = document.querySelectorAll('.pixel');
  const pixelColor = document.querySelectorAll('.color');

  clickToPaint.forEach(item => {
    item.addEventListener('click', event => {
      if (item.className == 'pixel') {
        item.classList.add('select');
      }
      if (item.className == 'pixel select') {
        pixelColor.forEach(color => {
          if (color.className == 'color selected') {
            item.style.backgroundColor = color.style.backgroundColor;
          }
        })
      }
    })
  })
}
pintaPixel();
