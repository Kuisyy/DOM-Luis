/**
 * @author: Luis Maldonado Hernández
 */

/**
 * @description: Clase que representa un evento individual, con una funcion para actualizar la fecha
 * 
 */
export class Event{
    #title;
    #date;

    constructor(title,date,organizer) {
        this.#title= title;
        this.#date=date;
        this.organizer = organizer;
        
    }

    updateDate(newDate){
        this.#date= newDate;
    }

    getDetails(){
        return {
            id : this.id,
            title: this.#title,
            date: this.#date,
            organizer: this.organizer,
          };
    }

}