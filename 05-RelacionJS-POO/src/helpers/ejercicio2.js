export function Producto({ tipo, nombre, precio, stock, dimensiones }) {
    const productoBase = {
        nombre,
        precio,
        mostrarInfo() {
            return `Producto: ${this.nombre}, Precio: ${this.precio} €, Stock: ${this.stock}`;
        }
    };

    switch (tipo) {
        case "ProductoFísico":
            return {
                ...productoBase,
                stock,
                dimensiones,
                actualizarStock(cantidad) {
                    this.stock += cantidad;
                    console.log(`Stock actualizado. Nuevo stock: ${this.stock}`);
                },
                mostrarInfo() {
                    return `${productoBase.mostrarInfo.call(this)}, Dimensiones: ${JSON.stringify(this.dimensiones)}`;
                }
            };

        case "ProductoDigital":
            return {
                ...productoBase,
                stock: "N/A",
                actualizarStock() {
                    console.log("Este producto es digital y no tiene stock.");
                },
                mostrarInfo() {
                    return `${productoBase.mostrarInfo.call(this)} (Producto digital)`;
                }
            };

        default:
            throw new Error("Tipo de producto no soportado.");
    }
}