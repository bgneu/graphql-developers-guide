import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const SongList = (props) => {
  const renderSongs = () => {
    return props.data.songs.map(song => {
      return (
        <li key={song.id}>
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
      id
      title
    }
  }
`

export default graphql(query)(SongList)
