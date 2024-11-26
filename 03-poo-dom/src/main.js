import { ProductoClases } from "./components/ProductoClases.js";
import { Usuario } from "./components/Usuario.js";
import { UsuarioClases } from "./components/UsuarioClases.js";
import { UsuarioFabrica } from "./components/UsuariosFabrica.js";

//Implementar el uso de POO a un sistema para iniciar sesion y actualizar un perfil de un usuario
//El objetivo sera crear una calse/objeto para modelar el incio de sesion/perfil.

// const usuario = new Usuario("Ana","ana@gmail.com","12345");
// const usuario = new UsuarioClases("Luis","luis@gmail.com","123");
// const usuario = UsuarioFabrica("Luis","luis@gmail.com","123");

// const app = document.getElementById("app");
// app.innerHTML=`
// <h2>Gestion de usuarios</h2>
// <p>${usuario.getInfo()}</p>
// <button id="btn-login">Iniciar sesion</button>
// <button id="btn-actualizar-email">Actualizar email</button>

// <div id="form-container"></div>
// `;

// document.getElementById("btn-login")
// .addEventListener("click",mostrarFormularioLogin);

// document.querySelector("#btn-actualizar-email")
// .addEventListener("click",mostrarFormularioUpdateEmail);

// function mostrarFormularioLogin(){
//     const form=document.getElementById("form-container");
//     form.innerHTML=`
//     <input id="email-login" type="email" placeholder="Introduzca el email">
//     <input id="password-login" type="password" placeholder="Introduzca la contraseña">
//     <button id="btn-enviar-login">Enviar</button>
//     `;

//     document.querySelector("#btn-enviar-login").addEventListener("click",()=>{
//         const email = document.getElementById("email-login").value.trim();
//         const password = document.getElementById("password-login").value.trim();
    
//         alert(usuario.login(email,password));
//     });
// };

// function mostrarFormularioUpdateEmail(){
//     const form=document.getElementById("form-container");
//     form.innerHTML=`
//     <input id="email-update" type="email" placeholder="Introduzca el nuevo email">
//     <button id="btn-actualizar">Enviar</button>
//     `;

//     document.querySelector("#btn-actualizar").addEventListener("click",()=>{
//         const newEmail = document.getElementById("email-update").value.trim();    
//         alert(usuario.updateEmail(newEmail));
//     });
// };



//---------------EJERCICIO 1 EN SOLITARIO-------------------

const productos = [
    new ProductoClases("Lapiz","2","35","imgLapiz.url"),
    new ProductoClases("Boli rojo","3","30","imgBoliR.url"),
    new ProductoClases("Boli azul","3","40","imgBoliA.url"),
];
const app = document.getElementById("app");
app.innerHTML= `
<h2>Productos</h2>
<div id="lista-productos"></div>
`;

const listaProducto = document.getElementById("lista-productos");
const lista = document.createElement("ul");

productos.forEach(producto=>{
    const li = document.createElement("li");
    li.innerHTML=`${producto.getInfo()} <br> <button id="btn-actualizar-stock">Actualizar Stock</button> <br><br>`;
    lista.appendChild(li);
});
listaProducto.appendChild(lista);

document.getElementById("actualizar-stock")
.addEventListener("click",actualizarStock);


function actualizarStock(){
        li.innerHTML=`
        <input id="stock-update" type="number" placeholder="Stock">
        <button id="btn-new-stock">Enviar</button>
    `;

    document.getElementById("btn-new-stock").addEventListener("click",()=>{
        const newStock = document.getElementById("stock-update").value.trim();    
        alert(productos.updateStock(newStock));
    });
};






