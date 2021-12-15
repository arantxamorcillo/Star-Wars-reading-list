import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from "prop-types";

export const Navbar = ({ setVisibility, visibility }) => {
	const { store, actions } = useContext(Context);
	const [clicked, setclicked] = useState(false);

	const favorites = store.favorites;

	const favorite = favorites.map((x, i) => {
		return (
			<li key={i}>
				<span className="favorite">
					{x}{" "}
					<button className="btn-outline-primary" onClick={ev => actions.deleteFavorites(x)}>
						<i className="far fa-trash-alt"></i>
					</button>
				</span>
			</li>
		);
	});

	const listToHtml = () => {
		if (favorites.length != 0) {
			return favorite;
		} else {
			return <li>Choose your favorites</li>;
		}
	};

	return (
		<nav className="navbar navbar-dark  mb-3">
			<Link to="/">
				<img
					className="navbar-brand mb-0 h1"
					src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_horiz-04368052e188.png"
					onClick={() => setVisibility(!visibility)}
				/>
			</Link>

			<button className="btn btn-outline-primary button-favorites" onClick={() => setclicked(!clicked)}>
				Favorites <span className="counter">{favorites.length}</span>
			</button>
			{clicked ? <ul className="favorites">{listToHtml()}</ul> : ""}
		</nav>
	);
};

Navbar.propTypes = {
	setVisibility: propTypes.func,
	visibility: propTypes.bool
};
