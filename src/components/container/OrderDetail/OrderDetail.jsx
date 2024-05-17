import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";

import { OrderContext } from "../../../context/OrderContext";
import { Message } from "../Message/Message";

import "./OrderDetail.css";

export const OrderDetail = () => {
	const navigate = useNavigate();

	const { orderId } = useParams();
	const { getOrder, removeOrder } = useContext(OrderContext);

	const order = getOrder(orderId);

	const formattedDate = order?.date.toLocaleDateString("es-CO", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	let total = 0;

	const computeTotal = (item) => {
		const computed = Math.floor(item.quantity * item.price * 100) / 100;
		total += computed;
		return computed;
	};

	return (
		<div>
			{order ? (
				<div className="orderDetail">
					<p className="orderDetail__id">Pedido #{order.id}</p>
					<p className="orderDetail__date">
						<strong>Fecha:</strong> {formattedDate}
					</p>
					<table className="orderDetail__table">
						<thead className="orderDetail__table__thead">
							<tr>
								<th className="orderDetail__table__thead__th">ID</th>
								<th className="orderDetail__table__thead__th">Nombre</th>
								<th className="orderDetail__table__thead__th">
									Precio unitario
								</th>
								<th className="orderDetail__table__thead__th">Cantidad</th>
								<th className="orderDetail__table__thead__th">Precio total</th>
							</tr>
						</thead>
						{order.cart.map((item) => (
							<tbody>
								<tr className="orderDetail__table__tbody__tr">
									<td className="orderDetail__table__tbody__td">{item.id}</td>
									<td className="orderDetail__table__tbody__td">
										{item.title}
									</td>
									<td className="orderDetail__table__tbody__td">
										${item.price}
									</td>
									<td className="orderDetail__table__tbody__td">
										{item.quantity}
									</td>
									<td className="orderDetail__table__tbody__td">
										${computeTotal(item)}
									</td>
								</tr>
							</tbody>
						))}
						<tfoot>
							<tr>
								<td className="orderDetail__table__tfoot__td" colSpan={4}>
									<strong>Total</strong>
								</td>
								<td className="orderDetail__table__tfoot__td">
									<strong>${order.price.toFixed(2)}</strong>
								</td>
							</tr>
						</tfoot>
					</table>
					<Link to="/pedidos">
						<CloseIcon
							className="orderDetail__goBack"
							fontSize="large"
						></CloseIcon>
					</Link>
					<DeleteIcon
						className="orderDetail__delete"
						fontSize="large"
						onClick={() => {
							removeOrder(order.id);
							navigate("/pedidos");
						}}
					></DeleteIcon>
				</div>
			) : (
				<Message>
					<h2>El pedido que busca no existe</h2>
					<h2>
						<Link to="/pedidos">Ver otros pedidos</Link>
					</h2>
				</Message>
			)}
		</div>
	);
};
