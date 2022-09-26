import { useState, useEffect } from "react";
import "./ResultadosBusqueda.css";
import { useSearchParams } from "react-router-dom";
import useWindowWidth from "../../hooks/customeHookResize";
import Body from "../../layout/Body/Body";
import Footer from "../../layout/Footer/Footer";
import BusquedaLoader from "../../layout/skeletons/BusquedaLoader";
import BusquedaLoaderTablet from "../../layout/skeletons/BusquedaLoaderTablet";
import BusquedaLoaderMobile from "../../layout/skeletons/BusquedaLoaderMobile";
import SinResultado from "../SinResultado/SinResultado";

import {
	getProductsPorCiudad,
	getProductsPorCiudadEntreFechas,
	getProductsPorFechas,
} from "../../server/server";
import Header from "../../layout/Header/Header";
import ProductList from "../../components/Listados/ProductsList";

const ResultadoBusqueda = () => {
	const [loading, setLoading] = useState(true);

	const [searchParams] = useSearchParams();
	const { width } = useWindowWidth();

	const id = searchParams.get("id");
	const check_in = searchParams.get("check_in");
	const check_out = searchParams.get("check_out");

	const [dataServer, setDataServer] = useState([]);

	useEffect(() => {
		const onFail = () => {
			setDataServer([])
			setLoading(false)
		}

			if (id !== "" && check_in !== "" && check_out !== "") {
				//entra por aquí si el cliente elije ciudad y fechas de búsqueda
				getProductsPorCiudadEntreFechas(id, check_in, check_out).then(
					result => {
						setDataServer(result);
						setTimeout(() => {
							setLoading(false);
						}, 1000);
					}
				).catch(onFail);
			} else if (id !== "" && check_in === "" && check_out === "") {
				//entra por aquí si el cliente elije sólo ciudad en la búsqueda
				getProductsPorCiudad(id).then(result => {
					setDataServer(result);
					setTimeout(() => {
						setLoading(false);
					}, 1000);
				}).catch(onFail);
			} else {
				//entra por aquí si el cliente elije sólo fechas en la búsqueda
				getProductsPorFechas(check_in, check_out).then(result => {
					setDataServer(result);
					setTimeout(() => {
						setLoading(false);
					}, 1000);
				}).catch(onFail);
			}
		
	}, [id, check_in, check_out]);

	return (
		<>
			<Header />
			{loading && width > 720 && <BusquedaLoader />}
			{loading && width <= 720 && width > 420 && <BusquedaLoaderTablet />}
			{loading && width <= 420 && <BusquedaLoaderMobile />}
			{!loading &&
				(dataServer.length !== 0 ? (
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
						titulo='no se encontraron resultados'
						boton='Volver'
					/>
				))}
		</>
	);
};

export default ResultadoBusqueda;
