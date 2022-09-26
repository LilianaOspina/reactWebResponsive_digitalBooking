import Button from "../Button/Button";
import "./CardReserva.css";
import moment from "moment";
import { useNavigate } from "react-router";
import { ReactComponent as Star } from "../../assets/star.svg";
import { ReactComponent as Loc } from "../../assets/Localizador.svg";
import { crearReserva } from "../../server/server";
import Swal from "sweetalert2";

const CardReserva = ({ data, check_in_out, horario }) => {
  const navigate = useNavigate();
  console.log(horario);
  console.log(check_in_out);

  const [check_in, check_out] = check_in_out;

  const ingreso =
    check_in !== null ? moment(check_in).format("DD/MM/YYYY") : "___/___/____";
  const egreso =
    check_out !== null
      ? moment(check_out).format("DD/MM/YYYY")
      : "___/___/____";

  return (
    <div className="card__reserva">
      <h2>Detalle de la reserva</h2>
      <div className="card__reserva-divs">
        <div className="card__reserva-div1">
          <img src={data.imagenes[0].url} alt="imagen" />
        </div>
        <div className="card__reserva-div2">
          <div className="card__reserva-detalle">
            <h4>{data.categoria.titulo}</h4>
            <h2>{data.nombre}</h2>
            <span className="card__starts">
              <Star className="start__icon" />
              <Star className="start__icon" />
              <Star className="start__icon" />
              <Star className="start__icon" />
              <Star className="start__icon" />
            </span>
            <div className="card__reserva-loc">
              <Loc className="loc__icon" />
              <span className="card__reserva-direccion">{`Av. Colón 1643, ${data.ciudad.nombre}, ${data.ciudad.pais}`}</span>
            </div>
          </div>
          <div className="card__reserva-check">
            <div className="line"></div>
            <div className="card__dates">
              <p className="card__dates-txt">Check in</p>
              <p className="card__dates-date">{ingreso}</p>
            </div>
            <div className="line"></div>
            <div className="card__dates">
              <p className="card__dates-txt">Check out</p>
              <p className="card__dates-date">{egreso}</p>
            </div>
            <div className="line"></div>
          </div>
          <div className="card__reserva-button">
            <Button
              onClick={async () => {
                if (
                  horario === null ||
                  check_in === null ||
                  check_out === null
                ) {
                  Swal.fire(
                    "Fecha de reserva y horario de llegada, son campos obligatorios"
                  );
                } else {
                  try {
                    await crearReserva(
                      moment(check_in).format("yyyy-MM-DD HH:mm:ss"),
                      moment(check_out).format("yyyy-MM-DD HH:mm:ss"),
                      data.id
                    );
                    navigate(`/producto/${data.id}/reserva/confirmacion`);
                  } catch (error) {
                    Swal.fire(
                      "Lamentablemente la reserva no ha podido realizarse. Por favor, intente más tarde"
                    );
                  }
                }
              }}
              size="full"
            >
              Confirmar reserva
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardReserva;
