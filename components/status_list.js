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
    return (
      <ul styles={ [styles.list] }>
        { this.props.statuses.map(status => <Status status={ status } />) }
      </ul>
    )
  }
}
