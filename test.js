import { createStore, applyMiddleware } from 'redux'
import { play, pause, resume, playFirstSong, playNextSong, playPreviousSong, togglePlayPause, addSong, removeSong } from './actions'
import playerReducer from './reducers/player'
import thunk from 'redux-thunk'

const store = createStore(
  playerReducer,
  null,
  applyMiddleware(
    thunk
  )
)

let nextId = 0

let unsubscribe = store.subscribe(() => console.log(store.getState()))

dispatch(addSong(createSong()))
dispatch(addSong(createSong()))
dispatch(addSong(createSong()))
dispatch(addSong(createSong()))
dispatch(addSong(createSong()))

// dispatch(play(song))
// dispatch(pause())
// dispatch(previous())
// dispatch(playFirstSong())

function createSong() {
  nextId++
  return {
    id: nextId,
    name: 'Work, work, work',
    duration: 120,
    artist: 'Mike'
  }
}