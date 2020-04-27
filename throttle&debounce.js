(() => {
 const throttle = (func, interval) => {
    let throttle = false;

    return (...args) => {
        if(!throttle) {
            func(...args);
            throttle = true;
            setTimeout(() =>{
                throttle = false;
            } , interval);
        }      
 }
}

const debounce = (func, interval) => {
    let debounce = null;
     return (...args) => {
         const effect = () => {
             debounce = null;
             func(...args);
         }
         clearInterval(debounce);
         console.log(debounce);
       debounce =   setTimeout(effect, interval);
     }
}

 document.getElementById('input').addEventListener('keypress',
     throttle((event) => {
        alert(event.target.value);
     }, 5000)
 )

})()
