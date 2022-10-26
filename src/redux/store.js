// Imports ( createStore de redux déprécier ... )
import { createStore, applyMiddleware } from "redux";
import { userAuthentification } from "./reducers";
import thunk from "redux-thunk";

// Export de la const store qui est un " Crée un store" qui conteient l'arborescence d'état de l'application 
// applyMiddleware permet de décrire des créateurs d'action qui renvoient une fonction au lieu d'une action. 
//Le thunk est utilisé pour retarder l'envoi d'une action ou pour l'envoyer uniquement si une certaine condition est remplie
export const store = createStore(userAuthentification, applyMiddleware(thunk));

