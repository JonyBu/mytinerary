import axios from "axios";
export const type = "itinerariesAction";

const QUOTE_SERVICE_URL = `http://localhost:${
  process.env.PORT || "8080"
}/api/itineraries/`;

const itinerariesAction = (idCity) => async (dispatch) => {
  await axios.get(QUOTE_SERVICE_URL + idCity, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "bearer " + sessionStorage.getItem("token"),
    },
  })
    .then((response) => {
      dispatch({
        type: type,
        payload: response.data,
      });
    } )
    .catch((e) => {
      console.log(e)
      dispatch({
        type: 'ERROR',
        message: e.message,
      })
    });
};

export default itinerariesAction;
