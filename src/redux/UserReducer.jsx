
const userState = [];

const userReducer = (state = userState, action) => {
    switch (action.type) {
        case "GET":
            
            return action.payload;    
        default:
            return state;
    }
}

export default userReducer