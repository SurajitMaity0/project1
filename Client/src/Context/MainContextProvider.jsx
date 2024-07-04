import React from "react";
import data from "../assets/MainData.json";
import MainContext from "./MainContext";
const MainProvider = ({ children }) => {
    return (
        <MainContext.Provider value={{ data }}>
            {children}
        </MainContext.Provider>
    );
};

export default MainProvider;