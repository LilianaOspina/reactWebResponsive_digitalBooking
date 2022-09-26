import React from "react";
import ContentLoader from "react-content-loader";

const BusquedaLoader = props => (
	<ContentLoader
		speed={2}
		width={1440}
		height={760}
		viewBox='0 0 1440 400'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}>

		<rect x='10' y='0' rx='0' ry='0' width='300' height='30' />

		<rect x='10' y='45' rx='0' ry='0' width='690' height='275' />
		<rect x='740' y='45' rx='0' ry='0' width='690' height='275' />
	</ContentLoader>
);

export default BusquedaLoader;
