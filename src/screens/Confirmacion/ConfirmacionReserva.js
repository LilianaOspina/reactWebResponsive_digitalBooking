import Success from "../../assets/Icons/Success.svg";
import Button from "../../components/Button/Button";
import "./Confirmacion.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";

    
const ConfirmacionReserva = () => {
    const navigate = useNavigate();
    
    function handleClick(){

        navigate("/");
    }
    return ( 
    <>
    <Header/>
    <div className="Confirmacion">
        <div className="ConfirmacionContainer">
   
            <img src={Success}/>
            <h3 className="ConfirmTitulo Heading-3"> Muchas Gracias!</h3>
            <h2 className="ConfirmSubTitulo Heading-2 ">Su reserva se ha realizado con éxito</h2>
            <Button  variant="primary"onClick={handleClick} > ok</Button>

        </div>
    </div>
    <div className="FooterConfirmacion"> <Footer /></div>
   
    </>
 )
}
export default ConfirmacionReserva;