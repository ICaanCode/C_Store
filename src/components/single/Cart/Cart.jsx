import { useContext } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { CartContext } from "../../../context/CartContext";

import "./Cart.css";

export const Cart = () => {
	const { items } = useContext(CartContext);

	return (
		<div className="cart">
			<Link to="/carrito">
				<Badge badgeContent={items.length} color="primary">
					<ShoppingCartIcon fontSize="large"></ShoppingCartIcon>
				</Badge>
			</Link>
		</div>
	);
};
