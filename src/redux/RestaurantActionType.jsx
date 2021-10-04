
const RestaurantActionType = {
    ADD: "ADD",
    REMOVE: "REMOVE",
}

const AddRestaurantAction = (res) => {
    return { type: RestaurantActionType.ADD, payload: res }
};

const RemoveRestaurantAction = (index) => {
    return { type: RestaurantActionType.REMOVE, payload: index }
};

export { RestaurantActionType, AddRestaurantAction, RemoveRestaurantAction }