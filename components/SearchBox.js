import React, { Component } from 'react'

export default class SearchBox extends Component {

  constructor(props) {
    super(props)
    this.onSearchInputKeyPress = this.onSearchInputKeyPress.bind(this)
  }

  render() {
    return (
      <div className="row search-box">
        <div className="col-xs-12">

            <div className="form-group">
              <input type="search" className="form-control search-input" ref={(ref) => this.searchInput = ref} onKeyPress={(e) => this.onSearchInputKeyPress(e)} />
              <span className="icon-search" />
            </div>

        </div>
      </div>
    )
  }

  onSearchInputKeyPress(e) {
    let { onSearch } = this.props
    if (e.charCode === 13) {
      onSearch(this.searchInput.value)
    }
  }
}