import { createSelector } from 'reselect'

export const getIsLoading = (state) => state.isLoadingItems
export const getItemLoadTimeout = (state) => state.loadItemsTimeout
export const getItemsLoadError = (state) => state.loadItemsError
export const getItems = (state) => [...state.items]

// limit, skip, total
export const getItemsPageLimit = (state) => (state.itemsPaging || {}).limit
export const getItemsPageSkip = (state) => (state.itemsPaging || {}).skip
export const getItemsPageTotal = (state) => (state.itemsPaging || {}).total

export const getTotalPages = createSelector(
  getItemsPageLimit,
  getItemsPageSkip,
  getItemsPageTotal,
  (limit, skip, total) => {
    const pages = Math.ceil(total / limit)
    return isNaN(pages) ? undefined : pages
  }
)
