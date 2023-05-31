const btn = document.querySelector('.btn');
const select = document.querySelector('.select');
const amount = document.querySelector('.amount');
const message = document.querySelector('.message');
const remainingAmount = document.querySelector('.remainingAmount');


let accEuros = 50

function handleClick(ev) {
  const selected = parseInt(select.value);
  const randomNumber = getRandomNumber(6);
  const tAmount = parseInt(amount.value);
  console.log(selected)
  console.log(tAmount)

  if(typeof(selected) === "number" && tAmount > 0) {
    if (randomNumber === selected) {
      accEuros += tAmount * 2;
      message.innerHTML = 'Has ganado el doble de lo apostado 😀';
      remainingAmount.textContent = `Saldo: ${accEuros}`;
    } else {
      accEuros = accEuros - tAmount;
      message.innerHTML = 'Has perdido lo apostado 😞';
      remainingAmount.textContent = `Saldo: ${accEuros}`;
    }
  }else {
    message.innerHTML = 'Introduce un importe válido'
  }

}
//Math.round(Math.random()*100)
function getRandomNumber(max) {
  return Math.ceil(Math.random()*max);
}


btn.addEventListener('click', handleClick);