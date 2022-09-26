import "./SearchBar.css";
import "./Calendar.css"
import Button from "../Button/Button";
import calendar from "../../assets/calendar.svg";
import Calendar from "./Calendar";
// moment permite dar formato a las fechas
import moment from "moment";
import "moment/locale/es";
import Localizador from "./Localizador";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

moment.locale("es");

const SearchBar = () => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const navigate = useNavigate();

  const [dateValue, setDateValue] = useState([]);
  const [idCiudad, setIdCiudad] = useState([]);

  const fechaInicio = dateValue[0];
  const fechaFin = dateValue[1];

  // const check_in = moment(fechaInicio).format('YYYY-MM-DD')
  const check_in = fechaInicio !== undefined ? moment(fechaInicio).format('YYYY-MM-DD') : "" ;
  const check_out = fechaFin !== undefined ? moment(fechaFin).format('YYYY-MM-DD') : "" ;

  let dateFormat = "";

  if (dateValue.length !== 0) {
    dateFormat =
      moment(fechaInicio).format("DD [de] MMM") +
      " - " +
      moment(fechaFin).format("DD [de] MMM");
  }

  return (
    <>
      <div className="SearchBar-container">
        <h1>Busca oferta en hoteles, casas y mucho más</h1>
        <div className="SearchBar-inputs">
          <div className="SearchBar-block1">
            {/* render condicional: si calendarOpen es true, muestra el calendario doble para desktop y tablet */}
        {calendarOpen ? (
          <Calendar
            dateSelected={(date) => {
              setDateValue(date);
              setCalendarOpen(false);
            }}
          />
        ) : null}
            <Localizador onChange={(idCiudad) => setIdCiudad(idCiudad)} />
            <div className="searchBar-calendar">
              <img alt="calendario" src={calendar} />
              <input
                onClick={() => setCalendarOpen(true)}
                className="Text-1"
                readOnly
                placeholder="Check in - Check out"
                value={dateFormat}
              />
            </div>
          </div>
          <div className="SearchBar-block2">
            <Button
              onClick={() => {
                navigate(
                  "/resultadobusqueda?id=" +
                    idCiudad +
                    "&" +
                    "check_in=" +
                    check_in +
                    "&" +
                    "check_out=" +
                    check_out
                );
              }}
            >
              Buscar
            </Button>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default SearchBar;
