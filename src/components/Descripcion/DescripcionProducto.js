import "./DescripcionProducto.css";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowBack } from "../../assets/Icons/ArrowBack.svg";

const DescripcionProducto = ({ data }) => {
	return (
		<div className='descripcionProducto'>
			<div className='descripcionProducto__div1'>
				<h3 className='Heading-4'>{data.categoria.titulo}</h3>
				<h3 className='Heading-1 '> {data.nombre}</h3>
			</div>
			<div className='DescripcionProducto__div2'>
				<Link to='/'>
					<ArrowBack style={{ marginRight: "20px" }} />
				</Link>
			</div>
		</div>
	);
};

export default DescripcionProducto;
