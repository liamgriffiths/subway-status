"use strict"

import parse from "xml-parser"
import { get } from "../utils/request"

class MTA {

  static STATUSES_ENDPOINT = "http://web.mta.info/status/serviceStatus.txt"
  static REQUEST_TIMEOUT = 666

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
  // [ { name, status, text, date, time } ... ]
  // todo: add caching? time-since-last-request?
  static async getServiceStatus() {
    const res = await get(MTA.STATUSES_ENDPOINT).timeout(MTA.REQUEST_TIMEOUT)
    const xml = res.text
    const parsed = MTA.parseServiceStatusXML(xml)

    // note: filter out staten island rail for now :P
    const filtered = parsed.filter(item => item.name !== "SIR")
    return filtered
  }
}

export default MTA
