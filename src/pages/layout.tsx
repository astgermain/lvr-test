import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch";
import algoliasearch from "algoliasearch/lite";

const inter = Inter({ subsets: ["latin"] });

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || "",
  process.env.NEXT_PUBLIC_ALGOLIA_WRITE_API_KEY || ""
);

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <InstantSearch searchClient={searchClient} indexName="lvr-test-index">
        <Header />
        {children}
        <Footer />
      </InstantSearch>
    </React.Fragment>
  );
}
