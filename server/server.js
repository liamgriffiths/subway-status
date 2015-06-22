"use strict"

import express from "express"
import renderHTML from "./render_html"
import renderJSON from "./render_json"
import { ROUTES } from "../config/constants"

const PORT = process.env.PORT || 3000
const app = express()

app.use("/static", express.static("static"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  next()
})

app.get(ROUTES.WEB.HOME, renderHTML)
app.get(ROUTES.API.STATUSES, renderJSON)

app.listen(PORT, (e) => console.log(`Listening on port ${PORT}.`))
