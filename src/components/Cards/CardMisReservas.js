import React, { useState, useEffect } from "react";
import { getProductsId } from "../../server/server";
import "./CardMisReservas.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";


const CardMisReservas = ({ data }) => {
	const [dataProduct, setDataProduct] = useState(null);

	useEffect(() => {
		getProductsId(data.productoId).then(result => setDataProduct(result));
	}, []);

		const navigate = useNavigate();

	return (
		<>
			{dataProduct && (
				<>
					<div className='card__misreservas'>
						<div className='card__misreservas-div1'>
							<img src={dataProduct.imagenes[0].url} alt='' />
						</div>
						<div className='card__misreservas-div2'>
							<div className='card__misreservas-stats'>
								<div className='card__misreservas-title'>
									<h3>{`No. de Reserva: ${data.id}`}</h3>
									<h2>{dataProduct.nombre}</h2>
								</div>
							</div>
							<div className='card__misreservas-description'>
								<p>
									Check in:{" "}
									<span>{data.checkIn.slice(0, 10)}</span>
								</p>
								<p>
									Check out:{" "}
									<span>{data.checkOut.slice(0, 10)}</span>
								</p>
								<div className="card__misreservas-button">
									<Button
										onClick={() =>
											navigate(
												`/producto/${data.productoId}`
											)
										}
										size='full'>
										Volver a reservar
									</Button>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default CardMisReservas;
