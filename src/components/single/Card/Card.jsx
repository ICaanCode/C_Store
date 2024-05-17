import { useContext } from "react";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { CartContext } from "../../../context/CartContext";

import "./Card.css";

export const Card = ({ product }) => {
	const { setItemQuantity } = useContext(CartContext);

	const addItemToCart = (productId) => {
		setItemQuantity(productId, 1);
	};

	return (
		<div className="card">
			<div className="card__imagebox">
				<img
					className="card__imagebox__image"
					src={product.imageURL}
					alt={product.name}
				/>
			</div>
			<Link to={`/productos/${product.id}`}>
				<p className="card__title">{product.title}</p>
			</Link>
			<div className="card__details">
				<p className="card__price">$ {product.price}</p>
				<button
					className="card__addToCart"
					onClick={() => {
						addItemToCart(product.id);
					}}
				>
					<AddShoppingCartIcon></AddShoppingCartIcon>
				</button>
			</div>
		</div>
	);
};
