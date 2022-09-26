import "./SinResultado.css";
import Button from "../../components/Button/Button";
import Footer from "../../layout/Footer/Footer";
import { useNavigate } from "react-router-dom";

const SinResultado = ({titulo,boton}) => {
	const navigate = useNavigate();

	return (
		<>
			<div className='sinreservas'>
				<h2>{titulo}</h2>
				<div className='sinreservas__button'>
					<Button
						onClick={() =>
							navigate(`/`)
						}>
						{boton}
					</Button>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default SinResultado;
