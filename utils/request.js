"use strict"

import request from "superagent"
import Promise from "bluebird"

export const get = (url) => {
  return new Promise((resolve, reject) => {
    request.get(url).end((err, res) => err ? reject(err) : resolve(res))
  })
}
