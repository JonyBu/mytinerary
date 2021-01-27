export const type = "detailsAction";
let QUOTE_SERVICE_URL = `http://localhost:${process.env.PORT || "8080"}/api/details/`;

if (process.env.NODE_ENV === "production") {
  QUOTE_SERVICE_URL = `/api/details/`
}

const detailsAction = (itineraryId) => async (dispatch) => {
  const res = await fetch(QUOTE_SERVICE_URL + itineraryId)
    .then((response) => response.json())
    .catch((e) => console.log(e));
  dispatch({
    type: type,
    payload: res,
  });
};

export default detailsAction;
