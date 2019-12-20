export const type = 'ADD_COMMENT';
const QUOTE_SERVICE_URL = 'http://localhost:8080/api/activities';

const commentAction = () => async (dispatch) => {
    const res = await fetch(QUOTE_SERVICE_URL)
        .then(response => response.json())
        .catch(e => console.log(e));
    dispatch({
        type: type,
        payload: res,
    });
}