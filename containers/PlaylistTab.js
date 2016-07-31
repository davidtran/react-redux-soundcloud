import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeSong } from '../actions/playlist'
import { play } from '../actions/player'
import PlaylistTab from '../components/PlaylistTab'

const mapStateToProps = (state) => {
  return {
    items: state.playlist.items,
    currentItemIndex: state.playlist.currentItemIndex
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPlaySong: (song) => {
      dispatch(play(song))
    },
    onRemoveSong: (id) => {
      dispatch(removeSong(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistTab)