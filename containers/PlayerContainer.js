import Player from '../components/Player'
import { connect } from 'react-redux'
import { togglePlayPause, seekByPercent, toggleVolume, getCurrentSong } from '../actions/player'
import { playNextSong, playPrevousSong } from '../actions/playlist'

function getCurrentTimePercent(state) {
  let song = getCurrentSong(state)
  if (!song) return 0
  return Math.round(song.position * 100 / song.duration)
}

const mapStateToProps = (state) => {
  return {
    song: state.player.song,
    isPlaying: state.player.isPlaying,
    isMuted: state.player.isMuted,
    currentTimePercent: getCurrentTimePercent(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playNextSong: () => {
      dispatch(playNextSong())
    },
    playPrevousSong: () => {
      dispatch(playPrevousSong())
    },
    togglePlayPause: () => {
      dispatch(togglePlayPause())
    },
    seekByPercent: (percent) => {
      dispatch(seekByPercent(percent))
    },
    toggleVolume: () => {
      dispatch(toggleVolume())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)

