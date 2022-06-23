import React, { useContext } from 'react';
import './Services.css';
import ServicesContext, {IService} from "../../../context/ServicesProvider";
import Card from "../Card";
import LoadButton from "../../UI/Buttons/LoadButton";

const addedList = [
    {
        id: 10,
        category_id: 2,
        category: 'Design',
        name: "Sofa2",
        url: "Bitmap-8",
    },
    {
        id: 11,
        category_id: 3,
        category: 'Branding',
        name: "KeyBoard2",
        url: "Bitmap-2",
    },
    {
        id: 12,
        category_id: 4,
        category: 'Illustration',
        name: "WorkMedia3",
        url: "Bitmap-3",
    },
    {
        id: 13,
        category_id: 5,
        category: 'Motion',
        name: "DDDone2",
        url: "Bitmap-4",
    },
    {
        id: 14,
        category_id: 2,
        category: 'Design',
        name: "Abstract2",
        url: "Bitmap-5",
    },
    {
        id: 15,
        category_id: 3,
        category: 'Branding',
        name: "HandP2",
        url: "Bitmap-6",
    },
    {
        id: 16,
        category_id: 5,
        category: 'Motion',
        name: "Architec2",
        url: "Bitmap-7",
    },
    {
        id: 17,
        category_id: 2,
        category: 'Design',
        name: "CalC2",
        url: "Bitmap-8",
    },
    {
        id: 18,
        category_id: 3,
        category: 'Branding',
        name: "Sport2",
        url: "Bitmap-9",
    },
]

export const Services = () => {
    const { state, dispatch } = useContext(ServicesContext);

    const addNextTenServiceList = () => {
        dispatch({ type: 'ADD_TEN_ITEMS_TO_FILTERED', payload: addedList });
    }

    return (
        <>
            <div className="services__content">
                {
                    state.filtered &&
                    state.filtered.map((item: IService, index: number) => {
                        if (state.filteredCurrentId === 1) {
                            return (
                                <Card
                                    key={index}
                                    item={item}
                                />
                            )
                        } else {
                            if (state.filteredCurrentId === item.category_id) {
                                return (
                                    <Card
                                        key={index}
                                        item={item}
                                    />
                                )
                            } else {
                                return null
                            }
                        }
                    })
                }
            </div>
            <div className="services__button">
                <LoadButton
                    title={"Load more"}
                    handleClick={addNextTenServiceList}
                />
            </div>

        </>
        
        
    );
}

