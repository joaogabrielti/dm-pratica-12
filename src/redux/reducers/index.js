import { combineReducers } from 'redux';
import ProfileReducer from './ProfileReducer';

const Reducers = combineReducers({
    profile: ProfileReducer,
})

export default Reducers;