import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    const handleClick = () => {
        if(searchText === ''){
            return;
        }
        navigate("/search", { state: { searchText: searchText } });
        setSearchText('');
    };

    const handleKeyDown = (event) => {
        if(event.key === 'Enter'){
            handleClick();
        }
    }

    return (
        <div className="search">
            <span className='mic'><FontAwesomeIcon icon={faMicrophone} /></span>
            <input
                value={searchText}
                type="text"
                placeholder="Search"
                onInput={e => setSearchText(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <div className='search-buts' onClick={handleClick}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
        </div>
    );
};

export default Search;
