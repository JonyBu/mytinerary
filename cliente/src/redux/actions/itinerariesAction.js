export const type = "itinerariesAction";
const QUOTE_SERVICE_URL = `http://localhost:${
  process.env.PORT || "8080"
}/api/itineraries/`;

const itinerariesAction = (idCity) => async (dispatch) => {
  const res = await fetch(QUOTE_SERVICE_URL + idCity, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "bearer " + sessionStorage.getItem("token"),
    },
  })
    .then((response) => response.json())
    .catch((e) => console.log(e));
  dispatch({
    type: type,
    payload: res,
  });
};

export default itinerariesAction;
