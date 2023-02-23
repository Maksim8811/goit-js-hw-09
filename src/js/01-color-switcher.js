const bodyStyle = document.querySelector("body")
const startBtn = document.querySelector(`button[data-start="start"]`)
const stopBtn = document.querySelector(`button[data-stop="stop"]`)
console.log(65)
let timerId = null

stopBtn.setAttribute('disabled', true)

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const clickStartBtn = () => {
   timerId = setInterval(() => {
        bodyStyle.style.backgroundColor =  getRandomHexColor()
    }, 1000)
    
    stopBtn.removeAttribute('disabled')
    startBtn.setAttribute('disabled', true)
}

const clickStopBtn = () => {
  clearInterval(timerId)
  startBtn.removeAttribute('disabled')
  stopBtn.setAttribute('disabled', true) 
}

startBtn.addEventListener("click", clickStartBtn)
stopBtn.addEventListener("click", clickStopBtn)


function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
if (totalSpent >= 50000) {
 console.log(GOLD_DISCOUNT)
} else if (totalSpent >= 20000 && totalSpent < 50000) {
  console.log(SILVER_DISCOUNT)
} else if (totalSpent >= 5000 && totalSpent < 20000) {
  console.log(BRONZE_DISCOUNT)
} else if (totalSpent < 5000) {
  console.log(BASE_DISCOUNT) 
}

  // Change code above this line
  
}
getDiscount(4000)
