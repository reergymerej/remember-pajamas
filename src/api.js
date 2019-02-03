const url = 'https://jex-forget-me-not.herokuapp.com/note'

export const loadItems = () =>
  fetch(url)
    .then(resp => resp.json())
