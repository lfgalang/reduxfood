import { createStore } from "redux";
import RestaurantReducer from "./RestaurantReducer";

const rootReducer = {
    restaurant: RestaurantReducer,
}

const Store = createStore(
    RestaurantReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store;