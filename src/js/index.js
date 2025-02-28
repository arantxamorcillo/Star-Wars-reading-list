//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";
import "../styles/cardList.scss";
import "../styles/card.scss";
import "../styles/navbar.scss";
import "../styles/moreInfo.scss";
import "../styles/cardLoading.scss";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
