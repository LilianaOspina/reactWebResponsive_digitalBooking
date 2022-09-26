import React from "react";
import ContentLoader from "react-content-loader";

const ReservaLoaderTablet = props => (
	<ContentLoader
		speed={2}
		width={720}
		height={760}
		viewBox='0 0 720 600'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}>

		<rect x='10' y='0' rx='0' ry='0' width='700' height='50' />
		
		<rect x='10' y='70' rx='0' ry='0' width='300' height='30' />

		<rect x='10' y='135' rx='0' ry='0' width='700' height='245' />

		<rect x='10' y='420' rx='0' ry='0' width='300' height='30' />

		<rect x='10' y='500' rx='0' ry='0' width='700' height='500' />
	</ContentLoader>
);

export default ReservaLoaderTablet;
