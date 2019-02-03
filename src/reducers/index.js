import * as ACTIONS from '../actions'

const initialState = {
  isLoadingItems: false,
  loadItemsTimeout: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOAD_ITEMS_REQ:
      return {
        ...state,
        isLoadingItems: true,
        loadItemsTimeout: false,
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
    default:
      return state
  }
}
