import axios from 'axios';
const QUOTE_SERVICE_URL = 'http://localhost:8080/api/user/profile';

const getUser = user => dispatch => {
    axios.get(QUOTE_SERVICE_URL, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'bearer ' + localStorage.getItem('token')
        }
    })
        .then(response => {
            console.log(response.data)
            dispatch({
                type: 'GET_USER',
                payload: user,
            })
        })
        .catch(e => console.log(e));
    
}

export default getUser;