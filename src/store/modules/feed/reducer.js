import produce from "immer";

import history from "../../../services/history";

const INITIAL_STATE = {
  loading: false,
  feeds: [],
};

function compare(a, b) {
  if (a.id > b.id) {
    return -1;
  }
  if (a.id < b.id) {
    return 1;
  }
  return 0;
}

export default function feeds(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@feed/FEED_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@feed/FEED_REQUEST_SUCCESS": {
        action.payload.feeds.sort(compare);

        draft.feeds = action.payload.feeds;
        draft.loading = false;
        break;
      }
      case "@feed/FEED_ADD": {
        const nextId = Math.max.apply(
          null,
          state.feeds.map((item) => item.id)
        );
        const newFeed = {
          ...action.payload,
          id: nextId + 1,
        };

        const newFeeds = [...state.feeds, newFeed];

        newFeeds.sort(compare);

        draft.feeds = newFeeds;
        history.push("/");
        break;
      }
      case "@feed/FEED_FAVORITE": {
        draft.feeds = draft.feeds.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, favorite: !item.favorite };
          }
          return item;
        });
        break;
      }

      default:
    }
  });
}
