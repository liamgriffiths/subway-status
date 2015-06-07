
"use strict"

import React, { Component, PropTypes } from "react"
import StyleSheet from "react-style"

const styles = StyleSheet.create({
  li: {
    flex: 1,
    padding: "1rem",
    margin: "1rem 0rem"
  },

  status: {
    fontSize: "3rem",
    fontWeight: 600,
    margin: "0rem 1rem"
  },

  train: {
    background: "goldenrod",
    fontSize: "3rem",
    width: "4rem",
    height: "4rem",
    padding: "1rem 1.8rem",
    margin: "0.2rem",
    fontWeight: 600,
    borderRadius: "50%",
    textAlign: "center"
  },

  colors: {
    L: { background: "silver" },
    S: { background: "silver" },

    G: { background: "green" },

    1: { background: "red" },
    2: { background: "red" },
    3: { background: "red" },

    N: { background: "yellow" },
    Q: { background: "yellow" },
    R: { background: "yellow" },

    4: { background: "green" },
    5: { background: "green" },
    6: { background: "green" },

    J: { background: "brown" },
    Z: { background: "brown" },

    B: { background: "orange" },
    D: { background: "orange" },
    F: { background: "orange" },
    M: { background: "orange" },

    7: { background: "purple" },

    A: { background: "blue" },
    C: { background: "blue" },
    E: { background: "blue" }
  }

})

export default class Status extends Component {
  static propTypes = {
    status: PropTypes.object.isRequired
  }

  static formatStatus(status) {
    return status
      .toLowerCase()
      .split(/\s+/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  static formatNames(names) {
    return names.split("")
  }

  render() {
    const { status, name } = this.props.status
    const formattedStatus = Status.formatStatus(status)
    const formattedNames = Status.formatNames(name)

    const circleTrains = formattedNames.map(name => {
      return <span styles={ [styles.train, styles.colors[name]]}>{ name }</span>
    })

    return (
      <li styles={ [styles.li] }>
        { circleTrains }

        <span styles={ [styles.status ] }>
          { formattedStatus }
        </span>
      </li>
    )
  }
}
