import React from 'react';
import './Header.css';
import Menu from "./Menu";
import PageInfo from "./PageInfo";

export const Header = () => {
  return (
      <div className="header">
          <Menu/>
          <PageInfo/>
      </div>
  );
}

export default Header;
