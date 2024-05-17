import { useEffect, useState } from "react";

export const useProducts = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			const data = await fetch("https://fakestores.onrender.com/api/products/");
			const json = await data.json();
			setProducts(json);
		};
		loadData();
	}, []);

	return products;
};
