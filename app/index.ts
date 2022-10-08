import Clock from "./Clock";
import document, { DocumentModule } from "document";
import DateDisplay from "./DateDisplay";
import { display } from "display";

const timeElement = document.getElementById("divergence_meter").children.slice(2,8) as ImageElement[]; // keep only the last 6 nixie tubes for time
const dateElement = document.getElementById("date").children as ImageElement[];
const dayOfTheWeekElement = document.getElementById("dayOfTheWeek").children as ImageElement[]; 

const clock = new Clock();
const dateDisplay = new DateDisplay();

clock.clockCallback = (t) => {
    t = t.replace(/:/g,''); 
    for (let i = 0; i < timeElement.length; i++) {
        timeElement[i].href = `../resources/Nixie tubes/${t[i]}.png`;
    }    
};
dateDisplay.dateCallback = (t) => {
    for (let i = 0; i < dateElement.length; i++) {
        dateElement[i].href = t[i] === '.' 
            ? '../resources/Nixie tubes/dot.png' 
            : `../resources/Nixie tubes/${t[i]}.png`;
    }
};
dateDisplay.dayOfTheWeekCallback = (t) => {
    for (let i = 0; i < dayOfTheWeekElement.length; i++) {
        dayOfTheWeekElement[i].href = `../resources/Characters/${t[i]}.png`;
    }    
};

