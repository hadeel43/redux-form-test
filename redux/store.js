import createDebounce from 'redux-debounced'
import {
    createLogger
} from 'redux-logger'
import {
    createStore,
    applyMiddleware
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

// Import Combined Reducers "rootReducer"
import rootReducer from "../reducers/index"

// Add Middleware
const middlewares = [
    createDebounce(), // allow debouncing of thunks / actions
    thunkMiddleware,
    createSagaMiddleware()
]

// Enable Thunk console logging in dev mode
if (process.env.NODE_ENV === 'development') {
    const loggerMiddleware = createLogger({
        collapsed: true
    })

    middlewares.push(loggerMiddleware)
}

// Do we have preloaded state available? Great, save it.
const initialState = {};

// Create Store
const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
)

export default store