import axios from 'axios';
var jwt_decode = require('jwt-decode');

const QUOTE_SERVICE_URL = 'http://localhost:8080/api/user/login';

const startLogin = user => dispatch => {
    axios.post(QUOTE_SERVICE_URL, user, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        }
    })
        .then(response => {
            console.log('respueta a login: ', response.data);
            if (response.data.secess) {
                localStorage.setItem("token", response.data.token)
                var token = localStorage.getItem("token");
                var decode = jwt_decode(token);
                alert("Bienvenido "+ decode.userName)
            } else {
                alert(response.data.message + " vuelva a loguearse")
            }
        })
        .catch(err => {
            console.log(err)
        })
}

export default startLogin;