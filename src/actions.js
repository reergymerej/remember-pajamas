export const LOAD_ITEMS_REQ = 'LOAD_ITEMS_REQ'
export const LOAD_ITEMS_CANCEL = 'LOAD_ITEMS_CANCEL'
export const LOAD_ITEMS_TIMEOUT = 'LOAD_ITEMS_TIMEOUT'

export const loadItems = () => ({ type: LOAD_ITEMS_REQ })
export const loadItemsCancel = () => ({ type: LOAD_ITEMS_CANCEL })
export const loadItemsTimeout = () => ({ type: LOAD_ITEMS_TIMEOUT })
