import React from "react";
import ContentLoader from "react-content-loader";

const ProductLoaderMobile = props => (
	<ContentLoader
		speed={2}
		width={420}
		height={660}
		viewBox='0 0 420 660'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}>
		<rect x='10' y='45' rx='0' ry='0' width='400' height='70' />

		<rect x='10' y='140' rx='0' ry='0' width='400' height='300' />
        
		<rect x='10' y='460' rx='0' ry='0' width='200' height='20' />
		<rect x='10' y='490' rx='0' ry='0' width='400' height='10' />
		<rect x='10' y='510' rx='0' ry='0' width='400' height='10' />
	</ContentLoader>
);

export default ProductLoaderMobile;
