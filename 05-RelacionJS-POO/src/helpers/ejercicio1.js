
export default function Tarea(nombre){
    Tarea.contador=0;
    this.id= ++Tarea.contador,
    this.nombre=nombre,
    this.completada=false

    this.toggleCompletada = function(){
        this.completada= !this.completada;
    }

    function logEstado(){
        console.log(`La tarea ${this.nombre} ${this.completada? "completada":"penidente"}`);
    }

    //crear un metodo estatico del objeto
    //que lo tengan todas las instncias
    Tarea.prototype.info = function(){
        console.log(`La tarea ${this.nombre} ${this.completada? "completada":"penidente"}`);
    }
};

export class TareaClass{
    static contador = 1;
    #completada;

    constructor(nombre){
        this.id=TareaClass.contador++;
        this.nombre = nombre;
        this.#completada= false;
    }
    toggleCompletada(){
        this.#completada = !this.#completada;
    }
    info(){
        console.log(`La tarea ${this.nombre} ${this.#completada? "completada":"penidente"}`);
    }
}