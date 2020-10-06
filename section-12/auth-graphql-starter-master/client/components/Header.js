import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo';
import query from '../queries/CurrentUser'

class Header extends Component {
  renderButtons() {
    const { data: { loading, user } } = this.props
    if (loading) { return <div /> }

    if (user) {
      return (
        <div>
          Logout
        </div>
      )
    } else {
      return (
        <div>
          You're not signed in.
        </div>
      )
    }
  }

  render() {
    console.log(this.props.data)
    return (
      <nav>
        <div className="nav-wrapper">
          {this.renderButtons()}
        </div>
      </nav>
    )
  }
}

export default graphql(query)(Header)