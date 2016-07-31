import React, { Component } from 'react'
import SongItem from './SongItem'
export default class PlaylistTab extends Component {
  render() {
    let {items, onPlaySong, onRemoveSong} = this.props
    return (
      <div className="tab-pane playlist-tab-pane active">
        { items.map(song =>
          <SongItem key={song.id} song={song} onPlaySong={onPlaySong} onRemoveSong={onRemoveSong} />
        )}
      </div>
    )
  }
}