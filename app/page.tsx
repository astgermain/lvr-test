"use client";
import type { ReactElement } from "react";
import Layout from "./layout";
import type { NextPageWithLayout } from "./_app";
import HomePage from "../components/HomePage";
import { createClient } from "../utils/supabase/server";
import { Analytics } from "@vercel/analytics/react";

const Page: NextPageWithLayout = () => {
  return <HomePage />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Analytics />
      {page}
    </Layout>
  );
};

export default Page;
