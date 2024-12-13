export class EventList{
    constructor(eventManager) {
        this.eventManager = eventManager;
        this.appContainer = document.getElementById("app");
    }

    renderList(){
        const events = this.eventManager.getEvents();

        const divList = document.createElement("div");
        divList.setAttribute("id","eventList");

        events.forEach((event,index) => {
            const card = document.createElement("div");
            card.setAttribute("class","card");

            card.innerHTML =`
            <h3>${event.getDetails().title}</h3>
            <p>${event.getDetails().date}</p>
            <p>${event.organizer}</p>
            <button class="delete" data-id="${index}">Borrar</button>           
            <button class="markAsImportant" data-id="${index}">Marcar como importante</button>
            `;

            divList.appendChild(card);
        });

        this.appContainer.appendChild(divList);

        const deleteButtons = divList.querySelectorAll('.delete');
        deleteButtons.forEach(button => {
            button.addEventListener('click', (event) => this.deleteHandler(event));
        });
    };

    async deleteHandler(event){
        const eventId = event.target.getAttribute('data-id');
        await this.eventManager.deleteEvent(eventId);
        this.renderList();  
    }
}
