export const type = "citiesAction";
const QUOTE_SERVICE_URL = "http://localhost:8080/api/cities";

const citiesAction = () => async (dispatch) => {
  const res = await fetch(QUOTE_SERVICE_URL, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "bearer " + localStorage.getItem("token"),
    },
  })
    .then((response) => response.json())
    .catch((e) => {
      console.log(e);
    });
  dispatch({
    type: type,
    payload: res,
  });
};

export default citiesAction;
