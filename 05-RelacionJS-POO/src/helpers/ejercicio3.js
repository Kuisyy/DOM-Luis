
export function Empleado(nombre,edad,puesto){
    this.nombre=nombre;
    this.edad=edad;
    this.puesto=puesto;

    Empleado.prototype.calcularSalario = function(){
        const salarioBase={
            junior: 1500 ,
            senrio: 2500,
            master: 5000,
        };
        return salarioBase[this.puesto]|| 0;
    };
    Empleado.prototype.info = function(){
        console.log(`${this.nombre}----${this.edad}----${this.puesto}-${this.calcularSalario()}`);
    }
}
//Subclase constructura EmpleadoFreelance
export function EmpleadoFreelance(nombre,edad,precioHora){
    Empleado.call(this,nombre,edad,"freelance");
    this.precioHora=precioHora;
    //Heredar metodos de la clase constructura padre.
    EmpleadoFreelance.prototype= Object.create(Empleado.prototype);
    //y que el constructor sea el padre
    EmpleadoFreelance.prototype.constructor= EmpleadoFreelance;

    //Sobreescritura del metodo calcularSalario e info;
    EmpleadoFreelance.prototype.calcularSalario=function(){
        
    }

}