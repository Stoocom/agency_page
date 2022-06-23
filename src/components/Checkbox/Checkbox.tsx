import React, {useContext, useState} from 'react';
import './Checkbox.css';
import {categories, ICategory} from "../Catalog/Categories/Categories";
import ServicesContext from "../../context/ServicesProvider";
import Triangle from '../../../src/assets/images/triangle_checkbox.svg'
import CheckboxItem from "./CheckboxItem";


export const Checkbox = () => {
    const { state } = useContext(ServicesContext);
    const [isOpen, setOpen] = useState<boolean>(false);
    const [ checkList ] = useState<ICategory[]>(categories);

    const handleOpen = () => setOpen(!isOpen);

    return (
        <div className="checkbox_content">
            <div className="checkbox_toggleButton" onClick={handleOpen}>
                <div style={{ marginLeft: '16px'}}>
                    {categories && state.filteredCurrentId && categories[state.filteredCurrentId-1].title}
                </div>
                <div style={{ marginRight: '16px'}}>
                    <img src={Triangle} alt='triangle' />
                </div>
            </div>

            <div className="checkbox_items_container">
                {
                isOpen && (
                        <div className="checkbox_item_main">
                            { checkList &&
                                checkList.map((item, index) => {
                                    return (
                                        <CheckboxItem
                                            key={index}
                                            id={item.id}
                                            title={item.title}
                                            handleOpen={handleOpen}
                                        />
                                    )
                                })
                            }
                        </div>
                    )
                }
            </div>

        </div>
    );
}

