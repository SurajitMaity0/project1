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
    let moods = ['happy', 'sad', 'sleepy', 'angry']
    let grammar = '#JSGF V1.0; grammar moods; public <moods> = ' + moods.join(' | ') + ';';
    let recognition = new window.webkitSpeechRecognition()
    let recognitionList = new window.webkitSpeechGrammarList()
    recognitionList.addFromString(grammar, 1)
    recognition.grammars = recognitionList
    recognition.lang = 'en-US'
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    
    const startSpeechRecognition = () => {
        recognition.start()
        recognition.onresult = (event) => {
            //handle result in here
            let word = event.results[0][0].transcript
            console.log(word);
        }
    }

    return (
        <div className="search">
            <span className='mic' onClick={startSpeechRecognition}><FontAwesomeIcon icon={faMicrophone} /></span>
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
