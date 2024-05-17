import { useContext } from "react";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

import { QuantityControl } from "../QuantityControl/QuantityControl";

import { CartContext } from "../../../context/CartContext";

import "./CartItem.css";

export const CartItem = ({ product }) => {
	const { removeItem } = useContext(CartContext);

	return (
		<div className="cartItem">
			<div className="cartItem__imagebox">
				<img
					className="cartItem__imagebox__image"
					src={product.imageURL}
					alt={product.title}
				/>
			</div>
			<p className="cartItem__title">{product.title}</p>
			<p className="cartItem__price">${product.price} / und</p>
			<div className="cartItem__quantity">
        <QuantityControl itemId={product.id} quantity={product.quantity}></QuantityControl>
			</div>
			<div className="cartItem__buttons">
				<button onClick={() => removeItem(product.id)}>
					<RemoveShoppingCartIcon></RemoveShoppingCartIcon>
				</button>
			</div>
		</div>
	);
};
