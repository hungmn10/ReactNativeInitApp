import {createStore,applyMiddleware} from 'redux';
import reducer from './redux/reducers/index';
import thunk from 'redux-thunk'

export default store = createStore(
  reducer,// reducer
  {},// payload
  applyMiddleware(thunk) // middleware
)
