import axios from "axios";
export const type = "DELETE_COMMENT";

let QUOTE_SERVICE_URL = `http://localhost:${
  process.env.PORT || "8080"
}/api/activities`;

if (process.env.NODE_ENV === "production") {
  QUOTE_SERVICE_URL = `/api/activities/`
}

const commentAction = (id) => (dispatch) => {
  const data = { _id: id };
  axios
    .delete(QUOTE_SERVICE_URL, { data })
    .then((response) => {
      dispatch({
        type: "DELETE_COMMENT",
        payload: id,
      });
    })
    .catch((error) => console.log(error));
};

export default commentAction;
