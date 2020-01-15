import axios from 'axios'
export const type = 'DELETE_COMMENT';

const QUOTE_SERVICE_URL = 'http://localhost:8080/api/activities';

const commentAction = id => dispatch => {
    const data = { _id: id }
    axios.delete(QUOTE_SERVICE_URL, { data })
        .then(response => {
            dispatch({
                type: 'DELETE_COMMENT',
                payload: id
            })
            console.log('succes: ', response.data)
        })
        .catch(error => console.log('error: ', error));
}

export default commentAction;