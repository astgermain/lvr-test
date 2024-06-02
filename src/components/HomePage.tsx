import { InstantSearch, SearchBox, Hits } from "react-instantsearch";
import { convertPriceToUSD } from "../lib/utils";

const HomePage = () => {
  function Hit({ hit }: any) {
    const priceInUSD = convertPriceToUSD(hit?.record?.price || 0);
    return (
      <article>
        <img
          src={hit?.record?.image || "https://placehold.co/400"}
          alt={hit?.record?.listing_name}
        />
        <h1>{hit?.record?.listing_name}</h1>
        <p>{priceInUSD}</p>
      </article>
    );
  }
  return (
    <main>
      <div style={{ margin: "1rem auto", maxWidth: "800px" }}>
        <Hits hitComponent={Hit} />
      </div>
    </main>
  );
};

export default HomePage;
