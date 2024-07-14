import React from "react";
import "./MoviesCard.sass"

const MoviesCard = ({id, title,titleType, year,image,searchText}) => {
    const matchStart = title.toUpperCase().search(searchText.toUpperCase());
    const matchEnd = matchStart + searchText.length;

    

    return(
        <div className="movies-card">
            {/* <span className="item-id">{id}</span>  */}
            <div className="image-card">
                <img src={image} alt={title} />
            </div>
            <div className="title">
                <div className="title-name">
                    <span>{title.slice(0, matchStart)}</span>
                    <span className="highlight">{title.slice(matchStart, matchEnd)}</span>
                    <span>{title.slice(matchEnd)}</span>
                </div>
                <div className="title-type">
                    <span>{titleType.toUpperCase()}</span>
                    <span>{year}</span>
                </div>

            </div>
            <br/>
        </div>
    )
}

export default MoviesCard;