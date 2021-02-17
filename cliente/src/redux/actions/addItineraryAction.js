import axios from "axios";
export const type = "ADD_ITINERARY";

let QUOTE_SERVICE_URL = `http://localhost:${
  process.env.PORT || "8080"
}/api/Additinerary/`;

if (process.env.NODE_ENV === "production") {
  QUOTE_SERVICE_URL = `/api/Additinerary/`
}

const itinerariesAction = (data) => async (dispatch) => {
    console.log(data)
  await axios.post(QUOTE_SERVICE_URL , data)
    .then((response) => {
      dispatch({
        type: type,
        payload: response.data,
      });
    } )
    .catch((e) => {
      console.error(e)
      dispatch({
        type: 'ERROR',
        message: e.message,
      })
    });
};

export default itinerariesAction;