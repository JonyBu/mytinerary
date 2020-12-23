import axios from "axios";
const QUOTE_SERVICE_URL = `http://localhost:${
  process.env.PORT || "8080"
}/api/user/profile`;

const outLogin = () => (dispatch) => {
  axios
    .get(QUOTE_SERVICE_URL, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "bearer " + sessionStorage.getItem("token"),
      },
    })
    .then((response) => {
      sessionStorage.removeItem("token");
      dispatch({
        type: "LOGOUT_USER",
        payload: [],
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export default outLogin;
