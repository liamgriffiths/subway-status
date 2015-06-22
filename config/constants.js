export const ASSETS = {
  JS: [ "static/bundle.js" ],
  CSS: [ "static/bundle.css" ]
}

export const ASSET_MAP_FILE = "../static/assets.json"

export const ROUTES = {
  WEB: {
    HOME: "/",
  },

  API: {
    STATUSES: "/api/statuses"
  }
}

export const IS_PRODUCTION = process.env.NODE_ENV === "production"
