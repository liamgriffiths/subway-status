"use strict"

import React from "react"
import App from "../components/app"
import HTMLDocument from "../components/html_document"
import MTA from "../services/mta"

export default async function renderHTML(req, res) {

  try {
    const statuses = await MTA.getInstance().getServiceStatus()

    const doctype = "<!DOCTYPE html>"
    const html = React.renderToStaticMarkup(
      <HTMLDocument 
        title="hello mta"
        scripts={ ["/static/bundle.js"] }
        css={ ["/static/bundle.css"] }
        data={ { statuses } }>
        <App data={ { statuses } }/>
      </HTMLDocument>
    )

    res.send(doctype + html)

  } catch(err) {
    res.status(500).send(err.stack)
  }
}
