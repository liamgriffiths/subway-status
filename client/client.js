"use strict"

import "babel/polyfill"
import React from "react"
import App from "../components/app"


React.initializeTouchEvents(true)

const body = document.querySelector("body")
React.render(<App data={ window.DATA } />, body)
