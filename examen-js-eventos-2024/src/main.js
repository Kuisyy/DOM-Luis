/**
 * @author: Luis Maldonado Hernández
 */

import { EventForm } from "./components/EventForm.js";
import { EventManager } from "./classes/EventManager.js";
import { NavBar } from "./components/NavBar.js";
import { EventList } from "./components/EventList.js";

const VITE_URL_API = import.meta.env.VITE_URL_API;
const VITE_PORT = import.meta.env.VITE_PORT;
const apiURL = `${VITE_URL_API}${VITE_PORT}/events`;

const eventManager = new EventManager(apiURL);
const navBar = new NavBar("Luis Maldonado","12/12/2024");
const eventForm = new EventForm(eventManager);
const eventList = new EventList(eventManager);

async function init() {
    try {
        navBar.renderNavBar();
        eventForm.renderForm();
    
        await eventManager.fetchEvents();
        eventList.renderList();

        navBar.toggleButtonForm.addEventListener('click',()=>{
            eventForm.toggleForm();
        });

    } catch (error) {
        throw new Error("Error: ",error);
        
    }
    
}

init();