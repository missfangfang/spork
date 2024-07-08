import { Metadata } from "next";
import PageClient from "./page.client";

export const metadata: Metadata = {
  title: 'Login',
};

export default function Page() {
  return <PageClient />
};
