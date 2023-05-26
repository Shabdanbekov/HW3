const initialState = {
  user: {
    name: "",
    age: "",
    gender: "",
  },
};

const UPDATE_USER = "UPDATE_USER";
const reducer = (state = initialState, action) => {
  if (action.type === UPDATE_USER) {
    return {
      ...state,
      user: {
        ...state.user,
        [action.payload.key]: action.payload.value,
      },
    };
  } else {
    return state;
  }
};

export const updateUser = (key, value) => ({
  type: UPDATE_USER,
  payload: {
    value,
    key,
  },
});

export default reducer;
