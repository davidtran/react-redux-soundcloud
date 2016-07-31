
import { SET_PLAY_STATE, SET_RESUME_STATE, SET_PAUSE_STATE, TOGGLE_VOLUME, CHANGE_PLAYER_TIME } from '../actions/player'

export default function player(state = {
  song: null,
  isPlaying: false,
  volume: 100,
  time: 0
}, action) {
  switch (action.type) {
    case SET_PLAY_STATE:
      return Object.assign({}, state, {
        song: action.song,
        isPlaying: true,
        volume: 100,
        time: 0
      })
    case SET_PAUSE_STATE:
      return Object.assign({}, state, {
        isPlaying: false
      })
    case SET_RESUME_STATE:
      return Object.assign({}, state, {
        isPlaying: true
      })
    case CHANGE_PLAYER_TIME:
      return Object.assign({}, state, {
        time: action.time
      })
    case TOGGLE_VOLUME:
      return Object.assign({}, state, {
        isMuted: action.isMuted
      })
    default:
      return state
  }
}

