import React from "react";

function SearchButton(props) {
  return (


<div class="form-group row mt-2 mx-auto">
    <div class="col-12">
      <button type="submit" class="btn btn-secondary" id="searchbutton" onClick={(event) =>  props.searchBooks(event)}>Search Books</button>
    </div>
  </div>


  );
}

export default SearchButton;
