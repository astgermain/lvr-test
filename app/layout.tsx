"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch";
import algoliasearch from "algoliasearch/lite";
import "./globals.css";
import { createClient } from "../utils/supabase/client";
import { usePathname } from "next/navigation";

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
  const [user, setUser] = useState(null);
  const supabase = createClient();
  const router = usePathname();

  const getUser = async () => {
    const userData = await supabase.auth.getUser();
    setUser(userData?.data?.user);
    return userData;
  };

  useEffect(() => {
    getUser();
  }, [router]);

  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <InstantSearch searchClient={searchClient} indexName="lvr-test-index">
          <Header user={user} />
          <main>
            <Banner />
            <section
              style={{
                padding: "2rem 0 ",
                margin: "1rem auto",
                maxWidth: "1200px",
                display: "flex",
                justifyContent: "center",
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
