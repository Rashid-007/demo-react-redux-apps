import { combineReducers} from 'redux';
import {postsReducer} from './post-reducer';
import {userReducer} from './post-reducer';


export default combineReducers({
    posts: postsReducer,
    users: userReducer,
})

