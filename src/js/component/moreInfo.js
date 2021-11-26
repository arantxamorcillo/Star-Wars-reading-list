import React, { useState, useEffect, useContext } from "react";
import propTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const MoreInfo = ({ setVisibility, visibility }) => {
	const { store, actions } = useContext(Context);

	const detailsToHtml = () => {
		if (store.details.gender) {
			return (
				<>
					<li>
						Sex:
						{store.details.gender}
					</li>
					<li>
						Hair Colour:
						{store.details.hair_color}
					</li>
					<li>
						Eye Colour:
						{store.details.eye_color}
					</li>
				</>
			);
		} else if (store.details.population) {
			return (
				<>
					<li>
						Population:
						{store.details.population}
					</li>
					<li>
						Climate:
						{store.details.climate}
					</li>
					<li>
						Diameter:
						{store.details.diameter}
					</li>
				</>
			);
		} else if (store.details.vehicle_class) {
			return (
				<>
					<li>
						Class:
						{store.details.vehicle_class}
					</li>
					<li>
						Model:
						{store.details.model}
					</li>
					<li>
						Speed:
						{store.details.max_atmosphering_speed}
					</li>
				</>
			);
		} else {
			return <h1>waiting for the force</h1>;
		}
	};

	return (
		<div className="container-fluid">
			<div className="header">
				<h1 className="title">{store.details.name}</h1>
				<h2>Description</h2>
			</div>
			<h1 className="Title">{store.details.name}</h1>
			<h2 className="description">
				Cras id metus viverra nibh accumsan placerat ac vel diam. Aenean faucibus suscipit mauris, vitae
				venenatis augue vehicula tristique. Nullam consequat, lorem ac egestas cursus, nunc eros gravida purus,
				placerat sagittis mauris est at arcu. Sed consectetur tempor urna, sit amet sodales erat pharetra vel.
				Vivamus ultricies nisl elit, vel finibus ante aliquet ut. Fusce nec metus quis turpis ultricies pharetra
				eu ut
			</h2>
			<ul>{detailsToHtml()}</ul>
			<button className="btn btn-primary btn-lg" onClick={() => setVisibility(!visibility)}>
				Back home
			</button>
		</div>
	);
};

MoreInfo.propTypes = {
	setVisibility: propTypes.func,
	visibility: propTypes.bool,
	details: propTypes.object
};
