/**
 * @author: Luis Maldonado Hernández
 */

/**
 * @description: 
 */
export class NavBar{

    constructor(nombre,fecha) {
        this.nombre = nombre;
        this.fecha= fecha;

        this.appContainer = document.getElementById('app');
    }

    renderNavBar(){
        const navBar = document.createElement('nav');
        navBar.classList.add('navBar');

        const title = document.createElement('h2');
        title.textContent= "Examen JavaScript 2024";
        navBar.appendChild(title);

        const info = document.createElement('p');
        info.textContent =`${this.nombre},${this.fecha}`;
        navBar.appendChild(info);

        const toggleButtonForm = document.createElement('button');
        toggleButtonForm.setAttribute("id","toggleButtonForm");
        toggleButtonForm.textContent="Mostrar Formulario";
        navBar.appendChild(toggleButtonForm);


        this.appContainer.appendChild(navBar);

        this.toggleButtonForm = document.getElementById("toggleButtonForm");
    }
}