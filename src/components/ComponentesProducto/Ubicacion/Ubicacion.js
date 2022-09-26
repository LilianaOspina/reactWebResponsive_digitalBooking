import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Location } from "../../../assets/Icons/Location.svg";
import { ReactComponent as StarOn } from "../../../assets/Icons/StarOn.svg";
import { ReactComponent as StarOff } from "../../../assets/Icons/StarOff.svg";

function Ubicacion({ data }) {
  return (
    <div className="Ubicacion">
      <div className="Left" style={{ flexDirection: "row" }}>
        <Location className="Location" />
        <div>
          <p className="LocationText Text-1">
            {data.ciudad.nombre}, {data.ciudad.pais}
            {/* Buenos Aires, Ciudad Autónoma de Buenos Aires, Argentina */}
          </p>
          <p className="LocationText Text-1 HideMobile">A 940 m del centro</p>
        </div>
      </div>
      <div className="Right">
        <div className="Left2">
          <p className="Heading-4"> Muy Bueno </p>
          <div>
            <StarOn />
            <StarOn />
            <StarOn />
            <StarOn />
            <StarOff />
          </div>
        </div>
        <div className="Right2">
          <h3 className="Heading-2"> 8</h3>
        </div>
      </div>
    </div>
  );
}

export default Ubicacion;
