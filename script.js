const email = document.getElementById("mail");
const form = document.querySelector("form");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) =>{
    if(email.validity.valid){
        emailError.textContent = "";
        emailError.className = "error";
    }
    else{
        showError();
    }
});



form.addEventListener("submit", (event) =>{
    if(!email.validity.valid){
        showError();
        event.preventDefault();
    }
});

function showError(){
    if(email.validity.valueMissing){
        emailError.textContent = "Enter ur email u fucking dumpass";
    }
    else if(email.validity.typeMismatch){
        emailError.textContent = "I told u enter ur email u fucking idiot";
    }
    else if(email.validity.tooShort){
        emailError.textContent = `Look at u what the fuck are u filling idiot email should be ${email.minLength} characters; u entered ${email.value.length}`;
    }
    
    emailError.className = "error active";
}

const country = document.getElementById("country");
const countryError = document.querySelector("#country + span.error");

country.addEventListener("change", (event) =>{
    if(country.validity.valid){
        countryError.textContent = "";
        countryError.className = "error";
    }
    else{
        countryshowerror();
    }
});

form.addEventListener('submit', (event) =>{
    if(!country.validity.valid){
        countryshowerror();
        event.preventDefault();
    }
})

function countryshowerror(){
    if(country.validity.valueMissing){
        countryError.textContent = "Select the place that u live u fucking asshole"
    }
    countryError.className = "error active";

}

const zipcode = document.getElementById("zipcode");
const zipcodeError = document.querySelector("#zipcode + span.error");

zipcode.addEventListener("input", () =>{
    const value = zipcode.value;
    zipcode.value = value.replace(/\D/g, '');
    if(zipcode.validity.valid){
        zipcodeError.textContent = "";
        zipcodeError.className = "error";
    }
    if(zipcode.value.length > 5){
        zipcode.value = zipcode.value.slice(0, 5);
    }
    else{
        zipcodeShowError();
    }
});

form.addEventListener("submit", (event) =>{
    if(!zipcode.validity.valid){
        zipcodeShowError();
        event.preventDefault();
    }
})

function zipcodeShowError(){
    if(zipcode.validity.valueMissing){
        zipcodeError.textContent = "can't u see it u fucking blind";
    }else if(zipcode.validity.patternMismatch){
        zipcodeError.textContent = "such a shame u didn't know what a zipcode"
    }
    zipcodeError.className = "error active"
}

const password = document.getElementById('password'); // Corrected variable name
const passwordError = document.querySelector('#password + span.error');

password.addEventListener('input', (event) => { // Corrected variable name
    if(password.validity.valid){
        passwordError.textContent = "";
        passwordError.className = "error";
    } else {
        passwordShowError();
    }
});

form.addEventListener("submit", (event) => {
    if(!password.validity.valid){ // Corrected variable name
        passwordShowError();
        event.preventDefault();
    }
});

function passwordShowError(){
    if(password.validity.valueMissing){ // Corrected variable name
        passwordError.textContent = "Enter password, idiot";
    } else if(password.validity.tooShort){ // Corrected variable name
        passwordError.textContent = `You're not a child, don't make me teach you everything. Your password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
    }
    passwordError.className = "error active";
}

const confirm = document.getElementById('confirm');
const confirmError = document.querySelector('#confirm + span.error');

confirm.addEventListener('input', (event) => {
    if(confirm.validity.valid && confirm.value === password.value){
        confirmError.textContent = "";
        confirmError.className = "error";
    }
    else{
        confirmShowError();
    }
    
})

form.addEventListener('submit', (event) =>{
    if(!confirm.validity.valid || confirm.value !== password.value){
        confirmShowError();
        event.preventDefault();
    }
})


function confirmShowError(){
    if(confirm.validity.valueMissing){
        confirmError.textContent = "Enter ur password again can't u read the label confirm password is not for me is for ur security idiot";
    }
    else if(confirm.value !== password.value){
        confirmError.textContent = "u can't even confirm are u fucking got a parkinson disease"
    }
    confirmError.className = "error active";
}

