/**
 * @author: Luis Maldonado Hernández
 */

import { Event } from "./Event.js";


export class EventManager {
    #events;
    #apiUrl;
    
    constructor(apiUrl) {
        this.#events= [];
        this.#apiUrl= apiUrl;
    };

    async fetchEvents(){
        try {

        const responseFetch = await fetch(this.#apiUrl);

        if(!responseFetch.ok){
            throw new Error("Error en el fetch con la API");
        };

        const data = await responseFetch.json();

        this.#events = data.map(event=> new Event(event.title,event.date,event.organizer));

        } catch (error) {
            throw new Error("Error: ",error);
            
        };
        
    }

    /**
     * @description: Añadir a la API y al array un nuevo objeto event;
     * @param {Object} event 
     */
    async addEvent(event){
        try {
            const responseEvent = await fetch(this.#apiUrl,{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(event.getDetails()),
            });
            
            if(!responseEvent.ok){
                throw new Error("Error añadiendo evento en la API");
            }
            this.#events.push(event);

            console.log("Evento insertado correctamente");
        } catch (error) {
            throw new Error("Error: ",error);  
        }
       
    }

    async deleteEvent(eventId){
        try {
            const responseDelete = await fetch(`${this.#apiUrl}/${eventId}`,{
                method: 'DELETE',
            });
            
            if(!responseDelete.ok){
                throw new Error("Error borrando evento en la API");
            }
            this.#events = this.#events.filter(event => event.id !== eventId);

            console.log("Evento borrado correctamente");
        } catch (error) {
            throw new Error("Error: ",error);
            
        }
       
    }

    markAsImportant(eventId){
        const importanEvents =  JSON.parse(localStorage.getItem('importantEvents')) || [];

        if(!importanEvents.includes(eventId)){
            importanEvents.push(eventId);
            localStorage.setItem("importantEvents", JSON.stringify(importanEvents));
        };
    }

    getImportantEvents(){
        return JSON.parse(localStorage.getItem('importantEvents'))|| [];
    }

    getEvents(){
        return this.#events;
    }
}