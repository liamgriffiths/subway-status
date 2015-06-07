"use strict"

import React, { Component, PropTypes } from "react"
import StyleSheet from "react-style"

const styles = StyleSheet.create`
  display: flex;
`

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = props
  }

  static propTypes = {
  }

  static defaultProps = {
  }

  renderStatus(status) {
    return (
      <li>
        <code>
          {status}
        </code>
      </li>
    )
  }

  render() {
    let statuses = this.props.data.statuses.map(({ name, status }) => {
      return <pre>{`${name}: ${status}`}</pre>
    })

    return (
      <div styles={[styles]}>{ statuses }</div>
    )
  }
}
