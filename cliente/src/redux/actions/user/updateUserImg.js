import axios from "axios";

const updateUserImg = (data) => async (dispatch) => {

  var formData = new FormData();
  formData.append("profilePic", data.profilePic);

  const config = { headers: { "Content-Type": "multipart/form-data" } };

  let QUOTE_SERVICE_URL = `http://localhost:${
    process.env.PORT || "8080"
  }/api/user/profile/${data.id}`;

  if (process.env.NODE_ENV === "production") {
    QUOTE_SERVICE_URL = `/api/user/profile/${data.id}`
  }

  await axios
    .put(QUOTE_SERVICE_URL, formData, config)
    .then((response) => {
      dispatch({
        type: "UPDATE_USER_IMG",
        payload: response.data,
      });
    })
    .catch((error) => alert("error: ", error));
};

export default updateUserImg;
