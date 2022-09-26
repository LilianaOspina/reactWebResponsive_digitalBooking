import React from "react";
import "./CardProducts.css";
import { Link, useNavigate } from "react-router-dom";
import useWindowWidth from "../../hooks/customeHookResize";
import "./CardProducts.css";
import { ReactComponent as Favorite } from "../../assets/favorite.svg";
import { ReactComponent as Loc } from "../../assets/location.svg";
import { ReactComponent as Wifi } from "../../assets/wifi.svg";
import { ReactComponent as Swim } from "../../assets/swim.svg";
import { ReactComponent as Star } from "../../assets/star.svg";
import Button from "../Button/Button";

const CardProducts = ({
	id,
	image,
	category,
	title,
	location,
	description,
	calification,
	review,
}) => {
	const navigate = useNavigate();
	const { width } = useWindowWidth();
	return (
		<>
			<div className='card__product'>
				<div className='card__product-div1'>
					<Favorite className='fav__icon' fill='white' />
					<img src={image} alt='' />
				</div>
				<div className='card__product-div2'>
					<div className='card__product-stats'>
						<div className='card__product-title'>
							<span className='card__category'>
								<h4>{category}</h4>
							</span>
							<span className='card__starts'>
								<Star className='start__icon' />
								<Star className='start__icon' />
								<Star className='start__icon' />
								<Star className='start__icon' />
								<Star className='start__icon' />
							</span>
							<h2>{title}</h2>
						</div>
						<div className='card__product-calification'>
							<div className='card__number'>
								<span>{calification}</span>
							</div>
							<p className='card__review'>{review}</p>
						</div>
					</div>
					<div className='card__product-location'>
						<Loc className='loc__icon' />
						<span>{location}</span>
						<Link to={`/producto/${id}`} className='mostrarmapa'>
							{" "}
							MOSTRAR EN EL MAPA
						</Link>
					</div>
					<div className='card__product-amenities'>
						<Wifi className='wifi__icon' />{" "}
						<Swim className='swim__icon' />
					</div>

					<p className='card__product-description'>
						{width === 420
							? description.slice(0, 200)
							: description.slice(0, 100)}
						<Link to={`/producto/${id}`} className='more'>
							{" "}
							Mas...
						</Link>
					</p>
					<div id={id} className='card__product-button'>
						<Button
							onClick={() => navigate(`/producto/${id}`)}
							size='full'>
							Ver mas
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default CardProducts;
