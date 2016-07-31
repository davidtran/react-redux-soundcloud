import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBox from '../components/SearchBox'
import SearchResultList from '../components/SearchResultList'
import { search } from '../actions/search'
import { play } from '../actions/player'
import { addSong } from '../actions/playlist'

class SearchTab extends Component {
  render() {
    let { onSearch, items, onPlaySong, playingSong, onAddSong } = this.props

    return (
      <div className="search-tab">
        <SearchBox onSearch={onSearch} />
        <SearchResultList items={items} onPlaySong={onPlaySong} playingSong={playingSong} onAddSong={onAddSong}/>
      </div>
    )
  }
}

function getPlayingSong(state) {
  if (state.player.song && state.player.isPlaying) {
    return state.player.song
  }
  return null
}

const mapStateToProps = (state) => {
  return {
    items: state.search.result,
    playingSong: getPlayingSong(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (query) => {
      dispatch(search(query))
    },
    onPlaySong: (song) => {
      dispatch(play(song))
    },
    onAddSong: (song) => {
      dispatch(addSong(song))
    }
  }
}

SearchTab = connect(mapStateToProps, mapDispatchToProps)(SearchTab)

export default SearchTab