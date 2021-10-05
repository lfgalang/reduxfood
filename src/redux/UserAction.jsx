import axios from "axios"

const userActionType = {
    GET: "GET"
}

var userIdFilter = 6;

const GetUserAction = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(
                "https://jsonplaceholder.typicode.com/todos"
            );
            console.log(res.data.filter(x => x.userId === userIdFilter))
            const daticos = res.data.filter(x => x.userId === userIdFilter)
            
            dispatch({ type: userActionType.GET, payload:daticos })
        } catch (error) {
            console.error(error)
        }

    }
}

export { userActionType, GetUserAction }