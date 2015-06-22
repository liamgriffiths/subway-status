"use strict"

import React, { Component, PropTypes } from "react"
import Status from "./status"

export default class StatusList extends Component {
  static propTypes = {
    statuses: PropTypes.array.isRequired
  }

  render() {
    const { statuses } = this.props

    return (
      <ul className="status-list">
        { statuses.map((status, k) => <Status key={ k } status={ status } />) }
      </ul>
    )
  }
}
