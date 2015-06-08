
"use strict"

import React, { Component, PropTypes } from "react"
import StyleSheet from "react-style"
import Modal from "./modal"
import { LINE_COLORS } from "../config/constants"

const styles = StyleSheet.create({
  li: {
    flex: 1,
    padding: "1rem",
    margin: "1rem 0rem",
    cursor: "pointer"
  },

  status: {
    fontSize: "3rem",
    fontWeight: 600,
    margin: "0rem 1rem"
  },

  circle: {
    fontSize: "3rem",
    width: "4rem",
    height: "4rem",
    padding: "1rem 1.8rem",
    margin: "0.2rem",
    fontWeight: 600,
    borderRadius: "50%",
    textAlign: "center"
  }
})


export default class Status extends Component {
  static propTypes = {
    status: PropTypes.object.isRequired
  }

  static getStatusText(status) {
    return status
      .toLowerCase()
      .split(/\s+/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  static getLineNames(names) {
    return names.split("")
  }

  static getLineColor(name) {
    return LINE_COLORS[name]
  }

  static renderLineSymbols(names) {
    const lineNames = Status.getLineNames(names)
    return lineNames.map((name, k) => {
      const color = { background: Status.getLineColor(name) }
      return <span key={ k } styles={ [styles.circle, color] }>{ name }</span>
    })
  }

  render() {
    const { status, name } = this.props.status
    const statusText = Status.getStatusText(status)
    const lineSymbols = Status.renderLineSymbols(name)

    return (
      <li styles={ [styles.li] }>
        { lineSymbols }
        <span styles={ [styles.status ] }>
          { statusText }
        </span>
      </li>
    )
  }
}
