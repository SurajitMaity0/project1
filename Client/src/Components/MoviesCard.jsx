import React from "react";
import "./MoviesCard.sass"

const MoviesCard = ({id, title, searchText}) => {
    const matchStart = title.toUpperCase().search(searchText.toUpperCase());
    const matchEnd = matchStart + searchText.length;

    return(
        <div className="movies-card">
            <span>{id}.</span> 
            <span>{title.slice(0, matchStart)}</span>
            <span className="highlight">{title.slice(matchStart, matchEnd)}</span>
            <span>{title.slice(matchEnd)}</span>
            <br/>
        </div>
    )
}

export default MoviesCard;