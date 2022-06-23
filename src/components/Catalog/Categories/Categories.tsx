import React, {useContext, useEffect, useState} from 'react';
import './Categories.css';
import ServicesContext from "../../../context/ServicesProvider";
import Checkbox from "../../Checkbox";

export const categories = [
    {
        id: 1,
        title: "Show All"
    },
    {
        id: 2,
        title: "Design"
    },
    {
        id: 3,
        title: "Branding"
    },
    {
        id: 4,
        title: "Illustration"
    },
    {
        id: 5,
        title: "Motion"
    },
]

export interface ICategory {
    id: number;
    title: string;
}


export const Categories = () => {
    const { state, dispatch } = useContext(ServicesContext);
    //const [ categoryIndex, setCategoryIndex] = useState<number>(1);
    const [ categoryList ] = useState<ICategory[]>(categories);

    // const filterByCategoryId = (category_id: number) => {
    //     setCategoryIndex(category_id);
    // }

    return (
        <>
            <div className="category__content">
                {
                    categoryList.map((item: ICategory, index: number) => {
                        return (
                            <div
                                key={index}
                                className={ item.id === state.filteredCurrentId ? "category__active" : "category__item" }
                                onClick={() => {
                                    //filterByCategoryId(index+1);
                                    dispatch({ type: 'CHANGE_FILTER_CURRENT_ID', payload: item.id });
                                }}
                            >
                                {item.title}
                            </div>
                        )
                    })
                }
            </div>
            <div className="category__content_check">
                <Checkbox />
            </div>
        </>
    );
}

