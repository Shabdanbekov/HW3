import { legacy_createStore as createStore } from "redux";
import reducer from "./todoReducer";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer);

export default store;
