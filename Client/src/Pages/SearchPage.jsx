import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../Components";
import MoviesCard from "../Components/MoviesCard";
import MainContext from '../Context/MainContext.js';

const SearchPage = () => {
    const location = useLocation();
    const searchText = location.state?.searchText;
    const searchTextUpper = searchText.toUpperCase();
    const { data } = useContext(MainContext);
    
    return(
        <section>
            <Header/>
            <h1>
                Search: {searchText && <span>{searchText}</span>}
            </h1>
            <div className="movies-card-container">
                {data.filter((item) => item.title.toUpperCase().includes(searchTextUpper))
                .map((item, index) => {
                    return(
                        <MoviesCard 
                            key={index} 
                            id={index + 1} 
                            title={item.title} 
                            searchText={searchText}/>
                    )
                })}
            </div>
            
        </section>
    )
}

export default SearchPage;
