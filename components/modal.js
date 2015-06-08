"use strict"

// inspired by: https://github.com/Khan/react-components/blob/master/js/layered-component-mixin.jsx

import React, { Component, PropTypes } from "react"
import StyleSheet from "react-style"

const styles = StyleSheet.create({
  modal: {
  }
})

export default class Modal {
  constructor(element) {
    this._appendToDocument()
    this._element = (
      <div styles={ [styles.modal] }>
        { element }
      </div>
    )
  }

  _appendToDocument() {
    this._layer = document.createElement("div")
    document.body.appendChild(this._layer)
    this.render()
  }

  render() {
    if (this._element === null) {
      React.render(<noscript />, this._layer);
    } else {
      React.render(this._element, this._layer);
    }
  }

  unrender() {

  }

  remove() {
    if (this._layer) {
      React.unmountComponentAtNode(this._layer);
    }
  }
}

