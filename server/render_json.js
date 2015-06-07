"use strict"

import MTA from "../services/mta"

export default async function renderJSON(req, res) {
  try {
    const statuses = await MTA.getInstance().getServiceStatus()
    res.set("Content-Type", "application/json").send(statuses)
  } catch(err) {
    res.send(err.stack)
  }
}
