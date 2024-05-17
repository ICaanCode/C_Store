import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CartList } from "../components/container/CartList/CartList";
import { Message } from "../components/container/Message/Message";
import { NavBar } from "../components/single/Navbar/Navbar";
import { NotFoundPage } from "../components/container/NotFound/NotFound";
import { OrderDetail } from "../components/container/OrderDetail/OrderDetail";
import { OrderList } from "../components/container/OrderList/OrderList";
import { ProductDetail } from "../components/container/ProductDetail/ProductDetail";
import { ProductList } from "../components/container/ProductList/ProductList";
import { HeroBanner } from "../components/single/HeroBanner/HeroBanner";

export const GlobalRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<Layout>
							<Message>
								<HeroBanner />
							</Message>
						</Layout>
					}
				/>
				<Route
					path="/productos"
					element={
						<Layout>
							<ProductList />
						</Layout>
					}
				/>
				<Route
					path="/productos/:productId"
					element={
						<Layout>
							<ProductDetail />
						</Layout>
					}
				/>
				<Route
					path="/carrito"
					element={
						<Layout>
							<CartList />
						</Layout>
					}
				/>
				<Route
					path="/pedidos"
					element={
						<Layout>
							<OrderList />
						</Layout>
					}
				/>
				<Route
					path="/pedidos/:orderId"
					element={
						<Layout>
							<OrderDetail />
						</Layout>
					}
				/>
				<Route 
					path="*"
					element={
						<Layout>
							<NotFoundPage />
						</Layout>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

const Layout = ({ children }) => {
	return (
		<>
			<NavBar></NavBar>
			{children}
		</>
	);
};
