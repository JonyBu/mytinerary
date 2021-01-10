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

  var formData = new FormData();

  formData.append("profilePic", data.profilePic);
  formData.append("userName", data.userName);
  formData.append("password", data.password);
  formData.append("email", data.email);
  formData.append("firstname", data.firstName);
  formData.append("lastName", data.lastName);
  formData.append("country", data.country);

  // const config = { headers: { 'Content-Type': 'multipart/form-data' } };
  const config = { headers: { 'Content-Type':'application/x-www-form-urlencoded' } };

  await axios
    // .post(QUOTE_SERVICE_URL, userObject)
    .post(QUOTE_SERVICE_URL, formData, config)
    .then((response) => {
      dispatch({
        type: "NEW_USER",
        payload: response.data,
      });
    })
    .catch((error) => console.log(error));
};

export default newUser;
