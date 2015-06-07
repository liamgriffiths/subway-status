"use strict"

import React, { Component, PropTypes } from "react"
import StyleSheet from "react-style"
import Status from "./status"

const styles = StyleSheet.create({
  list: {
    display: "flex",
    flexDirection: "column"
  }
})

export default class StatusList extends Component {
  static propTypes = {
    statuses: PropTypes.array.isRequired
  }

  render() {
    const { statuses } = this.props

    return (
      <ul styles={ [styles.list] }>
        { statuses.map((status, k) => <Status key={ k } status={ status } />) }
      </ul>
    )
  }
}
