"use strict"

import { IS_PRODUCTION, ASSET_MAP_FILE } from "../config/constants"

const assetMap = IS_PRODUCTION ? require(ASSET_MAP_FILE) : {}
const LOCAL_URL = "/"
const CDN_URL = "/"

export const getAssetPath = (asset) =>
  IS_PRODUCTION ? `${CDN_URL}${assetMap[asset]}` : `${LOCAL_URL}${asset}`
