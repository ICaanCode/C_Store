import { useContext } from "react";

import { CartItem } from "../../single/CartItem/CartItem";
import { CartContext } from "../../../context/CartContext";
import { Message } from "../Message/Message";
import { OrderContext } from "../../../context/OrderContext";

import "./CartList.css";
import { Link } from "react-router-dom";

export const CartList = () => {
	const { items, total, clearCart } = useContext(CartContext);
	const { placeOrder } = useContext(OrderContext);

	return (
		<div className="cartList">
			{items.length > 0 && (
				<button className="cartList__clearCart" onClick={() => clearCart()}>
					Vaciar carrito
				</button>
			)}
			{items.length > 0 ? (
				items.map((item) => <CartItem key={item.id} product={item}></CartItem>)
			) : (
				<Message>
					<h2>No hay productos en el carrito</h2>
					<h2>
						<Link to="/productos">Ver productos</Link>
					</h2>
				</Message>
			)}
			{items.length > 0 && (
				<>
					<p className="cartList__price">Precio: {Math.floor(total * 100) / 100}</p>
					<button
						className="cartList__placeOrder"
						onClick={() => {
							placeOrder();
						}}
					>
						Realizar pedido
					</button>
				</>
			)}
		</div>
	);
};
