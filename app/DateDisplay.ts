import clock from "clock";

export class DateDisplay {
    private days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    public dateCallback: (text: string) => void;
    public dayOfTheWeekCallback: (text: string) => void; 

    constructor() {
        clock.addEventListener("tick", this.updateDate);
        clock.addEventListener("tick", this.updateDayOfTheWeek);
    }

    private updateDate = () => {
        if (!this.dateCallback) {
            return;
        }

        const currDate = new Date();
        const day = currDate.getDate();
        const tidyDay = (day) => day < 10 ? `0${day}` : day;
        const month = currDate.getMonth();
        const tidyMonth = (month) => month < 10 ? `0${month}` : month;
        const date = `${tidyDay(day)}.${tidyMonth(month + 1)}`;
        this.dateCallback(date);
    }

    private updateDayOfTheWeek = () => {
        if (!this.dayOfTheWeekCallback) {
            return;
        }

        const currDate = new Date();
        const today = currDate.getDay();
        const dayOfTheWeek = `${this.days[today]}`;
        this.dayOfTheWeekCallback(dayOfTheWeek);
    }
}
export default DateDisplay;