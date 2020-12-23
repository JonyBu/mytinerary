import axios from "axios";
export const type = "UPDATE_COMMENT";

const commentAction = (data) => async (dispatch) => {
  const QUOTE_SERVICE_URL =
    `http://localhost:${process.env.PORT || "8080"}/api/activities/` + data.id;
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
