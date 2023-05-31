const btn = document.querySelector('.btn');
const select = document.querySelector('.select');
const amount = document.querySelector('.amount');
const message = document.querySelector('.message');
const remainingAmount = document.querySelector('.remainingAmount');
const btnReset = document.querySelector('.btnReset');

let accEuros = 50;
remainingAmount.textContent = `Saldo: ${accEuros}`;

function reset() {
  accEuros = 50;
  remainingAmount.textContent = `Saldo: ${accEuros}`;
  message.innerHTML = '¡Vamos a jugar!';
  btnReset.classList.add('noDisplay');
  btn.disabled = false;
}

function handleClick(ev) {
  const selected = parseInt(select.value);
  const randomNumber = getRandomNumber(6);
  const tAmount = parseInt(amount.value);

  if (typeof selected === 'number' && tAmount > 0) {
    if (randomNumber === selected) {
      accEuros += tAmount * 2;
      message.innerHTML = 'Has ganado el doble de lo apostado 😀';
      remainingAmount.textContent = `Saldo: ${accEuros}`;
    } else {
      accEuros = accEuros - tAmount;
      message.innerHTML = 'Has perdido lo apostado 😞';
      remainingAmount.textContent = `Saldo: ${accEuros}`;
    }
  } else {
    message.innerHTML = 'Introduce un importe válido';
  }
  if (accEuros >= 200) {
    message.innerHTML = 'Ha ganado la Usuaria';
    btnReset.classList.remove('noDisplay');
    btn.disabled = true
  } else if (accEuros <= 0) {
    message.innerHTML = 'Ha ganado la Computadora';
    btnReset.classList.remove('noDisplay');
    btn.disabled = true;
  }
}
//Math.round(Math.random()*100)
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

btn.addEventListener('click', handleClick);
btnReset.addEventListener('click', reset);
