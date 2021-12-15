import React, { useEffect, useState } from "react";
import "../../styles/home.scss";
import { MoreInfo } from "../component/moreInfo";
import CardsList from "../component/CardsList";
import propTypes from "prop-types";

export const Home = ({ setVisibility, visibility }) => {
	const [categories, setCategories] = useState({});

	useEffect(() => {
		fetch("https://www.swapi.tech/api")
			.then(res => res.json())
			.then(data => {
				setCategories(data.result);
			});
	}, []);

	return visibility ? (
		<div className="text-center mt-5">
			{Object.keys(categories).map(categoriesKey => {
				return categoriesKey == "people" || categoriesKey == "planets" || categoriesKey == "vehicles" ? (
					<CardsList
						categoriesKey={categoriesKey}
						key={categoriesKey}
						value={categories[categoriesKey]}
						setVisibility={setVisibility}
						visibility={visibility}
					/>
				) : (
					""
				);
			})}
		</div>
	) : (
		<MoreInfo setVisibility={setVisibility} visibility={visibility} />
	);
};
Home.propTypes = {
	setVisibility: propTypes.func,
	visibility: propTypes.bool
};
