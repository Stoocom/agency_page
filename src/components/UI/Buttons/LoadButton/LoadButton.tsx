import React from 'react';
import './LoadButton.css';

export const LoadButton = ({ title, handleClick }: { title: string, handleClick: () => void }) => {
  return (
        <div
            className="button__content"
            onClick={() => {
                handleClick()
            }}
        >
            <div className="button__a">
                {title}
            </div>
        </div>
  );
}

