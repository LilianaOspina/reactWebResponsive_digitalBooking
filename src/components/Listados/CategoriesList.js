import React, { useEffect, useState } from "react";
import Categories from "../Cards/CardCategories";
import { getCategories } from "../../server/server";
import "./CategoriesList.css";

const CategoriesList = () => {
	const [dataServer, setDataServer] = useState([]);
	useEffect(() => {
		getCategories().then(result => setDataServer(result));
	}, []);
	return (
		<>
			<ul className='categories__list'>
				{dataServer.map((c, idx) => {
					return (
						<li key={idx.toString()}>
							<Categories
								id={c.id}
								image={c.imagen}
								category={c.titulo}
								cantidad='800.105'
							/>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default CategoriesList;
