import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'


render(
  <Root />,
  document.getElementById('root')
)

// import { createStore, applyMiddleware } from 'redux'
// import { play, pause, resume, playFirstSong, playNextSong, playPreviousSong, togglePlayPause, addSong, removeSong } from './actions'
// import playerReducer from './reducers/player'
// import thunk from 'redux-thunk'
// import createLogger from 'redux-logger'

// let logger = createLogger()

// const store = createStore(
//   playerReducer,
//   {
//     player: null,
//     playlist: {
//       currentItemIndex: -1,
//       items: []
//     }
//   },
//   applyMiddleware(
//     thunk,
//     logger
//   )
// )

// let nextId = 0

// store.dispatch(addSong(createSong()))
// store.dispatch(addSong(createSong()))
// store.dispatch(addSong(createSong()))
// store.dispatch(addSong(createSong()))
// store.dispatch(addSong(createSong()))

// let song = createSong()
// store.dispatch(pause())
// store.dispatch(playFirstSong())
// store.dispatch(playNextSong())
// store.dispatch(playPreviousSong())
// store.dispatch(playNextSong())
// store.dispatch(playNextSong())

// function createSong() {
//   nextId++
//   return {
//     id: nextId,
//     name: 'Work, work, work',
//     duration: 120,
//     artist: 'Mike'
//   }
// }
