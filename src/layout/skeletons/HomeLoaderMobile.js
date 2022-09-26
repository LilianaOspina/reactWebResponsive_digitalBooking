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

		<rect x='10' y='25' rx='0' ry='0' width='400' height='100' />

		<rect x='10' y='140' rx='0' ry='0' width='400' height='50' />

		<rect x='10' y='210' rx='0' ry='0' width='400' height='50' />

		<rect x='10' y='320' rx='0' ry='0' width='400' height='300' />
        
	</ContentLoader>
);

export default ProductLoaderMobile;
