let subscribe = document.getElementById('get-started')
let entermail = document.getElementById('entermail')
let getsub = document.getElementById('get-subscribe')
let entmail2 = document.getElementById('enter-your-mail')

subscribe.addEventListener('click', (e) => {
    e.preventDefault()
    if (entermail.value.length <= 0){
        alert("please enter your email address")
    }else{

    alert("Our Support Team will contact you shortly")

    }
    entermail.value = ''

})

getsub.addEventListener('click', (e) => {
    e.preventDefault()
    if (entmail2.value.length <= 0){
        alert("please enter your email address")
    }else{

    alert("Our Support Team will contact you shortly")

    }
    entmail2.value = ''

})