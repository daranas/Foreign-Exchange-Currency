import React from 'react';
import './Header.css';

const Header = props => {
  return (
    <header className="ovo-header">
      <div className="logo">
        <img src={props.logo} alt="OVO Foreign Exchange"/>
      </div>
    </header>
  );
}

export default Header;