"use strict"

import { IS_PRODUCTION, ASSET_MAP_FILE, S3_PRODUCTION_URL, DEV_ASSETS_PATH } from "../config/constants"

const assetMap = IS_PRODUCTION ? require(ASSET_MAP_FILE) : {}

export const getAssetPath = (asset) =>
  IS_PRODUCTION ? `${S3_PRODUCTION_URL}/${assetMap[asset]}` : `${DEV_ASSETS_PATH}/${asset}`
