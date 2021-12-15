import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";

const Card = ({ item, setVisibility, visibility }) => {
	const [itemDetails, setitemDetails] = useState({});
	const { store, actions } = useContext(Context);
	const [className, setClassName] = useState("far fa-heart");

	useEffect(() => {
		fetch(item.url)
			.then(res => res.json())
			.then(data => {
				setitemDetails(data.result.properties);
			});
	}, []);

	function ChangetoMoreInfo(actualdetails) {
		actions.setNewDetails(actualdetails);
		setVisibility(!visibility);
	}

	function handleClick() {
		let itemInFavourites = store.favorites.findIndex(fav => fav === item.name) >= 0;
		if (!itemInFavourites) {
			setClassName("fas fa-heart");
			actions.setFavorites(item.name);
		} else {
			setClassName("far fa-heart");
			actions.deleteFavorites(item.name);
		}
	}

	const cardToHtml = () => {
		if (itemDetails.gender) {
			return (
				<ul className="list-group">
					<li className="list-group-item">Sex: {itemDetails.gender}</li>
					<li className="list-group-item">Hair Colour: {itemDetails.hair_color}</li>
					<li className="list-group-item">Eye Colour: {itemDetails.eye_color}</li>
				</ul>
			);
		} else if (itemDetails.population) {
			return (
				<ul className="list-group">
					<li className="list-group-item">Population: {itemDetails.population}</li>
					<li className="list-group-item">Climate: {itemDetails.climate}</li>
					<li className="list-group-item">Diameter: {itemDetails.diameter}</li>
				</ul>
			);
		} else if (itemDetails.vehicle_class) {
			return (
				<ul className="list-group">
					<li className="list-group-item">Class: {itemDetails.vehicle_class}</li>
					<li className="list-group-item">Model: {itemDetails.model}</li>
					<li className="list-group-item">Speed: {itemDetails.max_atmosphering_speed}</li>
				</ul>
			);
		} else {
			return (
				<ul className="list-group">
					<li className="list-group-item animation"> </li>
					<li className="list-group-item animation"> </li>
					<li className="list-group-item animation"> </li>
				</ul>
			);
		}
	};

	return (
		<div className="card">
			{/* <img src="..." className="card-img-top" alt="..." /> */}
			<div className="card-body">
				<h5 className="card-title">{item.name}</h5>
				{cardToHtml()}
				<div className="footer-card">
					{" "}
					<button className="btn btn-primary learn-more" onClick={() => ChangetoMoreInfo(itemDetails)}>
						Learn more
					</button>
					<button id="like" className="btn btn-outline-primary" onClick={() => handleClick()}>
						<i className={className} />
					</button>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	item: propTypes.object,
	setVisibility: propTypes.func,
	visibility: propTypes.bool
};

export default Card;
