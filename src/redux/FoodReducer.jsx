import { foodActionType } from "./FoodAction";

const foodState = [];

// genera la conección sin importar o exportar las funciones
const foodReducer = (state = foodState, action) => {
    console.log(action)
    // Para que agregue el estado a redux
    switch (action.type) {
        case foodActionType.ADD:
            state.push(action.payload);
            return [...state]
    
        case foodActionType.REMOVE:
            //Se usa el splice para quitar
            state.splice(action.payload,1)
            return [...state];

        default:
            return state
    }
}



export default foodReducer