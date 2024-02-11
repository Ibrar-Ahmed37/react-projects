import React, { useEffect, useRef, useState } from "react";
import { AppBar } from "@mui/material";
export const SearchImage = (props) => {
  const [value, setValue] = useState(20);
  const inputRef = useRef(null);

  const handleValueChange = (event) => {
    setValue(event.target.value);
    props.setMaxCount(event.target.value);
  };


  useEffect(()=>{
    inputRef.current.focus();
  })


  return (
    <div className="search-section">
      <AppBar className="header-section">Pixabay Images Search </AppBar>
      <input
      ref={inputRef}
        className="text-search"
        value={props.searchText}
        onChange={(e) => props.handleSearchTextChange(e.target.value)}
      />
      <select id="select" value={value} onChange={handleValueChange}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </div>
  );
};
