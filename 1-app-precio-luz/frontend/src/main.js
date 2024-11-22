import { createLoadButtoom } from "./components/button/button";
import { createSpinner } from "./components/spinner/spinner";
import { getData } from "./helpers/getDataPrices";
// Declaracion de variables


//Declaracion de funciones

const handleClick = () =>{
    alert("Boton pulsado")
}

document.addEventListener("DOMContentLoaded",()=>{
    const app = document.getElementById("app");
    const loadPricesBtn = createLoadButtoom();
    app.appendChild(loadPricesBtn);

    loadPricesBtn.addEventListener('click',handleClick);
    // const spinner = createSpinner();
    // app.appendChild(spinner);

});
getData()
.then(data => console.log(data))
.catch(error => console.log(error));