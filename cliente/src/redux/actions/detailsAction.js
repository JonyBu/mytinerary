export const type = "detailsAction";
const QUOTE_SERVICE_URL = "http://localhost:8080/api/details/";

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
