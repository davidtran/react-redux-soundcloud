import React, { Component } from 'react'
import Tabs from '../containers/Tabs'
import PlayerContainer from '../containers/PlayerContainer'

export default class App extends Component {
  render() {
    return (
      <div>
        <PlayerContainer />
        <Tabs />
      </div>
    )
  }
}