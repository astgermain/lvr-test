import { useState, useEffect, useContext } from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch";

const Search = ({ children }: any) => {
  return (
    <div style={{ background: "white" }}>
      <SearchBox />
    </div>
  );
};

export default Search;
