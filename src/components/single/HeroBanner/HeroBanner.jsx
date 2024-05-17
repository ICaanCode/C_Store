import "./HeroBanner.css";

export const HeroBanner = () => {
	return (
		<div className="heroBanner">
			<h2 className="heroBanner__title">Bienvenido a</h2>
			<h2 className="heroBanner__storeName">C Store</h2>
			<h3 className="heroBanner__subtitle">Hacemos tus compras por ti</h3>
			<p className="heroBanner__paragraph">Envíos en toda Latinoamérica</p>
		</div>
	);
};
