import React from 'react';
import './Menu.css';
import Logo from '../../../assets/images/logo_header.svg'

export const Menu = () => {
  return (
    <div className="content">
        <a href='/' className="logo">
            <img src={Logo} alt='logo_header' />
        </a>
        <ul className="buttonsGroup">
            <li className="item_button">
                <a href='/' className="link">
                    About
                </a>
            </li>
            <li className="item_button">
                <a href='/' className="link">
                    Services
                </a>
            </li>
            <li className="item_button">
                <a href='/' className="link">
                    Pricing
                </a>
            </li>
            <li className="item_button">
                <a href='/' className="link">
                    Blog
                </a>
            </li>
        </ul >
        <div className="contact">
            <a href='/' className="contact__button">
                Contact
            </a>
        </div>
    </div>
  );
}

