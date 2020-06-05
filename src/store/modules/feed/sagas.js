import { takeLatest, call, put, all } from "redux-saga/effects";

import { FeedRequestSuccess, FeedRequestFailure } from "./actions";

export function* feedRequest() {
  try {
    const response = yield call(
      fetch,
      "https://my.api.mockaroo.com/instagram_feed.json?key=d3fb7580"
    );
    const feeds = yield call([response, response.json]);

    yield put(FeedRequestSuccess(feeds));
  } catch (err) {
    yield put(FeedRequestFailure());
  }
}

export default all([takeLatest("@feed/FEED_REQUEST", feedRequest)]);
