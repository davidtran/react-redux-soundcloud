import fetch from 'isomorphic-fetch'
import { SOUND_CLOUD_CLIENT_ID } from '../constants'
import { soundManager } from 'soundmanager2'
import { playNextSong } from './playlist'

export const SET_PLAY_STATE = 'SET_PLAY_STATE'
export const SET_PAUSE_STATE = 'SET_PAUSE_STATE'
export const SET_RESUME_STATE = 'SET_RESUME_STATE'
export const TOGGLE_PLAY_PAUSE = 'TOGGLE_PLAY_PAUSE'
export const PLAY_FIRST_SONG = 'PLAY_FIRST_SONG'
export const SEEK = 'SEEK'
export const TOGGLE_VOLUME = 'TOGGLE_VOLUME'
export const CHANGE_PLAYER_TIME = 'CHANGE_PLAYER_TIME'

let sounds = {}
let isMuted = false

export function play(song) {
  return (dispatch, getState) => {
    let state = getState()
    stopOldSound(state)
    createSoundObject(song, dispatch)
    dispatch(setPlayState(song))
  }
}

export function setPlayState(song) {
  return {
    type: SET_PLAY_STATE,
    song
  }
}

export function pause() {
  return (dispatch, getState) => {
    let state = getState()
    pauseSong(state)
    dispatch(setPauseState())
  }
}

export function setPauseState() {
  return {
    type: SET_PAUSE_STATE
  }
}

export function resume() {
  return (dispatch, getState) => {
    let state = getState()
    resumeSong(state)
    dispatch(setResumeState())
  }
}

export function setResumeState() {
  return {
    type: SET_RESUME_STATE
  }
}

export function seekByPercent(percent) {
  return (dispatch, getState) => {
    let state = getState()
    let time = setPlayerTimeByPercent(state, percent)
    return dispatch(setPlayerTime(time))
  }
}

export function setPlayerTime(time) {
  return {
    type: CHANGE_PLAYER_TIME,
    time
  }
}

export function playFirstSong() {
  return (dispatch, getState) => {
    let state = getState()
    if (state.playlist.items.length > 0) {
      let song = state.playlist.items[0]
      dispatch(play(song))
    }
  }
}

export function togglePlayPause() {
  return (dispatch, getState) => {
    let state = getState()
    if (!state.player.song) {
      dispatch(playFirstSong())
    } else if (state.player.isPlaying) {
      dispatch(pause())
    } else {
      dispatch(resume())
    }
  }
}

export function toggleVolume() {
  return (dispatch, getState) => {
    let state = getState()
    toggleAudioVolume(state)
    dispatch({
      type: TOGGLE_VOLUME,
      isMuted: isMuted
    })
  }
}

function createSoundObject(song, dispatch) {
  let sound = soundManager.getSoundById(song.id)
  if (typeof(sound) === 'undefined') {
    let url = song.stream_url + '?client_id=' + SOUND_CLOUD_CLIENT_ID
    sound = soundManager.createSound({
      id: song.id,
      url: url,
      volume: 100,
      whileplaying: () => {
        dispatch(setPlayerTime(sound.position))
      },
      onpause: () => {
        dispatch(setPauseState())
      },
      onplay: () => {
        dispatch(setPlayState(song))
      },
      onstop: () => dispatch(setPauseState()),
      onfinish: () => dispatch(playNextSong())
    })
    if (isMuted) {
      song.mute()
    }
    sounds[song.id] = sound
  }
  sound.play();
}

function setPlayerTimeByPercent(state, percent) {
  let song = getCurrentSong(state)
  if (!song) return
  let time = Math.round(percent * song.duration / 100)
  song.setPosition(time)
  return time
}

function stopOldSound(state) {
  if (!state.player.song) return
  let sound = sounds[state.player.song.id]
  sound.pause()
  sound.setPosition(0)
}

function toggleAudioVolume(state) {
  isMuted = !isMuted
  if (!state.player.song) return
  let sound = sounds[state.player.song.id]
  if (isMuted) {
    sound.mute()
  } else {
    sound.unmute()
  }
  return isMuted
}

function resumeSong(state) {
  let song = getCurrentSong(state)
  if (song && song.paused) song.resume()
}

function pauseSong(state) {
  let song = getCurrentSong(state)
  if (song && !song.paused) song.pause()
}


export function getCurrentSong(state) {
  if (!state.player.song) return
  let sound = sounds[state.player.song.id]
  return sound
}