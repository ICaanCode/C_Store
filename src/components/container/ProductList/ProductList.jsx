import { useContext } from "react";

import { Message } from "../Message/Message";

import { Card } from "../../single/Card/Card";

import { ProductContext } from "../../../context/ProductContext";

import "./ProductList.css";

export const ProductList = () => {
	const { products } = useContext(ProductContext);

	return (
		<div className="cardList">
			{products.length > 0 ? (
				products.map(
					(product, index) =>
						index < 20 && <Card key={index} product={product}></Card>
				)
			) : (
				<Message>
					<h2>Nada por aquí</h2>
				</Message>
			)}
		</div>
	);
};
