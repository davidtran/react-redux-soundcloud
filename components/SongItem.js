import React, { Component } from 'react'

export default class SongItem extends Component {
  render() {
    let { song, onPlaySong, onRemoveSong, onAddSong } = this.props

    return (
      <div className="row song-item">
        <div className="col-xs-3 avatar-column">
          <img className="avatar img-responsive" src={song.artwork_url} />
        </div>
        <div className="col-xs-7 song-name-column">
          <div className="song-title">{song.title}</div>
          <div className="song-artist">{song.user && <span>{song.user.username}</span>}</div>
        </div>
        <div className="col-xs-1 button-column-group">
          <div className="row">
            { typeof(onPlaySong) === 'function' &&
            <div className="col-xs-6 button-column">
              <a onClick={() => onPlaySong(song)}>
                <i className="glyphicon glyphicon-play"></i>
              </a>
            </div>
            }

            { onRemoveSong &&
            <div className="col-xs-6 button-column">
              <a onClick={() => onRemoveSong(song.id)}>
                <i className="glyphicon glyphicon-remove"></i>
              </a>
            </div>
            }

            { onAddSong &&
              <div className="col-xs-6 button-column">
                <a onClick={() => onAddSong(song)}>
                  <i className="glyphicon glyphicon-plus"></i>
                </a>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}