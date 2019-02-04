import { takeEvery, delay, all, race, call, put, fork, take, cancelled, cancel } from 'redux-saga/effects'
import * as ACTIONS from './actions'
import * as api from './api'

function* fetchItems() {
  try {
    const { items, timeout } = yield race({
      timeout: delay(2000),
      items: call(api.loadItems),
    })

    if (timeout) {
      yield put(ACTIONS.loadItemsTimeout())
    } else {
      yield put(ACTIONS.loadItemsOk(items.data))
    }

  } catch (e) {
    yield put(ACTIONS.loadItemsError(e))
  } finally {
    if (yield cancelled()) {
      console.log('I got cancelled!')
    }
  }
}

// This is the logic to call the api and handle cancellation.
function* loadItems() {
  const task = yield fork(fetchItems)
  // If I don't take any that could also come from the fork, will this just sit
  // here?
  const action = yield take([
    ACTIONS.LOAD_ITEMS_TIMEOUT,
    ACTIONS.LOAD_ITEMS_ERR,
    ACTIONS.LOAD_ITEMS_CANCEL,
    ACTIONS.LOAD_ITEMS_OK,
  ])

  if (action.type === ACTIONS.LOAD_ITEMS_CANCEL) {
    yield cancel(task)
  }
}

function* watchLoadItems() {
  yield takeEvery(ACTIONS.LOAD_ITEMS_REQ, loadItems)
}

// The root saga wires up all the _other_ sagas in our app.
export default function* rootSaga() {
  yield all([
    watchLoadItems()
  ])
}
