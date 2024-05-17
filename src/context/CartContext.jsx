import { createContext, useContext, useEffect, useState } from "react";
import { ProductContext } from "./ProductContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [items, setItems] = useState([]);
	const [total, setTotal] = useState(0);

	const { getProduct } = useContext(ProductContext);

	useEffect(() => {
		const newTotal =
			items.length > 0
				? items.reduce(
						(acc, item) => acc + Number(item.quantity) * Number(item.price),
						0
				  )
				: 0;
		setTotal(newTotal);
	}, [items]);

	const isInCart = (itemId) => {
		return items.findIndex((item) => item.id == itemId);
	};

	const setItemQuantity = (itemId, quantity) => {
		const index = isInCart(itemId);
		const auxArray = [...items];
		if (index > -1) {
			const newQuantity = auxArray[index].quantity + quantity;
			if (newQuantity > 0) {
				auxArray[index].quantity = newQuantity;
			} else {
				removeItem(itemId);
				return;
			}
		} else {
			const newProduct = getProduct(itemId);
			auxArray.push({ ...newProduct, quantity: quantity });
		}
		setItems(auxArray);
	};

	const removeItem = (itemId) => {
		const auxArray = [...items];
		const newArray = auxArray.filter((item) => item.id !== itemId);
		setItems(newArray);
	};

	const clearCart = () => {
		setItems([]);
		setTotal(0);
	};

	return (
		<CartContext.Provider
			value={{ items, total, setItemQuantity, removeItem, clearCart }}
		>
			{children}
		</CartContext.Provider>
	);
};
