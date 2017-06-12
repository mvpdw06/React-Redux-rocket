import { 
    INCREMENT, 
    DECREMENT, 
    FETCHDATASUCCESS 
} from './actionType';

const initState = {
    count: 0,
    data: '初始資料'
}

const Reducer = (state = initState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        case FETCHDATASUCCESS:
            return {
                ...state,
                data: action.value
            };
        default:
            return state;
    }
}

module.exports = Reducer;