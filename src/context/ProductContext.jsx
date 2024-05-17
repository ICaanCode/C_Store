import { createContext, useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
	const products = useProducts();

	const getProduct = (productId) => {
		return products.find((product) => product.id === productId);
	};

	return (
		<ProductContext.Provider value={{ products, getProduct }}>
			{children}
		</ProductContext.Provider>
	);
};
