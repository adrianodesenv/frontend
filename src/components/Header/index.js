import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

import "./styles.css";

import logo from "../../assets/Instagram_logo.svg";

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <Link to="/">
          <img className="logo" src={logo} alt="InstaRocket" />
        </Link>
        <Link to="/adicionarFeed">
          <FaPlus size="24" color={"#000"}></FaPlus>
        </Link>
      </div>
    </header>
  );
}
