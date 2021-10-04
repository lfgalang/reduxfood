import { combineReducers, createStore } from "redux";
import foodReducer from "./FoodReducer";
import restaurantReducer from "./RestaurantReducer";

const rootReducer = {
    restaurant: restaurantReducer,
    food: foodReducer
}


const Store = createStore(
    //Se agrega el combineReducer cuando son varios reducers
    combineReducers(rootReducer),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store;

