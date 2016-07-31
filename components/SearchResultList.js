import React, { Component } from 'react'
import SongItem from './SongItem'

export default class SearchResultList extends Component {
  render() {
    let {items, onPlaySong, onAddSong, playingSong} = this.props
    return (
      <div className="tab-pane search-tab-pane active">
        { items.length > 0 &&
        <div className="song-list">
          { items.map(song =>
            <SongItem key={song.id} song={song} onPlaySong={onPlaySong} onAddSong={onAddSong} isPlaying={playingSong !== null && song.id === playingSong.id}/>
          )}
        </div>
        }

        { items.length === 0 &&
          <div id="search-help">
            <img src={require("./../images/arrow.jpg")} />
            <p>Search your music on SoundCloud</p>
          </div>
        }
      </div>
    )
  }
}