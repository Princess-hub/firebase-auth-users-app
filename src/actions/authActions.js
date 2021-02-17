export const signup = (user) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((userCreds) => {
            console.log("User created successfull", userCreds);
        })
        .catch((err) => console.log("something went wrong", err));
    }
}

export const loginUser = (email, password) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCreds) => {
            console.log("User created successfull", userCreds);
        })
        .catch((err) => console.log("something went wrong", err));
    }
}
export const logout = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase= getFirebase();
        firebase.logout()
    }
}