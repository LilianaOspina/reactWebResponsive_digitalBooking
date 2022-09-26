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
		<rect x='10' y='45' rx='0' ry='0' width='1420' height='175' />

		<rect x='10' y='250' rx='0' ry='0' width='300' height='30' />

		<rect x='10' y='300' rx='0' ry='0' width='330' height='235' />
		<rect x='370' y='300' rx='0' ry='0' width='330' height='235' />
		<rect x='730' y='300' rx='0' ry='0' width='330' height='235' />
		<rect x='1090' y='300' rx='0' ry='0' width='330' height='235' />

		<rect x='10' y='580' rx='0' ry='0' width='300' height='30' />
		<rect x='10' y='645' rx='0' ry='0' width='700' height='295' />
		<rect x='730' y='645' rx='0' ry='0' width='700' height='295' />
	</ContentLoader>
);

export default HomeLoader;
