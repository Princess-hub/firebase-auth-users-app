export const addUser = (newUser) => {
    newUser.id=Math.random().toString()
    console.log(newUser)
    return {
        type: "ADD_USER",
        payload: newUser
    }
}