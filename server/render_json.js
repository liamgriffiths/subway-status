"use strict"

import MTA from "../services/mta"

export default async function renderJSON(req, res) {
  try {
    const statuses = await MTA.getServiceStatus()
    res.set("Content-Type", "application/json").send(statuses)
  } catch(err) {
    res.status(500).send(err.stack)
  }
}
