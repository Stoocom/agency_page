import React from 'react';
import './Catalog.css';
import Categories from "./Categories";
import Services from "./Services";


export const Catalog = () => {
  return (
      <div className="catalog">
          <Categories />
          <Services />
      </div>
  );
}

