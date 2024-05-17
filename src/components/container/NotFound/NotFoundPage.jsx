import { Message } from "../Message/Message";

import "./NotFoundPage.css";

export const NotFoundPage = () => {
	return (
		<Message className="notFoundPage">
			<p className="notFoundPage__number">404</p>
			<p className="notFoundPage__message">
				La página que busca no ha sido encontrada.
			</p>
		</Message>
	);
};
