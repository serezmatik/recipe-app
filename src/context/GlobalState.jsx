import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from './AppReducer'
const initialState={
    favourites:localStorage.getItem('favourites') ? JSON.parse(localStorage.getItem('favourites')) :[]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = (props) =>{
    const[state,dispatch] = useReducer(AppReducer, initialState)

useEffect(()=>{
    localStorage.setItem('favourites',JSON.stringify(state.favourites))
}, [state])

    const AddRecipeToFavourites = name =>{
        dispatch({type:'ADD_TO_FAVORITES', payload:name})
    }

    return (
        <GlobalContext.Provider value={{favourites: state.favourites, AddRecipeToFavourites}}>
            {props.children}
        </GlobalContext.Provider>
    )
}