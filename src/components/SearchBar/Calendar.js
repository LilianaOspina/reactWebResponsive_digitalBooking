import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import Button from "../Button/Button";
import { useState } from "react";


const Calendar = ({dateSelected}) => {
    const [dateValue, setDateValue] = useState([]);

  return (
    <>
      <div className="search-calendar double-calendar">
        <ReactCalendar
          showDoubleView
          formatMonthYear={(locale, date) => moment(date).format("MMMM")}
          className="calendar-custom"
          formatShortWeekday={(locale, date) => moment(date).format("dd")[0]}
          selectRange
          minDate={new Date()}
          onChange={(value, event) => setDateValue(value)}
        />
        <Button onClick={() => dateSelected(dateValue)}>Aplicar</Button>
      </div>

      <div className="search-calendar simple-calendar">
        <ReactCalendar
          formatMonthYear={(locale, date) => moment(date).format("MMMM")}
          className="calendar-custom"
          formatShortWeekday={(locale, date) => moment(date).format("dd")[0]}
          selectRange
          minDate={new Date()}
          onChange={(value, event) => setDateValue(value)}
        />
        <Button onClick={() => dateSelected(dateValue)}>Aplicar</Button>
      </div>
    </>
  );
};

export default Calendar;
