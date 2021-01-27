import axios from "axios";
export const type = "ADD_COMMENT";

let QUOTE_SERVICE_URL = "http://localhost:8080/api/activities";

if (process.env.NODE_ENV === "production") {
  QUOTE_SERVICE_URL = `/api/activities/`
}

const commentAction = (data) => (dispatch) => {
  const userObject = {
    comments: data.comments,
    userName: data.userName,
    userPic: data.userPic,
    date: data.date,
    like: 0,
    dislike: 0,
    idItinerary: data.idItinerary,
  };
  axios
    .post(QUOTE_SERVICE_URL, userObject)
    .then((response) => {
      dispatch({
        type: "ADD_COMMENT",
        payload: response.data,
      });
    })
    .catch((error) => console.log(error));
};

export default commentAction;
