console.log("hello from script.js")

const nameField = document.getElementById("first-name")
const emailField = document.getElementById("email-address")
const nameError = document.getElementById("first-name-error")
const emailError = document.getElementById("email-address-error")

const nameRegex = /^[\p{L}\p{M}'-]+(?: [\p{L}\p{M}'-]+)*$/u;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


function handleSubmit(event) {
    if(nameField.value === null) {
        nameField.classList.remove("error")
        nameField.textContent = ""
        return true
    }
    if(!nameRegex.test(nameField.value)) {
        event.preventDefault()
        nameField.classList.add("error")
        nameError.textContent = "Invalid characters in name"
        return false
    }
    nameField.classList.remove("error")
    nameError.textContent = "" 
}
function handleEmailSubmit(event) {
    if(emailField.value === null) {
        emailField.classList.remove("error")
        emailField.textContent = ""
        return true
    }
    if(!emailRegex.test(emailField.value)) {
        event.preventDefault()
        emailField.classList.add("error")
        emailError.textContent = "Invalid characters in email"
        return false
    }
    emailField.classList.remove("error")
    emailError.textContent = ""
    
}
nameField.addEventListener("input", handleSubmit)
emailField.addEventListener("input", handleEmailSubmit)