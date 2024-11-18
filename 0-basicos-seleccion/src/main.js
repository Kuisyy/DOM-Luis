/**
 * @author: Luis Maldonado Hernández
 * @description: Relacion 1 de ejercicios
 */

/**
 * @description: Ejercicio 1 
 */

const elementH1 = document.getElementById("contenedorPrincipal").querySelector("h1");
console.log(elementH1);
elementH1.style.color="red";
elementH1.textContent = "Hola Mundo";


/**
 * @description: Ejercicio 2 
 */

const elementsParrafo = document.querySelectorAll("#contenedorPrincipal .parrafo");
console.log(elementsParrafo);

/**
 * @description: Ejercicio 3
 */

const img = document.querySelector("img[src='imagen.png']");
console.log(img);

/**
 * @description: Ejercicio 4
 */

const spans = document.querySelectorAll("#contenedorSecundario span");
console.log(spans);

/**
 * @description: Ejercicio 5
 */
const firstImportante = document.querySelector(".parrafo.importante");
console.log(firstImportante);

/**
 * @description: Ejercicio 6
 */
const allParagraphs = document.querySelectorAll("#contenedorPrincipal p");
console.log(allParagraphs);

/**
 * @description: Ejercicio 7
*/

const atributeValue = document.querySelectorAll("[data-atributo='valor1']");
console.log(atributeValue);

/**
 * @description: Ejercicio 8: elecciona el segundo párrafo que está dentro de un elemento con la clase "importante".
 */

const parrafosImportantes = document.querySelectorAll(".parrafo.importante");
const segundoParrafo = parrafosImportantes.length>1 ? parrafosImportantes[1] : null;
console.log(segundoParrafo);

/**
 * @description: Ejercicio 9 :Selecciona todos los elementos `<span>` que están dentro de cualquier elemento con la clase "contenedor".
 */

const allElementsContenedor = document.querySelectorAll(".contenedor span");
console.log(allElementsContenedor);

/**
 * @description: Ejercicio 10 : Selecciona el tercer párrafo dentro del `contenedorPrincipal` que tiene la clase "parrafo".
 */

const allParrafosContenedorPrincipal = document.querySelectorAll("#contenedorPrincipal .parrafo");
const thridParagraph = allParrafosContenedorPrincipal.lenght>2 ? allParrafosContenedorPrincipal[2] : null;
console.log(thridParagraph);