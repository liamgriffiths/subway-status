"use strict"

import { get } from "../utils/request"
import { ROUTES } from "../config/constants"

export default class API {

  static REQUEST_TIMEOUT = 666

  static async getServiceStatus() {
    const res = await get(ROUTES.API.STATUSES).timeout(API.REQUEST_TIMEOUT)
    return res.body
  }
}
