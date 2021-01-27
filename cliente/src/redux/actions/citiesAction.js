export const type = "citiesAction";

let QUOTE_SERVICE_URL = `http://localhost:${
  process.env.PORT || "8080"
}/api/cities`;

if (process.env.NODE_ENV === "production") {
  QUOTE_SERVICE_URL = `/api/cities`
}

const citiesAction = () => async (dispatch) => {
  const res = await fetch(QUOTE_SERVICE_URL, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "bearer " + sessionStorage.getItem("token"),
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
