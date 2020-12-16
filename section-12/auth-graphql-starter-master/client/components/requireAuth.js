import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'
import { hashHistory } from 'react-router'

import query from '../queries/CurrentUser'
import {fromPairs} from 'lodash'

export default (WrappedComponent) => {
  class RequireAuth extends Component {
    componentWillUpdate(nextProps) {
      if (!nextProps.data.loading && !nextProps.data.user) {
        hashHistory.push('/login')
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return graphql(query)(RequireAuth)
}


