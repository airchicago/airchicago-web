import { formatArrayToString } from "../../../utils/formatter"
import './CalendarEvent.css';

export const CalendarEvent = ({ event: {eventName, date, organizers, time, location, notes } }) => {
    return (
        <li className='calendarevent'>
            <h3 className='calendarevent-title'>{eventName}</h3>
            <p className='calendarevent-date'>{date}</p>
            <p className='calendarevent-time'>{time}</p>
            <p className='calendarEvent-location'>{location}</p>
            {notes &&
                <p className='calendarEvent-notes'>{notes}</p>
            }
            <p className='calendarevent-organizers'>Organized by {formatArrayToString(organizers)}</p>
        </li>
    )
}