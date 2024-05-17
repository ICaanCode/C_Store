import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";

import { CartContext } from "../../../context/CartContext";
import { ProductContext } from "../../../context/ProductContext";

import { Message } from "../Message/Message";

import "./ProductDetail.css";

export const ProductDetail = () => {
	const { productId } = useParams();

	const { setItemQuantity } = useContext(CartContext);
	const { getProduct } = useContext(ProductContext);

	const product = getProduct(productId);

	return (
		<div>
			{product ? (
				<div className="productDetail">
					<div className="productDetail__imagebox">
						<img
							className="productDetail__image"
							src={product.imageURL}
							alt={product.title}
						/>
					</div>
					<p className="productDetail__title">{product.title}</p>
					<p className="productDetail__price">${product.price}</p>
					<p className="productDetail__id">Item #{product.id}</p>
					<p className="productDetail__description">
						<b>Descripción:</b> {product.description}
					</p>
					<p className="productDetail__category">
						<b>Categoría:</b> {product.category}
					</p>
					<AddShoppingCartIcon
						className="productDetail__addToCart"
						fontSize="large"
						onClick={() => setItemQuantity(product.id, 1)}
					/>
					<Link to="/productos" className="productDetail__close">
						<CloseIcon fontSize="large"></CloseIcon>
					</Link>
				</div>
			) : (
				<Message>
					<h2>El producto que busca no existe</h2>
					<h2>
						<Link to="/productos">Ver otros productos</Link>
					</h2>
				</Message>
			)}
		</div>
	);
};
