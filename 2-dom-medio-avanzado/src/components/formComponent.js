import { formatPostcssSourceMap } from "vite";

// Inicio de sesión
export default function formComponent(){
    const divFormLogin = document.createElement("div");
    divFormLogin.classList.add("form-container-login");
    divFormLogin.id = "form-container-login";

    const formEmail = document.createElement("form");
    formEmail.htmlFor = "form-container-login";
    formEmail.id = "form-login";

    const labelUserName = document.createElement("label");
    labelUserName.textContent= "Username";
    const inputUsername = document.createElement("input");
    inputUsername.id = "username";
    inputUsername.type = "text";
    inputUsername.name = "username";
    inputUsername.placeholder= "Escribe tu username";

    const labelPassword = document.createElement("label");
    labelPassword.textContent= "Password";
    const inputPassword = document.createElement("input");
    inputPassword.id = "password";
    inputPassword.type = "text";
    inputPassword.name = "password";
    inputPassword.placeholder= "Escribe tu password";

    const button = document.createElement("button");
    button.id = "button-login";
    button.type="submit";
    button.textContent="Iniciar sesion";

    formEmail.append(labelUserName,inputUsername,labelPassword,inputPassword,button);
    divFormLogin.appendChild(formEmail);
    
    return divFormLogin;


    //Añadir un sign in/Registro
};