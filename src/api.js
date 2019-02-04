const url = 'https://jex-forget-me-not.herokuapp.com/note'

const separateItemsAndPaging = (resp) => {
  const { limit, skip, total, data } = resp
  const paging = { limit, skip, total }
  return {
    paging,
    data,
  }
}

export const loadItems = () =>
  fetch(url)
    .then(resp => resp.json())
    .then(separateItemsAndPaging)
