import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

function Layout({ children }) {
  return (
    <div
      className={`${inter.variable} flex min-h-screen w-full flex-col items-center bg-zinc-900 font-sans text-slate-100`}
    >
      <Navbar />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
