import CardProducts from "../Cards/CardProducts";
import "./ProductsList.css";

const ProductList = ({data}) => {

	return (
		<>
			<ul className='product__list'>
				{data.map((p,idx) => {
					return (
						<li key={idx.toString()}>
							<CardProducts
								id={p.id}
									image={p.imagenes[0].url}
									category={p.categoria.titulo}
									title={p.nombre}
									location={p.ciudad.nombre}
									description={p.descripcion}
									calification='8'
									review='Muy bueno'
								/>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default ProductList;
