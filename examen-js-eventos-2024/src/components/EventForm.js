/**
 * @author: Luis Maldonado Hernández
 */

import { Event } from "../classes/Event.js";


export class EventForm{
    constructor(eventManager) {
        this.eventManager= eventManager;
        this.formVisible = false;
        this.appContainer = document.getElementById('app');
    }

    renderForm(){
        const divForm = document.createElement('div');
        divForm.setAttribute("id","divForm");
        divForm.setAttribute("style","display:none");


        divForm.innerHTML=
        `
        <form class="form"">
            <label for="title">Titulo del Evento: </label>
            <input type="text" name="title" id="title" required />

            <label for="date">Ingresa tu email: </label>
            <input type="text" name="date" id="date" required />

            <label for="organizer">Ingresa tu nombre: </label>
            <input type="text" name="organizer" id="organizer" required />

            <input type="submit" name="save" value="Guardar" />
        </form>
        `;

        this.appContainer.appendChild(divForm);

        const form = document.querySelector(".form");
        form.addEventListener('submit',(event)=>this.addEventHandler(event));

    ;        
    }

    async addEventHandler(event){
        event.preventDefault();

        const title = document.getElementById("title").value;
        const date = document.getElementById("date").value;
        const organizer = document.getElementById("organizer").value;

        const newEvent = new Event(title,date,organizer);

        if (newEvent){
            try {
                await this.eventManager.addEvent(newEvent);
                console.log("Evento añadido Correctamente");
            } catch (error) {
                throw new Error("Error",error);
                
            }
    
            event.target.reset();
        }
       
    }

    toggleForm(){
        const divForm = document.getElementById("divForm");
        this.formVisible = !this.formVisible;
        divForm.style.display = this.formVisible ? 'block' : 'none';
    }
     

}