import React, { useContext } from "react";
import './Styles/VideoModal.sass'
import { faClose } from "@fortawesome/free-solid-svg-icons";
import MainContext from "../../Context/MainContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VideoModal = () => {
    const { setIsVideoModalOpen, videoUrl } = useContext(MainContext);
    const handleClose = () => {
        setIsVideoModalOpen(false);
    }
    return (
        <div className="video-modal">
            <div className="close-btn" onClick={handleClose}>
                <FontAwesomeIcon icon={faClose} />
            </div>
            <div className="video-container">
                <video controls>
                    <source src={videoUrl} type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}

export default VideoModal;