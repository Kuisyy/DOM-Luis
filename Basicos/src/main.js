//Seleccion de elementos del DOM.
const appDiv = document.getElementById('app');
appDiv.innerHTML = "<h1>Hola mundo</h1>" // Interpreta HTML
appDiv.innerText= "Hola mundi"; // Interpreta texto plano, es el mas seguro de los dos

// Añadir clases a un elemento del DOM
appDiv.classList.add("clase1","clase2");

//Seleccion ClassName
const items = document.getElementsByClassName("items");
// items.length();
//se puede recorrer
let n = 1;
for (const i of items) {
  i.textContent=`Hola amigo ${n++}`;
}

//Seleccion por clase
const saludoP = document.querySelector(".saludo");
//Traer rodos por clase
const saludos = document.querySelectorAll(".saludo");

saludos.forEach((saludo,index)=>{
    saludo.innerText=`Hola mundo ${index}`;
});

//Añadimos atributos a una etiqueta
const miGit = document.getElementById("github");
miGit.setAttribute("target","_blank");
//miGit.removeAttribute() PAra eliminar atributos
miGit.innerText = "Ir al github del profe";
miGit.textContent = "Ir al github del profe";

