import React, { useContext } from 'react';
import './CheckboxItem.css';
import ServicesContext from "../../../context/ServicesProvider";

export interface ICheck {
    id: number,
    title: string,
    handleOpen: (bool: boolean) => void
}

export const CheckboxItem = ({ title, id, handleOpen }: ICheck) => {
    const { dispatch } = useContext(ServicesContext);
    return (
        <div
            className="checkbox_item"
            onClick={() => {
                handleOpen(false)
                dispatch({ type: 'CHANGE_FILTER_CURRENT_ID', payload: id })
            }}
        >
            <div style={{ marginLeft: '16px'}}>
                {title}
            </div>
        </div>
    );
}