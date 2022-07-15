import React, { useState, createContext } from "react"

const initialState = {
    selectedCategory: undefined,
    selectedGoal: undefined,
    firstStepStatus: "progress",
    // goalCriteria: "c",
    // goalDeadline: "2022-07-07",
    // goalReason: "r"
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