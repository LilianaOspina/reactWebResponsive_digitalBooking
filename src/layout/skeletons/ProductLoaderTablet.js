import React from "react";
import ContentLoader from "react-content-loader";

const ProductLoaderTablet = props => (
	<ContentLoader
		speed={2}
		width={720}
		height={860}
		viewBox='0 0 720 760'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}>
		<rect x='10' y='45' rx='0' ry='0' width='700' height='70' />

		<rect x='10' y='140' rx='0' ry='0' width='700' height='300' />
        
		<rect x='10' y='470' rx='0' ry='0' width='440' height='20' />
		<rect x='10' y='500' rx='0' ry='0' width='700' height='10' />
		<rect x='10' y='520' rx='0' ry='0' width='700' height='10' />
	</ContentLoader>
);

export default ProductLoaderTablet;
