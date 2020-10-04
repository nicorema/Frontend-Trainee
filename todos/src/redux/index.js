import { combineReducers } from 'redux'
import reducer from './reducers/todos'

export default combineReducers({ app: reducer })
