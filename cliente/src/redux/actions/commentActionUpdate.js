import axios from "axios";
export const type = "UPDATE_COMMENT";

const commentAction = (data) => (dispatch) => {
  const QUOTE_SERVICE_URL = `http://localhost:${process.env.PORT || "8080"}/api/activities/`+data.id;

  axios
    .put(QUOTE_SERVICE_URL, { data })
    .then((response) => {
      dispatch({
        type: "UPDATE_COMMENT",
        payload: data,
      });
      console.log("succes: ", response.data);
    })
    .catch((error) => console.log("error: ", error));
};

export default commentAction;