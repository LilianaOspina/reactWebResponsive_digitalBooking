import React, { useState, useEffect } from "react";
import { getProducts } from "../../server/server";
import "./Home.css";
import Header from "../../layout/Header/Header";
import Body from "../../layout/Body/Body";
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoriesList from "../../components/Listados/CategoriesList";
import ProductsList from "../../components/Listados/ProductsList";
import Footer from "../../layout/Footer/Footer";
import HomeLoader from "../../layout/skeletons/HomeLoader";
import HomeLoaderTablet from "../../layout/skeletons/HomeLoaderTablet";
import HomeLoaderMobile from "../../layout/skeletons/HomeLoaderMobile";
import useWindowWidth from "../../hooks/customeHookResize";
import SinResultado from "../SinResultado/SinResultado";

const Home = () => {
	const [dataServer, setDataServer] = useState([]);
	const [loading, setLoading] = useState(true)

	const { width } = useWindowWidth();

	useEffect(() => {
		getProducts().then(result => {
			setDataServer(result)

			setTimeout(() => {
				setLoading(false)
			}, 1000)
			
		}
		);
	}, []);
	return (
		<>
			<Header />
			{loading && width > 720 && <HomeLoader />}
			{loading && width <= 720 && width > 420 && <HomeLoaderTablet />}
			{loading && width <= 420 && <HomeLoaderMobile />}
			{!loading && (dataServer.length !== 0 ?
				<>
					<Body>
						<SearchBar />
						<div className='home'>
							<section className='sec__categories'>
								<h2>Buscar por tipo de alojamiento</h2>
								<div className='cat__container'>
									<CategoriesList />
								</div>
							</section>
							<section className='sec__products'>
								<h2>Recomendaciones</h2>
								<ProductsList data={dataServer} />
							</section>
						</div>
					</Body>
				</>
				: <SinResultado titulo="Error 404 :(" boton="Recargar" />
			)}
			<Footer />
		</>
	);
};

export default Home;
