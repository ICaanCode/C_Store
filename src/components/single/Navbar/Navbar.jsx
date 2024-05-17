import { Link } from "react-router-dom";

import { Cart } from "../Cart/Cart";

import "./Navbar.css";

const Title = () => {
	return (
	<Link to="/">
	<h1>C Store</h1>
	</Link>
);
};

const Menu = () => {
	return (
		<ul className="menu">
			<Link to="/productos/">
				<li className="menu__option">Productos</li>
			</Link>
			<Link to="/pedidos">
				<li className="menu__option">Pedidos</li>
			</Link>
		</ul>
	);
};

export const NavBar = () => {
	return (
		<div className="navbar">
			<Title></Title>
			<Menu></Menu>
			<Cart></Cart>
		</div>
	);
};
