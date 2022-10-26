// Import des composants de pages et des const pour creer la connexion
import Navbar from "./components/Navbar/Navbar.jsx";
import Router from "./router";
import Footer from "./components/Footer/Footer.jsx";
import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "./redux/middlewares/user";
import { useEffect } from "react";

// 
function App({ token, fetchUser, user, setUserData }) {
	useEffect(() => {
		// On recupere l'item "token"
		const localStorageToken = localStorage.getItem("token");
		//si localStorageToken ou Token est true
		if (localStorageToken || token) {
			const query = {
				method: "POST",
				endPoint: "profile",
				token: localStorageToken || token,
			};
			// On appelle fetchUser de query
			fetchUser(query);
		}
	}, [token, fetchUser]);
 // et on retourne le HTMl
	return (
		<div className="App">
			<Navbar />
			<Router />
			<Footer />
		</div>
	);
}
// const mapStateToProps qui renvoie token & user
const mapStateToProps = ({ token, user}) => {
	return {
		token,
		user
	};
};
// Dispatch des argements. ça facilite l'interaction entre les objets
// Dispatch (répartiteur) est un objet de service utilisé pour garantir que l'événement est transmis à tous les écouteurs concernés
const mapDispatchToProps = (dispatch) => {
	return {
		fetchUser: (...args) => dispatch(fetchUser(...args)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
