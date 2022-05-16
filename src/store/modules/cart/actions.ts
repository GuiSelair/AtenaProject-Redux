import { ICartProduct } from "./types";

export function addProductToCart(product: ICartProduct) {
	return {
		type: "ADD_PRODUCT_TO_CART",
		payload: {
			product
		}
	}
}