const initialState = {
  users: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_SUCCESS":
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};

export default UserReducer;
