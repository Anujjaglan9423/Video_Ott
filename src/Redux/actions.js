//USER
export const Save_User_Data = (data) => ({
  type: "Save_User_Data",
  payload: data,
});

export const Update_User_Profile = (data) => ({
  type: "Update_User_Profile",
  payload: data,
});

export const Remove_User = () => ({
  type: "Remove_User",
});
