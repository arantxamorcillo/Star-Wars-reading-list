const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			details: {},
			favorites: []
		},
		actions: {
			setFavorites: newfavorite => {
				const store = getStore();
				const storeFavorites = [...store.favorites, newfavorite];
				setStore({ favorites: storeFavorites });
			},

			deleteFavorites: deletefavorite => {
				const store = getStore();
				const StoreFavorites = store.favorites;
				const newFavorites = StoreFavorites.filter(x => x !== deletefavorite);
				setStore({ favorites: newFavorites });
			},

			setNewDetails: newdetails => {
				const store = getStore();

				setStore({ details: newdetails });
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
