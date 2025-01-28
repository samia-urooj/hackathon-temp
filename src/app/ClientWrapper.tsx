"use client";

import React from "react";
import CartProvider from "./cartProvider";
import Header from "./components/header";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return <CartProvider>
    <Header/>
    {children}</CartProvider>;
}