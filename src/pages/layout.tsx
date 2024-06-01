import type { Metadata } from "next";
import React from 'react'
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
        <Header />
        YOOOO
        {children}
        <Footer />
    </React.Fragment>
  );
}
