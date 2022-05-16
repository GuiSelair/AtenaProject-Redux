import { useSelector } from "react-redux";
import { IState } from "../../store";
import { ICartItems } from "../../store/modules/cart/types";

export default function Cart() {
	const state = useSelector<IState, ICartItems[]>((state) => state.cart.items);

	return (
		<table>
			<thead>
				<tr>
					<th>Produto</th>
					<th>Preço</th>
					<th>Quantidade</th>
					<th>Sub-total</th>
				</tr>
			</thead>
			<tbody>
				{state.map((item) => (
					<tr key={item.product.id}>
						<td>{item.product.title}</td>
						<td>{item.product.price}</td>
						<td>{item.quantity}</td>
						<td>{Number(item.product.price * item.quantity)}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
