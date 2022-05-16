import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ICartProduct } from "../../store/modules/cart/types";

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
				<article key={product.id}>
					<strong>{product.title}</strong>
					{" - "}
					<span>{product.price}</span>
					{"  "}

					<button onClick={() => {}}>Comprar</button>
				</article>
			))}
		</>
	);
}
