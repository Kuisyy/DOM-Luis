export class ProductoClases{
    constructor(nombre,precio,stock,img){
        this.nombre=nombre;
        this.precio=precio;
        this.stock =stock;
        this.img =img;
    };

    getInfo(){
        return `Nombre: ${this.nombre} - Precio: ${this.precio} - Stock: ${this.stock} - Imagen: ${this.img}`
    }
    updateStock(newStock){
        if(newStock>0){
            this.stock = newStock;
            return `Stock actualizado: ${this.stock}`;
        }else{
            return `Error el stock introducido es negativo: ${newStock}`;
        }
        
    }

}