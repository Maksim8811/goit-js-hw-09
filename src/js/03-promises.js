import Notiflix from 'notiflix';
     
      const submitButton = document.querySelector(`form`)
      const delayInput = document.querySelectorAll(`input`) // delayInput[0].value
      const stepDelInput = document.querySelectorAll(`input`) //stepDelInput[1].value
      const amountInput = document.querySelectorAll(`input`) // amountInput[2].value
    
      
      submitButton.addEventListener("submit", (ev) => {
      ev.preventDefault()
      let firstDel = Number(delayInput[0].value) //3
      const stepDel = Number(stepDelInput[1].value)//1000ms
      const amount = Number(amountInput[2].value)//3

      for(let i = 1; i <= amount; i++) {
        // firstDel+=stepDel
        createPromise(i, firstDel)
        firstDel+=stepDel
        
  }
})

      function createPromise(position, delay) {

        const shouldResolve = Math.random() > 0.3;
        const promise = new Promise ((resolve, reject) => {
          
        setTimeout(() => {
            if (shouldResolve) {
              // Fulfill
              resolve({position,delay})
            } else {
              // Reject
              reject({position,delay})
            }
          }, delay)
          
        })
     
      promise.then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    }

/////////////////////////////////////





 
  

