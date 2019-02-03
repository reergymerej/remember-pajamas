import * as ACTIONS from '../actions'

const initialState = {
  isLoadingItems: false,
  loadItemsTimeout: false,
  loadItemsError: false,
  items: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOAD_ITEMS_REQ:
      return {
        ...state,
        isLoadingItems: true,
        loadItemsTimeout: false,
        loadItemsError: false,
      }
    case ACTIONS.LOAD_ITEMS_ERR:
      return {
        ...state,
        isLoadingItems: false,
        loadItemsError: true,
      }
    case ACTIONS.LOAD_ITEMS_CANCEL:
      return {
        ...state,
        isLoadingItems: false,
      }
    case ACTIONS.LOAD_ITEMS_TIMEOUT:
      return {
        ...state,
        isLoadingItems: false,
        loadItemsTimeout: true,
      }
    case ACTIONS.LOAD_ITEMS_OK:
      return {
        ...state,
        isLoadingItems: false,
        items: action.items,
      }
    default:
      return state
  }
}
