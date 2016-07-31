import { NEXT, PREVIOUS, ADD_SONG, REMOVE_SONG } from '../actions/playlist'
import { SET_PLAY_STATE } from '../actions/player'

export default function playlist(state = {
  currentItemIndex: -1,
  items: []
}, action) {
  switch (action.type) {
    case NEXT:
      var newIndex = state.currentItemIndex
      if (state.currentItemIndex === state.items.length - 1) {
        newIndex = 0
      } else {
        newIndex++
      }
      return Object.assign({}, state, {
        currentItemIndex: newIndex
      })
    case PREVIOUS:
      var newIndex = state.currentItemIndex
      if (state.currentItemIndex === 0) {
        newIndex = state.items.length - 1
      } else {
        newIndex--
      }
      return Object.assign({}, state, {
        currentItemIndex: newIndex
      })
    case ADD_SONG:
      return Object.assign({}, state, {
        items: [...state.items, action.song]
      })
    case REMOVE_SONG:
      return Object.assign({}, state, {
        items: state.items.filter(song => song.id !== action.id)
      })
    case SET_PLAY_STATE:
      let index = state.items.indexOf(action.song)
      if (index >= 0) {
        return Object.assign({}, state, {
          items: state.items
        })
      } else {
        return Object.assign({}, state, {
          items: [...state.items, action.song]
        })
      }
    default:
      return state
  }
}