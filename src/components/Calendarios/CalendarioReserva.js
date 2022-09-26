import "./CalendarioReserva.css";
import "../../App.css";
import Calendar from "react-calendar";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { getReservasPorProducto } from "../../server/server";
import { useNavigate } from "react-router-dom";

const CalendarioReserva = ({ idProducto, setCheck_in_out }) => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    getReservasPorProducto(idProducto).then((result) => setReservas(result));
  }, [idProducto]);

  const cajita = []; // contiene objetos Date

  reservas.forEach((reserva) => {
    const checkout = moment(reserva.checkOut);
    let fecha = moment(reserva.checkIn);

    do {
      cajita.push(fecha.clone());
      fecha.add(1, "days");
    } while (fecha.isSameOrBefore(checkout));
  });

  return (
    <div className="calendar-reserva">
      <div className="calendar-reserva-container">
        <p className="Heading-1 texto">Seleccioná tu fecha de reserva</p>
        <div className="calendar-group">
          <Calendar
            showDoubleView
            formatMonthYear={(locale, date) => moment(date).format("MMMM")}
            className="calendar-custom"
            formatShortWeekday={(locale, date) => moment(date).format("dd")[0]}
            selectRange
            minDate={new Date()}
            tileClassName={({ date, ...props }) => {
              const className =
                cajita.find((fecha) => fecha.isSame(date)) ||
                moment().isAfter(date)
                  ? "noDisponible"
                  : null;
              return className;
            }}
            tileDisabled={({ date }) => {
              return (
                cajita.find((fecha) => fecha.isSame(date)) ||
                moment().isSameOrAfter(date)
              );
            }}
            onChange={(value, event) => {
              const invalidRange = document.querySelector(".react-calendar__tile--active.noDisponible")
              if (invalidRange) {
                setCheck_in_out([null, null]);
              } else {
                setCheck_in_out(value);
              }
            }}
          />
          <Calendar
            formatMonthYear={(locale, date) => moment(date).format("MMMM")}
            className="calendar-single-custom"
            formatShortWeekday={(locale, date) => moment(date).format("dd")[0]}
            selectRange
            minDate={new Date()}
            tileClassName={({ date }) => {
              return cajita.find((fecha) => fecha.isSame(date)) ||
                moment().isAfter(date)
                ? null
                : "disponible";
            }}
            tileDisabled={({ date }) => {
              return (
                cajita.find((fecha) => fecha.isSame(date)) ||
                moment().isSameOrBefore(date)
              );
            }}
            onChange={(value, event) => setCheck_in_out(value)}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarioReserva;
