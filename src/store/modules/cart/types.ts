export interface ICartState {
	items: ICartItems[];
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
