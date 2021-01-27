export const type = "activitiesAction";

let QUOTE_SERVICE_URL = `http://localhost:${
  process.env.PORT || "8080"
}/api/activities/`;

if (process.env.NODE_ENV === "production") {
  QUOTE_SERVICE_URL = `/api/activities/`
}

const activitiesAction = (idItinerary) => async (dispatch) => {
  const res = await fetch(QUOTE_SERVICE_URL + idItinerary)
    .then((response) => response.json())
    .catch((e) => console.log(e));
  dispatch({
    type: type,
    payload: res,
  });
};

export default activitiesAction;
