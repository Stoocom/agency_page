import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PortfolioPage from "./pages/PortfolioPage";
import { ServicesProvider } from "./context/ServicesProvider";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
      <ServicesProvider>
          <PortfolioPage />
      </ServicesProvider>
);

