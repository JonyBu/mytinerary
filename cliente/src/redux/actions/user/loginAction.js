import axios from "axios";

let QUOTE_SERVICE_URL = `http://localhost:${
  process.env.PORT || "8080"
}/api/user/login`;

if (process.env.NODE_ENV === "production") {
  QUOTE_SERVICE_URL = '/api/user/login'
}


const startLogin = (user) => async (dispatch) => {
  await axios
    .post(QUOTE_SERVICE_URL, user, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => {
      sessionStorage.setItem("token", response.data.token);
      dispatch({
        type: "LOGIN_USER",
        payload: user.userName,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export default startLogin;
