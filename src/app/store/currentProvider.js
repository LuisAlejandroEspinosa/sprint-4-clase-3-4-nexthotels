'use client'
import { createContext, useState } from "react";

export const AppContext= createContext()

export const CurrentPageProvider = ({children}) => {
    const [currentPage, setCurrenPage] = useState('Home')

    const setDetailPage = () =>{
        setCurrenPage('Detail')
    };

    const setHomePage = () =>{
        setCurrenPage('Home')
    };


    return (
        <AppContext.Provider value={{currentPage, setDetailPage, setHomePage }}>
            {children}
        </AppContext.Provider>
    )
}