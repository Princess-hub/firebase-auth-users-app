const initialState = {
  users: [
    {
      name: "James k. Mensah",
      email: "jkm.mensah@gmail.com",
      gen: 4,
      id: "frf",
    },
    {
      name: "James k. Mensah",
      email: "jkm.mensah@gmail.com",
      gen: 4,
      id: "rfr",
    },
    {
      name: "James k. Mensah",
      email: "jkm.mensah@gmail.com",
      gen: 4,
      id: "frr",
    }
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
        console.log(action.payload)
      return {...state, users: [...state.users, action.payload]};
    case "DELETE_USER":
      let undeletedUsers = state.users.filter(user => user.id !== action.payload);
      return {...state, users: undeletedUsers}
    case "EDIT_USER":
        return  {...state, users: state.users.map(user => user.id === action.payload.id ? action.payload: user),}
    default:
      return state;
  }
};

export default usersReducer;