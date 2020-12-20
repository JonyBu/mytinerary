import axios from "axios";
// import jwt_decode from "jwt-decode";

const QUOTE_SERVICE_URL = `http://localhost:${process.env.PORT || "8080"}/api/user/login`;

const startLogin = (user) => async (dispatch) => {
  await axios
    .post(QUOTE_SERVICE_URL, user, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => {
      console.log(response.data)
      if (response.data.success) {
        sessionStorage.setItem("token", response.data.token);
        dispatch({
          type: "LOGIN_USER",
          payload: user.userName,
        });
        // var token = sessionStorage.getItem("token");
        // var decode = jwt_decode(token);
      } else {
        alert(response.data.message + " vuelva a loguearse");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export default startLogin;
