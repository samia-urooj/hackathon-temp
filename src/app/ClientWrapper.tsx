"use client";

import React from "react";
import CartProvider from "./cartProvider";


export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return <CartProvider>
   
    {children}</CartProvider>;
}