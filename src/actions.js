export const LOAD_ITEMS_REQ = 'LOAD_ITEMS_REQ'
export const LOAD_ITEMS_OK = 'LOAD_ITEMS_OK'
export const LOAD_ITEMS_TIMEOUT = 'LOAD_ITEMS_TIMEOUT'
export const LOAD_ITEMS_ERR = 'LOAD_ITEMS_ERR'
export const LOAD_ITEMS_CANCEL = 'LOAD_ITEMS_CANCEL'

export const loadItems = () => ({ type: LOAD_ITEMS_REQ })
export const loadItemsOk = (items) => ({ type: LOAD_ITEMS_OK, items })
export const loadItemsTimeout = () => ({ type: LOAD_ITEMS_TIMEOUT })
export const loadItemsError = () => ({ type: LOAD_ITEMS_ERR })
export const loadItemsCancel = () => ({ type: LOAD_ITEMS_CANCEL })
