import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const SongList = (props) => {
  const renderSongs = () => {
    return props.data.songs.map(song => {
      return (
        <li>
          {song.title}
        </li>
      )
    })
  }

  return (
    <div>
      {props.data.loading ? 'Loading...' : renderSongs()}
    </div>
  )
}

const query = gql`
  {
    songs {
      title
    }
  }
`

export default graphql(query)(SongList)
