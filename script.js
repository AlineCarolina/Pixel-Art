function colorPalette() {
  const square = document.querySelectorAll('.color');
  square[0].style.backgroundColor = 'black';
  square[1].style.backgroundColor = 'blue';
  square[2].style.backgroundColor = 'red';
  square[3].style.backgroundColor = 'yellow';
}
colorPalette();

function renderPixels() {
  const table = document.getElementById('table-pixel');
  let tamanho = document.getElementById('board-size').value
  if(!tamanho) {
    tamanho = 5;
  }
  if(tamanho > 50) {
    tamanho = 50
  }
  if(tamanho < 5) {
    alert('Invalid board!');
    window.preventDefault()
  }
  if(tamanho > 5) {
    while (table.firstChild) {
      table.removeChild(table.firstChild)
    }
  }
  for (let i = 1; i <= tamanho; i+= 1) {
    const trLine = document.createElement('tr');
    table.appendChild(trLine);
    for (let i = 1; i <= tamanho; i+= 1) {
      const tdPixel = document.createElement('td');
      tdPixel.className = 'pixel';
      trLine.appendChild(tdPixel);
    }
  }
}
document.addEventListener('DOMContentLoaded', renderPixels)
document.getElementById('generate-board').onclick = renderPixels

function firstBlack() {
  const firstSquare = document.querySelectorAll('.color');
  const corPreta = firstSquare[0];
  corPreta.classList.add('selected');
}

firstBlack();

function selecionaCor() {
  const corSelecionada = document.querySelectorAll('.color');

  corSelecionada.forEach(selecionada => {
    selecionada.addEventListener('click', event => {
      if (selecionada.className != 'color selected') {
        selecionada.classList.add('selected');
      }
      else {
        selecionada.classList.remove('selected')
      }
    })
  })
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
document.getElementById('table-pixel').addEventListener('click', pintaPixel);

function limpaPixel() {
  const clickToPaint = document.querySelectorAll('.pixel');
  clickToPaint.forEach(pixel => {
    pixel.style.backgroundColor = 'white'
  });
}
document.getElementById('clear-board').onclick = limpaPixel
