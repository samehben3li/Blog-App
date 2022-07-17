export const LoginStart = () => ({
    type: "LOGIN_START"
})

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user
})

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE"
})

export const Logout = () => ({
    type: "LOGOUT"
})

export const UpdateUserStart = () => ({
    type: "UPDATE_USER_START"
})

export const UpdateUserSuccess = (updatedUser) => ({
    type: "UPDATE_USER_SUCCESS",
    payload: updatedUser
})

export const UpdateUserFailure = () => ({
    type: "UPDATE_USER_FAILURE"
})

export const DeleteUserSuccess = () => ({
    type: "DELETE_USER_SUCCESS"
})

export const DeleteUserFailure = () => ({
    type: "DELETE_USER_FAILURE"
})