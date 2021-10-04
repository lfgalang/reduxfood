

const foodActionType = {
    ADD: "ADD_Food",
    REMOVE: "REMOVE_Food"
}

const AddFoodAction = (res) => {
    return { type: foodActionType.ADD, payload: res }
};

const RemoveFoodAction = (index) => {
    return { type: foodActionType.REMOVE, payload: index }
}

export { foodActionType, AddFoodAction, RemoveFoodAction }
