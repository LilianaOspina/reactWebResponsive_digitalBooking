import React from "react";
import { useNavigate } from "react-router-dom";

import "./CardCategories.css";

const Categories = ({ id, image, category, cantidad }) => {
	const navigate = useNavigate();

	return (
		<div
			className='card__categories'
			onClick={() => navigate(`/resultadoporcategoria/${id}`)}>
			<div className='card__categories-div1'>
				<img src={image} alt='' />
			</div>
			<div className='card__categories-div2'>
				<div>
					<h4>{category}</h4>
					<p>
						{cantidad} {category}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Categories;
