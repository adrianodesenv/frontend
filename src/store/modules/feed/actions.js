export function FeedRequest() {
  return {
    type: "@feed/FEED_REQUEST",
  };
}

export function FeedRequestSuccess(feeds) {
  return {
    type: "@feed/FEED_REQUEST_SUCCESS",
    payload: { feeds },
  };
}

export function FeedRequestFailure(error) {
  return {
    type: "@feed/FEED_REQUEST_Failure",
    payload: { error },
  };
}

export function FeedAdd(feed) {
  return {
    type: "@feed/FEED_ADD",
    payload: feed,
  };
}

export function FeedFavorite(id) {
  return {
    type: "@feed/FEED_FAVORITE",
    payload: { id },
  };
}
