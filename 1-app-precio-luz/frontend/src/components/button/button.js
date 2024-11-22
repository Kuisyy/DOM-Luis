/**
 * LoadButton
 */

export const createLoadButtoom= ()=>{
    const loadButtton = document.createElement("button");
    loadButtton.id = "load-prices-btn";
    loadButtton.classList.add("load-btn") ;
    loadButtton.textContent = "Cargar precios de la luz";

    return loadButtton;
 }