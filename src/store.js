import { createStore } from 'redux';
import counterReducer from './redux/reducers/counterReducers';

const store = createStore(counterReducer);

export default store;