export const type = 'itinerariesAction';
const QUOTE_SERVICE_URL = 'http://localhost:8080/api/itineraries';

const itinerariesAction = () => async (dispatch)=> {

    const res = await fetch(QUOTE_SERVICE_URL)
    .then(response => response.json())
    .catch(e => console.log(e));
    dispatch( {
        type:type,
        payload: res,
    });
};

export default itinerariesAction;