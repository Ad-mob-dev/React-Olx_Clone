import root from './reducers/reducer';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const store = createStore(root,applyMiddleware(thunk));
export default store;