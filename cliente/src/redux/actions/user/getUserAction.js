import axios from "axios";

let QUOTE_SERVICE_URL = `http://localhost:${
  process.env.PORT || "8080"
}/api/user/profile`;

if (process.env.NODE_ENV === "production") {
  QUOTE_SERVICE_URL = '/api/user/profile'
}

const getUser = () => async (dispatch) => {
  await axios
    .get(QUOTE_SERVICE_URL, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "bearer " + sessionStorage.getItem("token"),
      },
    })
    .then((response) => {
      dispatch({
        type: "GET_USER",
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getUser;
