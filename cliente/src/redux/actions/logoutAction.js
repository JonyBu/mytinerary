import axios from 'axios';
const QUOTE_SERVICE_URL = 'http://localhost:8080/api/user/profile';

const outLogin = () => dispatch => {
    axios.get(QUOTE_SERVICE_URL, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'bearer '+localStorage.getItem('token')
        }
    })
        .then(response => {
            console.log('respueta a logout: ', response.data);
            if (response.data) {
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