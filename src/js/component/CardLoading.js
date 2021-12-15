import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function CardLoading() {
	return (
		<div className="card">
			{/* <img src="..." className="card-img-top" alt="..." /> */}
			<div className="card-body">
				<h5 className="card-title animation"></h5>
				<ul className="list-group animation">
					<li className="list-group-item"></li>
					<li className="list-group-item"> </li>
					<li className="list-group-item"> </li>
				</ul>
				<div className="footer-card">
					{" "}
					<button className="btn btn-primary learn-more">Learn more</button>
					<button id="like" className="btn btn-outline-primary">
						<i className="far fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default CardLoading;
