import "./CalendarioProd.css";
import Calendar from "react-calendar";
import Button from "../Button/Button";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { getReservasPorProducto } from "../../server/server";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function CalendarioProd({ id }) {
  const [reservas, setReservas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getReservasPorProducto(id).then((result) => setReservas(result));
  }, []);

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
    <div className="calendar-prod">
      <div className="calendar-prod-container">
        <p className="Heading-1">Fechas disponibles</p>
        <div className="calendar-group">
          <Calendar
            showDoubleView
            formatMonthYear={(locale, date) => moment(date).format("MMMM")}
            className="calendar-custom"
            formatShortWeekday={(locale, date) => moment(date).format("dd")[0]}
            minDate={new Date()}
            tileClassName={({ date }) => {
              return cajita.find((fecha) => fecha.isSame(date)) ||
                moment().isAfter(date)
                ? null
                : "disponible";
            }}
            //  onChange={(value, event) => setDateValue(value)}
          />
          <Calendar
            // showDoubleView
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

            // onChange={(value, event) => setDateValue(value)}
          />

          <div className="section-button">
            <div>
              <p className="Heading-3">
                Agregá tus fechas de viaje para obtener precios exactos
              </p>
              <Button
                onClick={() => {
                  if (sessionStorage.getItem("token")) {
                    navigate(`/producto/${id}/reserva`);
                  } else {
                    navigate(`/login`);
                    Swal.fire("Debes estar logueado para hacer reservas");
                  }
                }}
                size="full"
              >
                Iniciar reserva
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarioProd;
