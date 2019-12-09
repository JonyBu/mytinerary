export const type = 'usersAction';
const QUOTE_SERVICE_URL = 'http://localhost:8080/api/user/createAccount';

const usersAction = () => async (dispatch)=> {
    const res = await fetch(QUOTE_SERVICE_URL)
    .then(response => response.json())
    .catch(e => console.log(e));
    dispatch( {
        type:type,
        payload: res,
    });
};

export default usersAction;