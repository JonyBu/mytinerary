import axios from "axios";
export const type = "UPDATE_USER";

const updateUserImg = (data) => (dispatch) => {
console.log(data)
var formData = new FormData();
formData.append("profilePic", data.profilePic);

const config = { headers: { 'Content-Type': 'multipart/form-data' } };

  const QUOTE_SERVICE_URL = `http://localhost:${
    process.env.PORT || "8080"
  }/api/user/profile/${data.id}`;
  axios
    .put(QUOTE_SERVICE_URL, formData, config)
    .then((response) => {
      dispatch({
        type: "UPDATE_USER_IMG",
        payload: data,
      });
    })
    .catch((error) => alert("error: ", error));
};

export default updateUserImg;
