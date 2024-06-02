"use client";
import React from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
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
          <main>
            <Banner />
            <section
              style={{
                padding: "2rem 0 ",
                margin: "1rem auto",
                maxWidth: "1200px",
                display: "flex",
              }}
            >
              {children}
            </section>
          </main>
          <Footer />
        </InstantSearch>
      </body>
    </html>
  );
}
