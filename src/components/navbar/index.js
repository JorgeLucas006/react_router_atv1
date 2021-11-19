import React from "react";
import "./style.css";
import { useRef } from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
  const list = useRef(null);
  const button = useRef(null);

  const onClick = () => {
    const span = list.current; // corresponding DOM node
    const btn = button.current; // corresponding DOM node
    var css = span.className === "navbar-list active" ? "none" : "active";
    var cssBtn = btn.className === "active" ? "" : "active";
    span.className = "navbar-list " + css;
    btn.className = cssBtn;
  };

  return (
    <nav>
      <div>
        <span className="navbar-title">
          <Link to="/">AniCloud</Link>
        </span>
        <ul className="navbar-list" ref={list}>
          <Link to="/musica">
            <li>Musica</li>
          </Link>
          <Link to="/cidade">
            <li>Cidade</li>
          </Link>
        </ul>
        <button onClick={onClick}>
          <span id="hamburguer" ref={button}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
