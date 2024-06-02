"use client";
import React from "react";
import { Inter } from "next/font/google";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch";
import algoliasearch from "algoliasearch/lite";
import "./globals.css";

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
    <html lang="en">
      <body className="bg-background text-foreground">
        <InstantSearch searchClient={searchClient} indexName="lvr-test-index">
          <Header />
          <main style={{ margin: "1rem auto", maxWidth: "1200px" }}>
            {children}
          </main>
          <Footer />
        </InstantSearch>
      </body>
    </html>
  );
}
