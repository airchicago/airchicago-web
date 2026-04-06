import { CalendarEvent } from "../blocks/CalendarEvent/CalendarEvent";
import calendarDefinition from "../../assets/json/calendar-definition.json";

function Calendar() {
    const now = new Date();
    const currentYear = now.getFullYear();

    console.log(calendarDefinition);

    const thisYearsEvents = calendarDefinition[currentYear];
    const upcomingEvents = Object.keys(thisYearsEvents).filter(unixDateTime => now.getTime() < unixDateTime).map(key => thisYearsEvents[key]);

    return (
        <div>
            <h2 id='calendar-title'>Upcoming Events</h2>
            <ul aria-describedby='calendar-title'>
                {upcomingEvents.map((event) => (
                    <CalendarEvent event={event} />
                ))}
            </ul>
        </div>
    )
}

export default Calendar;
