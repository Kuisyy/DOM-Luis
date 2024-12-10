export class ProductList{
    #products;
    #apiurl;
    constructor(apiurl){
        this.#apiurl = apiurl;
        this.#products = [];

        //Donde lo hacemos -->
        this.appContainer = document.getElementById('app');
    }
     //metodo privado para obtener los datos
    async #fetchProducts(){
        try {
            const response =await fetch(this.#apiurl);
            if(!response.ok){
                throw new Error("Error en la API");
            };

            const data = await response.json();
            return data;
            
        } catch (error) {
            throw new Error("Error en fetch data: ",error);
        }      
    }

    renderError(message){
        this.appContainer.innerHTML=`
        <div class="error">
        <p>Error:${message}</p>
        </div>
    `
    }

    #renderProducts(){
        if(this.#products.length===0){
            this.renderError("No hay productos que pintar");
        };
        
        const productsHTML= this.#products.map((product,index)=>{
            return `
                <div class="product-card" data-id="${index}">
                    <h3>${product.name}</h3>
                    <p>Precio:${product.price}</p>
                    <p>Description:${product.description}</p>
                    <p>Categoria:${product.category}</p>
                </div>
            `
        }).join(""); // Vale el map devuelve array pero al ponerle el join se devuelve un string

        this.appContainer.innerHTML=`
            <div class="product-list">
                ${productsHTML}
            </div>
        `;

        const listaProductos = document.querySelector(".product-list");

        listaProductos.addEventListener("click", (e) => {
            if (e.target.closest('.product-card')) {
                const productCard = e.target.closest('.product-card');
                productCard.style.backgroundColor = productCard.style.backgroundColor === 'green' ? '' : 'green'; // Cambia el color al hacer clic
            }
        });
    }

    //Getter
    get apiurl(){
        return this.#products;
    }

    #validateData(product){
        const {name,price,description,category}= product;
        if(!name||!price||!description||!category){
            return false;
        }
        return true;
    }

    set addProduct(product){
        if(this.#validateData(product)){
            //fetcheamos en la api el producto
            

        }else{
            throw new Error("Datos del producto incorrectos");
            
        }
    }

    //metodo para (put,delete,update,post) productos
    async #opFetchProductData(product,method){
        try {
            switch (method) {
                case "post":
                    const responsePost = await fetch(this.#apiurl,{
                        method:"POST",
                        body: JSON.stringify(product),
                        headers:{
                            "Content-Type":"applicacation/json",
                        }
                    });
                    if(!responsePost.ok){
                        throw new Error("Error insertando en la API");
                    }
                    console.log(product," Insertado correctamente");
                break;

                case "delete":
                    const id = product.id;
                    const responseDelete = await fetch(`${this.#apiurl}/${id}`,{
                        method: "DELETE"
                    });

                    if(!responseDelete.ok){
                        throw new Error("Error en la API al obtener productos");
                    }
                    console.log("Borrado correctamente");
                break;

                case "put":
                    const responsePut = await fetch(this.#apiurl,{
                        method:"PATCH",
                        body: JSON.stringify(product),
                        headers:{
                            "Content-Type":"applicacation/json",
                        }
                    });

                    if(!responsePut.ok){
                        throw new Error("Error updateadno la API");
                    }

                    console.log("Updateada correctamente");
                break;

                case "patch":
                    
                break;

                case "get":
                const responseGet = await fetch(this.#apiurl);
                if(!responseGet.ok){
                    throw new Error("Error en la API al obtener productos");
                }
                return await responseGet.json();
                break;

                default:
                
                break;
            }
        } catch (error) {
            throw new Error("Error: ",error);
            
        }
    }

    async init(){
        try {
            this.#products = await this.#fetchProducts();
            this.#renderProducts();
        } catch (error) {
            this.renderError(error)
        }
    }
}