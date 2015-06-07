"use strict"

import { get } from "../utils/request"

class API {

  static getInstance() {
    if (!API._instance) API._instance = new API()
    return API._instance
  }

  static STATUSES_ENDPOINT = "/statuses.json"
  static REQUEST_TIMEOUT = 666

  async getServiceStatus() {
    return await get(API.STATUSES_ENDPOINT).timeout(API.REQUEST_TIMEOUT)
  }
}

export default API
