import { useState, useEffect } from "react";
import { useParams } from "react-router";
import useWindowWidth from "../../hooks/customeHookResize";
import { getProductsByCategories } from "../../server/server";
import "./ResultadosBusqueda.css";
import Header from "../../layout/Header/Header";
import Body from "../../layout/Body/Body";
import Footer from "../../layout/Footer/Footer";
import ProductList from "../../components/Listados/ProductsList";
import BusquedaLoader from "../../layout/skeletons/BusquedaLoader";
import BusquedaLoaderTablet from "../../layout/skeletons/BusquedaLoaderTablet";
import BusquedaLoaderMobile from "../../layout/skeletons/BusquedaLoaderMobile";
import SinResultado from "../SinResultado/SinResultado";

const ResultadoPorCategoria = () => {
	const [dataServer, setDataServer] = useState(null);
	const [loading, setLoading] = useState(true);

	const { id } = useParams();
	const { width } = useWindowWidth();

	useEffect(() => {
		getProductsByCategories(id).then(result => {
			setDataServer(result);
			setTimeout(() => {
				setLoading(false);
			}, 1000);
		});
	}, [id]);

	return (
		<>
			<Header />
			{loading && width > 720 && <BusquedaLoader />}
			{loading && width <= 720 && width > 420 && <BusquedaLoaderTablet />}
			{loading && width <= 420 && <BusquedaLoaderMobile />}
			{!loading &&
				(dataServer !== null ? (
					<>
						<Body>
							<div className='result__categories'>
								<h2>Resultado de búsqueda</h2>
								<ProductList data={dataServer} />
							</div>
						</Body>
						<Footer />
					</>
				) : (
					<SinResultado
						titulo='no hay productos registrados'
						boton='Recargar'
					/>
				))}
		</>
	);
};

export default ResultadoPorCategoria;
