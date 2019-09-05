import { all, fork } from 'redux-saga/effects'

const allSagas = {}

export default function* root() {
  const sagas = []

  for (const name of Object.keys(allSagas)) {
    if (name.includes('watch')) {
      sagas.push(
        fork(allSagas[name])
      )
    }
  }

  yield all(sagas)
}
