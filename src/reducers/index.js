import { combineReducers } from 'redux';

export default combineReducers({
    api: (state = [], action) => {
        switch (action.type) {
            case "PUNK_API_REQUEST":
            return action.data;
          default:
            return state;
        }
    }
});