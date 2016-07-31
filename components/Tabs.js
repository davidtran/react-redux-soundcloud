import React, { Component } from 'react'
import SearchTab from '../containers/SearchTab'
import PlaylistTab from '../containers/PlaylistTab'

export default class Tabs extends Component {

  constructor(props) {
    super(props)
    this.getVisibleTab = this.getVisibleTab.bind(this)
  }

  render() {
    let {activeTab, onChangeTab} = this.props
    return (
      <section className="tab-content">
        <div className="container-fluid">
          <div className="row">
            <ul className="tab-navigation nav nav-tabs">
              <li className={activeTab === "search" ? "active" : ""} onClick={() => onChangeTab('search')}>
                <a data-toggle="tab" id="search-tab-link">Search</a>
              </li>
              <li className={activeTab === "playlist" ? "active" : ""} onClick={() => onChangeTab('playlist')}>
                <a data-toggle="tab" id="search-tab-link">Playlist</a>
              </li>
            </ul>
            <div className="tab-content">
              { this.getVisibleTab() }
            </div>
          </div>
        </div>
      </section>
    )
  }

  getVisibleTab() {
    let {activeTab} = this.props
    if (activeTab === 'search') return <SearchTab />
    if (activeTab === 'playlist') return <PlaylistTab />
  }
}