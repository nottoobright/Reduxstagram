import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';

//custom imports
import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({posts, comments,
    router: routeReducer})

export default rootReducer;