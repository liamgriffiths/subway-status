"use strict"

import React, { Component, PropTypes } from "react"
import Promise from "bluebird"
import StatusList from "./status_list"
import API from "../client/api"

const TEN_SECONDS = 10 * 1000

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = props.data
  }

  static propTypes = {
    data: PropTypes.shape({ statuses: PropTypes.array }),
    refreshRate: PropTypes.number
  }

  static defaultProps = {
    data: { statuses: [] },
    refreshRate: TEN_SECONDS
  }

  async autoRefresh() {
    while (this._isMounted) {
      try {
        await Promise.delay(this.props.refreshRate)
        const statuses = await API.getServiceStatus()
        this.setState({ statuses })
      } catch(err) {
        console.error(err)
      }
    }
  }

  componentDidMount() {
    // note: a little hacky because React.Component does not use isMounted
    this._isMounted = true
    this.autoRefresh()
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    const { statuses } = this.state
    return <StatusList statuses={ statuses } />
  }
}
