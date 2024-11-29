export class Producto {
    constructor(nombre,cantidad,precio){
        this.nombre = nombre;
        this.cantidad=cantidad;
        this.precio=precio;
    }
    calcularTotal(){
        return this.cantidad*this.precio;
    }
    getInfo(){
        return `Nombre:${this.nombre}-Cantidad: ${this.cantidad}-Precio:${this.precio}-Total:${this.calcularTotal()}`;
    }
    
}