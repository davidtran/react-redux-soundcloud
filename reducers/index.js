import { combineReducers } from 'redux'
import { PLAY } from '../actions/player'
import reduceReducers from 'reduce-reducers'
import playerReducer from './player'
import playlistReducer from './playlist'
import searchReducer from './search'
import tabsReducer from './tabs'
export default reduceReducers(combineReducers({
  player: playerReducer,
  playlist: playlistReducer,
  search: searchReducer,
  activeTab: tabsReducer
}), (state, action) => {
  return state
})