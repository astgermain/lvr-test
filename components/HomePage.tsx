import { InstantSearch, SearchBox, Hits } from "react-instantsearch";
import React, { useState, useEffect } from "react";
import { convertPriceToUSD, getRandomNumber } from "../utils/utils";
import Image from "next/image";

const HomePage = () => {
  const [images, setImages] = useState<string[]>([]);
  function Hit({ hit }: any) {
    const priceInUSD = convertPriceToUSD(hit?.record?.price || 0);
    const defaultImageUrl = `https://picsum.photos/250/250?random=${getRandomNumber()}`;
    return (
      <article>
        <Image
          loader={() => defaultImageUrl}
          src={hit?.record?.image || defaultImageUrl}
          width={250}
          height={250}
          alt={hit?.record?.listing_name}
        />
        <h1>{hit?.record?.listing_name}</h1>
        <p>{priceInUSD}</p>
      </article>
    );
  }
  return (
    <section>
      <Hits hitComponent={Hit} />
    </section>
  );
};

export default HomePage;
