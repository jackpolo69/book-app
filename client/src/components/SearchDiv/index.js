import React from "react";
import "./style.css";

function SearchInput()    {
    return (
        <input id="SearchBar" type="text">
        </input>
    );
};

function SearchButton(props) {
    return (
        <button type="submit" id="SearchButton" onClick={(event) =>  props.searchBooks(event)}>
            Search Google Books
        </button>
    );
};

function SearchDiv(props)   {
    return (
        <div id="SearchDiv">
            <h1> 
                Book Search 
            </h1>
            <SearchInput />
            <SearchButton searchBooks={props.searchBooks}/>
        </div>
    );
};

export default SearchDiv;