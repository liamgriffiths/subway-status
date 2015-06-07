"use strict"

import React, { Component, PropTypes } from "react"
import StyleSheet from "react-style"
import StatusList from "./status_list"

const styles = StyleSheet.create({
  app: {
  }
})

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = props
  }

  static propTypes = {
  }

  static defaultProps = {
  }

  render() {
    const { statuses } = this.props.data

    return (
      <div styles={ [styles.app] }>
        <StatusList statuses={ statuses } />
      </div>
    )
  }
}
