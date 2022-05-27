import { ICartActions, ICartProduct } from "./types";

export function addProductToCartRequest(product: ICartProduct) {
	return {
		type: ICartActions.addProductToCartRequest,
		payload: {
			product
		}
	}
}

export function addProductToCartSuccess(product: ICartProduct) {
	return {
		type: ICartActions.addProductToCartSuccess,
		payload: {
			product
		}
	}
}

export function addProductToCartFailure(productId: number) {
	return {
		type: ICartActions.addProductToCartFailure,
		payload: {
			productId
		}
	}
}