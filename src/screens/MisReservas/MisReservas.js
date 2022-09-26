import { useState, useEffect } from "react";
import { getReserveByUser } from "../../server/server";
import useWindowWidth from "../../hooks/customeHookResize";
import "./MisReservas.css";
import Header from "../../layout/Header/Header";
import Body from "../../layout/Body/Body";
import CardMisReservas from "../../components/Cards/CardMisReservas";
import Footer from "../../layout/Footer/Footer";
import BusquedaLoader from "../../layout/skeletons/BusquedaLoader";
import BusquedaLoaderTablet from "../../layout/skeletons/BusquedaLoaderTablet";
import BusquedaLoaderMobile from "../../layout/skeletons/BusquedaLoaderMobile";
import SinResultado from "../SinResultado/SinResultado";

const MisReservas = () => {
	const [dataServer, setDataServer] = useState(null);
	const [loading, setLoading] = useState(true);
	const { width } = useWindowWidth();

	useEffect(() => {
		getReserveByUser().then(result => {
			setDataServer(result);
			setTimeout(() => {
				setLoading(false);
			}, 1000);
		});
	}, []);

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
							<div className='misreservas'>
								<h2>Mis Reservas</h2>
								<ul className='reservas__list'>
									{dataServer.map((p, idx) => {
										return (
											<li key={idx.toString()}>
												<CardMisReservas data={p} />
											</li>
										);
									})}
								</ul>
							</div>
						</Body>
						<Footer />
					</>
				) : (
					<SinResultado
						titulo={"Aún no has efectuado ninguna reserva"}
						boton={"Volver a la página principal"}
					/>
				))}
		</>
	);
};

export default MisReservas;
