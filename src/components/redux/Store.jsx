import { createStore } from "redux";
import RestaurantReducer from "./RestaurantReducer";


const RestaurantStore = createStore(RestaurantReducer);

export default RestaurantStore;