
const restaurantActionType = {
    ADD: "ADD_Restaurant",
    REMOVE: "REMOVE_Restaurant",
}

const AddRestaurantAction = (res) => {
    return { type: restaurantActionType.ADD, payload: res }
};

const RemoveRestaurantAction = (index) => {
    return { type: restaurantActionType.REMOVE, payload: index }
};

export { restaurantActionType, AddRestaurantAction, RemoveRestaurantAction }