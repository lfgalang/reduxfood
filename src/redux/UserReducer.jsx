import { userActionType } from "./UserAction";

const userState = [];

const userReducer = (state = userState, action) => {
    switch (action.type) {
        case userActionType.GET:
            
            return action.payload;    
        default:
            return state;
    }
}

export default userReducer