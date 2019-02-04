import { createSelector } from 'reselect'

export const getIsLoading = (state) => state.isLoadingItems
export const getItemLoadTimeout = (state) => state.loadItemsTimeout
export const getItemsLoadError = (state) => state.loadItemsError
export const getItems = (state) => [...state.items]

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

export const getCurrentPage = createSelector(
  getItemsPageLimit,
  getItemsPageSkip,
  (pageSize, skip) => {
    const current = (skip / pageSize) + 1
    return isNaN(current) ? undefined : current
  }
)

export const getHasPreviousPage = createSelector(
  getCurrentPage,
  getTotalPages,
  // undefined if either is missing
  (current, pages) => (current && current) && (current > pages)
)

export const getHasNextPage = createSelector(
  getCurrentPage,
  getTotalPages,
  // undefined if either is missing
  (current, pages) => (current && current) && (current < pages)
)
