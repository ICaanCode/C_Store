import { createContext, useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
	const [orders, setOrders] = useState([]);

	const { items, total, clearCart } = useContext(CartContext);

	useEffect(() => {
		const fixedOrders = [
			{
				id: 1,
				price: 235.24,
				date: new Date(Date.UTC(2023, 10, 20, 3, 0, 0)),
				cart: [],
			},
			{
				id: 2,
				price: 489.75,
				date: new Date(Date.UTC(2023, 11, 25, 3, 0, 0)),
				cart: [],
			},
			{
				id: 3,
				price: 25.47,
				date: new Date(Date.UTC(2024, 0, 13, 3, 0, 0)),
				cart: [],
			},
		];
		setOrders(fixedOrders);
	}, []);

	const placeOrder = () => {
		let newOrder = {
			id: orders.length + 1,
			price: total,
			date: new Date(),
			cart: items,
		};
		let currentOrders = [...orders];
		currentOrders.push(newOrder);
		setOrders(currentOrders);
		clearCart();
	};

	const getOrder = (orderId) => {
		return orders.find((order) => order.id === Number(orderId));
	};

	const removeOrder = (orderId) => {
		let newOrders = orders.filter((order) => {
			return order.id !== orderId;
		});
		setOrders(newOrders);
	};

	return (
		<OrderContext.Provider
			value={{ orders, placeOrder, removeOrder, getOrder }}
		>
			{children}
		</OrderContext.Provider>
	);
};
