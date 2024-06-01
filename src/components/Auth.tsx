import { useState, useEffect, useContext } from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch";
import { Props } from "../../node_modules/next/script";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || '',
  process.env.NEXT_PUBLIC_ALGOLIA_WRITE_API_KEY || ''
);

function Hit({ hit }) {
  return (
    <article>
      <img src={hit?.image} alt={hit?.record.listing_name} />
      <p>{hit?.categories?.[0]}</p>
      <h1>{hit?.name}</h1>
      <p>${hit?.price}</p>
    </article>
  );
}

const Auth = ({ children }: Props) => {
  return (
    <InstantSearch searchClient={searchClient} indexName="lvr-test-index">
      <SearchBox />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  );
};

export default Auth;
