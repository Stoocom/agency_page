import React, { createContext, useReducer } from 'react';
import {categories} from "../components/Catalog/Categories/Categories";

const servicesList = [
    {
        id: 1,
        category_id: 2,
        category: 'Design',
        name: "Sofa",
        url: "Bitmap-8",
    },
    {
        id: 2,
        category_id: 3,
        category: 'Branding',
        name: "KeyBoard",
        url: "Bitmap-2",
    },
    {
        id: 3,
        category_id: 4,
        category: 'Illustration',
        name: "WorkMedia",
        url: "Bitmap-3",
    },
    {
        id: 4,
        category_id: 5,
        category: 'Motion',
        name: "DDDone",
        url: "Bitmap-4",
    },
    {
        id: 5,
        category_id: 2,
        category: 'Design',
        name: "Abstract",
        url: "Bitmap-5",
    },
    {
        id: 6,
        category_id: 3,
        category: 'Branding',
        name: "HandP",
        url: "Bitmap-6",
    },
    {
        id: 7,
        category_id: 5,
        category: 'Motion',
        name: "Architec",
        url: "Bitmap-7",
    },
    {
        id: 8,
        category_id: 2,
        category: 'Design',
        name: "CalC",
        url: "Bitmap-8",
    },
    {
        id: 9,
        category_id: 3,
        category: 'Branding',
        name: "Sport",
        url: "Bitmap-9",
    },
]

export interface IService {
    id: number,
    category_id: number,
    category: string,
    name: string,
    url: string,
}

interface InitialStateType {
    filtered: IService[],
    filteredCurrentId: number
}

const initialState = { filtered: servicesList, filteredCurrentId: 1 };

const ServicesContext = createContext<{
    state: InitialStateType;
    dispatch: React.Dispatch<any>;
}>({
    state: initialState,
    dispatch: () => null
})

function reducer(state: InitialStateType, action: any): any {
    switch (action.type) {
        case 'CHANGE_CATEGORY':
            console.log('Started change_category');
            let newArray = [ ...state.filtered];
            const findId = newArray.findIndex((prod) => prod.id === action.payload.id);
            let newObj = { ...newArray[findId]}
            if (findId >= 0) {
                if (action.payload.category_id === 5) {
                    newObj.category_id = 2;
                    newObj.category = "Design";
                } else {
                    newObj.category_id = action.payload.category_id + 1;
                    newObj.category = categories[action.payload.category_id].title;
                }
            }
            const newList = newArray.map(o => {
                if (o.id === newObj.id) {
                    return newObj;
                }
                return o;
            });
            return { ...state, filtered: newList};
        case 'REMOVE_CARD_BY_ID':
            console.log('Started remove_card');
            console.log(action.payload);
            let newArray2 = [ ...state.filtered];
            const findId2 = newArray2.findIndex((prod) => prod.id === action.payload);
            if (findId2 >= 0) {
                newArray2.splice(findId2, 1);
            }
            console.log(newArray2);
            return { ...state,  filtered: [ ...newArray2]};
        case 'ADD_TEN_ITEMS_TO_FILTERED':
            console.log('Started add ten cards');
            let newArray3 = [ ...state.filtered];
            return { ...state, filtered: [ ...newArray3.concat(action.payload)]};
        case 'CHANGE_FILTER_CURRENT_ID':
            console.log('Started change filter ID');
            return { ...state, filteredCurrentId: action.payload};
        default:
            return state;
    }
}

export function ServicesProvider({children}: any) {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ServicesContext.Provider value={{state, dispatch}}>
            {children}
        </ServicesContext.Provider>
    )
}

export default ServicesContext
