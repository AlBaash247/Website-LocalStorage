let btnAdmin = document.getElementById("btnAdmin")
let btnVendor = document.getElementById("btnVendor")
let btnUser = document.getElementById("btnUser")

let adminForm = document.getElementById("adminForm")
let vendorForm = document.getElementById("vendorForm")
let userForm = document.getElementById("userForm")

let btnLogin = document.getElementById("btnLogin")

btnAdmin.onclick = () => {
    activeRole("Admin")
}
btnVendor.onclick = () => {
    activeRole("Vendor")
}
btnUser.onclick = () => {
    activeRole("User")
}


function activeRole(role) {
    btnLogin.innerText = "Login as "+role

    switch (role) {
        case "Admin":
            {
                btnAdmin.classList.add("active");
                btnVendor.classList.remove("active");
                btnUser.classList.remove("active");

                adminForm.classList.remove("visually-hidden");
                vendorForm.classList.add("visually-hidden");
                userForm.classList.add("visually-hidden");

                break;
            }

        case "Vendor":
            {
                btnAdmin.classList.remove("active");
                btnVendor.classList.add("active");
                btnUser.classList.remove("active");

                adminForm.classList.add("visually-hidden");
                vendorForm.classList.remove("visually-hidden");
                userForm.classList.add("visually-hidden");

                break;
            }


        case "User":
            {
                btnAdmin.classList.remove("active");
                btnVendor.classList.remove("active");
                btnUser.classList.add("active");

                adminForm.classList.add("visually-hidden");
                vendorForm.classList.add("visually-hidden");
                userForm.classList.remove("visually-hidden");
                break;
            }
    }

}