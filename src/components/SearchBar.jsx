// this should have an input
// When selected from the search bar should load the map. pass the the data as state for the map
import searchData from "./../data/index.json";
import { styled } from "styled-components";
import { useState } from "react";
const SearchInput = styled.input``;
export default function SearchBar(props) {
  const [indexingData, setIndexingData] = useState(searchData);
  const [searchField, setSearchField] = useState("");
  // INFO: here should be a function that reads the indexing info
  return (
    <>
      <SearchInput
        value={searchField}
        onChange={(e) => setSearchField(e.target.value)}
      />
      <div>
        {/* TODO: This div should contain 5 lines of matches, and the letters of the match should be bold */}
      </div>
    </>
  );
}
