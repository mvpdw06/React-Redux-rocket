import 'whatwg-fetch';
import { 
    INCREMENT, 
    DECREMENT, 
    FETCHDATASUCCESS 
} from './actionType';

const action = {
    increment: () => ({ type: INCREMENT }),
    decrement: () => ({ type: DECREMENT }),
    fetchData() {
        return (dispatch) => {
            fetch('/data/data.json')
            .then((response) => response.json())
            .then((data) => dispatch({
                type: FETCHDATASUCCESS,
                value: data.value
            }));
        }
    },
    fetchDataSuccess: (value) => ({ type: FETCHDATASUCCESS, value })
}

module.exports = action;