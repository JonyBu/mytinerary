import axios from "axios";
const QUOTE_SERVICE_URL = "http://localhost:8080/api/user/profile";

const outLogin = (data) => (dispatch) => {
  axios
    .get(QUOTE_SERVICE_URL, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "bearer " + sessionStorage.getItem("token"),
      },
    })
    .then((response) => {
      //console.log('respueta a logout: ', response.data);
      //console.log('data: ', data);
      if (response.data) {
        sessionStorage.removeItem("token");
        data.currentUser = [];
        data.isConected = false;
        dispatch({
          type: "LOGOUT_USER",
          payload: [],
        });
      } else {
        alert(response.data.message + "vuelva a loguearse");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export default outLogin;
