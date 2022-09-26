import React from "react";
import ContentLoader from "react-content-loader";

const HomeLoader = props => (
	<ContentLoader
		speed={2}
		width={1440}
		height={860}
		viewBox='0 0 1440 760'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}>
		<rect x='10' y='45' rx='0' ry='0' width='1440' height='70' />

		<rect x='10' y='140' rx='0' ry='0' width='900' height='400' />
		<rect x='920' y='140' rx='0' ry='0' width='260' height='195' />
		<rect x='1190' y='140' rx='0' ry='0' width='260' height='195' />
		<rect x='920' y='345' rx='0' ry='0' width='260' height='195' />
        <rect x='1190' y='345' rx='0' ry='0' width='260' height='195' />
        
		<rect x='10' y='570' rx='0' ry='0' width='440' height='20' />
		<rect x='10' y='600' rx='0' ry='0' width='1040' height='10' />
		<rect x='10' y='620' rx='0' ry='0' width='1040' height='10' />
	</ContentLoader>
);

export default HomeLoader;
