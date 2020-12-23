import axios from "axios";

const QUOTE_SERVICE_URL = `http://localhost:${
  process.env.PORT || "8080"
}/api/user/createAccount`;

const newUser = (data) => async (dispatch) => {
  const userObject = {
    profilePic: data.profilePic,
    userName: data.userName,
    password: data.password,
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
    country: data.country,
    checkbox: data.checkbox,
    itinerariesFav: false,
  };
  await axios
    .post(QUOTE_SERVICE_URL, userObject)
    .then((response) => {
      dispatch({
        type: "NEW_USER",
        payload: response.data,
      });
    })
    .catch((error) => console.log(error));
};

export default newUser;
