import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Producto.css";
import DescripcionProducto from "../../components/Descripcion/DescripcionProducto";
import Ubicacion from "../../components/ComponentesProducto/Ubicacion/Ubicacion";
import Fotos from "../../components/ComponentesProducto/SeccionFotos/Fotos";
import Detalle from "../../components/ComponentesProducto/Detalle/Detalle";
import CalendarioProd from "../../components/Calendarios/CalendarioProd";
import Mapa from "../../components/ComponentesProducto/Mapa/Mapa";
import DescripcionPoliticas from "../../components/Descripcion/DescripcionPoliticas";
import HeaderUser from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import { getProductsId } from "../../server/server";
import useWindowWidth from "../../hooks/customeHookResize";
import ProductLoader from "../../layout/skeletons/ProductLoader";
import ProductLoaderTablet from "../../layout/skeletons/ProductLoaderTablet";
import ProductLoaderMobile from "../../layout/skeletons/ProductLoaderMobile";
import SinResultado from "../SinResultado/SinResultado";


function Producto() {
  const [dataServer, setDataServer] = useState(null);
  	const [loading, setLoading] = useState(true);
	const { width } = useWindowWidth();


	const { id } = useParams();

	useEffect(() => {
		getProductsId(id).then(result => {
			setDataServer(result);
			setTimeout(() => {
				setLoading(false);
			}, 1000);
		});
	}, [id]);

	return (
		<div className='Producto'>
      <HeaderUser />
			{loading && width > 720 && <ProductLoader />}
			{loading && width <= 720 && width > 420 && <ProductLoaderTablet />}
			{loading && width <= 420 && <ProductLoaderMobile />}
			{!loading &&
				(dataServer !== null ? (
					<>
						<DescripcionProducto data={dataServer} />
						<Ubicacion data={dataServer} />
						<Fotos data={dataServer} />
						<Detalle data={dataServer} />
						<CalendarioProd id={dataServer.id} />
						<Mapa data={dataServer} />
						<DescripcionPoliticas data={dataServer} />
						<Footer />
					</>
				) : (
					<SinResultado
						titulo='Este producto no existe'
						boton='Volver a la página principal'
					/>
				))}
		</div>
	);
}

export default Producto;
