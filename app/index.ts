import Clock from "./Clock";
import document from "document";
import DateDisplay from "./DateDisplay";
import { display } from "display";

const timeElement = document.getElementById("time") as TextElement;
const dateElement = document.getElementById("date") as TextElement;
const dayOfTheWeekElement = document.getElementById("dayOfTheWeek") as TextElement; 

const clock = new Clock();
const dateDisplay = new DateDisplay();

clock.clockCallback = (t) => timeElement.text = t;
dateDisplay.dateCallback = (t) => dateElement.text = t;
dateDisplay.dayOfTheWeekCallback = (t) => dayOfTheWeekElement.text = t;

