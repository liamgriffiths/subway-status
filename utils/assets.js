"use strict"

import { IS_PRODUCTION, ASSET_MAP_FILE, CDN_PRODUCTION_URL, DEV_ASSETS_PATH } from "../config/constants"

const assetMap = IS_PRODUCTION ? require(ASSET_MAP_FILE) : {}

export const getAssetPath = (asset) =>
  IS_PRODUCTION ? `${CDN_PRODUCTION_URL}/${assetMap[asset]}` : asset
