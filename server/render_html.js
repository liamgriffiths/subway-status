"use strict"

import React from "react"
import App from "../components/app"
import HTMLDocument from "../components/html_document"
import MTA from "../services/mta"
import {ASSETS} from "../config/constants"

export default async function renderHTML(req, res) {

  try {
    const statuses = await MTA.getServiceStatus()

    const doctype = "<!DOCTYPE html>"
    const html = React.renderToStaticMarkup(
      <HTMLDocument 
        title="hello mta"
        scripts={ ASSETS.JS }
        css={ ASSETS.CSS }
        data={ { statuses } }>
        <App data={ { statuses } }/>
      </HTMLDocument>
    )

    res.send(doctype + html)

  } catch(err) {
    res.status(500).send(err.stack)
  }
}
