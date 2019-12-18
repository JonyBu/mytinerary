import axios from 'axios';
const QUOTE_SERVICE_URL = 'http://localhost:8080/api/user/login';

const startLogin = user => dispatch => {
    axios.post(QUOTE_SERVICE_URL, user, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        }
    })
        .then(response => {
            console.log('respueta a login: ', response);
        })
        .then(data => {
            if (data.message) {
                console.log("message:"+ data.message);
            } else {
                localStorage.setItem("token", data.jwt)
                dispatch(loginUser(data.user))
            }
        })
        .catch(err => {
            console.log(err)
        })
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

export default startLogin;