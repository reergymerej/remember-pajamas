export const getIsLoading = (state) => state.isLoadingItems
export const getItemLoadTimeout = (state) => state.loadItemsTimeout
export const getItemsLoadError = (state) => state.loadItemsError
export const getItems = (state) => [...state.items]
