import axios from "axios"

const userActionType = {
    GET: "GET"
}

const GetUserAction = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(
                "https://jsonplaceholder.typicode.com/todos/1"
            );
            const {data} = res
            console.log(data)
            dispatch({ type: userActionType.GET, payload:data })
        } catch (error) {
            console.error(error)
        }

    }
}

export { userActionType, GetUserAction }