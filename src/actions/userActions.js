
export const addUser = (newUser) => {
    return ( dispatch, getState, {getFirestore, getFirebase}) => {
        const firestore = getFirestore();
        firestore.collection("user").add(newUser)
        .then(res => {console.log ("user added");
    })
        .catch(err => {console.log ("there was an error")})
    }
    // newUser.id=Math.random().toString()
    // console.log(newUser)
    // return {
    //     type: "ADD_USER",
    //     payload: newUser
    // }
}
//action creator for deleting user
export const deleteUser = (userId) => {
    console.log("action-fired", userId)
    return(dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection("user").doc(userId).delete()
        .then(res => {console.log("user upated succesfull")})
        .catch(err => {console.log("user could not be updated")})
    }    
}

//action for editing user
export const editUser = (updateUser) => {
    console.log("action-fired", updateUser)
    return(dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection("user").doc(updateUser.id).set(updateUser)
        .then(res => {console.log("user update successfully")})
        .catch(err => {console.log ("user could not be updated")})
    }
}