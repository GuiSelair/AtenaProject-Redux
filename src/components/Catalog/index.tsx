import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { api } from "../../services/api";
import { addProductToCart } from "../../store/modules/cart/actions";
import { ICartProduct } from "../../store/modules/cart/types";

export default function Catalog() {
	const [catalog, setCatalog] = useState<ICartProduct[]>([]);
	const dispatch = useDispatch();

	useEffect(() => {
		api.get("/products").then((response) => {
			setCatalog(response.data);
		});
	}, []);

	const handleAddProductToCart = useCallback(
		(product: ICartProduct) => {
			dispatch(addProductToCart(product));
		},
		[dispatch]
	);

	return (
		<>
			<h2>Catalog</h2>

			{catalog.map((product) => (
				<article key={product.id}>
					<strong>{product.title}</strong>
					{" - "}
					<span>{product.price}</span>
					{"  "}

					<button type="button" onClick={() => handleAddProductToCart(product)}>
						Comprar
					</button>
				</article>
			))}
		</>
	);
}
