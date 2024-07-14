import React, {useState} from "react";
import data from "../assets/MainData.json";
import MainContext from "./MainContext";
const MainProvider = ({ children }) => {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");
    return (
        <MainContext.Provider value={{ data, isVideoModalOpen, setIsVideoModalOpen, videoUrl, setVideoUrl }}>
            {children}
        </MainContext.Provider>
    );
};

export default MainProvider;