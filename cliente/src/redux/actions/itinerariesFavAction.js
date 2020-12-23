import axios from "axios";
const QUOTE_SERVICE_URL = `http://localhost:${
  process.env.PORT || "8080"
}/api/itineraries`;

const itinerariesAction = (itineraryId) => (dispatch) => {
  const BODY = itineraryId;
  axios
    .post(QUOTE_SERVICE_URL, BODY, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "bearer " + sessionStorage.getItem("token"),
      },
    })
    .then((response) => {
      dispatch({
        type: "itinerariesFavAction",
        payload: response.data,
      });
    })
    .catch((e) => console.log(e));
};

export default itinerariesAction;
