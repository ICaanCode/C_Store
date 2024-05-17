import { useContext } from "react";

import { Message } from "../Message/Message";

import { Order } from "../../single/Order/Order";

import { OrderContext } from "../../../context/OrderContext";

import "./OrderList.css";

export const OrderList = () => {
	const { orders } = useContext(OrderContext);

	return (
		<div className="orderList">
			{orders.length > 0 ? (
				orders.map((order) => <Order key={order.id} order={order}></Order>)
			) : (
				<Message>
					<h2>No hay nada por aquí</h2>
				</Message>
			)}
		</div>
	);
};
