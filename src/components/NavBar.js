import React, { useRef } from "react";
import styled from "styled-components";

import { FaBars, FaTimes } from "react-icons/fa";

const Logo = styled.a`
  font-size: 30px;
  color: white;
  text-decoration: none;
`;

const NavBar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>
        <Logo href="/">Bluemians</Logo>
      </h3>
      <nav ref={navRef}>
        <a href="/AtomyIntroduction">애터미 소개</a>
        <a href="/Product">제품</a>
        <a href="/MarketingPlan">마켓팅 플랜</a>
        <a href="/BluemiansIntroduction">블루미언즈 소개</a>
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
