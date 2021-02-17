import axios from "axios";

const updateCities = (data) => async (dispatch) => {

  let QUOTE_SERVICE_URL = `http://localhost:${
    process.env.PORT || "8080"
  }/api/cities/${data.id}`;

  if (process.env.NODE_ENV === "production") {
    QUOTE_SERVICE_URL = `/api/cities/${data.id}`
  }

  console.log(data)

  await axios
    .put(QUOTE_SERVICE_URL, data)
    .then((response) => {
      dispatch({
        type: "UPDATE_CITIES",
        payload: response.data,
      });
    })
    .catch((error) => alert("error: ", error));
};

export default updateCities;
