export const addUser = (newUser) => {
    newUser.id=Math.random().toString()
    return {
        type: 'ADD_USER',
        playload: user
    }
}