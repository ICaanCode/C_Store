import { useContext } from "react";
import { Link } from "react-router-dom";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import { OrderContext } from "../../../context/OrderContext";
import "./Order.css";

export const Order = ({ order }) => {
	const { removeOrder } = useContext(OrderContext);

	const formattedDate = order.date.toLocaleDateString("es-CO", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<div className="order">
			<Link to={`/pedidos/${order.id}`}>
				<p className="order__number">Pedido - {order.id}</p>
			</Link>
			<p className="order__price">Valor: ${order.price}</p>
			<p className="order__date">Fecha: {formattedDate}</p>
			<div className="order__buttons">
				<button
					className="order__button"
					onClick={() => {
						removeOrder(order.id);
					}}
				>
					<RemoveCircleIcon></RemoveCircleIcon>Eliminar
				</button>
			</div>
		</div>
	);
};
