const Reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false
            }
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false
            }
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: true
            }
        case "LOGOUT":
            return {
                user: null,
                isFetching: false,
                error: false
            }
        case "UPDATE_USER_START":
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case "UPDATE_USER_SUCCESS":
            return {
                isFetching: false,
                error: false,
                user: action.payload
            }
        case "UPDATE_USER_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true
            }
        case "DELETE_USER_SUCCESS":
            return {
                user: null,
                isFetching: false,
                error: false
            }
        case "DELETE_USER_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}

export default Reducer