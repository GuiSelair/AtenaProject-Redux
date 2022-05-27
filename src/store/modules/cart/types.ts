export interface ICartState {
	items: ICartItems[];
	failedStockCheck: number[];
};

export interface ICartItems {
	product: ICartProduct;
	quantity: number;
};

export interface ICartProduct {
	id: number;
	title: string;
	price: number;
}

export enum ICartActions {
	addProductToCartFailure = "ADD_PRODUCT_TO_CART_FAILURE",
	addProductToCartSuccess = "ADD_PRODUCT_TO_CART_SUCCESS",
	addProductToCartRequest = "ADD_PRODUCT_TO_CART_REQUEST"
}
