import "./Titulo.css";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowBack } from "../../../assets/Icons/ArrowBack.svg";

const Titulo = () => {
  
  return (
    <>
    <div className='tituloAdmin'>
			<div className='div_1'>
            <h3 className='Heading-1'>Administración</h3>
			</div>
			<div className='div2'>
				<Link to='/'>
					<ArrowBack />
				</Link>
			</div>
		</div>
    </>
  );
};
export default Titulo;