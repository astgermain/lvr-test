import { useState, useEffect, useContext } from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch";

// import BaseHit from 'algoliasearch'

// interface AlgoliaHits extends BaseHit {
//   hit: AlgoliaHit;
// };

// interface AlgoliaHit {
//   record?: iRecord;
// };

// interface iRecord {
//   listing_name?: any;
//   created_at?: any;
//   id?: any;
//   image?: any;
//   categories?: any;
//   price?: any;
// }

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || "",
  process.env.NEXT_PUBLIC_ALGOLIA_WRITE_API_KEY || ""
);

function Hit({ hit }: any) {
  return (
    <article>
      <img src={hit?.record?.image} alt={hit?.record?.listing_name} />
      <p>{hit?.record?.categories?.[0]}</p>
      <h1>{hit?.record?.listing_name}</h1>
      <p>${hit?.record?.price}</p>
    </article>
  );
}

const Search = ({ children }: any) => {
  return (
    <InstantSearch searchClient={searchClient} indexName="lvr-test-index">
      <SearchBox />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  );
};

export default Search;
