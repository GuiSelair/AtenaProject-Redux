import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../store";
import { addProductToCartRequest } from "../../store/modules/cart/actions";
import { ICartProduct } from "../../store/modules/cart/types";

interface ICatalogItem {
	product: ICartProduct;
}

export default function CatalogItem({ product }: ICatalogItem) {
	const dispatch = useDispatch();

	const hasFailedStockCheck = useSelector<IState, boolean>((state) => {
		return state.cart.failedStockCheck.includes(product.id);
	});

	const handleAddProductToCart = useCallback(() => {
		dispatch(addProductToCartRequest(product));
	}, [dispatch, product]);

	return (
		<article>
			<strong>{product.title}</strong>
			{" - "}
			<span>{product.price}</span>
			{"  "}

			<button
				type="button"
				onClick={handleAddProductToCart}
				disabled={hasFailedStockCheck}
			>
				Comprar
			</button>

			{hasFailedStockCheck && (
				<span style={{ color: "red" }}> Sem estoque</span>
			)}
		</article>
	);
}
