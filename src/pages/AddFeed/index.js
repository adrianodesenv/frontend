import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaAngleLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { FeedAdd } from "../../store/modules/feed/actions";
import logo from "../../assets/Instagram_logo.svg";
import "./styles.css";

export default function () {
  const _defaultFields = {
    first_name: "Rand",
    last_name: "Assiter",
    avatar: "Male",
    bio: "",
    city: "",
    country: "",
    username: "rassiter3",
    timestamp: "10:07",
    picture: "http://dummyimage.com/500x500.jpg/5fa2dd/ffffff",
  };

  const [fields, setFields] = useState({ ..._defaultFields });
  const dispatch = useDispatch();

  const handleInputChange = (evt) => {
    setFields({
      ...fields,
      [evt.target.id]: evt.target.value,
    });
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    dispatch(FeedAdd(fields));
    setFields(_defaultFields);
  };

  return (
    <div id="addFeed">
      <div id="heade_add_feed">
        <img className="logo" src={logo} alt="InstaRocket" />
        <h1>Adicionar Post</h1>
        <Link to="/">
          <FaAngleLeft size="44" color={"#000"}></FaAngleLeft>
        </Link>
      </div>

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="bio">BIO</label>
        <input
          id="bio"
          type="text"
          value={fields.bio}
          onChange={handleInputChange}
        />
        <label htmlFor="city">Cidade</label>
        <input
          id="city"
          type="text"
          value={fields.city}
          onChange={handleInputChange}
        />
        <label htmlFor="country">Pais</label>
        <input
          id="country"
          type="text"
          value={fields.country}
          onChange={handleInputChange}
        />
        <button type="submit">Adicionar Post</button>
      </form>
    </div>
  );
}
