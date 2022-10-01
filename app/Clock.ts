import clock from "clock";
import { preferences } from "user-settings";

export class Clock {
    public clockCallback: (text: string) => void;

    constructor() {
        clock.granularity = "seconds";
        // Update the clock every tick event
        clock.addEventListener("tick", this.updateClock);
    }

    private updateClock = () => {
        if (!this.clockCallback) {
            return;
        }

        const date = new Date();
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        let amPm = "";
        const zeroPad = ((n: number) => (n < 10) ? "0" + n : n);
        const twelveHour = preferences.clockDisplay === "12h";

        if (twelveHour)  { 
            amPm = hours > 12 ? "PM" : "AM" ;
            hours = hours % 12 || 12;
        } 

        const time = `${zeroPad(hours)}:${zeroPad(minutes)}:${zeroPad(seconds)}${amPm}`;
        this.clockCallback(time);
    }
}

export default Clock;