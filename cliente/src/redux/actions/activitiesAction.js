export const type = 'activitiesAction';
const QUOTE_SERVICE_URL = 'http://localhost:8080/api/activities/';

const activitiesAction = (idItinerary) => async (dispatch) => {
    const res = await fetch(QUOTE_SERVICE_URL + idItinerary)
        .then(response => response.json())
        .catch(e => console.log(e));
    dispatch({
        type: type,
        payload: res,
    });
};

export default activitiesAction;