"use strict"

// todo: is there a better "isomorphic" request lib than superagent?
import request from "superagent"
import Promise from "bluebird"

export const get = (url) => {
  return new Promise((resolve, reject) => {
    request.get(url).end((err, res) => {
      if (err) {
        reject(err)
      } else {
        if (res.ok) {
          resolve(res)
        } else {
          reject(new Error(res.text))
        }
      }
    })
  })
}
