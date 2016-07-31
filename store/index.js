import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import asyncApp from '../reducers'

const loggerMiddleware = createLogger()

export default function configureStore(initialState) {
  return createStore(
    asyncApp,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}