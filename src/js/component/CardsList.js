import React, { useEffect, useState } from "react";
import Card from "./card";
import CardLoading from "./CardLoading";
import propTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CardsList = function({ categoriesKey, value, setVisibility, visibility }) {
	const [items, setitems] = useState([]);

	useEffect(() => {
		fetch(value)
			.then(res => res.json())
			.then(data => {
				setitems(data.results);
			});
	}, []);

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 6
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};

	return (
		<div className="container">
			<h2>{categoriesKey.toUpperCase()}</h2>
			{items.length !== 0 ? (
				<Carousel responsive={responsive} itemClass="carousel-item-padding-40-px">
					{items.map(item => {
						return (
							<Card item={item} key={item.uid} setVisibility={setVisibility} visibility={visibility} />
						);
					})}
				</Carousel>
			) : (
				<Carousel responsive={responsive} itemClass="carousel-item-padding-40-px">
					<CardLoading />
					<CardLoading />
					<CardLoading />
					<CardLoading />
				</Carousel>
			)}
		</div>
	);
};

CardsList.propTypes = {
	categoriesKey: propTypes.string,
	value: propTypes.string,
	setVisibility: propTypes.func,
	visibility: propTypes.bool
};
export default CardsList;
