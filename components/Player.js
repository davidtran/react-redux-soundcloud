import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SONG_PLAYHOLDER_IMAGE } from '../constants'
import ReactSlider from 'react-slider'

class Player extends Component {
  render() {
    let {song, currentTimePercent, isPlaying, isMuted, playPrevousSong, playNextSong, togglePlayPause, toggleVolume, seekByPercent} = this.props

    return (
      <section className="player">
        <div className="row">
          <div className="col-xs-4 player-image">
            <img className="artist-image" width="81" height="81" src={ this.getSongUrl() } />
          </div>
          <div className="col-xs-8 player-info">
            {song &&
              <div>
                <h2 className="song-title">{song.title}</h2>
                <h3 className="song-artist">{song.user.username}</h3>
              </div>
            }
            <div className="buttons-group">
              <div className="pull-left player-state-buttons">
                <a className="player-btn btn-previous" onClick={() => playPrevousSong()}>
                  <i className="glyphicon glyphicon-backward"></i>
                </a>
                <a className="player-btn btn-play-pause" onClick={() => togglePlayPause()}>
                  {isPlaying ?
                    <i className="glyphicon glyphicon-pause"></i> :
                    <i className="glyphicon glyphicon-play"></i>
                  }
                </a>
                <a className="player-btn btn-next" onClick={() => playNextSong()}>
                  <i className="glyphicon glyphicon-forward"></i>
                </a>


              </div>
              <div className="pull-right">
                <a className="btn-toggle-volume" onClick={() => toggleVolume()}>
                  { isMuted ?
                      <i className="glyphicon glyphicon-volume-off"></i> :
                      <i className="glyphicon glyphicon-volume-up"></i>
                  }
                </a>
              </div>

            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-xs-12"><ReactSlider defaultValue={0} value={currentTimePercent} min={0} max={100} className="time-slider" onChange={(timePercent) => seekByPercent(timePercent)} handleClassName="time-handler"/></div>
        </div>
      </section>
    )
  }

  getSongUrl() {
    let { song } = this.props
    return song ? song.artwork_url : SONG_PLAYHOLDER_IMAGE
  }
}

export default Player