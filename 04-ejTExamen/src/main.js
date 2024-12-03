import Carrito from "./components/Carrito";


//crear instancias carrito / cargar carrito localStorage
const carrito = new Carrito();
carrito.loadLocalStorage();
console.log(carrito.productos);
const agregarProdcutoHandler = (event) =>{
    event.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const cantidad = Number(document.getElementById("cantidad").value);
    const precio = Number(document.getElementById("precio").value);
    
    if (nombre && cantidad >= 0 && precio >= 0) {
        carrito.addProduct(nombre, cantidad, precio);
        renderProducts();
    } else {
        alert("Por favor, completa todos los campos correctamente.");
    }

    event.target.reset();

}

//Crear un <h1>Carrito</h1> /createElement esto
//el resto con innerHtml
//Crear un contenedor <form></form>
//Crear inputs Nombre,Cantidad,precio
//Crear boton de añadir al carrito

//añadir div para colocal los productos de mi carrito

function renderCarrito(){
        const app = document.getElementById("app");
    
        const h1Carrito = document.createElement("h1");
        h1Carrito.textContent= "Carrito Productos";
        app.appendChild(h1Carrito);
    
        app.innerHTML+= `
            <form id="form">
                <input id="nombre" type="text" placeholder="Nombre del producto"></input>
                <input id="cantidad" type="number" placeholder="Cantidad"></input>
                <input id="precio" type="number" placeholder="Precio"></input>
                <button id="add-product" type="submit">Añadir a carrito</button>
            </form>
            <div id="container-productos">
                <ul id="lista-productos"></ul>
            </div>
            <footer>
                <p>Total del carrito: <strong id="total-carrito">0</strong> </p>
            </footer>
        `

        const form = document.getElementById("form");
        form.addEventListener("submit",agregarProdcutoHandler);

        document.getElementById("lista-productos").addEventListener("click",manejarAccionesHandler);

}

const renderProducts = ()=>{
    const lista = document.getElementById("lista-productos");
    const totalCarrito = document.getElementById("total-carrito");
    lista.innerHTML = carrito.productos.map((producto,index)=>`
        <li data-id="${index}">
        ${producto.getInfo()}
        <button class="btn-editar" data-id="${index}">Editar</button>
        <button class="btn-borrar data-id="${index}">Borrar</button>
        </li>
    
    `)
    .join("");
    totalCarrito.textContent= carrito.calculateTotal();

    carrito.saveLocalStorage();
  
};

const manejarAccionesHandler = (event)=>{
    const index = Number(event.target.dataset.id);
    if(event.target.classList.contains("btn-borrar")){
        carrito.deleteProduct(index);
        renderProducts();
    }
    if(event.target.classList.contains("btn-editar")){
        const newCantidad= prompt("Introduce la nueva cantidad ",carrito.productos[index].cantidad);
        if(newCantidad){
            carrito.editProduct(index,Number(newCantidad));
            renderProducts();
        }
        
    }
}




renderCarrito();
