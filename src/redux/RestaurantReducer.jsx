

//initial state
const restaurantState = [];

const RestaurantReducer = (state = restaurantState , action) => {
    console.log(action)
    return state;
};

export default RestaurantReducer