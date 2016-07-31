export const NEXT = 'NEXT'
export const PREVIOUS = 'PREVIOUS'
export const ADD_SONG = 'ADD_SONG'
export const REMOVE_SONG = 'REMOVE_SONG'

import { play } from './player'

export function playNextSong() {
  return (dispatch, getState) => {
    let state = getState()
    let nextSong = getNextSong(state)
    if (!nextSong) return null
    dispatch(play(nextSong))
    dispatch(next())
  }
}


export function playPreviousSong() {
  return (dispatch, getState) => {
    let state = getState()
    let previousSong = getPreviousSong(state)
    if (!previousSong) return null
    dispatch(play(previousSong))
    dispatch(previous())
  }
}

function next() {
  return {
    type: NEXT
  }
}

function previous() {
  return {
    type: PREVIOUS
  }
}

function getNextSong(state) {
  if (state.playlist.currentItemIndex < state.playlist.items.length - 1) {
    return state.playlist.items[state.playlist.currentItemIndex + 1]
  }
  return null
}

function getPreviousSong(state) {
  if (state.playlist.currentItemIndex > 0 && state.playlist.items.length > 0) {
    return state.playlist.items[state.playlist.currentItemIndex - 1]
  }
  return null
}


export function addSong(song) {
  return {
    type: ADD_SONG,
    song
  }
}

export function removeSong(id) {
  return {
    type: REMOVE_SONG,
    id
  }
}
