import { all } from "redux-saga/effects";

import feed from "./feed/sagas";

export default function* rootSaga() {
  return yield all([feed]);
}
