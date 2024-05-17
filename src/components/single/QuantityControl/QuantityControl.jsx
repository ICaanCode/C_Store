import { useContext } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import { CartContext } from "../../../context/CartContext";

import "./QuantityControl.css";

export const QuantityControl = ({ itemId, quantity }) => {
	const { setItemQuantity } = useContext(CartContext);

	return (
		<div className="quantityControl">
			<p>Cantidad:</p>
			<div className="quantityControl__controls">
				<button
					className="quantityControl__minus"
					onClick={() => setItemQuantity(itemId, -1)}
				>
					<RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>
				</button>
				<p className="quantityControl__quantity">{quantity}</p>
				<button
					className="quantityControl__plus"
					onClick={() => setItemQuantity(itemId, 1)}
				>
					<AddCircleOutlineIcon></AddCircleOutlineIcon>
				</button>
			</div>
		</div>
	);
};
