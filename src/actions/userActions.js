export const addUser = (newUser) => {
    newUser.id=Math.random().toString()
    console.log(newUser)
    return {
        type: "ADD_USER",
        payload: newUser
    }
}

//action creator for deleting user
export const deleteUser = (userId) => {
    console.log("action-fired", userId)
    return {
        type: "DELETE_USER",
        payload: userId,
    }
}

//action for editing user
export const editUser = (updatedUser) => {
    console.log("update action called", updatedUser)
    return {
        type: "EDIT_USER",
        payload: updatedUser,
    }
}