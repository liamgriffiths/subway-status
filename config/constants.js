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

export const CDN_PRODUCTION_URL = "//dup3ue92f0m33.cloudfront.net/production"
export const S3_PRODUCTION_URL = "//subway-statuses.s3.amazonaws.com/production"
export const DEV_ASSETS_PATH = "/static"
