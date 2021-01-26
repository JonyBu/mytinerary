import axios from "axios";
export const type = "ITINERARIES_FAV";

const QUOTE_SERVICE_URL = `http://localhost:${
  process.env.PORT || "8080"
}/api/itinerariesFav/`;

const itinerariesFavAction = (title) => async (dispatch) => {
  await axios.post(QUOTE_SERVICE_URL , title, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "bearer " + sessionStorage.getItem("token"),
    },
  })
    .then((response) => {
        console.log(response.data)
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

export default itinerariesFavAction;
