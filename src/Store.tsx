import React, { useState, createContext } from "react"

const initialState = {
    selectedCategory: undefined,
    selectedGoal: undefined,
}

export const GlobalContext = React.createContext(initialState);

export default ({children}) => {
    const [state, setState] = useState(initialState);

    return (
        <GlobalContext.Provider value={[state, setState]}>
            {children}
        </GlobalContext.Provider>
    )
}