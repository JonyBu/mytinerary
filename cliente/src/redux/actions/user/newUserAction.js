import axios from "axios";

const QUOTE_SERVICE_URL = `http://localhost:${
  process.env.PORT || "8080"
}/api/user/createAccount`;

const newUser = (data) => async (dispatch) => {
  var formData = new FormData();

  formData.append("profilePic", data.profilePic);
  formData.append("userName", data.userName);
  formData.append("password", data.password);
  formData.append("email", data.email);
  formData.append("firstname", data.firstName);
  formData.append("lastName", data.lastName);
  formData.append("country", data.country);

  const config = { headers: { 'Content-Type': 'multipart/form-data' } };

  await axios
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
