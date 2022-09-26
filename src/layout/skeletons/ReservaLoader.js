import React from "react";
import ContentLoader from "react-content-loader";

const ReservaLoader = props => (
	<ContentLoader
		speed={2}
		width={1440}
		height={860}
		viewBox='0 0 1440 760'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}>
		<rect x='10' y='45' rx='0' ry='0' width='1400' height='50' />

        <rect x='10' y='160' rx='0' ry='0' width='940' height='260' />
        
        <rect x='1000' y='160' rx='0' ry='0' width='390' height='500' />

        <rect x='10' y='460' rx='0' ry='0' width='940' height='260' />

        
	</ContentLoader>
);

export default ReservaLoader;
