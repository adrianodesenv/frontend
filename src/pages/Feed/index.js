import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { FeedRequest, FeedFavorite } from "../../store/modules/feed/actions";

import { FaHeart, FaRegHeart } from "react-icons/fa";

//FaHeart => preenchido
//FaRegHeart => vazio

import "./styles.css";

import male from "../../assets/boy.png";
import female from "../../assets/girl.png";

import Header from "../../components/Header";

export default function Feed() {
  const dispatch = useDispatch();
  const feeds = useSelector((state) => state.feed.feeds);

  useEffect(() => {
    async function loadFeedInit() {
      if (feeds.length === 0) dispatch(FeedRequest());
    }
    loadFeedInit();
  }, [dispatch]);

  function handleFavorite(id) {
    dispatch(FeedFavorite(id));
  }

  return (
    <div>
      <Header />
      <div id="geral">
        <section>
          <div id="feed">
            {feeds.map((feed) => (
              <div key={feed.id} className="box">
                <header id="header-feed">
                  <img
                    src={feed.avatar === "Male" ? male : female}
                    width="62"
                    height="62"
                  />
                  <div id="personal">
                    <p>
                      {feed.first_name} {feed.last_name}
                    </p>
                    <p>
                      {feed.city}, {feed.country}
                    </p>
                  </div>
                </header>

                <img src={feed.picture} alt={"instagram " + feed.id} />
                {feed.favorite ? (
                  <button onClick={() => handleFavorite(feed.id)}>
                    <FaHeart size="24" color={"#ff0000"}></FaHeart>
                  </button>
                ) : (
                  <button onClick={() => handleFavorite(feed.id)}>
                    <FaRegHeart size="24" color={"#000"}></FaRegHeart>
                  </button>
                )}
                <div id="footer-box-feed">
                  <p>{feed.bio} </p>
                  <p>{feed.timestamp} </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
