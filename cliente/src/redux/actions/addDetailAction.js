import axios from "axios";
export const type = "ADD_DETAIL";

let QUOTE_SERVICE_URL = `http://localhost:${
  process.env.PORT || "8080"
}/api/details/`;

if (process.env.NODE_ENV === "production") {
  QUOTE_SERVICE_URL = `/api/details/`
}

const itinerariesAction = (data) => async (dispatch) => {
    var formData = new FormData();
    formData.append("title",data.title);
    formData.append("details",data.details);
    formData.append("idItinerary",data.idItinerary);
    formData.append("activityPic",data.activityPic);
    console.log(data)
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };

  await axios.post(QUOTE_SERVICE_URL , formData, config)
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