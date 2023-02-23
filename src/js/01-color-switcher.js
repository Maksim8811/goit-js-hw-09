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



