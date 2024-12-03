import { Producto } from "./Product";

export default class Carrito {
    constructor(){
        this.productos = [];
    }
    addProduct(nombre,cantidad,precio){
        this.productos.push(new Producto(nombre,cantidad,precio));
        //guardar en el localStorage
    }
    deleteProduct(index){
        this.productos.splice(index,1);
        //guardar en el localStorage
    }
    editProduct(index,newCantidad){
        if(newCantidad>=0){
            this.productos[index].cantidad= newCantidad;
            //guardar en el localStorage
        }
    }   
    calculateTotal(){
        return this.productos.reduce((acc,producto)=> acc+=producto.calcularTotal(),0)
    }
    //guardar en el localStorage
    saveLocalStorage(){
        localStorage.setItem("carrito",JSON.stringify(this.productos));
    }
    //extra-----LocalStorage
    loadLocalStorage(){
        if(localStorage.hasOwnProperty("carrito")){
           const data =JSON.parse(localStorage.getItem("carrito")).map((producto)=>{
                new Producto(producto.nombre,producto.cantidad,producto.precio);
           })   
           return this.productos= data;
        }

    }
    //Ordenar por nombre , precio ....
}