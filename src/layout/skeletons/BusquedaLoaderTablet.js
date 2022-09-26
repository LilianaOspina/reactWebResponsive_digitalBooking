import React from "react";
import ContentLoader from "react-content-loader";

const BusquedaLoaderTablet = props => (
	<ContentLoader
		speed={2}
		width={720}
		height={760}
		viewBox='0 0 720 400'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}>

		<rect x='10' y='0' rx='0' ry='0' width='300' height='30' />

		<rect x='10' y='45' rx='0' ry='0' width='700' height='295' />
		<rect x='10' y='445' rx='0' ry='0' width='700' height='295' />
	</ContentLoader>
);

export default BusquedaLoaderTablet;
