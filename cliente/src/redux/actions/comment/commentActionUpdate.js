import axios from "axios";
export const type = "UPDATE_COMMENT";

const commentAction = (data) => async (dispatch) => {
  let QUOTE_SERVICE_URL =
    `http://localhost:${process.env.PORT || "8080"}/api/activities/` + data.id;

    if (process.env.NODE_ENV === "production") {
      QUOTE_SERVICE_URL = `/api/activities/`
    }


  await axios
    .put(QUOTE_SERVICE_URL, { data })
    .then((response) => {
      dispatch({
        type: "UPDATE_COMMENT",
        payload: data,
      });
    })
    .catch((error) => console.log(error));
};

export default commentAction;
