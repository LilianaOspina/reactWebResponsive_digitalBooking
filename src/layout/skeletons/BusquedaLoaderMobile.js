import React from "react";
import ContentLoader from "react-content-loader";

const BusquedaLoaderMobile = props => (
	<ContentLoader
		speed={2}
		width={420}
		height={760}
		viewBox='0 0 420 500'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}>

		<rect x='10' y='0' rx='0' ry='0' width='200' height='30' />

		<rect x='10' y='45' rx='0' ry='0' width='400' height='395' />

		<rect x='10' y='460' rx='0' ry='0' width='400' height='395' />
	</ContentLoader>
);

export default BusquedaLoaderMobile;
