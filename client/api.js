"use strict"

import { get } from "../utils/request"

class API {

  static STATUSES_ENDPOINT = "/statuses.json"
  static REQUEST_TIMEOUT = 666

  static async getServiceStatus() {
    const res = await get(API.STATUSES_ENDPOINT).timeout(API.REQUEST_TIMEOUT)
    return res.body
  }
}

export default API
