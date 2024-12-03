//testing de los ejercicios de POO
//Ejercicio 1 ---->
//----funciones constructoras-----

import Tarea, { TareaClass } from "./helpers/ejercicio1";

//-----------Funciones Contructoras------------
console.log("Funciones constructoras");
const tarea1 = new Tarea("Aprender JS");

tarea1.info(); // La tarea Apredenr JS esta pendiente
tarea1.toggleCompletada();
tarea1.info();

//-----------Clases------------
console.log("Clases");

const tarea1Clases = new TareaClass("Aprender JS");

tarea1Clases.info(); // La tarea Apredenr JS esta pendiente
tarea1Clases.toggleCompletada();
tarea1Clases.info();