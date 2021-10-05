import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import foodReducer from "./FoodReducer";
import restaurantReducer from "./RestaurantReducer";
import userReducer from "./UserReducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = {
    restaurant: restaurantReducer,
    food: foodReducer,
    user: userReducer,
}


const Store = createStore(
    //Se agrega el combineReducer cuando son varios reducers
    combineReducers(rootReducer),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    composeEnhancers(applyMiddleware(thunk)),
);


export default Store;