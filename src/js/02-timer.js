

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';


const startTimerBtn = document.querySelector('button[data-start="start"]')
startTimerBtn.setAttribute("disabled", true)
startTimerBtn.addEventListener("click", () => {timerId =
  setInterval(()=> {convertMs(options.myKeyTime)},1000)
})


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    
    onClose(selectedDates) {
      const endDate = selectedDates[0].getTime() // задана дата 87000
      console.log(selectedDates[0])
      let nowDate = options.defaultDate //теперішня дата 80000
      console.log(nowDate)
    
      if(endDate < nowDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
      } else {
        startTimerBtn.removeAttribute("disabled")
        options.myKeyTime = endDate
        }
     },
    };
 
  flatpickr("#datetime-picker", options);
  
  function convertMs(ms) {
      let nawDate = new Date().getTime()
      let result = ms - nawDate 
  
   // Number of milliseconds per unit of time
   const second = 1000;
   const minute = second * 60;
   const hour = minute * 60;
   const day = hour * 24;
 
   // Remaining days
   const days = Math.floor(result / day);
   // Remaining hours
   const hours = Math.floor((result % day) / hour);
   // Remaining minutes
   const minutes = Math.floor(((result % day) % hour) / minute);
   // Remaining seconds
   const seconds = Math.floor((((result % day) % hour) % minute) / second);

  console.log({ days, hours, minutes, seconds })

  addLeadingZero({ days, hours, minutes, seconds,  result})
   return ({ days, hours, minutes, seconds })
  
    }

    function addLeadingZero(value) {
      let objВifference = {}
      objВifference = value
      
      const daysToStr = String(objВifference.days)
      
      if(daysToStr.length === 2) {
        document.querySelector(`span[data-days="days"]`).innerHTML = daysToStr;
      }
      else{
        document.querySelector(`span[data-days="days"]`).innerHTML = daysToStr.padStart(2, "0")
      }
  
      const hoursToStr = String(objВifference.hours)
  
      if(hoursToStr.length === 2) {
        document.querySelector(`span[data-hours="hours"]`).innerHTML = hoursToStr;
      }
      else{
        document.querySelector(`span[data-hours="hours"]`).innerHTML = hoursToStr.padStart(2, "0")
      }
    
      const minutesToStr = String(objВifference.minutes)
      
      if(minutesToStr.length === 2) {
        document.querySelector(`span[data-minutes="minutes"]`).innerHTML = minutesToStr;
      }
      else{
        document.querySelector(`span[data-minutes="minutes"]`).innerHTML = minutesToStr.padStart(2, "0")
      }
      
      const secondrToStr = String(objВifference.seconds)
      
      if(secondrToStr.length === 2) {
        document.querySelector(`span[data-seconds="seconds"]`).innerHTML = secondrToStr;
      }
      else{
        document.querySelector(`span[data-seconds="seconds"]`).innerHTML = secondrToStr.padStart(2, "0")
      }
      
      if(objВifference.result < 0) {
      clearInterval(timerId)
      Notiflix.Notify.success('Timed out successfully');
      document.querySelector(`span[data-days="days"]`).innerHTML = "00"
      document.querySelector(`span[data-hours="hours"]`).innerHTML = "00"
      document.querySelector(`span[data-minutes="minutes"]`).innerHTML = "00"
      document.querySelector(`span[data-seconds="seconds"]`).innerHTML = "00"
    }
    }
 