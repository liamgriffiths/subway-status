"use strict"

import parse from "xml-parser"
import { get } from "../utils/request"

class MTA {

  static getInstance() {
    if (!MTA._instance) MTA._instance = new MTA()
    return MTA._instance
  }

  static API_ENDPOINT = "http://web.mta.info/status/serviceStatus.txt"
  static API_REQUEST_TIMEOUT = 666

  static parseServiceStatusXML(xml) {
    // todo: clean up
    return parse(xml).root.children
      .filter(c => c.name === "subway")[0].children
      .map(subways => subways.children)
      .map(subway => {
        return subway.reduce((acc, next) => {
          return Object.assign(acc, {
            [next.name.toLowerCase()]: next.content
          })
        }, {})
      })
  }

  // returns something like:
  // [ { name, status, text, data, time } ... ]
  // todo: add caching? time-since-last-request?
  async getServiceStatus() {
    let res = await get(MTA.API_ENDPOINT).timeout(MTA.API_REQUEST_TIMEOUT)
    let xml = res.text
    let parsed = MTA.parseServiceStatusXML(xml)
    return parsed
  }
}

export default MTA
