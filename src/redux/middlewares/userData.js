// Fetch de la data du user

import { userEditSuccess, userEditError } from "../actions";
// process.env renvoie un objet contenant l'environnement de l'utilisateur
const api = process.env.REACT_APP_API_URL;
const url = `${api}/user`;

export const setUserData = (query) => {
	return async (dispatch) => {
		//On renvoie un fetch de url et query endPoint
		return fetch(`${url}/${query.endPoint}`, {
			method: query.method,
			headers: {
				Authorization: `Bearer ${query.token}`,
				"Content-Type": "application/json",
			},
			// Converti une valeur JavaScript en JSON.
   body: JSON.stringify(query.body),
		})
			.then((response) => {
    console.log(response.json())
				return response.json();
			})
			.then((user) => {
 
    console.log(user, "je suis la")
				dispatch(userEditSuccess(user));
			})
			.catch((userError) => {
				dispatch(userEditError(userError));
			});
	};
};
