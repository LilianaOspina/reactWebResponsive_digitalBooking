import React, { useState, useEffect } from "react";
import "./Reserva.css";
import { useParams } from "react-router";
import { getProductsId } from "../../server/server";
import useWindowWidth from "../../hooks/customeHookResize";
import Header from "../../layout/Header/Header";
import DescripcionProducto from "../../components/Descripcion/DescripcionProducto";
import FormularioReserva from "../../components/Formularios/FormularioReserva";
import CalendarioReserva from "../../components/Calendarios/CalendarioReserva";
import FormularioHorario from "../../components/Formularios/FormularioHorario";
import CardReserva from "../../components/Cards/CardReserva";
import DescripcionPoliticas from "../../components/Descripcion/DescripcionPoliticas";
import Footer from "../../layout/Footer/Footer";
import Body from "../../layout/Body/Body";
import ReservaLoader from "../../layout/skeletons/ReservaLoader";
import ReservaLoaderTablet from "../../layout/skeletons/ReservaLoaderTablet";
import BusquedaLoaderMobile from "../../layout/skeletons/BusquedaLoaderMobile";
import SinResultado from "../SinResultado/SinResultado";


const Reserva = () => {
	const [dataServer, setDataServer] = useState(null);
	const [check_in_out, setCheck_in_out] = useState([null, null]);
	const [horario, setHorario] = useState(null)
	const { id } = useParams();
		const [loading, setLoading] = useState(true);
		const { width } = useWindowWidth();


	useEffect(() => {
		getProductsId(id).then(result => {
			setDataServer(result);
			setTimeout(() => {
				setLoading(false);
			}, 1000);
		});
	}, [id]);

	return (
		<>
			<Header />
			{loading && width > 720 && <ReservaLoader />}
			{loading && width <= 720 && width > 420 && <ReservaLoaderTablet />}
			{loading && width <= 420 && <BusquedaLoaderMobile />}
			{!loading &&
				(dataServer !== null ? (
					<>
						<Body>
							{/* {dataServer && ( */}
							<DescripcionProducto data={dataServer} />
							{/* )} */}
							<div className='reserva'>
								<section className='reserva__check'>
									<FormularioReserva />
									{/* {dataServer && ( */}
									<CalendarioReserva
										idProducto={dataServer.id}
										setCheck_in_out={setCheck_in_out}
									/>
									{/* )} */}
									<FormularioHorario
										setHorario={setHorario}
									/>
								</section>
								<section className='reserva__detail'>
									{/* {dataServer && ( */}
									<CardReserva
										horario={horario}
										data={dataServer}
										check_in_out={check_in_out}
									/>
									{/* )} */}
								</section>
								<DescripcionPoliticas data={dataServer} />
							</div>
						</Body>
						<Footer />
					</>
				) : (
					<SinResultado
						titulo={"Error 404"}
						boton={"Volver a la página principal"}
					/>
				))}
		</>
	);
};

export default Reserva;
