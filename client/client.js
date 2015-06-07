"use strict"

import React from "react"
import App from "../components/app"

const body = document.querySelector("body")
React.render(<App data={ window.DATA } />, body)
