import React from "react";
import ContentLoader from "react-content-loader";

const HomeLoaderTablet = props => (
	<ContentLoader
		speed={2}
		width={720}
		height={860}
		viewBox='0 0 720 760'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}>
		<rect x='10' y='45' rx='0' ry='0' width='700' height='100' />

		<rect x='10' y='190' rx='0' ry='0' width='320' height='30' />

		<rect x='10' y='240' rx='0' ry='0' width='330' height='220' />
		<rect x='380' y='240' rx='0' ry='0' width='330' height='220' />

		<rect x='10' y='500' rx='0' ry='0' width='330' height='220' />
		<rect x='380' y='500' rx='0' ry='0' width='330' height='220' />

		{/* <rect x='10' y='580' rx='0' ry='0' width='300' height='30' />
		<rect x='10' y='645' rx='0' ry='0' width='720' height='295' />
		<rect x='770' y='645' rx='0' ry='0' width='720' height='295' /> */}
	</ContentLoader>
);

export default HomeLoaderTablet;
