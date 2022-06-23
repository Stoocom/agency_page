import React from 'react';
import './PortfolioPage.css';
import Header from "../../components/Header/Header";
import Catalog from "../../components/Catalog";

export const PortfolioPage = () => {
    return (
        <div className="container">
            <Header/>
            <Catalog/>
        </div>
    );
}

