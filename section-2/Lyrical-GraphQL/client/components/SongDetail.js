import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router'

import fetchSong from '../queries/fetchSong'

class SongDetail extends Component {
  render() {
    const { song } = this.props.data

    if (!song) { return <div>Loading...</div> }

    return (
      <div>
        <h3>{song.title}</h3>
      </div>
    )
  }
}

export default graphql(fetchSong, {
  options: (props) => ({ variables: { id: props.params.id } })
})(SongDetail)