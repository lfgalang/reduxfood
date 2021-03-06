import { restaurantActionType } from "./RestaurantAction";


//initial state
const restaurantState = [];

// Lo impresionante es que se genera la conección sin importar o exportar las funciones
const restaurantReducer = (state = restaurantState , action) => {
    console.log(action)
    // Para que agregue el estado a redux
    switch (action.type) {
        case restaurantActionType.ADD: 
            //El push es para que lleve los datos a redux
            state.push(action.payload);
            //Los tres puntos es para que arme el objeto y lo añada adicionalmente en el state raw
            return [...state];
        
        case restaurantActionType.REMOVE:
            state.splice(action.payload,1)
            return [...state];
        default:
            return state;
    }
};

export default restaurantReducer