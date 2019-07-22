import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./Reducers/";

let store = createStore(reducer, /*preloaded State, */ applyMiddleware(thunk));
export default store;
