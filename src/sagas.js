import { takeEvery, delay, all, race, call, put } from 'redux-saga/effects'
import * as ACTIONS from './actions'

const api = {
  loadItems: () => new Promise(() => {}),
  // loadItems: () => Promise.resolve([{foo: 'bar'}])
}

function* loadItems(action) {
  // Once one of these finishes, we can proceed.
  const { items, timeout } = yield race({
    items: call(api.loadItems),
    timeout: delay(1000),
  })

  if (timeout) {
    yield put(ACTIONS.loadItemsTimeout())
  } else if (items) {
    console.log('got the items!', items)
  }
}

// The load items saga.
// This handles all the logic around loading items.
function* watchLoadItems() {
  // Every time we observe a LOAD_ITEMS_REQ, we trigger the AJAX call.  This
  // does not handle redundancies, though.  :O
  yield takeEvery(ACTIONS.LOAD_ITEMS_REQ, loadItems)
}

// The root saga wires up all the _other_ sagas in our app.
export default function* rootSaga() {
  yield all([
    watchLoadItems()
  ])
}
