import {
    KEY_LOCAL_STORAGE_ROLE,
    KEY_LOCAL_STORAGE_EMAIL,
    KEY_LOCAL_STORAGE_PASSWORD
} from './KEYs.js';

displayContent()

function displayContent() {

    let txtRole = document.getElementById("txtRole")
    let txtEmail = document.getElementById("txtEmail")
    let txtPassword = document.getElementById("txtPassword")

    // localStorage.getItem("key")
    let role = localStorage.getItem(KEY_LOCAL_STORAGE_ROLE)
    let email = localStorage.getItem(KEY_LOCAL_STORAGE_EMAIL)
    let password = localStorage.getItem(KEY_LOCAL_STORAGE_PASSWORD)

    txtRole.innerText += " " + role
    txtEmail.innerText += " " + email
    txtPassword.innerText += " " + password
}

