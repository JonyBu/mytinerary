import axios from "axios";
export const type = "UPDATE_USER";

const updateUserAction = (data) => (dispatch) => {
  const QUOTE_SERVICE_URL = `http://localhost:${
    process.env.PORT || "8080"
  }/api/user/profile/${data.id}`;
  axios
    .put(QUOTE_SERVICE_URL, data)
    .then((response) => {
      dispatch({
        type: "UPDATE_USER",
        payload: data,
      });
    })
    .catch((error) => alert("error: ", error));
};

export default updateUserAction;
