"use strict"

import React, { Component, PropTypes } from "react"
import Modal from "./modal"

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

  static renderLineSymbols(names) {
    const lineNames = Status.getLineNames(names)
    return lineNames.map((name, k) => {
      return <span key={ k } className={`circle line-${name}`}>{ name }</span>
    })
  }

  render() {
    const { status, name } = this.props.status
    const statusText = Status.getStatusText(status)
    const lineSymbols = Status.renderLineSymbols(name)

    return (
      <li>
        { lineSymbols }
        <span className="status-text">
          { statusText }
        </span>
      </li>
    )
  }
}
