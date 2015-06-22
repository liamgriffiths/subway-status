
"use strict"

import React, { Component, PropTypes } from "react"
import StyleSheet from "react-style"
import Modal from "./modal"
import { LINE_COLORS } from "../config/constants"

const styles = StyleSheet.create({
  li: {
    flex: 1,
    cursor: "pointer",
    margin: "0.3rem"
  },

  status: {
    fontSize: "3.3rem",
    fontWeight: 400,
    margin: "0rem 0.3rem"
  },

  circle: {
    display: "inline-block",
    fontSize: "3.3rem",
    lineHeight: "5rem",
    width: "5rem",
    height: "5rem",
    margin: "0.3rem",
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
      .trim()
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
