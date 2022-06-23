import React, {useState, useContext, useEffect} from 'react';
import './Card.css';
import ServicesContext, {IService} from "../../../context/ServicesProvider";

export const Card = ({item}: {item: IService}) => {
    const { dispatch } = useContext(ServicesContext);
    const [isOpenGreenBorder, toggleOpenGreenBorder] = useState<boolean>(false);

    return (
        <div
            className={isOpenGreenBorder ? "card card__border" : "card"}
            onClick={(event) => {
                event.stopPropagation()
                toggleOpenGreenBorder(!isOpenGreenBorder)
            }}
        >
            <img
                className={'card_image'}
                src={require('../../../assets/images/' + item.url + '.jpg')}
                alt={"imageCard"}
            />
            <div
                className="card__button"
                onClick={(event) => {
                    event.stopPropagation()
                    dispatch({ type: 'CHANGE_CATEGORY', payload: item })
                }}
            >
                {item.category}
            </div>
            <div className="card__title">
                {item.name}
            </div>
            {
                isOpenGreenBorder &&
                <div
                    className="card__close"
                    onClick={(event) => {
                        event.stopPropagation()
                        console.log("open removeble");
                        dispatch({ type: 'REMOVE_CARD_BY_ID', payload: item.id });
                        toggleOpenGreenBorder(false);
                    }}
                >
                    Del
                </div>
            }
        </div>
    );
}

