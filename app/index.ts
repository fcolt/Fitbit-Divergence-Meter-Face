import Clock from "./Clock";
import document, { DocumentModule } from "document";
import DateDisplay from "./DateDisplay";
import { display } from "display";

const timeElement = document.getElementById("divergence_meter").children.slice(2,8) as ImageElement[]; // keep only the last 6 nixie tubes for time
const dateElement = document.getElementById("date") as ImageElement;
const dayOfTheWeekElement = document.getElementById("dayOfTheWeek") as ImageElement; 

const clock = new Clock();
const dateDisplay = new DateDisplay();

const clockMap = {

};

clock.clockCallback = (t) => {
    t = t.replace(/:/g,''); 
    for (let i = 0; i < timeElement.length; i++) {
        timeElement[i].href = `../resources/Nixie tubes/${t[i]}.png`;
    }    
};
//dateDisplay.dateCallback = (t) => dateElement.text = t;
//dateDisplay.dayOfTheWeekCallback = (t) => dayOfTheWeekElement.text = t;

