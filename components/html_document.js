"use strict"

import React, { Component, PropTypes } from "react"
import { getAssetPath } from "../utils/assets"

class HTMLDocument extends Component {
  static propTypes = {
    title: PropTypes.string,
    scripts: PropTypes.array,
    css: PropTypes.array,
    data: PropTypes.object
  }

  static defaultProps = {
    data: {}
  }

  render() {
    const { children, title, scripts, css, data } = this.props
    const bootstrap = `window.DATA = ${JSON.stringify(data)};`

    return (
      <html>
        <head>
          <title>{ title }</title>
          { css.map((href, k) => <link key={ k } rel="stylesheet" href={ getAssetPath(href) } />) }
        </head>

        <body>
          { children }
        </body>

        <script dangerouslySetInnerHTML={{ __html: bootstrap }} />
        { scripts.map((src, k) => <script key={ k } src={ getAssetPath(src) } />) }
      </html>
    )
  }
}

export default HTMLDocument
