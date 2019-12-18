import axios from 'axios';
const QUOTE_SERVICE_URL = 'http://localhost:8080/api/user/profile';

const outLogin = user => dispatch => {
    axios.get(QUOTE_SERVICE_URL, user, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        }
    })
        .then(response => {
            console.log('respueta a login: ', response.data);
            if (response.data.secess) {
                localStorage.removeItem('token')
            } else {
                alert(response.data.message + " vuelva a loguearse")
            }
        })
        .catch(err => {
            console.log(err)
        })
}

export default outLogin;