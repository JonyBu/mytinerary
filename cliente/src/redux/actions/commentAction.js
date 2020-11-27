import axios from "axios";
export const type = "ADD_COMMENT";

const QUOTE_SERVICE_URL = "http://localhost:8080/api/activities";

const commentAction = (data) => (dispatch) => {
  const userObject = {
    comments: data.comments,
    name: data.name,
    date: data.date,
    idItinerary: data.idItinerary,
  };
  axios
    .post(QUOTE_SERVICE_URL, userObject)
    .then((response) => {
      dispatch({
        type: "ADD_COMMENT",
        payload: response.data,
      });
      console.log("succes: ", response.data);
    })
    .catch((error) => console.log("error: ", error));
};

export default commentAction;
