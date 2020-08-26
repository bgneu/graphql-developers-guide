import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const SongList = (props) => {
  const renderSongs = () => {
    return props.data.songs.map(song => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      )
    })
  }

  return (
    <ul className="collection">
      {props.data.loading ? 'Loading...' : renderSongs()}
    </ul>
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
