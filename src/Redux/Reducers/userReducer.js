const GetLocalUser = () => {
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"));
  }

  return null;
};

const InitailState = {
  user: GetLocalUser(),
};

const UserReducer = (state = InitailState, action) => {
  if (action.type === "Save_User_Data") {
    const newUser = {
      user: action.payload,
    };

    localStorage.setItem("user", JSON.stringify(action.payload));

    return newUser;
  }

  else if (action.type === "Update_User_Profile") {
    const newUser = {
      ...state,
      name: action.payload.name,
      gender: action.payload.gender,
    };

    console.log(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));

    return newUser;
  }

  //--
  else if (action.type === "Remove_User") {
    localStorage.removeItem("user");
    return { user: null };
  }

  return state;
};

export default UserReducer;
