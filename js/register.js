// let user = document.getElementById("username");
// let email = document.getElementById("email");
// let pass1 = document.getElementById("pass1");
// let pass2 = document.getElementById("pass2");
// let RegisterDone = document.getElementById("register-done");
// let status = document.getElementById("status");

// function checkEmail(input) {
//   const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (re.test(input.value.trim())) {
//     x=5
//   } else {
//     alertMessage("Email is not valid", 'danger');
//   }
// }

// function alertMessage(msg, alertStyle) {
//   alertString = `<div class="alert alert-${alertStyle}" role="alert">
//                     ${msg}
//                 </div>`;
//     status.innerHTML = alertString;
// }

// // check Password
// function passwordCheck(pas, pas1){
//     if (pas.length > 6 && pas1.length > 6){
//         if(pas === pas1) {
//             alertMessage(`registration finished succesfully for ${user.value}`, 'success')
//         }
//     }else{
//         alertMessage(`OOPS, password doesnt math`, 'danger')
//     }
// }

// // check input Length

// function registerUser(e) {
//     e.preventDefault()
//     status.innerHTML = ''
//     if (user.value.trim().length <4){
//         alertMessage('username must contain minimum 4 character', 'danger')
//     }
    
//     passwordCheck(pass1.value, pass2.value)
//     checkEmail(email)
    
    
// }

// RegisterDone.addEventListener('click', registerUser)
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
let ctr = 0;

// show input error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

// Check if email is valid
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())){
        showSuccess(input);
        ctr += 1;
    }else {
        showError(input, "Email is not valid");
    }
}

// Check if password matches

function CheckPasswordsMatch(pass1, pass2){
   if (pass1.value === pass2.value){
       showSuccess(pass1)
       showSuccess(pass2)
       ctr +=1;
   }else {
       showError(pass2, "Password doesnt match")
   } 
}

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            // if input is empty 
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input)
            ctr += 1
        }
    });
}

//  get fieldname 
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check input Length

function checkLength(input, min, max) {
    if (input.value.length >= min & input.value.length <= max){
        showSuccess(input)
        ctr += 1
    } else {
        showError(input, `${input.id} len must be between ${min} and ${max} characters`)
    }

}

// Event listener

form.addEventListener('submit', function (e) {
    ctr = 0;
    e.preventDefault()

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 20);
    checkEmail(email)
    CheckPasswordsMatch(password, password2)
    if (ctr === 8){
        window.location.href = '/'
    }
})