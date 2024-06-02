"use client";
import type { ReactElement } from "react";
import Layout from "./layout";
import type { NextPageWithLayout } from "./_app";
import HomePage from "../components/HomePage";
import { createClient } from "../utils/supabase/server";

const Page: NextPageWithLayout = () => {
  return <HomePage />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;