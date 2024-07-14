import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Header,MoviesCard } from "../Components";

import MainContext from '../Context/MainContext.js';
import "./styles/SearchPage.sass";
import MobileMenu from "../Components/MobileMenu/MobileMenu.jsx";
const SearchPage = () => {
    const location = useLocation();
    const searchText = location.state?.searchText;
    const searchTextUpper = searchText.toUpperCase();
    const { data } = useContext(MainContext);

    const filteredData = data.filter((item) => item.title.toUpperCase().includes(searchTextUpper));
    return(
        <section className="search-page">
            <Header/>
            <h1>
                Search: {searchText && <span>{searchText} </span>} 

            </h1>
    
            <div className="movies-card-container">
                {filteredData
                .map((item, index) => {
                    return(
                        
                        <MoviesCard 
                            key={index} 
                            id={index + 1} 
                            title={item.title}
                            titleType={item.titleType}
                            year={item.year}
                            image={item.image.url}
                            searchText={searchText}/>
                    )
                })}
            </div>
            {
                window.screen.width < 765 && <MobileMenu/>
            }

        </section>
    )
}

export default SearchPage;
