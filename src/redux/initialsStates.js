// Creation des etats intitiaux pour Authentification & User

export const initialStateAuthentification = {
	token: localStorage.getItem("token"),
	error: "",
	remember: false,
};

export const initialStateUser = {
	user: {
		email: "",
		firstName: "",
		lastName: "",
	},
};
