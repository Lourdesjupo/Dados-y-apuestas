const updateBtn = document.querySelector('.update')
const result = document.querySelector('.result');
const selection = document.querySelector('.selection');
const body = document.querySelector('.body');



function randomColor () {
  const nRandom = random()
  if(nRandom % 2 === 0) {
    body.classList.remove('randomColorOdd');
    body.classList.add('randomColorEven')

  } else{
    body.classList.remove('randomColorEven');
    body.classList.add('randomColorOdd');
  } 
}
function printSelection (ev) {
  const selected = selection.value
  result.innerHTML= selected
   randomColor();
}
//Math.round(Math.random()*100)
function random() {
  return parseInt(Math.random()*100);
}


updateBtn.addEventListener('click',printSelection)