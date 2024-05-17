import "./App.css";
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";
import { ProductProvider } from "./context/ProductContext";
import { GlobalRouter } from "./router/GlobalRouter";

function App() {
	return (
		<>
			<ProductProvider>
				<CartProvider>
					<OrderProvider>
						<GlobalRouter></GlobalRouter>
					</OrderProvider>
				</CartProvider>
			</ProductProvider>
		</>
	);
}

export default App;
