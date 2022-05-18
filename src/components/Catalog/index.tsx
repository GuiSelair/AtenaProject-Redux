import { useEffect, useState } from "react";

import { api } from "../../services/api";
import { ICartProduct } from "../../store/modules/cart/types";
import CatalogItem from "../CatalogItem";

export default function Catalog() {
	const [catalog, setCatalog] = useState<ICartProduct[]>([]);

	useEffect(() => {
		api.get("/products").then((response) => {
			setCatalog(response.data);
		});
	}, []);

	return (
		<>
			<h2>Catalog</h2>

			{catalog.map((product) => (
				<CatalogItem product={product} key={product.id} />
			))}
		</>
	);
}
