import { combineReducers } from "redux"

// Import Redux Reducers
import form from './formReducer'

const rootReducer = combineReducers({
  form
})

export default rootReducer