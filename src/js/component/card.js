import React, { Component, useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import PropertiesSelectList from "./PropertiesSelectList";
import { MoreInfo } from "./moreInfo";

const Card = ({ item, setVisibility, visibility }) => {
	const [itemDetails, setitemDetails] = useState({});
	const { store, actions } = useContext(Context);
	const [clicked, setClicked] = useState(false);

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

	function handleClick(favorite) {
		setClicked(!clicked);
		actions.setFavorites(favorite);
	}

	const cardToHtml = () => {
		if (itemDetails.gender) {
			return (
				<ul className="list-group">
					<li className="list-group-item">
						Sex:
						{itemDetails.gender}
					</li>
					<li className="list-group-item">
						Hair Colour:
						{itemDetails.hair_color}
					</li>
					<li className="list-group-item">
						Eye Colour:
						{itemDetails.eye_color}
					</li>
				</ul>
			);
		} else if (itemDetails.population) {
			return (
				<ul className="list-group">
					<li className="list-group-item">
						Population:
						{itemDetails.population}
					</li>
					<li className="list-group-item">
						Climate:
						{itemDetails.climate}
					</li>
					<li className="list-group-item">
						Diameter:
						{itemDetails.diameter}
					</li>
				</ul>
			);
		} else if (itemDetails.vehicle_class) {
			return (
				<ul className="list-group">
					<li className="list-group-item">
						Class:
						{itemDetails.vehicle_class}
					</li>
					<li className="list-group-item">
						Model:
						{itemDetails.model}
					</li>
					<li className="list-group-item">
						Speed:
						{itemDetails.max_atmosphering_speed}
					</li>
				</ul>
			);
		} else {
			return <h1>waiting for the force</h1>;
		}
	};

	return (
		<div className="card">
			{/* <img src="..." className="card-img-top" alt="..." /> */}
			<div className="card-body">
				<h5 className="card-title">{item.name}</h5>
				{cardToHtml()}
				<button className="btn btn-primary learn-more" onClick={() => ChangetoMoreInfo(itemDetails)}>
					Learn more
				</button>
				<button className="like" onClick={() => handleClick(item.name)}>
					{clicked ? <i className="fas fa-heart" /> : <i className="far fa-heart" />}
				</button>
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
