import {
    KEY_APP_ROLE_ADMIN,
    KEY_APP_ROLE_VENDOR,
    KEY_APP_ROLE_USER,
    KEY_LOCAL_STORAGE_ROLE,
    KEY_LOCAL_STORAGE_EMAIL,
    KEY_LOCAL_STORAGE_PASSWORD
} from './KEYs.js';



let selectedRole = KEY_APP_ROLE_ADMIN

let btnAdmin = document.getElementById("btnAdmin")
let btnVendor = document.getElementById("btnVendor")
let btnClient = document.getElementById("btnClient")

let inputEmail = document.getElementById("inputEmail")
let inputPassword = document.getElementById("inputPassword")

let emailHint = document.getElementById("emailHint")
let passwordHint = document.getElementById("passwordHint")

let btnLogin = document.getElementById("btnLogin")

btnAdmin.onclick = () => {
    activeRole(KEY_APP_ROLE_ADMIN)
}
btnVendor.onclick = () => {
    activeRole(KEY_APP_ROLE_VENDOR)
}
btnClient.onclick = () => {
    activeRole(KEY_APP_ROLE_USER)
}

btnLogin.onclick = () => {
    validate()
}

function activeRole(role) {

    selectedRole = role

    emailHint.innerText = role + " Email"
    passwordHint.innerText = role + " Password"
    btnLogin.innerText = "Login as " + role

    switch (role) {
        case "Admin":
            {
                inputEmail.value = "admin@example.com"
                inputPassword.value = "123123"
                btnAdmin.classList.add("active");
                btnVendor.classList.remove("active");
                btnClient.classList.remove("active");
                break;
            }

        case "Vendor":
            {
                inputEmail.value = "vendor@example.com"
                inputPassword.value = "456456"
                btnAdmin.classList.remove("active");
                btnVendor.classList.add("active");
                btnClient.classList.remove("active");
                break;
            }

        case "Client":
            {
                inputEmail.value = "client@example.com"
                inputPassword.value = "890890"
                btnAdmin.classList.remove("active");
                btnVendor.classList.remove("active");
                btnClient.classList.add("active");
                break;
            }
    }

}

function validate() {

    let email = inputEmail.value
    let password = inputPassword.value


    const isValidClient = isEmailValid(email) && isPasswordValid(password)
    toggleErrorHints(email, password)

    if (isValidClient) {
        storeUser(email, password)
    }


}

function isEmailValid(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

function isPasswordValid(password) {
    console.log(password)
    return password.length >= 6
}

function toggleErrorHints(email, password) {

    let emailErrorHint = document.getElementById("emailErrorHint")
    let passwordErrorHint = document.getElementById("passwordErrorHint")

    if (isEmailValid(email)) {
        emailHint.classList.remove("visually-hidden")
        emailErrorHint.classList.add("visually-hidden")
    } else {
        emailHint.classList.add("visually-hidden")
        emailErrorHint.classList.remove("visually-hidden")
    }

    if (isPasswordValid(password)) {
        passwordHint.classList.remove("visually-hidden")
        passwordErrorHint.classList.add("visually-hidden")
    } else {
        passwordHint.classList.add("visually-hidden")
        passwordErrorHint.classList.remove("visually-hidden")
    }
}

function storeUser(email, password) {

    localStorage.setItem(KEY_LOCAL_STORAGE_ROLE, selectedRole)
    localStorage.setItem(KEY_LOCAL_STORAGE_EMAIL, email)
    localStorage.setItem(KEY_LOCAL_STORAGE_PASSWORD, password)

    openMainScreen()
}

function openMainScreen() {
    window.location.href = "./main-screen.html";
}