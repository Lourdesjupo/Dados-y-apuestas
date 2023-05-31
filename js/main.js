'use strict';
const form = document.querySelector('.form');
const btn = document.querySelector('.btn');
const select = document.querySelector('.select');
const amount = document.querySelector('.amount');
const message = document.querySelector('.message');
const remainingAmount = document.querySelector('.remainingAmount');
const btnReset = document.querySelector('.btnReset');
const img = document.querySelector('.img');

let accEuros = 50;
remainingAmount.textContent = `Saldo: ${accEuros}`;

function printMessage (msg) {
  message.innerHTML = msg
}
function printRemainingAmount (msg) {
  remainingAmount.textContent = msg
}

function validateInputs() {
  const betAmount = parseInt(amount.value)
  if (isNaN(amount.value) || betAmount < 0) {
    printMessage('Introduce un importe válido');
    return false;
  }
  if ( betAmount > accEuros) {
    printMessage('No tienes suficiente saldo para esta apuesta');
    return false;
  }
  return true  
}

function reset() {
  accEuros = 50;
  printRemainingAmount( `Saldo: ${accEuros}`);
  printMessage('¡Vamos a jugar!');
  btnReset.classList.add('noDisplay');
  btn.disabled = false;
  select.selectedIndex = 0;
  amount.value = '';
  img.src = '';
}

function feedbackPrint(resultBet) {
  if (resultBet === true) {
    printMessage ('Has ganado el doble de lo apostado 😀');
    img.src = "./img/win.gif";
  } else {
    printMessage ('Has perdido lo apostado 😞');
    img.src = './img/lose.gif';
  }
  printRemainingAmount (`Saldo: ${accEuros}`);
}

function calculateBet() {
  const selected = parseInt(select.value);
  const randomNumber = getRandomNumber(6);
  const tAmount = parseInt(amount.value);

  if (randomNumber === selected) {
    accEuros += tAmount * 2;
    return true;
  } else {
    accEuros = accEuros - tAmount;
    return false;
  }
}

function handleSubmit(ev) {
  ev.preventDefault();
  if(!validateInputs()) {
    return
  }
  const resultBet = calculateBet();
  feedbackPrint(resultBet);

  if (accEuros >= 200) {
    printMessage('Ha ganado la Usuaria');
    btnReset.classList.remove('noDisplay');
    btn.disabled = true;
  } else if (accEuros <= 0) {
    printMessage ('Ha ganado la Computadora');
    btnReset.classList.remove('noDisplay');
    btn.disabled = true;
  }
}

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

form.addEventListener('submit', handleSubmit);
btnReset.addEventListener('click', reset);
