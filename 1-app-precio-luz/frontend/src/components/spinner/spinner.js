/**
 * Spinner con tres estados :
 * Crear spinner
 * Mostrar spinner
 * Ocultar spinner
 */

export const createSpinner = ()=>{
    //Crear spinner en el DOM
    const spinner = document.createElement("div");
    spinner.id = "spinner";
    spinner.classList.add("hidden", "spinner");
    spinner.textContent = "Cargando...";

    return spinner;
}

export const showSpinner = ()=>{
    const spinner = document.getElementById("spinner");
    spinner.classList.remove("hidden");
}

export const hideSpinner = ()=>{
    const spinner = document.getElementById("spinner");
    spinner.classList.add("hidden");
}