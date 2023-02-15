import React, { useRef } from "react";
import styled from "styled-components";

import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Bluemians</h3>
      <nav ref={navRef}>
        <a href="/#">애터미 소개</a>
        <a href="/#">제품</a>
        <a href="/#">마켓팅 플랜</a>
        <a href="/#">블루미언즈 소개</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default NavBar;
