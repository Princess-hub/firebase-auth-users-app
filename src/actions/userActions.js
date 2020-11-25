export const addUser = (user) => {
    newUser.id=Math.random().toString()
    return {
        type: 'ADD_USER',
        playload: user
    }
}