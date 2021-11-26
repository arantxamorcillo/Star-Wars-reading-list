import React, { useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { MoreInfo } from "../component/moreInfo";
import CardsList from "../component/CardsList";

export const Home = () => {
	const [categories, setCategories] = useState({});
	const [visibility, setVisibility] = useState(true);
	console.log(visibility);

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
