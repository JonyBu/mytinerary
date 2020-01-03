import axios from 'axios';
// var jwt_decode = require('jwt-decode');

const QUOTE_SERVICE_URL = 'http://localhost:8080/api/user/login';

const startLogin = user => async dispatch => {
    await axios.post(QUOTE_SERVICE_URL, user, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        }
    })
        .then(response => {
            // console.log('respueta a login: ', response.data);
            // console.log(user);

            if (response.data.secess) {
                localStorage.setItem("token", response.data.token)
                //user.isConected = true
                dispatch({
                    type: 'LOGIN_USER',
                    payload: user
                })

                // var token = localStorage.getItem("token");
                // var decode = jwt_decode(token);
                // alert("Bienvenido " + decode.userName)
            } else {
                alert(response.data.message + " vuelva a loguearse")
            }
        })
        .catch(err => {
            console.log(err)
        })
}


export default startLogin;