import axios from "axios";

const QUOTE_SERVICE_URL = `http://localhost:${
  process.env.PORT || "8080"
}/api/user/login`;

const startLogin = (user) => async (dispatch) => {
  await axios
    .post('/api/user/login', user, {
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
