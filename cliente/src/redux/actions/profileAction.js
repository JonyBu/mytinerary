import axios from 'axios';
const QUOTE_SERVICE_URL = 'http://localhost:8080/api/user/profile';

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

export const getProfileAction = () => dispatch => {
    const token = localStorage.token;
    if (token) {
        return axios.get(QUOTE_SERVICE_URL, {
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.message) {
                    localStorage.removeItem("token")
                } else {
                    dispatch(loginUser(data.user));
                }
            })
    }
}

export const logoutUser = () => ({
    type: 'LOGOUT_USER'
  });